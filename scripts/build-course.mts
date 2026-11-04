// build-course.mts — junta os fontes por idioma num courses/<id>.json.
//
// Um curso é escrito como N lições × M idiomas. Cada
// `courses-src/<id>/<nn>.<lang>.ts` traz a lição num idioma só; este script
// junta as três cópias no documento que o app carrega, e é quem calcula o
// contentVersion junto com o exportador.
//
// Por que não escrever o curso direto no JSON: 117 kB de JSON com pt/en/es
// lado a lado é ilegível e impossível de revisar. Por que não escrever num
// `build-zh.mts` monolítico com os três idiomas adjacentes: para acrescentar a
// lição 24 é preciso manter 87 kB no contexto, e a lição nova nasce mal
// revisada porque o padrão dela está diluído em 23 outras. O formato por
// lição e por idioma é o que torna o trabalho dividível.
//
//   bun run scripts/build-course.mts <id>
//   bun run scripts/build-course.mts <id> --only 9      # confere a lição 9
//   bun run scripts/build-course.mts <id> --check      # o que está em disco bate? (CI)
//   bun run scripts/build-course.mts <id> --force      # reescreve o destino
//
// Sem --force, um destino existente não é sobrescrito: conteúdo escrito à mão é
// mais valioso que o gerador. Verifica e sai.
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { declarar, ehMarcado, ehVocab } from '../courses-src/shared.mts';

const LANGS = ['pt', 'en', 'es'] as const;

const args = process.argv.slice(2);
const id = args.find((a) => !a.startsWith('--'));
if (!id) {
  console.error('uso: bun run scripts/build-course.mts <id> [--only N] [--check] [--force]');
  process.exit(1);
}
const soA = args.includes('--only') ? Number(args[args.indexOf('--only') + 1]) : null;
const force = args.includes('--force');

// --check não escreve: é o portão de CI, e precisa poder rodar sobre um curso
// cujo destino está committed.
const soCheck = args.includes('--check');

const SRC = join(import.meta.dir, '..', 'courses-src', id);
const ALVO = join(import.meta.dir, '..', 'courses', `${id}.json`);

if (!existsSync(SRC)) {
  console.error(`não há fonte em courses-src/${id}/`);
  process.exit(1);
}
if (existsSync(ALVO) && !force && soA === null && !soCheck) {
  console.log(`courses/${id}.json já existe — nada escrito (use --force para regenerar).`);
  process.exit(0);
}

// ---------------------------------------------------------------------------
// Merger
// ---------------------------------------------------------------------------

type Erro = { caminho: string; msg: string };
const erros: Erro[] = [];
const avisar = (caminho: string, msg: string) => erros.push({ caminho, msg });

/**
 * A língua que o curso ensina. Não é o id: `grc-mod` e `pt-gram` ensinam
 * grego e português, e é o código de língua que o dicionário de morfologia
 * procura. Sai do próprio curso, que já declara `lang`, para que a fonte
 * Written não precise repetir o dado.
 */
const LINGUA = (JSON.parse(readFileSync(ALVO, 'utf8')) as { lang?: string }).lang ?? id;
if (!/^[a-z]{2,3}(-[a-z]+)?$/.test(LINGUA)) {
  console.error(`courses/${id}.json declara lang="${LINGUA}", que não é um código ISO 639-3`);
  process.exit(1);
}

/**
 * Junta uma lição nos três idiomas, verificando que as árvores batem.
 *
 * A verificação não é decorativa: é o que substitui a leitura de três textos
 * lado a lado. `id`, `kind`, `answer`, `form` e `lemma` não são traduzidos, e
 * um erro de digitação neles não aparece em nenhum idioma — só aqui.
 */
