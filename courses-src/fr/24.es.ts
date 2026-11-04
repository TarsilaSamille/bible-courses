import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Verbos con preposición'),
  subtitle: T('{penser à, croire en, parler de, manquer à} — el verbo manda en la preposición'),
  section: T('Las preposiciones'),
  body: C(`## La preposición no se traduce sola

La regla más importante de este capítulo cabe en una frase: **la preposición viene del verbo y nunca se puede cambiar**. NoTraduce {penser à} como «pensar algo»; traduce el bloque entero. Y el bloque puede significar más que la suma de las partes.

El caso clásico es {penser}. Con {à} se piensa en una cosa o en una persona: {Je pense à la maison} «pienso en la casa», {Je pense à mon ami} «pienso en mi amigo». Con {de} se pide opinión: {Que penses-tu de ce film?} «¿qué te parece esta película?». El portugués usa los mismos dos verbos y el francés dos preposiciones distintas, y esa elección es el significado.

## El mapa de los verbos muy frecuentes

Estos verbos aparecen en casi todo texto francés y casi todos exigen preposición:

| Verbo | Preposición | Significado | Ejemplo |
|---|---|---|---|
| {penser} | {à} | pensar en | {penser à Dieu} |
| {penser} | {de} | opinar sobre | {penser de ce film} |
| {croire} | {en} | creer en (fe) | {croire en Dieu} |
| {croire} | {que} | creer que | {je crois qu’il dit vrai} |
| {parler} | {à} | hablar con | {parler à mon père} |
| {parler} | {de} | hablar sobre | {parler de Dieu} |
| {parler} | {pour} | defender la causa | {parler pour le pauvre} |
| {attendre} | {?} | esperar por | {attendre le train} |
| {manquer} | {à / de} | faltar a / carecer | {manque à Paul} |
| {dépendre} | {de} | depender de | {dépendre de toi} |
| {avoir besoin} | {de} | necesitar | {avoir besoin d’aide} |
| {jouir} | {de} | disfrutar | {jouir de la paix} |

Fíjate en {croire}: {croire en Dieu} es fe, {croire que} es opinión y {croire quelqu’un} (sin preposición) es fiarse de una persona. Tres construcciones distintas con un solo verbo.

## Verbos que rigen un complemento nominal

Muchos verbos que en portugués llevan objeto directo llevan en francés un complemento con {de} o {à}. Es la inversión más común del capítulo, y es sistemática:

- {jouir **de**} la paix — disfrutar de la paz (pt: gozar a paz)
- {profiter **de**} la nuit — aprovechar la noche
- {se rendre compte **de**} ce qui s’est passé — darse cuenta de lo que pasó
- {douter **de**} la promesse — dudar de la promesa
- {renoncer **à**} la vanité — renunciar a la vanidad

El patrón está claro: cuando el portugués simplemente «posee» el complemento, el francés inserta una preposición de posesión ({de}) o de finalidad ({à}). Eso es lo que se llama regencia, y hay que memorizarla verbo por verbo.

## {chez} y el lugar de una persona

{chez} es la preposición de las personas y sus espacios. {chez moi}, {chez Pierre}, {chez le médecin}, {chez nous}. Y por extensión el ambiente social: {chez les Juifs} «entre los judíos», {l’usage est courant chez les Français} «la costumbre es corriente entre los franceses».

Por eso, cuando el nombre es de persona, el {à} desaparece: {chez Pierre} y no {à Pierre} para «en casa de Pierre». En registro formal el {chez} también desaparece: {chez le docteur} → {Dr Leblanc}.

## Aplicación: el texto bíblico

El texto de Segond es un manual de verbos con preposición, porque el griego original ya lo era:

- {Je crois en mon Fils} (Jn 6:36) — {croire en}, la fe
- {Je parle à mes disciples} — {parler à}, el interlocutor
- {Il ne faut pas juger sur les apparences} — {juger sur}, el criterio
- {Il alla trouver Philippe} — {aller} rige a {trouver} sin preposición: {aller **trouver**}, y no {aller à trouver}
- {Je ne suis pas venu pour être servi} — {venir pour}, finalidad

Y hay un caso raro que conviene guardar: {Il suffit de} «basta». En latín, {sufficit} regía el infinitivo, y el francés heredó la construcción sin cambios.`),
  vocab: [
    V('penser à', 'penser', 'pensar en (una idea, una persona)'),
    V('penser de', 'penser', 'opinar sobre (petición de opinión)'),
    V('croire en', 'croire', 'creer en (fe, confianza)'),
    V('croire que', 'croire', 'creer que (opinión)'),
    V('croire quelqu’un', 'croire', 'fiarse de alguien (sin preposición)'),
    V('parler à', 'parler', 'hablar con (interlocutor)'),
    V('parler de', 'parler', 'hablar sobre (tema)'),
    V('parler pour', 'parler', 'defender la causa de'),
    V('jouir de', 'jouir', 'disfrutar de'),
    V('douter de', 'douter', 'dudar de'),
    V('renoncer à', 'renoncer', 'renunciar a'),
    V('se rendre compte de', 'rendre', 'darse cuenta de'),
    V('dépendre de', 'dépendre', 'depender de'),
    V('avoir besoin de', 'avoir', 'necesitar'),
    V('manquer à', 'manquer', 'faltar a (una persona)'),
    V('manquer de', 'manquer', 'carecer de (una cosa)'),
    V('il suffit de', 'suffire', 'basta (herencia del latín)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «{Que penses-tu de ce film?}», ¿por qué el verbo {penser} lleva {de} y no {à}?'),
    options: [
      T(
        'Porque {penser de} es la construcción de opinión: se pide lo que se piensa, no aquello en lo que se piensa',
      ),
      T('Porque {de} es siempre la preposición de opinión en francés'),
      T('Porque la pregunta con {?} lleva {de} y la afirmación lleva {à}'),
      T('Porque {penser de} es un error del habla que el estándar corrige'),
    ],
    answer: 0,
    hint: T('Regla §1: {penser à} = pensar **en** algo; {penser de} = **opinar sobre** algo.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «Je ___ mon Fils» (Jn 6:36 — creer en alguien con fe)'),
      answer: 'crois en',
      hint: T('Es el verbo {croire} con {en}; el mismo verbo con {que} significa otra cosa.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con su preposición obligatoria'),
      pairs: [
        { a: T('jouir'), b: T('{jouir de}') },
        { a: T('douter'), b: T('{douter de}') },
        { a: T('dépendre'), b: T('{dépendre de}') },
        { a: T('renoncer'), b: T('{renoncer à}') },
        { a: T('profiter'), b: T('{profiter de}') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase es correcta según la regencia del verbo?'),
      options: [
        T('{Ella ha disfrutado de la noche}'),
        T('{Ella ha disfrutado la noche}'),
        T('{Ella ha disfrutado a la noche}'),
        T('{Ella ha disfrutado para la noche}'),
      ],
      answer: 0,
      hint: T(
        'Regla §3: {profiter} rige {de}. {Jouir la paix} y {profiter la nuit} son errores de regencia.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La preposición pertenece al verbo y no se puede cambiar: {penser **à**} = pensar en, {penser **de**} = opinar sobre, {croire **en**} = creer en, {croire **que**} = creer que.',
      ),
    },
    {
      n: '2',
      text: T(
        'Muchos verbos que llevan objeto directo en portugués llevan complemento con {de} o {à} en francés: {jouir de}, {profiter de}, {douter de}, {renoncer à}, {jouer à}. Eso es la regencia y hay que memorizarla verbo por verbo.',
      ),
    },
    {
      n: '3',
      text: T(
        'Cuando el nombre es de una persona, el lugar usa {chez} y no {à}: {chez Pierre}, {chez le médecin}, {chez nous}. Por extensión {chez} indica ambiente social: {chez les Juifs}, {chez les Français}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Algunos verbos no llevan preposición y la construcción viene entera: {aller **trouver** Philippe}, {venir **voir**}, {entendre **parler**}. No escribas {aller à trouver}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Vigila los verbos con dos sentidos: {manquer à} es faltar a alguien, {manquer de} es carecer de algo. {La vie manque de sens} «la vida carece de sentido» lleva {de}, no {à}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué el latín creó la regencia'),
      text: T(
        'La mitad de las regencias del francés viene de construcciones latinas en las que un verbo regía un caso, y el caso sobrevivió como preposición. {douter} rige {de}, como el latín {dubitare} regía el ablativo: *dubitare + abl*. {jouir de} viene de *frui + abl*. El portugués, que también viene del latín, perdió esas marcas: hoy dice {duvidar de} y {gozar de} por casualidad, y el {de} casi desapareció en {gozar a}. El francés conservó el caso muerto dentro de la preposición viva, y por eso la regencia parece arbitraria: es un fósil sintáctico.',
      ),
    },
    {
      label: T('La lectura bíblica enseña la regencia'),
      text: T(
        'El Nuevo Testamento francés es el mejor manual de verbos con preposición que existe, porque se tradujo del griego y cada verbo conserva la preposición que el griego traía. {Je crois en mon Fils} es {πιστεύω εἰς}, la preposición griega {εἰς} (hacia dentro) traducida por {en}, porque {croire en} es entrar en relación de fe. {Je parle à mes disciples} es {λαλῶ πρὸς}, y {πρὸς} significa «hacia». Si aprendes la regencia francesa por el Nuevo Testamento, estás aprendiendo al mismo tiempo la regencia griega, y no es casualidad: es la misma raíz.',
      ),
    },
  ],
  examples: [
    { text: 'Je pense à mon ami.', gloss: T('pienso en mi amigo ({penser à})') },
    { text: 'Que penses-tu de ce film ?', gloss: T('¿qué te parece esta película? (opinión)') },
    { text: 'Je crois en Dieu.', gloss: T('creo en Dios (fe)') },
    { text: 'Je crois qu’il dit vrai.', gloss: T('creo que dice la verdad (opinión)') },
    {
      text: 'Parlez pour qu’ils comprennent.',
      gloss: T('hablad para que entiendan ({parler pour} más finalidad)'),
    },
    {
      text: 'Il alla trouver Philippe.',
      gloss: T('fue a buscar a Felipe ({aller} sin preposición)'),
    },
    { text: 'Elle a profité de la nuit.', gloss: T('aprovechó la noche ({profiter de})') },
    {
      text: 'Se rendre compte de la vérité.',
      gloss: T('darse cuenta de la verdad (regencia de {de})'),
    },
    { text: 'La vie manque de sens.', gloss: T('la vida carece de sentido ({manquer de})') },
    {
      text: 'L’usage est courant chez les Français.',
      gloss: T('la costumbre es corriente entre los franceses ({chez} = ambiente)'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — verbos con preposición alternativa'),
      head: [T('Verbo'), T('Preposición A'), T('Preposición B'), T('Diferencia de sentido')],
      rows: [
        [
          'penser',
          'à — pensar em',
          'de — opinar sobre',
          'objeto de pensamento / pedido de opinião',
        ],
        ['croire', 'en — crer em', 'que — crer que', 'fé / opinião'],
        ['parler', 'à — falar com', 'de — falar sobre', 'interlocutor / tema'],
        ['manquer', 'à — faltar a', 'de — carecer de', 'pessoa / coisa'],
        ['venir', 'à — vir a', 'de — vir de', 'destino / origem'],
      ],
    },
    {
      caption: T('Tabla 2 — regencia: verbo y complemento'),
      head: [T('Verbo'), T('Portugués'), T('Francés'), T('Ejemplo')],
      rows: [
        ['jouir', 'gozar a', 'jouir de', 'jouir de la paix'],
        ['profiter', 'aproveitar a', 'profiter de', 'profiter de la nuit'],
        ['douter', 'duvidar de', 'douter de', 'douter de la promesse'],
        ['renoncer', 'renunciar a', 'renoncer à', 'renoncer au monde'],
        [
          'se rendre compte',
          'dar-se conta de',
          'se rendre compte de',
          'se rendre compte de la vérité',
        ],
        ['dépendre', 'depender de', 'dépendre de', 'dépendre de Dieu'],
        ['jouer', 'jogar', 'jouer à', 'jouer aux cartes'],
        ['manquer', 'faltar', 'manquer à / de', 'manque à Paul / manque de sens'],
      ],
    },
  ],
};
