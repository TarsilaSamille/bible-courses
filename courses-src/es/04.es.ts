import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Los artículos indefinidos'),
  subtitle: T('un/una/unos/unas — y cuándo desaparecen'),
  section: T('Los artículos'),
  body: C(`## El sistema

El artículo indefinido traduce el «un» portugués y el «a» inglés: {un} (m. sg.), {una} (f. sg.), {unos} y {unas}. El plural **no** significa «algunos» por sí solo: es el plural normal, {un libro}/{unos libros}, {una casa}/{unas casas}.

Como el definido, {un} pasa a {un agua} «un agua» cuando el femenino empieza por {a} tónica.

## Cuándo desaparece el artículo INDEFINIDO

1. **Tras {ser}** con profesión, religión o nacionalidad: {Es médico} «es médico» · {Es española} «es española» · {Son estudiantes} «son estudiantes». Pero si entra un **adjetivo**, el {un} vuelve: {Es un buen médico} «es un buen médico» · {Fue una estudiante excelente} «fue una estudiante excelente».
2. **Con {otro}, {cierto}, {algun}, {cada}, {varios}, {todos}, {muchos}**: {otro día} «otro día» · {cada uno} «cada uno» · {algún día} «algún día».
3. **Con sustantivos contables ya cuantificados por el contexto**: {Tengo libros} «tengo libros».
4. En exclamaciones de medida o cantidad: {un poco de} «un poco de» · {una taza de} «una taza de».

## {uno} como pronombre

{uno} (¡nunca {un uno}!) es pronombre indefinido personal: {Uno nunca sabe} «uno nunca sabe» · {Uno solo} «solo uno» · {Uno mismo} «uno mismo».

Ej.: {a cada uno conforme su capacidad} «a cada uno conforme su capacidad» (Mt 25.15) — {a} es preposición, {cada uno} ya significa «cada uno».

## Europa × América

Las reglas del indefinido son las mismas en ambos mundos. Donde sí se ve la diferencia es en los pronombres: España usa {vosotros} (cap. 24) y América {ustedes} para el plural; además {vos} «tú» (Argentina, Uruguay) no existe en la España peninsular.`),
  vocab: [
    V('un', 'un', 'un (masc.)'),
    V('una', 'un', 'una (fem.)'),
    V('unos', 'un', 'unos (¡plural!)'),
    V('otro día', 'otro', 'otro día (¡sin «un»!)'),
    V('cada uno', 'uno', 'cada uno'),
    V('uno', 'uno', 'uno, alguien (¡pronombre!)'),
    V('un agua', 'agua', 'un agua (¡eufonía!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«Es maestro» frente a «Es un buen maestro»?'),
    options: [
      T('Iguales'),
      T('Sin adjetivo, sin «un»; CON adjetivo, vuelve el «un»'),
      T('Lo contrario'),
      T('Ambas están mal'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa sin artículo: «___ buena maestra» (ella es una buena maestra)'),
      answer: 'una',
      hint: T('Con adjetivo, vuelve el «un».'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración sigue la regla?'),
      options: [
        T('Tengo un libros'),
        T('Tengo otros libros'),
        T('Tengo unos libros'),
        T('Tengo libros'),
      ],
      answer: 1,
      hint: T('Regla §2: con otro nunca «un».'),
    },
    {
      kind: 'fill',
      prompt: T('Sustituye por «uno»: «Ningún hombre puede ___ mismo»'),
      answer: 'salvar',
      hint: T('Fórmula: poder uno mismo + verbo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Profesiones y nacionalidades tras ser omiten un: Es maestro — pero Es un buen maestro CON adjetivo.',
      ),
    },
    { n: '2', text: T('Con otro/cierto/tal, nunca un: otro día (¡otro día!).') },
    { n: '3', text: T('Uno es pronombre y nunca lleva un: uno nunca sabe, cada uno, uno mismo.') },
  ],
  notes: [
    {
      label: T('Lo = o + lo'),
      text: T(
        '{lo} no va solo: es {a} + {lo} con la {a} absorbida. Por eso {lo vi} puede ser «el vi» o «lo vi» — decide el contexto, no la gramática.',
      ),
    },
  ],
  examples: [
    { text: '{un libro}', gloss: T('Un libro.') },
    { text: '{unos días}', gloss: T('Unos días.') },
    { text: '{cada uno}', gloss: T('Cada uno (Mt 25.15).') },
    { text: '{otro día}', gloss: T('Otro día — sin «un».') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Indefinidos'),
      head: [T('Número'), T('Masculino'), T('Femenino')],
      rows: [
        [T('Singular'), '{un}', '{una}'],
        [T('Plural'), '{unos}', '{unas}'],
      ],
    },
    {
      caption: T('Tabla 2 — Dónde aparece el indefinido y dónde desaparece'),
      head: [T('Contexto'), T('Con indefinido'), T('Sin indefinido')],
      rows: [
        [T('profesión (ser)'), '{Es un médico}', '{Es médico}'],
        [T('profesión + adjetivo'), '{Es un buen médico}', '—'],
        [T('nacionalidad'), '{Es un americano}', '{Es americano}'],
        [T('contable sin quantifying'), '—', '{Tengo libros}'],
        [T('cuantificadores'), '—', '{otro día}, {algún día}'],
      ],
    },
  ],
};
