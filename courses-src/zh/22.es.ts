import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('Pronombres'),
  title: T('Pronombre interrogativo y la partícula {嗎}'),
  subtitle: T(
    'La pregunta no invierte nada: el mismo orden que la afirmación, y una partícula al final',
  ),
  body: C(`
## La pregunta no se mueve

El español admite dos recursos para preguntar, y el inglés añade un tercero. El más visible es la inversión: "¿Quieres una manzana?" conserva el orden, pero "¿Lo tienes tú?" pone la respuesta en el sujeto. Y el recurso más común es todavía más discreto: "¿come la manzana?" es exactamente igual que "come la manzana", y solo los signos de interrogación y la entonación dicen que hay una pregunta. El mandarín no invierte nada y no tiene nada que poner delante: {nǐ xǐhuan píngguǒ}, te gustan las manzanas, y {nǐ xǐhuan píngguǒ ma} son la misma frase, los mismos cuatro elementos, el mismo orden, y una partícula al final. No subió nada, no bajó nada.

Por eso el español engaña aquí más de lo que parece. En "¿Vas a dónde?" el elemento interrogativo está adelantado, fuera del lugar que ocuparía el sustantivo. En mandarín ese adelantamiento no existe: {nǎlǐ nǐ qù} no es una frase, es una frase rota, con el sujeto fuera de sitio y el interrogativo pegado donde le tocaba. Y "¿la manzana come?" tampoco: {píngguǒ chī} es un sustantivo pegado a un verbo y sin sujeto, es decir la frase sin verbo con un verbo metido en el medio, y sigue estando mal por el mismo motivo.

El error simétrico es el que comete casi todo el mundo: traer el sujeto al final. {xǐhuan píngguǒ nǐ ma} no es mandarín, no es pregunta y no significa nada. El mandarín no tiene la frase de sujeto tardío que el español y el inglés construyeron; tiene el orden fijo sujeto-verbo-objeto y una partícula que hace el trabajo de la interrogación.

## {嗎}: una partícula que lo hace todo

{ma} es la partícula de la pregunta de sí o no, y es una sola pieza. Vea la misma frase en tres estados:

- **afirmativa** — {nǐ xǐhuan píngguǒ}, "te gustan las manzanas".
- **negativa** — {nǐ bù xǐhuan píngguǒ}, "no te gustan las manzanas": la negación es {bù}, y nada más cambia.
- **interrogativa** — {nǐ xǐhuan píngguǒ ma}, "¿te gustan las manzanas?": la misma frase, con {ma} al final.

Lo que cambia no es la frase: es el tipo. Y por eso {ma} es la partícula más barata de la lengua, una sílaba sin sentido propio que aun así hace toda la diferencia.

De ahí sale una restricción, y viene de la posición: {ma} necesita un verbo o un adjetivo al cual apoyarse. {nǐ lái ma} funciona, {nǐ hěn lèi ma} funciona, y {nǐ shì ma}, «¿eres?», funciona también, porque {shì} es el verbo que mejor acepta {ma} en mandarín: liga dos sintagmas nominales, y la pregunta cae de forma natural sobre esa ligazón. Lo que falla es {ma} sin nada en que apoyarse: {nǐ ma} no es pregunta, es ruido.

La segunda restricción es de tipo, no de posición: {ma} solo cierra preguntas de sí o no. {nǐ yào qù nǎlǐ ma} está mal, porque la respuesta a una pregunta de lugar no puede ser sí o no. Esa es la prueba práctica: si la respuesta puede empezar por «sí» o «no», usa {ma}; si no puede, no lo pongas.

El mandarín distingue lo que el español distingue, pero por medios opuestos. El español lo distingue con la entonación y, a veces, con la inversión; el mandarín lo distingue eligiendo partícula, o no eligiendo ninguna.

## La pregunta neutra y las otras dos partículas

Una pregunta que no espera un sí o un no no necesita {ma}. {nǐ yào qù nǎlǐ}, «¿vas a dónde?», está completa: lo que marca la interrogación es la entonación, que sube al final, y el hecho de que {ma} no esté ahí. Lo mismo vale para {nǐ chī shénme} y {tā shì shéi}.

En esos casos el mandarín dispone de otras dos partículas que el español no tiene:

- {ne} es la partícula de la referencia: entra cuando la pregunta recae sobre algo ya mencionado, sobre lo que el otro acaba de decir. {nǐ shì shénme?} pregunta el nombre de alguien que se presentó; {nǐ shì shénme ne?} pregunta el nombre del *otro*. Señala, no interroga.
- {ba} es la partícula de la sugerencia y de la confirmación: {zǒu ba} propone, {hǎo ba} cierra un acuerdo, {shì ba} pide al oyente que confirme lo dicho.

Con tres partículas donde el español tiene una sola boca, quien traduce desde el español se equivoca dos veces en el mismo párrafo: pone {ma} donde había entonación, y pone entonación donde había partícula.

## Los pronombres, la posición, y la pregunta de Pedro

El pronombre interrogativo ocupa el lugar que ocuparía el sustantivo, y el lugar del sustantivo es antes del verbo, como cualquier objeto. Así que la posición no es un detalle: es la posición del sustantivo.

{wèishénme} es el único que lleva marca visible: es wèi más shénme, "por qué cosa" vuelto "por qué". {duōshao} pregunta precio y cantidad que no se cuenta, como en {duōshao qián}, cuánto cuesta; el parente que cuenta objetos es {jǐ}, en {jǐ běn shū}. Los dos viven en la misma posición, la del sustantivo y antes del verbo, y ninguno pide {ma}.

La ganancia bíblica es exacta: Juan 6:68, {nǐ wǎng nǎlǐ qù}, «¿vas a dónde?», es la pregunta de Pedro a Jesús. Es una pregunta sin inversión, sin {ma}, con el pronombre en el lugar del sustantivo y el verbo al final. El habla cotidiana añade el verbo {yào} y dice {nǐ yào dào nǎlǐ qù}; Juan 6:71 repite el {yào}, {nǐ yào wǎng nǎlǐ qù}, y Juan 1:38 hace la misma pregunta después de làbì, "rabino". Tres preguntas, la misma frase.

Y la {和合本} muestra por qué vale aprender la forma escrita: {shéi} tiene una forma larga hablada, shuí; {nǎlǐ} tiene la hablada nǎr; {zěnme} tiene la forma escrita más formal zěnyàng. La Biblia imprime siempre la escrita. Quien aprendió hablando reconoce la frase y no el carácter, y quien solo lee nunca tuvo el problema, porque la pregunta no se mueve.`),
  vocab: [
    V('ma', '吗', 'partícula de la pregunta de sí o no; siempre al final (ma)'),
    V('ne', '呢', 'partícula de referencia: la pregunta recae sobre algo ya dicho (ne)'),
    V('ba', '吧', 'partícula de sugerencia y de confirmación (ba)'),
    V('shéi', '谁', 'quién, alguien (forma escrita); hablado shuí (shéi)'),
    V('shuí', '谁', 'forma hablada de shéi, común fuera del norte (shuí)'),
    V('shénme', '什么', 'qué (shénme)'),
    V('nǎlǐ', '哪里', 'dónde (forma escrita); hablado nǎr (nǎlǐ)'),
    V('nǎr', '哪儿', 'dónde, en el habla (nǎr)'),
    V('zěnme', '怎么', 'cómo (zěnme); la forma escrita más formal es zěnyàng'),
    V('duōshao', '多少', 'cuánto, qué precio (duōshao)'),
    V('wèishénme', '为什么', 'por qué; es wèi más shénme (wèishénme)'),
    V(
      '和合本',
      '和合本',
      'la traducción-union de la Biblia al chino, la forma escrita que sigue este curso',
    ),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La pregunta conserva el orden de la afirmación: {nǐ xǐhuan píngguǒ ma} es {nǐ xǐhuan píngguǒ} más {ma} al final. No se invierte nada.',
      ),
    },
    {
      n: '2',
      text: T(
        '{ma} cierra una pregunta de sí o no y necesita un verbo o adjetivo delante: {nǐ lái ma}, nunca {nǐ shì ma}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Una pregunta abierta prescinde de {ma}: {nǐ yào qù nǎlǐ}, nunca {nǐ yào qù nǎlǐ ma}.',
      ),
    },
    {
      n: '4',
      text: T(
        'El pronombre interrogativo ocupa el lugar del sustantivo, que es antes del verbo: {nǐ yào qù nǎlǐ}.',
      ),
    },
    { n: '5', text: T('{ma} pregunta, {ne} remite a lo ya dicho, {ba} propone o confirma.') },
  ],
  notes: [
    {
      label: T('Por qué {ma} no cierra una pregunta abierta'),
      text: T(
        '{nǐ yào qù nǎlǐ ma} no es mandarín: {nǎlǐ} pregunta por un lugar, y la respuesta no puede ser sí o no. Si quiere {ma}, hay que reformular la pregunta: {nǐ yào qù ma} — "¿vas?".',
      ),
    },
    {
      label: T('La {和合本} escribe lo que el habla acorta'),
      text: T(
        '{shéi} (hablado shuí), {nǎlǐ} (hablado nǎr), {zěnme} (que también se escribe zěnyàng). La Biblia usa casi siempre la forma escrita, que es más larga y más clara. Quien lee reconoce lo que ya oyó; quien solo habla reconoce la frase y nunca el carácter.',
      ),
    },
  ],
  examples: [
    { text: '你喜歡蘋果嗎', gloss: T('nǐ xǐhuan píngguǒ ma — ¿te gustan las manzanas?') },
    { text: '你是誰', gloss: T('nǐ shì shéi — ¿quién eres tú?') },
    { text: '你要吃什麼', gloss: T('nǐ yào chī shénme — ¿qué vas a comer?') },
    { text: '你往哪裡去', gloss: T('nǐ wǎng nǎlǐ qù — ¿vas a dónde? (Juan 6:68)') },
  ],
  tables: [
    {
      caption: T('Una partícula, tres frases'),
      head: [T('Tipo'), T('Frase'), T('Glosa')],
      rows: [
        [T('afirmativa'), T('{nǐ} {xǐhuan} {píngguǒ}'), T('te gustan las manzanas')],
        [T('negativa'), T('{nǐ} {bù} {xǐhuan} {píngguǒ}'), T('no te gustan las manzanas')],
        [T('interrogativa'), T('{nǐ} {xǐhuan} {píngguǒ} {ma}'), T('¿te gustan las manzanas?')],
      ],
    },
    {
      caption: T('Tres partículas donde el español tiene una'),
      head: [T('Partícula'), T('Qué hace'), T('Dónde entra'), T('Ejemplo')],
      rows: [
        [
          T('{ma}'),
          T('pregunta de sí o no'),
          T('al final, tras el verbo'),
          T('{nǐ} {lái} {ma} ¿vienes?'),
        ],
        [
          T('{ne}'),
          T('pregunta sobre algo ya dicho'),
          T('al final, sobre lo citado'),
          T('{nǐ} {shì} {shénme} {ne} ¿y tú?'),
        ],
        [
          T('{ba}'),
          T('propone o confirma'),
          T('al final, sobre lo propuesto'),
          T('{wǒ} {men} {zǒu} {ba} ¿vamos?'),
        ],
      ],
    },
    {
      caption: T('Pronombres interrogativos, todos antes del verbo'),
      head: [T('Pronombre'), T('Pregunta'), T('Ejemplo'), T('Observación')],
      rows: [
        [T('{shéi}'), T('quién'), T('{nǐ} {shì} {shéi}'), T('forma hablada shuí')],
        [T('{shénme}'), T('qué'), T('{nǐ} {chī} {shénme}'), T('también pregunta "cuál"')],
        [T('{nǎlǐ}'), T('dónde'), T('{nǐ} {qù} {nǎlǐ}'), T('hablado nǎr')],
        [T('{zěnme}'), T('cómo'), T('{nǐ} {zěnme} {qù}'), T('escrito también zěnyàng')],
        [T('{duōshao}'), T('cuánto'), T('{duōshao} {qián}'), T('precio y no contables')],
        [T('{wèishénme}'), T('por qué'), T('{wèishénme} {bù} {qù}'), T('es wèi más shénme')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se pregunta "¿te gustan las manzanas?" en mandarín?'),
    options: [
      T('{nǐ xǐhuan píngguǒ ma}'),
      T('{xǐhuan píngguǒ nǐ ma}'),
      T('{ma nǐ xǐhuan píngguǒ}'),
      T('{nǐ ma xǐhuan píngguǒ}'),
    ],
    answer: 0,
    hint: T('El orden no cambia: la partícula entra al final y el sujeto se queda donde estaba.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete la pregunta "¿te gustan las manzanas?": 你喜歡蘋果____'),
      answer: '嗎',
    },
    {
      kind: 'match',
      prompt: T('Una el pronombre interrogativo con la pregunta'),
      pairs: [
        { a: T('{shéi}'), b: T('quién') },
        { a: T('{shénme}'), b: T('qué') },
        { a: T('{nǎlǐ}'), b: T('dónde') },
        { a: T('{zěnme}'), b: T('cómo') },
        { a: T('{duōshao}'), b: T('cuánto') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de estas frases es la pregunta correcta de "¿vas a dónde?"'),
      options: [
        T('{nǐ dào nǎlǐ ma}'),
        T('{nǐ wǎng nǎlǐ qù}'),
        T('{nǎlǐ nǐ qù}'),
        T('{qù nǐ nǎlǐ}'),
      ],
      answer: 1,
    },
  ],
};