const juntar = (pt: unknown, en: unknown, es: unknown, caminho: string): unknown => {
  if (ehVocab(pt) || ehVocab(en) || ehVocab(es)) {
    if (!(ehVocab(pt) && ehVocab(en) && ehVocab(es))) {
      avisar(caminho, 'entrada de vocabulário presente em alguns idiomas e não em outros');
      return pt;
    }
    for (const k of ['form', 'lemma'] as const) {
      if (pt[k] !== en[k] || pt[k] !== es[k]) {
        avisar(`${caminho}.${k}`, `divergiu entre idiomas: pt=${pt[k]} en=${en[k]} es=${es[k]}`);
      }
    }
    const gloss = juntar(pt.gloss, en.gloss, es.gloss, `${caminho}.gloss`) as Record<
      string,
      string
    >;
    return { form: pt.form, lemma: pt.lemma, lang: LINGUA, ...gloss };
  }
  if (ehMarcado(pt) || ehMarcado(en) || ehMarcado(es)) {
    if (!(ehMarcado(pt) && ehMarcado(en) && ehMarcado(es))) {
      avisar(caminho, 'campo de texto presente em alguns idiomas e não em outros');
      return pt;
    }
    return { pt: pt.text, en: en.text, es: es.text };
  }
  if (Array.isArray(pt)) {
    if (
      !Array.isArray(en) ||
      !Array.isArray(es) ||
      pt.length !== en.length ||
      pt.length !== es.length
    ) {
      avisar(
        caminho,
        `array com tamanhos diferentes: pt=${Array.isArray(pt) ? pt.length : '?'} en=${Array.isArray(en) ? en.length : '?'} es=${Array.isArray(es) ? es.length : '?'}`,
      );
      return pt;
    }
    return pt.map((x, i) => juntar(x, en[i], es[i], `${caminho}[${i}]`));
  }
  if (pt && typeof pt === 'object') {
    const po = pt as Record<string, unknown>;
    const eo = (en ?? {}) as Record<string, unknown>;
    const so = (es ?? {}) as Record<string, unknown>;
    for (const k of new Set([...Object.keys(po), ...Object.keys(eo), ...Object.keys(so)])) {
      if (!(k in po)) avisar(caminho, `campo "${k}" existe em outro idioma e não em pt`);
      else if (!(k in eo)) avisar(caminho, `campo "${k}" existe em pt e não no fonte en`);
      else if (!(k in so)) avisar(caminho, `campo "${k}" existe em pt e não no fonte es`);
    }
    const saida: Record<string, unknown> = {};
    for (const [k, val] of Object.entries(po))
      saida[k] = juntar(val, eo[k], so[k], `${caminho}.${k}`);
    return saida;
  }
  if (pt !== en || pt !== es) {
    avisar(
      caminho,
      `valor não traduzido divergiu: pt=${JSON.stringify(pt)} en=${JSON.stringify(en)} es=${JSON.stringify(es)}`,
    );
  }
  return pt;
};

// ---------------------------------------------------------------------------
// Validador estrutural
// ---------------------------------------------------------------------------

const validar = (licao: any, n: number) => {
  const em = (campo: string, cond: boolean, msg: string) => {
    if (!cond) avisar(`lição ${n}`, `${campo}: ${msg}`);
  };
  em('id', licao.id === n, `id ${licao.id} fora de ordem`);
  for (const k of ['title', 'body', 'vocab', 'exercise']) em(k, !!licao[k], 'ausente');
  if (Array.isArray(licao.vocab)) {
    for (const [i, v] of licao.vocab.entries()) {
      em(`vocab[${i}].form`, !!v.form, 'form vazio');
      em(`vocab[${i}].lemma`, !!v.lemma, 'lemma vazio');
    }
  }
  const exercicios = [...(licao.exercise ? [licao.exercise] : []), ...(licao.exercises ?? [])];
  em('exercise', exercicios.length > 0, 'nenhum exercício');
  exercicios.forEach((ex: any, i: any) => {
    const onde = `exercício ${i}`;
    em(onde, ['choose', 'fill', 'match'].includes(ex.kind), `kind desconhecido "${ex.kind}"`);
    if (ex.kind === 'choose') {
      const n = ex.options?.length ?? 0;
      em(onde, n >= 2 && n <= 4, `${n} opções (esperado 2-4)`);
      const respostas = Array.isArray(ex.answer) ? ex.answer : [ex.answer];
      for (const r of respostas)
        em(onde, typeof r === 'number' && r >= 0 && r < n, `resposta ${r} fora de 0-${n - 1}`);
    }
    if (ex.kind === 'fill') em(onde, typeof ex.answer === 'string', 'answer não é texto');
    if (ex.kind === 'match') {
      const p = ex.pairs ?? [];
      // Dois pares já é um exercício de ligar. O curso de russo publicado tem
      // três assim e passou por toda a vida porque o validador antigo não
      // existia; exigir três rejeita material já publicado.
      em(onde, p.length >= 2, `${p.length} pares (esperado >=2)`);
      const chaves = p.map((x: any) => JSON.stringify(x.a));
      em(onde, new Set(chaves).size === chaves.length, 'pistas repetidas');
    }
  });
  for (const [ti, tab] of (licao.tables ?? []).entries()) {
    const largura = tab.head?.length ?? 0;
    tab.rows?.forEach((linha: any[], ri: number) => {
      em(
        `tabela ${ti} linha ${ri}`,
        linha.length === largura,
        `${linha.length} células, cabeçalho tem ${largura}`,
      );
    });
  }
};

