import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('Relativo e demonstrativos'),
  subtitle: T('ὅς, οὗτος, ἐκεῖνος: apontar para trás e para perto'),
  section: T('Sintaxe'),
  body: C(`## O relativo obedece a dois senhores

O pronome relativo ({ὅς} «o qual», {ἥ}, {ὅ}) concorda com o antecedente em gênero e número, mas recebe o caso da SUA própria oração. {μακάριοί εἰσιν οἳ πενθοῦσιν} «bem-aventurados os que choram» (Mt 5.4): {οἳ} é masculino plural como o antecedente implícito («os»), mas nominativo porque é sujeito de {πενθοῦσιν}. Já em {ὃ ἐὰν αἰτήσητε} «o que pedirdes» (Jo 14.13), {ὃ} é neutro (antecedente: «coisas») e acusativo (objeto de {αἰτήσητε}).

Essa dupla fidelidade resolve frases longas: ache o antecedente (gênero/número) e a função na subordinada (caso). O genitivo do relativo indica posse — {οὗ} «cujo, de quem»: {οὗ τὸ ὑπόδημα} «de quem a sandália [não sou digno de desatar]» (Mc 1.7). E o dativo com preposição ancora lugares teológicos: {ἐν ᾧ} «no qual» (Jo 15.9? {μεῖνον}? o clássico é Rm 5.12? melhor exemplo seguro: {ἐν ᾧ} «no qual» como fórmula paulina de incorporação).

## Demonstrativos: perto e longe

{οὗτος} «este» aponta o próximo; {ἐκεῖνος} «aquele» aponta o distante — no espaço, no tempo ou no discurso. {οὗτός ἐστιν ὁ υἱός μου} «este é o meu filho» (Mt 3.17, o Pai aponta Jesus presente); {ἐν ἐκείνῃ τῇ ἡμέρᾳ} «naquele dia» (o Dia escatológico, distante e temido).

Ambos declinam com o artigo fundido ao tema: {οὗτος, αὕτη, τοῦτο}; {ἐκεῖνος, ἐκείνη, ἐκεῖνο}. O neutro {τοῦτο} «isto» abre fórmulas: {τοῦτο ποιεῖτε} «fazei isto» (Lc 22.19). E {ἐκεῖνος} virou o «ele» enfático do grego tardio — onde o clássico usaria pronome, o koiné usa {ἐκεῖνος}.

## αὐτός, pela terceira vez

O cap. 14 deu os três papéis; aqui, os contextos que mais aparecem. Intensivo com nome próprio: {αὐτὸς Δαυίδ} «o próprio Davi» (Mc 12.36). Pronome oblíquo em cadeias preposicionais: {δι᾽ αὐτοῦ} «por meio dele» (Jo 1.3, {πάντα δι᾽ αὐτοῦ ἐγένετο} «todas as coisas foram feitas por meio dele»), {ἐν αὐτῷ} «nele», {σὺν αὐτοῖς} «com eles».

E o indefinido-relativo: {ὃς ἄν} / {ὅστις} + subjuntivo = «quem quer que»: {ὃς ἐὰν θέλῃ} «quem quiser» (Mc 8.34, cap. 24). O relativo com {ἄν} generaliza — de «o que» para «todo o que».`),
  vocab: [
    V('ὅς', 'ὅς', 'o qual, que'),
    V('ἥ', 'ὅς', 'a qual'),
    V('ὅ', 'ὅς', 'o que'),
    V('οἵ', 'ὅς', 'os que'),
    V('οὗ', 'ὅς', 'cujo, de quem'),
    V('οὗτος', 'οὗτος', 'este'),
    V('αὕτη', 'οὗτος', 'esta'),
    V('τοῦτο', 'οὗτος', 'isto'),
    V('ἐκεῖνος', 'ἐκεῖνος', 'aquele'),
    V('ἐκείνη', 'ἐκεῖνος', 'aquela'),
    V('ὅστις', 'ὅστις', 'quem quer que'),
    V('ὑπόδημα', 'ὑπόδημα', 'sandália'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em «οἳ πενθοῦσιν», o relativo é masculino plural porque…'),
    options: [
      T('Concorda com o antecedente («os»)'),
      T('É sujeito, e sujeitos são masculinos'),
      T('πενθέω rege masculino'),
      T('Todo relativo é masculino plural'),
    ],
    answer: 0,
    hint: T('Gênero/número do antecedente; caso da oração — regra §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o genitivo: ___ τὸ ὑπόδημα («de quem a sandália», Mc 1.7).'),
      answer: 'οὗ',
      hint: T('Genitivo do relativo = posse — regra §2.'),
    },
    {
      kind: 'choose',
      prompt: T('«ἐν ἐκείνῃ τῇ ἡμέρᾳ» usa ἐκεῖνος (e não οὗτος) porque…'),
      options: [
        T('O Dia escatológico é distante e temido'),
        T('ἡμέρα é masculina'),
        T('οὗτος não tem feminino'),
        T('É dativo de posse'),
      ],
      answer: 0,
      hint: T('Perto × longe: o Dia é sempre ἐκεῖνος — regra §3.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma à sua classe.'),
      pairs: [
        { a: 'οἵ', b: 'relativo' },
        { a: 'οὗτος', b: 'demonstrativo perto' },
        { a: 'ἐκεῖνος', b: 'demonstrativo longe' },
        { a: 'τίς', b: 'interrogativo' },
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
        'Relativo: gênero e número do antecedente; caso da própria oração. Duas perguntas, duas respostas.',
      ),
    },
    {
      n: '2',
      text: T(
        'Genitivo do relativo = posse («cujo»): {οὗ}, {ἧς}. Dativo + preposição ancora fórmulas ({ἐν ᾧ}).',
      ),
    },
    {
      n: '3',
      text: T(
        '{οὗτος} = próximo (espaço, tempo, discurso); {ἐκεῖνος} = distante. O Dia é sempre {ἐκείνη ἡ ἡμέρα}.',
      ),
    },
    {
      n: '4',
      text: T('Relativo + ἄν generaliza: {ὃς ἄν} «quem quer que». Sem ἄν, o relativo é definido.'),
    },
  ],
  notes: [
    {
      label: T('Atração:'),
      text: T(
        'Às vezes o relativo é «atraído» para o caso do antecedente ({ὧν} em vez de {ἅ}): fenômeno clássico, raro no koiné, mas aparece em Atos. Se o caso parecer errado, suspeite de atração antes de suspeitar do texto.',
      ),
    },
    {
      label: T('ὅδε:'),
      text: T(
        'Terceiro demonstrativo, {ὅδε} «este aqui», é raríssimo no Novo Testamento (Ap 2.1? na prática, quase só em citações). Reconheça e siga: {οὗτος} e {ἐκεῖνος} bastam.',
      ),
    },
  ],
  examples: [
    { text: '{οἳ πενθοῦσιν}', gloss: T('os que choram (Mt 5.4)') },
    { text: '{ὃ ἐὰν αἰτήσητε}', gloss: T('o que pedirdes (Jo 14.13)') },
    { text: '{οὗτός ἐστιν}', gloss: T('este é (Mt 3.17)') },
    { text: '{ἐν ἐκείνῃ τῇ ἡμέρᾳ}', gloss: T('naquele dia (escatológico)') },
    { text: '{οὗ τὸ ὑπόδημα}', gloss: T('de quem a sandália (Mc 1.7)') },
    { text: '{πάντα δι᾽ αὐτοῦ}', gloss: T('todas as coisas por meio dele (Jo 1.3)') },
    { text: '{αὐτὸς Δαυίδ}', gloss: T('o próprio Davi (Mc 12.36)') },
    { text: '{τοῦτο ποιεῖτε}', gloss: T('fazei isto (Lc 22.19)') },
    { text: '{ἐν ᾧ}', gloss: T('no qual (fórmula de incorporação)') },
    { text: '{ὃς ἐὰν θέλῃ}', gloss: T('quem quiser (Mc 8.34)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Relativo ὅς (singular)'),
      head: [T('Caso'), T('Masc.'), T('Fem.'), T('Neutro')],
      rows: [
        [T('Nominativo'), '{ὅς}', '{ἥ}', '{ὅ}'],
        [T('Genitivo'), '{οὗ}', 'ἧς', '{οὗ}'],
        [T('Dativo'), '{ᾧ}', 'ᾗ', '{ᾧ}'],
        [T('Acusativo'), '{ὅν}', 'ἥν', '{ὅ}'],
      ],
    },
    {
      caption: T('Tabela 2 — Relativo ὅς (plural)'),
      head: [T('Caso'), T('Masc.'), T('Fem.'), T('Neutro')],
      rows: [
        [T('Nominativo'), '{οἵ}', '{αἵ}', '{ἅ}'],
        [T('Genitivo'), '{ὧν}', '{ὧν}', '{ὧν}'],
        [T('Dativo'), '{οἷς}', '{αἷς}', '{οἷς}'],
        [T('Acusativo'), '{οὕς}', '{ἅς}', '{ἅ}'],
      ],
    },
    {
      caption: T('Tabela 3 — Demonstrativos (nominativo)'),
      head: [T('Pronome'), T('Masc.'), T('Fem.'), T('Neutro')],
      rows: [
        ['este', '{οὗτος}', '{αὕτη}', '{τοῦτο}'],
        ['aquele', '{ἐκεῖνος}', '{ἐκείνη}', '{ἐκεῖνο}'],
      ],
    },
  ],
};
