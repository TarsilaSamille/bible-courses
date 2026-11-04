import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  section: T('Syntax'),
  title: T('Government: the verbs that hold you up'),
  subtitle: T('confiar em, concordar com, lembrar-se de, and the ones that shift'),
  body: C(`## The verb that comes with no preposition and the one that requires it

Government is the preposition a verb demands before its complement. Some verbs do without it: {confio nele} gives {confio} and {confio em você}; {concordo com ele} gives {concordo} and {concordo com você}. The preposition is not decoration: without it the verb is left without an object, and the reader feels that something is missing.

What slows a reader down is the opposite: verbs that **require** a preposition and that the grammar never warns about. {Depender de}, {proceder de}, {necessitar de}, {participar de}, {visar a}, {ater-se a}, {lembrar-se de}, {esquecer-se de}, {reportar-se a}. All of them are born with a preposition glued on, and the preposition is as much part of the word as the root.

## The group with com and the group with de

Verbs of agreement take {com}: {concordar com}, {lidiar com}, {conformar-se com}, {coincidir com}. Verbs of need and participation take {de}: {necessitar de}, {participar de}, {tratar de}, {fazer-se de}, {dar-se de}. Verbs of direction take {a}: {visar a}, {assistir a}, {proteger a}.

The preposition is not decorative: it says whether the verb is relational. {Concordar} without {com} looks unfinished, because the verb is relational; {participar} without {de} just as much. And Greek settles this with case rather than with a preposition: translating case by case without knowing the preposition writes bad Portuguese and, on top of that, loses the information.

## The ones that shift preposition

Some verbs change preposition with the sense, and they are the ones that produce wrong translations. {Assistir} a service is to be present; {assistir} ill is to have the illness. {Informar} someone is to warn them; {informar} about something is to report. {Visar} a target is to aim at it; {visar} at an end is to have it as a goal.

The practical rule: when a verb has two constructions, the complement decides. If the complement is a person the preposition is usually direct or {a}; if it is a thing or a subject, it is usually {sobre}, {em} or {de}.

## Reading criterion

With any transitive verb, ask: which preposition does it require? Does the verb have more than one government? And is the complement a person, a thing or a subject?

In Acts 2:38 the verb is {sede bautizados}, with no preposition at all: the participle serves as the verb and the noun {todos} is the subject. The sentence is short because Greek had no preposition either, and a translator who adds one produces a word the original does not have.`),
  vocab: [
    V('a regência', 'regência', 'government (of verbs)'),
    V('confiar em', 'confiar', 'confiar em'),
    V('concordar com', 'concordar', 'concordar com'),
    V('depender de', 'depender', 'depender de'),
    V('lembrar-se de', 'lembrar-se', 'lembrar-se de'),
    V('esquecer-se de', 'esquecer-se', 'esquecer-se de'),
    V('necessitar de', 'necessitar', 'necessitar de'),
    V('participar de', 'participar', 'participar de'),
    V('proceder de', 'proceder', 'proceder de'),
    V('visar a', 'visar', 'visar a'),
    V('assistir a', 'assistir', 'assistir a'),
    V('implicar em', 'implicar', 'implicar em'),
    V('ater-se a', 'ater-se', 'ater-se a'),
    V('reportar-se a', 'reportar-se', 'reportar-se a'),
    V('informar sobre', 'informar', 'informar sobre'),
    V('o complemento', 'complemento', 'the complement'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Government is the preposition a verb requires: {confiar em}, {concordar com}, {depender de}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Verbs of agreement take {com}; verbs of need and participation take {de}; verbs of direction take {a}.',
      ),
    },
    {
      n: '§3',
      text: T('Some verbs change preposition with the sense: {assistir a} and {assistir de}.'),
    },
    {
      n: '§4',
      text: T(
        'When a verb has two governments, the complement decides: a person takes {a}, a subject takes {sobre} or {em}.',
      ),
    },
    {
      n: '§5',
      text: T('Not every transitive verb requires a preposition: {sede bautizados} takes none.'),
    },
  ],
  notes: [
    {
      label: T('Biblical × everyday'),
      text: T(
        'Greek and Hebrew mark the relation by case and by particle, Portuguese by preposition. Translating case by case without knowing the preposition produces a sentence that looks correct and does not mean the same thing.',
      ),
    },
    {
      label: T('Careful with assistir'),
      text: T(
        '{Assistir} a meeting is to be present; {assistir} ill is to have the illness. One word with two opposite governments is what makes biblical reading stumble.',
      ),
    },
  ],
  examples: [
    { text: 'Confio em Deus.', gloss: T('Verb with a required preposition.') },
    { text: 'Concordo com a tua leitura.', gloss: T('Relational verb: it takes {com}.') },
    { text: 'Depende da vontade dele.', gloss: T('Fixed government: {de}.') },
    { text: 'Lembrei-me da promessa.', gloss: T('{Lembrar-se} requires {de}.') },
    { text: 'Esqueceu-se de tudo.', gloss: T('The same group as {esquecer-se de}.') },
    { text: 'Necessitava de descanso.', gloss: T('{De} in the government, not {para}.') },
    { text: 'Assistiu à reunião.', gloss: T('One of the senses of {assistir}.') },
    { text: 'Assistiu de febre.', gloss: T('The other sense: to be ill.') },
  ],
  tables: [
    {
      caption: T('Government by group'),
      head: ['Grupo', 'Preposição', 'Verbos'],
      rows: [
        ['concordância', 'com', 'concordar com, coincidir com, conformar-se com'],
        ['necessidade', 'de', 'necessitar de, tratar de, fazer-se de'],
        ['participação', 'de', 'participar de, assistir de'],
        ['direção', 'a', 'visar a, assister a, proteger a'],
        ['origem', 'de', 'proceder de, resultar de, advir de'],
        ['confiança', 'em', 'confiar em, crer em, insistir em'],
      ],
    },
    {
      caption: T('Verbs with two governments'),
      head: ['Verbo', 'Primeira regência', 'Segunda regência'],
      rows: [
        ['assistir', 'assistir a (estar presente)', 'assistir de (ter a doença)'],
        ['informar', 'informar alguém', 'informar sobre algo'],
        ['visar', 'visar a um alvo', 'visar a um fim'],
        ['implicar', 'implicar em algo', 'implicar algo'],
        ['proceder', 'proceder de algo', 'proceder bem'],
      ],
    },
    {
      caption: T('What decides the preposition'),
      head: ['Complemento', 'Preposição típica', 'Exemplo'],
      rows: [
        ['pessoa', 'a ou direta', 'assistir ao pai'],
        ['assunto', 'sobre, em, de', 'informar sobre o caso'],
        ['origem', 'de', 'proceder de Deus'],
        ['finalidade', 'a', 'visar ao bem'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which construction is correct?'),
    options: [T('confio em Deus'), T('confio de Deus'), T('confio com Deus'), T('confio a Deus')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{concordar} requires the preposition ______.'),
      answer: 'com',
      hint: T('It is a relational verb.'),
    },
    {
      kind: 'choose',
      prompt: T('In “assistiu de febre”, {assistir} means:'),
      options: [T('to be ill'), T('to be present'), T('to watch'), T('to ask for help')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the verb to the preposition.'),
      pairs: [
        { a: T('concordar com'), b: T('com') },
        { a: T('necessitar de'), b: T('de') },
        { a: T('visar a'), b: T('a') },
        { a: T('confiar em'), b: T('em') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
