import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Leitura guiada: João 1:1'),
  subtitle: T('O Verbo, a luz e a Palavra'),
  section: T('Leitura'),
  body: C(`## O texto em quatro blocos

João 1:1-3 se deixa ler em quatro segmentos, e cada um faz um trabalho diferente. O primeiro é {No princípio}, que é referência temporal. O segundo é {era o Verbo}, que coloca a existência do Verbo antes da criação narrada em Gênesis 1:1. O terceiro é {e o Verbo estava com Deus}, que é relação de companhia. O quarto é {e o Verbo era Deus}, que é a única afirmação de natureza do versículo.

A diferença entre o terceiro e o quarto é a que o tradutor não pode achatar. {estava com Deus} diz que o Verbo estava *ao lado de* Deus, e o grego {ἦν πρὸς τὸν θεόν} usa o verbo {ἦν} mais a preposição {πρός}, que é a preposição de presença e companhia. {era Deus} diz o que o Verbo *é*, e é a afirmação que o versículo existe para fazer.

## O tempo que faz o versículo

{era} ({ἦν}) é **imperfeito** no grego, e o imperfeito descreve existência contínua: o Verbo estava, continuava estando, e o tempo verbal não marca fim. O verbo da criação, ao lado, é {ἐγένετο} ({foi}), que é **aoristo** e marca o evento delimitado: algo aconteceu num ponto.

É por isso que o versículo alterna os dois: {era} para o que não começou, {foi} para o que começou. Traduzir os dois por {era} apaga o contraste e faz o versículo dizer que a criação também é eterna, que é justamente o que o texto não diz.

## O artigo que o grego traz e o que ele não traz

No mesmo versículo o grego age de dois modos. {ὁ λόγος} vem com artigo, e {o Verbo} precisa dele: sem artigo, {o Verbo} viraria {um verbo}, que é outra frase. {θεός} vem sem artigo, e {Deus} fica sem artigo também: escrever {o Deus} mudaria o que o grego afirma.

Quem traduz preserva o artigo onde o grego põe e omite onde o grego omite. Não é o português que decide, é o grego.

## O que vem depois

Em 1.14, {se fez carne} usa {se fazer} mais infinitivo, e vale “tornou-se”: não é voz passiva, é uma perífrase de mudança de estado. {habitou} ({σκήνωσεν}) evoca a tenda do tabernáculo, e a imagem é a de Deus acampando no meio do seu povo. Em 1.5, a luz e as trevas estão personificadas, e o verbo {brilha} está no presente, o que faz a oposição continuar enquanto o versículo durar.

## O que ler

Leia o versículo em quatro blocos e escreva ao lado de cada um o que ele faz: data, existência, companhia, natureza. Em seguida, marque o tempo de cada verbo e diga qual dos dois é o que continua. Se os dois lados da pergunta responderem {era}, o problema está no tempo, e não na tradução.`),
  vocab: [
    V('princípio', 'princípio', 'princípio'),
    V('Verbo', 'verbo', 'Verbo; Logos'),
    V('estava', 'estar', 'estava'),
    V('com', 'com', 'com'),
    V('carne', 'carne', 'carne'),
    V('habitou', 'habitar', 'habitou'),
    V('trevas', 'trevas', 'trevas'),
    V('luz', 'luz', 'luz'),
    V('graça', 'graça', 'graça'),
    V('glória', 'glória', 'glória'),
    V('Logos', 'Logos', 'Logos (grego λόγος)'),
    V('era', 'ser', 'era (imperfeito de ser)'),
    V('Deus', 'Deus', 'Deus'),
    V('vida', 'vida', 'vida'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: “No princípio, ___ o Verbo”.'),
    answer: 'era',
    hint: T('Forma de estar no passado narrado.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('O que {Logos} significa nesta passagem?'),
      options: [
        T('Um discurso humano'),
        T('A Palavra que se fez carne'),
        T('Uma ideia abstrata'),
        T('Uma palavra escrita apenas'),
      ],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('Em “se fez carne”, {se fazer} significa:'),
      options: [T('foi feito'), T('tornou-se'), T('deveria fazer'), T('está fazendo')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Ligue a palavra ao sentido.'),
      pairs: [
        { a: T('trevas'), b: T('oposição à luz') },
        { a: T('graça'), b: T('favor de Deus') },
        { a: T('carne'), b: T('human nature assumed') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O grego traz artigo em {ὁ λόγος} e o português escreve {o Verbo}; sem o artigo, {o Verbo} viraria {um verbo}, e a frase mudaria.',
      ),
    },
    {
      n: '§2',
      text: T(
        'O grego não traz artigo em {θεός}, e {Deus} fica sem artigo: escrever {o Deus} mudaria o que o versículo afirma sobre o Verbo.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{ἦν} ({era}) é imperfeito e {ἐγένετο} ({foi}) é aoristo: o primeiro descreve o que continua, o segundo o que aconteceu num ponto. Traduzir os dois por {era} apaga o contraste com Gênesis 1.1.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{se fazer} mais infinitivo vale “tornar-se”: {se fez carne} não é passiva, e quem traduz por {foi feito} errou a perífrase.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{ἦν πρὸς τὸν θεόν} usa a preposição {πρός}, que é companhia, e não {μετά}, que é “com” no sentido de junto: é a diferença entre {estava com Deus} e {estava entre Deus}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Intertextualidade'),
      text: T(
        '{No princípio} ecoa Gênesis 1:1, e {habitou} ({σκήνωσεν}) evoca o tabernáculo do Êxodo, onde Deus acampou no meio do povo.',
      ),
    },
    {
      label: T('Por que este versículo'),
      text: T(
        'É o único lugar da Bíblia em que o Verbo aparece sozinho como sujeito de uma afirmação de natureza. Quem lê a versão grega precisa da segunda pessoa de {ἦν} ({era} tu) para ver a afirmação completa.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio era o Verbo.',
      gloss: T('Imperfeito: o Verbo estava e continuava estando.'),
    },
    { text: 'E o Verbo era Deus.', gloss: T('θεός sem artigo, e {Deus} fica sem artigo.') },
    { text: 'E o Verbo estava com Deus.', gloss: T('{πρός}: companhia, não “entre”.') },
    {
      text: 'Todas as coisas foram feitas por ele.',
      gloss: T('{ἐγένετο}: aoristo, o que começou.'),
    },
    {
      text: 'E sem ele nada foi feito.',
      gloss: T('A negação com {μή}, não {οὐ}: a mesma frase com {οὐ}.'),
    },
    { text: 'O Verbo se fez carne.', gloss: T('{se fazer} mais infinitivo: “tornou-se”.') },
    { text: 'E habitou entre nós.', gloss: T('{σκήνωσεν}: a tenda do tabernáculo.') },
    {
      text: 'E viu a glória de Deus.',
      gloss: T('{δε} tem uso exclusivante: “não outro”, como no {não vi ninguém}.'),
    },
    { text: 'A luz brilha nas trevas.', gloss: T('Presente: o contraste continua.') },
  ],
  tables: [
    {
      caption: T('Os quatro blocos de João 1:1-3'),
      head: ['Segmento', 'Grego', 'O que faz'],
      rows: [
        ['No princípio', 'ἐν ἀρχῇ', 'data'],
        ['era o Verbo', 'ἦν ὁ λόγος', 'existência contínua'],
        ['estava com Deus', 'ἦν πρὸς τὸν θεόν', 'companhia'],
        ['era Deus', 'ἦν θεός', 'natureza'],
      ],
    },
    {
      caption: T('Os dois tempos que o versículo alterna'),
      head: ['Tempo', 'Grego', 'Português'],
      rows: [
        ['imperfeito', 'ἦν', 'era, estava'],
        ['aoristo', 'ἐγένετο', 'foi'],
        ['presente', 'φαίνει', 'brilha'],
      ],
    },
    {
      caption: T('Artigo: onde o grego põe e onde ele não põe'),
      head: ['Grego', 'Português', 'Se traduzir com artigo'],
      rows: [
        ['ὁ λόγος', 'o Verbo', 'vira “um verbo”'],
        ['θεός', 'Deus', 'vira “o Deus”'],
      ],
    },
  ],
};
