import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  section: T('Numeral'),
  title: T('Cardinais e o substantivo que vai para o genitivo'),
  subtitle: T('ένα — δύο — τρεις — δύο ανθρώπων'),
  body: C(`## Uma, duas, três

Os cardinais são irregulares só nos três primeiros. {ένα} é um, {δύο} é dois, {τρεις} é três; a partir daí a série é regular e só juxtapõe: {τέσσαρις}, {πέντε}, {εξι}, {επτά}, {οχτώ}, {εννέα}, {δέκα}. Acima de dez o número não flexiona: {δεκαπέντε}, {εκατόν}, {χιλιάδες}.

O numeral concorda em gênero, e é por isso que o grego tem três palavras para o número um: {ένας} masculino, {μία} feminino, {ένα} neutro. No dois e no três a concordância é mais frouxa: {δύο} e {τρεις} funcionam para os três gêneros, e {τρία} só aparece quando o numeral é usado sozinho, como substantivo.

{τρεις} é o único que flexiona de verdade. No genitivo vira {τριών}, e é por isso que {τρεις ανθρώπων} significa «três pessoas»: o numeral conta e o substantivo nomeia.

## O substantivo depois do numeral vai ao genitivo

Esta é a construção que o português não tem. Em vez de dizer «três pessoas», o grego diz «três, de pessoas»: {τρεις ανθρώπων}. O numeral fica no caso que a frase pede e o substantivo vai para o genitivo, como se fosse uma parte contada.

**O motivo é histórico — e está no partitivo.** O grego antigo tinha {τρεις}, {τετράδες}, «três, quatro», que valiam sozinhos, sem nome nenhum. Quando o nome entrou na conta, entrou no caso que a contagem pedia, e a construção ficou.

O teste é fácil: se a frase está contando, o substantivo está em {-ων}. {δύο φίλων}, {τρεις παιδιών}, {πέντε ανθρώπων}. Se a frase está usando o substantivo como sujeito ou objeto, o numeral concorda normalmente: {δύο φίλοι έρχονται}, «dois amigos vêm».

## O numeral rege o caso, e o caso rege o substantivo

Há duas construções e elas não se misturam. Com o numeral em nominativo, o substantivo vai em nominativo e concorda em gênero: {δύο φίλοι}, {δύο φίλες}, {δύο φίλα}. Com o numeral em qualquer outro caso, o substantivo vai para o genitivo: {δύο φίλων}, {τρεις φίλους}, «de dois amigos», e o gênero do substantivo desaparece.

É a diferença entre dizer «dois amigos são chegados» e «chegaram dois amigos». Em português as duas frases têm o mesmo substantivo; em grego, uma tem {φίλοι} e a outra tem {φίλων}, e a informação de gênero desaparece na segunda.

## Numeral ou substantivo numeral

O numeral pode virar substantivo e assumir gênero: {ο πρώτος}, «o primeiro», {η πρώτη}, «a primeira». E pode ser promotido a pronome: {ένας από εσάς}, «um de vocês». É assim que o grego diz «um segundo», «um pouco», «um bocado»: {μια ώρα}, {ένα κομμάτι}.

Com o numeral abstrato vem o genitivo do que é contado: {ένα κομμάτι ψωμί}, {δύο φέρτα}.


> Καὶ εἶπεν αὐτοῖς· Δοτε αὐτῷ φαγεῖν.

Em Marcos 6, Jesus manda os discípulos multiplicarem os pães para {τέσσαρες χιλιάδας}. O numeral {τέσσαρες} é a forma masculina e {χιλιάδας} está em genitivo, porque o que está sendo contado são as pessoas, não os milhares.

Quem lê {τρεῖς} ou {τέσσαρες} isolado e não percebe que o substantivo seguinte está em genitivo traduz o número e perde a relação. `),
  vocab: [
    V('ένας', 'ένας', 'um (masculino)'),
    V('μία', 'μία', 'uma (feminino)'),
    V('ένα', 'ένα', 'um (neutro)'),
    V('δύο', 'δύο', 'dois'),
    V('τρεις', 'τρεις', 'três'),
    V('τρία', 'τρία', 'três (neutro)'),
    V('τριών', 'τρεις', 'de três (genitivo)'),
    V('τέσσαρις', 'τέσσαρις', 'quatro'),
    V('πέντε', 'πέντε', 'cinco'),
    V('δέκα', 'δέκα', 'dez'),
    V('δύο ανθρώπων', 'δύο', 'de duas pessoas'),
    V('τρεις ανθρώπων', 'τρεις', 'de três pessoas'),
    V('ανθρώπων', 'άνθρωπος', 'de pessoas'),
    V('δύο φίλοι', 'φίλος', 'dois amigos'),
    V('δύο φίλων', 'φίλος', 'de dois amigos'),
    V('ο φίλος', 'φίλος', 'o amigo'),
  ],
  rules: [
    {
      n: '§1',
      text: T('Os cardinais só são irregulares em um, dois e três; acima de dez não flexionam.'),
    },
    {
      n: '§2',
      text: T('Depois do numeral, o substantivo vai ao genitivo: δύο ανθρώπων, «de duas pessoas».'),
    },
    {
      n: '§3',
      text: T(
        'O substantivo concorda com o numeral só quando o numeral está no nominativo; nos outros casos vai ao genitivo.',
      ),
    },
    { n: '§4', text: T('O número um tem três formas por gênero: ένας, μία, ένα.') },
  ],
  notes: [
    {
      label: T('Etimologia'),
      text: T(
        'A construção em genitivo é herança de um partitivo do grego antigo que já valia sozinho: τρεῖς, «três», sem substantivo nenhum. Quando o nome entrou na conta, entrou no caso que a conta pedia.',
      ),
    },
    {
      label: T('Português'),
      text: T(
        'A construção não tem tradução literal. Para «cinco anos», o grego escreve πέντε χρόνια ou, se contar com rigor, πέντε ετών. A segunda parece mais estranho e é a que o grego prefere quando o número importa.',
      ),
    },
  ],
  examples: [
    { text: 'δύο άνθρωποι έρχονται', gloss: T('duas pessoas vêm') },
    { text: 'δύο ανθρώπων έρχονται', gloss: T('vêm duas pessoas') },
    { text: 'τρεις φίλοι έρχονται', gloss: T('três amigos vêm') },
    { text: 'τρεις παιδιών παίζουν', gloss: T('três crianças brincam') },
    { text: 'πέντε χρόνια', gloss: T('cinco anos') },
    { text: 'μία ώρα δουλειάς', gloss: T('uma hora de trabalho') },
    { text: 'δύο φίλοι', gloss: T('dois amigos') },
    { text: 'δύο φίλων', gloss: T('de dois amigos') },
  ],
  tables: [
    {
      caption: T('Os primeiros cardinais'),
      head: ['Αριθμός', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['ένα', 'ένας', 'μία', 'ένα'],
        ['δύο', 'δύο', 'δύο', 'δύο'],
        ['τρία', 'τρεις', 'τρεις', 'τρία'],
        ['τέσσαρα', 'τέσσαρις', 'τέσσαρις', 'τέσσαρα'],
        ['πέντε', 'πέντε', 'πέντε', 'πέντε'],
      ],
    },
    {
      caption: T('Numeral nominal ou não'),
      head: ['Κλίση αριθμητικού', 'Μορφή', 'Παράδειγμα'],
      rows: [
        ['οριστική', 'το ουσιαστικό συμφωνεί', 'δύο φίλοι'],
        ['γενική', 'ουσιαστικό σε -ων', 'δύο φίλων'],
        ['αἰτιατική', 'ουσιαστικό σε -ους', 'δύο φίλους'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se diz «duas pessoas vêm» contando com rigor?'),
    options: [
      T('δύο άνθρωποι έρχονται'),
      T('δύο ανθρώπων έρχονται'),
      T('δύο του ανθρώπου'),
      T('δυο ανθρώπων έρχονται'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('τρεις ___ (de três pessoas)'),
      answer: 'ανθρώπων',
      hint: T('Genitivo do plural'),
    },
    {
      kind: 'choose',
      prompt: T('Qual é o genitivo de «τρεις»?'),
      options: [T('τριών'), T('τρεις'), T('τρία'), T('τριώς')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Número e valor'),
      pairs: [
        { a: 'δύο', b: T('dois') },
        { a: 'τρεις', b: T('três') },
        { a: 'τέσσαρις', b: T('quatro') },
        { a: 'πέντε', b: T('cinco') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('___ φίλοι έρχονται (numeral, dois)'),
      answer: 'Δύο',
      hint: T('Primeira letra maiúscula'),
    },
  ],
};
