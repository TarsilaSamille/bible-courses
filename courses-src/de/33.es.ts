import { C, T, V } from '../shared.mts';

export default {
  id: 33,
  title: T('Los posesivos'),
  subtitle: T('mein, dein, sein, ihr y unser'),
  section: T('Los pronombres'),
  body: C(`Los posesivos alemanes forman una familia de doce palabras, y todas siguen la misma regla de flexión, con dos excepciones. La regla es: nominativo y acusativo terminan en nada o en -n según el número; dativo y genitivo reciben -em y -es. mein, dein, sein, ihr, unser, euer marcan nominativo y acusativo sin terminación en singular y con -n en plural: mein Buch, meine Bücher, meinem Buch, meines Buches. Euer es la única forma escrita con -e- inicial.

Las dos excepciones son sein e ihr. Sein es el posesivo de tercera persona, y en la escritura es idéntico a la forma sie: er sieht sein Buch y er sieht sie, y decide el sentido. ihr, además de ser el posesivo de segunda persona del plural, es el pronombre familiar de tratamiento; el contexto hace la distinción, igual que la hace entre Sie y Sie mayúscula. En el lenguaje hablado el posesivo de tercera persona aparece rara vez: casi siempre se repite el artículo, como en Ich sehe den Hund, y el posesivo se reserva para el énfasis, la ironía o para evitar la repetición.

El posesivo es un adjetivo, y como tal se flexiona: mein kleiner Hund, meine kleine Katze, mit meinem kleinen Hund, wegen meines kleinen Hundes. Por eso se comporta como el adjetivo de la lección 14: tras un artículo definido la forma es la débil, y lo que cambia es el género y el número, no el posesivo en sí.

Hay un caso especial que merece atención: el poseedor con personas en genitivo puede omitirse tras un posesivo. Der Vater meiner Schwester, die Mutter meines Bruders. Y el posesivo puede convertirse en sujeto, como en Mein Vater ist Lehrer.

Por último, existe un conjunto de sustantivos que funciona como pronombre posesivo y prescinde del artículo: mein Vater, dein Buch, sein Haus, ihr Kind, unser Land. Son los posesivos de uso cotidiano, y es en ellos donde el posesivo aparece más a menudo que en cualquier otro lugar.`),
  vocab: [
    V('mein', 'mein', 'mi (1.ª persona)'),
    V('dein', 'dein', 'tu (2.ª persona)'),
    V('sein', 'sein', 'su (3.ª persona)'),
    V('ihr', 'ihr', 'vuestro (2.ª plural)'),
    V('unser', 'unser', 'nuestro (1.ª plural)'),
    V('euer', 'euer', 'vuestro (2.ª plural, con -e-)'),
    V('meinem', 'mein', 'mi (dativo)'),
    V('meiner', 'mein', 'mi (femenino / genitivo fuerte)'),
    V('meines', 'mein', 'mi (neutro, genitivo)'),
    V('Ihre', 'Ihr', 'suya (cortesía, mayúscula)'),
    V('mein Vater', 'mein', 'mi padre (sin artículo)'),
    V('sein Buch', 'sein', 'su libro'),
    V('der Vater meiner Schwester', 'Vater', 'el padre de mi hermana (genitivo)'),
    V('unser Land', 'unser', 'nuestro país'),
    V('von wegen', 'wegen', 'a causa de (con genitivo)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la forma correcta en «mit ___ Bruder»?'),
    options: [T('mein'), T('meinem'), T('meines'), T('meine')],
    answer: 1,
    hint: T('Regla §2: el dativo añade -em al posesivo.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el plural: Ich habe ___ Bücher (mis libros).'),
      answer: 'meine',
      hint: T('En plural el posesivo lleva -e, igual que el sustantivo.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración es correcta con el poseedor de 2.ª persona del plural?'),
      options: [
        T('Das ist euer Haus.'),
        T('Das ist ihr Haus.'),
        T('Das ist eueren Haus.'),
        T('Das ist eurem Haus.'),
      ],
      answer: 0,
      hint: T('Regla §4: ihr es pronombre, euer es posesivo.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa el genitivo: wegen ___ Bruders (de mi hermano).'),
      answer: 'meines',
      hint: T('El genitivo añade -es al posesivo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el posesivo con la persona.'),
      pairs: [
        { a: T('mein'), b: T('1.ª persona del singular') },
        { a: T('unser'), b: T('1.ª persona del plural') },
        { a: T('Ihr'), b: T('usted, tratamiento formal') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Nominativo y acusativo no tienen terminación en singular y reciben -n en plural: mein Haus, meine Häuser.',
      ),
    },
    {
      n: '2',
      text: T('Dativo y genitivo reciben -em y -es: mit meinem Bruder, wegen meines Bruders.'),
    },
    {
      n: '3',
      text: T(
        'Solo el poseedor cambia; la forma del sustantivo que lo sigue es la de un adjetivo, con -e en singular y -n en plural.',
      ),
    },
    {
      n: '4',
      text: T(
        'Escribir -e- inicial (euer, Euer) es opcional y común, pero es error usar ihr en lugar de euer como posesivo: *ihr Haus está mal para vuestro.',
      ),
    },
    {
      n: '5',
      text: T(
        'Tras un posesivo se usa el genitivo, que puede omitirse con nombres de persona: das Haus meines Vaters, das Haus meiner Mutter, des Herrn.',
      ),
    },
  ],
  notes: [
    {
      label: T('Dónde aparece de verdad el posesivo'),
      text: T(
        'En el habla espontánea el posesivo es raro. Decir Ich sehe mein Buch es más natural que Ich sehe dein Buch, pero quien habla prefiere Ich sehe das Buch. El posesivo gana fuerza en tres situaciones: cuando el nombre es ambiguo (Meine Mutter ist gekommen puede ser mi madre o la tuya), cuando se busca contraste (Mein Bruder arbeitet, seiner nicht) y cuando se evita la repetición (Ich habe mein Buch gelesen und danach ihres). La lección 31 explica por qué el artículo gana en el uso corriente.',
      ),
    },
    {
      label: T('Vínculo bíblico'),
      text: T(
        'El posesivo es la marca de pertenencia en el texto bíblico, y el patrón es claro: Ich bin dein, du bist mein (Juan 2:16), una frase que intercambia los posesivos sin perder el ritmo. Die Welt mit ihrer Pracht und ihrer Herrlichkeit (Isaías 2:14) repite la -r del genitivo, y el pronombre posesivo ocupa el lugar del artículo: alle ihre Städte.',
      ),
    },
  ],
  examples: [
    { text: 'Mein Vater ist Lehrer.', gloss: T('Mi padre es profesor (posesivo como sujeto).') },
    { text: 'Das ist mein Buch.', gloss: T('Este es mi libro (sin artículo).') },
    { text: 'Ich sehe deine Schwester.', gloss: T('Veo a tu hermana (dein, 2.ª persona).') },
    { text: 'Er liebt sein Volk.', gloss: T('Él ama a su pueblo (sein = suyo).') },
    {
      text: 'Wir singen in unserer Kirche.',
      gloss: T('Cantamos en nuestra iglesia (dativo unserem).'),
    },
    {
      text: 'Wegen meines Bruders blieb ich.',
      gloss: T('Por causa de mi hermano me quedé (genitivo meines).'),
    },
    {
      text: 'Meine kleinen Kinder schlafen.',
      gloss: T('Mis pequeños niños duermen (adjetivo débil plural).'),
    },
    { text: 'Sagen Sie Ihren Namen.', gloss: T('Diga su nombre (Ihre mayúscula, cortesía).') },
    { text: 'Das ist euer Buch.', gloss: T('Este es vuestro libro (euer con -e-).') },
  ],
  tables: [
    {
      caption: T('Declinación de los posesivos'),
      head: ['Caso', 'Singular', 'Plural'],
      rows: [
        ['Nominativo', 'mein Buch', 'meine Bücher'],
        ['Acusativo', 'mein Buch', 'meine Bücher'],
        ['Dativo', 'meinem Buch', 'meinen Büchern'],
        ['Genitivo', 'meines Buches', 'meiner Bücher'],
        ['fem. Nom.', 'meine Frau', 'meine Frauen'],
        ['neutro Nom.', 'mein Kind', 'meine Kinder'],
      ],
    },
    {
      caption: T('Posesivos por persona y por caso'),
      head: ['Pessoa', 'Nominativo', 'Dativo', 'Genitivo'],
      rows: [
        ['ich', 'mein', 'meinem', 'meines'],
        ['du', 'dein', 'deinem', 'deines'],
        ['er/sie/es', 'sein', 'seinem', 'seines'],
        ['wir', 'unser', 'unserem', 'unseres'],
        ['ihr', 'euer', 'eurem', 'eures'],
        ['Sie', 'Ihr', 'Ihrem', 'Ihres'],
      ],
    },
  ],
};
