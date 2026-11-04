import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('Adjetivos de tercera y numerales'),
  subtitle: T(
    '{sapiēns, sapientis}; {ūnus, duo, trēs, mīlle} — la palabra que nombra y la palabra que cuenta',
  ),
  section: T('Declinaciones y el verbo sum'),
  body: C(`## El adjetivo que se mueve

Un sustantivo latín es una pieza fija: {puella} es {puella} en cualquier oración. Un adjetivo, en cambio, es una pieza que **va detrás del sustantivo y copia su caso**. {Puella} {sapiēns} — la niña es {sapiēns}, nominativo femenino. La misma palabra en {puellam sapientem} es acusativo femenino, porque {puellam} lo es.

Lo que cambia es el **género**. En la tercera declinación, {sapiēns} «sabio» tiene una forma para masculino y femenino y otra para el neutro:

- {sapiēns} — nominativo singular masculino y femenino;
- {sapiente} — nominativo singular neutro: {sapiente opus} «una obra sabia»;
- {sapientēs} — nominativo plural masculino y femenino;
- {sapientia} — nominativo plural neutro: {sapientia opera} «obras sabias».

El único punto en que el adjetivo se despega del sustantivo es ese: el neutro añade {-e} en el singular y {-ia} en el plural. El resto del paradigma es idéntico al del sustantivo de tercera, porque sigue las mismas terminaciones: {sapientis}, {sapientī}, {sapientem}, {sapiente}, {sapientium}, {sapientibus}.

| Caso | Masc./fem. sg. | Neutro sg. | Masc./fem. pl. | Neutro pl. |
|---|---|---|---|---|
| Nom. | sapiēns | sapiente | sapientēs | sapientia |
| Voc. | sapiēns | sapiente | sapientēs | sapientia |
| Gen. | sapientis | sapientis | sapientium | sapientium |
| Dat. | sapientī | sapientī | sapientibus | sapientibus |
| Ac. | sapientem | sapiente | sapientēs | sapientia |
| Abl. | sapiente | sapiente | sapientibus | sapientibus |

Lo mismo vale para los demás de la tercera: {fortis, fortis, forte} da {forte opus} «una obra fuerte» y {fortia moenia} «murallas fuertes»; {omnis, omne} da {omne verbum} «toda palabra» y {omnia corpora} «todos los cuerpos». Aprende {-e} e {-ia}: son los dos únicos mapas que necesitas.

## Concordancia: una regla, tres consecuencias

El adjetivo concuerda con el sustantivo en **género, número y caso**. Y nada más. De ahí se siguen tres cosas que resuelven casi toda la gramática nominal:

1. La posición dentro del grupo nominal es libre: {sapiēns puella} y {puella sapiēns} son lo mismo. El latín respeta el orden solo cuando la repetición sería confusa.
2. Si el sustantivo es de género común, el adjetivo lo revela: {hic liber} {bonus} es masculino; {haec puella} {sapiēns} es femenino; {hoc opus} {sapiente} es neutro.
3. El plural neutro {omnia} es una fórmula para todo: {omnia corpora} «todas las cosas», {omnia vincit Amor} «todo vence el amor» (Ovidio). Por eso {omnia} aparece tanto en oraciones litúrgicas.

## Los comparativos

Los comparativos de primera y segunda serie forman el grado en {-ior}, {-ius}: {melior} «mejor» y {melius} «mejor» (neutro), {maior} «mayor», {minor} «menor». La vocal del tema se alarga, la {i} es breve, y el comparativo se declina como adjetivo de tercera: {meliorem}, {melioris}, {meliores}.

La otra pareja es {plūs} «más» y {minus} «menos». A diferencia del comparativo adjetivo, {plūs} es un **sustantivo neutro**, y por eso lleva genitivo: {plūs fideī} «más fe», {plūs sapientiae} «más sabiduría». Donde hay {plūs} hay carencia: así traduce el latín «no solo… sino también».

## Los numerales

Los cardinales cuentan; los ordinales ordenan. Los ordinales son casi todos adjetivos de primera y se usan en función de sustantivo: {prīmus} «primero», {secundus} «segundo», {tertius} «tercero».

Los cardinales cambian de género para concordar:

| Número | Masculino | Femenino | Neutro |
|---|---|---|---|
| 1 | ūnus | ūna | ūnum |
| 2 | duo | duae | duo |
| 3 | trēs | trēs | tria |

De {ūnus} en adelante, el patrón es: **la forma masculina sirve para todos los géneros, la femenina tiene forma propia, y la neutra es la femenina con {-um} cambiado por {-a}**. {ūnus} y {ūna} se declinan como adjetivos de primera y segunda; {trēs} y {tria} se declinan como adjetivos de tercera.

{duo} es el numeral más rígido: solo tiene plural, y su plural es {duōs, duae, duo} en nominativo y acusativo, {duōrum, duārum, duōrum} en genitivo y {duōbus, duābus, duōbus} en dativo y ablativo. La Vulgata casi siempre escribe {duobus} con terminación de tercera: {duo homines} «dos hombres», {duae viae} «dos caminos», {duo millia} «dos mil».

## De mil en adelante

{mīlle} es el numeral más irregular del latín: es **indeclinable** y vale exactamente mil, nunca más. Su plural cambia de identidad — {mīllia} no significa «muchos miles», significa «un conjunto de miles», es decir, «mil» otra vez. Y como {mīllia} es neutro, los numerales mayores concuerdan con él: {duo mīllia hominum} «dos mil hombres», {decem mīlia passōrum} «diez mil pasos».

{mīllia} se declina como un neutro de primera: {mīllium} en genitivo, {mīllibus} en dativo y ablativo. En {decem mīllia} el sustantivo es neutro plural, el numeral {decem} es invariable, y la concordancia de género se hace con {mīllia}. Es un truco elegante: el número queda escondido y lo que concuerda es el sustantivo contable.

## Lectura

{Estote ergo prudentes sicut serpentes et simplices sicut columbae} «Sed therefore wise as serpents and simple as doves» (Mt 10:16) — {prudentes} y {simplices} son dos adjetivos de tercera en nominativo plural masculino, que cubren el sujeto implícito {vōbīs}. En la misma línea, la concordancia de género es lo que elimina toda duda: si el sujeto fuera femenino, la Vulgata escribiría igualmente {prudentes}, pero el verbo {estō} recibiría {estis}.

{Unus Dominus, una fides, unum baptisma} «un solo Señor, una sola fe, un solo bautismo» (Ef 4:5) — tres sustantivos masculinos y tres femeninos, y tres veces el numeral {ūnus} e {ūna} concordando con cada uno. Fíjate en que la frase no traduce «uno y uno y uno»: en latín traduce «único», es decir, «no hay segundo».

{Omnia vincit Amor} «todo vence el amor» — el plural neutro {omnia} como sujeto de un verbo singular: en latín el verbo concuerda con el sustantivo más cercano, y el neutro plural pasó al singular, igual que en portugués «tudo vence».

## Lo esencial

En la tercera declinación el adjetivo no tiene paradigma propio: copia el del sustantivo y solo añade {-e} en el neutro singular y {-ia} en el neutro plural. El numeral hace lo contrario — fija el género en tres columnas y casi nunca se flexiona. Y {mīlle} recuerda que el latín cuenta por miles: {mīllia} es neutro plural, y gracias a él {decem mīllia} significa diez mil.`),
  vocab: [
    V('sapiēns', 'sapiēns', 'sabio (nom. sg. m./f.)'),
    V('sapiente', 'sapiēns', 'sabio (nom. sg. n.) / sabio (ac./abl. sg. n.)'),
    V('sapientēs', 'sapiēns', 'sabios (nom. pl. m./f.)'),
    V('sapientia', 'sapiēns', 'sabias (nom. pl. n.) / la sabiduría'),
    V('sapientium', 'sapiēns', 'de los sabios (gen. pl.)'),
    V('forte', 'fortis', 'fuerte (n.) / audaz'),
    V('omnia', 'omnis', 'todas las cosas (nom./ac. pl. n.)'),
    V('melior', 'bonus', 'mejor (comparativo)'),
    V('maior', 'magnus', 'mayor, más importante'),
    V('plūs', 'plūs', 'más (+ gen.)'),
    V('ūnus', 'ūnus', 'uno (m.) / único'),
    V('ūna', 'ūnus', 'una (f.)'),
    V('duo', 'duo', 'dos (m./n. pl.)'),
    V('trēs', 'trēs', 'tres (m./f.)'),
    V('mīlle', 'mīlle', 'mil (indeclinable)'),
    V('mīllia', 'mīlle', 'mil (plural neutro), miles'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {sapiente opus}, ¿por qué {sapiente} y no {sapiēns}?'),
    options: [
      T('Porque {opus} es neutro: el adjetivo recibe {-e} en el nominativo singular neutro'),
      T('Porque {sapiēns} nunca se usa con sustantivos'),
      T('Porque {opus} es una forma de acusativo'),
      T('Porque la vocal del tema se duplica en el neutro'),
    ],
    answer: 0,
    hint: T('Regla §2: solo el neutro tiene forma propia.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Nominativo plural neutro de {omnis}: omni_'),
      answer: 'a',
      hint: T('El plural neutro de tercera termina en {-ia}.'),
    },
    {
      kind: 'choose',
      prompt: T('En {Unus Dominus, una fides, unum baptisma}, ¿con qué concuerda {unum}?'),
      options: [
        T('Con {Dominus} — porque {unum} es masculino singular'),
        T('Con {baptisma} — porque {unum} es neutro singular'),
        T('Con {fides} — porque {unum} es femenino'),
        T('Con ninguno: {unum} es invariable'),
      ],
      answer: 1,
      hint: T('Regla §2: el numeral concuerda en género con el sustantivo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma con lo que significa'),
      pairs: [
        { a: T('sapientia opera'), b: T('obras sabias (nom. pl. n.)') },
        { a: T('plūs sapientiae'), b: T('más sabiduría (numeral sustantivado + gen.)') },
        { a: T('duo mīllia hominum'), b: T('dos mil hombres (concordancia con mīllia)') },
        { a: T('omnia corpora'), b: T('todos los cuerpos (nom. pl. n.)') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Traduce {plūs fideī}.'),
      answer: 'more faith',
      hint: T('{plūs} es sustantivo neutro, así que el genitivo {fideī} es obligatorio.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El adjetivo concuerda con el sustantivo en género, número y caso, y el orden de ambos es libre.',
      ),
    },
    {
      n: '2',
      text: T(
        'En la tercera declinación solo el neutro tiene forma propia: {-e} en el singular y {-ia} en el plural. El resto coincide con el sustantivo.',
      ),
    },
    {
      n: '3',
      text: T(
        'Los comparativos {melior}, {maior}, {minor} son adjetivos de tercera; {plūs} y {minus} son sustantivos neutros y rigen genitivo.',
      ),
    },
    {
      n: '4',
      text: T(
        'Del numeral 1 al 3: una forma masculina para todos los géneros, una forma femenina propia, y la neutra es la femenina con {-um} cambiado por {-a}.',
      ),
    },
    {
      n: '5',
      text: T(
        '{mīlle} es indeclinable y {mīllia} es neutro plural: los numerales mayores concuerdan con {mīllia}, no con el sustantivo contable.',
      ),
    },
  ],
  notes: [
    {
      label: T('El plural neutro {omnia} es un sustantivo disfrazado.'),
      text: T(
        'En latín arcaico el plural neutro podía hacer de sinónimo de «cosas» y usarse solo, sin sustantivo: {omnia} valía «todas las cosas», {nihil} «nada». La Vulgata hereda ese uso en oraciones litúrgicas ({Omnia, Domine, tradisti terram}, Sal 16:4) y en los libros sapienciales. Vale la pena guardar {omnia} como palabra autónoma: quien lee los Salmos se la encuentra media docena de veces.',
      ),
    },
    {
      label: T('Por qué el latín cuenta por miles.'),
      text: T(
        'Contar de uno en uno en latín es caro: {ūnus}, {duo}, {trēs}, {quattuor}, {quīnque}… Por eso el sistema se agrupa pronto: {decem} diez, {vīgintī} veinte, {trīgintā} treinta, y a partir de {mīlle} el latín salta directo a los miles. Tomando prestado {milliārium} «de miles», el numeral {mīllia} sigue siendo la unidad: {centum mīllia} «cien mil». Quien aprende latín aprende pronto a decir «mucho» con {mīllia} y deja de preocuparse por los números entre 30 y 999.',
      ),
    },
  ],
  examples: [
    { text: 'sapiente opus', gloss: T('una obra sabia (neutro sg.)') },
    { text: 'sapientia opera', gloss: T('obras sabias (neutro pl.)') },
    { text: 'forte opus', gloss: T('obra fuerte — {fortis} da {forte} en el neutro') },
    { text: 'fortia moenia', gloss: T('murallas fuertes (nom. pl. n.)') },
    { text: 'melior', gloss: T('mejor — comparativo de {bonus}') },
    { text: 'maior', gloss: T('mayor, más importante — de {magnus}') },
    { text: 'plūs sapientiae', gloss: T('más sabiduría (sustantivo + genitivo)') },
    { text: 'omnia corpora', gloss: T('todos los cuerpos (nom. pl. n.)') },
    { text: 'Unus Dominus, una fides', gloss: T('un solo Señor, una sola fe (Ef 4:5)') },
    { text: 'decem mīllia hominum', gloss: T('diez mil hombres (concordancia con {mīllia})') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Adjetivos de la tercera declinación: {sapiēns, sapientis}'),
      head: [T('Caso'), T('Masc./fem. sg.'), T('Neutro sg.'), T('Masc./fem. pl.'), T('Neutro pl.')],
      rows: [
        ['Nominativo', 'sapiēns', 'sapiente', 'sapientēs', 'sapientia'],
        ['Vocativo', 'sapiēns', 'sapiente', 'sapientēs', 'sapientia'],
        ['Genitivo', 'sapientis', 'sapientis', 'sapientium', 'sapientium'],
        ['Dativo', 'sapientī', 'sapientī', 'sapientibus', 'sapientibus'],
        ['Acusativo', 'sapientem', 'sapiente', 'sapientēs', 'sapientia'],
        ['Ablativo', 'sapiente', 'sapiente', 'sapientibus', 'sapientibus'],
      ],
    },
    {
      caption: T('Tabla 2 — Numerales cardinales: {ūnus}, {duo}, {trēs}, {mīlle}'),
      head: [T('Número'), T('Masculino'), T('Femenino'), T('Neutro')],
      rows: [
        ['1', 'ūnus', 'ūna', 'ūnum'],
        ['2', 'duo', 'duae', 'duo'],
        ['3', 'trēs', 'trēs', 'tria'],
        ['4', 'quattuor', 'quattuor', 'quattuor'],
        ['5', 'quīnque', 'quīnque', 'quīnque'],
        ['1000', 'mīlle', 'mīlle', 'mīlle'],
        ['2000', 'duo mīllia', 'duo mīllia', 'duo mīllia'],
      ],
    },
  ],
};
