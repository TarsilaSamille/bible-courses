import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  section: T('Meaning and subordination'),
  title: T('Semantics'),
  subtitle: T('Meaning, relations and ambiguity'),
  body: C(`**Overview.** {Polysemy} gathers related senses: in {o Verbo}, the sense goes from {spoken word} to {revelação}, and the relation between them is historical.

**Rule 1.** {Homonymy} gathers independent senses with the same form: {banco} is the institution and also the seat, and there is no relation between the two senses.

**Rule 2.** {Paronymy} resembles forms and separates senses: {iminente} and {imigrante} look alike and say nothing of each other, and that is the criterion that separates paronymy from polysemy.

**Rule 3.** Interpretation depends on {context}: in {No princípio era o Verbo}, the sense of {Verbo} is {revelação} because the context is that of the creation narrative.

**Rule 4.** When you translate from a case language, the risk is {flattening} the sense: {λόγος} has four senses in Greek, and Portuguese {palavra} loses three.

**Application.** In {O Verbo se fez carne}, {Verbo} has a **metaphorical** sense (not {spoken word} but {revelação}), and {carne} has a **concrete and strong** sense: Greek uses {σάρξ}, which is stronger than {corpo}, and it names the whole human nature with its weakness. Rendering {carne} as {corpo} weakens the word, and the translation that does so loses what the Greek asserted.

**Check.** For any key word, ask: what is the **sense** in context and not in the dictionary? What is the **referent**, that is, the thing being talked about? Does the context allow another **sense**? And did the translation keep the **polysemy** the original had? Four questions, and the translation stops flattening the text.`),
  vocab: [
    V('significado', 'significado', 'sense content of a form'),
    V('sinonímia', 'sinonímia', 'closeness of senses'),
    V('antonímia', 'antonímia', 'opposition of senses'),
    V('polissemia', 'polissemia', 'several related senses'),
    V('homonímia', 'homonímia', 'independent senses, same form'),
    V('paronímia', 'paronímia', 'alike forms, unrelated senses'),
    V('campo semântico', 'campo semântico', 'set of senses in one area'),
    V('contexto', 'contexto', 'what decides the sense'),
    V('λόγος', 'λόγος', 'Greek word with four senses'),
    V('σάρξ', 'σάρξ', 'flesh in its strongest sense'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{Polysemy} gathers related senses: in {o Verbo}, the sense goes from {spoken word} to {revelação}, and the relation between them is historical.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{Homonymy} gathers independent senses with the same form: {banco} is the institution and also the seat, and there is no relation between the two senses.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{Paronymy} resembles forms and separates senses: {iminente} and {imigrante} look alike and say nothing of each other, and that is the criterion that separates paronymy from polysemy.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Interpretation depends on {context}: in {No princípio era o Verbo}, the sense of {Verbo} is {revelação} because the context is that of the creation narrative.',
      ),
    },
    {
      n: '§5',
      text: T(
        'When you translate from a case language, the risk is {flattening} the sense: {λόγος} has four senses in Greek, and Portuguese {palavra} loses three.',
      ),
    },
  ],
  notes: [
    {
      label: T('What case does and Portuguese does not'),
      text: T(
        '{Λόγος} in Greek can be {palavra}, {discurso}, {reason} and {revelação}: the four senses live in the same form, and case helps tell them apart. Portuguese rendered them {palavra}, {discurso}, {thought} and {Verbo}, making four words where Greek had one. Every rendering is a choice, and the translator has to know which one is being made.',
      ),
    },
    {
      label: T('The ambiguity grammar removes'),
      text: T(
        'In {Saiu o filho de Pedro}, it is ambiguous whether {filho} belongs to {Pedro} or whether {o filho} is the one who left. A comma after {Saiu} settles it: {Saiu, o filho de Pedro}, and the reading becomes single. Ancient Greek settled it by case and old Portuguese by the order of the terms; the ambiguity left today is the one punctuation reaches.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio era o Verbo',
      gloss: T('{Verbo} in a metaphorical sense: {revelação}, not {spoken word}.'),
    },
    {
      text: 'o Verbo se fez carne',
      gloss: T('{carne} in a strong sense: the whole human nature, as in {σάρξ}.'),
    },
    {
      text: 'λόγος',
      gloss: T('One Greek form with four senses: {palavra}, {discurso}, {reason} and {Verbo}.'),
    },
    {
      text: 'o banco está cheio',
      gloss: T('Homonymy if {banco} means the institution and the purse is in play.'),
    },
    {
      text: 'sentou-se no banco',
      gloss: T('The same {banco} is now the seat, and context resolved the ambiguity.'),
    },
    {
      text: 'o iminente perigo',
      gloss: T(
        '{iminente} means about to happen, not {imigrante}, which is the one who comes from elsewhere.',
      ),
    },
    {
      text: 'a palavra de Deus',
      gloss: T('Here {palavra} is the concrete sense; the revelation appears in {o Verbo}.'),
    },
    {
      text: 'os Logos do Evangelho',
      gloss: T('Here {logos} is the discourse, and not the word nor the reason.'),
    },
    {
      text: 'Saiu, o filho de Pedro',
      gloss: T('The comma removes the ambiguity: now we know that {o filho de Pedro} left.'),
    },
  ],
  tables: [
    {
      caption: T('Polysemy, homonymy and paronymy'),
      head: [T('Fenômeno'), T('O que reúne'), T('Há relação?'), T('Exemplo')],
      rows: [
        [
          T('{polissemia}'),
          T('sentidos relacionados'),
          T('sim, histórica ou metafórica'),
          T('{o Verbo}'),
        ],
        [T('{homonímia}'), T('sentidos independentes'), T('não'), T('{banco}')],
        [
          T('{paronímia}'),
          T('formas assemelhadas'),
          T('não, e os sentidos não se tocam'),
          T('{iminente}, {imigrante}'),
        ],
        [
          T('{sinonímia}'),
          T('sentidos próximos'),
          T('sim, por equivalência'),
          T('{magnífico}, {excelente}'),
        ],
        [T('{antonímia}'), T('sentidos opostos'), T('sim, por oposição'), T('{amor}, {ódio}')],
      ],
    },
    {
      caption: T('The senses of {λόγος} and what each became'),
      head: [T('Sentido grego'), T('Significa'), T('Português'), T('Onde aparece')],
      rows: [
        [T('{discurso}'), T('palavra articulada'), T('{palavra}'), T('{a palavra de Deus}')],
        [T('{razão}'), T('pensamento, relação'), T('{razão}'), T('{o Logos se fez carne}')],
        [T('{relação}'), T('o que liga duas coisas'), T('{palavra}'), T('{o Verbo eterno}')],
        [T('{revelação}'), T('o que Deus diz de si'), T('{Verbo}'), T('{o Logos se fez carne}')],
        [T('{conta}'), T('número, ordem'), T('{conta}'), T('{a conta das nation}')],
      ],
    },
    {
      caption: T('Sense relations and the risk of using them'),
      head: [T('Relação'), T('Exemplo'), T('Serve para'), T('Cuidado')],
      rows: [
        [T('{sinônimos}'), T('{magnífico}, {excelente}'), T('variar o texto'), T('apaga a nuance')],
        [T('{antônimos}'), T('{amor}, {ódio}'), T('marcar contraste'), T('nem sempre são exatos')],
        [
          T('{parônimos}'),
          T('{eminente}, {iminente}'),
          T('testar a atenção'),
          T('troca-se por engano'),
        ],
        [T('{homonônimos}'), T('{ser}, {cér}'), T('desambiguar'), T('o contexto resolve')],
        [T('{polônimos}'), T('{banco}, {mesa}'), T('checar o sentido'), T('depende do contexto')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {o Verbo}, {Verbo} has a metaphorical sense. That means:'),
    options: [
      T('{palavra} was transferred in sense, and the context sustains the transfer'),
      T('{Verbo} is a homonym of {palavra}'),
      T('{Verbo} has no sense at all, and context creates it'),
      T('{Verbo} is a paronym of {palavra}'),
    ],
    answer: 0,
    hint: T(
      'A metaphorical sense grows out of another by comparison, and the image sustains the reading.',
    ),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('The pair {banco} (institution) and {banco} (seat) is an example of:'),
      options: [
        T('homonymy, because the senses are independent'),
        T('polysemy, because there are several senses'),
        T('paronymy, because the forms resemble'),
        T('antonymy, because the senses oppose'),
      ],
      answer: 0,
      hint: T(
        'The test: is there any relation between the sense of the institution and of the seat?',
      ),
    },
    {
      kind: 'match',
      prompt: T('Match each pair of words to the phenomenon it shows.'),
      pairs: [
        { a: T('{o Verbo}, {palavra}'), b: T('polysemy') },
        { a: T('{banco} and {banco}'), b: T('homonymy') },
        { a: T('{iminente} and {imigrante}'), b: T('paronymy') },
        { a: T('{amor} and {ódio}'), b: T('antonymy') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('The gathering of related senses in one form is called ______.'),
      answer: 'polissemia',
      hint: T('That is the case of {o Verbo}, with {palavra} and {revelação}.'),
    },
  ],
};
