import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('El passé composé'),
  subtitle: T(
    '{avoir} o {être} en presente + participio pasado — la única forma conversacional de hablar del pasado',
  ),
  section: T('Los verbos'),
  body: C(`## La fórmula

El passé composé es una **construcción**, no un tiempo morfológico. Se monta siempre con las mismas piezas: un auxiliar en presente de indicativo, el **participio pasado** del verbo principal y, si hace falta, un sustantivo que lo acompaña.

En corto: **auxiliar (presente) + participio pasado**. Nada más. Lo que cambia de un verbo a otro es (a) qué auxiliar y (b) qué participio.

| Verbo principal | Frase | Glosa |
|---|---|---|
| parler | j’ai parlé | hablé |
| {avoir} (aux.) | j’ai eu peur | tuve miedo |
| aller | je suis allé | fui |
| se laver | je me suis lavé | me lavé |

Fíjate en algo importante: en {j’ai eu peur} el {avoir} es el auxiliar y {eu} el participio, no al revés. La palabra {peur} «miedo» queda en medio, y la frase se traduce literalmente «tuve miedo».

## Los dos auxiliares

El auxiliar **no** lo elige el sujeto ni el objeto: lo elige el **verbo principal**. La regla práctica:

- {avoir} en la enorme mayoría de los casos;
- {être} con verbos de **desplazamiento** y de **cambio de estado**: {aller, venir, arriver, partir, sortir, entrer, monter, descendre, rester, tomber, naître, mourir, passer};
- {être} con **todos los verbos pronominales**: {se lever, s’appeler, se tromper, se méfier}.

La lista de {être} tiene un mnemónico en francés: **devenir, revenir, monter, rester, sortir, venir, aller, naître, descendre, entrer, retourner, tomber, rentrer, arriver, mourir, partir**. Dieciséis verbos, casi todos de tercera conjugación — {partir, sortir, entrer, monter, descendre, rester, tomber, revenir, devenir, rentrer, retourner} más {aller, venir, naître, mourir, arriver}. El patrón es evidente: la mayoría son de desplazamiento, y los pocos que no lo son son de cambio de estado.

La lista tiene huecos y excedentes, y por eso nadie confía solo en ella:

- {monter} y {descendre} llevan {être} cuando van de un sitio a otro ({je suis monté} «subí») y {avoir} cuando cambian un estado ({j’ai monté la bagage} «cargué la maleta»);
- {sortir} lleva {être} cuando significa «salir» ({il est sorti}) y {avoir} cuando significa «sacar algo» ({il a sorti son billet} «sacó su billete»);
- {entrer} y {rentrer} llevan {avoir} en ciertas construcciones ({j’ai entré la voiture} «entré en el coche»);
- {passer} puede llevar los dos: {je suis passé chez lui} «fui por su casa» (desplazamiento) y {j’ai passé l’après-midi} «pasé la tarde» (duración).

O sea: la lista dice por dónde empezar, pero el **significado** decide. Cuando un verbo esté en la zona gris, pregunta «¿el sentido cambió el estado del sujeto?»

## Particípios irregulares

El segundo problema es el participio. Los verbos del primer grupo lo forman con {-é} ({parlé}, {aimé}, {chanté}), los del segundo con {-i} ({fini}, {choisi}, {réussi}), los del tercero con {-u} ({vendu}, {attendu}, {répondu}). Y unos veinte no siguen nada:

| Infinitivo | Particípio irregular |
|---|---|
| être | été |
| avoir | eu |
| faire | fait |
| dire | dit |
| prendre | pris |
| mettre | mis |
| voir | vu |
| vouloir | voulu |
| pouvoir | pu |
| devoir | dû |
| écrire | écrit |
| lire | lu |
| savoir | su |
| boire | bu |
| recevoir | reçu |

La buena noticia es que casi todos los irregulares son del tercer grupo, es decir, terminan en {-re} en el infinitivo. Y hay una regla que cubre la mitad: cuando el radical acaba en {v}, el participio es el radical mismo, sin {u}. Pero {boire} da {bu}, con {u}. Y {devoir → dû} y {recevoir → reçu} llevan acento. En resumen, memoriza la lista; la regla es una red, no un sistema.

## Concordancia del participio

Aquí está la regla que más se viola: el participio concuerda **solo con {être}**, y solo cuando el participio es un **adjetivo**.

Con {avoir}, el participio es **invariable**, aunque el objeto vaya delante:

- {les lettres que j’ai écrites} ✗ → lo correcto es {les lettres que j’ai écrit};
- {les photos que j’ai prises} ✗ → lo correcto es {les photos que j’ai pris};
- {les fleurs qu’il a achetées} ✗ → lo correcto es {les fleurs qu’il a acheté}, sin {s}.

Con {être}, el participio concuerda con el **sujeto**: {elle est arrivée}, {ils sont venus}, {elles sont parties}. Y cuando el objeto va antes del verbo, el participio concuerda con el **objeto** en vez de con el sujeto, que es justo el caso anterior y la razón de que el {s} allí fuera doblemente erróneo.

Tres situaciones, tres reglas:

1. **{être} + sujeto.** El participio concuerda con el sujeto: {je suis parti / elle est partie / ils sont partis / elles sont parties}.
2. **{avoir} + objeto antepuesto.** El participio concuerda con el objeto **si** el verbo es del tercer grupo **y** el sujeto es {je}, {tu}, {on} o {qui}: {les lettres que j’ai écrites} ✓, porque el sujeto es {je} y {écrire} es del tercer grupo. La misma frase con otro sujeto pierde la {s}: {les lettres qu’il a écrit} (él escribió).
3. **{pronominal}.** El participio concuerda con el sujeto **cuando el pronombre {se} es directo**: {elle s’est levée} «se levantó», {ils se sont parlé} «hablaron entre ellos». Si el pronombre {me, te, nous, vous} es indirecto, no hay concordancia: {elle s’est lavé les mains} «se lavó las manos». Y {elle s’est lavé} «se lavó» sí concuerda, porque ahí el {se} es directo — el sujeto hace la acción sobre sí mismo.

Cuidado: en {elle s’est lavé les mains}, el {se} es indirecto porque hay otro objeto ({les mains}) al lado, y el participio queda masculino singular — manda el {se}. En {elle s’est lavé}, el {se} es directo, porque el sujeto se hace la acción a sí mismo, y la {é} es el femenino de ella.

Cuando el {se} es indirecto hay un truco de pronunciación: la {t} del auxiliar **suena** antes de la {s} del {se}, y es esa {s} la que oyes: {elle s’est lavé} suena como {elle sé lavé}, {ils se sont parlé} suena como {ils se son parlé}. El sonido miente, la escritura no.

## Los verbos pronominales

Merecen un párrafo propio, porque son la fuente de mucha confusión. Un verbo pronominal lleva {se} (o {me, te, nous, vous, se}) antes del auxiliar: {se lever}, {s’appeler}, {se rendre compte}, {se plaindre}. El {se} es un pronombre, no un indefinido: representa al sujeto o al objeto.

Hay dos valores de {se}:

- **reflexivo** — la acción recae sobre el sujeto: {elle se lave} «se lava»;
- **pronominal** — la acción recae sobre otro, pero el verbo es pronominal por razones históricas: {elle se lave les mains} «se lava las manos», {elle a fermé la porte} «cierra la puerta».

En todos los casos el auxiliar es {être}: {je me suis levé}, {tu t’es reposé}, {il s’est trompé}, {nous nous sommes rencontrés}, {vous vous êtes agenouillés}, {ils se sont parlé}.

## Aplicación: el texto bíblico

El texto Segond pone el passé composé en tres funciones distintas, y vale separar las tres.

**(a) Acción narrativa, el pasado por excelencia.** {Et le Verbe s’est fait chair, et il a habité parmi nous} (Juan 1:14) — {s’est fait} es {être} con verbo pronominal, {a habité} es {avoir} con verbo del segundo grupo. Los dos auxiliares en un solo versículo.

{Dieu a tant aimé le monde qu’il a donné son Fils unique} (Juan 3:16) — dos {avoir}, con los participios irregulares {aimé} y {donné}.

**Jésus est né à Bethléem** (Mateo 2:1) — {est né} con {être}, y el participio regular {né} «nacido», que no sabes clasificar sin ayuda; el contexto basta.

**Puis il est mort, et a été enseveli** — {est mort} y {a été enseveli}: el mismo verbo {être} como verbo principal en el primer caso y como **particípio** en el segundo. {a été} es la primera forma de passé composé que viste: {avoir} más {été}.

**(b) Pasado continuado, un estado inacabado que dura.** {Ceux qui ont faim et soif de la justice} (Mateo 5:6) — {ont} es presente, no pasado; el mismo {ont faim} que aprendiste con {avoir}.

{Vous avez les paroles de la vie éternelle} (Juan 6:68) — {avez} es presente: «ustedes tienen», no «ustedes tenían».

**(c) Ley e historia, el pasado de lo consignado.** {C’est pourquoi la loi a été donnée par Moïse} — {a été donnée} es {avoir} más {été}, el más-que-perfecto, que el francés construye como passé composé de {avoir} con {été} (o de {être} con {eu}, en frases fijas).

**La Pâque a été mangée** — el mismo esquema: «la Pascua fue comida», con {été} en el lugar del participio.

Ninguna de estas formas es un tiempo nuevo: todas son auxiliar más participio. Lo que cambia es el **verbo** que ocupa el sitio del participio, y por eso el mismo {a été} significa unas veces «hubo», otras «está» y otras «habrá estado».

## Lo esencial

El passé composé es auxiliar en presente más participio pasado. El auxiliar sigue al verbo principal: {avoir} casi siempre, {être} con desplazamiento, cambio de estado y pronominales. La lista de los dieciséis es un atajo, no una ley: ante la duda, pregunta por el **significado** del verbo, no por la letra de su nombre. El participio con {avoir} es invariable; con {être} concuerda con el sujeto; con pronombre directo también; con pronombre indirecto no.`),
  vocab: [
    V('parlé', 'parler', 'hablé (participio del 1.er grupo)'),
    V('fini', 'finir', 'terminado (participio del 2.º grupo)'),
    V('vendu', 'vendre', 'vendido (participio del 3.er grupo)'),
    V('eu', 'avoir', 'tenido (participio irregular)'),
    V('été', 'être', 'sido (participio irregular)'),
    V('fait', 'faire', 'hecho (participio irregular)'),
    V('pris', 'prendre', 'tomado (participio irregular)'),
    V('vu', 'voir', 'visto (participio irregular)'),
    V('écrit', 'écrire', 'escrito (participio irregular)'),
    V('reçu', 'recevoir', 'recibido (participio irregular)'),
    V('suis allé', 'aller', 'fui (auxiliar {être})'),
    V('est née', 'naître', 'nació (femenino, con concordancia)'),
    V('se laver', 'laver', 'lavarse (verbo pronominal)'),
    V('s’est levé', 'lever', 'se levantó (pronominal directo)'),
    V('s’est lavé les mains', 'laver', 'se lavó las manos (pronominal indirecto)'),
    V('a été', 'être', 'hubo estado (más-que-perfecto)'),
    V('a eu peur', 'avoir', 'tuvo miedo (auxiliar + participio + nombre)'),
    V('DR MRS VANDERTRAMP', 'être', 'lista mnemotécnica de los verbos con {être}'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      '¿Por qué «{je suis monté}» («subí») lleva {être}, mientras «{j’ai monté la voiture}» («me subí en») lleva {avoir}?',
    ),
    options: [
      T('El auxiliar mide si el sujeto cambió de lugar, no si la acción se hizo'),
      T('Porque {monter} es un verbo del segundo grupo, y el segundo grupo siempre lleva {être}'),
      T(
        'Porque hay un objeto ({la voiture}) tras el verbo, y con objeto el auxiliar pasa a {avoir}',
      ),
      T('Porque «montre» es un sustantivo y los sustantivos llevan {avoir}'),
    ],
    answer: 0,
    hint: T('Prueba del sentido: ¿hubo **movimiento** del sujeto o solo **acción sobre algo**?'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Reescribe con concordancia de sujeto femenino: «il est venu» → «elle est ___»'),
      answer: 'venue',
      hint: T(
        '{venu} gana una {e} final: el participio concuerda con el sujeto porque el auxiliar es {être}.',
      ),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase está correcta?'),
      options: [
        T('{les lettres qu’il a écrit} — él escribió las cartas'),
        T('{les lettres qu’il a écrites} — con objeto antepuesto y {avoir}, sin {s}'),
        T('{elle s’est lavé les mains} — pronombre indirecto, sin concordancia'),
        T('{elle s’est lavée les mains} — solo {se} directo concuerda'),
      ],
      answer: 0,
      hint: T(
        'Con {avoir}, el participio es invariable. Piensa en el participio, no en la persona verbal.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con su participio pasado'),
      pairs: [
        { a: T('être'), b: T('été') },
        { a: T('faire'), b: T('fait') },
        { a: T('prendre'), b: T('pris') },
        { a: T('voir'), b: T('vu') },
        { a: T('recevoir'), b: T('reçu') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El passé composé es auxiliar en **presente de indicativo** más **participio pasado**. Ninguna forma cambia ese orden.',
      ),
    },
    {
      n: '2',
      text: T(
        'El auxiliar lo elige el **verbo principal**, nunca el sujeto: {avoir} casi siempre; {être} con desplazamiento, cambio de estado y todos los pronominales.',
      ),
    },
    {
      n: '3',
      text: T(
        'Los participios toman {-é} en el primer grupo, {-i} en el segundo, {-u} en el tercero; unos veinte son irregulares y todos pertenecen, casi sin excepción, al tercero.',
      ),
    },
    {
      n: '4',
      text: T(
        'Con {avoir} el participio es **invariable**. Con {être} concuerda con el sujeto. Con pronombre directo {se} también; con pronombre indirecto ({me, te, nous, vous}), no.',
      ),
    },
    {
      n: '5',
      text: T(
        'La lista de los dieciséis verbos con {être} es un atajo de memoria, no una regla: {monter, descendre, sortir, entrer, passer} cambian de auxiliar según el **sentido** que asumen.',
      ),
    },
  ],
  notes: [
    {
      label: T('El participio puede ser sustantivo'),
      text: T(
        'En {j’ai eu peur}, {eu} es el participio de {avoir} y {peur} un sustantivo común. El mismo esquema aparece en {j’ai faim}, {j’ai soif}, {j’ai raison}, {j’ai tort}, {j’ai besoin} y {j’ai envie}. Por eso el francés conserva el artículo: el sustantivo lo necesita. Compara {j’ai peur} y {j’ai la peur} — este último es «tengo miedo de algo concreto».',
      ),
    },
    {
      label: T('El sonido miente, la escritura no'),
      text: T(
        'En los pronominales indirectos, la {t} del auxiliar {s’est} de {lavé} se pronuncia antes de la {s} del pronombre, así que oyes {sé}. Por eso los hablantes que vienen del português y del español escriben {elle s’est lavée} por oído. La forma escrita {lavé} sin {e} es la correcta precisamente porque el {se} era indirecto.',
      ),
    },
  ],
  examples: [
    { text: 'j’ai parlé', gloss: T('hablé (regular, 1.er grupo)') },
    { text: 'j’ai eu peur', gloss: T('tuve miedo (auxiliar + participio + nombre)') },
    { text: 'je suis allé', gloss: T('fui (desplazamiento, auxiliar {être})') },
    { text: 'elles sont parties', gloss: T('salieron (concordancia en el participio)') },
    { text: 'il a mangé les pommes', gloss: T('comió las manzanas (participio invariable)') },
    {
      text: 'les pommes que j’ai mangées',
      gloss: T('las manzanas que comí ({je} + 3.er grupo: con {s})'),
    },
    { text: 'elle s’est levée', gloss: T('se levantó ({se} directo, concuerda)') },
    { text: 'elle s’est lavé les mains', gloss: T('se lavó las manos (pronombre indirecto)') },
    { text: 'a été', gloss: T('fue (participio de {être} con {avoir}: más-que-perfecto)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — formación del passé composé por grupo'),
      head: [T('Grupo'), T('Terminación'), T('Con {avoir}'), T('Con {être}')],
      rows: [
        [T('1.º (-er)'), '-é', 'j’ai parlé', 'je suis allé'],
        [T('2.º (-ir)'), '-i', 'j’ai fini', T('—')],
        [T('3.º (-re)'), '-u', 'j’ai vendu', 'je suis venu'],
        [T('irregular'), T('—'), 'j’ai eu', 'je suis né'],
        [T('pronominal'), T('—'), T('—'), 'je me suis levé'],
      ],
    },
    {
      caption: T('Tabla 2 — concordancia del participio'),
      head: [T('Situación'), T('Ejemplo'), T('¿Concuerda?')],
      rows: [
        [T('{avoir}, sujeto normal, objeto después'), T('{il a mangé les pommes}'), T('no')],
        [
          T('{avoir}, sujeto {je/tu/on/qui}, objeto antes'),
          T('{les pommes que j’ai mangées}'),
          T('sí'),
        ],
        [T('{avoir}, otro sujeto, objeto antes'), T('{les pommes qu’il a mangé}'), T('no')],
        [T('{être}, sin objeto'), T('{elle est arrivée}'), T('con el sujeto')],
        [T('{pronominal}, {se} directo'), T('{elle s’est levée}'), T('con el sujeto')],
        [T('{pronominal}, pronombre indirecto'), T('{elle s’est lavé les mains}'), T('no')],
      ],
    },
  ],
};
