import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Condicionales 0–3'),
  subtitle: T('if, unless, wish — cuatro grados de realidad'),
  section: T('El verbo'),
  body: C(`## Cuatro grados

El condicional cero expresa una verdad general: {If you sow, you reap}. El primero presenta una condición posible: {If you pray, God will hear}. El segundo sitúa presente y resultado en un pasado irreal: {If I had faith, I would move mountains}. El tercero presenta una condición pasada no realizada: {If he had called, I would have come}.

La tabla enseña un patrón por defecto, no una cárcel. El inglés bíblico puede emplear presentes en cláusulas orientadas al futuro: {he that heareth}. Puede tener valor atemporal o futuro; el contexto y la traducción deciden.

## Formas y presupuestos

En el segundo y tercer condicional, el inglés suele usar {were} para todas las personas: {If I were you}, {If she were here}. En un pasado real, usa {was}: {I was tired}. {Unless} suele significar {if not}; un {if} positivo puede ser enfático: If you love me, keep my commands.

{Provided that}, {as long as}, {even if} y {otherwise} tienen valores distintos. Mantén separados el inglés contemporáneo y la KJV.`),
  vocab: [
    V('if', 'if', 'si'),
    V('unless', 'unless', 'a menos que'),
    V('were', 'be', 'fuera/fueses'),
    V('would come', 'come', 'vendría'),
    V('had come', 'come', 'hubiera venido'),
    V('sow', 'sow', 'sembrar'),
    V('reap', 'reap', 'cosechar'),
    V('as long as', 'as long as', 'mientras/con tal que'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T("Completa: 'If I ___ (be) you…'"),
    answer: 'were',
    hint: T('En lo irreal, were para todas las personas.'),
  },
  exercises: [
    { kind: 'fill', prompt: T('Completa la cláusula: If he ___, I will answer.'), answer: 'calls' },
    {
      kind: 'match',
      prompt: T('Relaciona estructura y tipo.'),
      pairs: [
        { a: 'if + present + present', b: T('cero') },
        { a: 'if + past + would', b: T('segundo') },
        { a: 'if + had + would have', b: T('terceiro') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T("¿Qué frase es casi equivalente a 'unless you believe'?"),
      options: [
        T('If you do not believe'),
        T('If you believe'),
        T('When you believe'),
        T('Although you believe'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Los condicionales cero describen regularidades; el primero al tercero tratan de personas y situaciones concretas.',
      ),
    },
    {
      n: '2',
      text: T(
        'En el segundo y tercer condicional, aparece were con todas las personas cuando la situación es irreal.',
      ),
    },
    {
      n: '3',
      text: T(
        "Unless suele significar if not, pero la negación directa puede ser más enfática: If I don't know, nobody does.",
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Una forma presente en la KJV puede ser atemporal; no fuerces will dentro del versículo.',
      ),
    },
  ],
  examples: [
    { text: '{If I were you}', gloss: T('Si yo fuera tú — presente irreal') },
    {
      text: '{If he had come, we would have prayed}',
      gloss: T('Si él hubiera venido, habríamos orado'),
    },
    { text: '{unless you believe}', gloss: T('a menos que creas / si no crees') },
  ],
  tables: [
    {
      caption: T('Patrones condicionales'),
      head: [T('Tipo'), T('If +'), T('Resultado')],
      rows: [
        [T('0 — general'), 'present', 'present'],
        [T('1 — real'), 'present', 'will + base'],
        [T('2 — irreal'), 'past', 'would + base'],
        [T('3 — pasado irreal'), 'had + participle', 'would have + participle'],
      ],
    },
  ],
};
