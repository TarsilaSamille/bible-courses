import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  section: T('Adverb'),
  title: T('The adverb that comes out of the adjective'),
  subtitle: T('νοερός — νοερώς — γλυκύς — γλυκέως'),
  body: C(`## Greek manufactures adverbs by rule

Latin does not inflect the adverb: {bene} from {bonus}, {male} from {malus}, and the relation is by convention. Modern Greek is the other way round: the adverb is the adjective with its ending swapped, and the swap is mechanical after the first declension.

The main rule fits in one line: **an adjective in {-ος} gives an adverb in {-ώς}**. {νοερός} gives {νοερώς}, {σοφός} gives {σοφώς}, {χαρίσιος} gives {χαρισίως}, {ωραίος} gives {ωραία}, {γλυκύς} gives {γλυκέως}. There is no exception in the series; what changes is the ending of the source adjective, not the adverb's.

The adverb is a single word and does not inflect. {νοερώς} is the same for masculine, feminine and plural. English has three: "fast", "fast", "fast" for masculine, feminine and plural. Greek has one, and it does the work of all three.

## Four endings, four adverbs

{-ώς} is not the only one. Each family of adjectives has its own, and the pattern settles down after the first declension:

- an adjective in {-ικός} gives {-ικά}: {πραγματικός} gives {πραγματικά}
- an adjective in {-ύς} gives {-έως}: {γλυκύς} gives {γλυκέως}, {πικρύς} gives {πικρέως}
- an adjective in {-ος} gives {-ώς}: {καλός} gives {καλά}, {ωραίος} gives {ωραία}
- a short adjective gives {-α}: {πολύς} gives {πολύ}, {λίγος} gives {λίγο}

Once you see which ending an adjective has, you know the adverb, even if you have never seen it. That is the difference between memorising and deducing.

## The adverb has no fixed place

While the noun almost always follows the verb, the adverb can come before, inside or after. {Μιλάει σοφώς}, {σοφώς μιλάει}, {μιλάει σοφώς}. All three are the same sentence, and the translation only changes when the adverb lands in first position, because then it becomes focus.

Adverbs of place are looser still: {εδώ}, {εκεί}, {αλλού}, {πάνω}, {κάτω}, {μέσα}, {έξω}. None of them has a syntax of its own, and that is why their position is the only thing the sentence contributes.

## Adjective and adverb in one sentence

The distinction ancient Greek treated as something minor is what separates {ο σοφός λέει} from {σοφώς λέει}. The first says the man is wise, and the content is about him. The second says he speaks well, and the content is about the act of speaking. They are different claims about different things, and choosing the adverb is choosing what you want to assert.

In {μιλούσε σοφώς} the adverb has an {-ώς} that comes from the adjective {σοφός}, and the verb is in the imperfect. A reader who translates reads "he was speaking wisely" and gets both things at once.

## The adverb in Scripture

> Ὁ δὲ πιστεύων εἰς ἐμὲ καθὼς εἶπεν ἡ γραφή, ποταμοὶ ἐκπορεύσονται ἐκ τῆς κοιλίας αὐτοῦ ὕδατος ζῶντος.

{Τῆς} is a noun that does not inflect, {ζῶντος} is a genitive agreeing with {ὕδατος}, and {ποταμοὶ} is a nominative plural without an article. All of that is noun syntax. There is no adverb in {ἐκπορεύσονται}, which is the third person plural future of {ἐκπορεύομαι}, and the whole clause means "will flow out". Anyone reading the verse looking for an adverb finds a noun, because ancient Greek had few adverbs and Scripture barely uses them.`),
  vocab: [
    V('νοερός', 'νοερός', 'mental'),
    V('νοερώς', 'νοερώς', 'mentally'),
    V('σοφός', 'σοφός', 'wise'),
    V('σοφώς', 'σοφώς', 'wisely'),
    V('γλυκύς', 'γλυκύς', 'sweet'),
    V('γλυκέως', 'γλυκέως', 'sweetly'),
    V('καλός', 'καλός', 'good'),
    V('καλά', 'καλά', 'well'),
    V('χαρίσιος', 'χαρίσιος', 'agreeable'),
    V('χαρισίως', 'χαρισίως', 'agreeably'),
    V('πραγματικός', 'πραγματικός', 'practical'),
    V('πραγματικά', 'πραγματικά', 'practically'),
    V('πολύ', 'πολύ', 'much'),
    V('λίγο', 'λίγο', 'little'),
    V('εδώ', 'εδώ', 'here'),
    V('πάνω', 'πάνω', 'on top'),
    V('μιλάει', 'μιλάω', 'speaks'),
  ],
  rules: [
    {
      n: '§1',
      text: T('An adjective in -ος gives an adverb in -ώς: νοερός → νοερώς, σοφός → σοφώς.'),
    },
    {
      n: '§2',
      text: T('An adjective in -ικός gives -ικά, in -ύς gives -έως, and the short one gives -α.'),
    },
    {
      n: '§3',
      text: T('The adverb does not inflect: it is the same for all genders and all numbers.'),
    },
    {
      n: '§4',
      text: T(
        'The adverb can come before, inside or after the verb; only in first position does it become focus.',
      ),
    },
  ],
  notes: [
    {
      label: T('Latin'),
      text: T(
        'bene, male and male volo are fixed by convention, not by rule. Greek does the same thing by morphology, and that is why the list of adverbs is infinite instead of memorised.',
      ),
    },
    {
      label: T('Koine'),
      text: T(
        'In Scripture the adverb almost always appears in -ως, and almost always in first position: καθὼς, ὡσαύτως, ὁμοίως. That position marks the comparison, and it is why ancient Greek put the adverb of comparison where modern Greek does not.',
      ),
    },
  ],
  examples: [
    { text: 'μιλάει σοφώς', gloss: T('speaks wisely') },
    { text: 'μιλάει καλά', gloss: T('speaks well') },
    { text: 'ζει ασφαλώς', gloss: T('lives safely') },
    { text: 'περπατάει άσχημα', gloss: T('walks badly') },
    { text: 'πίνει λίγο', gloss: T('drinks little') },
    { text: 'δουλεύει πολύ', gloss: T('works a lot') },
    { text: 'εδώ μιλάει ήσυχα', gloss: T('here he speaks quietly') },
    { text: 'ο σοφός λέει σοφώς', gloss: T('the wise man speaks wisely') },
  ],
  tables: [
    {
      caption: T('Adjective and adverb'),
      head: ['Επίθετο', 'Επίρρημα'],
      rows: [
        ['νοερός', 'νοερώς'],
        ['σοφός', 'σοφώς'],
        ['χαρίσιος', 'χαρισίως'],
        ['γλυκύς', 'γλυκέως'],
        ['πικρύς', 'πικρέως'],
      ],
    },
    {
      caption: T('The ending that decides'),
      head: ['Τελευταίο επιθέτου', 'Τελευταίο επιρρήματος', 'Ζεύγος'],
      rows: [
        ['-ος', '-ώς', 'σοφός → σοφώς'],
        ['-ικός', '-ικά', 'πραγματικός → πραγματικά'],
        ['-ύς', '-έως', 'γλυκύς → γλυκέως'],
        ['βραχύ', '-α', 'πολύς → πολύ'],
      ],
    },
    {
      caption: T('Adverbs of place'),
      head: ['Είδος', 'Επίρρημα'],
      rows: [
        ['σταθερός τόπος', 'εδώ, εκεί, αλλού'],
        ['θέση', 'πάνω, κάτω'],
        ['χώρος', 'μέσα, έξω'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the adverb of "σοφός"?'),
    options: [T('σοφία'), T('σοφώς'), T('σοφά'), T('σοφικά')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('ο άνθρωπος είναι ___ (mental)'),
      answer: 'νοερός',
      hint: T('An adjective, not an adverb'),
    },
    {
      kind: 'choose',
      prompt: T('How is the adverb of "γλυκύς" formed?'),
      options: [T('γλυκέως'), T('γλυκά'), T('γλυκώς'), T('γλυκιά')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Adjective and adverb pair'),
      pairs: [
        { a: 'σοφός', b: T('σοφώς') },
        { a: 'καλός', b: T('καλά') },
        { a: 'πραγματικός', b: T('πραγματικά') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('μιλάει ___ (well, adverb)'),
      answer: 'καλά',
      hint: T('The adverb of καλός'),
    },
  ],
};
