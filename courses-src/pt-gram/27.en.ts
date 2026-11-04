import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('The clause and its terms'),
  title: T('Analyzing integrating terms'),
  subtitle: T('Objects, noun complements and passive agents'),
  body: C(`**Overview.** The {direct object} completes a transitive verb with no preposition: in {Deus criou os céus}, {os céus} is a direct object, and the question that reveals it is {what?}.

**Rule 1.** The {indirect object} is introduced by the preposition the verb requires: in {falou a Moisés}, {a} comes from {falar}, and {Moisés} is the indirect object.

**Rule 2.** The {noun complement} completes a noun and not a verb: in {o amor de Deus}, what requires the preposition {de} is the noun {amor}.

**Rule 3.** The {agent of the passive} is the subject of the passive construction and comes with {por}: in {o mundo foi criado por Deus}, {por Deus} performs the action, and the patient is {o mundo}.

**Rule 4.** The order of the indirect and direct objects follows government: in {Dei o livro ao amigo}, {o livro} comes first because it is the older order of the two objects.

**Application.** In {τῷ θεῷ δόξα} ({a Deus glória}), the case is the key: {τῷ θεῷ} is in the **dative** and is the **indirect object** of {δόξα}, which in Greek is a verb; {a Deus} is indirect and {glória} is the subject. In Portuguese the sentence appears inverted ({glória a Deus}), and translating term by term loses the fact that in Greek the **subject comes after** and the indirect object **before**.

**Check.** For each term, ask: does it complete a **verb** or a **noun**? If it completes a noun, it is a **noun complement**. If it completes a verb, is the verb **direct transitive**, **indirect** or **copulative**? Is the required preposition there? And in the **passive**, the term with {por} is the **agent**, not an object. Four questions, and the term is classified.`),
  vocab: [
    V('objeto direto', 'objeto direto', 'complement of the verb without a preposition'),
    V('objeto indireto', 'objeto indireto', 'complement of the verb with a preposition'),
    V(
      'objeto direto indireto',
      'objeto direto indireto',
      'the second object of a ditransitive verb',
    ),
    V('complemento nominal', 'complemento nominal', 'complement of a noun'),
    V('agente da passiva', 'agente da passiva', 'subject of the passive construction'),
    V('preposição', 'preposição', 'links verb and complement'),
    V('transitividade', 'transitividade', 'degree of completeness of the verb'),
    V('completar', 'completar', 'what the integrating terms do'),
    V('δόξα', 'δόξα', 'a Greek verb, not a noun'),
    V('τῷ θεῷ', 'τῷ θεῷ', 'Greek dative of {θεός}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The {direct object} completes a transitive verb with no preposition: in {Deus criou os céus}, {os céus} is a direct object, and the question that reveals it is {what?}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'The {indirect object} is introduced by the preposition the verb requires: in {falou a Moisés}, {a} comes from {falar}, and {Moisés} is the indirect object.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The {noun complement} completes a noun and not a verb: in {o amor de Deus}, what requires the preposition {de} is the noun {amor}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The {agent of the passive} is the subject of the passive construction and comes with {por}: in {o mundo foi criado por Deus}, {por Deus} performs the action, and the patient is {o mundo}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'The order of the indirect and direct objects follows government: in {Dei o livro ao amigo}, {o livro} comes first because it is the older order of the two objects.',
      ),
    },
  ],
  notes: [
    {
      label: T('The Greek verb that became a noun in Portuguese'),
      text: T(
        'In {τῷ θεῷ δόξα}, {δόξα} is a verb in Greek and {τῷ θεῷ} is its indirect object; the whole phrase is a clause with a verb. Portuguese {glória a Deus} inverted the positions and turned {δόξα} into a noun, with {a Deus} as a noun complement. The Greek structure does not survive the translation, and that is why the reading of Romans 11:36 changes with the version.',
      ),
    },
    {
      label: T('The preposition Greek does without'),
      text: T(
        'The Greek {dative} is rendered now by {a}, now by {para}, now with no preposition at all: {τῷ θεῷ} became {a Deus}, but {τῷ ἀνθρώπῳ} became {para o homem} in one Portuguese version and {ao homem} in another. The case is the same; Portuguese has three answers for it, which is why the translator has to decide.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus criou os céus e a terra.',
      gloss: T('Two direct objects: {os céus} and {a terra}, linked by {e}.'),
    },
    {
      text: 'Deus deu o seu Filho ao mundo.',
      gloss: T('Two objects: {o seu Filho} direct and {ao mundo} indirect, governed by {dar}.'),
    },
    {
      text: 'Falei a Moisés.',
      gloss: T('Indirect object {a Moisés}, with the preposition {a} required by {falar}.'),
    },
    {
      text: 'Confiou nele.',
      gloss: T('Indirect object {nele}, with {em} fused to {ele} by crasis.'),
    },
    {
      text: 'o amor de Deus',
      gloss: T('Noun complement {de Deus}: the noun {amor} requires the preposition.'),
    },
    {
      text: 'a necessity of dying',
      gloss: T(
        'The {d} comes from {necessidade}, which requires the preposition, not from the verb {necessitar}.',
      ),
    },
    {
      text: 'o mundo foi criado por Deus.',
      gloss: T('Passive: {o mundo} is the patient subject and {por Deus} the agent.'),
    },
    {
      text: 'a decisão do rei',
      gloss: T('Noun complement {do rei}; the verb {decidir} is not in the sentence.'),
    },
    {
      text: 'τῷ θεῷ δόξα',
      gloss: T('In Greek, {δόξα} is a verb and {τῷ θεῷ} the indirect object in the dative.'),
    },
  ],
  tables: [
    {
      caption: T('Integrating terms by kind of governor'),
      head: [T('Regente'), T('Termo'), T('Como se reconhece'), T('Exemplo')],
      rows: [
        [
          T('verbo transitivo direto'),
          T('{objeto direto}'),
          T('responde a {o que?}'),
          T('{os céus} em {criou os céus}'),
        ],
        [
          T('verbo transitivo indireto'),
          T('{objeto indireto}'),
          T('vem com preposição exigida'),
          T('{a Moisés} em {falou a Moisés}'),
        ],
        [
          T('verbo bitransitivo'),
          T('dois objetos'),
          T('direto e indireto'),
          T('{dar} em {Deu o Filho ao mundo}'),
        ],
        [
          T('verbo de ligação'),
          T('{predicativo}'),
          T('atribui qualidade'),
          T('{bom} em {Deus é bom}'),
        ],
        [
          T('nome'),
          T('{complemento nominal}'),
          T('completa o nome'),
          T('{de Deus} em {o amor de Deus}'),
        ],
        [
          T('construção passiva'),
          T('{agente da passiva}'),
          T('vem com {por}'),
          T('{por Deus} em {criado por Deus}'),
        ],
      ],
    },
    {
      caption: T('Indirect objects: pronoun or noun'),
      head: [T('Tipo'), T('Forma'), T('Frase'), T('Observação')],
      rows: [
        [
          T('nome'),
          T('artigo ou demonstrativo + substantivo'),
          T('{falou a Moisés}'),
          T('a preposição aparece'),
        ],
        [T('pronome oblíquo'), T('{lhe}, {them}, {nós}'), T('{falou-lhe}'), T('a preposição some')],
        [T('pronominal'), T('{me}, {te}, {se}'), T('{falou-me}'), T('o pronome vira {}')],
        [
          T('crase obrigatória'),
          T('{a} + artigo {a}'),
          T('{falou à árvore}'),
          T('a crase fecha o conjunto'),
        ],
      ],
    },
    {
      caption: T('The order of the two objects'),
      head: [T('Ordem'), T('Exemplo'), T('Qual vem primeiro'), T('Observação')],
      rows: [
        [
          T('mais antiga'),
          T('{dei o livro ao amigo}'),
          T('o indireto'),
          T('segue a ordem do latim'),
        ],
        [
          T('mais comum hoje'),
          T('{dei ao amigo o livro}'),
          T('o direto'),
          T('prevalece no uso corrente'),
        ],
        [
          T('com pronome oblíquo'),
          T('{dei-lhe o livro}'),
          T('o pronome'),
          T('o indireto vem por força'),
        ],
        [
          T('com nome próprio'),
          T('{vi-o ao Senhor}'),
          T('o pronome'),
          T('o nome próprio vem depois'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {o amor de Deus}, the term {de Deus} is:'),
    options: [
      T('a noun complement, because it completes the noun {amor}'),
      T('an indirect object of an implied verb'),
      T('the agent of the passive of {amor}'),
      T('a nominal adjunct characterizing {amor}'),
    ],
    answer: 0,
    hint: T('What requires the preposition is the noun, not a verb.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {o mundo foi criado por Deus}, {por Deus} is:'),
      options: [
        T('the agent of the passive, because it performs the action'),
        T('the direct object of {criado}'),
        T('a noun complement of {mundo}'),
        T('an adverbial adjunct of place'),
      ],
      answer: 0,
      hint: T('In the passive, the term with {por} is who acts, not who suffers.'),
    },
    {
      kind: 'match',
      prompt: T('Match each term to what requires it.'),
      pairs: [
        { a: T('{os céus} in {criou os céus}'), b: T('direct transitive verb') },
        { a: T('{a Moisés} in {falou a Moisés}'), b: T('verb with a required preposition') },
        { a: T('{de Deus} in {o amor de Deus}'), b: T('the noun {amor}') },
        { a: T('{bom} in {Deus é bom}'), b: T('the copula {é}') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('undefined'),
      answer: 'complemento nominal',
      hint: T('In {a palavra de Deus}, what is completed is {palavra}.'),
    },
  ],
};
