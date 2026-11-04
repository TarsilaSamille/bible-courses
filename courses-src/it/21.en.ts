import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('The pronouns'),
  subtitle: T('lo so; il mio libro; qualche, nessuno'),
  section: T('The article and the pronouns'),
  body: C(`## The emphatic pronoun: {lo}, {la}, {li}, {le}

When a pronoun appears on its own, without a verb, it becomes **emphatic** and takes the form of the person it stands in for: {lo}, {la}, {li}, {le}, plus {me}, {ti}, {ci}, {vi}, {si}. *Lo so.* *La vedo.* *Li conosco.* *Le ho detto tutto.*

The point that misleads is agreement. The emphatic agrees with **what it replaces**, not with the listener or the speaker: in "le tenebre non l’hanno vinto", {le tenebre} is plural and {l’hanno} is plural, but the pronoun is {la}, singular, because it stands in for {la luce}. If the pronoun were plural, the sentence would be "le tenebre le hanno vinto", and the meaning would change.

## Possessives and demonstratives

The possessive agrees with the thing possessed: {il mio libro}, {i miei libri}, {la mia casa}, {le mie case}, {il suo padre}, {i suoi padri}. Without an article, in the invariable form, is what shows up in clauses like "Dio è nostro padre" and "Maria è sua sorella". And there is a form that replaces {di + il quale} entire: **{di cui}**, as in "il libro di cui parlo".

The demonstrative has two rows: {questo} and {quello}, with {questa}, {questi}, {queste} and {quella}, {quegli}, {quelle}. The pair in {quegli} is the same as {lo}/{gli}: before s + consonant, z, gn and ps, or before a masculine proper noun, the distant one becomes {quegli} ("quegli studenti", "quegli americani"), and before a vowel it becomes {quell’} ("quell’uomo"). {Codesto} is the distant one with distance and a judgement attached: {codesta} è {una} cosa ben diversa.

## Indefinites, interrogatives, and the pair that jams

**Indefinites**: {ogni} and {qualche} are **always singular** and already do the article’s work ("ogni uomo", "qualche libro"), {alcuni} is plural, {nessuno} is "nobody", {ciascuno} is "each one", {tutti} is "all".

**Interrogatives**: {chi} asks about a person, {che} or {cosa} about a thing, {come}, {dove}, {quando}, {quanto}, {quale}. And here is the pair that jams most: the relative {che} and the interrogative {che} are **the same word**. In "So {che} viene" the {che} is a conjunction and introduces a subordinate clause; in "{Che} viene?" the {che} is a pronoun and is the question itself. What decides it is position: after a verb that already has a subject, it is relative; at the head of an interrogative sentence, it is what is being asked.

## In the Bible

John 1:5 settles both at once: "La luce splende nelle tenebre, e {le tenebre non l’hanno} vinto". {La luce} is determined, so the pronoun comes back as {la}. {Le tenebre} is determined too and plural, and even so the pronoun is {la}: the verb {hanno} is third plural because it agrees with {le tenebre}, the subject. Anyone who renders {l’hanno} as "they overcame it" loses the information that the light is one.

## Reading criterion

Whenever {lo}, {la}, {li} or {le} turns up outside a pronoun cluster, ask what they stand in for: the answer is in the sentence and in the agreement of the verb. And when the same {che} appears twice in one verse, compare the positions: one of them is relative, the other is a question.`),
  vocab: [
    V('lo', 'lo', 'it/he (emphatic, masc.)'),
    V('la', 'la', 'it/she (emphatic, fem.)'),
    V('li', 'li', 'them (emphatic)'),
    V('le', 'le', 'them (emphatic, fem.)'),
    V('me', 'me', 'to me'),
    V('mio', 'mio', 'my'),
    V('suo', 'suo', 'his'),
    V('di cui', 'di cui', 'whose, of which'),
    V('questo', 'questo', 'this'),
    V('quello', 'quello', 'that'),
    V('quegli', 'quegli', 'those'),
    V('qualche', 'qualche', 'a few (singular)'),
    V('alcuni', 'alcuno', 'some'),
    V('nessuno', 'nessuno', 'nobody'),
    V('ciascuno', 'ciascuno', 'each one'),
    V('ogni', 'ogni', 'every (singular)'),
    V('chi', 'chi', 'who'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "le tenebre non l’hanno vinto", what pronoun is l’?'),
    options: [
      T('Plural, because the subject is plural'),
      T('Singular, because it replaces la luce'),
      T('Neuter, because it shows possession'),
      T('Feminine plural, because the verb is plural'),
    ],
    answer: 1,
    hint: T('The emphatic agrees with what it replaces, not with the subject.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which pronoun is the short form of "il libro di cui parlo"?'),
      options: [T('di cui'), T('il quale'), T('che'), T('lo')],
      answer: 0,
      hint: T('It is di + il quale fused.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence uses the interrogative che?'),
      options: [
        T('So che viene.'),
        T('Che viene?'),
        T('Il libro che leggo.'),
        T('Ecco che cosa dice.'),
      ],
      answer: 1,
      hint: T('A relative che comes after the verb; an interrogative one opens the question.'),
    },
    {
      kind: 'fill',
      prompt: T('Which demonstrative goes before "studenti"? ___ studenti'),
      answer: 'quegli',
      hint: T('s + consonant takes gli.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The emphatic lo, la, li and le agree with what they replace, not with the subject of the sentence.',
      ),
    },
    {
      n: '2',
      text: T(
        'The possessive agrees with the thing possessed: il mio libro, i miei libri, la mia casa.',
      ),
    },
    { n: '3', text: T('Di cui replaces di + il quale: il libro di cui parlo.') },
    { n: '4', text: T('Ogni and qualche never appear in the plural: ogni uomo, qualche libro.') },
    {
      n: '5',
      text: T(
        'The relative che and the interrogative che are the same word; position decides which is which.',
      ),
    },
  ],
  notes: [
    {
      label: T('The distance of the demonstrative'),
      text: T(
        '{Questo} is what is near the speaker or the listener, the listener included ({questo libro è suo}); {quello} is the rest. {Codesto} adds distance and a judgement: {codesto} è {un} prezzo {ingiusto}. None of the three has a neuter form, and Italian has no neuter pronoun.',
      ),
    },
    {
      label: T('The che pair, again'),
      text: T(
        'In "So che viene", {che} is a conjunction and the subordinate clause has a subject of its own ({lui}). In "Che viene?", {che} is a pronoun and stands in for the subject. If a sentence can be read both ways, Italian prefers the interrogative.',
      ),
    },
  ],
  examples: [
    { text: 'Lo so.', gloss: T('I know.') },
    { text: 'La vedo ogni giorno.', gloss: T('I see her every day.') },
    { text: 'Li conosco già.', gloss: T('I know them already.') },
    { text: 'Il mio libro e la tua casa.', gloss: T('My book and your house.') },
    { text: 'Il libro di cui parlo.', gloss: T('The book I am talking about.') },
    { text: 'Questi sono i miei amici.', gloss: T('These are my friends.') },
    { text: 'Quegli studenti sono stranieri.', gloss: T('Those students are foreigners.') },
    { text: 'Non c’è nessuno.', gloss: T('There is nobody.') },
    { text: 'Ogni uomo cerca Dio.', gloss: T('Every man seeks God.') },
    { text: 'Che dice il libro?', gloss: T('What does the book say?') },
  ],
  tables: [
    {
      caption: T('Emphatic pronouns'),
      head: ['Persona', 'Singolare', 'Plurale'],
      rows: [
        ['1ª', 'io', 'noi'],
        ['2ª', 'tu', 'voi'],
        ['3ª masc.', 'lui, lo', 'loro, li'],
        ['3ª fem.', 'lei, la', 'loro, le'],
      ],
    },
    {
      caption: T('Possessives'),
      head: ['Persona', 'Singolare', 'Plurale'],
      rows: [
        ['1ª', 'mio, mia', 'miei, mie'],
        ['2ª', 'tuo, tua', 'tuoi, tue'],
        ['3ª', 'suo, sua', 'suoi, sue'],
        ['1ª plurale', 'nostro', 'nostri, nostre'],
        ['relativo', 'di cui', 'di cui'],
      ],
    },
    {
      caption: T('Demonstratives'),
      head: ['Punto di vista', 'Singolare', 'Plurale'],
      rows: [
        ['vicino (maschile)', 'questo', 'questi'],
        ['vicino (femminile)', 'questa', 'queste'],
        ['lontano (maschile)', 'quello', 'quegli'],
        ['lontano (femminile)', 'quella', 'quelle'],
      ],
    },
  ],
};
