import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  section: T('Fonética'),
  title: T('Sin espacios: dónde acaba la palabra'),
  subtitle: T('Tres caracteres forman casi siempre una palabra, y el contexto decide'),
  body: C(`## El problema

El mandarín se escribe sin espacios entre palabras. Un principiante ve {我爱你} y no sabe si es una palabra, dos o tres. La buena noticia: en la práctica **casi toda palabra tiene dos o tres caracteres**, y se agrupan de dos en dos.

{Mā ma} es una palabra, "madre". {Chī fàn} también lo es, "comer". La dificultad aparece en palabras de cuatro caracteres como {Shàngchuán}, y ahí el vocabulario te salva: si reconoces las partes, reconoces la palabra.

## Tres reglas que resuelven el caso común

Primera: {wǒ}, "yo", {nǐ}, "tú", y {tā}, "él", son palabras de un solo carácter, y casi todo lo demás se agrupa en pares. Segunda: una palabra de cuatro caracteres se parte en dos pares, como {xīn ài}, "amor genuíno", o {měi lì}, "belleza". Tercera: no hay espacio ante {的}. {wǒ} + {的} + {shū} es "mi libro", y {的} es una partícula de enlace, una "de" portuguesa pegada.

## Números, nombres y títulos al leer la Biblia

Los números de versículo son un alivio: {约翰} {3} {16} se lee "Yīnyà sān shíliù", y quien lo busca vai derecho. Los nombres propios compuestos (Israel) y los títulos pueden tardar más: muchos empiezan por {主}, el nombre divino. Aprende esos nombres como bloque y no carácter a carácter.`),
  vocab: [
    V('wǒ', '我', 'yo (wǒ)'),
    V('ài', '爱', 'amar (ài)'),
    V('nǐ', '你', 'tú (nǐ)'),
    V('tā', '他', 'él (tā)'),
    V('的', '的', 'partícula de enlace (de)'),
    V('shū', '书', 'libro (shū)'),
    V('fàn', '吃饭', 'comer (chī fàn)'),
    V('约翰', '约翰', 'Juan (Yuēhàn)'),
    V('主', '主', 'Señor; dueño (zhǔ)'),
  ],
  rules: [
    { n: '1', text: T('Las palabras tienen casi siempre dos o tres caracteres.') },
    { n: '2', text: T('{我} {你} {他} son palabras de un solo carácter; el resto, en pares.') },
    { n: '3', text: T('La partícula {的} enlaza sin espacio: {wǒ de shū} = "mi libro".') },
    { n: '4', text: T('Las palabras de cuatro caracteres suelen dividirse en dos pares.') },
  ],
  notes: [
    {
      label: T('El pinyin ayuda a separar'),
      text: T(
        'Las ediciones con pinyin separan cada sílaba — {shàng} {chuán} — lo que muestra dónde acaba la sílaba y, con práctica, la palabra.',
      ),
    },
  ],
  examples: [
    { text: '妈妈', gloss: T('mā ma — madre (dos del mismo carácter)') },
    { text: '我的书', gloss: T('wǒ de shū — mi libro') },
    { text: '吃饭', gloss: T('chī fàn — comer') },
    { text: '爱心', gloss: T('xīn ài — amor genuino') },
  ],
  tables: [
    {
      caption: T('Dónde acaba la palabra'),
      head: [T('Escrito'), T('Separado'), T('Significado')],
      rows: [
        [T('{我爱你}'), T('{wǒ} {ài} {nǐ}'), T('te amo — tres palabras')],
        [T('{吃饭}'), T('{chī} {fàn}'), T('comer — una palabra')],
        [T('{我的书}'), T('{wǒ} {的} {shū}'), T('mi libro — tres palabras')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {我的书}, ¿qué es {的}?'),
    options: [T('Un verbo'), T('Una partícula de enlace'), T('Un pronombre'), T('Un numeral')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Completa "comer": 吃____ (comer) y ____爱 (amar)'), answer: '饭' },
    {
      kind: 'match',
      prompt: T('Une la palabra con su sentido'),
      pairs: [
        { a: T('{我}'), b: T('yo') },
        { a: T('{书}'), b: T('libro') },
        { a: T('{吃饭}'), b: T('comer') },
        { a: T('{主}'), b: T('Señor; dueño') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
