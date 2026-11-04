import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  section: T('The structure of the period'),
  title: T('Period syntax'),
  subtitle: T('Clause, period and syntactic independence'),
  body: C(`**Overview.** Count one verb per clause: in {Disse Jesus: «Vinde a mim»} there are two verbs, {disse} and {vinde}, and therefore two clauses.

**Rule 1.** A {simple period} has a single clause; a {compound} one has two or more: in {Vinde e segui-me}, {vinde} and {segui-me} are two.

**Rule 2.** A {coordinated} clause has syntactic autonomy and a {subordinate} one depends on a term of the main clause: in {Vinde, porque eu vou}, the second does not stand on its own.

**Rule 3.** A {reduced clause} has no conjugated verb of its own: in {Caminhando towards Ele}, {caminhando} is a gerund depending on the main verb.

**Rule 4.** A {period} is the complete sequence of one or more clauses, and the final point is what closes the count: in {E disse Jesus, e saíram}, there are two clauses.

**Application.** In {E Jesus, chorando, saiu}, the period has **one** clause, with three adjuncts. In {E disse Jesus: «Vinde a mim»}, the period has **three** clauses: {Disse Jesus} is the main one, {e} links, and {Vinde a mim} is the object of the verb {disse}. And in {Creio, porque tu és o Filho do Deus vivo}, there are two: the main {Creio} and the causal subordinate {porque tu és...}.

**Check.** Count the clauses: how many are there? If one, the period is simple. If more than one, ask each one: does it have a **subject of its own** and is it **independent**? If so, it is coordinated; if it depends on the other, it is subordinate. And identify the **main clause**, the one that is governed by no term. Two questions, and the period opens up whole.`),
  vocab: [
    V('oração', 'oração', 'syntactic unit with a verb'),
    V('período', 'período', 'complete sequence of clauses'),
    V('coordenação', 'coordenação', 'joining of independent clauses'),
    V('subordinação', 'subordinação', 'joining with dependence'),
    V('independente', 'independente', 'clause that stands on its own'),
    V('sindética', 'sindética', 'coordination with a connector'),
    V('assindética', 'assindética', 'coordination without a connector'),
    V('oração reduzida', 'oração reduzida', 'clause without a conjugated verb'),
    V('disse', 'disse', 'verb of the main clause in {Disse Jesus}'),
    V('chorando', 'chorando', 'gerund opening a reduced clause'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Count one verb per clause: in {Disse Jesus: «Vinde a mim»} there are two verbs, {disse} and {vinde}, and therefore two clauses.',
      ),
    },
    {
      n: '§2',
      text: T(
        'A {simple period} has a single clause; a {compound} one has two or more: in {Vinde e segui-me}, {vinde} and {segui-me} are two.',
      ),
    },
    {
      n: '§3',
      text: T(
        'A {coordinated} clause has syntactic autonomy and a {subordinate} one depends on a term of the main clause: in {Vinde, porque eu vou}, the second does not stand on its own.',
      ),
    },
    {
      n: '§4',
      text: T(
        'A {reduced clause} has no conjugated verb of its own: in {Caminhando towards Ele}, {caminhando} is a gerund depending on the main verb.',
      ),
    },
    {
      n: '§5',
      text: T(
        'A {period} is the complete sequence of one or more clauses, and the final point is what closes the count: in {E disse Jesus, e saíram}, there are two clauses.',
      ),
    },
  ],
  notes: [
    {
      label: T('The clause Greek reduces most'),
      text: T(
        'Ancient Greek has participial clauses now little used in Portuguese: {προσευχόμενος} and {ἐλθών} stand for {estando a orar} and {tendo ido}. Translating from Greek meets these forms constantly, and choosing between keeping the participle or expanding it into a clause is the hardest decision in translation.',
      ),
    },
    {
      label: T('The final point counts'),
      text: T(
        'A period has one verb more than another when it reaches the final point. In {E disse Jesus, e saíram}, there are two verbs and two clauses; in {E disse Jesus; e, saído, foi-se}, the second clause carries {saiu} and {foi}, and there are three. The count is always checkable, and that is why it is the starting point of any analysis.',
      ),
    },
  ],
  examples: [
    {
      text: 'E Jesus, chorando, saiu.',
      gloss: T('Simple period: a single clause, with {chorando} as a reduced clause.'),
    },
    {
      text: 'E disse Jesus: «Vinde a mim».',
      gloss: T(
        'Compound period: {Disse Jesus} and the speech {Vinde a mim}, which is the object of the verb.',
      ),
    },
    {
      text: 'Vinde e segui-me.',
      gloss: T('Two coordinated clauses joined by {e}: each has a subject of its own.'),
    },
    {
      text: 'Creio, porque tu és o Filho.',
      gloss: T(
        'Main clause {Creio} and causal subordinate {porque tu és}, which carries the cause.',
      ),
    },
    {
      text: 'O amor é paciente, o amor é bondoso.',
      gloss: T('Polysyndeton: four coordinated clauses, with the verb {é} repeated.'),
    },
    {
      text: 'Caminhando para Ele, Jesus saiu.',
      gloss: T('A gerund opens a reduced clause; the subject {Jesus} serves both verbs.'),
    },
    {
      text: 'Não é a casa que quero.',
      gloss: T(
        'Negation fronted to the phrase, not to the verb: it highlights a term instead of denying the clause.',
      ),
    },
    {
      text: 'Deus amou o mundo e deu o seu Filho.',
      gloss: T(
        'Two coordinated clauses: the second completes the first through {deu}, with {lhe} as indirect object.',
      ),
    },
    {
      text: 'O Filho do Homem veio à própria morte.',
      gloss: T('Postposed subject {O Filho do Homem}, verb {veio}, adjunct {à própria morte}.'),
    },
  ],
  tables: [
    {
      caption: T('Simple and compound period'),
      head: [T('Tipo'), T('Orações'), T('Como se reconhece'), T('Exemplo')],
      rows: [
        [T('{simples}'), T('uma'), T('um só verbo conjugado'), T('{Jesus saiu}')],
        [
          T('{composto por coordenação}'),
          T('duas ou mais independentes'),
          T('cada uma com sujeito próprio'),
          T('{Vinde e segui-me}'),
        ],
        [
          T('{composto por subordinação}'),
          T('principal e subordinada'),
          T('a subordinada depende da principal'),
          T('{Creio porque tu és}'),
        ],
        [
          T('{composto por ambas}'),
          T('três ou mais'),
          T('coordenadas e subordinadas juntas'),
          T('{E disse Jesus: vinde}'),
        ],
      ],
    },
    {
      caption: T('Coordinated and subordinate clauses'),
      head: [T('Tipo'), T('Autonomia'), T('Conectivo'), T('Exemplo')],
      rows: [
        [T('coordenada {aditiva}'), T('independente'), T('{e}'), T('{veio e viu}')],
        [T('coordenada {adversativa}'), T('independente'), T('{mas}'), T('{veio, mas não viu}')],
        [
          T('coordenada {explicativa}'),
          T('independente'),
          T('{porque}'),
          T('{ficou, porque era tarde}'),
        ],
        [
          T('subordinada {substantiva}'),
          T('dependente'),
          T('{que}'),
          T('{Creio que isto é verdade}'),
        ],
        [T('subordinada {adjetiva}'), T('dependente'), T('{que}'), T('{o barco que vias}')],
        [T('subordinada {adverbial}'), T('dependente'), T('{porque}, {se}'), T('{Se vier, saio}')],
      ],
    },
    {
      caption: T('The reduced clause and what opens it'),
      head: [T('Forma'), T('Que abre a reduzida'), T('Frase'), T('Verbo que falta')],
      rows: [
        [T('gerúndio'), T('{Caminhando}'), T('{Caminhando para Ele, saiu}'), T('{saiu}')],
        [T('infinitivo'), T('{Ao ver}'), T('{Ao ver Ele, chorou}'), T('{chorou}')],
        [T('particípio'), T('{Sentado}'), T('{Sentado à sombra, leu}'), T('{leu}')],
        [T(' substantivo'), T('{Isso dito}'), T('{Isso dito, partiu}'), T('{partiu}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How many clauses are there in {E disse Jesus: «Vinde a mim»}?'),
    options: [
      T('two: {Disse Jesus} and the speech {Vinde a mim}'),
      T('one, because there is only one subject'),
      T('three, counting the connector {e}'),
      T('four, counting {Jesus} and {mim}'),
    ],
    answer: 0,
    hint: T('Count the conjugated verbs: {disse} and {vinde}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {Caminhando para Ele, saiu}, {caminhando} is:'),
      options: [
        T('a reduced clause, because it has no conjugated verb of its own'),
        T('the main verb, because it comes first'),
        T('the subject, because it says who is walking'),
        T('the direct object of {saiu}'),
      ],
      answer: 0,
      hint: T('A gerund and an infinitive have neither person nor number.'),
    },
    {
      kind: 'match',
      prompt: T('Match each clause to its kind.'),
      pairs: [
        { a: T('{Vinde e segui-me}'), b: T('two coordinated clauses') },
        { a: T('{porque tu és o Filho}'), b: T('causal subordinate clause') },
        { a: T('{Vinde a mim}'), b: T('noun clause as direct object') },
        { a: T('{o barco que vias}'), b: T('restrictive adjective clause') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T(
        'One ______ is counted per clause, and that is how the number of clauses is found.',
      ),
      answer: 'oração',
      hint: T('Two verbs, two clauses.'),
    },
  ],
};
