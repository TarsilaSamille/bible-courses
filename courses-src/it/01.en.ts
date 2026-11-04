import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('Articles and nouns'),
  subtitle: T('gender, number and the article'),
  section: T('The noun and the verb'),
  body: C(`## Gender, number and three things to get right

An Italian noun has **gender and number**, and the definite article agrees with both, plus a third thing: **the sound of the first letter**. Three decisions in one word, and that is why the Italian article looks hard. Compare {il libro}, {la casa}, {lo studente}, {i libri}, {le case}.

**The plural follows the letter** almost always: {-o} becomes {-i} ({libro} → {libri}) and {-a} becomes {-e} ({casa} → {case}). The trouble comes with nouns in {-e}, which make {-i} in both genders: {il re} → {i re}, {la parte} → {le parti}. And some never change at all: {la foto} → {le foto}, {la mano} → {le mani}. Some are feminine only ({la mano}), some masculine only ({il libro}), some both ({il poeta} and {la poeta}). Those are learned; there is no rule.

Mind the other direction: {la mano} is feminine despite the {-o}, and {il libro} is masculine. The ending gives the clue, the article gives the certainty.

## Lo and l’: sound decides

The first letter changes the masculine article before s + a consonant, {z}, {gn} and {ps}: {lo studente}, {lo zelo}, {lo gnomo}, {lo psicologo}. Before a vowel the masculine article has no form of its own and becomes {l’}: {l’uomo}, {l’angelo}, {l’amore}. The feminine does the same: {l’amica}, {l’amore}, {l’isola}.

That double series explains the verbs with {l’}. They are no exception: they are the {a} of {avere} and the {e} of {essere} glued to a noun that begins with a vowel, {l’uomo} and {l’angelo}. Portuguese glues the article to the noun, {o homem}; Italian glues the preposition, {a Dio} and {l’uomo}, and the {a} is the same in both.

## In the Bible

{In principio} (John 1:1) keeps the Greek sense of "in the beginning" (ἐν ἀρχῇ). Further on, {la Parola} is defined by the Greek sense of {Word} (ὁ λόγος), not by that of "spoken utterance". A translator who recognises both things in {Parola} does not have to choose between them: the Italian word carries the {logos} and says it at once.

## Reading criterion

When you meet an Italian noun, deduce the gender from the ending and confirm it with the article: if the word begins with a vowel or with s + a consonant, the article is {l’} or {lo}, and the sound closes the diagnosis. When the two clues disagree, the context decides.`),
  vocab: [
    V('il', 'il', 'the'),
    V('lo', 'lo', 'the (special form)'),
    V('la', 'la', 'the'),
    V('l’', 'l', 'the (before a vowel)'),
    V('gli', 'gli', 'the (from lo, i)'),
    V('libro', 'libro', 'book'),
    V('parola', 'parola', 'word'),
    V('pane', 'pane', 'bread'),
    V('luce', 'luce', 'light'),
    V('mano', 'mano', 'hand'),
    V('re', 're', 'king'),
    V('foto', 'foto', 'photo'),
    V('Dio', 'Dio', 'God'),
    V('uomo', 'uomo', 'man'),
    V('mondo', 'mondo', 'world'),
    V('Parola', 'parola', 'Word (Logos)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the plural of la parola?'),
    options: [T('i paroli'), T('le parole'), T('gli parole'), T('la parole')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: ___ studenti (o + male student)'),
      answer: 'gli',
      hint: T('lo → gli'),
    },
    {
      kind: 'choose',
      prompt: T('Which article comes before lo zaino?'),
      options: [T('il'), T('lo'), T('la'), T('l’')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Make it plural: la luce → ___ luci'),
      answer: 'le',
      hint: T('The word for light is feminine.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The plural of {libro} is {libri} and of {casa} is {case}: {-o} becomes {-i} and {-a} becomes {-e}.',
      ),
    },
    {
      n: '2',
      text: T(
        'Nouns in {-e} make {-i} in both genders: {il re} → {i re}, {la parte} → {le parti}.',
      ),
    },
    {
      n: '3',
      text: T(
        'The ending does not settle the gender: {la mano} is feminine and {il libro} is masculine; the article breaks the tie.',
      ),
    },
    {
      n: '4',
      text: T(
        'Masculine before s + a consonant, {z}, {gn} or {ps} takes {lo}: {lo studente}, {lo zelo}, {lo gnomo}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Before a vowel the article becomes {l’}: {l’uomo} and {l’amica} are {l’} plus a noun in both cases.',
      ),
    },
  ],
  notes: [
    {
      label: T('The article and the proper name'),
      text: T(
        'The definite article {il} appears with the common noun ({il libro}) and disappears from the well-known proper name: {Dio}, {Gesù}, {Maria}. In {gli esseri umani}, {gli} is the article and {umani} is the noun; Italian writes it this way because Greek and Hebrew put it the other way round.',
      ),
    },
    {
      label: T('The two -o'),
      text: T(
        'There is a masculine {-o} ({il libro}, {il governo}, {il modo}) and a feminine {-o} ({la mano}, {la foto}, {la moto}). Neither side has a rule: what settles it is the article, which is why no Italian dictionary lets a noun go without one.',
      ),
    },
  ],
  examples: [
    { text: 'Il libro è la parola di Dio.', gloss: T('The book is the Word of God.') },
    { text: 'Lo studente legge le parole.', gloss: T('The student reads the words.') },
    { text: 'La mano dello studente.', gloss: T('The student’s hand.') },
    { text: 'Gli esseri umani.', gloss: T('Human beings.') },
    { text: 'L’uomo e la donna.', gloss: T('The man and the woman.') },
    { text: 'Le case sono bianche.', gloss: T('The houses are white.') },
    { text: 'Lo zelo del giovane.', gloss: T('The young man’s zeal.') },
    { text: 'In principio era la Parola.', gloss: T('In the beginning was the Word.') },
  ],
  tables: [
    {
      caption: T('Definite articles'),
      head: ['Singolare', 'Plurale', 'Forma'],
      rows: [
        ['il libro', 'i libri', 'maschile'],
        ['lo studente', 'gli studenti', 's + consonante'],
        ['la ragazza', 'le ragazze', 'femminile'],
        ['l’uomo', 'gli uomini', 'davanti a vocale'],
      ],
    },
    {
      caption: T('Plural by ending'),
      head: ['Singolare', 'Plurale', 'Regola'],
      rows: [
        ['il libro', 'i libri', '-o → -i'],
        ['la casa', 'le case', '-a → -e'],
        ['il re', 'i re', '-e → -i'],
        ['la parte', 'le parti', '-e → -i'],
        ['la mano', 'le mani', '-o → -i'],
        ['la foto', 'le foto', 'invariabile'],
      ],
    },
  ],
};
