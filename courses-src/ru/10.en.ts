import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  section: T('The cases'),
  title: T('Animate and inanimate'),
  subtitle: T('Бога and стол: two words, one difference in inflection that the verb gives away'),
  body: C(`
## Animate means alive, and that changes the shape

Animate is what is alive: a person, an animal, and by extension a figure that custom treats as a person. Inanimate is the rest: table, book, light, an idea. The distinction looks semantic and it is morphological, and it shows up in two places of the paradigm: the accusative of the masculine singular, and the plural.

The most visible case is the accusative of the masculine singular. In a masculine inanimate noun the accusative and the nominative have the same shape: **вижу стол** is what I see, and **вижу стола** is of the table's owner. The two sentences have the same word and different verbs. In a masculine animate noun the accusative takes the shape of the genitive: **вижу Бога**. As letras são as mesmas no primeiro par e diferentes no segundo, e a animacidade é o que as separa.

In the other genders none of that happens. The feminine has its own accusative shape in -у and -а, animal or not: собака, вода, душа. The neuter always has nominative and accusative alike: слово, окно. The only category where animacy changes anything is the masculine singular, and that is why it is learned as if it were a case.

## The plural reverses the rule

In the plural the pattern is clean: **the accusative of an animate plural equals the genitive plural**, and **the accusative of an inanimate plural equals the nominative plural**.

вижу собак is accusative plural, and it has the shape of the genitive. вижу людей is the same with people. вижу столы is inanimate accusative plural and has the shape of the nominative. вижу окна is the same with windows, and it is also the shape of the genitive, which is another coincidence that troubles nobody.

The summary fits in one sentence: in the plural, the case of a masculine animate noun is invisible, because the accusative copied the genitive. A translator gains or loses here, and what is lost is the distinction between a verb with two objects and a verb with one.

## The exceptions nobody guesses

The first is человек, and it is the most important one. A person is masculine animate, and in the singular it behaves as expected: Я вижу человека, with the accusative equal to the genitive. But in the plural the accusative of человек is **человек**, not людей. That shows up inside a count: Я вижу пять человек, and the noun stays in the nominative because the accusative plural of a human being is not marked. It is the only noun in Russian that behaves this way, and after день it is the commonest.

The second is кукла. A doll has a face and hands, and it is inanimate: Я вижу куклу, with the accusative -у of the feminine. The same goes for робот. The criterion is what the language counts as alive, and a thing that looks like a person is not a person.

The third is мертвец. A corpse is dead and it is animate: Я вижу мертвеца. The word settles gender and animacy at once, which is why it shows up in exercises.

And there is the opposite case, rarer and more productive: посол, ambassador, and судья, judge, are masculine animate and carry the -л or -ья signal precisely for that. NOMINATIVE посол, ACCUSATIVE посла. They are the two longest Russian words in -л that are not participles.

## The hook: who is the subject in John 1:29

**На другой день видит Иоанн идущего к нему Иисуса и говорит: вот Агнец Божий, Который берёт на Себя грех мира.** A reader looks for the object of берёт and finds Который. If Который were the object it would be Которого: a masculine animate accusative is the genitive. The text has Который, which is nominative, and so Который is the subject.

The object is грех, which is masculine inanimate, so its accusative is the nominative: the verb falls on грех with no marking at all. One verse, two nouns, and the animacy of each is what assigns the subject and the object. A reader who does not know the rule reads Который as the object and arrives at the reverse meaning without noticing where the mistake was.
`),
  vocab: [
    V('собака', 'собака', 'dog; feminine'),
    V('стол', 'стол', 'table; masculine inanimate'),
    V('Бога', 'бог', 'God; accusative of a masculine animate'),
    V('людей', 'человек', 'people; genitive and accusative plural'),
    V('человек', 'человек', 'human being; the only exception in the plural'),
    V('пять человек', 'человек', 'five people; noun in the nominative'),
    V('кукла', 'кукла', 'doll; feminine despite looking like a person'),
    V('робот', 'робот', 'robot; inanimate'),
    V('мертвец', 'мертвец', 'corpse; masculine animate'),
    V('посол', 'посол', 'ambassador; masculine animate in -л'),
    V('судья', 'судья', 'judge; masculine animate in -ья'),
    V('Агнец', 'агнец', 'the Lamb; masculine'),
    V('Который', 'который', 'who, which; masculine nominative'),
    V('грех', 'грех', 'sin; masculine inanimate'),
    V('вижу собак', 'собака', 'I see dogs; accusative equal to the genitive'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In вижу Бога, which case is Бога?'),
    options: [
      T('Accusative, because it is masculine'),
      T('Genitive, not accusative'),
      T('Nominative'),
    ],
    answer: 1,
    hint: T(
      'A masculine animate has accusative equal to genitive. Бога is the genitive shape of бог.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: Я вижу ___ (the dog)'), answer: 'собаку' },
    {
      kind: 'choose',
      prompt: T('In Я вижу пять ___, the noun is in the...'),
      options: [T('genitive plural'), T('nominative'), T('accusative plural')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: Я вижу ___ (the ambassador)'), answer: 'посла' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'In the masculine singular the accusative of an animate noun is the genitive: {вижу Бога}. In an inanimate one it is the nominative: {вижу стол}.',
      ),
    },
    {
      n: '2',
      text: T(
        'In the plural the accusative of an animate noun is the genitive plural ({вижу собак}) and of an inanimate one the nominative plural ({вижу столы}).',
      ),
    },
    {
      n: '3',
      text: T(
        'In the other genders animacy changes nothing: the feminine has accusative -{у} and the neuter has accusative equal to the nominative.',
      ),
    },
    {
      n: '4',
      text: T(
        '{человек} is the exception: in the plural its accusative is {человеку} equal to the nominative, and it shows up in counts ({пять} {человек}).',
      ),
    },
    {
      n: '5',
      text: T(
        '{Кукла} and {робот} are inanimate; {мертвец}, {посол} and {судья} are animate. The criterion is what the language counts as alive, not appearance.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why only the masculine singular'),
      text: T(
        'The rule looks arbitrary because it is the result of two independent decisions. The feminine already had an accusative signal of its own, the -у, and the neuter already had the same shape in nominative and accusative. Only the masculine had nothing, and animacy stepped in there to provide a signal. That is why it shows up only there.',
      ),
    },
    {
      label: T('The exception that jams a translation'),
      text: T(
        'Пять человек is a counter of people: the noun goes to the nominative plural and the numeral marks the case by position. A translation into a language with an article has to decide between five people and five person, and that decision belongs to the translator, not to the text. A reader working from the Greek finds the same phenomenon in the Greek genitive and the same impasse.',
      ),
    },
  ],
  examples: [
    {
      text: 'вижу стол',
      gloss: T('I see the table; masculine inanimate, accusative equal to the nominative'),
    },
    {
      text: 'вижу Бога',
      gloss: T('I see God; masculine animate, accusative equal to the genitive'),
    },
    { text: 'вижу собаку', gloss: T('I see the dog; feminine, the -у is the accusative') },
    { text: 'вижу слово', gloss: T('I see the word; neuter, accusative equal to the nominative') },
    {
      text: 'вижу собак',
      gloss: T('I see dogs; animate plural accusative, equal to the genitive'),
    },
    {
      text: 'вижу столы',
      gloss: T('I see tables; inanimate plural accusative, equal to the nominative'),
    },
    {
      text: 'Я вижу пять человек',
      gloss: T('I see five people; the noun stays in the nominative'),
    },
    { text: 'Я вижу посла', gloss: T('I see the ambassador; masculine animate in -л') },
    { text: 'Я вижу куклу', gloss: T('I see the doll; inanimate despite the appearance') },
    {
      text: 'вот Агнец Божий, Который берёт на Себя грех мира',
      gloss: T('behold the Lamb of God, who takes away the sin of the world (John 1:29)'),
    },
  ],
  tables: [
    {
      caption: T('The three cases that get confused in the masculine singular'),
      head: [T('Noun'), T('Gender and animacy'), T('Nominative'), T('Genitive'), T('Accusative')],
      rows: [
        [T('стол, table'), T('masculine inanimate'), T('стол'), T('стола'), T('стол')],
        [T('Бог, God'), T('masculine animate'), T('Бог'), T('Бога'), T('Бога')],
        [T('посол, ambassador'), T('masculine animate in -л'), T('посол'), T('посола'), T('посла')],
        [T('собака, dog'), T('feminine'), T('собака'), T('собаки'), T('собаку')],
        [T('вода, water'), T('feminine'), T('вода'), T('воды'), T('воду')],
        [T('слово, word'), T('neuter'), T('слово'), T('слова'), T('слово')],
        [T('окно, window'), T('neuter'), T('окно'), T('окна'), T('окно')],
      ],
    },
    {
      caption: T('The plural, which reverses the rule'),
      head: [
        T('Noun'),
        T('Nominative plural'),
        T('Genitive plural'),
        T('Accusative plural'),
        T('Which of the two?'),
      ],
      rows: [
        [
          T('стол'),
          T('столы'),
          T('столов'),
          T('столы'),
          T('the nominative, because it is inanimate'),
        ],
        [
          T('собака'),
          T('собаки'),
          T('собак'),
          T('собак'),
          T('the genitive, because it is animate'),
        ],
        [
          T('окно'),
          T('окна'),
          T('окон'),
          T('окна'),
          T('the nominative, and the genitive is indistinguishable'),
        ],
        [T('слово'), T('слова'), T('слов'), T('слова'), T('the nominative')],
        [T('человек'), T('люди'), T('людей'), T('человек'), T('the exception: the nominative')],
      ],
    },
    {
      caption: T('Who is animate and who is not'),
      head: [T('Animate'), T('Inanimate')],
      rows: [
        [T('Бог, человек, собака, лошадь, Иисус'), T('стол, книга, слово, свет, дом')],
        [T('посол, судья, мертвец, старец'), T('кукла, робот, идол, манекен')],
        [T('рыба, птица, бабочка'), T('камень, дерево, река, звезда')],
      ],
    },
  ],
};
