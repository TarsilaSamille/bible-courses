import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('The clause and its terms'),
  title: T('Complete syntactic analysis'),
  subtitle: T('Ordered identification of terms'),
  body: C(`**Overview.** First isolate {subject} and {predicate}; then examine the remaining terms: in {criou Deus os céus}, the verb {criou} comes before the subject, and the order does not change the analysis.

**Rule 1.** A {determiner} is not a nucleus: in {os céus}, the {os} is an article and the nucleus is {céus}; what answers {what?} is the noun, not the article.

**Rule 2.** The {required preposition} decides between {indirect object}, {noun complement} and {adverbial adjunct}: in {falou a Moisés}, what requires {a} is the verb {falar}.

**Rule 3.** The {nucleus test} separates article from object: if in {criou os céus} the {os} were the object, the noun {céus} would be left without a nucleus and the sentence would not close.

**Rule 4.** Five questions close the analysis: is the term **required** or **added**? Is it **nucleus** or **determiner**? Does it **agree** with another term? Is the **required preposition** present? And does the **sense** confirm it?

**Application.** In {No princípio criou Deus os céus e a terra}: verb {criou}, active voice, third person singular. Subject {Deus}, determined and postposed. Verbal predicate {criou os céus e a terra}. Direct objects {os céus} and {a terra}. Adverbial adjunct {no princípio}, of time. Notice that {os} and {a} are determiners and not objects, and that nucleus check is what separates {direct object} from {article}.

**Check.** Before saying what a term is, ask five times: is it **required** or **added**? Is it **nucleus** or **determiner**? Does it **agree** with another term? Is the **required preposition** there? And does the **sense** in context confirm it? If any of the five fails, the classification is wrong.`),
  vocab: [
    V('análise sintática', 'análise sintática', 'ordered identification of terms'),
    V('sujeito', 'sujeito', 'term answering who'),
    V('predicado', 'predicado', 'what is declared of the subject'),
    V('objeto direto', 'objeto direto', 'complement of the verb without a preposition'),
    V('objeto indireto', 'objeto indireto', 'complement of the verb with a preposition'),
    V('complemento nominal', 'complemento nominal', 'complement of a noun'),
    V('adjunto', 'adjunto', 'term that can be removed'),
    V('período', 'período', 'complete sequence of clauses'),
    V('núcleo', 'núcleo', 'term that gives the group its sense'),
    V('os céus', 'os céus', 'article plus noun, not an object'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'First isolate {subject} and {predicate}; then examine the remaining terms: in {criou Deus os céus}, the verb {criou} comes before the subject, and the order does not change the analysis.',
      ),
    },
    {
      n: '§2',
      text: T(
        'A {determiner} is not a nucleus: in {os céus}, the {os} is an article and the nucleus is {céus}; what answers {what?} is the noun, not the article.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The {required preposition} decides between {indirect object}, {noun complement} and {adverbial adjunct}: in {falou a Moisés}, what requires {a} is the verb {falar}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The {nucleus test} separates article from object: if in {criou os céus} the {os} were the object, the noun {céus} would be left without a nucleus and the sentence would not close.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Five questions close the analysis: is the term **required** or **added**? Is it **nucleus** or **determiner**? Does it **agree** with another term? Is the **required preposition** present? And does the **sense** confirm it?',
      ),
    },
  ],
  notes: [
    {
      label: T('The Greek order that does not change the analysis'),
      text: T(
        'In {No princípio criou Deus os céus e a terra}, the Greek order (ὁ θεὸς ἐποίησεν τοὺς οὐρανοὺς) puts the subject after the verb and the adjunct first, against modern Portuguese. The analysis is the same in both: what changes is the position, and position is what trips the inexperienced reader, not the structure.',
      ),
    },
    {
      label: T('Why the nucleus test works'),
      text: T(
        'Every phrase has a nucleus, and it is the nucleus that answers the question of content. In {os céus}, {os} is a determiner and {céus} the nucleus. If {os} were the direct object, {céus} would be left loose, and a loose noun completes no verb at all. That is why the test settles in one line what grammar takes three paragraphs to explain.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio criou Deus os céus e a terra.',
      gloss: T(
        'Subject {Deus} postposed; verbal predicate; two direct objects; one adjunct of time.',
      ),
    },
    {
      text: 'Deus criou os céus e a terra.',
      gloss: T('The same sentence in Portuguese order: the analysis does not change.'),
    },
    {
      text: 'os sinais que o Senhor deu',
      gloss: T(
        '{que o Senhor deu} is a restrictive adjective clause of {sinais}; the {os} is an article.',
      ),
    },
    {
      text: 'o amor de Deus pelo mundo',
      gloss: T('Two noun complements: {de Deus} completes {amor} and {pelo mundo} too.'),
    },
    {
      text: 'falou a Moisés e a Arão',
      gloss: T('Two indirect objects governed by the preposition {a} the verb requires.'),
    },
    {
      text: 'a palavra que é vida',
      gloss: T('The adjective clause is the {predicative} of {palavra}, through the verb {é}.'),
    },
    {
      text: 'Jesus chorou no Getsêmani',
      gloss: T(
        '{no Getsêmani} is an adverbial adjunct of place, and it leaves without breaking it.',
      ),
    },
    {
      text: 'o mundo foi criado por Deus',
      gloss: T('{o mundo} is the patient subject and {por Deus} the agent of the passive.'),
    },
    {
      text: 'τῷ θεῷ δόξα',
      gloss: T('In Greek, {δόξα} is a verb and {τῷ θεῷ} the indirect object: the case decides.'),
    },
  ],
  tables: [
    {
      caption: T('The five questions of the analysis'),
      head: [T('Pergunta'), T('Se {sim}'), T('Se {não}'), T('O que foi decidido')],
      rows: [
        [T('é exigido ou acrescentado?'), T('integrante'), T('acessório'), T('a espécie do termo')],
        [
          T('é núcleo ou determinante?'),
          T('núcleo'),
          T('determinante'),
          T('a estrutura do sintagma'),
        ],
        [T('concorda com outro termo?'), T('concordante'), T('invariável'), T('gênero e número')],
        [
          T('a preposição exigida está presente?'),
          T('integrante com preposição'),
          T('sem regência'),
          T('objeto ou complemento'),
        ],
        [
          T('o sentido no contexto confirma?'),
          T('confirmado'),
          T('rever a classificação'),
          T('a leitura final'),
        ],
      ],
    },
    {
      caption: T('How the verb gives the terms'),
      head: [T('Transitividade do verbo'), T('Termos que ele exige'), T('Exemplo'), T('Pergunta')],
      rows: [
        [T('{intransitivo}'), T('nenhum objeto'), T('{Jesus chorou}'), T('{chorou o quê?}')],
        [T('{transitivo direto}'), T('objeto direto'), T('{criou os céus}'), T('{criou o quê?}')],
        [
          T('{transitivo indireto}'),
          T('objeto indireto'),
          T('{falou a Moisés}'),
          T('{falou a quem?}'),
        ],
        [
          T('{bitransitivo}'),
          T('dois objetos'),
          T('{deu o livro ao amigo}'),
          T('{deu o quê? a quem?}'),
        ],
        [T('{auxiliar}'), T('nenhum, faz tempo'), T('{havia criado}'), T('{havia era o quê?}')],
        [T('{de ligação}'), T('predicativo'), T('{Deus é bom}'), T('{é, o quê?}')],
      ],
    },
    {
      caption: T('Phrase, nucleus and determiner'),
      head: [T('Sintagma'), T('Núcleo'), T('Determinante'), T('Concordância')],
      rows: [
        [T('{os céus}'), T('{céus}'), T('{os}'), T('o artigo segue o nome')],
        [T('{as maiores profetas}'), T('{profetas}'), T('{as}'), T('o adjetivo segue o nome')],
        [T('{um homem novo}'), T('{homem}'), T('{um}'), T('o numeral segue o nome')],
        [T('{do Senhor}'), T('{Senhor}'), T('{do}'), T('a preposição não concorda')],
        [T('{muito bom}'), T('{bom}'), T('{muito}'), T('o advérbio não concorda')],
        [T('{em Jerusalém}'), T('{Jerusalém}'), T('{em}'), T('o nome próprio não flexiona')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {criou Deus os céus}, why is {os} not a direct object?'),
    options: [
      T('because {os} is a determiner, and the nucleus of the phrase is {céus}'),
      T('because {os} is a verb and {céus} is the subject'),
      T('because the verb {criou} is intransitive'),
      T('because {os} is an article and an article is never an object'),
    ],
    answer: 0,
    hint: T('Ask which is the nucleus of the phrase: what answers {what?} is the nucleus.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {a palavra que é vida}, the clause {que é vida} is:'),
      options: [
        T('a predicative of the subject, linked by the verb {é}'),
        T('a direct object of {palavra}'),
        T('a nominal adjunct of {palavra}'),
        T('a noun complement of {vida}'),
      ],
      answer: 0,
      hint: T('The verb {é} links, and what comes after it is what is declared.'),
    },
    {
      kind: 'match',
      prompt: T('Match each term to its kind.'),
      pairs: [
        { a: T('{Deus}'), b: T('subject') },
        { a: T('{os céus}'), b: T('direct object') },
        { a: T('{no princípio}'), b: T('adverbial adjunct') },
        { a: T('{por Deus}'), b: T('agent of the passive') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('Every phrase has a ______, and it is what answers the question of content.'),
      answer: 'núcleo',
      hint: T('In {os céus}, the nucleus is {céus}.'),
    },
  ],
};
