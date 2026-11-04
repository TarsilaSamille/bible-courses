import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('El sistema pasivo'),
  subtitle: T('{amatur, amābātur, amātus est} — quién actúa, quién sufre y cómo lo dice el latín'),
  section: T('Verbos, tiempos y primeros textos'),
  body: C(`## El verbo que cambia de voz

Cada verbo latín tiene dos voces, y no son un adorno: son dos maneras de mirar la misma acción. En el **activo**, el sujeto actúa: {Deus creavit caelum}. En el **pasivo**, el sujeto experimenta la acción: {caelum {creātus est} a {Deō}} «el cielo fue creado por Dios». Fíjate en que las dos frases dicen lo mismo y en que la información cambia de sitio: en el activo el agente es el sujeto; en el pasivo el agente pasa a una expresión con preposición y ablativo, y quien ocupa el banquillo del sujeto es la cosa que sufre el proceso.

Esa inversión no es adorno. Es la máquina que permite hablar de lo que **sufrió** en lugar de lo que **hizo** — y eso es lo que permite contar una historia, porque la historia del Nuevo Testamento es en buena parte la historia de lo que fue asesinado,apresado, entregado y resucitado.

## El presente pasivo

En la primera conjugación, el presente pasivo cambia las terminaciones activas por formas en {-r} con la vocal temática alargada:

| Persona | Activo | Pasivo |
|---|---|---|
| 1.ª sing. | amō | amor |
| 2.ª sing. | amās | amāris |
| 3.ª sing. | amat | amātur |
| 1.ª pl. | amāmus | amāmur |
| 2.ª pl. | amātis | amāminī |
| 3.ª pl. | amant | amantur |

El mecanismo es elegantemente económico: las cuatro terminaciones pasivas {-r, -ris, -tur, -mur, -minī, -ntur} sirven para **las cuatro conjugaciones**. {monētur} «es aconsejado» y {regitur} «es gobernado» tienen exactamente el mismo {-tur}. La segunda del plural tiene dos formas, {amāminī} y {amātor} «sed amados», y la Vulgata prefiere la primera.

## Los demás tiempos del sistema

El resto del pasivo se construye con dos sufijos nuevos, y la regla es la misma para los cuatro tiempos principales:

- **Imperfecto**: {amābar} — la vocal temática más {-bar};
- **Futuro**: {amābor} — la vocal temática más {-bor}, y el futuro activo correspondiente es {amābo};
- **Perfecto**: {amātus sum} — el **participio de perfecto** más {sum};
- **Más-que-perfecto**: {amātus eram} — el mismo participio más {eram}.

El {sum} es la pieza clave y merece atención. {Amātus est} es el mismo verbo {sum} que conociste en el capítulo 2: {est} es el verbo *ser* en presente, {erant} es *ser* en imperfecto. El latín no tiene un auxiliar aparte para el pasivo — **toma prestado el verbo {sum}** y pone el participio delante. La segunda persona del plural del futuro del mismo sistema es {amāminī} «seréis amados», con el {minī} que ya era de la voz pasiva.

## El agente: {ā} y {ab}

En el pasivo, quien hace la acción casi nunca es el sujeto, porque el sujeto es precisamente quien la sufre. El agente personal entra por una preposición asimilada: {ā}, que se vuelve {ab} ante consonante — {ā {Deō}} «por Dios», {ab {hūmānīs}} «por los hombres», {ab {Iūdae}} «por los judíos», {ab {Apollōne}} «por Apolo». En latín cristiano esta construcción es tan común que aparece en casi toda narración:

{Natus est {Iesus} in {Bethleēhem} Iudaeae} «Jesús nació en Belén de Judea» (Mt 2:1) — la preposición {in} con lugar, el genitivo {Iudaeae} como «de Judea».

{Traditus est {traditoribus} suīs} «fue entregado a sus propios traidores» (Mt 26:4) — el agente ({traditoribus}, con {ā} absorbido en la palabra) y el sustantivo de base {traditōres} «traidores».

Lo que {ā} **no** hace es llevar instrumento ni medio. Eso es ablativo a secas, sin preposición: {gladiō {occīsus est}} «fue muerto con una espada», {vēlīs {ventīs est}} «fue empujado con remos», {sermōne {falsus est}} «fue engañado con palabras». La distinción es ritual y no es decorativa: en una oración litúrgica es común repetir que la crucifixión fue obra de un poder humano y de un poder divino, cada uno con su preposición.

## Deponentes: la forma miente

Muchos verbos tienen **forma pasiva y sentido activo**. Son los depoentes, y ya los has visto: {loquor, loquor, locūtus sum} «hablar», {nascor, nascis, nātus sum} «nacer», {mŏror, mŏris, mortuus sum} «morir», {fruor, fruis, frūctus sum} «disfrutar de», {orior, oris, ortus sum} «levantarse».

El punto crucial es el **participio**: en los depoentes, el participio es **siempre activo**. {Nātus est} significa «nació», nunca «fue nacido por alguien». Por eso la frase {Natus est {Christus}} (Mt 1:1) no necesita agente: si el latín quisiera decir «fue engendrado por Dios» escribiría {genitus est a {Deō}}.

## El pasivo es más común de lo que parece

Antes de los ejemplos, un dato: en el latín del Nuevo Testamento, uno de cada cuatro verbos está en voz pasiva. Eso no es gusto bizantino — es la herencia griega, y la Vulgata a menudo **aumenta** la cifra, porque el griego ya usaba el pasivo por convención y Jerónimo lo sigue. En {Ego sum via, veritas et vita} no hay pasivo, pero en {Nemo videt Deum} «nadie ve a Dios» el verbo está en pasivo.

Vale la pena notar además que el latín distingue el **pasivo de estado** del **pasivo de acción**, y la traducción no siempre muestra la diferencia. {Sapiēns est} «es sabio» es estado (ser sabio); {Amātus est} «es amado» puede ser estado (es amado, y ya) o acción (alguien lo ama). En latín, si hay agente, es acción; si no lo hay, decide el contexto.

## Lectura

{Nato {Iesū} in {Bethleēhem} Iudaeae} «nacido Jesús en Belén de Judea» — forma pasiva de {nāscor}, que es depoente, y el participio {nātus} más {est} es el **perfecto**, la acción entera vista desde su final.

{Passus est sub {Pōntio} {Pilāto}} «sufrió bajo Poncio Pilato» (Mc 15:39) — {passus} «sufrido» es el participio de perfecto de {patior, patī, passus sum} «sufrir», también depoente. El ablativo {Pōntio {Pilāto}} es el instrumento o la esfera en que ocurrió el sufrimiento.

{Crucifixus est sub {Pōntio} {Pilāto}} «fue crucificado bajo Poncio Pilato» (Mc 15:24) — ahora sí, verbo transitivo común, {crucīfīgō} «crucificar», en pasivo: el sujeto es Cristo, el agente {Pōntius Pilātus} está en ablativo, y la preposición {sub} con ablativo significa «bajo la autoridad de».

{Vocātus est {Zachariās} angelō} «Zacarías fue llamado por un ángel» (Lc 1:19) — {vocātus est} es el patrón de pasivo perfecto más común de la Vulgata: participio más {est}, y el agente en ablativo sin preposición explícita cuando el contexto ya ha dejado claro quién es.

## Lo esencial

La voz pasiva cambia el sujeto por el paciente y manda el agente a un ablativo con {ā} o {ab}. Las terminaciones {-tur, -ris, -mur, -ntur} sirven a las cuatro conjugaciones, el futuro y el imperfecto ganan {-bor} y {-bar}, y el perfecto es siempre **participio más {sum}**. Y atención a los depoentes: la forma es pasiva, el sentido es activo, y su participio es activo — {nātus est} es «nació», no «fue nacido por alguien».`),
  vocab: [
    V('amor', 'amo', 'soy amado (pres. pas. 1.ª sg.)'),
    V('amātur', 'amo', 'es amado (3.ª sg.)'),
    V('amāris', 'amo', 'eres amado (2.ª sg.)'),
    V('amāminī', 'amo', 'seréis amados (2.ª pl. fut.)'),
    V('amābar', 'amo', 'era amado (imperf. pas.)'),
    V('amābor', 'amo', 'seré amado (fut. pas.)'),
    V('amātus est', 'amo', 'fue amado (perfecto pasivo)'),
    V('monētur', 'moneo', 'es consejero'),
    V('ā', 'a', 'por (agente personal); {ab} ante consonante'),
    V('a', 'a', 'a, para (+ ac.) / de, por (+ abl.)'),
    V('gladiō', 'gladius', 'con una espada (instr. abl.)'),
    V('occīsus est', 'occīdo', 'fue muerto (perfecto pasivo)'),
    V('crucifixus est', 'crucīfīgo', 'fue crucificado (perfecto pasivo)'),
    V('nātus est', 'nascor', 'nació (deponente: forma pasiva, sentido activo)'),
    V('passus est', 'patior', 'sufrió (deponente)'),
    V('vocātus est', 'voco', 'fue llamado (perfecto pasivo)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {caelum creātus est ā Deō}, ¿cuál es la función de {ā Deō}?'),
    options: [
      T('Agente personal: indica quién creó el cielo'),
      T('Instrumento: indica con qué se creó el cielo'),
      T('Causa: indica por qué se creó el cielo'),
      T('Tiempo: indica cuándo se creó el cielo'),
    ],
    answer: 0,
    hint: T(
      'Regla §4: {ā}/{ab} más ablativo = agente personal; el instrumento es ablativo sin preposición.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Imperfecto pasivo de {amare}: amāba_'),
      answer: 'r',
      hint: T('El imperfecto pasivo es la vocal temática más {-bar}.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué significa {Natus est Christus}?'),
      options: [
        T('«Cristo nació» — {nascor} es deponente: forma pasiva, sentido activo'),
        T('«Cristo fue engendrado por alguien» — el {ā} está implícito'),
        T('«Cristo fue puesto en el mundo por una partera»'),
        T('«Cristo fue castigado», por {pāsio} con sentido pasivo'),
      ],
      answer: 0,
      hint: T('Regla §5: en los depoentes, el participio es activo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el tiempo con su construcción pasiva'),
      pairs: [
        { a: T('amātur'), b: T('presente: vocal temática + {-tur}') },
        { a: T('amābar'), b: T('imperfecto: vocal temática + {-bar}') },
        { a: T('amābor'), b: T('futuro: vocal temática + {-bor}') },
        { a: T('amātus sum'), b: T('perfecto: participio + {sum}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Traduce {gladiō occīsus est}.'),
      answer: 'he was killed with a sword',
      hint: T('El instrumento es ablativo sin preposición: {gladiō} es el medio, no el agente.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La voz pasiva cambia el sujeto por el paciente: el agente pasa a una expresión propia y el verbo es el mismo que en el activo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Las terminaciones pasivas {-r, -ris, -tur, -mur, -minī, -ntur} sirven a las cuatro conjugaciones: {monētur}, {regitur}, {auditur} «es oído».',
      ),
    },
    {
      n: '3',
      text: T(
        'El imperfecto y el futuro pasivo añaden {-bar} y {-bor} a la vocal temática: {amābar}, {amābor}. El futuro activo es {amābo}.',
      ),
    },
    {
      n: '4',
      text: T(
        'El agente personal es {ā} ({ab} ante consonante) más ablativo; el instrumento es ablativo sin preposición. {Gladiō occīsus est} es muerto con una espada; {ā Iudāis occīsus est} es muerto por los judíos.',
      ),
    },
    {
      n: '5',
      text: T(
        'En los depoentes la forma es pasiva y el participio es activo: {nātus est} es «nació», {passus est} es «sufrió».',
      ),
    },
  ],
  notes: [
    {
      label: T('Uno de cada cuatro verbos.'),
      text: T(
        'Si abres la Vulgata y buscas un verbo cada cinco palabras, uno de ellos será pasivo. La causa es el griego: el griego koiné tiene el pasivo como recurso estándar para frases como «se dice» (λέγεται) y «se encuentra» (εὑρίσκεται), y la Vulgata lo sigue.{Traditus est} «fue entregado» es un presente griego traducido en el perfecto latín, lo que produce una lecturaazor extrañamente intensa: un lector nativo siente cada {est} como un punto, y nada continúa. Vale la pena memorizar los verbos más comunes del pasivo perfecto — {dīcitur} «se dice», {nōtur} «se sabe», {vocātus est} «es llamado» — porque ellos organizan el lenguaje de las oraciones litúrgicas y de las noticias.',
      ),
    },
    {
      label: T('Contra la idea de que el latín es una lengua pasiva.'),
      text: T(
        'Se dice a menudo que el latín es una lengua de sujeto pasivo, casi opuesta al griego de sujeto activo. Es cierto en cifras, pero la lectura moderna ha desarmado esa oposición: la Vulgata es un texto **devocional**, no un informe, y quien ora necesita un agente humano en la oración. Un {hombre} no «es salvado» por casualidad: «es salvado {por {Dios}}». El ablativo de agente con {ā} es precisamente lo que impide que la traducción moderna se convierta en una afirmación impersonal. Donde el latín dice {occīsus est ā Iudāis}, el portugués no tiene una construcción entera: necesita «fue muerto por los judíos» o «los judíos lo mataron». Toda la agencia está en la preposición.',
      ),
    },
  ],
  examples: [
    { text: 'caelum creātus est ā Deō', gloss: T('el cielo fue creado por Dios (agente con ā)') },
    { text: 'amātur', gloss: T('es amado — presente pasivo, {-tur}') },
    { text: 'amābar', gloss: T('era amado — imperfecto, {-bar}') },
    { text: 'amābor', gloss: T('seré amado — futuro, {-bor}') },
    { text: 'amātus est', gloss: T('fue amado — participio + {est}') },
    {
      text: 'Natus est Iesus in Bethleēhem Iudaeae',
      gloss: T('Jesús nació en Belén de Judea (Mt 2:1)'),
    },
    {
      text: 'Traditus est traditoribus suis',
      gloss: T('fue entregado a sus propios traidores (Mt 26:4)'),
    },
    {
      text: 'Crucifixus est sub Pōntio Pilāto',
      gloss: T('fue crucificado bajo Poncio Pilato (Mc 15:24)'),
    },
    { text: 'Passus est sub Pōntio Pilāto', gloss: T('sufrió bajo Poncio Pilato (Mc 15:39)') },
    {
      text: 'gladiō occīsus est',
      gloss: T('fue muerto con una espada (instrumento, sin preposición)'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Voz activa y pasiva de {amare} (1.ª conjugación)'),
      head: [
        T('Persona'),
        T('Pres. activo'),
        T('Pres. pasivo'),
        T('Imperf. pasivo'),
        T('Fut. pasivo'),
      ],
      rows: [
        ['1.ª sing.', 'amō', 'amor', 'amābar', 'amābor'],
        ['2.ª sing.', 'amās', 'amāris', 'amābāris', 'amāberis'],
        ['3.ª sing.', 'amat', 'amātur', 'amābātur', 'amābitur'],
        ['1.ª pl.', 'amāmus', 'amāmur', 'amābāmur', 'amābimur'],
        ['2.ª pl.', 'amātis', 'amāminī', 'amābāminī', 'amābiminī'],
        ['3.ª pl.', 'amant', 'amantur', 'amābantur', 'amābuntur'],
      ],
    },
    {
      caption: T('Tabla 2 — El perfecto pasivo como {participio} + {sum}'),
      head: [T('Tiempo'), T('Forma'), T('Portugués'), T('Español')],
      rows: [
        ['Presente', 'amātus sum', 'sou amado', 'soy amado'],
        ['Imperfeito', 'amātus eram', 'era amado', 'era amado'],
        ['Perfeito', 'amātus fuī', 'fui amado', 'fui amado'],
        ['Mais-que-perfeito', 'amātus fueram', 'tinha sido amado', 'había sido amado'],
        ['Futuro', 'amātus erō', 'serei amado', 'seré amado'],
        ['Condicional', 'amātus sim', 'seria amado', 'sería amado'],
      ],
    },
  ],
};
