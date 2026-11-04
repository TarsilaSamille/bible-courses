import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  section: T('Numeral'),
  title: T('Ordinais, tempo e medida'),
  subtitle: T('πρώτος — τον τρίτο χρόνο — τον πρώτο'),
  body: C(`## O ordinal é um adjetivo

{πρώτος}, {δεύτερος}, {τρίτος}, {τέταρτος}, {πέμπτος} são adjetivos comuns e flexionam como adjetivos: {ο πρώτος}, {η πρώτη}, {το πρώτο}, {οι πρώτοι}. Não há nada de especial neles, e é por isso que se aprendem como substantivos comuns.

A flexão do grego antigo era mais rica: em {πρῶτος} o neutro tinha {πρῶτον}, e a forma abreviada sobrevive em {τὸν πρῶτον}, que é o acusativo de {τὸν πρῶτον χρόνον}. Quem lê a Escritura encontra essas formas e precisa saber que são o mesmo numeral.

## O tempo no grego moderno vai no acusativo

**O grego antigo marcava tempo com dativo**: {τῷ τρίτῳ ἔτει}, «no terceiro ano». O grego moderno perdeu o dativo e pôs tudo no acusativo, sem preposição: {τον τρίτο χρόνο}, {το τρίτο έτος}, {τις πέντε ώρες}.

É uma das poucas coisas em que o grego falado e a Bíblia dizem a mesma coisa com palavras diferentes. O sentido é idêntico, o caso não. Quem traduz {τῷ τρίτῳ ἔτει} para português não sente nada, e quem traduz para grego moderno tem de trocar o caso.

A hora é ainda mais simples e é escrita com numeral: {στις τέσσερις}, «às quatro». {στις τέσσερις το απόγευμα}, «às quatro da tarde». O numeral vem direto, sem substantivo, e o que diz a hora é o advérbio {το}.

## O ordinal no acusativo é adverbial

Um numeral no acusativo, sem substantivo, funciona como advérbio de ordem. {Τον πρώτο} significa «primeiro», e {τον δεύτερο} significa «depois». Não é substantivo nem artigo: é o numeral puro, deslocado.

{Τον πρώτο μιλάει, μετά εγώ} quer dizer «ele fala primeiro, depois eu». Em grego antigo o acusativo adverbial era ainda mais comum, e é por isso que {τὸν πρῶτον} aparece tanto nos evangelhos.

## Medida e quantidade

Medida e tempo usam o mesmo caminho. {μία ώρα}, {δύο μέρες}, {τρία χρόνια}. O numeral concorda com o substantivo quando o substantivo é o que conta: {δύο μέρες}, {μία ώρα}. E o genitivo aparece quando o que se conta é a unidade dentro de algo maior: {δύο μέρες ταξιδιού}, «dois dias de viagem».

A diferença com o português aparece em {πέντε χρόνια}: o grego escreve no plural o que o português escreve no singular, porque {χρόνια} é neutro e o plural grego é {-ια}. {ένα χρόνο} é singular e {δύο χρόνια} é plural, e a forma escrita é a mesma nos dois, porque {χρόνια} serve para os dois. É por isso que o grego escreve {δύο χρόνια} e não {δύο χρόνος}.


> Καὶ ἤρξατο Ἰησοῦς κηρύσσειν ἐν τῇ Γαλιλαίᾳ τῷ Ἰωάννῃ τῷ βαπτιστῇ.

{tῷ Ἰωάννῃ} é dativo: o nome de pessoa depois de verbo ou preposição vai para lá. {βαπτιστῇ} também, e é um particípio substantivado que funciona como substantivo comum. O tempo, nesse caso, não aparece.

O texto de Lucas traz logo a construção mais famosa: {ἐν ἔτει πεντηκοστῷ καὶ τριακοστῷ}, «no ano trinta e cinco». {πεντηκοστῷ} e {τριακοστῷ} são dois ordinais em dativo, e o {καὶ} entre eles faz a soma. O português faz a mesma soma com uma palavra, e por isso a frase grega parece mais longa do que é. `),
  vocab: [
    V('πρώτος', 'πρώτος', 'primeiro'),
    V('πρώτη', 'πρώτος', 'primeira'),
    V('δεύτερος', 'δεύτερος', 'segundo'),
    V('τρίτος', 'τρίτος', 'terceiro'),
    V('τέταρτος', 'τέταρτος', 'quarto'),
    V('τον τρίτο χρόνο', 'τρίτος', 'no terceiro ano'),
    V('το τρίτο έτος', 'τρίτος', 'o terceiro ano'),
    V('τον πρώτο', 'πρώτος', 'primeiro (adverbial)'),
    V('τον δεύτερο', 'δεύτερος', 'depois'),
    V('μία ώρα', 'ώρα', 'uma hora'),
    V('δύο μέρες', 'μέρα', 'dois dias'),
    V('πέντε χρόνια', 'χρόνος', 'cinco anos'),
    V('στις τέσσερις', 'τέσσερις', 'às quatro'),
    V('το απόγευμα', 'απόγευμα', 'de tarde'),
    V('χρόνια', 'χρόνος', 'anos'),
    V('ταξίδι', 'ταξίδι', 'viagem'),
  ],
  rules: [
    { n: '§1', text: T('O ordinal flexiona como adjetivo: ο πρώτος, η πρώτη, το πρώτο.') },
    {
      n: '§2',
      text: T('No grego moderno o tempo vai no acusativo, sem preposição: τον τρίτο χρόνο.'),
    },
    {
      n: '§3',
      text: T(
        'O numeral no acusativo, sem substantivo, é advérbio de ordem: τον πρώτο, «primeiro».',
      ),
    },
    { n: '§4', text: T('A hora é escrita com numeral e advérbio: στις τέσσερις το απόγευμα.') },
  ],
  notes: [
    {
      label: T('Koiné'),
      text: T(
        'Na Escritura o tempo vai no dativo, τῷ τρίτῳ ἔτει, porque o dativo ainda existia. O caso mudou, a ideia não; quem traduz para grego moderno tem de trocar o caso sem trocar o sentido.',
      ),
    },
    {
      label: T('Plural'),
      text: T(
        'χρόνια é ao mesmo tempo o singular e o plural de χρόνος. Não há acento que diferencie as duas coisas, e é por isso que a frase precisa do numeral para dizer se fala de um ano ou de muitos.',
      ),
    },
  ],
  examples: [
    { text: 'ο πρώτος άνθρωπος', gloss: T('o primeiro homem') },
    { text: 'η τρίτη μέρα', gloss: T('o terceiro dia') },
    { text: 'τον τρίτο χρόνο', gloss: T('no terceiro ano') },
    { text: 'το τρίτο έτος', gloss: T('o terceiro ano') },
    { text: 'τον πρώτο μιλάει', gloss: T('ele fala primeiro') },
    { text: 'στις τέσσερις το απόγευμα', gloss: T('às quatro da tarde') },
    { text: 'δύο μέρες ταξιδιού', gloss: T('dois dias de viagem') },
    { text: 'πέντε χρόνια μετά', gloss: T('cinco anos depois') },
  ],
  tables: [
    {
      caption: T('Os cinco primeiros ordinais'),
      head: ['Αριθμός', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['πρώτος', 'πρώτος', 'πρώτη', 'πρώτο'],
        ['δεύτερος', 'δεύτερος', 'δεύτερη', 'δεύτερο'],
        ['τρίτος', 'τρίτος', 'τρίτη', 'τρίτο'],
        ['τέταρτος', 'τέταρτος', 'τέταρτη', 'τέταρτο'],
        ['πέμπτος', 'πέμπτος', 'πέμπτη', 'πέμπτο'],
      ],
    },
    {
      caption: T('Tempo e medida'),
      head: ['Τύπος', 'Παράδειγμα'],
      rows: [
        ['έτος', 'το τρίτο έτος'],
        ['μήνας', 'τον δεύτερο μήνα'],
        ['ώρα', 'στις τέσσερις'],
        ['διάρκεια', 'δύο μέρες'],
      ],
    },
    {
      caption: T('Ordinal como advérbio'),
      head: ['Κλίση', 'Σχήμα', 'Παράδειγμα'],
      rows: [
        ['αἰτιατική', 'τον + τακτικό', 'τον πρώτο'],
        ['ουδέτερο', 'τακτικό πληθυντικού', 'πρώτα'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se diz «no terceiro ano» em grego moderno?'),
    options: [
      T('στον τρίτο έτος'),
      T('τον τρίτο χρόνο'),
      T('στον τρίτον χρόνο'),
      T('τον τρίτος χρόνος'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ πρώτη μέρα (feminino de «primeiro» no nominativo)'),
      answer: 'Η',
      hint: T('Artigo feminino'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase usa o ordinal como advérbio?'),
      options: [T('ο πρώτος'), T('τον πρώτο'), T('πρώτος'), T('του πρώτου')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Ordinal e número'),
      pairs: [
        { a: 'πρώτος', b: T('1º') },
        { a: 'δεύτερος', b: T('2º') },
        { a: 'τρίτος', b: T('3º') },
        { a: 'τέταρτος', b: T('4º') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('___ τέσσερις το απόγευμα (preposição da hora)'),
      answer: 'στις',
      hint: T('A palavra grega para «às»'),
    },
  ],
};
