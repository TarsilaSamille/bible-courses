import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Os adjetivos'),
  subtitle: T('posição + apócope (buen/gran!)'),
  section: T('Adjetivos e advérbios'),
  body: C(`## Concordância

O adjetivo concorda em gênero e número com o substantivo: {bueno} → {buena}, {buenos}, {buenas} · {feliz} → {felices} · {grande} → {grandes}. Nacionalidades em consoante também variam: {español} → {española}, {francés} → {francesa}. {hermano} → {hermanos}/{hermanas} «irmão/irmã».

## Posição: antes ou depois

**Depois** do substantivo, o adjetivo é **objetivo**, quase sempre descritivo: {un hombre pobre} «um homem pobre (sem dinheiro)» · {una casa bonita} «uma casa bonita».

**Antes**, o adjetivo é **subjetivo**, avaliativo: {un pobre hombre} «um pobre homem (coitado!)» · {un nuevo libro} «um livro novo (outro!)» × {un libro nuevo} «um livro novinho» (recém-comprado!).

## Apócope

Cinco adjetivos perdem a vogal final diante de substantivo masculino singular:

• {bueno} → {buen}: {un buen hombre} · {buenas nuevas} (feminino mantém a forma cheia!)
• {malo} → {mal}: {un mal hombre}
• {grande} → {gran}: {gran Dios} «grande Deus»
• {santo} → {san}: {San Juan} «São João» · {San Pablo}
• {ciento} → {cien}: {cien años} «cem anos»

A apócope **não** ocorre quando o adjetivo vem **depois**: {un hombre bueno} é obrigatório.

## Substantivação

Com artigo, o adjetivo vira substantivo: {los buenos} «os bons», {lo importante} «o importante», {las santas} «as santas».

Bíblico: {buenas nuevas} «boas-novas» (o evangelho) · {gran mandamiento} «o grande mandamento» (Jo 13:34).`),
  vocab: [
    V('buen hombre', 'bueno', 'bom homem (apócope!)'),
    V('gran Dios', 'grande', 'grande Deus'),
    V('San Juan', 'santo', 'São João'),
    V('pobre hombre', 'pobre', 'coitado (antes!)'),
    V('buenas nuevas', 'nueva', 'boas novas'),
    V('ciudad', 'ciudad', 'cidade (fem. em -dad!)'),
    V('nuevo', 'nuevo', 'novo (outro!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"un pobre hombre" × "un hombre pobre"?'),
    options: [
      T('Iguais'),
      T('Coitado (antes!) × sem dinheiro (depois!)'),
      T('O contrário'),
      T('Erro'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete com apócope: "___ Dios" (grande Deus)'),
      answer: 'gran',
      hint: T('grande apócope: a vogal cai antes do masc. sg.'),
    },
    {
      kind: 'choose',
      prompt: T('Onde há apócope?'),
      options: [
        T('{un buen hombre}'),
        T('{un hombre bueno}'),
        T('{una buena mujer}'),
        T('{unas buenas ideas}'),
      ],
      answer: 0,
      hint: T('Só antes de masculino singular.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma plena à apocopada'),
      pairs: [
        { a: T('bueno'), b: T('buen') },
        { a: T('malo'), b: T('mal') },
        { a: T('santo'), b: T('san') },
        { a: T('ciento'), b: T('cien') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Depois do nome = objetivo (hombre pobre = sem dinheiro); antes = subjetivo (pobre hombre = coitado!).',
      ),
    },
    {
      n: '2',
      text: T(
        'Apócope antes de masc. singular: bueno→buen, malo→mal, grande→gran, santo→san, ciento→cien.',
      ),
    },
    { n: '3', text: T('O adjetivo concorda em gênero e número: buena, buenos, felices, nuevas.') },
  ],
  notes: [
    {
      label: T('Concordância dupla'),
      text: T(
        'Quando o substantivo é plural, o adjetivo concorde em gênero e número com cada elemento: {las casas blancas}. Com dois adjetivos de classes diferentes, o primeiro fica no singular e o segundo no plural: {veja o padrão na lição 22.',
      ),
    },
  ],
  examples: [
    { text: '{un buen hombre}', gloss: T('Um bom homem (apócope de bueno).') },
    { text: '{gran Dios}', gloss: T('Grande Deus.') },
    { text: '{buenas nuevas}', gloss: T('Boas novas (o evangelho!).') },
    { text: '{San Juan}', gloss: T('São João (apócope de santo).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Concordância de adjetivos comuns'),
      head: [T('Adjetivo'), T('m. sg.'), T('f. sg.'), T('m. pl.'), T('f. pl.')],
      rows: [
        ['bueno', '{buen}', '{buena}', '{buenos}', '{buenas}'],
        ['malo', '{mal}', '{mala}', '{malos}', '{malas}'],
        ['grande', '{gran}', '{grande}', '{grandes}', '{grandes}'],
        ['feliz', '{feliz}', '{feliz}', '{felices}', '{felices}'],
        ['nuevo', '{nuevo}', '{nueva}', '{nuevos}', '{nuevas}'],
      ],
    },
    {
      caption: T('Tabela 2 — Posição do adjetivo'),
      head: [T('Ordem'), T('Exemplo'), T('Valor típico')],
      rows: [
        [T('antes'), '{un pobre hombre}', T('subjetivo (avaliativo)')],
        [T('depois'), '{un hombre pobre}', T('objetivo (descritivo)')],
        [T('antes'), '{un nuevo libro}', T('outro (≠ novinho!)')],
        [T('depois'), '{un libro nuevo}', T('novinho')],
      ],
    },
  ],
};
