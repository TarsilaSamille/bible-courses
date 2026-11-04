import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Verbos de 1.ª conjugação e os perifrásticos'),
  subtitle: T('{amo, amas, amat} — e {amaturus sum} para o futuro'),
  section: T('Declinações e o verbo sum'),
  body: C(`## O esqueleto da 1.ª conjugação

Os verbos mais comuns do latim terminam em {āre}: {amāre} «amar», {cantāre} «cantar», {habitāre} «morar», {vocāre} «chamar», {putāre} «achar». Tirando {āre}, sobra o **tema verbal**: {amā-}, {cantā-}, {habitā-}, {vocā-}. Sobre esse tema encaixamos as terminações pessoais:

| Pessoa | Terminação | {amāre} |
|---|---|---|
| 1.ª sing. | -o | amō |
| 2.ª sing. | -as | amās |
| 3.ª sing. | -at | amat |
| 1.ª pl. | -mus | amāmus |
| 2.ª pl. | -tis | amātis |
| 3.ª pl. | -nt | amant |

A única forma realmente irregular é a 1.ª do singular, {amō}, que vira {amā-} + {o} e, na escrita, perde o macron: am-o. Daí o nome «1.ª pessoa» na esmagadora maioria dos casos.

A vogal temática {a} alterna com {ē} quando o tema termina em {ā}: {amā-} → {amē-, amāre, amātem, amāmus}. Compare com {cantā-}: a vogal temática é {a}, o {a} do tema é {ā}, e por isso nada muda.

## Os perifrásticos

A Vulgata evita o futuro simples latim — {amābit} «amará» — e constrói o futuro com o adjetivo participial mais o verbo {sum}. O resultado se chama **futuro perifrástico**:

{Amā-tū-r-us sum} → {amātūrus sum} «euhei de amar»;
{Pueri cantātūrī erant} «os meninos estavam para cantar» (Lúcas 9:6).

O mesmo processo com o **gerundivo** dá o passivo, e é ele que produz o famoso «deve ser» do Novo Testamento grego:

{Mundus amā-tus est} «o mundo deve ser amado»;
{Verbum caro factum est} «a Palavra cara se fez».

Perceba a economia: uma única construção, {amandus est}, serve para «é amado», «deve ser amado» e «está sendo amado». Quem traduz só «é amado» perde metade do texto grego.

## O imperativo, o único que o Novo Testamento adota

O imperativo latino não usa {-re}, e é também a única forma verbal que sobrevive intacta nas orações: {Amā} «ama!», {Amāte} «amai!». No Pai-Nosso, é exatamente essa forma que sobrevive mil e oitocentos anos:

{Pater noster, qui es in caelis, sanctificētur nomen tuum} «Pai nosso, que estás nos céus, seja santificado o teu nome».

O subjuntivo presente, pelo contrário, morre no latim e sobrevive apenas em formas fossilizadas como {sīt} «seja».`),
  vocab: [
    V('amo', 'amo', 'amo (1.ª sing.)'),
    V('amas', 'amo', 'amas'),
    V('amat', 'amo', 'ama'),
    V('amamus', 'amo', 'amamos'),
    V('amatis', 'amo', 'amais'),
    V('amant', 'amo', 'amam'),
    V('amare', 'amo', 'amar (infinitivo)'),
    V('ama', 'amo', 'ama! (imperativo)'),
    V('amaturus', 'amaturus', 'que vai amar (part. futuro)'),
    V('amandus', 'amandus', 'a ser amado (gerundivo)'),
    V('amicus', 'amicus', 'amigo'),
    V('inimicus', 'inimicus', 'inimigo'),
    V('oculus', 'oculus', 'olho'),
    V('lingua', 'lingua', 'língua'),
    V('clamor', 'clamor', 'grito'),
    V('pax', 'pax', 'paz'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {amātūrus sum}, qual é a função do {amātūrus}?'),
    options: [
      T('É o particípio futuro, e com {sum} forma o futuro perifrástico'),
      T('É um adjetivo, e com {sum} forma o presente'),
      T('É o gerundivo, e com {sum} forma o imperfeito'),
      T('É um advérbio, e com {sum} forma o optativo'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Por que {amō} perde o macron enquanto {amās} o conserva?'),
      options: [
        T('Por convenção de escrita: a forma {amō} é trissilábica'),
        T('Porque {o} final fecha a sílaba e a torna breve'),
        T('Porque a vogal temática {a} some antes de {o}'),
        T('Porque {amō} é a forma mais antiga do verbo'),
      ],
      answer: 2,
      hint: T('Regra §1: o que se apaga é a vogal temática, não o macron.'),
    },
    {
      kind: 'fill',
      prompt: T('3.ª pessoa do plural de {amare} no presente: ama_'),
      answer: 'amant',
      hint: T('-nt é a terminação da 3.ª pl. em toda a 1.ª conjugação.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma à sua função'),
      pairs: [
        { a: T('ama'), b: T('imperativo presente, 2.ª sing.') },
        { a: T('amare'), b: T('infinitivo presente') },
        { a: T('amandus'), b: T('gerundivo: «deve ser amado»') },
        { a: T('amātūrus'), b: T('particípio futuro: «está para amar»') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Tire {āre} e você tem o tema; sobre o tema vêm as terminações pessoais: {-o, -as, -at, -mus, -tis, -nt}.',
      ),
    },
    {
      n: '2',
      text: T(
        'A vogal temática alterna {a}/{ē} quando o tema termina em {ā}: {amā-} mas {cantā-}.',
      ),
    },
    {
      n: '3',
      text: T(
        'A 1.ª pessoa do singular perde a vogal temática: {amā-} + {o} = {amō}, escrito sem barra.',
      ),
    },
    {
      n: '4',
      text: T(
        'O futuro latim é evitado na Vulgata: use o perifrástico {particípio futuro} + {sum}.',
      ),
    },
    {
      n: '5',
      text: T(
        'O gerundivo com {est} vale três vezes: «é amado», «deve ser amado», «está sendo amado».',
      ),
    },
  ],
  notes: [
    {
      label: T('Perfeito irregular:'),
      text: T(
        'Vários verbos da 1.ª têm perfeito em {vī} ou {uī}: {amāvī}, {monuī}, {petīvī}, {audīvī}. Sem barra, {amāvī} e {amāui} parecem o mesmo; com barra, não há dúvida. O {i} longo é o que distingue a raiz {audī-} — «ouvir» — de {au-} — «crescer».',
      ),
    },
    {
      label: T('Ordem na frase:'),
      text: T(
        'O latim neutro põe o verbo em segundo: {Pueri rosam amant} «os meninos amam a rosa». Quem escreve bem latin coloca o verbo no fim — {Pueri amant rosam} — e soa mais literário. Nenhum dos dois é errado; o contexto decide.',
      ),
    },
  ],
  examples: [
    { text: 'amo', gloss: T('eu amo') },
    { text: 'amas', gloss: T('tu amas') },
    { text: 'amat', gloss: T('ele ama') },
    { text: 'amant', gloss: T('eles amam') },
    { text: 'amare', gloss: T('amar — também o supino') },
    { text: 'ama', gloss: T('ama! (imperativo)') },
    { text: 'amavistis', gloss: T('vós amastes (perfeito)') },
    { text: 'amabam', gloss: T('eu amava (imperfeito)') },
    { text: 'amandus', gloss: T('a ser amado — «deve ser amado»') },
    { text: 'amaturus sum', gloss: T('estou para amar (futuro perifrástico)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — 1.ª conjugação ativa: {amāre, -ō}'),
      head: [T('Pessoa'), T('Presente'), T('Imperfeito'), T('Futuro')],
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
      caption: T('Tabela 2 — Formas não pessoais de {amāre}'),
      head: [T('Forma'), T('Nome'), T('Exemplo')],
      rows: [
        ['amō, amās, amat', T('presente do indicativo'), 'Amat Deus nos'],
        ['amābam', T('imperfeito'), 'Anebant'],
        ['amāvī', T('perfeito'), 'Amāvit eum'],
        ['amāre', T('infinitivo'), '{amāre} Deum'],
        ['amāns', T('particípio presente'), 'amāns Dominum'],
        ['amātūrus', T('particípio futuro'), '{amātūrus} sum'],
        ['amandus', T('gerundivo'), '{amandus} est'],
        ['amāre', T('supino (= infinitivo)'), 'iussit {amāre}'],
      ],
    },
  ],
};
