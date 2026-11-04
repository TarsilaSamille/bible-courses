import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('{y}, {en} y el orden de los pronombres'),
  subtitle: T('{j’y pense}, {j’en parle} y la secuencia fija antes del verbo'),
  section: T('Los pronombres'),
  body: C(`## {y}: adónde, dónde, en qué

{y} sustituye a un complemento introducido por {à}, {chez} o por un sustantivo de lugar:

- {Je pense à Paris} → {J'y pense} «pienso en ello / en París».
- {Je vais chez Paul} → {J'y vais} «voy allí».
- {Il habite à Lyon} → {Il y habite} «vive allí».

{y} es **un solo pronombre**: no marca persona, ni número, ni género. Funciona porque el verbo ya sabe quién es el sujeto, y el lugar ya está fijado por el verbo o por la preposición a la que sustituye.

Y hay un caso en que {y} **no** es pronombre: {Il y a} «hay». Allí {y} forma parte de la locución, como en {il y a deux livres}. Y aparece también en la pregunta invertida: {y a-t-il}, donde la {y} es fija.

## {en}: de qué, de cuánto

{en} sustituye a un complemento con {de} o a una cantidad:

- {Je parle du livre} → {J'en parle} «hablo de ello».
- {Je prends du pain} → {J'en prends} «tomo de eso».
- {Elle a deux enfants} → {Elle en a deux} «ella tiene dos».
- {Je m'en souviens} «me acuerdo de ello».
- {Donnez-m'en} «dénme de eso».

El valor partitivo es esencial: **{Je veux du pain ; j'en veux}** «quiero pan; quiero de eso». Sin {en} la oración no tiene sentido; con {en}, la cantidad desaparece y queda solo la idea de «de eso».

## La secuencia fija

Los pronombres que acompañan a un verbo conjugado (no a un infinitivo) tienen una posición fija:

**sujeto + {ne} + reflexivo + objeto directo + objeto indirecto + {y} + {en} + verbo + {pas} + adverbios**

En la práctica, lo que importa es: **{y} y {en} van siempre juntos, al final de la cola**, después del objeto directo y del indirecto.

- {Je ne te le donne pas} «No te lo doy»: {te} = objeto directo, {le} = indirecto.
- {Ne lui en parle pas} «No le hables de ello»: {lui} = indirecto, {en} = {de} + ello.
- {Je vous en ai parlé} «Ya les he hablado de ello».
- {N'y pensez pas} «No piense en ello»: {ne} delante de {y} se vuelve {n'y}.

Y está la **elisión**: {je} + {y} = {j'y}, {je} + {en} = {j'en}, {ne} + {y} = {n'y}, {le} + {en} = {l'en}, {me} + {en} = {m'en}.

## El imperativo es distinto

En el imperativo **afirmativo**, los pronombres van **detrás** del verbo, unidos con guion:

- {Donnez-m'en} «dénme de eso».
- {Va-t'en} «vete».
- {Vas-y} «ve allí».
- {Donne-le} «dáselo».

En el **negativo**, el imperativo vuelve al orden normal: {Ne me donnez pas} «no me den», {N'y allez pas} «no vayan allí».

Y con el infinitivo, todo va **detrás**: {Je veux lui parler} «quiero hablar con él»: el pronombre va detrás del infinitivo, con su preposición.

## Lectura — Louis Segond

El texto bíblico francés usa {y} y {en} todo el tiempo, y hay versículos hechos **enttegramente** de pronombre más verbo:

- La versión Louis Segond de «no nos dejes nuestros deudores» es **{Et ne nous laisse pas nos debts}** (Mt 6:12), donde {nous} aparece dos veces y el verbo {laisse} lleva el {en} dentro de la preposición {nos}.
- **{Il y a}** está en todas partes: **{Il n'y a qu'un seul Dieu}**, **{Il y a de la différence}**. El inglés "there is" es de la misma familia que el {y} francés.

Lo más bonito es **{Là où il y a de l'amour, il y a de la paix}**: un eco moderno, pero muestra lo que {y} puede hacer — actúa como sujeto impersonal, y eso es lo que permite al francés decir «hay» donde el inglés necesita «there exists».

Y está el caso raro pero muy frecuente **{il n'y a pas mieux}** «no hay mejor», con {y} como sujeto y {pas} en posición final, como exige la negación.

## Lo esencial

{y} sustituye a {à} + lugar; {en} sustituye a {de} + complemento, y cubre también cantidades. En la secuencia, {y} y {en} son siempre los últimos antes del verbo, y la elisión pega {j'y}, {j'en}, {n'y}, {l'en}. En el imperativo afirmativo todo cambia: los pronombres van **detrás**, con guion. Con estos dos firmes, la mitad de los líos con los pronombres franceses está resuelta.`),
  vocab: [
    V('y', 'y', 'allí / en ello (sustituye a {à} + lugar)'),
    V('en', 'en', 'ello / de eso (sustituye a {de} + algo)'),
    V('j’y pense', 'penser', 'pienso en ello ({je} elidido)'),
    V('j’en parle', 'parler', 'hablo de ello'),
    V('il y a', 'avoir', 'hay ({y} forma parte de la locución)'),
    V('n’y pensez pas', 'penser', 'no piense en ello ({ne} se elide)'),
    V('je vous en ai parlé', 'parler', 'ya le he hablado de ello ({en} al final)'),
    V('donnez-m’en', 'donner', 'dénme de eso (imperativo afirmativo)'),
    V('va-t’en', 'aller', '¡vete! (imperativo + {en})'),
    V('vas-y', 'aller', 've allí (imperativo + {y})'),
    V('ne me donnez pas', 'donner', 'no me den (negación: orden normal)'),
    V('je veux lui parler', 'parler', 'quiero hablar con él (infinitivo: pronombres después)'),
    V('elle en a deux', 'avoir', 'ella tiene dos ({en} = cantidad)'),
    V('il y a deux livres', 'livre', 'hay dos libros ({y} fija)'),
    V('ne lui en parle pas', 'parler', 'no le hable de ello ({lui} + {en})'),
    V('j’en veux', 'vouloir', 'quiero (de eso) — valor partitivo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «{Ne lui en parle pas}», ¿cuál es el orden de los pronombres?'),
    options: [
      T('{ne} + {lui} (indirecto) + {en} (de + ello) + verbo + {pas}: {en} es siempre el último'),
      T('{ne} + {en} + {lui} + verbo + {pas}: {en} va antes del indirecto'),
      T('{lui} + {ne} + {en} + verbo + {pas}: el indirecto abre la oración'),
      T('{ne} + {lui} + {en} + {pas} + verbo: el {pas} precede al verbo en la negación'),
    ],
    answer: 0,
    hint: T(
      'La secuencia es: {ne}, reflexivo, objeto directo, objeto indirecto, {y}, {en}, verbo, {pas}.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Elisión: «Je pense à ce livre» → «___ pense à ce livre».'),
      answer: 'J’y',
      hint: T("{je} + {y} = {j'y}: la -e de {je} desaparece ante {y}."),
    },
    {
      kind: 'choose',
      prompt: T("En «{Donnez-m'en}», ¿por qué el pronombre va detrás del verbo?"),
      options: [
        T('Porque es el imperativo afirmativo: ahí los pronombres van detrás, con guion'),
        T('Porque {en} nunca puede ir antes del verbo'),
        T('Porque el verbo {donner} es irregular y desplaza el pronombre'),
        T('Porque la negación está implícita en la forma del verbo'),
      ],
      answer: 0,
      hint: T('Regla §4: solo el imperativo afirmativo desplaza los pronombres detrás del verbo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la oración con el pronombre que elide o exige'),
      pairs: [
        { a: T('{Il y a deux livres}'), b: T('{y} fija: forma parte de {il y a}') },
        { a: T('{Je pense à ce livre}'), b: T("{j'y} — elisión de {je} + {y}") },
        { a: T('{Elle a deux enfants}'), b: T('{en} partitivo: {elle en a deux}') },
        { a: T("{N'y pensez pas}"), b: T("{n'y} — {ne} se elide ante {y}") },
        { a: T('{Je veux lui parler}'), b: T('{lui} después del infinitivo') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        "{y} sustituye a {à} + lugar o a un nombre de lugar ({chez}, {au}, {en}) y no marca persona, número ni género: {J'y pense}, {Il y habite}.",
      ),
    },
    {
      n: '2',
      text: T(
        "{en} sustituye a {de} + complemento y tiene valor partitivo: {j'en parle}, {j'en veux}, {elle en a deux}. En {il y a} no hay ningún {en}: la {y} es fija.",
      ),
    },
    {
      n: '3',
      text: T(
        'En la secuencia con el verbo conjugado el orden es fijo: {ne} + reflexivo + objeto directo + objeto indirecto + {y} + {en} + verbo + {pas}.',
      ),
    },
    {
      n: '4',
      text: T(
        "En el imperativo afirmativo los pronombres pasan **detrás** del verbo unidos con guion: {donnez-m'en}, {va-t'en}, {vas-y}. En la negación vuelven delante: {ne me donnez pas}.",
      ),
    },
    {
      n: '5',
      text: T(
        'Con el infinitivo {me, te, se, lui, leur, y, en} quedan **detrás**: {Je veux lui parler}, {Je vais y aller}. Es lo contrario del imperativo afirmativo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Una {en}, tres trabajos'),
      text: T(
        "{en} es el pronombre más productivo del francés, porque hace tres cosas a la vez. Primero, sustituye al **complemento de {de}**: {Je parle du livre} → {J'en parle}. Segundo, tiene **valor partitivo**, que expresa la idea de «un poco de eso»: {Je prends du pain} → {J'en prends}. Tercero, funciona como **pronombre indefinido**: {Elle en a deux} «ella tiene dos»: la palabra «dos» sobrevive y {en} se limita a decir «de ese total». Un pronombre con tres reglas de uso: en cada caso, solo el contexto lo resuelve.",
      ),
    },
    {
      label: T('La negación francesa pelea con {y} y {en}'),
      text: T(`En **{Ne nous laissez pas nos debts}** (Mt 6:12) el {ne} va delante, {nous} justo después, y {pas} queda **detrás del verbo**: esa es la posición del {pas} en todas las negaciones francesas. Por eso **{ne lui en parle pas}** y no ~~{ne lui parle pas en}~~. Y la elisión {ne} + {y} es obligatoria: **{n'y pensez pas}**, nunca **{ne y pensez pas}**. Lo mismo, {ne} + {y} + sustantivo marca una afirmación negativa: **{il n'y a pas de places}** «no hay asientos».

Lo que hace la negación es cercar al verbo: {ne} delante, {pas} detrás, y todo lo que queda entre ellos intacto. Los pronombres {y} y {en} viven siempre dentro de ese cerco, y por eso nunca escapan de la negación.`),
    },
  ],
  examples: [
    { text: 'j’y pense', gloss: T('pienso en ello ({je} elidido, {à} + lugar)') },
    { text: 'j’en parle', gloss: T('hablo de ello ({de} + el libro)') },
    { text: 'j’en veux', gloss: T('quiero (de eso) — valor partitivo') },
    { text: 'elle en a deux', gloss: T('ella tiene dos ({en} con cantidad)') },
    { text: 'il y a deux livres', gloss: T('hay dos libros ({y} fija)') },
    { text: 'n’y pensez pas', gloss: T('no piense en ello ({ne} se elide)') },
    { text: 'ne lui en parle pas', gloss: T('no le hable de ello ({lui} + {en})') },
    { text: 'donnez-m’en', gloss: T('dénme de eso (imperativo afirmativo)') },
    { text: 'vas-y', gloss: T('ve allí (imperativo + {y})') },
    {
      text: 'Et ne nous laisse pas nos debts',
      gloss: T('y no nos dejes caer en la tentación (Mt 6:12)'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Elisión de {je} y {ne}'),
      head: [T('Antes de'), T('Forma corta'), T('Ejemplo')],
      rows: [
        ['{je} + {y}', T("{j'y}"), "{j'y pense}"],
        ['{je} + {en}', T("{j'en}"), "{j'en parle}"],
        ['{ne} + {y}', T("{n'y}"), "{n'y pensez pas}"],
        ['{me/te/le/la} + {en}', T("{m'en}, {t'en}, {l'en}"), "{donnez-m'en}"],
        ['{me/te/se} + {y}', T("{m'y}, {t'y}, {s'y}"), '{vas-y}'],
      ],
    },
    {
      caption: T('Tabla 2 — El orden de los pronombres'),
      head: [T('Posición'), T('Quién lo ocupa'), T('Ejemplo')],
      rows: [
        ['1', T('{ne} (negación)'), '{ne lui en parle pas}'],
        ['2', T('reflexivo'), '{il se rend compte}'],
        ['3', T('objeto directo'), '{je le vois}'],
        ['4', T('objeto indirecto'), '{je lui parle}'],
        ['5', T('{y}'), "{j'y vais}"],
        ['6', T('{en}'), "{j'en parle}"],
        ['7', T('verbo y {pas}'), '{je ne le vois pas}'],
        ['Imperativo af.', T('todo va detrás del verbo'), "{donnez-m'en}"],
      ],
    },
  ],
};
