import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('O adjetivo e o advérbio'),
  title: T('O advérbio: como se forma'),
  subtitle: T('lenta, lentamente, e os que não têm -mente'),
  body: C(`## O -mente das femininas

O advérbio regular se forma com o adjetivo no feminino mais o sufixo {-mente}. {Lenta} dá {lentamente}, {firme} dá {firmemente}, {fácil} dá {facilmente}, {geral} dá {geralmente}, {constante} dá {constantemente}. A regra é tão productive que quase não tem exceção: em texto bíblico basta ver o {-mente} para saber que há um adjetivo escondido atrás dele.

O que merece atenção é que o caminho nem sempre mostra o passo do feminino. {Geral} não tem marca de feminino no português, e mesmo assim dá {geralmente}; {bonito} dá {bonitamente} sem que exista {bonita} usada como adjetivo isolado. O latim fazia o mesmo com os advérbios em {-e}, e o português trocou esse sufixo por {-mente}.

## Os irregulares e os que não têm -mente

Uma lista precisa ser aprendida, e ela é curta. Os de qualidade: {bem}, {mal}, {melhor}, {pior}. Os de tempo: {cedo}, {tarde}, {depressa}, {agora}, {hoje}, {ontem}, {amanhã}, {sempre}, {nunca}, {jamais}. Os de lugar: {aqui}, {ali}, {lá}, {perto}, {longe}, {fora}, {dentro}. E os de quantidade e de dúvida: {bastante}, {demais}, {talvez}, {certamente}, {apenas}, {já}.

Esses advérbios não derivam de nada, e é por isso que só a leitura os fixa. {Bem} e {mal} são os mais frequentes de todos, e no texto bíblico aparecem com frequência em contraste: {bem-aventurados}, {não me fazes bem}.

## Advérbio que também é adjetivo

Há palavras que fazem os dois papéis sem mudar de forma. {Livre} é adjetivo em {homem livre} e advérbio em {falou livre}; {forte} é adjetivo em {homem forte} e advérbio em {falou forte}; o mesmo vale para {firme}, {certo}, {claro}, {primeiro}, {único}, {mesmo}, {verdadeiro}, {alto}.

O teste é curto: a palavra pode ir depois de um substantivo? Se pode, é adjetivo; se só pode estar junto do verbo, é advérbio. {Independente} é adjetivo e aceita {um homem independente}; {independentemente} já é advérbio e não aceita nada antes dele. O português não flexiona advérbio, e é por isso que os dois são palavras diferentes, e não a mesma palavra em dois papéis.

## O que ler

Em qualquer advérbio, pergunte: ele se formou de um adjetivo, e qual é o adjetivo? Ou é irregular, e então é preciso saber de cor? E a forma é a mesma de um adjetivo?

O Salmo 84 termina com uma bênção sobre quem «anda retamente»: {retamente} é o adjetivo {reto} no feminino mais {-mente}, e o sufixo {mente} aparece ali fazendo o trabalho que o grego ἡγημένως fazia com uma forma só. Quem reconhece o {-mente} lê o advérbio como umaderivação, e não como uma palavra à parte.`),
  vocab: [
    V('lentamente', 'lenta', 'lentamente'),
    V('firmemente', 'firme', 'firmemente'),
    V('facilmente', 'fácil', 'facilmente'),
    V('geralmente', 'geral', 'geralmente'),
    V('bonitamente', 'bonito', 'bonitamente'),
    V('independentemente', 'independentemente', 'independentemente'),
    V('livre', 'livre', 'livre (adjetivo e advérbio)'),
    V('forte', 'forte', 'forte (adjetivo e advérbio)'),
    V('bem', 'bem', 'bem'),
    V('mal', 'mal', 'mal'),
    V('depressa', 'depressa', 'depressa'),
    V('cedo', 'cedo', 'cedo'),
    V('sempre', 'sempre', 'sempre'),
    V('nunca', 'nunca', 'nunca'),
    V('já', 'já', 'já'),
  ],
  rules: [
    { n: '§1', text: T('O advérbio regular se forma com o adjetivo no feminino mais {-mente}.') },
    {
      n: '§2',
      text: T(
        'Os advérbios irregulares não derivam de nada e precisam ser aprendidos: {bem}, {mal}, {cedo}, {tarde}, {depressa}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Adjetivo e advérbio podem ter a mesma forma; o teste é se a palavra pode vir depois de um substantivo.',
      ),
    },
    { n: '§4', text: T('O advérbio não flexiona em português: nem por número, nem por gênero.') },
    {
      n: '§5',
      text: T(
        'Ver {-mente} no texto é ver um adjetivo escondido: o advérbio é sempre uma derivação.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'O grego biblical usa poucos advérbios em {-mente} e muitos em {-ως}, como ἁγνῶς. O português precisa de uma palavra para cada um, e o tradutor escolhe a palavra que o grego deixou implícita.',
      ),
    },
    {
      label: T('Falso parente'),
      text: T(
        'Nem toda palavra terminada em {-mente} tem o mesmo valor: {momentaneamente} e {fundamentalmente} são advérbios de verdade, e o teste continua sendo o mesmo, vir depois de um substantivo.',
      ),
    },
  ],
  examples: [
    { text: 'Falou lentamente.', gloss: T('{lenta} no feminino mais {-mente}.') },
    {
      text: 'A verdade é obviamente simples.',
      gloss: T('{obviamente} vem de {obvia} no feminino.'),
    },
    { text: 'Chegou cedo demais.', gloss: T('Advérbio irregular, sem derivação.') },
    { text: 'Era um homem livre.', gloss: T('{livre} como adjetivo: vem depois do substantivo.') },
    { text: 'Falou livre.', gloss: T('{livre} como advérbio: não vem depois de substantivo.') },
    {
      text: 'independentemente do preço.',
      gloss: T('Advérbio que não flexiona e não admite artigo.'),
    },
    { text: 'Ele dormiu bem.', gloss: T('Advérbio irregular de qualidade.') },
    { text: 'Sabe isso claramente.', gloss: T('{claramente} de {clara} mais {-mente}.') },
  ],
  tables: [
    {
      caption: T('Formação do advérbio'),
      head: ['Adjetivo', 'Feminino', 'Advérbio'],
      rows: [
        ['lento', 'lenta', 'lentamente'],
        ['firme', 'firme', 'firmemente'],
        ['geral', 'geral', 'geralmente'],
        ['independente', 'independente', 'independentemente'],
      ],
    },
    {
      caption: T('Advérbios irregulares'),
      head: ['Grupo', 'Formas'],
      rows: [
        ['qualidade', 'bem, mal'],
        ['tempo', 'cedo, tarde, depressa, sempre, nunca'],
        ['lugar', 'aqui, ali, lá, perto, longe'],
        ['quantidade', 'bastante, demais, apenas, já'],
      ],
    },
    {
      caption: T('Adjetivo ou advérbio'),
      head: ['Palavra', 'Adjetivo', 'Advérbio'],
      rows: [
        ['livre', 'homem livre', 'falou livre'],
        ['forte', 'homem forte', 'falou forte'],
        ['claro', 'dia claro', 'viu claro'],
        ['mesmo', 'o mesmo dia', 'faz o mesmo'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se forma o advérbio de {lenta}?'),
    options: [T('lentamente'), T('lento-mente'), T('lentido'), T('lenteza')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{cedo} é um advérbio ______.'),
      answer: 'irregular',
      hint: T('Não sai de nenhum adjetivo.'),
    },
    {
      kind: 'choose',
      prompt: T('Em “homem livre”, {livre} é:'),
      options: [T('adjetivo'), T('advérbio'), T('pronome'), T('numeral')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue a palavra ao que ela é na frase.'),
      pairs: [
        { a: T('homem livre'), b: T('adjetivo') },
        { a: T('falou livre'), b: T('advérbio') },
        { a: T('falou claramente'), b: T('advérbio') },
        { a: T('dia claro'), b: T('adjetivo') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
