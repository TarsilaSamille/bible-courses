import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  section: T('Connectives'),
  title: T('Conjunctions: coordinate'),
  subtitle: T('e, mas, pois, and the comma that decides the reading'),
  body: C(`## The e that does three things

The conjunction {e} is the commonest in Portuguese and it does three different jobs. It **adds**: {Deus amou o mundo e deu o seu Filho}. It **alternates**: {Não é branco nem preto}. And it **opens** the sentence, where there is no addition at all: {E viu Deus tudo o que tinha feito, e eis que era muito bom}.

The third use is the one biblical text uses most, and it is the one translators lose. In Gn 1:31 the {e} at the start of the clause has nothing to add: the whole sentence is a single act.

## Opposition and conclusion

Adversatives set one clause against another: {mas}, {porém}, {contudo}, {todavia}, {entretanto}. Between them there is a difference of register, not of sense: {mas} is the strongest and the commonest in narrative; {porém} and {contudo} are more formal; {todavia} is the most literary.

Conclusives close an argument: {logo}, {portanto}, {por isso}, {de sorte que}. And there is the classic Portuguese confusion: {pois} is the old adversative, and so it means {mas}, not {porque}. In 1611 text, {pois} after a comma is {but}: {Não foi possível levá-lo, pois estava morto}.

## The comma that decides

The comma before {e} is not required, and what it does is change the sense. In {vou à loja e comprei pão} there are two actions of the same person: he went and he bought. In {vou à loja, e comprei pão} the first clause is a plan and the second is a contrary decision, and the comma separates two people.

The same happens with {mas}. {Era pobre, mas honesto} sets two qualities on the same person. {Era pobre, mas não era honesto} says something else, and the comma is what separates the negation.

## Reading criterion

With any conjunction, ask: does it add, oppose or conclude? Is there a comma before it? And does the sentence need it to make sense, or only to breathe?

John 1:14 begins with {E o Verbo se fez carne}: the {e} adds nothing, it marks the start of the clause, and it is the same function as the {e} of {eis que era muito bom} in the first chapter. A translator who puts {e} in the middle of a clause has introduced an addition the text does not have.`),
  vocab: [
    V('e', 'e', 'e (conjunction)'),
    V('mas', 'mas', 'mas'),
    V('porém', 'porém', 'porém'),
    V('contudo', 'contudo', 'contudo'),
    V('todavia', 'todavia', 'todavia'),
    V('logo', 'logo', 'logo'),
    V('portanto', 'portanto', 'portanto'),
    V('por isso', 'isso', 'por isso'),
    V('pois', 'pois', 'pois (old adversative)'),
    V('porque', 'porque', 'porque'),
    V('nem', 'nem', 'neither'),
    V('ou', 'ou', 'or'),
    V('então', 'então', 'then'),
    V('mas sim', 'mas', 'but rather'),
    V('a soma', 'soma', 'addition'),
    V('a oposição', 'oposição', 'opposition'),
  ],
  rules: [
    {
      n: '§1',
      text: T('{E} adds ({e}), alternates ({nem}, {ou}) and opens the sentence ({E viu Deus}).'),
    },
    {
      n: '§2',
      text: T(
        'The adversatives set one clause against another: {mas}, {porém}, {contudo}, {todavia}.',
      ),
    },
    {
      n: '§3',
      text: T('The conclusives close an argument: {logo}, {portanto}, {por isso}, {de sorte que}.'),
    },
    { n: '§4', text: T('{Pois} is the old adversative and means {mas}, not {porque}.') },
    {
      n: '§5',
      text: T(
        'A comma before {e} changes the sense: it separates two actions of one person from two contrary actions.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical × everyday'),
      text: T(
        'Greek coordinates the period with particles: {δέ} adds, {ἀλλά} opposes, {γάρ} explains, {οὖν} concludes. Portuguese renders each with one word, and the choice between {mas} and {porém} belongs to the translator.',
      ),
    },
    {
      label: T('The sentence-initial e'),
      text: T(
        'The {e} that opens a sentence is not addition: it is a particle of rhythm. In popular Portuguese it appears where Greek would have {δέ}.',
      ),
    },
  ],
  examples: [
    {
      text: 'E viu Deus tudo o que tinha feito.',
      gloss: T('{E} at the start of the clause, adding nothing.'),
    },
    { text: 'Amou e deu a vida.', gloss: T('Two actions of the same subject.') },
    { text: 'Não é prata nem ouro.', gloss: T('{Nem} alternates and negates.') },
    { text: 'Era pobre, mas honesto.', gloss: T('Two qualities of the same person.') },
    { text: 'Era pobre, mas não era honesto.', gloss: T('The comma changes the sense.') },
    { text: 'Choveu; logo, fomos para dentro.', gloss: T('Explicit conclusion.') },
    {
      text: 'Não foi possível levá-lo, pois estava morto.',
      gloss: T('{Pois} in the sense of {mas}.'),
    },
    { text: 'Ou vens, ou ficas.', gloss: T('{Ou} strengthens the alternative.') },
  ],
  tables: [
    {
      caption: T('Adversatives'),
      head: ['Conjunção', 'Registro', 'Exemplo'],
      rows: [
        ['mas', 'todos', 'era pobre, mas honesto'],
        ['porém', 'formal', 'era pobre, porém honesto'],
        ['contudo', 'formal', 'era pobre, contudo honesto'],
        ['todavia', 'literário', 'era pobre, todavia honesto'],
      ],
    },
    {
      caption: T('Conclusives'),
      head: ['Conjunção', 'O que faz', 'Exemplo'],
      rows: [
        ['logo', 'fecha o raciocínio', 'logo, viu Deus'],
        ['portanto', 'formal', 'portanto, viu Deus'],
        ['por isso', 'marca a causa no fundo', 'por isso viu Deus'],
        ['pois', 'explica, com valor de porque', 'pois viu Deus'],
      ],
    },
    {
      caption: T('The comma with e'),
      head: ['Com vírgula', 'Sem vírgula', 'Diferença'],
      rows: [
        [
          'vou à loja, e comprei pão.',
          'vou à loja e comprei pão.',
          'atitude contrária contra ação única',
        ],
        [
          'era pobre, mas não era honesto.',
          'era pobre, mas honesto.',
          'negação contra característica',
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In “não foi possível levá-lo, pois estava morto”, {pois} means:'),
    options: [T('but'), T('because'), T('therefore'), T('then')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{e} at the start of a clause is not ______, it is a particle of rhythm.'),
      answer: 'soma',
      hint: T('The sentence adds no two actions.'),
    },
    {
      kind: 'choose',
      prompt: T('Which conjunction is conclusive?'),
      options: [T('portanto'), T('mas'), T('pois'), T('contudo')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the conjunction to its value.'),
      pairs: [
        { a: T('mas'), b: T('oposição') },
        { a: T('logo'), b: T('conclusão') },
        { a: T('pois'), b: T('oposição antiga') },
        { a: T('nem'), b: T('alternativa negativa') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
