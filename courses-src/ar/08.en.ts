import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Imperfect, future, and moods'),
  subtitle: T('Time value depends on context'),
  section: T('The verb'),
  body: C(`## The imperfect is not "now"

The Arabic imperfect has no obligatory present value. It can be habitual — {كَانَ يُضِيءُ النُّورُ} may describe what the light kept doing — or historical, when a past event takes imperfect form for narration. What decides is context, not vocalisation: the ending {ـُ} marks mood, not time.

## The moods

The jussive drops the final vowel: {يَكْتُبْ} is "let him write". The subjunctive usually keeps fatha: {يَكْتُبَ} is "that he write" in a context of wish or command. In {لِيَكُنْ نُورٌ} the jussive follows {لِ} — the particle of command.

## Negation and future

{لَمْ} negates the past, {لَنْ} the future, {لا} the present. For the future there is {سَ}-, as in {سَيَكْتُبُ} "he will write", and {سَوْفَ}, which stresses futurity: it adds distance or emphasis. The choice between them changes the tone, not the fact.

## Contraction

When {لَمْ} meets the jussive or the subjunctive, the two merge: {لَمْ يَكْتُبْ} is "he did not write" with a single focus on the negation. The same happens with {لَمَّا}. The verb then carries the ending of one tense only, which is what usually confuses literal translation.

## Reading criterion

Identify the negation first ({لَمْ}, {لَنْ}, {لا}), then the tense of the verb that follows, and only then translate. In the original, the position of the negation is what fixes the tense.`),
  vocab: [
    V('يَكْتُبُ', 'كتب', 'he writes'),
    V('تَكْتُبُ', 'كتب', 'you/she writes'),
    V('أَكْتُبُ', 'كتب', 'I write'),
    V('نَكْتُبُ', 'كتب', 'we write'),
    V('يَكْتُبُونَ', 'كتب', 'they write'),
    V('سَيَكْتُبُ', 'كتب', 'he will write'),
    V('سَوْفَ', 'سوف', 'will; later'),
    V('لَمْ', 'لم', 'not + past'),
    V('لَنْ', 'لن', 'never; not + future'),
    V('لِيَكُنْ', 'كان', 'let there be'),
    V('يَعْمَلُ', 'عمل', 'he does'),
    V('يَعْلَمُ', 'علم', 'he knows'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What value does {لَمْ يَكْتُبْ} express?'),
    options: [T('Future'), T('Negative past'), T('Negative present'), T('Doubt')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Form the jussive: يَكْتُبُ → ___'),
      answer: 'يَكْتُبْ',
      hint: T('Remove the final short vowel.'),
    },
    {
      kind: 'choose',
      prompt: T('Which form marks near future?'),
      options: [T('lanyakutha'), T('sayakutub'), T('lamyaktub'), T('he was writing')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match marker and time.'),
      pairs: [
        { a: T('lam'), b: T('did not write') },
        { a: T('lan'), b: T('will not write') },
        { a: T('sa'), b: T('will write') },
      ],
      answer: [0, 1, 2],
    },
  ],
  rules: [
    { n: '1', text: T('The jussive loses the final short vowel: {يَكْتُبُ} → {يَكْتُبْ}.') },
    { n: '2', text: T('{لَمْ} + jussive gives a negative past: {لَمْ يَكْتُبْ}.') },
    { n: '3', text: T('{لَنْ} + subjunctive gives emphatic negative future: {لَنْ يَكْتُبَ}.') },
  ],
  notes: [
    {
      label: T('Tense'),
      text: T('Grammatical tense and reference time differ: {كَانَ يَقْرَأُ} can mean “used to read”.'),
    },
  ],
  examples: [
    { text: 'كَانَ يُضِيءُ النُّورُ', gloss: T('the light was shining') },
    { text: 'لِيَكُنْ نُورٌ', gloss: T('let there be light') },
    { text: 'لَنْ تَمُوتُوا', gloss: T('you shall not die') },
  ],
  tables: [
    {
      caption: T('Forms of كتب'),
      head: [T('Type'), T('Form'), T('Typical value')],
      rows: [
        ['imperfecto', 'يَكْتُبُ', 'presente; habitual; passado'],
        ['jussivo', 'لِيَكْتُبْ', 'desejo; finalidade; exhortação'],
        ['subjuntivo', 'لَنْ يَكْتُبَ', 'fato futuro; resultado'],
        ['futuro', 'سَيَكْتُبُ', 'ação futura'],
      ],
    },
  ],
};
