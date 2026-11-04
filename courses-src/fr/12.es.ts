import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  section: T('Los verbos'),
  title: T('Los verbos esenciales'),
  subtitle: T(
    '{aller}, {venir}, {être}, {avoir}, {faire}, {dire} y los verbos irregulares que rigen casi toda oración',
  ),
  body: C(`## Veinte verbos, y dos sin regla

Un verbo francés regular se conjuga por terminación: en {parle}, {parles}, {parle}, el tema {parl-} no se mueve y solo cambia el final. Los esenciales no tienen tema fijo: {vais}, {viens}, {suis}, {ai}, {fais}, {dis} son seis formas que no produce ninguna regla, y hay que aprenderlas sueltas.

Son pocos y pesan mucho. {aller}, {venir}, {être}, {avoir}, {faire}, {dire}, {pouvoir}, {devoir}, {vouloir}, {savoir}, {voir}, {donner}, {prendre}, {manger}, {boire}, {dormir}, {mourir}, {naître}, {lire}, {écrire}, {parler}, {écouter}, {mettre}, {sortir}, {partir}, {arriver}, {rester} y {tomber} cubren casi todo lo que se dice en un capítulo de Evangelio.

## {Aller} + infinitivo y {venir de} + infinitivo: futuro y pasado sin conjugar

El francés anuncia el futuro sin conjugar casi nada: es {aller} en presente más un infinitivo. {Je vais manger}, {il va venir}, {nous allons partir}. La forma de {aller} guarda la persona ({vais}, {vas}, {va}, {allons}, {allez}, {vont}), y el infinitivo no cambia nunca.

El mismo truco en el pasado reciente invierte la dirección: {venir de} más infinitivo. {Je viens de manger}, {il vient d’arriver}, {nous venons de partir}. Es un pasado que no tiene relación con distancia, y quien traduce {je viens de manger} literal piensa en movimiento, pero el sentido es "acabo de comer".

El pretérito compuesto de esas mismas ideas usa {être} y {avoir} como auxiliares: {je suis allé} usa {être} porque {aller} es uno de los 16 verbos de movimiento, {j’ai mangé} usa {avoir}. Sin el auxiliar correcto la oración es gramatical en forma y equivocada en persona.

## Los cuatro cambios de raíz

La raíz de los verbos irregulares cambia en cuatro familias, y la familia es lo que separa a los que cambian de los que se quedan.

- **{e} pasa a {è}**: {mène}, {lève}, {achète}, {pèse}, de {peser}.
- **{é} pasa a {è}**: {espère}, {préfère}, {répète}, {complète}.
- **{-eler} y {-eter} doblan la consonante**: {j’appelle}, {il jette}, {nous jetons}.
- **{y} pasa a {i}** en {-yer}: {j’envoie}, {je paie}, {j’essaie}.

En el presente de indicativo solo la 1.ª, 2.ª, 3.ª del singular y la 3.ª del plural cambian. {Nous} y {vous} conservan la raíz del infinitivo: {nous menons}, {vous préférez}, {nous jetons}, {nous envoyons}. El oído confirma la raíz en {nous} y en {vous}.

## Los tres que rigen infinitivo

{pouvoir}, {devoir} y {vouloir} rigen el infinitivo y nunca una forma conjugada: {je peux aller}, {tu dois lire}, {il veut partir}. Quien traduce del portugués lo olvida fácil: no existe "puedo que voy", el francés dice {je peux aller} y ya.

{falloir} merece nota porque no tiene persona: {il faut} es siempre tercera persona con {il}, y lo que sigue es el infinitivo. "Il faut que je parte" es una oración completa, y la parte conjugada, {parte}, va en subjuntivo.

## En la Biblia

Juan 1:1 abre con {était}, el imperfecto de {être}: en el principio era el Verbo. Juan 1:5 trae {brille}, el presente del verbo regular en {-er} {briller}, y {était} otra vez, como algo que ya estaba ahí. Y Juan 1:14 trae {a été faite}, el pretérito compuesto de {être} con el participio de {faire}, en una oración pasiva cuyo sujeto es {la Parole}.

Juan 3:16 traduce {a aimé}, el pretérito compuesto de {aimer}: Dios amó al mundo. El mismo verbo en presente sería {aime}, y la diferencia entre lo que Dios es y lo que Dios hizo se pierde cuando se borra el tiempo.`),
  vocab: [
    V('vais', 'aller', 'yo voy'),
    V('viens', 'venir', 'yo vengo'),
    V('suis', 'être', 'yo soy'),
    V('ai', 'avoir', 'yo tengo'),
    V('fais', 'faire', 'yo hago'),
    V('dis', 'dire', 'yo digo'),
    V('peux', 'pouvoir', 'yo puedo'),
    V('dois', 'devoir', 'yo debo'),
    V('veux', 'vouloir', 'yo quiero'),
    V('sais', 'savoir', 'yo sé'),
    V('vois', 'voir', 'yo veo'),
    V('prends', 'prendre', 'yo tomo'),
    V('mange', 'manger', 'yo como'),
    V('bois', 'boire', 'yo bebo'),
    V('dors', 'dormir', 'yo duermo'),
    V('étais', 'être', 'yo era'),
    V('brille', 'briller', 'él brilla'),
    V('est venue', 'venir', 'ella vino'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Diez presentes irregulares no tienen regla: {vais}, {viens}, {suis}, {ai}, {fais}, {dis}, {peux}, {dois}, {veux} y {sais}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'El futuro próximo es {aller} en presente más infinitivo: {je vais manger}, y el pasado reciente es {venir de} más infinitivo: {je viens de manger}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Solo unos trece verbos usan {être} como auxiliar del pretérito compuesto: {aller}, {venir}, {arriver}, {partir}, {naître}, {mourir}, {rester}, {tomber}, {entrer}, {sortir}, {monter}, {descendre} y {passer}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'La raíz cambia en el presente de indicativo en cuatro familias: e→è ({mène}), é→è ({espère}), -eler/-eter con consonante doblada ({j’appelle}), y→i ({j’envoie}). {Nous} y {vous} conservan el infinitivo.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{pouvoir}, {devoir} y {vouloir} rigen el infinitivo: {je peux aller}, {tu dois lire}, {il veut partir}, y nunca una forma conjugada.',
      ),
    },
  ],
  notes: [
    {
      label: T('El auxiliar dice quién es quién'),
      text: T(
        'En el pretérito compuesto, {être} va con verbos de movimiento o de cambio de estado: {je suis allé}. {Avoir} con verbos de acción: {j’ai mangé}. Cambiados, la oración sigue siendo gramatical y cambia de persona: {je suis mangé} ya no dice quién comió qué, y {j’ai allé} no existe.',
      ),
    },
    {
      label: T('El pasado reciente no tiene distancia'),
      text: T(
        '{Je viens de manger} dice "acabo de comer", no que vine a comer. Como construcción, {venir de} se liga al pasado: en presente es "acabo de", en imperfecto {je venais de manger} es "había acabado de comer". Un pasado que la traducción literal por "vine a" borra.',
      ),
    },
  ],
  examples: [
    {
      text: 'Au commencement était la Parole.',
      gloss: T('{était}: imperfecto de {être}, lo que ya valía antes de todo.'),
    },
    {
      text: 'la lumière brille dans les ténèbres',
      gloss: T('{brille}: presente, lo que pasa en escena (Jn 1:5).'),
    },
    {
      text: 'la Parole a été faite chair',
      gloss: T(
        '{a été faite}: pretérito compuesto pasivo de {faire}, con {être} de auxiliar (Jn 1:14).',
      ),
    },
    {
      text: 'Car Dieu a tant aimé le monde',
      gloss: T('{a aimé}: pretérito compuesto de {aimer} (Jn 3:16).'),
    },
    {
      text: 'Je vais manger.',
      gloss: T('{aller} en presente más el infinitivo {manger}: futuro próximo.'),
    },
    {
      text: 'Je viens de manger.',
      gloss: T('{venir de} más infinitivo: pasado reciente, "acabo de comer".'),
    },
    {
      text: 'J’ai mangé du pain.',
      gloss: T('Pretérito compuesto con {avoir}: el participio no cambia.'),
    },
    {
      text: 'Elle est venue.',
      gloss: T('Pretérito compuesto con {être}: {venue} concuerda con {elle}.'),
    },
    { text: 'Nous allons sortir.', gloss: T('Presente de {aller} con {nous}: {allons}.') },
    { text: 'Il faut partir.', gloss: T('{falloir} impersonal, siempre con {il} más infinitivo.') },
  ],
  tables: [
    {
      caption: T('Presente de los esenciales irregulares'),
      head: [T('Sujeto'), T('aller'), T('venir'), T('être'), T('avoir'), T('faire')],
      rows: [
        ['je', 'vais', 'viens', 'suis', 'ai', 'fais'],
        ['tu', 'vas', 'viens', 'es', 'as', 'fais'],
        ['il/elle', 'va', 'vient', 'est', 'a', 'fait'],
        ['nous', 'allons', 'venons', 'sommes', 'avons', 'faisons'],
        ['vous', 'allez', 'venez', 'êtes', 'avez', 'faites'],
        ['ils/elles', 'vont', 'viennent', 'sont', 'ont', 'font'],
      ],
    },
    {
      caption: T('Pretérito compuesto con être y avoir'),
      head: [T('Verbo'), T('Auxiliar'), T('Participio'), T('Ejemplo')],
      rows: [
        ['aller', 'être', 'allé', 'je suis allé'],
        ['venir', 'être', 'venu', 'elle est venue'],
        ['mourir', 'être', 'mort', 'il est mort'],
        ['naître', 'être', 'né', 'elle est née'],
        ['prendre', 'avoir', 'pris', 'j’ai pris'],
        ['faire', 'avoir', 'fait', 'j’ai fait'],
        ['dire', 'avoir', 'dit', 'j’ai dit'],
        ['voir', 'avoir', 'vu', 'j’ai vu'],
        ['manger', 'avoir', 'mangé', 'j’ai mangé'],
        ['boire', 'avoir', 'bu', 'j’ai bu'],
        ['dormir', 'avoir', 'dormi', 'j’ai dormi'],
        ['écrire', 'avoir', 'écrit', 'j’ai écrit'],
      ],
    },
    {
      caption: T('Los cuatro cambios de raíz'),
      head: [T('Verbo'), T('{je}'), T('{nous}'), T('Cambio')],
      rows: [
        ['mener', 'mène', 'menons', '{e} → {è}'],
        ['lever', 'lève', 'levons', '{e} → {è}'],
        ['acheter', 'achète', 'achetons', '{e} → {è}'],
        ['espérer', 'espère', 'espérons', '{é} → {è}'],
        ['préférer', 'préfère', 'préférons', '{é} → {è}'],
        ['appeler', 'appelle', 'appelons', '{l} → {ll}'],
        ['jeter', 'jette', 'jetons', '{t} → {tt}'],
        ['envoyer', 'envoie', 'envoyons', '{y} → {i}'],
        ['payer', 'paie', 'payons', '{y} → {i}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué verbo se necesita para formar el pretérito compuesto de {venir}?'),
    options: [T('{avoir}'), T('{être}'), T('{aller}'), T('{faire}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el futuro próximo: "Nous ___ partir" (aller + partir).'),
      answer: 'allons',
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma con el verbo de la conjugación.'),
      pairs: [
        { a: T('{vais}'), b: T('{aller}') },
        { a: T('{viens}'), b: T('{venir}') },
        { a: T('{suis}'), b: T('{être}') },
        { a: T('{peux}'), b: T('{pouvoir}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué forma reemplaza a "je" en el futuro próximo con {voir}?'),
      options: [T('{Je va voir}'), T('{Je vais voir}'), T('{Je voir}'), T('{Je aller voir}')],
      answer: 1,
    },
  ],
};
