import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('Artigo'),
  title: T('Os três artigos e a regra do neutro plural'),
  subtitle: T('ο — η — το, e τα que vira αυτά'),
  body: C(`## Duas séries e uma terceira

O artigo grego tem duas séries morfológicas, não quatro: {ο} serve para o masculino e para o feminino, e {το} fica separado só para o neutro. No plural, {οι} cobre masculino e feminino e {τα} fica para o neutro. A flexão antiga, que tinha quatro séries, aparece na Bíblia e não na fala.

O que o artigo faz é o mesmo em português: tornar o referente específico. {ο άνθρωπος} é «o homem», uma pessoa já identificada; {άνθρωπος} sem artigo é «um homem» ou «a humanidade». A diferença é a mesma, e a diferença é grande.

## A regra que ninguém esperava

O neutro plural troca de artigo conforme o que vem antes. Com um determinante neutro, ele fica {τα}: {τα παιδιά}, «as crianças». Com um demonstrativo, ele vira {αυτά}: {αυτά τα παιδιά}, «estas crianças». Com um possessivo forte, o mesmo: {δικά μου παιδιά}. Não é irregularidade: o {αυτά} é o artigo funcionando como demonstrativo, e a forma que assume é a do neutro.

A regra prática cabe numa linha: **no neutro plural, se há demonstrativo, o artigo é {αυτά}; se não há, o artigo é {τα}**. E é a única coisa em que o grego moderno troca uma forma por outra conforme o determinante. Nenhuma outra classe nominal faz isso.

## Por que o grego faz e o português não

O phenomenon é antigo — e não é invenção moderna. No grego antigo o substantivo em -{ον} tirava o -{ν} no plural, e o artigo ficava {τὰ}: {τὰ τέκνα}, «as crianças». Com um demonstrativo {αὐτά}, o substantivo em -{α} substituía o -{ον} inteiro: {αὐτὰ τέκνα}. O grego moderno conservou a substituição do substantivo e perdeu o -{ν}, e com ela perdeu o motivo. Ficou a regra sem razão, e é por isso que ela parece arbitrária a quem não sabe a história.

## O neutro plural sem gênero

Há um uso do neutro plural que o português não tem e que resolve um problema real. Quando o grupo é misto e e não interessa dizer de que sexos é, o grego usa o neutro plural: {τα παιδιά έφαγαν}, «as crianças comeram». Também se usa para uma coleção de coisas de tipos diferentes: {τα πράγματα έφερα}, «trouxe as coisas».

O verbo é o mesmo nas duas opções e o artigo é o que denuncia a escolha: {οι άνθρωποι} diz que o grupo é de homens, {τα παιδιά} diz que não interessa. `),
  vocab: [
    V('ο άνθρωπος', 'ο άνθρωπος', 'o homem, a pessoa'),
    V('άνθρωπος', 'άνθρωπος', 'um homem; a humanidade'),
    V('το παιδί', 'το παιδί', 'a criança'),
    V('τα παιδιά', 'το παιδί', 'as crianças'),
    V('τα', 'τα', 'o (neutro plural)'),
    V('οι', 'οι', 'os, as'),
    V('αυτά', 'αυτά', 'estes (neutro plural)'),
    V('αυτά τα παιδιά', 'αυτός', 'estas crianças'),
    V('δικά μου παιδιά', 'δικός', 'meus filhos'),
    V('ο φίλος', 'ο φίλος', 'o amigo'),
    V('η φιλία', 'η φιλία', 'a amizade'),
    V('το σπίτι', 'το σπίτι', 'a casa'),
    V('τα πράγματα', 'το πράγμα', 'as coisas'),
    V('τα τέκνα', 'τὸ τέκνον', 'as crianças (grego antigo)'),
    V('αὐτὰ τέκνα', 'αὐτός', 'estas crianças (grego antigo)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O artigo tem duas séries: ο para masculino e feminino, το para o neutro; οι e τα no plural.',
      ),
    },
    {
      n: '§2',
      text: T('No neutro plural, com demonstrativo o artigo é αυτά; sem demonstrativo, é τα.'),
    },
    {
      n: '§3',
      text: T(
        'O artigo torna o referente específico: ο άνθρωπος é «o homem», άνθρωπος é «um homem».',
      ),
    },
    { n: '§4', text: T('O neutro plural serve para grupo misto: τα παιδιά, sem dizer os sexos.') },
  ],
  notes: [
    {
      label: T('Etimologia'),
      text: T(
        'αυτά e αυτός são a mesma raiz: o artigo neutro plural absorveu o pronome demonstrativo e perdeu o outro lado da comparação, que é εκείνος, «aquele».',
      ),
    },
    {
      label: T('Cuidado'),
      text: T(
        'A regra do αυτά só vale no plural. No singular o artigo neutro é sempre το, mesmo com demonstrativo: αυτό το παιδί, e nunca «αυτόν το παιδί».',
      ),
    },
  ],
  examples: [
    { text: 'τα παιδιά παίζουν', gloss: T('as crianças brincam') },
    { text: 'αυτά τα παιδιά παίζουν', gloss: T('estas crianças brincam') },
    { text: 'τα παιδιά μου παίζουν', gloss: T('as minhas crianças brincam') },
    { text: 'οι φίλοι έρχονται', gloss: T('os amigos vêm') },
    { text: 'αυτοί οι φίλοι έρχονται', gloss: T('estes amigos vêm') },
    { text: 'τα πράγματα είναι εδώ', gloss: T('as coisas estão aqui') },
    { text: 'το σπίτι είναι μικρό', gloss: T('a casa é pequena') },
    { text: 'ανθρωπος και άνθρωπος', gloss: T('um homem e outro homem') },
  ],
  tables: [
    {
      caption: T('O artigo em todos os lugares'),
      head: ['Κλίση', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['οριστική', 'ο άνθρωπος', 'η γυναίκα', 'το παιδί'],
        ['πληθυντικός', 'οι άνθρωποι', 'οι γυναίκες', 'τα παιδιά'],
      ],
    },
    {
      caption: T('O neutro plural e o que vem antes'),
      head: ['Προηγούμενο', 'Άρθρο', 'Παράδειγμα'],
      rows: [
        ['κανένα', 'τα', 'τα παιδιά'],
        ['αυτός', 'αυτά', 'αυτά τα παιδιά'],
        ['δικός μου', '—', 'δικά μου παιδιά'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se diz «estas crianças»?'),
    options: [T('αυτά τα παιδιά'), T('τα αυτά παιδιά'), T('αυτά παιδιά'), T('το παιδί')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ παιδιά παίζουν (sem demonstrativo)'),
      answer: 'τα',
      hint: T('Artigo neutro plural simples'),
    },
    {
      kind: 'choose',
      prompt: T('Em «τα παιδιά έφαγαν», o que o neutro plural indica?'),
      options: [
        T('que são só meninos'),
        T('que o grupo é misto ou não especificado'),
        T('que é um só grupo'),
        T('que é indefinido'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Artigo e gênero'),
      pairs: [
        { a: 'ο', b: T('masculino e feminino') },
        { a: 'η', b: T('feminino') },
        { a: 'το', b: T('neutro') },
        { a: 'τα', b: T('neutro plural') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('___ φιλία είναι μεγάλη (artigo feminino singular)'),
      answer: 'η',
      hint: T('Artigo do feminino singular'),
    },
  ],
};
