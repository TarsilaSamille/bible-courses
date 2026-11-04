import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('Writing'),
  title: T('Pinyin: reading without speaking'),
  subtitle: T('The romanisation that makes the characters typeable'),
  body: C(`## What pinyin is for

Pinyin is the official romanisation of Chinese, approved in 1958. It is not a language: it is the map between the key you type and the character you see. Whoever is on a phone keyboard needs it; whoever reads characters does not.

Two properties make it useful to a learner. First, it is **phonetic and regular**: each letter always stands for the same sound, and initials and finals come from a closed list. With one caveat Chinese courses leave out: each letter has one sound, but the same sound can have two letters. {sh} and {x} sound nearly alike, so do {n} and {l}, and context alone tells them apart. The rule runs one way only. Second, **the same character may have several readings**, but usually only one. {行} is {xíng}, "to walk", or {háng}, "row", and context decides.

## Initials and finals

The initials, the sound before, number twenty-one: {b p m f d t n l g k h j q x zh ch sh r z c s}. Four of them are written with two letters, {zh}, {ch}, {sh} and {r}, which is why the count confuses people: twenty-one sounds, but seventeen symbols if each pair counts as one. {r} is not the "r" of other languages; it is retroflex, spoken with the tip of the tongue curled back, and it is why {zh ch sh r} exist as a group. The finals, the sound after, are more numerous, and that is where Mandarin forces you to think: {i}, {u} and {ü} are written just so after {j q x y}, and {yu} stands where {ü} would.

The {ü} is the sound of "you" in Mandarin. After {j q x y} it is written {u}: {jū} stands for {jü}, {yuè} for {yüe}. Outside that group, Mandarin has no such sound.

## What pinyin solves when reading the Bible

Pinyin makes Chinese searchable by sound: someone who has heard {Yēsū} in a sermon can type {耶稣} on the keyboard. It also lets you check the reading of an isolated proper noun, which context does not always reveal.`),
  vocab: [
    V('xíng', '行', 'to walk (xíng); row (háng)'),
    V('和合', '和合', 'union; to combine (héhé)'),
    V('字', '字', 'character (zì)'),
    V('拼音', '拼音', 'romanisation (pīnyīn)'),
    V('声母', '声母', 'initial sound (shēngmǔ)'),
    V('韵母', '韵母', 'final sound (yùnmǔ)'),
    V('耶稣', '耶稣', 'Jesus (Yēsū)'),
    V('北', '北', 'north (běi)'),
    V('白', '白', 'white; to say (bái)'),
  ],
  rules: [
    { n: '1', text: T('Pinyin is phonetic: each letter always has the same sound.') },
    {
      n: '2',
      text: T('There are seventeen initials; {zh}, {ch}, {sh} and {r} are the special cases.'),
    },
    { n: '3', text: T('After {j q x y}, {ü} is written {u}: {jū} = {jü}, {yuè} = {yüe}.') },
    { n: '4', text: T('One character may have more than one reading; context decides.') },
  ],
  notes: [
    {
      label: T('Pinyin is not dictionary pronunciation'),
      text: T(
        'Pinyin writes the sound but does not mark tone. So {ma} can be {mā} (mother), {má} (horse) or {mǎ} (a game piece) — lesson 3 covers this.',
      ),
    },
  ],
  examples: [
    { text: '北', gloss: T('běi — north') },
    { text: '白', gloss: T('bái — white') },
    { text: '行', gloss: T('xíng — to walk; háng — row') },
  ],
  tables: [
    {
      caption: T('Pinyin initials'),
      head: [T('Group'), T('Letters'), T('Sound')],
      rows: [
        [T('Bilabial'), T('{b} {p} {m}'), T('lips')],
        [T('Dental'), T('{d} {t} {n} {l}'), T('tongue at the teeth')],
        [T('Velar'), T('{g} {k} {h}'), T('back of the mouth')],
        [T('Palatal'), T('{j} {q} {x}'), T('palate')],
        [T('Retroflex'), T('{zh} {ch} {sh} {r}'), T('curled tongue tip')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('After {j}, how is {ü} written?'),
    options: [T('{v}'), T('{u}'), T('{ü}'), T('{yu}')],
    answer: 1,
    hint: T('The same holds after {j q x y}. After other letters the {ü} stays.'),
  },
  exercises: [
    { kind: 'fill', prompt: T('Write the character for north, read {běi}: ____'), answer: '北' },
    {
      kind: 'match',
      prompt: T('Match the initial to its group'),
      pairs: [
        { a: T('{b} {p} {m}'), b: T('bilabial (lips)') },
        { a: T('{g} {k} {h}'), b: T('velar (back of mouth)') },
        { a: T('{zh} {ch} {sh}'), b: T('retroflex') },
        { a: T('{j} {q} {x}'), b: T('palatal (palate)') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
