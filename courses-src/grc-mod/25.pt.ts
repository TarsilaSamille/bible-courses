import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  section: T('O verbo'),
  title: T('Três tempos e dois passados'),
  subtitle: T('γράφω — έγραψα — έχω γράψει — θα γράψω'),
  body: C(`## Três tempos, três palavras

O grego moderno tem três tempos e três construções distintas. O presente é {γράφω}, o passado é {έγραψα} e o futuro é {θα γράψω}. Nada se parece com nada, e é por isso que o grego aprende os verbos por lista e não por conjugação.

**O futuro é o mais fácil dos três**, porque não é um tempo: é uma partícula, {θα}, colada ao subjuntivo. O {θα} é o que marca o tempo, e {γράψω} é a mesma forma que aparece depois de {θέλω να}. Um falante que aprende {γράψω} aprende duas coisas de uma vez.

O passado é o que confunde. {έγραψα} é o aoristo grego, a forma que sobreviveu do grego antigo quase sem mudar. É o passado do evento: escrevi, e acabou.

## O aoristo foi aposentado pelo perfeito composto

O grego antigo tinha um tempo que o aoristo substituiu: o perfeito, que dizia «fiz e o efeito continua». Em grego moderno esse tempo foi acomodoado em uma locução: {έχω} mais o particípio. {έχω γράψει} é «tenho escrito», e o sentido original de perfect foi preservado palavra por palavra.

A locução é mais fácil que qualquer tempo fletido, porque a flexão está toda no {έχω}: {έχω}, {έχεις}, {έχει}, {έχουμε}, {έχετε} e {έχουν}. O resto é o particípio, e o particípio não flexiona.

## «Escrevi» tem duas formas e dois sentidos

Este é o ponto que resolve metade das dúvidas de leitura. {έγραψα} diz que houve uma escrita, e diz só isso. {έχω γράψει} diz que houve uma escrita e que o resultado continua valendo.

Em português os dois são «escrevi», e a distinção se perde. {Έχω γράψει το βιβλίο} quer dizer «o livro está escrito», com o resultado em primeiro plano. {Έγραψα το βιβλίο} quer dizer «escrevi o livro», com o ato em primeiro plano.

A pergunta que decide é: o que importa agora, o que aconteceu ou o que sobrou? Se o que importa é o estado, use {έχω} mais o particípio. Se importa o evento, use o aoristo.


{θα γράψω} é futuro e possibilidade ao mesmo tempo, e as duas leituras são a mesma forma. {Θα έρθει} pode ser «virá» ou «pode ser que venha». O contexto decide, e é o contexto que decide em português também.

Há uma terceira leitura, mais rara: {θα έχω γράψει}, «terei escrito». É o futuro do perfeito, e aparece quando o resultado é o que está em jogo.


## O tempo verbal na Escritura

> Ἐγὼ δὲ ἔγραψα ὑμῖν τὸ μυστήριον τοῦ θεοῦ.

{ἔγραψα} é o aoristo: eu escrevi, e o texto não faz questão de dizer que a carta continua por aí. É a escolha que o grego faz quando o evento basta. Uma carta que dissesse «tenho escrito» estaria falando de você, não da carta.

É essa a diferença que o grego antigo tem e o moderno não: em grego antigo o aoristo e o perfeito são categorias distintas e o tradutor precisa escolher. Em grego moderno o perfeito é uma locução e a escolha é entre {έγραψα} e {έχω γράψει}, que é a mesma escolha com palavras diferentes. `),
  vocab: [
    V('γράφω', 'γράφω', 'escrevo'),
    V('έγραψα', 'γράφω', 'escrevi'),
    V('έχω γράψει', 'γράφω', 'tenho escrito'),
    V('θα γράψω', 'γράφω', 'escreverei'),
    V('γράψω', 'γράφω', 'escrever (subjuntivo)'),
    V('έχω', 'έχω', 'tenho'),
    V('έχει', 'έχω', 'tem'),
    V('θα έρθει', 'έρχομαι', 'virá'),
    V('το βιβλίο', 'το βιβλίο', 'o livro'),
    V('γράφτηκε', 'γράφω', 'foi escrito'),
    V('θα έχω γράψει', 'γράφω', 'terei escrito'),
    V('θέλω να', 'θέλω', 'quero que'),
    V('το μυστήριο', 'το μυστήριο', 'o mistério'),
    V('ο Θεός', 'ο Θεός', 'Deus'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Os três tempos são três construções: γράφω (presente), έγραψα (passado), θα γράψω (futuro).',
      ),
    },
    { n: '§2', text: T('θα γράψω é partícula mais subjuntivo, não uma forma verbal própria.') },
    { n: '§3', text: T('O perfeito é έχω mais particípio, e a flexão está toda no έχω.') },
    {
      n: '§4',
      text: T('έγραψα diz o evento; έχω γράψει diz o evento e o resultado que continua.'),
    },
    { n: '§5', text: T('θα pode ser futuro ou possibilidade, e o contexto escolhe.') },
  ],
  notes: [
    {
      label: T('Herança'),
      text: T(
        'O futuro grego moderno é o futuro do grego antigo sem a s: λύσω deu γράψω. O grego guardou a forma, perdeu a flexão e ganhou a partícula θα.',
      ),
    },
    {
      label: T('Leitura'),
      text: T(
        'Ao traduzir um perfeito, pergunte se o texto está falando do ato ou do estado. Em João 3, «está escrito» e «escreveu» são palavras diferentes em grego e a escolha do tradutor muda o sentido da frase.',
      ),
    },
  ],
  examples: [
    { text: 'γράφω το βιβλίο', gloss: T('escrevo o livro') },
    { text: 'έγραψα το βιβλίο', gloss: T('escrevi o livro') },
    { text: 'έχω γράψει το βιβλίο', gloss: T('tenho escrito o livro') },
    { text: 'θα γράψω το βιβλίο', gloss: T('escreverei o livro') },
    { text: 'θα έχω γράψει', gloss: T('terei escrito') },
    { text: 'το βιβλίο γράφτηκε', gloss: T('o livro foi escrito') },
    { text: 'θα έρθει αύριο', gloss: T('virá amanhã') },
    { text: 'θέλω να γράψω', gloss: T('quero escrever') },
  ],
  tables: [
    {
      caption: T('Os três tempos'),
      head: ['Χρόνος', 'Μορφή', 'Κατασκευή'],
      rows: [
        ['ενεστώτας', 'γράφω', 'ρήμα ενεστώτα'],
        ['αόριστος', 'έγραψα', 'αόριστος'],
        ['μέλλοντας', 'θα γράψω', 'θα + υποτακτική'],
        ['μέλλοντας αποτελέσματος', 'θα έχω γράψει', 'θα + έχω + μετοχή'],
      ],
    },
    {
      caption: T('Dois passados'),
      head: ['Μορφή', 'Ερώτηση', 'Απάντηση'],
      rows: [
        ['έγραψα', 'τι έγινε;', 'η πράξη'],
        ['έχω γράψει', 'τι έμεινε;', 'η κατάσταση'],
      ],
    },
    {
      caption: T('O auxiliar do perfeito'),
      head: ['Πρόσωπο', 'έχω', 'Παράδειγμα'],
      rows: [
        ['εγώ', 'έχω', 'έχω γράψει'],
        ['εσύ', 'έχεις', 'έχεις γράψει'],
        ['αυτός', 'έχει', 'έχει γράψει'],
        ['εμείς', 'έχουμε', 'έχουμε γράψει'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual forma diz «tenho escrito»?'),
    options: [T('γράφω'), T('έγραψα'), T('έχω γράψει'), T('θα γράψω')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ γράφω το βιβλίο (futuro)'),
      answer: 'Θα',
      hint: T('Primeira letra maiúscula'),
    },
    {
      kind: 'choose',
      prompt: T('Em «θα έρθει», o que θα pode significar?'),
      options: [T('só futuro'), T('só possibilidade'), T('futuro ou possibilidade'), T('negação')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Tempo e forma'),
      pairs: [
        { a: 'γράφω', b: T('presente') },
        { a: 'έγραψα', b: T('passado do evento') },
        { a: 'έχω γράψει', b: T('passado do estado') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('έχω ___ (particípio de γράφω, «escrito»)'),
      answer: 'γράψει',
      hint: T('Sem acento: é particípio'),
    },
  ],
};
