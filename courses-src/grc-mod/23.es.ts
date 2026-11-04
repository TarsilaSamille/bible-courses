import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  section: T('Numeral'),
  title: T('Cardinales y el sustantivo que va a genitivo'),
  subtitle: T('ένα — δύο — τρεις — δύο ανθρώπων'),
  body: C(`## Uno, dos, tres

Los cardinales solo son irregulares en los tres primeros. {ένα} es uno, {δύο} es dos, {τρεις} es tres; a partir de ahí la serie es regular y solo yuxtapone: {τέσσαρις}, {πέντε}, {εξι}, {επτά}, {οχτώ}, {εννέα}, {δέκα}. Por encima de diez el número no flexiona: {δεκαπέντε}, {εκατόν}, {χιλιάδες}.

El numeral concuerda en género, y por eso el griego tiene tres palabras para el uno: {ένας} masculino, {μία} femenino, {ένα} neutro. En el dos y el tres la concordancia es más floja: {δύο} y {τρεις} sirven para los tres géneros, y {τρία} solo aparece cuando el numeral se usa solo, como sustantivo.

{τρεις} es el único que flexiona de verdad. En el genitivo se vuelve {τριών}, y por eso {τρεις ανθρώπων} significa "tres personas": el numeral cuenta y el sustantivo nombra.

## Después del numeral, el sustantivo va a genitivo

Esta es la construcción que el español no tiene. En vez de decir "tres personas", el griego dice "tres, de personas": {τρεις ανθρώπων}. El numeral se queda en el caso que la frase necesita y el sustantivo va a genitivo, como si fuera una parte contada.

El motivo es histórico. El griego antiguo tenía partitivos: {τρεις}, {τετράδες}, "tres, cuatro", usados solos. Cuando los sustantivos entraron en la cuenta, pasaron a genitivo, y la construcción se quedó.

La prueba es fácil: si la frase está contando, el sustantivo está en {-ων}. {δύο φίλων}, {τρεις παιδιών}, {πέντε ανθρώπων}. Si la frase está usando el sustantivo como sujeto u objeto, el numeral concuerda normalmente: {δύο φίλοι έρχονται}, "vienen dos amigos".

## El numeral rige el caso, y el caso rige el sustantivo

Hay dos construcciones y no se mezclan. Con el numeral en nominativo, el sustantivo va en nominativo y concuerda en género: {δύο φίλοι}, {δύο φίλες}, {δύο φίλα}. Con el numeral en cualquier otro caso, el sustantivo va a genitivo: {δύο φίλων}, {τρεις φίλους}, "de dos amigos", y el género del sustantivo desaparece.

Es la diferencia entre decir "dos amigos han llegado" y "llegaron dos amigos". En español las dos frases tienen el mismo sustantivo; en griego una tiene {φίλοι} y la otra {φίλων}, y la información de género desaparece en la segunda.

## Numeral o sustantivo numeral

El numeral puede volverse sustantivo y tomar género: {ο πρώτος}, "el primero", {η πρώτη}, "la primera". Y puede ser promovido a pronombre: {ένας από εσάς}, "uno de vosotros". Así dice el griego "un segundo", "un poco", "un trozo": {μια ώρα}, {ένα κομμάτι}.

Con el numeral abstracto viene el genitivo de lo que se cuenta: {ένα κομμάτι ψωμί}, {δύο φέρτα}.

## Dónde cuenta el numeral en la Escritura

> Καὶ εἶπεν αὐτοῖς· Δοτε αὐτῷ φαγεῖν.

En Marcos 6, Jesús manda a los discípulos multiplicar los panes para {τέσσαρες χιλιάδας}. El numeral {τέσσαρες} es la forma masculina y {χιλιάδας} está en genitivo, porque lo que se cuenta son las personas, no los miles.

Quien lee {τρεῖς} o {τέσσαρες} aislado y no nota que el sustantivo siguiente está en genitivo traduce el número y pierde la relación.`),
  vocab: [
    V('ένας', 'ένας', 'uno (masculino)'),
    V('μία', 'μία', 'una (femenino)'),
    V('ένα', 'ένα', 'uno (neutro)'),
    V('δύο', 'δύο', 'dos'),
    V('τρεις', 'τρεις', 'tres'),
    V('τρία', 'τρία', 'tres (neutro)'),
    V('τριών', 'τρεις', 'de tres (genitivo)'),
    V('τέσσαρις', 'τέσσαρις', 'cuatro'),
    V('πέντε', 'πέντε', 'cinco'),
    V('δέκα', 'δέκα', 'diez'),
    V('δύο ανθρώπων', 'δύο', 'de dos personas'),
    V('τρεις ανθρώπων', 'τρεις', 'de tres personas'),
    V('ανθρώπων', 'άνθρωπος', 'de personas'),
    V('δύο φίλοι', 'φίλος', 'dos amigos'),
    V('δύο φίλων', 'φίλος', 'de dos amigos'),
    V('ο φίλος', 'φίλος', 'el amigo'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Los cardinales solo son irregulares en uno, dos y tres; por encima de diez no flexionan.',
      ),
    },
    {
      n: '§2',
      text: T('Después del numeral, el sustantivo va a genitivo: δύο ανθρώπων, "de dos personas".'),
    },
    {
      n: '§3',
      text: T(
        'El sustantivo concuerda con el numeral solo cuando el numeral está en nominativo; en los otros casos va a genitivo.',
      ),
    },
    { n: '§4', text: T('El número uno tiene tres formas por género: ένας, μία, ένα.') },
  ],
  notes: [
    {
      label: T('Etimología'),
      text: T(
        'La construcción de genitivo viene de un partitivo del griego antiguo que ya valía solo: τρεῖς, "tres", sin sustantivo ninguno. Cuando el nombre entró en la cuenta, entró en el caso que la cuenta pedía.',
      ),
    },
    {
      label: T('Español'),
      text: T(
        'La construcción no tiene traducción literal. Para "cinco años", el griego escribe πέντε χρόνια o, si cuenta con rigor, πέντε ετών. La segunda parece más extraña y es la que el griego prefiere cuando el número importa.',
      ),
    },
  ],
  examples: [
    { text: 'δύο άνθρωποι έρχονται', gloss: T('vienen dos personas') },
    { text: 'δύο ανθρώπων έρχονται', gloss: T('vienen dos personas') },
    { text: 'τρεις φίλοι έρχονται', gloss: T('vienen tres amigos') },
    { text: 'τρεις παιδιών παίζουν', gloss: T('juegan tres niños') },
    { text: 'πέντε χρόνια', gloss: T('cinco años') },
    { text: 'μία ώρα δουλειάς', gloss: T('una hora de trabajo') },
    { text: 'δύο φίλοι', gloss: T('dos amigos') },
    { text: 'δύο φίλων', gloss: T('de dos amigos') },
  ],
  tables: [
    {
      caption: T('Los primeros cardinales'),
      head: ['Αριθμός', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['ένα', 'ένας', 'μία', 'ένα'],
        ['δύο', 'δύο', 'δύο', 'δύο'],
        ['τρία', 'τρεις', 'τρεις', 'τρία'],
        ['τέσσαρα', 'τέσσαρις', 'τέσσαρις', 'τέσσαρα'],
        ['πέντε', 'πέντε', 'πέντε', 'πέντε'],
      ],
    },
    {
      caption: T('Numeral sustantivado o no'),
      head: ['Κλίση αριθμητικού', 'Μορφή', 'Παράδειγμα'],
      rows: [
        ['οριστική', 'το ουσιαστικό συμφωνεί', 'δύο φίλοι'],
        ['γενική', 'ουσιαστικό σε -ων', 'δύο φίλων'],
        ['αἰτιατική', 'ουσιαστικό σε -ους', 'δύο φίλους'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se dice "vienen dos personas" contando con rigor?'),
    options: [
      T('δύο άνθρωποι έρχονται'),
      T('δύο ανθρώπων έρχονται'),
      T('δύο του ανθρώπου'),
      T('δυο ανθρώπων έρχονται'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('τρεις ___ (de tres personas)'),
      answer: 'ανθρώπων',
      hint: T('Genitivo plural'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es el genitivo de "τρεις"?'),
      options: [T('τριών'), T('τρεις'), T('τρία'), T('τριώς')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Número y valor'),
      pairs: [
        { a: 'δύο', b: T('dos') },
        { a: 'τρεις', b: T('tres') },
        { a: 'τέσσαρις', b: T('cuatro') },
        { a: 'πέντε', b: T('cinco') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('___ φίλοι έρχονται (numeral, dos)'),
      answer: 'Δύο',
      hint: T('Con mayúscula'),
    },
  ],
};
