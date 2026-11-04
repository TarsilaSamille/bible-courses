import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Leitura: Ave Maria e Magnificat'),
  subtitle: T('{Ave Maria, grātiā plēna} — duas orações latinas para ler e decompor'),
  section: T('Leitura'),
  body: C(`## Os textos

> **Ave Maria, grātiā plēna, Dominus tecum. Benedicta tu in mūlieribus.**

> **Magnificat anima mea Dominum. Et exsultāvit spīritus meus in Deō salūtārī meō.**

O primeiro é o começo de Lucas 1:28; o segundo, o cântico de Lucas 1:46-55. Nenhum dos dois começou como oração: são frases de narração que a tradição transformou em prece. Isso torna os dois excellent material de leitura: a sintaxe é a da narração bíblica, não a da oração.

## Ave Maria, grātiā plēna

| Forma | Análise | Valor |
|---|---|---|
| {ave} | interjeição, de {āvē | salve |
| {grātiā plēna} | Ablativo de qualidade, sem preposição | «cheia de graça» |
| {Dominus} | Nominativo, sujeito de {adest} implícito | «o Senhor» |
| {tecum} | pronome + {cum} | «contigo» |
| {benedicta} | particípio perfeito, Ablativo feminino | «bendita» |
| {in mūlieribus} | {in} + Ablativo | «entre as mulheres» |

Duas construções valem a atenção. **Ablativo sem preposição**: {grātiā plēna} é a qualidade da pessoa descrita, exatamente como {virō doctus} «de um homem sábio». E {tecum} é {cum tecum}: a preposição vai para trás do pronome, como em {mecum}, {secum}, {nobiscum}, {vobiscum} — regra que vale para o pronome, não para o substantivo ({cum rēgē} «com o rei»).

## Magnificat anima mea Dominum

{Magnificat} é 3.ª pessoa do perfeito de {magnificō}: «o alma magnifica». {anima} é o sujeito, {mea} o possessivo, {Dominum} o Acusativo objeto. Nada mais: a frase tem sujeito, verbo e objeto, na ordem mais simples possível do latim.

O verso seguinte muda tudo: {Et exsultāvit spīritus meus in Deō salūtārī meō}. {Exsultāvit} é o mesmo tipo de perfeito, mas **intransitivo**, com {in} + Ablativo ({in Deō} «em Deus»). O verbo governa um caso diferente porque muda o sentido: transitivos vão ao Acusativo, intransitivos ao Ablativo, ao Dativo ou à preposição que o dicionário indicar.

## Leitura comparada

Compare a frase de Maria em Lucas 1:28 com a do anjo em Lucas 1:19: {Erat mihi — et nunc erit}. A construção é a mesma, e por isso a memorização do Magnificat fixa um padrão que você encontra em toda a Vulgata.

## O essencial

Você leu quatro palavras com quatro gramáticas distintas: {grātiā} (Ablativo de qualidade), {tecum} ({cum} posposto), {Dominum} (Acusativo) e {in Deō} (Ablativo de direção). Reconhecer a função resolve a tradução.`),
  vocab: [
    V('ave', 'ave', 'salve! (interjeição)'),
    V('grātiā', 'gratia', 'graça (abl. de qualidade)'),
    V('plēna', 'plenus', 'cheia (abl. f. sg.)'),
    V('tecum', 'cum', 'contigo ({cum} + pronome)'),
    V('benedicta', 'benedico', 'bendita (part. perf. abl. f.)'),
    V('mūlieribus', 'mulier', 'mulheres (dat./abl. pl.)'),
    V('magnificāt', 'magnifico', 'magnifica (3.ª sg. perf.)'),
    V('anima', 'anima', 'alma (nom. sg.)'),
    V('dominum', 'dominus', 'o Senhor (ac. sg.)'),
    V('exsultāvit', 'exsulto', 'exultou (3.ª sg. perf., intr.)'),
    V('spīritus', 'spiritus', 'espírito (nom. sg.)'),
    V('salūtāri', 'salutaris', 'salvador (abl. sg.)'),
    V('humilitātem', 'humilitas', 'humildade (ac. sg.)'),
    V('ancillae', 'ancilla', 'serva (gen. sg.)'),
    V('recordātor', 'recordator', 'lembrança (gen. sg.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {grātiā plēna}, qual é a função do Ablativo?'),
    options: [
      T('Ablativo de qualidade, sem preposição'),
      T('Ablativo de meio, com {ā}'),
      T('Ablativo de agente, com {ā} ou {ab}'),
      T('Ablativo de lugar, com {in}'),
    ],
    answer: 0,
    hint: T('Regra §1: qualidade se expressa sem preposição.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete com {cum}: {mecum, secum, ...} → ___ vobiscum = «con vocês»'),
      answer: 'nobiscum',
      hint: T('{nos} + {bis} + {cum}.'),
    },
    {
      kind: 'choose',
      prompt: T('Em {exsultāvit spīritus meus in Deō}, por que {in Deō} é Ablativo?'),
      options: [
        T('Porque {exsultāvit} é intransitivo: não há objeto direto'),
        T('Porque {in} sempre governa o Acusativo'),
        T('Porque {spīritus} é feminino'),
        T('Porque {Deus} é Dativo de destino'),
      ],
      answer: 0,
      hint: T('Regra §2: o caso vem da função, não do substantivo.'),
    },
    {
      kind: 'fill',
      prompt: T('Qual é o Acusativo de {Dominus} no Magnificat?'),
      answer: 'Dominum',
      hint: T('É o objeto direto de {magnificāt}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma à função'),
      pairs: [
        { a: T('grātiā plēna'), b: T('ablativo de qualidade') },
        { a: T('tecum'), b: T('{cum} posposto ao pronome') },
        { a: T('Dominum'), b: T('acusativo objeto') },
        { a: T('in mūlieribus'), b: T('{in} + ablativo de lugar') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('O Ablativo de qualidade dispensa preposição: {virō doctus} «de um homem sábio».'),
    },
    {
      n: '2',
      text: T(
        'O caso segue a função do verbo: transitivo vai ao Acusativo, intransitivo ao Ablativo ou ao Dativo.',
      ),
    },
    {
      n: '3',
      text: T(
        'Com pronome oblíquo, {cum} fica depois e se funde: {mecum}, {secum}, {nobiscum}, {vobiscum}.',
      ),
    },
    {
      n: '4',
      text: T(
        'O perfeito é a forma mais comum da Vulgata; nas narrativas, quase tudo está no perfeito.',
      ),
    },
    {
      n: '5',
      text: T(
        '{in} + Acusativo indica direção, {in} + Ablativo indica lugar onde: {in cāsam} «para dentro da casa», {in cāsā} «em casa».',
      ),
    },
  ],
  notes: [
    {
      label: T('Oração que não era oração'),
      text: T(
        'O {Ave Maria} é a benção de Gabriel em Lucas 1:28, e o {Magnificat} é o cântico de Maria em 1:46. Ambos são frases de narração no indicativo perfeito. Se você os traduzir como oração, errará o caso do {Dominum}: o texto diz «o Senhor está com ela» (sujeito {Dominus}, verbo {adest} implícito), não «senhor» como vocativo.',
      ),
    },
    {
      label: T('Os textos litúrgicos divergem'),
      text: T(
        'A liturgia latina omiteu a segunda metade do Magnificat e trocou {tecum} por {tēcum adiuvāre} «estar contigo». As traduções varyam em «mulheres» (genitivo partitivo em português antigo) e no verbo de {benedicta}. A forma do texto bíblico é sempre a melhor referência.',
      ),
    },
  ],
  examples: [
    { text: 'grātiā plēna', gloss: T('cheia de graça (abl. de qualidade)') },
    { text: 'Dominus tecum', gloss: T('o Senhor está contigo (sujeito + {cum} enclítico)') },
    { text: 'benedicta tu in mūlieribus', gloss: T('bendita entre as mulheres') },
    { text: 'magnificat anima mea Dominum', gloss: T('a minha alma magnificou o Senhor') },
    { text: 'respexit humilitātem ancillae suae', gloss: T('olhou para a humildade da sua serva') },
    { text: 'recordātor fideī suae', gloss: T('lembrança da sua fidelidade') },
    { text: 'mecum', gloss: T('contigo ({cum} + {mē})') },
    { text: 'in cāsā', gloss: T('em casa (lugar)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Formas do Magnificat'),
      head: [T('Latim'), T('Função'), T('Português')],
      rows: [
        ['magnificāt', 'verbo, 3.ª sg. perf. de {magnificō}', 'magnifica'],
        ['anima mea', 'sujeito + possessivo', 'a minha alma'],
        ['Dominum', 'objeto direto', 'o Senhor'],
        ['exsultāvit', 'verbo intransitivo, perf.', 'exultou'],
        ['in Deō', '{in} + ablativo', 'em Deus'],
        ['salūtārī meō', 'ablativo adjective + possessivo', 'meu salvador'],
      ],
    },
    {
      caption: T('Tabela 2 — {cum} com pronombre e com substantivo'),
      head: [T('Tipo'), T('Latim'), T('Português')],
      rows: [
        ['Pronome oblíquo', 'mecum', 'contigo'],
        ['Pronome oblíquo', 'secum', 'consigo'],
        ['Pronome oblíquo', 'nobiscum', 'conosco'],
        ['Pronome oblíquo', 'vobiscum', 'convosco'],
        ['Substantivo', '{cum rēgē}', 'com o rei'],
      ],
    },
  ],
};
