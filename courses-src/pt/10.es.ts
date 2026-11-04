import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Pronombres y colocación'),
  subtitle: T('me, te, o, lhe'),
  section: T('Los pronombres'),
  body: C(`## Pronombres átonos: la regla y la excepción

Los pronombres átonos indican objeto, dirección o complemento: me, te, o/a, nos, vos, lhe, se. En el portugués Brazilian normalmente van antes del verbo: {me dá}, {não me viu}, {me contou}. En el portugués europeo pueden ir después: {dá-me}, {viu-me}.

Las posiciones se llaman **próclisis** (antes) y **enclisis** (después), y no son al azar: en frase con negativo, con interrogación o en ciertas subordinadas, la próclisis es prácticamente obligatoria. {Não me viu} y no {não viu-me}; {Quem me viu?} y no {Quem viu-me?}. Es decir, en los contextos que más importan en un texto bíblico —pregunta y negación— la posición ya está decidida.

## Qué cambia después de -r, -s, -z

El sistema tiene una excepción por forma verbal: tras un verbo terminado en -r, -s, -z, el {o/a} se vuelve {lo/la} y puede ir al final: {amá-lo}, {vê-lo}, {fazê-lo}. Por eso {lo/la} es la forma típica del portugués con verbo transitivo directo terminado en -r.

La regla tiene excepciones que vale la pena memorizar: el infinitivo terminado en -r mantiene el {o} —{para amá-lo}— y el gerundio también. Lo que no cambia es el sustantivo: {dar o livro} y {dar-lhe o livro} son cosas distintas, y la segunda lleva los dos pronombres.

## lhe: indirecto, y no sustituto

lhe es pronombre indirecto: {Deus lhe deu} significa «Dios le dio a él». No sustituye al objeto directo, y por eso {lhe dar o livro} está mal: lo correcto es {dar-lhe o livro}, con el objeto directo {o livro} explícito.

En portugués antiguo y en el bíblico, {lhe} puede llevar también el sentido de a y de: {lhe peço}, {retira-lhe o coração}. El hebreo usa sufijo de dativo (-lô) y de genitivo, y es a ese recurso que corresponden estas formas, como el dativo de persona del italiano (lección 11). El plural de {lhe} es lhes: {Deus lhes deu} «Dios les dio a ellos».

## La mesóclisis existe, es rara y es bíblica

{dir-me-ás} es **mesóclisis**: el pronombre aparece entre dos elementos del verbo ({dir} + {me} + {ás}). Es la forma más antigua y más literaria, y aparece en la Biblia en portugués arcaizante y en traducciones antiguas. Nadie habla así; todo el mundo lo entiende cuando lo ve.

## Criterio de lectura

Con cualquier pronombre, pregúntate tres cosas: ¿es átono (me, te, se) o tónico (eu, tu, ele)? ¿Es directo ({o livro}) o indirecto ({a ele})? ¿Está antes (próclisis) o después (enclisis)? Si respondes las tres, el pronombre está resuelto. Lo demás es convención de estilo, y el contexto decide.`),
  vocab: [
    V('me', 'me', 'me'),
    V('te', 'te', 'te'),
    V('o', 'o', 'lo'),
    V('lhe', 'lhe', 'le'),
    V('nos', 'nos', 'nos'),
    V('amá-lo', 'amar', 'amarlo'),
    V('fi-lo', 'fazer', 'hacerlo'),
    V('dizendo-lhe', 'dizer', 'diciéndole'),
    V('dir-me-ás', 'dizer', 'me dirás'),
    V('vê-lo', 'ver', 'verlo'),
    V('dá-me', 'dar', 'dame (enclítico)'),
    V('lo', 'o', 'lo (objeto masculino)'),
    V('consigo', 'consigo', 'consigo (reflexivo)'),
    V('Deus', 'Deus', 'Dios'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Completa: «amar + o» = ____.'),
    answer: 'amá-lo',
    hint: T('O se convierte en lo tras r.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En «Dios le dio», le es:'),
      options: [T('objeto directo'), T('complemento indirecto'), T('sujeto'), T('adverbio')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es la forma brasileña más común?'),
      options: [T('dame'), T('dame'), T('dame'), T('darme')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona pronombre y función.'),
      pairs: [
        { a: T('me'), b: T('objeto directo') },
        { a: T('le'), b: T('indirecto') },
        { a: T('consigo'), b: T('reflexivo') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El pronombre átono va antes del verbo en portugués de Brasil ({me dá}) y puede ir después en portugués europeo y literario ({dá-me}). Con negativo o interrogación la proclisis es obligatoria: {não me viu}, {Quem me viu?}, y no {não viu-me}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Después de verbo en {-r}, {-s} o {-z}, el {o} se vuelve {lo} y la {a} se vuelve {la}: {amá-lo}, {vê-lo}, {fazê-la}. El infinitivo en {-r} es la excepción, porque ya termina en {o}: {para amá-lo}.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{lhe} es indirecto y no sustituye al objeto directo: {Deus lhe deu a lei} es correcto, y {lhe dar o livro} no lo es, porque el {o} del objeto desaparece. El plural de {lhe} es {lhes}: {Deus lhes deu}.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{consigo}, {contigo}, {conosco} y {convosco} nunca se unen al verbo: el {con} se vuelve {com} y la forma es siempre separada. Es la excepción del sistema a la que ninguna regla de cliticización llega.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{dar-lhe o livro} lleva los dos pronombres: {dar} + {lhe} + {o}. {Dá-lho} fusiona {lhe} y {o} en {lho} dentro de una sola palabra, y es la forma que usa el portugués bíblico arcaico.',
      ),
    },
  ],
  notes: [
    {
      label: T('Dialecto y estilo'),
      text: T(
        '{me dá} no es error: es el estándar de Brasil. {Dá-me} es tradicional en Portugal y en la escritura literaria, y es la forma que conserva la traducción bíblica arcaica.',
      ),
    },
    {
      label: T('El dativo del griego'),
      text: T(
        '{lhe} corresponde al dativo griego ({δίδω + ἡμῖν}) y al sufijo hebreo {-לֹ}. Donde el portugués bíblico escribe {a nós} o {para nós}, es el dativo del original lo que el traductor está expresando con una preposición.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus lhe deu a lei.',
      gloss: T('{lhe} indirecto, {a lei} el objeto directo explícito.'),
    },
    { text: 'Deus lhes deu a lei.', gloss: T('El plural de {lhe} es {lhes}.') },
    { text: 'Ele me contou tudo.', gloss: T('Proclisis: el pronombre antes del verbo.') },
    { text: 'Contou-me tudo.', gloss: T('Enclisis: la misma función, otro orden.') },
    { text: 'Não me viu chegar.', gloss: T('Con negativo, la proclisis es obligatoria.') },
    { text: 'Quem me viu?', gloss: T('Con interrogación, la proclisis también.') },
    { text: 'Vi-o na rua.', gloss: T('Después de {-r}, el {o} se vuelve {lo}.') },
    { text: 'Queria vê-lo.', gloss: T('El infinitivo en {-r} conserva el {o} de {vê-lo}.') },
    { text: 'Fale comigo.', gloss: T('{comigo} nunca se une al verbo.') },
  ],
  tables: [
    {
      caption: T('Proclisis, enclisis y mesóclisis'),
      head: ['Contexto', 'Brasil', 'Portugal / literário'],
      rows: [
        ['afirmativo', 'me dá', 'dá-me'],
        ['negativo', 'não me viu', 'não me viu'],
        ['interrogativo', 'Quem me viu?', 'Quem me viu?'],
        ['antigo', 'me dirás', 'dir-me-ás'],
      ],
    },
    {
      caption: T('Lo que cambia después de {-r}, {-s}, {-z}'),
      head: ['Verbo', 'Sem clítico', 'Com clítico'],
      rows: [
        ['amar', 'amar o livro', 'amá-lo'],
        ['ver', 'ver a casa', 'vê-la'],
        ['fazer', 'fazer o pão', 'fazê-lo'],
      ],
    },
    {
      caption: T('Pronombres que no se unen'),
      head: ['Forma', 'Vem de', 'Por que não gruda'],
      rows: [
        ['consigo', 'com + sigo', 'o {con} vira {com}'],
        ['conosco', 'com + nós', 'idem'],
        ['convosco', 'com + vós', 'idem'],
      ],
    },
  ],
};
