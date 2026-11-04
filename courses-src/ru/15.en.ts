import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('The verb: present and aspect'),
  title: T('The essential verbs'),
  subtitle: T('{быть}, {идти}, {хотеть}, {мочь}, {есть} and the verbs aspect splits in two'),
  body: C(`## Ten verbs, and two that lie to the ear

A regular Russian verb forms its endings from the tense: in {читаю}, {читаешь}, {читают}, the stem {чита-} does not move. The essentials have no fixed stem: {есть}, {хотел}, {может}, {шёл}, {был}, {будем} are forms that no rule produces, and they are the ones that appear on every page.

They are few and they weigh a lot. {быть}, {идти}, {ходить}, {приходить}, {есть} (to eat), {пить}, {спать}, {видеть}, {слышать}, {знать}, {думать}, {говорить}, {сказать}, {любить}, {хотеть}, {мочь}, {дать}, {взять}, {делать}, {читать}, {писать} cover almost everything said in a chapter of a Gospel.

## {Быть}: the verb with no present

Russian does not inflect {быть} in the present. Where Portuguese says "I am", "he is", "we are", Russian puts zero form: {я студент}, {он доктор}, {мы здесь}. The present of {быть} is an empty space, and that emptiness between subject and predicate is what makes the Russian sentence move.

The past came out as {был}, {была}, {было}, {были}; the future as {буду}, {будешь}, {будет}, {будем}, {будете}, {будут}. The 3rd person singular has another face: {есть} also says "there is, it is" in ontological statements, as in {в начале было Слово}, where {было} is neuter because {Слово} is neuter.

Whoever learns to speak Russian translates into Portuguese as if the empty space were a verb and says "I am here"; whoever speaks Russian puts blank where Portuguese expects a form. Both languages say the same thing, one with a sign and one without.

## {Хотеть}: the infinitive that stays without a particle

{Хотеть}, "to want", has a first person in {-у} and the rest of the conjugation otherwise: {хочу}, {хочешь}, {хочет}, {хотим}, {хотите}, {хотят}. It mixes two conjugations, and that is why the Russian ear knows it even without ever seeing the word.

When someone wants to do something, Russian puts the infinitive direct: {я хочу читать}, {он хочет уйти}. There is no equivalent of the particle {чтобы} that Spanish and Portuguese require when the subject changes: {я хочу, чтобы ты пришёл} has to show the new subject with {чтобы}.

## Aspect: the pair one verb makes

Every Russian verb comes in a pair of aspects. The imperfective speaks of the act in progress, incomplete, iterative: {читать}. The perfective speaks of the act concluded, closed with a result: {прочитать}. The perfective verb has no true present — {прочитаю} is a simple future, and it only says "I will read it to the end". The imperfective has the present: {читаю} is what is happening now.

The choice cannot be translated by tense alone. "I read the book" can be {я читал} (I read it, with no endpoint) or {я прочитал} (I finished it, the book is read). Russian marks with the prefix {про-} what Portuguese marks with context.

## In the Bible

John 1:1 has {В начале было Слово}, in the beginning was the Word. {было} is the neuter past of {быть}, and {Слово} is neuter because in the Gospel the identity of the Word is stated without article. John 3:16 has {возлюбил Бог мир}, the past perfective of {возлюбить}, to love, because what God did is a concluded fact.

Mark 4:39 has {Замолчи и перестань бушевать}, two perfective imperatives: {замолчи} is the imperative of {замолчать}, to stop talking, and {перестань} is of {перестать}, to stop doing. The Greek is an aorist imperative, and Russian renders it by perfective because it means exactly "stop at once".

The careful reader notices that the Russian verb chooses aspect before tense. {Был} or {читал} do not decide whether the clause is past; {был} speaks of what was, {читал} speaks of what one used to do with no endpoint. {Прочитал} and {увидел} say that something happened and ended. Tense lives in the endings; aspect lives in the prefix or in the stem itself.`),
  vocab: [
    V('быть', 'быть', 'to be, to have'),
    V('был', 'быть', 'he was'),
    V('было', 'быть', 'it was (neuter)'),
    V('буду', 'быть', 'I shall be'),
    V('есть', 'есть', 'to eat; to be (copula)'),
    V('идти', 'идти', 'to go on foot'),
    V('пойти', 'пойти', 'to go (perf.)'),
    V('хотеть', 'хотеть', 'to want'),
    V('хочу', 'хотеть', 'I want'),
    V('мочь', 'мочь', 'to be able'),
    V('могу', 'мочь', 'I can'),
    V('дать', 'дать', 'to give (perf.)'),
    V('взять', 'взять', 'to take (perf.)'),
    V('читать', 'читать', 'to read (imperf.)'),
    V('прочитать', 'прочитать', 'to read (perf.)'),
    V('видеть', 'видеть', 'to see (imperf.)'),
    V('сказать', 'сказать', 'to say (perf.)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Russian does not inflect {быть} in the present: {я студент}, {он доктор}, {мы здесь}. The present is zero.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Every Russian verb comes in a pair: imperfective ({читать}, {писать}, {делать}) and perfective ({прочитать}, {написать}, {сделать}). The perfective has no real present.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{хочу} is the 1st person of {хотеть}, an irregular form in {-у}; its object is a bare infinitive: {я хочу читать}. With a change of subject {чтобы} comes in: {я хочу, чтобы он пришёл}.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{прочитаю}, {напишу}, {сделаю} are simple futures because the perfective does not inflect a present: what looks like a perfective present is the future.',
      ),
    },
    {
      n: '§5',
      text: T(
        'The imperative drops the ending of the 2nd person: {читай}, {пиши}, {иди}. The perfective gives the order for what gets done once: {прочитай}, {напиши}.',
      ),
    },
  ],
  notes: [
    {
      label: T('{Есть} is two verbs in one word'),
      text: T(
        '{есть} says "to eat" (imperfective, with past {ел}), and in {это есть истина} it shows up as the copula of ontological identity — the same word with two clause meanings.',
      ),
    },
    {
      label: T('{Мочь} and the perfective future'),
      text: T(
        '{мочь} has a rare perfective future; Russian prefers {смогу}, the present of the perfective {смочь}. So what looks like the present of {смочь} is the future, and {мог} is the only past {мочь} has.',
      ),
    },
  ],
  examples: [
    { text: 'В начале было Слово.', gloss: T('{было}: neuter past of {быть} (Jn 1:1).') },
    { text: 'Я студент.', gloss: T('Zero copula: the present of {быть} is not written.') },
    { text: 'Он был дома.', gloss: T('{был}: past of {быть}, 3rd masc.') },
    { text: 'Я буду дома.', gloss: T('{буду}: future of {быть}, 1st sing.') },
    {
      text: 'Я хочу читать.',
      gloss: T('{хочу} + infinitive: the infinitive carries no particle.'),
    },
    {
      text: 'Она хочет прийти.',
      gloss: T('{хочет}: 3rd sing. of {хотеть}; {прийти} is perfective.'),
    },
    { text: 'Я читаю.', gloss: T('{читаю}: imperfective present, now.') },
    {
      text: 'Я прочитаю.',
      gloss: T('{прочитаю}: perfective, a future shape — there is no perfective present.'),
    },
    {
      text: 'Замолчи и перестань.',
      gloss: T('Perfective imperatives: {замолчи} and {перестань} (Mk 4:39).'),
    },
    { text: 'Он взял хлеб.', gloss: T('{взял}: past of the perfective {взять}, to take.') },
  ],
  tables: [
    {
      caption: T('Present of the essentials'),
      head: ['Лицо', 'идти', 'хотеть', 'мочь', 'дать (perf)', 'читать'],
      rows: [
        ['я', 'иду', 'хочу', 'могу', 'дам', 'читаю'],
        ['ты', 'идёшь', 'хочешь', 'можешь', 'дашь', 'читаешь'],
        ['он/она', 'идёт', 'хочет', 'может', 'даст', 'читает'],
        ['мы', 'идём', 'хотим', 'можем', 'дадим', 'читаем'],
        ['вы', 'идёте', 'хотите', 'можете', 'дадите', 'читаете'],
        ['они', 'идут', 'хотят', 'могут', 'дадут', 'читают'],
      ],
    },
    {
      caption: T('The aspect pair of the essentials'),
      head: [T('imperfective'), T('perfective'), T('gloss')],
      rows: [
        ['читать', 'прочитать', T('to read')],
        ['писать', 'написать', T('to write')],
        ['делать', 'сделать', T('to do')],
        ['говорить', 'сказать', T('to say')],
        ['видеть', 'увидеть', T('to see')],
        ['брать', 'взять', T('to take')],
        ['давать', 'дать', T('to give')],
        ['идти', 'пойти', T('to go on foot')],
      ],
    },
    {
      caption: T('Past of the essentials'),
      head: ['инфинитив', 'я', 'она', 'они'],
      rows: [
        ['быть', 'был', 'была', 'были'],
        [T('есть (to eat)'), 'ел', 'ела', 'ели'],
        ['хотеть', 'хотел', 'хотела', 'хотели'],
        ['мочь', 'мог', 'могла', 'могли'],
        ['дать', 'дал', 'дала', 'дали'],
        ['взять', 'взял', 'взяла', 'взяли'],
        ['идти', 'шёл', 'шла', 'шли'],
        ['прийти', 'пришёл', 'пришла', 'пришли'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the 1st person form of {хотеть}?'),
    options: [T('{хочу}'), T('{хочешь}'), T('{хотю}'), T('{хочю}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "В начале было ___" with the subject of John 1:1.'),
      answer: 'Слово',
    },
    {
      kind: 'match',
      prompt: T('Match each imperfective verb to its perfective pair.'),
      pairs: [
        { a: T('{читать}'), b: T('{прочитать}') },
        { a: T('{писать}'), b: T('{написать}') },
        { a: T('{делать}'), b: T('{сделать}') },
        { a: T('{говорить}'), b: T('{сказать}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In "Я прочитаю", the form is:'),
      options: [
        T('perfective present'),
        T('simple future with perfective aspect'),
        T('imperative'),
        T('imperfective past'),
      ],
      answer: 1,
    },
  ],
};
