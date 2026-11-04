#!/usr/bin/env node
/**
 * check-script-misturado.mts — acha lixo de alfabeto dentro de conteudo.
 *
 * Existe porque o problema é recorrente e silencioso. Ao longo do trabalho nos
 * cursos, caracteres CJK e cirílicos entraram em texto português, espanhol,
 * inglês e grego; e a maioria só apareceu porque alguém leu a frase. Nenhum dos
 * quatro portões pegava: o check-i18n procura prosa de um idioma dentro do campo
 * de outro, o que pressupõe saber qual idioma é o errado.
 *
 * A regra aqui é mais burra e mais difícil de escapar: um arquivo grego pode
 * conter grego e português, um russo pode conter cirílico — o que não pode é
 * caractere de um alfabeto que não pertence a nenhum idioma do arquivo.
 *
 * Isenção: nos cursos de chinês, japonês e coreano o CJK é o conteúdo, e a
 * regra passa a ser por campo — `vocab[].form` é a palavra; na prosa, fora de
 * {chaves}, continua sendo lixo. Isentar o arquivo inteiro seria mais curto e
 * estaria errado: hangul dentro do curso de chinês passaria em silêncio.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

/**
 * Só o conteúdo dos cursos entra na varredura, de propósito.
 *
 * A primeira versão varria src/ inteiro e accusei 64 caracteres, todos
 * legítimos: o mapa de transliteração cirílica, os glossos russos, o banco de
 * ideogramas e o construtor de romaji. Isentar arquivo por arquivo é jogo sem
 * fim, porque a lista cresce toda vez que alguém escreve um script novo para
 * outra língua. O que interessa é o texto que o aluno lê.
 */
const RAIZ = process.cwd();
const ALVOS = ['courses'];

/**
 * A regra precisa ser "impossivel aqui", nao "estranho aqui".
 *
 * A primeira versao deste script acusava 105 caracteres, e a esmagadora maioria
 * era falso positivo: a licao de italiano cita למה e ἱνατί de proposito, para
 * mostrar que a pergunta e a mesma em tres linguas. Isso e o tipo de citacao que
 * um leitor de Biblia tem, e merece estar na licao.
 *
 * Entao fica so o que nenhum curso deste projeto ensina: CJK, kana, hangul,
 * devanagari e tamil sao sempre erro. Cirilico e erro fora dos cursos que
 * ensinam russo. Hebraico e arabe ficam de fora de proposito — num leitor de
 * Biblia uma citacao e plausivel em qualquer pagina, e nao ha como distinguir
 * citacao de tecla errada sem ler a frase. Essa limitacao e conhecida.
 */
const BLOCOS: { nome: string; faixa: string; cursos: RegExp | null }[] = [
  { nome: 'hiragana/katakana', faixa: '\\u3040-\\u30ff', cursos: null },
  { nome: 'devanagari', faixa: '\\u0900-\\u097f', cursos: null },
  { nome: 'tamil', faixa: '\\u0b80-\\u0bff', cursos: null },
  { nome: 'cirílico', faixa: '\\u0400-\\u04ff', cursos: /courses\/(ru|uk)(\/|\.)/ },
];

/**
 * Os três cursos em que o ideograma É o conteúdo. A regra do CJK não é mais
 * global: dentro destes arquivos, CJK passa a ser julgado campo a campo (ver
 * `confereCursoCJK`), porque em `vocab[].form` ele é a palavra e na prosa é lixo.
 */
const CURSOS_CJK = /courses\/(zh|ja|ko)(\/|\.)/;
const CJK = /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff\u3040-\u30ff\uac00-\ud7af]/;

/** Campos onde CJK tem de estar dentro de {chaves}: a prosa que o aluno lê. */
const PROSA_CJK = ['body'];

type No = { texto: string; onde: string };

/**
 * Percorre o curso e devolve o CJK que apareceu fora de {chaves} na prosa.
 * Andar por campo em vez de por byte é o que permite que o curso de chinês
 * passe sem que hangul entre nele em silêncio.
 */
/**
 * `title`, `subtitle` e `section` ficam fora da regra das chaves, de propósito.
 * Num curso de chinês o título É o caractere — {是 e a frase que só tem
 * substantivo} é o assunto da lição, e embrulhá-lo em chaves só produziria {是} e
 * a frase, que lê pior. A exceção é por tipo de campo, não por ficheiro: o `body`
 * da mesma lição continua sob a regra estrita, e é lá que o lixo aparece.
 */
const ROTULOS_CJK = new Set(['title', 'subtitle', 'section']);

