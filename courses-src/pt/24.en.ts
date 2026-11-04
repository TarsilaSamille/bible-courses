import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  section: T('The verb: the moods'),
  title: T('The verb: future and conditional'),
  subtitle: T('direi, farei, and the se eu fosse that Greek does not have'),
  body: C(`## Two ways of saying the future

Portuguese has two futures and uses the first of them for almost everything. The **synthetic** future is built with the infinitive plus the endings: {falarei}, {virei}, {terei}. The **periphrastic** future uses the verb {ir} plus the infinitive: {vou falar}, {irei falar}, {hei de falar}.

The synthetic one is dying, and the rule for what survives is short: it is still alive in verbs whose first person of the present ends in a vowel or in {-r}. {Digo} gives {direi}, {faço} gives {farei}, {vou} gives {irei}, {tenho} gives {terei}, {posso} gives {poderei}, {vejo} gives {verei}, {serei} comes from {ser}. Outside that, Portuguese says {vou falar}.

That is what biblical text preserves from the oldest Portuguese: the forms {direi}, {farei}, {virei} and {poderei} show up in the Bible with a frequency that present-day Portuguese would not carry.

## The conditional: the oldest form Portuguese has

The conditional is the oldest of the forms Portuguese keeps from Latin, and it is the one most used in the New Testament. It has three moments. The **simple** one is {se eu fosse}, which marks the unreal past: something that did not happen. The **compound** one is {se eu tivesse feito}, which steps one further back: the past of the unreal. And the **subsequent** one is {eu faria}, which is the future inside the hypothesis: what I would do if the case were so.

Three moments answer to three verbs in the sentence, and Portuguese settles with one form what Greek settles with three moods. A single conditional {se} opens all three: {Se eu fosse rico, viajaria e teria tempo}.

## The conditional that renders the optative

Greek has an entire mood Portuguese does not have: the **optative**. It serves for wish, hypothesis and expressed purpose. Portuguese renders it with {que} plus subjunctive or with {se} plus conditional, which is why the New Testament in Portuguese has far more {se} than Greek has.

What the translator has to decide is the point of view. {Se alguém virá} is the Greek future with a hypothetical sense; in Portuguese the same construction is {se alguém vier} plus present. Greek says one thing, Portuguese says another, and the decision belongs to the translator and not to the inflection.

## Reading criterion

With any verb in the future or the conditional, ask: is it future or hypothesis? Is the future synthetic or periphrastic? And is the conditional in the unreal, in the unreal anterior or in the future of the hypothesis?

John 14:3 says {se eu for e vos preparar lugar, virei e vos tomarei}: {se} brings the subjunctive, and {virei} and {tomarei} are synthetic because {vir} and {tomar} still live under the vowel and {-r} rule. One sentence with both futures and the hypothesis, which is the whole page that explains why the old form matters.`),
  vocab: [
    V('vou falar', 'falar', 'vou falar (periphrastic future)'),
    V('falarei', 'falar', 'falarei (synthetic future)'),
    V('direi', 'dizer', 'direi'),
    V('farei', 'fazer', 'farei'),
    V('virei', 'vir', 'virei'),
    V('terei', 'ter', 'terei'),
    V('poderei', 'poder', 'poderei'),
    V('se eu fosse', 'ser', 'se eu fosse'),
    V('se eu tivesse feito', 'fazer', 'se eu tivesse feito'),
    V('eu faria', 'fazer', 'eu faria'),
    V('viajaria', 'viajar', 'viajaria'),
    V('se alguém vier', 'vir', 'se alguém vier'),
    V('o condicional', 'condicional', 'the conditional'),
    V('o futuro', 'futuro', 'the future'),
    V('o optativo', 'optativo', 'the optative'),
  ],
  rules: [
    { n: '§1', text: T('The periphrastic future is {ir} plus infinitive: {vou falar}.') },
    {
      n: '§2',
      text: T(
        'The synthetic future survives in verbs whose first person ends in a vowel or in {-r}: {direi}, {farei}, {poderei}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The conditional has three moments: unreal {se fosse}, unreal anterior {se tivesse feito}, and the future inside the hypothesis {faria}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Greek handles hypothesis and wish with the optative; Portuguese handles it with {se} plus conditional.',
      ),
    },
    {
      n: '§5',
      text: T(
        'The periphrastic future does not inflect, which is why present-day Portuguese hardly inflects the future at all.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical × everyday'),
      text: T(
        'Biblical text keeps the synthetic future in forms that speech of today no longer uses: {darei}, {verei}, {terei}. A modernisation of the translation erases those forms.',
      ),
    },
    {
      label: T('Politeness in the conditional'),
      text: T(
        'The conditional is also the form of politeness: {gostaria}, {poderia}, {viria}. In biblical Portuguese, and in any Portuguese, it is one tense with three values: hypothesis, future of the past, and gentleness.',
      ),
    },
  ],
  examples: [
    { text: 'Vou falar amanhã.', gloss: T('Periphrastic future, the commonest.') },
    {
      text: 'Direi a verdade.',
      gloss: T('Synthetic future, alive because {digo} ends in a vowel.'),
    },
    {
      text: 'Se eu fosse rico, viajaria.',
      gloss: T('Simple unreal plus the future inside the hypothesis.'),
    },
    {
      text: 'Se eu tivesse estudado, teria passado.',
      gloss: T('Unreal anterior plus compound future.'),
    },
    { text: 'Ele disse que viria.', gloss: T('Conditional as future of the past.') },
    { text: 'Gostaria de saber.', gloss: T('Conditional as politeness.') },
    { text: 'Se alguém vier, avise.', gloss: T('Subjunctive after {se}, not conditional.') },
    {
      text: 'Se eu for, virei.',
      gloss: T('Hypothesis in the subjunctive and a synthetic future.'),
    },
  ],
  tables: [
    {
      caption: T('The two futures'),
      head: ['Tipo', 'Exemplo', 'Quando aparece'],
      rows: [
        ['sintético', 'falarei', 'só nos verbos de 1ª pessoa em vogal ou -r'],
        ['perifrástico', 'vou falar', 'em quase todo o resto'],
        ['perifrástico formal', 'hei de falar', 'em registro escrito'],
      ],
    },
    {
      caption: T('The three moments of the conditional'),
      head: ['Momento', 'Exemplo', 'O que indica'],
      rows: [
        ['irreal', 'se eu fosse', 'passado que não aconteceu'],
        ['irreal anterior', 'se eu tivesse feito', 'passado anterior ao irreal'],
        ['posterior', 'eu faria', 'o que viria a ser dentro da hipótese'],
      ],
    },
    {
      caption: T('Synthetic future still alive'),
      head: ['Presente', 'Futuro'],
      rows: [
        ['digo', 'direi'],
        ['faço', 'farei'],
        ['vou', 'irei'],
        ['tenho', 'terei'],
        ['posso', 'poderei'],
        ['vejo', 'verei'],
        ['serei', 'serei'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the synthetic future of {fazer}?'),
    options: [T('farei'), T('fazerei'), T('vou fazer'), T('faço-ei')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{se eu tivesse feito} is the ______ moment of the conditional.'),
      answer: 'irreal anterior',
      hint: T('It is the past of the unreal.'),
    },
    {
      kind: 'choose',
      prompt: T('In “vou falar amanhã”, the future is:'),
      options: [T('periphrastic'), T('synthetic'), T('conditional'), T('subjunctive')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the present to the synthetic future.'),
      pairs: [
        { a: T('digo'), b: T('direi') },
        { a: T('faço'), b: T('farei') },
        { a: T('posso'), b: T('poderei') },
        { a: T('vejo'), b: T('verei') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
