import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('Orthography'),
  subtitle: T('Capitals, hyphen and comma'),
  section: T('Foundations'),
  body: C(`In German writing the capital letter has a grammatical, not decorative, function. Written with a capital are: all nouns (der Mann, die Stadt), the personal and possessive pronouns (ich, du, mein, dein), the demonstratives functioning as articles (dieser, jede, welcher), the pronoun of address Sie and the definite article when it replaces the noun (der Mann → Der ist mein Freund). Proper names, nationalities (der Deutsche, ein Österreicher) and nouns derived from adjectives (das Gute, das Schönste) also take a capital.

The hyphen joins the parts of a compound when the elements must stay readable: heute-morgen, blau-weiß, Sowohl-als-auch. Outside that use, the compound is written as one word: Krankenhaus, Arbeitgeber.

The comma has a precise job: it separates the conjugated verb from the subject when both open the clause, separates coordinated elements, isolates appositions and marks the beginning of a subordinate clause. Here the main clause is Die Liebe ist lang, and the subordinate clause comes last: Die Liebe ist lang, weil sie ewig bleibt. The order of the two verbs alone already shows where the subordinate clause begins.

Finally, there is one sign Germans rarely omit: the colon before a quotation or a list. The question mark and the exclamation mark are obligatory, with no full stop after either of them.`),
  vocab: [
    V('der Mann', 'Mann', 'the man'),
    V('die Stadt', 'Stadt', 'the city'),
    V('das Kind', 'Kind', 'the child'),
    V('mein', 'mein', 'my, mine'),
    V('Sie', 'Sie', 'you (formal); she (pronoun)'),
    V('das Gute', 'gut', 'the good, the good thing'),
    V('ein Österreicher', 'Österreicher', 'an Austrian'),
    V('der Punkt', 'Punkt', 'the full stop'),
    V('das Komma', 'Komma', 'the comma'),
    V('der Doppelpunkt', 'Doppelpunkt', 'the colon'),
    V('das Ausrufezeichen', 'Ausrufezeichen', 'the exclamation mark'),
    V('das Fragezeichen', 'Fragezeichen', 'the question mark'),
    V('der Bindestrich', 'Bindestrich', 'the hyphen'),
    V('heute-morgen', 'heute', 'this morning'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which word is written correctly?'),
    options: [T('das gute'), T('das Gute'), T('der gute'), T('die gute')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Which pronoun takes a capital throughout the text: sie or ___?'),
      answer: 'Sie',
      hint: T('It is the polite form of address.'),
    },
    {
      kind: 'choose',
      prompt: T('Where is the comma obligatory?'),
      options: [
        T('Wir kommen heute.'),
        T('Heute, wir kommen nicht.'),
        T('Weil wir kommen, freuen wir uns.'),
        T('Dass er kommt, ist gut.'),
      ],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Match the noun to its written form.'),
      pairs: [
        { a: T('person who loves'), b: T('die Liebe') },
        { a: T('punctuation mark'), b: T('das Ausrufezeichen') },
        { a: T('a Swiss confederation'), b: T('die Schweiz') },
      ],
      answer: ['a', 'a', 'a'],
    },
    {
      kind: 'fill',
      prompt: T('Put the colon before the quotation: Er sagte ___ Ich komme.'),
      answer: ':',
      hint: T('The German sign for colon.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Every noun takes a capital, including the names of days, months, languages and countries: der Montag, der Januar, der Deutsch.',
      ),
    },
    {
      n: '2',
      text: T(
        'The pronoun Sie is the only form written with a capital throughout the text; lower-case sie is the feminine pronoun "she".',
      ),
    },
    {
      n: '3',
      text: T(
        'The comma separates subject from verb when the subject is placed first: Die Liebe ist blind, not Liebe ist blind. No comma is written when the subject follows the verb.',
      ),
    },
    {
      n: '4',
      text: T('The semicolon is rare in German; prefer a comma, a full stop or a new sentence.'),
    },
  ],
  notes: [
    {
      label: T('The capital noun'),
      text: T(
        'In the old Germanic languages the rule was the opposite: the stress fell on the last word, not on the noun. It was the printers of the fifteenth century who fixed the capital on the noun, and later usage merely kept the custom.',
      ),
    },
    {
      label: T('Comma before the noun'),
      text: T(
        'German syntax avoids the unmarked apposition. Where Portuguese would write João, o irmão de Maria, German prefers a relative clause: Johann, der Bruder Mariens. The gap before the noun is the mark of the relative clause.',
      ),
    },
  ],
  examples: [
    {
      text: 'Der Mann liest die Zeitung.',
      gloss: T('The man reads the newspaper (three nouns with a capital).'),
    },
    { text: 'Sie kommt heute nicht.', gloss: T('She is not coming today (Sie = she).') },
    { text: 'Sie kommen bitte herein.', gloss: T('Please come in (Sie = you, formal address).') },
    {
      text: 'Das Gute ist noch nicht geschehen.',
      gloss: T('The good has not yet happened (substantivised adjective).'),
    },
    {
      text: 'Ich bleibe, weil es regnet.',
      gloss: T('I am staying, because it is raining (comma before weil).'),
    },
    {
      text: 'Johann, der Bruder Mariens, kam.',
      gloss: T("John, Mary's brother, came (apposition set off by two commas)."),
    },
  ],
  tables: [
    {
      caption: T('What takes a capital'),
      head: ['Categoria', 'Exemplos', 'Motivo'],
      rows: [
        ['Substantivos', 'der Baum, die Liebe, das Glück', 'regra geral: todo substantivo'],
        ['Pronomes', 'Ich, du, er, Sie', 'pronomes pessoais'],
        ['Pronomes possessivos', 'mein, dein, sein, ihr', 'sempre maiúsculos'],
        ['Pronome de tratamento', 'Sie kommen bitte herein', 'forma polida de você'],
        ['Artigo no lugar do substantivo', 'Der ist mein Lehrer.', 'substitui der Mann'],
        ['Substantivo de adjetivo', 'das Gute, das Bessere, das Schönste', 'substantivado'],
        [
          'Nomes próprios e nacionalidades',
          'Österreich, der Deutsche, die Schweiz',
          'nomes geográficos e de povos',
        ],
        ['Início de frase', 'Heute ist schönes Wetter.', 'posição inicial'],
      ],
    },
    {
      caption: T('The comma in its two roles'),
      head: ['Função', 'Exemplo', 'Porquê'],
      rows: [
        ['separa sujeito e verbo', 'Heute, 12. März, fährt der Zug ab.', 'sujeito abre a oração'],
        ['marca a subordinada', 'Ich bleibe, weil es regnet.', 'weil + verbo no fim'],
        ['separa coordenadas', 'Er kam, er sah, er Sieg.', 'três verbos paralelos'],
        ['isola o aposto', 'Herr Müller, der Chef, kommt.', 'substantivo explicativo'],
        ['não se usa', 'Er sieht, dass wir kommen.', 'dentro da subordinada'],
        ['não se usa', 'Ich habe, glaube ich, recht.', 'nunca antes do verbo que fecha a oração'],
      ],
    },
  ],
};
