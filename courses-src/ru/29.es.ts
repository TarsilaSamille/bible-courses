import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Lectura: Juan 1:1-5, 14'),
  subtitle: T('В начале было Слово'),
  section: T('Lectura'),
  body: C(
    'Lee el pasaje por bloques y observa la concordancia, el caso y las familias léxicas. В начале: в + preposicional; начало cambia a начале. Слово es neutro, por lo que el pasado neutro было concuerda: «la Palabra era». У Бога: у + genitivo expresa ubicación junto a Dios, «con Dios». En el versículo 1, было Dios establece gramaticalmente la identidad de la Palabra con Dios; Слovo con mayúscula es el título divino. En el v. 4, в Нём: в + preposicional y el pronombre toma la forma blanda. Свет y тьма son sujetos nominativos. En el v. 5, светит es imperfectivo y describe la luz que brilla en las tinieblas. En el v. 14, стало concuerda con Слово neutro; плотию es un instrumental arcaico en -ию, «como carne». El segmento исполненного благодати и истины está en genitivo tras el participio y forma una expresión bíblica fija. Lee en voz alta: la puntuación es editorial.',
  ),
  vocab: [
    V('было', 'быть', 'era, fue'),
    V('стало', 'стать', 'se convirtió'),
    V('свет', 'свет', 'luz'),
    V('тьма', 'тьма', 'tinieblas'),
    V('плотию', 'плоть', 'carne (instrumental arcaico)'),
    V('благодать', 'благодать', 'gracia'),
    V('истина', 'истина', 'verdad'),
    V('светит', 'светить', 'brilla'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Por qué aparece было y no был?'),
    options: [T('Es plural'), T('Concuerda con Слово, neutro'), T('Es futuro')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('En у Бога, ¿qué caso aparece?'), answer: 'genitivo' },
    {
      kind: 'choose',
      prompt: T('¿Qué forma significa «como carne»?'),
      options: [T('плотию'), T('плоти'), T('плоть')],
      answer: 0,
    },
    { kind: 'fill', prompt: T('Completa: Слово ___ Бог'), answer: 'было' },
  ],
  rules: [{ n: '1', text: T('Un verbo pasado concuerda con el sujeto en género y número.') }],
  notes: [
    {
      label: T('Traducción'),
      text: T('Juan 1:14 muestra плотию en -ию; no es una forma regular del sustantivo.'),
    },
  ],
  examples: [
    {
      text: 'Ἐν ἀρχῇ ἦν ὁ λόγος',
      gloss: T(
        'En el principio era el Verbo — {ἐν} con genitivo ({ἀρχῇ}); {ἦν} imperfecto, por estado; {ὁ λόγος} es el sujeto en nominativo.',
      ),
    },
    {
      text: 'ὁ λόγος ἦν πρὸς τὸν θεόν',
      gloss: T(
        'el Verbo estaba con Dios — {πρὸς} con acusativo: preposición que en griego rige el acusativo y marca relación, no solo movimiento.',
      ),
    },
    {
      text: 'καὶ θεὸς ἦν ὁ λόγος',
      gloss: T(
        'y el Verbo era Dios — {θεὸς} en acusativo: predicativo, no sujeto. El artículo repite el sustantivo, el verbo repite el tiempo.',
      ),
    },
    {
      text: 'ἐν αὐτῷ ζωὴ ἦν',
      gloss: T(
        'en él había vida — {ζωὴ} en nominativo y {ἦν} otra vez: el verbo no cambió de tiempo al cambiar de sujeto.',
      ),
    },
    {
      text: 'καὶ ἡ σκοτία αὐτὸ οὐ κατέλαβεν',
      gloss: T(
        'y las tinieblas no lo recibieron — {οὐ} con el verbo principal (negación de hecho) y {κατέλαβεν} aoristo: acción puntual frente a {ἦν}.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Análisis de Juan 1:1 y 14'),
      head: ['Forma', 'Categoría', 'Valor'],
      rows: [
        ['В начале', 'в + prepositivo', 'en el principio'],
        ['было', 'passado neutro sg.', 'era'],
        ['у Бога', 'у + genitivo', 'junto a Dios'],
        ['стало', 'passado neutro sg.', 'se hizo'],
        ['плотию', 'instrumental arcaico', 'como carne'],
      ],
    },
  ],
};
