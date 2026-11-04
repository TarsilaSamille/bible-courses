import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  section: T('Meaning and subordination'),
  title: T('The compound period in Mark 4:35-41'),
  subtitle: T('Counting verbs and grading the clauses'),
  body: C(`**Overview.** There are twenty verbs in seven verses, and that is where the analysis starts: {E saiu} and {e os discípulos o seguiam} bring two verbs and two clauses.

**Rule 1.** In a compound clause one verb is counted per clause: {E, ao anoitecer, disse aos seus discípulos: Passemos para o outro lado} has two verbs and two clauses.

**Rule 2.** Coordinated clauses sit at the same degree: in {E saiu, e os discípulos o seguiam}, both are first degree, and neither is subordinate to the other.

**Rule 3.** Degree is counted by distance: {Passemos para o outro lado} depends only on {disse} and is first degree; {Cala-te! E saí!} depends on the speech and is second degree.

**Rule 4.** A {reproduced speech} with no connector fills the place of a {direct noun clause}: in {E disse-lhes: «Por que tendes por foro?»}, the object of {disse-lhes} is the whole question.

**Application.** The whole paragraph fits into seven periods, and the short path is to go through them one by one. In Mark 4:38, the longest period has six verbs: {E levantou-se grande temporal}, {e as ondas iam batendo}, {de modo que já estava se enchendo}, {E acordou}, {e repreendeu} and {e disse-lhe: Cala-te! E saí}. Three are coordinated, one is consecutive and two are the speeches of Jesus.

**Check.** What closes the analysis is the count of verbs, and it is checkable: there are twenty, and the number of clauses in the paragraph is the same number. A clause that completes a verb of the main clause is a {direct noun clause}, and there are three in the passage, the three speeches of Jesus. One that brings the consequence is {adverbial}, and there is only one, the flood of water. There is not a single {adjective clause} in seven verses.`),
  vocab: [
    V('período', 'período', 'sequence of clauses up to the full stop'),
    V('período composto', 'período composto', 'period with two or more clauses'),
    V('verbo', 'verbo', 'marks the start of each clause'),
    V('oração principal', 'oração principal', 'the one the others complete'),
    V('coordenada', 'coordenada', 'clause of the same degree as the main one'),
    V('substantiva direta', 'substantiva direta', 'clause that completes a verb'),
    V('adverbial consecutiva', 'adverbial consecutiva', 'clause that brings the consequence'),
    V('grau', 'grau', 'level of the clause dependence'),
    V('fala reproduzida', 'fala reproduzida', 'speech transcribed from another speaker'),
    V('grande temporal', 'grande temporal', 'postposed subject of Mark 4:37'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'There are twenty verbs in seven verses, and that is where the analysis starts: {E saiu} and {e os discípulos o seguiam} bring two verbs and two clauses.',
      ),
    },
    {
      n: '§2',
      text: T(
        'In a compound clause one verb is counted per clause: {E, ao anoitecer, disse aos seus discípulos: Passemos para o outro lado} has two verbs and two clauses.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Coordinated clauses sit at the same degree: in {E saiu, e os discípulos o seguiam}, both are first degree, and neither is subordinate to the other.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Degree is counted by distance: {Passemos para o outro lado} depends only on {disse} and is first degree; {Cala-te! E saí!} depends on the speech and is second degree.',
      ),
    },
    {
      n: '§5',
      text: T(
        'A {reproduced speech} with no connector fills the place of a {direct noun clause}: in {E disse-lhes: «Por que tendes por foro?»}, the object of {disse-lhes} is the whole question.',
      ),
    },
  ],
  notes: [
    {
      label: T('What Greek shows and Portuguese hides'),
      text: T(
        'In the Greek of Mark 4 the speech comes right after λέγει τοῖς μαθηταῖς αὐτοῦ, and the next verb, Διέλθωμεν, is the first of the subordinate clause. Greek has εἶπεν and παρέθετο as verbs that open the discourse, and it needs no colon: it is the verb that marks direct speech, and not the punctuation. Portuguese needs the colon, and that is why the three speeches of the passage appear as {direct noun clauses}.',
      ),
    },
    {
      label: T('The punctuation that does not indicate degree'),
      text: T(
        'The semicolon in Mark 4:38 separates two coordinates, and the semicolon in Mark 4:37 separates the main clause from a coordinate and from a subordinate. The comma of {Cala-te! E saí!} separates coordinates that are inside the speech. Three uses, one sign only: that is why degree is counted by structure and not by punctuation.',
      ),
    },
  ],
  examples: [
    {
      text: 'E, ao anoitecer, disse aos seus discípulos: Passemos para o outro lado',
      gloss: T('Two verbs: main {disse} and {direct noun clause} {Passemos}, first degree.'),
    },
    {
      text: 'E saiu, e os discípulos o seguiam',
      gloss: T('Two coordinates; the subject {os discípulos} is postposed.'),
    },
    {
      text: 'E levantou-se grande temporal',
      gloss: T('Subject {grande temporal} postposed, after the verb {levantou-se}.'),
    },
    {
      text: 'de modo que já estava se enchendo de água',
      gloss: T('First degree consecutive clause: the verb of the subordinate is {estava}.'),
    },
    {
      text: 'E acordou, e repreendeu aos demônios, e disse-lhe: Cala-te! E saí!',
      gloss: T('Three coordinates; the speech is the last and carries two coordinates inside.'),
    },
    {
      text: 'E ficou grande calma, e cessou o vento',
      gloss: T('Two coordinates: {ficou} and {cessou} are verbs of the same degree.'),
    },
    {
      text: 'Por que tendes por foro? Não haveis fé ainda?',
      gloss: T('Two coordinates inside a {direct noun clause}.'),
    },
    {
      text: 'E eles se admiravam uns dos outros',
      gloss: T(
        'Coordinate; {uns dos outros} is a reciprocal pronoun, and the referent is the disciples.',
      ),
    },
    {
      text: 'uns dos outros',
      gloss: T('Reciprocal pronoun: the action is mutual, and the subject is not Jesus.'),
    },
  ],
  tables: [
    {
      caption: T('The subordinate clauses of the passage'),
      head: [T('Trecho'), T('Conectivo'), T('Valor'), T('Grau'), T('Verbo')],
      rows: [
        [
          T('{Passemos para o outro lado}'),
          T('{nenhum, é fala}'),
          T('{substantiva direta}'),
          T('{primeiro}'),
          T('{passemos}'),
        ],
        [
          T('{de modo que já estava se enchendo}'),
          T('{de modo que}'),
          T('{adverbial consecutiva}'),
          T('{primeiro}'),
          T('{estava}'),
        ],
        [
          T('{Cala-te! E saí!}'),
          T('{nenhum, é fala}'),
          T('{substantiva direta}'),
          T('{primeiro}'),
          T('{cala-te}, {saí}'),
        ],
        [
          T('{Por que tendes por foro?}'),
          T('{nenhum, é fala}'),
          T('{substantiva direta}'),
          T('{primeiro}'),
          T('{tendes}'),
        ],
        [
          T('{Não haveis fé ainda?}'),
          T('{nenhum, é fala}'),
          T('{substantiva direta}'),
          T('{segundo}'),
          T('{haveis}'),
        ],
      ],
    },
    {
      caption: T('The paragraph, period by period'),
      head: [T('Versículo'), T('Verbos'), T('Orações'), T('Como se dividem')],
      rows: [
        [T('{Marcos 4, 35}'), T('2'), T('2'), T('principal + substantiva direta')],
        [T('{Marcos 4, 36}'), T('2'), T('2'), T('principal + coordenada aditiva')],
        [T('{Marcos 4, 37}'), T('3'), T('3'), T('principal + coordenada + consecutiva')],
        [
          T('{Marcos 4, 38}'),
          T('6'),
          T('6'),
          T('principal + três coordenadas + fala com uma coordenada'),
        ],
        [T('{Marcos 4, 39}'), T('2'), T('2'), T('principal + coordenada aditiva')],
        [T('{Marcos 4, 40}'), T('3'), T('3'), T('principal + fala com uma coordenada')],
        [T('{Marcos 4, 41}'), T('2'), T('2'), T('principal + coordenada aditiva')],
        [T('{total}'), T('20'), T('20'), T('7 principais, 9 coordenadas, 4 subordinadas')],
      ],
    },
    {
      caption: T('Degree by distance'),
      head: [T('Oração'), T('Depende de'), T('Grau'), T('Exemplo')],
      rows: [
        [
          T('{Passemos para o outro lado}'),
          T('{disse}'),
          T('{primeiro}'),
          T('depende só da principal'),
        ],
        [T('{de modo que}'), T('{levantou-se}'), T('{primeiro}'), T('depende só da principal')],
        [T('{Cala-te! E saí!}'), T('{disse-lhe}'), T('{primeiro}'), T('é o objeto do verbo')],
        [
          T('{Não haveis fé ainda?}'),
          T('{Por que tendes por foro?}'),
          T('{segundo}'),
          T('está dentro da primeira fala'),
        ],
        [
          T('{E os discípulos o seguiam}'),
          T('nada'),
          T('{coordenada}'),
          T('independente da principal'),
        ],
        [T('{e cessou o vento}'), T('nada'), T('{coordenada}'), T('independente da principal')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'In {E disse-lhes: «Por que tendes por foro? Não haveis fé ainda?»}, the clause {Não haveis fé ainda?} is:',
    ),
    options: [
      T('a second degree coordinate, because it sits inside the speech'),
      T('a first degree coordinate, of the same period as {disse-lhes}'),
      T('a first degree direct noun clause'),
      T('a final adverbial clause, because it comes at the end of the period'),
    ],
    answer: 0,
    hint: T('Degree counts distance: where is this clause in relation to {disse-lhes}?'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('How many subordinate clauses appear in Mark 4:35-41?'),
      options: [
        T('four: three {direct noun clauses} and one {consecutive adverbial clause}'),
        T('seven: one in each verse'),
        T('two: one in Mark 4:37 and another in Mark 4:38'),
        T('none: the passage is all coordination'),
      ],
      answer: 0,
      hint: T('Look for the three speeches of Jesus and the clause introduced by {de modo que}.'),
    },
    {
      kind: 'match',
      prompt: T('Match each passage to the degree of its subordinate clause.'),
      pairs: [
        { a: T('{Passemos para o outro lado}'), b: T('first degree') },
        { a: T('{de modo que já estava}'), b: T('first degree') },
        { a: T('{Não haveis fé ainda?}'), b: T('second degree') },
        { a: T('{e cessou o vento}'), b: T('coordinate, no degree') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('In Mark 4:35-41 there are ______ verbs, and that is where the analysis starts.'),
      answer: 'vinte',
      hint: T('Seven verses, twenty verbs.'),
    },
  ],
};
