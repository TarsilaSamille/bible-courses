import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('The article: the zero article'),
  subtitle: T('go to school, by car, Teachers are — the four omissions'),
  section: T('Nouns'),
  body: C(`## Four cases, and the list is short

A Portuguese speaker gets the article wrong more by surplus than by omission, and the surplus has a cause: in Portuguese {the} almost always shows up. In English the article **disappears** in four situations, and only four. Memorize the four and the mistakes stop.

They are: generic plural, generalized mass, institution, and {by} plus means of transport. Every other noun keeps its article, and the shortness of the list is what makes it learnable.

## The generic plural

{Teachers are} and {Books are} talk about the whole class, not about one member of it. The plural already says "everyone": Portuguese would say "os professores que estão aqui" and English says {Teachers}.

Proverbs 18:21 in the KJV puts both ends side by side: {Death and life are in the power of the tongue}. Both nouns are in the generic plural, without an article, and the sentence holds for any speech and for any language.

When the generic noun is countable in the singular, it goes into the plural even if there is one group: {Parents are responsible for their children}.

## The generalized mass

{Music is} and {Life is} talk about the whole field, not about one particular case. It is the same move as the previous paragraph with one difference: here the noun is not even pluralizable, and the article still does not come.

1 John 1:5 reads {God is light, and there is no darkness in him at all}, and {light} and {darkness} are two masses. Proverbs 15:3 reads {The eyes of the LORD are everywhere, beholding the evil and the good}, and {evil} and {good} are generalized masses; {the evil} would shift the meaning to a particular evil.

The definite article comes back as soon as the mass is settled: {the water in the glass}, {the life of Christ}.

## Institutions and means of transport

{Go to school} and {go to church} do not mean going to a particular building but using what the institution provides. With the article the sentence changes subject and starts talking about the building: {go to the church} is going to one specific church, the one in sight.

The KJV shows the institution in Mark 1:21, with {And he went into the synagogue on the sabbath days}. The sense of {synagogue} there is the gathered community, not the walls of the prayer house.

{By car}, {by train}, {by post} and {by hand} take neither an article nor an alternative preposition. It is {by} plus the singular noun, and the construction is as automatic as {a} plus a name.

2 Corinthians 5:7 uses the same key with abstract nouns: {we walk by faith, not by sight}. The {by} marks the means, and the means never takes an article.`),
  vocab: [
    V('go to school', 'school', 'to go to school (to study)'),
    V('go to church', 'church', 'to go to church (to worship)'),
    V('go to the church', 'church', 'to go to one specific church'),
    V('go to hospital', 'hospital', 'to go to hospital (to be treated)'),
    V('go to prison', 'prison', 'to go to prison (to be imprisoned)'),
    V('by car', 'car', 'by car'),
    V('by train', 'train', 'by train'),
    V('by hand', 'hand', 'by hand'),
    V('by post', 'post', 'by post'),
    V('by faith', 'faith', 'by faith'),
    V('in general', 'general', 'in general'),
    V('light', 'light', 'light'),
    V('darkness', 'darkness', 'darkness'),
    V('synagogue', 'synagogue', 'synagogue'),
    V('the tongue', 'tongue', 'the tongue'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The article drops in four cases: generic plural, generalized mass, institution used as a function, and by plus means of transport.',
      ),
    },
    {
      n: '2',
      text: T(
        'In the generic plural the noun goes into the plural even when there is a single group: parents, students, children.',
      ),
    },
    {
      n: '3',
      text: T(
        'In the generalized mass no article appears, and the article returns once the mass is settled: water, but the water in the glass.',
      ),
    },
    {
      n: '4',
      text: T(
        'An institution without an article means the function (to study, to worship, to be treated); with the article it means the building.',
      ),
    },
    {
      n: '5',
      text: T(
        'By plus means takes neither article nor alternative preposition: by car, by train, by hand, by faith.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical:'),
      text: T(
        'Proverbs 18:21 has Death and life in the generic plural, 1 John 1:5 has light and darkness as masses, and Mark 1:21 has the institution. Three different cases, and the KJV signals none of them.',
      ),
    },
    {
      label: T('Surplus:'),
      text: T(
        'The school is famous is the building; I go to school is the system. Swapping one for the other changes the subject of the sentence, and it is the commonest confusion after the generic plural.',
      ),
    },
  ],
  examples: [
    { text: '{Teachers are responsible}', gloss: T('teachers are responsible — generic plural') },
    { text: '{Music is a gift from God}', gloss: T('music is a gift from God — generalized mass') },
    { text: '{go to school}', gloss: T('to go to school, that is, to study') },
    { text: '{go to the school}', gloss: T('to go to one specific school') },
    { text: '{sent by post}', gloss: T('sent by post') },
    { text: '{we walk by faith, not by sight}', gloss: T('we walk by faith, not by sight') },
    {
      text: '{Death and life are in the power of the tongue}',
      gloss: T('death and life are in the power of the tongue'),
    },
    {
      text: '{beholding the evil and the good}',
      gloss: T('beholding the evil and the good — generalized masses'),
    },
    { text: '{the water in the glass}', gloss: T('the water in the glass — settled mass') },
    { text: '{he went into the synagogue}', gloss: T('he went into the synagogue — institution') },
  ],
  tables: [
    {
      caption: T('The four zero-article cases'),
      head: [T('Case'), T('Example'), T('Why no article appears')],
      rows: [
        [T('generic plural'), '{Teachers are honest}', T('the plural already says "everyone"')],
        [T('generalized mass'), '{Music is beautiful}', T('the sentence covers the whole field')],
        [T('institution'), '{go to school}', T('the institution, not the building')],
        [T('by + means'), '{by car}', T('means of transport')],
      ],
    },
    {
      caption: T('With article and without'),
      head: [T('With article'), T('Without article'), T('Meaning')],
      rows: [
        ['{go to the church}', '{go to church}', T('building × worship')],
        ['{go to the hospital}', '{go to hospital}', T('building × treatment')],
        ['{go to the prison}', '{go to prison}', T('building × imprisonment')],
        ['{go to the university}', '{go to university}', T('campus × study')],
        ['{by post}', '{by hand}', T('means: neither takes an article')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence uses the article correctly?'),
    options: [
      T('He goes to the school to study'),
      T('He goes to school to study'),
      T('He goes to the schools to study'),
      T('He goes to school to study the school'),
    ],
    answer: 1,
    hint: T('With the sense of studying, school takes no article.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete without an article: 'Music ___ beautiful.'"),
      answer: 'is',
    },
    { kind: 'fill', prompt: T("Complete: 'She travels ___ car.'"), answer: 'by' },
    {
      kind: 'match',
      prompt: T('Match the case to the example.'),
      pairs: [
        { a: T('generic plural'), b: '{Teachers are honest}' },
        { a: T('generalized mass'), b: '{Music is beautiful}' },
        { a: T('institution'), b: '{go to school}' },
        { a: T('by + means'), b: '{by car}' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('In which sentence is the article needed?'),
      options: [
        T('I go to church every Sunday'),
        T('I go to the church on Friday'),
        T('I go to churches every Sunday'),
        T('I go to church in the churches'),
      ],
      answer: 1,
    },
  ],
};
