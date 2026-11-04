import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('El Konjunktiv II'),
  subtitle: T('würde, hätte, wäre y las formas literarias'),
  section: T('Los verbos'),
  body: C(`El Konjunktiv II es el tiempo de lo que no es un hecho: hipótesis, deseo, cortesía, un rumor que se repite sin certeza. Se construye de dos maneras. La primera es analítica: todas las formas reciben würde más un infinitivo en presente. Ich würde kommen, ich würde gehen, ihr würdet sagen. Es la forma que el alemán prefiere en el habla y en la escritura corriente, y es tan regular que casi no necesita regla.

La segunda es sintética, y es la forma antigua: la terminación del indicativo más una -t- o una terminación doble en la vocal. Ich hätte, du hättest, er hätte; ich wäre, du wärst, er wäre; ich käme, ich ginge, ich schließe. Fíjate en que sein, haben y los modales, todos con vocal raíz variable, forman un bloque cerrado, y es ese bloque el que se usa a diario: hätte, wäre, würde, könnte, müsste, sollte, dürfte, möchte.

El modo del deseo tiene una regla de tiempo que es el corazón de la lección. Ich hätte gern Kaffee describe un deseo en presente, y si se realizara ahora mismo tendríamos café; ich hätte Kaffee gehabt habla de un deseo del pasado, que ya no puede satisfacerse. La misma regla vale para el Konjunktiv I: dass ich sei es deseo ahora, dass ich gewesen wäre es un deseo que no se cumplió. En portugués esta diferencia casi no aparece, y por eso muchos aprendices traducen las dos frases con el mismo Me gustaría.

La cortesía es el segundo uso, y es más barato de lo que parece. Ich hätte gern einen Kaffee es literalmente yo tendría un café de buena gana, es decir, si tuviera. Könnten Sie mir helfen? es el could you cortés. Si el Konjunktiv es una posibilidad real, quien habla añade gern, gerne o vielleicht, y es esa partícula la que devuelve el calor al enunciado.

El Konjunktiv II es también el tiempo del Provisionssatz, la oración condicional: Wenn ich Zeit hätte, würde ich mehr lesen. Los dos tiempos aparecen juntos, y la lectura bíblica depende de ello.`),
  vocab: [
    V('würde', 'werden', 'haría (Konjunktiv II analítico)'),
    V('würde + Infinitiv', 'werden', 'hacer (forma analítica)'),
    V('hätte', 'haben', 'tendría (de tener)'),
    V('hätten', 'haben', 'tendríamos (plural)'),
    V('wäre', 'sein', 'sería, estaría'),
    V('käme', 'kommen', 'vendría (alternancia vocálica)'),
    V('ginge', 'gehen', 'iría (verbo fuerte)'),
    V('schließe', 'schließen', 'cerraría (verbo fuerte)'),
    V('könnte', 'können', 'podría (modal)'),
    V('müsste', 'müssen', 'debería (obligación)'),
    V('sollte', 'sollen', 'debería, convendría'),
    V('möchte', 'mögen', 'me gustaría (deseo cortés)'),
    V('dürfte', 'dürfen', 'tendría permiso para'),
    V('gern', 'gern', 'de buena gana (suaviza el Konjunktiv)'),
    V('wenn ich Zeit hätte', 'haben', 'si tuviera tiempo (condicional)'),
    V('Provisionssatz', 'Provisionssatz', 'oración condicional'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué oración usa correctamente el Konjunktiv II sintético?'),
    options: [
      T('Ich hätte mehr Zeit.'),
      T('Ich habe mehr Zeit.'),
      T('Ich gehabt mehr Zeit.'),
      T('Ich hatte mehr Zeit.'),
    ],
    answer: 0,
    hint: T('La forma sintética de haben es hätte, con terminación doble.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa la forma analítica: Ich ___ gern mehr lesen.'),
      answer: 'würde',
      hint: T('Es el auxiliar que sirve para cualquier verbo.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración es un deseo sobre el pasado y no sobre el presente?'),
      options: [
        T('Ich hätte gern fahren wollen.'),
        T('Ich hätte gern fahren.'),
        T('Ich würde fahren.'),
        T('Ich fahre gern.'),
      ],
      answer: 0,
      hint: T('El deseo del pasado lleva un infinitivo con zu.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa la condicional: Wenn ich mehr Zeit ___, würde ich reisen.'),
      answer: 'hätte',
      hint: T('La subordinada también está en Konjunktiv II.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma con su valor.'),
      pairs: [
        { a: T('würde kommen'), b: T('hipótesis o cortesía') },
        { a: T('hätte gern'), b: T('deseo realizable') },
        { a: T('hätte ... getrunken'), b: T('deseo irrealizable') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La forma analítica está siempre disponible: würde + infinitivo en presente, sin excepción de persona ni de verbo.',
      ),
    },
    {
      n: '2',
      text: T(
        'En sein, haben y los verbos modales la forma sintética usa la terminación del indicativo con -t-: ich hätte, du wärst, er müsste.',
      ),
    },
    {
      n: '3',
      text: T(
        'El deseo en presente pide infinitivo, el deseo del pasado pide participio: Ich hätte gern gehen wollen / Ich hätte gehen sollen.',
      ),
    },
    {
      n: '4',
      text: T(
        'La condicional une un Konjunktiv II en la subordinada (wenn ich Zeit hätte) y un Konjunktiv II en la principal (würde ich lesen).',
      ),
    },
    {
      n: '5',
      text: T(
        'La partícula gern devuelve el calor real al Konjunktiv: Ich hätte gern einen Kaffee es más cálido que Ich hätte einen Kaffee.',
      ),
    },
  ],
  notes: [
    {
      label: T('Deseo imposible y deseo posible'),
      text: T(
        'Ich hätte gern einen Kaffee tiene dos lecturas posibles, y el contexto decide. Leído en presente, es un deseo que se cumpliría ahora si las condiciones lo permitieran; leído con un participio, Ich hätte einen Kaffee getrunken, es un deseo sobre el pasado, irrealizable para siempre. El portugués obliga a elegir entre Quería y Me gustaría de haber tomado; el alemán mantiene las dos opciones vivas en la misma forma verbal, y el orden de las palabras lo resuelve.',
      ),
    },
    {
      label: T('Vínculo bíblico'),
      text: T(
        'En 2 Corintios 12, wäre besser, wenn er schwächer wäre: la traducción de Lutero usa el Konjunktiv II para una hipótesis sobre el pasado que nadie puede comprobar. En Romanos 3, hätten wir... hace el mismo trabajo en un texto que argumenta desde lo que no ocurrió. Reconocer la -t- o el würde es lo que separa leer el texto como hecho y leerlo como algo renegociado.',
      ),
    },
  ],
  examples: [
    { text: 'Ich würde gern kommen.', gloss: T('Me gustaría venir (forma analítica).') },
    { text: 'Ich hätte gern einen Kaffee.', gloss: T('Me gustaría un café (deseo en presente).') },
    {
      text: 'Ich hätte einen Kaffee getrunken.',
      gloss: T('Habría tomado un café (deseo sobre el pasado).'),
    },
    {
      text: 'Wenn ich Zeit hätte, würde ich mehr lesen.',
      gloss: T('Si tuviera tiempo, leería más (condicional completa).'),
    },
    { text: 'Könnten Sie mir bitte helfen?', gloss: T('¿Podría ayudarme, por favor? (cortesía).') },
    { text: 'Das wäre sehr freundlich.', gloss: T('Eso sería muy amable (deseo cortés).') },
    { text: 'Es müsste stimmen.', gloss: T('Eso debería ser cierto (modal en Konjunktiv II).') },
    {
      text: 'An deiner Stelle würde ich gehen.',
      gloss: T('En tu lugar yo iría (Konjunktiv II en subordinada indirecta).'),
    },
    {
      text: 'Er sagte, er käme später.',
      gloss: T('Dijo que vendría más tarde (Konjunktiv I en el habla, II en el relato).'),
    },
  ],
  tables: [
    {
      caption: T('Formas sintéticas del Konjunktiv II'),
      head: ['Pronome', 'sein', 'haben', 'Modais'],
      rows: [
        ['ich', 'wäre', 'hätte', 'könnte, müsste, sollte'],
        ['du', 'wärst', 'hättest', 'könntest, müsstest'],
        ['er/sie/es', 'wäre', 'hätte', 'könnte, dürfte, möchte'],
        ['wir', 'wären', 'hätten', 'könnten, müssten'],
        ['ihr', 'wärt', 'hättet', 'könntet, müsstet'],
        ['Sie/sie', 'wären', 'hätten', 'könnten, möchten'],
      ],
    },
    {
      caption: T('Analítico o sintético'),
      head: ['Contexto', 'Forma', 'Exemplo'],
      rows: [
        ['verbo comum', 'würde + Infinitiv', 'Ich würde gern kommen.'],
        ['desejo no presente', 'hätte + Infinitiv', 'Ich hätte gern einen Kaffee.'],
        ['desejo no passado', 'hätte + Partizip II', 'Ich hätte den Brief schreiben sollen.'],
        ['verbo sein', 'wäre / würde sein', 'Das wäre schön.'],
        ['verbo haben', 'hätte / würde haben', 'Ich hätte mehr Zeit.'],
        ['modal', 'forma sintética', 'Das müsste stimmen.'],
      ],
    },
  ],
};
