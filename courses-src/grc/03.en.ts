import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('2nd declension'),
  subtitle: T('λόγος and ἔργον: masculines in -ος, neuters in -ον'),
  section: T('The noun'),
  body: C(`## The declension of -ος nouns

The second declension holds most masculine nouns of the New Testament: {λόγος} "word", {ἄνθρωπος} "human being", {θεός} "God", {κόσμος} "world", {οὐρανός} "heaven", {ἀπόστολος} "apostle". The nominative singular ends in {-ς} and the stem ends in omicron — hence all endings begin with {ο}: genitive {-ου}, dative {-ῳ}, accusative {-ον}.

In the plural, the masculine nominative ends in {-οι} ({λόγοι}), a form you will recognize from afar after some reading. The genitive plural {-ων} and dative plural {-οις} match the 1st declension with the thematic vowel {ο}. Compare {τῶν λόγων} with {τῶν ἀληθειῶν} from the previous chapter: the structure is identical, only the vowel changes.

## Neuters in -ον

All the commonest neuters belong to the 2nd declension: {ἔργον} "deed", {τέκνον} "child", {δῶρον} "gift", {ἱερόν} "temple", {πρόβατον} "sheep". The golden rule of neuters applies in full here: nominative identical to accusative in both numbers, and plural in {-α} — {τὰ ἔργα} "the deeds".

In practice this rule resolves ambiguities: meeting {τὸ τέκνον}, you know it may be subject or object — and the verb will tell which. While {τὰ τέκνα} can only be nominative or accusative plural, never genitive or dative. The final {-α} is the neuter signature.

## Word order

Greek does not depend on order to mark subject and object — the cases do that work. So order is freer than in English and carries emphasis: the emphatic element usually comes first. In {τὸν λόγον βλέπω}, the object precedes the verb because the focus lies on it ("it is THE WORD that I see").

There is, however, a stable tendency: article before noun, preposition before its complement, and the verb often at the end in solemn narrative (imitating the Hebrew of the Septuagint). Do not memorize rigid order rules; read the cases and let the emphasis emerge.

## Movable nu

Certain words gain a movable final {ν} (nu euphonic) before a vowel or at sentence end: {λέγουσιν} for {λέγουσι}, {ἐστίν} for {ἐστί}. The dative plural {-σι(ν)} and 3rd-person plural verbs use this {ν} often. It changes neither sense nor case — it is mere euphony, and manuscripts vary. When parsing the form, ignore the movable final {ν}.`),
  vocab: [
    V('λόγος', 'λόγος', 'word'),
    V('λόγου', 'λόγος', 'of the word (gen.)'),
    V('λόγον', 'λόγος', 'the word (acc.)'),
    V('ἄνθρωπος', 'ἄνθρωπος', 'human being'),
    V('θεός', 'θεός', 'God'),
    V('κόσμος', 'κόσμος', 'world'),
    V('οὐρανός', 'οὐρανός', 'heaven'),
    V('νόμος', 'νόμος', 'law'),
    V('ἀπόστολος', 'ἀπόστολος', 'apostle'),
    V('δοῦλος', 'δοῦλος', 'servant, slave'),
    V('ἔργον', 'ἔργον', 'work, deed'),
    V('ἔργα', 'ἔργον', 'works (pl.)'),
    V('τέκνον', 'τέκνον', 'child'),
    V('δῶρον', 'δῶρον', 'gift'),
    V('ἱερόν', 'ἱερόν', 'temple'),
    V('οἶκος', 'οἶκος', 'house'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('What is the accusative singular of "ὁ ἄνθρωπος"? (type in Greek)'),
    answer: 'ἄνθρωπον',
    hint: T('2nd declension masculine: add {-ον} to the stem.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('"τὰ ἔργα" is in which case and number?'),
      options: [
        T('Nominative or accusative plural'),
        T('Genitive singular'),
        T('Dative plural'),
        T('Vocative singular'),
      ],
      answer: 0,
      hint: T('Neuter plural in -α: can only be nominative or accusative (rule §2).'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the genitive plural: τῶν ___ ("of the words", from λόγος).'),
      answer: 'λόγων',
      hint: T('2nd-declension genitive plural: stem + -ων.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its (singular) case.'),
      pairs: [
        { a: 'λόγου', b: 'genitivo' },
        { a: 'λόγῳ', b: 'dativo' },
        { a: 'ἔργῳ', b: 'dativo neutro' },
        { a: 'λόγους', b: 'acusativo plural' },
      ],
      answer: [
        { 0: '0', 1: '-', 2: '0' },
        { 0: '1', 1: '-', 2: '1' },
        { 0: '2', 1: '-', 2: '2' },
        { 0: '3', 1: '-', 2: '3' },
      ],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '2nd-declension masculines: nominative in {-ς}, genitive in {-ου}. The stem ends in omicron throughout.',
      ),
    },
    {
      n: '2',
      text: T(
        'Golden rule of neuters: nominative = accusative in both numbers; plural always in {-α}.',
      ),
    },
    {
      n: '3',
      text: T(
        'The cases — not the order — mark subject and object. Unexpected order signals emphasis, not a new function.',
      ),
    },
    {
      n: '4',
      text: T(
        'Final ν in {λέγουσιν}, {ἐστίν}, {-σι(ν)} is movable and euphonic: ignore it in morphological analysis.',
      ),
    },
    {
      n: '5',
      text: T(
        "Genitive plural {-ων} and dative plural {-οις}: the same slots as the article (τῶν, τοῖς) with the noun's stem.",
      ),
    },
  ],
  notes: [
    {
      label: T('False friend:'),
      text: T(
        '{ὁ νόμος} means "law", not "nome"; {ἡ δόξα} is "glory". Distrust familiar endings carrying strange senses.',
      ),
    },
    {
      label: T('In the text:'),
      text: T(
        '{ἄνθρωπος} almost never means male "man" in the New Testament — it means "human being". {ὁ υἱὸς τοῦ ἀνθρώπου} is "the Son of Man", Jesus\' title, not a gender description.',
      ),
    },
  ],
  examples: [
    { text: '{ἐν ἀρχῇ ἦν ὁ λόγος}', gloss: T('in the beginning was the Word (John 1:1)') },
    { text: '{ὁ θεὸς ἀγαπᾷ τὸν κόσμον}', gloss: T('God loves the world (accusative as object)') },
    { text: '{μακάριοι οἱ πτωχοί}', gloss: T('blessed are the poor (Matt 5:3)') },
    { text: '{τὰ τέκνα τοῦ θεοῦ}', gloss: T('the children of God (neuter plural + genitive)') },
    { text: '{ἐκ τῶν ἔργων}', gloss: T('by the deeds (neuter genitive plural)') },
    { text: '{τοῖς ἀνθρώποις}', gloss: T('to men (dative plural)') },
    { text: '{οἱ οὐρανοὶ καὶ ἡ γῆ}', gloss: T('the heavens and the earth (compound subject)') },
    { text: '{τὸν ἄρτον ἡμῶν}', gloss: T('our bread (accusative + possessive; Matt 6:11)') },
    { text: '{διὰ τοῦ νόμου}', gloss: T('through the law (preposition + genitive)') },
    { text: '{λέγουσιν αὐτῷ}', gloss: T('they say to him (verb + dative; note the movable ν)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Masculine: ὁ λόγος'),
      head: [T('Case'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominative'), '{ὁ λόγος}', '{οἱ λόγοι}'],
        [T('Genitive'), 'τοῦ λόγου', 'τῶν λόγων'],
        [T('Dative'), 'τῷ λόγῳ', 'τοῖς λόγοις'],
        [T('Accusative'), '{τὸν λόγον}', 'τοὺς λόγους'],
      ],
    },
    {
      caption: T('Table 2 — Neuter: τὸ ἔργον'),
      head: [T('Case'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominative'), '{τὸ ἔργον}', '{τὰ ἔργα}'],
        [T('Genitive'), 'τοῦ ἔργου', 'τῶν ἔργων'],
        [T('Dative'), 'τῷ ἔργῳ', 'τοῖς ἔργοις'],
        [T('Accusative'), '{τὸ ἔργον}', '{τὰ ἔργα}'],
      ],
    },
  ],
};
