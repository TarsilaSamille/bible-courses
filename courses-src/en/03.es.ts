import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Presente simple'),
  subtitle: T('he speaks — presente y patrones negativos'),
  section: T('El verbo'),
  body: C(`## La forma de presente

El presente simple adopta la forma en -s en la tercera persona del singular. Las formas regulares añaden -s; las terminadas en -o, -ch, -sh, -ss, -x y ciertas sibilantes finales añaden -es. {know}, {go} y {do} tienen formas especiales: {knows}, {goes}, {does}.

{BE} es irregular: {I am}, {he is}, {they are}. En presente, {have} se convierte en {has}. La tercera persona ofrece una prueba rápida de concordancia.

## El auxiliar {do}

En preguntas y negaciones, la -s de tercera persona pasa a {do/does}: {She sings} → {Does she sing?} → {She does not sing}. El verbo principal vuelve a la forma base. Tras {do not} negado y adelantado, el verbo principal conserva su forma normal: {I do believe}.

## Cuatro valores

Un mismo tiempo expresa hábito, verdad, estado y futuro programado. Compáralo en {God is love} (verdad), {the church prays} (hábito), {she knows} (estado) y {the train leaves tomorrow} (agenda). El inglés bíblico puede sonar arcaico, pero el sistema básico sigue vigente.`),
  vocab: [
    V('speak', 'speak', 'hablar'),
    V('reads', 'read', 'lee'),
    V('has', 'have', 'tiene'),
    V('is', 'be', 'es/está'),
    V('prays', 'pray', 'ora'),
    V('knows', 'know', 'sabe'),
    V('does', 'do', 'hace; auxiliar'),
    V('comes', 'come', 'viene'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Completa: “The disciple ___ (pray) every day.”'),
    answer: 'prays',
    hint: T('Tercera persona del singular.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué forma es correcta?'),
      options: [
        T('She does not pray'),
        T('She do not pray'),
        T('She does not prays'),
        T("She don't pray"),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona forma y valor temporal.'),
      pairs: [
        { a: '{usually prays}', b: T('hábito') },
        { a: '{is with God}', b: T('estado/verdad') },
        { a: '{leaves tomorrow}', b: T('agenda') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'fill',
      prompt: T('En una pregunta: “___ he speak?”'),
      answer: 'Does',
      hint: T('El auxiliar asume la -s de tercera persona.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La -s de tercera persona pertenece al verbo, no siempre al sujeto: she read → she reads; they read → they read.',
      ),
    },
    {
      n: '2',
      text: T(
        "Con do/does, el verbo principal va en infinitivo sin to: Does he read?; He doesn't read.",
      ),
    },
    {
      n: '3',
      text: T('I believe expresa que tengo fe; I believe in expresa creer en alguien o algo.'),
    },
  ],
  notes: [
    {
      label: T('Registro:'),
      text: T(
        'Las formas de la KJV como hearith pertenecen al estilo arcaico de esa versión, no al uso contemporáneo estándar.',
      ),
    },
  ],
  examples: [
    { text: '{God is love}', gloss: T('Dios es amor — verdad') },
    { text: '{The church prays}', gloss: T('La iglesia ora — hábito') },
    { text: '{Does he pray?}', gloss: T('¿Él ora? — auxiliar do') },
  ],
  tables: [
    {
      caption: T('Presente simple'),
      head: [T('Persona'), T('Verbo regular'), T('Ejemplo')],
      rows: [
        ['I/you/we/they', '{speak}', '{I speak}'],
        ['he/she/it', '{speaks}', '{God speaks}'],
        ['negativo', '{do/does not + base}', '{He does not speak}'],
        ['interrogativo', '{Do/Does + subject + base?}', '{Does he speak?}'],
      ],
    },
  ],
};
