import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('The verb'),
  title: T('The essential verbs'),
  subtitle: T(
    '{go}, {come}, {be}, {have}, {do}, {say} and the fourteen that resolve almost everything',
  ),
  body: C(`## Twenty verbs, three columns each

A regular verb has a single rule: in the past it takes {-ed}, and that is all of it. {work}, {worked}, {worked}; {love}, {loved}, {loved}; {open}, {opened}, {opened}. The irregular breaks the rule in both columns at once, which is why {eat}, {ate}, {eaten} is deduced from nothing.

The number is small and the weight is large. {be}, {have}, {do}, {go}, {come}, {say}, {get}, {make}, {know}, {think}, {take}, {see}, {give}, {find}, {tell}, {become}, {leave}, {feel}, {put} and {bring} cover more than half the verbs that show up in a chapter of a Gospel in English. Anyone who knows the twenty recognizes the rest from context, even without knowing the form.

What differs from language to language is what gets kept. Portuguese keeps the infinitive, the preterite and the participle, and almost every irregular uses the same root in all three: {falei}, {falado}, {parti}, {partido}, {vi}, {visto}. English keeps the present, the past and the participle, and with the irregulars the past and the participle are usually **two different words**: {go}, {went}, {gone}; {eat}, {ate}, {eaten}; {see}, {saw}, {seen}.

## {Be}: the verb with no steady shape

{Be} is the only English verb that changes shape in the present according to person: {I am}, {you are}, {he is}, {we are}, {they are}. Portuguese handles the same thing with {sou}, {és}, {é}, {somos}, {são}, and Greek with {εἰμί}, which is one form for every person. Three solutions to the same problem, and English is the only one that repeats the word.

In the past there are two: {I was}, {he was}, {they were}. In the participle, one: {been}, plus the gerund {being}. Five forms for one verb, and none of them looks like the present ones: {am}, {is}, {are}, {was}, {were}, {been}, {being}.

The mistake that biblical text provokes is {be} against {become}. John 1:14 says {the Word became flesh}, and the Greek is {ὁ λόγος σὰρξ ἐγένετο}, the aorist of {γίνομαι}, which is {become}. To render it as {was} keeps the simple shape and erases the verb that says something came to exist. {Was} and {became} are not synonyms in English, even though the Portuguese rule makes them look like it.

## Two columns, not one

The past and the participle of the irregulars are **two separate columns**, and they do not always match. When they do, the same word serves both: {come}, {came}, {come}; {do}, {did}, {done}; {say}, {said}, {said}. When they do not, there are two words: {write}, {wrote}, {written}; {break}, {broke}, {broken}; {choose}, {chose}, {chosen}; {sing}, {sang}, {sung}.

It is the participle column that a reader almost never has at hand. In {has eaten}, {gone}, {written}, {seen} and {taken}, the pasts {ate}, {went}, {wrote}, {saw} and {took} are better known, and anyone who swaps them writes {has ate}, {has went}, {has saw}. The participle governs the compound tenses, and it is what shows up most in the text.

## {Say}, {tell}, {speak}, {talk}: four verbs that Portuguese joins into two

{say} is what is put into words, {tell} is what is put to somebody: {he said} and {he told Mary}. {speak} is the act of speaking, and {talk} is the conversation, which can be between two people or with one's own language: {he spoke to the crowd}, {he talked with her}.

{say} and {tell} are the pair that {falar} and {dizer} make in Portuguese, but inverted: in Portuguese {dizer} serves both ({disse} and {contou}), and in English they are two verbs. In the biblical text this shows up in Mark 1:30, where {told} and {said} render the same Greek verb, {ἀπήγγειλαν}, and the translation has to choose.

## In the Bible

KJV is the translation that suffers most from that choice, because it uses one English word for each Greek verb. Mark 4:39 has {Peace, be still}, and the Greek is {Σιωπήσον καὶ γαλάσσου}; in John 1:1, {In the beginning was the Word} has {was} for {ἦν}; in John 1:14, {the Word became flesh} has {became} for {ἐγένετο}. Three different Greek verbs, three different English words, and that correspondence is what the reader has to see.`),
  vocab: [
    V('be', 'be', 'to be'),
    V('am', 'be', 'I am'),
    V('is', 'be', 'he is'),
    V('were', 'be', 'we were'),
    V('been', 'be', 'been'),
    V('being', 'be', 'being'),
    V('go', 'go', 'to go'),
    V('went', 'go', 'went'),
    V('gone', 'go', 'gone'),
    V('come', 'come', 'to come'),
    V('came', 'come', 'came'),
    V('have', 'have', 'to have'),
    V('has', 'have', 'he has'),
    V('had', 'have', 'he had'),
    V('do', 'do', 'to do'),
    V('did', 'do', 'did'),
    V('done', 'do', 'done'),
    V('say', 'say', 'to say'),
    V('eat', 'eat', 'to eat'),
    V('ate', 'eat', 'ate'),
    V('eaten', 'eat', 'eaten'),
    V('was', 'be', 'he was'),
    V('became', 'become', 'became'),
    V('tell', 'tell', 'to tell somebody'),
    V('told', 'tell', 'told'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'With the irregulars the past and the participle are two columns, and they are not always the same word: {go}, {went}, {gone}; {eat}, {ate}, {eaten}; {write}, {wrote}, {written}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{be} has seven forms: {am}, {is}, {are}, {was}, {were}, {been}, {being}. No other English verb changes shape in the present according to person.',
      ),
    },
    {
      n: '§3',
      text: T(
        'After {does} and {did} the verb returns to its base form: {he does go}, never {he does goes}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'After a modal the verb does not inflect: {can go}, {must go}, {will go}, {should go}. {goes} is impossible there.',
      ),
    },
    {
      n: '§5',
      text: T(
        'John 1:1 has {was} for {ἦν} and John 1:14 has {became} for {ἐγένετο}. They are different Greek verbs and different English words; {was} and {became} are not synonyms.',
      ),
    },
  ],
  notes: [
    {
      label: T('The participle nobody has at hand'),
      text: T(
        'The irregular pasts {ate}, {went}, {wrote}, {saw} and {took} are the better known, and the participles {eaten}, {gone}, {written}, {seen} and {taken} are what show up in the compound tenses. Swapping them produces {has ate} and {has went}, which a reader spots as wrong even without knowing the rule.',
      ),
    },
    {
      label: T('What the KJV loses'),
      text: T(
        'Mark 4:39 has {Peace, be still}, and the Greek is {Σιωπήσον καὶ γαλάσσου}, with {σιωπήσον} in the aorist imperative. The KJV lost the aorist and so did Old Portuguese; anyone reading the Greek knows the verb asks for immediate obedience and not for an atmosphere of calm.',
      ),
    },
  ],
  examples: [
    {
      text: 'In the beginning was the Word.',
      gloss: T('{was}: {be} in the past, rendering {ἦν} from the Greek.'),
    },
    {
      text: 'And the Word became flesh.',
      gloss: T('{became}: {become}, rendering {ἐγένετο}, a different Greek verb.'),
    },
    {
      text: 'He has eaten the bread.',
      gloss: T('{has eaten}: present perfect with {has} and the participle.'),
    },
    {
      text: 'They have gone to the mountain.',
      gloss: T('{gone} is the participle; the matching past would be {went}.'),
    },
    { text: 'Peace, be still!', gloss: T('Imperative of {be}, Mark 4:39.') },
    { text: 'He told Mary everything.', gloss: T('{told} of {tell}: what is said to somebody.') },
    { text: 'He said nothing.', gloss: T('{said} of {say}: what is put into words.') },
    {
      text: 'She does not go there.',
      gloss: T('After {does}, the verb goes back to the base form {go}.'),
    },
    {
      text: 'They must go.',
      gloss: T('After a modal the verb does not inflect: {go}, never {goes}.'),
    },
    {
      text: 'I have written the letter.',
      gloss: T('{written}: the participle of {write}, and not {wrote}.'),
    },
  ],
  tables: [
    {
      caption: T('The essential verbs in three columns'),
      head: [T('Base'), T('Past'), T('Participle'), T('Portuguese')],
      rows: [
        [T('{be}'), T('{was}'), T('{been}'), T('{ser / estar}')],
        [T('{go}'), T('{went}'), T('{gone}'), T('{ir}')],
        [T('{come}'), T('{came}'), T('{come}'), T('{vir}')],
        [T('{have}'), T('{had}'), T('{had}'), T('{ter}')],
        [T('{do}'), T('{did}'), T('{done}'), T('{fazer}')],
        [T('{say}'), T('{said}'), T('{said}'), T('{dizer}')],
        [T('{see}'), T('{saw}'), T('{seen}'), T('{ver}')],
        [T('{take}'), T('{took}'), T('{taken}'), T('{tomar}')],
        [T('{give}'), T('{gave}'), T('{given}'), T('{dar}')],
        [T('{eat}'), T('{ate}'), T('{eaten}'), T('{comer}')],
        [T('{write}'), T('{wrote}'), T('{written}'), T('{escrever}')],
        [T('{break}'), T('{broke}'), T('{broken}'), T('{quebrar}')],
      ],
    },
    {
      caption: T('{Be} in all of its forms'),
      head: [T('Tense'), T('Form'), T('Person'), T('Example')],
      rows: [
        [T('present'), T('{am}'), T('{I}'), T('{I am}')],
        [T('present'), T('{are}'), T('{you / we / they}'), T('{they are}')],
        [T('present'), T('{is}'), T('{he / she}'), T('{he is}')],
        [T('past'), T('{was}'), T('{I / he / she / it}'), T('{he was}')],
        [T('past'), T('{were}'), T('{you / we / they}'), T('{they were}')],
        [T('participle'), T('{been}'), T('—'), T('{has been}')],
        [T('gerund'), T('{being}'), T('—'), T('{is being made}')],
      ],
    },
    {
      caption: T('Four verbs that Portuguese joins into two'),
      head: [T('Verb'), T('What it means'), T('Sentence'), T('Portuguese')],
      rows: [
        [T('{say}'), T('to put into words'), T('{he said}'), T('{disse}')],
        [T('{tell}'), T('to tell somebody'), T('{he told her}'), T('{contou a ela}')],
        [T('{speak}'), T('to speak, with an official tone'), T('{he spoke}'), T('{falou}')],
        [T('{talk}'), T('to converse'), T('{he talked}'), T('{conversou}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "they have __ the bread", which form of {eat}?'),
    options: [T('eat'), T('ate'), T('eaten'), T('eats')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('The participle of {write} is ______, and the past is {wrote}.'),
      answer: 'written',
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its form in the third column.'),
      pairs: [
        { a: T('{see}'), b: T('{seen}') },
        { a: T('{take}'), b: T('{taken}') },
        { a: T('{go}'), b: T('{gone}') },
        { a: T('{give}'), b: T('{given}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In "he ___ go every day", which verb completes it correctly?'),
      options: [T('do'), T('does'), T('did'), T('doing')],
      answer: 1,
    },
  ],
};
