import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('Sintaxe'),
  title: T('A ordem das palavras é livre'),
  subtitle: T('Το σπίτι είναι μικρό — Μικρό είναι το σπίτι'),
  body: C(`## Quase tudo pode se mover

Uma frase grega não tem ordem fixa. {Το σπίτι είναι μικρό}, {Μικρό είναι το σπίτι}, {Είναι το σπίτι μικρό} são a mesma frase e três frases de verdade, porque a ordem diz ao ouvinte o que é o assunto.

O português tem duas ordens e meio. O grego tem todas as que der, e a informação está em qual peça foi posta na frente. Quem traduz e põe o sujeito no começo, como é obrigatório em português, faz o grego dizer o contrário do que dizia.

A regra é de leitura, não de escrita: **o primeiro elemento da frase grega é o foco**. {Μικρό είναι το σπίτι} não informa que a casa é pequena; informa que a casa é o assunto e o tamanho é o dado novo.

## O que não se move, e o que o grego antigo fazia

Duas coisas ficam presas ao lugar. A negação vai antes do verbo, sempre: {δεν έρχεται} e não {έρχεται δεν}. E o artigo vai colado ao substantivo que ele determina: {το σπίτι}, nunca {σπίτι το}.

O verbo também tem uma posição estável no meio. Em grego o verbo conjugado aparece depois do sujeito, mas não no primeiro lugar como no português. {Εγώ γράφω} e não {Γράφω εγώ}. O que pode ocupar o primeiro lugar é o advérbio, o objeto ou a negação.

**A regra prática é: mantenha o verbo** onde ele está e mova o resto.

## Onde a ordem troca o sentido

Os dois casos em que a tradução muda de verdade são o tempo e a negação. {Δεν έγραψα το βιβλίο} e {Το βιβλίο δεν έγραψα} querem dizer a mesma coisa no português. Em grego a segunda põe o livro como assunto e diz que o problema é o livro, não a escrita.

Com advérbio é o mesmo: {Σήμερα έρχομαι}, «hoje venho», e {Έρχομαι σήμερα», que é neutro. Se o advérbio abre a frase, ele é o foco: {Σήμερα πάμε}, «hoje é que vamos».

E {δέ} faz o mesmo trabalho que o mas: {Έγραψα, δεν έφαγα}, «escrevi, não comi». O segundo item da lista ganha destaque porque vem logo depois da conjunção.
É preciso dizer isto, porque quem traduz o Novo Testamento vai esbarrar com ele. O grego antigo organiza a oração em duas posições: o verbo ocupa a segunda, e tudo o que vem antes é o tema.

{Καὶ ἐποίησεν ἄριτον καὶ ἐπεδίδου αὐτῷ» significa que o verbo {ἐποίησεν} está na segunda posição da oração. Quem entende grego moderno e lê grego antigo vai procurar o verbo antes do objeto, e o texto parece estar fora de ordem.

A diferença é real e tem consequência: em grego antigo a ordem é informação sobre o que é tema, e em grego moderno a ordem é informação sobre o que é foco. A pergunta muda de pergunta.


## Onde a ordem está na Escritura

> Καὶ λέγει αὐτῷ ὁ Ἰησοῦς· Τί σὲ λέγεις ἀσθενεῖν; ἀνάστηθι, ἆρον τὸν κράβαττόν σου καὶ περιπάτει.

{λέγει αὐτῷ} tem verbo em segundo lugar e {αὐτῷ} em terceiro: a oração inteira se divide em dois blocos: verbo e pronome. Em grego moderno a mesma frase seria {ο Ιησούς του λέει}, e a diferença não é de forma, é de ordem.

Os imperativos dali em diante, {ἀνάστηθι}, {ἆρον}, {περιπάτει}, são a resposta: três verbos, zero sujeito, três ações. O sujeito desaparece em grego antigo assim como em grego moderno, e a frase fica uma sequência de ordens. `),
  vocab: [
    V('το σπίτι', 'το σπίτι', 'a casa'),
    V('είναι', 'είμαι', 'é'),
    V('μικρό', 'μικρός', 'pequeno'),
    V('γράφω', 'γράφω', 'escrevo'),
    V('έγω', 'εγώ', 'eu'),
    V('δεν', 'δεν', 'não'),
    V('έρχεται', 'έρχομαι', 'vem'),
    V('σήμερα', 'σήμερα', 'hoje'),
    V('έρχομαι', 'έρχομαι', 'venho'),
    V('πάμε', 'πηγαίνω', 'vamos'),
    V('τὸ βιβλίο', 'τὸ βιβλίο', 'o livro'),
    V('λέγει', 'λέγω', 'diz'),
    V('ἀνάστηθι', 'ἀνίσταμαι', 'levanta-te'),
    V('περιπάτει', 'περιπατέω', 'caminha'),
  ],
  rules: [
    {
      n: '§1',
      text: T('A ordem do grego moderno é livre: o que muda de lugar é o foco, não o sentido.'),
    },
    { n: '§2', text: T('O primeiro elemento da frase é o foco da frase.') },
    {
      n: '§3',
      text: T('A negação nunca passa do verbo, e o artigo nunca se separa do substantivo.'),
    },
    {
      n: '§4',
      text: T('O grego antigo põe o verbo na segunda posição; o moderno deixa o verbo no meio.'),
    },
  ],
  notes: [
    {
      label: T('Difícil de ver'),
      text: T(
        'A ordem livre só é visível quando a frase tem duas peças do mesmo peso. Com sujeito, verbo e objeto a diferença é mínima, e é por isso que o phenomenon passa despercebido nas primeiras frases que se leem.',
      ),
    },
    {
      label: T('Tradução'),
      text: T(
        'Quando o grego antigo põe o verbo em segundo lugar, a tradução para português quase sempre põe o sujeito em primeiro lugar, e o resultado é uma frase sobre a pessoa em vez de uma frase sobre o fato. A mudança de ordem é uma mudança de tópico.',
      ),
    },
  ],
  examples: [
    { text: 'το σπίτι είναι μικρό', gloss: T('a casa é pequena') },
    { text: 'μικρό είναι το σπίτι', gloss: T('pequena é a casa') },
    { text: 'είναι το σπίτι μικρό', gloss: T('é a casa pequena') },
    { text: 'δεν έρχεται σήμερα', gloss: T('não vem hoje') },
    { text: 'σήμερα δεν έρχεται', gloss: T('hoje é que não vem') },
    { text: 'το βιβλίο δεν έγραψα', gloss: T('o livro é que não escrevi') },
    { text: 'εγώ γράφω το βιβλίο', gloss: T('eu escrevo o livro') },
    { text: 'γράφω το βιβλίο', gloss: T('escrevo o livro') },
  ],
  tables: [
    {
      caption: T('A mesma frase, três focos'),
      head: ['Τάξη', 'Έμφαση', 'Παράδειγμα'],
      rows: [
        ['σπίτι', 'το σπίτι', 'το σπίτι είναι μικρό'],
        ['μικρό', 'το μέγεθος', 'μικρό είναι το σπίτι'],
        ['είναι', 'η κατάφαση', 'είναι το σπίτι μικρό'],
      ],
    },
    {
      caption: T('O que não se move'),
      head: ['Στοιχείο', 'Περιορισμός'],
      rows: [
        ['η άρνηση', 'πριν το ρήμα'],
        ['το άρθρο', 'κολλημένο στο ουσιαστικό'],
        ['ρήμα', 'μετά το υποκείμενο'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em «μικρό είναι το σπίτι», o que está em foco?'),
    options: [T('a casa'), T('o tamanho'), T('o verbo'), T('o possuidor')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ έρχεται (negação, posição fixa)'),
      answer: 'Δεν',
      hint: T('Primeira letra maiúscula'),
    },
    {
      kind: 'choose',
      prompt: T('Onde o grego antigo põe o verbo conjugado?'),
      options: [
        T('na primeira posição'),
        T('na segunda posição'),
        T('no fim'),
        T('antes do sujeito'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Posição e função'),
      pairs: [
        { a: 'primeiro elemento', b: T('foco') },
        { a: 'negação', b: T('antes do verbo') },
        { a: 'artigo', b: T('colado ao substantivo') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('το βιβλίο ___ έγραψα (negação, o livro é o assunto)'),
      answer: 'δεν',
      hint: T('A negativa vem depois do foco'),
    },
  ],
};
