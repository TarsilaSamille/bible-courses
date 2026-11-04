import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Adjetivos 2-1-2'),
  subtitle: T('ἀγαθός, -ή, -όν: concordância e posição'),
  section: T('O substantivo'),
  body: C(`## Um adjetivo, três declinações

Os adjetivos mais frequentes do Novo Testamento seguem o modelo 2-1-2: o masculino usa as terminações da 2ª declinação ({ἀγαθός}, como {λόγος}), o feminino usa as da 1ª ({ἀγαθή}, como {ἀλήθεια}) e o neutro volta à 2ª ({ἀγαθόν}, como {ἔργον}). O dicionário registra o trio completo — {ἀγαθός, -ή, -όν} — e com ele você declina todas as formas.

O feminino segue a regra do alfa do cap. 2: depois de ρ, ε ou ι, ele termina em {-α} ({δίκαιος, -α, -ον}; {μικρός, -ά, -όν}); nos demais casos, em {-η} ({ἀγαθός, -ή, -όν}; {ἅγιος, -α, -ον}). Repare: {ἅγιος} tem o radical terminado em iota, então o feminino é {ἁγία}, com alfa puro.

## Concordância total

O adjetivo concorda com o substantivo em gênero, número E caso — as três categorias ao mesmo tempo. {ὁ ἀγαθὸς λόγος} (masc. sg. nom.), {ἡ ἁγία γραφή} (fem. sg. nom.), {τὰ καλὰ ἔργα} (neut. pl. nom./ac.). Errar uma das três quebra a concordância, e o ouvido grego percebia na hora.

Na leitura, a concordância é sua aliada: diante de um adjetivo, procure o substantivo do mesmo gênero, número e caso — quase sempre é o vizinho mais próximo com as mesmas terminações. Em frases longas de Paulo, esse pareamento resolve metade da sintaxe.

## Atributivo, predicativo e substantivado

Vale para adjetivos tudo o que o cap. 1 disse sobre o artigo: com artigo repetido, o adjetivo qualifica ({ὁ λόγος ὁ ἀγαθός} «a boa palavra»); sem artigo junto a substantivo articulado, ele predica ({ὁ λόγος ἀγαθός} «a palavra é boa»). O grego dispensa o verbo «ser» no presente — a posição faz o trabalho.

E sem substantivo algum, o adjetivo com artigo vira substantivo: {οἱ ἀγαθοί} «os bons», {τὸ ἀγαθόν} «o bem», {οἱ πτωχοί} «os pobres» (Mt 5.3). Esse uso substantivo é frequentíssimo: {ὁ δίκαιος} «o justo», {τὰ κρυπτά} «as coisas ocultas». Sempre que vir artigo + adjetivo sem substantivo por perto, traduza como substantivo.`),
  vocab: [
    V('ἀγαθός', 'ἀγαθός', 'bom'),
    V('ἀγαθή', 'ἀγαθός', 'boa (fem.)'),
    V('ἀγαθόν', 'ἀγαθός', 'bom (neut.)'),
    V('ἅγιος', 'ἅγιος', 'santo (masc.)'),
    V('ἁγία', 'ἅγιος', 'santa (fem.)'),
    V('δίκαιος', 'δίκαιος', 'justo'),
    V('δικαία', 'δίκαιος', 'justa (fem.)'),
    V('καλός', 'καλός', 'belo, bom'),
    V('μικρός', 'μικρός', 'pequeno'),
    V('πονηρός', 'πονηρός', 'mau, maligno'),
    V('νεκρός', 'νεκρός', 'morto'),
    V('πιστός', 'πιστός', 'fiel'),
    V('μακάριος', 'μακάριος', 'bem-aventurado'),
    V('ἄλλος', 'ἄλλος', 'outro'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a forma feminina de «ἀγαθός» (bom)?'),
    options: [T('ἀγαθή'), T('ἀγαθά'), T('ἀγαθόν'), T('ἀγαθοῦ')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('«ὁ δοῦλος ὁ ἀγαθός» significa…'),
      options: [
        T('O servo é bom (predicativo)'),
        T('O bom servo (atributivo)'),
        T('Do bom servo (genitivo)'),
        T('Ó bom servo (vocativo)'),
      ],
      answer: 1,
      hint: T('O artigo se repetiu antes do adjetivo — regra §4.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete o dativo feminino singular: ___ γραφῇ («à santa Escritura», de ἅγιος).'),
      answer: 'ἁγίᾳ',
      hint: T('Dativo singular da 1ª declinação: iota subscrito.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma ao seu gênero.'),
      pairs: [
        { a: 'ἀγαθοί', b: 'masc. pl.' },
        { a: 'ἀγαθαί', b: 'fem. pl.' },
        { a: 'ἀγαθά', b: 'neut. pl.' },
        { a: 'δικαίαν', b: 'fem. sg. ac.' },
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
        'Adjetivo 2-1-2: masculino = 2ª declinação, feminino = 1ª, neutro = 2ª. O dicionário dá o trio ({καλός, -ή, -όν}).',
      ),
    },
    {
      n: '2',
      text: T(
        'Feminino em -α depois de ρ, ε, ι ({δικαία}, {μικρά}, {ἁγία}); em -η nos demais casos ({ἀγαθή}, {καλή}).',
      ),
    },
    {
      n: '3',
      text: T(
        'Concordância tripla: o adjetivo iguala o substantivo em gênero, número e caso, sem exceção.',
      ),
    },
    {
      n: '4',
      text: T(
        'Artigo repetido = atributivo; artigo só no substantivo = predicativo (sem verbo «ser» no presente).',
      ),
    },
    {
      n: '5',
      text: T(
        'Artigo + adjetivo sem substantivo = substantivo: {οἱ νεκροί} «os mortos», {τὸ λοιπόν} «quanto ao resto».',
      ),
    },
  ],
  notes: [
    {
      label: T('Pegadinha:'),
      text: T(
        '{πονηρός} e {πολύς}? {πολύς, πολλή, πολύ} é irregular e volta no cap. 16. Já {μέγας, μεγάλη, μέγα} também foge do 2-1-2 — guarde os dois para o capítulo dos comparativos.',
      ),
    },
    {
      label: T('No texto:'),
      text: T(
        '{ἅγιος} ocorre com o artigo substantivado em {οἱ ἅγιοι} «os santos» — designação comum dos cristãos nas cartas de Paulo (Rm 1.7; 1Co 1.2).',
      ),
    },
  ],
  examples: [
    { text: '{ἅγιον ὄνομα}', gloss: T('santo nome (neutro sg.)') },
    { text: '{ἡ ἁγία γραφή}', gloss: T('a santa Escritura (fem. com alfa puro)') },
    { text: '{ὁ δοῦλος ὁ ἀγαθός}', gloss: T('o bom servo (atributivo; Mt 25.21)') },
    { text: '{πιστὸς ὁ λόγος}', gloss: T('fiel é a palavra (predicativo; 1Tm 1.15)') },
    {
      text: '{μακάριοι οἱ πτωχοί}',
      gloss: T('bem-aventurados os pobres (adjetivo substantivado)'),
    },
    { text: '{τὰ κρυπτὰ φανερά}', gloss: T('as coisas ocultas [são] manifestas (Mc 4.22)') },
    { text: '{ἀγαθὴ συνείδησις}', gloss: T('boa consciência (fem. sg.; 1Tm 1.5)') },
    { text: '{δικαίᾳ κρίσει}', gloss: T('com justo juízo (dativo fem.; Jo 7.24)') },
    { text: '{πονηρὰ γενεά}', gloss: T('geração má (fem.; Mt 12.39)') },
    { text: '{καλὸν ἔργον}', gloss: T('boa obra (neutro; Mt 26.10)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — ἀγαθός no singular'),
      head: [T('Caso'), T('Masc.'), T('Fem.'), T('Neutro')],
      rows: [
        [T('Nominativo'), '{ἀγαθός}', '{ἀγαθή}', '{ἀγαθόν}'],
        [T('Genitivo'), 'ἀγαθοῦ', 'ἀγαθῆς', 'ἀγαθοῦ'],
        [T('Dativo'), 'ἀγαθῷ', 'ἀγαθῇ', 'ἀγαθῷ'],
        [T('Acusativo'), 'ἀγαθόν', 'ἀγαθήν', '{ἀγαθόν}'],
      ],
    },
    {
      caption: T('Tabela 2 — ἀγαθός no plural'),
      head: [T('Caso'), T('Masc.'), T('Fem.'), T('Neutro')],
      rows: [
        [T('Nominativo'), '{ἀγαθοί}', '{ἀγαθαί}', '{ἀγαθά}'],
        [T('Genitivo'), 'ἀγαθῶν', 'ἀγαθῶν', 'ἀγαθῶν'],
        [T('Dativo'), 'ἀγαθοῖς', 'ἀγαθαῖς', 'ἀγαθοῖς'],
        [T('Acusativo'), 'ἀγαθούς', 'ἀγαθάς', '{ἀγαθά}'],
      ],
    },
    {
      caption: T('Tabela 3 — Feminino em -α: δικαία'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominativo'), '{δικαία}', '{δίκαιαι}'],
        [T('Genitivo'), 'δικαίας', 'δικαίων'],
        [T('Dativo'), 'δικαίᾳ', 'δικαίαις'],
        [T('Acusativo'), 'δικαίαν', 'δικαίας'],
      ],
    },
  ],
};
