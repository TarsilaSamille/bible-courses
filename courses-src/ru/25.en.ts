import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  section: T('The verb: prefixes and derived forms'),
  title: T('Gerund and participle, and the forms only the stress separates'),
  subtitle: T('говоря, говорящий, сказал, сказанный: four shapes, three slots'),
  body: C(`
## An adverb and an adjective with the same name

The деепричастие is an adverb: говоря, читая, неся. It does not inflect, it has no gender and it agrees with nothing. It modifies the verb of the main clause, and the subject is normally the same: Он говорил, читая текст is he who was reading and he who was speaking, and if the subject changes the sentence loses its footing.

The participle is an adjective: говорящий, сказанный, написанный. It inflects for gender, number and case, and agrees with the noun. Слово, сказанное Богом, the Word spoken by God: сказанное is neuter and genitive, and the agreement says so.

The two have the same family name, and the difference is entirely about inflection. **The participle inflects and the деепричастие does not.** A translator who treats them as one thing writes a sentence that fails to inflect where Russian inflects.

## The forms the stress separates

What confuses anyone arriving from Latin is that several of the shapes are identical except for the stress. Говоря and говоря are the same word with the stress in different places, and each belongs to a family: говоря is the gerund of говорить, and говорящий is the present participle.

The list is short and it closes. From the infinitive говорить come four shapes that turn up in almost every Russian sentence:

- говоря, the gerund, with no inflection
- говорит, the present, third person
- говорящий, the present participle, which does inflect
- говорящий is also a substantivised adjective, and in that use it means "whoever speaks"

The past participle has the same shape: сказал is the past of the verb, сказанный is the participle, and сказан is the short form, which is the one that turns up in biblical sentences. Three grammatical slots and three words, and no ending warns which is which.

## The participle inherits the aspect of its verb

This is the information biblical reading uses more than any other fact about participles. **The participle keeps the aspect of the verb it came from.**

Написанный comes from написать, which is perfective: it was written, and the result is in view. Пишущий, the present participle of писать, is imperfective: whoever is writing right now, and the text does not exist yet. The two are in the same semantic field and say opposite things about the text.

The past passive participle follows the same rule. Любимый comes from любить, imperfective, and means beloved in a way that implies no reciprocity and no time. Положенный comes from положить, perfective, and means placed, with the object in place. The ending is the same in both: -мый and -нный.

And the short form keeps the same information. Написан and писан are not the same thing: the first is perfective and the second imperfective. Слово написано is what ended up written; Слово писано is what is being written now.

## The hook: a clause with both shapes

**И Слово стало плотию, и обитало с нами, полное благодати и истины.** The participle of the clause is полное, a short form, and it agrees with Слово: neuter, nominative, singular. The long shape of the same family would be исполненное, and it would say the same with the case marked in the ending.

What the participle brings here is the genitive: благодати and истины are genitive plural, and it is because of them that the accompanying verb is быть rather than a verb with an instrumental. The short neuter participle asks for a genitive, and that is one of the few places where Russian demands a case that no preposition explains.

And the short form is the one the New Testament prefers, always. Благословен грядущий, blessed is he who comes: Благословен is a short past passive participle, and грядущий is a present active participle. Two shapes in one clause, one on each side, and the whole verse fits into two Russian words.
`),
  vocab: [
    V('говоря', 'говорить', 'speaking; gerund, uninflected'),
    V('говорящий', 'говорить', 'who speaks; present participle, inflected'),
    V('читая', 'читать', 'reading; gerund'),
    V('сказал', 'сказать', 'said; past of the verb'),
    V('сказанный', 'сказать', 'said; past passive participle'),
    V('сказан', 'сказать', 'said; short form of the participle'),
    V('написанный', 'написать', 'written; participle of a perfective'),
    V('написан', 'написать', 'written; short perfective form'),
    V('писан', 'писать', 'written; short imperfective form'),
    V('любимый', 'любить', 'beloved; participle of an imperfective'),
    V('обитало', 'обитать', 'remained; gerund of the text'),
    V('полное', 'полный', 'full; short participle, neuter'),
    V('деепричастие', 'деепричастие', 'gerund, verbal adverb'),
    V('причастие', 'причастие', 'participle'),
    V('Благословен грядущий', 'грядущий', 'blessed is he who comes; Mt 21:9'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which of these shapes inflects for gender and case?'),
    options: [T('говоря'), T('сказанный'), T('читая')],
    answer: 1,
    hint: T(
      'The деепричастие is an adverb and does not inflect. The participle is an adjective, and so it agrees with the noun.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete the short participle of написать'), answer: 'написан' },
    {
      kind: 'choose',
      prompt: T('Написан comes from a verb that is...'),
      options: [T('imperfective'), T('perfective')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: Благословен ___ (Mt 21:9)'), answer: 'грядущий' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The {деепричастие} is an adverb and does not inflect; the participle is an adjective and inflects for gender, number and case.',
      ),
    },
    { n: '2', text: T('The {деепричастие} shares its subject with the main clause.') },
    {
      n: '3',
      text: T(
        'Several shapes differ only in stress: {говоря} and the {говорящ}- family are different shapes of different words.',
      ),
    },
    {
      n: '4',
      text: T(
        'The participle inherits the aspect of its verb: {написанный} comes from {написать}, and {любимый} from {любить}.',
      ),
    },
    {
      n: '5',
      text: T(
        'The short neuter participle asks for a genitive complement: {полное} {благодати} {и} {истины}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why the participle knows the aspect'),
      text: T(
        'The participle is built from the verb, and the verb carries the aspect. Since написанный comes from написать and любимый comes from любить, the participle is born perfective in one case and imperfective in the other. That means a translation that renders the participle by an aspectless adjective has lost information that the Greek also carried. In John 1:14, полное is the proof: the short neuter participle brings genitive complements with it, and that demand on the case is what holds the clause together.',
      ),
    },
    {
      label: T('When the inflection is not visible'),
      text: T(
        "A reader of Russian text without the accents cannot tell apart two participles that differ only in stress. Написано and писано are almost the same word, and what changes is the aspect of the verb they came from. In a dictionary the information is under the headword; in an older text it is in the participle's declension column. It is one of the few places where the written form of Russian is poorer than speech.",
      ),
    },
  ],
  examples: [
    { text: 'говоря', gloss: T('speaking; gerund, uninflected') },
    { text: 'говорящий', gloss: T('who speaks; present participle, inflected') },
    {
      text: 'Он говорил, читая текст',
      gloss: T('he spoke while reading the text; gerund, same subject'),
    },
    {
      text: 'Слово, сказанное Богом',
      gloss: T('the Word spoken by God; participle in the genitive'),
    },
    { text: 'сказанный', gloss: T('said; past passive participle') },
    { text: 'написанный', gloss: T('written; from a perfective verb') },
    { text: 'любимый', gloss: T('beloved; from an imperfective verb') },
    { text: 'Слово написано', gloss: T('the word ended up written; short perfective form') },
    { text: 'Слово писано', gloss: T('the word is being written; short imperfective form') },
    {
      text: 'И Слово стало плотию, и обитало с нами, полное благодати и истины',
      gloss: T('and the Word became flesh and dwelt among us, full of grace and truth (John 1:14)'),
    },
  ],
  tables: [
    {
      caption: T('Four slots, four shapes of one verb'),
      head: [T('Slot'), T('Shape'), T('Example'), T('Inflects')],
      rows: [
        [T('infinitive'), T('говорить'), T('—'), T('no')],
        [T('gerund'), T('говоря'), T('говоря с тобой'), T('no')],
        [T('present'), T('говорит'), T('он говорит'), T('yes, by person')],
        [T('present participle'), T('говорящий'), T('говорящий человек'), T('yes, by gender')],
      ],
    },
    {
      caption: T('The participle and the aspect it came from'),
      head: [T('Participle'), T('Verb'), T('Aspect of the verb'), T('What it says')],
      rows: [
        [T('написанный'), T('написать'), T('perfective'), T('ended up written')],
        [T('писанный'), T('писать'), T('imperfective'), T('is being written')],
        [T('любимый'), T('любить'), T('imperfective'), T('beloved, without reciprocity')],
        [T('сказанный'), T('сказать'), T('perfective'), T('said, once')],
        [T('сказанный'), T('говорить'), T('imperfective'), T('of what is spoken')],
      ],
    },
    {
      caption: T('Participle and деепричастие side by side'),
      head: [T(''), T('деепричастие'), T('Participle')],
      rows: [
        [T('example'), T('говоря'), T('говорящий')],
        [T('inflection'), T('none'), T('gender, number and case')],
        [T('function'), T('adverb, modifies the verb'), T('adjective, agrees with the noun')],
        [T('subject'), T('that of the main clause'), T('that of the noun')],
        [T('gender'), T('it has none'), T('masculine, feminine, neuter and plural')],
      ],
    },
  ],
};
