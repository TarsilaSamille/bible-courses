// check-simbolos-nativos.mts — lições CJK que ensinam o símbolo e não o mostram.
//
// O check-script-misturado diz onde o caractere nativo NÃO pode aparecer (a
// prosa fora de {chaves}). Este diz o contrário: uma lição de ko/zh/ja que
// fala do sistema de escrita precisa ter o caractere visível em algum lugar
// que o leitor não precisa clicar — `examples[].text` e as tabelas.
//
// Sem este portão, uma lição nova pode passar por build, i18n e script e ainda
// assim ensinar hangul só em transliteração. Foi o que aconteceu em ko/6 e zh/9.
//
// A regra não é "a lição cita uma palavra do assunto", é "a lição ensina o
// sistema de escrita". Por isso o portão separa lição de blocos (ko) de
// lição de partículas (ko): as duas citam "vogal", mas só a primeira precisa
// mostrar o jamo.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIR = join(import.meta.dir, '..', 'courses-src');

type Curso = {
  /** Glifo que o leitor precisa ver sem clicar. */
  nativo: RegExp;
  /** A lição é sobre o sistema de escrita deste idioma. */
  sistema: RegExp;
  /** A lição é sobre partículas/pronomes/gramática: não precisa do glifo. */
  semGlifo: RegExp;
  /**
   * A lição cita o termo do sistema ("ideograma") mas o glifo que ela
   * precisa mostrar é outro. Em ko/21 é sobre ideogramas — os exemplos são
   * hanja, e o jamo não é o assunto da lição.
   */
  glifoDistinto?: RegExp;
};

const CURSOS: Record<string, Curso> = {
  ko: {
    nativo: /[가-힯ㄱ-ㆆ]/,
    sistema: /\b(bloco|jamo|hangul)\b/i,
    semGlifo: /part[íi]cula|pronom|contador|negação/i,
    // ko/21 ensina a leitura sino-coreana do ideograma: o glifo de que ela
    // fala é o hanja, e os exemplos já são {漢字}. O jamo não é o assunto.
    glifoDistinto: /ideograma|hanja|sino-coreana/i,
  },
  zh: {
    nativo: /[㐀-䶿一-鿿]/,
    sistema: /ideograma|caractere|radical|glifo/i,
    semGlifo: /part[íi]cula|pronom|conectiv/i,
  },
  ja: {
    nativo: /[぀-ヿ㐀-䶿一-鿿]/,
    sistema: /kanji|ideograma|kan[a-z]\b/i,
    semGlifo: /part[íi]cula|pronom|contador/i,
  },
};

let problemas = 0;

for (const [id, { nativo, sistema, semGlifo, glifoDistinto }] of Object.entries(CURSOS)) {
  for (const arquivo of readdirSync(join(DIR, id)).filter((f) => f.endsWith('.pt.ts'))) {
    const texto = readFileSync(join(DIR, id, arquivo), 'utf8');
    const licao = /^  id: (\d+),$/m.exec(texto)?.[1];
    const corpo = /body: C\(`([\s\S]*?)`\),/.exec(texto)?.[1] ?? '';

    if (!sistema.test(corpo) || semGlifo.test(corpo)) continue;
    if (glifoDistinto?.test(corpo)) continue;

    const exemplos = [...texto.matchAll(/text: '([^']*)'/g)].map((m) => m[1]);
    const temExemplo = exemplos.some((t) => nativo.test(t));
    const temTabela = nativo.test(texto.slice(texto.indexOf('tables:')));
    if (!temExemplo || !temTabela) {
      problemas++;
      console.log(
        `  ${id}/${licao}: ensina o sistema de escrita e não mostra o glifo ` +
          `(exemplos=${temExemplo ? 'sim' : 'não'}, tabelas=${temTabela ? 'sim' : 'não'})`,
      );
    }
  }
}

if (problemas) {
  console.log(
    `\n${problemas} lição(ões) de CJK ensinam o sistema de escrita sem mostrar ` +
      `o glifo. O caractere nativo dentro de {chaves} continua correto — o ` +
      `AUTORAR-CURSOS proíbe fora delas. O que falta é um lugar visível.`,
  );
} else {
  console.log('toda lição de CJK que ensina o sistema de escrita mostra o glifo.');
}
