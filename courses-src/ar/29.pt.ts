import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Aumentativos e diminutivos'),
  subtitle: T('أُفْعِلَ، فَعَّلَ، فُعَيْل، خَبَرَ، أَخْبَرَ'),
  section: T('O verbo'),
  body: C(`## O molde que aumenta

Há duas formas do verbo que acrescentam intensidade, e elas acrescentam coisas diferentes. A segunda, {فَعَّلَ}, diz que a ação é maior ou mais intensa: {كَتَبَ} é escrever, {كَتَّبَ} é ditar, escrever em voz alta para outro.

A quarta, {أُفْعِلَ}, diz que a ação passa a ter destinatário. **{خَبَرَ} é saber, e {أَخْبَرَ} é informar.** A diferença entre os dois é o que o verbo faz com aquilo que sabe, e é uma diferença que nenhuma terminação de tempo ou pessoa expressaria. O mesmo vale em {نَصَرَ} e {أَنْصَرَ}, {أَكَلَ} e {أَكَلَ} a comida de alguém, {أَخَذَ} e {أَخَذَ} para si.

A quarta forma é rara em número de raízes, e é por isso que a lista cabe na cabeça. {أَخْبَرَ}, {أَنْزَلَ}, {أَشْرَكَ}, {أَسْأَلَ}, {أَقْسَمَ}, {أَمَرَ}, {أَكَلَ}, {أَخَذَ}, {أَصْلَحَ}, {أَفْتَى}, {أَعْلَى}. São verbos de um grupo fixo, e quem os conhece reconhece a forma na página.

## Os que aumentam e os que diminuem

O aumentativo tem dois moldes, o diminutivo tem um, e os três são previsíveis.

O diminutivo masculino é {فُعَيْل}: {رَجُل} dá {رُجَيْلٌ}, {كِتَاب} dá {كُتَيْبٌ}, {جَبَل} dá {جُبَيْلٌ}. O feminino é {فُعِيلَة}: {شَجَرَة} dá {شُجَيْرَةٌ}. **A regra é curta e mecânica: a vogal do molde assume a qualidade da vogal da base, e as consoantes ficam onde estavam.**

O aumentativo, ao contrário, não é previsível por um molde único, e é a forma mais antiga da língua. Os seus oito subdivisões dependem de o radical ser forte, fraco ou dobrado, e é por isso que {فَعَّلَ} aparece na maioria dos verbos de intensidade sem que a vogal siga regra nenhuma.

## As cinco letras que somem no começo

E aqui está a exceção, e ela é o mais bonito que a língua faz com a ortografia.

Cinco letras podem desaparecer do começo de uma palavra, e o que se lê é menor do que o que se ouve. O {و} inicial de um verbo cai: {وَصَلَ} se escreve {اُصِلَ} e se pronuncia sem o {و}. O {ي} inicial dos derivados da décima forma cai: {يَسْتَعِينُ} se escreve do mesmo jeito e se pronuncia {يُسْتَعِينُ}.

O caso mais famoso é {اسْم}. Não existe nome em português que ajude, porque a palavra em árabe já perdeu um {و} antigo, e o que sobrou foi {اسْم} com três consoantes onde deveria haver quatro. **O manuscrito esconde a letra; a boca não.**

A consequência para a leitura é direta. Um texto antigo escreve {اسْم} e o dicionário procura uma raiz de duas letras; o leitor moderno escreve {إِسْم} e o manuscrito parece ter uma letra a mais. Nenhum dos dois está errado, e a elisão é a marca de que houve um {و} que ninguém vê.

## Critério de leitura

Em {أَقْسَمَ اللَّهُ بِالْحَقِّ} há uma quarta forma, uma preposição e uma partícula, e a frase inteira cabe em três palavras. {أَقْسَمَ} é {قَسَمَ} com o {أ} da quarta forma, e o verbo base significa "dividir": o juramento é uma divisão, o que se divide é a verdade, e {بِالْحَقِّ} diz em nome de quê.

Quem traduz {أَقْسَمَ} por "dividiu" errou o verbo e acertou a etimologia sem querer. Quem reconhece o {أ} inicial da quarta forma sabe que a ação tem destinatário antes mesmo de ler o resto da frase, e é isso que um leitor de texto bíblico procura.`),
  vocab: [
    V('أُفْعِلَ', 'فعل', 'o molde da quarta forma'),
    V('فَعَّلَ', 'فعل', 'o molde da segunda forma'),
    V('تَفَعَّلَ', 'فعل', 'o molde da quinta forma'),
    V('اِسْتَفْعَلَ', 'فعل', 'o molde da décima forma'),
    V('أَخْبَرَ', 'خبر', 'informou'),
    V('خَبَرَ', 'خبر', 'ele soube'),
    V('كَتَّبَ', 'كتب', 'ditou'),
    V('أَقْسَمَ', 'قسم', 'jurou'),
    V('قَسَمَ', 'قسم', 'dividiu'),
    V('رُجَيْلٌ', 'رجل', 'um homem pequeno'),
    V('كُتَيْبٌ', 'كتاب', 'um livro pequeno'),
    V('أَسْمٌ', 'اسم', 'nome'),
    V('وَصَلَ', 'وصل', 'ligou; chegou'),
    V('يَسْتَعِينُ', 'عون', 'implora ajuda'),
    V('اسْتَغْفَرَ', 'غفر', 'pediu perdão'),
    V('تَدَرَّبَ', 'درب', 'treinou-se'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que {أَخْبَرَ} acrescenta a {خَبَرَ}?'),
    options: [T('Intensidade'), T('Destinatário'), T('Tempo'), T('Negação')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o diminutivo de {رَجُل}: ___جَيْلٌ'),
      answer: 'رُ',
      hint: T('É o molde فُعَيْل, com a vogal da base.'),
    },
    {
      kind: 'match',
      prompt: T('Associe forma e sentido.'),
      pairs: [
        { a: T('أَخْبَرَ'), b: T('informou') },
        { a: T('خَبَرَ'), b: T('soube') },
        { a: T('كَتَّبَ'), b: T('ditou') },
        { a: T('أَقْسَمَ'), b: T('jurou') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual é o diminutivo regular de {كِتَاب}?'),
      options: [T('كُتَيْبٌ'), T('مَكْتُوبٌ'), T('كِتَابَاتٌ'), T('كَتَبَ')],
      answer: 0,
    },
    {
      kind: 'choose',
      prompt: T('Em {اسْم}, o que aconteceu com a raiz?'),
      options: [
        T('Perdeu uma letra no começo'),
        T('Ganhou uma letra'),
        T('Perdeu a vogal'),
        T('Não mudou'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '**A quarta forma {أُفْعِلَ} acrescenta a ideia de fazer algo a outro: {خَبَرَ} é saber, {أَخْبَرَ} é informar.**',
      ),
    },
    {
      n: '2',
      text: T('A segunda forma {فَعَّلَ} acrescenta intensidade: {كَتَبَ} é escrever, {كَتَّبَ} é ditar.'),
    },
    { n: '3', text: T('A quarta forma existe em poucas raízes, e a lista cabe na cabeça.') },
    { n: '4', text: T('O diminutivo regular é {فُعَيْل} no masculino e {فُعِيلَة} no feminino.') },
    {
      n: '5',
      text: T(
        'Cinco letras podem ser elididas no começo da palavra, e o que se lê é menor do que o que se ouve.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que o {أ} da quarta forma desaparece'),
      text: T(
        '{أُفْعِلَ} se escreve sem o alif na maioria dos textos, e o alif só aparece nas formas em que é preciso. A palavra continua a soar com ele, e é o manuscrito que economiza, não a pronúncia.',
      ),
    },
    {
      label: T('A letra que o texto esconde'),
      text: T(
        'Em {اسْم} o manuscrito esconde um {و} que existiu, e em {يَسْتَعِينُ} esconde um {و} que ninguém pronuncia. São formas que passaram por composições antigas, e a elisão é a marca de que houve uma.',
      ),
    },
  ],
  examples: [
    { text: 'خَبَرَ', gloss: T('ele soube') },
    { text: 'أَخْبَرَ', gloss: T('ele informou; a quarta forma dá destinatário') },
    { text: 'كَتَبَ', gloss: T('escreveu') },
    { text: 'كَتَّبَ', gloss: T('ditou; a segunda forma aumenta') },
    { text: 'قَسَمَ', gloss: T('dividiu') },
    { text: 'أَقْسَمَ', gloss: T('jurou; a quarta forma com {بِـ}') },
    { text: 'رُجَيْلٌ', gloss: T('um homem pequeno; diminutivo') },
    { text: 'كُتَيْبٌ', gloss: T('um livro pequeno; diminutivo') },
    { text: 'اسْمٌ', gloss: T('nome; com a inicial elidida') },
  ],
  tables: [
    {
      caption: T('As formas que aumentam'),
      head: [T('Forma'), T('Padrão'), T('O que acrescenta'), T('Exemplo')],
      rows: [
        [T('II'), 'فَعَّلَ', T('intensidade; fazer a alguém'), 'كَتَّبَ'],
        [T('IV'), 'أُفْعِلَ', T('fazer; dar destinatário'), 'أَخْبَرَ'],
        [T('V'), 'تَفَعَّلَ', T('fazer aos poucos, por etapas'), 'تَدَرَّبَ'],
        [T('X'), 'اِسْتَفْعَلَ', T('considerar algo como'), 'اسْتَغْفَرَ'],
      ],
    },
    {
      caption: T('Aumentativo e diminutivo'),
      head: [T('Tipo'), T('Padrão'), T('Base'), T('Resultado')],
      rows: [
        [T('intensivo da II'), 'فَعَّلَ', 'كَتَبَ', 'كَتَّبَ'],
        [T('intensivo da IV'), 'أُفْعِلَ', 'خَبَرَ', 'أَخْبَرَ'],
        [T('diminutivo masc.'), 'فُعَيْل', 'كِتَاب', 'كُتَيْبٌ'],
        [T('diminutivo fem.'), 'فُعِيلَة', 'شَجَرَة', 'شُجَيْرَةٌ'],
      ],
    },
    {
      caption: T('A elisão e seus efeitos'),
      head: [T('Causa'), T('Exemplo escrito'), T('O que se ouve'), T('Glosa')],
      rows: [
        [T('{و} inicial de verbo'), 'وَصَلَ', 'اُصِلَ', T('chegou')],
        [T('nome derivado'), 'اسْمٌ', 'اِسْمٌ', T('nome')],
        [T('derivado da X'), 'يَسْتَعِينُ', 'يُسْتَعِينُ', T('implora ajuda')],
        [T('derivado da V'), 'تَتَابَعَ', 'تَتَابَعُ', T('sucedeu uma após outra')],
      ],
    },
  ],
};
