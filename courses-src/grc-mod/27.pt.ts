import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('O verbo'),
  title: T('Onde a negação fica em cada tempo'),
  subtitle: T('δεν έγραψα — δεν έχω γράψει — δεν θα γράψω'),
  body: C(`## A negação entra no tempo, não antes dele

Em português a negação é uma palavra fixa que vai antes do verbo: «não escrevo», «não escrevi», «não escreverei». Em grego também, e por isso parece igual. A diferença está no que acontece com o tempo verbal.

No presente e no aoristo, {δεν} vai direto antes do verbo: {δεν γράφω}, {δεν έγραψα}. No futuro, {δεν} vai antes de {θα}, e {θα} continua com o verbo: {δεν θα γράψω}. No perfeito, {δεν} entra no lugar do auxiliar.

**O padrão é o mesmo nos três**: **a negação ocupa a posição mais à esquerda que a construção verbal deixa livre**. Em {δεν θα γράψω}, o {δεν} não está antes de {γράψω}, está antes de {θα}. E em {δεν έχω γράψει}, o {δεν} entrou no meio da locução.

## No futuro, δεν governa θα

O futuro não é um verbo, é uma partícula, e a partícula é a primeira coisa que a frase encontra. Por isso {δεν} vai antes dela: {δεν θα γράψω}.

Um aprendiz vindo do português escreve {θα δεν γράψω}, que é a ordem que o português sugere e que ninguém diz. A regra é que o que vem primeiro na locução recebe a negação, e no futuro a locução começa em {θα}.

Quem escreve {δέν θα γράψω} com acento não está errado: {δέν} é a forma enfática e a mais comum na fala. O acento muda o tom e não a gramática.

## No perfeito, δεν ocupa o lugar do auxiliar

Aqui está a construção que parece impossível e não é. {έχω γράψει} é o perfeito, e a forma negativa é {δεν έχω γράψει}. O {δεν} não substitui o {έχω}: ele fica antes dele.

Mas há um outro lugar, e é o que o português usa: {δεν έχω} é a forma comum, e a locução inteira fica depois. {Δεν έχω γράψει} é o mesmo que {ούκ ἔχω γεγραμένον}, e o grego antigo também colocava a negativa antes do auxiliar.

O que o grego moderno fez foi fundir as duas coisas: como o {έχω} é o auxiliar do presente, {δεν έχω} é também a negação do presente comum. {Δεν έχω χρήματα}, «não tenho dinheiro». O mesmo par serve para dois sentidos.


A negação do indicativo é {δεν}. A negação do subjuntivo é {μην}, e ela vem depois de {να}: {να μην έρθει}, «que não venha». Nenhuma troca entre as duas é possível: {δεν να} e {μην θα} são frases que ninguém diz.

Em registro escrito, {δεν} tem duas grafias, {μην} e {μη}, conforme o som do verbo que vem depois. A escolha é de pronúncia, não de sentido, e em texto é previsível pelo contexto.


## Onde a negação está na Escritura

> Καὶ λέγει αὐτῷ ὁ Ἰησοῦς· Τί σὲ λέγεις ἀσθενεῖν; ἀνάστηθι, ἆρον τὸν κράβαττόν σου καὶ περιπάτει.

Há três negativas diferentes nesse trecho da Escritura. {μή} com {λέγεις}, que é o relevo da pergunta incrédula. {Τί} com o verbo understood, que é a pergunta «por quê». E as duas negativas que não são, na verdade, negativa.

O que o grego faz é colocar a negativa no verbo que ela nega, e não na oração. Em {Ἄν τις θέλει}, a {ἂν} é a marca do subjuntivo e {οὐδείς} seria a negativa do substantivo. Uma frase pode ter duas negativas de espécies diferentes, e é por isso que a posição importa mais do que a palavra. `),
  vocab: [
    V('δεν γράφω', 'γράφω', 'não escrevo'),
    V('δεν έγραψα', 'γράφω', 'não escrevi'),
    V('δεν έχω γράψει', 'γράφω', 'não tenho escrito'),
    V('δεν θα γράψω', 'γράφω', 'não escreverei'),
    V('θα δεν γράψω', 'γράφω', 'ordem incorreta'),
    V('δέν', 'δεν', 'não (enfático)'),
    V('δεν έχω', 'έχω', 'não tenho'),
    V('να μην', 'να μην', 'que não'),
    V('μην', 'μην', 'não (escrito)'),
    V('μη', 'μη', 'não (antes de vogal)'),
    V('θα', 'θα', 'vai (futuro)'),
    V('γράφω', 'γράφω', 'escrevo'),
    V('έρθει', 'έρχομαι', 'venha'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'A negação vai antes do verbo em todos os tempos, e o que vem primeiro na locução recebe o δεν.',
      ),
    },
    { n: '§2', text: T('No futuro, δεν governa θα: δεν θα γράψω, nunca θα δεν γράψω.') },
    { n: '§3', text: T('No perfeito, δεν fica antes do auxiliar: δεν έχω γράψει.') },
    { n: '§4', text: T('A negação do indicativo é δεν e a do subjuntivo é μην, depois de να.') },
  ],
  notes: [
    {
      label: T('Posição'),
      text: T(
        'O grego antigo permitia a negação depois do verbo em duas posições diferentes. O grego moderno não: a posição é fixa e anterior. Quem traduz do grego antigo para grego moderno tem de mover a palavra.',
      ),
    },
    {
      label: T('Ordem'),
      text: T(
        'O substantivo de uma oração negativa pode vir ou não vir, conforme o sentido: δεν έρχεται κανείς e κανείς δεν έρχεται querem dizer coisas diferentes. A posição do sujeito é a que informa.',
      ),
    },
  ],
  examples: [
    { text: 'δεν γράφω', gloss: T('não escrevo') },
    { text: 'δεν έγραψα', gloss: T('não escrevi') },
    { text: 'δεν έχω γράψει', gloss: T('não tenho escrito') },
    { text: 'δεν θα γράψω', gloss: T('não escreverei') },
    { text: 'θα δεν γράψω', gloss: T('ordem que ninguém diz') },
    { text: 'δεν έχω χρήματα', gloss: T('não tenho dinheiro') },
    { text: 'να μην έρθει', gloss: T('que não venha') },
    { text: 'δεν έρχεται κανείς', gloss: T('não vem ninguém') },
  ],
  tables: [
    {
      caption: T('A negação em cada tempo'),
      head: ['Χρόνος', 'Παράδειγμα'],
      rows: [
        ['ενεστώτας', 'δεν γράφω'],
        ['αόριστος', 'δεν έγραψα'],
        ['μέλλοντας', 'δεν θα γράψω'],
        ['πεπρωμένο', 'δεν έχω γράψει'],
      ],
    },
    {
      caption: T('Qual negativa'),
      head: ['Πλαίσιο', 'Άρνηση'],
      rows: [
        ['οριστική', 'δεν'],
        ['μέλλοντας', 'δεν θα'],
        ['υποτακτική', 'να μην'],
        ['απαγόρευση', 'μη'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a ordem correta de «não escreverei»?'),
    options: [T('θα δεν γράψω'), T('δεν θα γράψω'), T('γράψω δεν θα'), T('δεν γράψω θα')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ θα γράψω (negativa antes do futuro)'),
      answer: 'Δεν',
      hint: T('Primeira letra maiúscula'),
    },
    {
      kind: 'choose',
      prompt: T('Em «δεν έχω γράψει», onde está a negativa?'),
      options: [
        T('antes do particípio'),
        T('antes do auxiliar'),
        T('depois do verbo'),
        T('no fim da frase'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Negativa e tempo'),
      pairs: [
        { a: 'δεν γράφω', b: T('presente') },
        { a: 'δεν έγραψα', b: T('passado') },
        { a: 'δεν θα γράψω', b: T('futuro') },
        { a: 'δεν έχω γράψει', b: T('perfeito') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('να ___ έρθει (negação do subjuntivo)'),
      answer: 'μην',
      hint: T('Três letras'),
    },
  ],
};
