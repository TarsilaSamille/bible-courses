import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('Adjectives'),
  subtitle: T('strong, weak and mixed'),
  section: T('Adjectives and adverbs'),
  body: C(`The German adjective declines in three ways, and the choice depends on what precedes it. If there is nothing, or if what comes is a weak quantifier, the adjective takes the strong form; if a definite article or a possessive comes, it is weak.

The weak declension is the easiest: -e, -en, -e, -en. Der schöne Mann, die schöne Frau, das schöne Kind, die schönen Männer, mit einem schönen Kind. The reason is historical: the article already carried the case information, and the adjective only agreed in gender and number.

The strong declension uses the endings -er, -e, -es, -en and appears when there is no article: schöne Männer. Genuine strong forms appear with quantifiers such as alle, beide, viele, einige, keine, mehrere: Alle neuen Bücher sind teuer. They also appear with no determiner at all: Neue Bücher kosten viel.

The mixed declension affects only those adjectives whose stem has no -e when a definite article precedes: hoch, teuer, dunkel, hell, kalt, warm, stark, schwach, jung. In those cases the strong ending does not appear: der hohe Berg, die hohe Schule, mit hohem Tempo, ein junger Mann. With a quantifier, however, the strong form returns: hohe Berge.

One last detail: adjectives ending in -d or -t drop the -e of the weak forms. schön gives schöne, but groß gives große, gut gives gute, warm gives warme. That is why the weak form of schön looks like the rule and that of groß like the exception.`),
  vocab: [
    V('schön', 'schön', 'beautiful (strong: schöner)'),
    V('groß', 'groß', 'big (strong: größer)'),
    V('hoch', 'hoch', 'high (mixed: der hohe)'),
    V('jung', 'jung', 'young (mixed: ein junger)'),
    V('kalt', 'kalt', 'cold (mixed: die kalte)'),
    V('teuer', 'teuer', 'expensive (mixed: das teure)'),
    V('neu', 'neu', 'new (strong in the plural: neue)'),
    V('gut', 'gut', 'good (weak: der gute)'),
    V('warm', 'warm', 'warm (weak: die warme)'),
    V('der schöne Mann', 'schön', 'the handsome man (weak)'),
    V('ein schönes Kind', 'schön', 'a beautiful child (weak neuter -es)'),
    V('mit einem schönen Kind', 'schön', 'with a beautiful child (weak dative -en)'),
    V('alle neuen Bücher', 'neu', 'all the new books (strong)'),
    V('neue Bücher', 'neu', 'new books (strong, no article)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which is the correct form in "ein ___ Kind"?'),
    options: [T('schönes'), T('schön'), T('schöner'), T('schönen')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the weak adjective: der ___ Mann (new)'),
      answer: 'neue',
      hint: T('Neuter in -t drops the -e: neue.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the strong adjective: ___ Bücher sind neu (all the books).'),
      answer: 'Alle neuen',
      hint: T('alle requires the strong form.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sequence is correct?'),
      options: [
        T('with a high tempo'),
        T('with a high tempo (wrong inflection)'),
        T('with a high tempo (missing ending)'),
        T('with a high tempo (dative ending -em)'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the determiner to the declension.'),
      pairs: [
        { a: T('der'), b: T('weak') },
        { a: T('mein'), b: T('weak') },
        { a: T('viele'), b: T('strong') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('An adjective as a predicate never declines: Die Kinder sind klein, not kleine.'),
    },
    {
      n: '2',
      text: T(
        'After ein and the possessives the form is always weak: ein junger Mann, mein altes Haus.',
      ),
    },
    {
      n: '3',
      text: T(
        'After alle, viele, einige, keine, beide and many quantifiers the form is strong: alle jungen Leute.',
      ),
    },
    {
      n: '4',
      text: T(
        'Adjectives in -d and -t drop the -e of the weak form: groß → große, gut → gute, warm → warme, stark → starke.',
      ),
    },
  ],
  notes: [
    {
      label: T('Weak and strong adjectives'),
      text: T(
        'The name weak does not mean a weaker form. The weak form is the one that appears after a determiner, and it is the most common in speech. The strong form appears when the adjective has to carry the case information alone, which happens above all with quantifiers. Compare: der neue Wagen (the new car) and ein neuer Wagen (a new car) against neue Wagen kosten viel (new cars cost a lot).',
      ),
    },
    {
      label: T('Bible link'),
      text: T(
        "In John 1:1, war das Wort. In Luther's translation the adjectives followed by an article almost always take the weak form, while the more literary texts preserve the strong alternation. Recognising the weak form is, in practice, recognising the architecture of the sentence.",
      ),
    },
  ],
  examples: [
    {
      text: 'Der schöne Mann ist mein Lehrer.',
      gloss: T('The handsome man is my teacher (weak adjective).'),
    },
    {
      text: 'Ein schönes Kind spielt im Garten.',
      gloss: T('A beautiful child plays in the garden (weak neuter -es).'),
    },
    {
      text: 'Ich spreche mit einem alten Mann.',
      gloss: T('I am speaking with an old man (weak dative -en).'),
    },
    {
      text: 'Alle neuen Bücher sind teuer.',
      gloss: T('All the new books are expensive (strong).'),
    },
    {
      text: 'Neue Wagen kosten viel.',
      gloss: T('New cars cost a lot (strong without an article).'),
    },
    {
      text: 'Der hohe Berg ist schön.',
      gloss: T('The high mountain is beautiful (mixed: hohe, schön).'),
    },
    { text: 'Er fährt mit hohem Tempo.', gloss: T('He drives at high speed (mixed dative -em).') },
    { text: 'Das ist ein guter Rat.', gloss: T('That is good advice (gut in -t drops the -e).') },
  ],
  tables: [
    {
      caption: T('The three adjective declensions'),
      head: [T('Case'), 'masc.', 'fem.', 'neut.', 'plural'],
      rows: [
        ['forte (nom.)', 'schöner', 'schöne', 'schönes', 'schöne'],
        ['forte (acc.)', 'schönen', 'schöne', 'schönes', 'schöne'],
        ['fraco (nom.)', 'schöne', 'schöne', 'schöne', 'schönen'],
        ['fraco (acc.)', 'schönen', 'schöne', 'schöne', 'schönen'],
        ['fraco (dat.)', 'schönem', 'schöner', 'schönem', 'schönen'],
        ['fraco (gen.)', 'schönen', 'schöner', 'schönen', 'schöner'],
        ['misto (nom.)', 'der hohe', 'die hohe', 'das hohe', 'die hohen'],
        ['misto (dat.)', 'mit hohem', 'mit hoher', 'mit hohem', 'mit hohen'],
      ],
    },
    {
      caption: T('Which declension to use'),
      head: ['O que vem antes', 'Declinação', 'Exemplo'],
      rows: [
        ['der, die, das', 'fraca', 'der schöne Tag'],
        ['mein, dein, sein', 'fraca', 'mein schönes Zimmer'],
        ['ein, eine', 'fraca', 'eine schöne Idee'],
        ['dieser, jeder, welcher', 'fraca', 'jeder neue Tag'],
        ['alle, beide, viele, einige, keine', 'forte', 'alle neuen Häuser'],
        ['nada (plural genérico)', 'forte', 'neue Häuser'],
        ['nada (singular genérico)', 'forte', 'neuer Wein'],
        ['adjetivo em predicado', 'sem flexão', 'Der Wein ist neu.'],
      ],
    },
  ],
};
