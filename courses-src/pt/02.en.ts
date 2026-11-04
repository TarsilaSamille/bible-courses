import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('The verb: form and tense'),
  title: T('The essential verbs of biblical text'),
  subtitle: T(
    '{ir}, {vir}, {ser}, {estar}, {ter}, {fazer}, {dizer}: the seven that carry almost every clause',
  ),
  body: C(`## The stem that carries almost everything

A regular {-ar}, {-er} or {-ir} stem is good for a lot, because the ending does the rest. An irregular stem is good for nothing: {ser}, {ter}, {ir}, {ver}, {fazer}, {dizer} and {saber} have to be learned one by one, and none of them produces any of the others.

It is a small number for the weight it carries. In the Psalms and the Gospels, almost every clause that says something about somebody runs through one of these seven. Anyone who has them resolves half the text before looking at syntax.

The price is that they form no system. No rule produces {fiz} from {fazer}, or {disse} from {dizer}. The form {faze}, which survives in Old Portuguese and in European Portuguese, is a remnant of that, and anyone reading an older translation will run into it.

## {ser} and {estar}: a distinction modern Portuguese invented

Portuguese has two verbs where the Greek and Hebrew of the ancient text have one. {εἰμί} and {ἦν} became {ser} and {estar}, and the rule Brazilian Portuguese follows is this: {ser} for what the subject is, {estar} for the state it is in.

{Deus é amor} (1 Jn 4:8) uses {ser}, because what is asserted is what God is. {Jesus está na sinagoga} would use {estar}, because what is asserted is where he is. The choice is not a matter of style: it is the difference between an identity and a circumstance.

The trouble is that this rule is very recent, and Old Portuguese barely has it. John 1:1 gives {era}, {estava} and {era} in a single sentence:

{In the beginning {era} the Word, and the Word {was with} God, and the Word {era} God.}

The {era} in first and third position is {ser}; the one in the middle is {estar}. The translation is not applying the Brazilian rule, it is carrying the Greek, where all three are the same word in different tenses. Rendering the two {era} as {era} and the {estava} as {estava} keeps the chain; making the third {estava} would produce "and the Word was God", which is wrong by construction.

## {ir} and {vir}: the pair that completes each other, and the imperative everyone gets wrong

{ir} and {vir} are the easiest pair to confuse and the easiest to get wrong in form. {ir} gives {vou}, {vais}, {vai}, {vamos}, {vão}, and {vir} gives {venho}, {vens}, {vem}, {viemos}, {vêm}. The asymmetry is the clue: {ir} loses the {r} and gains {v}, {vir} swaps {r} for {n}.

In the preterite the two settle a question that looks like a mistake and is not: {fui} belongs to {ser} and to {ir}, and the context says which. {Eu fui ao templo} has {ir} in it; {Eu fui bom} has {ser}.

The {tu} imperative of {ir}, {ver} and {dizer} is **{vai}**, **{vê}** and **{diz}**, without the {s}. Old Portuguese and European Portuguese keep the {s}: {vais}, {ves}, {dizes}. Anyone reading Almeida with a Brazilian ear hears a mistake where there is none; anyone writing from the instinct of {vai} and {diz} gets the biblical text right and finds {vós} strange.

The preterites of {ir} and {vir} are the shortest pair in the language: {fui}, {fomos}, {foram}, and {vim}, {viemos}, {vieram}. Anyone who has memorized two verbs has memorized half the irregular preterite.

## In the Bible, and how to read

Genesis 1:3 has {Haja luz}, and {haja} is the subjunctive of {haver}, not of {ser}. It is the first verb of the narrative and it is still the strangest one for anyone coming from ordinary Portuguese, where {haver} barely appears.

In any verse, ask which of the essential verbs has come in: if the form is {foi} or {vi} or {disse}, the verb is irregular and the exact form matters; if it is {havia}, the verb is {haver} and the tense is the imperfect; if it is {está} or {estava}, the choice between {ser} and {estar} has already been made by the form.`),
  vocab: [
    V('era', 'ser', 'he was (imperfect of ser)'),
    V('fui', 'ser', 'I was (of ser or of ir)'),
    V('fomos', 'ser', 'we were (of ser or of ir)'),
    V('seja', 'ser', 'let him be (subjunctive of ser)'),
    V('estava', 'estar', 'he was (imperfect of estar)'),
    V('estive', 'estar', 'I stayed (preterite of estar)'),
    V('havia', 'haver', 'there was (of haver)'),
    V('vou', 'ir', 'I go (of ir)'),
    V('vou partir', 'ir', 'I am going to leave'),
    V('vim', 'vir', 'I came (of vir)'),
    V('vieram', 'vir', 'they came'),
    V('faz', 'fazer', 'he does'),
    V('diz', 'dizer', 'he says'),
    V('vê', 'ver', 'he sees'),
    V('come', 'comer', 'he eats'),
    V('haja', 'haver', 'let there be'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{fui} and {fomos} serve both {ser} and {ir}: {Eu fui ao templo} is {ir}, {Eu fui bom} is {ser}, and the form does not say which.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{estar} in the preterite is {estive}, {estiveste}, {esteve}. {Eu estive lá} and {Eu fui lá} are not synonyms, and the second one is {ir}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The {tu} imperative drops the final {s} in {ir}, {ver} and {dizer}: {vai}, {vê}, {diz}. With the {s} it is Old Portuguese: {vais}, {ves}, {dizes}.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{vou} is {ir} in the first person and {ir} plus an infinitive: {vou à cidade} goes, {vou partir} is going to leave. What follows the verb is what tells them apart.',
      ),
    },
    {
      n: '§5',
      text: T(
        'John 1:1 has {era}, {estava} and {era}. The two {era} are {ser} and the one in the middle is {estar}; the distinction comes from the Greek, not from the Brazilian rule about {ser} and {estar}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The {fora} that serves two verbs'),
      text: T(
        '{fora} is the third person of the preterite both of {ser} ({ela fora útil}) and of {fazer} ({ela fora a obra}). In older translations the verb {fazer} with {obras} appears almost as often as the noun does, and reading {fora} as {ser} changes the action.',
      ),
    },
    {
      label: T('{ser} that counts'),
      text: T(
        'In Old Portuguese {ser} in the past with a numeral gives the sum: {fora cinquenta}, "fifty". That is why Latin {fuit} shows up in the Psalms before any noun at all. The number comes before what it names, and the verb form is what marks it.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio era o Verbo.',
      gloss: T('Imperfect of {ser}: what already held before anything began.'),
    },
    {
      text: 'O Verbo estava com Deus.',
      gloss: T('Imperfect of {estar}: where he was, not what he was.'),
    },
    {
      text: 'O Verbo era Deus.',
      gloss: T('Imperfect of {ser} again, and the assertion is about what he is.'),
    },
    { text: 'Haja luz.', gloss: T('Subjunctive of {haver}, Gen 1:3.') },
    { text: 'Eu fui à cidade.', gloss: T('Preterite of {ir}.') },
    { text: 'Eu fui chamado.', gloss: T('Preterite of {ser}, and the form is identical.') },
    { text: 'Eu estive com eles.', gloss: T('Preterite of {estar}: same place, temporary state.') },
    {
      text: 'Vai e diz a eles.',
      gloss: T('{tu} imperative without the {s}, as in the Greek and in Almeida.'),
    },
    {
      text: 'A luz brilha nas trevas.',
      gloss: T('Present of {brilhar}, what is happening in the scene (Jn 1:5).'),
    },
    {
      text: 'Não tive mais nada.',
      gloss: T('Preterite of {ter}: the present {tenho} does not replace it.'),
    },
  ],
  tables: [
    {
      caption: T('The eight irregulars in the present'),
      head: ['Infinitivo', 'eu', 'ele', 'nós', 'eles'],
      rows: [
        ['ir', 'vou', 'vai', 'vamos', 'vão'],
        ['vir', 'venho', 'vem', 'viemos', 'vêm'],
        ['ser', 'sou', 'é', 'somos', 'são'],
        ['estar', 'estou', 'está', 'estamos', 'estão'],
        ['ter', 'tenho', 'tem', 'temos', 'têm'],
        ['fazer', 'faço', 'faz', 'fazemos', 'fazem'],
        ['dizer', 'digo', 'diz', 'dizemos', 'dizem'],
        ['ver', 'vejo', 'vê', 'vemos', 'veem'],
      ],
    },
    {
      caption: T('The same verbs in the preterite'),
      head: ['Infinitivo', 'eu', 'ele', 'nós', 'eles'],
      rows: [
        ['ir', 'fui', 'foi', 'fomos', 'foram'],
        ['ser', 'fui', 'foi', 'fomos', 'foram'],
        ['estar', 'estive', 'esteve', 'estivemos', 'estiveram'],
        ['ter', 'tive', 'teve', 'tivemos', 'tiveram'],
        ['fazer', 'fiz', 'fez', 'fizemos', 'fizeram'],
        ['dizer', 'disse', 'disse', 'dissemos', 'disseram'],
        ['ver', 'vi', 'viu', 'vimos', 'viram'],
      ],
    },
    {
      caption: T('The {tu} imperative and the {s} mistake'),
      head: ['Infinitivo', 'Almeida', 'Erro do brasileiro'],
      rows: [
        ['ir', 'vai', 'vais'],
        ['ver', 'vê', 'ves'],
        ['dizer', 'diz', 'dizes'],
        ['fazer', 'faz', 'fazes'],
        ['comer', 'come', 'comes'],
        ['ser', 'sê', 'ses'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "o Verbo estava com Deus", which verb and which tense?'),
    options: [
      T('{ser}, present'),
      T('{estar}, imperfect'),
      T('{ir}, preterite'),
      T('{ter}, perfect'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "e o Verbo ___ Deus" with {ser} in the imperfect.'),
      answer: 'era',
    },
    {
      kind: 'match',
      prompt: T('Match the form to the verb'),
      pairs: [
        { a: T('{estive}'), b: T('{estar}') },
        { a: T('{disse}'), b: T('{dizer}') },
        { a: T('{fiz}'), b: T('{fazer}') },
        { a: T('{viemos}'), b: T('{vir}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which sentence uses {estar} with the right value?'),
      options: [
        T('Deus está amor.'),
        T('O Verbo está com Deus.'),
        T('Jesus está Deus.'),
        T('O templo está em Getsêmani.'),
      ],
      answer: 1,
    },
  ],
};
