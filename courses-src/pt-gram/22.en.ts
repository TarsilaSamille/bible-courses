import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('The structure of the period'),
  title: T('Punctuation'),
  subtitle: T('Pause, relation and delimitation'),
  body: C(`**Overview.** The {comma} separates terms of the same function or marks a smaller pause: in {E, logo, disse o SENHOR}, it separates the adjunct {logo} from the rest.

**Rule 1.** {Colons} announce what follows: in {Disse Jesus: «Vinde a mim»}, they introduce the speech, and the speech is the object of {disse}.

**Rule 2.** The {semicolon} separates lengthy sentences, not terms: in {A alma é paciente; o amor, não}, the semicolon separates two whole clauses.

**Rule 3.** {Quotation marks} delimit direct speech, and {dashes} and {parentheses} add an explanation on the side: in {Jesus, o Filho de Deus, saiu}, the dashes mark the explanation.

**Rule 4.** A comma cannot separate the verb from its subject nor two terms joined by {e}: in {Deus, que criou o mundo, ama}, the commas mark the adjective clause, not the subject.

**Application.** In {Disse Jesus, olhando para eles: «Quem são estes?»}, the colons anticipate the speech and the comma separates the adjunct {olhando para eles} from the nucleus. In Greek the speech comes between Greek or italic quotation marks and is announced by **ἐγένετο δέ** with no colon at all: the two languages do the same work with different signs, and that is why the punctuation of an ancient text is always a **reading** by the translator.

**Check.** Before punctuating, ask: where does the sentence **stop**? Which terms are **linked** in a way that keeps them together? And does the comma I want to place separate **nucleus from nucleus**? If it does, it is wrong. Three questions settle the punctuation of a whole sentence, and the second is what prevents the wrong comma between subject and verb.`),
  vocab: [
    V('ponto final', 'ponto final', 'marks the end of the period'),
    V('vírgula', 'vírgula', 'smaller pause'),
    V('ponto e vírgula', 'ponto e vírgula', 'pause between sentences'),
    V('dois-pontos', 'dois-pontos', 'announces what follows'),
    V('travessão', 'travessão', 'adds a side explanation'),
    V('aspas', 'aspas', 'delimit the speech'),
    V('parênteses', 'parênteses', 'add without interrupting'),
    V('reticências', 'reticências', 'suspension of the sense'),
    V('olhando para eles', 'olhando para eles', 'adjunct the comma separates'),
    V('ἐγένετο δέ', 'ἐγένετο δέ', 'announces the speech in Greek, with no colon'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The {comma} separates terms of the same function or marks a smaller pause: in {E, logo, disse o SENHOR}, it separates the adjunct {logo} from the rest.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{Colons} announce what follows: in {Disse Jesus: «Vinde a mim»}, they introduce the speech, and the speech is the object of {disse}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The {semicolon} separates lengthy sentences, not terms: in {A alma é paciente; o amor, não}, the semicolon separates two whole clauses.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{Quotation marks} delimit direct speech, and {dashes} and {parentheses} add an explanation on the side: in {Jesus, o Filho de Deus, saiu}, the dashes mark the explanation.',
      ),
    },
    {
      n: '§5',
      text: T(
        'A comma cannot separate the verb from its subject nor two terms joined by {e}: in {Deus, que criou o mundo, ama}, the commas mark the adjective clause, not the subject.',
      ),
    },
  ],
  notes: [
    {
      label: T('The punctuation Greek did not have'),
      text: T(
        'Ancient Greek had a full stop and a comma, and no sign for speech: direct discourse comes between quotation marks, and it is the introducing verb that marks the shift. Portuguese had to invent the colon, and that is why a translated Greek punctuation is always a modern reading: whoever reads {Disse Jesus: «Vinde a mim»} in Greek is reading {εἶπεν ὁ Ἰησοῦς}, which has no colon in it.',
      ),
    },
    {
      label: T('The dash that got confused with the comma'),
      text: T(
        'The dash marks a relation the reader has to rebuild: a side explanation, a pair that only makes sense together. In {Jesus, o Filho de Deus, saiu}, the dash says that {o Filho de Deus} explains {Jesus}. When the same pair can be read without a pause, it is a comma, which is why the two signs are not interchangeable.',
      ),
    },
  ],
  examples: [
    {
      text: 'Disse Jesus, olhando para eles: «Quem são estes?»',
      gloss: T('The comma separates the adjunct {olhando}; the colons anticipate the speech.'),
    },
    {
      text: 'No princípio, disse Deus.',
      gloss: T('The comma separates the adverbial adjunct {No princípio} from the subject {Deus}.'),
    },
    {
      text: 'Deus, que criou o mundo, ama o homem.',
      gloss: T('The commas mark the adjective clause {que criou o mundo}, not the subject.'),
    },
    {
      text: 'A alma é paciente; o amor, não.',
      gloss: T(
        'The semicolon separates two whole clauses, and the comma marks the omission of {é}.',
      ),
    },
    {
      text: 'Jesus, o Filho de Deus, saiu.',
      gloss: T('The dashes mark a side explanation, not a simple pause.'),
    },
    {
      text: 'O Verbo (aquele que estava com Deus) se fez carne.',
      gloss: T('The parentheses add a side explanation without interrupting the reading.'),
    },
    {
      text: 'E Jesus chorou...',
      gloss: T('The ellipsis marks suspension, and the full stop closes the period.'),
    },
    {
      text: '«Quem são estes?» perguntou Jesus.',
      gloss: T(
        'The speech comes between quotation marks and before the verb, and the inverted order is the Greek one.',
      ),
    },
    {
      text: 'O Verbo se fez carne e habitou entre nós.',
      gloss: T('No comma between {carne} and {e}: the conjunction already links the verbs.'),
    },
  ],
  tables: [
    {
      caption: T('The signs and what each one marks'),
      head: [T('Sinal'), T('O que marca'), T('Onde aparece'), T('Exemplo')],
      rows: [
        [T('.'), T('fim do período'), T('no fim da frase'), T('{saiu.}')],
        [T(','), T('pausa menor, enumeração'), T('dentro do período'), T('{E, logo, disse}')],
        [
          T(';'),
          T('pausa entre orações extensas'),
          T('entre coordenadas'),
          T('{paciente; o amor, não}'),
        ],
        [
          T(':'),
          T('anúncio do que vem'),
          T('antes da fala ou da explicação'),
          T('{Disse: «Vinde»}'),
        ],
        [
          T('-'),
          T('explicação à parte'),
          T('em pares explicativos'),
          T('{Jesus, o Filho de Deus, saiu}'),
        ],
        [T('«»'), T('discurso direto'), T('em volta da fala'), T('{«Quem são estes?»}')],
        [
          T('()'),
          T('acréscimo sem interromper'),
          T('em volta do parêntese'),
          T('{(aquele que estava com Deus)}'),
        ],
        [T('...'), T('suspensão'), T('antes do ponto final'), T('{chorou...}')],
      ],
    },
    {
      caption: T('Where the comma goes and where it does not'),
      head: [T('Situação'), T('Vírgula?'), T('Exemplo'), T('Porquê')],
      rows: [
        [
          T('entre sujeito e verbo'),
          T('não'),
          T('{Deus ama}'),
          T('separaria o que é um só sintagma'),
        ],
        [
          T('entre os termos de uma enumeração'),
          T('sim'),
          T('{a, b e c}'),
          T('cada item é um sintagma'),
        ],
        [
          T('antes de {e} em enumeração simples'),
          T('não'),
          T('{Jesus foi, viu e falou}'),
          T('a conjunção já separa'),
        ],
        [
          T('entre duas coordenadas'),
          T('sim'),
          T('{veio, mas não viu}'),
          T('cada oração é um período'),
        ],
        [
          T('ao redor de oração adjetiva explicativa'),
          T('sim'),
          T('{Deus, que criou, ama}'),
          T('a oração é acessória'),
        ],
        [
          T('depois de adjunct no início'),
          T('sim'),
          T('{No princípio, disse Deus}'),
          T('a pausa marca o fim do adjunct'),
        ],
        [
          T('entre dois sujeito coordenados'),
          T('não'),
          T('{Deus e sua palavra amaram}'),
          T('o sujeito é um só sintagma'),
        ],
      ],
    },
    {
      caption: T('Punctuation of speech and reported speech'),
      head: [T('Tipo'), T('Sinal'), T('Exemplo'), T('Observação')],
      rows: [
        [
          T('fala direta'),
          T('«aspas» e dois-pontos antes'),
          T('{Disse: «Vinde»}'),
          T('o verbo fica fora'),
        ],
        [
          T('fala direta depois do verbo'),
          T('«aspas» sem dois-pontos'),
          T('{Disse «Vinde»}'),
          T('a pausa é menor'),
        ],
        [
          T('fala indireta'),
          T('sem aspas, com {que}'),
          T('{Disse que viria}'),
          T('não há discurso transcrito'),
        ],
        [
          T('fala no fim'),
          T('«aspas» e ponto final'),
          T('{«Quem são?» perguntou}'),
          T('a posição é grega'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Deus, que criou o mundo, ama o homem}, the comma marks:'),
    options: [
      T('the adjective clause {que criou o mundo}'),
      T('the separation between the subject {Deus} and the verb {ama}'),
      T('the separation between two direct objects'),
      T('the enumeration of three distinct actions'),
    ],
    answer: 0,
    hint: T('The comma separates an accessory from the nucleus, never the subject from the verb.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which sign announces the speech that follows?'),
      options: [
        T('the colon, in {Disse Jesus: «Vinde a mim»}'),
        T('the dash, in {Disse Jesus — «Vinde a mim»}'),
        T('the semicolon, in {Disse Jesus; «Vinde a mim»}'),
        T('the full stop, in {Disse Jesus. «Vinde a mim»}'),
      ],
      answer: 0,
      hint: T('Colons say {here is what follows}.'),
    },
    {
      kind: 'match',
      prompt: T('Match each sign to the correct use.'),
      pairs: [
        { a: T('{,}'), b: T('smaller pause inside the period') },
        { a: T('{:}'), b: T('announcement of the speech') },
        { a: T('{;}'), b: T('separation of lengthy clauses') },
        { a: T('{-}'), b: T('side explanation') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('undefined'),
      answer: 'ponto',
      hint: T('In {saiu.}, the full stop closes the clause.'),
    },
  ],
};
