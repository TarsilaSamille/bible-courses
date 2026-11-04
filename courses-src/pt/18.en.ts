import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('The adjective and the adverb'),
  title: T('The adverb: how it is formed'),
  subtitle: T('lenta, lentamente, and the ones with no -mente'),
  body: C(`## The -mente of the feminines

The regular adverb is formed with the adjective in the feminine plus the suffix {-mente}. {Lenta} gives {lentamente}, {firme} gives {firmemente}, {fácil} gives {facilmente}, {geral} gives {geralmente}, {constante} gives {constantemente}. The rule is so productive that it barely has exceptions: in biblical text, seeing {-mente} is enough to know that an adjective is hidden behind it.

What deserves attention is that the path does not always show the feminine step. {Geral} has no feminine marker in Portuguese and still gives {geralmente}; {bonito} gives {bonitamente} without there being a {bonita} used as an adjective on its own. Latin did the same with adverbs in {-e}, and Portuguese swapped that suffix for {-mente}.

## The irregular ones and the ones with no -mente

One list has to be learned, and it is short. Quality: {bem}, {mal}, {melhor}, {pior}. Time: {cedo}, {tarde}, {depressa}, {agora}, {hoje}, {ontem}, {amanhã}, {sempre}, {nunca}, {jamais}. Place: {aqui}, {ali}, {lá}, {perto}, {longe}, {fora}, {dentro}. And quantity and doubt: {bastante}, {demais}, {talvez}, {certamente}, {apenas}, {já}.

These adverbs derive from nothing, and that is why only reading fixes them. {Bem} and {mal} are the commonest of all, and biblical text sets them against each other often: {bem-aventurados}, {não me fazes bem}.

## The adverb that is also an adjective

Some words do both jobs without changing form. {Livre} is an adjective in {homem livre} and an adverb in {falou livre}; {forte} is an adjective in {homem forte} and an adverb in {falou forte}; the same holds for {firme}, {certo}, {claro}, {primeiro}, {único}, {mesmo}, {verdadeiro}, {alto}.

The test is short: can the word come after a noun? If it can, it is an adjective; if it can only sit next to the verb, it is an adverb. {Independente} is an adjective and accepts {um homem independente}; {independentemente} is an adverb and accepts nothing before it. Portuguese does not inflect the adverb, and that is why the two are different words and not one word in two roles.

## Reading criterion

With any adverb, ask: was it formed from an adjective, and which one? Or is it irregular, and then it has to be known by heart? And is the form the same as an adjective's?

Psalm 84 ends with a blessing on whoever “walks uprightly”: {retamente} is the adjective {reto} in the feminine plus {-mente}, and the suffix {mente} is doing there the work Greek ἡγημένως did with a single form. Anyone who spots the {-mente} reads the adverb as a derivation and not as a separate word.`),
  vocab: [
    V('lentamente', 'lenta', 'lentamente'),
    V('firmemente', 'firme', 'firmemente'),
    V('facilmente', 'fácil', 'facilmente'),
    V('geralmente', 'geral', 'geralmente'),
    V('bonitamente', 'bonito', 'bonitamente'),
    V('independentemente', 'independentemente', 'independentemente'),
    V('livre', 'livre', 'livre (adjective and adverb)'),
    V('forte', 'forte', 'forte (adjective and adverb)'),
    V('bem', 'bem', 'bem'),
    V('mal', 'mal', 'mal'),
    V('depressa', 'depressa', 'depressa'),
    V('cedo', 'cedo', 'cedo'),
    V('sempre', 'sempre', 'sempre'),
    V('nunca', 'nunca', 'nunca'),
    V('já', 'já', 'já'),
  ],
  rules: [
    {
      n: '§1',
      text: T('The regular adverb is formed with the feminine of the adjective plus {-mente}.'),
    },
    {
      n: '§2',
      text: T(
        'Irregular adverbs derive from nothing and have to be learned: {bem}, {mal}, {cedo}, {tarde}, {depressa}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Adjective and adverb can share a form; the test is whether the word can come after a noun.',
      ),
    },
    {
      n: '§4',
      text: T('Portuguese does not inflect the adverb: neither by number nor by gender.'),
    },
    {
      n: '§5',
      text: T(
        'Seeing {-mente} in the text is seeing a hidden adjective: an adverb is always a derivation.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical × everyday'),
      text: T(
        'Biblical Greek uses few adverbs in {-mente} and many in {-ως}, such as ἁγνῶς. Portuguese needs a word for each, and the translator chooses the one the Greek left implicit.',
      ),
    },
    {
      label: T('False relative'),
      text: T(
        'Not every word ending in {-mente} behaves the same: {momentaneamente} and {fundamentalmente} are real adverbs, and the test is still the same, coming after a noun.',
      ),
    },
  ],
  examples: [
    { text: 'Falou lentamente.', gloss: T('{lenta} in the feminine plus {-mente}.') },
    {
      text: 'A verdade é obviamente simples.',
      gloss: T('{obviamente} comes from {obvia} in the feminine.'),
    },
    { text: 'Chegou cedo demais.', gloss: T('Irregular adverb, with no derivation.') },
    { text: 'Era um homem livre.', gloss: T('{livre} as adjective: it comes after the noun.') },
    { text: 'Falou livre.', gloss: T('{livre} as adverb: it cannot come after a noun.') },
    {
      text: 'independentemente do preço.',
      gloss: T('An adverb that does not inflect and takes no article.'),
    },
    { text: 'Ele dormiu bem.', gloss: T('Irregular adverb of quality.') },
    { text: 'Sabe isso claramente.', gloss: T('{claramente} from {clara} plus {-mente}.') },
  ],
  tables: [
    {
      caption: T('Forming the adverb'),
      head: ['Adjetivo', 'Feminino', 'Advérbio'],
      rows: [
        ['lento', 'lenta', 'lentamente'],
        ['firme', 'firme', 'firmemente'],
        ['geral', 'geral', 'geralmente'],
        ['independente', 'independente', 'independentemente'],
      ],
    },
    {
      caption: T('Irregular adverbs'),
      head: ['Grupo', 'Formas'],
      rows: [
        ['qualidade', 'bem, mal'],
        ['tempo', 'cedo, tarde, depressa, sempre, nunca'],
        ['lugar', 'aqui, ali, lá, perto, longe'],
        ['quantidade', 'bastante, demais, apenas, já'],
      ],
    },
    {
      caption: T('Adjective or adverb'),
      head: ['Palavra', 'Adjetivo', 'Advérbio'],
      rows: [
        ['livre', 'homem livre', 'falou livre'],
        ['forte', 'homem forte', 'falou forte'],
        ['claro', 'dia claro', 'viu claro'],
        ['mesmo', 'o mesmo dia', 'faz o mesmo'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How is the adverb of {lenta} formed?'),
    options: [T('lentamente'), T('lento-mente'), T('lentido'), T('lenteza')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{cedo} is an ______ adverb.'),
      answer: 'irregular',
      hint: T('It comes from no adjective.'),
    },
    {
      kind: 'choose',
      prompt: T('In “homem livre”, {livre} is:'),
      options: [T('an adjective'), T('an adverb'), T('a pronoun'), T('a numeral')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the phrase to what the word is in it.'),
      pairs: [
        { a: T('homem livre'), b: T('adjetivo') },
        { a: T('falou livre'), b: T('advérbio') },
        { a: T('falou claramente'), b: T('advérbio') },
        { a: T('dia claro'), b: T('adjetivo') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
