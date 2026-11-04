import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('O adjetivo e o advérbio'),
  title: T('O adjetivo: grau'),
  subtitle: T('bom, melhor, ótimo, e a locução que o texto prefere'),
  body: C(`## Os três graus

O adjetivo tem três graus, e o comparativo e o superlativo saem por regra. O comparativo de superioridade usa {mais}: {mais alto}, {mais forte}, {mais antigo}. O de inferioridade usa {menos}: {menos difícil}, {menor}. O de igualdade usa {tão} e {como}: {tão alto como}, {tão bom como}. E há ainda o comparativo de quantify, {muito}, que é o mais comum na fala: {muito alto}, {muito bom}.

O superlativo sai do comparativo com {o} à frente: {o mais alto}, {o mais forte}. A forma mais comum no texto é a de intensidade, com {muito} e sem artigo: {muito alto}, {tão alto}, {bem alto}, {tão}. Nenhuma delas flexiona, e é por isso que o português não distingue o superlativo masculino do feminino.

## Os irregulares

Uma lista pequena quebra a regra, e ela precisa ser memorizada. {Bom} dá {melhor} e {ótimo}. {Mau} dá {pior} e {péssimo}. {Grande} dá {maior} e {máximo}. {Pequeno} dá {menor} e {mínimo}. {Bom} ainda aceita {melhor} no superlativo, o que dá aconstruction mais antiga do português: {o melhor dos homens}.

O mesmo vale para {muito} e {pouco}, que são palavras de grau: {muito bom}, {pouco bom}, {muito pior}. E para {bastante}, que é palavra de quantidade e não de grau: {bastante gente}, e que no texto antigo aparece muitas vezes como verbo, {bastou}, no sentido de «foi suficiente».

## A locução adjetival

O português tem um caminho mais longo para dizer a mesma coisa, e o texto bíblico o usa mais do que o outro. Em vez de {ser importante}, o texto diz {ter importância}; em vez de {ser preciso}, diz {ser necessário}; em vez de {ele é fiel}, diz {ele se mostra fiel}. A locução adjetival é o que permite ao texto dizer {é necessário que} e {é bom que} sem mudar de construção.

A vantagem é a regência: {bom} sozinho não exige nada, mas {é bom vir} já exige infinitivo, e {é bom que ele venha} exige uma oração inteira no subjuntivo. A locução, portanto, não é enfeite: é o que governa o verbo que vem depois, e por isso é ela que o tradutor precisa produzir quando o grego tem um verbo como {δέει}.

O ponto de atenção é duplo. Primeiro, a locução admite as duas formas, e o que decide é o sentido: {é bom que} é avaliação, {é bom vir} é conselho. Segundo, o que governa o verbo seguinte é a locução, e não o substantivo, o que é diferente do latim e do grego.

## O que ler

Em qualquer adjetivo, pergunte: está no positivo, no comparativo ou no superlativo? E é regular ou irregular? E o texto usa o adjetivo sozinho ou numa locução?

Em 1 Cor 13.13, {o maior deles é o amor} é um superlativo com {o} à frente, e é o único dos três graus que aparece na frase. O texto não diz que o amor é maior do que a fé, e sim que, entre os três, ele ocupa o primeiro lugar: é superlativo, não comparativo, e a diferença entre as duas coisas é o sentido do versículo.`),
  vocab: [
    V('o adjetivo', 'adjetivo', 'o adjetivo'),
    V('bom', 'bom', 'bom'),
    V('melhor', 'bom', 'melhor'),
    V('ótimo', 'bom', 'ótimo'),
    V('mau', 'mau', 'mau'),
    V('pior', 'mau', 'pior'),
    V('grande', 'grande', 'grande'),
    V('maior', 'grande', 'maior'),
    V('pequeno', 'pequeno', 'pequeno'),
    V('menor', 'pequeno', 'menor'),
    V('muito', 'muito', 'muito'),
    V('tão', 'tão', 'tão'),
    V('mais', 'mais', 'mais'),
    V('é bom que', 'bom', 'é bom que'),
    V('é necessário', 'necessário', 'é necessário'),
    V('o amor', 'amor', 'o amor'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O comparativo de superioridade usa {mais}: {mais alto}; o de inferioridade usa {menos}: {menos difícil}.',
      ),
    },
    {
      n: '§2',
      text: T('O superlativo regular sai do comparativo com {o} à frente: {o mais alto}.'),
    },
    {
      n: '§3',
      text: T('Os irregulares são poucos: {melhor}, {pior}, {maior}, {menor}, {ótimo}, {péssimo}.'),
    },
    {
      n: '§4',
      text: T(
        'A locução adjetival governa o verbo que vem depois: {é bom que} exige subjuntivo, {é bom} exige infinitivo.',
      ),
    },
    {
      n: '§5',
      text: T('O superlativo não flexiona em português: {o mais alto} vale para os dois gêneros.'),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'O grego e o hebraico comparam com partícula, e o português compara com {mais}, {menos} ou {tão}. Onde o grego diz {μᾶλλον}, o português diz {mais}.',
      ),
    },
    {
      label: T('Cuidado com o sentido'),
      text: T(
        'Em {o maior deles é o amor}, o superlativo indica posição entre três, não comparação entre dois. Traduzir por {mais amoroso} troca o sentido do versículo.',
      ),
    },
  ],
  examples: [
    { text: 'Ele é mais alto que o irmão.', gloss: T('Comparativo de superioridade com {mais}.') },
    { text: 'É tão forte como o pai.', gloss: T('Comparativo de igualdade com {tão} e {como}.') },
    { text: 'É o melhor aluno.', gloss: T('Superlativo irregular de {bom}.') },
    { text: 'Isto é muito importante.', gloss: T('Comparativo de intensidade com {muito}.') },
    { text: 'Ele é um homem bom.', gloss: T('Positivo, sem grau nenhum.') },
    { text: 'É necessário que todos venham.', gloss: T('Locução adjetival que exige subjuntivo.') },
    { text: 'É bom vir cedo.', gloss: T('Locução com infinitivo: conselho, não avaliação.') },
    { text: 'O maior deles é o amor.', gloss: T('Superlativo com {o} à frente.') },
  ],
  tables: [
    {
      caption: T('Os três graus'),
      head: ['Grau', 'Exemplo', 'Como se forma'],
      rows: [
        ['positivo', 'alto', 'o próprio adjetivo'],
        ['comparativo', 'mais alto', 'mais + adjetivo'],
        ['comparativo', 'menos difícil', 'menos + adjetivo'],
        ['comparativo', 'tão alto como', 'tão + adjetivo + como'],
        ['superlativo', 'o mais alto', 'o + comparativo'],
      ],
    },
    {
      caption: T('Irregulares'),
      head: ['Positivo', 'Comparativo', 'Superlativo'],
      rows: [
        ['bom', 'melhor', 'o melhor, ótimo'],
        ['mau', 'pior', 'o pior, péssimo'],
        ['grande', 'maior', 'o maior, máximo'],
        ['pequeno', 'menor', 'o menor, mínimo'],
      ],
    },
    {
      caption: T('Locução adjetival'),
      head: ['Locução', 'O que vem depois', 'Exemplo'],
      rows: [
        ['é bom que', 'subjuntivo', 'é bom que ele venha'],
        ['é necessário', 'subjuntivo', 'é necessário que ouçam'],
        ['tem importância', 'complemento', 'tem importância para todos'],
        ['é importante', 'complemento', 'é importante para todos'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o comparativo de {bom}?'),
    options: [T('melhor'), T('mais bom'), T('bomente'), T('o bom')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('“É bom que ele ___” pede verbo no ______.'),
      answer: 'subjuntivo',
      hint: T('A locução é que governa o verbo.'),
    },
    {
      kind: 'choose',
      prompt: T('Em “o maior deles é o amor”, {maior} é:'),
      options: [T('superlativo'), T('comparativo'), T('positivo'), T('locução adjetival')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o positivo ao comparativo.'),
      pairs: [
        { a: T('bom'), b: T('melhor') },
        { a: T('mau'), b: T('pior') },
        { a: T('grande'), b: T('maior') },
        { a: T('pequeno'), b: T('menor') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
