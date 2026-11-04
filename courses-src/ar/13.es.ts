import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Numerales y concordancia'),
  subtitle: T('Del uno al mil'),
  section: T('El nombre'),
  body: C(`## Del 3 al 10 el numeral es femenino

De {ثَلَاثَة} a {عَشَرَة}, el numeral aparece en forma femenina incluso ante un sustantivo masculino: {ثَلَاثَةُ أَيَّامٍ} es «tres días», y no «tres libro». No es un error, es la herencia de una regla antigua que trataba el sustantivo contado como femenino. {اِثْنَانِ} es el único numeral que concuerda con normalidad.

## El sustantivo va a genitivo

El sustantivo contado pierde la nunación y toma el genitivo, visible en {أَيَّامٍ}. El numeral queda en el caso que pida el resto de la cláusula. Por eso la traducción debe conservar la idea de recuento: en português basta decir «tres días», y el genitivo desaparece por el camino.

## Del 11 al 99 cambia todo

La estructura se invierte: la unidad va primero, la decena después, y el sustantivo sigue en plural. {إِحْدَى عَشَرَةَ} es «once» (unidad femenina + decena) y {ثَلَاثَةَ عَشَرَ} es «trece» (unidad masculina + decena). Esa inversión entre 13 y 19, frente a 11 y 12, es una de las características clásicas del sistema.

## Por encima de cien

{mِائَة} y {أَلْف} son indeclinables y no exigen cambio de género. Desde doscientos vuelve la concordancia: {مِائَتَانِ} es el dual, y {مِائَةٌ وَثَلَاثُونَ} mantiene unidad y decena separadas.

## Criterio de lectura

Cuenta del 3 al 20 hasta que el patrón sea automático. Después, en cualquier versículo con numeral, comprueba tres cosas: el género del numeral, el caso del sustantivo y la posición de la unidad respecto de la decena.`),
  vocab: [
    V('وَاحِد', 'واحد', 'uno'),
    V('اِثْنَانِ', 'اثنان', 'dos'),
    V('ثَلَاثَة', 'ثلاثة', 'tres'),
    V('أَرْبَعَة', 'أربعة', 'cuatro'),
    V('خَمْسَة', 'خمسة', 'cinco'),
    V('سِتَّة', 'ستة', 'seis'),
    V('سَبْعَة', 'سبعة', 'siete'),
    V('ثَمَانِيَة', 'ثمانية', 'ocho'),
    V('تِسْعَة', 'تسعة', 'nueve'),
    V('عَشَرَة', 'عشرة', 'diez'),
    V('مِائَة', 'مائة', 'cien'),
    V('أَلْف', 'ألف', 'mil'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('¿Cómo se dice «siete»?'),
    answer: 'سَبْعَة',
    hint: T('Empieza por sīn y termina en tāʾ marbūṭa.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué numeral cuenta «libros» (masculinos)?'),
      options: [T('tres'), T('tres masc.'), T('tres acus.'), T('tercio')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona número y forma.'),
      pairs: [
        { a: T('dos'), b: T('dos') },
        { a: T('cinco'), b: T('cinco') },
        { a: T('diez'), b: T('diez') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'fill',
      prompt: T('Completa «___ لَيْلَةٍ» (mil noches).'),
      answer: 'أَلْفُ',
      hint: T('La palabra significa «mil».'),
    },
  ],
  rules: [
    { n: '1', text: T('Del 3 al 10 el numeral es femenino sea cual sea el sustantivo contado.') },
    { n: '2', text: T('El sustantivo contado del 3 al 10 va en genitivo, normalmente plural.') },
    { n: '3', text: T('Del 11 al 99 se forman por construcción: la unidad precede a la decena.') },
  ],
  notes: [
    {
      label: T('Contar'),
      text: T('La forma {ثَلَاثَة} no vuelve femenino «día»; refleja la polaridad del numeral.'),
    },
  ],
  examples: [
    { text: 'ثَلَاثَةُ أَيَّامٍ', gloss: T('tres días') },
    { text: 'سَبْعُ سِنِينَ', gloss: T('siete años') },
    { text: 'اِثْنَا عَشَرَ', gloss: T('doce') },
  ],
  tables: [
    {
      caption: T('Números 1–12'),
      head: [T('Número'), T('Árabe')],
      rows: [
        ['1', 'وَاحِد'],
        ['2', 'اِثْنَانِ'],
        ['3', 'ثَلَاثَة'],
        ['4', 'أَرْبَعَة'],
        ['5', 'خَمْسَة'],
        ['6', 'سِتَّة'],
        ['7', 'سَبْعَة'],
        ['8', 'ثَمَانِيَة'],
        ['9', 'تِسْعَة'],
        ['10', 'عَشَرَة'],
        ['11', 'إِحْدَى عَشَرَةَ'],
        ['12', 'اِثْنَا عَشَرَ'],
      ],
    },
  ],
};
