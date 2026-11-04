import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Adjetivos e comparação'),
  subtitle: T('Concordância e padrões'),
  section: T('O nome'),
  body: C(`## O adjetivo vem depois

Em árabe o adjetivo segue o substantivo e concorda com ele em gênero e número, mas nunca em caso. {الكِتَابُ الكَبِيرُ} é "o livro grande"; {الكِتَابُ الكَبِيرَ} é a mesma coisa quando o substantivo cai no caso regido. O caso é do substantivo, e só dele.

## Concordância ou não

O adjetivo concorda em gênero e número, não em definitude. Com nome e adjetivo definidos, os dois levam {ال}: {الكِتَابُ الكَبِيرُ}. Com nome definido e adjetivo indefinido, apenas o nome leva o artigo: {الكِتَابُ كَبِيرٌ}, que deixa aberta a qualidade.

## O padrão de superlativo

O comparativo e o superlativo usam o padrão {أَفْعَلَ}: {أَكْبَرُ} é "maior" e, com {مِنْ}, "maior que" — {أَكْبَرُ مِنْ}. Como superlativo recebe o artículo {ال}: {الْأَكْبَرُ}. O mesmo padrão aparece nas cores: {أَبْيَضُ}, {أَسْوَدُ}, {أَحْمَرُ}. Repare que o {ال} do superlativo é o da forma, não o do substantivo.

## Critério de leitura

Marque o substantivo primeiro e identifique o seu caso; o adjetivo não interfere. Se o adjetivo vem logo depois e a frase faz sentido, quase sempre é adjetivo — a palavra que vem depois dele é que indica se a construção é substantiva.`),
  vocab: [
    V('كَبِير', 'كبير', 'grande'),
    V('كَبِيرَة', 'كبير', 'grande (f.)'),
    V('جَدِيد', 'جديد', 'novo'),
    V('مُقَدَّس', 'قدس', 'santo'),
    V('أَبْيَض', 'بيض', 'branco'),
    V('أَسْوَد', 'سود', 'preto'),
    V('أَحْمَر', 'حمر', 'vermelho'),
    V('أَكْبَر', 'كبير', 'maior'),
    V('أَقْوَى', 'قوي', 'mais forte'),
    V('الْحُبّ', 'حب', 'o amor'),
    V('الْمَوْت', 'موت', 'a morte'),
    V('الْعَهْد', 'عهد', 'a aliança; o testamento'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se diz “o livro grande”?'),
    options: [T('كتاب كبير'), T('الكتاب الكبير'), T('كتاب الكبير'), T('الكتاب كبير')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Feminino de {أَبْيَض}: ___'),
      answer: 'بَيْضَاءُ',
      hint: T('O feminino usa {-اء}.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual sequência está bem concordada?'),
      options: [T('كتابٌ كبيرٌ'), T('كتابٌ كبيرةٌ'), T('كُتُبٌ كبيرٌ'), T('كتابٌ كبَارٌ')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Associe adjetivo e cor.'),
      pairs: [
        { a: T('أَبْيَض'), b: T('branco') },
        { a: T('أَسْوَد'), b: T('preto') },
        { a: T('أَحْمَر'), b: T('vermelho') },
      ],
      answer: [0, 1, 2],
    },
  ],
  rules: [
    { n: '1', text: T('Adjetivo e substantivo concordam em gênero e número.') },
    { n: '2', text: T('Artigos definidos podem se repetir, um antes de cada elemento.') },
    { n: '3', text: T('{أَفْعَلَ} é frequentíssimo em cores e no comparativo {أَفْعَلُ مِنْ}.') },
  ],
  notes: [
    {
      label: T('Comparação'),
      text: T(
        'O superlativo pode ser feito com {أَفْعَلُ} ou por {أَكْثَرُ}: {أَكْبَرُ} é comum na fórmula {اللهُ أَكْبَرُ}.',
      ),
    },
  ],
  examples: [
    { text: 'الْكِتَابُ الْجَدِيدُ', gloss: T('o novo livro') },
    { text: 'أَرْضٌ مُقَدَّسَةٌ', gloss: T('terra santa') },
    { text: 'الْحُبُّ أَقْوَى مِنَ الْمَوْتِ', gloss: T('o amor é mais forte que a morte') },
  ],
  tables: [
    {
      caption: T('Concordância'),
      head: [T('Substantivo'), T('Adjetivo')],
      rows: [
        ['كِتَابٌ كَبِيرٌ', 'livro grande'],
        ['كِتَابٌ كَبِيرَةٌ', 'livro grande'],
        ['كُتُبٌ كِبَارٌ', 'livros grandes'],
        ['الكِتَابُ الكَبِيرُ', 'o grande livro'],
      ],
    },
  ],
};
