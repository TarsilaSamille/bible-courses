import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('El comparativo y el superlativo'),
  subtitle: T('más/menos — el más… (¡relativo!)'),
  section: T('Adjetivos y adverbios'),
  body: C(`## Comparativo de desigualdad

Se forma con {más} o {menos} + adjetivo, y el adjetivo **no** cambia: {más grande} «más grande» · {menos claro} «menos claro» · {más difícil} «más difícil». Para la igualdad, {tan} … {como}: {tan bueno como} «tan bueno como».

A diferencia del inglés, el español no puede empezar frase con {más}: escribe {Más vale}, nunca «*Más vale»! Y cuando se comparan términos muy distintos hace falta {que} o {de lo que}: {Es más alto de lo que era} «es más alto de lo que era».

## ¿{que} o {como}?

• {que} = **comparación**, traduce «que» comparativo: {mayor que} «mayor que» · {mejor que} «mejor que».
• {como} = **igualdad**: {es como tú} «es como tú».

Patrón: {más} + adjetivo + **{que}** + término. Las expresiones fijas ganan: {más que} «más que».

## Comparativos irregulares

• {bueno} → {mejor} «mejor» (superlativo {el mejor})
• {malo} → {peor} «peor» ({el peor})
• {grande} → {mayor} «mayor» ({el mayor})
• {pequeño} → {menor} «menor» ({el menor})

## Superlativo relativo

Necesita artículo: {el más grande} «el más grande» · {la mejor} «la mejor» · {los más jóvenes} «los más jóvenes». En frases como {es la mejor} el artículo puede caerse.

Bíblico: 1 Co 13.13 {Ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor} «el mayor de ellos es el amor».

## Superlativo absoluto

Sin artículo, con el sufijo {-ísimo}: {buenísimo} «buenísimo» · {grandísimo} «grandísimo» · {muchísimo} «muchísimo» · {cercanísimo} «cercanísimo». También es frecuente {muy} + adjetivo.`),
  vocab: [
    V('más grande', 'grande', 'más grande'),
    V('mejor', 'bueno', 'mejor (¡irregular!)'),
    V('peor', 'malo', 'peor'),
    V('el más grande', 'grande', 'el más grande (¡relativo!)'),
    V('buenísimo', 'bueno', 'buenísimo (¡-ísimo!)'),
    V('mayor', 'grande', 'mayor (¡irregular!)'),
    V('el amor', 'amor', 'el amor (1 Co 13.13)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«el más grande» frente a «grandísimo»?'),
    options: [
      T('Iguales'),
      T('Relativo (el más grande, con artículo) frente a absoluto (¡grandísimo!)'),
      T('Lo contrario'),
      T('Error'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Comparativo irregular de «bueno»: ___ (mejor)'),
      answer: 'mejor',
      hint: T('Regla §4 — solo cuatro irregulares.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración está CORRECTA?'),
      options: [
        T('Es más alto que su padre'),
        T('Más vale que vengas'),
        T('Es más alto como su padre'),
        T('Es el más alto que su padre'),
      ],
      answer: 1,
      hint: T('Regla §1: «más» nunca inicia la oración.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa el superlativo relativo: «___ mayor de ellos es el amor» (1 Co 13.13)'),
      answer: 'el',
      hint: T('Regla §5: el superlativo relativo lleva artículo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Comparativo con más/menos (¡invariable!); «más» nunca inicia la oración: Más vale.'),
    },
    {
      n: '2',
      text: T('La comparación lleva que (mayor que); la igualdad lleva como (tan bueno como).'),
    },
    { n: '3', text: T('Solo cuatro comparativos irregulares: mejor, peor, mayor, menor.') },
    {
      n: '4',
      text: T(
        'El superlativo relativo lleva artículo (el más grande); el absoluto usa -ísimo (buenísimo).',
      ),
    },
  ],
  notes: [
    {
      label: T('Comparar personas con cuidado'),
      text: T(
        '{más} + adjetivo + {que} compara con personas; {tan} + adjetivo + {como} hace lo mismo. {más} + sustantivo + {de} compara cosas. Cambiar las dos formas cambia el sentido, no solo la gramática.',
      ),
    },
  ],
  examples: [
    { text: '{más grande}', gloss: T('Más grande.') },
    { text: '{mejor}', gloss: T('Mejor.') },
    { text: '{el más grande}', gloss: T('El más grande.') },
    { text: '{buenísimo}', gloss: T('Buenísimo (superlativo absoluto).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Comparativos irregulares'),
      head: [T('Positivo'), T('Comparativo'), T('Superlativo relativo'), T('Superlativo absoluto')],
      rows: [
        ['{bueno}', '{mejor}', '{el mejor}', '{buenísimo}'],
        ['{malo}', '{peor}', '{el peor}', '{malísimo}'],
        ['{grande}', '{mayor}', '{el mayor}', '{grandísimo}'],
        ['{pequeño}', '{menor}', '{el menor}', '{pequeñísimo}'],
      ],
    },
    {
      caption: T('Tabla 2 — Los tres usos'),
      head: [T('Tipo'), T('Forma'), T('Ejemplo'), T('¿Necesita artículo?')],
      rows: [
        [T('comparativo'), '{más} + adj.', '{más grande}', T('no')],
        [T('igualdad'), '{tan} + adj. + {como}', '{tan bueno como}', T('no')],
        [T('sup. relativo'), '{el} + {más} + adj.', '{el más grande}', T('sí')],
        [T('sup. absoluto'), 'adj. + {-ísimo}', '{buenísimo}', T('no')],
      ],
    },
  ],
};
