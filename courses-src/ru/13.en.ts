import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Numerals and quantity'),
  subtitle: T('один, два, пять + cases'),
  section: T('Pronouns and numerals'),
  body: C(
    'Cardinal numerals agree with the counted noun: один день, две книги, пять дней. The numeral один is adjective-like and declines: одного дня, одному дню, одном дне. When the numeral itself declines, the noun can remain singular only in special constructions, chiefly collective phrases: два часа is often preferred to двух часов. For 2–4, the standard pattern is numeral nominative plus noun genitive singular: два дня, три месяца. For 5 onward, use noun genitive plural: пять дней, двадцать учеников, сто лет. Compound numerals ending in 2–4 follow the singular pattern only if the final numeral is 2–4; otherwise use the plural noun. Ordinals decline: третьего дня. Quantities take the genitive: много воды, мало света, несколько человек.',
  ),
  vocab: [
    V('один', 'один', 'one'),
    V('две', 'два', 'two feminine'),
    V('дня', 'день', 'days (gen. sg.)'),
    V('дней', 'день', 'days (gen. pl.)'),
    V('третьего', 'третий', 'third (genitive)'),
    V('много воды', 'вода', 'much water'),
    V('пять дней', 'день', 'five days'),
    V('два часа', 'час', 'two hours'),
  ],
  exercise: { kind: 'fill', prompt: T('Complete: два ___ (two days)'), answer: 'дня' },
  exercises: [
    { kind: 'fill', prompt: T('Complete: пять ___'), answer: 'дней' },
    { kind: 'fill', prompt: T('Complete: ___ книги (two)'), answer: 'две' },
    {
      kind: 'choose',
      prompt: T('Which case follows много воды?'),
      options: [T('Nominative'), T('Genitive'), T('Dative')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('After 2–4 use genitive singular; from 5 onward use genitive plural.') },
  ],
  notes: [
    {
      label: T('Three to ten is feminine'),
      text: T(
        'From 3 to 10 the numeral is feminine; from 11 on the unit agrees normally again. The gender switch in {трёх} is the residue of an old rule, not a scribal error.',
      ),
    },
  ],
  examples: [
    { text: 'в третий день', gloss: T('on the third day') },
    { text: 'семь дней', gloss: T('seven days') },
  ],
  tables: [
    {
      caption: T('Counting from 1 to 5'),
      head: ['Número', 'Exemplo', 'Explicação'],
      rows: [
        ['1', 'один день', 'nominativo singular'],
        ['2', 'два дня', 'genitivo singular'],
        ['3', 'три дня', 'genitivo singular'],
        ['4', 'четыре дня', 'genitivo singular'],
        ['5', 'пять дней', 'genitivo plural'],
      ],
    },
  ],
};
