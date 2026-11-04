import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  section: T('The clause and its terms'),
  title: T('Integrating and accessory terms'),
  subtitle: T('Completion, qualification and circumstance'),
  body: C(`**Overview.** The {direct object} completes the verb with no preposition: in {Deus criou os céus}, {os céus} is a direct object, and the verb {criou} requires nothing else.

**Rule 1.** The {indirect object} comes with the preposition the verb requires: in {Deus falou a Moisés}, the preposition {a} is required by {falar}, and {Moisés} is the indirect object.

**Rule 2.** The {noun complement} completes a noun, not a verb: in {o amor de Deus}, the preposition {de} is required by {amor}, and {Deus} completes the noun.

**Rule 3.** The {agent of the passive} is the subject of the passive construction: in {o mundo foi criado por Deus}, {por Deus} is not an object, it is who performs the action.

**Rule 4.** An {adjunct} adds something and can leave the sentence: in {E, ao anoitecer, disse aos seus discípulos}, {ao anoitecer} comes out and the sentence stays whole.

**Application.** In {Jesus, Senhor nosso, entrou em Jerusalém}, {Jesus} is the subject, {entrou} the verb, {em Jerusalém} an adverbial adjunct of place, and {Senhor nosso} a vocative, a term that does not enter the syntactic relation and whose job is to **call attention**. Note that the vocative comes between commas, and that punctuation is what separates it from the rest.

**Check.** The test that settles it is removal: take the term out and see whether the sentence still makes sense. If it does not, it is an **integrating** term. If it does, it is **accessory**. Then ask who requires the term: the verb gives an **indirect object**, a noun gives a **noun complement**, and nobody gives anything, which makes the term an **adjunct**. And last: does the term agree with a noun, or does it stand loose?`),
  vocab: [
    V('objeto direto', 'objeto direto', 'complement of the verb without a preposition'),
    V('objeto indireto', 'objeto indireto', 'complement of the verb with a required preposition'),
    V('complemento nominal', 'complemento nominal', 'complement of a noun'),
    V('agente da passiva', 'agente da passiva', 'subject of the passive construction'),
    V('adjunto adnominal', 'adjunto adnominal', 'characterizes a noun'),
    V('adjunto adverbial', 'adjunto adverbial', 'marks circumstance'),
    V('aposto', 'aposto', 'explains a preceding term'),
    V('vocativo', 'vocativo', 'addresses the listener'),
    V('por Deus', 'por Deus', 'agent of the passive with {por}'),
    V('Senhor nosso', 'Senhor nosso', 'vocative between commas'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The {direct object} completes the verb with no preposition: in {Deus criou os céus}, {os céus} is a direct object, and the verb {criou} requires nothing else.',
      ),
    },
    {
      n: '§2',
      text: T(
        'The {indirect object} comes with the preposition the verb requires: in {Deus falou a Moisés}, the preposition {a} is required by {falar}, and {Moisés} is the indirect object.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The {noun complement} completes a noun, not a verb: in {o amor de Deus}, the preposition {de} is required by {amor}, and {Deus} completes the noun.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The {agent of the passive} is the subject of the passive construction: in {o mundo foi criado por Deus}, {por Deus} is not an object, it is who performs the action.',
      ),
    },
    {
      n: '§5',
      text: T(
        'An {adjunct} adds something and can leave the sentence: in {E, ao anoitecer, disse aos seus discípulos}, {ao anoitecer} comes out and the sentence stays whole.',
      ),
    },
  ],
  notes: [
    {
      label: T('The term Greek marks by case'),
      text: T(
        'Where Greek writes {τῷ θεῷ}, Portuguese writes {a Deus}: the Greek case says the term is indirect, and the Portuguese preposition says the same. Where Greek writes {ὀφθαλμοῖς} and Portuguese {olhos}, Greek marks the direct object and Portuguese needs no mark. That is why government is the hardest key in translation.',
      ),
    },
    {
      label: T('The vocative that vanishes when the addressee changes'),
      text: T(
        'In {Senhor nosso, aqui estamo}, {Senhor} is a vocative, and the proof is that the {vosso} coming right after already refers to {nós}. If the sentence shouted {meu Senhor, estai longe de mim}, the {meu} would change value. What decides it is the referent of the possessive, not the comma.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus criou os céus e a terra.',
      gloss: T(
        '{os céus} and {a terra} are direct objects: they complete {criou} with no preposition.',
      ),
    },
    {
      text: 'Deus falou a Moisés.',
      gloss: T('{a Moisés} is an indirect object: the preposition {a} is required by {falar}.'),
    },
    {
      text: 'o amor de Deus',
      gloss: T(
        '{de Deus} is a noun complement of {amor}: the noun, not the verb, requires the preposition.',
      ),
    },
    {
      text: 'o mundo foi criado por Deus.',
      gloss: T(
        '{o mundo} is the patient subject and {por Deus} the agent of the passive, not an object.',
      ),
    },
    {
      text: 'a palavra dos deuses',
      gloss: T('{dos deuses} is a noun complement of {palavra}; the noun {palavra} requires {de}.'),
    },
    {
      text: 'Jesus, Senhor nosso, entrou em Jerusalém.',
      gloss: T('{Senhor nosso} is a vocative; {em Jerusalém} is an adverbial adjunct of place.'),
    },
    {
      text: 'Jesus, o filho do carpinteiro, entrou em Jerusalém.',
      gloss: T(
        '{o filho do carpinteiro} is an apposition of {Jesus}: it explains and restricts the name.',
      ),
    },
    {
      text: 'No princípio, disse Deus.',
      gloss: T('{No princípio} is an adverbial adjunct of time: take it out and nothing breaks.'),
    },
    {
      text: 'O evangelho segundo Marcos começou assim.',
      gloss: T(
        '{segundo Marcos} is a noun complement of {evangelho}, and {começou assim} carries {assim} as an adjunct of manner.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Integrating and accessory terms'),
      head: [T('Termo'), T('Quem exige'), T('Teste da retirada'), T('Exemplo')],
      rows: [
        [
          T('{objeto direto}'),
          T('nada além do verbo'),
          T('a frase perde sentido'),
          T('{os céus} em {criou os céus}'),
        ],
        [
          T('{objeto indireto}'),
          T('o verbo, por preposição'),
          T('a frase perde sentido'),
          T('{a Moisés} em {falou a Moisés}'),
        ],
        [
          T('{complemento nominal}'),
          T('um nome'),
          T('o nome fica incompleto'),
          T('{de Deus} em {o amor de Deus}'),
        ],
        [
          T('{agente da passiva}'),
          T('a construção passiva'),
          T('a ação perde autor'),
          T('{por Deus} em {criado por Deus}'),
        ],
        [
          T('{adjunto}'),
          T('ninguém'),
          T('a frase continua inteira'),
          T('{ao anoitecer} em {ao anoitecer disse}'),
        ],
        [T('{aposto}'), T('ninguém'), T('a frase continua inteira'), T('{Senhor nosso}')],
        [
          T('{vocativo}'),
          T('ninguém'),
          T('a frase continua inteira'),
          T('{Jesus} em {Jesus, Senhor nosso}'),
        ],
      ],
    },
    {
      caption: T('Verb requiring a preposition'),
      head: [T('Verbo'), T('Preposição exigida'), T('Frase')],
      rows: [
        [T('{falar}'), T('{a}'), T('{falou a Moisés}')],
        [T('{obedecer}'), T('{a}'), T('{obedeceu ao pai}')],
        [T('{crer}'), T('{em}'), T('{crer em Deus}')],
        [T('{gostar}'), T('{de}'), T('{gostar da música}')],
        [T('{aspirar}'), T('{a}'), T('{aspirar ao céu}')],
        [T('{depender}'), T('{de}'), T('{depender da ajuda}')],
        [T('{lembrar}'), T('{de}'), T('{lembrar-se da lei}')],
        [T('{assistir}'), T('{a}'), T('{assistiu à missa}')],
        [T('{visar}'), T('{a}'), T('{visou ao alto}')],
        [T('{proceder}'), T('{de}'), T('{procedeu de Deus}')],
      ],
    },
    {
      caption: T('Indirect objects: pronoun or noun'),
      head: [T('Tipo'), T('Forma'), T('Exemplo')],
      rows: [
        [T('nome'), T('artigo ou demonstrativo + substantivo'), T('{falou a Moisés}')],
        [T('pronome oblíquo'), T('{lhe}, {eles}, {nós}'), T('{falou-lhe}')],
        [T('pronominal'), T('verbo + {me}, {te}, {se}'), T('{falou-me}')],
        [T('com {a} fundida'), T('crase obrigatória'), T('{falou à árvore}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Deus falou a Moisés}, {a Moisés} is an indirect object because:'),
    options: [
      T('it comes with the preposition {a}, which the verb {falar} requires'),
      T('it is a noun, and a noun is always a direct object'),
      T('it comes after the verb, and what comes after is indirect'),
      T('it completes the noun {Deus}, not the verb'),
    ],
    answer: 0,
    hint: T('Replace with {lhe}: {falou-lhe} is still correct.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {o amor de Deus}, {de Deus} is:'),
      options: [
        T('a noun complement, because it completes the noun {amor}'),
        T('a direct object of {amor}'),
        T('an adverbial adjunct of place'),
        T('agent of the passive'),
      ],
      answer: 0,
      hint: T('What requires the preposition is {amor}, a noun, not a verb.'),
    },
    {
      kind: 'match',
      prompt: T('Match each term to its role in the sentence.'),
      pairs: [
        { a: T('{os céus} in {criou os céus}'), b: T('direct object') },
        { a: T('{a Moisés} in {falou a Moisés}'), b: T('indirect object') },
        { a: T('{Senhor nosso}'), b: T('vocative') },
        { a: T('{por Deus}'), b: T('agent of the passive') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('The term that can leave the sentence without breaking it is ______.'),
      answer: 'acessório',
      hint: T('Take an integrating term out and the sentence loses sense.'),
    },
  ],
};
