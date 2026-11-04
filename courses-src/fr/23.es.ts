import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Las preposiciones'),
  subtitle: T('{à, de, en, par, pour, dans, sur, chez} — destino, origen, medio, propósito'),
  section: T('Las preposiciones'),
  body: C(`## Qué hace una preposición

Una preposición francesa liga un nombre con un verbo, con otro nombre o con un infinitivo, y el sentido viene del verbo, no de la preposición. {Jean habite {à} Paris} y {Jean pense {à} Paris} usan la misma preposición y dicen cosas distintas: en la primera, {à} es lugar; en la segunda, {à} es el objetivo del pensamiento.

Las preposiciones más productivas del día a día son seis, y se reparten en dos columnas:

| Preposición | Valor principal | Ejemplo | Glosa |
|---|---|---|---|
| {à} | destino, lugar, dirección | {Je vais {à} Lyon} | voy a Lyon |
| {de} | origen, posesión, material | {Il vient {de} Rome} | viene de Roma |
| {en} | lugar, tiempo, medio | {Elle est {en} Italie} | está en Italia |
| {par} | agente, medio, camino | {Par la foi} | por la fe |
| {pour} | finalidad, duración, opinión | {Pour toi} | para ti |
| {avec} | compañía, instrumento | {Avec Dieu} | con Dios |

El truco para no confundir {par} y {pour} es traducir por la **intención**: {par la foi} significa «por la fe», es decir, el medio; {pour la foi} significa «por amor a la fe», es decir, el motivo. Un uso es religioso y el otro no.

## Las contracciones: {au, aux, du, des}

Lo que hace especial a la preposición francesa no es su sentido: es la **fusión**. {à} + {le} da {au}; {à} + {les} da {aux}; {de} + {le} da {du}; {de} + {les} da {des}. Son las mismas preposiciones, solo soldadas al artículo, y el significado no cambia en nada.

| Contracción | Forma larga | Ejemplo | Glosa |
|---|---|---|---|
| {au} | {à + le} | {au marché} | en el mercado |
| {aux} | {à + les} | {aux portes} | en las puertas |
| {du} | {de + le} | {du ciel} | del cielo |
| {des} | {de + les} | {des enfants} | de los niños |

Y hay una regla de sonido que casi lo explica todo: contrae **solo** cuando el artículo es {le} o {les}. Con {la} y {l’} no hay fusión: {à la} ({à la maison}), {de la} ({de la famille}), {à l’} ({à l’église}). Con {lui} y {elles} tampoco: {de lui}, {à elles}.

## Tiempo con {à, en, dans, depuis}

El tiempo es el campo donde el francés más engaña a quien viene del portugués, porque el portugués usa la misma preposición para cosas distintas.

- **{en} + expresión**: {en 1810}, {en été}, {en France}, {en deux minutes}. Es la preposición de tiempo **dentro** de un periodo o de un límite.
- **{à} + expresión**: {à midi}, {à minuit}, {à six heures}, {à Noël}, {à la Pentecôte}. Marca un **instante**, un punto exacto.
- **{dans} + expresión**: {dans une heure}, {dans deux jours}. Marca un **futuro** relativo: dentro de.
- **{depuis} + expresión**: {depuis deux ans}, {depuis ce matin}. Marca **origen temporal**, un punto de partida que sigue vigente.

En una línea: {en} = dentro, {à} = en el punto, {dans} = dentro de, {depuis} = desde.

## Lugar con {dans, sur, sous, chez, devant}

El lugar es el segundo gran campo:

- {dans} — interior: {dans la maison}, {dans la forêt}, {dans la boîte}
- {sur} — superficie, apoyo: {sur la table}, {sur le mur}, {sur l’eau}
- {sous} — debajo, cubierto: {sous l’arbre}, {sous la terre}, {sous la main}
- {chez} — el lugar de una persona, por extensión el ambiente: {chez moi}, {chez le médecin}, {chez les Juifs}
- {devant} / {derrière} — delante y detrás: {devant la maison}, {derrière l’église}

Una prueba rápida: si el nombre es de una persona, usa {chez}. No {à Pierre} para «en casa de Pierre», sino {chez Pierre}. En contextos formales {chez} puede omitirse: {chez le docteur} → {Dr Leblanc}.

## Aplicación: el texto bíblico

El Evangelio de Lucas está hecho enteramente de preposiciones, y cada una es una información. {Au commencement était la Parole} «En el principio era la Palabra» (Jn 1:1): {au} = {à + le}, un lugar abstracto. {La Parole était auprès de Dieu} «la Palabra estaba con Dios» (1:1): {auprès de} = «junto a». {En ce temps-là, Jésus sortit} «En aquel tiempo salió Jesús» (Lc 2:1): {en} = tiempo. {Il alla à la maison de Dieu} «fue a la casa de Dios» (Lc 2:49): {à} más {de}, destino con posesión.

Y el texto repite el par que más importa: {Pour vous et pour beaucoup} «por vosotros y por muchos» (Mt 26:13) — {pour} como finalidad, no como medio. Una traducción descuidada difumina esa distinción, y esa distinción es justo lo que separa {par la foi} de {pour la foi}.`),
  vocab: [
    V('à Paris', 'à', 'en París (lugar)'),
    V('à la maison', 'à', 'a casa (destino; {la} no contrae)'),
    V('de France', 'de', 'de Francia (origen, posesión)'),
    V('au marché', 'à', 'en el mercado ({à + le})'),
    V('du ciel', 'de', 'del cielo ({de + le})'),
    V('aux portes', 'à', 'en las puertas ({à + les})'),
    V('des enfants', 'de', 'de los niños ({de + les})'),
    V('en 1810', 'en', 'en 1810 (tiempo dentro)'),
    V('à midi', 'à', 'al mediodía (instante)'),
    V('dans une heure', 'dans', 'dentro de una hora (futuro relativo)'),
    V('depuis ce matin', 'depuis', 'desde esta mañana (origen temporal)'),
    V('par la foi', 'par', 'por la fe (medio, camino)'),
    V('pour la foi', 'pour', 'por amor a la fe (motivo, finalidad)'),
    V('chez moi', 'chez', 'en mi casa'),
    V('sous l’arbre', 'sous', 'bajo el árbol (cubierto)'),
    V('auprès de Dieu', 'auprès', 'cerca de Dios, con Dios'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «{Je vais à Lyon}» y «{Je pense à Lyon}», ¿qué cambia?'),
    options: [
      T(
        'Nada en la preposición: cambia el verbo que la rige — {aller} da destino, {penser} da la dirección del pensamiento',
      ),
      T('La preposición pasa a {en}, que es la forma de lugar neutro'),
      T('La segunda frase exige un artículo: {à le Lyon}'),
      T('La segunda frase es incorrecta, porque {penser} no admite preposición'),
    ],
    answer: 0,
    hint: T(
      'En francés el sentido de la preposición viene del verbo que la precede, no de ella misma.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Contrae: {à + le marché} →'),
      answer: 'au',
      hint: T('El artículo {le} se fusiona con {à}; con {la} no hay fusión.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la preposición con su valor'),
      pairs: [
        { a: T('à'), b: T('destino, punto exacto: {à six heures}') },
        { a: T('en'), b: T('dentro de un periodo: {en 1810}') },
        { a: T('dans'), b: T('futuro relativo: {dans deux jours}') },
        { a: T('depuis'), b: T('origen temporal: {depuis ce matin}') },
        { a: T('chez'), b: T('lugar de una persona: {chez le médico}') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase usa {pour} con sentido de finalidad y no de medio?'),
      options: [
        T('{Todo está hecho para la gloria de Dios}'),
        T('{Fue salvado por la fe}'),
        T('{Por la fe, los justos vivirán}'),
        T('{Entró por la puerta}'),
      ],
      answer: 0,
      hint: T(
        'Regla §1: {pour} apunta a un fin, {par} a un medio. {par la foi} usa {par} justamente por eso.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{par} introduce **medio, agente o camino**; {pour} introduce **finalidad, duración u opinión**. {Par la foi} = «por la fe» (medio), {pour la foi} = «por amor a la fe» (motivo). Cambiarlos cambia el sentido teológico.',
      ),
    },
    {
      n: '2',
      text: T(
        'Hay contracción solo con {le} y {les}: {à le} = {au}, {à les} = {aux}, {de le} = {du}, {de les} = {des}. Con {la}, {l’}, {lui} y {elles} no hay fusión.',
      ),
    },
    {
      n: '3',
      text: T(
        'En el tiempo, cada preposición marca un valor: {en} = dentro de un periodo, {à} = en un instante, {dans} = en un futuro relativo, {depuis} = a partir de un punto. El portugués necesita menos preposiciones para el mismo trabajo.',
      ),
    },
    {
      n: '4',
      text: T(
        'En el lugar, {dans} es interior, {sur} es superficie, {sous} es debajo o cubierto, y {chez} es el lugar de una persona. La prueba de {chez}: si el nombre es de persona, usa {chez}, nunca {à}.',
      ),
    },
    {
      n: '5',
      text: T(
        'El sentido de la preposición viene del verbo que la rige, no de ella misma: {Je vais à la ville} (destino), {Je pense à la ville} (dirección del pensamiento), {Je viens de la ville} (origen). Tres verbos, tres valores, una preposición cada uno.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué desapareció el latín y también el griego'),
      text: T(
        'El latín tenía un rico sistema de casos que ya codificaba origen, destino, instrumento y tiempo en la propia terminación del sustantivo. El griego tenía cuatro casos. El francés, heredero más fiel de esa lógica, optó por borrar los casos y poner la información en preposiciones, y ahí está el paso: {de} y {à} se convirtieron en las dos preposiciones más fuertes, con decenas de valores cada una. Por eso la misma palabra latina {sub} aparece ora como {sur}, ora como {sous}: el caso latino lo decía, y el francés tiene que preguntar cuál de las dos.',
      ),
    },
    {
      label: T('El texto bíblico es un mapa de preposiciones'),
      text: T(
        'Quien aprende a leer Juan 1 y Lucas 2 aprende, sin darse cuenta, a usar la mitad de las preposiciones del francés. {Au commencement} es {à + le} aplicado al tiempo abstracto. {Auprès de Dieu} es una palabra compuesta, y significa «junto a». {En ce temps-là} es {en} aplicado a un momento. Y {Il alla à la maison de Dieu} apila tres datos en un verbo: {à} (destino), {la maison} (el nombre), {de Dieu} (de quién es la casa). La preposición francesa es tan informativa como la terminación del caso latino: quien sepa latín leerá el Nuevo Testamento en francés casi sin esfuerzo.',
      ),
    },
  ],
  examples: [
    { text: 'Je vais à Lyon.', gloss: T('voy a Lyon ({à} = destino)') },
    { text: 'Il vient de Rome.', gloss: T('viene de Roma ({de} = origen)') },
    { text: 'au marché', gloss: T('en el mercado ({à + le} fusionado)') },
    { text: 'aux portes de la ville', gloss: T('en las puertas de la ciudad ({à + les})') },
    { text: 'du ciel', gloss: T('del cielo ({de + le})') },
    { text: 'en 1810', gloss: T('en 1810 (dentro de un periodo)') },
    { text: 'à la Pentecôte', gloss: T('en Pentecostés ({à} = instante; {la} no contrae)') },
    { text: 'dans deux jours', gloss: T('dentro de dos días (futuro relativo)') },
    { text: 'depuis ce matin', gloss: T('desde esta mañana (origen temporal)') },
    { text: 'chez le médecin', gloss: T('en el médico ({chez} = lugar de persona)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — las contracciones del artículo'),
      head: [T('Preposición'), T('+ {le}'), T('+ {les}'), T('+ {la} / {l’}')],
      rows: [
        ['à', 'au', 'aux', 'à la / à l’'],
        ['de', 'du', 'des', 'de la / de l’'],
        ['pour', 'pour le', 'pour les', 'pour la / pour l’'],
        ['sans', 'sans le', 'sans les', 'sans la / sans l’'],
        ['avec', 'avec le', 'avec les', 'avec la / avec l’'],
      ],
    },
    {
      caption: T('Tabla 2 — tiempo y lugar'),
      head: [T('Valor'), T('Preposición'), T('Ejemplo'), T('Glosa')],
      rows: [
        [T('tiempo dentro de'), 'en', T('{en 1810}'), T('en 1810')],
        [T('instante'), 'à', T('{à minuit}'), T('a medianoche')],
        [T('futuro relativo'), 'dans', T('{dans deux jours}'), T('dentro de dos días')],
        [T('origen temporal'), 'depuis', T('{depuis ce matin}'), T('desde esta mañana')],
        [T('interior'), 'dans', T('{dans la forêt}'), T('en el bosque')],
        [T('superficie'), 'sur', T('{sur la table}'), T('sobre la mesa')],
        [T('lugar de persona'), 'chez', T('{chez le médecin}'), T('en el médico')],
      ],
    },
  ],
};
