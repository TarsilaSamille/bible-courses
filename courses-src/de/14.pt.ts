import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('Os adjetivos'),
  subtitle: T('forte, fraco e misto'),
  section: T('Adjetivos e advérbios'),
  body: C(`O adjetivo alemão flexiona-se de três maneiras, e a escolha depende do que vem antes dele. Se não houver nada, ou se o que vier for um quantificador fraco, o adjetivo assume a forma forte; se vier um artigo definido ou um possessivo, ele é fraco.

A declinação fraca é a mais fácil: -e, -en, -e, -en. Der schöne Mann, die schöne Frau, das schöne Kind, die schönen Männer, mit einem schönen Kind. A razão é histórica: o artigo já carregava a informação de caso, e o adjetivo apenas concordava em gênero e número.

A declinação forte usa as terminações -er, -e, -es, -en e aparece quando não há artigo definido nem possessivo: schöne Männer, neue Wagen. Observe o contraste: em Der schöne Mann é o der que força a forma fraca. O forte genuíno aparece com quantificadores como alle, beide, viele, einige, keine, mehrere: Alle neuen Bücher sind teuer. E também sem determinante nenhum: Neue Bücher kosten viel.

A declinação mista afeta apenas os adjetivos sem -e no radical quando precedidos de artigo definido: hoch, teuer, dunkel, hell, kalt, warm, stark, schwach, jung. Nesses casos o forte não aparece: der hohe Berg, die hohe Schule, mit hohem Tempo, ein junger Mann. Com quantificador, porém, o forte volta: hohe Berge.

Um último detalhe: adjetivos terminados em -d ou -t perdem o -e das formas fracas. schön dá schöne, mas groß dá große, gut dá gute, warm dá warme. É por isso que a forma fraca de schön parece a regra e a de groß, a exceção.`),
  vocab: [
    V('schön', 'schön', 'bonito, belo (forte: schöner)'),
    V('groß', 'groß', 'grande (forte: größer)'),
    V('hoch', 'hoch', 'alto (misto: der hohe)'),
    V('jung', 'jung', 'jovem (misto: ein junger)'),
    V('kalt', 'kalt', 'frio (misto: die kalte)'),
    V('teuer', 'teuer', 'caro (misto: das teure)'),
    V('neu', 'neu', 'novo (forte no plural: neue)'),
    V('gut', 'gut', 'bom (fraco: der gute)'),
    V('warm', 'warm', 'quente (fraco: die warme)'),
    V('der schöne Mann', 'schön', 'o bonito homem (fraco)'),
    V('ein schönes Kind', 'schön', 'uma criança bonita (neutro fraco -es)'),
    V('mit einem schönen Kind', 'schön', 'com uma criança bonita (dativo fraco -en)'),
    V('alle neuen Bücher', 'neu', 'todos os livros novos (forte)'),
    V('neue Bücher', 'neu', 'livros novos (forte sem artigo)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a forma correta em "ein ___ Kind"?'),
    options: [T('schönes'), T('schön'), T('schöner'), T('schönen')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o adjetivo fraco: der ___ Mann (novo)'),
      answer: 'neue',
      hint: T('Neutro em -t perde o -e: neue.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete o adjetivo forte: ___ Bücher sind neu (todos os livros).'),
      answer: 'Alle neuen',
      hint: T('alle pede forma forte.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual sequência está correta?'),
      options: [
        T('mit hohem Tempo'),
        T('mit hohen Tempo'),
        T('mit hohe Tempo'),
        T('mit hochem Tempo'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relacione o determinante à declinação.'),
      pairs: [
        { a: T('der'), b: T('fraco') },
        { a: T('mein'), b: T('fraco') },
        { a: T('viele'), b: T('forte') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Adjetivo como predicado nunca flexiona: Die Kinder sind klein, não kleine.'),
    },
    {
      n: '2',
      text: T(
        'Depois de ein e dos possessivos a forma é sempre fraca: ein junger Mann, mein altes Haus.',
      ),
    },
    {
      n: '3',
      text: T(
        'Depois de alle, viele, einige, keine, beide e muitos quantificadores a forma é forte: alle jungen Leute.',
      ),
    },
    {
      n: '4',
      text: T(
        'Adjetivos em -d e -t perdem o -e da forma fraca: groß → große, gut → gute, warm → warme, stark → starke.',
      ),
    },
  ],
  notes: [
    {
      label: T('Adjetivo fraco e forte'),
      text: T(
        'O nome fraco não significa forma mais fraca. A forma fraca é a que aparece depois de um determinante, e é a mais comum na fala. A forte aparece quando o adjetivo tem de carregar sozinho a informação de caso, o que ocorre sobretudo com quantificadores. Compare: der neue Wagen (o carro novo) e ein neuer Wagen (um carro novo) contra neue Wagen kosten viel (carros novos custam muito).',
      ),
    },
    {
      label: T('Ligação bíblica'),
      text: T(
        'Em João 1:1, war das Wort. Na Tradução de Lutero, os adjetivos acompanhados de artigo aparecem quase sempre na forma fraca, enquanto os textos mais literários preservam a alternância forte. Reconhecer a forma fraca é, na prática, reconhecer a arquitetura da frase.',
      ),
    },
  ],
  examples: [
    {
      text: 'Der schöne Mann ist mein Lehrer.',
      gloss: T('O homem bonito é meu professor (adjetivo fraco).'),
    },
    {
      text: 'Ein schönes Kind spielt im Garten.',
      gloss: T('Uma criança bonita brinca no jardim (neutro fraco -es).'),
    },
    {
      text: 'Ich spreche mit einem alten Mann.',
      gloss: T('Falo com um velho (dativo fraco -en).'),
    },
    { text: 'Alle neuen Bücher sind teuer.', gloss: T('Todos os livros novos são caros (forte).') },
    { text: 'Neue Wagen kosten viel.', gloss: T('Carros novos custam muito (forte sem artigo).') },
    {
      text: 'Der hohe Berg ist schön.',
      gloss: T('A montanha alta é bonita (misto: hohe, schön).'),
    },
    {
      text: 'Er fährt mit hohem Tempo.',
      gloss: T('Ele dirige com alta velocidade (dativo misto -em).'),
    },
    { text: 'Das ist ein guter Rat.', gloss: T('Este é um bom conselho (gut em -t perde o -e).') },
  ],
  tables: [
    {
      caption: T('As três declinações do adjetivo'),
      head: [T('Caso'), 'masc.', 'fem.', 'neut.', 'plural'],
      rows: [
        ['forte (nom.)', 'schöner', 'schöne', 'schönes', 'schöne'],
        ['forte (acc.)', 'schönen', 'schöne', 'schönes', 'schöne'],
        ['fraco (nom.)', 'schöne', 'schöne', 'schöne', 'schönen'],
        ['fraco (acc.)', 'schönen', 'schöne', 'schöne', 'schönen'],
        ['fraco (dat.)', 'schönem', 'schöner', 'schönem', 'schönen'],
        ['fraco (gen.)', 'schönen', 'schöner', 'schönen', 'schöner'],
        ['misto (nom.)', 'der hohe', 'die hohe', 'das hohe', 'die hohen'],
        ['misto (dat.)', 'mit hohem', 'mit hoher', 'mit hohem', 'mit hohen'],
      ],
    },
    {
      caption: T('Qual declinação usar'),
      head: ['O que vem antes', 'Declinação', 'Exemplo'],
      rows: [
        ['der, die, das', 'fraca', 'der schöne Tag'],
        ['mein, dein, sein', 'fraca', 'mein schönes Zimmer'],
        ['ein, eine', 'fraca', 'eine schöne Idee'],
        ['dieser, jeder, welcher', 'fraca', 'jeder neue Tag'],
        ['alle, beide, viele, einige, keine', 'forte', 'alle neuen Häuser'],
        ['nada (plural genérico)', 'forte', 'neue Häuser'],
        ['nada (singular genérico)', 'forte', 'neuer Wein'],
        ['adjetivo em predicado', 'sem flexão', 'Der Wein ist neu.'],
      ],
    },
  ],
};
