import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Verbos contratos'),
  subtitle: T('ἀγαπάω, ποιέω, δηλόω: quando duas vogais viram uma'),
  section: T('O verbo'),
  body: C(`## Por que alguns verbos «encolhem»

Boa parte dos verbos mais usados do Novo Testamento termina o tema em vogal — {ἀγαπα-} «amar», {ποιε-} «fazer», {δηλο-} «mostrar». Ao receber as terminações do presente, essa vogal se choca com a vogal temática e as duas se fundem numa só: {ἀγαπάω} vira {ἀγαπῶ}, {ποιέω} vira {ποιῶ}, {δηλόω} vira {δηλῶ}. O acento circunflexo denuncia a fusão: onde há circunflexo numa forma verbal, houve contração.

O dicionário registra esses verbos na forma não contraída ({ἀγαπάω}, {ζητέω}), mas o Novo Testamento usa quase sempre a forma contraída ({ἀγαπῶ}, {ζητῶ}). Aprenda a reconhecer as duas — e a derivar uma da outra.

## Verbos em -άω

A vogal {α} domina a fusão: α + ε dá {α} longo, α + ο dá {ω}. Na prática do presente: {-ω} vira {-ῶ}, {-εις} vira {-ᾷς}, {-ει} vira {-ᾷ}, {-ομεν} vira {-ῶμεν}, {-ετε} vira {-ᾶτε}, {-ουσι} vira {-ῶσι}. Assim {ἀγαπάω} se conjuga {ἀγαπῶ, ἀγαπᾷς, ἀγαπᾷ, ἀγαπῶμεν, ἀγαπᾶτε, ἀγαπῶσι(ν)}.

O infinitivo também contrai: {ἀγαπᾶν} (de {ἀγαπάειν}). E guarde desde já o alongamento: no futuro e no aoristo, o {α} breve alonga para {η} — {ἀγαπήσω} «amarei», {ἠγάπησα} «amei». Esse alongamento volta nos capítulos 7 e 17.

## Verbos em -έω

O grupo mais numeroso: {ποιέω} «fazer», {ζητέω} «buscar», {καλέω} «chamar», {τηρέω} «guardar», {μαρτυρέω} «testemunhar». Aqui a fusão produz ditongos com iota ou o fechado {ου}: {-ω} vira {-ῶ}, {-εις} e {-ει} viram {-εῖς, -εῖ}, {-ομεν} vira {-οῦμεν}, {-ετε} vira {-εῖτε}, {-ουσι} vira {-οῦσι}. Logo {ποιῶ, ποιεῖς, ποιεῖ, ποιοῦμεν, ποιεῖτε, ποιοῦσι(ν)}.

O alongamento correspondente é ε → η: {ποιήσω}, {ἐποίησα}. Repare que {ἐποίησεν} (aoristo de {ποιέω}) é uma das formas verbais mais frequentes dos evangelhos.

## Verbos em -όω

O menor grupo — {δηλόω} «manifestar», {πληρόω} «cumprir, encher» — tem fusão em {οι} e {ου}: {-εις} vira {-οῖς}, {-ει} vira {-οῖ}, {-ομεν} vira {-οῦμεν}. Paradigma: {δηλῶ, δηλοῖς, δηλοῖ, δηλοῦμεν, δηλοῦτε, δηλοῦσι(ν)}.

O alongamento é ο → ω: {πληρώσω}, {ἐπλήρωσα}. {πεπλήρωται} «está cumprido» (perfeito passivo de {πληρόω}) é palavra-chave da teologia de João e Paulo.`),
  vocab: [
    V('ἀγαπάω', 'ἀγαπάω', 'amar'),
    V('ἀγαπῶ', 'ἀγαπάω', 'eu amo'),
    V('ἀγαπᾷ', 'ἀγαπάω', 'ele ama'),
    V('ποιέω', 'ποιέω', 'fazer'),
    V('ποιῶ', 'ποιέω', 'eu faço'),
    V('ποιεῖ', 'ποιέω', 'ele faz'),
    V('ζητέω', 'ζητέω', 'buscar'),
    V('ζητῶ', 'ζητέω', 'eu busco'),
    V('καλέω', 'καλέω', 'chamar'),
    V('τηρέω', 'τηρέω', 'guardar'),
    V('μαρτυρέω', 'μαρτυρέω', 'testemunhar'),
    V('δηλόω', 'δηλόω', 'manifestar'),
    V('πληρόω', 'πληρόω', 'cumprir, encher'),
    V('δοξάζω', 'δοξάζω', 'glorificar'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«ποιεῖ» (ele faz) vem de qual infinitivo?'),
    options: [T('ποιέω (-έω)'), T('ποιάω (-άω)'), T('ποιόω (-όω)'), T('ποιμω (-ω regular)')],
    answer: 0,
    hint: T('O ditongo -εῖ- denuncia o grupo -έω.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a 2ª pessoa do plural: ___ («amais», de ἀγαπάω).'),
      answer: 'ἀγαπᾶτε',
      hint: T('-άω: -ετε vira -ᾶτε.'),
    },
    {
      kind: 'choose',
      prompt: T('O futuro de «ἀγαπάω» é «ἀγαπήσω» porque…'),
      options: [
        T('O α breve alonga para η'),
        T('O α vira ο perispômenon'),
        T('Cai o α e entra σ dobrado'),
        T('É verbo irregular'),
      ],
      answer: 0,
      hint: T('Alongamento α→η — regra §5.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma contraída ao seu grupo.'),
      pairs: [
        { a: 'ἀγαπᾷς', b: '-άω' },
        { a: 'ποιεῖτε', b: '-έω' },
        { a: 'δηλοῖ', b: '-όω' },
        { a: 'ζητοῦμεν', b: '-έω' },
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
        'Circunflexo em forma verbal = contração. Diante dele, reconstrua as duas vogais originais para achar o tema.',
      ),
    },
    { n: '2', text: T('-άω: α domina (α+ε→ᾱ, α+ο→ω). Resultado: -ῶ, -ᾷς, -ᾷ, -ῶμεν, -ᾶτε, -ῶσι.') },
    {
      n: '3',
      text: T('-έω: fusão em ditongo ou ου. Resultado: -ῶ, -εῖς, -εῖ, -οῦμεν, -εῖτε, -οῦσι.'),
    },
    { n: '4', text: T('-όω: fusão em οι/ου. Resultado: -ῶ, -οῖς, -οῖ, -οῦμεν, -οῦτε, -οῦσι.') },
    {
      n: '5',
      text: T('Alongamento para futuro/aoristo: α→η ({ἀγαπήσω}), ε→η ({ποιήσω}), ο→ω ({πληρώσω}).'),
    },
  ],
  notes: [
    {
      label: T('Como reconhecer:'),
      text: T(
        'Todo verbo com circunflexo na terminação do presente ({ποιεῖτε}, {ἀγαπῶμεν}) é contrato. Sem circunflexo e sem ditongo estranho, é regular em -ω — volte ao cap. 5.',
      ),
    },
    {
      label: T('Falso amigo:'),
      text: T(
        '{δοξάζω} «glorificar» parece contrato mas é regular em -ω: o tema termina em consoante ({δοξαδ-}), não em vogal. Critério: só contrai o verbo cujo tema termina em vogal pura α, ε ou ο.',
      ),
    },
  ],
  examples: [
    { text: '{ὁ θεὸς ἀγαπᾷ τὸν κόσμον}', gloss: T('Deus ama o mundo (Jo 3.16; 3ª sg. contraída)') },
    { text: '{ἀγαπᾶτε ἀλλήλους}', gloss: T('amai-vos uns aos outros (2ª pl.; Jo 13.34)') },
    { text: '{τί ποιεῖτε}', gloss: T('que fazeis? (2ª pl. de ποιέω)') },
    { text: '{ἐποίησεν σημεῖα}', gloss: T('fez sinais (aoristo alongado; Jo 20.30)') },
    { text: '{ζητεῖτε πρῶτον}', gloss: T('buscai primeiro (Mt 6.33)') },
    { text: '{καλεῖ τοὺς μαθητάς}', gloss: T('chama os discípulos (3ª sg.)') },
    { text: '{τηρεῖ τὸν λόγον}', gloss: T('guarda a palavra (Jo 8.51)') },
    { text: '{πληροῦται ἡ γραφή}', gloss: T('cumpre-se a Escritura (passivo; Jo 19.24)') },
    { text: '{μαρτυρεῖ περὶ αὐτοῦ}', gloss: T('testemunha a respeito dele') },
    { text: '{δηλοῖ τὴν ἀλήθειαν}', gloss: T('manifesta a verdade (3ª sg. de -όω)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Presente de ἀγαπάω'),
      head: [T('Pessoa'), T('Não contraída'), T('Contraída')],
      rows: [
        ['1ª sg.', 'ἀγαπάω', '{ἀγαπῶ}'],
        ['2ª sg.', 'ἀγαπάεις', '{ἀγαπᾷς}'],
        ['3ª sg.', 'ἀγαπάει', '{ἀγαπᾷ}'],
        ['1ª pl.', 'ἀγαπάομεν', '{ἀγαπῶμεν}'],
        ['2ª pl.', 'ἀγαπάετε', '{ἀγαπᾶτε}'],
        ['3ª pl.', 'ἀγαπάουσι', '{ἀγαπῶσι(ν)}'],
      ],
    },
    {
      caption: T('Tabela 2 — Presente de ποιέω'),
      head: [T('Pessoa'), T('Não contraída'), T('Contraída')],
      rows: [
        ['1ª sg.', 'ποιέω', '{ποιῶ}'],
        ['2ª sg.', 'ποιέεις', '{ποιεῖς}'],
        ['3ª sg.', 'ποιέει', '{ποιεῖ}'],
        ['1ª pl.', 'ποιέομεν', '{ποιοῦμεν}'],
        ['2ª pl.', 'ποιέετε', '{ποιεῖτε}'],
        ['3ª pl.', 'ποιέουσι', '{ποιοῦσι(ν)}'],
      ],
    },
    {
      caption: T('Tabela 3 — Presente de δηλόω'),
      head: [T('Pessoa'), T('Não contraída'), T('Contraída')],
      rows: [
        ['1ª sg.', 'δηλόω', '{δηλῶ}'],
        ['2ª sg.', 'δηλόεις', '{δηλοῖς}'],
        ['3ª sg.', 'δηλόει', '{δηλοῖ}'],
        ['1ª pl.', 'δηλόομεν', '{δηλοῦμεν}'],
        ['2ª pl.', 'δηλόετε', '{δηλοῦτε}'],
        ['3ª pl.', 'δηλόουσι', '{δηλοῦσι(ν)}'],
      ],
    },
  ],
};
