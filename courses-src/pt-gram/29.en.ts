import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  section: T('The structure of the period'),
  title: T('Analyzing compound periods'),
  subtitle: T('The analysis procedure, step by step'),
  body: C(`**Overview.** First count the verbs: in {Disse Jesus: «Quem são estes?»} there are two, {disse} and {são}, and therefore two clauses.

**Rule 1.** Then separate what is {independent} from what is {dependent}: the speech {Quem são estes?} completes the verb {disse}, and so it is a {direct noun clause}.

**Rule 2.** What completes a verb of the main clause is a {direct noun clause}, and what brings a consequence is an {adverbial consecutive clause}: in {de modo que já estava se enchendo}, the value is consequence.

**Rule 3.** {Degree} is counted by distance: {Passemos para o outro lado} depends only on {disse} and is first degree; {Cala-te! E saí!} depends on the speech and is second degree.

**Rule 4.** A {reproduced speech} with no connector fills the place of a {direct noun clause}: in {E disse: Cala-te!}, what is the object of {disse} is the whole speech, not {Cala-te}.

**Application.** In {Disse Jesus: «Quem são estes?»}, the period has **two** clauses: {Disse Jesus} (main, verbal) and {Quem são estes} (a **direct noun** subordinate clause, object of {disse}). Inside the first, {Jesus} is the subject and {Disse} the verb. Inside the second, {estes} is the subject, {são} the verb and {quem} the interrogative pronoun. And the **speech** is the very content of the subordinate clause, and Greek does the same with {τίς οὗτοί εἰσιν}.

**Check.** Run six steps in order. One: count the verbs. Two: separate what is {main} from what is {subordinate}. Three: ask each subordinate clause **what** it completes. Four: if it completes a verb, it is a {noun clause}; if it characterizes a noun, an {adjective clause}; if it marks circumstance, an {adverbial clause}. Five: count the {degree} by distance. Six: name the function inside the main clause. The analysis comes out with no reliance on intuition.`),
  vocab: [
    V('período composto', 'período composto', 'period with two or more clauses'),
    V('verbo conjugado', 'verbo conjugado', 'marks the start of each clause'),
    V('oração coordenada', 'oração coordenada', 'independent, of the same degree'),
    V('oração subordinada', 'oração subordinada', 'depends on a term of the main clause'),
    V('substantiva', 'substantiva', 'functions as a noun'),
    V('adjetiva', 'adjetiva', 'functions as an adjective'),
    V('adverbial', 'adverbial', 'marks circumstance'),
    V('reduzida', 'reduzida', 'with no conjugated verb of its own'),
    V('τίς οὗτοί εἰσιν', 'τίς οὗτοί εἰσιν', 'the question of Jesus in Greek'),
    V('Cala-te! E saí!', 'Cala-te! E saí!', 'speech with two coordinated clauses inside'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'First count the verbs: in {Disse Jesus: «Quem são estes?»} there are two, {disse} and {são}, and therefore two clauses.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Then separate what is {independent} from what is {dependent}: the speech {Quem são estes?} completes the verb {disse}, and so it is a {direct noun clause}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'What completes a verb of the main clause is a {direct noun clause}, and what brings a consequence is an {adverbial consecutive clause}: in {de modo que já estava se enchendo}, the value is consequence.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{Degree} is counted by distance: {Passemos para o outro lado} depends only on {disse} and is first degree; {Cala-te! E saí!} depends on the speech and is second degree.',
      ),
    },
    {
      n: '§5',
      text: T(
        'A {reproduced speech} with no connector fills the place of a {direct noun clause}: in {E disse: Cala-te!}, what is the object of {disse} is the whole speech, not {Cala-te}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The procedure that replaces intuition'),
      text: T(
        'Syntactic analysis becomes easy once the question is always the same: what does this clause complete? If it completes a verb, it is a {noun clause}. If it characterizes a noun, an {adjective clause}. If it marks time, cause or purpose, an {adverbial clause}. The question does not change from one lesson to the next, and that is why the procedure is memorized: not the result.',
      ),
    },
    {
      label: T('The degree punctuation does not reveal'),
      text: T(
        'In Mark 4:38 the semicolon separates two coordinates, and the semicolon in Mark 4:37 separates the main clause from a coordinate and from a subordinate. The same punctuation marks different things, and that is why degree is counted by structure and not by sign. Counting degree by comma is exactly what goes wrong in the densest verses.',
      ),
    },
  ],
  examples: [
    {
      text: 'Disse Jesus: «Quem são estes?»',
      gloss: T('Two clauses: {Disse Jesus} and the speech, which is a {direct noun clause}.'),
    },
    {
      text: 'E, ao anoitecer, disse: Passemos para o outro lado',
      gloss: T('The speech is a {first degree direct noun clause}, with no written connector.'),
    },
    {
      text: 'de modo que já estava se enchendo de água',
      gloss: T('A {first degree adverbial consecutive clause}, introduced by {de modo que}.'),
    },
    {
      text: 'Cala-te! E saí!',
      gloss: T('A speech with two coordinates inside: {Cala-te} and {saí}.'),
    },
    {
      text: 'o barco queDependent',
      gloss: T(
        'The clause {que Dependent} is {restrictive adjective}: it limits the noun {barco}.',
      ),
    },
    {
      text: 'Vinde, e segui-me',
      gloss: T('Two coordinates: {Vinde} and {segui-me}, both independent.'),
    },
    {
      text: 'Creio, porque tu és o Filho',
      gloss: T('Main clause {Creio} and a {first degree causal adverbial clause}.'),
    },
    {
      text: 'É necessário que venhas',
      gloss: T('The {subjective noun clause} fills the subject place of {é}.'),
    },
    {
      text: 'τίς οὗτοί εἰσιν',
      gloss: T('The Greek question matching {Quem são estes?}, with the same value.'),
    },
  ],
  tables: [
    {
      caption: T('The six steps of the analysis'),
      head: [T('Passo'), T('Pergunta'), T('O que se procura'), T('Exemplo')],
      rows: [
        [T('1'), T('quantos verbos há?'), T('o número de orações'), T('{disse}, {são}')],
        [
          T('2'),
          T('qual é a principal?'),
          T('a oração que os demais completam'),
          T('{Disse Jesus}'),
        ],
        [
          T('3'),
          T('o que cada subordinada completa?'),
          T('a função de cada uma'),
          T('{Quem são estes}'),
        ],
        [
          T('4'),
          T('é substantiva, adjetiva ou adverbial?'),
          T('o tipo'),
          T('{substantiva direta}'),
        ],
        [T('5'), T('a que distância está da principal?'), T('o grau'), T('{primeiro grau}')],
        [
          T('6'),
          T('que papel tem dentro da principal?'),
          T('a função final'),
          T('{objeto de disse}'),
        ],
      ],
    },
    {
      caption: T('Subordinate clauses and what each one completes'),
      head: [T('Tipo'), T('O que completa'), T('Pode ser trocada por'), T('Exemplo')],
      rows: [
        [
          T('{substantiva direta}'),
          T('objeto de um verbo'),
          T('{isso}'),
          T('{Creio que isto é verdade}'),
        ],
        [
          T('{substantiva subjetiva}'),
          T('sujeito de um verbo'),
          T('{isso}'),
          T('{É necessário que venhas}'),
        ],
        [
          T('{substantiva predicativa}'),
          T('complemento nominal'),
          T('{isso}'),
          T('{Certo é que ele veio}'),
        ],
        [
          T('{adjetiva restritiva}'),
          T('um nome, para limitar'),
          T('{que}, {o qual}'),
          T('{o barco que vias}'),
        ],
        [
          T('{adjetiva explicativa}'),
          T('um nome, para explicar'),
          T('{que}, {o qual}'),
          T('{o barco, que era velho}'),
        ],
        [
          T('{adverbial causal}'),
          T('a causa do que se afirma'),
          T('{isso}'),
          T('{não fui, porque era tarde}'),
        ],
        [
          T('{adverbial final}'),
          T('a finalidade do que se faz'),
          T('{isso}'),
          T('{vim para que vês}'),
        ],
      ],
    },
    {
      caption: T('Degree of the clauses in the period'),
      head: [T('Grau'), T('Depende de'), T('Distância da principal'), T('Exemplo')],
      rows: [
        [T('primeiro'), T('da principal'), T('imediata'), T('{Passemos para o outro lado}')],
        [T('segundo'), T('de uma subordinada'), T('uma oração dentro'), T('{Cala-te! E saí!}')],
        [
          T('terceiro'),
          T('de uma do segundo grau'),
          T('duas orações dentro'),
          T('raro na Escritura'),
        ],
        [
          T('{reduzida}'),
          T('de qualquer termo'),
          T('sem verbo próprio'),
          T('{Caminhando para Ele}'),
        ],
        [T('{coordenada}'), T('da principal'), T('mesmo grau que a principal'), T('{E saiu}')],
        [T('{principal}'), T('de nada'), T('ponto de partida'), T('{Disse Jesus}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Disse Jesus: «Quem são estes?»}, the speech {Quem são estes?} is:'),
    options: [
      T('a first degree direct noun clause, object of {disse}'),
      T('the main clause, because it comes after the verb'),
      T('an explanatory adjective clause of {Jesus}'),
      T('an asyndetic coordinate of {Disse Jesus}'),
    ],
    answer: 0,
    hint: T(
      'The question that decides: what does the speech complete? It completes the verb {disse}.',
    ),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {de modo que já estava se enchendo}, the subordinate clause is:'),
      options: [
        T('adverbial consecutive, because it brings the result'),
        T('a direct noun clause, because it completes a verb'),
        T('restrictive adjective, because it limits a noun'),
        T('conclusive coordinate, because it comes after'),
      ],
      answer: 0,
      hint: T('{De modo que} is the connector of the consecutive clauses.'),
    },
    {
      kind: 'match',
      prompt: T('Match each passage to the kind of clause it contains.'),
      pairs: [
        { a: T('{Vinde, e segui-me}'), b: T('coordinate clause') },
        { a: T('{Cala-te! E saí!}'), b: T('speech with two coordinates') },
        { a: T('{Passemos para o outro lado}'), b: T('first degree direct noun clause') },
        { a: T('{porque tu és o Filho}'), b: T('causal adverbial clause') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('The number of clauses in a period is the number of ______ it has.'),
      answer: 'verbos',
      hint: T('Two verbs, two clauses.'),
    },
  ],
};
