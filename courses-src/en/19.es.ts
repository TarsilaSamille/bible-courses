import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('El adverbio: cómo se forma'),
  subtitle: T('quick → quickly, fast, hardly — tres vías'),
  section: T('Adverbios'),
  body: C(`## Tres vías para el mismo sentido

El adverbio de modo en inglés tiene tres caminos de formación, y el aprendiz solo conoce el primero. {quick} es adjetivo y {quickly} es adverbio; {soft} y {softly} igual; {careful} y {carefully} igual. La regla es **adjetivo más {ly}**, y produce la mayoría de los adverbios que el lector va a encontrar.

La segunda vía es la forma que **no tiene nada que ver con un adjetivo**: {fast}, {well}, {soon}, {now}, {then}, {here}, {there}, {today}, {tomorrow}, {yesterday}, {very}, {too}. Son formas autónomas y hay que memorizarlas tal cual.

La tercera vía es el adjetivo que **ya funciona como adverbio** y por eso nunca ganó {ly}. Es la más corta de las tres y la que más engaña.

## El adjetivo que se volvió adverbio

{Fast}, {hard}, {late}, {early}, {straight}, {high}, {low} y {long} hacen las dos cosas con la misma forma. {He runs fast} y {a fast train} usan la misma palabra; {She works hard} y {a hard question} también.

La KJV usa el recurso al final de Mateo 5:48, con {Be ye therefore perfect, as your Father which is in heaven is perfect}. El {perfect} de la primera cláusula es adverbio y el de la segunda es adjetivo, y son la misma palabra. Quien traduce sin notar escribe "sed perfectos" en portugués y pierde el sentido de "sed perfectos en el amor", que es lo que el griego quería decir.

La prueba práctica es corta: **intenta convertir el adverbio en {very} más el adjetivo**. {She speaks slowly} puede volverse {She is very slow} y la frase sigue funcionando; {She speaks quick} no se convierte en nada, porque lo que existe es {She is very quick}.

## Hardly no es "hard"

{Hardly} es el adverbio de hardly, y significa "apenas" o "casi nunca": {He hardly ever comes}. Quien conoce {hard} y {hardly} como par traduce {hardly} por "con dificultad" y produce {He speaks hardly}, que en inglés significa casi "no habla nada".

Tres pares más se comportan igual: {late} es "tarde" y {lately} es "últimamente"; {near} es "cerca" y {nearly} es "casi"; {hard} es "duro, difícil" y {hardly} es "apenas". Son cuatro pares que cambian de categoría y de sentido a la vez, y ninguno sigue la regla del {ly}.

## No todo -ly es adverbio

El camino inverso también tiene una trampa: {lovely}, {friendly}, {lively} y {lonely} terminan en {ly} y son adjetivos, no adverbios. {A lovely day} está bien; {She sings lovely} no existe.

La prueba funciona por los dos lados: si la palabra acepta un {very} delante, es adjetivo; si puede aparecer después de un verbo que dice cómo, es adverbio.`),
  vocab: [
    V('quickly', 'quickly', 'rápidamente'),
    V('softly', 'softly', 'suavemente'),
    V('carefully', 'carefully', 'cuidadamente'),
    V('fast', 'fast', 'rápido'),
    V('hard', 'hard', 'duro, difícil'),
    V('late', 'late', 'tarde'),
    V('early', 'early', 'temprano'),
    V('straight', 'straight', 'recto, directo'),
    V('hardly', 'hardly', 'apenas'),
    V('lately', 'lately', 'últimamente'),
    V('nearly', 'nearly', 'casi'),
    V('well', 'well', 'bien'),
    V('soon', 'soon', 'pronto'),
    V('yesterday', 'yesterday', 'ayer'),
    V('very', 'very', 'muy'),
    V('too', 'too', 'también, demasiado'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El adverbio de modo se forma por tres vías: adjetivo más -ly, forma propia sin relación con un adjetivo, o adjetivo que ya sirve como adverbio.',
      ),
    },
    {
      n: '2',
      text: T(
        'Fast, hard, late, early, straight, high y low son adjetivo y adverbio con la misma forma.',
      ),
    },
    {
      n: '3',
      text: T(
        'Hardly, lately y nearly no son los adverbios de hard, late y near: el sentido es otro.',
      ),
    },
    { n: '4', text: T('Palabras como lovely, friendly y lively terminan en -ly y son adjetivos.') },
    {
      n: '5',
      text: T(
        'La prueba de categoría va por los dos lados: si delante de la palabra puede entrar very, es adjetivo; si aparece detrás de un verbo que dice cómo, es adverbio.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Mateo 5:48 tiene perfect una vez como adverbio y una como adjetivo. El contexto decide, y el mismo verbo que está en discusión hace el trabajo.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Decir hardly para decir con dificultad no es un error de forma: es haber supuesto que el par era regular sin comprobar el sentido.',
      ),
    },
  ],
  examples: [
    { text: '{He speaks slowly}', gloss: T('habla lentamente') },
    { text: '{She runs fast}', gloss: T('ella corre rápido — adverbio') },
    { text: '{a fast train}', gloss: T('un tren rápido — adjetivo') },
    { text: '{She works hard}', gloss: T('ella trabaja mucho') },
    { text: '{He hardly ever comes}', gloss: T('él apenas viene') },
    {
      text: '{What have you been doing lately}',
      gloss: T('¿qué has estado haciendo últimamente?'),
    },
    { text: '{The work is nearly done}', gloss: T('el trabajo está casi terminado') },
    { text: '{Be ye therefore perfect}', gloss: T('sed perfectos — perfect como adverbio') },
    { text: '{a lovely day}', gloss: T('un día precioso — adjetivo, no adverbio') },
    { text: '{We shall see you soon}', gloss: T('te veremos pronto') },
  ],
  tables: [
    {
      caption: T('Las tres vías'),
      head: [T('Vía'), T('Fórmula'), T('Ejemplos'), T('Observación')],
      rows: [
        [
          T('adjetivo + -ly'),
          T('quick → quickly'),
          '{quickly, softly, carefully}',
          T('la mayoría de los casos'),
        ],
        [T('forma propia'), T('—'), '{fast, well, soon, now}', T('memorizar tal cual')],
        [T('adjetivo = adverbio'), T('—'), '{fast, hard, late, straight}', T('no se añade nada')],
      ],
    },
    {
      caption: T('Los pares que cambian el sentido'),
      head: [T('Sin -ly'), T('Con -ly'), T('Diferencia de sentido')],
      rows: [
        ['{hard}', '{hardly}', T('duro × apenas')],
        ['{late}', '{lately}', T('tarde × últimamente')],
        ['{near}', '{nearly}', T('cerca × casi')],
        ['{well}', '{well}', T('el mismo: adverbio en ambos')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál frase es correcta?'),
    options: [
      T('He speaks hardly'),
      T('He speaks hard'),
      T('He speaks nearly'),
      T('He speaks late'),
    ],
    answer: 1,
    hint: T('Hardly significa "apenas"; para "con dificultad", usa hard.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Deriva el adverbio: 'careful' → '___'"), answer: 'carefully' },
    { kind: 'fill', prompt: T("Completa: 'She is a ___ girl.' (precioso)"), answer: 'lovely' },
    {
      kind: 'match',
      prompt: T('Relaciona la palabra con su categoría.'),
      pairs: [
        { a: 'quickly', b: T('adverbio') },
        { a: 'fast', b: T('adverbio y adjetivo') },
        { a: 'hardly', b: T('adverbio de negación') },
        { a: 'lovely', b: T('adjetivo') },
      ],
      answer: ['0-0', '1-1', '2-0', '3-1'],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase usa hardly correctamente?'),
      options: [
        T('He hardly speaks English'),
        T('He speaks hardly English'),
        T('He speaks hardly'),
        T('He is hardly speak English'),
      ],
      answer: 0,
    },
  ],
};
