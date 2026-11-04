import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('The words and their classes'),
  title: T('Noun, article and adjective'),
  subtitle: T('Naming, determination and characterization'),
  body: C(`**Overview.** The {noun} names and the {adjective} characterizes: in {Deus amou o mundo}, {Deus} and {mundo} are nouns and {amou} is a verb, with no adjective at all.

**Rule 1.** The {definite article} {o} individualizes and the {indefinite} {um} presents one among many: {o mundo} is the world named, {um mundo} is one of many.

**Rule 2.** The adjective {agrees} with the noun in gender and number, not with the article: in {as{profeitas} maiores}, {maiores} is feminine plural because of {profetas}.

**Rule 3.** The {attributive} adjective stays attached to the noun and the {predicative} one is attached to the verb by a {copula}: {o velho filho} against {o filho é estudioso}.

**Rule 4.** A {common} noun takes an article and a {proper} noun normally does not: {o céu} and {os céus} take one, but {Deus} and {Moisés} do without.

**Application.** In {God created the heavens and the earth}, the Greek (ὁ θεὸς ἐποίησεν τοὺς οὐρανοὺς καὶ τὴν γῆν) carries an article before {céus} and {terra} and none before {Deus}. The proper noun does without the article; the common nouns take it. And in {os maiores profetas}, the adjective {maiores} is feminine plural because it agrees with {profetas}: if the noun were masculine, {os maiores} would come out the same way, and that is why nominal agreement always goes with the noun.

**Check.** Four questions assemble the noun phrase: what is the **head**, does the noun have an **article**, is the adjective **attributive** or **predicative**, and is the noun **proper** or **common**. A fifth settles agreement: the adjective agrees with the **noun**, never with the article. In {as{profeitas} maiores}, noun and article are both plural; if they disagreed, the article would be the wrong one, not the adjective.`),
  vocab: [
    V('substantivo', 'substantivo', 'noun'),
    V('artigo definido', 'artigo definido', 'definite article'),
    V('artigo indefinido', 'artigo indefinido', 'indefinite article'),
    V('adjetivo', 'adjetivo', 'adjective'),
    V('gênero', 'gênero', 'gender'),
    V('número', 'número', 'number'),
    V('concreto', 'concreto', 'concrete'),
    V('abstrato', 'abstrato', 'abstract'),
    V('os céus', 'os céus', 'article with a noun in the plural'),
    V('maiores', 'maiores', 'adjective agreeing with {profetas}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The {noun} names and the {adjective} characterizes: in {Deus amou o mundo}, {Deus} and {mundo} are nouns and {amou} is a verb, with no adjective at all.',
      ),
    },
    {
      n: '§2',
      text: T(
        'The {definite article} {o} individualizes and the {indefinite} {um} presents one among many: {o mundo} is the world named, {um mundo} is one of many.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The adjective {agrees} with the noun in gender and number, not with the article: in {as{profeitas} maiores}, {maiores} is feminine plural because of {profetas}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The {attributive} adjective stays attached to the noun and the {predicative} one is attached to the verb by a {copula}: {o velho filho} against {o filho é estudioso}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'A {common} noun takes an article and a {proper} noun normally does not: {o céu} and {os céus} take one, but {Deus} and {Moisés} do without.',
      ),
    },
  ],
  notes: [
    {
      label: T('The article Greek has and Portuguese often does not'),
      text: T(
        'Ancient Greek uses an article with almost every definite noun, including {θεός} in {ὁ θεός}. Portuguese dropped the article on proper nouns, and {Deus} stands alone in most of the biblical text. Where Greek writes {τοῦ θεοῦ} and Portuguese writes {de Deus}, the preposition is doing the work the article once did.',
      ),
    },
    {
      label: T('An adjective that changes function without changing form'),
      text: T(
        '{santo} is an adjective in {o santo de Deus} and a noun in {as santos obras}. The form is the same; what changes is the function, and the preposition or the article reveals it. That is why analysis runs from the phrase down to the word, not from the isolated word, which says nothing.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus criou os céus e a terra.',
      gloss: T(
        'Proper noun {Deus} without an article, common nouns {céus} and {terra} with the definite article.',
      ),
    },
    {
      text: 'o mundo perdido',
      gloss: T(
        'Definite article {o} with the common noun {mundo}; the adjective {perdido} is attributive.',
      ),
    },
    {
      text: 'um homem novo',
      gloss: T(
        'Indefinite article {um} with the noun {homem}; {novo} is attributive and agrees with {homem}.',
      ),
    },
    {
      text: 'a palavra da vida',
      gloss: T('Article {a}, noun {palavra}, and {da} as preposition {de} joined to article {a}.'),
    },
    {
      text: 'o Filho do Homem',
      gloss: T(
        'Noun {Filho} with a proper noun; {do Homem} carries the preposition {de} required by {filho}.',
      ),
    },
    { text: 'Deus é bom', gloss: T('{Deus} subject, {é} copula, {bom} predicative adjective.') },
    {
      text: 'o bom pastor',
      gloss: T(
        'Adjective {bom} attributive, attached to the noun with no verb: {o} determines, {bom} characterizes.',
      ),
    },
    {
      text: 'os maiores profetas',
      gloss: T(
        'The adjective {maiores} is plural because it agrees with {profetas}, not with {os}.',
      ),
    },
    {
      text: 'o amor de Deus',
      gloss: T('Abstract noun {amor}, which takes the preposition {de} required by {amor} itself.'),
    },
  ],
  tables: [
    {
      caption: T('Articles: what each one does'),
      head: [T('Artigo'), T('Uso'), T('Exemplo')],
      rows: [
        [T('{o}, {a}'), T('individualiza o nome'), T('{o mundo}, {a palavra}')],
        [T('{um}, {uma}'), T('apresenta um entre muitos'), T('{um mundo}, {um homem}')],
        [T('{este}, {esta}'), T('aponta para o ouvinte'), T('{este mundo}')],
        [T('{esse}, {aquele}'), T('aponta para o que se sabe'), T('{esse mundo}')],
        [T('{todo}, {todos}'), T('generaliza'), T('{todos os homens}')],
      ],
    },
    {
      caption: T('Attributive and predicative adjective'),
      head: [T('Tipo'), T('Onde está'), T('Como se reconhece'), T('Exemplo')],
      rows: [
        [
          T('atributivo'),
          T('ligado ao substantivo'),
          T('sem verbo de ligação no meio'),
          T('{o velho testamento}'),
        ],
        [
          T('predicativo'),
          T('ligado ao sujeito pelo verbo'),
          T('após verbo de ligação'),
          T('{o testamento é velho}'),
        ],
      ],
    },
    {
      caption: T('Gender and number of nouns'),
      head: [T('Tipo'), T('Singular'), T('Plural')],
      rows: [
        [T('masculino regular'), T('{leal}'), T('{leais}')],
        [T('feminino regular'), T('{leal}'), T('{leais}')],
        [T('masculino irregular'), T('{homem}'), T('{homens}')],
        [T('feminino irregular'), T('{mulher}'), T('{mulheres}')],
        [T('nome próprio'), T('{Deus}'), T('sem plural de uso corrente')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {as{profeitas} maiores}, the adjective {maiores} is feminine plural because:'),
    options: [
      T('it agrees with the noun {profetas}'),
      T('it agrees with the article {as}'),
      T('it is a comparative and therefore inflects'),
      T('it takes its gender from the verb of the clause'),
    ],
    answer: 0,
    hint: T('Nominal agreement is with the noun, never with the determiner.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which word is a proper noun?'),
      options: [T('{Moisés}'), T('{pastor}'), T('{leal}'), T('{mansão}')],
      answer: 0,
      hint: T('A proper noun names a particular person and normally takes no article.'),
    },
    {
      kind: 'match',
      prompt: T('Match each adjective to its type in the sentence.'),
      pairs: [
        { a: T('{o velho testamento}'), b: T('attributive') },
        { a: T('{o testamento é velho}'), b: T('subject predicative') },
        { a: T('{Deus é fiel}'), b: T('predicative, with a copula') },
        { a: T('{as santos obras}'), b: T('noun, without a proper name') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('In {um mundo novo}, the article ______ presents one among many.'),
      answer: 'indefinido',
      hint: T('{um} contrasts with {o}, which individualizes.'),
    },
  ],
};
