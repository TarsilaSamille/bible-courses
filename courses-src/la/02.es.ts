import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('La primera declinación'),
  subtitle: T('{puella, puellae} — seis formas, seis funciones'),
  section: T('Declinaciones y el verbo sum'),
  body: C(`## El tema en -a

Casi todo sustantivo femenino latino termina en {a}: {puella} «niña», {rosa} «rosa», {via} «camino», {tabula} «tablilla», {família} «familia». Esta declinación es la más fácil y la más frecuente, y por eso es la primera de cualquier método.

El tema es la raíz más la {a} del nominativo: de {puella} el tema es {puellā-}. Encajas sobre ese tema las terminaciones de caso y número:

| Número | Caso | Terminación | Forma |
|---|---|---|---|
| singular | nominativo | -a | puellă |
| singular | vocativo | -a | puellă |
| singular | genitivo | -ae | puellāe |
| singular | dativo | -ae | puellāe |
| singular | acusativo | -am | puellām |
| singular | ablativo | -ā | puellā |

El guion marca la vocal larga: en {puellām} la {a} es larga y el acento se apoya en ella.

## El plural

El plural cambia {a} por {ae} y alarga con {i} los temas breves: {puellae} «niñas», {viae} «caminos», {tabulae} «tablillas». En los femeninos de primera el acusativo plural termina en {ās}: {puellās} «las niñas» — la misma terminación que el acusativo singular, más la s.

Fíjate en un detalle que ahorra mucho trabajo: genitivo y dativo son **idénticos** en toda la declinación, {ae} en singular e {īs} en plural. El contexto decide cuál es cuál.

## Cómo elige el contexto el caso

- Genitivo: posesión o relación — la rosa {puellae ROSAE} «de la niña».
- Dativo: destinatario — {puellae ROSAM dat} «da la rosa a la niña».
- Acusativo: objeto directo — {puellam rosam amat} «la niña ama la rosa».
- Ablativo: medio, lugar, agente — {rosā puer amat} «el niño ama con la rosa».

Acusativo y ablativo son las dos puertas del verbo: elige el sentido y el caso sale solo.

## Ejercicio de lectura

En la Vulgata de Lucas, el cántico de {maria} (Lucas 1:46) repite el mismo sustantivo con casos distintos:

{Et magnificat anima mea Dominum} «Y-mi alma magnifica al Señor» — {anima} es nominativo, sujeto.
{Et exsultavit spiritus meus in Deo salutari meo} «y mi espíritu se regocijó en Dios, mi salvador» — {Deo} es ablativo de lugar sin {in}.
{Quia respexit humilitatem ancillae suae} «porque miró la humildad de su sierva» — {humilitatem} es acusativo, regido por {respexit} «miró».`),
  vocab: [
    V('puella', 'puella', 'niña'),
    V('rosa', 'rosa', 'rosa'),
    V('via', 'via', 'camino, vía'),
    V('tabula', 'tabula', 'tablilla, documento'),
    V('porta', 'porta', 'puerta'),
    V('aqua', 'aqua', 'agua'),
    V('terra', 'terra', 'tierra'),
    V('familia', 'familia', 'familia'),
    V('provincia', 'provincia', 'provincia'),
    V('schola', 'schola', 'escuela'),
    V('stella', 'stella', 'estrella'),
    V('luna', 'luna', 'luna'),
    V('amica', 'amica', 'amiga'),
    V('anima', 'anima', 'alma'),
    V('maria', 'maria', 'María (del Magnificat)'),
    V('ancilla', 'ancilla', 'sierva'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {puellās}, ¿qué caso es y por qué?'),
    options: [
      T('Genitivo plural: termina en -ās'),
      T('Acusativo plural: -ās es el acusativo plural de la primera'),
      T('Dativo plural: -īs'),
      T('Ablativo plural: -īs'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Genitivo singular de {via}: via_'),
      answer: 'viae',
      hint: T('Genitivo y dativo son idénticos: -ae.'),
    },
    {
      kind: 'choose',
      prompt: T('En {puellae rosam dat}, ¿qué función tiene {puellae}?'),
      options: [
        T('Genitivo: posesión'),
        T('Dativo: destinatario'),
        T('Acusativo: objeto directo'),
        T('Ablativo: medio'),
      ],
      answer: 1,
      hint: T('Regla §3: el destinatario lleva dativo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona {tabula} con su caso correspondiente'),
      pairs: [
        { a: T('tabulam'), b: T('acusativo singular') },
        { a: T('tabula (liber est bonus)'), b: T('nominativo singular') },
        { a: T('o tabula, audi me'), b: T('vocativo singular (también -a)') },
        { a: T('tabularum'), b: T('genitivo plural') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('La primera declinación reúne los femeninos en -a; el tema es la raíz más {ā}.'),
    },
    {
      n: '2',
      text: T(
        'Genitivo y dativo tienen la misma forma en toda la declinación: {ae} en singular, {īs} en plural.',
      ),
    },
    {
      n: '3',
      text: T(
        'Acusativo plural {-ās} y ablativo plural {-īs} son las dos puertas del verbo: objeto directo por un lado, medio por otro.',
      ),
    },
    {
      n: '4',
      text: T(
        'El acusativo singular {-am} separa el objeto del ablativo singular {-ā}: el guion es la única prueba.',
      ),
    },
    { n: '5', text: T('Nominativo y vocativo coinciden en -a; solo el contexto los separa.') },
  ],
  notes: [
    {
      label: T('Barra latina:'),
      text: T(
        'Los textos de la Vulgata vienen impresos sin ninguna barra. Aquí están para que veas la vocal larga; si una palabra aparece sin barra en pantalla, el sonido es el mismo. Quien escribe latín hoy suele dejarlas todas fuera para no triplicar el teclado.',
      ),
    },
    {
      label: T('Lengua aislante:'),
      text: T(
        '{Puella pulchra rosam habet}: la niña hermosa tiene una rosa. En português se diría «la niña tiene una rosa hermosa» — el adjetivo cambia de sitio según el sustantivo que modifica. El orden latín es más suelto, y es la **concordancia**, no la posición, lo que ata el adjetivo a su sustantivo.',
      ),
    },
  ],
  examples: [
    { text: 'puella', gloss: T('la niña (nom. singular)') },
    { text: 'puellae', gloss: T('de la niña, o a la niña (gen./dat. singular)') },
    { text: 'puellam', gloss: T('a la niña (acus. singular)') },
    { text: 'puellā', gloss: T('por la niña, con la niña (abl. singular)') },
    { text: 'puellarum', gloss: T('de las niñas (gen. plural)') },
    { text: 'puellis', gloss: T('a las niñas, con las niñas (dat./abl. plural)') },
    { text: 'rosa', gloss: T('rosa') },
    { text: 'rosam', gloss: T('la rosa (objeto)') },
    { text: 'via', gloss: T('camino (nom.), «camino de vida»') },
    { text: 'ancilla', gloss: T('sierva — en Lucas 1:48 María se dice {ancilla}') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Primera declinación: {puella, -ae}'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        ['Nominativo', 'puellă', 'puellae'],
        ['Vocativo', 'puellă', 'puellae'],
        ['Genitivo', 'puellāe', 'puellārum'],
        ['Dativo', 'puellāe', 'puellīs'],
        ['Acusativo', 'puellām', 'puellās'],
        ['Ablativo', 'puellā', 'puellīs'],
      ],
    },
    {
      caption: T('Tabla 2 — Otros temas de la primera: qué cambia'),
      head: [T('Nom. sing.'), T('Gen. sing.'), T('Abl. sing.'), T('Observación')],
      rows: [
        ['rosa', 'rosae', 'rosā', T('breve, sin {i} en plural')],
        ['via', 'viae', 'viā', T('igual')],
        ['tabula', 'tabulae', 'tabulā', T('con {i}: {tabulīs}')],
        ['familia', 'familiae', 'familiā', T('la {i} es breve: {familiaris}')],
      ],
    },
  ],
};
