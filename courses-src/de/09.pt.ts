import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Os casos'),
  subtitle: T('wer, wen, wem, wessen'),
  section: T('Os casos'),
  body: C(`O caso é a flexão que German herdou do latim e que mantém funcional. Cada caso responde a uma pergunta, e as perguntas são as mesmas para todos os substantivos, o que torna o sistema transparente apesar da complexidade.

O nominativo responde: quem ou o quê faz a ação? O acusativo responde: quem ou o quê recebe a ação? O dativo responde: a quem ou para quem? O genitivo responde: de quem ou de quê?

Os pronomes interrogativos mostram o sistema com clareza: wer só tem forma de nominativo (Wer kommt?), enquanto os demais aparecem em três casos — wen (masc. e neutro, acusativo), wem (dativo) e wessen (genitivo). Para o neutro o sistema oferece was em todos os casos, porque a diferença de gênero desaparece: Was kommt? Was suchst du? Wem gibst du das Buch? Wessen Buch ist das?

O relativo demonstrativo repete exatamente o mesmo desenho: der, die, das, com Whose→dessen, dativo→dem, acusativo→den. Se esses quatro casos forem entendidos, toda a declinação do capítulo 3 e da seção de sintaxe fica automáticamente resolvida.

A consequência prática é importante: a informação de caso nunca está na ordem das palavras, e sim na terminação. Por isso a frase Die Kinder kommen e Ich sehe die Kinder têm a mesma palavra die, mas functions opostas; quem desambigua é o verbo conjugado, que é o elemento que ocupa a segunda posição.`),
  vocab: [
    V('wer', 'wer', 'quem (nom.)'),
    V('wen', 'wer', 'quem (acc. masc./neut.)'),
    V('wem', 'wer', 'a quem (dat.)'),
    V('wessen', 'wer', 'de quem (gen.)'),
    V('was', 'was', 'o quê (todos os casos)'),
    V('der Nominativ', 'Nominativ', 'o caso nominativo'),
    V('der Akkusativ', 'Akkusativ', 'o caso acusativo'),
    V('der Dativ', 'Dativ', 'o caso dativo'),
    V('der Genitiv', 'Genitiv', 'o caso genitivo'),
    V('das Pronomen', 'Pronomen', 'o pronome'),
    V('das Subjekt', 'Subjekt', 'o sujeito'),
    V('das Objekt', 'Objekt', 'o objeto'),
    V('die Form', 'Form', 'a forma (gramatical)'),
    V('der Satz', 'Satz', 'a oração'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em "Ich sehe die Frau", que caso tem die?'),
    options: [T('Nominativo'), T('Acusativo'), T('Dativo'), T('Genitivo')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a pergunta: ___ suchst du? (quem, acc.)'),
      answer: 'Wen',
      hint: T('Acusativo de wer.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete a pergunta: ___ Buch ist das? (de quem)'),
      answer: 'Wessen',
      hint: T('Genitivo de wer.'),
    },
    {
      kind: 'choose',
      prompt: T('Em "Der Schlüssel steckt im Schloss", qual é o caso de Schlüssel?'),
      options: [T('nominativo'), T('dativo'), T('genitivo'), T('não é caso nomeado')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relacione o pronome ao caso.'),
      pairs: [
        { a: T('wem'), b: T('dativo') },
        { a: T('wessen'), b: T('genitivo') },
        { a: T('wer'), b: T('nominativo') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O nominativo e o acusativo têm formas idênticas no feminino e no plural, por isso só a ordem das palavras revela a diferença: Der Mann sieht die Frau / Die Frau sieht den Mann.',
      ),
    },
    {
      n: '2',
      text: T(
        'O dativo e o genitivo são facilmente identificáveis pela terminação: -m no dativo e -s no genitivo de artigo e substantivo.',
      ),
    },
    {
      n: '3',
      text: T(
        'O caso de um substantivo depende da função, não do sentido: Der Schlüssel ist im Schloss (nom. do sujeito), aber Der Schlüssel steckt im Schloss (dativo de lugar).',
      ),
    },
    {
      n: '4',
      text: T(
        'Em perguntas, o verbo conjugado ocupa a primeira posição e o pronome interrogativo pode vir logo depois: Wer kommt heute? Wem gibst du es?',
      ),
    },
  ],
  notes: [
    {
      label: T('Um caso, uma pergunta'),
      text: T(
        'O método que ensina a declinação inteira sem decorar nenhum substantivo é o da pergunta fixa. Diante de qualquer nome, pergunte sempre: quem faz? (nom.) a quem? (dat.) de quem? (gen.). A pergunta devolve o caso, e o caso devolve a forma. Substitua o substantivo por wen, wem, wessen e o exercício fica puramente mecânico.',
      ),
    },
    {
      label: T('Ligação bíblica'),
      text: T(
        'Em João 1:1, Im Anfang war das Wort. A pergunta "quem war?" devolve das, o nominativo neutro; a pergunta "o que era?" devolve o mesmo. O versículo é uma frase de identificação, e o nominativo é o caso da identificación.',
      ),
    },
  ],
  examples: [
    { text: 'Wer kommt?', gloss: T('Quem vem? (wer = nominativo).') },
    { text: 'Wem gibst du das Buch?', gloss: T('A quem você dá o livro? (wem = dativo).') },
    { text: 'Wessen Name ist das?', gloss: T('De quem é o nome? (wessen = genitivo).') },
    { text: 'Wen suchst du?', gloss: T('Quem você procura? (wen = acusativo).') },
    { text: 'Der Mann sieht die Frau.', gloss: T('O homem vê a mulher (der = nom., die = acc.).') },
    {
      text: 'Die Frau sieht den Mann.',
      gloss: T('A mulher vê o homem (a mesma forma die, outra função).'),
    },
    {
      text: 'Das Buch liegt auf dem Tisch.',
      gloss: T('O livro está sobre a mesa (dem = dativo de lugar).'),
    },
    {
      text: 'Die Mutter des Kindes wartet.',
      gloss: T('A mãe da criança espera (dois genitivos).'),
    },
  ],
  tables: [
    {
      caption: T('Os quatro casos e suas perguntas'),
      head: ['Caso', 'Pergunta', 'Função', 'Sinal no artigo (masc. sg.)'],
      rows: [
        ['Nominativo', 'quem faz?', 'sujeito', 'der'],
        ['Acusativo', 'em quem age?', 'objeto direto, direção', 'den'],
        ['Dativo', 'a quem?', 'destinatário, beneficiário', 'dem'],
        ['Genitivo', 'de quem?', 'posse, origem, medida', 'des'],
      ],
    },
    {
      caption: T('Pronomes interrogativos por caso'),
      head: ['Caso', 'masc.', 'fem.', 'neut.', 'plural'],
      rows: [
        ['Nominativo', 'wer', 'wer', 'was', 'was'],
        ['Acusativo', 'wen', 'wen', 'was', 'was'],
        ['Dativo', 'wem', 'wem', 'wem', 'wem'],
        ['Genitivo', 'wessen', 'wessen', 'wessen', 'wessen'],
      ],
    },
  ],
};
