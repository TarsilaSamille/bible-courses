import { C, T, V } from '../shared.mts';

export default {
  id: 35,
  title: T('La oración subordinada y el discurso indirecto'),
  subtitle: T('que, cuando, aunque — y la lectura de Juan 1.1-5'),
  section: T('Sintaxis'),
  body: C(`## Qué hace una subordinada

Una subordinada **depende** de una oración principal y no existe sola: {Creo que Dios existe} — sin el {creo}, el resto es un fragmento. En español, al reportar, **no se invierte el orden** como en inglés.

Clases principales:

• **Sustantivas** (función de sustantivo): {Creo que...} · {Sé que...} · {Espero que...} · {Que viene} · {Lo que sea}.
• **Adjetivas** (función de adjetivo): {el hombre que vino} · {cuyo nombre} · {donde está}.
• **Adverbiales** (función de adverbio): {porque} · {cuando} · {aunque} · {si} · {para que} · {mientras} · {como}.

## El subjuntivo en las adverbiales

• {porque + indicativo} = causa real: {Vino porque me llamó} «vino porque me llamó».
• {para que + subjuntivo} = finalidad: {Estudio para que apruebe} «estudio para que apruebe».
• {cuando} con futuro seguro → indicativo; con futuro incierto → **subjuntivo**: {Cuando venga} frente a {Cuando viene el tren}.
• {aunque} lleva **siempre** subjuntivo: {aunque sea} · {aunque llegue tarde}.
• {si} condicional: {si viene, avísame} (subjuntivo) — {si viene todos los días} (indicativo, hábito).
• {mientras} «mientras» con indicativo: {mientras oraba} (Jn 20.29: {mientras espero, viene}); y {aunque no le hayan visto} muestra el **subjuntivo perfecto** {hayan visto}.

## Discurso indirecto: la correlación de tiempos

El discurso indirecto hace que el verbo **retroceda un tiempo** respecto al directo:

• {Dice que viene} «dice que viene» → {Dijo que vendría} «dijo que vendría» (presente → condicional).
• {Dice que vino} «dice que vino» → {Dijo que había venido} «dijo que había venido» (pretérito → pluscuamperfecto).
• {Preguntó dónde moraba} «preguntó dónde moraba» (las preguntas indirectas conservan el tiempo del directo y no llevan {que}).

Órdenes: {Mandó que salieran} «mandó que salieran» (¡subjuntivo!) · {Ordenó que vinieran}.

## Lectura final: Juan 1.1-5 (Reina-Valera 1960)

1. {En el principio era el Verbo} — **principal**, {ser} en imperfecto, sujeto pospuesto.
2. {Y el Verbo era con Dios} — la {y} enlaza; {con Dios} trae la {a} personal (cap. 22).
3. {Y el Verbo era Dios} — la más corta: sujeto + {era} + atributo.
4. {En él estaba la vida} — {en} + {estar} en imperfecto para la vida creada: {estaba} = «había».
5. {Y la vida era la luz de los hombres} — {era} de nuevo: la vida **era** luz (identidad, no proceso).
6. {Y la luz resplandece en las tinieblas} — paso al **presente**: la luz brilla **ahora**.
7. {Y las tiniegas no la alcanzó} — {no} + {alcanzaron} «las tinieblas no la alcanzó».
8. {En él estaba la vida} se repite con {en} + {estar} — el Verbo es el **agente** de todo.

En cinco versículos el evangelio usa {era} (imperfecto de estado), {estaba} (imperfecto de posición), {resplandece} (presente) y {alcanzaron} (pretérito): el tiempo es teología.`),
  vocab: [
    V('aunque sea', 'ser', 'aunque sea (¡subj.!)'),
    V('cuando venga', 'venir', 'cuando venga (¡subj.!)'),
    V('dijo que', 'decir', 'dijo que'),
    V('vendría', 'venir', 'vendría (¡futuro → condicional!)'),
    V('había venido', 'venir', 'había venido (¡pretérito → pluscuamperfecto!)'),
    V('preguntó', 'preguntar', 'preguntó'),
    V('mandó que salieran', 'mandar', 'mandó que salieran'),
    V('resplandece', 'resplandecer', 'resplandece (¡presente! Jn 1.5)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«Dice que vendrá» en el pasado?'),
    options: [
      T('Dijo que vendrá'),
      T('Dijo que vendría (¡futuro → condicional!)'),
      T('Dijo que viene'),
      T('Dijo que venga'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Pasa al indirecto: «Dice que viene» → «Dijo que ___»'),
      answer: 'vendría',
      hint: T('Regla §4: presente → condicional en el discurso indirecto.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración usa correctamente el subjuntivo?'),
      options: [
        T('Aunque es joven, trabaja'),
        T('Aunque sea joven, trabaja'),
        T('Cuando es joven, trabaja'),
        T('Si es joven, trabaja'),
      ],
      answer: 1,
      hint: T('Regla §2: «aunque» exige siempre subjuntivo.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa la orden indirecta: «Mandó que ___» (que salieran)'),
      answer: 'salieran',
      hint: T('Regla §5: la orden indirecta usa el imperfecto de subjuntivo.'),
    },
  ],
  rules: [
    { n: '1', text: T('La subordinada nunca existe sola: depende siempre de una principal.') },
    {
      n: '2',
      text: T(
        'Aunque, cuando (futuro incierto), para que, si (hipótesis) y antes de que piden subjuntivo.',
      ),
    },
    {
      n: '3',
      text: T(
        'En el discurso indirecto el verbo retrocede: presente → condicional, pretérito → pluscuamperfecto.',
      ),
    },
    {
      n: '4',
      text: T(
        'Las preguntas indirectas no llevan «que» y conservan el tiempo del directo: Preguntó dónde vivía.',
      ),
    },
    {
      n: '5',
      text: T('Las órdenes indirectas usan el imperfecto de subjuntivo: mandó que salieran.'),
    },
  ],
  notes: [
    {
      label: T('Cómo leer el texto bíblico:'),
      text: T(
        'Lee siempre en voz alta, versículo por versículo, e identifica primero el verbo: si es {es}, {era}, {está} o {estaban}, tienes estado; si es {hizo}, {dijo}, {vio}, tienes acción. Después busca el disparador del subjuntivo ({porque}, {aunque}, {para que}, {cuando}). Una subordinada sin disparador es adjetiva ({el Verbo que era Dios}).',
      ),
    },
    {
      label: T('Europeo × americano:'),
      text: T(
        'La sintaxis es idéntica en ambos mundos. Las diferencias son de léxico ({vosotros} frente a {ustedes}, {ordenador} frente a {computadora}) y de pronunciación ({z} = th en España, {ll} = jota). El texto bíblico castellano (Reina-Valera 1960) sigue la norma de España, que es la que enseña este curso.',
      ),
    },
  ],
  examples: [
    {
      text: '{Aunque sea difícil, lo haré}',
      gloss: T('Aunque sea difícil, lo haré (¡aunque + subjuntivo!).'),
    },
    {
      text: '{Dijo que vendría}',
      gloss: T('Dijo que vendría (presente → condicional en el indirecto).'),
    },
    {
      text: '{Mandó que salieran}',
      gloss: T('Mandó que salieran (imperativo → imperfecto de subjuntivo).'),
    },
    {
      text: '{En el principio era el Verbo}',
      gloss: T('En el principio era el Verbo (Jn 1.1 — principal + tiempo de estado).'),
    },
    {
      text: '{Y la luz resplandece}',
      gloss: T('Y la luz resplandece (Jn 1.5 — presente: la luz brilla ahora).'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Las tres clases de subordinadas'),
      head: [T('Clase'), T('Conjunción'), T('Ejemplo'), T('Modo típico')],
      rows: [
        [T('sustantiva'), '{que}, {si}, {cómo}', '{Creo que es verdad}', T('ind. o subj.')],
        [T('adjetiva'), '{que}, {quien}, {cuyo}', '{el libro que leo}', T('indicativo')],
        [
          T('temporal'),
          '{cuando}, {mientras}',
          '{Cuando venga, te veré}',
          T('subjuntivo (futuro incierto)'),
        ],
        [T('concesiva'), '{aunque}', '{Aunque sea difícil}', T('siempre subjuntivo')],
        [T('causal'), '{porque, como}', '{Porque lo vi, supe}', T('indicativo')],
        [T('final'), '{para que, a fin de que}', '{Estudio para que apruebe}', T('subjuntivo')],
        [T('condicional'), '{si}', '{Si viene, avísame}', T('subjuntivo (hipótesis)')],
      ],
    },
    {
      caption: T('Tabla 2 — Correlación de tiempos en el discurso indirecto'),
      head: [T('Directo'), T('Indirecto'), T('Referencia')],
      rows: [
        ['{Dice que viene}', '{Dijo que vendría}', 'pres. → cond.'],
        ['{Dice que ha venido}', '{Dijo que había venido}', 'perf. → pluscuamperf.'],
        ['{Dice que vino}', '{Dijo que había venido}', 'pret. → pluscuamperf.'],
        ['{PREGUNTA dónde vive}', '{Preguntó dónde vivía}', 'pres. → imperf. (sem «que»!)'],
        ['{¿Vienes?} → Dice que sí', '{Dijo que sí}', '—'],
        ['{¡Salgan de aquí!}', '{Mandó que salieran}', 'imperativo → imp. subj.'],
      ],
    },
    {
      caption: T('Tabla 3 — Capstone: Juan 1.1-5 analizado'),
      head: [T('Fragmento'), T('Estructura'), T('Tiempo verbal')],
      rows: [
        ['{En el principio era el Verbo}', T('complemento + verbo + sujeto'), '{era} (imperf.)'],
        ['{Y el Verbo era con Dios}', T('coordinada por «y»'), '{era} (imperf.)'],
        ['{Y el Verbo era Dios}', T('sujeto + ser + atributo'), '{era} (imperf.)'],
        ['{En él estaba la vida}', T('en + pronombre + estar'), '{estaba} (imperf.)'],
        ['{Y la luz resplandece}', T('verbo intransitivo'), '{resplandece} (pres.)'],
        [
          '{las tiniegas no la alcanzó}',
          T('sujeto pospuesto + no + pretérito'),
          '{alcanzaron} (pret.)',
        ],
      ],
    },
  ],
};
