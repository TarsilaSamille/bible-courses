import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('Condicionales'),
  subtitle: T('εἰ, ἐάν, ἄν: tres grados de "si"'),
  section: T('Sintaxis'),
  body: C(`## Tres mundos posibles

El griego distingue tres grados de condición, cada uno con su propia partícula y modo.La condición real ({εἰ} + indicativo) trata el caso como un hecho o una hipótesis abierta: {εἰ πιστεύεις} "si crees (y es un hecho...)".El eventual ({ἐάν} + subjuntivo) proyecta un futuro incierto: {ἐὰν ἀγαπᾶτέ με} "si me amas (siempre que lo hagas)" (Juan 14:15).Lo irreal ({εἰ} + pasado + {ἄν}) lamenta lo contrario del hecho: {εἰ ἤδειτε} "si supieras (pero no lo sabes)".

El portugués ayuda: el eventual griego coincide con nuestro subjuntivo futuro ("se confesarmos", 1 Juan 1:9, {ἐὰν ὁμολογῶμεν}): el griego mantiene viva la forma que el portugués conserva.Y lo irreal usa imperfecto/aoristo como nuestro "si supieras...".

## Real, eventual, irreal

Real: {εἰ} + cualquier tiempo de indicativo, en prótasis y apódosis según lo requiera el sentido.{εἰ θεὸς ὑπὲρ ἡμῶν} "si Dios es por nosotros..." (Rom 8:31) — el apóstol asume el hecho y saca la consecuencia ({τίς καθ᾽ ἡμῶν;} "¿quién contra nosotros?").Juan 11:40 mezcla mundos a propósito: {οὐκ εἶπόν σοι ὅτι ἐὰν πιστεύσῃς;} "¿No os dije que si creéis…?".

Eventual: {ἐάν} (= {εἰ} + {ἄν}) + subjuntivo;Apodosis en futuro o imperativo.Condición del discipulado: {ἐὰν περιπατῶμεν ἐν τῷ φωτί} "si andamos en la luz..." (1 Juan 1:7), {ἐὰν ἀγαπᾶτέ με, τὰςἐντολάς μου τηρήσετε} "si me amáis, guardaréis mis mandamientos" (Juan 14:15).

Irreal: {εἰ} + imperfecto/aoristo + {ἄν} en ambos lados.Presente irreal ({εἰ ἦτε} "si fueras...", Juan 8:39) y pasado irreal ({εἰ ᾔδειτε} "si hubieras conocido...").{ἄν} marca lo incumplible; sin ello, la oración regresa al mundo real.

## La cuarta clase y los deseos.

Sigue siendo la condición potencial remota ({εἰ} + optativo... {ἄν} + optativo: "si por casualidad..."), extremadamente rara en el Nuevo Testamento: basta con reconocer el optativo (cap. 8).Y mandamientos condicionales disfrazados: {ὃς ἐὰν θέλῃ} "el que quiera" (Marcos 8:34, relativo + {ἐάν} = eventual genérico), {ὅστις} + subjuntivo en bienaventuranzas invertidas.`),
  vocab: [
    V('ἐάν', 'ἐάν', 'if (eventual)'),
    V('εἰ', 'εἰ', 'if (real)'),
    V('ἄν', 'ἄν', 'potential particle'),
    V('ὁμολογῶμεν', 'ὁμολογέω', 'we confess'),
    V('περιπατῶμεν', 'περιπατέω', 'we walk'),
    V('ἀγαπᾶτε', 'ἀγαπάω', 'you love'),
    V('θέλῃς', 'θέλω', 'you wish'),
    V('εἴπῃς', 'λέγω', 'you say'),
    V('νίψω', 'νίπτω', 'I wash'),
    V('ᾔδειτε', 'οἶδα', 'you had known'),
    V('ὑπέρ', 'ὑπέρ', 'for, on behalf of'),
    V('φῶς', 'φῶς', 'light'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"ἐὰν ὁμολογῶμεν" (1 Juan 1:9) es una… condición'),
    options: [
      T('Eventual (ἐάν + subjunctive)'),
      T('Real (εἰ + indicative)'),
      T('Past unreal'),
      T('Remote potential'),
    ],
    answer: 0,
    hint: T('ἐάν + subjuntivo = eventual — regla §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Completa la partícula de condición real: ___ θεὸς ὑπὲρ ἡμῶν ("si Dios es por nosotros", Rom 8:31).',
      ),
      answer: 'εἰ',
      hint: T('Real = εἰ + indicative.'),
    },
    {
      kind: 'choose',
      prompt: T('"εἰ ἤδειτε" (sin ἄν) sería…'),
      options: [
        T('Past fact, not regret ("if you knew [as fact]")'),
        T('Unreal just the same'),
        T('Future eventual'),
        T('Direct command'),
      ],
      answer: 0,
      hint: T('No ἄν, no irreal — regla §4.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada oración con su clase.'),
      pairs: [
        { a: 'εἰ πιστεύεις', b: 'real' },
        { a: 'ἐὰν πιστεύσῃς', b: 'eventual' },
        { a: 'εἰ ᾔδεις ἄν', b: 'irreal' },
        { a: 'ὃς ἐὰν θέλῃ', b: 'eventual genérica' },
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
        'Real = εἰ + indicativo (hecho o hipótesis abierta).Eventual = ἐάν + subjuntivo (futuro incierto).Irreal = εἰ + pasado + ἄν.',
      ),
    },
    {
      n: '2',
      text: T(
        '{ἐάν} = fusionado εἰ + ἄν.Frente a ἐάν, espere subjuntivo;frente a εἰ + indicativo, hecho.',
      ),
    },
    {
      n: '3',
      text: T(
        'El eventual coincide con el futuro subjuntivo portugués ("se andarmos").El portugués conserva lo que usa el griego.',
      ),
    },
    {
      n: '4',
      text: T('No ἄν, no irreal: εἰ + pasado sin ἄν describe hechos pasados, no arrepentimiento.'),
    },
  ],
  notes: [
    {
      label: T('ἐὰν vs ἄν:'),
      text: T(
        '{ἐάν} (con ε) abre la condición;lone {ἄν} marca potencialidad e irrealidad dentro de la cláusula.{ἐὰν θέλῃς δύνασαί με} "si quieres, puedes curarme" (Marcos 1:40): condición eventual con potencial apódosis.',
      ),
    },
    {
      label: T('John and the eventual:'),
      text: T(
        '1 Juan es la epístola {ἐάν}: 1:7, 1:9, 2:1, 3:21 — pruebas de comunión en condiciones eventuales ("si andamos...", "si confesamos...").Leer 1 Juan después de este capítulo es cosechar lo sembrado.',
      ),
    },
  ],
  examples: [
    { text: '{ἐὰν ὁμολογῶμεν}', gloss: T('if we confess (1 John 1:9)') },
    { text: '{ἐὰν περιπατῶμεν}', gloss: T('if we walk in the light (1 John 1:7)') },
    { text: '{ἐὰν ἀγαπᾶτέ με}', gloss: T('if you love me (John 14:15)') },
    { text: '{εἰ θεὸς ὑπὲρ ἡμῶν}', gloss: T('if God is for us (Rom 8:31)') },
    { text: '{εἰ ἦτε}', gloss: T('if you were (unreal; John 8:39)') },
    { text: '{εἰ ᾔδειτε}', gloss: T('if you had known (past unreal)') },
    { text: '{ὃς ἐὰν θέλῃ}', gloss: T('whoever wishes (generic eventual; Mark 8:34)') },
    { text: '{ἐὰν εἴπῃς}', gloss: T('if you say (uncertain future)') },
    { text: '{εἰ πιστεύεις}', gloss: T('if you believe (open hypothesis)') },
    { text: '{ἐὰν μὴ νίψω}', gloss: T('unless I wash (John 13:8; negative eventual)') },
  ],
  tables: [
    {
      caption: T('Table 1 — The three conditionals'),
      head: [T('Clase'), T('Prótasis (si…)'), T('Apódosis (…entonces)')],
      rows: [
        ['Real', '{εἰ} + indicativo', 'qualquer modo'],
        ['Eventual', '{ἐάν} + subjuntivo', 'futuro / imperativo'],
        ['Irreal', '{εἰ} + passado + {ἄν}', 'passado + {ἄν}'],
      ],
    },
    {
      caption: T('Tabla 2: Ejemplos por clase'),
      head: [T('Clase'), T('Ejemplo'), T('Traducción')],
      rows: [
        ['Real', '{εἰ θεὸς ὑπὲρ ἡμῶν}', 'se Deus é por nós (Rm 8.31)'],
        ['Eventual', '{ἐὰν ὁμολογῶμεν}', 'se confessarmos (1Jo 1.9)'],
        ['Irreal pres.', '{εἰ ἦτε}', 'se fôsseis (Jo 8.39)'],
        ['Irreal pass.', '{εἰ ᾔδειτε}', 'se tivésseis sabido'],
      ],
    },
  ],
};