const confereCursoCJK = (curso: any): No[] => {
  const fora: No[] = [];
  const ve = (v: any, onde: string, ehProsa: boolean) => {
    if (typeof v === 'string') {
      if (!ehProsa) return;
      const semChaves = v.replace(/\{[^}]*\}/g, '');
      const achado = semChaves.match(CJK);
      if (achado) fora.push({ texto: achado[0], onde });
      return;
    }
    if (Array.isArray(v)) {
      v.forEach((x, i) => ve(x, `${onde}[${i}]`, ehProsa));
      return;
    }
    if (v && typeof v === 'object') {
      // A decisão é do CHAMADOR, não da chave: quem chama já sabe se aquele
      // trecho é prosa. Reclassificar por `k === 'pt'` aqui fazia o chamador
      // ser ignorado — o enunciado de um preenchimento voltava a ser tratado
      // como prosa porque sua tradução vive em `prompt.pt`.
      for (const [k, x] of Object.entries(v)) ve(x, `${onde}.${k}`, ehProsa);
    }
  };
  for (const k of ROTULOS_CJK) ve(curso?.[k], k, false);
  for (const k of PROSA_CJK) ve(curso?.[k], k, true);
  for (const [i, l] of (curso?.lessons ?? []).entries()) {
    // rotulos passam com regra frouxa; `body` e o resto, com regra estrita
    for (const [k, v] of Object.entries(l ?? {})) {
      if (ROTULOS_CJK.has(k)) ve(v, `lessons[${i}].${k}`, false);
    }
    for (const k of PROSA_CJK) ve(l?.[k], `lessons[${i}].${k}`, true);
    for (const [j, r] of (l?.rules ?? []).entries())
      ve(r?.text, `lessons[${i}].rules[${j}].text`, true);
    for (const [j, n] of (l?.notes ?? []).entries()) {
      ve(n?.label, `lessons[${i}].notes[${j}].label`, true);
      ve(n?.text, `lessons[${i}].notes[${j}].text`, true);
    }
    const exs = [l?.exercise, ...(l?.exercises ?? [])];
    for (const [j, ex] of exs.entries()) {
      // O enunciado de um preenchimento CONTÉM o ideograma: é a lacuna que se
      // preenche ("吃____ (comer)"). No de múltipla escolha o enunciado é prosa
      // e as alternativas é que carregam o conteúdo.
      const enunciadoEhProsa = ex?.kind !== 'fill';
      ve(ex?.prompt, `lessons[${i}].exercises[${j}].prompt`, enunciadoEhProsa);
      ve(ex?.hint, `lessons[${i}].exercises[${j}].hint`, true);
    }
  }
  return fora;
};

/**
 * Arquivos em que alfabetos estranhos são o assunto, não o erro.
 *
 * utils.ts tem a tabela de desflexão japonesa e os mapas de transliteração
 * cirílica; o dicionário de grego e de hebraico legítimos; o dicionário de
 * guarani usa o alfabeto latino, e a fonte dele (Ñeerandu) também.
 */
/**
 * Isenções por arquivo. Não há exceção por curso aqui de propósito: uma pasta
 * isenta inteira anula a regra — foi o que aconteceu na primeira versão, em que
 * CJK dentro do curso de russo e do curso de hebraico passava. A exceção legítima
 * é por alfabeto, e está no campo `cursos` de cada bloco: cirílico é o alfabeto
 * do curso de russo, e em qualquer outro lugar é lixo.
 */
const ISENTOS: RegExp[] = [];

const EXTENSOES = new Set(['.ts', '.tsx', '.mts', '.mjs', '.js', '.json', '.md']);

const andavel = (caminho: string): string[] => {
  // A ordem importa: diretorio nao tem extensao, e testar extensao antes de
  // testar se e diretorio faz a varredura parar na raiz e reportar "nenhum
  // problema" com o arquivo inteiro intacto.
  const st = statSync(caminho);
  if (st.isFile()) return EXTENSOES.has(extname(caminho)) ? [caminho] : [];
  if (!st.isDirectory()) return [];
  return readdirSync(caminho).flatMap((n) => {
    const p = join(caminho, n);
    try {
      return andavel(p);
    } catch {
      return [];
    }
  });
};

const achados: string[] = [];

for (const alvo of ALVOS) {
  let arquivos: string[] = [];
  try {
    arquivos = andavel(join(RAIZ, alvo));
  } catch {
    continue;
  }
  for (const arq of arquivos) {
    const rel = arq.replace(`${RAIZ}/`, '');
    if (ISENTOS.some((r) => r.test(rel))) continue;

    // Curso de chinês, japonês ou coreano: o ideograma é o assunto, e a regra
    // muda de "proibido em todo lugar" para "proibido na prosa fora de {chaves}".
    if (CURSOS_CJK.test(rel)) {
      let curso: any;
      try {
        curso = JSON.parse(readFileSync(arq, 'utf8'));
      } catch (e) {
        achados.push(`${rel}: JSON ilegível — ${(e as Error).message}`);
        continue;
      }
      for (const achado of confereCursoCJK(curso)) {
        achados.push(
          `${rel}  CJK ${JSON.stringify(achado.texto)} na prosa, fora de {chaves}  ${achado.onde}`,
        );
      }
      if (achados.length > 40) break;
      continue;
    }

    const texto = readFileSync(arq, 'utf8');
    for (const bloco of BLOCOS) {
      // `cursos` é onde o alfabeto é o alfabeto certo, não onde ele é proibido:
      // cirílico é o texto do curso de russo, e o mesmo caractere em português é
      // lixo. Então o bloco só é procurado FORA da lista. `cursos: null` é o
      // caso oposto — CJK não pertence a nenhum curso, então vale em todo lugar.
      if (bloco.cursos && bloco.cursos.test(rel)) continue;
      const re = new RegExp(`[${bloco.faixa}]`, 'g');
      let m: RegExpExecArray | null;
      while ((m = re.exec(texto)) !== null) {
        const linha = texto.slice(0, m.index).split('\n').length;
        const ini = Math.max(0, m.index - 40);
        achados.push(
          `${rel}:${linha}  ${bloco.nome} ${JSON.stringify(m[0])}  ${JSON.stringify(texto.slice(ini, m.index + 40))}`,
        );
        if (achados.length > 40) break;
      }
    }
  }
}

if (achados.length) {
  console.error(`${achados.length} caractere(s) de alfabeto estranho em conteudo:\n`);
  for (const a of achados) console.error('  ' + a);
  console.error(
    '\nNos cursos de chines, japones e coreano, o CJK e legitimo no vocabulario e nos exemplos:' +
      ' fora dali e na prosa, e lixo de digitacao ou traducao por maquina.',
  );
  process.exit(1);
}
console.log('Nenhum caractere de alfabeto estranho no conteudo.');
