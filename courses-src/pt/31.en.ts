import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  section: T('Reading'),
  title: T('Reading capstone: Mark 4:35-41'),
  subtitle: T('passemos, adormeceu, cala-te, and reading verb, conjunction and adverb'),
  body: C(`## The text

The passage runs from nightfall to the silence after the storm, and it fits in seven verses. The part that matters here is in these lines: {E, ao anoitecer, disse aos seus discípulos: Passemos para o outro lado. E ele mesmo passou primeiro para o outro lado}. Then the boat was already nearly full: {de modo que já estava se enchendo de água}. And then, {ele, no meio da tempestade, adormeceu; e acordou, e repreendeu aos demônios, e disse-lhe: Cala-te, e saí!}. At the end, the only question: {Por que tendes por foro? Não haveis fé ainda?}

Seven verses, thirty-odd verbs and a single question. Anyone who has read all of it now has enough pronouns, adverbs, conjunctions and verbs to read any chapter of the New Testament.

## Where the verb is and in which mood

What stands out is the distribution. The **perfect past** carries the narrative: {disse}, {passou}, {levantou-se}, {adormeceu}, {acordou}, {repreendeu}, {saiu}, {cessou}, {disse}. Nine actions counted one at a time, each with its own verb in a single moment.

The **imperfect** does the background work: it describes the state of the boat and of the storm while the counted actions go on. None of the actions described happened as an event; they are the conditions that were under way while the other nine went on, which is why a literal translation brings the imperfect in for the background of the scene. And there is a **subjunctive** in the first sentence, {passemos}, which is the imperative in disguise: the Greek says “let us go across”, and Portuguese writes it in the subjunctive.

The real **imperative** is in {Cala-te, e saí}, and it is the only line in the text where Jesus speaks with power over something rather than asking a question.

## The conjunctions and the adverbs

The conjunctions of the passage are few, and each does one job. {E} adds six actions, {mas} sets Jesus's sleep against the state of the boat, {de modo que} explains the cause of the flooding. Nothing else.

The adverbs do the finer work. {Primeiro} marks order in the boat; {já} marks aspect and says the filling was already under way before Jesus woke; {meio} marks place inside the storm; {não} negates what they had; {ainda} negates after the denial.

## Reading criterion

In any biblical text, ask: where is the verb, and is it perfect, imperfect, subjunctive or imperative? Where is the conjunction, and what does it link? Where is the adverb, and does it mark time, manner or aspect?

Mark 4:35-41 is the cleanest example of reading done with three questions. The final question, {Por que tendes por foro?}, sets the whole text against the listener: the verb is in the present ({tendes}), the negation comes before it ({não haveis}), and the adverb {ainda} says that the lack of faith went on.`),
  vocab: [
    V('o temporal', 'temporal', 'the storm'),
    V('as ondas', 'onda', 'the waves'),
    V('o barco', 'barco', 'the boat'),
    V('adormeceu', 'adormecer', 'adormeceu'),
    V('acordou', 'acordar', 'acordou'),
    V('repreendeu', 'repreender', 'repreendeu'),
    V('cessou', 'cessar', 'cessou'),
    V('passou', 'passar', 'passed'),
    V('levantou-se', 'levantar-se', 'levantou-se'),
    V('disse', 'dizer', 'disse'),
    V('calma-te', 'calar', 'silence!'),
    V('passemos', 'passar', 'passemos'),
    V('batiam', 'bater', 'batiam'),
    V('o foro', 'foro', 'the helm'),
    V('a tempestade', 'tempestade', 'the storm'),
    V('tendes', 'ter', 'tendes'),
    V('haveis', 'haver', 'haveis'),
  ],
  rules: [
    {
      n: '§1',
      text: T('The perfect counts the action one by one: {disse}, {passou}, {adormeceu}.'),
    },
    { n: '§2', text: T('The imperfect does the background: {as ondas batiam}, {era}.') },
    {
      n: '§3',
      text: T('The subjunctive {passemos} is the imperative in disguise: “let us go across”.'),
    },
    { n: '§4', text: T('The adverb {já} marks aspect: the action was already under way.') },
    {
      n: '§5',
      text: T(
        'Portuguese negation comes before the verb: {não haveis}, and {ainda} negates after the denial.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical × everyday'),
      text: T(
        'Portuguese has no historical present of the kind English uses in narrative. That is why Mark 4 appears almost entirely in the perfect, and the reader has to know the whole action is inside narrated past time.',
      ),
    },
    {
      label: T('The adverb that is aspect'),
      text: T(
        '{Já} does not mark time: it marks that the action was already going on before another event. It is the same value Greek gives to {ἤδη}, and it is what carries the aspect of the verb.',
      ),
    },
  ],
  examples: [
    { text: 'Passemos para o outro lado.', gloss: T('Present subjunctive: “let us go across”.') },
    { text: 'Ele mesmo passou primeiro.', gloss: T('Perfect and an adverb of order.') },
    {
      text: 'As ondas batiam contra o barco.',
      gloss: T('Imperfect: the background of the scene.'),
    },
    { text: 'Já estava se enchendo de água.', gloss: T('Imperfect with {já}: aspect under way.') },
    { text: 'Adormeceu no meio da tempestade.', gloss: T('Perfect with an adverb of place.') },
    { text: 'Cala-te, e saí!', gloss: T('Imperative with a clitic: the only line of power.') },
    { text: 'Por que tendes por foro?', gloss: T('Present indicative inside a question.') },
    { text: 'Não haveis fé ainda?', gloss: T('Negation before the verb, {ainda} after it.') },
  ],
  tables: [
    {
      caption: T('The verbs of the passage'),
      head: ['Modo', 'Verbos', 'O que faz'],
      rows: [
        ['perfeito', 'disse, passou, levantou-se, adormeceu, acordou', 'conta a ação uma a uma'],
        ['imperfeito', 'batiam, era', 'faz o fundo da cena'],
        ['subjuntivo', 'passemos', 'imperativo disfarçado'],
        ['imperativo', 'cala-te, saí', 'a única ordem do trecho'],
        ['presente', 'tendes, haveis', 'a pergunta final'],
      ],
    },
    {
      caption: T('The adverbs'),
      head: ['Advérbio', 'O que marca', 'Trecho'],
      rows: [
        ['primeiro', 'ordem', 'passou primeiro'],
        ['já', 'aspecto', 'já estava se enchendo'],
        ['meio', 'lugar', 'no meio da tempestade'],
        ['não', 'negação', 'não haveis'],
        ['ainda', 'negação posterior', 'ainda'],
      ],
    },
    {
      caption: T('The conjunctions'),
      head: ['Conjunção', 'Quantas vezes', 'O que liga'],
      rows: [
        ['e', 'seis', 'ações seguidas'],
        ['mas', 'uma', 'o sono contra o estado do barco'],
        ['de modo que', 'uma', 'a causa da inundação'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In “as ondas batiam contra o barco”, the verb is in the:'),
    options: [T('imperfect'), T('perfect'), T('future'), T('subjunctive')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('In “{calma-te, e saí}”, the verb is in the ______.'),
      answer: 'imperativo',
      hint: T('It is the only order Jesus gives in the passage.'),
    },
    {
      kind: 'choose',
      prompt: T('In “já estava se enchendo de água”, the adverb {já} marks:'),
      options: [T('aspect'), T('place'), T('order'), T('negation')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the verb to the mood.'),
      pairs: [
        { a: T('passou'), b: T('perfeito') },
        { a: T('batiam'), b: T('imperfeito') },
        { a: T('passemos'), b: T('subjuntivo') },
        { a: T('calma-te'), b: T('imperativo') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
