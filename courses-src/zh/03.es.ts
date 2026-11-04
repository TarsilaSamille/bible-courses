import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('Fonética'),
  title: T('Los cuatro tonos'),
  subtitle: T('La misma sílaba, cuatro significados: el tono es parte de la palabra'),
  body: C(`## Qué es el tono

El mandarín es una lengua tonal: cada sílaba lleva uno de cuatro tonos, más un tono neutro. El tono no es melodía, es altura relativa. Dos sílabas idénticas con tonos distintos son palabras distintas, a veces de sentido opuesto.

Los cuatro tonos son {ā}, primero, alto y plano; {á}, segundo, ascendente; {ǎ}, tercero, cae y sube; y {à}, cuarto, descendente. El tono neutro, sin marca, es el de las sílabas cortas y suena a medio tono.

El ejemplo más citado muestra por qué importa para traducir: {mā} es "madre", {má} es "caballo" y {mǎ} es "ficha de ajedrez". Misma escritura, tres palabras sin relación.

## El atajo del tercer tono

Para quien lee hay un atajo: **casi toda sílaba de tercer tono se escribe con {i} o {u}**. Por eso {nǐ}, "tú", y {hǎo}, "bueno", suenan tan distinto de {nī} y {hāo}. La regla falla en pocos casos, {ē} y {é}, lo que basta para engañar a quien se apoya solo en ella.

## El tono al leer la Biblia

Los versículos chinos no llevan ninguna marca de tono, y el traductor eligió cada uno por el sentido. Quien lee en voz alta tiene que recrear esa elección. En Juan 1:1, {yǔ} es el verbo "ser" en tercera persona, y el traductor escribe {是}: el contexto resuelve lo que la escritura no dice.`),
  vocab: [
    V('妈', '妈', 'madre (mā, tono 1)'),
    V('马', '马', 'caballo; ficha de ajedrez (mǎ, tono 3)'),
    V('nǐ', '你', 'tú (nǐ, tono 3)'),
    V('hǎo', '好', 'bueno (hǎo, tono 3)'),
    V('是', '是', 'ser (shì, tono 4)'),
    V('不', '不', 'no (bù, tono 4)'),
    V('四', '四', 'cuatro (sì, tono 4)'),
  ],
  rules: [
    { n: '1', text: T('Cada sílaba tiene uno de cuatro tonos, o tono neutro.') },
    { n: '2', text: T('El tercer tono casi siempre se escribe con {i} o {u}: {nǐ} y {hǎo}.') },
    {
      n: '3',
      text: T('Dos tercer tonos seguidos, el primero se pronuncia bajo: {nǐ hǎo} suena "níhhǎo".'),
    },
  ],
  notes: [
    {
      label: T('Por qué el texto no lleva tonos'),
      text: T(
        'La {和合本} de 1919 escribe sin marcas de tono, por influencia de la costumbre europea. Las ediciones modernas las añaden.',
      ),
    },
  ],
  examples: [
    { text: '妈', gloss: T('mā — madre (tono 1)') },
    { text: '马', gloss: T('mǎ — caballo / pieza (tono 3)') },
    { text: '你好', gloss: T('nǐ hǎo — hola (dos terceros)') },
  ],
  tables: [
    {
      caption: T('Los cuatro tonos'),
      head: [T('Tono'), T('Marca'), T('Altura'), T('Ejemplo')],
      rows: [
        [T('1'), T('{ā}'), T('alto y plano'), T('{mā} madre')],
        [T('2'), T('{á}'), T('ascendente'), T('{má} caballo')],
        [T('3'), T('{ǎ}'), T('cae y sube'), T('{mǎ} ficha')],
        [T('4'), T('{à}'), T('descendente'), T('{mà} cuatro cosas')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {nǐ hǎo}, ¿qué pasa con el primer tono?'),
    options: [
      T('Se queda en el tercer tono'),
      T('Se pronuncia bajo, para no chocar'),
      T('Cambia al primer tono'),
      T('Se vuelve tono neutro'),
    ],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Escribe la vocal acentuada de "madre": m____'), answer: 'ā' },
    {
      kind: 'match',
      prompt: T('Une la sílaba con su tono'),
      pairs: [
        { a: T('{mā}'), b: T('tono 1 — madre') },
        { a: T('{mà}'), b: T('tono 4 — descendente') },
        { a: T('{hǎo}'), b: T('tono 3 — cae y sube') },
        { a: T('{má}'), b: T('tono 2 — ascendente') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
