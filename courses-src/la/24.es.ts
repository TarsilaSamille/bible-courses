import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Lectura: Salmo 21 en la Vulgata'),
  subtitle: T('{Deus, Deus meus, respice in me} — dativo, acusativo y la enclítica'),
  section: T('Lectura'),
  body: C(`## El texto

> **Deus, Deus meus, respice in me: quare me derelīquisti?**
> **Dīvīsērunt sibi vestimenta mea, et super tunicam meam miserunt sortem.**
> **Fodērunt manūs meas et pedēs meos.**
> **Dīnumerāvērunt omnia ossa mea.**
> **Tu autem, Dōmine, nē elongāveris auxilium tuum ā me.**

## Vocabulario en uso

El salmo reúne sustantivos de tres declinaciones y un verbo de cada modo. Es excelente material porque hace una y otra vez lo mismo: dejarte **dominar** los sustantivos, con un vocabulario que indexa toda la Vulgata.

## Análisis del primer verso

**{Deus, Deus meus}** repite el mismo sustantivo dos veces: el primero es **vocativo**, el trato directo, «Dios»; el segundo es **nominativo**, con el posesivo {meus} en genitivo masculino: «mi Dios».

**{Respice in me}** es el imperativo presente de {respiciō}. El verbo es transitivo, pero su objeto es un pronombre: {in me} usa {in} + **ablativo** para el *lugar donde* — «mírame».

**{Quare me derelīquisti}** trae la interrogación {quare} «por qué», el pronombre {me} en **ablativo** (las interrogaciones no tienen caso propio) y el perfecto {derelīquisti} de {dērelinquō}: «¿por qué me has abandonado?»

## Los verbos del salmo

| Verbo | Modo | Qué revela |
|---|---|---|
| {respice} | imperativo presente | el mandato del salmo |
| {derelīquisti} | perfecto, 2.ª sg. | acción pasada cumplida |
| {dīvīsērunt} | perfecto, 3.ª pl. | narración del pasado |
| {miserunt} | perfecto, 3.ª pl. | el recorrido de {mitto} |
| {fodērunt} | perfecto, 3.ª pl. | el recorrido de {fodiō} |
| {dīnumerāvērunt} | perfecto, 3.ª pl. | el recorrido de {dīnumerō} |
| {elongāveris} | perfecto, 2.ª sg. subj. | la negación {nē} en subjuntivo |

## Lo que enseña el salmo

Los seis verbos trazan un recorrido: un **imperativo** ({respice}), cuatro **perfectos narrativos** ({dīvīsērunt}, {miserunt}, {fodērunt}, {dīnumerāvērunt}) que cuentan lo que ya ha ocurrido, un **perfecto de pregunta** ({derelīquisti}) que interpela y un **perfecto subjuntivo** ({elongāveris}) que pide. El tiempo que domina el salmo es el perfecto, y por eso la Vulgata sirve tan bien a la liturgia del Viernes Santo: todo lo que el salmo recounts ya está cumplido.`),
  vocab: [
    V('deus', 'deus', 'Dios (voc./nom.)'),
    V('respice', 'respicio', '¡mira! (imperativo presente)'),
    V('quare', 'quare', 'por qué (interrogativo)'),
    V('derelīquisti', 'derelinquo', 'abandonaste (perf. 2.ª sg.)'),
    V('dīvīsērunt', 'divido', 'dividieron (perf. 3.ª pl.)'),
    V('vestimenta', 'vestimentum', 'vestiduras (n. pl.)'),
    V('tunicam', 'tunica', 'túnica (ac. sg.)'),
    V('miserunt', 'mitto', 'echaron (perf. 3.ª pl.)'),
    V('sortem', 'sors', 'suerte (ac. sg.)'),
    V('fodērunt', 'fodio', 'perforaron (perf. 3.ª pl.)'),
    V('manūs', 'manus', 'manos (nom. pl.)'),
    V('ossa', 'os', 'huesos (n. pl.)'),
    V('dīnumerāvērunt', 'dinumero', 'contaron (perf. 3.ª pl.)'),
    V('auxilium', 'auxilium', 'auxilio (n.)'),
    V('elongāveris', 'elongo', 'apartarás (perf. 2.ª sg. subj.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Deus, Deus meus}, ¿qué caso tiene cada ocurrencia?'),
    options: [
      T('La primera es vocativo (trato directo), la segunda nominativo con genitivo {meus}'),
      T('Las dos son vocativo'),
      T('La primera es nominativo, la segunda ablativo'),
      T('La primera es genitivo, la segunda dativo'),
    ],
    answer: 0,
    hint: T('Regla §1: el vocativo coincide con el nominativo; solo el contexto los separa.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el perfecto: {Deus, Deus meus, quare me ___?}'),
      answer: 'derelīquisti',
      hint: T('{dērelinquō}, segunda persona del singular.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Por qué {in me} es ablativo en {respice in me}?'),
      options: [
        T('Porque indica el lugar donde se fija la mirada'),
        T('Porque {in} rige acusativo en esta construcción'),
        T('Porque {me} es acusativo'),
        T('Porque {respice} es intransitivo'),
      ],
      answer: 0,
      hint: T('Regla §2: {in} + ablativo = lugar donde; {in} + acusativo = dirección.'),
    },
    {
      kind: 'fill',
      prompt: T('¿Cuál es el acusativo plural de {os, ossis}?'),
      answer: 'ossa',
      hint: T('La tercera declinación hace {ossa} en todos los casos del plural.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma con su función'),
      pairs: [
        { a: T('respice'), b: T('imperativo presente') },
        { a: T('quare'), b: T('interrogativo') },
        { a: T('dīvīsērunt'), b: T('perfecto, 3.ª plural') },
        { a: T('miserunt'), b: T('de {mitto}: echaron') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El vocativo tiene la misma forma que el nominativo; lo reconoces porque va suelto, al principio, sin artículo ni posesivo.',
      ),
    },
    {
      n: '2',
      text: T(
        '{in} + ablativo marca lugar donde, {in} + acusativo marca dirección: {in cāsā} «en casa», {in cāsam} «hacia la casa».',
      ),
    },
    {
      n: '3',
      text: T(
        'Las interrogaciones no tienen caso propio: {me} en {quare me derelīquisti} es ablativo porque la pregunta es objeto de {quare}.',
      ),
    },
    {
      n: '4',
      text: T(
        'El perfecto expresa una acción pasada como entera; es el tiempo por defecto de la narrativa de la Vulgata.',
      ),
    },
    {
      n: '5',
      text: T(
        '{nē} + verbo en subjuntivo niega el presente: {nē timeāte} «no temáis», {nē elongāveris} «no te apartes».',
      ),
    },
  ],
  notes: [
    {
      label: T('¿Numeración griega o hebrea?'),
      text: T(
        'Este salmo es el 21 en la numeración griega (la que sigue la Vulgata) y el 22 en la hebrea, que usan las Biblias modernas. La diferencia viene del alfabeto: el hebreo cuenta la {waw} como número de letra, el griego no.',
      ),
    },
    {
      label: T('Por qué este salmo aparece el Viernes Santo'),
      text: T(
        'La tradición litúrgica une el salmo a la crucifixión y canta sus imperativos ({respice}) contra los verdugos. Gramaticalmente es una lectura densa: perfecto narrativo, dativo de interés ({sibi}), {super} + acusativo y numeral ({omnia}). Domina esas cuatro cosas y dominas el salmo.',
      ),
    },
  ],
  examples: [
    { text: 'Deus, Deus meus', gloss: T('Dios, mi Dios (vocativo + nominativo)') },
    { text: 'quāre me derelīquisti', gloss: T('¿por qué me has abandonado?') },
    {
      text: 'dīvīsērunt sibi vestimenta mea',
      gloss: T('dividieron mis vestiduras entre ellos (dativo de interés)'),
    },
    { text: 'super tunicam meam', gloss: T('sobre mi túnica ({super} + acusativo)') },
    { text: 'fodērunt manūs meas', gloss: T('perforaron mis manos') },
    { text: 'dīnumerāvērunt omnia ossa mea', gloss: T('contaron todos mis huesos') },
    { text: 'nē elongāveris auxilium tuum ā me', gloss: T('no apartes de mí tu socorro') },
    { text: 'in cāsam', gloss: T('hacia la casa (dirección)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Sustantivos del salmo y sus declinaciones'),
      head: [T('Latín'), T('Declinación'), T('Portugués')],
      rows: [
        ['Deus', '4.ª (comum)', 'Deus'],
        ['vestimenta', '2.ª (neutro pl.)', 'vestes'],
        ['tunica', '1.ª', 'túnica'],
        ['manus', '4.ª', 'mão'],
        ['os', '3.ª (neutro)', 'osso'],
        ['sors', '3.ª (i-after-a)', 'sorte'],
        ['auxilium', '2.ª (neutro)', 'auxílio'],
      ],
    },
    {
      caption: T('Tabla 2 — Verbos: tiempo, modo, persona'),
      head: [T('Forma'), T('Persona y número'), T('Portugués')],
      rows: [
        ['{respice}', '2.ª sg., imperativo', 'olha'],
        ['{derelīquisti}', '2.ª sg., perfeito indicativo', 'abandonaste'],
        ['{miserunt}', '3.ª pl., perfeito indicativo', 'lançaram'],
        ['{elongāveris}', '2.ª sg., perfeito subjuntivo', 'afastares'],
      ],
    },
  ],
};
