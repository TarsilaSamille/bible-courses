import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Los artículos definidos'),
  subtitle: T('el/la/los/las (+ ¡lo neutro!)'),
  section: T('Los artículos'),
  body: C(`## El sistema

El artículo definido tiene tres géneros y dos números: {el} (m. sg.), {la} (f. sg.), {los} (m. pl.), {las} (f. pl.) y el **neutro {lo}**, que solo aparece ante adjetivos, pronombres indefinidos y sustantivos abstractos: {lo bueno} «lo bueno», {lo importante}, {lo mío}, {lo que} «lo que».

Marca dos cosas: que el referente es **conocido** («el libro que leí») y que es **único** o **compartido** («el Sol», «la Creación»). Por eso Juan 1.1 usa {el}: {En el principio era el Verbo}.

## Eufonía: el ante {a} tónica

Cuando un femenino empieza por {a} o {ha} tónica, el artículo pasa a {el} para evitar dos vocales abiertas seguidas — pero **el sustantivo sigue femenino**: {el agua} «el agua» · {el árbol} «el árbol» · {el alma} «el alma» · {el hambre} «el hambre» · {el área} «el área». En el plural la {a} deja de ser tónica y el artículo regresa: {las aguas} · {los árboles}.

## Contracciones

Dos fusiones son obligatorias: {a} + {el} = {al} y {de} + {el} = {del}. Ninguna otra preposición contrae: {en} + {el} = {en el}, {para} + {el} = {para el}.

Bíblico: {al tercer día} «al tercer día» (Gn 1.5) · {la palabra del Señor} «la palabra del Señor» (Sal 33.6) · {en el principio} «en el principio» (Jn 1.1).

## Lo que NO lleva artículo

Dioses únicos y personas: {Dios} «Dios», {Jesús} «Jesús» — aunque {el Señor} «el Señor» se usa para Dios. Países sin artículo: {España}, {México}. Lenguas: {el español}, {el portugués}. Ciudades sin artículo: {Roma} «Roma», {Buenos Aires} «Buenos Aires».

## Variación europeo × americano

No cambia el artículo: {el agua} se dice igual en España y en América. Lo que cambia es el sonido de ll y de z (cap. 1) y algunos usos: en España {vosotros} (cap. 24); en América, más común {usted} en la familia.`),
  vocab: [
    V('el', 'el', 'el (masc.)'),
    V('la', 'el', 'la (fem.)'),
    V('lo bueno', 'bueno', 'lo bueno (¡neutro!)'),
    V('el agua', 'agua', 'el agua (¡eufonía!)'),
    V('al', 'al', 'al (= a + el)'),
    V('del', 'del', 'del (= de + el)'),
    V('las aguas', 'agua', 'las aguas (¡vuelve «las»!)'),
    V('en el', 'en', 'en el (¡sin contracción!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Por qué «el agua» (femenino) usa «el»?'),
    options: [
      T('Porque pasó a masculino'),
      T('Eufonía: evita «la agua» (a tónica); ¡sigue femenino!'),
      T('Error'),
      T('Plural'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Contrae: a + el = ___ (al tercer día)'),
      answer: 'al',
      hint: T('Regla §3 — contracción obligatoria.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es el plural de «el agua»?'),
      options: [T('los agua'), T('las aguas'), T('el aguas'), T('los aguas')],
      answer: 1,
      hint: T('En el plural la a deja de ser tónica: vuelve «las».'),
    },
    {
      kind: 'fill',
      prompt: T('En «En el principio» (Jn 1.1), ¿por qué no escribimos «nel»?'),
      answer: 'só a contrai com el',
      hint: T('Regla §3: solo contraen a + el y de + el.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Los femeninos con A tónica inicial llevan el por eufonía, pero siguen femeninos: el agua → las aguas.',
      ),
    },
    {
      n: '2',
      text: T('El neutro lo solo acompaña adjetivos y abstracciones: lo bueno, lo importante.'),
    },
    {
      n: '3',
      text: T('Contracciones obligatorias: a + el = al; de + el = del. Nada más contrae.'),
    },
    {
      n: '4',
      text: T(
        'Los sustantivos únicos (Dios) y los países y ciudades bien conocidos omiten el artículo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Contracción en el texto antiguo'),
      text: T(
        'En un texto antiguo verás {al} y {del} sin espacio: {dalgo}, {dél}. La ortografía moderna los separa, y nada de lo que debes aprender cambia.',
      ),
    },
  ],
  examples: [
    { text: '{En el principio}', gloss: T('En el principio (Jn 1.1).') },
    { text: '{al tercer día}', gloss: T('Al tercer día (Gn 1.5).') },
    { text: '{la palabra del Señor}', gloss: T('La palabra del Señor (Sal 33.6).') },
    { text: '{los árboles}', gloss: T('Los árboles (¡vuelve «los»!).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Artículos definidos'),
      head: [T('Número'), T('Masculino'), T('Femenino'), T('Neutro')],
      rows: [
        [T('Singular'), '{el}', '{la}', '{lo}'],
        [T('Plural'), '{los}', '{las}', '—'],
      ],
    },
    {
      caption: T('Tabla 2 — Eufonía y contracciones'),
      head: [T('Entrada'), T('Resultado'), T('Motivo')],
      rows: [
        ['{la} + {agua}', '{el agua}', T('eufonía (a tónica)')],
        ['{las} + {aguas}', '{las aguas}', T('plural: a átona')],
        ['{a} + {el}', '{al}', T('contracción obligatoria')],
        ['{de} + {el}', '{del}', T('contracción obligatoria')],
        ['{en} + {el}', '{en el}', T('sin contracción')],
      ],
    },
  ],
};
