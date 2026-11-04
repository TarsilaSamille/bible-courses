import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Lectura: Juan 1:1 (TB)'),
  subtitle: T('Pada mulanya adalah Firman'),
  section: T('Lecturas'),
  body: C(`Lee el texto en tres pasadas. Primero, identifica las cláusulas con {yang}: son relativas y añaden información sobre un sustantivo. Segundo, observa la progresión: {adalah Firman} → {bersama-sama dengan Allah} → {adalah Allah}. La repetición de {Firman itu} crea paralelismo, un recurso retórico del versículo.

TEXTO
{Pada mulanya adalah Firman; Firman itu bersama-sama dengan Allah dan Firman itu adalah Allah.}

ANÁLISIS
• {Pada mulanya}: {pada} «en», {mula} «comienzo» y {-nya}, forma definida: «al comienzo».
• {adalah}: «es»; en narración puede traducirse «era». A diferencia de {ada} («hay/existe»), {adalah} normalmente clasifica o identifica.
• {Firman}: «Palabra». La mayúscula de TB señala el Logos, Cristo. El nombre puede sustituirse por un pronombre: en Juan 1:14, {dia} = «él», retomando {Firman}.
• {bersama-sama dengan Allah}: {bersama} + {-sama} = «junto con»; {dengan} «con».
• {adalah Allah}: «es Dios». No conviertas automáticamente la cópula en «era»; TB conserva el paralelismo y el valor presentativo.

Juan 1:14: {Firman itu telah menjadi manusia}. {Telah} completa el evento ({telah menjadi}); {manusia} indica naturaleza humana, no solo apariencia.

La nota 1 de algunas ediciones explica que {monotes} significa «único». En Juan 1:14, {penuh kasih karunia dan kebenaran} combina naturaleza divina y misión.`),
  vocab: [
    V('pada', 'pada', 'en, durante, en'),
    V('mula', 'mula', 'comienzo'),
    V('adalah', 'adalah', 'ser, es (identidad)'),
    V('Firman', 'firman', 'Palabra, Verbo'),
    V('itu', 'itu', 'ese, aquel'),
    V('bersama-sama', 'sama', 'junto con'),
    V('dengan', 'dengan', 'con'),
    V('menjadi', 'jadi', 'llegar a ser, convertirse'),
    V('manusia', 'manusia', 'ser humano, humanidad'),
    V('monotes', 'monotes', 'único'),
    V('kasih karunia', 'kasih karunia', 'gracia'),
    V('kebenaran', 'benar', 'verdad, fidelidad'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En la segunda cláusula, ¿qué retoma {itu}?'),
    options: [T('Allah'), T('Firman'), T('mulanya'), T('manusia')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa la última línea: «Firman itu adalah ___».'),
      answer: 'Allah',
      hint: T('Nombre propio; conserva mayúscula.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se traduce naturalmente {Firman itu telah menjadi manusia}?'),
      options: [
        T('La Palabra se hizo humana.'),
        T('La Palabra está a punto de hacerse humana.'),
        T('La Palabra se parece a un ser humano.'),
        T('La Palabra se está haciendo humana.'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{yang} puede introducir una oración sustantiva («lo que») o relativa; aquí es relativa: {Firman itu} = «aquella Palabra».',
      ),
    },
    {
      n: '2',
      text: T(
        '{Itu} remite a algo ya mencionado. Va antepuesto al núcleo nominal: {Firman} {itu} = «aquella Palabra».',
      ),
    },
    {
      n: '3',
      text: T(
        '{-nya} puede formar un sintagma nominal definido: {mula} → {mulanya}. Aquí el español natural es «al comienzo».',
      ),
    },
  ],
  notes: [
    {
      label: T('Etiquetas de traducción'),
      text: T(
        'TB significa Terjemahan Baru, una traducción moderna de la Biblia al indonesio. La redacción exacta puede variar según la edición.',
      ),
    },
  ],
  examples: [
    { text: 'Pada mulanya adalah Firman.', gloss: T('Al principio era la Palabra.') },
    { text: 'Firman itu bersama-sama dengan Allah.', gloss: T('La Palabra estaba con Dios.') },
    { text: 'Firman itu adalah Allah.', gloss: T('La Palabra era Dios.') },
  ],
  tables: [
    {
      caption: T('El paralelismo de Juan 1:1'),
      head: ['Progressão', 'PT', 'ES'],
      rows: [
        ['1', T('La Palabra era'), T('con Dios')],
        ['2', T('La Palabra era'), T('Dios')],
      ],
    },
  ],
};
