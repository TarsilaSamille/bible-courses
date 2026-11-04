import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  section: T('The words and their classes'),
  title: T('Adverb, preposition, conjunction and interjection'),
  subtitle: T('Circumstance, relation, coordination and emotion'),
  body: C(`**Overview.** An {adverb} is invariable: in {correu rapidamente}, {rapidamente} agrees with nothing, and that test separates it from the adjective {rápido}.

**Rule 1.** A {preposition} links two terms and does not inflect: in {com Deus}, {com} links the verb to the term serving as indirect object.

**Rule 2.** A {conjunction} links words or clauses: in {Vinde e segui-me}, {e} links two independent clauses, and neither depends on the other.

**Rule 3.** An {interjection} links to nothing: in {Aleluia}, the word stands loose, and it is the pause instead of the comma that marks it.

**Rule 4.** The test for the four: does the word {agree} with anything? If not, does it {modify}, {link}, {coordinate} or {express}? And if it links clauses, are they {independent} or does the second {depend} on the first?

**Application.** In {God loved this world}, the sentence has {Deus}, {amou} and {mundo}, and nothing links the terms: it is the most neutral sentence there is. In {Deus amou este mundo}, the {este} is a determiner, and the sentence gained an article without a verb. Compare {muito} in {amou muito}, which modifies the verb {amou}, and {muito bom}, where {bom} is an adjective: same form, function decided by what stands next to it.

**Check.** Two questions settle the class. First: does the word **agree** with any noun? If so, it is a noun or an adjective, and you are done. If not, does it **modify**, **link**, **coordinate** or **express**? And the second question, the one about clauses: if it links clauses, are they **independent** or does the second **depend** on the first? The first eliminates half the classes and the second settles the four in this chapter.`),
  vocab: [
    V('advérbio', 'advérbio', 'adverb'),
    V('preposição', 'preposição', 'preposition'),
    V('conjunção', 'conjunção', 'conjunction'),
    V('interjeição', 'interjeição', 'interjection'),
    V('circunstância', 'circunstância', 'circumstance'),
    V('coordenativa', 'coordenativa', 'coordinating conjunction'),
    V('subordinativa', 'subordinativa', 'subordinating conjunction'),
    V('aleluia', 'aleluia', 'interjection of praise'),
    V('com', 'com', 'preposition linking verb and indirect object'),
    V('rapidamente', 'rapidamente', 'adverb formed with {-mente}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'An {adverb} is invariable: in {correu rapidamente}, {rapidamente} agrees with nothing, and that test separates it from the adjective {rápido}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'A {preposition} links two terms and does not inflect: in {com Deus}, {com} links the verb to the term serving as indirect object.',
      ),
    },
    {
      n: '§3',
      text: T(
        'A {conjunction} links words or clauses: in {Vinde e segui-me}, {e} links two independent clauses, and neither depends on the other.',
      ),
    },
    {
      n: '§4',
      text: T(
        'An {interjection} links to nothing: in {Aleluia}, the word stands loose, and it is the pause instead of the comma that marks it.',
      ),
    },
    {
      n: '§5',
      text: T(
        'The test for the four: does the word {agree} with anything? If not, does it {modify}, {link}, {coordinate} or {express}? And if it links clauses, are they {independent} or does the second {depend} on the first?',
      ),
    },
  ],
  notes: [
    {
      label: T('The adverb that inflects'),
      text: T(
        'The rule that adverbs do not inflect holds for almost all of Portuguese. The exceptions are {hoje} and {amanhã}, which are adverbs and also inflect: {hoje} against {hojes}. They are time adverbs, and that is why the rule excepts them by name.',
      ),
    },
    {
      label: T('The word that joins and the word that only joins'),
      text: T(
        'Not every preposition joins the same way: in {caminhou com Deus}, {com} links the verb to a noun; in {caminhou durante a noite}, {durante} links the verb to another adverb. And a conjunction always joins two units of the same kind: two clauses, two nouns, two adjectives.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus amou o mundo',
      gloss: T(
        'Minimal sentence: subject, verb and object, with none of the four words in this chapter.',
      ),
    },
    {
      text: 'correu rapidamente',
      gloss: T(
        '{rapidamente} is an adverb: it does not agree with {correu}, and so it is invariable.',
      ),
    },
    {
      text: 'um homem rápido',
      gloss: T('{rápido} is an adjective: it agrees in gender and number with the noun {homem}.'),
    },
    {
      text: 'com Deus',
      gloss: T('Preposition {com} linking the verb to the indirect object {Deus}.'),
    },
    {
      text: 'durante a noite',
      gloss: T('Preposition {durante} linking the verb to an adverb of time.'),
    },
    {
      text: 'Vinde e segui-me',
      gloss: T('Conjunction {e} between two independent clauses: {Vinde} and {segui-me}.'),
    },
    {
      text: 'não sei porque Ele me ama',
      gloss: T(
        'Conjunction {porque} opening a subordinate clause and showing dependence: only the second clause obeys.',
      ),
    },
    {
      text: 'Aleluia',
      gloss: T('Interjection: it stands loose, between the exclamation mark and what follows.'),
    },
    {
      text: 'o Verbo se fez carne',
      gloss: T('Verb {fez} direct transitive, with object {carne}; {se} a reflexive pronoun.'),
    },
  ],
  tables: [
    {
      caption: T('The four classes that do not inflect'),
      head: [T('Classe'), T('O que faz'), T('Concorda?'), T('Exemplo')],
      rows: [
        [T('{advérbio}'), T('modifica verbo, adjetivo ou advérbio'), T('não'), T('{muito}')],
        [T('{preposição}'), T('liga termo a termo'), T('não'), T('{com}')],
        [T('{conjunção}'), T('liga palavras ou orações'), T('não'), T('{e}, {porque}')],
        [T('{interjeição}'), T('exprime emoção'), T('não'), T('{ai}, {aleluia}')],
      ],
    },
    {
      caption: T('Connectives and the value they open'),
      head: [T('Valor'), T('Conectivos'), T('Exemplo')],
      rows: [
        [T('{aditivo}'), T('{e}, {nem}'), T('{veio e viu}')],
        [T('{adversativo}'), T('{mas}, {porém}'), T('{veio, mas não viu}')],
        [T('{alternativo}'), T('{ou}'), T('{ficou ou saiu}')],
        [T('{conclusivo}'), T('{logo}, {portanto}'), T('{choveu, logo ficou}')],
        [T('{explicativo}'), T('{porque}'), T('{ficou, porque era tarde}')],
        [T('{causal}'), T('{porque}, {já que}'), T('{não fui, porque era tarde}')],
        [T('{final}'), T('{para que}'), T('{vim para que vês}')],
      ],
    },
    {
      caption: T('Adverbs by circumstance'),
      head: [T('Circunstância'), T('Advérbio'), T('Frase')],
      rows: [
        [T('tempo'), T('{ontem}'), T('{Ontem cheguei.}')],
        [T('lugar'), T('{aqui}'), T('{Aqui estou.}')],
        [T('modo'), T('{rapidamente}'), T('{Cheguei rapidamente.}')],
        [T('intensidade'), T('{muito}'), T('{É muito bom.}')],
        [T('negação'), T('{não}'), T('{Não vim.}')],
        [T('afirmação'), T('{sim}'), T('{Sim, eu sei.}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {correu rapidamente}, {rapidamente} is an adverb because:'),
    options: [
      T('it does not agree with {correu}, and its form is unique'),
      T('it agrees in gender with the subject'),
      T('it is the nucleus of the clause, beside {correu}'),
      T('it requires a preposition to link it to {correu}'),
    ],
    answer: 0,
    hint: T('Compare {rapidamente} with {rápido}, which inflects.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which word is an {interjection}?'),
      options: [T('{aleluia}'), T('{mas}'), T('{ontem}'), T('{contra}')],
      answer: 0,
      hint: T('It does not link to any word in the sentence.'),
    },
    {
      kind: 'match',
      prompt: T('Match each connective to the value it opens.'),
      pairs: [
        { a: T('{e}'), b: T('addition') },
        { a: T('{mas}'), b: T('opposition') },
        { a: T('{logo}'), b: T('conclusion') },
        { a: T('{porque}'), b: T('cause or explanation') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('The word that links two independent clauses is a ______.'),
      answer: 'conjunção',
      hint: T('If it links and does not inflect, it is a conjunction.'),
    },
  ],
};
