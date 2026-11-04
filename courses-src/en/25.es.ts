import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('El verbo: las doce combinaciones con have y do'),
  subtitle: T('have gone × went — la distinción de aspecto'),
  section: T('El verbo'),
  body: C(`## Un auxiliar, doce combinaciones

El tiempo verbal del inglés no está en el verbo principal: está en el **auxiliar**. El auxiliar flexiona por persona y el verbo principal se queda en la forma que ese auxiliar exige, y doce combinaciones cubren casi todo.

Con {be} hay dos: {am working}, {is working}, {are working}, {was working}, {were working}. Con {have} hay tres: {have worked}, {has worked}, {had worked}. Con {do} hay tres: {do work}, {does work}, {did work}. Con {will} y {shall} hay dos: {will go}, {shall go}. Con los modales hay dos: {can go}, {must go}.

El verbo principal sigue siempre la misma lógica: {be} pide {ing}, {have} pide participio, y {do}, {will}, {shall} y los modales piden la base. Entendida esa columna, lo que queda es memorizar el auxiliar.

## El error que produce el portugués

El error más caro del hablante de portugués aquí es {I have went}. La frase está mal porque {went} es pasado y no participio: el participio de {go} es {gone}.

El error tiene su causa en que el portugués tiene un solo tiempo para las dos funciones. "Eu fui" y "eu tenho ido" son frases distintas en portugués, y sin embargo el aprendiz agrupa las dos bajo un mismo verbo. No caben: {I went} dice que el hecho es pasado y está cerrado; {I have gone} dice que el hecho tiene un resultado que vale ahora.

Juan 9:25 en la KJV trae exactamente ese par: {whereas I was blind, now I see}. El {was} mira hacia atrás y el {see} mira hacia ahora, y el mismo sujeto aparece en las dos mitades. El portugués leído por encima escribe "era ciego y veo"; el inglés hace la distinción dentro de la frase.

## Tres maneras de decir que lo hiciste

Para un mismo evento el inglés ofrece tres o cuatro construcciones, y la elección es de aspecto y no de reloj. {I went} es el pasado simple: el evento pasó y se acabó. {I have gone} es el presente perfecto: el evento importa ahora, por su resultado. {I had gone} es el perfecto pasado: el evento viene antes de otro pasado. {I am going} es el continuo: la acción está en curso.

La pregunta que decide es **qué necesita saber quien escucha**: si necesita un punto en el tiempo, use el pasado; si necesita el resultado, use el perfecto. El portugués casi siempre prefiere el punto, y por eso {I have gone} suena raro al aprendiz y {I went} suena natural incluso cuando lo que importa es el resultado.

## will, shall y los modales

El futuro tiene más de una forma porque el inglés distingue tres intenciones. {Will} es decisión, predicción u oferta: {I will call you}. {Shall} aparece en la pregunta y en la oferta: {Shall we go?} Y {going to} es una intención anterior al momento de hablar: {I am going to call you}.

Los modales no tienen participio ni pasado. {Can go} es presente, {could go} es pasado y {will be able to go} es futuro. Es la única familia en que el pasado es una forma separada sin {ed}, y resuelve la mayor parte de lo que el aprendiz llamaría irregularidad.`),
  vocab: [
    V('have worked', 'work', 'he trabajado'),
    V('has worked', 'work', 'ha trabajado'),
    V('had worked', 'work', 'había trabajado'),
    V('am going', 'go', 'estoy yendo'),
    V('have gone', 'go', 'me he ido'),
    V('had gone', 'go', 'me había ido'),
    V('will go', 'go', 'iré'),
    V('shall go', 'go', '¿vamos?'),
    V('can go', 'go', 'puede ir'),
    V('must go', 'go', 'tiene que ir'),
    V('do work', 'work', 'trabajo'),
    V('did work', 'work', 'trabajé'),
    V('I went', 'go', 'yo fui'),
    V('were blind', 'be', 'era ciego'),
    V('now I see', 'see', 'ahora veo'),
  ],
  rules: [
    { n: '1', text: T('El tiempo verbal está en el auxiliar, no en el verbo principal.') },
    {
      n: '2',
      text: T(
        'Be pide -ing, have pide participio, y do, will, shall y los modales piden la base del verbo.',
      ),
    },
    { n: '3', text: T('I have went está mal: el participio de go es gone.') },
    {
      n: '4',
      text: T(
        'I went marca el pasado como cerrado; I have gone lo marca por el resultado que vale ahora.',
      ),
    },
    {
      n: '5',
      text: T(
        'Will es decisión o predicción, shall es oferta o pregunta, y going to es intención anterior a hablar.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Juan 9:25 dice whereas I was blind, now I see: el pasado mira atrás y el presente mira hacia ahora, en la misma frase y con el mismo sujeto.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Si alguien escribe I have went, el problema es el participio y no el tiempo. La forma went es pasado; el participio es gone, y es el participo lo que el auxiliar exige.',
      ),
    },
  ],
  examples: [
    { text: '{I went}', gloss: T('yo fui — pasado cerrado') },
    { text: '{I have gone}', gloss: T('yo me he ido — el resultado vale ahora') },
    { text: '{I had gone}', gloss: T('yo me había ido — antes de otro pasado') },
    { text: '{I am going}', gloss: T('yo estoy yendo — en curso') },
    { text: '{whereas I was blind, now I see}', gloss: T('era ciego, ahora veo') },
    { text: '{He has worked here for ten years}', gloss: T('lleva diez años trabajando aquí') },
    { text: '{They had already left}', gloss: T('ya se habían ido') },
    { text: '{Shall we go}', gloss: T('¿vamos?') },
    { text: '{I will call you}', gloss: T('te llamo') },
    { text: '{I must go now}', gloss: T('tengo que irme ahora') },
  ],
  tables: [
    {
      caption: T('Las doce combinaciones'),
      head: [T('Auxiliar'), T('Verbo principal'), T('Combinaciones')],
      rows: [
        ['{am / is / are}', '{+ing}', '{am working, is working, are working}'],
        ['{was / were}', '{+ing}', '{was working, were working}'],
        ['{have / has}', T('{+participle}'), '{have worked, has worked}'],
        ['{had}', T('{+participle}'), '{had worked}'],
        ['{do / does}', T('base'), '{do work, does work}'],
        ['{did}', T('base'), '{did work}'],
        ['{will / shall}', T('base'), '{will go, shall go}'],
        ['{can / could}', T('base'), '{can go, could go}'],
        ['{must}', T('base'), '{must go}'],
      ],
    },
    {
      caption: T('Cuatro maneras de hablar de un mismo evento'),
      head: [T('Forma'), T('Qué dice'), T('Pregunta a la que responde')],
      rows: [
        ['{I went}', T('pasado simple'), T('¿cuándo ocurrió?')],
        ['{I have gone}', T('presente perfecto'), T('¿y ahora cuál es el resultado?')],
        ['{I had gone}', T('perfecto pasado'), T('¿qué había pasado antes?')],
        ['{I am going}', T('continuo'), T('¿qué está pasando ahora?')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál frase es correcta?'),
    options: [T('I have went'), T('I have gone'), T('I have go'), T('I am went')],
    answer: 1,
    hint: T('Después de have va el participio, que en go es gone.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Completa: 'She ___ working.' (ahora)"), answer: 'is' },
    { kind: 'fill', prompt: T("Completa: 'They ___ already left.'"), answer: 'have' },
    {
      kind: 'match',
      prompt: T('Relaciona el auxiliar con la forma que exige.'),
      pairs: [
        { a: '{have worked}', b: T('participio') },
        { a: '{is working}', b: T('-ing') },
        { a: '{will go}', b: T('base') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase dice que él todavía no ha llegado?'),
      options: [T('He did not come'), T('He has not come'), T('He is not come'), T('He not came')],
      answer: 1,
    },
  ],
};
