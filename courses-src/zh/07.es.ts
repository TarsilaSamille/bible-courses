import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  section: T('Sintaxis'),
  title: T('{是} y la frase que solo tiene sustantivo'),
  subtitle: T('No toda frase tiene verbo, y en chino eso es normal'),
  body: C(`## Una frase sin verbo

Después de {wǒ} y {nǐ}, el mandarín puede decir {tā shì shīfu}, "él es profesor". {shì} es el verbo "ser", y suele traducirse por "es". Pero tiene un segundo uso, más interesante y muy frecuente: {shì} **introduce un sustantivo como descripción**, sin ningún verbo en el resto de la frase.

{wǒ shì shīfu} es "yo soy profesor". {wǒ shì Zhāng} es "yo soy Zhang". En el segundo, {Zhāng} no es verbo ni algo de que se predique: es lo que se dice de alguien sin necesitar la palabra "ser".

## El Salmo 23 y la frase sin verbo

El Salmo 23 dice, en la {和合本}, {yēhéhuá shì wǒ de yáng}, "Yahvé es mi pastor". Traducido al pie de la letra, el verbo "es" parece flojo. Pero en mandarín el {shì} de identificación se omite a menudo, y la frase {shì wǒ de yáng} es "pastor mío", sin verbo alguno. Todo el peso está en el {de}: {wǒ de} es un genitivo breve, "mi", pegado sin espacio.

Quien traduce palabra por palabra produce un disparate. Quien reconoce el sintagma nominal produce "El Señor es mi pastor" sin esfuerzo.

## Tres frases que solo difieren en el verbo

{shì} añade un sustantivo como descripción. Compara: {tā shì shīfu}, él es profesor; {tā zài nàlǐ}, él está allí; y {tā lái le}, él vino. La primera identifica, la segunda dice dónde, la tercera narra lo ocurrido. Las tres tienen verbo, pero solo la primera usa {shì}.`),
  vocab: [
    V('shì', '是', 'ser; identificar (shì)'),
    V('de', '的', 'genitivo breve: de (de)'),
    V('羊', '羊', 'oveja; pastor (yáng)'),
    V('zài', '在', 'estar en (zài)'),
    V('那里', '那里', 'allí, aquel lugar (nàlǐ)'),
    V('lái', '来', 'venir (lái)'),
    V('耶和华', '耶和华', 'Yahvé (Yēhéhuá)'),
    V('牧者', '牧者', 'pastor (mùzhě)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{shì} significa "ser" en portugués, pero en mandarín es también verbo de descripción.',
      ),
    },
    { n: '2', text: T('{de} liga la posesión sin verbo: {wǒ de shū} = "mi libro".') },
    { n: '3', text: T('{shì} identifica, {zài} localiza, {lái} narra: no son sinónimos.') },
  ],
  notes: [
    {
      label: T('Por qué el Salmo 23 engaña en traducción literal'),
      text: T(
        '{yēhéhuá shì wǒ de yáng} tiene cuatro palabras. La versión portuguesa añade "es mi", tres palabras que el chino no tiene. La habilidad está en reconocer el sintagma nominal, no en decorar caracteres.',
      ),
    },
  ],
  examples: [
    { text: '他是老师', gloss: T('tā shì lǎoshī — él es profesor') },
    { text: '我在那里', gloss: T('wǒ zài nàlǐ — yo estoy allí') },
    { text: '耶和华是我的牧者', gloss: T('Yēhéhuá shì wǒ de mùzhě — el Señor es mi pastor') },
  ],
  tables: [
    {
      caption: T('Tres verbos que no se sustituyen'),
      head: [T('Verbo'), T('Pregunta que responde'), T('Ejemplo')],
      rows: [
        [T('{shì}'), T('¿Qué es?'), T('{tā shì shīfu} es profesor')],
        [T('{zài}'), T('¿Dónde está?'), T('{tā zài nàlǐ} está allí')],
        [T('{lái}'), T('¿Qué hizo?'), T('{tā lái le} vino')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {我在那里}, ¿qué función cumple {在}?'),
    options: [
      T('Identifica lo que es'),
      T('Indica dónde está'),
      T('Marca tiempo pasado'),
      T('Liga la posesión'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "Yahvé es mi pastor" (耶和华____我的牧者): ____'),
      answer: '是',
    },
    {
      kind: 'match',
      prompt: T('Une el verbo con la pregunta'),
      pairs: [
        { a: T('{shì}'), b: T('¿Qué es?') },
        { a: T('{zài}'), b: T('¿Dónde está?') },
        { a: T('{lái}'), b: T('¿Qué hizo?') },
        { a: T('{的}'), b: T('¿De quién es?') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
