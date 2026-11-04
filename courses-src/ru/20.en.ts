import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('The verb: tense, mood and negation'),
  title: T('Tense and mood: what the particle бы does'),
  subtitle: T('would write, wished, if only: one word, three moods'),
  body: C(`
## Three tenses, and the past has no person

The Russian present has six persons and two conjugation patterns, and the choice between them is made by the stem of the verb, not by the tense. Читаю, читаешь, читает next to говорю, говоришь, говорит. Anyone who has seen Latin recognises the structure: the first and second conjugation, with the third appearing in only a few verbs.

The past is unlike anything Portuguese does. **The Russian past has no person.** It has gender and number, and nothing else. Он читал, она читала, оно читало, они читали. He read, she read, it read, they read: the subject shows only in the shape of the noun, and the verb does not know who did it.

The consequence is that the past does not say who acted, and that is why Russian context always carries a pronoun, a noun, or a mark of person in some other way. Я читал and Он читал are the same word, and the difference sits in who the subject is in the sentence.

Tense shows in the ending, and the zero ending is the masculine singular. That is why был is at once "he was" and, in a neutral context, a shape with no gender information.

## Two ways of saying the future

There is no perfect future tense. It is made in two ways, and the choice between them is aspect.

The first uses the perfective present: Я напишу письмо is what I am going to write, and the action will happen once. The second uses the imperfective with the verb to be: Я буду писать письмо, and it is what I will be doing. Both sentences are future, and the difference between them is the same one that exists in the past.

There is a third form, which is not future but obligation: Я должен писать and, with the particle, Мне писать. The first uses an adjective, and the second turns up after verbs of obligation and of necessity. A translator needs to know which of the two is in the original, because Я должен писать can be an obligation or a statement about what someone is going to do.

## The particle that does everything

**Бы is a particle, not a tense and not a mood.** It does not inflect, it has no plural, and it does not change with the person. And it does three things that Portuguese would need separate words for.

The first is the softened conditional: Я бы написал, I would write, and the whole sentence can mean a polite wish or an offer. The second is the optative of wish: Хотел бы я, I wish. The third is the real conditional, and that one has a rule that surprises people.

In that rule, **when the if takes a бы, the main clause usually takes one too**, and that is how Russian marks the unreal against the real. Если бы он был дома, он бы позвонил is the unreal: two бы, and the verb in the past. The shape with бы only in the subordinate clause is commoner in speech, and the shape with no бы at all is the one that is learned first.

The practical rule for a reader is this: **бы never appears in the indicative.** If a бы turns up in the sentence, someone is supposing something, and the tense has stopped being the main information. A translator who renders only the tense loses the information.

## The hook: a statement with no hypothesis

**В Нем была жизнь, и жизнь была свет человеков.** Two clauses, the same verb twice, and the tense is the past in both: была, feminine singular, agreeing with жизнь.

The author of John uses no hypothesis at all. There is no бы, no пусть, no чтобы, and the verb in the past asserts a fact, not a possibility. The strongest claim in the language is made with the tense that has no future.

And the same holds in John 14:6, where the first person of the verb to be appears in an archaic shape: Я есмь путь и истина и жизнь. The есмь has survived only in the biblical and liturgical register; in current Russian the first person of to be is я with no verb at all, and that is why this sentence sounds old even to a reader who does not notice why.

The contrast that matters is with a hypothetical sentence on the same subject: Если бы я был путём, я бы вёл к Отцу is grammatical, it is intelligible, and it is a different thing. A sentence with бы is a sentence that supposes. A sentence without бы is a sentence that asserts. John 1:4 and John 14:6 stand on the second side.
`),
  vocab: [
    V('читал', 'читать', 'he was reading; past masculine'),
    V('читала', 'читать', 'she was reading; past feminine'),
    V('читали', 'читать', 'they were reading; past plural'),
    V('была', 'быть', 'was; past feminine'),
    V('буду писать', 'быть', 'I will be writing; imperfective future'),
    V('напишу', 'написать', 'I will write; perfective future'),
    V('должен', 'должен', 'must; adjective of obligation'),
    V('Мне писать', 'писать', 'I have to write; personal infinitive'),
    V('бы', 'бы', 'particle of the conditional and the optative'),
    V('Если бы', 'если', 'if; with бы in the unreal conditional'),
    V('Я бы написал', 'написать', 'I would write; softened conditional'),
    V('Хотел бы я', 'хотеть', 'I wish; optative of desire'),
    V('Я есмь', 'быть', 'I am; archaic first person shape'),
    V('пусть', 'пусть', 'let it be; particle of desire in the third person'),
    V('да будет', 'быть', 'let there be; liturgical optative'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In Если бы он был дома, он бы позвонил, how many times does бы appear?'),
    options: [T('Once'), T('Twice'), T('Three times')],
    answer: 1,
    hint: T(
      'When the if clause takes a бы, the main clause takes one too. That doubling is what marks the unreal conditional.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: Я ___ написал (I would write)'), answer: 'бы' },
    {
      kind: 'choose',
      prompt: T('The Russian past distinguishes...'),
      options: [T('the person of the subject'), T('gender and number'), T('aspect')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete the perfective future: Я ___ письмо'), answer: 'напишу' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The Russian past has no person: it has gender and number, and the zero ending is the masculine singular.',
      ),
    },
    {
      n: '2',
      text: T(
        'There is no perfect future tense: it is the perfective present ({напишу}) or the imperfective with to be ({буду писать}).',
      ),
    },
    {
      n: '3',
      text: T(
        'After the particle of obligation an infinitive appears without a preposition: {Я} {должен} {писать}, {Мне} {писать}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Бы} is a particle, and it does three things: softened conditional, optative of wish, and unreal conditional.',
      ),
    },
    {
      n: '5',
      text: T(
        'When the if clause takes a {бы}, the main clause takes one too; and {бы} never appears in the indicative.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why the past needs a pronoun'),
      text: T(
        'Since the past has no person, Я читал and Он читал are the same word. A Russian writer makes up for the missing information with a pronoun or a noun, and that is why a Russian text carries more pronouns than the Greek at the same point. It is not a style: it is the only information the verb does not give.',
      ),
    },
    {
      label: T('The line between asserting and supposing'),
      text: T(
        'A бы in the sentence means that someone is supposing something, and its position matters: it comes after the verb it refers to. A sentence with бы is hypothetical by definition, even when the verb is in the present. John 1:4 and John 14:6 are the exact opposite: no particle, no mood, and a past verb asserting a fact the text does not open to hypothesis.',
      ),
    },
  ],
  examples: [
    { text: 'Он читал', gloss: T('he was reading; past, with no person') },
    { text: 'Она читала', gloss: T('she was reading; past feminine') },
    { text: 'Они читали', gloss: T('they were reading; past plural') },
    { text: 'Я буду писать', gloss: T('I will be writing; imperfective future') },
    { text: 'Я напишу письмо', gloss: T('I will write the letter; perfective future') },
    { text: 'Я должен писать', gloss: T('I must write; obligation with an adjective') },
    { text: 'Мне писать', gloss: T('I have to write; infinitive without a preposition') },
    {
      text: 'Если бы он был дома, он бы позвонил',
      gloss: T('if he had been at home, he would have called; unreal conditional'),
    },
    { text: 'Я бы написал', gloss: T('I would write; softened conditional') },
    {
      text: 'В Нем была жизнь, и жизнь была свет человеков',
      gloss: T('in him was life, and the life was light for men (John 1:4)'),
    },
  ],
  tables: [
    {
      caption: T('The three tenses with one example pair'),
      head: [T('Tense'), T('Imperfective'), T('Perfective'), T('What the person knows')],
      rows: [
        [
          T('present'),
          T('читаю, читаешь, читает'),
          T('напишу, напишешь, напишет'),
          T('who does it, from the verb'),
        ],
        [
          T('past'),
          T('читал, читала, читало, читали'),
          T('написал, написала'),
          T('gender and number, not person'),
        ],
        [T('future'), T('буду писать'), T('напишу'), T('the same distinction as the present')],
      ],
    },
    {
      caption: T('The three uses of бы'),
      head: [T('Use'), T('Example'), T('What it means'), T('Tense of the verb')],
      rows: [
        [
          T('softened conditional'),
          T('Я бы написал'),
          T('I would write, by courtesy or wish'),
          T('past'),
        ],
        [T('optative of wish'), T('Хотел бы я'), T('I wish'), T('past')],
        [
          T('unreal conditional'),
          T('Если бы он был дома, он бы позвонил'),
          T('if he had been at home'),
          T('past'),
        ],
      ],
    },
    {
      caption: T('The ways of speaking, and where бы appears'),
      head: [T('Form'), T('Example'), T('What it marks')],
      rows: [
        [T('indicative'), T('Он читает'), T('a fact or a habit')],
        [
          T('desire in the third person'),
          T('Пусть будет свет'),
          T('an order or a wish from outside'),
        ],
        [
          T('liturgical optative'),
          T('Да святится имя Твое'),
          T('a wish in the first and second person'),
        ],
        [
          T('final subordinate clause'),
          T('Чтобы ты веровал'),
          T('purpose, or the content of a wish'),
        ],
        [T('conditional'), T('Если бы я был богом'), T('supposition, and always with бы')],
      ],
    },
  ],
};
