import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('Os conectivos'),
  title: T('Conjunções: subordinantes'),
  subtitle: T('porque, embora, para que, e o regime que cada uma exige'),
  body: C(`## Causa e consequência

Causa responde a por quê: {porque}, {como}, {já que}, {visto que}, {uma vez que}, {pois que}. A diferença entre elas é de registro e de posição, não de sentido: {porque} pode abrir a frase ou vir depois do verbo, e as outras quase só abrem.

Consequência responde a e então: {por isso}, {de sorte que}, {de modo que}, {portanto}, {por conseguinte}. O grego resolve essas com duas partículas, {διό} e {ἄρα}, e o português escolhe qual palavra usar.

## Condição e concessão

Condição: {se}, {caso}, {salvo que}, {desde que}, {conforme}, {dado que}. Concessão: {embora}, {ainda que}, {mesmo que}, {se bem que}, {por mais que}, {conquanto}. As duas põem o fato no mesmo plano e se opõem por palavras diferentes.

O ponto que mais custa é a regra de {embora}. A conjunção concessiva {embora} **não admite {que} nem verbo conjugado**: escreve-se {embora fosse}, nunca {embora que fosse}. Quando a frase é mais longa, o verbo vai para o subjuntivo e a conjunção sai: {Ainda que fosse difícil, ele foi}. O grego, que é uma palavra só, não tem essa proibição.

## Finalidade, tempo e comparação

Finalidade: {para que}, {a fim de que}, {com}, {para} mais infinitivo. Tempo: {quando}, {enquanto}, {antes que}, {depois que}, {assim que}, {logo que}. Comparação: {como}, {do que}, {que}. Conformidade: {conforme}, {segundo}, {como}.

O que muda entre elas é o tempo do verbo: {quando eu vier} é futuro do subjuntivo, {quando eu vim} é pretérito; {depois que eu vier} também é futuro, e é essa diferença que {depois} faz; {enquanto} pede presente, {enquanto eu vivia}.

## O que ler

Em qualquer subordinada, pergunte: qual é o valor, causa, consequência, condição, concessão, finalidade, tempo, comparação ou conformidade? E o verbo está no indicativo, no subjuntivo ou no infinitivo? E a conjunção permite {que} ou exige verbo direto?

João 3.16 traz {para que todo aquele que crê nele não pereça}: é finalidade, e a preposição {para} mais {que} é a marca. O grego põe ὅπως no mesmo lugar, e o português traduziu por {para que}, que é a forma que torna a finalidade visível na frase.`),
  vocab: [
    V('porque', 'porque', 'porque'),
    V('como', 'como', 'como (causa)'),
    V('por isso', 'isso', 'por isso'),
    V('de sorte que', 'sorte', 'de sorte que'),
    V('se', 'se', 'se (condição)'),
    V('caso', 'caso', 'caso'),
    V('embora', 'embora', 'embora'),
    V('ainda que', 'ainda', 'ainda que'),
    V('mesmo que', 'mesmo', 'mesmo que'),
    V('para que', 'para', 'para que'),
    V('a fim de que', 'fim', 'a fim de que'),
    V('quando', 'quando', 'quando'),
    V('enquanto', 'enquanto', 'enquanto'),
    V('depois que', 'depois', 'depois que'),
    V('conforme', 'conforme', 'conforme'),
    V('segundo', 'segundo', 'segundo'),
    V('a concessão', 'concessão', 'a concessão'),
    V('a finalidade', 'finalidade', 'a finalidade'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Causa: {porque}, {como}, {já que}, {visto que}, {uma vez que}. Consequência: {por isso}, {de sorte que}, {portanto}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{Embora} não admite {que} nem verbo conjugado: {embora fosse}, nunca {embora que fosse}.',
      ),
    },
    {
      n: '§3',
      text: T('Condição e concessão admitem verbo no subjuntivo: {se vier}, {ainda que fosse}.'),
    },
    {
      n: '§4',
      text: T('Tempo muda o verbo: {quando eu vier} é futuro, {quando eu vim} é pretérito.'),
    },
    {
      n: '§5',
      text: T('Conformidade: {conforme}, {segundo}, {como}; comparação: {como}, {do que}, {que}.'),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'O grego marca cada valor com uma partícula distinta ({ὅτι}, {ἵνα}, {εἰ}, {ἀν}, {ὡς}, {ὅπως}, {καθώς}) e o hebraico usa construções com partículas ({כִּי}, {לְמַעַן}, {אִם}). O português usa uma palavra para cada valor, e a tradução escolhe qual.',
      ),
    },
    {
      label: T('Onde o grego é mais econômico'),
      text: T(
        'Onde o grego diz {ἵνα} mais subjuntivo, o português diz {para que} mais subjuntivo: são duas palavras por uma. Onde o grego diz {εἰ} mais indicativo, o português diz {se} mais subjuntivo, e o verbo muda de tempo.',
      ),
    },
  ],
  examples: [
    { text: 'Não vi, porque chovia.', gloss: T('Causa com {porque} depois do verbo.') },
    { text: 'Chovia; por isso não saímos.', gloss: T('Consequência com {por isso}.') },
    { text: 'Se vier, avise-me.', gloss: T('Condição com verbo no subjuntivo.') },
    { text: 'Embora fosse difícil, ele foi.', gloss: T('Concessão sem {que}: é a regra.') },
    { text: 'Ainda que fosse difícil, ele foi.', gloss: T('A mesma ideia com outra conjunção.') },
    { text: 'Vem para que eu te veja.', gloss: T('Finalidade com {para que} mais subjuntivo.') },
    { text: 'Quando eu vier, aviso.', gloss: T('Tempo: futuro do subjuntivo.') },
    { text: 'Conforme o testemunho, basta.', gloss: T('Conformidade com {conforme}.') },
  ],
  tables: [
    {
      caption: T('Os valores e suas palavras'),
      head: ['Valor', 'Conjunções'],
      rows: [
        ['causa', 'porque, como, já que, visto que'],
        ['consequência', 'por isso, de sorte que, portanto'],
        ['condição', 'se, caso, salvo que, desde que'],
        ['concessão', 'embora, ainda que, mesmo que, por mais que'],
        ['finalidade', 'para que, a fim de que, com'],
        ['tempo', 'quando, enquanto, antes que, depois que, assim que'],
        ['comparação', 'como, do que, que'],
        ['conformidade', 'conforme, segundo, como'],
      ],
    },
    {
      caption: T('O regime de cada uma'),
      head: ['Conjunção', 'O que vem depois'],
      rows: [
        ['porque', 'indicativo ou qualquer tempo'],
        ['se', 'futuro do subjuntivo ou imperfeito'],
        ['embora', 'subjuntivo, sem que'],
        ['para que', 'subjuntivo'],
        ['quando', 'futuro do subjuntivo no futuro'],
        ['como', 'indicativo'],
      ],
    },
    {
      caption: T('Concessivas e o verbo'),
      head: ['Forma', 'Verbo', 'Correto?'],
      rows: [
        ['embora', 'fosse', 'sim'],
        ['embora que', 'fosse', 'não'],
        ['ainda que', 'fosse', 'sim'],
        ['mesmo que', 'fosse', 'sim'],
        ['por mais que', 'fosse', 'sim'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual construção está correta?'),
    options: [
      T('embora fosse difícil'),
      T('embora que fosse difícil'),
      T('embora que difícil fosse'),
      T('embora difícil que fosse'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{para que} exige verbo no ______.'),
      answer: 'subjuntivo',
      hint: T('É a marca da finalidade.'),
    },
    {
      kind: 'choose',
      prompt: T('Em “conforme o testemunho”, {conforme} é:'),
      options: [T('conformidade'), T('causa'), T('concessão'), T('comparação')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue a conjunção ao valor.'),
      pairs: [
        { a: T('porque'), b: T('causa') },
        { a: T('embora'), b: T('concessão') },
        { a: T('para que'), b: T('finalidade') },
        { a: T('conforme'), b: T('conformidade') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
