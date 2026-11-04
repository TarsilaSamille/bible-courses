import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Pronouns and possessives'),
  subtitle: T('εγώ — μου, σου, του'),
  section: T('The noun'),
  body: C(`## The verb already says who

In Greek the subject pronoun is almost always dropped, because the verbal form already carries the person: λέω "I say", λέεις "you say", λέει "he says". Greek shows the pronoun only when the person needs to stand out: **ἐγώ** πολυ ἀγαπῶ "I love very much", in contrast with someone who does not.

The personal pronouns are: ἐγώ, σύ, αὐτός/αὐτή/αὐτό, ἡμεῖς, ὑμεῖς, αὐτοί/αὐτές/αὐτά. In modern Greek, σύ and αὐτός are rare in speech; colloquial uses ένας/μία ("someone") or the verb alone. But in writing and in biblical Greek they all appear.

## Possessives are clitics, not independent words

μου, σου, του, μας, σας, τους are not words: they stick to the end of the preceding word. **το παιδί μου** "my child" — μου sits against the noun. **δώσε μου** "give me" — against the verb. If the following word starts with a vowel, the stress shifts: μου τοῦ παιδίο.

Ancient Greek is different: ἡμῶν, σοῦ, αὐτοῦ, ἡμῶν, ὑμῶν, αὐτῶν are full words, so they can come before the noun — Πάτερ ἡμῶν "Our Father". In modern Greek that construction sounds biblical or liturgical, which is why it shows up in prayer rather than conversation.

## Indirect and direct object

The indirect object uses με, σε, μας, σας: Μου λες την αλήθεια "You tell me the truth". The direct object uses τον, την, το, τους, τις, τα: Βλέπω τον φίλο "I see the friend". Both together: **μου** το δίνεις "you give it to me" — the indirect object (μου) comes before the direct one (το), because the indirect object is clitic and takes the first available slot.

## Reading criterion

If a Greek sentence has an explicit subject pronoun, either the person is in contrast or the verbal form leaves no doubt. If it has a possessive pronoun at the end, that pronoun belongs to the word before it. And if two translations place the pronoun differently, that is clitic order at work, not an error.`),
  vocab: [
    V('εγώ', 'εγώ', 'I'),
    V('εσύ', 'εσύ', 'you'),
    V('μου', 'εγώ', 'my; to me'),
    V('σου', 'εσύ', 'your; to you'),
    V('μας', 'εμείς', 'our; to us'),
    V('του', 'αυτός', 'his; to him'),
    V('τη', 'αυτός', 'the; her'),
    V('με', 'εγώ', 'me; to me'),
    V('εμείς', 'εμείς', 'we'),
    V('εσείς', 'εσείς', 'you (pl.)'),
    V('σας', 'εσείς', 'your; to you (pl.)'),
    V('τους', 'αυτός', 'their; the (masc. pl.)'),
    V('αλήθεια', 'αλήθεια', 'truth'),
    V('φίλος', 'φίλος', 'friend'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Where does μου go?'),
    options: [
      T('before the noun'),
      T('after the noun'),
      T('before the verb'),
      T('only at the end'),
    ],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('___ γυναίκα'), answer: 'μου', hint: T(' possessive of εγώ') },
    {
      kind: 'choose',
      prompt: T('Complete: ___ tells the truth.'),
      options: [T('μου'), T('σε'), T('τον'), T('τη')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match pronoun and person'),
      pairs: [
        { a: 'εγώ', b: '1ª sg.' },
        { a: 'εσείς', b: '2ª pl.' },
        { a: 'αυτός', b: '3ª sg.' },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('The possessive follows the noun in ordinary modern use.') }],
  notes: [
    {
      label: T('Register'),
      text: T('Πάτερ ημών is solemn or prayer register, not the everyday form.'),
    },
  ],
  examples: [
    { text: 'ο πατέρας μου', gloss: T('my father') },
    { text: 'σε αγαπώ', gloss: T('I love you') },
  ],
  tables: [
    {
      caption: T('Pronouns'),
      head: ['Singular', 'Plural'],
      rows: [
        ['αυτός/αυτή/αυτό', 'αυτοί/αυτές/αυτά'],
        ['του/της/τους', 'τους/των/τους'],
      ],
    },
  ],
};
