import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('O gênero e o marcador {ة}'),
  subtitle: T('مَلِكٌ، مَلِكَةٌ، شَجَرَةٌ'),
  section: T('O nome'),
  body: C(`## O masculino é o que não é marcado

Em português, {livro} e {mesa} dizem o gênero na terminação, e um aprendiz chega à flexão esperando que isso aconteça. Em árabe acontece o mesmo, com uma diferença que muda tudo: **o masculino não tem marcador nenhum, e o feminino tem um**.

{مَلِكٌ} é masculino e não tem nada além da terminação de caso. {مَلِكَةٌ} é feminino e tem uma letra a mais. É por isso que o gênero é uma informação negativa no masculino e positiva no feminino, e por isso o teste prático para ler um nome desconhecido é ver se ele tem {ة}. Se não tem, é masculino, e a flexão já está decidida.

O gênero do nome não diz o que a coisa é nem se ela é viva. {نَارٌ} é feminino e não é uma pessoa, {فَجْرٌ} é masculino e é um abstrato. A informação morfológica é tudo o que se pode saber antes do dicionário.

## Os três finais do feminino

O {ة} não é a única marca. O feminino aparece com três finais, e a distinção é útil porque cada um deles traz o seu plural.

O {ة} fechado aparece na maioria esmagadora dos casos: {مَلِكَةٌ}, {شَجَرَةٌ}, {قَلَمَةٌ}, {مَدْرَسَةٌ}. O plural é regular, com {ـات}: {مَلَكَاتٌ}, {شَجَرَاتٌ}.

O {ى} aberto aparece em poucos nomes, e o plural quase sempre leva {ء}: {حُرْمَى} dá {حُرُمَى}, {عُذْرَى} dá {عُذْرَى}. São palavras raras e quase sempre de origem não árabe.

O {ء} final abre a mesma conta: {سَمَاءٌ} dá {سَمَوَاتٌ}, {بَيَاءٌ} dá {بُيُيُوبٌ}. E há ainda palavras femininas sem {ة}, que o léxico mantém por costume: {أُمٌ}, {نَارٌ}, {أُخْتٌ}, {حُرْمَى}.

## O que o gênero faz concordar

O gênero é uma chave, e a chave abre quatro portas. **O nome governa o adjetivo, o verbo, o pronome e o sufixo de posse**.

O adjetivo concorda: {كِتَابٌ جَدِيدٌ} e {كِتَابَةٌ جَدِيدَةٌ}. O verbo muda de forma, e a mudança é visível na terminação: {كَتَبَ} ele escreveu, {كَتَبَتْ} ela escreveu. O pronome muda de letra: {هُوَ} e {هِيَ}. O possessivo acompanha: {كِتَابُهُ} e {كِتَابُهَا}.

E o plural regular, que já viu, segue a mesma chave: {مُعَلِّمُونَ} para o masculino, {مُعَلِّمَاتٌ} para o feminino. Quem sabe o gênero do nome sabe o plural, o adjetivo e a forma do verbo, e a economia é grande.

## Onde o gênero vai contra o esperado

Aqui está a exceção, e ela ocupa mais espaço do que a regra porque é a que o leitor tropeça.

Um nome inanimado leva o verbo no masculino, por omissão. Isso vale mesmo quando o nome é feminino: em {فِي الْبَدْءِ كَانَ الْكَلِمَةُ}, {الْكَلِمَةُ} é feminino e {كَانَ} é masculino. Não é erro do tradutor nem erro do copista: é o padrão da língua, e a leitura que segue o gênero do nome escreve um verbo que ninguém pronuncia. A regra é regra para substantivo e adjetivo, com poucas exceções nomeadas.

Um plural não humano conta como feminino na concordância, mesmo quando não tem {ة}: {أَعْمَالٌ كَثِيرَةٌ}, {فِكَرٌ كَثِيرَةٌ}, {خَشَبٌ كَثِيرٌ} com a segunda parte no plural. O plural age como se fosse uma só entidade, e as entidades inanimadas são tratadas como femininas.

E há casos em que o léxico decide e a gramática só avisa. {شَجَرٌ} é masculino e {شَجَرَةٌ} é feminino, mas {فَجْرٌ} é masculino e {فَجْرَةٌ} também existe, com outro sentido. Nenhum padrão morfológico decide esses casos, e é por isso que o tradutor que confia na terminação erra mais aqui do que em qualquer outro lugar da língua.

## Critério de leitura

Antes de traduzir um verbo, olhe o substantivo e procure a {ة}. Em {جَاءَ الرَّجُلُ} o substantivo é masculino e o verbo é masculino; em {جَاءَتِ الْمَرْأَةُ} a terminação {ـة} diz que o substantivo é feminino e o verbo tem de ser {جَاءَتْ}. Quando o nome não tem {ة} e mesmo assim o verbo parece feminino, o nome é um dos poucos que inverte o padrão, e a lista é curta o bastante para ser guardada.`),
  vocab: [
    V('مَلِكٌ', 'ملك', 'rei; masculino sem marcador'),
    V('مَلِكَةٌ', 'ملك', 'rainha'),
    V('كَاتِبٌ', 'كتب', 'escritor'),
    V('كَاتِبَةٌ', 'كتب', 'escritora'),
    V('شَجَرَةٌ', 'شجرة', 'árvore'),
    V('حُرْمَى', 'حرم', 'santuário; feminino em {ى}'),
    V('سَمَاءٌ', 'سماء', 'céu; feminino em {ء}'),
    V('نَارٌ', 'نار', 'fogo; feminino sem {ة}'),
    V('جَدِيدٌ', 'جديد', 'novo'),
    V('جَدِيدَةٌ', 'جديد', 'nova'),
    V('أَعْمَالٌ', 'عمل', 'obras; plural não humano que concorda como feminino'),
    V('كَثِيرَةٌ', 'كثير', 'muita'),
    V('كَتَبَتْ', 'كتب', 'ela escreveu'),
    V('هِيَ', 'هي', 'ela'),
    V('أُخْتٌ', 'أخت', 'irmã; feminino sem {ة}'),
    V('تَاء مربوطة', 'تاء', 'a letra que marca o feminino'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual destes nomes é feminino?'),
    options: [T('مَلِكٌ'), T('شَجَرَةٌ'), T('كِتَابٌ'), 'قَلَمٌ'],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o feminino de {مَلِكٌ}: ___ِكَة'),
      answer: 'مَ',
      hint: T('A letra inicial do masculino, com a terminação do feminino.'),
    },
    {
      kind: 'choose',
      prompt: T('Em {فِي الْبَدْءِ كَانَ الْكَلِمَةُ}, por que o verbo é masculino?'),
      options: [
        T('Porque {الْكَلِمَةُ} é masculino'),
        T('Porque o nome é inanimado e a concordância é masculina por omissão'),
        T('Porque o verbo é nome próprio'),
        T('Porque {كَانَ} é feminino'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Associe gênero e forma.'),
      pairs: [
        { a: T('كَتَبَ'), b: T('masculino') },
        { a: T('كَتَبَتْ'), b: T('feminino') },
        { a: T('جَدِيدٌ'), b: T('masculino') },
        { a: T('جَدِيدَةٌ'), b: T('feminino') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual destes nomes tem o plural mais comum em {ات}?'),
      options: [T('حُرْمَى'), T('شَجَرَةٌ'), 'نَارٌ'],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('**O masculino não tem marcador, e o feminino tem {ة}.**') },
    { n: '2', text: T('O feminino tem três finais: o {ة} fechado e o {ى} e o {ء} abertos.') },
    { n: '3', text: T('O gênero governa o adjetivo, o verbo, o pronome e o sufixo de posse.') },
    { n: '4', text: T('O plural regular segue o gênero: {ـون} no masculino e {ـات} no feminino.') },
    {
      n: '5',
      text: T(
        'Um nome inanimado leva o verbo no masculino por omissão, mesmo sendo o nome feminino: {كَانَ الْكَلِمَةُ}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Onde a gramática só avisa'),
      text: T(
        'Nem todo nome terminado em {ة} é feminino, e nem todo feminino termina em {ة}. {فَجْرٌ} é masculino e {فَجْرَةٌ} também existe, com outro sentido; {نَارٌ} e {أُخْتٌ} são femininos sem {ة}. O costume do léxico manda, e a terminação é apenas um indício.',
      ),
    },
    {
      label: T('A {ة} de intensidade'),
      text: T(
        'Algumas palavras femininas trazem uma segunda {ة}, de intensidade e não de gênero: {حُمْرَةٌ} é o substantivo da cor, não uma forma feminina de {أَحْمَر}. A letra é a mesma e o trabalho é outro.',
      ),
    },
  ],
  examples: [
    { text: 'مَلِكٌ', gloss: T('rei; masculino sem marcador') },
    { text: 'مَلِكَةٌ', gloss: T('rainha; com {ة}') },
    { text: 'شَجَرَةٌ', gloss: T('árvore; feminino regular') },
    { text: 'حُرْمَى', gloss: T('santuário; feminino em {ى}') },
    { text: 'سَمَاءٌ', gloss: T('céu; feminino em {ء}') },
    { text: 'نَارٌ', gloss: T('fogo; feminino sem {ة}') },
    { text: 'كِتَابٌ جَدِيدٌ', gloss: T('livro novo; concordância masculina') },
    { text: 'كِتَابٌ جَدِيدَةٌ', gloss: T('livro novo; substantivo feminino') },
    { text: 'كَتَبَتْ', gloss: T('ela escreveu; o verbo concorda com o gênero') },
  ],
  tables: [
    {
      caption: T('Os finais do feminino'),
      head: [T('Final'), T('Padrão'), T('Exemplo'), T('Plural'), T('Exemplo do plural')],
      rows: [
        [T('{ة} fechado'), 'مَفْعَلَة', 'مَلِكَةٌ', 'ـات', 'مَلَكَاتٌ'],
        [T('{ى} aberto'), 'مَفْعَلَى', 'حُرْمَى', 'ـى', 'حُرُمَى'],
        [T('{ء} aberto'), 'مَفْعَلَاء', 'سَمَاءٌ', 'ـوَات', 'سَمَوَاتٌ'],
        [T('sem {ة}'), T('costume do léxico'), 'نَارٌ، أُمٌ', T('irregular'), 'نِرَان'],
      ],
    },
    {
      caption: T('O que o gênero manda'),
      head: [T('Elemento'), T('Masculino'), T('Feminino')],
      rows: [
        [T('adjetivo'), 'جَدِيدٌ', 'جَدِيدَةٌ'],
        [T('verbo'), 'كَتَبَ', 'كَتَبَتْ'],
        [T('pronome'), 'هُوَ', 'هِيَ'],
        [T('possessivo'), 'كِتَابُهُ', 'كِتَابُهَا'],
        [T('plural regular'), 'مُعَلِّمُونَ', 'مُعَلِّمَاتٌ'],
      ],
    },
    {
      caption: T('Onde o gênero vai contra o esperado'),
      head: [T('Categoria'), T('Concorda como'), T('Exemplo')],
      rows: [
        [T('plural não humano'), T('feminino'), 'أَعْمَالٌ كَثِيرَةٌ'],
        [T('coletivo'), T('feminino'), 'غَنَمٌ كَثِيرَةٌ'],
        [T('nome inanimado'), T('masculino no verbo'), 'كَانَ الْكَلِمَةُ'],
        [T('planta'), T('feminino por omissão'), 'شَجَرَةٌ بِلا ثَمَر'],
      ],
    },
  ],
};
