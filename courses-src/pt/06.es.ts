import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Padre nuestro y Salmo 22'),
  subtitle: T('oración, perdón y sufrimiento'),
  section: T('Lectura'),
  body: C(`## El Padrenuestro tiene tres tiempos

El Padrenuestro alterna invocación, peticiones e instrucción, y cada parte usa un tiempo distinto. La invocación es declarativa y de presente: {Pai nosso que estás nos céus}. Las peticiones son deseos, y un deseo es **subjuntivo**: {santificado seja o teu nome}, {venha o teu reino}, {seja feita a tua vontade}. La instrucción vuelve al **imperativo** y al presente: {o pão nosso de cada dia dá-nos hoje}.

Fíjate en el patrón: las tres peticiones centrales del Padrenuestro son justamente los tres subjuntivos. No es retórica: es gramática. Una petición es, por definición, algo que se quiere y todavía no se tiene, y en portugués (como en griego, con ἐλθέτω) el subjuntivo marca exactamente eso. Convertir {seja} en {é} cambia una petición en una afirmación.

## Dá-nos: verbo y pronombre pegados

{o pão nosso de cada dia dá-nos hoje} tiene {dá-nos}: verbo más el pronombre {nos} en la misma palabra. La forma es {dá} + {nos} pegados, y es la marca del enclítico portugués. El paralelo griego es ἐπιδίδου ἡμῖν (δίδω + ἡμῖν), con el pronombre en **dativo**, y eso es lo que dice «a nosotros» y no «nosotros».

El registro también importa: {dá-nos} es la forma que usa el portugués europeo, y la forma corriente brasileña es {dá pra nós} o {nos dá}. Misma función, tres formas, y quien traduce elige según el público sin alterar el sentido.

## Perdoemos: subjuntivo en una frase de narración

{perdoa-nos as nossas dívidas, assim como nós também perdoamos aos nossos devedores} trae {perdoamos} en presente de subjuntivo, no el indicativo {perdoamos} ni el perfecto {perdoámos}. La frase es narración («así como nosotros también perdonamos»), pero el verbo es subjuntivo.

¿Por qué? Porque el griego de Mt 6:12 usa ἀφῆτε (aoristo, presente de subjuntivo) y el hecho es subjuntivo porque la oración no afirma que perdonamos: pide que perdonemos. La diferencia entre {perdoamos} (afirmación) y {perdoemos} (petición) es la diferencia entre decir y rezar, y el portugués bíblico la conserva.

Fíjate en el {aos}: es {a + os} en lugar del dativo griego, lo que muestra que la preposición en portugués está cumpliendo el papel del caso.

## El Salmo 22: la pregunta que es lamento

El Salmo 22 empieza con {Deus meu, Deus meu, por que me desamparaste?} — y es exactamente esa frase la que Jesús pronuncia en la cruz (Mt 27:46; Mc 15:34). El {por que} no es una pregunta para obtener información: es un lamento. La pregunta retórica en hebreo (אַלְמָה, alamá) y en griego (ἱνατί, hinatí) es el mismo grito: ¿dónde estás?

La diferencia entre pregunta y lamento está en lo que sigue. En el Salmo, el versículo 2 cambia el tono: {mas tu, Senhor, estás longe}; y a partir de ahí el salmo gira alabanza. Jesús en la cruz no tiene los versículos siguientes: se queda en la pregunta. Leer el salmo entero sobre la cruz es leer un himno que no estaba cantando en ese momento.

## Criterio de lectura

En cada cláusula del Padrenuestro, pregúntate: ¿es afirmación (indicativo), petición (subjuntivo) u orden (imperativo)? Y en el Salmo 22, ¿{por que} es pregunta para saber o lamento? La respuesta cambia la lectura más que cualquier palabra suelta.`),
  vocab: [
    V('estás', 'estar', 'estás'),
    V('santificado', 'santificar', 'santificado'),
    V('dá-nos', 'dar', 'danos'),
    V('perdoa', 'perdoar', 'perdona'),
    V('dívidas', 'dívida', 'deudas'),
    V('desamparaste', 'desamparar', 'desamparaste'),
    V('entregou', 'entregar', 'entregó'),
    V('pão', 'pão', 'pan'),
    V('reino', 'reino', 'reino'),
    V('tribulação', 'tribulação', 'tribulación'),
    V('perdoar', 'perdoar', 'perdonar'),
    V('nome', 'nome', 'nombre'),
    V('céus', 'céu', 'cielos (plural)'),
    V('hoje', 'hoje', 'hoy'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué significa {nos} en «los cielos»?'),
    options: [T('pronombre objeto'), T('en + los'), T('verbo'), T('adjetivo')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «___ nuestro de cada día».'),
      answer: 'pão',
      hint: T('Alimento esencial.'),
    },
    {
      kind: 'choose',
      prompt: T('En «Dios mío, Dios mío», la repetición crea:'),
      options: [T('una pregunta directa'), T('una oración'), T('una comparación'), T('un futuro')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relaciona petición y respuesta.'),
      pairs: [
        { a: T('sea santificado'), b: T('sea santificado') },
        { a: T('venga'), b: T('venga') },
        { a: T('sea hecha'), b: T('sea hecha') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'En {santificado seja o teu nome} y {venha o teu reino}, el verbo está en subjuntivo: la oración no afirma nada, pide. Mateo 6:9 y 6:10 usan el mismo modo ({ἁγιασθήτω}, {ἐλθέτω}).',
      ),
    },
    {
      n: '§2',
      text: T(
        '{dá-nos} es {dá} + {nos} unidos, y {perdoa-nos} es {perdoa} + {nos}: el guion escrito muestra la unión que el habla esconde. Traducir por {nos dá} conserva el sentido y deshace la forma.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{perdoamos} afirma y {perdoemos} pide. La oración {assim como nós também perdoamos} trae {perdoamos} porque narra una práctica, y es la forma griega (ἀφῆτε) la que obliga a {perdoemos} en el pedido.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{não} más subjuntivo es la fórmula del imperativo negativo: {não temas}, {não faltes}, {não leveis}. {não temas} viene del subjuntivo, no del futuro: {não temais} y {não temeram} son la misma fórmula.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{por que} en {Deus meu, Deus meu, por que me desamparaste?} no pide información: es lamento. El hebreo ({אַלְמָה}) y el griego ({ἱνατί}) que Jesús cita son la misma pregunta retórica, y la respuesta del Salmo (v. 2) es lo que Jesús en la cruz no tiene.',
      ),
    },
  ],
  notes: [
    {
      label: T('Lectura'),
      text: T(
        'El Salmo 22 es una oración de sufrimiento antes de ser un pasaje para usar suelto. El v. 1 es el grito, el v. 2 ya gira a alabanza, y Jesús en la cruz se queda en el v. 1 (Mt 27:46; Mc 15:34).',
      ),
    },
    {
      label: T('Registro'),
      text: T(
        '{dá-nos} es la forma del portugués europeo. Las corrientes en Brasil son {dá pra nós} y {nos dá}: tres registros para la misma función, y la elección es del traductor según el público.',
      ),
    },
  ],
  examples: [
    {
      text: 'Pai nosso que estás nos céus.',
      gloss: T('Presente declarativo: la oración afirma, no pide.'),
    },
    { text: 'Santificado seja o teu nome.', gloss: T('Subjuntivo: petición, no afirmación.') },
    { text: 'Venha o teu reino.', gloss: T('El mismo subjuntivo, ahora con {venha}.') },
    { text: 'Não nos leveis à tentação.', gloss: T('Imperativo negativo: {não} más subjuntivo.') },
    {
      text: 'O pão nosso de cada dia dá-nos hoje.',
      gloss: T('Verbo y pronombre en la misma palabra, más el imperativo.'),
    },
    { text: 'Perdoa-nos as nossas dívidas.', gloss: T('{nos} es el objeto unido al verbo.') },
    {
      text: 'Assim como nós também perdoamos.',
      gloss: T('{perdoamos} afirma, y por eso es indicativo.'),
    },
    {
      text: 'Deus meu, Deus meu, por que me desamparaste?',
      gloss: T('La pregunta que es lamento (Sal 22:1).'),
    },
    {
      text: 'Mas tu, Senhor, estás longe.',
      gloss: T('El v. 2 cambia el tono: desde aquí es alabanza.'),
    },
  ],
  tables: [
    {
      caption: T('Los tres tiempos del Padrenuestro'),
      head: ['Parte', 'Tempo', 'Exemplo'],
      rows: [
        ['invocação', 'presente', 'que estás nos céus'],
        ['pedido', 'subjuntivo', 'venha o teu reino'],
        ['instrução', 'imperativo', 'dá-nos hoje'],
      ],
    },
    {
      caption: T('Afirmar y pedir, uno al lado del otro'),
      head: ['Verbo', 'O que faz', 'Exemplo'],
      rows: [
        ['perdoamos', 'afirma', 'assim como perdoamos'],
        ['perdoemos', 'pede', 'perdoa-nos'],
        ['perdoai', 'manda', 'perdoai aos outros'],
      ],
    },
    {
      caption: T('Verbo con pronombre unido'),
      head: ['Forma', 'Separação', 'Pronome'],
      rows: [
        ['dá-nos', 'dá + nos', 'nos'],
        ['perdoa-nos', 'perdoa + nos', 'nos'],
        ['entregou-lho', 'entregou + lho', 'lhe + o'],
      ],
    },
  ],
};
