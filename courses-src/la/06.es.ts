import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Verbos de primera conjugación y los perifrásticos'),
  subtitle: T('{amo, amas, amat} — y {amaturus sum} para el futuro'),
  section: T('Declinaciones y el verbo sum'),
  body: C(`## El esqueleto de la primera conjugación

Los verbos más comunes del latín terminan en {āre}: {amāre} «amar», {cantāre} «cantar», {habitāre} «morar», {vocāre} «llamar», {putāre} «pensar». Quitando {āre} queda el **tema verbal**: {amā-}, {cantā-}, {habitā-}, {vocā-}. Sobre ese tema encajas las terminaciones personales:

| Persona | Terminación | {amāre} |
|---|---|---|
| 1.ª sing. | -o | amō |
| 2.ª sing. | -as | amās |
| 3.ª sing. | -at | amat |
| 1.ª pl. | -mus | amāmus |
| 2.ª pl. | -tis | amātis |
| 3.ª pl. | -nt | amant |

La única forma realmente irregular es la 1.ª del singular, {amō}, que es {amā-} más {o} y, escrito, pierde el guion: am-o. De ahí el nombre «primera conjugación» — la regla vale casi siempre.

La vocal temática {a} alterna con {ē} cuando el tema termina en {ā}: {amā-} → {amē-, amāre, amātem, amāmus}. Compáralo con {cantā-}: la vocal temática es {a}, la {a} del tema es {ā}, y por eso no cambia nada.

## Los perifrásticos

La Vulgata evita el futuro simple latino — {amābit} «amará» — y construye el futuro con el adjetivo participial más el verbo {sum}. El resultado se llama **futuro perifrástico**:

{Amā-tū-r-us sum} → {amātūrus sum} «estoy a punto de amar»;
{Puerī cantātūrī erant} «los niños estaban a punto de cantar» (Lucas 9:6).

El mismo proceso con el **gerundivo** da el pasivo, y es él que produce el famoso «debe» del Nuevo Testamento griego:

{Mundus amā-tus est} «el mundo debe ser amado»;
{Verbum caro factum est} «la Palabra cara se ha hecho».

Fíjate en la economía: una sola construcción, {amandus est}, sirve para «es amado», «debe ser amado» y «está siendo amado». Una traducción que solo da «es amado» pierde la mitad del texto griego.

## El imperativo, el único tiempo que el Nuevo Testamento adopta

El imperativo latino no usa {-re}, y es también la única forma verbal que sobrevive entera en las oraciones: {Amā} «¡ama!», {Amāte} «¡amad!». En el Padrenuestro es exactamente esa forma la que lleva mil ochocientos años:

{Pater noster, qui es in caelīs, sanctificētur nomen tuum} «Padre nuestro, que estás en el cielo, sea santificado tu nombre».

El subjuntivo presente, en cambio, muere en el latín y sobrevive solo en formas fosilizadas como {sīt} «sea».`),
  vocab: [
    V('amo', 'amo', 'amo (1.ª sing.)'),
    V('amas', 'amo', 'amas'),
    V('amat', 'amo', 'ama'),
    V('amamus', 'amo', 'amamos'),
    V('amatis', 'amo', 'amáis'),
    V('amant', 'amo', 'aman'),
    V('amare', 'amo', 'amar (infinitivo)'),
    V('ama', 'amo', '¡ama! (imperativo)'),
    V('amaturus', 'amaturus', 'que va a amar (part. futuro)'),
    V('amandus', 'amandus', 'para ser amado (gerundivo)'),
    V('amicus', 'amicus', 'amigo'),
    V('inimicus', 'inimicus', 'enemigo'),
    V('oculus', 'oculus', 'ojo'),
    V('lingua', 'lingua', 'lengua'),
    V('clamor', 'clamor', 'grito'),
    V('pax', 'pax', 'paz'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {amātūrus sum}, ¿cuál es la función de {amātūrus}?'),
    options: [
      T('Es el participio futuro, y con {sum} forma el futuro perifrástico'),
      T('Es un adjetivo, y con {sum} forma el presente'),
      T('Es el gerundivo, y con {sum} forma el imperfecto'),
      T('Es un adverbio, y con {sum} forma el optativo'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Por qué {amō} pierde el guion mientras {amās} lo conserva?'),
      options: [
        T('Por convención de escritura: la forma {amō} es trisilábica'),
        T('Porque la {o} final cierra la sílaba y la hace breve'),
        T('Porque la vocal temática {a} desaparece antes de {o}'),
        T('Porque {amō} es la forma más antigua del verbo'),
      ],
      answer: 2,
      hint: T('Regla §1: lo que desaparece es la vocal temática, no el guion.'),
    },
    {
      kind: 'fill',
      prompt: T('Tercera persona del plural de {amare} en presente: ama_'),
      answer: 'amant',
      hint: T('-nt es la terminación de la 3.ª pl. en toda la primera conjugación.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma con su función'),
      pairs: [
        { a: T('ama'), b: T('imperativo presente, 2.ª sing.') },
        { a: T('amare'), b: T('infinitivo presente') },
        { a: T('amandus'), b: T('gerundivo: «debe ser amado»') },
        { a: T('amātūrus'), b: T('particípio futuro: «está para amar»') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Quita {āre} y tienes el tema; sobre el tema van las terminaciones: {-o, -as, -at, -mus, -tis, -nt}.',
      ),
    },
    {
      n: '2',
      text: T(
        'La vocal temática alterna {a}/{ē} cuando el tema acaba en {ā}: {amā-} pero {cantā-}.',
      ),
    },
    {
      n: '3',
      text: T(
        'La primera persona del singular pierde la vocal temática: {amā-} + {o} = {amō}, escrito sin guion.',
      ),
    },
    {
      n: '4',
      text: T(
        'La Vulgata evita el futuro simple latino: usa el perifrástico {participio futuro} + {sum}.',
      ),
    },
    {
      n: '5',
      text: T(
        'El gerundivo con {est} vale tres veces: «es amado», «debe ser amado», «está siendo amado».',
      ),
    },
  ],
  notes: [
    {
      label: T('Perfecto irregular:'),
      text: T(
        'Varios verbos de la primera tienen perfecto en {vī} o {uī}: {amāvī}, {monuī}, {petīvī}, {audīvī}. Sin guiones, {amāvī} y {amāui} se parecen; con ellos no hay duda. La {i} larga es lo que distingue la raíz {audī-} «oír» de {au-} «crecer».',
      ),
    },
    {
      label: T('Orden en la frase:'),
      text: T(
        'El latín neutro pone el verbo en segundo lugar: {Pueri rosam amant} «los niños aman la rosa». Quien escribe buen latín lo coloca al final — {Pueri amant rosam} — y suena más literario. Ninguno está mal; decide el contexto.',
      ),
    },
  ],
  examples: [
    { text: 'amo', gloss: T('amo') },
    { text: 'amas', gloss: T('amas') },
    { text: 'amat', gloss: T('ama') },
    { text: 'amant', gloss: T('aman') },
    { text: 'amare', gloss: T('amar — también el supino') },
    { text: 'ama', gloss: T('¡ama! (imperativo)') },
    { text: 'amavistis', gloss: T('amasteis (perfecto)') },
    { text: 'amabam', gloss: T('amaba (imperfecto)') },
    { text: 'amandus', gloss: T('para ser amado — «debe ser amado»') },
    { text: 'amaturus sum', gloss: T('estoy para amar (futuro perifrástico)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Primera conjugación activa: {amāre, -ō}'),
      head: [T('Persona'), T('Presente'), T('Imperfecto'), T('Futuro')],
      rows: [
        [T('1.ª sing.'), 'amō', 'amābam', 'amābō'],
        [T('2.ª sing.'), 'amās', 'amābās', 'amābis'],
        [T('3.ª sing.'), 'amat', 'amābat', 'amabit'],
        [T('1.ª pl.'), 'amāmus', 'amābāmus', 'amābimus'],
        [T('2.ª pl.'), 'amātis', 'amābātis', 'amābitis'],
        [T('3.ª pl.'), 'amant', 'amābant', 'amabunt'],
      ],
    },
    {
      caption: T('Tabla 2 — Formas no personales de {amāre}'),
      head: [T('Forma'), T('Nombre'), T('Ejemplo')],
      rows: [
        ['amō, amās, amat', T('presente de indicativo'), 'Amat Deus nos'],
        ['amābam', T('imperfecto'), 'Anebant'],
        ['amāvī', T('perfecto'), 'Amāvit eum'],
        ['amāre', T('infinitivo'), '{amāre} Deum'],
        ['amāns', T('participio presente'), 'amāns Dominum'],
        ['amātūrus', T('participio futuro'), '{amātūrus} sum'],
        ['amandus', T('gerundivo'), '{amandus} est'],
        ['amāre', T('supino (igual al infinitivo)'), 'iussit {amāre}'],
      ],
    },
  ],
};
