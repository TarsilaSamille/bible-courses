import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('A quarta e a quinta declinações'),
  subtitle: T('{manus, -ūs} e {diēs, -eīs} — as duas declinações que fecham o sistema'),
  section: T('Declinações e o verbo sum'),
  body: C(`## A quarta declinação

A quarta reúne quase só masculinhos e neutros, e seu tema termina em *-u*. O modelo é {manus, -ūs} «mão»; {manus} é ambíguo, e o gênero aparece no Nominativo: {manus} masculino, {manus, -ūs} neutro, como {genus} «gênero, estirpe» e {corpus} «corpo».

A vogal do tema é longa em quase todo o paradigma, e por isso o Nominativo e o Genitivo se parecem: {manus} contra {manūs}. O Dativo singular recebe {uī} e o Ablativo {ū}, para que o Genitivo {ūs} fique livre.

| Caso | Singular | Plural |
|---|---|---|
| Nom. | manŭs | manūs |
| Gen. | manūs | manuum |
| Dat. | manuī | manibus |
| Ac. | manum | manūs |
| Abl. | manū | manibus |

O Acusativo plural repete o Nominativo plural, como na primeira e na segunda: {canī} «cães», {manūs} «mãos».

## A quinta declinação

A quinta termina em {-ēs} e é quase toda feminina. O modelo é {diēs, diēī} «dia», que pode ser masculino ou feminino; {rēs, reī} «coisa, assunto», {spēs, speī} «esperança» e {fidēs, fideī} «fé» são femininos.

| Caso | Singular | Plural |
|---|---|---|
| Nom. | diēs | diēs |
| Gen. | diēī | diērum |
| Dat. | diēī | diēbus |
| Ac. | diem | diēs |
| Abl. | diē | diēbus |

Só o Acusativo {diem} e o Ablativo {diē} se diferenciam, e ambos são breves: as formas longas são o Genitivo e o Dativo {diēī}.

## Leitura

{Īn manūs tuās} «nas tuas mãos» (Lucas 23:46) — preposição mais Ablativo de lugar sem movimento, a frase litúrgica fixa. {Per omnia saecula saeculōrum} «por todos os séculos dos séculos» — plural de quarta com Genitivo sobre Genitivo. {Fidēs, spēs, caritās} «fé, esperança, amor» (1 Coríntios 13:13) — três substantivos de quinta em sequência.

## O essencial

Quarta e quinta fecham o sistema sem inventar terminações novas: {-ibus} repete a terceira, {-ēs} não repete nada, e todo plural continua em {-s}.`),
  vocab: [
    V('manus', 'manus', 'mão (nom. sg.)'),
    V('manūs', 'manus', 'da mão (gen. sg.) / mãos (nom. e ac. pl.)'),
    V('manuī', 'manus', 'à mão (dat. sg.)'),
    V('manum', 'manus', 'a mão (ac. sg.)'),
    V('manuum', 'manus', 'das mãos (gen. pl.)'),
    V('manibus', 'manus', 'às mãos (dat. pl.) / com as mãos (abl. pl.)'),
    V('cornu', 'cornu', 'chifre, canto (da lua)'),
    V('genus', 'genus', 'gênero, estirpe, classe'),
    V('corpus', 'corpus', 'corpo'),
    V('diēs', 'dies', 'dia'),
    V('diēī', 'dies', 'do dia (gen. sg.)'),
    V('diēbus', 'dies', 'nos dias (dat./abl. pl.)'),
    V('rēs', 'res', 'coisa, assunto, realidade'),
    V('spēs', 'spes', 'esperança'),
    V('fidēs', 'fides', 'fé, confiança, fidelidade'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {in manibus}, que caso é {manibus} e por quê?'),
    options: [
      T('Ablativo plural: depois de {in}, o lugar onde leva Ablativo'),
      T('Dativo plural: {in} comanda o Dativo'),
      T('Genitivo plural: {-ibus} é Genitivo nesta declinação'),
      T('Acusativo plural: o Nominativo e o Acusativo são iguais'),
    ],
    answer: 0,
    hint: T('Regra §2: {-ibus} é ambíguo, mas a preposição desambigua.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Genitivo singular de {manus}: man_'),
      answer: 'ūs',
      hint: T('É a terminação do Nominativo, mas com a vogal longa.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase usa Ablativo de lugar?'),
      options: [
        T('{in manibus tuīs} — nas tuas mãos'),
        T('{manum tuam tenet} — ele segura a tua mão'),
        T('{manus puerī} — a mão do menino'),
        T('{manibus dat} — deu as mãos'),
      ],
      answer: 0,
      hint: T('Regra §3: lugar onde pede {in} mais Ablativo.'),
    },
    {
      kind: 'fill',
      prompt: T('Traduza {fīdēs, spēs, caritās}.'),
      answer: 'faith, hope, love',
      hint: T('Três substantivos femininos da quinta declinação.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma ao caso correspondente'),
      pairs: [
        { a: T('manuī'), b: T('dativo singular (4.ª)') },
        { a: T('manū'), b: T('ablativo singular (4.ª)') },
        { a: T('diēī'), b: T('genitivo singular (5.ª)') },
        { a: T('manuum'), b: T('genitivo plural (4.ª)') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('A quarta declinação tem temas em {-u}: {manus}, {genus}, {corpus}, {cornu}.'),
    },
    {
      n: '2',
      text: T(
        'Dativo e Ablativo plural terminam em {-ibus}, como na primeira e na terceira: {puellīs}, {rēgibus}, {manibus}.',
      ),
    },
    {
      n: '3',
      text: T(
        'A quinta declinação é quase toda feminina e tem temas em {-ē}: {rēs, reī}, {spēs, speī}, {fidēs, fideī}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Nominativo e Acusativo plural coincidem em toda declinação; a vogal final marca a função: {puellās} Acusativo, {puellae} Genitivo ou Dativo.',
      ),
    },
    {
      n: '5',
      text: T(
        'Só {diēs} e poucos nomes ({sēs, merīdiēs, aliēs}...) são ambíguos em gênero; os demais o revelam pelo Nominativo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Barra = vogal longa, não sílaba extra.'),
      text: T(
        'Os textos da Vulgata aparecem sem barras. Elas estão aqui para que você veja que {manus} e {manūs} têm a mesma vogal e a mesma sílaba, mas pesos diferentes. Quem transcreve latim hoje costuma omiti-las.',
      ),
    },
    {
      label: T('A quinta declinação é quase um túmulo.'),
      text: T(
        'De milhares de substantivos que existiram, a quinta conserva pouquíssimos em uso: {rēs}, {spēs}, {fidēs}, {quiēs} «quieto», {pēs} «pé», {sēs} «sede» e {āles} «asa». Eles formam o {fidēs, spēs, caritās} de 1 Coríntios 13 e o {quiēs} das bem-aventuranças. Decorando o paradigma inteiro, você ganha uma declinação quase inteira de graça.',
      ),
    },
  ],
  examples: [
    { text: 'in manūs tuās', gloss: T('nas tuas mãos (Lc 23:46)') },
    {
      text: 'per omnia saecula saeculōrum',
      gloss: T('por todos os séculos dos séculos (litúrgico)'),
    },
    { text: 'fīdēs, spēs, caritās', gloss: T('fé, esperança, amor (1Cor 13:13)') },
    { text: 'manus tuae', gloss: T('as tuas mãos (gen. pl.)') },
    { text: 'diei illius', gloss: T('daquele dia (gen. sg. + gen. sg.)') },
    { text: 'rēs pūblica', gloss: T('o Estado, a coisa pública') },
    { text: 'spēs nostra', gloss: T('a nossa esperança (nom. sg.)') },
    { text: 'in manibus eius', gloss: T('nas mãos dele (possessor masculino)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Quarta declinação: {manus, -ūs}'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        ['Nominativo', 'manus', 'manūs'],
        ['Vocativo', 'manus', 'manūs'],
        ['Genitivo', 'manūs', 'manuum'],
        ['Dativo', 'manuī', 'manibus'],
        ['Acusativo', 'manum', 'manūs'],
        ['Ablativo', 'manū', 'manibus'],
      ],
    },
    {
      caption: T('Tabela 2 — Quinta declinação: {diēs, -eīs}'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        ['Nominativo', 'diēs', 'diēs'],
        ['Vocativo', 'diēs', 'diēs'],
        ['Genitivo', 'diēī', 'diērum'],
        ['Dativo', 'diēī', 'diēbus'],
        ['Acusativo', 'diem', 'diēs'],
        ['Ablativo', 'diē', 'diēbus'],
      ],
    },
  ],
};
