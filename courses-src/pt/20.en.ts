import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('The adjective and the adverb'),
  title: T('The adverb: negation'),
  subtitle: T('não pode, pode não, and the proclisis that does not negate'),
  body: C(`## What each one negates

{Não} negates the verb, which is why it always comes before it. The others negate other things: {nunca} and {jamais} negate time, {nada} negates the thing, {ninguém} negates the person, {nenhum} negates the indefinite, {nem} adds a second negation, and {tampouco} says the thing is less than it was thought to be.

Each one negates one element, and that is why they can pile up: {Não vi ninguém}, {Nunca vi ninguém}, {Não vi nada nunca}. That is not redundancy, it is emphasis: every adverb negates a different element of the sentence.

## The proclisis of não

{Não} has two positions, and the difference is real. In {Ele não pode vir}, {não} negates the fact: he is incapable. In {Ele pode não vir}, {não} negates the coming: he is able, and what he does not do is come. The same pair exists with the conditional: {não deveria} says he should not; {deveria não} says he should refrain.

The rule is that {não} comes before the verb when what it negates is the first information in the sentence. It goes after the verb when the main information has already been given and {não} modifies the infinitive or what comes after it.

## Where the negation hangs

{Não} can also sit inside a subordinate clause. {Não sei se ele vem} has {não} on the main verb and the subordinate clause after it; {Não acredito que ele venha} has {não} on the main verb and the subjunctive in the subordinate. And there is the reverse case, where the negation is in the subordinate clause: {Os que não creram}.

That is where biblical translation goes wrong most often, because Greek and Hebrew put the negation at a fixed point in the sentence and Portuguese has to reorganise. What cannot happen is moving the negation out of what it negates.

## Reading criterion

In any sentence with {não}, ask: what is being negated, the verb, the time, the thing, the person or the indefinite? And is {não} before or after the verb?

John 15:25 says that the words of the law are fulfilled, “which {não creram}”: the negation sits inside the relative clause and not on the main verb of the sentence. That is the case where the biblical negation stays attached to the relative pronoun, and in Portuguese it appears in exactly the same place.`),
  vocab: [
    V('não', 'não', 'não'),
    V('nunca', 'nunca', 'nunca'),
    V('jamais', 'jamais', 'jamais'),
    V('nada', 'nada', 'nada'),
    V('ninguém', 'ninguém', 'ninguém'),
    V('nenhum', 'nenhum', 'nenhum'),
    V('nem', 'nem', 'nem'),
    V('tampouco', 'tampouco', 'tampouco'),
    V('não pode', 'poder', 'não pode'),
    V('pode não', 'poder', 'pode não'),
    V('não sabia', 'saber', 'não sabia'),
    V('não creram', 'crer', 'não creram'),
    V('a lei', 'lei', 'a lei'),
    V('o verbo', 'verbo', 'o verbo'),
    V('a negação', 'negação', 'a negação'),
  ],
  rules: [
    { n: '§1', text: T('{Não} negates the verb and therefore comes before it.') },
    {
      n: '§2',
      text: T(
        '{Nunca} and {jamais} negate time, {nada} negates the thing, {ninguém} negates the person, {nenhum} negates the indefinite.',
      ),
    },
    { n: '§3', text: T('{Não pode} negates the fact and {pode não} negates the coming.') },
    {
      n: '§4',
      text: T('The negation can sit inside the subordinate clause: {os que não creram}.'),
    },
    {
      n: '§5',
      text: T('The negation never leaves what it negates, in Portuguese or in translation.'),
    },
  ],
  notes: [
    {
      label: T('Biblical × everyday'),
      text: T(
        'Biblical Hebrew has a negation particle ({lo}, {al}), and Greek uses {μή} and {οὐκ}. All three mark the negation once, and Portuguese sometimes needs two words to say the same thing.',
      ),
    },
    {
      label: T('Double negation'),
      text: T(
        'In {não é possível}, the second negation negates nothing: it reinforces. That is why {não é possível} is more emphatic than {é impossível}.',
      ),
    },
  ],
  examples: [
    { text: 'Ele não pode vir.', gloss: T('{não} negates the fact: he is unable.') },
    { text: 'Ele pode não vir.', gloss: T('{não} negates the coming, not the ability.') },
    { text: 'Não deveria falar.', gloss: T('Negation of the main verb.') },
    { text: 'Deveria não falar.', gloss: T('He ought to refrain from speaking.') },
    { text: 'Não sei se ele vem.', gloss: T('The subordinate clause stays whole, after.') },
    { text: 'Nunca vi ninguém.', gloss: T('Two negations, two negated elements.') },
    { text: 'Nem ele, tampouco eu.', gloss: T('The second negation is weaker than the first.') },
    { text: 'Os que não creram.', gloss: T('The negation stuck to the relative pronoun.') },
  ],
  tables: [
    {
      caption: T('Each adverb negates one element'),
      head: ['Advérbio', 'O que nega', 'Exemplo'],
      rows: [
        ['não', 'o verbo', 'não viu'],
        ['nunca, jamais', 'o tempo', 'nunca viu'],
        ['nada', 'a coisa', 'não viu nada'],
        ['ninguém', 'a pessoa', 'não viu ninguém'],
        ['nenhum', 'o indefinido', 'não viu nenhum livro'],
      ],
    },
    {
      caption: T('The two positions of não'),
      head: ['Posição', 'Frase', 'O que se nega'],
      rows: [
        ['antes do verbo', 'Ele não pode vir.', 'o fato: ele é incapaz'],
        ['depois do verbo', 'Ele pode não vir.', 'o vir: ele é capaz, mas não vem'],
      ],
    },
    {
      caption: T('Negation by element'),
      head: ['Grau', 'Frase', 'Explicação'],
      rows: [
        ['fraca', 'Não vi.', 'nega o verbo'],
        ['média', 'Não vi nada.', 'nega também a coisa'],
        ['forte', 'Não vi nunca nada.', 'nega verbo, tempo e coisa'],
        ['máxima', 'Não vi jamais nada de ninguém.', 'nega tudo, um elemento por vez'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In “ele pode não vir”, what is negated?'),
    options: [T('the coming'), T('the ability'), T('the time'), T('the person')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('In “{não pode}”, {não} negates the ______.'),
      answer: 'fato',
      hint: T('He is unable.'),
    },
    {
      kind: 'choose',
      prompt: T('Which adverb negates a person?'),
      options: [T('ninguém'), T('nada'), T('nunca'), T('nenhum')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the adverb to what it negates.'),
      pairs: [
        { a: T('não'), b: T('o verbo') },
        { a: T('nada'), b: T('a coisa') },
        { a: T('ninguém'), b: T('a pessoa') },
        { a: T('nunca'), b: T('o tempo') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
