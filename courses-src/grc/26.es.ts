import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('Discurso indirecto y preguntas'),
  subtitle: T('ὅτι… — τίς; ποῦ; πῶς; y lo que espera cada pregunta'),
  section: T('Sintaxis'),
  body: C(`## Contar lo que se dijo

ElGreek presenta un discurso de dos maneras. El directo cita ipsis litteris. El indirecto usa {ὅτι} «que» + el MISMO tiempo y modo que el directo — sin el retroceso de tiempos del español («dijo que había venido»): {λέγει ὅτι πιστεύει} «dice que cree»; {εἶπεν ὅτι ἦλθεν} «dijo que había venido» (¡el imperfecto se mantiene!). Esa conservación simplifica: copie el verbo del directo al indirecto.

El segundo camino es el infinitivo: {ἔφη λῦσαι} «dijo haber liberado», {νομίζουσιν εἶναι} «creen que son». Con sujeto propio, el infinitivo lo pone en acusativo: {λέγουσιν αὐτὸν εἶναι} «dicen que él es…». El cap. 10 puso la base; aquí el uso reportativo.

## Preguntar en griego

Los interrogativos cubren lo esencial: {τίς;} «¿quién?» (persona), {τί;} «¿qué?» (cosa), {ποῦ;} «¿dónde?», {πότε;} «¿cuándo?», {πῶς;} «¿cómo?», {διὰ τί;} y {τί;} + genitivo «¿por qué?» ({τί ποιήσω;} «¿qué haré?», Lc 18.18; {ποῦ μένεις;} «¿dónde te quedas?», Jo 1.38 — la primera pregunta de los discípulos).

No confunda el interrogativo con el relativo (cap. 26): {τίς} pregunta («¿quién?»), {ὅς} enlaza («el cual»). El acento ayuda: los interrogativos son oxitonos tenaces ({τίς, τί}); el relativo {ὅς} es proclítico en la práctica de los editores.

## Preguntas que ya traen la respuesta

El griego marca la expectativa de la respuesta. {ἆρα} (o {οὐχί} en la práctica) + indicativo espera «sí»: {οὐχὶ καὶ ὑμεῖς;} «¿acaso no vosotros también?…», a la espera de una confirmación. {μήτι} + indicativo espera «no»: {μήτι ἐγώ εἰμι, κύριε;} «¿acaso soy yo, Señor?» (Mt 26.22) — cada discípulo preguntó esperando oír «no eres tú».

Ese matiz ilumina la Última Cena: once preguntas con {μήτι} seguidas, cada una un suspiro de alivio anticipado — hasta que {σὺ εἶπας} «tú lo has dicho» (Mt 26.25) responde a Judas. Gramática y drama en la misma partícula.`),
  vocab: [
    V('ὅτι', 'ὅτι', 'que, porque'),
    V('τίς', 'τίς', '¿quién?'),
    V('τί', 'τίς', '¿qué?'),
    V('ποῦ', 'ποῦ', '¿dónde?'),
    V('πότε', 'πότε', '¿cuándo?'),
    V('πῶς', 'πῶς', '¿cómo?'),
    V('διὰ τί', 'διά', '¿por qué?'),
    V('ἆρα', 'ἆρα', 'acaso (espera sí)'),
    V('μήτι', 'μήτι', 'acaso (espera no)'),
    V('ἔφη', 'φημί', 'dijo'),
    V('νομίζω', 'νομίζω', 'pensar, suponer'),
    V('οὖν', 'οὖν', 'pues, entonces'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«εἶπεν ὅτι ἦλθεν» conserva el imperfecto porque…'),
    options: [
      T('El griego no retrocede tiempos en el discurso indirecto'),
      T('ἦλθεν es presente'),
      T('ὅτι exige imperfecto'),
      T('Es discurso directo'),
    ],
    answer: 0,
    hint: T('El mismo tiempo y modo que el directo — regla §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete la partícula que espera «no»: ___ ἐγώ εἰμι; (Mt 26.22).'),
      answer: 'μήτι',
      hint: T('μήτι espera «no» — regla §4.'),
    },
    {
      kind: 'choose',
      prompt: T('«χαίρω ὅτι ἦλθες» — aquí ὅτι es…'),
      options: [
        T('Causal («porque»): el verbo es de sentimiento'),
        T('Reportativo («que»)'),
        T('Final («con el fin de que»)'),
        T('Condicional («si»)'),
      ],
      answer: 0,
      hint: T('Verbo de sentimiento → ὅτι causal.'),
    },
    {
      kind: 'match',
      prompt: T('Relacione cada palabra con su función.'),
      pairs: [
        { a: 'τίς', b: 'interrogativo' },
        { a: 'ὅς', b: 'relativo' },
        { a: 'μήτι', b: 'espera «não»' },
        { a: 'ἆρα', b: 'espera «sim»' },
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
        'ὅτι + el mismo tiempo y modo que el directo. Sin retroceso de tiempos como en español.',
      ),
    },
    {
      n: '2',
      text: T('Infinitivo reportativo con sujeto propio en acusativo: {λέγουσιν αὐτὸν εἶναι}.'),
    },
    {
      n: '3',
      text: T(
        'El interrogativo ({τίς}) pregunta; el relativo ({ὅς}) enlaza. El cap. 26 completa el relativo.',
      ),
    },
    {
      n: '4',
      text: T(
        '{μήτι} espera «no»; {ἆρα}/οὐχί espera «sí». La partícula revela el miedo o la certeza de quien pregunta.',
      ),
    },
  ],
  notes: [
    {
      label: T('ὅτι ambiguo:'),
      text: T(
        '{ὅτι} también significa «porque» (causal). {λέγω ὅτι} + verbo = «digo que»; {χαίρω ὅτι} = «me alegro porque». El verbo anterior decide: decir/creer → «que»; sentir/actuar → «porque».',
      ),
    },
    {
      label: T('Pregunta retórica:'),
      text: T(
        'Pablo usa preguntas sin respuesta como argumento: {τί οὖν;} «¿qué, pues?» (Rm 6.1), {μὴ γένοιτο} como respuesta implícita. Reconocer el juego {τί οὖν; + μὴ γένοιτο} es leer Romanos en el ritmo justo.',
      ),
    },
  ],
  examples: [
    { text: '{λέγει ὅτι πιστεύει}', gloss: T('dice que cree (tiempo conservado)') },
    { text: '{εἶπεν ὅτι ἦλθεν}', gloss: T('dijo que había venido (imperfecto conservado)') },
    { text: '{τί ποιήσω;}', gloss: T('¿qué haré? (Lc 18.18)') },
    { text: '{ποῦ μένεις;}', gloss: T('¿dónde te quedas? (Jo 1.38)') },
    { text: '{μήτι ἐγώ εἰμι;}', gloss: T('¿acaso soy yo? (espera «no»; Mt 26.22)') },
    { text: '{τίς ἐστιν οὗτος;}', gloss: T('¿quién es este? (Mc 4.41)') },
    { text: '{πῶς δύναται;}', gloss: T('¿cómo puede ser? (Jo 3.9)') },
    { text: '{διὰ τί φοβεῖσθε;}', gloss: T('¿por qué teméis? (Mt 8.26)') },
    { text: '{πότε ταῦτα ἔσται;}', gloss: T('¿cuándo ocurrirá esto? (Mc 13.4)') },
    { text: '{σὺ εἶπας}', gloss: T('tú lo has dicho (respuesta a Judas; Mt 26.25)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Interrogativos esenciales'),
      head: [T('Forma'), T('Sentido'), T('Ejemplo')],
      rows: [
        ['{τίς;}', 'quem?', '{τίς ἐστιν οὗτος;}'],
        ['{τί;}', 'que?', '{τί ποιήσω;}'],
        ['{ποῦ;}', 'onde?', '{ποῦ μένεις;}'],
        ['{πότε;}', 'quando?', '{πότε ταῦτα ἔσται;}'],
        ['{πῶς;}', 'como?', '{πῶς δύναται;}'],
        ['{διὰ τί;}', 'por quê?', '{διὰ τί φοβεῖσθε;}'],
      ],
    },
    {
      caption: T('Tabla 2 — Discurso indirecto'),
      head: [T('Directo'), T('Indirecto con ὅτι'), T('Indirecto con infinitivo')],
      rows: [
        ['{πιστεύω}', '{λέγει ὅτι πιστεύει}', '—'],
        ['{ἦλθον}', '{εἶπεν ὅτι ἦλθεν}', '{ἔφη ἐλθεῖν}'],
        ['{λύσω}', '{λέγει ὅτι λύσει}', '{ἔφη λύσειν}'],
      ],
    },
  ],
};
