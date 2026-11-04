import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('El perfecto y sus irregularidades'),
  subtitle: T('{amāvit, fēcit, dīxit} — el tiempo que cuenta desde el final'),
  section: T('Verbos, tiempos y primeros textos'),
  body: C(`## Qué significa el perfecto

En portugués el perfecto sirve para dos cosas: el pasado ({amé}) y el presente ({ya amé}). El latín, que tiene más tiempos, separa las dos ideas:

- El **imperfecto** muestra la acción desde dentro, en curso: {amābat} «amaba»;
- El **perfecto** muestra la acción entera, vista desde su final: {amāvit} «amó».

La imagen es la de una línea recorrida hasta el final: a partir de {amāvit} sabes que {amāre} ocurrió. La Vulgata usa el perfecto sin parar para narrar hechos, y por eso el Génesis en latín suena seco y vigoroso: {In principio creavit Deus caelum et terram}.

## El tema del perfecto

El perfecto tiene un **tema propio** (el supino), que no aparece en ninguna otra forma. Para {amāre} el tema es {amātum}; para {facere}, {factum}; para {dīcere}, {dīctum}. El presente nunca muestra ese tema — solo el tercer singular y el tercer plural, y el participio.

Las terminaciones del perfecto son propias y no se confunden con las de nada más:

| Persona | Terminación | {amāre} | {facere} |
|---|---|---|---|
| 1.ª sing. | -ī | amāvī | fēcī |
| 2.ª sing. | -istī | amāvistī | fēcistī |
| 3.ª sing. | -it | amāvit | fēcit |
| 1.ª pl. | -imus | amāvimus | fēcimus |
| 2.ª pl. | -istis | amāvistis | fēcistis |
| 3.ª pl. | -ērunt | amāvērunt | fēcērunt |

El tercer plural es {ērunt} o {-ēre}: la Vulgata prefiere casi siempre {ērunt}, más fácil de decir y de escribir.

## Los verbos que rompen el patrón

Muchos verbos, muy frecuentes, no forman el perfecto a partir del tema del supino. Son los **irregulares del perfecto**, y valen más que el patrón:

| Infinitivo | Perfecto | Nota |
|---|---|---|
| facere | fēcī | {i} larga; el verbo más común del latín |
| dīcere | dīxī | {x} en lugar de {ct} |
| scrībere | scrīpsī | {ps} en lugar de {pt} |
| legere | lēgī | {i} larga, sin {c} |
| capere | cēpī | {i} larga, sin {c} |
| dare | dedī | {d} duplicada |

Fíjate en que casi todos los irregulares tienen {ī} larga en la primera del singular — {fēcī}, {dīxī}, {lēgī}, {cēpī}, {dedī}. Eso es lo que permite reconocerlos a distancia. La única excepción es {bibī} «bebí», donde la vocal ya es larga.

## El más que pluscuamperfecto

Si el perfecto ya mira al final, el **más-que-perfecto** ({fuerat}) mira a un momento anterior a ese final: «había sido hecho» antes de que ocurriera otra cosa. Se forma con el **participio de perfecto** más {erat}:

{Mundus ante omnia factus {erat}} «El mundo había sido creado antes que todas las cosas»;
{Quod {erat} ab initio, quod {audimus} a vobis} «lo que era desde el principio, lo que hemos oído de vosotros» (1 Juan 1:1).

Fíjate en el par de {1 Juan 1:1}: el latín traduce el griego περὶ οὗ ἀκηκόαμεν con {quod erat} más el verbo {audire} en perfecto, y el resultado es una frase que suena rara en portugués y es impecable en latín.`),
  vocab: [
    V('amavit', 'amo', 'amó'),
    V('fecit', 'facio', 'hizo'),
    V('dixit', 'dico', 'dijo'),
    V('scripsit', 'scribo', 'escribió'),
    V('legit', 'lego', 'leyó; también eligió'),
    V('vixit', 'vivo', 'vivió'),
    V('cepit', 'capio', 'tomó'),
    V('bibit', 'bibo', 'bebió'),
    V('fuit', 'sum', 'fue (perfecto irregular de sum)'),
    V('erat', 'sum', 'era (imperfecto)'),
    V('fuerat', 'sum', 'había sido (más-que-perfecto)'),
    V('factus', 'facio', 'hecho (participio de facio)'),
    V('creavit', 'creo', 'creó'),
    V('missus', 'mitto', 'enviado (participio de mitto)'),
    V('vidit', 'video', 'vio'),
    V('audivit', 'audio', 'oyó'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'En {In principio creavit Deus caelum et terram}, ¿qué sugiere el perfecto {creavit} que NO es?',
    ),
    options: [
      T('Que la creación sigue en curso ahora'),
      T('Que la creación fue un evento con principio y fin definidos'),
      T('Que la creación aún no ha ocurrido'),
      T('Que la creación se hizo con un propósito'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Por qué {fēcī}, {dīxī}, {lēgī} y {cēpī} son fáciles de reconocer?'),
      options: [
        T('Todos tienen {i} larga en la primera del singular'),
        T('Todos terminan en {ct}'),
        T('Todos tienen {s} en el supino'),
        T('Todos pertenecen a la segunda conjugación'),
      ],
      answer: 0,
      hint: T('Regla §3.'),
    },
    {
      kind: 'fill',
      prompt: T('Tercera persona del plural del perfecto de {facere}: feci_ _'),
      answer: 'fecerunt',
      hint: T('La Vulgata prefiere la terminación {-ērunt} a {-ēre}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con su tiempo'),
      pairs: [
        { a: T('amābat'), b: T('imperfecto: acción en curso') },
        { a: T('amāvit'), b: T('perfecto: acción entera') },
        { a: T('factus erat'), b: T('más-que-perfecto pasivo: «había sido hecho»') },
        { a: T('fuit'), b: T('perfecto irregular de {sum}: «fue»') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El perfecto muestra la acción entera vista desde su final; el imperfecto, la acción vista desde dentro.',
      ),
    },
    {
      n: '2',
      text: T(
        'El supino es el tema exclusivo del perfecto: solo aparece en el 3.ª sing./pl. y en el participio.',
      ),
    },
    {
      n: '3',
      text: T(
        'Los perfectos irregulares tienen casi siempre {ī} larga en la primera del singular: {fēcī}, {lēgī}, {cēpī}.',
      ),
    },
    {
      n: '4',
      text: T(
        'El más-que-perfecto es {participio de perfecto} + {erat}, nunca una terminación propia.',
      ),
    },
    {
      n: '5',
      text: T(
        'La Vulgata prefiere {-ērunt} a {-ēre} en el tercer plural: más fácil de escribir y de pronunciar.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué el latín tiene tantos tiempos:'),
      text: T(
        'El latín no distingue tiempo (cuándo) de aspecto (cómo). Codifica la **relación del período narrado con el punto de vista**. Un hablante griego tropieza al traducir, y Jerónimo improvisa: a veces escribe {ērunt} por {ēre}, otras veces deja hablar al griego. El resultado es un latín más rico y algo más irregular que el griego.',
      ),
    },
    {
      label: T('El supino en español:'),
      text: T(
        'El supino está vivo en portugués ({vi, viu, vista}) y prácticamente muerto en español. En latín es la pieza central del perfecto: sin él, {amāre} y {amātum} no tendrían vínculo visible, y el perfecto {amāvit} parecería arbitrario.',
      ),
    },
  ],
  examples: [
    { text: 'amavit', gloss: T('amó (perfecto)') },
    { text: 'fecit', gloss: T('hizo — {i} larga irregular') },
    { text: 'dixit', gloss: T('dijo — {x} por {ct}') },
    { text: 'legit', gloss: T('leyó; también «eligió»') },
    { text: 'vixit', gloss: T('vivió') },
    { text: 'fuit', gloss: T('fue — {fuit} de {sum}') },
    { text: 'fuerat', gloss: T('había sido (más-que-perfecto)') },
    { text: 'factus', gloss: T('hecho — {fact-} + sufijo {-us}') },
    { text: 'creavit', gloss: T('creó — Génesis 1:1') },
    {
      text: 'In principio creavit Deus caelum et terram',
      gloss: T('«En el principio creó Dios el cielo y la tierra»'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — El sistema del perfecto: indicativo, futuro y perfecto del supino'),
      head: [T('Persona'), T('Perfecto'), T('Fut. perf. (o futuro antiguo)'), T('Supino')],
      rows: [
        [T('1.ª sing.'), 'amāvī', 'amāverō', 'amātum'],
        [T('2.ª sing.'), 'amāvistī', 'amāveris', 'amātūrum'],
        [T('3.ª sing.'), 'amāvit', 'amāverit', '—'],
        [T('1.ª pl.'), 'amāvimus', 'amāverimus', '—'],
        [T('2.ª pl.'), 'amāvistis', 'amāveritis', '—'],
        [T('3.ª pl.'), 'amāvērunt', 'amāverint', '—'],
      ],
    },
    {
      caption: T('Tabla 2 — Verbos con perfecto irregular'),
      head: [T('Infinitivo'), T('1.ª sing.'), T('3.ª sing.'), T('Participio')],
      rows: [
        ['facere', 'fēcī', 'fēcit', 'factus'],
        ['dīcere', 'dīxī', 'dīxit', 'dīctus'],
        ['scrībere', 'scrīpsī', 'scrīpsit', 'scrīptus'],
        ['legere', 'lēgī', 'lēgit', 'lēctus'],
        ['capere', 'cēpī', 'cēpit', 'captus'],
        ['dare', 'dedī', 'dedit', 'datus'],
        ['bibere', 'bibī', 'bibit', 'bībitus'],
        ['vīvere', 'vīxī', 'vīxit', 'vīctus'],
      ],
    },
  ],
};
