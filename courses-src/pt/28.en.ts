import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('Syntax'),
  title: T('The information that goes to the end'),
  subtitle: T('ontem comprou-se um livro, and the order that settles the sense'),
  body: C(`## The end of the sentence is what is new

Neutral Portuguese is subject, verb, object. Whatever leaves that neutral order goes to the end, and what goes to the end is the **new** information: {Um livro foi comprado} puts the verb last; {Ontem comprou-se um livro} puts the time last, and the time is what the listener did not know. In {Foi ele quem viu}, the pronoun {ele} goes to the end because he is what stands out.

It holds for subject, object and adverbial alike: {Ao professor entreguei o livro} and {Entreguei o livro ao professor} are the same proposition, and the order decides which of the three is the new information. Portuguese has three positions available for the object, and so does Greek: the information goes where the speaker wants the listener to look.

## The ambiguity that order resolves

An isolated word settles nothing, which is why order is content. In {Vi o homem de longe}, {de longe} can modify the verb ({vi} from afar) or the noun ({o homem} who was far away). Two different sentences with the same words.

The second reading is settled with {que}: {Vi o homem que estava longe}. The first, with an explicit adverb of place: {Vi o homem à distância}. Biblical text bets on the order, and what the translator needs to know is which of the two the Greek wanted.

## Topicalisation as a parenthesis

What is old and already known can be set aside between commas, like a parenthesis, and the main information stays at the end. {O homem, que era pobre, deu o livro} sets the poverty aside; what is new is the gift. The same goes for the adverb: {No terceiro dia, ele ressuscitou}.

That is why the position of the demonstratives matters so much. {Isto} points at what is being discussed now, {isso} at what is already in the context of the conversation, {aquilo} at what is outside it. And the pronouns {tudo}, {nada}, {alguém} work the same way: they do not point outside the sentence, they point at what has already been said.

## É que, and the reading criterion

There is a construction popular Portuguese uses a lot and older text uses little: {é que}. In {É que eu não quis dizer isso}, the {é que} does not join a subject to a verb: it introduces the explanation once the rest of the sentence is already standing. The rule is that {é que} only comes after a sentence that already holds together, and never at the start of an explanation.

In any sentence, ask: what is the new information? Is it at the end? And what was set aside between commas?

Matthew 3:3 says {preparai o caminho do Senhor, endireitai as suas veredas}: the image goes to the end, and it is the new information, because what the reader already knew was that there was a Lord. The verb stays in the middle, and it is the position of the noun that carries the emphasis of the verse.`),
  vocab: [
    V('a topicalização', 'topicalização', 'topicalisation'),
    V('a informação nova', 'informação', 'the new information'),
    V('a ordem neutra', 'ordem', 'the neutral order'),
    V('um livro foi comprado', 'comprar', 'um livro foi comprado'),
    V('Ontem comprou-se um livro', 'comprar', 'ontem comprou-se um livro'),
    V('Foi ele quem viu', 'ver', 'foi ele quem viu'),
    V('o homem que estava longe', 'longe', 'o homem que estava longe'),
    V('à distância', 'distância', 'à distância'),
    V('isto', 'isto', 'isto'),
    V('isso', 'isso', 'isso'),
    V('aquilo', 'aquilo', 'aquilo'),
    V('os parênteses', 'parênteses', 'the parentheses'),
    V('é que', 'é que', 'é que'),
    V('o parêntese', 'parêntese', 'the parenthesis'),
  ],
  rules: [
    { n: '§1', text: T('The neutral order of Portuguese is subject, verb, object.') },
    { n: '§2', text: T('New information goes to the end: {ontem comprou-se um livro}.') },
    { n: '§3', text: T('What is already known can go between commas, as a parenthesis.') },
    {
      n: '§4',
      text: T(
        '{Isto} points at the matter under discussion, {isso} at the context, {aquilo} at what is outside it.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{É que} only appears after a sentence that already holds together, and never at the start.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical × everyday'),
      text: T(
        'Greek and Hebrew mark focus with case and with the particle, and Portuguese marks it with position. That is why a topic construction in Greek does not always come out topicalised in Portuguese.',
      ),
    },
    {
      label: T('Why order matters'),
      text: T(
        'The isolated word settles nothing: {vi o homem de longe} has two readings. Anyone reading only the words does not know which one the text meant, and the order is what says it.',
      ),
    },
  ],
  examples: [
    { text: 'Um livro foi comprado.', gloss: T('Neutral order: what is new is the verb.') },
    { text: 'Ontem comprou-se um livro.', gloss: T('Topicalised time: what is new is the time.') },
    {
      text: 'Foi ele quem viu o homem.',
      gloss: T('The topicalised pronoun highlights the agent.'),
    },
    {
      text: 'Entreguei o livro ao professor.',
      gloss: T('The indirect object at the end is what is new.'),
    },
    { text: 'Vi o homem de longe.', gloss: T('Two possible readings for the same words.') },
    { text: 'Vi o homem que estava longe.', gloss: T('The ambiguity resolved with {que}.') },
    {
      text: 'O homem, que era pobre, deu o livro.',
      gloss: T('The poverty goes between commas: it is a parenthesis.'),
    },
    {
      text: 'É que eu não quis dizer isso.',
      gloss: T('The {é que} introduces the explanation after the sentence.'),
    },
  ],
  tables: [
    {
      caption: T('Neutral order and marked order'),
      head: ['Ordem', 'Frase', 'O que é novo'],
      rows: [
        ['neutra', 'comprou-se um livro', 'o ato de comprar'],
        ['topicalizada', 'ontem comprou-se um livro', 'o tempo'],
        ['topicalizada', 'comprou-se ontem o livro', 'o objeto'],
        ['topicalizada', 'foi ele quem comprou', 'o sujeito'],
      ],
    },
    {
      caption: T('Parenthesis'),
      head: ['O que é antigo', 'Onde vai', 'Frase'],
      rows: [
        ['a pobreza do homem', 'entre vírgulas', 'o homem, que era pobre, deu o livro'],
        ['o tempo', 'no começo', 'no terceiro dia ele ressuscitou'],
        ['a qualidade', 'entre vírgulas', 'a lei, que era santa, foi lida'],
      ],
    },
    {
      caption: T('Demonstratives as pointers'),
      head: ['Pronome', 'Aponta para'],
      rows: [
        ['isto', 'o que se discute agora'],
        ['isso', 'o que já está no contexto'],
        ['aquilo', 'o que está fora da conversa'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In “ontem comprou-se um livro”, the new information is:'),
    options: [T('the time'), T('the verb'), T('the subject'), T('the place')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('New information always goes to the ______ of the sentence.'),
      answer: 'fim',
      hint: T('It is the marked position of Portuguese.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence resolves the ambiguity of {vi o homem de longe}?'),
      options: [
        T('vi o homem que estava longe'),
        T('vi o homem de longe ontem'),
        T('vi ontem o homem de longe'),
        T('vi o homem longe'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the pronoun to what it points at.'),
      pairs: [
        { a: T('isto'), b: T('o que se discute agora') },
        { a: T('isso'), b: T('o que já está no contexto') },
        { a: T('aquilo'), b: T('o que está fora da conversa') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
};
