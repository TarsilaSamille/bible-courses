import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('The Latin alphabet and pronunciation'),
  subtitle: T('v = the «u» of {vicus}, c and g, silent h — how it sounds'),
  section: T('The alphabet and pronunciation'),
  body: C(`## The face of the alphabet

Latin uses the 23 letters of the Latin alphabet, with no {j}, no consonantal {w}, and no consonantal {u} in writing. There are no accent marks: what distinguishes {a} from {ă}, or {e} from {ĕ}, is only syllable position. For a beginner it is enough to know that short and long vowels change the *weight* of a syllable:

- {ă} followed by a single consonant: {ă-maf};
- {ā} followed by two or more: {ā-mā-ter};
- {ē} (long) is almost always closed: {rēg-num}; {ĕ} (short) is open: {rĕ-gĕ-na};
- {ŏ} at a word boundary, {ō} inside a word: {ĕ-gŏ}, {clŏ-rum}.

Portuguese and Spanish speakers get six things wrong:

{c} = {k} before {a, o, u}; = {g} before {e, i, y}: {Cĭ-vĭtas}, Cēsar;
{g} = {g} before {a, o, u}; = {y} before {e, i, y}: {genus}, {Gĕnĕ-sis};
{h} is always silent: {homo} is read «omo», habet «abet»;
{v} sounds like the {u} in English *but*: {vĕ-nĕ-rĕ}, {vŏ-cābŭlum};
{i} and {u} are consonants before a vowel: {iam}, {uă-tĕr};
{x} equals {ks}: {dix-it}, axis.

## Vowels and semivowels

The five vowels {a, e, i, o, u} form diphthongs and hiatuses. {ae} and {oe} are not diphthongs: they are alternative spellings for long {a} and long {e}, and {ei} is never a diphthong — it is {e̱i}, short e plus i. In {deus} the {e} is short: that is the most famous feature of Latin and the proof that Greek *theos* did not survive intact.

## What to read aloud

Say without hesitation:

{Deus} — viam — {Deus verbum} — {Deus verbum caro} — {In principio erat Verbum}.

Every word is already tagged: whatever appears in the text in clickable form lets you check the gloss by hovering.`),
  vocab: [
    V('Deus', 'Deus', 'God'),
    V('Dominus', 'Dominus', 'Lord'),
    V('verbum', 'verbum', 'word'),
    V('homo', 'homo', 'man (silent h)'),
    V('via', 'via', 'way, road'),
    V('lux', 'lux', 'light'),
    V('terra', 'terra', 'earth, land'),
    V('aqua', 'aqua', 'water'),
    V('mater', 'mater', 'mother'),
    V('pater', 'pater', 'father'),
    V('filius', 'filius', 'son'),
    V('vita', 'vita', 'life'),
    V('mundus', 'mundus', 'world'),
    V('cor', 'cor', 'heart'),
    V('genus', 'genus', 'kind, race (g = y)'),
    V('vicus', 'vicus', 'village (v = u)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How does the {v} of {vicus} sound?'),
    options: [
      T('Like the «v» of «viva» in Portuguese'),
      T('Like the «u» of «você»'),
      T('Silent'),
      T('Like the «b» of «bom»'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {genus} «kind, race», the initial {g} sounds like…'),
      options: [
        T('A hard {g}, as in {gallus}'),
        T('A semivowel, like the «y» of Spanish «gente»'),
        T('A hard {k}'),
        T('A Brazilian {h}'),
      ],
      answer: 1,
      hint: T('Rule §1: {g} before {e, i}.'),
    },
    {
      kind: 'fill',
      prompt: T('Write in Latin letters the sound «omo» of {homo}: h_ _ _o'),
      answer: 'omo',
      hint: T('Latin {h} is never sounded.'),
    },
    {
      kind: 'match',
      prompt: T('Match the word to its value'),
      pairs: [
        { a: T('Civitas'), b: T('«ki» — c = k before i') },
        { a: T('Dixit'), b: T('«dicsit» — x = ks') },
        { a: T('Habet'), b: T('«abet» — silent h') },
        { a: T('Genus'), b: T('«yenus» — g = y before e') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    { n: '1', text: T('{c} and {g} shift value before {e, i, y}: {genus} sounds «yenus».') },
    { n: '2', text: T('{h} is never sounded and {v} always sounds like {u}: habet, {vicus}.') },
    { n: '3', text: T('A short vowel is followed by one consonant; a long vowel by two or more.') },
    {
      n: '4',
      text: T('{ae} and {oe} are long vowels, never diphthongs; {ei} is short {e} plus {i}.'),
    },
    {
      n: '5',
      text: T(
        '{i} and {u} become consonants [j] and [w] before a vowel: {iam} «already», {uăter}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Caution:'),
      text: T(
        'Latin orthography does not use capitals to mark proper names. The Vulgate capitalises {Dominus} and {Deus} because it is a book — not because the word demands it. Follow the convention where it is convenient, but do not think holiness attaches to a letter.',
      ),
    },
    {
      label: T('Origin:'),
      text: T(
        '{Deus} comes from Greek θεός and its pronunciation had already been shortened, which is why the {e} is short. Words of Greek origin keep a peculiarity: Cēsar, {poēta}, {nēmō}.',
      ),
    },
  ],
  examples: [
    { text: 'Deus', gloss: T('God.') },
    { text: 'Dominus', gloss: T('The Lord.') },
    { text: 'verbum', gloss: T('word (neuter, 2nd decl.)') },
    { text: 'homo', gloss: T('man — «omo»') },
    { text: 'via', gloss: T('way, road') },
    { text: 'lux', gloss: T('light') },
    { text: 'terra', gloss: T('earth, land') },
    { text: 'mater', gloss: T('mother — «mater»') },
    { text: 'filius', gloss: T('son') },
    { text: 'cor', gloss: T('heart') },
  ],
  tables: [
    {
      caption: T('Table 1 — Deceptively valued consonants'),
      head: [T('Letter'), T('Value'), T('Example')],
      rows: [
        ['c', T('k before a, o, u; «g» before e, i, y'), 'Civĭtas, Cēsar'],
        ['g', T('«g» before a, o, u; «y» before e, i, y'), 'Galla, genus'],
        ['h', T('silent'), 'homo, habet'],
        ['v', T('sounds like «u» (labial)'), 'vicus, vōx'],
        ['x', T('equals «ks»'), 'dixit, axis'],
      ],
    },
    {
      caption: T('Table 2 — Vowels: short and long'),
      head: [T('Vowel'), T('Short'), T('Long')],
      rows: [
        ['a', 'ăgrĭ', 'māter'],
        ['e', 'rĕgĕna', 'rēgnum'],
        ['i', 'fĭlĭus', 'vīnum'],
        ['o', 'mŏdŭs', 'nōvus'],
        ['u', 'pŭer', 'cūr'],
      ],
    },
  ],
};
