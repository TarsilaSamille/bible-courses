import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('2ª declinação'),
  subtitle: T('λόγος e ἔργον: masculinos em -ος, neutros em -ον'),
  section: T('O substantivo'),
  body: C(`## A declinação dos nomes em -ος

A segunda declinação abriga a maioria dos substantivos masculinos do Novo Testamento: {λόγος} «palavra», {ἄνθρωπος} «ser humano», {θεός} «Deus», {κόσμος} «mundo», {οὐρανός} «céu», {ἀπόστολος} «apóstolo». O nominativo singular termina em {-ς} e o tema termina em omicron — daí as terminações começarem todas por {ο}: genitivo {-ου}, dativo {-ῳ}, acusativo {-ον}.

No plural, o nominativo masculino termina em {-οι} ({λόγοι}), forma que você reconhecerá de longe depois de alguma leitura. O genitivo plural {-ων} e o dativo plural {-οις} são os mesmos da 1ª declinação com a vogal temática {ο}. Compare {τῶν λόγων} com {τῶν ἀληθειῶν} do capítulo anterior: a estrutura é idêntica, só muda a vogal.

## Os neutros em -ον

Todos os neutros mais comuns pertencem à 2ª declinação: {ἔργον} «obra», {τέκνον} «filho», {δῶρον} «dom», {ἱερόν} «templo», {πρόβατον} «ovelha». A regra de ouro dos neutros vale aqui em cheio: nominativo igual ao acusativo nos dois números, e plural em {-α} — {τὰ ἔργα} «as obras».

Na prática, essa regra resolve ambiguidades: ao encontrar {τὸ τέκνον}, você sabe que pode ser sujeito ou objeto — e o verbo da frase dirá qual é. Já {τὰ τέκνα} só pode ser nominativo ou acusativo plural, nunca genitivo ou dativo. O {-α} final é a assinatura dos neutros.

## A ordem das palavras

O grego não depende da ordem para marcar sujeito e objeto — os casos fazem esse trabalho. Por isso a ordem é mais livre que em português e carrega ênfase: o elemento enfático costuma vir primeiro. Em {τὸν λόγον βλέπω}, o objeto vem antes do verbo porque é nele que está o foco («é A PALAVRA que vejo»).

Há, porém, uma tendência estável: artigo antes do substantivo, preposição antes do seu complemento, e o verbo com frequência no fim em narrativa solene (imitando o hebraico da Septuaginta). Não decore regras rígidas de ordem; leia os casos e deixe a ênfase aparecer.

## O ni eufônico

Certas palavras ganham um {ν} final móvel (ni eufônico) diante de vogal ou no fim da frase: {λέγουσιν} em vez de {λέγουσι}, {ἐστίν} em vez de {ἐστί}. O dativo plural {-σι(ν)} e verbos na 3ª pessoa do plural usam esse {ν} com frequência. Não muda o sentido nem o caso — é apenas eufonia, e os manuscritos variam. Ao analisar a forma, ignore o {ν} final móvel.`),
  vocab: [
    V('λόγος', 'λόγος', 'palavra'),
    V('λόγου', 'λόγος', 'da palavra (gen.)'),
    V('λόγον', 'λόγος', 'a palavra (ac.)'),
    V('ἄνθρωπος', 'ἄνθρωπος', 'ser humano'),
    V('θεός', 'θεός', 'Deus'),
    V('κόσμος', 'κόσμος', 'mundo'),
    V('οὐρανός', 'οὐρανός', 'céu'),
    V('νόμος', 'νόμος', 'lei'),
    V('ἀπόστολος', 'ἀπόστολος', 'apóstolo'),
    V('δοῦλος', 'δοῦλος', 'servo, escravo'),
    V('ἔργον', 'ἔργον', 'obra'),
    V('ἔργα', 'ἔργον', 'obras (pl.)'),
    V('τέκνον', 'τέκνον', 'filho, criança'),
    V('δῶρον', 'δῶρον', 'dom, presente'),
    V('ἱερόν', 'ἱερόν', 'templo'),
    V('οἶκος', 'οἶκος', 'casa'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Qual é o acusativo singular de «ὁ ἄνθρωπος»? (digite em grego)'),
    answer: 'ἄνθρωπον',
    hint: T('2ª declinação masculina: acrescente {-ον} ao tema.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('«τὰ ἔργα» está em que caso e número?'),
      options: [
        T('Nominativo ou acusativo plural'),
        T('Genitivo singular'),
        T('Dativo plural'),
        T('Vocativo singular'),
      ],
      answer: 0,
      hint: T('Neutro plural em -α: só pode ser nominativo ou acusativo (regra §2).'),
    },
    {
      kind: 'fill',
      prompt: T('Complete o genitivo plural: τῶν ___ («das palavras», de λόγος).'),
      answer: 'λόγων',
      hint: T('Genitivo plural da 2ª: tema + -ων.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma ao seu caso (singular).'),
      pairs: [
        { a: 'λόγου', b: 'genitivo' },
        { a: 'λόγῳ', b: 'dativo' },
        { a: 'ἔργῳ', b: 'dativo neutro' },
        { a: 'λόγους', b: 'acusativo plural' },
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
        'Masculinos da 2ª: nominativo em {-ς}, genitivo em {-ου}. O tema termina em omicron em todas as formas.',
      ),
    },
    {
      n: '2',
      text: T(
        'Regra de ouro dos neutros: nominativo = acusativo em ambos os números; plural sempre em {-α}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Os casos — não a ordem — marcam sujeito e objeto. A ordem diferente do esperado indica ênfase, não função nova.',
      ),
    },
    {
      n: '4',
      text: T(
        'O ν final em {λέγουσιν}, {ἐστίν}, {-σι(ν)} é móvel e eufônico: ignore-o na análise morfológica.',
      ),
    },
    {
      n: '5',
      text: T(
        'Genitivo plural {-ων} e dativo plural {-οις}: as mesmas posições do artigo (τῶν, τοῖς) com o tema do substantivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Falso cognato:'),
      text: T(
        '{ὁ νόμος} significa «lei», não «nomo»; {ἡ δόξα} é «glória», não «doxa» no sentido moderno. Desconfie de terminações familiares com sentido estranho.',
      ),
    },
    {
      label: T('No texto:'),
      text: T(
        '{ἄνθρωπος} quase nunca significa «homem» (macho) no Novo Testamento — significa «ser humano». {ὁ υἱὸς τοῦ ἀνθρώπου} é «o Filho do Homem», título de Jesus, não descrição de gênero.',
      ),
    },
  ],
  examples: [
    { text: '{ἐν ἀρχῇ ἦν ὁ λόγος}', gloss: T('no princípio era a Palavra (Jo 1.1)') },
    { text: '{ὁ θεὸς ἀγαπᾷ τὸν κόσμον}', gloss: T('Deus ama o mundo (acusativo como objeto)') },
    { text: '{μακάριοι οἱ πτωχοί}', gloss: T('bem-aventurados os pobres (Mt 5.3)') },
    { text: '{τὰ τέκνα τοῦ θεοῦ}', gloss: T('os filhos de Deus (neutro plural + genitivo)') },
    { text: '{ἐκ τῶν ἔργων}', gloss: T('pelas obras (genitivo plural neutro)') },
    { text: '{τοῖς ἀνθρώποις}', gloss: T('aos homens (dativo plural)') },
    { text: '{οἱ οὐρανοὶ καὶ ἡ γῆ}', gloss: T('os céus e a terra (sujeito composto)') },
    { text: '{τὸν ἄρτον ἡμῶν}', gloss: T('o nosso pão (acusativo + possessivo; Mt 6.11)') },
    { text: '{διὰ τοῦ νόμου}', gloss: T('por meio da lei (preposição + genitivo)') },
    { text: '{λέγουσιν αὐτῷ}', gloss: T('dizem-lhe (verbo + dativo; repare o ν móvel)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Masculino: ὁ λόγος'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominativo'), '{ὁ λόγος}', '{οἱ λόγοι}'],
        [T('Genitivo'), 'τοῦ λόγου', 'τῶν λόγων'],
        [T('Dativo'), 'τῷ λόγῳ', 'τοῖς λόγοις'],
        [T('Acusativo'), '{τὸν λόγον}', 'τοὺς λόγους'],
      ],
    },
    {
      caption: T('Tabela 2 — Neutro: τὸ ἔργον'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominativo'), '{τὸ ἔργον}', '{τὰ ἔργα}'],
        [T('Genitivo'), 'τοῦ ἔργου', 'τῶν ἔργων'],
        [T('Dativo'), 'τῷ ἔργῳ', 'τοῖς ἔργοις'],
        [T('Acusativo'), '{τὸ ἔργον}', '{τὰ ἔργα}'],
      ],
    },
  ],
};
