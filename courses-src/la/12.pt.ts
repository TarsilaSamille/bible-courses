import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('O Pai-Nosso em latim (Mt 6:9-13)'),
  subtitle: T('A oração que atravessa dezoito séculos sem trocar uma palavra'),
  section: T('Leitura da Vulgata e capstone'),
  body: C(`## O texto

> Pater noster, qui es in caelis,
> sanctificetur nomen tuum.
> Veniat regnum tuum.
> Fiat voluntas tua, sicut in caelo et in terra.
> Panem nostrum quotidianum da nobis hodie.
> Et dimitte nobis debita nostra,
> sicut et nos dimittimus debitoribus nostris.
> Et ne nos inducas in tentationem,
> sed libera nos a malo.

## As duas partes

Mateu 6:9-10 traz o **Pai-Nosso**; 6:11-13 traz o **Dou-nos o pão de cada dia**. A tradição separou as duas em rezas distintas, mas o texto grego e a Vulgata as trazem em sequência, como uma só oração. Repare que a segunda metade é inteiramente imperativo — o pedido do pão vira uma ordem: «dá-nos».

A forma mais antiga e mais fiel está em Lucas 11:2-4, e é praticamente idêntica:

> Pater noster, qui es in caelis, sanctificetur nomen tuum.
> Fiat voluntas tua sicut in caelo et in terra.
> Da nobis panem nostrum hodie.
> Et dimitte nobis peccata nostra.

## O imperativo mais antigo do Ocidente

Toda a oração está em formas que sobreviveram intactas até hoje. Compare o latim de Jerônimo com o que você rezou na escola:

- **Pater noster** — idêntico;
- **qui es in caelis** — idêntico;
- **sanctificetur nomen tuum** — idêntico;
- **Fiat voluntas tua** — idêntico;
- **panem nostrum quotidianum** — idêntico;
- **Et ne nos inducas in tentationem** — idêntico.

As formas que *não* sobreviveram são as do imperativo regular: {da} «dá» era {dā}; hoje ninguém diz mais. O latim litúrgico medieval congelou o texto num ou mais dialectos principais, e é por isso que a oração soa latinamente mesmo a quem não sabe latim.

## O que cada construção ensina

**Pater noster, qui es in caelis.** O relativo {qui} volta a {Pater} no Ablativo: o pronome relativo concorda com o antecedente em gênero e número, mas muda de caso conforme a função. Aqui, {in caelis} é lugar sem {in}?

**Sanctificetur nomen tuum.** Subjuntivo presente com {est} de {sum}: a 3.ª pessoa do subjuntivo de {sum} é {sit}, mas com verbo {facere} a Vulgata prefere o **passivo perifrástico**, {sanctificē-tur}. É o modo do desejo: «seja santificado».

**Fiat voluntas tua.** {Fiat} é o subjuntivo presente de {fio}, hoje perdido. A frase é literalmente «seja feita a tua vontade» — o verbo em segundo lugar, a ordem mais antiga.

**Panem nostrum quotidianum da nobis hodie.** {Panem} acusativo, {da} imperativo, {nobis} dativo, {hodie} advérbio. {Quotidianum} é um adjetivo grego latinizado (καθ᾽ ἡμέραν), usado como substantivo: «o de cada dia».

**Dimitte nobis debita nostra.** {Debita} é o neutro plural de {debitus} «devedor», substantivado: «as nossas dívidas». Perceba que {nobis} aqui é dativo, mas em {sed libera nos a malo} o {nos} é acusativo, de {libero}. O mesmo pronome, dois casos, por causa de dois verbos.

**Ne nos inducas in tentationem.** {Ne} + subjuntivo negativo: «não nos induzas». {Tentatio} vem do grego πειρασμός, «provação, tentação». A Vulgata escreve o que Lucas não escreve: em Lucas não há {et ne nos inducas}, e o verbo {inducere} é mais duro que o grego εἰσενέγκῃ.

**Sed libera nos a malo.** {Sed} «mas», {libera} imperativo, {a} + ablativo {malo}. O grego original diz «livra-nos do mal»; o latim muda a preposição de genitivo para ablativo, o que dá a nuance de «do poder do mal».`),
  vocab: [
    V('Pater', 'pater', 'Pai'),
    V('noster', 'noster', 'nosso'),
    V('caelum', 'caelum', 'céu (pl. {caeli})'),
    V('es', 'sum', 'és (2.ª sing.)'),
    V('sanctificetur', 'sanctifico', 'seja santificado (subj. pass.)'),
    V('nomen', 'nomen', 'nome'),
    V('veniat', 'venio', 'que venha (subj.)'),
    V('fiat', 'fio', 'seja feito (de {fio})'),
    V('voluntas', 'voluntas', 'vontade'),
    V('panis', 'panis', 'pão'),
    V('quotidianum', 'quotidianus', 'de cada dia'),
    V('da', 'do', 'dá! (imperativo)'),
    V('dimitte', 'dimitto', 'perdoa! (imperativo)'),
    V('debita', 'debitus', 'dívidas (neutro plural)'),
    V('inducas', 'induco', 'induzas (subj.)'),
    V('malo', 'malum', 'mal (abl. de {malum})'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Dimitte nobis debita nostra}, que caso tem {nobis} e por quê?'),
    options: [
      T('Dativo: {dimittere} governa duas coisas — o objeto e o destinatário'),
      T('Acusativo: {nobis} é o pronome, e pronomes são sempre em acusativo'),
      T('Ablativo: {in} foi omitido'),
      T('Genitivo: é a possessão de {debita}'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Por que {sanctificetur} e não {sanctificet}?'),
      options: [
        T('Porque é um verbo transitivo: usa o passivo perifrástico em -r no subjuntivo'),
        T('Porque {et} muda o verbo para o subjuntivo'),
        T('Porque o latim não tem forma ativa para esse verbo'),
        T('Porque {nomen} é neutro e exige passivo'),
      ],
      answer: 0,
      hint: T('Regra §4.'),
    },
    {
      kind: 'fill',
      prompt: T('O verbo que sum significa «seja feito» na oração: fi_ _'),
      answer: 'fiat',
      hint: T('É o subjuntivo presente de {fio}, hoje perdido do latim.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma ao que ela significa na oração'),
      pairs: [
        { a: T('Pater'), b: T('«Pai» — vocativo, a forma que sobreviveu') },
        { a: T('es'), b: T('«és» — 2.ª sing. de {sum}, sem {ei}') },
        { a: T('da'), b: T('«dá!» — imperativo de {do}, hoje congelado') },
        { a: T('sed'), b: T('«mas» — conjunção adversativa') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{qui} concorda com o antecedente em gênero e número, mas recebe o caso da sua própria função.',
      ),
    },
    {
      n: '2',
      text: T(
        'A oração é toda imperativo ou subjuntivo — não há um único indicativo a não ser {est} de {sum}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{ne} + subjuntivo significa «não (seja)»: é o subjuntivo negativo, e não uma negação do indicativo.',
      ),
    },
    {
      n: '4',
      text: T(
        'Verbos transitivos formam o «deve ser» no subjuntivo com o passivo perifrástico: {sanctificētur}.',
      ),
    },
    {
      n: '5',
      text: T(
        'O mesmo pronome muda de caso conforme o verbo: {nobis} dativo de {dimittere}, {nos} acusativo de {libero}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que o latim?'),
      text: T(
        'O shooters latim não é uma escolhaliterária do Ocidente, é um accidentedocumento: a Igreja de Roma, única da redonde a falar latim com a littera, só precisou de uma tradução para falar a língua de Roma — e as orações litúrgicas são as poucas frases que qualquer fiel pode rezar em latim, porque todos aprenderam. Grego, Aramaico e hebraico fly.',
      ),
    },
    {
      label: T('Tradução literal:'),
      text: T(
        'Em latim, o pão é {panis} (masc.), não {pāne}; e «de cada dia» é {quotidianum}, um adjetivo grego. O latim litúrgico soa mais duro que o português justamente porque não traduz: repete as palavras. Um leitor de Portuguese reconhece o sentido; um leitor de latim reconhece a gramática.',
      ),
    },
  ],
  examples: [
    { text: 'Pater noster', gloss: T('«Pai nosso» — {Pater} em vocativo') },
    { text: 'qui es in caelis', gloss: T('«que estás nos céus» — relativo em ablativo') },
    { text: 'sanctificetur nomen tuum', gloss: T('«seja santificado o teu nome»') },
    { text: 'Veniat regnum tuum', gloss: T('«venha o teu reino» — {re regnum} neutro') },
    { text: 'Fiat voluntas tua', gloss: T('«seja feita a tua vontade»') },
    { text: 'Panem nostrum quotidianum', gloss: T('«o nosso pão de cada dia»') },
    { text: 'da nobis hodie', gloss: T('«dá-nos hoje» — {nobis} em dativo') },
    { text: 'dimitte nobis debita', gloss: T('«perdoa as nossas dívidas»') },
    { text: 'ne nos inducas in tentationem', gloss: T('«não nos induzas em tentação»') },
    { text: 'sed libera nos a malo', gloss: T('«mas liberta-nos do mal»') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — O Pai-Nosso: Mateus 6:9-13 e Lucas 11:2-4'),
      head: [T('Mt 6:9-13'), T('Lc 11:2-4'), T('Português')],
      rows: [
        ['{Pater noster, qui es in caelis}', T('idem'), 'Pai nosso, que estás nos céus'],
        ['{sanctificetur nomen tuum}', T('idem'), 'seja santificado o teu nome'],
        ['{Veniat regnum tuum}', T('ausente em Lucas'), 'venha o teu reino'],
        [
          '{Fiat voluntas tua, sicut in caelo et in terra}',
          T('sem «et in terra»'),
          'seja feita a tua vontade',
        ],
        [
          '{Panem nostrum quotidianum da nobis hodie}',
          T('{Da nobis panem nostrum hodie}'),
          'o nosso pão de cada dia',
        ],
        [
          '{Et dimitte nobis debita nostra}',
          T('{Et dimitte nobis peccata nostra}'),
          'e perdoa as nossas dívidas',
        ],
        [
          '{Et ne nos inducas in tentationem}',
          T('ausente em Lucas'),
          'e não nos induzas em tentação',
        ],
      ],
    },
    {
      caption: T('Tabela 2 — Formas da oração: o que mudou e o que ficou'),
      head: [T('Forma na Vulgata'), T('Latim litúrgico'), T('Português'), T('Espanhol')],
      rows: [
        ['{Pater noster}', 'Pater noster', 'Pai nosso', 'Padre nuestro'],
        ['{qui es in caelis}', 'qui es in caelis', 'que estás nos céus', 'que estás en el cielo'],
        [
          '{sanctificetur nomen tuum}',
          'sanctificetur nomen tuum',
          'seja santificado o teu nome',
          'sea santificado tu nombre',
        ],
        [
          '{fiat voluntas tua}',
          'fiat voluntas tua',
          'seja feita a tua vontade',
          'hágase tu voluntad',
        ],
        ['{da nobis hodie}', 'da nobis hodie', 'dá-nos hoje', 'danos hoy'],
        [
          '{dimitte nobis debita}',
          'dimitte nobis debita',
          'perdoa as nossas dívidas',
          'perdona nuestras deudas',
        ],
        ['{a malo}', 'a malo', 'do mal', 'del mal'],
      ],
    },
  ],
};
