import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Imperativo'),
  subtitle: T('habla, hable, hablad'),
  section: T('El verbo: los modos'),
  body: C(`## Tres registros, tres formas

El imperativo portugués ha cambiado de forma tres veces en la historia, y el portugués bíblico conservó las tres. El tú afirmativo usa el presente: {fala}, {crê}, {parte}. El usted, más formal, usa el presente de subjuntivo: {fale}, {creia}, {parta}. Y el plural puede usar {falai} (portugués antiguo), {crede} (portugués actual) o {falem} (Brasil), según el registro.

Fíjate en qué cambia y qué no: el verbo pasa del presente al subjuntivo, pero el pronombre desaparece. Nadie dice «fala tu» ni «fale usted» en el orden normal: el pronombre es enclítico y va antes del verbo — fala-me, fale-me. El italiano tiene la misma estructura (lección 10), y por eso traducir del griego y del hebreo al portugués falla precisamente aquí.

## El negativo no es solo «no»

El negativo suele usar el **subjuntivo**: {não fales}, {não venha}, {não vá}. Y en el habla cotidiana, un no fuerte: {não fale agora}, {nem fala}. El punto es que {não falas} es raro y arcaizante; el registro corriente es {não fales}, y esa es la forma que conserva la Biblia.

Dos imperativos son **irregulares** y hay que aprenderlos: el {tem} de *ter, tomar* y el {vem} de *vir*. Ninguna regla los produce — {tem} viene del latín *tene*, {vem} de *veni* —, y el portugués bíblico mantiene la irregularidad como señal de arcaísmo.

## El portugués bíblico guarda las formas antiguas

{ide} en Mc 16:15 y {amai-vos} en Jn 13:34 son las dos marcas más visibles. {Ide} es la forma antigua de «ir» en plural, hoy «vai-vos» o «idai»; {amai-vos} mantiene el pronombre reflexivo explícito, que el portugués moderno ha perdido.

No son dos ejemplos arbitrarios. El griego de Mc 16:15 (πορεύεσθε) y el de Jn 13:34 (ἀγαπᾶτε ἀλλήλους) piden explícitamente la relación y la dirección, y el portugués antiguo {amai-vos} lo dice exactamente: «amaos los unos a los otros». Traducir por «amaos» pierde el **-vos** y con él la mutualidad.

## Criterio de lectura

Si el verbo está en imperativo, pregúntate tres cosas: ¿quién es el tú (tú, usted, ustedes)? ¿El verbo es afirmativo o negativo? ¿Hay pronombre explícito? Un {amai-vos} tiene las tres: los tres pronombres implícitos, el verbo afirmativo y el -vos explícito. Por ahí se gana el sentido de la lectura bíblica.`),
  vocab: [
    V('fala', 'falar', '¡habla!'),
    V('fale', 'falar', '¡hable!'),
    V('falai', 'falar', '¡hablad!'),
    V('não fales', 'falar', '¡no hables!'),
    V('amai-vos', 'amar', '¡amaos!'),
    V('vinde', 'vir', '¡venid!'),
    V('ide', 'ir', '¡id!'),
    V('vem', 'vir', '¡ven!'),
    V('dize', 'dizer', '¡di!'),
    V('crede', 'crer', '¡creed!'),
    V('falem', 'falar', '¡hablen!'),
    V('tem', 'ter', '¡ten! (imperativo irregular)'),
    V('você', 'você', 'usted (tratamiento formal)'),
    V('mundo', 'mundo', 'mundo (en «Id por todo el mundo»)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se dice «¡habla!» en plural en portugués?'),
    options: [T('hablas'), T('¡hablad!'), T('¡hable!'), T('hablaron')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «no ___ (hablar)».'),
      answer: 'fales',
      hint: T('El imperativo negativo usa el subjuntivo.'),
    },
    {
      kind: 'choose',
      prompt: T('En Juan 13:34, «amaos» significa:'),
      options: [T('amaos los unos a los otros'), T('amaos'), T('amaosme'), T('ámame')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona persona y forma.'),
      pairs: [
        { a: T('tú'), b: T('¡habla!') },
        { a: T('usted'), b: T('¡hable!') },
        { a: T('plural'), b: T('¡hablad!') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El {tu} affirmativo usa el presente ({fala}, {crê}, {parte}), {você} usa el presente de subjuntivo ({fale}, {creia}, {parta}), y el plural usa {falai} en el Portugal antiguo, {crede} en el Portugal actual y {falem} en Brasil.',
      ),
    },
    {
      n: '§2',
      text: T(
        'El imperativo negativo es {não} más subjuntivo en todas las personas: {não fales}, {não fale}, {não falem}. {Não falas} es arcaizante, y la forma {não fales} es la que exige el griego (μὴ λάλησῃς).',
      ),
    },
    {
      n: '§3',
      text: T(
        'El pronombre va delante del verbo y sale de la posición de sujeto: nadie dice {fala tu} ni {fale você}. Con el clítico, {fala-me} y {fale-me} son el mismo orden del pronombre en portugués.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{tem} y {vem} son los dos imperativos irregulares que ninguna regla produce: {tem} viene del latín {tene} y {vem} de {veni}. {Ten} y {ven} son las formas regulares del subjuntivo, no del imperativo.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{ide} y {amai-vos} conservan el pronombre explícito: {ide} es el plural antiguo de {vai} sin {vai-vos}, y {amai-vos} mantiene el {vos} reflexivo que el portugués moderno perdió. Traducir por {vão} y {amem} pierde los dos pronombres.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        '{Ide por todo o mundo} es formulación bíblica; el portugués de hoy dice «vayan y hagan discípulos». Lo que se pierde es el pronombre, no el sentido.',
      ),
    },
    {
      label: T('La elección del registro'),
      text: T(
        'En un texto dirigido al público europeo, {falai} y {ide} son los naturales; en uno para Brasil, {falem} y {vão}. Es elección de registro, y el griego no decide cuál de los dos es el correcto.',
      ),
    },
  ],
  examples: [
    { text: 'Fala, e ninguém te ouve.', gloss: T('Imperativo de {tu}: presente {fala}.') },
    { text: 'Fale a verdade.', gloss: T('Imperativo de {você}: subjuntivo {fale}.') },
    { text: 'Não fales isso.', gloss: T('Negativo: {não} más subjuntivo {fales}.') },
    { text: 'Ide por todo o mundo.', gloss: T('Plural antiguo de Portugal, pronombre omitido.') },
    { text: 'Amai-vos uns aos outros.', gloss: T('El {vos} explícito es lo que hace el mutual.') },
    { text: 'Crede em Cristo.', gloss: T('Plural del Portugal actual: {crede}, sin {vós}.') },
    {
      text: 'Tem olho para quem está.',
      gloss: T('{tem}: imperativo irregular de {ter}, latín {tene}.'),
    },
    { text: 'Vem e vê.', gloss: T('{vem}: imperativo irregular de {vir}, latín {veni}.') },
    {
      text: 'Não vos esqueçais uns dos outros.',
      gloss: T('Negativo del plural con pronombre explícito.'),
    },
  ],
  tables: [
    {
      caption: T('Imperativo por persona y registro'),
      head: ['Pessoa', 'Afirmativo', 'Negativo'],
      rows: [
        ['tu', 'fala', 'não fales'],
        ['você', 'fale', 'não fale'],
        ['plural (Portugal antigo)', 'falai', 'não falais'],
        ['plural (Brasil)', 'falem', 'não falem'],
      ],
    },
    {
      caption: T('Los dos irregulares que ninguna regla produce'),
      head: ['Imperativo', 'Latim', 'Regular seria'],
      rows: [
        ['tem', 'tene', 'tenha'],
        ['vem', 'veni', 'venha'],
      ],
    },
    {
      caption: T('Pronombre: explícito e implícito'),
      head: ['Forma', 'Pronome', 'O que se perde'],
      rows: [
        ['ide', 'implícito', 'o {vai} plural'],
        ['amai-vos', 'explícito (-vos)', 'o mutual'],
        ['falem', 'implícito', 'o {vocês}'],
      ],
    },
  ],
};
