import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Pronomes relativos'),
  subtitle: T('che, cui, il quale, dove'),
  section: T('Os pronomes e a passiva'),
  body: C(`## {Che}: o relativo que faz quase tudo

{che} é **o relativo mais comum do italiano**: «il libro che leggo», «la luce che splende». Indica pessoa ou coisa e **não muda, nem de gênero nem de número**. Se a frase é {le ragazze che studiano}, o {che} não vira feminino nem plural. Quem flexiona o relativo italiano escreve errado.

O mais importante é o que {che} faz dentro da oração: em {l’uomo che vedi è mio amico}, o {che} é sujeito da relativa. Compare {la casa che abito} (a casa = sujeito) com {la casa che costruisco} (a casa = objeto). A mesma palavra, posições diferentes, e a tradução muda: «a casa que eu moro» e «a casa que eu construo».

## {Cui}: o relativo que não flexiona

Depois de uma preposição, o italiano quase sempre usa {cui} e não {che}: {l’uomo con cui parlo}, {il Dio a cui servo}. {cui} funciona para pessoas e para coisas, e também é invariável. E, como {che}, pode ser sujeito ou objeto: {la donna di cui parlavo}.

{cui} é **a forma que soa mais literária e mais bíblica**. Nos textos de João é comum ver {il Verbo che era presso di Dio} (πρὸς τὸν θεόν), e se o tradutor escreve {il quale} onde havia {che}, o leitor percebe que a tradução está mais formal que o grego.

## {Il quale}: a forma que flexiona

{il quale} é o relativo formal e o único que concorda com o antecedente: {il quale}, {la quale}, {i quali}, {le quali}. É útil quando há preposição ou quando a frase precisa de peso: {la legge, la quale fu data da Mosè}. O português perderia o gênero; o italiano mantém.

{chi} pode substituir um antecedente humano com sentido genérico: {chi crede}, «quem crê». {dove} indica lugar, {la casa dove nacque}, e {donde} indica origem, {la terra donde venne}.

## O que ler

Ao ver {che}, pergunte se o antecedente é sujeito ou objeto da relativa, porque a tradução depende disso. Ao ver {cui} depois de preposição, lembre que é a forma padrão e não um erro. E {il quale} é a escolha quando a frase é solene; num texto simples, forçar {il quale} soa estranho.`),
  vocab: [
    V('che', 'che', 'que'),
    V('cui', 'cui', 'a quem/ao qual'),
    V('il quale', 'quale', 'o qual'),
    V('chi', 'chi', 'quem'),
    V('dove', 'dove', 'onde'),
    V('donde', 'donde', 'de onde'),
    V('legge', 'leggere', 'lê'),
    V('splende', 'splendere', 'brilha'),
    V('casa', 'casa', 'casa'),
    V('uomo', 'uomo', 'homem'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: l’uomo con ___ parlo'),
    answer: 'cui',
    hint: T('É relativo após preposição.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual relativo completa: il libro ___ leggo?'),
      options: [T('che'), T('cui'), T('chi'), T('dove')],
      answer: 0,
    },
    {
      kind: 'choose',
      prompt: T('Qual frase usa il quale corretamente?'),
      options: [
        T('La casa la quale abito.'),
        T('La casa in la quale abito.'),
        T('La casa dove abito.'),
        T('La casa cui abito.'),
      ],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: Gesù, ___ abiti?'),
      answer: 'dove',
      hint: T('Indica lugar.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Che} não flexiona: em {le ragazze che studiano} o relativo continua {che}, sem gênero nem número.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Che} pode ser sujeito ou objeto, e a posição decide: {la casa che abito} contra {la casa che costruisco}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Depois de preposição o italiano usa {cui} e não {che}: {l’uomo con cui parlo}, {il Dio a cui servo}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Il quale} flexiona com o antecedente: {il quale}, {la quale}, {i quali}, {le quali}.',
      ),
    },
    {
      n: '5',
      text: T(
        '{Dove} marca lugar, {donde} marca origem e {chi} marca pessoa: {la casa dove nacque}, {la terra donde venne}.',
      ),
    },
  ],
  notes: [
    {
      label: T('A preposição não some'),
      text: T(
        '{Il ragazzo di cui parlo}: a preposição {di} é obrigatória, porque {cui} é um relativo e não um substantivo. Esquecer a preposição muda a relação inteira e não só a gramática.',
      ),
    },
    {
      label: T('{Cui} é a forma de João'),
      text: T(
        '{cui} soa mais literária e mais bíblica. Nos textos de João é comum ver {il Verbo che era presso di Dio} (πρὸς τὸν θεόν), e trocar {che} por {il quale} sem necessidade faz a tradução parecer mais formal do que o grego.',
      ),
    },
  ],
  examples: [
    { text: 'Il libro che leggo.', gloss: T('O livro que eu leio.') },
    { text: 'L’uomo che vedi è mio amico.', gloss: T('O homem que você vê é meu amigo.') },
    { text: 'La casa che abito.', gloss: T('A casa que eu moro.') },
    { text: 'La casa che costruisco.', gloss: T('A casa que eu construo.') },
    { text: 'L’uomo con cui parlo.', gloss: T('O homem com quem eu falo.') },
    { text: 'La legge, la quale fu data da Mosè.', gloss: T('A lei, que foi dada por Moisés.') },
    { text: 'Cerchi chi cerca, trova.', gloss: T('Quem busca, encontra.') },
    { text: 'La casa dove nacque.', gloss: T('A casa onde ele nasceu.') },
  ],
  tables: [
    {
      caption: T('Escolha do relativo'),
      head: ['Contesto', 'Relativo'],
      rows: [
        ['senza preposizione', 'che'],
        ['dopo preposizione', 'cui'],
        ['formale e flessuibile', 'il quale'],
        ['luogo', 'dove'],
        ['origine', 'donde'],
        ['persona', 'chi'],
      ],
    },
    {
      caption: T('O que {che} marca na relativa'),
      head: ['Frase', 'Funzione'],
      rows: [
        ['l’uomo che vedo', 'soggetto della relativa'],
        ['il libro che vedo', 'oggetto della relativa'],
        ['la casa che abito', 'abito nella casa'],
        ['la casa che costruisco', 'costruisco la casa'],
        ['l’amico di cui parlo', 'preposizione + relativo'],
        ['la casa dove nacque', 'luogo'],
      ],
    },
  ],
};
