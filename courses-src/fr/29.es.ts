import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Los pronombres reflexivos'),
  subtitle: T('{me, te, se, nous, vous, se} y el verbo que vuelve a su sujeto'),
  section: T('Los pronombres'),
  body: C(`## Seis pronombres para una persona

El pronombre reflexivo francés es {me}, {te}, {se}, {nous}, {vous}, {se}: la -e final marca la tercera persona. Apunta al sujeto de la propia oración:

- {Je me lave} «me lavo»: {je} y {me} son la misma persona.
- {Tu te lèves} «te levantas».
- {Il s'habille} «se viste».
- {Nous nous retrouvons} «nos encontramos».
- {Vous vous asseyez} «os sentáis».

El pronombre va **antes** del verbo conjugado, y el verbo se queda sin objeto: {Je lave moi} no existe.

## Reflexivo, recíproco, pronominal: tres lecturas

El {se} francés no distingue esos casos por la forma, solo por el sentido:

- **Reflexivo**: {Elle s'habille} «se viste»: una persona, ella y ella.
- **Recíproco**: {Ils s'aiment} «se quieren»: cada uno ama al otro; el plural solo tiene sentido recíproco, porque {s'aimer} no tiene otro objeto posible.
- **Pronominal**: {Je m'en souviens} «me acuerdo»: el pronombre sustituye un objeto que no es el sujeto; el recuerdo es de otra cosa.

La ambigüedad es real: {Nous nous lavons} «nos lavamos» puede ser reflexivo (cada uno se lava) o recíproco (uno lava al otro). Solo el contexto decide.

## {s'en} y la partícula {en}

Muchos verbos pronominales absorben {en} («de»): {s'en aller} «irse», {s'en souvenir} «acordarse», {s'en tenir}. La {en} queda pegada: {elle s'en va}, {il s'en souviens}.

En el imperativo desaparece la -s de {se} y solo queda el guion: **{Va-t'en !}** «¡vete!», **{Va-t'en, dis-lui}**. Con {y} lo mismo: **{Vas-y}** «ve allí».

## El participio concuerda con {être}

Cuando el verbo pronominal se conjuga con {avoir}, el participio se queda solo: **{elle s'est sentie}** «se sintió». Y aquí está la regla, que se parte por el auxiliar:

- {elle s'est levée} «se levantó» — {se lever}, movimiento, {être}, **concuerda**: aparece la -e.
- {elle s'est blessée} «se hirió» — {se blesser}, {être}, concuerda.
- {elle s'est sentie} «se sintió» — {se sentir}, {être}, concuerda.
- {elle s'est lavé les mains} «se lavó las manos» — {se} + objeto directo, **sin** concordancia, porque el objeto va detrás.

La regla es corta: {se} más verbo con objeto directo conserva el objeto y prohíbe la concordancia; {se} más verbo intransitivo con {être} concuerda con el sujeto.

## Verbos que cambian de sentido con {se}

{se} no es adorno. Cambia el verbo:

- {dormir} «dormir» → {s'endormir} «dormirse».
- {passer} «pasar» → {se passer} «ocurrirse» ({Que se passe-t-il ?} «¿qué ocurre?»).
- {revenir} «volver» → {s'en revenir} «volver atrás», idiomático: «dejar algo a medias».
- {servir} «servir» → {se servir de} «servirse de».
- {venir} «venir» → {il vient} «viene a ocurrir»; {s'en venir} es otro verbo.

Y hay verbos que **solo** existen en forma pronominal: {se repentir} «arrepentirse», {se plaindre} «quejarse», {se méfier de} «desconfiar de», {se servir de} «servirse de».

## Lectura — Louis Segond

El texto bíblico francés está lleno de verbos pronominales, y aparecen a menudo donde está la mano: **{Il leur lava les pieds}** «les lavó los pies» es reflexivo **y** indirecto a la vez, porque {les} y {eux} designan al mismo grupo.

**{Se lever}** aparece en cada relato de resurrección: **{Il s'est levé, et il s'en est allé}** es la fórmula de Lc 24:34 en la Biblia Louis Segond para «ha resucitado y se ha ido». La partícula {en} acompaña porque el latín {recessit} lleva el valor de «desde allí».

El caso más elocuente es **{se glorifier}** «gloriarse»: **{Qu'il ne se glorifie pas}** «no se gloríe» (1Co 4:19). La forma pronominal carga el sentido de orgullo que el latín {gloriari} ya tenía: el francés no añade nada, traduce lo que está.

Y está el más corto de todos: **{Comment cela se peut-il ?}** «¿cómo puede ser eso?» — el verbo pronominal pasa a sujeto impersonal, y la oración entera se queda sin sujeto nominal.

## Lo esencial

El reflexivo apunta al sujeto, va antes del verbo y usa {me, te, se, nous, vous, se}. {se} puede ser reflexivo, recíproco o pronominal: la diferencia es de sentido, no de forma. Y cuando el verbo base lleva {être}, el participio concuerda con el sujeto: {elle s'est levée}.`),
  vocab: [
    V('me', 'me', 'me (1.ª persona singular)'),
    V('te', 'te', 'te (2.ª persona singular)'),
    V('se', 'se', 'se (3.ª persona)'),
    V('nous', 'nous', 'nos (recíproco o reflexivo plural)'),
    V('vous', 'vous', 'os / usted (plural o cortesía)'),
    V('je me lave', 'laver', 'me lavo ({se} + {laver})'),
    V('il s’habille', 'habiller', 'se viste'),
    V('elle s’est levée', 'lever', 'se levantó (participio concuerda)'),
    V('ils s’aiment', 'aimer', 'se quieren (recíproco)'),
    V('s’en aller', 'aller', 'irse ({en} pegada)'),
    V('va-t’en', 'aller', '¡vete! (imperativo, sin -s)'),
    V('je m’en souviens', 'souvenir', 'me acuerdo de ello'),
    V('se repentir', 'repentir', 'arrepentirse (solo pronominal)'),
    V('se passer', 'passer', 'ocurrirse ({Que se passe-t-il ?})'),
    V('s’endormir', 'dormir', 'dormirse (≠ {dormir})'),
    V('il leur lava les pieds', 'laver', 'les lavó los pies (Jn 13)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «{Nous nous lavons}», ¿por qué la oración es ambigua?'),
    options: [
      T(
        'Porque {nous} puede ser reflexivo (cada uno se lava) o recíproco (uno lava al otro): la forma es la misma',
      ),
      T('Porque {nous} solo puede ser recíproco, y el contexto lo resolvería'),
      T('Porque el verbo {laver} acepta tres pronombres distintos'),
      T('Porque {nous} necesita {se} en su lugar'),
    ],
    answer: 0,
    hint: T('El {se} francés no distingue los casos por la forma: los distingue el sentido.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("«Elle s'est ___» (se levantó, de {se lever}, con {être})."),
      answer: 'levée',
      hint: T('Con {être}, el participio concuerda con el sujeto femenino: -e final.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase NO tiene valor recíproco?'),
      options: [
        T("{Elle s'habille.}: una persona, una acción"),
        T("{Ils s'aiment.}: cada uno ama al otro"),
        T('{Nous nous retrouvons.}: cada uno encuentra al otro'),
        T('{Elles se parlent.}: cada una habla con la otra'),
      ],
      answer: 0,
      hint: T(
        'Plural {se} más verbo transitivo es casi siempre recíproco; el singular nunca lo es.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el pronombre con el sujeto al que apunta'),
      pairs: [
        { a: T('{Je me}'), b: T('{je} — 1.ª persona singular') },
        { a: T('{Tu te}'), b: T('{tu} — 2.ª persona singular') },
        { a: T('{Il se}'), b: T('{il/elle} — 3.ª persona, con -e') },
        { a: T('{Nous nous}'), b: T('{nous} — 1.ª persona plural') },
        { a: T('{Vous vous}'), b: T('{vous} — 2.ª persona, plural o cortesía') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El pronombre reflexivo va antes del verbo conjugado y el verbo se queda sin objeto: {Je me lave}, nunca {Je lave moi}.',
      ),
    },
    {
      n: '2',
      text: T(
        'La {se} tiene la misma forma en los tres usos: reflexivo, recíproco y pronominal. Plural más verbo transitivo es casi siempre recíproco; el singular nunca lo es.',
      ),
    },
    {
      n: '3',
      text: T(
        'La tercera del singular y la del plural comparten forma, {se}. Desambigua el verbo, no el pronombre: {il se lève} frente a {ils se lèvent}.',
      ),
    },
    {
      n: '4',
      text: T(
        "En el imperativo, {se} pasa a {toi} y pierde la -s con guion: {lave-toi}, {levez-toi}. Con {en} o {y} pegada, la forma es {t'en} y {y}: {va-t'en}, {vas-y}.",
      ),
    },
    {
      n: '5',
      text: T(
        "El participio pronominal concuerda con el sujeto solo cuando no hay objeto directo: {elle s'est levée} sí, {elle s'est lavé las manos} no.",
      ),
    },
  ],
  notes: [
    {
      label: T('Reflexivo no es sinónimo de «intransitivo»'),
      text: T(
        'En otras lenguas, un verbo como {laver} «lavar» es transitivo, y {se laver} es su forma reflexiva, la forma corta. En francés, {se laver} es un **verbo distinto**, con sentido propio: {se laver} «lavarse» y {laver qqch} «lavar algo» pueden convivir en la misma oración, {Je me lave les mains}, y eso es imposible en portugués, donde la forma pronominal es mera alternativa. De ahí la regla práctica: cuando el verbo ya tiene objeto, el {se} puede ser opcional; cuando no lo tiene, {se} es obligatorio.',
      ),
    },
    {
      label: T('La concordancia es una herencia del latín'),
      text: T(
        "En latín, un verbo de movimiento con auxiliar {esse} nunca llevaba participio. El português heredó eso y lo canceló: {levantou-se}, sin -e. El francés restauró la regla, y por eso {elle s'est levée} suena más «correcto» que {elle s'est levé} para un oído francés. La Biblia Louis Segond huele a eso: dominan las formas con -e, porque el traductor del siglo XIX notaba la falta. Quien lea francés y escriba {elle s'est levé} sin la -e no se equivoca en portugués: se equivoca en Francia.",
      ),
    },
  ],
  examples: [
    { text: 'je me lave', gloss: T('me lavo (reflexivo, 1.ª persona)') },
    { text: 'tu te lèves', gloss: T('te levantas ({te} = {tu})') },
    { text: 'il s’habille', gloss: T('se viste ({se} = 3.ª persona)') },
    { text: 'nous nous retrouvons', gloss: T('nos encontramos (recíproco)') },
    { text: 'elle s’est levée', gloss: T('se levantó (participio concuerda)') },
    { text: 'elle s’est lavé les mains', gloss: T('se lavó las manos (sin concordancia)') },
    { text: 'ils s’aiment', gloss: T('se quieren (recíproco obligatorio)') },
    { text: 'va-t’en', gloss: T("¡vete! (imperativo con {t'en})") },
    { text: 'je m’en souviens', gloss: T('me acuerdo de ello ({en} pegada)') },
    { text: 'il leur lava les pieds', gloss: T('les lavó los pies (Jn 13:1-17)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Pronombres reflexivos'),
      head: [T('Sujeto'), T('Reflexivo'), T('Imperativo')],
      rows: [
        ['{je}', T('{me}'), T('—')],
        ['{tu}', T('{te}'), T('{toi} (se pierde la -s)')],
        ['{il / elle}', T('{se}'), T('{toi} — sin equivalente')],
        ['{nous}', T('{nous}'), T('{—}')],
        ['{vous}', T('{vous}'), T('{—}')],
      ],
    },
    {
      caption: T('Tabla 2 — Concordancia del participio pronominal'),
      head: [T('Caso'), T('Ejemplo'), T('¿Concuerda?')],
      rows: [
        [T('{se} + verbo intransitivo + {être}'), T("{elle s'est levée}"), T('sí')],
        [T('{se} + verbo con objeto directo + {avoir}'), T("{elle s'est lavé las manos}"), T('no')],
        [T('{se} + infinitivo + {être}'), T("{elle s'est sentie}"), T('sí')],
        [T("{s'en} + verbo de movimiento + {être}"), T("{il s'en fue}"), T('sí')],
      ],
    },
  ],
};
