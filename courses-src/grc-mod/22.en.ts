import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('Adverb'),
  title: T('The negation that came from nothing'),
  subtitle: T('δεν λέω — μη λέγεις — οὐ λέγω'),
  body: C(`## δεν is nothing

The word that negates in modern Greek is not a negative word: it is {οὐδέν}, "nothing", with the front part worn away. {δεν} is what is left of {οὐδέν} once the second syllable turned into a linking {ν}.

The consequence is practical, and it is a large one: **modern Greek has no negative adverb**. Anyone who says "no" is saying "nothing" and dropping the rest of the sentence. {Δεν έρχεται} is literally "nothing comes", and a word-for-word translation writes "does not come" because that is what the sentence means.

The position is fixed: {δεν} comes before the verb, always. Not after it, as in English. Not glued to it, as in Spanish. Before.

## δεν, μην, μη

Greek writes the same word three ways, and the choice is a rule of pronunciation, not of meaning. {δεν} is the general form and the one most spoken. {μην} is the written form, used before a strong verb or a consonant. {μη} is the written form before a vowel or a weak verb.

{δεν θα έρθει}, {δεν μπορεί}, {δεν ήρθε}: all three are the same sentence. None of them negates more or less than the other two. What changes is the sound, and the sound is deducible from the first letter of the verb that follows.

## οὐ and μη: the pair Scripture uses

Ancient Greek, and with it the Bible, has two negatives with a rule. {οὐ} negates the indicative: {οὐ λέγω}, "I do not say". {μη} negates the imperative and the infinitive: {μη λέγε}, "do not say". {οὐκ} is {οὐ} when the verb begins with a vowel: {οὐκ ἔρχεται}.

The rule can be written as a choice of particle: **the negative that comes with a finite verb is {οὐ}; the one that comes with an imperative or an infinitive is {μη}**. There is no third possibility anywhere in ancient Greek.

## There is only one prohibitive

Modern Greek has a single prohibitive construction: {μη} plus the second person singular imperative. {Μη μιλήσεις}, "do not speak". {Μη φύγεις}, "do not leave". There is no {μη} plus subjunctive, no {μη} plus future, and no double prohibitive.

What replaces the missing imperative in the other persons is the imperative plus {να}, which is a much later construction: {Μην πεις}, {Μην πάτε}, {Μην τρέξετε}. A translator who writes {μη μην} is joining two languages.

## Where the negation stands in Scripture

> Ὁ δὲ λέγων αὐτῷ, Μὴ σπεύσῃς, κύριε.

It is the Syro-Phoenician woman in chapter 7 of Mark, and the whole sentence fits in one rule. {λέγων} is a present participle, the main verb is in the indicative, and even so the negative is {μὴ}. The construction is not the prohibitive: it is a request.

Rendered into English it becomes "do not hurry", and that sounds like advice. In Greek it is {μή} plus a verb in the subjunctive ({σπεύσῃς}), which is the shape of request and of wish. A translator who works word for word writes "don't hurry" and loses the fact that the woman is asking, not forbidding.`),
  vocab: [
    V('δεν', 'δεν', 'not'),
    V('δέν', 'δεν', 'not (colloquial, accented)'),
    V('μην', 'μην', 'not (written)'),
    V('μη', 'μη', 'not (before a vowel)'),
    V('οὐ', 'οὐ', 'not (indicative, ancient Greek)'),
    V('οὐκ', 'οὐκ', 'not (before a vowel)'),
    V('οὐδέν', 'οὐδέν', 'nothing'),
    V('λέω', 'λέω', 'I say'),
    V('λέγω', 'λέγω', 'I say'),
    V('μη λέγεις', 'λέγω', 'do not say'),
    V('μη φύγεις', 'φεύγω', 'do not leave'),
    V('μη σπεύσῃς', 'σπεύδω', 'do not hurry'),
    V('έρχεται', 'έρχομαι', 'comes'),
    V('ήρθε', 'έρχομαι', 'came'),
    V('θα έρθει', 'έρχομαι', 'will come'),
    V('λέγων', 'λέγω', 'saying (participle)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Modern Greek has no negative adverb: δεν comes from οὐδέν, "nothing", and comes before the verb.',
      ),
    },
    {
      n: '§2',
      text: T(
        'δεν, μην and μη are one word in three spellings; the choice follows the first letter of the verb.',
      ),
    },
    {
      n: '§3',
      text: T(
        'In ancient Greek οὐ negates the indicative and μη negates the imperative and the infinitive.',
      ),
    },
    {
      n: '§4',
      text: T('There is a single prohibitive: μη plus the second person singular imperative.'),
    },
  ],
  notes: [
    {
      label: T('Position'),
      text: T(
        'The Greek negative is pre-verbal and fixed. Spanish also puts "no" before the verb, but English puts it after, which is why machine translation gets both languages wrong.',
      ),
    },
    {
      label: T('Koine'),
      text: T(
        'μὴ σπεύσῃς is not an imperative: σπεύσῃς is aorist subjunctive. Scripture uses μὴ outside the prohibitive, with the subjunctive, to ask and to wish, and that use is what English does not distinguish from an order.',
      ),
    },
  ],
  examples: [
    { text: 'δεν λέω', gloss: T('I do not say') },
    { text: 'δεν έρχεται', gloss: T('he does not come') },
    { text: 'δεν θα έρθει', gloss: T('he will not come') },
    { text: 'δεν ήρθε', gloss: T('he did not come') },
    { text: 'μη λέγεις', gloss: T('do not say') },
    { text: 'μη φύγεις', gloss: T('do not leave') },
    { text: 'δεν μπορεί', gloss: T('he cannot') },
    { text: 'οὐ λέγω', gloss: T('I do not say (ancient Greek)') },
  ],
  tables: [
    {
      caption: T('The three spellings'),
      head: ['Γραφή', 'Πότε', 'Παράδειγμα'],
      rows: [
        ['δεν', 'γενική μορφή', 'δεν έρχεται'],
        ['μην', 'γραπτή, σύμφωνο', 'δεν μπορεί'],
        ['μη', 'γραπτή, φωνήεν', 'δεν ήρθε'],
      ],
    },
    {
      caption: T('The ancient pair'),
      head: ['Άρνηση', 'Ρήμα', 'Παράδειγμα'],
      rows: [
        ['οὐ', 'οριστική', 'οὐ λέγω'],
        ['οὐκ', 'οριστική, φωνήεν', 'οὐκ ἔρχεται'],
        ['μή', 'προστακτική, άπειρος', 'μή λέγε'],
      ],
    },
    {
      caption: T('Where the negation sits'),
      head: ['Χρόνος', 'Μορφή'],
      rows: [
        ['ενεστώτας', 'δεν μιλάει'],
        ['αόριστος', 'δεν μίλησε'],
        ['μέλλοντας', 'δεν θα μιλήσει'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which is the written form of the negative before a vowel?'),
    options: [T('δεν'), T('μην'), T('μη'), T('οὐδέν')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ έρχεται (negative before a vowel)'),
      answer: 'δεν',
      hint: T('The general form'),
    },
    {
      kind: 'choose',
      prompt: T('In ancient Greek, which negative goes with the imperative?'),
      options: [T('οὐ'), T('μή'), T('οὐκ'), T('οὐδέν')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Negative and function'),
      pairs: [
        { a: 'δεν', b: T('modern indicative') },
        { a: 'οὐ', b: T('ancient indicative') },
        { a: 'μη', b: T('prohibition') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('___ μιλήσεις (prohibitive)'),
      answer: 'Μη',
      hint: T('Capital letter'),
    },
  ],
};
