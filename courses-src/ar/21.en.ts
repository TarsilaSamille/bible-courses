import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('Gender and the {ة} marker'),
  subtitle: T('مَلِكٌ، مَلِكَةٌ، شَجَرَةٌ'),
  section: T('Nouns'),
  body: C(`## The masculine is what carries no mark

In Portuguese, {livro} and {mesa} give away their gender in the ending, and a beginner arrives at the inflection already expecting it. Arabic does the same, with one difference that changes everything: **the masculine has no marker at all, and the feminine has one**.

{مَلِكٌ} is masculine and has nothing beyond the case ending. {مَلِكَةٌ} is feminine and has one extra letter. Gender is therefore negative information in the masculine and positive information in the feminine, and the practical test for an unknown noun is simply to look for {ة}. If it is not there, the noun is masculine, and the inflection is already decided.

Gender does not say what the thing is, nor whether it is alive. {نَارٌ} is feminine and is not a person; {فَجْرٌ} is masculine and is an abstraction. The morphological information is all there is to know before the dictionary.

## The three endings of the feminine

{ة} is not the only marker. The feminine shows up with three endings, and the distinction matters because each of them brings its own plural.

The closed {ة} appears in the overwhelming majority of cases: {مَلِكَةٌ}, {شَجَرَةٌ}, {قَلَمَةٌ}, {مَدْرَسَةٌ}. The plural is regular, with {ـات}: {مَلَكَاتٌ}, {شَجَرَاتٌ}.

The open {ى} appears in few nouns, and the plural almost always carries {ء}: {حُرْمَى} gives {حُرُمَى}, {عُذْرَى} gives {عُذْرَى}. These are rare words and almost always of non-Arabic origin.

The final {ء} opens the same account: {سَمَاءٌ} gives {سَمَوَاتٌ}, and {بَيَاءٌ} gives {بُيُيُوبٌ}. And there are feminine words with no {ة} at all, which the lexicon keeps by custom: {أُمٌ}, {نَارٌ}, {أُخْتٌ}, {حُرْمَى}.

## What gender makes agree

Gender is a key, and the key opens four doors. **The noun governs the adjective, the verb, the pronoun and the possessive suffix.**

The adjective agrees: {كِتَابٌ جَدِيدٌ} and {كِتَابَةٌ جَدِيدَةٌ}. The verb changes shape, and the change shows in the ending: {كَتَبَ} he wrote, {كَتَبَتْ} she wrote. The pronoun changes letter: {هُوَ} and {هِيَ}. The possessive follows: {كِتَابُهُ} and {كِتَابُهَا}.

And the regular plural, already met, follows the same key: {مُعَلِّمُونَ} for the masculine, {مُعَلِّمَاتٌ} for the feminine. Anyone who knows the gender of the noun knows the plural, the adjective and the shape of the verb, and the saving is considerable.

## Where gender goes against expectation

Here is the exception, and it takes more room than the rule because it is what a reader trips over.

An inanimate noun takes the verb in the masculine, by default. That holds even when the noun is feminine: in {فِي الْبَدْءِ كَانَ الْكَلِمَةُ}, {الْكَلِمَةُ} is feminine and {كَانَ} is masculine. That is neither a translator's slip nor a copyist's: it is the pattern of the language, and the reading that follows the gender of the noun writes a verb nobody pronounces. The rule governs noun and adjective, with a short list of exceptions.

A non-human plural counts as feminine in agreement, even when it has no {ة}: {أَعْمَالٌ كَثِيرَةٌ}, {فِكَرٌ كَثِيرَةٌ}, {خَشَبٌ كَثِيرٌ} with the second part in the plural. The plural behaves as if it were one entity, and inanimate entities are treated as feminine.

Then there are the cases where the lexicon decides and grammar only warns. {شَجَرٌ} is masculine and {شَجَرَةٌ} is feminine, but {فَجْرٌ} is masculine and {فَجْرَةٌ} exists too, with a different sense. No morphological pattern settles those, which is why a translator who trusts the ending goes wrong here more than anywhere else in the language.

## Reading criterion

Before translating a verb, look at the noun and look for {ة}. In {جَاءَ الرَّجُلُ} the noun is masculine and the verb is masculine; in {جَاءَتِ الْمَرْأَةُ} the ending {ـة} says the noun is feminine and the verb has to be {جَاءَتْ}. When the noun has no {ة} and the verb still looks feminine, the noun is one of the few that inverts the pattern, and the list is short enough to memorise.`),
  vocab: [
    V('مَلِكٌ', 'ملك', 'king; masculine with no marker'),
    V('مَلِكَةٌ', 'ملك', 'queen'),
    V('كَاتِبٌ', 'كتب', 'writer'),
    V('كَاتِبَةٌ', 'كتب', 'woman writer'),
    V('شَجَرَةٌ', 'شجرة', 'tree'),
    V('حُرْمَى', 'حرم', 'sanctuary; feminine in {ى}'),
    V('سَمَاءٌ', 'سماء', 'sky; feminine in {ء}'),
    V('نَارٌ', 'نار', 'fire; feminine with no {ة}'),
    V('جَدِيدٌ', 'جديد', 'new'),
    V('جَدِيدَةٌ', 'جديد', 'new, feminine'),
    V('أَعْمَالٌ', 'عمل', 'works; a non-human plural that agrees as feminine'),
    V('كَثِيرَةٌ', 'كثير', 'many, feminine'),
    V('كَتَبَتْ', 'كتب', 'she wrote'),
    V('هِيَ', 'هي', 'she'),
    V('أُخْتٌ', 'أخت', 'sister; feminine with no {ة}'),
    V('تَاء مربوطة', 'تاء', 'the letter that marks the feminine'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which of these nouns is feminine?'),
    options: [T('مَلِكٌ'), T('شَجَرَةٌ'), T('كِتَابٌ'), 'قَلَمٌ'],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the feminine of {مَلِكٌ}: ___ِكَة'),
      answer: 'مَ',
      hint: T('The initial letter of the masculine, with the feminine ending.'),
    },
    {
      kind: 'choose',
      prompt: T('In {فِي الْبَدْءِ كَانَ الْكَلِمَةُ}, why is the verb masculine?'),
      options: [
        T('Because {الْكَلِمَةُ} is masculine'),
        T('Because the noun is inanimate and agreement is masculine by default'),
        T('Because the verb is a proper noun'),
        T('Because {كَانَ} is feminine'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match gender and form.'),
      pairs: [
        { a: T('كَتَبَ'), b: T('masculine') },
        { a: T('كَتَبَتْ'), b: T('feminine') },
        { a: T('جَدِيدٌ'), b: T('masculine') },
        { a: T('جَدِيدَةٌ'), b: T('feminine') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which of these has the commonest plural in {ات}?'),
      options: [T('حُرْمَى'), T('شَجَرَةٌ'), 'نَارٌ'],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('**The masculine has no marker; the feminine has {ة}.**') },
    { n: '2', text: T('Feminines have three endings: the closed {ة}, and the open {ى} and {ء}.') },
    {
      n: '3',
      text: T('Gender governs the adjective, the verb, the pronoun and the possessive suffix.'),
    },
    {
      n: '4',
      text: T(
        'The regular plural follows gender: {ـون} for the masculine and {ـات} for the feminine.',
      ),
    },
    {
      n: '5',
      text: T(
        'An inanimate noun takes the verb in the masculine by default, even when the noun is feminine: {كَانَ الْكَلِمَةُ}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Where grammar only warns'),
      text: T(
        'Not every noun ending in {ة} is feminine, and not every feminine ends in {ة}. {فَجْرٌ} is masculine and {فَجْرَةٌ} exists as well, with a different sense; {نَارٌ} and {أُخْتٌ} are feminine with no {ة}. Custom decides, and the ending is only a clue.',
      ),
    },
    {
      label: T('The {ة} of intensity'),
      text: T(
        'Some feminine words carry a second {ة}, of intensity and not of gender: {حُمْرَةٌ} is the noun for redness, not a feminine form of {أَحْمَر}. The letter is the same and the work is different.',
      ),
    },
  ],
  examples: [
    { text: 'مَلِكٌ', gloss: T('king; masculine with no marker') },
    { text: 'مَلِكَةٌ', gloss: T('queen; with {ة}') },
    { text: 'شَجَرَةٌ', gloss: T('tree; regular feminine') },
    { text: 'حُرْمَى', gloss: T('sanctuary; feminine in {ى}') },
    { text: 'سَمَاءٌ', gloss: T('sky; feminine in {ء}') },
    { text: 'نَارٌ', gloss: T('fire; feminine with no {ة}') },
    { text: 'كِتَابٌ جَدِيدٌ', gloss: T('a new book; masculine agreement') },
    { text: 'كِتَابٌ جَدِيدَةٌ', gloss: T('a new book; feminine noun') },
    { text: 'كَتَبَتْ', gloss: T('she wrote; the verb agrees in gender') },
  ],
  tables: [
    {
      caption: T('The endings of the feminine'),
      head: [T('Ending'), T('Pattern'), T('Example'), T('Plural'), T('Plural example')],
      rows: [
        [T('closed {ة}'), 'مَفْعَلَة', 'مَلِكَةٌ', 'ـات', 'مَلَكَاتٌ'],
        [T('open {ى}'), 'مَفْعَلَى', 'حُرْمَى', 'ـى', 'حُرُمَى'],
        [T('open {ء}'), 'مَفْعَلَاء', 'سَمَاءٌ', 'ـوَات', 'سَمَوَاتٌ'],
        [T('no {ة}'), T('custom of the lexicon'), 'نَارٌ، أُمٌ', T('irregular'), 'نِرَان'],
      ],
    },
    {
      caption: T('What gender governs'),
      head: [T('Element'), T('Masculine'), T('Feminine')],
      rows: [
        [T('adjective'), 'جَدِيدٌ', 'جَدِيدَةٌ'],
        [T('verb'), 'كَتَبَ', 'كَتَبَتْ'],
        [T('pronoun'), 'هُوَ', 'هِيَ'],
        [T('possessive'), 'كِتَابُهُ', 'كِتَابُهَا'],
        [T('regular plural'), 'مُعَلِّمُونَ', 'مُعَلِّمَاتٌ'],
      ],
    },
    {
      caption: T('Where gender goes against expectation'),
      head: [T('Category'), T('Agrees as'), T('Example')],
      rows: [
        [T('non-human plural'), T('feminine'), 'أَعْمَالٌ كَثِيرَةٌ'],
        [T('collective'), T('feminine'), 'غَنَمٌ كَثِيرَةٌ'],
        [T('inanimate noun'), T('masculine in the verb'), 'كَانَ الْكَلِمَةُ'],
        [T('plant'), T('feminine by default'), 'شَجَرَةٌ بِلا ثَمَر'],
      ],
    },
  ],
};
