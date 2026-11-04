import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  section: T('Nombre'),
  title: T('Singular, plural y los restos del dual'),
  subtitle: T('οι άνθρωποι — δυο άνθρωποι — ανθρώπων'),
  body: C(`## Tres terminaciones hacen el plural regular

El griego hace el plural por terminación, y hay tres terminaciones para tres géneros. El masculino añade {-οι} o {-ους}: {ο άνθρωπος} da {οι άνθρωποι}, {ο λέων} da {οι λέοντες}. El femenino añade {-ες}: {η γυναίκα} da {οι γυναίκες}. El neutro añade {-ια}: {το παιδί} da {τα παιδιά}. Tres terminaciones, tres géneros, y el artículo va detrás: {οι}, {οι}, {τα}.

El neutro no añade nada: sustituye la terminación entera. {το παιδί} no queda {το παιδί-ο}, se vuelve {τα παιδιά}. Y el verbo tiene que cambiar de persona, porque el número cambió: "el niño duerme" es {το παιδί κοιμάται}, "los niños duermen" es {τα παιδιά κοιμούνται}. Lo mismo pasa con el adjetivo, que en el neutro plural pierde el género: {τα παιδιά καλά}, y no "καλές".

## El genitivo plural es un fósil

Todo genitivo plural griego termina en {-ων}, sin excepción: {ανθρώπων}, {γυναικών}, {παιδιών}, {φίλων}. Es el único resto vivo de la {-ων} que el griego antiguo tenía en todas las declinaciones, y sobrevivió porque es la forma que el griego usa para contar, como muestra la lección sobre el numeral.

La misma {-ων} aparece en {δύο ανθρώπων}, y por eso se dice "de dos personas" y no "dos personas". El genitivo hace las dos cosas: marca número y marca parte de un todo.

## El dual todavía tiene hueco

El griego antiguo tenía tres números. El español conservó dos. El griego moderno perdió el dual como categoría morfológica, pero lo conserva como hueco en el sistema de conteo: {δυο άνθρωποι} cuenta exactamente dos personas, y no es lo mismo que {πολλοί άνθρωποι}, que cuenta muchas.

Cuando el dual reaparece en formas fijas, reaparece como {-ες} en el vocativo, no en el plural: {πατέρες}, {υἱές μου}. Es la forma de dirigirse a un grupo de padres o de hijos, y es la que usa la Biblia cuando habla a un pueblo. El vocativo neutro es el único que no cambió: {παιδί}, {φίλε}.

## Lo que muestra la Biblia

> Κύριε, σῶσον τὸν λαόν σου καὶ εὐλόγησον τὴν κληρονομίαν σου, καὶ ἐλέησον αὐτοὺς καθὼς ἤλαφθεν ἐν τοῖς θρόνοις σου.

Las terminaciones de vocativo de {πατέρες} reaparecen en {εὐλόγησον} y {ἐλέησον}: son imperativos de segunda persona del singular que comparten la terminación con el vocativo. Quien conoce el vocativo reconoce el imperativo en el texto bíblico, y quien solo conoce el indicativo lee esas dos palabras como una sola.
`),
  vocab: [
    V('ο άνθρωπος', 'ο άνθρωπος', 'el hombre, la persona'),
    V('οι άνθρωποι', 'ο άνθρωπος', 'las personas'),
    V('η γυναίκα', 'η γυναίκα', 'la mujer'),
    V('οι γυναίκες', 'η γυναίκα', 'las mujeres'),
    V('το παιδί', 'το παιδί', 'el niño'),
    V('τα παιδιά', 'το παιδί', 'los niños'),
    V('ο λέων', 'ο λέων', 'el león'),
    V('οι λέοντες', 'ο λέων', 'los leones'),
    V('το σπίτι', 'το σπίτι', 'la casa'),
    V('το βιβλίο', 'το βιβλίο', 'el libro'),
    V('τα βιβλία', 'το βιβλίο', 'los libros'),
    V('ανθρώπων', 'άνθρωπος', 'de personas (genitivo)'),
    V('γυναικών', 'γυναίκα', 'de mujeres (genitivo)'),
    V('παιδιών', 'παιδί', 'de niños (genitivo)'),
    V('φίλων', 'φίλος', 'de amigos (genitivo)'),
    V('πατέρες', 'πατέρας', 'padres (vocativo)'),
    V('δύο ανθρώπων', 'δύο', 'de dos personas'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El plural regular es -οι/-ους en el masculino, -ες en el femenino y -ια en el neutro.',
      ),
    },
    { n: '§2', text: T('El genitivo plural es siempre -ων: ανθρώπων, γυναικών, παιδιών.') },
    { n: '§3', text: T('El neutro plural cambia el artículo por τα y el verbo por el plural.') },
    {
      n: '§4',
      text: T('El dual sobrevive como hueco de conteo: δυο άνθρωποι son exactamente dos.'),
    },
    { n: '§5', text: T('El vocativo en -ες se dirige a un grupo, no a un objeto: πατέρες.') },
  ],
  notes: [
    {
      label: T('Herencia'),
      text: T(
        'παιδιών y ανθρώπων comparten la terminación por herencia del genitivo plural antiguo. Un sustantivo que perdió la declinación conservó esa única terminación porque sigue siendo útil: es la forma con la que el griego cuenta.',
      ),
    },
    {
      label: T('Registro'),
      text: T(
        'δυο άνθρωποι suena formal y literario en el habla de hoy. Se dice πολλοί άνθρωποι, o se usa el numeral δύο; la categoría del dual sigue en la gramática de la escuela, no en la boca.',
      ),
    },
  ],
  examples: [
    { text: 'οι άνθρωποι δουλεύουν', gloss: T('las personas trabajan') },
    { text: 'οι γυναίκες μιλούν', gloss: T('las mujeres hablan') },
    { text: 'τα παιδιά τρέχουν', gloss: T('los niños corren') },
    { text: 'οι λέοντες τρώγουν', gloss: T('los leones comen') },
    { text: 'τα βιβλία είναι εδώ', gloss: T('los libros están aquí') },
    { text: 'δύο άνθρωποι ήρθαν', gloss: T('vinieron dos personas') },
    { text: 'πολλοί άνθρωποι ήρθαν', gloss: T('vinieron muchas personas') },
    { text: 'ανθρώπων πολλών', gloss: T('de muchas personas') },
  ],
  tables: [
    {
      caption: T('Tres números, tres artículos'),
      head: ['Αριθμός', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['ένα', 'ο άνθρωπος', 'η γυναίκα', 'το παιδί'],
        ['δυο', 'δύο άνθρωποι', 'δύο γυναίκες', 'δύο παιδιά'],
        ['πολλοί', 'οι άνθρωποι', 'οι γυναίκες', 'τα παιδιά'],
      ],
    },
    {
      caption: T('El genitivo plural'),
      head: ['Κλίση', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['γενική', 'ανθρώπων', 'γυναικών', 'παιδιών'],
        ['κλητική', 'άνθρωπε', 'γυναίκα', 'παιδί'],
      ],
    },
    {
      caption: T('Plurales irregulares'),
      head: ['Singular', 'Plural'],
      rows: [
        ['ο άνθρωπος', 'οι άνθρωποι'],
        ['η φύση', 'οι φύσεις'],
        ['το δέντρο', 'τα δέντρα'],
        ['το νερό', 'τα νερά'],
        ['ο κανείς', 'οι κανείς'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el plural de "το παιδί"?'),
    options: [T('τα παιδιά'), T('οι παιδιά'), T('τα παίδια'), T('το παιδί')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ παιδιά τρέχουν (artículo neutro plural)'),
      answer: 'τα',
      hint: T('El artículo del neutro en plural'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se dice "de dos personas"?'),
      options: [T('δύο άνθρωποι'), T('δύο ανθρώπων'), T('δυο ανθρώπων'), T('δύο του ανθρώπου')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Número de cada forma'),
      pairs: [
        { a: 'δυο άνθρωποι', b: T('dual') },
        { a: 'πολλοί άνθρωποι', b: T('plural') },
        { a: 'ο άνθρωπος', b: T('singular') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('___ λέοντες τρώγουν'),
      answer: 'οι',
      hint: T('Artículo masculino plural'),
    },
  ],
};
