import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  section: T('Reading'),
  title: T('Reading: Philippians 2'),
  subtitle: T('the shortest chapter of the New Testament, made of adverbs and particles'),
  body: C(`## Twenty words

{Philippians 2} has five verses that circle the centre of the New Testament: the descent of Christ and the exaltation that follows. The Greek text is a hymn, with parallel lines and a build of participles that grammarians have argued about for a thousand years. The translation into almost every European language became the favourite for singing in hymnbooks.

The text does the opposite. Where Greek has lines that rhyme and a rhythm, Indonesian has twenty words of plain prose. There is no metre, no refrain, and nothing to sing.

What is left is grammar, and grammar is what matters here. Twenty words of Indonesian prose are almost all noun, adverb and particle. It is the summary of everything the course has reached.

Read the chapter in three passes. First: which are the nouns. Second: where are the adverbs. Third: how many times does {yang} appear.

## The five you already know

What the text brings in this chapter is not new. It is {yang}, {sebagai}, {-nya}, {akan} and {sudah}, and each one appears doing exactly what has been described.

{1} {Yang}. It appears many times, and in both jobs. At the start of a clause it is the relative that ties a noun to a verb: the passage that says that Christ {mengosongkan} himself uses a noun followed by {yang} followed by a verb. In the middle it is the nominalisation: the abstract noun where Greek writes a participle, Indonesian writes {yang} plus a verb or a plain noun.

{2} {Sebagai}. It appears more than once, and it does the work of the Greek instrumental. Greek says "having the form of God", and the text says {sebagai} plus a noun. A reader who knows {sebagai} as an adverb reads it wrong: it is a preposition, and what follows it is a noun.

{3} {-nya}. Possession appears here in two shapes. The attached possessor, {diriNya}, which is third person and points back to the subject of the clause; and the nominalised possessor, where the verb becomes an abstract noun with {-nya} and the sentence starts talking about an event.

{4} {Akan}. It appears when the text looks forward, and it is the future of the language. Where Greek had the tense in the ending, the text has {akan} plus a verb. A reader hunting for inflection finds nothing that changes and concludes that the passage repeats itself.

{5} {Sudah}. It appears in the same slot, looking backwards, and it is the past of the language. The pair {akan} and {sudah} is the whole clock of the chapter, and it is spread across different verses.

What {yang} does in {diriNya} deserves a second look, because it is the one place where a reflexive pronoun appears: Greek has {heauton} and Indonesian has {-Nya}. Greek marks reflexivity in the ending and Indonesian in the suffix, and both say that the action falls on the subject.

## Where Greek presses and Indonesian does not

The Greek of the chapter is hard for one specific reason: it stacks participles. A typical verse brings three or four participles in a chain, each modifying the one before, and the reader has to unpick the chain to know what is the subject.

Indonesian does not stack, because it has no participial syntax. Where Greek has {being}, the text has {sedang} plus a verb. Where Greek has {having been}, the text has {sudah} plus a verb. Where Greek has an absolute participle, the text has a clause with {yang}.

The result is a text that is easier and poorer. Easier because each step is a verb with an adverb in front. Poorer because the layering of participles is a device of style, and style is lost when it is traded for grammar.

And there is one thing Indonesian does not do here and Greek does twice: anaphora. In Greek the pronouns of the following lines pick up the first clause. In Indonesian, {diriNya} and {itu} do the same work with a suffix and a demonstrative, and they follow a thread that Greek spelled out without saying so.

The reading rule for a passage like this is one line: **look for adverbs before you look for syntax.** If you do not follow the passage, look at {akan}, {sudah}, {sebagai} and {yang}. There are four words, and almost all the difficulty of an Indonesian verse lives in them.

## What to do when a verse does not make sense

A verse that seems to make no sense in Indonesian almost always has one of these four problems, and none of them is vocabulary.

The first is a misread {yang}. The reader looks for a noun behind it and finds none, because the {yang} is the nominalisation. The second is {sebagai} read as an adverb. The third is an aspect adverb translated as if it were a tense: {sudah} is the past and not the future, and a sentence with {sudah} is not an unfinished sentence, it is a sentence about a result.

And the fourth is the absence of inflection. The Greek verse has information in the verb that Indonesian puts somewhere else, and the reader looks in the wrong place.

That is why this chapter is good reading even without the Greek. Anyone who reads it and understands every adverb has understood more of Philippians 2 than someone who read it in a hurry and caught the refrain.`),
  vocab: [
    V('yang', 'yang', 'that, which, who'),
    V('sebagai', 'sebagai', 'as, in the capacity of'),
    V('diriNya', 'diri', 'himself'),
    V('akan', 'akan', 'will'),
    V('sudah', 'sudah', 'already'),
    V('itu', 'itu', 'that, those'),
    V('sedang', 'sedang', 'be in the middle of'),
    V('mengosongkan', 'kosong', 'to empty'),
    V('tidak', 'tidak', 'not'),
    V('seperti', 'seperti', 'as, like'),
    V('Allah', 'Allah', 'God'),
    V('Tuhan', 'Tuhan', 'Lord'),
    V('nama', 'nama', 'name'),
    V('menerima', 'terima', 'to receive'),
    V('melihat', 'lihat', 'to see'),
    V('kita', 'kita', 'we'),
    V('gereja', 'gereja', 'church'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'In this chapter, {yang} is relative at the start of clauses and nominalising in the middle.',
      ),
    },
    { n: '2', text: T('{sebagai} is a preposition and not an adverb: what follows it is a noun.') },
    {
      n: '3',
      text: T(
        '{-Nya} in {diriNya} marks reflexivity: the action falls on the subject of the clause.',
      ),
    },
    {
      n: '4',
      text: T(
        '{akan} and {sudah} are the clock of the chapter: the first looks forward, the second back.',
      ),
    },
    {
      n: '5',
      text: T(
        'When a verse does not make sense, look for aspect adverbs and {yang} before looking at syntax.',
      ),
    },
  ],
  notes: [
    {
      label: T('What the edition does'),
      text: T(
        'The exact wording of any translation varies between editions and between printings, and in a passage as much sung as Philippians 2 alternative forms are common. The forms this chapter uses with stability are {yang}, {sebagai}, {-nya}, {akan} and {sudah}; if your copy differs in one isolated word, the sense has not changed.',
      ),
    },
    {
      label: T('Where to start reading James'),
      text: T(
        'Philippians 2 has one advantage: every verse carries one idea and the vocabulary repeats. James has the opposite, and that is why it is better reading for someone who has already read this one.',
      ),
    },
  ],
  examples: [
    { text: 'Ia sendiri mengosongkan diriNya.', gloss: T('He himself emptied himself.') },
    { text: 'Sebab itu Allah yang exaltou dia.', gloss: T('Therefore God exalted him.') },
    { text: 'Yang kamu baca itu buku.', gloss: T('What you are reading is a book.') },
    { text: 'Dia berbicara sebagai wakil.', gloss: T('He spoke as a representative.') },
    { text: 'Surat itu sudah ditulis.', gloss: T('The letter has already been written.') },
    { text: 'Surat itu akan ditulis.', gloss: T('The letter will be written.') },
    { text: 'Namanya adalah Allah.', gloss: T('His name is God.') },
    { text: 'Maka Allah yang exaltasi dia.', gloss: T('Therefore God exalted him.') },
    { text: 'Saudara, aku mencintaimu.', gloss: T('Brother, I love you.') },
    { text: 'Sebab Allah mengasihi kita.', gloss: T('Because God loves us.') },
  ],
  tables: [
    {
      caption: T('Os cinco elementos do capítulo'),
      head: ['Forma', 'Trabalho no texto', 'Exemplo de função', 'O que Replace em PT'],
      rows: [
        ['yang', 'relativo e nominalização', 'nome + yang + verbo', 'que, o que'],
        ['sebagai', 'instrumental grego', 'sebagai + substantivo', 'como, a título de'],
        ['-Nya', 'reflexivo e genitivo', 'diriNya', 'a si mesmo'],
        ['akan', 'futuro', 'akan + verbo', 'vai, fut.'],
        ['sudah', 'passado', 'sudah + verbo', 'já, pass.'],
      ],
    },
    {
      caption: T('Grego contra indonésio no mesmo trecho'),
      head: ['Grego', 'Papel', 'Indonésio', 'Perda ou ganho'],
      rows: [
        ['particípio', 'voz e tempo juntos', 'sedang + verbo', 'mais simples'],
        ['particípio perfeito', 'ação prévia', 'sudah + verbo', 'mais simples'],
        ['particípio absoluto', 'ação independente', 'oração com yang', 'mais longa'],
        ['instrumental', 'meio ou forma', 'sebagai + nome', 'uma palavra'],
        ['anáfora', 'fio do texto', 'diriNya, itu', 'mais discreta'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Ia sendiri mengosongkan diriNya}, what does {-Nya} mark?'),
    options: [T('reflexivity: himself'), T('plural'), T('negation'), T('future')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Fill in: he has already written = Dia ___ menulis surat.'),
      answer: 'sudah',
      hint: T('The adverb that looks back.'),
    },
    {
      kind: 'choose',
      prompt: T('Which word in the chapter is a preposition and not an adverb?'),
      options: [T('sebagai'), T('akan'), T('sudah'), T('itu')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the form to its function in the text'),
      pairs: [
        { a: T('{yang}'), b: T('relative or nominalising') },
        { a: T('{sebagai}'), b: T('form, means') },
        { a: T('{akan}'), b: T('future') },
        { a: T('{sudah}'), b: T('past') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
