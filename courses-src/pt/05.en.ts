import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Guided reading: John 1:1'),
  subtitle: T('The Word, the light, and the Word made flesh'),
  section: T('Reading'),
  body: C(`## The text in four blocks

John 1:1-3 reads in four segments, and each one does different work. The first is {No princípio}, a temporal reference. The second is {era o Verbo}, which places the existence of the Word before the creation narrated in Genesis 1:1. The third is {e o Verbo estava com Deus}, a relation of fellowship. The fourth is {e o Verbo era Deus}, the only statement of nature in the verse.

The difference between the third and the fourth is the one a translator must not flatten. {estava com Deus} says the Word was *beside* God, and Greek {ἦν πρὸς τὸν θεόν} uses the verb {ἦν} with {πρός}, the preposition of presence and fellowship. {era Deus} says what the Word *is*, and that is the statement the verse exists to make.

## The tense that makes the verse

{era} ({ἦν}) is **imperfect** in Greek, and the imperfect describes continued existence: the Word was, kept being, and the tense marks no end. The verb of creation next to it is {ἐγένετο} ({foi}), which is **aorist** and marks the bounded event: something happened at a point.

That is why the verse alternates the two: {era} for what never began, {foi} for what began. Rendering both as {era} flattens the contrast and makes the verse say that creation is eternal too, which is exactly what it does not say.

## The article Greek has and the one it does not

In the same verse Greek acts two ways. {ὁ λόγος} comes with the article, and {o Verbo} needs it: without the article, {o Verbo} would become {um verbo}, a different sentence. {θεός} comes without, and {Deus} stays without one: writing {o Deus} would change what the verse says about the Word.

A translator keeps the article where Greek puts one and omits it where Greek omits it. Portuguese does not decide; Greek does.

## What follows

In 1:14, {se fez carne} uses {se fazer} plus an infinitive and means “became”: it is not a passive, it is a periphrastic of change of state. {habitou} ({σκήνωσεν}) evokes the tent of the tabernacle, and the image is God camping in the middle of his people. In 1:5 light and darkness are personified, and {brilha} is in the present, which keeps the opposition going for as long the verse lasts.

## Reading criterion

Read the verse in four blocks and write beside each one what it does: date, existence, fellowship, nature. Then mark the tense of each verb and say which of the two is the one that continues. If both sides of the question answer {era}, the problem is in the tense, not in the translation.`),
  vocab: [
    V('princípio', 'princípio', 'beginning'),
    V('Verbo', 'verbo', 'Word; Logos'),
    V('estava', 'estar', 'was'),
    V('com', 'com', 'with'),
    V('carne', 'carne', 'flesh'),
    V('habitou', 'habitar', 'dwelt'),
    V('trevas', 'trevas', 'darkness'),
    V('luz', 'luz', 'light'),
    V('graça', 'graça', 'grace'),
    V('glória', 'glória', 'glory'),
    V('Logos', 'Logos', 'Logos (Greek λόγος)'),
    V('era', 'ser', 'was (imperfect of ser)'),
    V('Deus', 'Deus', 'God'),
    V('vida', 'vida', 'life'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: “In the beginning, ___ the Word”.'),
    answer: 'era',
    hint: T('Past form of estar in the narrative.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('What does {Logos} mean in this passage?'),
      options: [
        T('A human speech'),
        T('The Word who became flesh'),
        T('An abstract idea'),
        T('Only a written word'),
      ],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('In “became flesh”, {se fazer} means:'),
      options: [T('was made'), T('became'), T('should do'), T('is doing')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match the word to its sense.'),
      pairs: [
        { a: T('darkness'), b: T('opposition to light') },
        { a: T('grace'), b: T('God’s favor') },
        { a: T('flesh'), b: T('human nature assumed') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Greek has the article in {ὁ λόγος} and Portuguese writes {o Verbo}; without it, {o Verbo} would become {um verbo} and the sentence would change.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Greek has no article in {θεός}, and {Deus} stays without one: writing {o Deus} changes what the verse says about the Word.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{ἦν} ({era}) is imperfect and {ἐγένετο} ({foi}) is aorist: the first describes what continues, the second what happened at a point. Rendering both as {era} flattens the contrast with Genesis 1:1.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{se fazer} plus an infinitive means “to become”: {se fez carne} is not passive, and rendering it as {foi feito} mistranslated the periphrasis.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{ἦν πρὸς τὸν θεόν} uses {πρός}, the preposition of fellowship, not {μετά}, which means “with” in the sense of together: that is the difference between {estava com Deus} and {estava entre Deus}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Intertextuality'),
      text: T(
        '{No princípio} echoes Genesis 1:1, and {habitou} ({σκήνωσεν}) evokes the Exodus tabernacle, where God camped in the middle of the people.',
      ),
    },
    {
      label: T('Why this verse'),
      text: T(
        'It is the only place in the Bible where the Word appears alone as the subject of a statement of nature. Reading the Greek, the second person of {ἦν} ({era} tu) is what completes the statement.',
      ),
    },
  ],
  examples: [
    { text: 'No princípio era o Verbo.', gloss: T('Imperfect: the Word was and kept being.') },
    {
      text: 'E o Verbo era Deus.',
      gloss: T('θεός with no article, and {Deus} stays without one.'),
    },
    { text: 'E o Verbo estava com Deus.', gloss: T('{πρός}: fellowship, not “among”.') },
    { text: 'Todas as coisas foram feitas por ele.', gloss: T('{ἐγένετο}: aorist, what began.') },
    {
      text: 'E sem ele nada foi feito.',
      gloss: T('The negation is {μή}, not {οὐ}, as it would be for existence.'),
    },
    { text: 'O Verbo se fez carne.', gloss: T('{se fazer} plus infinitive: “became”.') },
    { text: 'E habitou entre nós.', gloss: T('{σκήνωσεν}: the tent of the tabernacle.') },
    {
      text: 'E viu a glória de Deus.',
      gloss: T('{δε} has exclusive use: “no one else”, as in {não vi ninguém}.'),
    },
    { text: 'A luz brilha nas trevas.', gloss: T('Present: the contrast goes on.') },
  ],
  tables: [
    {
      caption: T('The four blocks of John 1:1-3'),
      head: ['Segmento', 'Grego', 'O que faz'],
      rows: [
        ['No princípio', 'ἐν ἀρχῇ', 'data'],
        ['era o Verbo', 'ἦν ὁ λόγος', 'existência contínua'],
        ['estava com Deus', 'ἦν πρὸς τὸν θεόν', 'companhia'],
        ['era Deus', 'ἦν θεός', 'natureza'],
      ],
    },
    {
      caption: T('The two tenses the verse alternates'),
      head: ['Tempo', 'Grego', 'Português'],
      rows: [
        ['imperfeito', 'ἦν', 'era, estava'],
        ['aoristo', 'ἐγένετο', 'foi'],
        ['presente', 'φαίνει', 'brilha'],
      ],
    },
    {
      caption: T('Article: where Greek puts one and where it does not'),
      head: ['Grego', 'Português', 'Se traduzir com artigo'],
      rows: [
        ['ὁ λόγος', 'o Verbo', 'vira “um verbo”'],
        ['θεός', 'Deus', 'vira “o Deus”'],
      ],
    },
  ],
};
