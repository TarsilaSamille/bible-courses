import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('Pronoun'),
  title: T('Pronouns: person, possession, pointing, asking'),
  subtitle: T('ο διδάσκαλός μου — αυτός — εκείνος — ποιος'),
  body: C(`## The possessive comes after

**{μου}, {σου}, {μας}, {σας} are not independent words**: they stick to the word before them and change accent depending on what they meet. Two constructions, same sense: {ο διδάσκαλός μου} and {μου διδάσκαλός}. The second is rare and emphatic; the first is the normal one.

The possessor of a noun is the only possessive that inflects by gender. {του}, {της}, {του} come from the fusion of {τού} with the article, and that is why {του} does two jobs: "the" and "of". A pronoun and a preposition in one form.

## αυτός is strong, εκείνος is weak

The demonstrative system has two series. The strong one is {αυτός}, {αυτή}, {αυτό}, plus {τούτος} and {αυτούτος}, with {τ-} in front. The weak one is {εκείνος}, {εκείνη}, {εκείνο}, with {κ-}. The strong one points at what is near or at what has just been said; the weak one points at what is far or at what is known from elsewhere.

In today's restricted usage only the pair {αυτός} and {εκείνος} survives, and the distinction is one of context rather than distance: {αυτός} introduces whoever enters the scene, {εκείνος} introduces whoever was already in it. {Αυτός είναι ο φίλος μου}, "this one here is my friend". Swapping one for the other changes the story, not just the tone.

## ποιος asks about a person, τι about a thing

Greek separates two questions that English runs together. {ποιος} is masculine and asks about a person: {ποιος είναι αυτός;}, "who is he?". {τι} is neuter and asks about a thing: {τι είναι αυτό;}, "what is this?". Neither inflects.

The distinction is productive. {Ποιος έφαγε το φαγητό;} asks who was the agent. {Τι έφαγε ο Γιώργος;} asks what the food was. Same verb, same syntactic shape, and Greek changes the answer with one word.

And there is a second pair, about type rather than identity: {ποιο είδους} does not exist in modern Greek, and {τι είδους} stands in its place. A translator coming from Latin looks for {ποιο} to say "of what kind" and finds {τι είδους}, which is the formula.

## The relative and the complement

{που} is the modern Greek relative, and it does not inflect: {ο φίλος που έρχεται}, "the friend who is coming". It covers person and thing alike, and that is why Greek does not distinguish "whose" from "that" the way English does.

What you may not do is treat {ότι} as {που}. {Πιστεύω ότι έρχεται} is a whole declarative clause: the verb {έρχεται} sits outside the relative. {Πιστεύω που έρχεται} means nothing, because {που} needs a noun in front of it. The difference is grammatical, not stylistic.

## Where the pronouns appear in Scripture

> Ἐγώ εἰμι τὸ φῶς τοῦ κόσμου· ὁ ἀκολουθῶν ἐμοὶ οὐ μὴ περιπατήσῃ ἐν τῇ σκοτίᾳ, ἀλλ᾽ ἕξει τὸ φῶς τῆς ζωῆς.

{Ἐγώ} stands alone, with no finite verb in view, and that is allowed: {ἐστί} was absorbed into {εἰμί}, which is stronger than any finite form. The clitic {μοι} comes after {ἀκολουθῶν} and belongs to {ἐμοί}. It is the postpositive possessive in its purest form: attached to the verb right before it, not standing on its own in the sentence.`),
  vocab: [
    V('ο διδάσκαλός μου', 'ο διδάσκαλός μου', 'my teacher'),
    V('μου', 'μου', 'my, of me'),
    V('σου', 'σου', 'your, of you'),
    V('μας', 'μας', 'our'),
    V('σας', 'σας', 'your (plural)'),
    V('αυτός', 'αυτός', 'this one, this very one'),
    V('εκείνος', 'εκείνος', 'that one'),
    V('τούτος', 'τούτος', 'this one (literary)'),
    V('ποιος', 'ποιος', 'who; which'),
    V('τι', 'τι', 'what; that'),
    V('που', 'που', 'that (relative)'),
    V('ότι', 'ότι', 'that (clause)'),
    V('ο φίλος', 'φίλος', 'the friend'),
    V('το φαγητό', 'το φαγητό', 'the food'),
    V('πιστεύω', 'πιστεύω', 'I believe'),
    V('ο Γιώργος', 'ο Γιώργος', 'George'),
  ],
  rules: [
    { n: '§1', text: T('The possessive μου/σου/μας/σας comes after the word it modifies.') },
    {
      n: '§2',
      text: T(
        'αυτός is the strong series and εκείνος the weak one: the first introduces, the second refers back.',
      ),
    },
    { n: '§3', text: T('ποιος asks about a person, τι about a thing, and neither inflects.') },
    {
      n: '§4',
      text: T('που is the relative and ότι the verb complement: the two sentences are different.'),
    },
  ],
  notes: [
    {
      label: T('Dative'),
      text: T(
        'μου, σου, μας and σας are the four words left over from the ancient dative. They stay clitic, lose their accent and change form according to the word that follows.',
      ),
    },
    {
      label: T('Koine'),
      text: T(
        'ἐμοί and σοί in the Bible are ancient Greek forms, with their own accent and full inflection. Modern Greek reduced everything to μου and σου, which are clitics and do not move.',
      ),
    },
  ],
  examples: [
    { text: 'ο διδάσκαλός μου έρχεται', gloss: T('my teacher is coming') },
    { text: 'οι γονείς σου έχουν έρθει', gloss: T('your parents have come') },
    { text: 'αυτός είναι ο φίλος μου', gloss: T('this one here is my friend') },
    { text: 'εκείνος έφυγε χθες', gloss: T('that one left yesterday') },
    { text: 'ποιος είναι αυτός;', gloss: T('who is he?') },
    { text: 'τι είναι αυτό;', gloss: T('what is this?') },
    { text: 'ο φίλος που έρχεται', gloss: T('the friend who is coming') },
    { text: 'πιστεύω ότι έρχεται', gloss: T('I believe he is coming') },
  ],
  tables: [
    {
      caption: T('Personals and matching possessives'),
      head: ['Πρόσωπο', 'Ονομαστική', 'Κλητική', 'Αιτιατική'],
      rows: [
        ['πρώτο', 'εγώ', 'εμένα', 'εγώ'],
        ['δεύτερο', 'εσύ', 'εσένα', 'εσύ'],
        ['τρίτο', 'αυτός', 'αυτόν', 'αυτός'],
      ],
    },
    {
      caption: T('Interrogative determiners'),
      head: ['Λέξη', 'Λειτουργία'],
      rows: [
        ['ποιος', 'άνθρωπος'],
        ['τι', 'πράγμα'],
        ['πού', 'τόπος'],
        ['πότε', 'χρόνος'],
        ['πόσο', 'ποσότης'],
        ['πώς', 'τρόπος'],
      ],
    },
    {
      caption: T('The two demonstrative series'),
      head: ['Σειρά', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['ισχυρή', 'αυτός', 'αυτή', 'αυτό'],
        ['ασθενής', 'εκείνος', 'εκείνη', 'εκείνο'],
        ['λόγιο', 'τούτος', 'αύτη', 'τούτο'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which word asks about a person?'),
    options: [T('τι'), T('ποιος'), T('που'), T('ότι')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('ο διδάσκαλός ___ έρχεται (possessive)'),
      answer: 'μου',
      hint: T('First person clitic'),
    },
    {
      kind: 'choose',
      prompt: T('Which pronoun introduces someone already known?'),
      options: [T('αυτός'), T('εκείνος'), T('τούτος'), T('ποιος')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Question and answer'),
      pairs: [
        { a: 'ποιος', b: T('who') },
        { a: 'τι', b: T('what') },
        { a: 'πώς', b: T('how') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('___ είναι αυτό; (the Greek word that asks about a person)'),
      answer: 'Ποιος',
      hint: T('Capital letter'),
    },
  ],
};
