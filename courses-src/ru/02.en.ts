import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('Writing'),
  title: T('The 33 letters and what six of them do'),
  subtitle: T('ъ ь э ю я ё: signs and vowels Latin does not have'),
  body: C(`
## The six letters Latin does not have

The Russian alphabet has 33 positions: 10 vowels, 21 consonants and two signs, ъ and ь. The six letters in this title are not decorative extras. Each one solves a pronunciation problem that Latin solved another way, and a reader who takes them one by one, as letters with a name and a sound, stops tripping over the first five lines.

Э, ю and я are vowels. What sets them apart from е, и and у is not timbre but lips: before them the mouth closes. Ъ and ь have no sound of their own. Ь is a palatalisation sign, and it says the consonant before it is pronounced with the tongue against the palate. Ъ marks a pronunciation boundary inside the word, at a point where nothing is pronounced today. The two have survived in very few everyday words, and those are the ones worth reading.

## ъ: the boundary that is left over

In подъём, съезд, въезд, отъезд and объект the ъ sits in the middle of the word, with no vowel beside it and no visible phonetic reason. It marks the edge of a prefix. The old rule was easy to state and hard to apply, because it depended on what came before: ъ was written after a short vowel and before a consonant. Over time the short vowel dropped out, the word grew to three or four syllables instead of two, and the sign stayed behind marking an empty place.

Anyone leafing through a nineteenth-century text finds ъ everywhere, because it was the rule. Anyone leafing through a text of today finds it in подъём and does not know what to do with it. The word keeps the scar of the rule that produced it.

## ь: the consonant that goes soft

Ь does the opposite work: it does not mark a boundary, it marks a palatalised consonant that would be hard without it. день without the ь would be ден, and ден is pronounced with the tongue low. The same goes for любовь, жизнь, мать and письмо. Take the ь away and the word is still readable, but the sound changes, and that is exactly the reading error.

The cleanest test is a pair that exists only because of the letter. **мел is chalk, and мель is a grindstone.** One letter, two nouns, and no clue in the spelling beyond the ь. That is what it means to say the letter is load, not decoration.

## э, ю, я: the vowels that close the mouth

The rule fits on one line: **every consonant before э, ю or я is soft.** There is no exception. Э gives a closed [e]; ю and я give [ju] and [ja], also closed. That is why a Latin alphabet does not help: in Latin, swapping an i for an e does not change the consonant before it, and in Russian choosing between е, и, у, ю and я decides the sound of the consonant that precedes. Compare нога, where the г is hard, with тяга, where the т stays hard even before я, and няня, where the н is soft.

The biblical hook is short and it is Psalm 118:105. **Слово Твое — светильник ноге моей и свет стезе моей.** Two words from the same root, свет and светильник, and what separates them is not a new letter: it is the stress, which fell on the second syllable in светильник and stayed on the first in свет. The й of Твое is a different matter. Твое has two syllables and ё, which marks the stress; твой has one syllable and й, which marks the short i. If the ё were left out, as it often is, the verse would still be readable and the ambiguity would show up earlier: Твое and твое sound identical, and only one of the two spellings belongs to this psalm.`),
  vocab: [
    V('ъ', 'ъ', 'pronunciation boundary sign, mute today'),
    V('ь', 'ь', 'palatalisation sign, no sound of its own'),
    V('э', 'э', 'closed-mouth vowel [e]'),
    V('ю', 'ю', 'closed-mouth vowel [ju]'),
    V('я', 'я', 'closed-mouth vowel [ja]'),
    V('ё', 'ё', 'stressed vowel; the only letter that always marks the stress'),
    V('подъём', 'подъём', 'ascent, lift'),
    V('съезд', 'съезд', 'congress, meeting'),
    V('отъезд', 'отъезд', 'departure'),
    V('день', 'день', 'day'),
    V('любовь', 'любовь', 'love'),
    V('мать', 'мать', 'mother'),
    V('мел', 'мел', 'chalk'),
    V('мель', 'мель', 'grindstone'),
    V('свет', 'свет', 'light'),
    V('Твое', 'твой', 'your (neuter)'),
    V('светильник', 'светильник', 'lamp'),
  ],
  rules: [
    { n: '1', text: T('The alphabet has 33 positions: 10 vowels, 21 consonants, {ъ} and {ь}.') },
    { n: '2', text: T('Every consonant before {э}, {ю} or {я} is soft. There is no exception.') },
    {
      n: '3',
      text: T(
        '{Ъ} marks a boundary inside the word, inherited from a rule that depended on the short vowel before it: {подъём}, {съезд}, {отъезд}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Ь} palatalises the consonant before it: {день}, {любовь}, {мать}. Without it the word changes sound.',
      ),
    },
    { n: '5', text: T('{Ё} always marks the stress. Where it is written, the stress is settled.') },
  ],
  notes: [
    {
      label: T('Ъ is a scar'),
      text: T(
        'Ъ has no sound and today no function. It appears in подъём, съезд, въезд, отъезд, объект. The old rule was more honest than the list: ъ was written after a short vowel and before a consonant. When the short vowel dropped out of the word, the sign stayed. Reading an old text you see the rule; reading a text of today you see the scar.',
      ),
    },
    {
      label: T('Ё is the visible stress'),
      text: T(
        'Ё is the only Russian letter that always carries the stress. Твое and твой have the same base: the first has two syllables and ё, the second has one syllable and й. If the ё is left out, the two sound alike and the reader loses the information of which syllable is stressed.',
      ),
    },
  ],
  examples: [
    { text: 'подъём', gloss: T('ascent; the ъ marks the edge of the prefix') },
    { text: 'съезд', gloss: T('congress; ъ inside the word, with no sound') },
    { text: 'отъезд', gloss: T('departure, the opposite of приезд') },
    { text: 'день', gloss: T('day; the ь palatalises the n') },
    { text: 'любовь', gloss: T('love; the ь palatalises the v') },
    { text: 'мел', gloss: T('chalk; hard consonant') },
    { text: 'мель', gloss: T('grindstone; the same consonant, now soft') },
    { text: 'тяга', gloss: T('pull, longing; the t stays hard before я') },
    { text: 'всё', gloss: T('everything; ё closes the o and marks the stress') },
    {
      text: 'Слово Твое — светильник ноге моей',
      gloss: T('your word is a lamp for my foot (Ps 118:105)'),
    },
  ],
  tables: [
    {
      caption: T('The 33 positions of the Russian alphabet'),
      head: [T('Group'), T('Letters'), T('Count')],
      rows: [
        [T('vowels'), T('а е ё и о у ю я ы э'), T('10')],
        [T('consonants'), T('б в г д ж з й к л м н п р с т ф х ц ч ш щ'), T('21')],
        [T('signs'), T('ъ ь'), T('2')],
      ],
    },
    {
      caption: T('What ъ and ь do'),
      head: [T('Letter'), T('Function'), T('Example'), T('Gloss')],
      rows: [
        [T('ъ'), T('pronunciation boundary inside the word'), T('подъём'), T('ascent')],
        [T('ъ'), T('same function, another prefix'), T('отъезд'), T('departure')],
        [T('ь'), T('palatalises the preceding consonant'), T('день'), T('day')],
        [T('ь'), T('same function'), T('любовь'), T('love')],
        [
          T('ь'),
          T('a real pair that only the ь distinguishes'),
          T('мел / мель'),
          T('chalk / grindstone'),
        ],
      ],
    },
    {
      caption: T('Closed mouth and the preceding consonant'),
      head: [T('Vowel'), T('Sound'), T('Consonant before it'), T('Example')],
      rows: [
        [T('э'), T('closed [e]'), T('always soft'), T('это, эта')],
        [T('ю'), T('[ju]'), T('always soft'), T('любовь')],
        [T('я'), T('[ja]'), T('always soft'), T('няня')],
        [T('я'), T('[ja]'), T('always soft, even after a hard t'), T('тяга')],
        [T('е'), T('open [e]'), T('hard or soft'), T('свете has hard t, поле soft l')],
        [T('о'), T('open [o]'), T('hard or soft'), T('нога has hard г')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In подъём, what does the ъ do?'),
    options: [
      T('It palatalises the consonant before it'),
      T('It marks a pronunciation boundary inside the word'),
      T('It marks the stress'),
    ],
    answer: 1,
    hint: T(
      'Ъ does not palatalise and does not mark stress. What it marks is the edge of a prefix that time emptied out.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: съ___зд (congress)'), answer: 'е' },
    { kind: 'fill', prompt: T('Complete: день — the palatalising letter is ___'), answer: 'ь' },
    {
      kind: 'choose',
      prompt: T('Which word has a hard consonant before я?'),
      options: [T('тяга'), T('няня'), T('любовь')],
      answer: 0,
    },
  ],
};
