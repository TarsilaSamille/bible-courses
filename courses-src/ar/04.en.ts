import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Past-tense verbs'),
  subtitle: T('كَتَبَ: roots and personal suffixes'),
  section: T('The verb'),
  body: C(`## The triconsonantal root

Every Arabic verb grows from a root of three consonants, and the root carries the meaning. {ك-ت-ب} means write; {ق-و-ل} say; {خ-ل-ق} create. The root is not a word: it is a pattern of three consonants into which vowels and suffixes are fitted. That is why two verbs from the same root are recognisable even when they share no shape at all.

## The past

The past is formed by adding vowels and a person suffix. Compare {كَتَبَ} (he), {كَتَبَتْ} (she), {كَتَبْتَ} (you), {كَتَبْتُ} (I), {كَتَبْنَا} (we) and {كَتَبُوا} (they). The ending {وا} marks the masculine plural, {نا} the common plural. An ending in {ت} is either the second person or the third feminine — context tells them apart.

## Epenthetic vowels

The past vowels are not arbitrary: {كَتَبَ} carries {ا} after the first consonant, and the second consonant takes {َ}. In roots whose last consonant is weak, {ِ} appears beneath it: {قَالَ}. This rule is what lets you tell a triconsonantal root from a weak one, the subject of lesson 8.

## Tense in the sentence

In Genesis 1:3, {وَقَالَ اللهُ: لِيَكُنْ نُورٌ}, the structure is a past verb followed by a jussive order. The perfect of {ق-و-ل} narrated; {لِيَكُنْ} commands. The verb {خَلَقَ} comes next, and it is the form a plain translation renders as "there was light" — generic Portuguese hides the distinction Arabic keeps.

## Reading criterion

When you meet a verb in the text, first strip out the three-consonant root, then identify the person suffix, and only then read the tense. The root is what makes dictionary lookup possible.`),
  vocab: [
    V('كَتَبَ', 'كتب', 'he wrote'),
    V('كَتَبَتْ', 'كتب', 'she wrote'),
    V('كَتَبْتَ', 'كتب', 'you wrote'),
    V('كَتَبْتُ', 'كتب', 'I wrote'),
    V('كَتَبْنَا', 'كتب', 'we wrote'),
    V('كَتَبُوا', 'كتب', 'they wrote'),
    V('قَالَ', 'قال', 'he said'),
    V('خَلَقَ', 'خلق', 'he created'),
    V('آمَنَ', 'آمن', 'he believed'),
    V('أَنَا', 'أنا', 'I'),
    V('أَنْتَ', 'أنت', 'you'),
    V('نَحْنُ', 'نحن', 'we'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: ___ كَتَبَ (he wrote).'),
    answer: 'هُوَ',
    hint: T('Third-person masculine pronoun.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Match person and form.'),
      pairs: [
        { a: T('I'), b: T('كتبتُ') },
        { a: T('we'), b: T('كتبنا') },
        { a: T('she'), b: T('كتبت') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('Which root means write?'),
      options: [T('q-w-l'), T('k-t-b'), T('kh-l-q'), T('ʾ-m-n')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('In {وَقَالَ اللهُ}, what is the function of اللهُ?'),
      options: [T('object'), T('subject'), T('adverb'), T('numeral')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('The root carries lexical meaning; it does not stand alone as a functioning word.'),
    },
    {
      n: '2',
      text: T(
        'The perfect normally takes a personal suffix; the 3rd m. ending -a is context-sensitive.',
      ),
    },
    { n: '3', text: T('Past negation can be {لَمْ} + jussive, as in {لَمْ يَكْتُبْ}.') },
  ],
  notes: [
    {
      label: T('Word order'),
      text: T('Verb-subject-object order is typical, but the subject may move.'),
    },
  ],
  examples: [
    { text: 'قَالَ اللهُ', gloss: T('allāhu qāla — God said') },
    { text: 'آمَنْتُ بِالله', gloss: T('āmantu billāh — I believed in God') },
    { text: 'لِيَكُنْ نُورٌ', gloss: T('li-yakun nūr — let there be light') },
  ],
  tables: [
    {
      caption: T('Paradigm of كتب'),
      head: [T('Person'), T('Singular'), T('Plural')],
      rows: [
        ['1.ª', 'كَتَبْتُ', 'كَتَبْنَا'],
        ['2.ª m.', 'كَتَبْتَ', 'كَتَبْتُمْ'],
        ['2.ª f.', 'كَتَبْتِ', 'كَتَبْتُنَّ'],
        ['3.ª m.', 'كَتَبَ', 'كَتَبُوا'],
        ['3.ª f.', 'كَتَبَتْ', 'كَتَبْنَ'],
      ],
    },
  ],
};
