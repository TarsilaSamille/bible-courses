import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  section: T('Government, the crasis and pronoun placement'),
  title: T('Crase'),
  subtitle: T('Fusion of the preposition a with the article a'),
  body: C(`**Overview.** Crase appears when the preposition {a} fuses with the article {a}: before {o}, {a}, {os} and {as}, always.

**Rule 1.** Before a verb, a pronoun, a cardinal numeral and an articled proper name, never: there is crase in {Vou à escola}, there is in {Vou à school}, but none in {Vou a pé}.

**Rule 2.** The test is to swap the preposition for {para}: {vou à escola} and {vou para a escola} coexist in the same sense; {vou à vou} does not.

**Rule 3.** With a proper name preceded by an article there is crase: in {ao Senhor}, {à Igreja}, {aos doutros}, without the article, none: {a Cristo} and {para Deus}.

**Rule 4.** Crase is always optional in ordinary speech: nobody is wrong for omitting it, and nobody is right for using it where it does not belong.

**Application.** In {The Word became flesh}, the preposition {in} plus {flesh} produces no crase, and {se} is a pronoun. But in {Vou à messe} the crase appears because the article {a} and the preposition {a} fuse into a single accent. The critical detail: neither Greek nor Latin has crase, and Latin {ad} becomes a plain {a} in Portuguese, so rendering {ad Dominum} as {ao Senhor} is the translator decision, not the source language own.

**Check.** Before writing crase, ask three questions: is the next word **feminine**? Does it have an **article**? And is it a **verb** or a **personal pronoun**? Three yeses, crase; any no, none. If all three answers are yes and the sentence still sounds strange, run the second test: swap {a} for {para}. If the sense does not change, the crase may go in.`),
  vocab: [
    V('crase', 'crase', 'fusion of {a} with {a}'),
    V('à', 'à', 'preposition a plus article a'),
    V('às vezes', 'às vezes', 'a plus as, with a frequency sense'),
    V('as vezes', 'as vezes', 'article as plus the noun vezes'),
    V('à noite', 'à noite', 'a plus o, with a time sense'),
    V('a noite', 'a noite', 'a plus noite, with no crase'),
    V('ao Senhor', 'ao Senhor', 'crase before an articled proper name'),
    V('a Cristo', 'a Cristo', 'no crase before an unarticled proper name'),
    V('artigo', 'artigo', 'determiner that individualizes'),
    V('preposição', 'preposição', 'links two terms'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Crase appears when the preposition {a} fuses with the article {a}: before {o}, {a}, {os} and {as}, always.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Before a verb, a pronoun, a cardinal numeral and an articled proper name, never: there is crase in {Vou à escola}, there is in {Vou à school}, but none in {Vou a pé}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The test is to swap the preposition for {para}: {vou à escola} and {vou para a escola} coexist in the same sense; {vou à vou} does not.',
      ),
    },
    {
      n: '§4',
      text: T(
        'With a proper name preceded by an article there is crase: in {ao Senhor}, {à Igreja}, {aos doutros}, without the article, none: {a Cristo} and {para Deus}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Crase is always optional in ordinary speech: nobody is wrong for omitting it, and nobody is right for using it where it does not belong.',
      ),
    },
  ],
  notes: [
    {
      label: T('What Greek does not have'),
      text: T(
        'Neither ancient Greek nor Latin has crase as a grammatical phenomenon. Where Latin writes {ad Dominum}, Greek writes {πρὸς τὸν κύριον}, and Portuguese writes {ao Senhor}. Crase is a growth of medieval Portuguese, and that is why the translator has to decide: rendering the word, or the fusion the target language performs on its own.',
      ),
    },
    {
      label: T('The crase that changes the sense'),
      text: T(
        'In {a palavra de Deus} the preposition {de} is required by the noun; the {a} is an article, and the two together make {da}. The crase of {à} is the same fusion seen from the other side: two {a} become one. What changes is the function of the word, not the fusion.',
      ),
    },
  ],
  examples: [
    { text: 'vou à escola', gloss: T('Crase: preposition {a} plus article {a} before {escola}.') },
    {
      text: 'vou a pé',
      gloss: T('No crase: {pé} is a noun without an article, and the preposition stands alone.'),
    },
    { text: 'refiro-me ao Senhor', gloss: T('Crase before an articled proper name: {ao Senhor}.') },
    {
      text: 'confio em Cristo',
      gloss: T('No crase: an unarticled proper name does not take the fusion.'),
    },
    {
      text: 'às vezes',
      gloss: T('Crase with an adverbial sense of frequency: {a} + {as} + {vezes}.'),
    },
    {
      text: 'as vezes que viram o Senhor',
      gloss: T('Here there is no crase: it is article {as} + noun {vezes}.'),
    },
    { text: 'à noite', gloss: T('Crase with a determined time sense: {a} + {o}.') },
    {
      text: 'a noite toda',
      gloss: T('No crase: the sense is duration, and {a} is an article before {noite}.'),
    },
    {
      text: 'O Verbo se fez carne',
      gloss: T('No {a} + {a} pair in the sentence: there is no crase anywhere.'),
    },
  ],
  tables: [
    {
      caption: T('When there is crase and when there is not'),
      head: [T('Situação'), T('Exemplo'), T('Crase?'), T('Porquê')],
      rows: [
        [T('ante artigo {a}'), T('{ao livro}'), T('sim'), T('preposição {a} + artigo {a}')],
        [
          T('ante nome próprio com artigo'),
          T('{ao Senhor}'),
          T('sim'),
          T('o nome próprio recebe artigo'),
        ],
        [
          T('ante nome próprio sem artigo'),
          T('{a Cristo}'),
          T('não'),
          T('sem artigo, não há o segundo {a}'),
        ],
        [T('ante verbo'), T('{aproveito para amar}'), T('não'), T('verbo não é nome')],
        [T('ante pronome'), T('{a Ele}'), T('não'), T('pronome pessoal não recebe artigo')],
        [T('ante numeral cardinal'), T('{a dois}'), T('não'), T('numeral não recebe artigo')],
        [T('ante {a} inicial de palavra'), T('{a agora}'), T('não'), T('{agora} é advérbio')],
        [
          T('sentido adverbial de frequência'),
          T('{às vezes}'),
          T('sim'),
          T('a preposição {a}assume sentido próprio'),
        ],
      ],
    },
    {
      caption: T('The two uses of {a} that get confused'),
      head: [T('Função'), T('Exemplo'), T('Surgiu de'), T('Como reconhecer')],
      rows: [
        [
          T('preposição exigida pelo verbo'),
          T('{falei a Moisés}'),
          T('regência verbal'),
          T('troque por {para}'),
        ],
        [T('artigo definido'), T('{a palavra}'), T('determinação do nome'), T('troque por {essa}')],
        [
          T('crase de preposição com artigo'),
          T('{à palavra}'),
          T('fusão dos dois anteriores'),
          T('os dois casos juntos'),
        ],
        [
          T('preposição exigida pelo nome'),
          T('{a necessidade de}'),
          T('regência nominal'),
          T('pergunte pelo verbo de origem'),
        ],
      ],
    },
    {
      caption: T('The test of replacing with {para}'),
      head: [T('Frase'), T('Troca por {para}'), T('Mesmo sentido?'), T('Conclusão')],
      rows: [
        [T('{vou à escola}'), T('{vou para a escola}'), T('sim'), T('crase cabível')],
        [T('{falou ao Alberto}'), T('{falou para o Alberto}'), T('não'), T('preferir {ao}')],
        [T('{a Deus}'), T('{para Deus}'), T('mudou o sentido'), T('não é crase possível')],
        [
          T('{o amor à pátria}'),
          T('{o amor para a pátria}'),
          T('não'),
          T('crase é a forma própria'),
        ],
        [T('{dei-o à luz}'), T('{dei-o para a luz}'), T('mudou'), T('não usar')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In which of these sentences is the crase correct?'),
    options: [
      T('refiro-me ao Senhor'),
      T('refiro-me a o Senhor'),
      T('confio a Deus'),
      T('vou a pé à cidade'),
    ],
    answer: 0,
    hint: T('A proper name with an article takes crase; without the article, it does not.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {vou a pé}, there is no crase because:'),
      options: [
        T('{pé} is a noun without an article, so the second {a} is missing'),
        T('{a} is an adverb and adverbs never take crase'),
        T('crase is compulsory before {p}'),
        T('{pé} is feminine, and feminine requires crase'),
      ],
      answer: 0,
      hint: T('There are three conditions: feminine, article, and not a verb.'),
    },
    {
      kind: 'match',
      prompt: T('Match each sentence to the right answer.'),
      pairs: [
        { a: T('{vou à escola}'), b: T('crase fits') },
        { a: T('{vou a pé}'), b: T('no crase') },
        { a: T('{ao Senhor}'), b: T('crase from an articled proper name') },
        { a: T('{a Cristo}'), b: T('no crase') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('Crase is the fusion of the preposition {a} with the ______ article.'),
      answer: 'a',
      hint: T('The two {a} become one accent.'),
    },
  ],
};
