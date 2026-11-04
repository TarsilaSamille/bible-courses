import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('O verbo: tempo, modo e negação'),
  title: T('Negação: o não que vem antes de tudo'),
  subtitle: T('не, ни e nada: três ways de negar e uma só posição'),
  body: C(`
## O marcador vai na primeira palavra

A negação russa não é um advérbio que se cola ao verbo. É uma partícula que ocupa o primeiro lugar da frase, e essa é a informação que ela transmite: **negação é o que vem primeiro, e o que vem primeiro é o que está em foco.**

Он не читал книгу nega o ato. Не он читал книгу nega que tenha sido ele, e a diferença está inteiramente na posição do не, que subiu para o começo da oração. Не книгу он читал nega que tenha sido aquele livro. A negação é uma moldura, e o que ela cerca é o que está negando.

Em português a negação também precede o verbo, mas ela não pode subir até o sujeito sem virar uma construção diferente. Não ele leu o livro é agramatical em português e gramatical em russo. É por isso que a posição do не é uma informação e não um detalhe: ela diz o que a frase está negando.

## Não e ни, e a diferença entre os dois

Не nega um único predicado. Ни nega um membro de um grupo. Не я, а он: não eu, mas ele. Ни он, ни я: nem ele, nem eu. Na primeira frase há um negado e uma substituição; na segunda há dois negados e nenhuma substituição.

O outro uso de ни é o mais útil para a leitura: ** ни aparece depois de uma palavra negativa para somar uma segunda.**
Не я говорил, а он e Ни он, ни я не говорил. A negação está em не, e o ни apenas marca a soma. Quem traduz e põe ни onde o original tem не está strengthening a negação sem necessidade, e a frase fica mais dura do que era.

E há a segunda família, que já parece não negar nada. Никто не видел Бога. O никто é o sujeito, e o не está no verbo, como sempre. A negação mora em никто, e o не é a marca de que aquela coisa específica não foi vista. **Ninguém é uma palavra positiva**: em latim e em português, nemo e ninguém são pronomes normais, e quem os traduz como "ninguém" perde o mecanismo.

## O que não se faz em russo

Нет e не não são sinônimos, e a diferença é de categoria e não de intensidade. Нет nega a existência e pede genitivo: нет хлеба, não há pão. Не nega um predicado e não muda de caso: хлеба нет é o mesmo que нет хлеба, com a negação movida para o fim. **A negação pode ser deslocada para o fim da oração quando a frase é nominal**, e nesse caso ela vem sem не.

É a diferença maisproductive entre português e russo para quem traduz o grego. Οὐκ ἔστιν e ἐστιν οὐκ são a mesma frase com a negação em dois lugares, e o grego antigo faz exatamente a mesma coisa. O tradutor que escreve нет onde o grego tem οὐκ está escolhendo entre negar o ser e negar o ter.

## O gancho: duas negações no mesmo verso

**Все чрез Него начало быть, и без Него ничто не начало быть, что начало быть.** O versículo tem três negações em dez palavras, e elas não fazem a mesma coisa.

Без Него é a negação do meio: sem ele. Não há partícula, e o caso é instrumental, com a preposição без no genitivo. Ничто не начало быть é a negação dupla: o sujeito é ничто, que é um pronome positivo que significa "nada", e o не nega o verbo. **A negação não está dobrada: ela está dividida.** O sujeito nega e o verbo nega, e cada um nega o seu lado.

E a terceira parte é a mais bonita do versículo: что начало быть, que repete exatamente a palavra que foi negada. Ничто не начало быть, что начало быть quer dizer nada foi criado que tenha sido criado, e a repetição é o que transforma a dupla negação em uma afirmação. Um tradutor que escreve "e nada foi criado do que foi criado" preserva a estrutura. Um que escreve "e nada foi criado" corta a segunda metade e perde o verso.
`),
  vocab: [
    V('не', 'не', 'não; partícula de negação'),
    V('ни', 'ни', 'nem; partícula de soma sob negação'),
    V('Нет', 'нет', 'não há; nega existência e rege genitivo'),
    V('никто', 'никто', 'ninguém; pronome positivo'),
    V('ничто', 'ничто', 'nada; pronome positivo'),
    V('Не я, а он', 'не', 'não eu, mas ele; negação com substituição'),
    V('Ни он, ни я', 'ни', 'nem ele, nem eu; negação de grupo'),
    V('без Него', 'без', 'sem ele; instrumental por preposição'),
    V('Никто не видел Бога', 'видеть', 'ninguém viu Deus'),
    V('оно', 'оно', 'aquilo; o neutro do pronome'),
    V('начало быть', 'начать', 'começar a ser; verbo composto'),
    V('есть', 'быть', 'é; sem aspecto'),
    V('отрицание', 'отрицание', 'negação'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em Не он читал книгу, o que o не está negando?'),
    options: [T('O verbo ler'), T('O sujeito ele'), T('O livro')],
    answer: 1,
    hint: T(
      'A negação fica na primeira palavra da oração, e o que ela cerca é o que está em foco. Aqui ela subiu até o sujeito.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: нет ___ (não há pão)'), answer: 'хлеба' },
    {
      kind: 'choose',
      prompt: T('Qual palavra nega a existência?'),
      options: [T('не'), T('нет'), T('ни')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: ___ не начало быть (nada foi criado)'), answer: 'Ничто' },
  ],
  rules: [
    {
      n: '1',
      text: T('{Не} ocupa o primeiro lugar da oração, e o que ela cerca é o que está em foco.'),
    },
    {
      n: '2',
      text: T(
        '{Не} nega um predicado; {ни} nega um membro de um grupo e soma sob uma negação anterior.',
      ),
    },
    { n: '3', text: T('{Нет} nega a existência e pede genitivo: {нет хлеба}.') },
    {
      n: '4',
      text: T('{Никто} e {ничто} são pronomes positivos: quem nega é o {не} que os acompanha.'),
    },
    {
      n: '5',
      text: T(
        'Quando a oração é nominal, a negação pode ir para o fim e aparece sem {не}: {хлеба} {нет}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Nada é uma palavra positiva'),
      text: T(
        'Ничто e никто não são pronomes negativos. São pronomes normais, com caso e com número, e quem nega a ação é o не que vem com eles. Em grego, o οὐκ dos versículos de João funciona da mesma maneira: ele nega, e οὐδείς e οὐθέν limitam o sujeito. Traduzir por uma palavra negativa portuguesa conserva o sentido e desmonta a estrutura, e quem quer ler o grego precisa ver a estrutura.',
      ),
    },
    {
      label: T('Negação nominal e a escolha do tradutor'),
      text: T(
        'Хлеба нет e нет хлеба são a mesma frase, e a posição da negação muda o que está em foco. Na primeira, o foco é o pão; na segunda, é a ausência. Com um verbo a posição do не é fixa e a tradução não tem escolha; com um substantivo a escolha reaparece. É o mesmo phenomenon do grego antigo, e é por isso que traduções russas de João divergem tanto na primeira linha.',
      ),
    },
  ],
  examples: [
    { text: 'Он не читал книгу', gloss: T('ele não leu o livro; a negação nega o ato') },
    { text: 'Не он читал книгу', gloss: T('não foi ele quem leu; a negação nega o sujeito') },
    { text: 'Не я, а он', gloss: T('não eu, mas ele; negação com substituição') },
    { text: 'ни он, ни я', gloss: T('nem ele, nem eu; negação de grupo') },
    { text: 'нет хлеба', gloss: T('não há pão; нет rege genitivo') },
    { text: 'хлеба нет', gloss: T('pão não há; a negação vai para o fim') },
    { text: 'никто не видел Бога', gloss: T('ninguém viu Deus; quem nega é o не') },
    { text: 'ничто не начало быть', gloss: T('nada veio a ser; o sujeito e o verbo negam') },
    { text: 'без Него ничто не начало быть', gloss: T('sem ele nada veio a ser; três negações') },
    { text: 'что начало быть', gloss: T('que veio a ser; a palavra que foi negada, repetida') },
  ],
  tables: [
    {
      caption: T('As três palavras que negam, e o que cada uma nega'),
      head: [T('Palavra'), T('Classe'), T('O que nega'), T('Exemplo')],
      rows: [
        [T('не'), T('partícula'), T('um predicado'), T('Он не читал')],
        [T('ни'), T('partícula'), T('um membro de um grupo, e soma sob negação'), T('ни он, ни я')],
        [T('нет'), T('verbo'), T('a existência'), T('нет хлеба')],
      ],
    },
    {
      caption: T('A família dos pronomes de negação'),
      head: [T('Positivo'), T('Com не'), T('O que nega'), T('Caso')],
      rows: [
        [T('кто'), T('никто не'), T('a pessoa'), T('genitivo com не знает')],
        [T('что'), T('ничто не'), T('a coisa'), T('genitivo ou nominativo, conforme o verbo')],
        [T('где'), T('нигде не'), T('o lugar'), T('prepositivo')],
        [T('когда'), T('никогда не'), T('o tempo'), T('adverbial')],
      ],
    },
    {
      caption: T('Negação verbal e negação nominal'),
      head: [T('Tipo'), T('Onde fica'), T('Exemplo'), T('O que é traduzido')],
      rows: [
        [T('com verbo'), T('antes do verbo'), T('Он не читал книгу'), T('não leu')],
        [
          T('com substantivo, ordem neutra'),
          T('antes do substantivo'),
          T('нет хлеба'),
          T('não há'),
        ],
        [
          T('com substantivo, ênfase no substantivo'),
          T('no fim da oração'),
          T('хлеба нет'),
          T('não há'),
        ],
        [
          T('com verbo, foco no sujeito'),
          T('antes do sujeito'),
          T('Не он читал'),
          T('não foi ele quem'),
        ],
      ],
    },
  ],
};
