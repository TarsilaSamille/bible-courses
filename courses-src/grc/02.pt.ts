import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('1ª declinação — femininos'),
  subtitle: T('ἀλήθεια, δόξα, ὥρα: o genitivo entrega o grupo'),
  section: T('O substantivo'),
  body: C(`## Três declinações, um ponto de partida

O grego tem três declinações — três famílias de terminações para substantivos e adjetivos. A primeira reúne sobretudo substantivos femininos, e é por ela que começamos: suas terminações são regulares, e o vocabulário deste grupo ({ἀλήθεια} «verdade», {δόξα} «glória», {ζωή} «vida», {ἐκκλησία} «igreja») está entre o mais frequente do Novo Testamento.

O truque para identificar o grupo de um substantivo é olhar o genitivo singular: ele termina em {-ης} ou em {-ας}. O dicionário sempre informa o genitivo ao lado do nominativo ({ἀλήθεια, -ας}), justamente porque essa forma desfaz qualquer dúvida.

## Femininos em -η e em -α

Há dois subgrupos femininos. As palavras em {-η} ({ἀλήθεια}, {γραφή}, {φωνή}) fazem o singular todo em {-η}: genitivo {ἀληθείας}, dativo {ἀληθείᾳ}, acusativo {ἀλήθειαν}. Note o iota subscrito no dativo ({ᾳ}) — marca registrada da 1ª declinação.

As palavras em {-α} se dividem. Depois de {ρ}, {ε} ou {ι} (o chamado alfa puro), o {-α} se mantém em todo o singular: {ἡμέρα, ἡμέρας}, {δόξα, δόξης}, {οἰκία}. Nos demais casos, o singular alterna: nominativo e acusativo em {-α}, genitivo e dativo em {-η}: {θάλασσα, θαλάσσης}, {ὥρα, ὥρας}. Essa alternância é herança do dialeto jônico e aparece o tempo todo no Novo Testamento.

## O plural é um só

Boa notícia: no plural, os três grupos femininos são idênticos — nominativo {-αι}, genitivo {-ῶν}, dativo {-αις}, acusativo {-ας}. O genitivo plural {-ῶν}, com ômega e circunflexo, é inconfundível e reaparece na 2ª declinação e nos adjetivos. Memorize o plural uma vez e ele serve para todas as palavras deste capítulo.

## Os masculinos da 1ª declinação

Alguns masculinos usam as terminações da 1ª declinação: os terminados em {-ας} ({προφήτης, -ου}, {νεανίας, -ου}) e em {-ης} ({μαθητής, -ου}). O nominativo singular termina em {-ς}, como nos masculinos da 2ª declinação, mas o genitivo singular termina em {-ου} — de novo, o genitivo entrega o grupo. O plural desses masculinos é igual ao das femininas ({μαθηταί, μαθητῶν}).`),
  vocab: [
    V('ἀλήθεια', 'ἀλήθεια', 'verdade'),
    V('ἀληθείας', 'ἀλήθεια', 'da verdade (gen.)'),
    V('δόξα', 'δόξα', 'glória'),
    V('ζωή', 'ζωή', 'vida'),
    V('φωνή', 'φωνή', 'voz'),
    V('γραφή', 'γραφή', 'escritura'),
    V('ἐκκλησία', 'ἐκκλησία', 'igreja'),
    V('βασιλεία', 'βασιλεία', 'reino'),
    V('ἡμέρα', 'ἡμέρα', 'dia'),
    V('ὥρα', 'ὥρα', 'hora'),
    V('εἰρήνη', 'εἰρήνη', 'paz'),
    V('ψυχή', 'ψυχή', 'alma, vida'),
    V('μαθητής', 'μαθητής', 'discípulo'),
    V('μαθητοῦ', 'μαθητής', 'do discípulo (gen.)'),
    V('προφήτης', 'προφήτης', 'profeta'),
    V('νεανίας', 'νεανίας', 'jovem'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o genitivo singular de «ἀλήθεια»?'),
    options: [T('ἀληθείας'), T('ἀληθεῖαι'), T('ἀληθείᾳ'), T('ἀλήθειαν')],
    answer: 0,
    hint: T('Palavra em -η: o genitivo singular termina em -ης.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o dativo plural: ταῖς ___ («às verdades»).'),
      answer: 'ἀληθείαις',
      hint: T('O dativo plural da 1ª declinação termina em -αις.'),
    },
    {
      kind: 'choose',
      prompt: T('«ὥρας» (de ὥρα) é genitivo em -ας porque…'),
      options: [
        T('ὥρα tem alfa puro'),
        T('ὥρα tem alfa impuro (após ω)'),
        T('ὥρα é masculina'),
        T('ὥρα é da 2ª declinação'),
      ],
      answer: 1,
      hint: T('Alfa puro só depois de ρ, ε, ι — regra §2.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma ao seu caso.'),
      pairs: [
        { a: 'μαθητοῦ', b: 'gen. sg. masc.' },
        { a: 'μαθητῇ', b: 'dat. sg. masc.' },
        { a: 'μαθηταί', b: 'nom. pl. masc.' },
        { a: 'ἀληθειῶν', b: 'gen. pl. fem.' },
      ],
      answer: [
        { 0: '0', 1: '-', 2: '0' },
        { 0: '1', 1: '-', 2: '1' },
        { 0: '2', 1: '-', 2: '2' },
        { 0: '3', 1: '-', 2: '3' },
      ],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O genitivo singular identifica o grupo: {-ης} para palavras em -η e -α impuro; {-ας} para -α puro.',
      ),
    },
    {
      n: '2',
      text: T(
        'Alfa é puro depois de ρ, ε, ι ({ἡμέρα}, {δόξα}, {οἰκία}); nos demais casos, o singular alterna -α/-η ({ὥρα, ὥρας}).',
      ),
    },
    {
      n: '3',
      text: T(
        'O dativo singular da 1ª declinação leva iota subscrito: {ἀληθείᾳ}, {δόξῃ}, {μαθητῇ}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Masculinos em {-ας}/{-ης} fazem genitivo em {-ου} ({μαθητοῦ}, {προφήτου}) e plural igual ao das femininas.',
      ),
    },
    {
      n: '5',
      text: T(
        'O plural é único para todo o capítulo: {-αι}, {-ῶν}, {-αις}, {-ας}. O {-ῶν} com circunflexo não se confunde com nada.',
      ),
    },
  ],
  notes: [
    {
      label: T('Como memorizar:'),
      text: T(
        'Decore sempre o par nominativo + genitivo ({γραφή, -ῆς}; {θάλασσα, -ης}; {μαθητής, -οῦ}). Só o genitivo distingue -α puro de impuro e masculino de feminino — o nominativo sozinho engana.',
      ),
    },
    {
      label: T('No texto:'),
      text: T(
        '{ἡμέρα} aparece mais de 300 vezes no Novo Testamento, quase sempre no acusativo de duração ({νύκτα καὶ ἡμέραν}). Reconhecer o caso de cor economiza consulta ao dicionário.',
      ),
    },
  ],
  examples: [
    { text: '{ἡ ἀλήθεια ἐλευθεροῖ}', gloss: T('a verdade liberta (cf. Jo 8.32)') },
    { text: '{δόξα τῷ θεῷ}', gloss: T('glória a Deus (dativo de interesse)') },
    { text: '{ἡ βασιλεία τῶν οὐρανῶν}', gloss: T('o reino dos céus (genitivo plural)') },
    { text: '{ἡμέραν καὶ νύκτα}', gloss: T('de dia e de noite (acusativo de duração)') },
    { text: '{σὺν τῇ ἐκκλησίᾳ}', gloss: T('com a igreja (dativo com iota subscrito)') },
    { text: '{φωνὴ βοῶντος}', gloss: T('voz do que clama (genitivo de origem; Mc 1.3)') },
    { text: '{ὁ μαθητὴς βλέπει}', gloss: T('o discípulo vê (nominativo singular masculino)') },
    { text: '{οἱ προφῆται λέγουσιν}', gloss: T('os profetas dizem (nominativo plural)') },
    { text: '{ταῖς ψυχαῖς}', gloss: T('às almas (dativo plural feminino)') },
    { text: '{τὴν εἰρήνην}', gloss: T('a paz (acusativo: {εἰρήνη, -ης})') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Feminino em -η: ἡ ἀλήθεια'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominativo'), '{ἡ ἀλήθεια}', '{αἱ ἀλήθειαι}'],
        [T('Genitivo'), 'τῆς ἀληθείας', 'τῶν ἀληθειῶν'],
        [T('Dativo'), 'τῇ ἀληθείᾳ', 'ταῖς ἀληθείαις'],
        [T('Acusativo'), 'τὴν ἀλήθειαν', 'τὰς ἀληθείας'],
      ],
    },
    {
      caption: T('Tabela 2 — Feminino em -α: ἡ δόξα e ἡ ὥρα'),
      head: [
        T('Caso'),
        {
          0: 'α',
          1: ' ',
          2: 'p',
          3: 'u',
          4: 'r',
          5: 'o',
          6: ' ',
          7: '(',
          8: 'δ',
          9: 'ό',
          10: 'ξ',
          11: 'α',
          12: ')',
        },
        {
          0: 'α',
          1: ' ',
          2: 'i',
          3: 'm',
          4: 'p',
          5: 'u',
          6: 'r',
          7: 'o',
          8: ' ',
          9: '(',
          10: 'ὥ',
          11: 'ρ',
          12: 'α',
          13: ')',
        },
      ],
      rows: [
        [T('Nominativo'), '{ἡ δόξα}', '{ἡ ὥρα}'],
        [T('Genitivo'), 'τῆς δόξης', 'τῆς ὥρας'],
        [T('Dativo'), 'τῇ δόξῃ', 'τῇ ὥρᾳ'],
        [T('Acusativo'), 'τὴν δόξαν', 'τὴν ὥραν'],
      ],
    },
    {
      caption: T('Tabela 3 — Masculino em -ης: ὁ μαθητής'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominativo'), '{ὁ μαθητής}', '{οἱ μαθηταί}'],
        [T('Genitivo'), 'τοῦ μαθητοῦ', 'τῶν μαθητῶν'],
        [T('Dativo'), 'τῷ μαθητῇ', 'τοῖς μαθηταῖς'],
        [T('Acusativo'), 'τὸν μαθητήν', 'τοὺς μαθητάς'],
      ],
    },
  ],
};
