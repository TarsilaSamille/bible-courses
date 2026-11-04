import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('Syntax and translation'),
  title: T('The Russian translations and what they decide'),
  subtitle: T('было and стало in the same chapter: the choice of verb changes the verse'),
  body: C(`
## A translation is a choice of verb

Every translation chooses a verb, and choosing a verb in Russian means choosing an aspect. There is no neutral translation of a Greek verb into a Russian one, because Greek has a single aorist shape and Russian has two, and each of them says something different.

The cleanest example sits inside a single chapter. John 1:1 says **В начале было Слово**, and John 1:14 says **И Слово стало плотию**. The same infinitive, in two clauses of the same text, with two different Russian verbs. Было is the verb of state: the Word was. Стало is the perfective of becoming: the Word became.

If a translator had written стало in 1:1, the verse would go on to say that the Word was created rather than that it was. If he had written было in 1:14, the verse would say that the Word was flesh rather than that it became flesh. **Neither reading is absurd, and they are theologically different.** The translator's choice is not stylistic: it is an assertion about what happened.

And that is why Russian translations differ on the first line of John. Where the Synodal writes начало быть, an older translation may write стать without the perfective, and where another writes сотворено, a third writes создано. A reader with two Russian translations in hand is holding two other texts, not the same text twice.

## The word Greek resolves and Russian does not

Ancient Greek has a particle that Russian renders with a whole word, and that word needs a verb. Οὐκ ἔστιν, in John 3:16 and elsewhere, is a negation that in Greek is a particle in front of the verb. Russian settles it with нет, which is a verb, and which therefore needs a case: нет Бога, there is no God, with the genitive.

The consequence is that a piece of Greek with no verb in Russian turns into a verb in Russian, and the new verb brings case, number and aspect that the Greek did not bring. Οὐκ ἔστιν does not say of whom the absence is, and the Russian genitive is a decision of the translator.

The same happens with the Greek relative of verse 12: ὅσοι δὲ ἔλαβον αὐτόν, as many as received. The Greek word is a relative pronoun with no case marked in the text. Russian writes которые, which needs a case, and the translation needs to know which. A reader who does not know reads которые приняли as the object and reverses the sense of the verse.

## What changes between translations, and what to do when they differ

A translation into Portuguese loses the aspect most of the time, because Portuguese does not have the pair. But the loss is not symmetrical: the perfective usually survives better than the imperfective, because the perfective has a home in the preterite and the imperfective has nowhere to go.

The result is an asymmetry worth knowing. Point actions stay visible in the Portuguese text, and processes disappear. John 1:5 is the example: светит is imperfective and becomes a present, and the Greek had a present. A reader of the Portuguese translation has the impression that the verse says nothing about how long the light shines, and the Russian original does say it, and the Greek said it.

The reverse also happens and produces errors of the other kind. Было in 1:1 is a verb with no aspect that becomes "was" in Portuguese, and было does not say whether the situation lasted. A translator who writes "existed" suggests an enduring state that the original does not assert.

Four steps, and the first three do not require Greek.

First: compare the endings. If one translation has Слово было and the other has Слово было Бог, the difference is of case and not of meaning. Second: look for the perfective in the shape of the verb. Стало against было is a decision of aspect, and it is visible without knowing Greek. Third: see whether the negation changed verb. If one translation has нет and the other has не, they are sentences of different categories.

Fourth, and it is the hardest: ask the Greek original about the verb only, not about the whole sentence. Anyone who reads Greek well enough to identify an aorist already knows whether the translation kept the aspect, and the question is a single one. Anyone who does not read Greek can ask someone who does, and the answer fits in five words.

## The hook: one word, two verses, two theologies

The best Russian reading exercise that exists is two translations of the same verse side by side. If the two differ in a verb, the difference is theological and not stylistic. If they differ in a case, the difference is grammatical, and a Russian reader can settle on their own which of the two is right.

And the reverse is worth stating: a Russian text in which every verb comes from the same aspect family has lost the information the Greek had. A translator who writes only perfectives where the original alternated made a choice, and the reader loses the distinction between what lasts and what happens.

The Russian Synodal of 1876 is a translation that respects aspect most of the time, and that is why it is still the reference. But no translation is the Greek, and the distance between them is the honest measure of what a translation does: it does not reproduce the text, it **decides which text you are reading.**
`),
  vocab: [
    V('В начале было Слово', 'быть', 'in the beginning was the Word; state (John 1:1)'),
    V('И Слово стало плотию', 'стать', 'and the Word became flesh; change (John 1:14)'),
    V('начало быть', 'начать', 'began to be; the formula of 1:3'),
    V('сотворено', 'сотворить', 'was created; perfective participle'),
    V('создано', 'создать', 'was created; another choice of perfective'),
    V('нет Бога', 'нет', 'there is no God; a negative verb with the genitive'),
    V('не было Бога', 'быть', 'there was no God; verbal negation, no new case'),
    V('которые приняли', 'который', 'those who received; relative in the nominative'),
    V('светит', 'светить', 'shines; imperfective of duration'),
    V('обитало', 'обитать', 'remained; imperfective of state'),
    V('явил', 'явить', 'manifested; the closing perfective'),
    V('перевод', 'перевод', 'translation'),
    V('аспект', 'аспект', 'aspect'),
    V('синодальный', 'синодальный', 'Synodal; of the 1876 translation'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('If a translator writes стало in John 1:1, what changes?'),
    options: [
      T('The tense of the verb'),
      T('The aspect: from state to change'),
      T('The case of the preposition'),
    ],
    answer: 1,
    hint: T(
      'Стало is the perfective of becoming. Swapping было for стало changes what the verse asserts, not merely how it reads.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete John 1:1: В начале ___ Слово'), answer: 'было' },
    {
      kind: 'choose',
      prompt: T('Which word is the perfective of becoming?'),
      options: [T('было'), T('стало'), T('обитало')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: ___ Бога (there is no God)'), answer: 'нет' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Every translation chooses a verb, and choosing a verb in Russian means choosing an aspect.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Было} and {стало} are the same infinitive with different verbs, and the difference between them is an assertion about what happened.',
      ),
    },
    {
      n: '3',
      text: T('{Нет} is a verb and needs a case; οὐκ ἔστιν is a particle and needs none.'),
    },
    {
      n: '4',
      text: T(
        'A translator into a language with no aspect loses the imperfective first, and not the perfective.',
      ),
    },
    {
      n: '5',
      text: T(
        'Two translations that differ in a verb differ theologically; two that differ in a case differ grammatically.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why the perfective survives better'),
      text: T(
        'Portuguese has no aspect pair, and what is missing is the imperfective. The perfective has a place in the preterite, so it survives; the imperfective has nowhere to go, and disappears. The consequence is an asymmetry you can measure: how many times a Portuguese translation has a verb of state where Russian has an imperfective of duration. John 1:5 is the most visible case, and the impression that the verse says nothing about the length of the light comes from there and not from the Greek.',
      ),
    },
    {
      label: T('The Greek that becomes a verb in Russian'),
      text: T(
        "οὐκ ἔστιν is a negative particle plus a verb, and Russian has no construction that does that in two words. The translator writes нет, which is a verb, and the verb brings a genitive. That genitive is not in the Greek, and it is the translator's decision. The same holds for the relatives: ὅσοι has no marked case, and the Russian который needs one. Those are two places where Russian makes the translator decide more than Greek did.",
      ),
    },
  ],
  examples: [
    { text: 'В начале было Слово', gloss: T('in the beginning was the Word; state, no change') },
    { text: 'И Слово стало плотию', gloss: T('and the Word became flesh; change, with a result') },
    { text: 'начало быть', gloss: T('began to be; the formula of 1:3') },
    { text: 'сотворено', gloss: T('was created; participle of a perfective') },
    { text: 'создано', gloss: T('was created; another choice of perfective') },
    { text: 'нет Бога', gloss: T('there is no God; a verb that needs the genitive') },
    { text: 'не было Бога', gloss: T('there was no God; verbal negation, no new case') },
    { text: 'которые приняли Его', gloss: T('those who received him; the relative is nominative') },
    {
      text: 'И свет во тьме светит',
      gloss: T('and the light shines in the darkness; imperfective of duration'),
    },
    { text: 'Он явил', gloss: T('he was manifested; the perfective that closes the text') },
  ],
  tables: [
    {
      caption: T('The same semantic field, three Russian verbs'),
      head: [T('Verb'), T('Aspect'), T('What it asserts'), T('Where it appears')],
      rows: [
        [T('быть'), T('no aspect'), T('a state'), T('1:1, 1:2, 1:4')],
        [T('стать'), T('perfective'), T('a change of state'), T('1:14')],
        [T('начало быть'), T('compound perfect'), T('the beginning of a process'), T('1:3')],
      ],
    },
    {
      caption: T('What each translation has to decide'),
      head: [T('Greek phenomenon'), T('What Russian does'), T('What the translator decides')],
      rows: [
        [
          T('οὐκ ἔστιν'),
          T('it becomes нет, which is a verb'),
          T('which case goes into the genitive'),
        ],
        [
          T('ὅσοι ἔλαβον'),
          T('it becomes которые, which needs a case'),
          T('whether it is subject or object'),
        ],
        [T('aorist'), T('it becomes one of the two of the pair'), T('which member of the pair')],
        [T('participle'), T('it inherits the aspect of its verb'), T('which perfective it used')],
      ],
    },
    {
      caption: T('The asymmetry of losing aspect'),
      head: [T('What is lost first'), T('Why'), T('How you notice')],
      rows: [
        [
          T('the imperfective'),
          T('Portuguese has no place for it'),
          T('светит becomes a present with no duration'),
        ],
        [
          T('the perfective'),
          T('it has a place in the preterite'),
          T('стало becomes an ordinary preterite'),
        ],
        [
          T('the value of бы'),
          T('Portuguese has no such particle'),
          T('the whole hypothesis disappears'),
        ],
        [
          T('the gerund'),
          T('Portuguese has very few'),
          T('the duration of the main action is lost'),
        ],
      ],
    },
  ],
};
