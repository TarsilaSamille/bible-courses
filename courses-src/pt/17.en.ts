import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('Pronouns'),
  title: T('Pronouns: the whole system'),
  subtitle: T('meu, teu, seu, este, aquele, algum, and the two-system difference'),
  body: C(`## Personal pronouns and the particle that became a pronoun

Personal pronouns split into tonic and clitic. The tonic ones are {eu}, {tu}, {ele/ela}, {nós}, {vós}, {eles/elas}, and they stand alone, with full meaning. The clitics are {me}, {te}, {o/a}, {se}, {nos}, {vos}, {lhe/lhes}, and they do not exist alone: they come glued to the verb.

Cliticisation is what produced the split. In Old Portuguese, {dar-vo-lo} meant “to give you the book”: the pronoun was a piece in its own right and the verb came last. Latin had done the same with {mihi} and {tibi}. The process is old, and the spelling reforms of the twentieth century did not invent it: what had been a pronoun became a particle in standard Portuguese, and in Portugal and in Brazil the pronoun standing alone stopped existing.

## Possessives and the split between teu and seu

The possessive comes before the noun and agrees with the owner, not with the thing: {meu livro}, {minha casa}, {meus livros}, {minhas casas}. After the noun only {dele}, {dela}, {deles}, {delas} come, and in that position the possessive is already a pronoun: {o livro dele}.

{Teu} and {seu} remain full pronouns, and so they have two forms: {o teu} and {a tua}, {o meu} and {a minha}. {Seu} is the most ambiguous of them: in {o seu pai} it can be the father of the speaker or the father of the listener. With {tu} the {seu} tends to be the speaker's; with {você} it tends to be the listener's, and context settles the ambiguity, not form.

## Demonstratives: a system of three distances

Portuguese has demonstratives for three positions, and that is what sets it apart from Spanish. {Este} is what is near the speaker, {esse} is what is far from the speaker, and {aquele} is what is far from the listener. Spanish manages with two, {este} and {ese}, and has to fall back on {aquel} for what is far from the listener.

The same logic governs the demonstrative pronouns: {isto}, {isso}, {aquilo}. And it governs time: {nesta semana} is the speaker's week, {nessa semana} is the listener's, {naquela semana} belongs to a third party.

## Indefinites and relatives

Indefinites give quantity or quality without identifying: {algum}, {nenhum}, {todo}, {cada}, {qual}, {outro}, {tudo}. {Algum} is negated by {nenhum}, which is {algum} negated outright, and {todo} goes before the noun or after it, with a different effect: {todo homem} says that all men have the property, {o homem todo} says that the whole man has it.

Relatives open the subordinate clause and stand for an earlier noun: {que}, {qual}, {cujo}, {quem}, {onde}, {quando}, {como}. {Que} is the commonest and stands for person and thing; {quem} only for person; {cujo} links a noun to an owner, and so it agrees with the owner ({cujo pai}, {cujo nome}).

## Reading criterion

In John 3:16, {que todo aquele que crê nele não pereça}: {todo aquele que} is one indefinite ({todo}), one relative ({que}) and one demonstrative ({aquele}) working as a noun. Three pronoun classes in one phrase, and the whole sentence rests on that stack.

With any pronoun, ask: is it tonic or clitic? Is it possessive, demonstrative, indefinite or relative? And if it is a demonstrative, at what distance? With the three answers the pronoun is closed, and the text stops having pronouns left to explain.`),
  vocab: [
    V('eu', 'eu', 'eu'),
    V('tu', 'tu', 'tu'),
    V('ele', 'ele', 'ele/ela'),
    V('nós', 'nós', 'nós'),
    V('eles', 'eles', 'eles/elas'),
    V('meu', 'meu', 'meu'),
    V('teu', 'teu', 'teu'),
    V('seu', 'seu', 'seu'),
    V('dele', 'dele', 'dele/dela'),
    V('este', 'este', 'este (near the speaker)'),
    V('esse', 'esse', 'esse (far from the speaker)'),
    V('aquele', 'aquele', 'aquele (far from the listener)'),
    V('isto', 'isto', 'isto'),
    V('aquilo', 'aquilo', 'aquilo'),
    V('algum', 'algum', 'algum'),
    V('todo', 'todo', 'todo'),
    V('cada', 'cada', 'cada'),
  ],
  rules: [
    { n: '§1', text: T('Tonic pronouns stand alone: {eu}, {tu}, {ele}, {nós}, {vós}, {eles}.') },
    {
      n: '§2',
      text: T('Clitic pronouns exist only glued to the verb: {me}, {te}, {o}, {se}, {nos}, {lhe}.'),
    },
    {
      n: '§3',
      text: T(
        'The possessive agrees with the owner, not with the thing: {meu}, {minha}, {meus}, {minhas}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Demonstratives have three positions: {este} near, {esse} far, {aquele} far from the listener.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Relative pronouns open the subordinate clause and stand for a noun: {que}, {quem}, {cujo}, {onde}, {quando}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical × everyday'),
      text: T(
        'Biblical Portuguese, with {vos} and {meu}, is the norm and not an archaism. The spelling reforms of the twentieth century changed the grammar, not the Bible: a 1611 text is still readable.',
      ),
    },
    {
      label: T('What Greek settles'),
      text: T(
        'Greek has three demonstratives, and each one fixes the distance in relation to the speaker. Portuguese gives each of the three a single word, so a translation keeps the information and sometimes loses the distance.',
      ),
    },
  ],
  examples: [
    { text: 'Ele deu-me o livro.', gloss: T('Tonic {Ele} and clitic {me} in one sentence.') },
    { text: 'O teu nome.', gloss: T('Possessive with the definite article: {teu} plus {nome}.') },
    { text: 'A tua casa é minha.', gloss: T('{teu} completes in two forms: {o teu} and {a tua}.') },
    { text: 'Isto é o que pedi.', gloss: T('First person demonstrative: {isto}.') },
    { text: 'Aquilo disse o profeta.', gloss: T('Third person demonstrative: {aquilo}.') },
    { text: 'Nenhuma árvore deu fruto.', gloss: T('Negated indefinite: {nenhum}.') },
    {
      text: 'Cada homem trae sua cruz.',
      gloss: T('{cada} distributes, and does not totalise the way {todo} does.'),
    },
    { text: 'O rei cujo nome é eterno.', gloss: T('{cujo} links the relative to the possessor.') },
  ],
  tables: [
    {
      caption: T('Personal pronouns'),
      head: ['Pessoa', 'Tônico', 'Átono'],
      rows: [
        ['eu', 'eu', 'me'],
        ['tu', 'tu', 'te'],
        ['ele/ela', 'ele/ela', 'o/a, lhe'],
        ['nós', 'nós', 'nos'],
        ['vós', 'vós', 'vos'],
        ['eles/elas', 'eles/elas', 'os/as, lhes'],
      ],
    },
    {
      caption: T('Demonstratives: three positions'),
      head: ['Posição', 'Adjetivo', 'Pronome'],
      rows: [
        ['perto de quem fala', 'este', 'isto'],
        ['longe de quem fala', 'esse', 'isso'],
        ['longe de quem ouve', 'aquele', 'aquilo'],
      ],
    },
    {
      caption: T('Relatives'),
      head: ['Pronome', 'Vale por', 'Exemplo'],
      rows: [
        ['{que}', 'pessoa ou coisa', 'o livro que li'],
        ['{quem}', 'pessoa', 'aquele que viu'],
        ['{cujo}', 'posse', 'cujo pai'],
        ['{onde}, {quando}, {como}', 'lugar, tempo, modo', 'onde mora'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which pronoun is the demonstrative for what is far from the listener?'),
    options: [T('aquele'), T('este'), T('esse'), T('esse mesmo')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('The possessive agrees with ______, not with the thing.'),
      answer: 'o dono',
      hint: T('{meu} and {minha} change with the owner.'),
    },
    {
      kind: 'choose',
      prompt: T('In “o livro que li”, {que} is:'),
      options: [T('relative'), T('demonstrative'), T('indefinite'), T('possessive')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the pronoun to its value.'),
      pairs: [
        { a: T('este'), b: T('perto de quem fala') },
        { a: T('esse'), b: T('longe de quem fala') },
        { a: T('aquele'), b: T('longe de quem ouve') },
        { a: T('cada'), b: T('distribui') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
