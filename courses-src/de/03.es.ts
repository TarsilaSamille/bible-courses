import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Los artículos definidos'),
  subtitle: T('der, die, das en los cuatro casos'),
  section: T('Los artículos'),
  body: C(`El artículo definido alemán no solo señala un objeto conocido: lleva la información de caso y, por tanto, la función de la oración. Son tres palabras, una por género: der (masculino), die (femenino), das (neutro). En plural los tres se reducen a die.

Cada caso tiene su propio sufijo. En nominativo no cambia nada. En acusativo el masculino cambia -er por -en (der → den) y los demás no cambian. En dativo todas las formas reciben -e (der → dem, die → der, das → dem). En genitivo todas reciben -s o -es, y el sustantivo masculino añade -es o una -n: des Mannes, des Vaters.

Es la terminación del artículo lo que revela la función, no el orden de las palabras. En Der Mann sieht das Kind hay un nominativo y un acusativo, y en Das Kind sieht der Mann el neutro inicial es el sujeto.

Tras una preposición el sustantivo puede aparecer sin artículo: nach Berlin, bei Maria, zu Hause. En ese caso el caso lo marca la preposición: nach exige dativo, por lo que nach dem Mann y nach dem Kind coinciden en forma aunque los sustantivos sean de distinto género.`),
  vocab: [
    V('der', 'der', 'el (masc. nom. sing.)'),
    V('die', 'die', 'la (fem. nom. sing.)'),
    V('das', 'das', 'el (neut. nom. sing.)'),
    V('den', 'der', 'el (masc. acc. sing.)'),
    V('dem', 'der', 'al (masc./neut. dat. sing.)'),
    V('des', 'der', 'del (masc./neut. gen. sing.)'),
    V('die', 'die', 'los/las (plural, todos los géneros)'),
    V('den', 'die', 'los/las (plural, acc. y dat.)'),
    V('der Vater', 'Vater', 'el padre'),
    V('die Mutter', 'Mutter', 'la madre'),
    V('das Kind', 'Kind', 'el niño'),
    V('die Stadt', 'Stadt', 'la ciudad'),
    V('das Buch', 'Buch', 'el libro'),
    V('des Mannes', 'Mann', 'del hombre (genitivo fuerte)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué caso expresa «der Mutter» en Die Mutter des Kindes kommt?'),
    options: [T('Nominativo'), T('Acusativo'), T('Dativo'), T('Genitivo')],
    answer: 3,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el dativo: mit ___ Mann (con el hombre)'),
      answer: 'dem',
      hint: T('Toda forma de dativo termina en -e.'),
    },
    {
      kind: 'fill',
      prompt: T('Pásalo a plural: das Kind → ___'),
      answer: 'die Kinder',
      hint: T('En plural el artículo es die para todos los géneros.'),
    },
    {
      kind: 'choose',
      prompt: T('En Ich sehe den Mann, ¿qué función tiene den?'),
      options: [T('nominativo'), T('acusativo'), T('dativo'), T('genitivo')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el artículo con su función.'),
      pairs: [
        { a: T('des'), b: T('genitivo masculino') },
        { a: T('dem'), b: T('dativo masculino') },
        { a: T('der'), b: T('genitivo femenino') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El nominativo es la única forma que coincide en los tres géneros; por eso la frase más neutra posible es Das Kind spielt.',
      ),
    },
    {
      n: '2',
      text: T(
        'El dativo marca la persona a quien se da, dice o envía algo: Ich gebe dem Mann das Buch.',
      ),
    },
    {
      n: '3',
      text: T(
        'En genitivo el sustantivo masculino suele tomar -s o -es (des Vaters) y el neutro -es (des Kindes); el femenino no cambia (der Frau).',
      ),
    },
    {
      n: '4',
      text: T(
        'La forma die del plural sirve para nominativo y acusativo; por eso la posición del verbo es la que desambigua: Die Kinder kommen (nominativo), Ich sehe die Kinder (acusativo).',
      ),
    },
  ],
  notes: [
    {
      label: T('Artículo o cero'),
      text: T(
        'Opcionalmente una Wechselpräposition puede eliminar el artículo: bei dem Arzt → beim Arzt, von dem Meer → vom Meer, zu dem Haus → zum Haus. La fusión en -m revela el dativo y evita la repetición, pero solo es posible porque el artículo de dativo ya termina en -m.',
      ),
    },
    {
      label: T('Vínculo bíblico'),
      text: T(
        'En 1 Juan 1:1, Im Anfang war das Wort: el neutro das es nominativo y sujeto, y war es el verbo. El artículo cumple aquí la misma función que en griego, pero en alemán el género es gramatical y no heredado del griego.',
      ),
    },
  ],
  examples: [
    {
      text: 'Der Mann liest das Buch.',
      gloss: T('El hombre lee el libro (der = nom. masc., das = acc. neut.).'),
    },
    {
      text: 'Das Kind sieht der Mann.',
      gloss: T('El hombre ve al niño (el neutro antepuesto pasó a ser sujeto).'),
    },
    {
      text: 'Ich gebe dem Mann das Buch.',
      gloss: T('Le doy el libro al hombre (dativo = persona, acusativo = cosa).'),
    },
    { text: 'Die Mutter des Kindes kommt.', gloss: T('La madre del niño viene (dos genitivos).') },
    {
      text: 'Die Kinder spielen im Garten.',
      gloss: T('Los niños juegan en el jardín (im = in dem, dativo por lugar).'),
    },
    { text: 'Nach Berlin fahren wir.', gloss: T('Vamos a Berlín (destino sin artículo).') },
  ],
  tables: [
    {
      caption: T('Declinación del artículo definido'),
      head: ['Caso', 'masc. sing.', 'fem. sing.', 'neut. sing.', 'plural'],
      rows: [
        ['Nominativo', 'der Mann', 'die Frau', 'das Kind', 'die Kinder'],
        ['Acusativo', 'den Mann', 'die Frau', 'das Kind', 'die Kinder'],
        ['Dativo', 'dem Mann', 'der Frau', 'dem Kind', 'den Kindern'],
        ['Genitivo', 'des Mannes', 'der Frau', 'des Kindes', 'der Kinder'],
      ],
    },
    {
      caption: T('Cómo se lee la información de caso'),
      head: ['Forma observada', 'Leitura', 'Pergunta que responde'],
      rows: [
        ['der / die / das', 'nominativo', 'quem ou o quê faz a ação?'],
        ['den / die / das', 'acusativo', 'quem ou o quê recebe a ação?'],
        ['dem / der / dem', 'dativo', 'a quem ou para quem?'],
        ['des / der / des', 'genitivo', 'de quem ou de quê?'],
        ['die (plural)', 'nominativo ou acusativo', 'ambos possíveis'],
        ['den (plural)', 'dativo ou acusativo', 'ambos possíveis'],
      ],
    },
  ],
};
