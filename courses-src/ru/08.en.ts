import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('The six cases'),
  subtitle: T('genitive — dative — instrumental — prepositional'),
  section: T('The cases'),
  body: C(
    'Russian declension marks syntactic relations. The genitive expresses possession or origin: слово Бога, “God’s word”; after нет, “there is no”: нет хлеба. The dative marks a recipient or interest: Богу, “to God”; Бога благослови, “bless God”. The instrumental expresses means, accompaniment, location in some fixed uses, and time: с Богом, “with God”; утром, “in the morning”. The prepositional case occurs with a preposition: в начале, “in the beginning”; о Боге, “about God”. When a noun ends in -о or -е, the prepositional form may add -м: о Боге, but о слове. The instrumental plural of nouns ending in -а/-я is -ами/-ями: делами. Genitive and accusative singular coincide for masculine animate nouns. Parenthetical functions are clues, not universal translations.',
  ),
  vocab: [
    V('Богу', 'бог', 'to God; dative'),
    V('Богом', 'бог', 'with God; instrumental'),
    V('о Боге', 'бог', 'about God; prepositional'),
    V('мне', 'я', 'to me; dative of я'),
    V('тебе', 'ты', 'to you; dative of ты'),
    V('Отче', 'отец', 'O Father; vocative'),
    V('нет хлеба', 'нет', 'there is no bread; the negative asks for the genitive'),
    V('хлеба', 'хлеб', 'bread; genitive singular'),
    V('утром', 'утро', 'in the morning; instrumental'),
    V('врачом', 'врач', 'doctor; instrumental'),
    V('о слове', 'слово', 'about the word; prepositional'),
    V('словами', 'слово', 'with words; instrumental plural'),
    V('к Богу', 'бог', 'to God; к governs the dative'),
    V('с неба', 'небо', 'from heaven; с governs the genitive here'),
    V('у Бога', 'бог', 'by God; у governs the genitive'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which case occurs in с Богом?'),
    options: [T('Dative'), T('Instrumental'), T('Genitive')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete the instrumental: кн…'), answer: 'ы' },
    { kind: 'fill', prompt: T('Complete: о Б…'), answer: 'оге' },
    {
      kind: 'choose',
      prompt: T('Which case follows нет?'),
      options: [T('Nominative'), T('Genitive'), T('Instrumental')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('The genitive marks possession and absence: {слово Бога} and {нет хлеба}.') },
    {
      n: '2',
      text: T(
        'The dative marks the recipient: in {Бога благослови} it is the one blessed that is dative, not the one blessing.',
      ),
    },
    {
      n: '3',
      text: T('The instrumental marks means, company and time: {с Богом}, {утром}, {быть врачом}.'),
    },
    {
      n: '4',
      text: T(
        'The prepositional never appears alone: {о Боге} and {о слове} both need the preposition that governs them.',
      ),
    },
    {
      n: '5',
      text: T(
        'The pair that gets confused is {Бога} genitive against {Бога} accusative, and only the verb separates them.',
      ),
    },
  ],
  notes: [
    {
      label: T('One form, two cases'),
      text: T(
        'Genitive and accusative coincide in the animate masculine singular, which is why {Бога} can be “of God” or “God” as an object. Context decides, and the ending alone does not say.',
      ),
    },
    {
      label: T('The instrumental that looks like a preposition'),
      text: T(
        '{с} before {Богом} means “with”, and before {неба} it means “from”. The difference lies neither in {с} nor in the noun but in what the word names: a person asks for company, an origin asks for provenance.',
      ),
    },
  ],
  examples: [
    { text: 'слово Бога', gloss: T('the word of God; possessive genitive') },
    { text: 'нет хлеба', gloss: T('there is no bread; {нет} asks for the genitive') },
    { text: 'Бога благослови', gloss: T('bless God; the one blessed is dative') },
    { text: 'с Богом', gloss: T('with God; instrumental of company') },
    { text: 'говорим о Боге', gloss: T('we speak about God; prepositional') },
    { text: 'о слове', gloss: T('about the word; the prepositional never goes alone') },
    {
      text: 'Я даю книгу другу',
      gloss: T('I give the book to my friend; the book is accusative and the friend dative'),
    },
    { text: 'Он был врачом', gloss: T('he was a doctor; profession in the instrumental') },
    { text: 'утром', gloss: T('in the morning; time in the instrumental') },
    { text: 'к Богу', gloss: T('to God; {к} governs the dative') },
  ],
  tables: [
    {
      caption: T('The six cases and the question each one answers'),
      head: [T('Case'), T('Question'), T('Typical marker'), T('Example')],
      rows: [
        [T('nominative'), T('who does it?'), T('none'), T('Бог')],
        [T('genitive'), T('of whom, of what?'), T('нет, у, от, до'), T('слово Бога')],
        [T('dative'), T('to whom?'), T('к, помогать'), T('Бога благослови')],
        [T('accusative'), T('what?'), T('transitive verb'), T('вижу Бога')],
        [T('instrumental'), T('with what, by what means?'), T('с, быть, заниматься'), T('с Богом')],
        [T('prepositional'), T('where, about what?'), T('в, на, о'), T('о Боге')],
      ],
    },
    {
      caption: T('One preposition, different cases'),
      head: [T('Preposition'), T('Sense'), T('Case'), T('Example'), T('Gloss')],
      rows: [
        [T('в'), T('static place'), T('prepositional'), T('в начале'), T('in the beginning')],
        [T('в'), T('motion inwards'), T('accusative'), T('в храм'), T('into the temple')],
        [T('на'), T('place or domain'), T('prepositional'), T('на небе'), T('in heaven')],
        [T('на'), T('surface, direction'), T('accusative'), T('на стену'), T('onto the wall')],
        [T('с'), T('company'), T('instrumental'), T('с Богом'), T('with God')],
        [T('с'), T('origin'), T('genitive'), T('с неба'), T('from heaven')],
      ],
    },
    {
      caption: T('The pairs that get confused'),
      head: [T('Shape'), T('Can be'), T('Decided by'), T('What tells them apart')],
      rows: [
        [
          T('Бога'),
          T('genitive and accusative'),
          T('the verb'),
          T('слово Бога is possession; вижу Бога is an object'),
        ],
        [
          T('о слове'),
          T('prepositional, never alone'),
          T('the preposition'),
          T('without {о} is an error'),
        ],
        [
          T('с неба'),
          T('genitive, never instrumental'),
          T('the sense'),
          T('с русским is instrumental'),
        ],
        [
          T('два слова'),
          T('plural and genitive singular'),
          T('the numeral'),
          T('пять слов is plural'),
        ],
      ],
    },
  ],
};
