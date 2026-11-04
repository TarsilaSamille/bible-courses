import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('Questions and conditionals'),
  subtitle: T('Interrogation, relation, and consequence'),
  section: T('The verb'),
  body: C(`## Questions

{هَلْ} opens yes/no questions and does not allow an inverted answer. Interrogatives use {مَنْ} for "who?", {مَا} for "what?", {أَيْنَ} for "where?", {مَتَى} for "when?" and {لِمَاذَا} for "why?". In {مَنْ ذَا الَّذِي} the structure is inverted: the pronoun precedes the relative.

## The relative

{الَّذِي} agrees with its antecedent in gender and number: masculine {الَّذِي}, feminine {الَّتِي}, plural {الَّذِينَ}. It follows the noun and takes the case required by the rest of the clause, like any noun.

## The conditional

{إِنْ} introduces the condition and may be followed by the imperfect or the perfect. In {إِنْ تُؤْمِنُ} the condition is presented as present and habitual; in {إِنْ آمَنْتَ} it appears as an already accomplished event. The verb of the consequence comes in the imperfect, as in {لَنْ يَهْلِكَ} — the consequence is negative and future.

## Reading criterion

On meeting {إِنْ} in a verse, first ask whether the condition is described as habit or as fact, then who is the subject of the consequence — almost always the same as the condition's, in a derived form.`),
  vocab: [
    V('هَلْ', 'هل', 'whether; question'),
    V('مَنْ', 'من', 'who'),
    V('مَا', 'ما', 'what'),
    V('مَاذَا', 'ماذا', 'what; why'),
    V('أَيْنَ', 'أين', 'where'),
    V('مَتَى', 'متى', 'when'),
    V('كَيْفَ', 'كيف', 'how'),
    V('لِمَاذَا', 'لماذا', 'why'),
    V('الَّذِي', 'الذي', 'who; which'),
    V('الَّتِي', 'التي', 'which (f.)'),
    V('إِنْ', 'إن', 'if'),
    V('فَ', 'ف', 'then; so'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What can {إِنْ آمَنْتَ} mean?'),
    options: [T('If you believed'), T('If you believe'), T('I do not believe'), T('Believe!')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete “___ تُؤْمِنُ؟” (Do you believe?).'),
      answer: 'هَلْ',
      hint: T('It is the yes/no question particle.'),
    },
    {
      kind: 'match',
      prompt: T('Match question and expected answer.'),
      pairs: [
        { a: T('Who?'), b: T('a person') },
        { a: T('Where?'), b: T('a place') },
        { a: T('When?'), b: T('a time') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('Which particle introduces the consequence?'),
      options: [T('if'), T('then'), T('whether'), T('between')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('{هَلْ} + verb expects a yes/no answer.') },
    {
      n: '2',
      text: T('{إِنْ} introduces the condition; {فَ} introduces the consequence or a new fact.'),
    },
    {
      n: '3',
      text: T('The relative agrees with its antecedent, although its syntactic role may vary.'),
    },
  ],
  notes: [
    {
      label: T('Translation'),
      text: T('The literal shape of {لَنْ تَمُوتُوا} is negative future: “you shall not die”.'),
    },
  ],
  examples: [
    { text: 'هَلْ تُؤْمِنُ؟', gloss: T('Do you believe?') },
    { text: 'مَنْ يَعْمَلْ؟', gloss: T('Who will do it?') },
    { text: 'إِنْ تُؤْمِنُ فَسَتَخْلُصُ', gloss: T('if you believe, you will be saved') },
  ],
  tables: [
    {
      caption: T('Question words'),
      head: [T('Word'), T('Question')],
      rows: [
        ['مَنْ', 'quem?'],
        ['مَا / مَاذَا', 'o quê?'],
        ['أَيْنَ', 'onde?'],
        ['مَتَى', 'quando?'],
        ['كَيْفَ', 'como?'],
        ['لِمَاذَا', 'por quê?'],
      ],
    },
  ],
};
