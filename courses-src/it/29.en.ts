import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Italian grammar: a map'),
  subtitle: T('articolo, nome, aggettivo; verbo, complemento'),
  section: T('Reading and syntax'),
  body: C(`## The noun phrase and the verb phrase

Every Italian noun phrase has **article** and **noun**, in that order, and the article is what determines. The **adjective** follows and agrees in gender and number: "{il} {libro} {nuovo}", "{i} {libri} {nuovi}", "{la} {casa} {grande}", "{le} {case} {grandi}". A **genitive** may come after that, and a genitive is {di} plus a noun with no article: "{il} {libro} {di Paolo}", "{la} {luce} {della} {lampada}".

Every verb phrase has a **verb** and may have a **complement**, and the complement comes after: {verbo} + {complemento}, "{leggere} {il libro}", "{andare} {a} {Roma}". What changes the sentence is the **mood** of the verb: the indicative says what happens, the subjunctive says what is supposed, and the preposition settles the rest.

## {a} and {in} for place, {di} and {da} for origin

Four prepositions split into two pairs, and the distinction is always the same: **direction** against **permanence**, **origin** against **provenance**.

**{a}** is direction, {in} is permanence: "vado {a} {casa}" (I am going home), "sono {in} {casa}" (I am at home). In Italian, with a geographical place, {a} still holds: "vado {a} {Roma}", "vado {a} {lavoro}".

**{di}** is origin with no starting point marked, {da} is origin *from* a point or from an agent: "vengo {da} {Italia}" (I come from Italy), "vengo {di} {Milano}" (I come from Milan, or I am a Milanese). And "fu scritto {da} {Giovanni}" only exists with {da}: the agent is a person acting *from* somewhere.

## The same words in different functions

What jams hardest in Italian is not the vocabulary: it is {la}, {il}, {che}, {a} and {di} turning up in different roles without changing shape.

{La} is an article in "{la} {casa}" and an emphatic pronoun in "{la} {vedo}". {Il} is an article in "{il} {libro}" and the article back again in a relative: "{il} {cui nome}", "{il} {quale}". {Che} is relative in "{il} {libro} {che leggo}" and interrogative in "{Che} {dice?}". {Di} is a preposition in "{di} {Paolo}" and a noun of action in "{il} {cantare}", "{il} {leggere}". {Da} is a preposition in "{da} {Roma}" and a periphrasis in "{da} {leggere}", which means "to be read", not "of a reading".

## In the Bible

John 1:1 is a noun phrase and a verb phrase laid over each other: "{In} {principio} {era} {la} {Parola}". {In} is a preposition, {principio} is a noun with no article because it is abstract, {era} is the verb, {la} is the article and {Parola} is the head. Translating {in} as "inside" and {principio} as "a beginning" takes the sentence apart.

John 1:3 adds what the map needs to show: "{Tutto} per lui è stato fatto, e senza di lui non è stato fatto nulla di ciò che esiste". {Tutto} is a pronoun with no article, {nulla} is an indefinite, and {ciò che esiste} is a relative in which the relative {che} is the subject: {esiste} is the verb and {ciò} is what exists.

## Reading criterion

Mark the article of every noun and the mood of every verb in the text. Where a noun has no article, ask whether it is a proper name, a numeral or an indirect; where there is a subjunctive, ask whether {che}, {se} or {non} is nearby, because those are what pull the subjunctive in.`),
  vocab: [
    V('articolo', 'articolo', 'article'),
    V('nome', 'nome', 'noun'),
    V('aggettivo', 'aggettivo', 'adjective'),
    V('genitivo', 'genitivo', 'genitive'),
    V('verbo', 'verbo', 'verb'),
    V('soggetto', 'soggetto', 'subject'),
    V('complemento', 'complemento', 'complement'),
    V('preposizione', 'preposizione', 'preposition'),
    V('a', 'a', 'to (direction)'),
    V('in', 'in', 'in (permanence)'),
    V('di', 'di', 'of'),
    V('da', 'da', 'from (origin, agent)'),
    V('principio', 'principio', 'beginning'),
    V('Parola', 'parola', 'Word'),
    V('tutto', 'tutto', 'everything'),
    V('nulla', 'nulla', 'nothing'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence marks permanence rather than direction?'),
    options: [T('Vado a casa.'), T('Sono in casa.'), T('Vado a Roma.'), T('Vado al lavoro.')],
    answer: 1,
    hint: T('In marks place where one stays.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('How do you say Paul’s book?'),
      options: [
        T('il libro di Paolo'),
        T('il libro da Paolo'),
        T('il libro a Paolo'),
        T('il libro in Paolo'),
      ],
      answer: 0,
      hint: T('Possession is di; da stays with origin and agent.'),
    },
    {
      kind: 'choose',
      prompt: T('In da leggere, what does it mean?'),
      options: [T('of a reading'), T('to be read'), T('reading'), T('of who reads')],
      answer: 1,
      hint: T('Da plus a participle is the passive.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the genitive: la luce ___ lampada (da)'),
      answer: 'della',
      hint: T('Di + la fuses.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Every noun phrase has an article and a noun; a noun with no article is a proper name, a numeral or an indirect.',
      ),
    },
    {
      n: '2',
      text: T(
        'The genitive is di plus a noun, and that noun never takes an article: il libro di Paolo.',
      ),
    },
    { n: '3', text: T('A marks direction, in marks permanence: vado a casa / sono in casa.') },
    {
      n: '4',
      text: T(
        'Da marks origin from a point and the agent: vengo dall’Italia, fu scritto da Giovanni.',
      ),
    },
    {
      n: '5',
      text: T('La, il, che, di and da change function without changing form; position decides.'),
    },
  ],
  notes: [
    {
      label: T('Noun with no article'),
      text: T(
        'The article drops in four cases: a proper noun ({Dio}, {Milano}), a numeral ({tre libri}), an indirect that already does its job ({ogni uomo}, {qualche libro}) and an abstract noun in a poetic register ({principio}, {verità}). Outside those, the omission sounds like an error.',
      ),
    },
    {
      label: T('A noun made from a verb'),
      text: T(
        'A verb can become a noun: {il} {movimento}, {la} {costruzione}, {il} {pagamento}, {la} {lettura}, {il} {camminare}. In that case the {di} of the preposition becomes a noun of action: "il modo di pensare", "le braccia della croce". Context tells you whether the noun is the thing or the act.',
      ),
    },
  ],
  examples: [
    { text: 'Il libro nuovo di Paolo.', gloss: T('Paul’s new book.') },
    { text: 'I libri nuovi della classe.', gloss: T('The class’s new books.') },
    { text: 'La luce della lampada.', gloss: T('The light of the lamp.') },
    { text: 'Vado a casa.', gloss: T('I am going home.') },
    { text: 'Sono in casa.', gloss: T('I am at home.') },
    { text: 'Vengo da Italia.', gloss: T('I come from Italy.') },
    { text: 'Il Vangelo fu scritto da Giovanni.', gloss: T('The Gospel was written by John.') },
    { text: 'Un libro da leggere.', gloss: T('A book to read.') },
    { text: 'Il cantare è la preghiera.', gloss: T('Singing is prayer.') },
    { text: 'Ciò che esiste.', gloss: T('What exists.') },
  ],
  tables: [
    {
      caption: T('La frase nominal'),
      head: ['Pieza', 'Función', 'Esempio'],
      rows: [
        ['articolo', 'determina', 'il libro'],
        ['nome', 'nucleo', 'libro'],
        ['aggettivo', 'qualifica', 'libro nuovo'],
        ['genitivo', 'especifica', 'libro di Paolo'],
        ['numeral', 'conta', 'tre libri'],
      ],
    },
    {
      caption: T('La frase verbal'),
      head: ['Pieza', 'Función', 'Esempio'],
      rows: [
        ['verbo', 'núcleo', 'leggere'],
        ['soggetto', 'quién actúa', 'Maria'],
        ['complemento directo', 'lo que se alcanza', 'il libro'],
        ['complemento indirecto', 'a quién', 'a Paolo'],
        ['complemento avverbiale', 'dónde, cuándo, cómo', 'a casa'],
        ['predicativo', 'identifica', 'è medico'],
      ],
    },
    {
      caption: T('La misma palabra en funciones distintas'),
      head: ['Parola', 'Función 1', 'Función 2'],
      rows: [
        ['la', 'artículo (la casa)', 'pronombre (la vedo)'],
        ['il', 'artículo (il libro)', 'artículo en relativa (il cui nome)'],
        ['che', 'relativo (che leggo)', 'interrogativo (Che dice?)'],
        ['a', 'preposición (a casa)', 'verbo avere (a = tiene)'],
        ['di', 'preposición (di Paolo)', 'nombre de acción (il cantare)'],
        ['da', 'preposición (da Roma)', 'pasiva (da leggere)'],
      ],
    },
  ],
};
