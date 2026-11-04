import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  section: T('Writing'),
  title: T('The alphabet that does not sound like it looks'),
  subtitle: T('В is not b, Р is not p, С is not c'),
  body: C(`
## Eleven letters that lie to a Latin reader

The Russian alphabet has 33 positions: 10 vowels, 21 consonants and two signs, {ъ} and {ь}. Eleven of them have a shape that makes Latin promise something else, and that is where a reader starts to get it wrong. {В} looks like b and sounds like the v in "vote". {Н} looks like h and sounds n. {Р} looks like p and sounds r. {С} looks like c and sounds s. {Х} is neither h nor k: it is the sound in "box". {Ц} carries two letters and two sounds, "ts", as at the end of "cats". {Ч} sounds like the ch in "church". {Ш} like the sh in "ship". {Щ} like the sh in "shoe". {Ж} like the s in "measure". {Й} like the y in "yes".

A reader who starts from the Greek alphabet makes exactly these mistakes, and the cure is not a rule: it is a week of reading. What helps is that the wrong reading is always the same one, and the same word repeats the mistake until the ear catches it.

## The letters with one sound

A third of the alphabet has a fixed sound: {а}, {б}, {в}, {г}, {д}, {з}, {и}, {к}, {л}, {м}, {н}, {о}, {п}, {р}, {с}, {т}, {у}, {ф}. Those are the ones you learn in the first line of any text. The rest come in pairs, and the pair is what matters, because the pair is where the error comes from.

{Е} changes with position: at the start of a word and after a soft consonant it sounds like "ye", and elsewhere like "e". Compare {Его} and {его}. {О} and {а} alternate, {И} and {ы} alternate too, and what decides is the position in the word, not the letter. {Ю} and {я} close the mouth on the consonant before them, which is why {няня} has a soft n where {тяга} keeps a hard t.

## The stress is not written

Russian does not mark the stress in writing, and that is the difference that slows down anyone coming from a language that does. {Бог} has one syllable and needs nothing. {слово} has two, and nobody wrote which one carries the stress. {земля} has two, and likewise. A Russian dictionary prints the stress for a practical reason: the spelling alone does not say, and a reader who does not know it pronounces wrong.

The letter {ё} is the exception that confirms the rule. Where it appears the stress is written: {всё}, {Твое}, {ещё}. Where it does not appear, the stress is still undecided.

## ъ and ь: the boundary and the soft consonant

{ъ} has no sound. It appears inside the word, where nothing is spoken: {подъём}, {съезд}, {отъезд}. {ь} does the opposite: it marks that the consonant before it is pronounced with the tongue high against the palate. {день}, {любовь}, {мать} sound different without it. One silences, the other changes the sound, and both survive in very few everyday words.

## The hook

John 1 opens with four words that use three of the lying letters: **В начале было Слово, и Слово было у Бога.** The {С} of Слово is s and not c, the {В} of было is v, and {Б} is a closed b. And the last verse of the chapter uses the letter that does not lie: **Единородный Сын, сущий в недре Отчем, Он явил.** Anyone who learned {ц}, {ч}, {ш} and {щ} by sound, and not by shape, can already pronounce half the chapter.`),
  vocab: [
    V('слово', 'слово', 'word'),
    V('Бог', 'бог', 'God'),
    V('свет', 'свет', 'light'),
    V('земля', 'земля', 'earth'),
    V('день', 'день', 'day'),
    V('жизнь', 'жизнь', 'life'),
    V('начало', 'начало', 'beginning'),
    V('человек', 'человек', 'human being'),
    V('царь', 'царь', 'king; Ц is "ts"'),
    V('чаша', 'чаша', 'cup; Ч is "ch"'),
    V('небо', 'небо', 'heaven; Н is n, not h'),
    V('В', 'в', 'the letter that looks like b and sounds v'),
    V('Н', 'н', 'the letter that looks like h and sounds n'),
    V('Р', 'р', 'the letter that looks like p and sounds r'),
    V('С', 'с', 'the letter that looks like c and sounds s'),
    V('Х', 'х', 'the letter that is neither h nor k'),
    V('ь', 'ь', 'palatalises the consonant before it'),
    V('ъ', 'ъ', 'marks a silent boundary'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{В} sounds v, {Н} sounds n, {Р} sounds r and {С} sounds s: four letters whose shape promises the Latin letter.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Ц} has two sounds, {Ч} sounds like ch, {Ш} like sh and {Щ} like a longer sh: the same pair can carry two pronunciations.',
      ),
    },
    {
      n: '3',
      text: T(
        '{Е} is "ye" at the start of a word and after a soft consonant, and "e" elsewhere: {Его} against {его}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{О} and {а} alternate, {И} and {ы} alternate; the same letter sounds two ways depending on its position in the word.',
      ),
    },
    {
      n: '5',
      text: T(
        '{Ю} and {я} close the mouth, and the consonant before them goes soft: {няня} has a soft n, {тяга} keeps a hard t.',
      ),
    },
    {
      n: '6',
      text: T(
        'The stress is not marked in writing; only {ё} marks it by itself, which is why {всё} and {ещё} escape the rule.',
      ),
    },
  ],
  notes: [
    {
      label: T('The letter that lies most'),
      text: T(
        '{С} causes the costliest mistake, because it is the first letter of {Слово} in the first verse of John 1: read it as c and the Word becomes a word with a K. And {Р} is second, because in {Царь} and {мир} the swap of r for p goes unnoticed until the name is said out loud.',
      ),
    },
    {
      label: T('Why the stress is not written'),
      text: T(
        'Russian spelling took shape before the stress became obligatory, and the standard never adopted it. The result is a text in which one spelling can hide different words, which is why a Russian dictionary prints the stress on almost every entry. {ё} survived precisely because it is the one case where the stress stayed in the spelling.',
      ),
    },
  ],
  examples: [
    {
      text: 'В начале было Слово',
      gloss: T('in the beginning was the Word (John 1:1); В is v, С is s'),
    },
    { text: 'и Слово было у Бога', gloss: T('and the Word was with God; С is s, Б is a closed b') },
    {
      text: 'Все чрез Него начало быть',
      gloss: T('all things came to be through him (John 1:3); В is v, Н is n'),
    },
    { text: 'И Слово стало плотию', gloss: T('and the Word became flesh (John 1:14)') },
    { text: 'Бог есть любовь', gloss: T('God is love (1 John 4:8)') },
    { text: 'царь', gloss: T('king; Ц is "ts" and the final pair is mute') },
    { text: 'чаша', gloss: T('cup; Ч is "ch"') },
    { text: 'жизнь', gloss: T('life; Ж is the s in "measure" and the final ь is mute') },
    { text: 'человек', gloss: T('human being; Ч stays "ch" before e') },
    { text: 'небо', gloss: T('heaven; Н is n, and б is the ordinary b') },
  ],
  tables: [
    {
      caption: T('Letters that do not sound like they look'),
      head: [T('Letter'), T('What the shape suggests'), T('What it sounds like')],
      rows: [
        [T('В'), T('b of "bot"'), T('v of "vote"')],
        [T('Н'), T('h of "hat"'), T('n of "no"')],
        [T('Р'), T('p of "pan"'), T('r of "red"')],
        [T('С'), T('c of "cat"'), T('s of "sun"')],
        [T('Х'), T('h or k'), T('the x in "box"')],
        [T('Ц'), T('two letters'), T('"ts", as in "cats"')],
        [T('Ч'), T('four letters'), T('ch of "church"')],
        [T('Ш'), T('three letters'), T('sh of "ship"')],
        [T('Щ'), T('four letters'), T('sh of "shoe"')],
        [T('Ж'), T('six letters'), T('s in "measure"')],
        [T('Й'), T('no Latin pair'), T('y in "yes"')],
      ],
    },
    {
      caption: T('The two signs that are not a syllable'),
      head: [T('Sign'), T('What it does'), T('Examples'), T('Gloss')],
      rows: [
        [
          T('ъ'),
          T('marks a silent boundary'),
          T('подъём, съезд, отъезд'),
          T('ascent, congress, departure'),
        ],
        [
          T('ь'),
          T('palatalises the consonant before it'),
          T('день, любовь, мать'),
          T('day, love, mother'),
        ],
      ],
    },
    {
      caption: T('The sound of {Е} by position'),
      head: [T('Context'), T('Example'), T('Sound'), T('Gloss')],
      rows: [
        [T('at the start of a word'), T('Его'), T('"ye"'), T('him, his')],
        [T('at the start of a word'), T('Евангелие'), T('"ye"'), T('gospel')],
        [T('after a hard consonant'), T('нет'), T('"e"'), T('there is not')],
        [T('after a soft consonant'), T('день'), T('"ye"'), T('day')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In Слово, what sound does С have?'),
    options: [T('c, as in cat'), T('s, as in sun'), T('x, as in box')],
    answer: 1,
    hint: T('It is the letter that misleads a Latin reader most: the shape is c, the sound is s.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('What sound does Р have?'),
      options: [T('p'), T('r'), T('v')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: сло_о'), answer: 'в' },
    {
      kind: 'match',
      prompt: T('Match the letter to the sound'),
      pairs: [
        { a: 'Щ', b: T('sh, as in "shoe"') },
        { a: 'Ж', b: T('s, as in "measure"') },
      ],
      answer: ['Щ', 'Ж'],
    },
  ],
};
