import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('Singular, dual, plural'),
  subtitle: T('كِتَابَانِ، كِتَابَيْنِ، هُمَا'),
  section: T('O nome'),
  body: C(`## Três números, e o terceiro atrapalha

O português tem dois. O árabe tem três, e o terceiro é o dual: uma forma que existe para dizer "exatamente dois". {كِتَابٌ} é um livro, {كِتَابَانِ} são dois livros, {كُتُبٌ} são livros.

A informação que o dual carrega é pequena e muito específica: não é quantidade, é exatidão. Quem diz {كِتَابَانِ} não está dizendo "alguns livros", está dizendo dois. Uma tradução que escreve "livros" para {كِتَابَانِ} apaga a palavra mais informativa da frase, e uma leitura do grego antigo passa por essa perda sem perceber.

O dual não é decoração nem herança de poeta. Ele é obrigatório sempre que o número é dois, e o substantivo, o verbo e o pronome têm cada um a sua forma.

## O dual no substantivo

O dual do substantivo acrescenta duas letras: {ـانِ} no nominativo e {ـين} no acusativo e no genitivo. {كِتَابَانِ} e {كِتَابَيْنِ}. O feminino acrescenta um {ت} antes: {كِتَابَتَانِ} e {كِتَابَتَيْنِ}.

A regra vale para os plurais irregulares também, e é aí que ela engana. {قَلَمٌ} dá {قَلَمَانِ}, não {قَلَمَان} nem {قَلَمَين}: o {ن} do plural quebrado continua lá e a terminação do dual se cola a ele.

E há uma assimetria: **o dual não tem nenhum parentesco com o plural**. Não existe uma forma para "dois ou mais"; o {ـانِ} é só do dual, e o plural é sempre {كُتُبٌ} ou {مُعَلِّمُونَ}. Um leitor que procure um meio-termo entre {كِتَابَانِ} e {كُتُبٌ} não encontra, e essa ausência é o que torna o singular e o plural tão fáceis de distinguir em texto antigo.

## O dual no verbo e no pronome

O verbo tem dual de primeira pessoa, {كَتَبْنَا}, "nós escrevemos", e a terminação {ـنا} é a mesma do plural. O que separa os dois é o resto da pessoa, não o final.

Nas outras pessoas o dual tem forma própria. O imperfect de segunda pessoa é {تَكْتُبَانِ}, e é esse {بَانِ} que o olho reconhece. O pronome do dual é {أَنْتُمَا} para a segunda pessoa e {هُمَا} para a terceira, e {هُمَا} serve para masculino e feminino sem distinção: quem diz {هُمَا} sobre duas mulheres está certo, e o contexto é que diz o quê.

O dual da terceira pessoa é o único ponto do sistema em que o verbo e o pronome usam a mesma terminação: {هُمَا} e {كَتَبَا}. Isso não é coincidência, e quem aprende a ler passa a reconhecer a construção só pelo som.

## Onde o dual reaparece

E aqui está o que interessa a quem lê, porque o dual sobrevive em formas que o português já não tem.

As preposições seguido de dual usam os mesmos sufixos dos pronomes, e o resultado é uma palavra só: {بَيْنَهُمَا} "entre os dois", {عَنْهُمَا} "sobre os dois", {لَهُمَا} "para os dois", {كِتَابُهُمَا} "o livro dos dois". Cada uma delas traz um dual dentro, e o contexto nem sempre deixa claro se são duas pessoas ou duas coisas.

Depois há um uso que já não é contagem. {كُلَّاهُمَا} e {أَيُّهُمَا} significam "ambos os dois", e é um dos poucos casos em que o número exato não está em jogo. Traduzir {كُلَّاهُمَا} por "os dois" não está errado no número e está errado no sentido: {كُلّ} confirma em vez de contar.

O costume antigo é o que sustenta o resto. Os salmos usam {هُمَا} com frequência, e uma tradução que escreve "eles" onde o original diz "os dois" perde a ênfase sem dar conta. A forma mais antiga de {كُلَّاهُمَا} aparece nos Salmos e em Gênesis, e é dela que vem o uso moderno de "ambos".

## Critério de leitura

Procure o {ـانِ} e o {ـين} antes de traduzir qualquer substantivo. Em {أَخَاهُمَا} a terminação dupla diz imediatamente que a frase é sobre duas pessoas, e não sobre um grupo: o plural {ـُن} e {ـِن} nunca aparece. Quando a tradução já está feita e o número é ambíguo, volte à terminação: {ـا} no pronome e no verbo significa dois, e essa informação estava na palavra desde o começo.`),
  vocab: [
    V('كِتَابٌ', 'كتاب', 'um livro'),
    V('كِتَابَانِ', 'كتاب', 'dois livros; dual no nominativo'),
    V('كِتَابَيْنِ', 'كتاب', 'dois livros; dual no acusativo e no genitivo'),
    V('كِتَابَتَانِ', 'كتاب', 'dois livros; dual feminino'),
    V('قَلَمٌ', 'قلم', 'uma caneta'),
    V('قَلَمَانِ', 'قلم', 'duas canetas'),
    V('أَنْتُمَا', 'أنتما', 'vós dois'),
    V('هُمَا', 'هما', 'os dois; o mesmo para os dois sexos'),
    V('نَحْنُ', 'نحن', 'nós'),
    V('كِتَابُهُمَا', 'كتاب', 'o livro dos dois'),
    V('بَيْنَهُمَا', 'بين', 'entre os dois'),
    V('كُلَّاهُمَا', 'كل', 'ambos; só com dual'),
    V('كَتَبَا', 'كتب', 'os dois escreveram'),
    V('كَتَبَتَا', 'كتب', 'as duas escreveram'),
    V('تَكْتُبَانِ', 'كتب', 'vós dois escreveis'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Quantos números tem o nome árabe?'),
    options: [T('Dois'), T('Três'), T('Quatro'), T('Cinco')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o dual no nominativo: “dois livros” é {كِتَاب___}'),
      answer: 'َانِ',
      hint: T('O dual acrescenta duas letras ao substantivo.'),
    },
    {
      kind: 'match',
      prompt: T('Associe pessoa e forma do dual.'),
      pairs: [
        { a: T('أَنْتُمَا'), b: T('segunda pessoa') },
        { a: T('هُمَا'), b: T('terceira pessoa') },
        { a: T('كَتَبَا'), b: T('verbo, terceira pessoa') },
        { a: T('كَتَبَتَا'), b: T('verbo, terceira pessoa feminina') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('O que significa {كُلَّاهُمَا}?'),
      options: [T('Os dois'), T('Ambos'), T('Nenhum dos dois'), T('Os dois, em negação')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('Em {قَلَمَانِ}, o {ن} final vem de onde?'),
      options: [
        T('Do plural quebrado'),
        T('Da terminação do dual'),
        T('Do artigo'),
        T('Do feminino'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'São três os números do nome: singular, dual e plural, e o dual é obrigatório quando a conta é exatamente dois.',
      ),
    },
    {
      n: '2',
      text: T(
        '**The dual of the noun is {ـانِ} in the nominative and {ـين} elsewhere**, with {ت} added in the feminine.',
      ),
    },
    {
      n: '3',
      text: T(
        'O dual do verbo termina em {ا}: {كَتَبَا} e {كَتَبَتَا}; no imperfecto aparece como {بَانِ}, como em {تَكْتُبَانِ}.',
      ),
    },
    { n: '4', text: T('O pronome do dual é {أَنْتُمَا} e {هُمَا}, e {هُمَا} serve aos dois sexos.') },
    { n: '5', text: T('O dual reaparece em {بَيْنَهُمَا} e {كُلَّاهُمَا}, e aí já não conta, confirma.') },
  ],
  notes: [
    {
      label: T('O dual que o português perdeu'),
      text: T(
        'Nenhuma língua europeia moderna tem dual, e é por isso que o {ـانِ} assusta à primeira vista. Não é exotismo: é a mesma informação que o português resolve com "os dois", e o árabe resolve com terminação. Quem lê {كِتَابَيْنِ} sabe uma coisa que o leitor de português não vê, que são dois e não três.',
      ),
    },
    {
      label: T('Quando o dual vira "ambos"'),
      text: T(
        '{كُلَّاهُمَا} e {أَيُّهُمَا} significam ambos. Não é um número novo: é o dual com {كُلّ} à frente, e traduzir por "os dois" erra porque {كُلّ} confirma em vez de contar.',
      ),
    },
  ],
  examples: [
    { text: 'كِتَابٌ', gloss: T('um livro; singular') },
    { text: 'كِتَابَانِ', gloss: T('dois livros; dual no nominativo') },
    { text: 'كِتَابَيْنِ', gloss: T('dois livros; dual no acusativo e no genitivo') },
    { text: 'كِتَابَتَانِ', gloss: T('dois livros; dual feminino') },
    { text: 'قَلَمَانِ', gloss: T('duas canetas; o {ن} do plural continua lá') },
    { text: 'أَنْتُمَا', gloss: T('vós dois') },
    { text: 'هُمَا', gloss: T('os dois; sem distinção de sexo') },
    { text: 'بَيْنَهُمَا', gloss: T('entre os dois; o dual dentro do sufixo') },
    { text: 'كَتَبَا', gloss: T('os dois escreveram') },
  ],
  tables: [
    {
      caption: T('O dual no substantivo'),
      head: [T('Gênero'), T('Singular'), T('Dual nominativo'), T('Dual acusativo/genitivo')],
      rows: [
        [T('masculino'), 'كِتَابٌ', 'كِتَابَانِ', 'كِتَابَيْنِ'],
        [T('feminino'), 'كِتَابَةٌ', 'كِتَابَتَانِ', 'كِتَابَتَيْنِ'],
        [T('plural quebrado'), 'قَلَمٌ', 'قَلَمَانِ', 'قَلَمَيْنِ'],
      ],
    },
    {
      caption: T('O dual no verbo e no pronome'),
      head: [T('Pessoa'), T('Pronome'), T('Verbo'), T('Observação')],
      rows: [
        [T('1ª do plural'), 'نَحْنُ', 'كَتَبْنَا', T('terminação igual à do plural')],
        [T('2ª do singular'), 'أَنْتَ', 'كَتَبْتَ', T('sem dual')],
        [T('2ª do dual'), 'أَنْتُمَا', 'كَتَبْتُمَا', T('dual visível')],
        [T('3ª masc. do dual'), 'هُمَا', 'كَتَبَا', T('dual visível')],
        [T('3ª fem. do dual'), 'هُمَا', 'كَتَبَتَا', T('o mesmo pronome, verbo com {ـَتْ}')],
      ],
    },
    {
      caption: T('Onde o dual reaparece'),
      head: [T('Construção'), T('Forma'), T('Glosa')],
      rows: [
        [T('pronome do dual'), 'هُمَا', T('os dois')],
        [T('possessivo do dual'), 'كِتَابُهُمَا', T('o livro dos dois')],
        [T('preposição mais dual'), 'بَيْنَهُمَا', T('entre os dois')],
        [T('preposição mais dual'), 'عَنْهُمَا', T('sobre os dois')],
        [T('ambos'), 'كُلَّاهُمَا', T('ambos os dois')],
        [T('imperfeito do dual'), 'تَكْتُبَانِ', T('vós dois escreveis')],
      ],
    },
  ],
};
