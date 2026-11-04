import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Present-tense verbs'),
  subtitle: T('amar, crer, partir and irregular verbs'),
  section: T('The verb: form and tense'),
  body: C(`## Three senses for one form

The Portuguese present describes habit, current fact, or permanent truth, and the form is the same in all three. What changes is what the speaker means, and context decides. “I love my friends” is habit; “he loves” may be what is happening now; “God is love” (1 John 4:8) is not a statement about what God will do, it is a statement about what he is.

In biblical texts the present is famous for exactly this. John 3:16 says {creram} in the imperfect, but 1 John 4:8 and John 14:6 use the present for what has no date: {Deus é amor}, {Eu sou o caminho}. Rendering them as {será} or {seria} keeps the grammar of the verb and breaks the statement.

## The endings and the {-ir} trap

The regular endings of {amar} are {-o, -as, -a, -amos, -am}; those of {crer} are {-o, -es, -e, -emos, -em}; those of {partir} are {-o, -es, -e, -imos, -em}. Only the {-ir} ending swaps {-e} for {-i} in the present: it is the single ending that makes an {-ir} infinitive follow the {-er} pattern.

That is the trap in the biblical text: {partimos} and {-imos}, not {partemos} and {-emos}. The form {cremos} exists and belongs to {crer}; {partimos} belongs to {partir} and to nothing else.

The most frequent irregular verbs are {ser}, {ter}, {ir}, {dizer}, {fazer} and {haver}. No rule produces them: {sou} and {são} come from Latin, and {temos} swaps the {-n} of Latin {tenemus} for an {-m}.

## What the form does not tell you

The form {creio} is the first-person present of {crer}, and it is the pair that gets confused with {crio}, the present of {criar}. The difference is what the {e} does: {cr-e-io} has {ei}, {cr-io} does not.

The preposition {em} also changes the sense without changing the form. {creio} alone is incomplete, and {creio em Deus} says that I believe God exists and is trustworthy. John 3:15 has {πιστεύω} with {εἰς} in Greek, and it is the dative {εἰς} that {em} renders.

## Reading criterion

With any present-tense verb, ask: is it {amar} or {partir}, and does the ending confirm it? Is it irregular, and then which irregular form? Is there a preposition attached, as the {em} of {creio em}? Those three answers settle the verb before the person decides the rest.`),
  vocab: [
    V('amo', 'amar', 'I love'),
    V('ama', 'amar', 'he loves'),
    V('creio', 'crer', 'I believe'),
    V('crê', 'crer', 'he believes'),
    V('sou', 'ser', 'I am'),
    V('é', 'ser', 'he is'),
    V('tenho', 'ter', 'I have'),
    V('diz', 'dizer', 'he says'),
    V('vem', 'vir', 'he comes'),
    V('está', 'estar', 'he is'),
    V('amar', 'amar', 'to love'),
    V('criar', 'criar', 'to create'),
    V('fazer', 'fazer', 'to do, to make'),
    V('haver', 'haver', 'to have (impersonal)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the present form of “crer” in the 1st person?'),
    options: [T('creio'), T('creates'), T('I create'), T('I would believe')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete “God ___ love”.'),
      answer: 'é',
      hint: T('Verb ser, 3rd-person present.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence states a permanent truth?'),
      options: [
        T('I love my friends.'),
        T('God is love.'),
        T('He loved the city.'),
        T('I will love my friends.'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match the present form to its person.'),
      pairs: [
        { a: T('I am'), b: T('1st person') },
        { a: T('he is'), b: T('3rd person') },
        { a: T('we have'), b: T('1st-person plural') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The present of {ser} and {ter} follows no rule: {sou}, {és}, {é}, {somos}, {são} and {tenho}, {tens}, {tem}, {temos}, {têm}. They are the two forms the biblical text repeats on every page.',
      ),
    },
    {
      n: '§2',
      text: T(
        'An {-ir} verb takes {-o, -es, -e, -imos, -em}: {parto}, {partes}, {parte}, {partimos}, {partem}. Only {-ir} swaps the present {-e} for {-i}.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{cr-e-io} has {ei} and {cr-io} does not: the {e} is what separates {creio} from {crio}, not the letter that follows.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{creio} alone is incomplete; {creio em Deus} is what says I believe he exists and is trustworthy, and the {em} is what adds that.',
      ),
    },
    {
      n: '§5',
      text: T(
        'In a dateless present, {Deus é amor} (1 John 4:8) and {Eu sou o caminho} (John 14:6) state what the subject is. Rendering them as {será} or {seria} keeps the form and loses the statement.',
      ),
    },
  ],
  notes: [
    {
      label: T('The accent'),
      text: T(
        'In Portugal {falo} and {fales} may take a differential accent that Brazilian Portuguese does not use. These tables follow the Brazilian system, the one of Brazilian Bible translations.',
      ),
    },
    {
      label: T('Greek does it too'),
      text: T(
        'John 3:15 has {πιστεύω} with {εἰς} ({creio em}), and {εἰς} is dative: rendering it as {creio Deus} drops the complement.',
      ),
    },
  ],
  examples: [
    { text: 'Deus é amor.', gloss: T('Present with the value of dateless truth.') },
    { text: 'Eu sou o caminho.', gloss: T('Present that states what Jesus is (John 14.6).') },
    { text: 'Eu creio em Deus.', gloss: T('The {em} completes the meaning of {crer}.') },
    { text: 'Eu amo os meus amigos.', gloss: T('Present of habit, not of event.') },
    { text: 'Ele ama o povo.', gloss: T('May be what is happening now.') },
    { text: 'A multidão grita.', gloss: T('Present in a scene; context supplies the time.') },
    {
      text: 'Nós partimos ao amanhecer.',
      gloss: T('{-imos}: only an {-ir} infinitive swaps the {-e}.'),
    },
    { text: 'Eles creem nos profetas.', gloss: T('{creem} of {crer}, not of {criar}.') },
    { text: 'Não temas, disse ele.', gloss: T('Negation before the verb, present unchanged.') },
  ],
  tables: [
    {
      caption: T('Regular present of the three models'),
      head: ['Pessoa', 'amar', 'crer', 'partir'],
      rows: [
        ['eu', 'amo', 'creio', 'parto'],
        ['tu', 'amas', 'crês', 'partes'],
        ['ele', 'ama', 'crê', 'parte'],
        ['nós', 'amamos', 'cremos', 'partimos'],
        ['eles', 'amam', 'creem', 'partem'],
      ],
    },
    {
      caption: T('The irregulars the text repeats'),
      head: ['Pessoa', 'ser', 'ter', 'haver'],
      rows: [
        ['eu', 'sou', 'tenho', 'hei'],
        ['tu', 'és', 'tens', 'há'],
        ['ele', 'é', 'tem', 'há'],
        ['nós', 'somos', 'temos', 'há'],
        ['eles', 'são', 'têm', 'há'],
      ],
    },
    {
      caption: T('What the present can describe'),
      head: ['Valor', 'Exemplo', 'Referência'],
      rows: [
        ['hábito', 'eu amo os meus amigos', '—'],
        ['fato atual', 'ele ama o povo', '—'],
        ['verdade sem data', 'Deus é amor', '1 Jo 4.8'],
      ],
    },
  ],
};