// ---------------------------------------------------------------------------
// Carga
// ---------------------------------------------------------------------------

// Um número por lição, não um por arquivo: cada lição tem um fonte por idioma,
// e sem o Set cada uma contaria três vezes.
const numeros = [
  ...new Set(
    readdirSync(SRC)
      .map((f) => /^(\d+)\./.exec(f)?.[1])
      .filter((x): x is string => !!x)
      .filter((n) => (soA === null ? true : Number(n) === soA)),
  ),
].sort((a, b) => Number(a) - Number(b));

if (numeros.length === 0) {
  console.error(soA === null ? `${SRC} não tem lições` : `não há fonte da lição ${soA}`);
  process.exit(1);
}

const careca = JSON.parse(readFileSync(ALVO, 'utf8'));

const licoes: any[] = [];
for (const nn of numeros) {
  const porIdioma: Record<string, unknown> = {};
  for (const lang of LANGS) {
    const arquivo = join(SRC, `${nn}.${lang}.ts`);
    if (!existsSync(arquivo)) {
      avisar(`lição ${nn}`, `fonte ${lang} ausente (${nn}.${lang}.ts)`);
      continue;
    }
    declarar(lang);
    const mod = await import(arquivo);
    // Um fonte vazio importa sem erro e devolve `default` undefined. Sem esta
    // checagem o merger recebia undefined, a validação crashava em
    // `licao.id`, e a causa real — um arquivo de zero byte — ficava a três
    // stack frames de distância. Já aconteceu uma vez.
    if (!mod.default || typeof mod.default !== 'object') {
      avisar(
        `lição ${nn}`,
        `fonte ${lang} sem default export (${nn}.${lang}.ts está vazio ou não exporta)`,
      );
      continue;
    }
    porIdioma[lang] = mod.default;
  }
  declarar('pt');
  // Se algum idioma falhou, merger e validação receberiam undefined e
  // crashariam em `licao.id` — o aviso acima já diz qual arquivo é.
  if (erros.length) continue;
  const junta = juntar(porIdioma.pt, porIdioma.en, porIdioma.es, `lição ${nn}`);
  validar(junta, Number(nn));
  licoes.push(junta);
}

if (erros.length) {
  console.error(`\n${erros.length} problema(s):`);
  for (const e of erros) console.error(`  ${e.caminho}: ${e.msg}`);
  process.exit(1);
}

const curso = {
  ...careca,
  lessons: soA === null ? licoes : careca.lessons.map((l: any, i: number) => licoes[i] ?? l),
};

if (soA === null && soCheck) {
  // Compara o que os fontes montam com o que está em disco. Só difere em
  // contentVersion, que é do exportador; por isso a comparação é sobre as
  // lições, não sobre o arquivo inteiro.
  const emDisco = JSON.stringify(careca.lessons);
  const dosFontes = JSON.stringify(licoes);
  if (emDisco === dosFontes) {
    console.log(
      `build-course --check: ${licoes.length} lição(ões) de ${id} montam o mesmo que está em disco.`,
    );
  } else {
    console.error(
      `build-course --check: os fontes de ${id} NÃO montam o que está em courses/${id}.json.`,
    );
    console.error('Alguém editou o JSON direto, ou editou um fonte sem rodar --force.');
    process.exit(1);
  }
} else if (soA === null) {
  writeFileSync(ALVO, JSON.stringify(curso, null, 2) + '\n', 'utf8');
  console.log(
    `courses/${id}.json: ${licoes.length} lições, ${JSON.stringify(curso).length} bytes brutos.`,
  );
  console.log('rode `cd ../bible-reader-web && bun run export:courses` para recalcular versões e manifesto.');
} else {
  const antes = JSON.stringify(careca.lessons.find((l: any) => l.id === soA));
  const depois = JSON.stringify(curso.lessons.find((l: any) => l.id === soA));
  console.log(
    antes === depois
      ? `lição ${soA}: idêntica ao que está no destino.`
      : `lição ${soA}: DIFERENTE do destino — rode com --force para gravar.`,
  );
}
