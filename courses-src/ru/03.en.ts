import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('Writing'),
  title: T('The syllable and vowel reduction'),
  subtitle: T('через is written with two vowels and spoken with neither of them'),
  body: C(`
## Every syllable has a nucleus

A syllable has exactly one vowel, and that vowel is the nucleus. The consonants cling to it, before or after, and do not form a nucleus on their own. That holds for Russian as it holds for Latin, and it is what lets you count syllables in a text without speaking the language.

In через the spelling shows two vowels, че and рез, and there are two syllables: че-рез. In Слово Твое there are four: Сло-во Тво-е. Syllables are always counted on the spelling, which is why reading aloud begins with a count the text has already done.

The detail that changes everything is that the vowel of the nucleus is not always the same. In через the first vowel is a full [e], and that is only possible because the stress falls on the second syllable.

## The vowel outside the stress

Russian reduces the vowels that do not take the stress. It is not an accident of diction nor an effect of dialect: it is the system, and the system is categorical. A stressed vowel keeps the sound the letter announces; an unstressed vowel loses its identity and becomes the most generic sound the vocal apparatus allows in that position.

The practical consequence is large. Compare слово, where the o is stressed and sounds [o], with слове, where the same o is unstressed and sounds short and rounded. Same root. What changes is the stress, and what the stress does is choose between two vowels that the spelling distinguishes and the speech barely does.

## Three sounds that stand for five vowels

Reduction is easier to describe by counting. The ten written vowels collapse, outside the stress, into three main sounds: the sound of а and о is one, the sound of и and ы is one, the sound of е, я and ю is one. Outside the stress, swapping а for о in a word whose stressed syllable comes later does not change what is heard.

**Ё is the exception that confirms the rule.** It never reduces, because it is always stressed. Every word with ё has at least one syllable spoken with the full vowel, and that is why the phonetic transcription of Russian does not record the letter: it is redundant for a reader and indispensable for a speaker.

A one-syllable word reduces nothing, because there is nowhere to reduce. That is why свет is spoken with the full е, and the same full vowel appears in пот and in рот, where the consonant changes and the vowel does not.

The hook is John 1:3, and the verse works precisely because of через. **Все чрез Него начало быть, и без Него ничто не начало быть, что начало быть.** The word через is written with two vowels that could take the stress and is spoken with neither of them. Anyone who pronounces che-rez with both vowels open is speaking a language nobody speaks.

## What reduction does to a reader

For a translator reduction matters little: it is sound, not meaning. For someone reading aloud, or dictating, it is everything. A word written with two vowels may be spoken with two muted vowels, and the writer has no way of knowing which.

Unless the word carries a written stress. A marked accent is the only thing in Russian spelling that says which of the vowels is real. That is why Russian dictionaries print it, and why the accent is not a detail.`),
  vocab: [
    V('слог', 'слог', 'syllable'),
    V('ударный слог', 'ударный слог', 'stressed syllable'),
    V('ударение', 'ударение', 'stress, accent'),
    V('редукция', 'редукция', 'vowel reduction'),
    V('гласная', 'гласная', 'vowel'),
    V('согласная', 'согласная', 'consonant'),
    V('через', 'через', 'through; two reduced vowels'),
    V('начало', 'начало', 'beginning'),
    V('быть', 'быть', 'to be'),
    V('слово', 'слово', 'word'),
    V('Твое', 'твой', 'your'),
    V('свет', 'свет', 'light'),
    V('слове', 'слово', 'about the word (prepositional)'),
    V('ещё', 'ещё', 'still; the ё never reduces'),
    V('вода', 'вода', 'water'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Every syllable has exactly one vowel nucleus. Consonants do not form a nucleus on their own.',
      ),
    },
    {
      n: '2',
      text: T(
        'Reduction only happens in unstressed vowels. A stressed vowel keeps the sound the letter announces.',
      ),
    },
    {
      n: '3',
      text: T(
        'Outside the stress, {а} and {о} fall into the same sound, {и} and {ы} into the same, {е}, {я} and {ю} into the same.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Ё} never reduces, because it is always stressed. That is why phonetic transcriptions do not record it.',
      ),
    },
    { n: '5', text: T('A one-syllable word reduces nothing.') },
  ],
  notes: [
    {
      label: T('The written word lies'),
      text: T(
        'через is written with two vowels and has neither of them in speech. The spelling records the historical root; speech records what the mouth did with it. Neither piece of information is false, and neither is enough on its own: a reader needs the text, a speaker needs the ear.',
      ),
    },
    {
      label: T('Three sounds, ten letters'),
      text: T(
        'А е ё и о у ю я ы э are ten written vowels. Outside the stress three main sounds are left: the rounded one of а and о, the central one of и and ы, the front one of е, я and ю. Swapping а for о in a word stressed on the second syllable changes nothing for the listener and everything for the reader.',
      ),
    },
  ],
  examples: [
    { text: 'через', gloss: T('through; written che-rez, two reduced vowels') },
    { text: 'Все чрез Него начало быть', gloss: T('All things came to be through him (John 1:3)') },
    { text: 'слово', gloss: T('word, with the o stressed') },
    { text: 'о слове', gloss: T('about the word, with the same o reduced') },
    { text: 'свет', gloss: T('light; one syllable, no reduction') },
    { text: 'пот', gloss: T('sap; one syllable, no reduction') },
    { text: 'ещё', gloss: T('still; the ё is stressed') },
    { text: 'Твое', gloss: T('your; the й does the work of the vowel and the ё marks the stress') },
    { text: 'вода', gloss: T('water; the final а is stressed') },
  ],
  tables: [
    {
      caption: T('The written vowel and what it is worth'),
      head: [T('Written vowel'), T('Stressed'), T('Unstressed')],
      rows: [
        [T('а'), T('[a]'), T('[ɐ]')],
        [T('о'), T('[o]'), T('[ɐ]')],
        [T('и'), T('[ʲi]'), T('[ɨ]')],
        [T('ы'), T('[ɨ]'), T('[ɨ]')],
        [T('е'), T('[ʲe]'), T('[ʲɪ]')],
        [T('я'), T('[ja]'), T('[ʲɪ]')],
        [T('ю'), T('[ju]'), T('[u]')],
        [T('у'), T('[u]'), T('[u]')],
        [T('ё'), T('[o]'), T('never, it is always stressed')],
        [T('э'), T('[e]'), T('[ɛ]')],
      ],
    },
    {
      caption: T('Syllables on the page, sounds in the mouth'),
      head: [T('Word'), T('Written'), T('Where the stress is'), T('What speech does')],
      rows: [
        [T('через'), T('че-рез'), T('second syllable'), T('both vowels fall')],
        [T('слово'), T('сло-во'), T('first syllable'), T('the final о becomes [ɐ]')],
        [
          T('о слове'),
          T('о сло-ве'),
          T('the word has no stress of its own'),
          T('the о stays short'),
        ],
        [T('свет'), T('one syllable'), T('none'), T('nothing reduces')],
        [T('ещё'), T('е-щё'), T('second syllable'), T('the initial е disappears into the ё')],
        [T('Твое'), T('Тво-е'), T('second syllable'), T('[tvojə], the final е is a schwa')],
      ],
    },
    {
      caption: T('Where reduction shows up'),
      head: [T('Situation'), T('What is heard'), T('Examples')],
      rows: [
        [T('one-syllable word'), T('no reduction'), T('свет, пот, рот')],
        [
          T('stress on the first syllable'),
          T('the later vowels fall to [ɐ] or [ɪ]'),
          T('слово, окно'),
        ],
        [
          T('stress on the second syllable'),
          T('the first vowel falls to [ɐ] or [ɪ]'),
          T('через, светильник'),
        ],
        [T('a ё is present'), T('that vowel never falls'), T('Твое, ещё, всё')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In через, which vowel keeps the full sound?'),
    options: [T('The first'), T('The second'), T('Neither: both are outside the stress')],
    answer: 1,
    hint: T(
      'The stress of через falls on the second syllable. The first vowel is unstressed and reduces.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: в ___ было Слово (John 1:1)'), answer: 'начале' },
    {
      kind: 'choose',
      prompt: T('Which vowel never reduces?'),
      options: [T('о'), T('е'), T('ё')],
      answer: 2,
    },
    { kind: 'fill', prompt: T('Complete: ещё — the stressed letter is ___'), answer: 'ё' },
  ],
};
