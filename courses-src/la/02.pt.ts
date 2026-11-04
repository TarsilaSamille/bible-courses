import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('A primeira declinação'),
  subtitle: T('{puella, puellae} — seis formas, seis funções'),
  section: T('Declinações e o verbo sum'),
  body: C(`## O tema em -a

Quase todo substantivo feminino latino termina em {a}: {puella} «menina», {rosa} «rosa», {via} «caminho», {tabula} «tábua», {família} «família». Adeclinação é a mais fácil e a mais frequente, e por isso a primeira de qualquer método.

O tema é o radical mais o {a} do nominativo: de {puella} o tema é {puellā-}. Encaixamos as terminações de caso e número sobre esse tema:

| Número | Caso | Terminação | Forma |
|---|---|---|---|
| singular | nominativo | -a | puellă |
| singular | vocativo | -a | puellă |
| singular | genitivo | -ae | puellāe |
| singular | dativo | -ae | puellāe |
| singular | acusativo | -am | puellām |
| singular | ablativo | -ā | puellā |

A barra indica a vogal longa: em {puellām} o {a} é longo e o acento fica nele.

## O plural

O plural troca {a} por {ae} e alonga temas curtos com {i}: {puellae} «meninas», {viae} «caminhos», {tabulae} «tábuas». Em substantivos femininos de 1.ª, o acusativo plural termina em {ās}: {puellās} «as meninas» — a mesma terminação do acusativo singular, mas com a s.

Repare num detalhe que economiza muito trabalho: genitivo e dativo são **idênticos** em toda a declinação, {ae} no singular e {īs} no plural. O contexto decide qual é qual.

## Como o contexto escolhe o caso

- Genitivo: posse ou relação — {puellae ROSAE} «da menina».
- Dativo: destinatário — {puellae ROSAM dat} «dá a rosa à menina».
- Acusativo: objeto direto — {puellam rosam amat} «a menina ama a rosa».
- Ablativo: meio, lugar, agente — {rosā puer amat} «o menino ama com a rosa».

O acusativo e o ablativo são as duas portas do verbo: escolha o sentido e o caso sai sozinho.

## Exercício de leitura

Na Vulgata de Lucas, o cântico da {maria} (Lúcas 1:46) repete o mesmo substantivo com casos diferentes:

{Et magnificat anima mea Dominum} «E a minha alma magnificou o Senhor» — {anima} é nominativo, sujeito.
{Et exsultavit spiritus meus in Deo salutari meo} «e o meu espírito se regozijou em Deus, meu salvador» — {Deo} é ablativo de lugar sem {in}.
{Quia respexit humilitatem ancillae suae} «porque olhou para a baixeza da sua serva» — {humilitatem} acusativo governado por {respexit} «olhou».`),
  vocab: [
    V('puella', 'puella', 'menina'),
    V('rosa', 'rosa', 'rosa'),
    V('via', 'via', 'caminho, via'),
    V('tabula', 'tabula', 'tábua, escritura'),
    V('porta', 'porta', 'porta'),
    V('aqua', 'aqua', 'água'),
    V('terra', 'terra', 'terra'),
    V('familia', 'familia', 'família'),
    V('provincia', 'provincia', 'província'),
    V('schola', 'schola', 'escola'),
    V('stella', 'stella', 'estrela'),
    V('luna', 'luna', 'lua'),
    V('amica', 'amica', 'amiga'),
    V('anima', 'anima', 'alma'),
    V('maria', 'maria', 'Maria (de Magnificat)'),
    V('ancilla', 'ancilla', 'serva, escrava'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {puellās}, qual é o caso e por quê?'),
    options: [
      T('Genitivo plural: termina em -ās'),
      T('Acusativo plural: -ās é o acusativo plural da 1.ª'),
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
      hint: T('Genitivo e dativo são idênticos: -ae.'),
    },
    {
      kind: 'choose',
      prompt: T('Em {puellae rosam dat}, que função tem {puellae}?'),
      options: [
        T('Genitivo: posse'),
        T('Dativo: destinatário'),
        T('Acusativo: objeto direto'),
        T('Ablativo: meio'),
      ],
      answer: 1,
      hint: T('Regra §3: destinatário leva dativo.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue {tabula} ao caso correspondente'),
      pairs: [
        { a: T('tabulam'), b: T('acusativo singular') },
        { a: T('tabula (liber est bonus)'), b: T('nominativo singular') },
        { a: T('o tabula, audi me'), b: T('vocativo singular (também -a)') },
        { a: T('tabularum'), b: T('genitivo plural') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    { n: '1', text: T('A 1.ª declinação reune os femininos em -a; o tema é o radical mais {ā}.') },
    {
      n: '2',
      text: T(
        'Genitivo e dativo têm a mesma forma em toda a declinação: {ae} no singular, {īs} no plural.',
      ),
    },
    {
      n: '3',
      text: T(
        'Acusativo plural {-ās} e ablativo plural {-īs} são as duas portas do verbo: objeto direto de um lado, meio do outro.',
      ),
    },
    {
      n: '4',
      text: T(
        'O acusativo singular {-am} distingue o objeto do ablativo singular {-ā}: a barra é o único teste.',
      ),
    },
    { n: '5', text: T('Nominativo e vocativo coincidem em -a; só o contexto os separa.') },
  ],
  notes: [
    {
      label: T('Barra de latim:'),
      text: T(
        'Os textos da Vulgata vêm impressos sem nenhuma barra. Elas estão aqui para você enxergar a vogal longa; se a palavra aparecer sem barra na tela, o som é o mesmo. Quem escreve latim hoje normalmente deixa tudo sem barra para não multiplicar as letras do teclado.',
      ),
    },
    {
      label: T('Isolamento:'),
      text: T(
        '{Puella pulchra rosam habet}: a menina bonita tem uma rosa. Em português diríamos «a menina tem uma rosa bonita» — o adjetivo muda de lugar conforme o substantivo que ele modifica. A ordem em latim é mais solta, e é a **concordância** que amarra o adjetivo ao nome, não a posição.',
      ),
    },
  ],
  examples: [
    { text: 'puella', gloss: T('a menina (nom. sing.)') },
    { text: 'puellae', gloss: T('da menina, ou à menina (gen./dat. sing.)') },
    { text: 'puellam', gloss: T('a menina (acus. sing.)') },
    { text: 'puellā', gloss: T('pela menina, com a menina (abl. sing.)') },
    { text: 'puellarum', gloss: T('das meninas (gen. plural)') },
    { text: 'puellis', gloss: T('às meninas, com as meninas (dat./abl. plural)') },
    { text: 'rosa', gloss: T('rosa') },
    { text: 'rosam', gloss: T('a rosa (objeto)') },
    { text: 'via', gloss: T('caminho (nom.), «vida, caminho»') },
    { text: 'ancilla', gloss: T('serva — em Lucas 1:48, Maria se diz {ancilla}') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — 1.ª declinação: {puella, -ae}'),
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
      caption: T('Tabela 2 — Outros temas da 1.ª: o que muda'),
      head: [T('Nom. sing.'), T('Gen. sing.'), T('Abl. sing.'), T('Observação')],
      rows: [
        ['rosa', 'rosae', 'rosā', T('curto, sem {i} no plural')],
        ['via', 'viae', 'viā', T('idem')],
        ['tabula', 'tabulae', 'tabulā', T('com {i}: {tabulīs}')],
        ['familia', 'familiae', 'familiā', T('o {i} é breve: {familiaris}')],
      ],
    },
  ],
};
