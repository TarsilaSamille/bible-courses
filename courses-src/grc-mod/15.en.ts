import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('The noun'),
  title: T('The noun and its three genders'),
  subtitle: T('το παιδί — η γυναίκα — ο άνθρωπος'),
  body: C(`## The neuter that English does not have

Modern Greek has three genders and English has two. The third one is the neuter, and it shows up precisely in the word English inflects without noticing: {το παιδί} is neuter in Greek, and the child is "the child" in English. English has no form for that neuter, and that is why the Greek article needs three series instead of two.

A quick symptom: when a thing is small, young or made to be used, it is almost always neuter. {το σπίτι}, {το παιδί}, {το φεγγάρι}. That is not a rule, it is statistics, and the statistics are enough to guess.

## Gender is the etymology in plain sight

Greek gender is not a coin toss. It is the old ending of the word, and the inflection lost almost everything but kept that mark. Ancient Greek pluralised {λόγος} as {λόγοι} and {παιδίον} as {παιδία}; modern Greek froze {-ος} on the masculine and {-ο} on the neuter. Recognise the ending and you recognise the gender without memorising anything.

That changes how you memorise. {ο άνθρωπος} is not "a masculine noun": it is "a noun in -ος", and the two sentences say the same thing.

## What the ending gives and what it does not

The regular endings are strong. In {-μα} almost only neuter falls: {το πρόβλημα}, {το σύμπτωμα}, {το νόμισμα}. They name results or actions, and results are neuter. In {-ση} only feminine falls: {η τιμή}, {η οικογένεια}. In {-τής} only masculine falls, and it is almost always an agent: {ο καθηγητής}, {ο στρατιώτης}.

What does not give anything is lexical etymology. {ο ήλιος} is masculine and {το φεγγάρι} is neuter, and no ending says why. {ο λέων} is masculine with no trace of any rule. These are two or three words to learn, not two or three rules to find.

## Where this shows up in Scripture

> Καὶ ἐκ τοῦ πληρώματος αὐτοῦ ἐπληρώθημεν πάντες, καὶ χάριν ἀντὶ χάριτος ἔλαβον.

In that sentence {πλήρωμα} is neuter and {λόγος}, in the sentence before it, is masculine. Greek tells the two apart without effort, because it carries the gender on every word. A translator into English has to pick one English word for each and loses the contrast: {πλήρωμα} becomes "fulness", an abstract noun that in English no longer carries a gender at all.`),
  vocab: [
    V('το παιδί', 'το παιδί', 'the child'),
    V('η γυναίκα', 'η γυναίκα', 'the woman'),
    V('ο άνθρωπος', 'ο άνθρωπος', 'the man, the person'),
    V('λόγος', 'λόγος', 'the word'),
    V('το σπίτι', 'το σπίτι', 'the house'),
    V('το πρόβλημα', 'το πρόβλημα', 'the problem'),
    V('το σύμπτωμα', 'το σύμπτωμα', 'the symptom'),
    V('το νόμισμα', 'το νόμισμα', 'the coin'),
    V('η τιμή', 'η τιμή', 'the honour'),
    V('η οικογένεια', 'η οικογένεια', 'the family'),
    V('πλήρωμα', 'πλήρωμα', 'the fulness'),
    V('ο καθηγητής', 'ο καθηγητής', 'the teacher'),
    V('ο στρατιώτης', 'ο στρατιώτης', 'the soldier'),
    V('ο λέων', 'ο λέων', 'the lion'),
    V('ο ήλιος', 'ο ήλιος', 'the sun'),
    V('το φεγγάρι', 'το φεγγάρι', 'the moon'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The article gives the gender away: το παιδί is neuter, and English forces you to say "the child".',
      ),
    },
    {
      n: '§2',
      text: T('The ending gives the gender: -ος masculine, -η/-α feminine, -ι/-ο neuter.'),
    },
    { n: '§3', text: T('-μα is neuter only; -ση is feminine only; -τής is masculine only.') },
    {
      n: '§4',
      text: T(
        'Learn the noun with its article, never alone: the article is what carries the gender.',
      ),
    },
  ],
  notes: [
    {
      label: T('Source'),
      text: T(
        'The Greek of the biblical quotations is printed with polytonic accents, as in the critical edition; the rest of the lesson uses modern Greek with a single accent.',
      ),
    },
    {
      label: T('Careful'),
      text: T(
        'ο ήλιος and το φεγγάρι obey no rule of ending. No word does, and knowing which words are the exceptions is worth more than looking for a rule that does not exist.',
      ),
    },
  ],
  examples: [
    { text: 'το παιδί κοιμάται', gloss: T('the child sleeps') },
    { text: 'η γυναίκα μιλάει', gloss: T('the woman speaks') },
    { text: 'ο άνθρωπος δουλεύει', gloss: T('the man works') },
    { text: 'το σπίτι είναι μικρό', gloss: T('the house is small') },
    { text: 'το πρόβλημα είναι μεγάλο', gloss: T('the problem is big') },
    { text: 'η οικογένεια είναι εδώ', gloss: T('the family is here') },
    { text: 'ο καθηγητής έρχεται', gloss: T('the teacher comes') },
    { text: 'το φεγγάρι είναι πιο καλή', gloss: T('the moon is more beautiful') },
  ],
  tables: [
    {
      caption: T('The three genders with the article'),
      head: ['Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['ο άνθρωπος', 'η γυναίκα', 'το παιδί'],
        ['ο λέων', 'η τιμή', 'το πρόβλημα'],
        ['ο ήλιος', 'η οικογένεια', 'το φεγγάρι'],
      ],
    },
    {
      caption: T('The ending that gives the gender away'),
      head: ['Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['-τής', '-ση', '-μα'],
        ['ο καθηγητής', 'η τιμή', 'το πρόβλημα'],
        ['ο στρατιώτης', 'η δουλειά', 'το σύμπτωμα'],
      ],
    },
    {
      caption: T('Gender by number'),
      head: ['Αριθμός', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['ένα', 'ο άνθρωπος', 'η γυναίκα', 'το παιδί'],
        ['πολλοί', 'οι άνθρωποι', 'οι γυναίκες', 'τα παιδιά'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which of these is neuter?'),
    options: [T('το παιδί'), T('ο άνθρωπος'), T('η γυναίκα'), T('ο ήλιος')],
    answer: 0,
  },
  exercises: [
    { kind: 'fill', prompt: T('___ παιδί κοιμάται'), answer: 'το', hint: T('Neuter article') },
    {
      kind: 'choose',
      prompt: T('Which ending appears only in the feminine?'),
      options: [T('-τής'), T('-ση'), T('-μα'), T('-ος')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Gender of each noun'),
      pairs: [
        { a: 'ο καθηγητής', b: T('masculine') },
        { a: 'η οικογένεια', b: T('feminine') },
        { a: 'το πρόβλημα', b: T('neuter') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'choose',
      prompt: T('In "το πρόβλημα", what does the article tell you?'),
      options: [
        T('that it is masculine'),
        T('that it is feminine'),
        T('that it is neuter'),
        T('that it is indefinite'),
      ],
      answer: 2,
    },
  ],
};
