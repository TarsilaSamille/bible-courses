import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('Artigo'),
  title: T('Definido, indefinido e o artigo que não vai ao plural'),
  subtitle: T('ο άνθρωπος — ένας άνθρωπος — κανείς'),
  body: C(`## O definido é obrigatório quando o referente é um

O grego moderno quase sempre escreve o artigo definido. {ο άνθρωπος} é «o homem» porque já sabemos de que homem se trata. Quando o referente não é um indivíduo nem um grupo identificável e sim a espécie inteira, o grego dispensa o artigo: {άνθρωπος είναι θνητός}, «o ser humano é mortal». Com o artigo, a mesma frase passa a ser {ο άνθρωπος είναι θνητός}, e agora é uma pessoa só, alguém que se tem em mente.

O teste é o do português: se em português o artigo é obrigatório, no grego também é. Onde o português o dispensa, o grego pode dispensá-lo, e é aí que aparece o outro artigo.

## O indefinido tem três gêneros e uma só direção

O artigo indefinido tem uma forma por gênero: {ένας} no masculino, {μία} no feminino, {ένα} no neutro. No caso direto os três funcionam: {ένας άνθρωπος}, {μια γυναίκα}, {ένα παιδί}. O que muda é o caso, e a mudança é mínima.

No acusativo, que é o caso de quase tudo numa frase normal, o masculino ganha um {ν}: {έναν}. No genitivo, o feminino ganha um {ς}: {μίας}. O neutro não muda: {ένα} em todos os casos, porque {ένο} teria sido a forma antiga e ninguém a usa.

O acento de {μία} e de {ένα} é átono na escrita corrente: {μια γυναίκα}, {ένα παιδί}. Só volta a ser tônico quando vem antes de um enclítico: {μία μου}, {ένας μου}.

## O plural sem indefinido, e o negativo que sobra

Aqui está o que assusta quem vem do latim: **{ένας} não flexiona para o plural**. Não existe «{ένανοι}». No plural, o indefinido é o substantivo sozinho: {άνθρωποι}, {γυναίκες}, {παιδιά}, sem artigo de nenhum tipo.

A tradução imediata é «alguns homens» ou «homens», e o grego entrega os dois sem distinguir. Quem precisa da distinção usa {μερικοί}: {μερικοί άνθρωποι}, «algumas pessoas». O oposto é {πολλοί άνθρωποι}. Entre o nada de artigo e o {μερικοί} está tudo o que o português distingue com «um», «alguns» e «muitos».


A negação do indefinido é {κανείς}, {καμία}, {κανένα}, e ela é a forma mais comum de dizer «nenhum» numa frase: {δεν έρχεται κανείς}, «não vem ninguém». Com {ν} repetido nos casos oblíquos: {κανενός}, {καμίας}, {κανενός}, exatamente como nos adjetivos.

E é aqui que o grego mostra o que a flexão faz pelo sentido: {κανένας}, com um {ς} a menos, é a forma não marcada, a que aparece depois de uma preposição e é a única que o falante usa com frequência.

## Onde a Bíblia escreve ἕνας

> Οὕτως καὶ ἡμεῖς πάντες ἓν σῶμά ἐσμεν ἐν Χριστῷ, καθὼς καὶ οἱ πάντες εἰς ἓν ἐβαπτίσθημεν εἰς ἓν σῶμα.

{ἓν} aparece três vezes no mesmo versículo, e as três vezes sem {ς} e sem gênero: o grego diz «somos um só corpo» sem repetir o artigo nem escolher um gênero, porque {ἕνας} seria falso ali. A forma que aparece aqui é {ἓν}, sem {ς} e sem gênero, e ela é a que o grego moderno conserva intacta como numeral e como pronome. `),
  vocab: [
    V('ο άνθρωπος', 'ο άνθρωπος', 'o homem, a pessoa'),
    V('ένας άνθρωπος', 'ένας', 'um homem'),
    V('ένας', 'ένας', 'um (masculino)'),
    V('μια', 'μία', 'uma (feminino)'),
    V('ένα', 'ένα', 'um (neutro)'),
    V('έναν', 'ένας', 'um (acusativo masculino)'),
    V('μίας', 'μία', 'de uma (genitivo)'),
    V('ενός', 'ένας', 'de um (genitivo)'),
    V('κανείς', 'κανείς', 'ninguém'),
    V('καμία', 'κανείς', 'nenhuma (feminino)'),
    V('κανένα', 'κανείς', 'nenhum (neutro)'),
    V('κανενός', 'κανείς', 'de nenhum (genitivo)'),
    V('μερικοί', 'μερικοί', 'alguns'),
    V('πολλοί άνθρωποι', 'πολλοί', 'muitas pessoas'),
    V('οι άνθρωποι', 'άνθρωπος', 'as pessoas'),
    V('τα παιδιά', 'το παιδί', 'as crianças'),
  ],
  rules: [
    {
      n: '§1',
      text: T('O definido é obrigatório quando o referente já está determinado: ο άνθρωπος.'),
    },
    {
      n: '§2',
      text: T(
        'O indefinido tem uma forma por gênero e não existe no plural: ένας, μία, ένα; no plural, o substantivo sozinho.',
      ),
    },
    {
      n: '§3',
      text: T('No acusativo o masculino ganha ν (έναν) e no genitivo o feminino ganha ς (μίας).'),
    },
    {
      n: '§4',
      text: T(
        'O negativo do indefinido é κανείς, καμία, κανένα, com ν repetido nos oblíquos: κανενός.',
      ),
    },
  ],
  notes: [
    {
      label: T('Acento'),
      text: T(
        'μία e ένα perdem o acento na escrita corrente e só o recuperam diante de um enclítico: μία μου. A forma tonic é a exceção, não a regra.',
      ),
    },
    {
      label: T('Koiné'),
      text: T(
        'Na Bíblia ἕνας quase nunca é artigo: é o numeral substantivado, «um». Traduzir ἕνας por «um» ou por «um certo» depende do que vem depois, não do que a palavra significa sozinha.',
      ),
    },
  ],
  examples: [
    { text: 'ένας άνθρωπος έρχεται', gloss: T('um homem vem') },
    { text: 'μια γυναίκα μένει εδώ', gloss: T('uma mulher mora aqui') },
    { text: 'ένα παιδί παίζει', gloss: T('uma criança brinca') },
    { text: 'τον βλέπω κάθε μέρα', gloss: T('vejo um homem todo dia') },
    { text: 'μίας μητέρας λόγος', gloss: T('a palavra de uma mãe') },
    { text: 'κανείς δεν ήρθε', gloss: T('ninguém veio') },
    { text: 'κανένας λόγος', gloss: T('nenhuma palavra') },
    { text: 'μερικοί άνθρωποι έρχονται', gloss: T('algumas pessoas vêm') },
  ],
  tables: [
    {
      caption: T('O indefinido em todos os casos'),
      head: ['Κλίση', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['οριστική', 'ένας', 'μία', 'ένα'],
        ['γενική', 'ενός', 'μίας', 'ενός'],
        ['αἰτιατική', 'έναν', 'μία', 'ένα'],
        ['ἀρνητική', 'κανείς', 'καμία', 'κανένα'],
      ],
    },
    {
      caption: T('Definido, indefinido e plural'),
      head: ['Τύπος', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['οριστικό άρθρο', 'ο άνθρωπος', 'η γυναίκα', 'το παιδί'],
        ['αόριστο άρθρο', 'ένας άνθρωπος', 'μια γυναίκα', 'ένα παιδί'],
        ['πληθυντικός', 'οι άνθρωποι', 'οι γυναίκες', 'τα παιδιά'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se diz «nenhuma criança»?'),
    options: [T('κανένα παιδί'), T('κανένας παιδί'), T('κανείς παιδί'), T('μία παιδί')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ γυναίκα μένει εδώ (indefinido feminino)'),
      answer: 'μια',
      hint: T('μία sem acento'),
    },
    {
      kind: 'choose',
      prompt: T('Qual é a forma de indefinido no plural?'),
      options: [T('ένανοι'), T('οι άνθρωποι'), T('ένας άνθρωποι'), T('κανείς άνθρωποι')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Gênero do indefinido'),
      pairs: [
        { a: 'ένας', b: T('masculino') },
        { a: 'μια', b: T('feminino') },
        { a: 'ένα', b: T('neutro') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T(
        'βλέπω ___ ανθρώπους (indefinido masculino no acusativo plural, que não existe: escreve o substantivo)',
      ),
      answer: 'ανθρώπους',
      hint: T('No plural o indefinido é o próprio substantivo'),
    },
  ],
};
