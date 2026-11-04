import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('O artigo e o gênero'),
  subtitle: T('ال: o sol e a lua'),
  section: T('O nome'),
  body: C(`## O artigo definido

O artigo {ال} — o equivalente ao "o" do português — marca definitude: {الكِتَاب} é "o livro", o livro já conhecido. Ele se junta ao substantivo e pode assimilar a consoante inicial: após {ال} um {د} vira {ذ}, um {ت} vira {ط}, um {ر} ou {ز} recebem {ش}. Compare {الْمَلِك} e {الْمَلِكَة}: a troca do tema de {مَلِك} para {مَلِكة} é o outro mecanismo, o gênero.

## O gênero

O gênero não é livre: {الْمَلِك} é masculino e {الْمَلِكَة} feminino, {ابْن} e {ابْنَة} idem. O feminino costuma se formar com {ة}, e o plural masculino com {ونَ} ({مُؤْمِنُونَ}) contra o feminino {ات} ({كَلِمَات}). O gênero governa a concordância de todos os adjetivos e particípios, então errar o gênero quebra a frase inteira, não só uma palavra.

## Adual, plural e contagem

O substantivo aparece sempre de forma definida e no plural. O plural {كَلِمَات} é mais comum que o dual, que o árabe trata como categoria própria: {كَلِمَتَانِ} significa "duas palavras" e é o plural mais distante do singular.

## Critério de leitura

Sempre que ver {ال} em um versículo, pergunte se ele é artigo ou parte da raiz. Em {الله} e em {الْحَيَاة} ele está grudado à palavra; separar o artigo da raiz muda o sentido.`),
  vocab: [
    V('الكِتَاب', 'كتاب', 'o livro'),
    V('النُّور', 'نور', 'a luz'),
    V('الشَّمْس', 'شمس', 'o sol'),
    V('القَمَر', 'قمر', 'a lua'),
    V('الْمَلِك', 'ملك', 'o rei'),
    V('الْمَلِكَة', 'ملكة', 'a rainha'),
    V('ابْن', 'ابن', 'filho'),
    V('ابْنَة', 'ابنة', 'filha'),
    V('كَلِمَة', 'كلمة', 'palavra'),
    V('كَلِمَات', 'كلمة', 'palavras'),
    V('مُؤْمِن', 'مؤمن', 'crente'),
    V('مُؤْمِنُونَ', 'مؤمن', 'crentes'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se lê {الشَّمْس}?'),
    options: [T('al-šams'), T('aš-šams'), T('šams-al'), T('a-šams sem artigo')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Associe substantivo e gênero.'),
      pairs: [
        { a: T('مَلِك'), b: T('masc.') },
        { a: T('مَلِكَة'), b: T('fem.') },
        { a: T('ابْنَة'), b: T('fem.') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'fill',
      prompt: T('Plural de {كَلِمَة}.'),
      answer: 'كَلِمَات',
      hint: T('Use o plural -{ات}.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual palavra é solar?'),
      options: [T('القمر'), T('الشمس'), T('الكتاب'), T('الحياة')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('O artículo definido é {ال}: {كِتَاب} → {الكِتَاب}.') },
    { n: '2', text: T('Depois de letra solar, articule {ال} como a- e omita {ل} na pronúncia.') },
    {
      n: '3',
      text: T(
        'O feminino lexical costuma terminar em {ـة}; o plural regular {-ات} é marcador forte.',
      ),
    },
  ],
  notes: [
    {
      label: T('Cuidado'),
      text: T(
        'A assimilação é fonética, não ortográfica: a lâmina inicial continua escrita, mas não soa.',
      ),
    },
  ],
  examples: [
    { text: 'الشَّمْس', gloss: T('aš-šams — o sol') },
    { text: 'القَمَر', gloss: T('al-qamar — a lua') },
    { text: 'كَلِمَات', gloss: T('kalimāt — palavras') },
  ],
  tables: [
    {
      caption: T('Letras solares e lunares'),
      head: [T('Tipo'), T('Letras'), T('Pronúncia inicial')],
      rows: [
        ['solares', 'ت ث د ذ ر ز س ش ص ض ط ظ ل ن', 'aš-šams: no se oye l'],
        ['lunares', 'remaining connected letters', 'al-qamar: se oye l'],
      ],
    },
    {
      caption: T('Gênero e plural'),
      head: [T('Categoria'), T('Singular'), T('Plural')],
      rows: [
        ['masculino', 'مَلِك m.', 'مُلُوك'],
        ['feminino -ة', 'مَلِكَة', 'مَلِكَات'],
        ['masculino humano regular', 'مُؤْمِن', 'مُؤْمِنُونَ'],
        ['feminino -ة', 'سَمَاء', 'سَمَاوَات'],
      ],
    },
  ],
};
