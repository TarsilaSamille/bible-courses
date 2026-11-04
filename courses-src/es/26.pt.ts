import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('Os pronomes possessivos'),
  subtitle: T('mi, tu, su — + "suyo" tônico'),
  section: T('Os pronomes'),
  body: C(`## Duas séries: átonos e tônicos

**Átonos** (nunca têm acento próprio, vêm **antes** do substantivo): {mi}, {tu}, {su}, {nuestro}, {vuestro}, {su}.

**Tônicos** (têm acento próprio, vêm **depois** ou sozinhos): {mío}, {tuyo}, {suyo}, {nuestro}, {vuestro}, {suyo}.

Ex.: {mi casa} «minha casa» × {casa mía} «minha casa» (ênfase!) · {nuestra casa} «nossa casa» · {Padre nuestro} «Pai nosso».

## A concordância dos tônicos

{mío} → {mía}, {míos}, {mías} · {tuyo} → {tuya}, {tuyos}, {tuyas} · {suyo} → {sua}, {suyos}, {suyas}. Os átonos são **invariáveis**: {mis}, {tus}, {sus}, {nuestros}, {vuestros}.

## O problema do {su}

O {su} átono é terrivelmente ambíguo: pode ser «dele», «dela», «seu», «deles», «das suas»… A RAE recomenda o **tônico** para desfazer a confusão:

{El libro es suyo} «O livro é DELE» (dele, não seu!).
{El libro es de él} «O livro é dele» (popular, sem ambiguidade).

## Fórmulas do texto bíblico

{Sanctificado sea tu nombre} «Santificado seja o TEU nome» — {tu} átono mantém o paralelismo.
{Nuestro Padre} «Pai NOSSO» — {nuestro} tônico, tradicional.
{Dios mío} «Deu MEU» (Sl 22:1) — tônico em exclamação.
{El pan nuestro de cada día} «o pão NOSSO de cada dia» (Mt 6:11).

{nuestro} tem duas formas tônicas: {nuestro} (de nós) e {nuestra} (de nós, fem.). O possessivo de vós é {nuestro} ou {vuestro}.`),
  vocab: [
    V('mi', 'mi', 'meu (átono!)'),
    V('tu', 'tu', 'teu (átono!)'),
    V('su', 'su', 'seu (ambíguo!)'),
    V('nuestro', 'nuestro', 'nosso'),
    V('mío', 'mío', 'meu (tônico!)'),
    V('Dios mío', 'Dios', 'Deu meu! (Sl 22:1)'),
    V('suyo', 'suyo', 'seu (clareza!)'),
    V('tu nombre', 'nombre', 'o teu nome (Mt 6:9)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como desambiguar "su libro"?'),
    options: [
      T('Não há jeito'),
      T('Tônico: "el libro suyo" (DELE) ou "de él"'),
      T('Plural'),
      T('Artigo'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o possessive tônico: "Dios ___" (Deus meu!)'),
      answer: 'mío',
      hint: T('Regla §1: a forma tônica vem depois do nome.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual forma é ÁTONA (antes do substantivo)?'),
      options: [T('{mío}'), T('{mi}'), T('{mía}'), T('{míos}')],
      answer: 1,
      hint: T('Só a forma sem acento é átona.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma ao tipo'),
      pairs: [
        { a: T('{tu}'), b: T('átono') },
        { a: T('{tuyo}'), b: T('tônico') },
        { a: T('{nuestra}'), b: T('átono (feminino)') },
        { a: T('{nuestras}'), b: T('tônico (fem. pl.)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Átono antes do nome, invariável (mi casa, mis casas); tônico depois, com acento (casa mía, casas mías).',
      ),
    },
    { n: '2', text: T('O tônico marca ênfase ou posse exclusiva: el libro es suyo (é DELE).') },
    {
      n: '3',
      text: T('Nunca se mistura forma átona com nome: mio casa está errado; mi casa está certo.'),
    },
    { n: '4', text: T('Nuestro/vuestro têm a mesma forma átona e tônica; só muda o acento.') },
  ],
  notes: [
    {
      label: T('Suyo evita a ambiguidade'),
      text: T(
        '{su} é ambíguo entre o possessor e o possuído. {suyo} é unívoco — "dele" — e por isso é o único que o texto bíblico prefere quando o referente é Deus.',
      ),
    },
  ],
  examples: [
    { text: '{Dios mío}', gloss: T('Deus meu! (Sl 22:1 — tônico em exclamação).') },
    { text: '{nuestro pan}', gloss: T('Nosso pão (Mt 6:11).') },
    { text: '{tu nombre}', gloss: T('O teu nome (Mt 6:9 — átono, por paralelismo).') },
    {
      text: '{el libro es suyo}',
      gloss: T('O livro é DELE (tônico resolve a ambiguidade do «su»).'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Possessivos'),
      head: [T('Pessoa'), T('Átono (antes)'), T('Tônico (depois)')],
      rows: [
        ['1ª', '{mi}', '{mío}'],
        ['2ª', '{tu}', '{tuyo}'],
        ['3ª', '{su}', '{suyo}'],
        ['1ª pl.', '{nuestro}', '{nuestro}'],
        ['2ª pl.', '{vuestro}', '{vuestro}'],
        ['3ª pl.', '{su}', '{suyo}'],
      ],
    },
    {
      caption: T('Tabela 2 — Flexão dos tônicos'),
      head: [T('Tônico'), T('m. sg.'), T('f. sg.'), T('m. pl.'), T('f. pl.')],
      rows: [
        ['{mío}', '{mío}', '{mía}', '{míos}', '{mías}'],
        ['{tuyo}', '{tuyo}', '{tuya}', '{tuyos}', '{tuyas}'],
        ['{suyo}', '{suyo}', '{sua}', '{suyos}', '{suyas}'],
      ],
    },
  ],
};
