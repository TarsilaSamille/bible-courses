import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('The verb: present and aspect'),
  title: T('How the aspect pair is formed'),
  subtitle: T('prefix, suffix and suppletion, and the verbs that have no pair'),
  body: C(`
## Three roads to the perfective

Not every perfective has a prefix, and not every prefixed verb is perfective. The pair is formed by three roads, and it is worth knowing which is which, because the third has nothing to do with the other two.

The road of the prefix is the commonest and the most productive of the three: написать comes from писать, сделать from делать, прочитать from читать. The prefix puts a boundary on the action and the perfective is born. The road of the suffix changes the ending of the infinitive without changing the root: отвечать and ответить, решать and решить, замечать and заметить. The suppletive road changes the root completely, and there nothing is derivable: говорить and сказать, брать and взять, давать and дать.

And there is a fourth case, which undoes the idea that a perfective always grows out of an imperfective: нести is imperfective and нёс is perfective, with no prefix at all. The perfective does not come from the imperfective by derivation; sometimes the two are different verbs that usage joins into a pair.

## What each prefix does

A prefix is not decoration. It says in which direction or at which limit the action happens, and that is why two verbs with different prefixes are different verbs.

По- sets a limit of duration: почитать is to read a little, for a while, and it is not the same as reading the whole thing. Вы- takes out of a closed space: выйти is to go out, and the preposition that governs it is из, genitive. У- marks removal and, in some verbs, the end of an inquiry: уйти, узнать, услышать. Под- is a partial approach: подойти, подъехать, without arriving. Пере- repeats or changes place: переписать, переехать. За- marks the beginning of something that lasts, and it is the most widely used prefix in Russian.

The prefix sits in the perfective, and almost nowhere else. If a verb has a prefix and is in the past, it is perfective, and the context will ask for a reading of result.

## The verbs that have no pair

There are verbs with no pair at all, and verbs with only one side. **Быть, мочь and хотеть have no aspect**: there is no perfective of быть, no imperfective of мочь, and context is what settles it. They are the three commonest verbs in the language after the copula, which makes this the most visible of the problems.

There are also verbs that exist only in the imperfective, and there are many: ждать, спать, стоять, лежать, сидеть, жить, идти, ехать, бежать, нести. For them the perfective comes from outside, sometimes with a prefix (поспать, подождать) and sometimes by suppletion (лежать and лечь, сидеть and сесть, стоять and стать).

When there is no pair, the resource is the verb мочь plus an infinitive. Я могу прийти says that coming is possible, and that is how a Russian sentence resolves what Portuguese resolves with the subjunctive or with the future.

## The hook: a word that changes from verse to verse

**И Слово стало плотию, и обитало с нами, полное благодати и истины.** Three verbs, three aspect decisions, and the first two are among the most interesting in the language.

Стало is perfective, and it is the perfective of быть, which has no aspect. It is the limiting case: a verb with no aspect produces its perfective, and the result is a word that means to become, to pass from one state to another. A translator who renders стало as "was" erases exactly that: John 1:1 uses было, and John 1:14 uses стало, and the difference between the two is the difference between being and becoming.

Обитало is imperfective, and not by accident. It describes staying, not an act: the Word remained, and remaining has no beginning or end that can be marked. The perfective of that semantic field does not fit the same sentence, and the text does not use it.

Полное is a short participle, not a verb. It agrees in gender and number with Слово, and that is why it is neuter. Had the text said исполненное, the shape would be long and the case would be marked; with the short shape the case comes from context and not from the ending. Those are two things only the reading of a real text teaches.
`),
  vocab: [
    V('отвечать', 'отвечать', 'to answer; imperfective'),
    V('ответить', 'ответить', 'to answer; perfective'),
    V('нести', 'нести', 'to carry; imperfective'),
    V('нёс', 'нести', 'carried; perfective, no prefix'),
    V('принёс', 'принести', 'brought; perfective with a prefix'),
    V('почитать', 'почитать', 'to read for a while; perfective with по-'),
    V('выйти', 'выйти', 'to go out; perfective with вы-'),
    V('подойти', 'подойти', 'to come up to; perfective with под-'),
    V('быть', 'быть', 'to be; no aspect'),
    V('мочь', 'мочь', 'to be able; no aspect'),
    V('хотеть', 'хотеть', 'to want; no aspect'),
    V('ждать', 'ждать', 'to wait; imperfective only'),
    V('лежать', 'лежать', 'to lie; imperfective only'),
    V('лечь', 'лечь', 'to lie down; suppletive perfective'),
    V('обитало', 'обитать', 'dwelt, remained; imperfective'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In И Слово стало плотию, what does стать show?'),
    options: [T('A state that continues'), T('A change of state'), T('A habit')],
    answer: 1,
    hint: T(
      'Стать is the perfective of being. It marks the passage from one state to another, which is why John 1:1 has было and 1:14 has стало.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete the perfective of лежать'), answer: 'лечь' },
    {
      kind: 'choose',
      prompt: T('Which verb has no aspect?'),
      options: [T('ждать'), T('мочь'), T('написать')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: Он ___ с нами (remained)'), answer: 'обитал' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The aspect pair is formed by three roads: prefix ({написать}), suffix ({ответить}) and suppletion ({сказать}).',
      ),
    },
    {
      n: '2',
      text: T(
        'Not every perfective comes from an imperfective: {нести} and {нёс} are different verbs, with no derivation.',
      ),
    },
    {
      n: '3',
      text: T(
        'The prefix says direction or limit: {по}- limits duration, {вы}- takes out of a space, {под}- approaches without arriving, {пере}- repeats.',
      ),
    },
    { n: '4', text: T('{Быть}, {мочь} and {хотеть} have no aspect.') },
    {
      n: '5',
      text: T(
        'Verbs that exist only in the imperfective get their perfective from a prefix ({поспать}) or by suppletion ({лечь}).',
      ),
    },
  ],
  notes: [
    {
      label: T('The limiting case: стать and быть'),
      text: T(
        'Стало is perfective and быть is the shape that has no aspect. It is the only situation in which a perfective grows out of a verb with no pair, and it is frequent precisely because the commonest pair in the language is that one. The result is a real opposition: John 1:1 says было, which is state, and John 1:14 says стало, which is change. Rendering both with one word erases the difference between the Word that is and the Word that becomes.',
      ),
    },
    {
      label: T('When there is no pair, мочь settles it'),
      text: T(
        'A verb with no perfective needs another road, and the standard one is мочь plus an infinitive. Я могу прийти does not say that I came, it says that coming is within my reach, and in a context of possibility that is exactly what the subjunctive does in Portuguese. A translator who meets a perfective where Russian has no form should look for this before looking for a synonym.',
      ),
    },
  ],
  examples: [
    { text: 'отвечать на письмо', gloss: T('answering a letter; imperfective') },
    { text: 'ответил на письмо', gloss: T('answered the letter; perfective') },
    { text: 'нёс сумку', gloss: T('was carrying the bag; imperfective') },
    { text: 'принёс сумку', gloss: T('brought the bag; perfective with a prefix') },
    { text: 'почитать книгу', gloss: T('read a book for a while; perfective with по-') },
    { text: 'ждать', gloss: T('to wait; imperfective only') },
    { text: 'лежать', gloss: T('to lie; imperfective only') },
    { text: 'лечь', gloss: T('to lie down; suppletive perfective') },
    { text: 'Я могу прийти', gloss: T('I can come; the resource for what has no perfective') },
    {
      text: 'И Слово стало плотию, и обитало с нами',
      gloss: T('and the Word became flesh and dwelt among us (John 1:14)'),
    },
  ],
  tables: [
    {
      caption: T('The three roads to the pair'),
      head: [T('Imperfective'), T('Perfective'), T('Road'), T('What changes')],
      rows: [
        [T('писать'), T('написать'), T('prefix'), T('the action gains a boundary')],
        [T('отвечать'), T('ответить'), T('suffix'), T('the infinitive ending changes')],
        [T('говорить'), T('сказать'), T('suppletion'), T('the whole root changes')],
        [T('брать'), T('взять'), T('suppletion'), T('the whole root changes')],
        [T('нести'), T('нёс'), T('pair without a prefix'), T('there is no derivation at all')],
        [T('лежать'), T('лечь'), T('suppletion'), T('the whole root changes')],
      ],
    },
    {
      caption: T('What each prefix adds'),
      head: [T('Prefix'), T('Adds'), T('Verb'), T('Gloss')],
      rows: [
        [T('по-'), T('a limit of duration'), T('почитать'), T('to read for a while')],
        [T('вы-'), T('leaving a space'), T('выйти'), T('to go out')],
        [
          T('у-'),
          T('removal or the end of an inquiry'),
          T('уйти, узнать'),
          T('to leave, to find out'),
        ],
        [T('под-'), T('approach without arriving'), T('подойти'), T('to come up to')],
        [T('пере-'), T('repetition or change of place'), T('переписать'), T('to rewrite')],
        [T('за-'), T('the beginning of what lasts'), T('запеть'), T('to start singing')],
      ],
    },
    {
      caption: T('The verbs with no pair'),
      head: [T('Verb'), T('Has a perfective?'), T('How it is settled'), T('Example')],
      rows: [
        [T('быть'), T('no'), T('it opposes стать'), T('было and стало')],
        [T('мочь'), T('no'), T('it does not need one'), T('могу говорить')],
        [T('хотеть'), T('no'), T('it does not need one'), T('хочу сказать')],
        [T('ждать'), T('yes, by prefix'), T('подождать'), T('ждал and подождал')],
        [T('спать'), T('yes, by prefix'), T('поспать'), T('спал and поспал')],
        [T('лежать'), T('yes, by suppletion'), T('лечь'), T('лежал and лёг')],
      ],
    },
  ],
};
