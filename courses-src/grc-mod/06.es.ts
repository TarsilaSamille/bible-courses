import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Pasado: aoristo'),
  subtitle: T('μίλησα, έφαγα, πήγα'),
  section: T('El verbo'),
  body: C(`## El aoristo es el tiempo por defecto del pasado

Si una frase griega antigua está en pasado y no sabes en qué tiempo, es casi con seguridad un aoristo. Es el tiempo «neutro»: no lleva aspecto propio y cubre lo que pasó una vez, lo que pasó muchas veces y lo que empezó. Solo el contexto decide cuál.

El aoristo activo sigue el tema del presente: μιλώ → **μίλησα**, μίλησες, μίλησε, μιλήσαμε, μιλήσατε, μίλησαν. Fíjate en el -σα añadido en el singular. El acento puede desplazarse (λέω → είπα, de ἄλλω), pero la forma se reconoce por el tema y las terminaciones.

## Los irregulares son un conjunto fijo

Un puñado de verbos cambia el tema entero: τρώω → **έφαγα**, πάω → **πήγα**, βλέπω → **είδα**, λέω → **είπα**, παίρνω → **πήρα**, βρίσκω → **βρήκα**. Son los verbos que se aprenden de memoria porque la forma no sale del presente. λέω es el caso curioso: sigue irregular en el presente (λέω, λες, λέει) y irregular en el aoristo (είπα), y es el más común de todo el Nuevo Testamento.

## Aoristo, imperfecto y la textura que se pierde

El **imperfecto** (lección 9) es el otro lado: acción en curso, costumbre, o acción pasada con idea de duración. **ἐλάλουν** «hablaba» junto a **εἶπα** «dijo» es la distinción más útil de la lengua. Un versículo con los dos te da al narrador en acción: lo que se dijo (aoristo) y lo que pasaba alrededor (imperfecto).

## θa y el futuro

θα más una forma verbal forma el futuro, y no se combina con να: θα μιλήσω «hablaré», no θα να μιλήσω. Pero en el habla, θα μιλήσω puede significar «hablaré» o «puedo hablar», según el contexto: la misma ambigüedad que tiene el español en «va a hacer» o «va a llover».

## Criterio de lectura

Cada vez que un verbo esté en aoristo, pregunta: ¿el texto cuenta un hecho, una costumbre o un comienzo? La forma no lo dice; la situación sí. Y si aparece λέω, casi siempre es είπα: el irregular más común del Nuevo Testamento.`),
  vocab: [
    V('μίλησα', 'μιλώ', 'hablé'),
    V('μίλησε', 'μιλώ', 'habló'),
    V('μιλήσαμε', 'μιλώ', 'hablamos'),
    V('μίλησαν', 'μιλώ', 'hablaron'),
    V('έφαγα', 'τρώω', 'comí'),
    V('πήγα', 'πάω', 'fui'),
    V('είδα', 'βλέπω', 'vi'),
    V('είπα', 'λέω', 'dije'),
    V('θα', 'θα', 'partícula de futuro'),
    V('μίλησες', 'μιλώ', 'hablaste'),
    V('μιλήσατε', 'μιλώ', 'hablasteis'),
    V('πάω', 'πάω', 'voy'),
    V('λέω', 'λέω', 'digo'),
    V('να', 'να', 'que (subjuntivo)'),
  ],
  exercise: { kind: 'fill', prompt: T('βλέπω → vi'), answer: 'είδα', hint: T('Aoristo irregular') },
  exercises: [
    {
      kind: 'choose',
      prompt: T('«Nosotros hablamos ayer»'),
      options: [T('μιλήσαμε'), T('μιλάμε'), T('μιλάτε'), T('μίλησαν')],
      answer: 0,
    },
    { kind: 'fill', prompt: T('εγώ ___ a mi amigo'), answer: 'είδα', hint: T('βλέπω → aoristo') },
    {
      kind: 'match',
      prompt: T('Relacionar presente y aoristo'),
      pairs: [
        { a: 'τρώω', b: 'έφαγα' },
        { a: 'πάω', b: 'πήγα' },
        { a: 'λέω', b: 'είπα' },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [
    { n: '§1', text: T('El aoristo no exige idea de duración.') },
    { n: '§2', text: T('La negación mantiene δεν: δεν μίλησα.') },
  ],
  notes: [
    {
      label: T('Demótico × koiné'),
      text: T(
        'είπα, έφαγα y πήγα pertenecen al pasado demótico; εἶπεν, ἔφαγεν y ἐπῆλθεν son formas del sistema koiné.',
      ),
    },
  ],
  examples: [
    { text: 'χθες μίλησα μαζί σου', gloss: T('ayer hablé contigo') },
    { text: 'δεν είπα τίποτα', gloss: T('no dije nada') },
  ],
  tables: [
    {
      caption: T('Aoristo regular'),
      head: ['Pronome', 'Singular', 'Plural'],
      rows: [
        ['1ª', 'μίλησα', 'μιλήσαμε'],
        ['2ª', 'μίλησες', 'μιλήσατε'],
        ['3ª', 'μίλησε', 'μίλησαν'],
      ],
    },
  ],
};
