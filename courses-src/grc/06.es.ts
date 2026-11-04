import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Presente de indicativo en voz activa'),
  subtitle: T('λύω: el paradigma que abre el verbo griego'),
  section: T('El verbo'),
  body: C(`## Cuatro preguntas en cada forma verbal

Cada forma verbal griega responde a cuatro preguntas: persona y número (¿quién?), tiempo y aspecto (¿cuándo y cómo?), voz (¿quién actúa?) y modo (¿hecho, deseo u orden?).{λύουσιν} responde de inmediato: tercera persona del plural, tiempo presente, voz activa, modo indicativo — "ellos sueltan".Este capítulo construye la primera de estas formas, la más simple y frecuente: el presente de indicativo en voz activa.

El verbo modelo es {λύω} "desatar, desatar", un verbo regular {-ω} sin sorpresas fonéticas.Con él aprendes las seis terminaciones personales, que se repiten (adaptadas) en cada tiempo del indicativo activo.

## Los seis finales

El presente se construye como raíz + vocal temática + terminación personal.La raíz de {λύω} es {λυ-};la vocal temática alterna entre {ο} (antes de {μ} y {ν}: {λύομεν}, {λύουσι}) y {ε} (en otros lugares: {λύεις}, {λύει}, {λύετε}).Fusionados con las terminaciones, producen las seis formas paradigmáticas.

Tenga en cuenta el segundo singular {-εις} y el tercero {-ει}: el diptongo final marca a la persona, no el tiempo.Y el tercer plural termina en {-ουσι}, a menudo con nu móvil - {λύουσι(ν)} - como en el cap.3.

## El presente no es sólo "ahora"

El presente griego expresa un aspecto imperfectivo (una acción vista como continua o repetida) más que el tiempo del reloj.Por lo tanto, cubre varios sentidos en inglés: acción en progreso ({βλέπω} "estoy viendo"), hábito ({προσεύχεται} "él habitualmente ora"), intento ({πείθουσιν} "están tratando de persuadir", el llamado presente conativo), incluso futuro cercano ({ἔρχομαι}"Ya voy").

También está el presente histórico, querido por los narradores: a mitad de la historia, en el pasado, el autor cambia repentinamente al presente — {καὶ λέγει αὐτῷ} "y le dice" (Marcos 1,40).Mark hace esto más de 150 veces.El efecto es cinematográfico: la escena comienza a transcurrir ante los ojos del lector.

## Cómo estudiar un verbo

El diccionario enumera el verbo por el primer presente singular ({λύω}, {πιστεύω}, {ἔχω}), la forma básica de la que deriva todo el presente.Pero un verbo completo también requiere el futuro, aoristo y perfecto (las llamadas partes principales), que aparecen en capítulos posteriores.Por ahora, memoriza el siguiente paradigma hasta que puedas decirlo sin dudarlo: es el esqueleto de todo lo que te espera.`),
  vocab: [
    V('λύω', 'λύω', 'soltar, desatar'),
    V('λύεις', 'λύω', 'tu pierdes'),
    V('λύει', 'λύω', 'el pierde'),
    V('λύομεν', 'λύω', 'we loose'),
    V('λύετε', 'λύω', 'tú (pl.) suelto'),
    V('λύουσι', 'λύω', 'ellos pierden'),
    V('λέγω', 'λέγω', 'decir'),
    V('βλέπω', 'βλέπω', 'ver'),
    V('πιστεύω', 'πιστεύω', 'creer'),
    V('ἔχω', 'ἔχω', 'tener'),
    V('γινώσκω', 'γινώσκω', 'saber'),
    V('λαμβάνω', 'λαμβάνω', 'tomar, recibir'),
    V('πέμπω', 'πέμπω', 'enviar'),
    V('γράφω', 'γράφω', 'escribir'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la tercera persona del plural de "λύω" en presente?'),
    options: [T('λύει'), T('λύετε'), T('λύουσι(ν)'), T('λύομεν')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el 1er plural: ___ ("perdemos", de λύω).'),
      answer: 'λύομεν',
      hint: T('Vocal temática ο antes de μ: λυ-ο-μεν.'),
    },
    {
      kind: 'choose',
      prompt: T('En "καὶ λέγει αὐτῷ" (Marcos 1:40), las señales presentes…'),
      options: [
        T('acción habitual'),
        T('Presente histórico (viveza narrativa)'),
        T('comando directo'),
        T('Cierto futuro'),
      ],
      answer: 1,
      hint: T('La historia es pasado y el verbo vino en presente - regla §4.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma con su persona.'),
      pairs: [
        { a: 'λύεις', b: '2ª sg.' },
        { a: 'λύετε', b: '2ª pl.' },
        { a: 'λύομεν', b: '1ª pl.' },
        { a: 'λύει', b: '3ª sg.' },
      ],
      answer: [
        { 0: '0', 1: '-', 2: '0' },
        { 0: '1', 1: '-', 2: '1' },
        { 0: '2', 1: '-', 2: '2' },
        { 0: '3', 1: '-', 2: '3' },
      ],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Presente = raíz + vocal temática (ο antes de μ/ν, ε en otros lugares) + terminación personal.',
      ),
    },
    {
      n: '2',
      text: T(
        'El diccionario enumera el verbo por el 1er sg.presente ({γράφω}, {πέμπω});de ahí surge todo el presente regular.',
      ),
    },
    {
      n: '3',
      text: T(
        'Aspecto imperfectivo: el presente muestra una acción habitual o en curso, no simplemente "ahora".',
      ),
    },
    {
      n: '4',
      text: T(
        'Presente histórico: los narradores (Marcos sobre todo) utilizan la narrativa del presente medio pasado para darle viveza.',
      ),
    },
    {
      n: '5',
      text: T(
        'El 3er pl.a menudo lleva ν móvil ({λέγουσιν});ignorarlo en el análisis, como en el cap.3.',
      ),
    },
  ],
  notes: [
    {
      label: T('Cómo memorizar:'),
      text: T(
        'Diga el paradigma en voz alta, marcando el ritmo 1-2-3 / 1-2-3: λύω, λύεις, λύει — λύομεν, λύετε, λύουσι.El oído fija las terminaciones más rápido que el ojo.',
      ),
    },
    {
      label: T('En el texto:'),
      text: T(
        '{λέγω} es el verbo más frecuente en el Nuevo Testamento después de {εἰμί}, y casi siempre aparece como el presente histórico ({λέγει}) en las narrativas.Cada {λέγει} que reconozcas es una victoria de lectura.',
      ),
    },
  ],
  examples: [
    { text: '{βλέπω τὸ φῶς}', gloss: T('Veo la luz (1er sg.)') },
    { text: '{πιστεύεις εἰς τὸν υἱόν}', gloss: T('Â¿Crees en el Hijo?(2do sg.; Juan 9:35)') },
    { text: '{ὁ κύριος γινώσκει}', gloss: T('el Señor lo sabe (3er sg.)') },
    { text: '{ἔχομεν εἰρήνην}', gloss: T('we have peace (1st pl.; Rom 5:1)') },
    { text: '{τί ζητεῖτε}', gloss: T('¿Qué estás buscando?(2do pl.; Juan 1:38)') },
    { text: '{λέγουσιν αὐτῷ}', gloss: T('they say to him (3rd pl. with movable ν)') },
    { text: '{καὶ λέγει αὐτῷ}', gloss: T('y le dice (presente histórico; Marcos 1:40)') },
    { text: '{ἔρχομαι πρὸς ὑμᾶς}', gloss: T('Voy hacia ti (presente con fuerza futura)') },
    {
      text: '{ὁ πατὴρ ἀγαπᾷ τὸν υἱόν}',
      gloss: T('el Padre ama al Hijo (hábito/estado; Juan 3:35)'),
    },
    { text: '{τί ποιεῖτε}', gloss: T('¿qué estás haciendo?(2da pl.)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Present active of λύω'),
      head: [T('Persona'), T('Forma'), T('Traducción')],
      rows: [
        ['1ª sg.', '{λύω}', 'eu liberto'],
        ['2ª sg.', '{λύεις}', 'tu libertas'],
        ['3ª sg.', '{λύει}', 'ele liberta'],
        ['1ª pl.', '{λύομεν}', 'nós libertamos'],
        ['2ª pl.', '{λύετε}', 'vós libertais'],
        ['3ª pl.', '{λύουσι(ν)}', 'eles libertam'],
      ],
    },
    {
      caption: T('Tabla 2 — Finales personales actuales'),
      head: [T('Persona'), T('Singular'), T('Plural')],
      rows: [
        ['1ª pessoa', '{-ω}', '{-ομεν}'],
        ['2ª pessoa', '{-εις}', '{-ετε}'],
        ['3ª pessoa', '{-ει}', '{-ουσι(ν)}'],
      ],
    },
  ],
};
