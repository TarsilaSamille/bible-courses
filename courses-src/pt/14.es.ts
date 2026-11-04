import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  section: T('El sustantivo'),
  title: T('El plural: las dos reglas y las excepciones'),
  subtitle: T('irmãos, mãos, pães, y el réu que pasa a réus'),
  body: C(`## La regla general

El plural cambia la terminación: {-o} pasa a {-os}, {-a} a {-as}, {-ão} a {-ões}, {-l} a {-is}. Funciona en casi todo: {livro/livros}, {casa/casas}, {irmão/irmãos}, {animal/animais}, {país/países}.

Súmale una segunda regla, corta: los sustantivos en {-r} y {-z} pierden esa letra en el plural. {homem/homens}, {rapaz/rapazes}, {luz/luzes}.

## Los tres grupos de {-ão}

{-ão} es el único caso en que la regla general no basta. Se divide en tres grupos, y hay que saber de qué grupo es cada nombre. El primero da {-ãos}: {mão/mãos}, {órgão/órgãos}, {coração/corações}, {órfão/órfãos}, {bênção/bênçãos}. El segundo da {-ães}: {pão/pães}, {cã/cães}, {alemão/alemães}, {capitão/capitães}, {sacristão/sacristães}. El tercero da {-ões}: {irmão/irmãos}, {avião/aviões}, {limão/limões}, {tijolo/tijolos}, {algodão/algodões}.

Lo que separa los dos primeros del tercero no es la terminación: es lo que designa el nombre. {-ãos} y {-ães} designan casi siempre cosas y partes del cuerpo. {-ões} designan casi siempre personas y agentes: {irmão}, {cristão}, {comandante}. Cuando no se sabe de qué grupo es un nombre, se pregunta si aquello es persona o cosa, y la mayor parte de los casos se resuelve así.

## El plural que no cambia nada

Hay un grupo en el que el plural no añade ninguna letra. El más conocido es {o réu}, cuyo plural es {os réus}: sin {s}, con la {u} intacta, igual que en el singular. {O rei} da {os reis} y {o pai} da {os pais}, donde el plural cambia la {-i} del singular por {-eis}.

Otro grupo cambia la vocal y no la terminación: {o homem} da {os homens}, y {o boi} da {os bois}.

Lo que esto cuesta al leer es poco y lo que rinde es mucho. Las {bênçãos} de un salmo, los {irmãos} de una comunidad y los {homens} de un pueblo son tres plurales del mismo {-ão} o casi, y el griego decide cuál usar, porque cada uno corresponde a una forma griega distinta.

## Criterio de lectura

Con cualquier sustantivo que ya apareció en singular, pregúntate: si termina en {-ão}, ¿de qué grupo es? Y si no termina, ¿el plural cambia la terminación, cambia la vocal o no cambia nada? Con la respuesta, el plural queda cerrado, y el texto se puede leer sin volver al sustantivo para comprobar.`),
  vocab: [
    V('o irmão', 'irmão', 'o irmão'),
    V('os irmãos', 'irmão', 'os irmãos'),
    V('a mão', 'mão', 'a mão'),
    V('as mãos', 'mão', 'as mãos'),
    V('o pão', 'pão', 'o pão'),
    V('os pães', 'pão', 'os pães'),
    V('o órgão', 'órgão', 'o órgão'),
    V('a bênção', 'bênção', 'a bênção'),
    V('as bênçãos', 'bênção', 'as bênçãos'),
    V('o homem', 'homem', 'o homem'),
    V('os homens', 'homem', 'os homens'),
    V('o réu', 'réu', 'o réu'),
    V('os réus', 'réu', 'os réus'),
    V('o plural', 'plural', 'el plural'),
    V('a terminação', 'terminação', 'la terminación'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El plural regular cambia la terminación: {-o} en {-os}, {-a} en {-as}, {-ão} en {-ões}, {-l} en {-is}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Los sustantivos en {-r} y {-z} pierden esa letra en el plural: {homem/homens}, {luz/luzes}.',
      ),
    },
    {
      n: '§3',
      text: T('{-ão} se divide en tres grupos, y el plural sale en {-ãos}, {-ães} o {-ões}.'),
    },
    {
      n: '§4',
      text: T(
        '{-ãos} y {-ães} designan en general cosas y partes del cuerpo; {-ões} designa en general personas y agentes.',
      ),
    },
    { n: '§5', text: T('Algunos plurales no añaden nada: {réu/reus}, {rei/reis}, {mês/meses}.') },
  ],
  notes: [
    {
      label: T('Griego × portugués'),
      text: T(
        'El griego también marca el plural, pero en la terminación: {παῖς} y {παῖδες}. El portugués suele añadir {-s}, y por eso una traducción literal no siempre lleva el plural griego a la forma portuguesa.',
      ),
    },
    {
      label: T('Registro'),
      text: T(
        'Los tres grupos de {-ão} son los mismos en Portugal y en Brasil; lo que varía es el uso en palabras raras, y ahí decide el diccionario de la edición.',
      ),
    },
  ],
  examples: [
    { text: 'Viver em união como irmãos.', gloss: T('{-ão} del tercer grupo: {irmãos}.') },
    { text: 'As mãos estavam limpas.', gloss: T('{-ão} del primer grupo: {mãos}.') },
    { text: 'Partiu o pão em dois.', gloss: T('{-ão} del segundo grupo: {pães}.') },
    { text: 'O corpo e seus órgãos.', gloss: T('{-ãos}, y el plural no avisa de nada.') },
    {
      text: 'Recebeu as bênçãos do Senhor.',
      gloss: T('Plural de {bênção}, frecuente en los salmos.'),
    },
    { text: 'Os homens foram chamados.', gloss: T('Cambia la vocal, no la terminación.') },
    { text: 'Os réus esperavam o julgamento.', gloss: T('Plural sin {s}: {réus}.') },
    { text: 'Percorreu todos os países.', gloss: T('{-l} pasa a {-is}: {países}.') },
  ],
  tables: [
    {
      caption: T('Los tres grupos de {-ão}'),
      head: ['Grupo', 'Plural', 'Exemplos'],
      rows: [
        ['-ãos', 'coisas e partes do corpo', 'mão/mãos, órgão/órgãos, bênção/bênçãos'],
        ['-ães', 'coisas e gentílicos', 'pão/pães, cã/cães, alemão/alemães'],
        ['-ões', 'pessoas e agentes', 'irmão/irmãos, avião/aviões, limão/limões'],
      ],
    },
    {
      caption: T('Plurales que no cambian la terminación'),
      head: ['Singular', 'Plural', 'O que acontece'],
      rows: [
        ['o réu', 'os réus', 'nada muda'],
        ['o rei', 'os reis', 'o -i vira -eis'],
        ['o mês', 'os meses', 'cai o -s'],
      ],
    },
    {
      caption: T('Terminaciones que cambian en el plural'),
      head: ['Terminação', 'Plural', 'Exemplos'],
      rows: [
        ['-l', '-is', 'país/países, animal/animais'],
        ['-r', 'sem r', 'homem/homens, flor/flores'],
        ['-z', 'sem z', 'luz/luzes, rapaz/rapazes'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el plural de {o irmão}?'),
    options: [T('os irmãos'), T('os irmãos'), T('os irmãos com s'), T('os mãos')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('El plural de {o pão} es os ______.'),
      answer: 'pães',
      hint: T('Segundo grupo de {-ão}.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de estos plurales no cambia la terminación?'),
      options: [T('os réus'), T('os reis'), T('os meses'), T('os homens')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el singular con el plural.'),
      pairs: [
        { a: T('o irmão'), b: T('os irmãos') },
        { a: T('a mão'), b: T('as mãos') },
        { a: T('o pão'), b: T('os pães') },
        { a: T('o réu'), b: T('os réus') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
