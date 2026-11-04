import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('Verbos no presente'),
  subtitle: T('parlare, leggere, finire'),
  section: T('Il nome e il verbo'),
  body: C(`## Três conjugações, um só método

Tire do infinitivo o que é terminação, {parl-are}, {legg-ere}, {fin-ire}, e junte o que sobra com **as seis terminações do presente**: {-o}, {-i}, {-a}, {-iamo}, {-ate}, {-ano}. {Parlo}, {parli}, {parla}, {parliamo}, {parlate}, {parlano}. A segunda conjugação, {-ere}, é idêntica e só muda o tema: {leggo}, {leggi}, {legge}, {leggiamo}, {leggete}, {leggono}. Decorado o método, metade dos verbos italianos já está.

A {-e} final do infinitivo **desaparece em todas as formas do presente**, e é por isso que o mesmo tema reaparece em todos os tempos. De {parlare} sobra {parl-}; de {leggere} sobra {legg-}, e o {g} dele se mantém diante de {-i} e {-e} mas cai diante de {-o} e {-a}, como em {mangiare}, que dá {mangio}.

## O {-ire} tem dois modelos

**A terceira conjugação se divide por um critério** que não precisa de memória: a forma do {io}. {Finire} usa {-isc-}, {finisco}, {finisci}, {finisce}, {finiamo}, {finite}, {finiscono}. {Partire} usa a forma regular, {parto}, {parti}, {parte}, {partiamo}, {partite}, {partono}. Os dois modelos convivem, e nenhum é mais correto que o outro.

O aviso está na sílaba tônica. Se o acento cai na penúltima, o verbo é do grupo {-isc-}, e o próprio {i} do infinitivo se alonga em {fin-ís-co}. Se cai na última, o verbo é regular, {pár-ti-re}. O mesmo princípio que organiza os verbos gregos em {-ω} e {-μι} decide aqui, e quem sabe gregos já sabe italiano neste ponto.

Os irregulares fogem quase sempre só no {io}: {leggo} de {leggere}, {prendo} de {prendere}, {faccio} de {fare}, {dico} de {dire}. Aprendido o irregular, o resto do paradigma é o regular com a vogal trocada.

## O presente também é hábito

{Studio italiano ogni giorno} é «estudo italiano todos os dias». O italiano não tem tempo dedicado ao hábito, e usa o presente para o passado costumeiro: um grego diria dois tempos onde o italiano diz um. Num texto bíblico isso aparece o tempo todo, e é por isso que a tradução literal erra tanto.

## O que ler

Ao ver um presente italiano num texto bíblico, pergunte o que o contexto pede: um fato em curso ou um hábito? A resposta muda a tradução mais do que a forma.`),
  vocab: [
    V('parlare', 'parlare', 'falar'),
    V('parlo', 'parlare', 'eu falo'),
    V('leggere', 'leggere', 'ler'),
    V('leggo', 'leggere', 'eu leio'),
    V('finire', 'finire', 'terminar'),
    V('finisco', 'finire', 'eu termino'),
    V('mangiare', 'mangiare', 'comer'),
    V('mangio', 'mangiare', 'eu como'),
    V('partire', 'partire', 'partir'),
    V('parto', 'partire', 'eu parto'),
    V('prendere', 'prendere', 'pegar, tomar'),
    V('dormire', 'dormire', 'dormir'),
    V('Vangelo', 'Vangelo', 'Evangelho'),
    V('Verbo', 'verbo', 'Verbo (Logos)'),
    V('mondo', 'mondo', 'mundo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a forma de io de leggere?'),
    options: [T('leggi'), T('leggo'), T('legge'), T('leggono')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: noi ___ (parlare)'),
      answer: 'parliamo',
      hint: T('Noi + -iamo'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase expressa hábito?'),
      options: [
        T('Mangio una mela.'),
        T('Mangio una mela ogni giorno.'),
        T('Ho mangiato la mela.'),
        T('Mangiavo la mela ieri.'),
      ],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Forme o io de finire: ___'),
      answer: 'finisco',
      hint: T('Modelo -isc-.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'As terminações do presente são {-o}, {-i}, {-a}, {-iamo}, {-ate}, {-ano}: {parlo}, {parli}, {parla}, {parliamo}, {parlate}, {parlano}.',
      ),
    },
    {
      n: '2',
      text: T(
        'O infinitivo perde a vogal final: {parl-are} dá {parlo} e {parl-ano} dá {parlano}, e sobra o tema.',
      ),
    },
    {
      n: '3',
      text: T(
        'No grupo {-ire} a forma do {io} decide a conjugação: {finisco} traz {-isc-}, {parto} não traz.',
      ),
    },
    {
      n: '4',
      text: T(
        'A sílaba tônica avisa: acento na penúltima ({fi-nís-co}) pede {-isc-}, acento na última ({pár-ti-re}) dá a forma regular.',
      ),
    },
    {
      n: '5',
      text: T(
        'Com {tu} há duas formas de segunda pessoa, {leggi} e {leggiti}; a primeira é a do texto bíblico.',
      ),
    },
  ],
  notes: [
    {
      label: T('A {-e} que some'),
      text: T(
        'No presente a terminação não tem vogal final: {parlare} dá {parlo} e {partire} dá {parto}, nunca {parloo}. O mesmo tema serve a todos os tempos, e é dele que se parte para o futuro, {parlerò}, e para o condicional, {parlerei}.',
      ),
    },
    {
      label: T('Hábito no presente'),
      text: T(
        'Um grego distingue o que acontecia de vez em quando do que acontecia sempre; o italiano usa o presente para os dois. Traduzir {venne} como «vinha» acerta o sentido e erra o tempo, porque {venne} é passado prossimo e {veniva} é imperfeito.',
      ),
    },
  ],
  examples: [
    { text: 'Parlo ogni giorno.', gloss: T('Falo todos os dias.') },
    { text: 'Leggi il Vangelo.', gloss: T('Lês o Evangelho.') },
    { text: 'Finisco il lavoro.', gloss: T('Termino o trabalho.') },
    { text: 'Partiamo adesso.', gloss: T('Partimos agora.') },
    { text: 'Maria mangia una mela.', gloss: T('Maria come uma maçã.') },
    { text: 'Noi leggiamo le Scritture.', gloss: T('Nós lemos as Escrituras.') },
    { text: 'Dio parla al suo servo.', gloss: T('Deus fala com o seu servo.') },
    { text: 'Il maestro spiega la lezione.', gloss: T('O mestre explica a lição.') },
  ],
  tables: [
    {
      caption: T('Presente regular'),
      head: ['Persona', '-are', '-ere', '-ire (finire)', '-ire (partire)'],
      rows: [
        ['io', 'parlo', 'leggo', 'finisco', 'parto'],
        ['tu', 'parli', 'leggi', 'finisci', 'parti'],
        ['lui/lei', 'parla', 'legge', 'finisce', 'parte'],
        ['noi', 'parliamo', 'leggiamo', 'finiamo', 'partiamo'],
        ['voi', 'parlate', 'leggete', 'finite', 'partite'],
        ['loro', 'parlano', 'leggono', 'finiscono', 'partono'],
      ],
    },
    {
      caption: T('O tema e a vogal final'),
      head: ['Infinitivo', 'Tema', 'io', 'loro'],
      rows: [
        ['parlare', 'parl-', 'parlo', 'parlano'],
        ['leggere', 'legg-', 'leggo', 'leggono'],
        ['finire', 'fin-', 'finisco', 'finiscono'],
        ['partire', 'part-', 'parto', 'partono'],
        ['dormire', 'dorm-', 'dormo', 'dormono'],
      ],
    },
  ],
};
