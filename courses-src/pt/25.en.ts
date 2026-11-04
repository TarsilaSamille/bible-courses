import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  section: T('The verb: form and tense'),
  title: T('The verb: dar and poder'),
  subtitle: T('dou, dá, dê, dei, and the dar that means to do'),
  body: C(`## The forms only these two have

Most verbs conjugate by rule, and {amar} is the model for all of them. {Dar} and {poder} are the two exceptions every speaker has learned without trying, and they follow no rule: {dou}, {dá}, {dê}, {demos}, {dei}, {de}, {dão}. Beside them, {posso}, {podes}, {pode}, {podemos}, {podeis}, {podem}, and in the subjunctive {possa}, {possas}, {possa}, {possamos}, {podais}, {possam}.

What is really there is an old rule that survived: in {dar}, the first person of the present takes an {-o} the rest of the verb does not have, and {poder} takes {-ss-} in place of the {-d-} Latin had. The two verbs belong to one family in Latin, and the Portuguese form is the one that lost that sound.

A translator coming from Greek runs into this, because Greek also sets giving apart from being able: {δίδωμι} and {δύναμαι} are different words, and so are they in Portuguese, but the inflections are so irregular that the hand locks before the head does.

## The dar that means to do

{dar} has in Portuguese a use Greek does not have: it forms a periphrasis with another verb and means {to do}. {Dar de comer} is to feed, {dar um jeito} is to put in order, {dar a volta} is to go around, {dar com os olhos em} is to meet with, {dar-se bem} is to come off well. In that use {dar} delivers nothing: it does what the other verb does.

That is why the New Testament in Portuguese has verbs that Greek does not have as main verbs. Where Greek says {πεῖναι}, Portuguese says {dar de comer}; where Greek says {ποιῆσαι}, Portuguese says {dar}, and the periphrasis renders the sense without distorting it.

## Dar in the New Testament

Luke 15:22 narrates a dressing in four verbs: the father {trouxe} the best robe, {vestiu-o}, {meteu-lhe} a ring on his hand and sandals on his feet. Four different verbs for four acts of dressing, and Greek does the same with four different verbs, which is rare: the narrative means that the father did everything with his own hands.

In the same chapter the younger son asks for the inheritance, and the father says that {dar} money to someone who cannot spend is {dar} for nothing. The periphrasis {dar com} appears there in the sense of {throwing away}, and it is the one sense of {dar} that Greek does not have.

## Reading criterion

With any form of {dar} or {poder}, ask: which person is it, and is the form in the present series or in the past? And is {dar} on its own or is it a periphrasis?

In Luke 15:22 the text arrives with the verbs side by side, and that is where the periphrasis shows up: the father did not {deu} a ring, he {meteu} a ring. A translator who keeps verb for verb keeps the enumeration of the original; a translator who writes {deu} for everything erases the four verbs and loses the father's own hands, which is what the sentence is counting.`),
  vocab: [
    V('dou', 'dar', 'dou'),
    V('dá', 'dar', 'dá'),
    V('dê', 'dar', 'dê'),
    V('dei', 'dar', 'dei'),
    V('dão', 'dar', 'dão'),
    V('posso', 'poder', 'posso'),
    V('pode', 'poder', 'pode'),
    V('podemos', 'poder', 'podemos'),
    V('puder', 'poder', 'puder'),
    V('dar de comer', 'dar', 'dar de comer'),
    V('dar um jeito', 'dar', 'dar um jeito'),
    V('dar a volta', 'dar', 'dar a volta'),
    V('vestiu-o', 'vestir', 'vestiu-o'),
    V('meteu-lhe', 'meter', 'meteu-lhe'),
    V('trouxe', 'trazer', 'trouxe'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{Dar} and {poder} are irregular in every person: {dou}, {dá}, {dê}, {dei}, {dão}, {posso}, {pode}, {podemos}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{Dar} builds a periphrasis with another verb and means {to do}: {dar de comer}, {dar um jeito}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'When the text lists actions, {dar} gives way to {meteu} and {vestiu}, because each action has its own verb.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Greek sets {δίδωμι} apart from {δύναμαι}; Portuguese sets {dar} apart from {poder}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'In narrative the bare verb {dar} is rare: the text prefers the exact verb of the action.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical × everyday'),
      text: T(
        'The forms {dei}, {deu} and {dão} are the ones that show up often in the Bible, and the subjunctive forms {dê}, {dêmos} show up in liturgical texts.',
      ),
    },
    {
      label: T('Why the periphrasis is awkward'),
      text: T(
        'The construction {dar} plus verb occupies in Portuguese the place of a single Greek verb. In translating, you have to decide whether to produce the construction or to use the nearest Greek verb.',
      ),
    },
  ],
  examples: [
    { text: 'Dou a minha palavra.', gloss: T('First person present, irregular form.') },
    { text: 'Que o Senhor te dê paz.', gloss: T('Imperative of {dar}, third person.') },
    { text: 'Não posso ir hoje.', gloss: T('{posso} is the first person of {poder}.') },
    { text: 'Puder vir, virei.', gloss: T('{puder} is the perfect past of {poder}.') },
    { text: 'Deu de comer aos famintos.', gloss: T('Periphrasis: {dar de} plus infinitive.') },
    { text: 'Deu um jeito na casa.', gloss: T('{dar um jeito} means to put in order.') },
    { text: 'Meteu-lhe um anel na mão.', gloss: T('The exact verb, and not {deu}.') },
    { text: 'Vestiu-o com a túnica.', gloss: T('Another action, another verb.') },
  ],
  tables: [
    {
      caption: T('The verb dar'),
      head: ['Pessoa', 'Presente', 'Pretérito'],
      rows: [
        ['eu', 'dou', 'dei'],
        ['tu', 'dás', 'deste'],
        ['ele/ela', 'dá', 'deu'],
        ['nós', 'damos', 'demos'],
        ['vós', 'dais', 'destes'],
        ['eles/elas', 'dão', 'deram'],
      ],
    },
    {
      caption: T('The verb poder'),
      head: ['Pessoa', 'Presente', 'Subjuntivo'],
      rows: [
        ['eu', 'posso', 'possa'],
        ['tu', 'podes', 'possas'],
        ['ele/ela', 'pode', 'possa'],
        ['nós', 'podemos', 'possamos'],
        ['vós', 'podeis', 'podais'],
        ['eles/elas', 'podem', 'possam'],
      ],
    },
    {
      caption: T('Dar as periphrasis'),
      head: ['Locução', 'O que significa'],
      rows: [
        ['dar de comer', 'alimentar'],
        ['dar de beber', 'dar para beber'],
        ['dar um jeito', 'arrumar'],
        ['dar a volta', 'contornar'],
        ['dar-se bem', 'sair bem'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the first person present of {dar}?'),
    options: [T('dou'), T('dão'), T('dei'), T('dê')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{dar de comer} is a ______, and it means to feed.'),
      answer: 'perífrase',
      hint: T('{dar} delivers nothing here.'),
    },
    {
      kind: 'choose',
      prompt: T('In Luke 15:22, the father puts the ring on the son’s hand with:'),
      options: [T('meteu-lhe'), T('deu-lhe'), T('lhe deu para'), T('entregou o anel a ele na mão')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the construction to its meaning.'),
      pairs: [
        { a: T('dar de comer'), b: T('alimentar') },
        { a: T('dar um jeito'), b: T('arrumar') },
        { a: T('dar a volta'), b: T('contornar') },
        { a: T('dar-se bem'), b: T('sair bem') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
