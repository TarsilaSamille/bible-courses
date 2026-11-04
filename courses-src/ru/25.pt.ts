import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  section: T('O verbo: prefixos e formas derivadas'),
  title: T('Gerúndio e particípio, e as formas que só o acento separa'),
  subtitle: T('говоря, говорящий, сказал, сказанный: quatro formas, três lugares'),
  body: C(`
## Um advérbio e um adjetivo com o mesmo nome

O деепричастие é um advérbio: говоря, читая, неся. Ele não flexiona, não tem gênero e não concorda com nada. Modifica o verbo da oração principal, e o sujeito é normalmente o mesmo: Он говорил, читая текст é ele que lia e ele que falava, e se o sujeito mudar a frase fica sem chão.

O particípio é um adjetivo: говорящий, сказанный, написанный. Ele flexiona em gênero, número e caso, e concorda com o substantivo. Слово, сказанное Богом, a Palavra dita por Deus: сказанное é neutro e genitivo, e é a concordância que diz.

Os dois têm o mesmo nome de família, e a diferença é inteiramente de flexão. **O particípio flexiona e o деепричастие não.** Quem traduz trata os dois como se fossem um só e escreve uma frase que não flexiona onde o russo flexiona.

## As formas que o acento separa

O que confunde quem chega do latim é que várias das formas são idênticas exceto pelo acento. Говоря e говоря são a mesma palavra com o acento em posições diferentes, e cada uma delas pertence a uma família: говоря é o gerúndio de говорить, e говорящий é o particípio presente.

A conta é curta e fecha. Do infinitivo говорить saem quatro formas que aparecem em quase toda frase Russian:

- говоря, o gerúndio, sem flexão
- говорит, o presente, terceira pessoa
- говорящий, o particípio presente, que flexiona
- говорящий também é um adjetivo desubstantivado, e nesse caso significa "quem fala"

O particípio passado tem a mesma estrutura: сказал é o passado do verbo, сказанный é o particípio, e сказан é a forma curta, que é a que aparece na frase bíblica. São três posições gramaticais e três palavras, e nada na terminação avisa qual é qual.

## O particípio herda o aspecto do verbo

Esta é a informação que a leitura bíblica usa mais do que qualquer outra coisa sobre particípios. **O particípio mantém o aspecto do verbo de que veio.**

Написанный vem de написать, que é perfectivo: foi escrito, e o resultado está em vista. Пишущий, o particípio presente de писать, é imperfectivo: quem está escrevendo agora, e o texto ainda não existe. Os dois estão no mesmo campo semântico e dizem coisas opostas sobre o texto.

O particípio passado passivo segue a mesma regra. Любимый vem de любить, imperfectivo, e significa amado de um jeito que não implica reciprocidade nem tempo. Положенный vem de положить, perfectivo, e significa colocado, com o objeto no lugar. A terminação é a mesma em ambos: -мый e -нный.

E a forma curta guarda a mesma informação. Написан e писан não são a mesma coisa: o primeiro é o perfectivo, e o segundo o imperfectivo. Слово написано é o que ficou escrito; Слово писано é o que está sendo escrito agora.

## O gancho: uma oração com as duas formas

**И Слово стало плотию, и обитало с нами, полное благодати и истины.** O particípio da oração é полное, forma curta, e ele concorda com Слово: neutro, nominativo, singular. A forma longa da mesma família seria исполненное, e ela diria o mesmo com o caso marcado na terminação.

O que o participio traz aqui é o genitivo: благодати e истины estão no genitivo plural, e é por causa deles que o verbo que o acompanha é быть e não ter um instrumental. O particípio curto neutro pede genitivo, e essa é uma das poucas vezes em que o russo exige um caso que a preposição não explica.

E a forma curta é a que o Novo Testamento prefere, sempre. Благословен грядущий, bendito o que vem: Благословен é um particípio passado passivo curto, e грядущий é um particípio presente ativo. As duas formas na mesma oração, uma de cada lado, e o versículo inteiro cabe em duas palavras Russian.
`),
  vocab: [
    V('говоря', 'говорить', 'falando; деепричастиo, invariável'),
    V('говорящий', 'говорить', 'que fala; particípio presente, que flexiona'),
    V('читая', 'читать', 'lendo; деепричастиo'),
    V('сказал', 'сказать', 'disse; passado do verbo'),
    V('сказанный', 'сказать', 'dito; particípio passado passivo'),
    V('сказан', 'сказать', 'dito; forma curta do particípio'),
    V('написанный', 'написать', 'escrito; particípio de um perfectivo'),
    V('написан', 'написать', 'escrito; forma curta perfectiva'),
    V('писан', 'писать', 'escrito; forma curta imperfectiva'),
    V('любимый', 'любить', 'amado; particípio de um imperfectivo'),
    V('обитало', 'обитать', 'permaneceu; gerúndio do texto'),
    V('полное', 'полный', 'cheio; particípio curto, neutro'),
    V('деепричастие', 'деепричастие', 'деепричастиo, advérbio verbal'),
    V('причастие', 'причастие', 'particípio'),
    V('Благословен грядущий', 'грядущий', 'bendito o que vem; Mt 21:9'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual destas formas flexiona em gênero e caso?'),
    options: [T('говоря'), T('сказанный'), T('читая')],
    answer: 1,
    hint: T(
      'O деепричастие é um advérbio e não flexiona. O particípio é um adjetivo, e por isso concorda com o substantivo.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete o particípio curto de написать'), answer: 'написан' },
    {
      kind: 'choose',
      prompt: T('Написан vem de um verbo...'),
      options: [T('imperfectivo'), T('perfectivo')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: Благословен ___ (Mt 21:9)'), answer: 'грядущий' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{О} {деепричастие} é um advérbio e não flexiona; o particípio é um adjetivo e flexiona em gênero, número e caso.',
      ),
    },
    { n: '2', text: T('O {деепричастие} compartilha o sujeito com a oração principal.') },
    {
      n: '3',
      text: T(
        'Várias formas diferem só pelo acento: {говоря} e {говорящ}- pertencem a famílias distintas.',
      ),
    },
    {
      n: '4',
      text: T(
        'O particípio herda o aspecto do verbo: {написанный} vem de {написать}, e {любимый} vem de {любить}.',
      ),
    },
    {
      n: '5',
      text: T(
        'O particípio curto neutro pede genitivo do complemento: {полное} {благодати} {и} {истины}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que o particípio sabe o aspecto'),
      text: T(
        'O particípio é formado a partir do verbo, e o verbo carrega o aspecto. Como написанный vem de написать e любимый vem de любить, o particípio nasce perfectivo num caso e imperfectivo no outro. Isso significa que uma tradução que traduz o particípio por um adjetivo sem aspecto perdeu uma informação que o grego também carregava. Em João 1:14, полное é a prova: o participio neutro curto traz os genitivos de complemento, e essa exigência do caso é o que amarra a oração.',
      ),
    },
    {
      label: T('Quando a flexão não está à vista'),
      text: T(
        'Quem lê um texto Russian sem ver os acentos não distingue dois particípios que só differem por ele. Написано e писано são quase a mesma palavra, e o que muda é o aspecto do verbo que as originou. Em um dicionário a informação está no verbete; em um texto antigo ela está na coluna da declinação do particípio. É uma das poucas coisas em que a forma escrita do russo é mais pobre do que a fala.',
      ),
    },
  ],
  examples: [
    { text: 'говоря', gloss: T('falando; деепричастиo, invariável') },
    { text: 'говорящий', gloss: T('que fala; particípio presente, que flexiona') },
    {
      text: 'Он говорил, читая текст',
      gloss: T('ele falava lendo o texto; деепричастиo, mesmo sujeito'),
    },
    { text: 'Слово, сказанное Богом', gloss: T('a Palavra dita por Deus; particípio em genitivo') },
    { text: 'сказанный', gloss: T('dito; particípio passado passivo') },
    { text: 'написанный', gloss: T('escrito; de um verbo perfectivo') },
    { text: 'любимый', gloss: T('amado; de um verbo imperfectivo') },
    { text: 'Слово написано', gloss: T('a palavra ficou escrita; forma curta perfectiva') },
    { text: 'Слово писано', gloss: T('a palavra está sendo escrita; forma curta imperfectiva') },
    {
      text: 'И Слово стало плотию, и обитало с нами, полное благодати и истины',
      gloss: T('e o Verbo se fez carne e habitou entre nós, cheio de graça e verdade (Jo 1:14)'),
    },
  ],
  tables: [
    {
      caption: T('Quatro posições, quatro formas de um mesmo verbo'),
      head: [T('Posição'), T('Forma'), T('Exemplo'), T('Flexiona')],
      rows: [
        [T('infinitivo'), T('говорить'), T('—'), T('não')],
        [T('gerúndio'), T('говоря'), T('говоря с тобой'), T('não')],
        [T('presente'), T('говорит'), T('он говорит'), T('sim, por pessoa')],
        [T('particípio presente'), T('говорящий'), T('говорящий человек'), T('sim, por gênero')],
      ],
    },
    {
      caption: T('O particípio e o aspecto de que veio'),
      head: [T('Particípio'), T('V verbo'), T('Aspecto do verbo'), T('O que diz')],
      rows: [
        [T('написанный'), T('написать'), T('perfectivo'), T('ficou escrito')],
        [T('писанный'), T('писать'), T('imperfectivo'), T('está sendo escrito')],
        [T('любимый'), T('любить'), T('imperfectivo'), T('amado, sem reciprocidade')],
        [T('сказанный'), T('сказать'), T('perfectivo'), T('dito, uma vez')],
        [T('сказанный'), T('говорить'), T('imperfectivo'), T('do que se fala')],
      ],
    },
    {
      caption: T('Particípio e деепричастие lado a lado'),
      head: [T(''), T('деепричастие'), T('Particípio')],
      rows: [
        [T('exemplo'), T('говоря'), T('говорящий')],
        [T('flexão'), T('nenhuma'), T('gênero, número e caso')],
        [T('função'), T('advérbio, modifica o verbo'), T('adjetivo, concorda com o substantivo')],
        [T('sujeito'), T('o da oração principal'), T('o do substantivo')],
        [T('gênero'), T('não tem'), T('masculino, feminino, neutro e plural')],
      ],
    },
  ],
};
