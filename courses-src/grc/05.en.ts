import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  section: T('The verb'),
  title: T('The essential verbs'),
  subtitle: T('ἔρχομαι, εἰμί, λέγω, ἐσθίω: the roots that hold the NT together'),
  body: C(`## Six verbs no grammar argues with

The New Testament rests on half a dozen verbs. {ἔρχομαι} "to come, go", {εἰμί} "to be", {γίνομαι} "to become, happen", {λέγω} "to say", {ἀκούω} "to hear" and {ἐσθίω} "to eat" appear in almost every verse, and none of them has a regular conjugation.

The difficulty of each is different. {εἰμί} does not follow the {-ω} paradigm: in the present it makes {εἰμί}, {εἶ}, {ἐστίν}, {ἐσμέν}, {ἐστέ}, {εἰσίν}, and in the imperfect {ἤμην}, {ἦς}, {ἦν}. It is the verb that closes the identity of things.

{ἔρχομαι} is deponent — it has only a middle — and changes its stem with the tense: present {ἔρχομαι}, imperfect {ἠρχόμην}, future {ἐλεύσομαι}, aorist {ἦλθον}. Three stems in one verb, and the aorist shares no letter with the present.

{γίνομαι} is the most treacherous: it looks like {γίνομαι}, is deponent, is the root of {γένους}, and yet the aorist comes out as {ἐγενόμην}. The sense of "happen" emerges from the same verb that makes "become": {ἐγένετο} answers both "he became" and "it happened".

## εἰμί and ἔχω: to be and to have

The Greek of the NT still has {εἰμί} where Hebrew uses {הָיָה}, and the parallel is exact: {ἦν} "was", as in John 1:1. But where Hebrew still has no verb "to have", Greek gained one: {ἔχω}. The translator who reads {ἔχω} as "have" loses the verb that says "be with", "possess" and "carry".

{λέγω} and {ἐσθίω} are the same story in different degrees. Both change stem in the compound tenses: {εἶπον}, {ἐφάγον}, {φάγω}. What Portuguese keeps in the same infinitive ({dizer}, {comer}), Greek expresses with three pieces that are memorized separately.

## Aorist, perfect, and what translation loses

{ἐσθίω} in the aorist is {ἐφάγον} — the finished "I ate". But the perfect changes everything: {ἐδήδοκα} carries the state of what has been eaten. In the bread dialogue of John 6, {ἐσθίει} and its derivatives continue the imperfective aspect.

The distinction between {ἦλθον} and {ἐλήλυθα} says the same as "I came" and "I have been coming": one marks the event, the other the present state that comes from it. The reader who only uses the infinitive to look up the lexicon loses exactly that note.

## In the Bible

John 1:1 makes two verbs in five words: {Ἐν ἀρχῇ ἦν ὁ λόγος}. {ἦν} is the imperfect of {εἰμί} — the scene already given before the point of observation. And John 1:3 closes with {ἐγένετο}, {γίνομαι} again in the aorist, to mark the creation that was made. The Greek that begins with {ἦν} ends with {ἐγένετο}: the Word already was, and everything else happened.

Mark 4:39 has {πεφίμωσο}, "be muzzled": it is the passive form of the aorist of {φιμόω}, "to muzzle". The whole verse shows the method: Greek places Jesus' command in the passive to say that the sea does not answer the command, but to Christ.`),
  vocab: [
    V('ἔρχομαι', 'ἔρχομαι', 'to come, go (pres. deponent)'),
    V('ἦλθον', 'ἔρχομαι', 'came (aorist)'),
    V('εἰμί', 'εἰμί', 'to be'),
    V('ἦν', 'εἰμί', 'was'),
    V('γίνομαι', 'γίνομαι', 'to become'),
    V('ἐγένετο', 'γίνομαι', 'happened'),
    V('λέγω', 'λέγω', 'to say'),
    V('εἶπον', 'λέγω', 'said (aorist)'),
    V('ἐσθίω', 'ἐσθίω', 'to eat'),
    V('ἐφάγον', 'ἐσθίω', 'ate (aorist)'),
    V('ἔχω', 'ἔχω', 'to have'),
    V('ἀκούω', 'ἀκούω', 'to hear'),
    V('ἤκουσα', 'ἀκούω', 'heard (aorist)'),
    V('βλέπω', 'βλέπω', 'to see'),
    V('εἶδον', 'βλέπω', 'saw (aorist)'),
    V('δίδωμι', 'δίδωμι', 'to give'),
    V('ἔδωκα', 'δίδωμι', 'gave (aorist)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{εἰμί} does not conjugate in {-ω}: present {εἰμί} — {εἶ} — {ἐστίν}; imperfect {ἤμην} — {ἦς} — {ἦν}. It is memorizing, not deducing.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Deponent verbs have no active voice, but receive middle forms: {γίνομαι}, {ἔρχομαι}, {ἀποκρίνομαι}. The aorist of {ἔρχομαι} is {ἦλθον}, and does not derive from the present.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The aorist of {ἐσθίω} is {ἐφάγον}, of {λέγω} is {εἶπον}, of {βλέπω} is {εἶδον}: three separate stems, three notes, one verb.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{ἦν} and {ἐγένετο} are not interchangeable: {ἦν} is scene (John 1:1), {ἐγένετο} is what happened at point X (John 1:3).',
      ),
    },
    {
      n: '§5',
      text: T(
        'The Greek of the NT has no common verb "to have"; {ἔχω} covers "have", "possess" and "be with". In John 15:4 {ἔχω} tells the branch that it bears no fruit.',
      ),
    },
  ],
  notes: [
    {
      label: T('The aorist that looks like a future'),
      text: T(
        '{ἐλεύσομαι} is the future of {ἔρχομαι}, but the present {ἔρχομαι} and the aorist {ἦλθον} share no stem. Whoever memorizes only the infinitive does not recognize the verb in the text.',
      ),
    },
    {
      label: T('The being that does not go like Latin'),
      text: T(
        'Greek says {ἦν οὖν ψυχή} "the soul was", where Latin/Portuguese struggles with {fuit anima}: {ἦν} describes the state that aggregates to the historical. When {ἐγένετο} replaces {ἦν} in the same verse, the clause starts narrating creation.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ἐν ἀρχῇ ἦν ὁ λόγος',
      gloss: T(
        'Jn 1:1 — {ἦν} is the imperfect of {εἰμί}: the Word already was before the discourse.',
      ),
    },
    {
      text: 'καὶ θεὸς ἦν ὁ λόγος',
      gloss: T('Jn 1:1 — {ἦν} without article defends a nominal predicate: the Word was God.'),
    },
    {
      text: 'πάντα δι᾽ αὐτοῦ ἐγένετο',
      gloss: T('Jn 1:3 — {ἐγένετο} of {γίνομαι}: all things came to be.'),
    },
    {
      text: 'ἔφαγεν ὁ λαός',
      gloss: T('Ex 16:35 LXX — {ἔφαγεν} is the aorist of {ἐσθίω}: the manna was eaten.'),
    },
    {
      text: 'ἦλθον οὖν μαθηταὶ αὐτοῦ',
      gloss: T('Jn 4:8 — {ἦλθον} is the aorist of {ἔρχομαι}: they came.'),
    },
    {
      text: 'οὕτως αἰεὶ λεγόμενα',
      gloss: T('middle participle of {λέγω}: the things always said.'),
    },
    {
      text: 'ἀκούσῃ ὃν ἐγὼ ἀκούω',
      gloss: T('active future of {ἀκούω}: you will hear what I hear.'),
    },
    {
      text: 'ἐδήδοκες φάγεσαι',
      gloss: T('perfect + future of {ἐσθίω}: what has been eaten becomes the future food.'),
    },
    { text: 'ἔδωκεν αὐτοῖς', gloss: T('aorist of {δίδωμι}: he gave to them.') },
  ],
  tables: [
    {
      caption: T('The imperfect of εἰμί — the verb with no -ω'),
      head: [T('Person'), T('Present'), T('Imperfect'), T('Future')],
      rows: [
        [T('1s'), T('{εἰμί}'), T('{ἤμην}'), T('{ἔσομαι}')],
        [T('2s'), T('{εἶ}'), T('{ἦς}'), T('{ἔσῃ}')],
        [T('3s'), T('{ἐστί(ν)}'), T('{ἦν}'), T('{ἔσται}')],
        [T('1p'), T('{ἐσμέν}'), T('{ἦμεν}'), T('{ἐσόμεθα}')],
        [T('2p'), T('{ἐστέ}'), T('{ἦτε}'), T('{ἔσεσθε}')],
        [T('3p'), T('{εἰσί(ν)}'), T('{ἦσαν}'), T('{ἔσονται}')],
      ],
    },
    {
      caption: T('The strong aorists of NT deponents'),
      head: [T('Verb'), T('Aorist'), T('Future'), T('Note')],
      rows: [
        [T('{ἔρχομαι}'), T('{ἦλθον}'), T('{ἐλεύσομαι}'), T('new stem')],
        [T('{γίνομαι}'), T('{ἐγενόμην}'), T('{γενήσομαι}'), T('loses the present')],
        [T('{ἀποκρίνομαι}'), T('{ἀπεκρινάμην}'), T('{ἀποκριθήσομαι}'), T('answer to a question')],
        [T('{φοβέομαι}'), T('{ἐφοβήθην}'), T('{φοβηθήσομαι}'), T('common passive aorist')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Ἐν ἀρχῇ ἦν ὁ λόγος}, what is the tense and number of {ἦν}?'),
    options: [
      T('Aorist, 1st singular'),
      T('Imperfect, 3rd singular'),
      T('Perfect, 3rd plural'),
      T('Present, 3rd singular'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "πάντα δι᾽ αὐτοῦ ___" with the aorist of {γίνομαι} for "happened".'),
      answer: 'ἐγένετο',
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its aorist.'),
      pairs: [
        { a: T('{ἔρχομαι}'), b: T('{ἦλθον}') },
        { a: T('{ἐσθίω}'), b: T('{ἐφάγον}') },
        { a: T('{εἰμί}'), b: T('{ἤμην}') },
        { a: T('{γίνομαι}'), b: T('{ἐγενόμην}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('What is the aorist of {λέγω}?'),
      options: [T('{ἐλέγομεν}'), T('{εἶπον}'), T('{ἐλογήθην}'), T('{λέξω}')],
      answer: 1,
    },
  ],
};
