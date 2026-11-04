import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  section: T('Conectivo'),
  title: T('Conjunções: o que amarra a frase'),
  subtitle: T('και — αλλά — ότι — γιατί'),
  body: C(`## As que não têm lugar fixo

**{και} é «e», e é a conjunção mais comum do grego**. {αλλά} é «mas», e {όμως} é o mesmo sentido em registro elevado: {Αλλά ήρθε}, {Όμως ήρθε}. {Ή} é «ou», e {ούτε} é «nem», que só aparece em série negativa.

Depois de {ή} e {αλλά}, o verbo pode mudar de forma. {Ήρθε ή φύγε} é «veio ou saiu», e as duas metades ficam no mesmo tempo e na mesma pessoa. É a herança do grego antigo, e em grego moderno dá para fazer isso ou não; fazendo, a frase soa antiga.

## Ότι não vira που

Este é o ponto que mais trava o tradutor. {ότι} introduz uma oração declarativa inteira, e o verbo dela é um verbo normal: {Πιστεύω ότι έρχεται}, «creio que ele vem». {που} é relativo e precisa de um substantivo antes: {ο φίλος που έρχεται}, «o amigo que vem».

A confusão vem do português, que usa o mesmo «que» para os dois. Em grego, trocar um pelo outro produz ou um nonsense ou uma frase ambígua. {Ξέρω ότι έρχεται} é gramatical e significa «sei que ele vem». {Ξέρω που έρχεται} não tem o que {που} modifica.

A diferença é também de tempo: {ότι} traz o que o falante afirma, e o verbo fica no indicativo; {που} traz o que o texto quer dizer, e pode ficar em qualquer tempo.


{Γιατί} é «porque», e responde a uma pergunta de causa. {Αφού} é «já que», e subordina o fato a uma condição que se cumpriu. {Ενώ} é «enquanto» ou «ao passo que», e põe duas coisas em paralelo no mesmo intervalo. {Επειδή} é a versão escrita de {γιατί}.

{Γιατί} tem duas formas. Com o verbo no indicativo é causa: {Δεν ήρθε γιατί ήταν άρρωστος}. Com o subjuntivo é finalidade: {Μένω εδώ γιατί να σε δω}. A construção é a mesma palavra com o modo trocando, e o modo é o que decide se é «porque» ou «para que».

## Conjunção e tempo: as que pedem o verbo

{Πριν} é «antes» e {αφού} é «depois que». Os dois pedem o verbo no que o leitor reconhece como futuro: {Πριν φύγει}, {Αφού έρθει}. A mesma forma {έρθει} aparece nos dois casos, e quem não sabe qual dos dois está lendo não sabe se é passado ou futuro.

{Ενώ} faz o mesmo com o presente: {Ενώ μιλούσε, ο φίλος έφυγε}. O verbo de {ενώ} fica no imperfeito, e é isso que diz a duração.

## Onde as conjunções estão na Escritura

> Καὶ λέγει αὐτῷ ὁ Ἰησοῦς· Τί σὲ λέγεις ἀσθενεῖν; ἀνάστηθι, ἆρον τὸν κράβαττόν σου καὶ περιπάτει.

{Kαὶ} liga as orações, {δέ} introduz a objeção, {καὶ} liga as três ordens. O texto tem quatro conjunções em seis versículos, e nenhuma delas é decorativa: cada uma marca uma relação entre o que vem antes e o que vem depois.

O que o grego antigo faz e o moderno repete é a segunda posição do verbo. Em {λέγει αὐτῷ}, o verbo é a segunda coisa da oração depois de {καί}, e quem procura o verbo no fim não acha. `),
  vocab: [
    V('και', 'και', 'e'),
    V('αλλά', 'αλλά', 'mas'),
    V('όμως', 'όμως', 'no entanto'),
    V('ή', 'ή', 'ou'),
    V('ούτε', 'ούτε', 'nem'),
    V('ότι', 'ότι', 'que (oração)'),
    V('που', 'που', 'que (relativo)'),
    V('γιατί', 'γιατί', 'porque'),
    V('αφού', 'αφού', 'depois que'),
    V('ενώ', 'ενώ', 'enquanto'),
    V('πριν', 'πριν', 'antes que'),
    V('δέ', 'δέ', 'mas (grego antigo)'),
    V('επειδή', 'επειδή', 'porém (escrito)'),
    V('μένω', 'μένω', 'fico'),
  ],
  rules: [
    { n: '§1', text: T('και liga, αλλά e όμως opõem, ή e ούτε separam.') },
    {
      n: '§2',
      text: T(
        'ότι introduz oração declarativa com verbo normal; που é relativo e exige um substantivo antes.',
      ),
    },
    { n: '§3', text: T('γιατί com indicativo é causa; γιατί com subjuntivo é finalidade.') },
    { n: '§4', text: T('πριν e αφού pedem o verbo na forma de futuro: πριν φύγει, αφού έρθει.') },
  ],
  notes: [
    {
      label: T('Tempo'),
      text: T(
        'Depois de πριν, αφού, όταν e ενώ o verbo grego sai sempre na mesma forma, que é o aoristo. O tempo da oração subordinada não é dado pelo verbo: é dado pela conjunção que a introduz.',
      ),
    },
    {
      label: T('Koiné'),
      text: T(
        'δέ é a conjunção do grego antigo e significa «mas», e não «e». Quem traduz a sequência καί… καί… δέ como uma enumeração perde a objeção que δέ marca.',
      ),
    },
  ],
  examples: [
    { text: 'ήρθε και έφυγε', gloss: T('veio e saiu') },
    { text: 'ήρθα αλλά έφυγε', gloss: T('vim, mas saí') },
    { text: 'πιστεύω ότι έρχεται', gloss: T('creio que ele vem') },
    { text: 'ο φίλος που έρχεται', gloss: T('o amigo que vem') },
    { text: 'δεν ήρθε γιατί ήταν άρρωστος', gloss: T('não veio porque estava doente') },
    { text: 'μένω εδώ γιατί να σε δω', gloss: T('fico aqui para te ver') },
    { text: 'αφού ήρθε, έφυγε', gloss: T('depois que veio, saiu') },
    { text: 'ενώ μιλούσε, ο φίλος έφυγε', gloss: T('enquanto falava, o amigo saiu') },
  ],
  tables: [
    {
      caption: T('As conjunções principais'),
      head: ['Σύνδεσμος', 'Παράδειγμα'],
      rows: [
        ['και', 'ήρθε και έφυγε'],
        ['αλλά', 'ήρθα αλλά έφυγε'],
        ['ή', 'ήρθε ή έφυγε'],
        ['γιατί', 'δεν ήρθε γιατί ήταν άρρωστος'],
      ],
    },
    {
      caption: T('ότι e που'),
      head: ['Λέξη', 'Τι εισάγει', 'Παράδειγμα'],
      rows: [
        ['ότι', 'δηλωτική πρόταση', 'πιστεύω ότι έρχεται'],
        ['που', 'αναφορική πρόταση', 'ο φίλος που έρχεται'],
        ['ποιος', 'ερώτηση', 'ποιος έρχεται'],
      ],
    },
    {
      caption: T('Conjunção e tempo do verbo'),
      head: ['Σύνδεσμος', 'Ρήμα', 'Ανάγνωση'],
      rows: [
        ['όταν', 'έρθει', 'όταν έρθει'],
        ['πριν', 'φύγει', 'πριν φύγει'],
        ['αφού', 'έρθει', 'αφού έρθει'],
        ['ενώ', 'μιλούσε', 'ενώ μιλούσε'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual palavra introduz uma oração declarativa?'),
    options: [T('που'), T('ότι'), T('γιατί'), T('αλλά')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Ξέρω ___ έρχεται (introduz uma oração declarativa)'),
      answer: 'ότι',
      hint: T('Com acento'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase é gramatical?'),
      options: [
        T('Ξέρω που έρχεται'),
        T('Ξέρω ότι έρχεται'),
        T('Ξέρω οτι έρχεται'),
        T('Ξέρω τι έρχεται'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Conjunção e sentido'),
      pairs: [
        { a: 'και', b: T('e') },
        { a: 'αλλά', b: T('mas') },
        { a: 'ή', b: T('ou') },
        { a: 'ενώ', b: T('enquanto') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('___ ήρθε, έφυγε (conjunção de consequência)'),
      answer: 'Αφού',
      hint: T('Primeira letra maiúscula'),
    },
  ],
};
