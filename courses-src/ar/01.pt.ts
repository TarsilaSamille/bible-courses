import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('O alfabeto árabe'),
  subtitle: T('28 letras, da direita para a esquerda'),
  section: T('Alfabeto e escrita'),
  body: C(`## A direção da escrita

O árabe se lê e se escreve da DIREITA para a ESQUERDA, e as letras mudam de forma conforme a posição: inicial, medial, final ou isolada. Em {الْكَلِمَةُ} a letra {ك} aparece com forma diferente de quando está sozinha, e isso vale para as outras. A pontuação é opcional na escrita tradicional: a leitura se orienta pelo contexto.

## As 28 letras

São 28 letras, mais a {ة} e a {ء} — que na contagem tradicional entram como formas à parte. Compare os sons com o latim: {ب} [b] e {ت} [t] coincidem; {ج} tem som de [ʒ] e {غ} de [ɣ], ausentes no português; {ح} e {ه} são sopros fortes, e {خ} e {ه} também. A letra {ع} não tem equivalente em português: é uma faringal.

## Formas de ligação

Uma letra muda de forma se estiver ligada à seguinte. Isso vale para {بـ-ب-ب} e para as outras; apenas seis letras — {ا د ذ ر ز و} — não se ligam à seguinte, porque só vivem no começo ou no fim da palavra. Por isso {الله} lê-se alif-lam-lam-hā, com as duas lams ligadas.

## Anotação vocálica

O texto bíblico vem com vogais curtas acima e abaixo das consoantes: {كَتَبَ} é ka-ta-ba. Elas não são acentos, e sim informação de pronúncia, sempre presente. A {سْ} marca a ausência de vogal. Por isso o mesmo esqueleto consonantal pode receber leitura diferente conforme as vogais.

## Critério de leitura

Leia primeiro o esqueleto consonantal da palavra e depois as vogais. Ao encontrar {قُلْ} identifique {ق} como raiz do verbo e as vogais como marca de tempo e pessoa — é o primeiro passo para a lição 3.`),
  vocab: [
    V('ا', 'ا', 'alif'),
    V('ب', 'ب', 'bāʾ'),
    V('ت', 'ت', 'tāʾ'),
    V('ث', 'ث', 'ṯāʾ'),
    V('ج', 'ج', 'jīm'),
    V('ح', 'ح', 'ḥāʾ'),
    V('خ', 'خ', 'khāʾ'),
    V('د', 'د', 'dāl'),
    V('ذ', 'ذ', 'ḏāl'),
    V('ر', 'ر', 'rāʾ'),
    V('س', 'س', 'sīn'),
    V('ص', 'ص', 'ṣād'),
    V('ط', 'ط', 'ṭāʾ'),
    V('ع', 'ع', 'ʿayn'),
    V('ف', 'ف', 'fāʾ'),
    V('ق', 'ق', 'qāf'),
    V('ك', 'ك', 'kāf'),
    V('ل', 'ل', 'lām'),
    V('م', 'م', 'mīm'),
    V('ن', 'ن', 'nūn'),
    V('ه', 'ه', 'hāʾ'),
    V('و', 'و', 'wāw'),
    V('ي', 'ي', 'yāʾ'),
    V('الله', 'الله', 'Deus'),
    V('نُور', 'نور', 'luz'),
    V('كَلِمَة', 'كلمة', 'palavra'),
    V('حَيَاة', 'حياة', 'vida'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em que direção se lê o árabe?'),
    options: [
      T('Da esquerda para a direita'),
      T('Da direita para a esquerda'),
      T('De cima para baixo'),
      T('Em colunas'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Escreva as 28 letras fundamentais na ordem padrão.'),
      answer: 'ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي',
      hint: T('Comemce por ا e termine por ي.'),
    },
    {
      kind: 'match',
      prompt: T('Associe som e grafema.'),
      pairs: [
        { a: T('ba'), b: T('ب') },
        { a: T('kha'), b: T('خ') },
        { a: T('ayn'), b: T('ع') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('Qual sinal indica a vocal i?'),
      options: [T('fatha'), T('kasra'), T('ḍamma'), T('sukūn')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('A direção de leitura é da direita para a esquerda.') },
    { n: '2', text: T('Seis letras — ا د ذ ر ز و — só se ligam à letra precedente.') },
    { n: '3', text: T('As vogais breves se escrevem com fatha َ, kasra ِ e ḍamma ُ.') },
  ],
  notes: [
    {
      label: T('Pronúncia'),
      text: T('As vogais são claras; a articulação das consoantes é implícita.'),
    },
  ],
  examples: [
    { text: 'نُور', gloss: T('nūr — luz') },
    { text: 'كَلِمَة', gloss: T('kalima — palavra') },
    { text: 'بَيْت', gloss: T('bayt — casa; a ligação facilita a leitura') },
  ],
  tables: [
    {
      caption: T('Letras e sons'),
      head: [T('Grupo'), T('Letras'), T('Notas')],
      rows: [
        ['alif, wāw, yāʾ', 'ا و ي', 'Não formam por si só sílaba aberta'],
        [
          'consonantes aspiradas',
          'ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه',
          'Permitem sílabas fechadas',
        ],
        ['hamza', 'ء أ إ ؤ ئ', 'Indica som de vogal ou consoante glotal'],
      ],
    },
  ],
};
