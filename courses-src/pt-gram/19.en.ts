import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('Government, the crasis and pronoun placement'),
  title: T('Government in detail'),
  subtitle: T('Prepositions required by verbs and nouns'),
  body: C(`**Overview.** Each verb has its preposition, and it is not up for negotiation: {crer in}, {obedecer a}, {gostar de}, {depender de}, {aspirar a}, {lembrar de}, {assistir a}.

**Rule 1.** The same word can change government according to the sense: {assistiu o jogo} (to watch) and {assistiu à missa} (to be present), and what settles it is the sense.

**Rule 2.** Nominal government follows the verb of origin: {necessidade} comes from {necessitar} and requires {de}, {amor} from {amar} requires {a}, {amigo} also comes from {amar} and requires {de}.

**Rule 3.** The {dative} without a preposition is the rule in {falar a alguém}, and Portuguese drops the preposition where Greek marks the case.

**Rule 4.** With an oblique pronoun the preposition disappears: {falei-lhe} instead of {falei a ele}, and {crer nele} instead of {crer em ele}.

**Application.** In {a necessidade de amar}, the preposition {de} is required by the noun {necessidade}, which comes from the verb {necessitar} and requires {de}. Greek ({ἀνάγκη} with a genitive) marks the relation by case, and that is why the Portuguese structure {necessidade de + infinitive} hides an **infinitive** that Greek governed with the genitive: {ἀνάγκη τοῦ ἀγαπᾶν}.

**Check.** For each governed term, ask three things: is the **governor** a verb, a noun or an adjective? Does it have **more than one** possible government? And would the preposition **change the sense**? If the preposition is not obvious, look for the **verb of origin** of the noun. And note the **dative without a mark**, where Greek uses a case and Portuguese sometimes no preposition at all, which is why translation has to decide.`),
  vocab: [
    V('crer', 'crer', 'requires {em}'),
    V('obedecer', 'obedecer', 'requires {a}'),
    V('gostar', 'gostar', 'requires {de}'),
    V('aspirar', 'aspirar', 'requires {a}'),
    V('depender', 'depender', 'requires {de}'),
    V('amigo de', 'amigo de', 'nominal government of {amar}'),
    V('fiel a', 'fiel a', 'nominal government of {crer}'),
    V('referir-se a', 'referir-se a', 'pronominal verb with government'),
    V('necessidade', 'necessidade', 'comes from {necessitar}'),
    V('ἀνάγκη τοῦ ἀγαπᾶν', 'ἀνάγκη τοῦ ἀγαπᾶν', 'Greek genitive governing an infinitive'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Each verb has its preposition, and it is not up for negotiation: {crer in}, {obedecer a}, {gostar de}, {depender de}, {aspirar a}, {lembrar de}, {assistir a}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'The same word can change government according to the sense: {assistiu o jogo} (to watch) and {assistiu à missa} (to be present), and what settles it is the sense.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Nominal government follows the verb of origin: {necessidade} comes from {necessitar} and requires {de}, {amor} from {amar} requires {a}, {amigo} also comes from {amar} and requires {de}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The {dative} without a preposition is the rule in {falar a alguém}, and Portuguese drops the preposition where Greek marks the case.',
      ),
    },
    {
      n: '§5',
      text: T(
        'With an oblique pronoun the preposition disappears: {falei-lhe} instead of {falei a ele}, and {crer nele} instead of {crer em ele}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The government that changes with the translation'),
      text: T(
        'In {E vos falando, assim, Senhor}, the Greek {εἶπεν} carries a simple verb and Portuguese introduces an infinitive, which changes the degree of the clause. Where Greek uses a participle, Portuguese usually writes a whole clause, and each of those expansions adds a verb that was not in the original. The count of verbs in the period changes, and that is why a translation has to be counted.',
      ),
    },
    {
      label: T('The verb that changes preposition without changing sense'),
      text: T(
        'In {depender de}, {insistir em} and {confiar em}, the preposition comes from Latin and does not always survive. Old Portuguese used {confiar}; modern Portuguese uses {confiar em} and also {confiar no}, where {no} is {em} plus the article {o}. That is why crase appears exactly where the preposition ends in {a}: {depender da}, {confiar na}.',
      ),
    },
  ],
  examples: [
    {
      text: 'creio em Deus',
      gloss: T('{crer} requires {em}; without the preposition the sentence is wrong.'),
    },
    {
      text: 'obedeceu ao pai',
      gloss: T('{obedecer} requires {a}, and the {o} is the article that closes the crasis.'),
    },
    {
      text: 'gostou da música',
      gloss: T('{gostar} requires {de}, which with the article {a} gives {da}.'),
    },
    {
      text: 'a necessidade de dormir',
      gloss: T('Nominal government: {necessidade} comes from {necessitar} and requires {de}.'),
    },
    {
      text: 'o amor de Deus',
      gloss: T('Nominal government with {a}: {amor} comes from {amar} and the preposition is {a}.'),
    },
    {
      text: 'falei-lhe',
      gloss: T('With an oblique pronoun the preposition {a} disappears and {lhe} is left.'),
    },
    { text: 'assistiu ao jogo', gloss: T('Sense of attending: {assistir} requires {a}.') },
    {
      text: 'assistiu o jogo',
      gloss: T('Sense of watching: the same verb drops the preposition.'),
    },
    {
      text: 'ἀνάγκη τοῦ ἀγαπᾶν',
      gloss: T(
        'The Greek genitive governs the infinitive, and Portuguese renders it as {de} plus the infinitive.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Prepositions required by verbs'),
      head: [T('Verbo'), T('Exige'), T('Não admite'), T('Exemplo')],
      rows: [
        [T('{crer}'), T('{em}'), T('{crer Deus}'), T('{creio em Deus}')],
        [T('{obedecer}'), T('{a}'), T('{obedecer o pai}'), T('{obedeceu ao pai}')],
        [T('{gostar}'), T('{de}'), T('{gostar música}'), T('{gostou da música}')],
        [T('{aspirar}'), T('{a}'), T('{aspirar o céu}'), T('{aspirou ao céu}')],
        [T('{depender}'), T('{de}'), T('{depender alguém}'), T('{depende de alguém}')],
        [T('{confiar}'), T('{em}'), T('{confiar nele}'), T('{confia nele}')],
        [T('{lembrar}'), T('{de}'), T('{lembrar aquilo}'), T('{lembra-se daquilo}')],
        [T('{assistir}'), T('{a} ou nada'), T('o sentido decide'), T('{assistiu à missa}')],
        [T('{proceder}'), T('{de}'), T('{proceder Deus}'), T('{procede de Deus}')],
        [T('{informar}'), T('{sobre}'), T('{informar o caso}'), T('{informou sobre o caso}')],
      ],
    },
    {
      caption: T('Nominal government: from the noun to the verb'),
      head: [T('Nome'), T('Verbo de origem'), T('Exige'), T('Exemplo')],
      rows: [
        [T('{necessidade}'), T('{necessitar}'), T('{de}'), T('{a necessidade de amar}')],
        [T('{amor}'), T('{amar}'), T('{a}'), T('{o amor a Deus}')],
        [T('{amigo}'), T('{amar}'), T('{de}'), T('{amigo de Deus}')],
        [T('{fiel}'), T('{crer}'), T('{a}'), T('{fiel a Deus}')],
        [T('{simpatia}'), T('{simpatizar}'), T('{por}'), T('{simpatia por ele}')],
        [T('{obrigação}'), T('{obrigar}'), T('{de}'), T('{a obrigação de vir}')],
        [T('{confiança}'), T('{confiar}'), T('{em}'), T('{confiança em Deus}')],
        [T('{dependência}'), T('{depender}'), T('{de}'), T('{a dependência da ajuda}')],
      ],
    },
    {
      caption: T('Verbal and nominal side by side'),
      head: [T('Verbo'), T('Nome derivado'), T('Preposição'), T('Observação')],
      rows: [
        [T('{crer em}'), T('{confiança em}'), T('{em}'), T('a preposição não muda')],
        [T('{obedecer a}'), T('{obediência a}'), T('{a}'), T('o grego usa dativo')],
        [T('{gostar de}'), T('{gosto por}'), T('{de} vira {por}'), T('o nome troca a preposição')],
        [T('{amar a}'), T('{amor a}'), T('{a}'), T('o nome mantém a preposição')],
        [T('{depender de}'), T('{dependência de}'), T('{de}'), T('o nome mantém a preposição')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which sentence has the correct nominal government?'),
    options: [
      T('a necessidade de descansar'),
      T('a necessidade para descansar'),
      T('o amor com Deus'),
      T('a {necessidade} de Deus'),
    ],
    answer: 0,
    hint: T('{necessidade} comes from {necessitar}, and {necessitar} requires {de}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Between {assistiu à missa} and {assistiu o jogo}, what changes is:'),
      options: [
        T('the sense of the verb, and with it the government'),
        T('the number of the subject, which forces the preposition'),
        T('the person of the verb, which changes the preposition'),
        T('the verbal mood, which decides the preposition'),
      ],
      answer: 0,
      hint: T('A dictionary that gives only the preposition teaches you wrong.'),
    },
    {
      kind: 'match',
      prompt: T('Match each verb to the preposition it requires.'),
      pairs: [
        { a: T('{crer}'), b: T('{em}') },
        { a: T('{obedecer}'), b: T('{a}') },
        { a: T('{gostar}'), b: T('{de}') },
        { a: T('{lembrar}'), b: T('{de}') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T(
        'Nominal government inherits the preposition from the ______ of origin of the noun.',
      ),
      answer: 'verbo',
      hint: T('{necessidade} comes from {necessitar}.'),
    },
  ],
};
