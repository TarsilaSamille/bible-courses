import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Adjetivos longos e curtos'),
  subtitle: T('хороший — хорош: qualidade e estado'),
  section: T('O nome: gênero, número e adjetivo'),
  body: C(
    'O adjetivo pleno, longo, concorda com o substantivo em gênero, número e caso: хороший человек, хорошая книга, хорошее слово, хорошие люди. Suas formas declinam: хорошего, хорошему e assim por diante. A forma curta do adjetivo é normalmente usada predicativamente, com быть ou outra cópula: Он велик, "Ele é grande"; Жизнь коротка, "A vida é curta". As formas curtas não declinam, mas variam por gênero e, no plural, não por caso gramatical: велик, велика, велико, велики. Portanto, a afirmação de que as formas curtas nunca mudam é imprecisa. No masculino singular a terminação zero costuma marcar o masculino, enquanto o feminino tem -а e o neutro -о. A forma longa também pode ser predicativa: Это интересно; compare Это интересная книга. Entre as expressões bíblicas estão Святое Писание, "Sagrada Escritura", Новый Завет, "Novo Testamento", e вечная жизнь, "vida eterna".',
  ),
  vocab: [
    V('хороший', 'хороший', 'bom; longo masculino'),
    V('хорошая', 'хороший', 'boa; longo feminino'),
    V('хорошее', 'хороший', 'bom; longo neutro'),
    V('хорошие', 'хороший', 'bonsas; longo plural'),
    V('хорош', 'хороший', 'é bom; curto masculino'),
    V('хороша', 'хороший', 'é boa; curto feminino'),
    V('хорошо', 'хороший', 'é bom; curto neutro'),
    V('велик', 'великий', 'grande; curto masculino'),
    V('велика', 'великий', 'grande; curto feminino'),
    V('велико', 'великий', 'grande; curto neutro'),
    V('велики', 'великий', 'grandes; curto plural'),
    V('коротка', 'короткий', 'breve; curto feminino'),
    V('новый', 'новый', 'novo; longo masculino'),
    V('вечный', 'вечный', 'eterno'),
    V('Новый Завет', 'Новый Завет', 'Novo Testamento'),
    V('Святое Писание', 'Святое Писание', 'Sagrada Escritura'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual forma é naturalmente predicativa?'),
    options: [T('хорош'), T('хорошего'), T('хорошее')],
    answer: 0,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: Это ___ книга'), answer: 'хорошая' },
    { kind: 'fill', prompt: T('Complete: Он ___ (grande, curto)'), answer: 'велик' },
    {
      kind: 'match',
      prompt: T('Relaciona forma e gênero'),
      pairs: [
        { a: 'хорош', b: T('masculino') },
        { a: 'хороша', b: T('feminino') },
      ],
      answer: ['хорош', 'хороша'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O adjetivo longo concorda em gênero, número e caso: {хорошая книга}, {хорошее слово}, {хорошие люди}.',
      ),
    },
    {
      n: '2',
      text: T(
        'A forma curta não flexiona por caso, mas varia por gênero e número: {велик}, {велика}, {велико}, {велики}.',
      ),
    },
    {
      n: '3',
      text: T(
        'A forma curta é a que aparece com cópula: {Он велик} é «ele é grande», e {жизнь коротка} é «a vida é breve».',
      ),
    },
    {
      n: '4',
      text: T(
        'Depois de {Это} o substantivo exige a forma longa: {Это интересная книга}, e não {Это интересная}.',
      ),
    },
    {
      n: '5',
      text: T(
        'O par que se confunde é {хорошая} contra {хорошо}: a primeira concorda com o substantivo, a segunda é estado.',
      ),
    },
  ],
  notes: [
    {
      label: T('Curta ou longa?'),
      text: T(
        'A forma curta é a que ocupa a posição de predicado, e por isso {жизнь коротка} está certo enquanto {жизнь короткая} soa errado: um substantivo determinado pede a forma longa.',
      ),
    },
    {
      label: T('O mesmo radical, quatro terminações'),
      text: T(
        '{хорош} é a raiz de todas: {хорошего} no genitivo, {хорошая} no nominativo feminino, {хорошо} no neutro e {хорошие} no plural. O que muda não é a raiz, e é a terminação que diz o gênero e o número.',
      ),
    },
  ],
  examples: [
    { text: 'Это хорошая книга', gloss: T('Este é um bom livro; forma longa, feminino') },
    { text: 'Это хорошее слово', gloss: T('Esta é uma boa palavra; forma longa, neutro') },
    { text: 'Он хорош', gloss: T('ele é bom; forma curta predicativa') },
    { text: 'Она хороша', gloss: T('ela é boa; forma curta feminina') },
    { text: 'Он велик', gloss: T('ele é grande') },
    { text: 'Жизнь коротка', gloss: T('a vida é breve; o substantivo neutro pede a forma curta') },
    { text: 'Это интересно', gloss: T('isto é interessante; forma curta, sem substantivo') },
    { text: 'Это интересная книга', gloss: T('esta é uma livro interessante; forma longa') },
    { text: 'Новый Завет', gloss: T('Novo Testamento; dois nominativos') },
    { text: 'вечная жизнь', gloss: T('vida eterna; a concordância é com vida') },
  ],
  tables: [
    {
      caption: T('Concordância de {хороший}'),
      head: [T('Gênero/número'), T('Forma longa'), T('Forma curta'), T('Uso típico')],
      rows: [
        [T('masculino sg.'), T('хороший'), T('хорош'), T('predicativo')],
        [T('feminino sg.'), T('хорошая'), T('хороша'), T('predicativo')],
        [T('neutro sg.'), T('хорошее'), T('хорошо'), T('predicativo')],
        [T('plural'), T('хорошие'), T('хороши'), T('predicativo')],
      ],
    },
    {
      caption: T('Longa e curta lado a lado'),
      head: [T('Função'), T('Exemplo'), T('Forma'), T('Glosa')],
      rows: [
        [T('atributo'), T('хорошая книга'), T('longa'), T('bom livro')],
        [T('atributo'), T('хорошие люди'), T('longa'), T('boas pessoas')],
        [T('predicativo'), T('Он хорош'), T('curta'), T('ele é bom')],
        [T('predicativo'), T('Жизнь коротка'), T('curta'), T('a vida é breve')],
        [T('sem substantivo'), T('Это интересно'), T('curta'), T('isto é interessante')],
      ],
    },
    {
      caption: T('Os pares que se confundem'),
      head: [T('Par'), T('Um é'), T('O outro é'), T('Como decidir')],
      rows: [
        [T('хорошая / хорошо'), T('atributo'), T('estado'), T('o substantivo exige a longa')],
        [T('велик / великий'), T('estado'), T('atributo'), T('a cópula exige a curta')],
        [T('коротка / короткая'), T('estado'), T('atributo'), T('a cópula exige a curta')],
      ],
    },
  ],
};
