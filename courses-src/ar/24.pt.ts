import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Partículas de lugar, origem e companhia'),
  subtitle: T('مِنْ، فِي، عَلَى، إِلَى، عَنْ، مَعَ، حَتَّى'),
  section: T('Partículas'),
  body: C(`## As sete e o que cada uma exige

As sete regem todas o genitivo, e por isso a terminação do nome regido já entrega a informação. O que muda entre elas não é o caso, é o tipo de complemento que cada uma pede, e é isso que decide qual usar.

{مِنْ} pede origem: {مِنَ الْبَيْتِ}. {فِي} pede lugar ou tempo: {فِي الْبَيْتِ}, {فِي يَوْمِ}. {عَلَى} pede superfície, apoio ou abstração: {عَلَى الْمَجَلِسِ}, {عَلَى الْحَقِّ}. {إِلَى} pede destino: {إِلَى الْبَيْتِ}. {عَنْ} pede afastamento ou assunto: {عَنِ الْبَيْتِ}, {عَنِ الْمَلِكِ}. {مَعَ} pede companhia. {حَتَّى} pede limite, e o limite pode ser de espaço ou de tempo.

A distinção que mais importa na prática é a que separa {فِي} de {عَلَى}. {فِي} é interior, {عَلَى} é superfície: {فِي الْقَارُورَةِ} e {عَلَى الْمَائِدَةِ}. Uma tradução que troca as duas produz uma frase que não é falsa em nenhuma palavra e não está em nenhum lugar.

## As construções de cada uma

Cada partícula tem um uso em que é especialmente provável, e é nesse uso que ela aparece com mais frequência no texto antigo.

{مِنْ} antes de um nome verbal indica origem, causa ou separação, e é por isso que ela significa "por" em {مِنْ قَوْلِهِ} e "de" em {مِنْ أَبِيهِ}. {حَتَّى} com lugar dá {حَتَّى مَطْلَعِ الْفَجْرِ}, e com tempo dá {حَتَّى لَمَّا}. {عَنْ} tem um segundo sentido que é o mais útil em tradução: {عَنْهُ} com o pronome significa "sobre ele", no sentido de assunto.

E há um segundo conjunto, menor e mais difícil, que faz o mesmo trabalho: {بِـ}, {لِـ} e {كَـ}. {بِـ} é {فِي} abreviado, como em {بِذَاكَ}, "por aquilo". {كَـ} é {مِثْلَ} abreviado, como em {كَذَا}, "assim". {لِـ} é a partícula de posse, e vale "ter", "para", "de". Quem conhece apenas as sete longas perde metade das preposições que encontra no texto.

## A partícula que muda de caso

E aqui está a exceção, que merece um capítulo próprio porque é o único ponto em que o sistema de casos falha.

**{مَعَ} muda de caso conforme o pronome que segue.** Com {هُوَ} vem {مَعَهُ}, com {هِيَ} vem {مَعَهَا}, e com {يَا} vem {مَعَكَ} no acusativo e {مَعَكِ} no genitivo. Com pronomes de plural a forma é {مَعَهُمْ} e {مَعَهُنَّ}, sempre no genitivo. São seis formas para uma preposição só, e o contexto decide.

O motivo está na história da língua: {مَعَ} era um substantivo que significa "companhia", e substantivo regido vai para o genitivo. O acusativo sobreviveu em algumas formas, e é por isso que a lista é irregular em vez de ser limpa.

A segunda coisa que {مَعَ} faz é virar verbo. Em {سَافَرَ مَعَهُ} a palavra que era preposição aparece como verbo, e o sentido é o mesmo: "viajou com ele". Quem procura uma partícula abstrata no texto bíblico encontra um verbo, e a tradução continua correta.

Por fim, {حَتَّى} tem três vidas. É preposição com limite de espaço, é advérbio com "até que" e é verbo com "até". O português precisaria de três palavras para as três coisas, e o árabe precisa de uma.

## Critério de leitura

Em {أَسْعَدُ الرَّجُلِ الَّذِي لَمْ يَسْلُكْ فِي مَشُورَةِ الأَشْرَارِ وَفِي طَرِيقِ الْخُطَاةِ لَمْ يَقِفْ} há a mesma partícula {فِي} três vezes, e o que muda é o complemento: {مَشُورَةِ} é conselho, {طَرِيقِ} é caminho, e o contexto pede {مَقْعَدِ} na terceira. Quem traduziu {فِي} por "dentro de" nas três vai dizer que o homem não entrou no conselho, na estrada e na sala. Quem traduziu por "em" acertou as três, porque a partícula não diz mais do que isso.`),
  vocab: [
    V('مِنْ', 'من', 'de; desde; por'),
    V('فِي', 'في', 'em; dentro de'),
    V('عَلَى', 'على', 'sobre; em cima de'),
    V('إِلَى', 'إلى', 'a; até'),
    V('عَنْ', 'عن', 'de; a respeito de'),
    V('مَعَ', 'مع', 'com'),
    V('حَتَّى', 'حتى', 'até; até que'),
    V('بِـ', 'في', 'partícula abreviada, equivalente a {فِي}'),
    V('لِـ', 'إلى', 'partícula abreviada, de posse'),
    V('كَـ', 'مثل', 'partícula abreviada, como'),
    V('مَشُورَة', 'مشورة', 'conselho; assembleia'),
    V('طَرِيق', 'طريق', 'caminho'),
    V('مَقْعَد', 'مقعد', 'assento'),
    V('مَغْرِب', 'مغرب', 'poente'),
    V('قَوْلِهِ', 'قول', 'a palavra dele'),
    V('ذَاكَ', 'ذاك', 'aquilo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual partícula pede destino?'),
    options: [T('مِنْ'), T('فِي'), T('إِلَى'), 'عَنْ'],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a forma de {مَعَ} com o pronome {هُوَ}: ___'),
      answer: 'مَعَهُ',
      hint: T('Com o pronome de terceira pessoa o {مَعَ} recebe o sufixo.'),
    },
    {
      kind: 'match',
      prompt: T('Associe partícula e complemento.'),
      pairs: [
        { a: T('مِنْ'), b: T('origem') },
        { a: T('فِي'), b: T('lugar ou tempo') },
        { a: T('عَلَى'), b: T('superfície') },
        { a: T('إِلَى'), b: T('destino') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('O que {بِـ} é, em sua forma longa?'),
      options: [T('مِنْ'), T('مَعَ'), T('فِي'), 'إِلَى'],
      answer: 2,
    },
    {
      kind: 'choose',
      prompt: T('Em {مِنْ قَوْلِهِ}, o que {مِنْ} indica?'),
      options: [T('Origem, causa ou separação'), T('Destino'), T('Limite'), T('Companhia')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('As sete regem o genitivo; o que muda é o tipo de complemento que cada uma pede.'),
    },
    {
      n: '2',
      text: T(
        '**{فِي} pede lugar e tempo, {عَلَى} pede superfície e abstração, {إِلَى} pede destino, {عَنْ} pede assunto.**',
      ),
    },
    { n: '3', text: T('{مَعَ} é a única que muda de caso com pronomes: {مَعِي} e {مَعَهُ}.') },
    {
      n: '4',
      text: T(
        '{مِنْ} antes de um nome verbal indica origem, causa ou separação, e é por isso que também significa "por".',
      ),
    },
    { n: '5', text: T('{بِـ} e {كَـ} são {فِي} e {مِثْلَ} abreviados, e {لِـ} é a partícula de posse.') },
  ],
  notes: [
    {
      label: T('A partícula que também é verbo'),
      text: T(
        '{مَعَ} muda de preposição para verbo em muitas expressões, como em {سَافَرَ مَعَهُ}, "viajou com ele", e o sentido é o mesmo. Quem procura uma partícula abstrata no texto bíblico encontra um verbo, e a tradução continua correta.',
      ),
    },
    {
      label: T('Por que {مَعَ} é irregular'),
      text: T(
        '{مَعَ} era um substantivo que significa companhia, e um substantivo regido vai para o genitivo. O acusativo sobreviveu em algumas formas, e é por isso que as seis formas com pronomes não seguem um padrão limpo.',
      ),
    },
  ],
  examples: [
    { text: 'مِنَ الْبَيْتِ', gloss: T('da casa; origem') },
    { text: 'فِي الْبَيْتِ', gloss: T('em casa; lugar') },
    { text: 'فِي يَوْمِ', gloss: T('num dia; tempo') },
    { text: 'عَلَى الْمَجَلِسِ', gloss: T('sobre a assembleia') },
    { text: 'إِلَى ابْنِهِ', gloss: T('ao seu filho; destino') },
    { text: 'عَنِ الْمَلِكِ', gloss: T('sobre o rei; assunto') },
    { text: 'مَعَهُ', gloss: T('com ele') },
    { text: 'حَتَّى الْمَغْرِبِ', gloss: T('até o poente; limite de espaço') },
    { text: 'بِذَاكَ', gloss: T('por aquilo; a partícula abreviada') },
  ],
  tables: [
    {
      caption: T('As sete e o que pedem'),
      head: [T('Partícula'), T('Glosa'), T('Complemento'), T('Exemplo')],
      rows: [
        ['مِنْ', T('de; desde'), T('origem, parte, causa'), 'مِنَ الْبَيْتِ'],
        ['فِي', T('em; dentro'), T('lugar ou tempo'), 'فِي الْبَيْتِ'],
        ['عَلَى', T('sobre'), T('superfície, apoio, abstração'), 'عَلَى الْمَجَلِسِ'],
        ['إِلَى', T('a; até'), T('destino, direção, limite'), 'إِلَى الْبَيْتِ'],
        ['عَنْ', T('de; sobre'), T('afastamento, assunto'), 'عَنِ الْمَلِكِ'],
        ['مَعَ', T('com'), T('companhia'), 'مَعَهُ'],
        [T('حَتَّى'), T('até'), T('limite de espaço ou tempo'), 'حَتَّى الْمَغْرِبِ'],
      ],
    },
    {
      caption: T('As três partículas abreviadas'),
      head: [T('Forma'), T('Equivale a'), T('Exemplo'), T('Glosa')],
      rows: [
        ['بـ', 'فِي', 'بِذَاكَ', T('por aquilo')],
        ['لـ', 'إِلَى', 'لَهُ', T('para ele; dele')],
        ['كـ', 'مِثْلَ', 'كَذَا', T('assim; como aquilo')],
      ],
    },
    {
      caption: T('{مَعَ} e os pronomes'),
      head: [T('Pessoa'), T('Forma'), T('Caso'), T('Glosa')],
      rows: [
        [T('1ª'), 'مَعِي', T('genitivo'), T('conosco')],
        [T('2ª masc.'), 'مَعَكَ', T('acusativo'), T('contigo')],
        [T('2ª fem.'), 'مَعَكِ', T('genitivo'), T('contigo')],
        [T('3ª masc.'), 'مَعَهُ', T('genitivo'), T('com ele')],
        [T('3ª fem.'), 'مَعَهَا', T('genitivo'), T('com ela')],
        [T('plural masc.'), 'مَعَهُمْ', T('genitivo'), T('com eles')],
      ],
    },
  ],
};
