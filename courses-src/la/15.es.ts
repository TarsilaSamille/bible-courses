import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('Demostrativos y el pronombre relativo'),
  subtitle: T(
    '{hic, iste, ille, ipse}; {quī, quae, quod} — el dedo que señala y la bisagra de la oración',
  ),
  section: T('Pronombres y sintaxis de la oración'),
  body: C(`## La mano que señala

El latín tiene tres palabras para decir «este», y la elección entre ellas es geográfica y emocional. {hic} es lo que está **cerca del que habla**: {hic liber} «este libro» muestra un libro en la mano del orador. {iste} es lo que está **cerca del que escucha**: {iste liber} «ese libro tuyo» es el libro en las manos del interlocutor. {ille} es lo que está **lejos de ambos**: {ille liber} «aquel libro» señala al fondo de la sala.

{ipse} añade un capa: significa «el mismo», «el propio».Puesto sobre un pronombre lo refuerza, y sobre un nombre lo intensifica: {ipsa verba} «las mismas palabras», e {ipse Dominus} «el Señor mismo», en una frase de Polibio que se volvió proverbio.

Los tres se declinan en {-ius} en el genitivo y {-ī} en el dativo:

| Pronombre | Valor | Nom. sg. | Gen. sg. | Dat. sg. | Ac. sg. |
|---|---|---|---|---|---|
| hic, haec, hoc | este, cerca de mí | hic | huius | huic | hoc |
| iste, ista, istud | ese, cerca de ti | iste | istius | istī | istud |
| ille, illa, illud | aquel, lejos | ille | illius | illī | illud |
| ipse, ipsa, ipsum | el mismo | ipse | ipsius | ipsī | ipsum |

El plural regular sigue en {-ī}: {hī}, {istae}, {illī}, {ipsī}. Fíjate en una asimetría que solo tiene el latín: los demostrativos absorbieron el posesivo en el genitivo — {huius} «suyo», {istius} «tuyo», {illius} «suyo». En portugués y español esa función pertenece al artículo; en latín, al genitivo.

## El demostrativo débil: {eius, ea, eius}

{Is, ea, id} es el demostrativo de tercera persona: {is puer} «aquel niño», {ea puella} «aquella niña», {id verbum} «aquella palabra». Usado solo, el latín lo traduce por «él»:

{Erus mihi, quod unum habeo} «mi marido, que es lo único que tengo» (Ecl 9:9) — el antecedente de {quod} no es visible, pero el verbo {habeō} muestra que es masculino.

Y el genitivo {eius} es tan común que casi se volvió pronombre: {eius} significa «suyo», «de ella», «de eso» con sustantivo implícito. {Amicus {eius}} «su amigo» se traduce literalmente «el amigo de aquel».

## El relativo: {quī, quae, quod}

El pronombre relativo hace tres cosas a la vez: une dos oraciones, funciona como pronombre dentro de la suya, y concuerda con su antecedente en género y número. Tiene formas de primera y segunda declinación, con una serie de formas que no repiten nada:

| Caso | Masculino | Femenino | Neutro | Plural (todos los géneros) |
|---|---|---|---|---|
| Nom. | quī | quae | quod | quī |
| Gen. | cuiŭs | cuiŭs | cuiŭs | quōrum |
| Dat. | cuiī | cuiī | cuiī | quibus |
| Ac. | quem | quam | quod | quōs |
| Abl. | quō | quā | quō | quibus |

El genitivo {cuiŭs} y el dativo {cuiī} son los verdaderamente distintivos: no hay {quīus} ni {queī}, y la Vulgata los repite tal cual. El dativo y el ablativo plural son {quibus} para todos los géneros — {quibus hominibus} «a ciertos hombres», {quibus de rebus} «acerca de ciertas cosas».

## Dos reglas, y resuelven casi todo

**Primera regla: el relativo concuerda con su antecedente en género y número; el caso es suyo.**

{Mulier quam {vīdī}} «la mujer que vi» — el antecedente {mulier} es femenino, así que el relativo es {quam}; y como {quam} es acusativo, el relativo es objeto de {vīdī}. Cambiar el objeto por el sujeto cambia el caso: {Mulier quae me {vīdit}} «la mujer que me vio».

{Liber, quem amat, est bonus} «el libro que él ama es bueno» — el antecedente {liber} es masculino, el relativo repite {quem} en acusativo por causa de {amat}, y el caso no coincide con nada. Esa es la libertad que asusta a los principiantes: los dos no necesitan coincidir en caso.

**Segunda regla: el relativo se engancha al sustantivo compatible más cercano, y el resto de la oración pertenece al relativo.**

{Uxorem {cuius} patrem vīdī} «la mujer cuyo padre vi» — el genitivo {cuius} rige {patrem}, y el acusativo {vīdī} se queda con el verbo. Fíjate en que la oración lleva {vīdī} «vi» y no {vīdit} «vio»: el relativo arrastra consigo la primera persona.

El relativo en genitivo es tan productivo que la Vulgata lo usa en expresiones fijas: {cuius est} «de quién es», {cuius honor} «cuya honra», {in cuius potestāte est} «está bajo el poder de quien».

## Lectura

{Ecce {agnus Dei} — o {Ecce {agnus Dei, qui {tollit} peccata mundi}} «He aquí el Cordero de Dios, que quita el pecado del mundo» (Jn 1:29) — el relativo {qui} repite el género masculino de {agnus}, y su acusativo {tollit} es objeto del verbo. Toda la segunda oración, {qui tollit peccata mundi}, es lo que se puede borrar: la escena de Juan funciona sin el relativo.

{Unus {ex} vobis} «uno de vosotros» — {ex} más el genitivo {vobīs} «de vosotros» es la fórmula de elección, y {ex} más ablativo es procedencia: {ex {Domīnō}} «del Señor».

{Veni, vidi, vici} «vine, vi, vencí» — la raíz del estilo latino, con la relación implícita en todas las oraciones: «vine [y vi que el enemigo estaba allí]».

{Ego sum via, veritas et vita} — {via}, {veritās}, {vita} son tres sustantivos que pueden leerse como tres relativos sin antecedente: «el camino que lleva, la verdad que libera, la vida que da».

## Lo esencial

Los demostrativos organizan el espacio y la distancia: {hic} cerca de mí, {iste} cerca de ti, {ille} lejos, {ipse} «el mismo». El relativo {quī, quae, quod} une oraciones, y su única regla es doble: concuerda en género y número con el antecedente, pero conserva el caso que le exige su propia sintaxis. El género y el número vienen del sustantivo; el caso viene del verbo.`),
  vocab: [
    V('hic', 'hic', 'este (cerca de mí)'),
    V('haec', 'hic', 'esta (f.)'),
    V('hoc', 'hic', 'esto, este (n.)'),
    V('iste', 'iste', 'ese (cerca de ti)'),
    V('ille', 'ille', 'aquel, lejano'),
    V('ipse', 'ipse', 'el mismo, él mismo'),
    V('ipsum', 'ipse', 'lo mismo (n.)'),
    V('huius', 'hic', 'de este (gen. sg.)'),
    V('illius', 'ille', 'de aquel, suyo (gen. sg.)'),
    V('eius', 'is', 'suyo, de ella, de eso'),
    V('is', 'is', 'él (pronominal), ese'),
    V('quī', 'qui', 'que (nom. sg. m.)'),
    V('cuius', 'qui', 'cuyo, de quién'),
    V('cuī', 'qui', 'a quién, para quién'),
    V('quem', 'qui', 'que (ac. sg. m.)'),
    V('quibus', 'qui', 'a quién, de quién (dat./abl. pl.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Mulier quam vīdī}, ¿qué determina el caso de {quam}?'),
    options: [
      T('Su función dentro de la oración de relativo: {quam} es objeto de {vīdī}'),
      T('El caso del antecedente {mulier}, que es genitivo'),
      T('El número: {quam} es plural'),
      T('Una preposición implícita {cum}'),
    ],
    answer: 0,
    hint: T('Regla §2: el relativo concuerda en género y número, no en caso.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Genitivo singular de {quī}: cui_ _'),
      answer: 'us',
      hint: T('La forma es {cuius}, para todos los géneros.'),
    },
    {
      kind: 'choose',
      prompt: T(
        'En {Estote prudentes sicut serpentes et simplices sicut columbae}, {simplices} es:',
      ),
      options: [
        T('Un adjetivo sustantivado, con {prudentēs} en el mismo caso y género'),
        T('Un pronombre relativo sin antecedente'),
        T('Un comparativo de {simplus}'),
        T('Un numeral cardinal'),
      ],
      answer: 0,
      hint: T(
        '{simplicēs} es un adjetivo; los adjetivos neutros plurales se usan como sustantivo.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el pronombre con su valor'),
      pairs: [
        { a: T('hic liber'), b: T('este libro (el que tengo en la mano)') },
        { a: T('iste liber'), b: T('ese libro (el que tienes tú en la mano)') },
        { a: T('ille liber'), b: T('aquel libro (lejos de ambos)') },
        { a: T('ipse Dominus'), b: T('el Señor mismo, enfático') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Genitivo relativo de {frūctus}: ___ meus'),
      answer: 'cuius',
      hint: T('El genitivo relativo es {cuius} para todos los géneros.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{hic} se queda cerca del que habla, {iste} cerca del que escucha, {ille} lejos de ambos; {ipse} añade «el mismo».',
      ),
    },
    {
      n: '2',
      text: T(
        'El relativo concuerda con su antecedente en género y número, pero el caso lo determina su propia función en la oración.',
      ),
    },
    {
      n: '3',
      text: T(
        '{cuius} (genitivo) y {cuī} (dativo) son las formas más distintivas del latín: no tienen parangón en ningún otro pronombre.',
      ),
    },
    {
      n: '4',
      text: T(
        'El dativo y el ablativo plural del relativo son {quibus} para todos los géneros: {quibus hominibus} «a ciertos hombres».',
      ),
    },
    {
      n: '5',
      text: T(
        'La oración introducida por {quod} nunca lleva antecedente expreso: es el contenido de la oración principal.',
      ),
    },
  ],
  notes: [
    {
      label: T('El genitivo absorbió el posesivo.'),
      text: T(
        'En portugués y español el posesivo es una palabra: «mío», «tuyo», «suyo». En latín no hay palabra para eso: para decir «el padre **suyo**» escribes {pater {eius}} o {pater {huius}}, con un genitivo que puede ser cualquier demostrativo. De ahí la frecuencia de {eius} en la Vulgata: {dilectus meus} y {dilectus meus et {dilecta mea}} (Cant 1:1) revelan el origen de la forma romance «dile-t-o» — el latín tenía un genitivo posesivo que se volvió pronombre.',
      ),
    },
    {
      label: T('El relativo es la bisagra de la oración.'),
      text: T(
        'El egipcio y las lenguas semíticas marcan las relaciones con partículas: «yo **que** voy», «la casa **en que** vivo». El latín hace lo mismo con un pronombre que funciona como sustantivo. La consecuencia práctica es que **puedes borrar cualquier oración de relativo sin romper el sentido esencial**: {Ecce agnus Dei} y {Ecce agnus Dei qui tollit peccata mundi} dicen lo mismo. Por eso los textos bíblicos cortos, los refranes y las oraciones litúrgicas alternan las dos formas — y por eso el relativo es tan fácil de reconocer al leer: ves {qui} o {quae} y ya sabes que hay una oración escondida al otro lado.',
      ),
    },
  ],
  examples: [
    { text: 'hic liber', gloss: T('este libro (el que tengo)') },
    { text: 'iste liber', gloss: T('ese libro (el que tienes tú)') },
    { text: 'ille liber', gloss: T('aquel libro (lejano)') },
    { text: 'ipse Dominus', gloss: T('el Señor mismo (énfasis)') },
    { text: 'pater eius', gloss: T('su padre (genitivo posesivo)') },
    { text: 'Mulier quam vīdī', gloss: T('la mujer que vi (relativo = objeto)') },
    { text: 'Mulier quae me vīdit', gloss: T('la mujer que me vio (relativo = sujeto)') },
    { text: 'Uxorem cuius patrem vīdī', gloss: T('la mujer cuyo padre vi (genitivo relativo)') },
    { text: 'Ecce agnus Dei', gloss: T('«He aquí el Cordero de Dios» (Jn 1:29)') },
    { text: 'Unus ex vobis', gloss: T('uno de vosotros ({ex} más genitivo)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Los cuatro demostrativos: {hic}, {iste}, {ille}, {ipse}'),
      head: [
        T('Caso'),
        T('hic, haec, hoc'),
        T('iste, ista, istud'),
        T('ille, illa, illud'),
        T('ipse, ipsa, ipsum'),
      ],
      rows: [
        [
          'Nominativo sg.',
          'hic, haec, hoc',
          'iste, ista, istud',
          'ille, illa, illud',
          'ipse, ipsa, ipsum',
        ],
        ['Genitivo sg.', 'huius', 'istius', 'illius', 'ipsius'],
        ['Dativo sg.', 'huic', 'istī', 'illī', 'ipsī'],
        ['Acusativo sg.', 'hoc', 'istud', 'illud', 'ipsum'],
        ['Ablativo sg.', 'hōc', 'istō', 'illō', 'ipsō'],
        ['Nominativo pl.', 'hī', 'istae', 'illī', 'ipsī'],
        ['Genitivo pl.', 'hōrum', 'istōrum', 'illōrum', 'ipsōrum'],
        ['Dativo/Ablativo pl.', 'hīs', 'istīs', 'illīs', 'ipsīs'],
      ],
    },
    {
      caption: T('Tabla 2 — El relativo {quī, quae, quod}'),
      head: [T('Caso'), T('Masc.'), T('Fem.'), T('Neutro'), T('Plural (todos)')],
      rows: [
        ['Nominativo', 'quī', 'quae', 'quod', 'quī'],
        ['Genitivo', 'cuius', 'cuius', 'cuius', 'quōrum'],
        ['Dativo', 'cuī', 'cuī', 'cuī', 'quibus'],
        ['Acusativo', 'quem', 'quam', 'quod', 'quōs'],
        ['Ablativo', 'quō', 'quā', 'quō', 'quibus'],
      ],
    },
  ],
};
