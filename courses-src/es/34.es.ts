import { C, T, V } from '../shared.mts';

export default {
  id: 34,
  title: T('La oración principal'),
  subtitle: T('orden flexible, sujeto que desaparece — Jn 1.1'),
  section: T('Sintaxis'),
  body: C(`## El esqueleto: sujeto + verbo

Toda oración tiene un **verbo**; el sujeto es el término que el verbo trae consigo, y por eso puede **desaparecer**: {Oro} = {Yo oro} «(yo) oro» · {Oramos} «(nosotros) oramos» · {Habla Dios} «Dios habla».

El verbo ya lleva la persona, el número y (casi siempre) el tiempo, el modo y el aspecto.

## El orden es flexible

El orden neutro es **SVO**, pero el español permite adelantar cualquier elemento para dar énfasis:

• Verbo primero (énfasis en el verbo): {Vino Jesús} «vino Jesús».
• Objeto primero (énfasis en el objeto): {A Dios oramos} «a Dios oramos» · {El Hijo amo, y no yo} «al Hijo amo, y no a mí» (1 Jn 4.9).
• Complemento adverbial primero (escenario): {En el principio era el Verbo} «En el principio era el Verbo» (Jn 1.1) · {Cuando vio, lloró} «cuando vio, lloró».

Lo que nunca cambia es la relación **sujeto-verbo**: si el sujeto va después, recibe el pronombre: {Existe un Dios} «existe un Dios».

## La negación

El {no} entra **antes** del verbo y antes de cualquier pronombre: {No creo} «no creo» · {No te veo} «no te veo» · {No hay} «no hay» · {No lo sé} «no lo sé».

Dos negaciones son imposibles: {*No no creo} está mal.

## La pregunta

La entonación ya basta: {¿Vienes?} «¿vienes?».

Con palabra interrogativa el orden **no** se invierte: {¿Dónde moras?} «¿dónde moras?» — el sujeto queda después del verbo, igual que en la afirmación.

Excepción coloquial: {¿Vienes tú?}, con sujeto de contraste.

## Lectura de Juan 1.1-2 (Reina-Valera 1960)

{En} {el principio} {era} {el Verbo}, {y} {el Verbo} {era} {con Dios}...

1. {En el principio} — complemento temporal en primer lugar: **escenario**.
2. {era} — {ser} en 3.ª del singular del **imperfecto**: descripción, no un hecho puntual.
3. {el Verbo} — sujeto pospuesto, marcado por el artículo **definido** {el}: unicidad.
4. El verbo está en **imperfecto**, no en pretérito: el Verbo ya *era* cuando la historia empezó a contar.
5. {y el Verbo era con Dios} — la {y} solo enlaza; la estructura se repite como un estribillo.

La oración más corta del capítulo — {Y el Verbo era Dios} (Jn 1.1) — es el mismo esqueleto: sujeto {el Verbo} + {era} + atributo {Dios}.`),
  vocab: [
    V('oro', 'orar', 'oro (¡sin «yo»!)'),
    V('No creo', 'creer', 'no creo'),
    V('No hay', 'haber', 'no hay'),
    V('Vino Jesús', 'venir', 'Vino Jesús (¡verbo primero!)'),
    V('el Verbo', 'verbo', 'el Verbo (¡artículo definido!)'),
    V('En el principio', 'principio', 'En el principio (Jn 1.1)'),
    V('era con Dios', 'ser', 'era con Dios (Jn 1.1)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Por qué «oro» prescinde de «yo»?'),
    options: [
      T('Error'),
      T('El verbo lleva la persona (¡el sujeto desaparece!)'),
      T('Solo poesía'),
      T('Futuro'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Dónde va el «no» en la negación?'),
      options: [
        T('Después del verbo'),
        T('Antes del verbo y de los pronombres'),
        T('Al final de la oración'),
        T('Donde sea'),
      ],
      answer: 1,
      hint: T('Regla §3: «no» siempre antes del verbo.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa Jn 1.1: «En el principio ___ el Verbo» (era)'),
      answer: 'era',
      hint: T('Regla §5: aquí el tiempo es imperfecto (escenario).'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la función con el ejemplo'),
      pairs: [
        { a: T('sujeto elíptico'), b: T('{Oro}') },
        { a: T('verbo en primer lugar'), b: T('{Vino Jesús}') },
        { a: T('escenario'), b: T('{En el principio}') },
        { a: T('negación'), b: T('{No creo}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('El sujeto puede omitirse porque el verbo ya lo identifica: Oro, Habla Dios.'),
    },
    {
      n: '2',
      text: T(
        'El orden SVO es neutro, pero cualquier elemento puede adelantarse para dar énfasis.',
      ),
    },
    {
      n: '3',
      text: T(
        'El «no» de la negación va siempre antes del verbo y de los pronombres: no te veo, no lo sé.',
      ),
    },
    {
      n: '4',
      text: T(
        'En la pregunta con palabra-Q no hay inversión: ¿Dónde moras? tiene el mismo esqueleto que la afirmación.',
      ),
    },
    {
      n: '5',
      text: T(
        'El imperfecto con ser y estar describe estado: era, estaba — el tiempo del fondo narrativo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Sujeto, verbo, complemento'),
      text: T(
        'La oración principal es exactamente eso. Lo que complica la lectura es que el verbo puede ir en medio: {A Dios oramos} invierte el orden sin cambiar el papel de ninguna palabra.',
      ),
    },
  ],
  examples: [
    {
      text: '{En el principio era el Verbo}',
      gloss: T('En el principio era el Verbo (Jn 1.1 — complemento + verbo + sujeto).'),
    },
    { text: '{Oro}', gloss: T('Oro (¡el sujeto «yo» ha desaparecido!).') },
    { text: '{No lo sé}', gloss: T('No lo sé (negación + pronombre átono).') },
    { text: '{¿Dónde moras?}', gloss: T('¿Dónde moras? (pregunta sin inversión; Jn 1.38).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Orden de los elementos'),
      head: [T('Patrón'), T('Ejemplo'), T('Efecto')],
      rows: [
        ['SVO', '{Dios ama al mundo}', T('neutro')],
        ['SVO (sujeito omitido)', '{Ama al mundo}', T('sujeto elíptico')],
        ['Verbo + sujeito', '{Vino Jesús}', T('énfasis en el verbo')],
        ['Objeto + verbo + sujeito', '{Al mundo lo amó Dios}', T('énfasis en el objeto')],
        ['Adjunto + verbo + sujeito', '{En el principio era el Verbo}', T('escenario')],
      ],
    },
    {
      caption: T('Tabla 2 — Análisis de Juan 1.1-2'),
      head: [T('Palabra'), T('Función'), T('Nota')],
      rows: [
        ['{En el principio}', T('complemento temporal'), T('abre el versículo')],
        ['{era}', T('verbo (imperf.)'), T('descripción, no suceso')],
        ['{el Verbo}', T('sujeto pospuesto'), T('art. definido: unicidad')],
        ['{con Dios}', T('complemento'), T('preposición + a personal')],
        ['{y el Verbo}', T('coordinación'), T('la «y» solo liga oraciones')],
      ],
    },
  ],
};
