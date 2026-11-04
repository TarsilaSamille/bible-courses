import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  section: T('Verb'),
  title: T('The verb and its two forms: the ending and the -{ru}'),
  subtitle: T(
    'The Japanese verb inflects at the tip and has neither person, nor number, nor gender — which is why this lesson is short and the inflection is everything',
  ),
  body: C(`
## The verb inflects at the tip

The Japanese verb does not inflect by person or by number. "I eat" and "we eat" are the same word: **there is no plural, nothing agrees with the subject, nothing changes with "I" or "you"**. What changes is the tip of the word. That is why the inflection is always at the end and never at the beginning, and why it is written in kana even when the rest of the verb is kanji.

The verb {naru} "to be, to become" is not one word: it is {nar}, the root meaning "to become", plus the particle {u}. It is that {u} which inflects. The same holds throughout the language. Beginners get it wrong because they look for the inflection at the start of the word; it is in the last sound, and that one sound carries all the information.

## Two groups, one ending each

Japanese verbs split into two groups, and the difference between them is one letter at the end.

The **godan** verb ends in {u} and inflects the last syllable of its root. {taberu} "to eat" becomes *tabe-*, {hanasu} "to speak" becomes *hanashi-*, {shinu} "to die" becomes *shini-*, {kaku} "to write" becomes *kaki-*. Notice that the vowel before the {u} lengthens too: *hanasu* → *hanashimasu*, {shinu} → *shinimasu*. The verb swallows particles the way a river swallows a bank.

The **ichidan** verb ends in {ru} and inflects by dropping that {ru}. {miru} "to see" becomes *mi-*, {neru} "to sleep" becomes *ne-*, {iru} "to be" becomes *i-*. These have only a single {ru}, and it is the ending: that is why they are called "little ru" verbs. The trick that saves you from ever getting it wrong fits in your pocket: **drop the {ru} and see whether what is left makes sense in the present**. From {miru} you get *mi*, a whole verb, and that is ichidan. From {taberu} you get *tabe*, which means nothing on its own, and from {hanasu} you get *hana*, which means "flower" and so misleads you: that is godan. When the {ru} falls and a real word is left, it is ichidan; when a fragment is left, it is godan.

Two verbs escape all of this. Suru "to do" inflects all by itself: *shita*, *shite*, *shite wa ikenai*. Kuru "to come" replaces its whole root: {kuru} becomes *kita*, *kite*, and the negative becomes *kuranai*. These are the only two among the most common verbs in the language, which is why they are the two everybody memorises in the first week.

## Negation: the "not" comes after

Japanese does the opposite of Portuguese, and it needs saying twice because it is error number one. In Portuguese the "not" comes before: "não como". In Japanese the "not" comes after, stuck to the verb in the form {aru}: {naru} + {nai} = *naranai*, "it is not", "it does not become".

And here is the detail almost nobody expects: **the negative form changes the root of the verb**. {naru} becomes *naranai*, and the present-ending vowel does not survive: what is left is *naran-* + *ai*. The same happens to {kuru}, which becomes *kuranai*. That is why the {ru} of an ichidan verb and the {u} of a godan verb behave differently in the negative, even when the letter is the same.

There is one exception worth knowing because it appears constantly. The ending {masu} is the polite form, and *narimasu* is the formal "to be". Its negative is not *masenai*: it is *imasen*. The polite drops a whole register instead of becoming a formal negative. *Narimasen desu* is the courteous "it is not" of everyday speech, and the difference is real, not stylistic.

## Plain, polite, and honourable

The verb has two registers you will be choosing all the time. The plain form is the verb with nothing added: {naru}, {taberu}, *shita*. The polite form adds {masu}, and the verb *desu* enters as the sentence ending: *narimasu desu*. You use the polite form with strangers; extended narrative uses the plain form almost always. The Japanese Bible is a narrative text, and that is why its verbs appear in the plain form. Reading "in the beginning was the Word" as *genki desu* means reading the translation with the wrong grammar.

Above both sits the honorific, which is treating the other person as higher: *itashimasu*, "to do" with reverence. It does not appear in biblical writing, but it is the register of letters and of prayer.

What the Japanese verb does not have also counts: no gender, no person, no number, and no tense of its own. Real tense comes from particles, *ta*, *te*, *maeni*, *mashita*. A form like *suru*, "to do", says nothing about when or by whom.

## The verb of John 1:1

The first verse of John is the best example of all of this. "In the beginning was the Word" is *hazimeni kotoba ga atta*: the verb is {aru} "to exist, to be there", and the inflection is the past one, *atta*. It is the verb of existence, not of action: the Word does not do something, the Word is there. And it is the most important verb in the whole chapter, because the other verbs in John are actions of Jesus, while the verse that opens the book has no action in it at all, it has presence. Anyone who has learned to read {aru} at the start of the Bible has read the right verse.
`),
  vocab: [
    V('naru', 'なる', 'to be; to become (naru)'),
    V('nar', 'なる', 'root of "to become" (nar)'),
    V('taberu', '食べる', 'to eat (taberu)'),
    V('hanasu', '話す', 'to speak; to speak to (hanasu)'),
    V('shinu', '死ぬ', 'to die (shinu)'),
    V('kaku', '書く', 'to write (kaku)'),
    V('miru', '見る', 'to see; to look (miru)'),
    V('neru', '寝る', 'to sleep (neru)'),
    V('iru', 'いる', 'to be; to stay (iru)'),
    V('ikiru', '生きる', 'to live (ikiru)'),
    V('kuru', '来る', 'to come (kuru)'),
    V('suru', 'する', 'to do (suru)'),
    V('aru', 'ある', 'to be; to exist; to be there (aru)'),
    V('naranai', 'ならない', 'not to be; not to become (naranai)'),
    V('kuranai', '来ない', 'not to come (kuranai)'),
    V('nai', 'ない', 'negation: the ending that comes after the verb (nai)'),
    V('masu', 'ます', 'polite ending (masu)'),
    V('u', 'う', 'the /u ending of a godan verb (u)'),
    V('ru', 'る', 'the /ru ending of an ichidan verb (ru)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The verb inflects at the tip: {naru} is {nar} plus the particle {u}, and it is that {u} which inflects.',
      ),
    },
    {
      n: '2',
      text: T(
        'Godan ends in {u} and inflects the last syllable of the root ({taberu} becomes *tabe-*, {hanasu} becomes *hanashi-*); ichidan ends in {ru} and inflects by dropping that {ru} ({miru} becomes *mi-*).',
      ),
    },
    {
      n: '3',
      text: T(
        'Pocket trick: drop the {ru}. If what is left is a real word, it is ichidan; if a fragment is left, it is godan.',
      ),
    },
    {
      n: '4',
      text: T(
        'Negation comes after the verb, with {aru}: {naru} becomes *naranai*, {kuru} becomes *kuranai*. The polite ending {masu} has its own negative, *imasen*.',
      ),
    },
    {
      n: '5',
      text: T(
        'The verb has no gender, no person, no number and no tense of its own: tense comes from the particles.',
      ),
    },
  ],
  notes: [
    {
      label: T('The -ru trick'),
      text: T(
        'It is worth more than any conjugation table. {miru} → *mi*, a verb on its own: ichidan. {taberu} → *tabe*, which is nothing: godan. The only risk is a word that happens to exist, like *hana*, "flower", which comes out of {hanasu}; there the real inflection settles it.',
      ),
    },
    {
      label: T('Why this lesson is short'),
      text: T(
        'Because there is no person or number to mark, a single line of inflection settles the whole verb. The Japanese inflection table has very few forms, and what makes the text vary is the particle that follows — the subject of lesson 8.',
      ),
    },
  ],
  examples: [
    {
      text: '言葉があった',
      gloss: T('hazimeni kotoba ga atta — in the beginning the Word was there (the Word *was*)'),
    },
    {
      text: 'パンを食べます',
      gloss: T('pan o tabemasu — I eat bread (plain root plus the polite {masu}, ichidan)'),
    },
    {
      text: '紙を書きました',
      gloss: T('kami o kakimashita — I wrote on paper (plain, past, godan)'),
    },
    {
      text: '先生が来ません',
      gloss: T('sensei ga kimasen — the teacher does not come ({kuru} plus the negative *imasen*)'),
    },
    { text: 'お書きになりました', gloss: T('okakini narimashita — you wrote it (honorific)') },
  ],
  tables: [
    {
      caption: T('The two endings, side by side'),
      head: [T('Group'), T('Ends in'), T('How it inflects'), T('Example')],
      rows: [
        [T('godan'), T('{u}'), T('the last syllable of the root changes'), T('{taberu} → *tabe-*')],
        [T('godan'), T('{u}'), T('the vowel lengthens too'), T('{hanasu} → *hanashi-*')],
        [T('godan'), T('{u}'), T('the vowel lengthens too'), T('{kaku} → *kaki-*')],
        [T('ichidan'), T('{ru}'), T('drop the {ru} and you are done'), T('{miru} → *mi-*')],
        [T('ichidan'), T('{ru}'), T('drop the {ru} and you are done'), T('{neru} → *ne-*')],
      ],
    },
    {
      caption: T('The ones that obey no rule'),
      head: [T('Verb'), T('Past'), T('Negative'), T('What happens')],
      rows: [
        [
          T('{suru}'),
          T('*shita*'),
          T('*shinai*'),
          T('inflects all by itself: *shite*, *shite wa ikenai*'),
        ],
        [T('{kuru}'), T('*kita*'), T('*kuranai*'), T('replaces its whole root, negative included')],
        [
          T('{ikiru}'),
          T('*ikita*'),
          T('*ikinai*'),
          T('ends in {ru} but inflects as godan: *iki-*'),
        ],
        [
          T('{aru}'),
          T('*atta*'),
          T('*nai*'),
          T('irregular: the {u} turns into another sound in the past'),
        ],
      ],
    },
    {
      caption: T('Three registers, three ways to say the same thing'),
      head: [T('Register'), T('Verb'), T('Sentence'), T('Where it is used')],
      rows: [
        [T('plain'), T('{naru}'), T('*naru desu*'), T('running text, such as biblical narrative')],
        [
          T('polite'),
          T('*narimasu*'),
          T('*narimasu desu*'),
          T('ordinary speech; negative in *narimasen*'),
        ],
        [
          T('honorific'),
          T('*itashimasu*'),
          T('*itashimasu*'),
          T('letters, prayers, treating the other with respect'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('The verb {miru} "to see" is ichidan: drop the {ru}. Which root is left?'),
    options: [T('mi'), T('mir'), T('m'), T('miru')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete the negative of {naru} "to become", which changes its root and adds {aru}: nara____',
      ),
      answer: 'nai',
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its group or irregular'),
      pairs: [
        { a: T('{miru}'), b: T('ichidan: drops the {ru}') },
        { a: T('{taberu}'), b: T('godan: last syllable of the root changes') },
        { a: T('{kuru}'), b: T('irregular: the past is *kita*') },
        { a: T('{ikiru}'), b: T('ends in {ru} but is godan') },
        { a: T('{aru}'), b: T('verb of existence: "was", "is there"') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('In "in the beginning WAS the Word" (John 1:1), which verb does the verse use?'),
      options: [T('{kuru}'), T('{suru}'), T('{aru}'), T('{miru}')],
      answer: 2,
    },
  ],
};
