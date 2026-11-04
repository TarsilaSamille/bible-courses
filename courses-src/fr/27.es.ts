import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('Los pronombres posesivos'),
  subtitle: T('{mon, ma, mes} y los tónicos {le mien, la sienne, les leurs}'),
  section: T('Los pronombres'),
  body: C(`## Dos sistemas, un mismo origen

El posesivo francés viene en dos familias, y reparten un solo par de raíces: {mon, ma, mes} para el poseedor, {le mien, la mienne, les miens} para la cosa que es suya.

La forma **átona** va antes del sustantivo y nunca aparece sola: {mon père} «mi padre», {ta mère} «tu madre», {mes enfants} «mis hijos», {notre Père} «Padre nuestro», {votre maison} «vuestra casa», {leur pays} «su país».

La forma **tónica** lleva artículo definido y funciona como sustantivo, sola o tras preposición: {le mien} «el mío», {la tienne} «el tuyo», {les leurs} «los suyos». Es la única que sobrevive sin nombre: {C'est mon livre, pas le tien} «Este es mi libro, no el tuyo».

## Átonos: la concordancia es con la cosa

Lo que engaña a quien habla portugués es que {mon}, {ta}, {mes} concuerdan con el **objeto poseído**, no con el poseedor.

- {mon} ante sustantivo masculino: {mon livre}, {mon père}, {mon Dieu}.
- {ma} ante sustantivo femenino: {ma maison}, {ma sœur}, {ma vie}.
- {mes} para cualquier plural: {mes livres}, {mes sœurs}, {mes enfants}.

Y está la **eufonía**: {mon} se convierte en {ma} ante {ma} — {ma maison} «mi casa» — y ante {mon} — {mon père} «mi padre».

## La eufonía: {mon} y {cet}

{mon} se traga la -n final ante vocal o h muda, y pasa a {ma}, {mo}, {mes}:

- {mon âme} «mi alma» — sustantivo femenino, pero manda la eufonía.
- {mon histoire} «mi historia» — igual, h muda.
- {mon école} «mi escuela».
- {mon homme} «mi marido» — h muda; compara {mon héros} «mi héroe», con h aspirada, que **no** cambia.

La misma regla rige para {ton}, {son}, {notre}, {votre}: {ton âme}, {son école}, {votre histoire}. La -s final de {mes}, {tes}, {ses} no cambia nunca: {mes amis}, {tes idées}, {ses frères}.

## Tónicos: con artículo, siempre

El tónico repite el artículo del sustantivo que sustituye:

| | Singular | Plural |
|---|---|---|
| Masculino | {le mien}, {le tien}, {le sien} | {les miens}, {les tiens}, {les siens} |
| Femenino | {la mienne}, {la tienne}, {la sienne} | {les miennes}, {les tiennes}, {les siennes} |

Más {le nôtre}, {la nôtre}, {les nôtres}, {le vôtre}, {le leur}, {les leurs}. Funcionan como sustantivos: {Je préfère le sien} «Prefiero el suyo». Tras preposición aparece el tónico, nunca el átono: {le livre de mon frère} — pero {le sien}, y no ~~{le de lui}~~, cuando el poseedor es el pronombre.

## El punto ciego: {son, sa, ses} y {leur}

{sur}, {sa}, {ses} pueden significar «suyo» o «suya». Decide el contexto: ¿{sa mère} «su madre» de él o de ella? El verbo cercano suele desempatar — {il parle à sa mère} «habla con su madre». En plural, {ses} es ambiguo del mismo modo.

{leur} y {leurs} son casi siempre «suyo», porque el posesivo plural solo existe en esa forma: {leurs enfants} «sus hijos». Pero {leur} sin -s, ante sustantivo, es objeto indirecto: {je leur parle} «les hablo».

## Lectura — Louis Segond

El texto bíblico francés usa la forma átona todo el tiempo, porque casi nunca necesita decir «de quién». **{Notre Père, qui es aux cieux}** «Padre nuestro, que estás en los cielos»: {notre} en segunda persona, con la misma flexión que {ton}: {notre Père} y {ton Père} pueden convivir en la misma frase, uno en el trato y otro en la narración.

**{Ton nom soit sanctifié}** y, justo después, **{Ton règne vienne}** «venga tu reino»: se repite el sustantivo, se repite el posesivo, y ese es el ritmo del Padrenuestro: la oración avanza por parejas, sustantivo y posesivo.

El tónico aparece donde la traducción francesa necesita marcar contraste: **{l'un l'autre}** «el uno al otro» viene del latín, y **{ceux de Jean}** «los de Juan» usa el tónico contracto: {celui de}, {ceux de}, {celles de}, como en **{les enfants de Dieu}** «los hijos de Dios».

El caso más bonito es **{les frères de Jésus}** (Mc 3:5): {de} liga el sustantivo a un nombre propio, y {son} **desaparece** porque el posesivo absoluto sería poco claro.

## Lo esencial

{mon, ta, mes} concuerdan con la cosa y viven antes del sustantivo; {le mien, la tienne, les leurs} llevan artículo y viven como sustantivo. La eufonía convierte {mon} en {ma}, {mo}, {mes} ante vocal o h muda. Y {son} es el único ambiguo del sistema.`),
  vocab: [
    V('mon', 'mon', 'mi (masculino singular)'),
    V('ma', 'ma', 'mi (femenino singular)'),
    V('mes', 'mes', 'mi (plural, cualquier género)'),
    V('ton', 'ton', 'tu (masculino singular)'),
    V('son', 'son', 'su: de él o de ella (ambiguo)'),
    V('notre', 'notre', 'nuestro ({notre Père})'),
    V('votre', 'votre', 'vuestro ({votre maison})'),
    V('leur', 'leur', 'suyo (ante nombre) / les (indirecto)'),
    V('le mien', 'mien', 'el mío (tónico masculino)'),
    V('la sienne', 'sien', 'la suya (tónico femenino)'),
    V('les leurs', 'leur', 'los suyos (tónico plural)'),
    V('le nôtre', 'nôtre', 'el nuestro (tónico)'),
    V('mon âme', 'âme', 'mi alma (eufonía: {ma} imposible)'),
    V('mon héros', 'héros', 'mi héroe (h aspirada: sin eufonía)'),
    V('mon homme', 'homme', 'mi marido (h muda: {mon} intacto)'),
    V('leurs enfants', 'enfant', 'sus hijos ({leurs} con -s)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «Il parle à ___ mère», ¿de quién es la madre?'),
    options: [
      T(
        'Suyo, casi siempre: el sujeto masculino {il} es el poseedor más probable, y la eufonía solo permite {sa}',
      ),
      T('No se puede saber: {sa} es ambiguo y el contexto dado no lo resuelve'),
      T('Suyo: el verbo {parle} es femenino y determina el poseedor'),
      T('De los dos: {sa} nunca se refiere a {il}'),
    ],
    answer: 0,
    hint: T(
      'La ambigüedad existe en teoría; en la práctica el sujeto {il} adyacente es el desempate más fuerte.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Eufonía: «___ école» (mi escuela).'),
      answer: 'mon',
      hint: T('El sustantivo es femenino, pero {ma} + {école} es imposible, así que vuelve la -n.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase usa correctamente el posesivo tónico?'),
      options: [
        T('Este libro es mío, el ___ está en tu habitación.'),
        T('Este libro es à mon, el ___ está en tu habitación.'),
        T('Este libro es mío, el mon está en tu habitación.'),
        T('Este libro es mío, el miens está en tu habitación.'),
      ],
      answer: 0,
      hint: T('El tónico necesita artículo y concuerda: {le mien}, {la mienne}, {les miens}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma con su función'),
      pairs: [
        { a: T('{ma sœur}'), b: T('átono femenino: concuerda con la cosa') },
        { a: T('{mon}'), b: T('forma de eufonía, sin -n') },
        { a: T('{la sienne}'), b: T('tónico femenino: artículo + concordancia') },
        { a: T('{les leurs}'), b: T('tónico plural: «los suyos»') },
        { a: T('{je leur parle}'), b: T('{leur} sin -s = objeto indirecto') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El átono concuerda con la cosa poseída, nunca con el poseedor: {son livre} aunque la dueña sea mujer.',
      ),
    },
    {
      n: '2',
      text: T(
        'La eufonía quita la -n de {mon, ton, son} ante vocal o h muda: {mon âme}, {ton école}, {son histoire}. La -s de {mes, tes, ses} nunca cae.',
      ),
    },
    {
      n: '3',
      text: T(
        'La h aspirada bloquea la eufonía: {mon héros}, {la haga}, {le hibou}: con -n y -s intactas.',
      ),
    },
    {
      n: '4',
      text: T(
        'El tónico siempre lleva artículo y concuerda en género y número: {le mien}, {la mienne}, {les miens}, {les miennes}. Sin artículo está mal.',
      ),
    },
    {
      n: '5',
      text: T(
        '{leur} sin -s ante sustantivo es objeto indirecto; {leurs} con -s es posesivo. La diferencia es solo ortográfica, pero cambia el sentido.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué {leur} no se flexiona'),
      text: T(
        'Todos los posesivos alternativos van envueltos en artículo y por eso concuerdan: {le mien}, {la mienne}. Pero {leur} empezó como forma de **objeto indirecto** y nunca llegó a posesivo por flexión: el posesivo es {leurs}, tomado del plural {le leur}. Por eso {leur} es una de las pocas palabras francesas que hace dos funciones por una letra, y por eso la ortografía francesa, que es fonética, se vuelve engañosa justo aquí.',
      ),
    },
    {
      label: T('La eufonía contra la gramática'),
      text: T(
        'En {mon âme} la gramática pediría {ma}: {âme} es femenino. Pero {ma âme} es impronunciable — dos vocales nasales seguidas — y gana la lengua. Lo mismo pasó con {bel} «hermoso», que perdió la -e final por culpa de {belle}: un sustantivo masculino flexiona como femenino, y nadie llama a eso un error. La eufonía es la capa más antigua del francés, y es la que conserva restos del latín popular.',
      ),
    },
  ],
  examples: [
    { text: 'mon père', gloss: T('mi padre (masculino, sin eufonía)') },
    { text: 'ma maison', gloss: T('mi casa (femenino, {ma} normal)') },
    { text: 'mon âme', gloss: T('mi alma (la eufonía vence a la concordancia)') },
    { text: 'mon héros', gloss: T('mi héroe (h aspirada, sin eufonía)') },
    {
      text: 'C’est mon livre, pas le tien',
      gloss: T('este es mi libro, no el tuyo ({le} + {tien})'),
    },
    { text: 'je préfère le sien', gloss: T('prefiero el suyo (tónico masculino)') },
    { text: 'je leur parle', gloss: T('les hablo ({leur} = objeto indirecto)') },
    { text: 'leurs enfants', gloss: T('sus hijos (posesivo plural)') },
    { text: 'Notre Père, qui es aux cieux', gloss: T('Padre nuestro, que estás en los cielos') },
    { text: 'les enfants de Dieu', gloss: T('los hijos de Dios ({de} + nombre propio)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Posesivos átonos (1.ª y 2.ª persona)'),
      head: [T('Persona'), T('Singular'), T('Plural')],
      rows: [
        ['1.ª', T('{mon} / {ma}'), T('{mes}')],
        ['2.ª {tu}', T('{ton} / {ta}'), T('{tes}')],
        ['2.ª {vous}', T('{votre}'), T('{vos}')],
        ['3.ª', T('{son} / {sa}'), T('{ses}')],
      ],
    },
    {
      caption: T('Tabla 2 — Posesivos tónicos'),
      head: [T('Género'), T('Singular'), T('Plural')],
      rows: [
        [
          T('Masculino'),
          T('{le mien}, {le tien}, {le sien}, {le nôtre}, {le vôtre}'),
          T('{les miens}, {les tiens}, {les siens}, {les nôtres}, {les vôtres}'),
        ],
        [
          T('Femenino'),
          T('{la mienne}, {la tienne}, {la sienne}, {la nôtre}'),
          T('{les miennes}, {les tiennes}, {les siennes}, {les nôtres}'),
        ],
      ],
    },
  ],
};
