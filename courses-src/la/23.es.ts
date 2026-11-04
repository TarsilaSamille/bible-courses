import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Lectura: el Ave María y el Magnificat'),
  subtitle: T('{Ave Maria, grātiā plēna} — dos oraciones latinas para leer y descomponer'),
  section: T('Lectura'),
  body: C(`## Los textos

> **Ave Maria, grātiā plēna, Dominus tecum. Benedicta tu in mūlieribus.**

> **Magnificat anima mea Dominum. Et exsultāvit spīritus meus in Deō salūtārī meō.**

El primero es el comienzo de Lucas 1:28; el segundo, el cántico de Lucas 1:46-55. Ninguno nació como oración: son frases narrativas que la tradición convirtió en devoción. Eso los vuelve excelente material de lectura, porque la sintaxis es la de la narrativa bíblica, no la de la fórmula litúrgica.

## Ave Maria, grātiā plēna

| Forma | Análisis | Valor |
|---|---|---|
| {ave} | interjección, de {āvē | salud |
| {grātiā plēna} | ablativo de calidad, sin preposición | «llena de gracia» |
| {Dominus} | nominativo, sujeto de {adest} implícito | «el Señor» |
| {tecum} | pronombre + {cum} | «contigo» |
| {benedicta} | participio perfecto, ablativo femenino | «bendita» |
| {in mūlieribus} | {in} + ablativo | «entre las mujeres» |

Dos construcciones merecen atención. **El ablativo sin preposición**: {grātiā plēna} expresa la cualidad de la persona descrita, igual que {virō doctus} «un hombre sabio». Y {tecum} es {cum tecum}: la preposición va detrás del pronombre, como en {mecum}, {secum}, {nobiscum}, {vobiscum} — regla que vale para pronombres, nunca para sustantivos ({cum rēgē} «con el rey»).

## Magnificat anima mea Dominum

{Magnificat} es tercera persona del perfecto de {magnificō}: «el alma magnifica». {anima} es el sujeto, {mea} el posesivo, {Dominum} el acusativo objeto. Nada más: la frase tiene sujeto, verbo y objeto en el orden más simple posible del latín.

El versículo siguiente lo cambia todo: {Et exsultāvit spīritus meus in Deō salūtārī meō}. {Exsultāvit} es la misma forma de perfecto, pero **intransitiva**, con {in} + ablativo ({in Deō} «en Dios»). El verbo rige otro caso porque significa otra cosa: los transitivos rigen el acusativo; los intransitivos, el ablativo, el dativo o la preposición que indique el diccionario.

## Lectura comparada

Compara la frase de María en Lucas 1:28 con la del ángel en Lucas 1:19: {Erat mihi — et nunc erit}. La construcción es la misma, de modo que memorizar el Magnificat fija un patrón que aparece en toda la Vulgata.

## Lo esencial

Has leído cuatro palabras con cuatro gramáticas distintas: {grātiā} (ablativo de calidad), {tecum} ({cum} pospuesto), {Dominum} (acusativo) e {in Deō} (ablativo de dirección). Reconocer la función resuelve la traducción.`),
  vocab: [
    V('ave', 'ave', '¡salve! (interjección)'),
    V('grātiā', 'gratia', 'gracia (abl. de calidad)'),
    V('plēna', 'plenus', 'llena (abl. f. sg.)'),
    V('tecum', 'cum', 'contigo ({cum} + pronombre)'),
    V('benedicta', 'benedico', 'bendita (part. perf. abl. f.)'),
    V('mūlieribus', 'mulier', 'mujeres (dat./abl. pl.)'),
    V('magnificāt', 'magnifico', 'magnifica (3.ª sg. perf.)'),
    V('anima', 'anima', 'alma (nom. sg.)'),
    V('dominum', 'dominus', 'el Señor (ac. sg.)'),
    V('exsultāvit', 'exsulto', 'exultó (3.ª sg. perf., intr.)'),
    V('spīritus', 'spiritus', 'espíritu (nom. sg.)'),
    V('salūtāri', 'salutaris', 'salvador (abl. sg.)'),
    V('humilitātem', 'humilitas', 'humildad (ac. sg.)'),
    V('ancillae', 'ancilla', 'sierva (gen. sg.)'),
    V('recordātor', 'recordator', 'recordación (gen. sg.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {grātiā plēna}, ¿cuál es la función del ablativo?'),
    options: [
      T('Ablativo de calidad, sin preposición'),
      T('Ablativo de medio, con {ā}'),
      T('Ablativo de agente, con {ā} o {ab}'),
      T('Ablativo de lugar, con {in}'),
    ],
    answer: 0,
    hint: T('Regla §1: la calidad se expresa sin preposición.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa con {cum}: ___ vobiscum = «con vosotros»'),
      answer: 'nobiscum',
      hint: T('{nos} + {bis} + {cum}.'),
    },
    {
      kind: 'choose',
      prompt: T('En {exsultāvit spīritus meus in Deō}, ¿por qué {in Deō} es ablativo?'),
      options: [
        T('Porque {exsultāvit} es intransitivo: no hay objeto directo'),
        T('Porque {in} siempre rige el acusativo'),
        T('Porque {spīritus} es femenino'),
        T('Porque {Deus} es dativo de destino'),
      ],
      answer: 0,
      hint: T('Regla §2: el caso viene de la función, no del sustantivo.'),
    },
    {
      kind: 'fill',
      prompt: T('¿Cuál es el acusativo de {Dominus} en el Magnificat?'),
      answer: 'Dominum',
      hint: T('Es el objeto directo de {magnificat}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma con su función'),
      pairs: [
        { a: T('grātiā plēna'), b: T('ablativo de calidad') },
        { a: T('tecum'), b: T('{cum} pospuesto al pronombre') },
        { a: T('Dominum'), b: T('acusativo objeto') },
        { a: T('in mūlieribus'), b: T('{in} + ablativo de lugar') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('El ablativo de calidad no lleva preposición: {virō doctus} «un hombre sabio».'),
    },
    {
      n: '2',
      text: T(
        'El caso sigue a la función del verbo: los transitivos rigen el acusativo, los intransitivos el ablativo o el dativo.',
      ),
    },
    {
      n: '3',
      text: T(
        'Con pronombre oblicuo, {cum} va detrás y se fusiona: {mecum}, {secum}, {nobiscum}, {vobiscum}.',
      ),
    },
    {
      n: '4',
      text: T(
        'El perfecto es la forma más común de la Vulgata; en la narrativa, casi todo está en perfecto.',
      ),
    },
    {
      n: '5',
      text: T(
        '{in} + acusativo indica dirección, {in} + ablativo indica lugar estático: {in cāsam} «hacia la casa», {in cāsā} «en casa».',
      ),
    },
  ],
  notes: [
    {
      label: T('Una oración que no era oración'),
      text: T(
        'El {Ave María} es la bendición de Gabriel en Lucas 1:28, y el {Magnificat} es el cántico de María en 1:46. Ambos son frases narrativas en indicativo perfecto. Si los traduces como oración, errarás el caso de {Dominum}: el texto dice «el Señor está con ella» (sujeto {Dominus}, verbo {adest} implícito), no «Señor» como vocativo.',
      ),
    },
    {
      label: T('Los textos litúrgicos divergen'),
      text: T(
        'La liturgia latina recortó la segunda mitad del Magnificat y cambió {tecum} por {tēcum adiuvāre} «estar contigo». Las traducciones varían en «entre las mujeres» (genitivo partitivo en portugués antiguo) y en el verbo de {benedicta}. El texto bíblico es siempre la mejor referencia.',
      ),
    },
  ],
  examples: [
    { text: 'grātiā plēna', gloss: T('llena de gracia (abl. de calidad)') },
    { text: 'Dominus tecum', gloss: T('el Señor está contigo (sujeto + {cum} enclítico)') },
    { text: 'benedicta tu in mūlieribus', gloss: T('bendita entre las mujeres') },
    { text: 'magnificat anima mea Dominum', gloss: T('mi alma magnifica al Señor') },
    { text: 'respexit humilitātem ancillae suae', gloss: T('miró la humildad de su sierva') },
    { text: 'recordātor fideī suae', gloss: T('recordación de su fidelidad') },
    { text: 'mecum', gloss: T('conmigo ({cum} + {mē})') },
    { text: 'in cāsā', gloss: T('en casa (lugar)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Formas del Magnificat'),
      head: [T('Latín'), T('Función'), T('Portugués')],
      rows: [
        ['magnificāt', 'verbo, 3.ª sg. perf. de {magnificō}', 'magnifica'],
        ['anima mea', 'sujeito + possessivo', 'a minha alma'],
        ['Dominum', 'objeto direto', 'o Senhor'],
        ['exsultāvit', 'verbo intransitivo, perf.', 'exultou'],
        ['in Deō', '{in} + ablativo', 'em Deus'],
        ['salūtārī meō', 'ablativo adjective + possessivo', 'meu salvador'],
      ],
    },
    {
      caption: T('Tabla 2 — {cum} con pronombre y con sustantivo'),
      head: [T('Tipo'), T('Latín'), T('Portugués')],
      rows: [
        ['Pronome oblíquo', 'mecum', 'contigo'],
        ['Pronome oblíquo', 'secum', 'consigo'],
        ['Pronome oblíquo', 'nobiscum', 'conosco'],
        ['Pronome oblíquo', 'vobiscum', 'convosco'],
        ['Substantivo', '{cum rēgē}', 'com o rei'],
      ],
    },
  ],
};
