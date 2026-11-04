import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('Los pronombres demostrativos'),
  subtitle: T('{ce, cet, cette, ces}, los sufijos {-ci} y {-là} y {celui}'),
  section: T('Los pronombres'),
  body: C(`## La familia que concuerda

El demostrativo francés tiene cuatro formas y concuerdan con el sustantivo en género y número:

- {ce} — masculino singular: {ce livre} «este libro».
- {cet} — masculino singular ante vocal o h muda: {cet homme} «este hombre», {cet arbre} «este árbol».
- {cette} — femenino singular: {cette maison} «esta casa».
- {ces} — cualquier plural: {ces enfants} «estos niños».

{cet} es la misma eufonía de los posesivos, con la misma excepción: {ce héros} «este héroe» y {ce hibou} «este búho» conservan la -e, porque la h es aspirada.

## {-ci} y {-là}: distancia y alcance

Los sufijos {-ci} («aquí») y {-là} («allí») marcan la posición respecto a quien habla:

- {ce livre-ci} «este libro aquí» — cerca de mí.
- {ce livre-là} «ese libro allí» — lejos de mí, o en el campo de visión de otra persona.

Sin sufijo el valor es más vago y se apoya en {ici} y {là}: {Je vois le livre} «veo el libro» es neutro; {Voici le livre} «he aquí el libro» y {Voilà le livre} «he allí el libro» fijan el punto.

Y está el par de **interjecciones de presentación**, que en la práctica son demostrativos fosilizados: {le voilà} «ahí está», {la voici} «aquí está», {les voilà} «ahí están».

## Sustitutos: {celui} y compañía

Cuando el demostrativo sustituye al sustantivo, la forma cambia a la familia de {celui}:

- {celui} — masculino singular: {celui qui parle} «el que habla».
- {celle} — femenino singular: {celle qui habite ici} «la que vive aquí».
- {ceux} y {celles} — plural: {ceux que vous voyez} «los que usted ve».

Y con {de}, el pronombre se contrae en una sola forma: {celui de} «el de», {celle de}, {ceux de}. En {le livre de celui-ci} «el libro de aquel», el posesivo va antes del demostrativo: {celui-ci} es una sola palabra.

## Los dos neutros: {ceci} y {cela}

Sin referente nominal, el demostrativo pasa a {ceci} «esto» y {cela} «eso»:

- {Ceci est important.} «Esto es importante»: lo que tengo delante, o lo que voy a decir.
- {Cela ne l'est pas.} «Eso no es»: lo que usted ya sabe, a distancia.

Y la forma del verbo impersonal: {C'est} más sustantivo, que pasa a {Ce sont} cuando el sustantivo es plural, aunque el antecedente sea masculino: **{C'est un livre}** es correcto, **{C'est des livres}** está mal; el francés cambia el demostrativo, no el sustantivo.

## Lectura — Louis Segond

La Biblia francesa es generosa con {ceci} y {cela}, porque también lo era el griego original. Expresiones fijas como {cela va sans dire} «eso va sin decir» y {voilà ce que je voulais dire} «eso es lo que quería decir» siguen vivas en el francés actual, y todas están construidas con {cela} o {ce} más un verbo.

La Biblia francesa usa también {c'est} como sujeto con mucha frecuencia donde el portugués usaría un verbo impersonal o una oración entera: **{C'est la foi, ce n'est pas des œuvres}** (Gál 2:16) «es la fe, no son las obras», **{C'est par la foi, non par les œuvres}**: la construcción se repite, y es la más traducida del Nuevo Testamento.

Y lo más bonito: **{Voici}** y **{Voilà}** están detrás de la mitad de los títulos franceses de series y traducciones — **{Voici la Nouvelle Bible Louis Segond}** «he aquí la Nueva Biblia Louis Segond». El texto usa {voici} para presentar lo que viene y {voilà} para mostrar lo que ya está ahí.

Lo más bonito aún es **{Ceux qui}** en Gál 4:28, **{ceux qui sont en Christ}**: la Iglesia es llamada con un demostrativo de tercera persona, y el verbo concuerda con el sustantivo que viene después. Si {ceux} solo ya es raro, allí el pronombre tiene sujeto.

## Lo esencial

{ce, cet, cette, ces} concuerdan con el sustantivo; {-ci} y {-là} dicen dónde; {celui, celle, ceux, celles} sustituyen al sustantivo; {ceci} y {cela} funcionan sin referente. Y {c'est}/{ce sont} cambian el singular por el número de lo que sigue, el único punto del capítulo en que el demostrativo discrepa de su sustantivo.`),
  vocab: [
    V('ce', 'ce', 'este (masculino singular)'),
    V('cet', 'cet', 'este (masculino + vocal o h muda)'),
    V('cette', 'cette', 'esta (femenino singular)'),
    V('ces', 'ces', 'estos (plural, cualquier género)'),
    V('ce héros', 'héros', 'este héroe (h aspirada: sin {cet})'),
    V('ce livre-ci', 'livre', 'este libro aquí (cerca de mí)'),
    V('ce livre-là', 'livre', 'ese libro allí (lejos de mí)'),
    V('celui', 'celui', 'el que (masculino singular)'),
    V('celle', 'celle', 'la que (femenino singular)'),
    V('ceux de', 'ceux', 'los de (plural + {de} contraído)'),
    V('celui-ci', 'celui', 'aquel (junto: una sola palabra)'),
    V('ceci', 'ceci', 'esto (cerca de mí)'),
    V('cela', 'cela', 'eso (lejos, o ya conocido)'),
    V('ce sont', 'être', 'son (plural, aunque el antecedente sea masculino)'),
    V('voilà', 'voilà', 'ahí está (demostrativo fosilizado)'),
    V('voici', 'voici', 'he aquí está (presenta lo que viene)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué frase es gramaticalmente correcta?'),
    options: [
      T("{C'est des livres que j'ai achetés.}: {ce sont} sigue al plural"),
      T("{C'est un homme que j'ai vu.}: {c'est} concuerda con el plural {hommes}"),
      T("{C'est une heure suffit.}: {c'est} debería ser {ce sont}"),
      T("{C'est trois petits chats.}: el número no afecta al demostrativo"),
    ],
    answer: 0,
    hint: T(
      'Regla §4: el francés cambia el demostrativo según el número de lo que sigue, no según el antecedente.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Eufonía: «___ hombre» (este hombre, sustantivo masculino).'),
      answer: 'cet',
      hint: T('Masculino ante vocal o h muda: la -e cede ante la -t.'),
    },
    {
      kind: 'choose',
      prompt: T('En «{Voici la Nouvelle Bible Louis Segond}», ¿qué introduce {voici}?'),
      options: [
        T('Algo que viene a existir ahora: {voici} presenta, {voilà} señala'),
        T('Algo ya presente y visible: {voici} señala, {voilà} presenta'),
        T('Un lugar lejano: {voici} es el equivalente de {là}'),
        T('Una causa: {voici} introduce el motivo de la oración'),
      ],
      answer: 0,
      hint: T('La regla es corta: {voici} presenta lo que viene, {voilà} muestra lo que ya está.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma con su valor'),
      pairs: [
        { a: T('{ce livre-ci}'), b: T('cerca de quien habla') },
        { a: T('{ce livre-là}'), b: T('lejos o fuera de la vista') },
        { a: T('{celui qui parle}'), b: T('sustituto masculino del sustantivo') },
        { a: T('{ceux de}'), b: T('plural de {celui} con {de} contraído') },
        { a: T('{cela}'), b: T('neutro, sin referente nominal') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{ce, cet, cette, ces} concuerdan con el sustantivo en género y número; {cet} es obligatorio ante vocal o h muda, y prohibido ante h aspirada ({ce héros}).',
      ),
    },
    {
      n: '2',
      text: T(
        'Los sufijos {-ci} y {-là} indican distancia respecto a quien habla, no tiempo. {Ce livre-là} puede haberse escrito hace una hora.',
      ),
    },
    {
      n: '3',
      text: T(
        'Cuando sustituye al sustantivo, el demostrativo pasa a {celui, celle, ceux, celles}: nunca {ce livre}, sino {celui}. Con {de} se contrae en una palabra: {celui de}, {ceux de}.',
      ),
    },
    {
      n: '4',
      text: T(
        "{C'est}/{Ce sont} discrepan del sustantivo que sigue: el número del verbo es el de lo que viene después, no el del antecedente. {C'est des hommes} es correcto incluso hablando de un grupo ya conocido.",
      ),
    },
    {
      n: '5',
      text: T(
        '{ceci} y {cela} no concuerdan con nada porque no sustituyen a un sustantivo: {Ceci est mon livre} y {Cela est ton livre} cambian la posesión sin cambiar la forma.',
      ),
    },
  ],
  notes: [
    {
      label: T('{voici} y {voilà} son primos de {voir}'),
      text: T(
        'Las dos palabras vienen de la misma raíz que {voir} «ver»: {voici} toma la -ci de {ici} «aquí», {voilà} la -là de {là} «allí». Y el verbo perdió la -r porque dejó de ser verbo: se convirtió en el gesto de señalar algo. El francés tiene esas fosilizaciones: palabras que fueron oraciones enteras y hoy son solo gestos. Lo mismo pasó con {tiens}, de {tenir}, usado como {tiens!}, y con {voilà} en {le voilà}, que pasó a pronombre/aposición.',
      ),
    },
    {
      label: T('El demostrativo francés nace de la necesidad, no de la lógica'),
      text: T(
        'Griego, latín y portugués tienen un solo demostrativo que cambia de número: {este, estes}, {celui, ceux}. El francés lo multiplicó porque **la distancia es información**: {ce livre-ci} y {ce livre-là} pueden convivir en la misma frase, y eso es imposible con un solo demostrativo. El precio es una familia de cuatro formas para el adjetivo, otras cuatro para el sustituto y dos neutros. A cambio, el francés resuelve en dos palabras lo que el portugués necesita en dos oraciones.',
      ),
    },
  ],
  examples: [
    { text: 'ce livre', gloss: T('este libro (masculino singular)') },
    { text: 'cet homme', gloss: T('este hombre (eufonía ante h muda)') },
    { text: 'ce héros', gloss: T('este héroe (h aspirada: sin eufonía)') },
    { text: 'ce livre-là', gloss: T('ese libro allí') },
    { text: 'celui qui parle', gloss: T('el que habla (sustituto masculino)') },
    { text: 'ceux de', gloss: T('los de (plural + {de} contraído)') },
    { text: 'Cela va sans dire', gloss: T('eso va sin decir (locución fija)') },
    {
      text: 'C’est la foi, ce n’est pas des œuvres',
      gloss: T('es la fe, no son las obras (Gál 2:16)'),
    },
    { text: 'C’est des hommes', gloss: T('son hombres (el verbo sigue al plural)') },
    { text: 'le voilà', gloss: T('ahí está ({voilà} fosilizado)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Demostrativos y sustitutos'),
      head: [T('Género'), T('Singular'), T('Plural')],
      rows: [
        [T('Masculino'), T('{ce}, {cet} (+ vocal o h muda)'), T('{ces}')],
        [T('Femenino'), T('{cette}'), T('{ces}')],
        [T('Sustituto'), T('{celui} / {celle}'), T('{ceux} / {celles}')],
        [T('Con {de}'), T('{celui de} / {celle de}'), T('{ceux de} / {celles de}')],
        [T('Neutro'), T('{ceci} (aquí) / {cela} (allí)'), T('{ceci} / {cela}')],
      ],
    },
    {
      caption: T('Tabla 2 — {-ci} y {-là} sobre un mismo sustantivo'),
      head: [T('Base'), T('{-ci}: aquí'), T('{-là}: allí')],
      rows: [
        ['{ce livre}', T('{ce livre-ci}'), T('{ce livre-là}')],
        ['{cette maison}', T('{cette maison-ci}'), T('{cette maison-là}')],
        ['{ces livres}', T('{ces livres-ci}'), T('{ces livres-là}')],
        ['{ceci} / {cela}', T('no se combina'), T('no se combina')],
      ],
    },
  ],
};
