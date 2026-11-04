import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('The clause and its terms'),
  title: T('Analyzing accessory terms'),
  subtitle: T('Adjuncts, apposition and vocative'),
  body: C(`**Overview.** A {nominal adjunct} characterizes a noun and an {adverbial adjunct} marks circumstance: in {o amor de Deus}, {de Deus} completes a noun; in {saiu à noite}, {à noite} marks time.

**Rule 1.** An {apposition} explains, restricts or sums up a preceding term: in {Jesus, o Filho do carpinteiro, saiu}, {o Filho do carpinteiro} explains {Jesus}.

**Rule 2.** The {vocative} addresses the listener and comes between commas: in {Jesus, Senhor nosso, entrou}, {Senhor nosso} calls, and what stands between the commas is what is vocative.

**Rule 3.** The test that settles {apposition} against {vocative} is the referent of the {nosso}: in {Senhor nosso, aqui estamos}, {nosso} already points to {nós}, and the term is vocative.

**Rule 4.** Every accessory term can be removed without breaking the sentence: in {E, ao anoitecer, disse}, {ao anoitecer} comes out and the period stays whole, unlike {os céus} in {criou os céus}.

**Application.** In {Jesus, Senhor nosso, respondeu}, the two terms between commas are **vocative** and **apposition** together, and what tells them apart is the function: the vocative **calls** someone and the apposition **explains** a name. In Greek the vocative is the **vocative form** ({κύριε}) and the apposition is the same form in the **nominative** ({ὁ κύριος}), and Greek distinguishes what Portuguese distinguishes by punctuation.

**Check.** The question that decides it: if I **remove** this term, does the sentence still make sense? If so, it is accessory. If not, it is integrating. Then: does it **agree** with a noun (nominal) or is it invariable (adverbial)? And is it **apposition** (explains) or **vocative** (calls)? Three questions, and the analysis closes without ambiguity.`),
  vocab: [
    V('adjunto adnominal', 'adjunto adnominal', 'characterizes a noun'),
    V('adjunto adverbial', 'adjunto adverbial', 'marks circumstance'),
    V('caracterização', 'caracterização', 'function of the nominal adjunct'),
    V('circunstância', 'circunstância', 'function of the adverbial adjunct'),
    V('aposto', 'aposto', 'explains a preceding term'),
    V('explicação', 'explicação', 'what the apposition does'),
    V('vocativo', 'vocativo', 'addresses the listener'),
    V('interpelação', 'interpelação', 'what the vocative does'),
    V('Senhor nosso', 'Senhor nosso', 'vocative in Greek, {κύριε}'),
    V('o Filho do carpinteiro', 'o Filho do carpinteiro', 'apposition of {Jesus}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'A {nominal adjunct} characterizes a noun and an {adverbial adjunct} marks circumstance: in {o amor de Deus}, {de Deus} completes a noun; in {saiu à noite}, {à noite} marks time.',
      ),
    },
    {
      n: '§2',
      text: T(
        'An {apposition} explains, restricts or sums up a preceding term: in {Jesus, o Filho do carpinteiro, saiu}, {o Filho do carpinteiro} explains {Jesus}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The {vocative} addresses the listener and comes between commas: in {Jesus, Senhor nosso, entrou}, {Senhor nosso} calls, and what stands between the commas is what is vocative.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The test that settles {apposition} against {vocative} is the referent of the {nosso}: in {Senhor nosso, aqui estamos}, {nosso} already points to {nós}, and the term is vocative.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Every accessory term can be removed without breaking the sentence: in {E, ao anoitecer, disse}, {ao anoitecer} comes out and the period stays whole, unlike {os céus} in {criou os céus}.',
      ),
    },
  ],
  notes: [
    {
      label: T('What Greek marks is what Portuguese punctuates'),
      text: T(
        'In Greek the vocative {κύριε} and the nominative {ὁ κύριος} are distinct forms, and the difference lies in the ending, not in the punctuation. Portuguese lost the ending and gained the comma, so {Senhor nosso} and {o Senhor} are told apart only by context. That is why the same passage can have two readings without Greek allowing it.',
      ),
    },
    {
      label: T('The adjunct that changes the reading when it moves'),
      text: T(
        'In {Ontem viu Jesus}, the adjunct is {ontem} and nothing more follows. In {Jesus viu ontem}, the same {ontem} appears and the reading does not change much either. But in {Só ontem viu Jesus}, {só} stops being an adverbial adjunct and goes on to intensify {ontem}: position decides the function, which is why an adjunct is not a synonym for an adverb.',
      ),
    },
  ],
  examples: [
    {
      text: 'Jesus, Senhor nosso, respondeu',
      gloss: T('{Senhor nosso} is a vocative: {nosso} already points to the listener.'),
    },
    {
      text: 'Jesus, o Filho do carpinteiro, saiu',
      gloss: T('{o Filho do carpinteiro} is an apposition: it explains and restricts {Jesus}.'),
    },
    {
      text: 'E, ao anoitecer, disse aos seus discípulos',
      gloss: T(
        'Two commas and three adjuncts: {ao anoitecer}, {aos seus discípulos} and the linking {E}.',
      ),
    },
    {
      text: 'o amor verdadeiro',
      gloss: T('{verdadeiro} is a nominal adjunct: it characterizes {amor} and agrees with it.'),
    },
    {
      text: 'o Verbo se fez carne',
      gloss: T(
        '{se fez} is a verbal periphrasis and {carne} the predicative, with {se fez} as the copula.',
      ),
    },
    {
      text: 'o velho Davi',
      gloss: T(
        '{Davi} is a proper noun and a restrictive apposition: it says which {king} the text means.',
      ),
    },
    {
      text: 'Saiu de noite.',
      gloss: T(
        '{de noite} is an adverbial adjunct of time; it can move to the end of the sentence.',
      ),
    },
    {
      text: 'Aleluia! Coração que não sente',
      gloss: T(
        'The exclamation stands loose: {Aleluia} is an interjection and the rest is a period.',
      ),
    },
    {
      text: 'Amigo, servidor do Senhor',
      gloss: T('Two commas in a row: the first opens a vocative and the second an apposition.'),
    },
  ],
  tables: [
    {
      caption: T('Accessory terms: what each one does'),
      head: [T('Tipo'), T('Função'), T('Concorda?'), T('Pode sair?'), T('Exemplo')],
      rows: [
        [
          T('{adjunto adnominal}'),
          T('caracteriza um nome'),
          T('sim'),
          T('sim'),
          T('{o amor verdadeiro}'),
        ],
        [
          T('{adjunto adverbial}'),
          T('indica circunstância'),
          T('não'),
          T('sim'),
          T('{ao anoitecer}'),
        ],
        [
          T('{aposto explicativo}'),
          T('explica um termo'),
          T('sim'),
          T('sim'),
          T('{o Filho do carpinteiro}'),
        ],
        [
          T('{aposto restritivo}'),
          T('restringe um termo'),
          T('sim'),
          T('não'),
          T('{o velho Davi}'),
        ],
        [
          T('{vocativo}'),
          T('interpela o interlocutor'),
          T('sim'),
          T('não, muda o tom'),
          T('{Senhor nosso}'),
        ],
      ],
    },
    {
      caption: T('Apposition and vocative side by side'),
      head: [T('Critério'), T('Aposto'), T('Vocativo'), T('Exemplo')],
      rows: [
        [
          T('quem explica'),
          T('um termo já dito'),
          T('o interlocutor'),
          T('{o Filho de Deus} contra {Senhor}'),
        ],
        [
          T('posição'),
          T('vem depois do nome'),
          T('vem no início ou meio'),
          T('{Jesus, o Filho, saiu}'),
        ],
        [
          T('forma grega'),
          T('{ὁ κύριος}, nominativo'),
          T('{κύριε}, vocativo'),
          T('as duas formas'),
        ],
        [
          T('o que o nome explica'),
          T('quem o nome é'),
          T('a quem se fala'),
          T('{o Filho} contra {Senhor}'),
        ],
        [
          T('retirar o termo'),
          T('altera o sentido'),
          T('altera o tom'),
          T('a explicação se perde'),
        ],
      ],
    },
    {
      caption: T('Adverbial adjunct by circumstance'),
      head: [T('Circunstância'), T('Pergunta'), T('Exemplo'), T('Pode sair?')],
      rows: [
        [T('tempo'), T('{quando?}'), T('{ao anoitecer}'), T('sim')],
        [T('lugar'), T('{onde?}'), T('{em Jerusalém}'), T('sim')],
        [T('modo'), T('{como?}'), T('{com cautela}'), T('sim')],
        [T('causa'), T('{por quê?}'), T('{por amor}'), T('raramente')],
        [T('finalidade'), T('{para quê?}'), T('{para que o veja}'), T('não')],
        [T('concessão'), T('{embora?}'), T('{embora tardasse}'), T('não')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'In {Jesus, Senhor nosso, entrou em Jerusalém}, {Senhor nosso} is a vocative because:',
    ),
    options: [
      T('it calls the listener, and {nosso} already points to him'),
      T('it explains who {Jesus} is'),
      T('it agrees with {Jesus} in gender and number'),
      T('it comes between commas, as every vocative does'),
    ],
    answer: 0,
    hint: T('An apposition explains the preceding name; a vocative calls whoever hears.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {E, ao anoitecer, disse aos seus discípulos}, {ao anoitecer} is:'),
      options: [
        T('an adverbial adjunct of time, and it can leave the sentence'),
        T('the subject, because it comes right after the verb {disse}'),
        T('the indirect object of {disse}'),
        T('an apposition of {E}'),
      ],
      answer: 0,
      hint: T('Take {ao anoitecer} out and the sentence stays whole.'),
    },
    {
      kind: 'match',
      prompt: T('Match each term to the role it plays.'),
      pairs: [
        { a: T('{o Filho do carpinteiro}'), b: T('apposition') },
        { a: T('{Senhor nosso}'), b: T('vocative') },
        { a: T('{verdadeiro} in {o amor verdadeiro}'), b: T('nominal adjunct') },
        { a: T('{em Jerusalém}'), b: T('adverbial adjunct of place') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('undefined'),
      answer: 'aposto',
      hint: T('In {Jesus, o Filho do carpinteiro, saiu}.'),
    },
  ],
};
