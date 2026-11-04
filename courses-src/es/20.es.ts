import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('El subjuntivo'),
  subtitle: T('hable, coma — ¡quiero QUE…!'),
  section: T('Los verbos'),
  body: C(`## Qué provoca el subjuntivo

El subjuntivo aparece cuando el hablante **impone, desea, duda u ordena**: {Quiero que hable} «quiero que hable» · {No creo que sea así} «no creo que sea así» · {Es necesario que vengas} «es necesario que vengas» · {ojalá} «ojalá» (¡del árabe!) · {para que} «para que» · {antes de que} «antes de que».

## La formación es un cambio de vocal

En el presente, la vocal temática se cambia por la **vocal cerrada {e}/{a}**:

{-ar} → {-e}: {hable}, {hables}, {hable}, {hablemos}, {hablen}.
{-er}/{-ir} → {-a}: {coma}, {comas}, {coma}, {comamos}, {coman} · {viva}, {tenga}, {sea}, {vaya}.

La forma {sea} (de {ser}) es la que más aparece en el texto bíblico, justamente por los imperativos del Génesis: {Sea la luz} «sea la luz».

## El pasado del subjuntivo

Tras un verbo en pasado, el subjuntivo usa el **imperfecto de subjuntivo**, con dos formas sinónimas: {-ra} y {-se}.

{Quería que hablaras} = {Quería que hablase} «quería que hablase».
{Como si hubieras venido} «como si hubieras venido».

## Puntos de atención

1. Tras {ojalá}, {a no ser que}, {con tal de que} — siempre subjuntivo.
2. {Para que} con el **mismo** sujeto puede llevar indicativo; con sujeto distinto, el subjuntivo es obligatorio: {Te lo digo para que vengas} «te lo digo para que vengas».
3. Subjuntivo con valor de **condición**: {quien quiera, que venga} «quien quiera, que venga».

## Pronombres y orden

Los pronombres van **antes** del verbo: {Dios te ama} «Dios te ama» · {se lo dio} «se lo dio».

Bíblico: {Santificado sea tu nombre} «santificado sea tu nombre» · {Venga tu reino} «venga tu reino» (Mt 6.10).

## Europa × América

No hay diferencia: el subjuntivo se usa igual en ambos mundos. Donde sí cambia es la frecuencia de {ojalá} (muy americano) y de {a ver si} (España), que es el sustituto coloquial del subjuntivo de deseo: {A ver si puedes venir}.`),
  vocab: [
    V('hable', 'hablar', 'hable (subj.)'),
    V('sea', 'ser', 'sea (subj.)'),
    V('vaya', 'ir', 'vaya (subj.)'),
    V('tenga', 'tener', 'tenga (subj.)'),
    V('ojalá', 'ojalá', 'ojalá'),
    V('hablaras', 'hablar', 'hablaras (¡imperf. subj.!)'),
    V('venga', 'venir', 'venga (subj.)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Completa: «Santificado ___ tu nombre»'),
    answer: 'sea',
    hint: T('Subjuntivo de «ser».'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «Quiero que ___ (hablar)» (quiero que hable)'),
      answer: 'hable',
      hint: T('Regla §2: -ar toma -e en el subjuntivo.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué verbo es irregular en el presente del subjuntivo?'),
      options: [
        T('{hablar} → {hable}'),
        T('{ir} → {vaya}'),
        T('{comer} → {coma}'),
        T('{cantar} → {cante}'),
      ],
      answer: 1,
      hint: T('Regla §2: los irregulares no siguen el cambio.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa el pasado del subjuntivo: «Quería que ___ (hablar)»'),
      answer: 'hablase',
      hint: T('Regla §3: -ara o -ase (dos formas equivalentes).'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('El subjuntivo sigue siempre a deseo, duda y orden: quiero que, ojalá, para que.'),
    },
    { n: '2', text: T('El cambio de vocal vale para los regulares: -ar → -e, -er/-ir → -a.') },
    {
      n: '3',
      text: T(
        'El imperfecto de subjuntivo (hablara/hablase) sigue a un verbo en pasado: Quería que hablaras.',
      ),
    },
    { n: '4', text: T('Con cuando, un futuro seguro lleva futuro; uno inseguro, subjuntivo.') },
  ],
  notes: [
    {
      label: T('Tres valores, una forma'),
      text: T(
        'El subjuntivo aparece en deseo ({quiero que vengas}), duda ({no creo que sea}) y orden ({que venga}). En Génesis 1, {Sea la luz} es orden — el uso más antiguo del patrón en el Nuevo Testamento.',
      ),
    },
  ],
  examples: [
    { text: '{Santificado sea tu nombre}', gloss: T('Santificado sea tu nombre (¡{sea}!).') },
    { text: '{Venga tu reino}', gloss: T('Venga tu reino (Mt 6.10).') },
    { text: '{se lo dio}', gloss: T('Se lo dio (¡pronombre doble!).') },
    { text: '{Ojalá venga}', gloss: T('Ojalá venga (deseo con subjuntivo).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Subjuntivo presente'),
      head: [T('Persona'), T('-ar → -e'), T('-er/-ir → -a')],
      rows: [
        ['yo', '{hable}', '{coma}'],
        ['tú', '{hables}', '{comas}'],
        ['él/ella/usted', '{hable}', '{coma}'],
        ['nosotros', '{hablemos}', '{comamos}'],
        ['vosotros', '{habléis}', '{comáis}'],
        ['ellos/ustedes', '{hablen}', '{coman}'],
      ],
    },
    {
      caption: T('Tabla 2 — Disparadores del subjuntivo'),
      head: [T('Expresión'), T('Valor'), T('Ejemplo')],
      rows: [
        ['{quiero que}', 'desejo', '{Quiero que vengas}'],
        ['{es necesario que}', 'necessidade', '{Es necesario que oremos}'],
        ['{no creo que}', 'dúvida', '{No creo que sea así}'],
        ['{ojalá}', 'desejo (doce)', '{Ojalá venga}'],
        ['{para que}', 'finalidade', '{Lo hizo para que lo vieran}'],
        ['{antes de que}', 'anterioridade', '«antes de que»'],
        ['{a no ser que}', 'concessão', '{A no ser que llueva}'],
        ['{cuando + futuro}', 'temporal futura', '«cuando venga»'],
      ],
    },
  ],
};
