import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('Los pronombres relativos'),
  subtitle: T('{qui, que, dont, où} y los relativos formales {lequel, à qui}'),
  section: T('Los pronombres'),
  body: C(`## Unir dos oraciones

Un pronombre relativo hace dos cosas a la vez: convierte la segunda oración en subordinada y representa al sustantivo que falta en ella. **{L'homme qui parle}** «el hombre que habla»: {qui} es sujeto de {parle}. Cambiar por {que} lo altera todo: **{L'homme que je vois}** «el hombre que veo»: ahora {que} es objeto.

Hay cuatro relativos simples, y cada uno resuelve una función:

- **{qui}** — sujeto: {les élèves qui prient} «los alumnos que oran».
- **{que}** — objeto directo: {la parole que j'ai entendue} «la palabra que oí».
- **{dont}** — «de quién / de qué»: {l'homme dont je parle} «el hombre de quien hablo».
- **{où}** — lugar o tiempo: {la ville où je vis} «la ciudad donde vivo».

## La regla del antecedente humano

Lo que más sorprende es el uso de {qui} tras preposición cuando el antecedente es persona: **{la femme à qui je parle}** «la mujer a quien hablo». Tras preposición, {que} queda **prohibido** para personas; y para las cosas entra {lequel}: **{le livre avec lequel j'apprends}** «el libro con el cual aprendo».

La regla práctica: **tras preposición + persona = {qui}; tras preposición + cosa = {lequel}**.

## {dont} no es solo «de quién»

{dont} funciona con cualquier **sustantivo posesivo** heredado del latín, no solo con personas:

- {l'homme dont je parle} «el hombre de quien hablo».
- {le livre dont je parle} «el libro de que hablo», cambiando {de que} por {dont}.
- {Dieu, dont l'amour est éternel} «Dios, cuyo amor es eterno»: aquí {dont} traduce **posesión**, como el latín {cuius}.
- {le jour dont il est venu} «el día en que vino», sentido temporal.

Y está el par con {de qui} y {à qui}, que es {dont} del revés: {la femme dont je parle} «de quien hablo» y {la femme à qui je parle} «a quien hablo»: la preposición sale del relativo y se pone delante.

## {lequel} y su concordancia

Tras preposición, {lequel} concuerda en género y número: {lequel}, {laquelle}, {lesquels}, {lesquelles}.

- {le livre lequel j'ai lu} «el libro que leí».
- {les livres lesquels je lis} «los libros que leo».
- {les gens avec lesquels je travaille} «las personas con quienes trabajo».

Y el uso popular de {lequel} como sustantivo, el «el cual»: **{la ville de laquelle il vient}** «la ciudad de donde viene».

## {ce qui} y {ce que}

Cuando no hay antecedente, el relativo se lleva {ce}: **{ce qui}** es sujeto, **{ce que}** es objeto.

- {Fais ce qui est juste} «Haz lo justo»: {ce qui} es sujeto de {est}.
- {Dis ce que tu penses} «Di lo que piensas»: {ce que} es objeto de {dis}.
- {Je sais ce qui manque} «Sé lo que falta».

Y están las combinaciones con preposición, que conservan el referente: **{à ce que, de ce que, pour ce que}** — {C'est à ce que je travaille} «Es para eso que trabajo».

## Lectura — Louis Segond

La Biblia francesa usa el relativo todo el tiempo, y su patrón más productivo es el par **{celui qui}** más verbo, que traduce el griego y el hebreo de «el que»:

- **{Celui qui écoute la parole de Dieu et qui la met en pratique}** (Lc 6:47) «el que oye la palabra de Dios y la pone en práctica»: {qui} dos veces, con el sujeto repetido.
- **{Dieu, dont l'amour est éternel}** (1Jn 4:8): {dont} en sentido de posesión.
- **{Les langues qui sont enflammées}** (Mc 16:8): {qui} con antecedente plural.

Y el caso más fino del capítulo: en la antítesis, la Biblia francesa prefiere el **sustituto demostrativo** al pronombre: **{Moi, moi, je ne suis pas le juste}** (Lc 18:11) «Yo, yo no soy el justo», donde la antítesis pega mejor en un sustantivo que en {qui}. Compáralo con el latín {ego iustus} y el griego {ego eimi dikaios}: el traductor francés cambió pronombre por sustantivo para que la oración respirara.

Leer en voz alta revela una cosa más: el relativo francés **no tiene género** en {qui} y {que}, pero sí en {lequel}. Así que {lequel} aparece sobre todo en las traducciones donde el griego marcaba {ho}, {hē}, {hoi}.

## Lo esencial

{qui} es sujeto, {que} es objeto, {dont} es «de quién» o posesión, {où} es lugar y tiempo. Tras preposición, {qui} para persona y {lequel} para cosa, concertando en género y número. Sin antecedente, {ce qui} y {ce que}: y eso es lo único que necesitas llevarte de este capítulo para leer la Biblia francesa.`),
  vocab: [
    V('qui', 'qui', 'que (sujeto) / a quien (tras preposición)'),
    V('que', 'que', 'que (objeto directo); prohibido tras preposición'),
    V('dont', 'dont', 'de quién / de qué; también posesión'),
    V('où', 'où', 'donde; también «el día en que»'),
    V('lequel', 'lequel', 'el cual (tras preposición + cosa)'),
    V('laquelle', 'lequel', 'la cual (femenino; {de laquelle} = de donde)'),
    V('lesquels', 'lequel', 'los cuales (plural masculino)'),
    V('à qui', 'qui', 'a quien (indirecto: {la femme à qui})'),
    V('ce qui', 'qui', 'lo que (sujeto, sin antecedente)'),
    V('ce que', 'que', 'lo que (objeto, sin antecedente)'),
    V('à ce que', 'ce que', 'para que; es para eso'),
    V('l’homme qui parle', 'parler', 'el hombre que habla ({qui} = sujeto)'),
    V('la parole que j’ai entendue', 'entendre', 'la palabra que oí ({que} = objeto)'),
    V('Dieu, dont l’amour', 'Dieu', 'Dios, cuyo amor ({dont} = posesión)'),
    V('celui qui écoute', 'celui', 'el que oye (Lc 6:47)'),
    V('la ville de laquelle il vient', 'venir', 'la ciudad de donde viene'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T("En «{C'est à ce que je travaille}», ¿qué hace {ce que} en la oración?"),
    options: [
      T(
        'Sustituye el objeto directo de {travaille}, y {à ce que} aporta la preposición que {dont} no daría',
      ),
      T('Es sujeto de {travaille}, como en {ce qui est juste}'),
      T('Marca lugar: {ce que} equivale a {où}'),
      T('Es un pronombre relativo sin antecedente y sin función definida'),
    ],
    answer: 0,
    hint: T(
      'Regla §5: sin antecedente, {ce qui} es sujeto y {ce que} es objeto; la preposición se va al par, no dentro.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('«Le livre dont je parle» es igual a «le livre ___ je parle».'),
      answer: 'de',
      hint: T('{dont} = {de} + relativo. Tras la preposición, {que} no puede aparecer.'),
    },
    {
      kind: 'choose',
      prompt: T('En «{Les gens avec lesquels je travaille}», el relativo es {lequel} porque…'),
      options: [
        T('viene tras preposición y el antecedente es plural ({lesquels})'),
        T('porque el verbo {travailler} es irregular en presente'),
        T('porque el antecedente es humano y debería ser {qui}'),
        T('porque {avec} es una preposición compuesta'),
      ],
      answer: 0,
      hint: T(
        'Regla §2: preposición + persona = {qui}; preposición + cosa = {lequel}, con concordancia.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la función con el relativo correspondiente'),
      pairs: [
        { a: T('sujeto de la subordinada'), b: T('{qui}') },
        { a: T('objeto directo de la subordinada'), b: T('{que}') },
        { a: T('«de quién» o posesión'), b: T('{dont}') },
        { a: T('lugar o tiempo'), b: T('{où}') },
        { a: T('sujeto sin antecedente'), b: T('{ce qui}') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        "{qui} es sujeto y {que} es objeto: {l'homme qui parle} frente a {l'homme que je vois}. Cambiarlos destruye la oración.",
      ),
    },
    {
      n: '2',
      text: T(
        'Tras preposición, {que} está prohibido para personas: usa {qui}. Para cosas, usa {lequel}, que concuerda en género y número ({lequel}, {laquelle}, {lesquels}, {lesquelles}).',
      ),
    },
    {
      n: '3',
      text: T(
        "{dont} equivale a {de} + relativo y funciona con personas y con cosas; con posesivos traduce posesión: {Dieu, dont l'amour est éternel}.",
      ),
    },
    {
      n: '4',
      text: T(
        '{où} marca lugar sin preposición y tiempo cuando el antecedente es una fecha o un sustantivo de periodo: {la ville où je vis}, {le jour où il est venu}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Sin antecedente, el relativo recibe {ce}: {ce qui} es sujeto, {ce que} es objeto. Con preposición, el par es {à ce que}, {de ce que}, {pour ce que}, y la preposición nunca entra dentro del {que}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué {que} también es conjunción'),
      text: T(
        "El mismo {que} hace tres trabajos: pronombre relativo ({l'homme que je vois}), conjunción ({Je sais qu'il vient}) y comparativo ({plus grand que}). Los separa la función, y la función la da lo que va **antes**. Tras sustantivo, {que} es relativo; tras verbo, es conjunción; tras sustantivo precedido de {plus}, es comparativo. En **{Dis ce que tu penses}** hay una capa más: {ce} es el antecedente abstracto y {que} es el relativo, dos pronombres fundidos en una locución.",
      ),
    },
    {
      label: T('El relativo es el corazón de la subordinación'),
      text: T(
        'Una oración relativa siempre tiene dos mitades: el **antecedente**, que se queda en la principal, y el **relativo**, que ocupa el lugar del sustantivo que falta en la subordinada. Por eso **{je vois la femme qui parle}** y **{la femme que je vois est fatiguée}** tienen la misma pieza cambiada de lado, y el referente cambia con la posición. Griego y latín eran más rígidos; el francés da libertad al antecedente, con tal que el relativo siga bien formado. En la lectura bíblica esto aparece constantemente: **{le livre dont je parle}**, **{celui qui croit}**, **{ceux qui écoutent}**: tres funciones, una palabra repetida.',
      ),
    },
  ],
  examples: [
    { text: 'l’homme qui parle', gloss: T('el hombre que habla ({qui} = sujeto)') },
    { text: 'la parole que j’ai entendue', gloss: T('la palabra que oí ({que} = objeto)') },
    { text: 'l’homme dont je parle', gloss: T('el hombre de quien hablo ({dont} = {de qui})') },
    { text: 'Dieu, dont l’amour est éternel', gloss: T('Dios, cuyo amor es eterno (1Jn 4:8)') },
    { text: 'le jour où il est venu', gloss: T('el día en que vino (tiempo)') },
    { text: 'la femme à qui je parle', gloss: T('la mujer a quien hablo (preposición + persona)') },
    {
      text: 'le livre avec lequel j’apprends',
      gloss: T('el libro con el cual aprendo (preposición + cosa)'),
    },
    { text: 'fais ce qui est juste', gloss: T('haz lo justo ({ce qui} = sujeto)') },
    { text: 'dis ce que tu penses', gloss: T('di lo que piensas ({ce que} = objeto)') },
    {
      text: 'celui qui écoute la parole de Dieu',
      gloss: T('el que oye la palabra de Dios (Lc 6:47)'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Los cuatro relativos simples'),
      head: [T('Relativo'), T('Función'), T('Ejemplo')],
      rows: [
        ['{qui}', T('sujeto'), "{l'homme qui parle}"],
        ['{que}', T('objeto directo'), "{la parole que j'ai entendue}"],
        ['{dont}', T('{de} + relativo; también posesión'), "{Dieu, dont l'amour est éternel}"],
        ['{où}', T('lugar o tiempo'), '{le jour où il est venu}'],
      ],
    },
    {
      caption: T('Tabla 2 — Tras preposición: {qui} o {lequel}'),
      head: [T('Antecedente'), T('Persona'), T('Cosa')],
      rows: [
        [T('{à}'), T('{à qui} (a quien)'), T('{al cual} (al cual)')],
        [T('{de}'), T('{de quién} (de quien)'), T('{del cual} (del cual)')],
        [T('{con} / {para} / otros'), T('{con quien}'), T('{con el cual}, {para el cual}')],
      ],
    },
  ],
};
