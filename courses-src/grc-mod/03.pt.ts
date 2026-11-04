import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('O verbo'),
  title: T('Os verbos essenciais'),
  subtitle: T('είμαι, έχω, κάνω, πάω: os verbos que sustentam quase toda frase'),
  body: C(`## Dez verbos, e dois que não têm regra

Um verbo grego moderno regular tira a terminação e devolve uma nova: em {κάνω}, {κάνεις}, {κάνει}, o tema {κάν-} não se mexe. Os essenciais não têm tema fixo: {είμαι}, {έχω}, {πάω}, {έρχομαι}, {τρώω}, {πίνω}, {κοιμάμαι}, {βλέπω}, {ακούω}, {μιλάω} são formas que nenhuma regra produz, e são o que se lê em toda página.

São poucos e pesam muito. {είμαι} ser, {έχω} ter, {κάνω} fazer, {λέω} dizer, {πάω} ir, {έρχομαι} vir, {τρώω} comer, {πίνω} beber, {κοιμάμαι} dormir, {βλέπω} ver, {ακούω} ouvir, {μιλάω} falar, {δίνω} dar, {παίρνω} tomar, {ξέρω} saber, {θέλω} querer, {μπορώ} poder cobrem quase tudo o que se diz num capítulo de Evangelho.

## είμαι e έχω: ser e ter

{είμαι} é o verbo mais irregular do grego moderno: {είμαι}, {είσαι}, {είναι}, {είμαστε}, {είστε}, {είναι}. Não tem passado nem futuro próprios — usa {ήμουν} no passado e {θα είμαι} no futuro. É o verbo que fecha a identidade das coisas, e o português o traduz por «ser» ou «estar» conforme o contexto.

{έχω} é o verbo «ter», e é quase tão irregular: {έχω}, {έχεις}, {έχει}, {έχουμε}, {έχετε}, {έχουν}. O passado é {είχα} e o futuro {θα έχω}. Onde o português diz «tenho», o grego moderno usa {έχω} com o mesmo sentido de posse e de estado.

## πάω e έρχομαι: ir e vir

{πάω} «ir» e {έρχομαι} «vir» são o par mais fácil de confundir. {πάω} é irregular no presente ({πάω}, {πάς}, {πάει}, {πάμε}, {πάτε}, {πάνε}) e regular no passado ({πήγα}). {έρχομαι} é regular no presente ({έρχομαι}, {έρχεσαι}, {...}) mas o passado é {ήρθα}.

A diferença de sentido é a do português: {πάω} indica movimento para fora, {έρχομαι} movimento para dentro. Quem traduz os dois por «ir» perde a direção.

## Na Bíblia

João 1:1 começa com {ήτον}: {Εν αρχή ήτον ο Λόγος}, no começo era o Verbo. {ήτον} é o passado de {είμαι}, 3ª pessoa do singular. E João 1:3 fecha with {έγινε}, o passado de {γίνομαι}: tudo veio a ser. O grego que começa com {ήτον} termina com {έγινε}: o Verbo já era, e tudo o resto aconteceu.

Marcos 4:39 traz {σίγασε}, «cala-te»: é o imperativo aoristo de {σιγάω}, «calar». O versículo inteiro mostra o método: o grego coloca a ordem de Jesus no imperativo para dizer que o mar não responde à ordem, mas a Cristo.`),
  vocab: [
    V('είμαι', 'είμαι', 'ser'),
    V('ήμουν', 'είμαι', 'era'),
    V('έχω', 'έχω', 'ter'),
    V('είχα', 'έχω', 'tinha'),
    V('κάνω', 'κάνω', 'fazer'),
    V('έκανα', 'κάνω', 'fiz'),
    V('πάω', 'πάω', 'ir'),
    V('πήγα', 'πάω', 'fui'),
    V('έρχομαι', 'έρχομαι', 'vir'),
    V('ήρθα', 'έρχομαι', 'vim'),
    V('τρώω', 'τρώω', 'comer'),
    V('έφαγα', 'τρώω', 'comi'),
    V('πίνω', 'πίνω', 'beber'),
    V('ήπια', 'πίνω', 'bebi'),
    V('κοιμάμαι', 'κοιμάμαι', 'dormir'),
    V('βλέπω', 'βλέπω', 'ver'),
    V('είδα', 'βλέπω', 'vi'),
    V('ακούω', 'ακούω', 'ouvir'),
    V('άκουσα', 'ακούω', 'ouvi'),
    V('μιλάω', 'μιλάω', 'falar'),
    V('μίλησα', 'μιλάω', 'falei'),
    V('δίνω', 'δίνω', 'dar'),
    V('παίρνω', 'παίρνω', 'tomar'),
    V('ξέρω', 'ξέρω', 'saber'),
    V('θέλω', 'θέλω', 'querer'),
    V('μπορώ', 'μπορώ', 'poder'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{είμαι} é o verbo mais irregular: {είμαι}, {είσαι}, {είναι}, {είμαστε}, {είστε}, {είναι}. Não tem passado nem futuro próprios.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{έχω} é quase tão irregular: {έχω}, {έχεις}, {έχει}, {έχουμε}, {έχετε}, {έχουν}. Passado {είχα}, futuro {θα έχω}.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{πάω} indica movimento para fora, {έρχομαι} para dentro. Quem traduz os dois por «ir» perde a direção.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O passado de {πάω} é {πήγα}, o de {έρχομαι} é {ήρθα}: dois verbos, dois passados, nenhuma letra comum.',
      ),
    },
    {
      n: '§5',
      text: T(
        'João 1:1 usa {ήτον} (passado de {είμαι}) e João 1:3 usa {έγινε} (passado de {γίνομαι}): o Verbo já era, e tudo o resto aconteceu.',
      ),
    },
  ],
  notes: [
    {
      label: T('O έχω que não é «ter»'),
      text: T(
        'O grego moderno usa {έχω} para «ter», «possuir» e «estar com». Em João 15:4 {έχω} diz ao pámpano que não dá fruto, e não uma propriedade.',
      ),
    },
    {
      label: T('O ήτον que não é «era»'),
      text: T(
        '{ήτον} é o passado de {είμαι}, mas o português traduz por «era» ou «estava» conforme o contexto. A forma é a mesma nos dois casos.',
      ),
    },
  ],
  examples: [
    {
      text: 'Εν αρχή ήτον ο Λόγος',
      gloss: T('Jo 1:1 — {ήτον} é passado de {είμαι}: o Verbo já era.'),
    },
    {
      text: 'και Θεός ήτον ο Λόγος',
      gloss: T('Jo 1:1 — {ήτον} sem artigo defende predicado nominal: o Verbo era Deus.'),
    },
    { text: 'πάντα δι᾽ αὐτοῦ έγινε', gloss: T('Jo 1:3 — {έγινε} de {γίνομαι}: tudo veio a ser.') },
    {
      text: 'έφαγεν ο λαός',
      gloss: T('Ex 16:35 — {έφαγεν} é passado de {τρώω}: o maná foi comido.'),
    },
    { text: 'ήρθαν οι μαθηταί', gloss: T('Jo 4:8 — {ήρθαν} é passado de {έρχομαι}: vieram.') },
    { text: 'έχω ένα βιβλίο', gloss: T('{έχω} com objeto direto: tenho um livro.') },
    { text: 'ήμουν στο σπίτι', gloss: T('{ήμουν} é passado de {είμαι}: estava em casa.') },
    { text: 'θα πάω στην πόλη', gloss: T('futuro com {θα} + presente: irei à cidade.') },
    { text: 'σίγασε', gloss: T('Mc 4:39 — imperativo aoristo de {σιγάω}: cala-te.') },
  ],
  tables: [
    {
      caption: 'O presente dos essenciais',
      head: ['Pessoa', 'είμαι', 'έχω', 'πάω', 'έρχομαι', 'τρώω'],
      rows: [
        ['εγώ', 'είμαι', 'έχω', 'πάω', 'έρχομαι', 'τρώω'],
        ['εσύ', 'είσαι', 'έχεις', 'πάς', 'έρχεσαι', 'τρως'],
        ['αυτός/αυτή/αυτό', 'είναι', 'έχει', 'πάει', 'έρχεται', 'τρώει'],
        ['εμείς', 'είμαστε', 'έχουμε', 'πάμε', 'έρχομαστε', 'τρώμε'],
        ['εσείς', 'είστε', 'έχετε', 'πάτε', 'έρχεστε', 'τρώτε'],
        ['αυτοί/αυτές/αυτά', 'είναι', 'έχουν', 'πάνε', 'έρχονται', 'τρώνε'],
      ],
    },
    {
      caption: 'O passado dos essenciais',
      head: ['Verbo', 'Passado', 'Futuro'],
      rows: [
        ['είμαι', 'ήμουν', 'θα είμαι'],
        ['έχω', 'είχα', 'θα έχω'],
        ['πάω', 'πήγα', 'θα πάω'],
        ['έρχομαι', 'ήρθα', 'θα έρχομαι'],
        ['τρώω', 'έφαγα', 'θα τρώω'],
        ['πίνω', 'ήπια', 'θα πίνω'],
        ['κοιμάμαι', 'κοιμήθηκα', 'θα κοιμάμαι'],
        ['βλέπω', 'είδα', 'θα βλέπω'],
        ['ακούω', 'άκουσα', 'θα ακούω'],
        ['μιλάω', 'μίλησα', 'θα μιλάω'],
        ['δίνω', 'έδωσα', 'θα δίνω'],
        ['παίρνω', 'πήρα', 'θα παίρνω'],
        ['ξέρω', 'ήξερα', 'θα ξέρω'],
        ['θέλω', 'ήθελα', 'θα θέλω'],
        ['μπορώ', 'μπορούσα', 'θα μπορώ'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Εν αρχή ήτον ο Λόγος}, qual o tempo de {ήτον}?'),
    options: [T('Presente'), T('Passado'), T('Futuro'), T('Aoristo')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "πάντα δι᾽ αὐτοῦ ___" com o passado de {γίνομαι} para "aconteceu".'),
      answer: 'έγινε',
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao seu passado.'),
      pairs: [
        { a: T('{πάω}'), b: T('{πήγα}') },
        { a: T('{έρχομαι}'), b: T('{ήρθα}') },
        { a: T('{τρώω}'), b: T('{έφαγα}') },
        { a: T('{είμαι}'), b: T('{ήμουν}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual o passado de {λέγω}?'),
      options: [T('{είπα}'), T('{λέγω}'), T('{λέξω}'), T('{λέγομαι}')],
      answer: 0,
    },
  ],
};
