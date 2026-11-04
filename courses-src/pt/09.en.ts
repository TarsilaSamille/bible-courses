import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Future, conditional, and mesoclisis'),
  subtitle: T('falarei, falaria, dir-me-ás'),
  section: T('Pronouns'),
  body: C(`## A future that is not about the future

The future indicative is built on the infinitive plus the endings: {falar} + {+ei} = {falarei}. The conditional uses the same material: {falaria}. The difference in shape is minimal — one ending — and the difference in meaning is enormous: the future expresses prediction or commitment ({virá}, {não falta}), while the conditional expresses hypothesis, possibility or courtesy ({seria}, {poderia}, {gostaria}).

And here is the trap: **future shape does not guarantee future sense**. Portuguese is generous with the future for categorical statements: in prophecy, the future can be immediate ("He who comes is at the door") or it can be certainty ("the Son of Man will come"). Greek does the same (μέλλω), and it is the mixture of tense with certainty that produces both readings.

## Conditional and hypothesis: what Greek does not have

The Portuguese conditional is richer than Greek for hypotheses, because Greek uses the subjunctive (ἐάν τις ἔλθῃ) and Portuguese has to build a chain: {se alguém vier, ...}, {se viesse, ...}. The three Portuguese tenses — {se vier} (future subjunctive), {se viesse} (imperfect), {se tivesse vindo} (pluperfect) — cover what Greek handles with a single form.

That is why translating a Greek subjunctive so often has to add a "se" that was not there. It is not always an error: sometimes it is the only way to say it in Portuguese. But when the Greek is in the **optative** (ἐάν τις ἔλθῃ, ὄφρα, ὡς) and Portuguese throws the condition away, the translation has lost something.

## Mesoclysis in biblical Portuguese

{dir-me-ás} is the extreme case: the plain form of the future indicative, with the pronoun between {dir} and {ás}. It is not a mistake and not a dialect: it is archaic Portuguese preserved in older translations and in forms such as {fazei-me} and {dar-te-ei}.

Mesoclysis went out of use in modern Portuguese but still shows up in literary, biblical or sworn text. Anyone reading Galatians or Hebrews in an old translation meets this form often, and it should not be "corrected" from {dir-me-ás} to {dirás-me} without knowing what you are doing.

## Reading criterion

Whenever you meet a future verb, ask: is it prediction or hypothesis? If hypothesis, is it conditional or future subjunctive? And if the text is old, is there a **mesoclitic** form? Person, number and pronoun are content, not shape — which is why Greek almost always has to be read, not merely translated.`),
  vocab: [
    V('falarei', 'falar', 'I will speak'),
    V('virá', 'vir', 'he will come'),
    V('falaria', 'falar', 'I would speak'),
    V('seria', 'ser', 'would be'),
    V('direi', 'dizer', 'I will say'),
    V('farei', 'fazer', 'I will do'),
    V('dir-me-ás', 'dizer', 'you will tell me'),
    V('louvar-te-ei', 'louvar', 'I will praise you'),
    V('verá', 'ver', 'will see'),
    V('poderia', 'poder', 'could (conditional)'),
    V('louvar', 'louvar', 'to praise'),
    V('olho', 'olho', 'eye; I look'),
    V('pronome', 'pronome', 'pronoun'),
    V('hipótese', 'hipótese', 'hypothesis'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which form is conditional?'),
    options: [T('I will speak'), T('I would speak'), T('I spoke'), T('he spoke')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “every eye will ___ him”.'),
      answer: 'verá',
      hint: T('Future of ver.'),
    },
    {
      kind: 'choose',
      prompt: T('Where does mesoclisis occur?'),
      options: [
        T('you will tell me'),
        T('tell me now'),
        T('that you will tell me'),
        T('it will be said to me'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match tense and function.'),
      pairs: [
        { a: T('future'), b: T('prediction') },
        { a: T('conditional'), b: T('hypothesis') },
        { a: T('mesoclisis'), b: T('pronoun inside the verb') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Future and conditional come from the same infinitive: {falar} plus {+ei} gives {falarei}, and {falar} plus {+ia} gives {falaria}. The ending is the only difference, and the sense changes completely: prediction ({virá}) against hypothesis ({seria}).',
      ),
    },
    {
      n: '§2',
      text: T(
        'A future form is not temporal sense: {Aquele que vem está na porta} uses the present for something immediate, and {o Filho do homem virá} uses the future for a certainty. Greek does the same with {μέλλω}, and the mixing of tense with certainty is what produces the two readings.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Hypothesis is made with three tenses that Greek resolves with one: {se vier} (future subjunctive), {se viesse} (imperfect) and {se tivesse vindo} (pluperfect). {Se vier} speaks of the future, {se viesse} of the unreal and {se tivesse vindo} of the earlier unreal.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{dir-me-ás} is mesoclisis: the pronoun {me} sits **between** {dir} and {ás}. Modern Portuguese has {dirás-me}, and mesoclisis survives in literary, biblical and sworn text ({dar-te-ei}, {louvar-te-ei}).',
      ),
    },
    {
      n: '§5',
      text: T(
        'Greek resolves hypothesis with the optative ({ἐάν τις ἔλθῃ}, {ὄφρα}, {ὡς}), and Portuguese has to chain {se} plus conditional ({se alguém vier}). Rendering the optative without the condition loses the hypothesis, and the inflection does not supply it back.',
      ),
    },
  ],
  notes: [
    {
      label: T('Register'),
      text: T(
        'Forms like {louvar-te-ei} belong to an elevated register; modern Portuguese prefers “eu te louvarei”. Mesoclisis left everyday use and stays on in Galatians, Hebrews and oaths.',
      ),
    },
    {
      label: T('Greek has a future too'),
      text: T(
        'Greek has {μέλλω} plus infinitive ({μέλλω λέγειν}, “is about to say”) and its own verbal future ({λέψω}). Biblical Portuguese prefers the synthetic future ({digo}, {farei}) where Greek used {μέλλω}.',
      ),
    },
  ],
  examples: [
    { text: 'Todo olho o verá.', gloss: T('Future ({verá}) with the sense of certainty.') },
    {
      text: 'Ele falaria se tivesse tempo.',
      gloss: T('Conditional in the unreal: hypothesis unmet.'),
    },
    {
      text: 'Se viesse, eu o ouviria.',
      gloss: T('{viesse} plus {ouviria}: hypothesis in the present.'),
    },
    {
      text: 'Se viesse eu, tudo mudaria.',
      gloss: T('The position of {viesse} does not change the tense.'),
    },
    { text: 'Dir-me-ás o que devo.', gloss: T('Mesoclisis: pronoun between {dir} and {ás}.') },
    { text: 'Louvar-te-ei, Senhor.', gloss: T('Mesoclisis with a verb of motion ({louvar}).') },
    { text: 'Dar-te-ei mais do que mereces.', gloss: T('Mesoclisis in elevated register.') },
    { text: 'A cobiça acabaria com ele.', gloss: T('Conditional: possibility, not prediction.') },
    {
      text: 'Aquele que vem está à porta.',
      gloss: T('Present with the sense of immediate future.'),
    },
  ],
  tables: [
    {
      caption: T('Future and conditional, person by person'),
      head: ['Pessoa', 'Futuro', 'Condicional'],
      rows: [
        ['eu', 'falarei', 'falaria'],
        ['tu', 'falarás', 'falarias'],
        ['ele', 'falará', 'falaria'],
      ],
    },
    {
      caption: T('The three tenses of hypothesis'),
      head: ['Tempo', 'Forma', 'Exemplo'],
      rows: [
        ['futuro do subjuntivo', 'se vier', 'se vier, eu vou'],
        ['imperfeito', 'se viesse', 'se viesse, eu iria'],
        ['mais-que-perfeito', 'se tivesse vindo', 'se tivesse vindo, eu teria ido'],
      ],
    },
    {
      caption: T('Proclisis and mesoclisis with the same pronoun'),
      head: ['Forma', 'Onde está o pronome', 'Registro'],
      rows: [
        ['dirás-me', 'depois do verbo', 'atual'],
        ['dir-me-ás', 'entre {dir} e {ás}', 'bíblico'],
        ['dar-te-ei', 'entre {dar} e {ei}', 'elevado'],
      ],
    },
  ],
};
