import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  section: T('The noun'),
  title: T('The noun and derivation'),
  subtitle: T('casa, caseiro, livraria, and the re- of reconciliou'),
  body: C(`## Suffix on a noun

A suffix joins a noun and produces another noun, usually by shifting {-ário} into {-eiro}, or {-o} into {-ura}. {Livro} gives {livraria}, {papel} gives {papelaria}, {fruta} gives {frutaria}, {açúcar} gives {açucararia}. {Pão} gives {padeiro}, and {-eiro} forms whoever works with the thing.

The rule that holds is this: {-ário} forms the place where the thing is bought or kept, {-eiro} forms who works with it, and {-ura} forms the result of an action. {Casa} gives {casarão} by the {-ão} route, and {casa} gives {caseiro} by the {-eiro} route.

## Suffix on a verb

Verbs turn into nouns too, and there are two routes. The first is the most productive: the noun is the first or second person of the present, with {-o} in place. {Cantar} gives {canto}, {estudar} gives {estudo}, {governar} gives {governo}, {pensar} gives {pensamento}. The second route uses {-mento} or {-ura} and has no relation to the person any more: {mover} gives {movimento}, {escrever} gives {escritura}, {lavar} gives {lavanderia}.

When both routes exist for the same verb, sense decides: {o estudo} is the activity, and {os estudos} are the books and the research; {o banho} is the act and {os banhos} are the occasions of taking a bath.

## Prefix: direction and negation

The prefix goes in front and changes the direction of the verb or noun. The {des-} group undoes: {desfazer}, {descartar}, {descobrir}. The {in-} and {-im-} group negates or turns inward: {inútil}, {imenso}, {imortal}. The {re-} group brings back: {rever}, {refazer}, {reconciliar}. And there are the ones that mark position: {sublinhado}, {superior}, {antecedente}, {entregar}, {transportar}.

That last family is the one that shows up most in text, because {ante-}, {entre-}, {trans-} and {circum-} say position in relation to something, and anyone who knows the family reads the word without stopping.

## Reading criterion

With any word you do not know, take it apart into two or three pieces and ask what each one does. {Reconciliar} is {re-} plus {-ciliar}: it returns to the earlier state. {Sobrelevar} is {sobre-} plus {-levar}: it puts on top. {Contra-} is {contra-} plus {-r}, and it says the opposite.

In 2 Cor 5:19 the verb of the text is {reconciliou}. The prefix {re-} says something returns to the state it was in, and that is what reconciliation does: both sides come to accept each other again. Anyone who knows the prefix has read the verse before reaching the verb, and that is how an unknown word stops being an obstacle.`),
  vocab: [
    V('o sufixo', 'sufixo', 'o sufixo'),
    V('o prefixo', 'prefixo', 'o prefixo'),
    V('a derivação', 'derivação', 'a derivação'),
    V('o livro', 'livro', 'o livro'),
    V('a livraria', 'livraria', 'a livraria'),
    V('o papel', 'papel', 'o papel'),
    V('a papelaria', 'papelaria', 'a papelaria'),
    V('o padeiro', 'padeiro', 'o padeiro'),
    V('o canto', 'canto', 'o canto'),
    V('o estudo', 'estudo', 'o estudo'),
    V('o movimento', 'movimento', 'o movimento'),
    V('inútil', 'inútil', 'inútil'),
    V('reconciliou', 'reconciliar', 'reconciliou'),
    V('desfazer', 'desfazer', 'desfazer'),
    V('antecedente', 'antecedente', 'antecedente'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The suffix {-ário} forms the place where the thing is bought or kept; {-eiro}, who works with it; {-ura}, the result of the action.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Many verbal nouns are the first or second person of the present: {cantar} gives {canto}, {governar} gives {governo}.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{-mento} and {-ura} form action nouns with no relation to the person of the verb: {mover} gives {movimento}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The prefix changes direction or negates: {des-} undoes, {in-} negates, {re-} brings back, {sub-} puts below.',
      ),
    },
    {
      n: '§5',
      text: T(
        'An unknown word is read in parts: the root says what it is, the prefix and the suffix say what is done to it.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical × everyday'),
      text: T(
        'New Testament prefixes are few and productive: {reconciliar}, {anunciar}, {entregar}, {advogar}. The same prefixes make half a dozen words in any Portuguese.',
      ),
    },
    {
      label: T('What suffixation does not do'),
      text: T(
        'Not every transparent word is intuitive: {livraria} is not where the book lives, and {lavanderia} is not where one washes, but where one washes clothes. The form helps, and the sense still comes from context.',
      ),
    },
  ],
  examples: [
    {
      text: 'Comprou o livro na livraria.',
      gloss: T('{-ário} forms the place where the book is bought.'),
    },
    { text: 'O padeiro assou o pão.', gloss: T('{-eiro} forms who works with the bread.') },
    { text: 'O canto da assembleia.', gloss: T('The verb {cantar} turned noun in {-o}.') },
    { text: 'Estudou a lei a vida inteira.', gloss: T('{o estudo} as activity, not as book.') },
    {
      text: 'A água está em movimento.',
      gloss: T('{-mento} with no relation to the person of the verb.'),
    },
    { text: 'Nada era inútil.', gloss: T('The prefix {in-} negates the quality.') },
    {
      text: 'Refizeram a viagem.',
      gloss: T('The prefix {re-} brings back what was already done.'),
    },
    {
      text: 'Entregaram o livro a ele.',
      gloss: T('The prefix {entre-} marks position in relation to someone.'),
    },
  ],
  tables: [
    {
      caption: T('Suffix on a noun'),
      head: ['Sufixo', 'Resultado', 'Exemplos'],
      rows: [
        ['-ário', 'lugar de compra ou guarda', 'livraria, papelaria, açucararia'],
        ['-eiro', 'quem trabalha com', 'padeiro, atravessador, lancheiro'],
        ['-ura', 'resultado da ação', 'escultura, pintura, costura'],
      ],
    },
    {
      caption: T('Suffix on a verb'),
      head: ['Sufixo', 'Exemplo', 'O que produz'],
      rows: [
        ['-o', 'canto, estudo, governo', 'primeira ou segunda pessoa do presente'],
        ['-mento', 'movimento, nascimento', 'ação considerada em si'],
        ['-ura', 'escritura, lavanderia', 'resultado ou lugar da ação'],
      ],
    },
    {
      caption: T('Prefixes'),
      head: ['Prefixo', 'Valor', 'Exemplos'],
      rows: [
        ['des-', 'desfaz', 'descartar, desfazer'],
        ['in-/im-', 'nega', 'inútil, imenso'],
        ['re-', 'traz de volta', 'rever, reconciliar'],
        ['sub-, super-', 'posição', 'sublinhado, superior'],
        ['ante-, entre-, trans-', 'posição em relação', 'antecedente, entregar, transportar'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which suffix forms the place where books are bought?'),
    options: [T('-ário'), T('-eiro'), T('-ura'), T('-mento')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{cantar} gives the noun ______.'),
      answer: 'canto',
      hint: T('First person of the present.'),
    },
    {
      kind: 'choose',
      prompt: T('The prefix {re-} in {reconciliou} means:'),
      options: [T('brings back'), T('undoes'), T('negates'), T('marks position below')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the prefix to its value.'),
      pairs: [
        { a: T('des-'), b: T('desfaz') },
        { a: T('in-'), b: T('nega') },
        { a: T('re-'), b: T('traz de volta') },
        { a: T('entre-'), b: T('posição em relação') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
