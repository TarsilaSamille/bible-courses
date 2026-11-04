import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Substantivos e casos'),
  subtitle: T('Падежи — seis relaciones gramaticales'),
  section: T('O nome: gênero, número e adjetivo'),
  body: C(
    'O russo não usa artigos. As relações se marcam por casos; seis são principais. Nominativo identifica o sujeito; acusativo, objeto direto; genitivo, posse, origem e complemento de ausência; dativo, destinatário; instrumental, meio ou companhia; prepositivo, relação espacial sem preposição explícita após в, на, с, к, о, у, от, до e про. O gênero deduz-se geralmente do nominativo: masculino, feminino ou neutro. Depois de 2, 3 ou 4, o substantivo vai ao genitivo singular: два слова. O plural acrescenta formas próprias, mas os sinais brandos muitas vezes mudam: слово → слова; день → дни. O caso não traduz uma preposição automaticamente: в начале significa “no início”, mas в храм pode significar “para dentro do templo”.',
  ),
  vocab: [
    V('Бог', 'бог', 'Deus'),
    V('Бога', 'бог', 'a Deus; genitivo e acusativo'),
    V('Богу', 'бог', 'a Deus; dativo'),
    V('книга', 'книга', 'livro; feminino'),
    V('книги', 'книга', 'de livros; genitivo'),
    V('книгу', 'книга', 'o livro; acusativo'),
    V('слово', 'слово', 'palavra; neutro'),
    V('слова', 'слово', 'palavras; plural, e genitivo singular após numeral'),
    V('мир', 'мир', 'mundo; paz'),
    V('небо', 'небо', 'céu'),
    V('сердце', 'сердце', 'coração; neutro'),
    V('день', 'день', 'dia; masculino'),
    V('дни', 'день', 'dias; plural'),
    V('два', 'два', 'dois'),
    V('окно', 'окно', 'janela; neutro'),
    V('вода', 'вода', 'água; feminino'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o acusativo de Бог (masculino animado)?'),
    options: [T('Бог'), T('Бога'), T('Богу')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: Я люблю Бога'), answer: 'Бога' },
    { kind: 'fill', prompt: T('Complete: книга → книги'), answer: 'и' },
    {
      kind: 'choose',
      prompt: T('Qual caso rege к?'),
      options: [T('Nominativo'), T('Dativo'), T('Instrumental')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O nominativo é a forma de referência: {Бог}, {книга} e {слово} são as três colunas de qualquer tabela.',
      ),
    },
    {
      n: '2',
      text: T(
        'O acusativo do masculino animado é o genitivo: {Бога} pode ser «de Deus» ou «Deus» como objeto, e a forma não diz qual.',
      ),
    },
    {
      n: '3',
      text: T('O neutro tem uma forma só de acusativo, igual ao nominativo: {слово} e {окно}.'),
    },
    {
      n: '4',
      text: T(
        'Depois de {два}, {три} e {четыре} o substantivo vai ao genitivo singular: {два слова}, {четыре книги}.',
      ),
    },
    {
      n: '5',
      text: T(
        'O plural troca sinais: {слово} faz {слова} e {день} faz {дни}, e nenhum dos dois se parece com o singular.',
      ),
    },
  ],
  notes: [
    {
      label: T('A definitude vai na flexão'),
      text: T(
        'O russo não tem artigo, então a informação de definitude vai para a flexão. {книга} é o substantivo nu; {книга-то} a acrescenta pelo pronome. Ler um caso é ler uma relação, e não um sentido.',
      ),
    },
    {
      label: T('Quando o caso não é o que parece'),
      text: T(
        '{Бога} é a forma mais usada do substantivo masculino depois de {Бог}, e é ao mesmo tempo genitivo e acusativo: em {слово Бога} é genitivo, em {Я люблю Бога} é acusativo. A terminação é a mesma nos dois, e quem decide é o verbo.',
      ),
    },
  ],
  examples: [
    { text: 'Бог создал небо и землю', gloss: T('Deus criou o céu e a terra') },
    { text: 'Я люблю Бога', gloss: T('amo a Deus; Бога em acusativo') },
    { text: 'слово Бога', gloss: T('a palavra de Deus; Бога em genitivo') },
    { text: 'Я читаю Книгу', gloss: T('leio o Livro; Книгу em acusativo') },
    { text: 'два слова', gloss: T('duas palavras; o substantivo vai ao genitivo singular') },
    { text: 'четыре книги', gloss: T('quatro livros;Livros em genitivo singular') },
    { text: 'нет слова Бога', gloss: T('não há palavra de Deus; dois genitivos') },
    { text: 'день и дни', gloss: T('dia e dias; o plural troca a marca') },
    { text: 'окно', gloss: T('janela; acusativo igual ao nominativo') },
    { text: 'вода', gloss: T('água; o acusativo acrescenta -у: воду') },
  ],
  tables: [
    {
      caption: T('Paradigma de бог, книга e слово'),
      head: [T('Caso'), T('Masculino'), T('Feminino'), T('Neutro')],
      rows: [
        [T('Nominativo'), T('бог'), T('книга'), T('слово')],
        [T('Genitivo'), T('бога'), T('книги'), T('слова')],
        [T('Dativo'), T('богу'), T('книге'), T('слову')],
        [T('Acusativo'), T('бога'), T('книгу'), T('слово')],
        [T('Instrumental'), T('богом'), T('книгой'), T('словом')],
        [T('Prepositivo'), T('о Боге'), T('о книге'), T('о слове')],
      ],
    },
    {
      caption: T('As duas formas que são ambíguas'),
      head: [T('Forma'), T('Casos possíveis'), T('O que decide'), T('Exemplo')],
      rows: [
        [T('бога'), T('genitivo e acusativo'), T('o verbo'), T('Я люблю Бога')],
        [T('богу'), T('dativo'), T('a preposição'), T('к Богу')],
        [T('о Боге'), T('prepositivo'), T('a preposição o'), T('говорим о Боге')],
        [T('слово'), T('nominativo e acusativo'), T('o neutro não muda'), T('Я знаю слово')],
      ],
    },
    {
      caption: T('O substantivo depois do numeral'),
      head: [T('Numeral'), T('Caso do substantivo'), T('Exemplo'), T('Glosa')],
      rows: [
        [T('один'), T('nominativo singular'), T('один день'), T('um dia')],
        [T('два, три, четыре'), T('genitivo singular'), T('два слова'), T('duas palavras')],
        [T('пять ou mais'), T('genitivo plural'), T('пять слов'), T('cinco palavras')],
        [
          T('двадцать один'),
          T('nominativo singular'),
          T('двадцать один день'),
          T('vinte e um dias'),
        ],
      ],
    },
  ],
};
