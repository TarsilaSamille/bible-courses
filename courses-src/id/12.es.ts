import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Discurso indirecto con bahwa'),
  subtitle: T('berkata bahwa, apakah, supaya'),
  section: T('Registro y discurso'),
  body: C(`La oración indirecta se introduce con {bahwa} «que». En general, el tiempo y el aspecto explícitos se mantienen.

DIRECTO → INDIRECTO
{Isa berkata: «Saya akan datang»} → {Isa berkata bahwa saya akan datang}.
{akan} sigue expresando futuro respecto de la situación narrativa, no necesariamente respecto del momento del habla. El español puede usar «dijo que vendría» o «dijo: “vendré”» según el contexto y el punto de vista.

{Konon} significa «se dice/dicen que» y presenta un relato no confirmado. {Kata orang} «dicen» y {kata-kata mereka} «sus palabras» dejan el contenido en segundo plano.

{Berkata apakah…} = «preguntó si…»:
{Dia bertanya apakah saya datang} = «Preguntó si yo iba a venir».
Para una pregunta indirecta con expresión de lugar, se conserva la palabra interrogativa:
{Di mana saya tinggal?} → {Dia bertanya di mana saya tinggal} = «Preguntó dónde vivía».

Órdenes y solicitudes:
{Menyuruh + verbo} = «mandar que»: {Isa menyuruh mereka pergi} «mandó que se fueran».
{Meminta supaya + verbo} = «pedir que»: {Isa meminta supaya mereka berdoa} «pidió que oraran».
{Suruh} por sí solo puede expresar una petición o una orden según quién hable.

{Kata-Nya} es la tercera persona formal/elevada «sus palabras»; pronominaliza {Firman} como {Nya} = «él». Así, {kata-Nya} significa literalmente «sus palabras/dijo Él» y conserva el referente divino.`),
  vocab: [
    V('bahwa', 'bahwa', 'que (oración completiva)'),
    V('berkata', 'kata', 'decir, hablar'),
    V('apakah', 'apakah', 'si (pregunta)'),
    V('bertanya', 'tanya', 'preguntar'),
    V('supaya', 'supaya', 'para que'),
    V('meminta', 'minta', 'pedir'),
    V('menyuruh', 'suruh', 'mandar, ordenar'),
    V('suruh', 'suruh', 'mandar; pedir'),
    V('konon', 'konon', 'se dice'),
    V('kata orang', 'kata', 'dicen; la gente dice'),
    V('kata-kata mereka', 'kata', 'sus palabras'),
    V('kata-Nya', 'kata', 'sus palabras; dijo Él'),
    V('datang', 'datang', 'venir'),
    V('tinggal', 'tinggal', 'vivir, quedarse'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se forma «preguntó dónde vivo»?'),
    options: [
      T('Dia bertanya di mana saya tinggal'),
      T('Dia bertanya apakah saya tinggal'),
      T('Dia bertanya bahwa saya tinggal'),
      T('Dia bertanya supaya saya tinggal'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «Isa berkata ___ saya akan datang» = «Jesús dijo que yo vendría».'),
      answer: 'bahwa',
      hint: T('Conector completivo neutro.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál traduce correctamente {konon kabarnya}?'),
      options: [
        T('Dicen que el rumor es…'),
        T('Se confirma de inmediato que…'),
        T('Preguntaron si…'),
        T('Se ordenó que…'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'En la secuencia directa → indirecta, pronombres y demostrativos pueden pasar a tercera persona; {saya} permanece cuando su referente está claro. La pronominalización de {Firman} como {Nya} depende del registro.',
      ),
    },
    {
      n: '2',
      text: T(
        'Las preguntas indirectas no usan {apakah} si conservan una palabra interrogativa como {di mana}; {apakah} aparece en preguntas de sí/no o al final.',
      ),
    },
    {
      n: '3',
      text: T(
        'Traduce el tiempo por su función discursiva, no mediante un cambio automático de conjugación.',
      ),
    },
  ],
  notes: [
    {
      label: T('Criterio'),
      text: T(
        'No existe una regla absoluta de «el tiempo nunca cambia». El relato indirecto conserva, reinterpreta o desplaza el aspecto según el punto de vista narrativo.',
      ),
    },
  ],
  examples: [
    { text: 'Isa berkata bahwa ia akan datang.', gloss: T('Jesús dijo que vendría.') },
    { text: 'Dia bertanya apakah saya datang.', gloss: T('Preguntó si yo iba a venir.') },
    { text: 'Isa meminta supaya mereka berdoa.', gloss: T('Jesús les pidió que oraran.') },
  ],
  tables: [
    {
      caption: T('Preguntas y órdenes indirectas'),
      head: ['Padrão', 'PT', 'ES'],
      rows: [
        ['berkata bahwa', T('dijo que'), '{berkata bahwa saya datang}'],
        ['bertanya apakah', T('preguntó si'), '{bertanya apakah saya datang}'],
        ['menyuruh + V', T('mandó que'), '{menyuruh mereka pergi}'],
        ['meminta supaya + V', T('pidió que'), '{meminta supaya mereka berdoa}'],
      ],
    },
  ],
};
