import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Lectura: Juan 1:1'),
  subtitle: T('Distinguir demótico y koiné'),
  section: T('Lecturas'),
  body: C(`## Dos traducciones, un verbo

El versículo más conocido de la Biblia en griego admite dos lecturas. La versión literal, siguiendo el texto bizantino, dice **Ἐν ἀρχῇ ἦν ὁ λόγος** — «en el principio era el Verbo». Una traducción actualizada cambia ἦν (era) por **ἦταν** (estaba), y la diferencia no es cosmética: **ἦν** es la forma más antigua de εἰμί, el verbo *ser* por excelencia, sin tiempo definido ni comienzo; **ἦταν** es el imperfecto, que marca acción continua y duración.

Ninguna de las dos está mal. La elección dice qué quiere resaltar el traductor: **ἦν** resalta la eternidad del Verbo, **ἦταν** resalta la acción que continúa.

## Lo que el texto no dice

El griego **no dice** que Dios «se hizo» Verbo. Las tres afirmaciones usan **ἦν** — era, era, era — y entre ellas aparece **πρὸς τὸν θεόν**, «junto de Dios». La palabra que el texto evita es **ἐγένετο**, «vino a ser»: el verbo que introduce la creación y Génesis. Quien traduce «se hizo carne» (ἐγένετο σάρξ) está traduciendo un verbo distinto del de las tres afirmaciones, y esa es la diferencia entre origen e identidad.

## Anatomía del versículo

ἀρχή (el comienzo), λόγος (de la familia de λέγω, «decir», y aquí **Palabra**), θεός (Dios), κόσμος (el mundo). Cuatro palabras conocidas, montadas de una manera que solo el griego permite. **Ἐν ἀρχῇ** con dativo es expresión fija: «en el principio», no «en un comienzo».

## Criterio de lectura

En Jn 1:1, si tu traducción dice «era» y la de otro dice «estaba», las dos están bien. Pero hay algo que ninguna muestra: la identidad, no la comparación. El Verbo no es *como* Dios: el Verbo **era** Dios.`),
  vocab: [
    V('ἀρχή', 'ἀρχή', 'principio'),
    V('ἦν', 'εἰμί', 'era'),
    V('ἦτο', 'εἰμί', 'era'),
    V('λόγος', 'λόγος', 'Palabra'),
    V('παρά', 'παρά', 'junto a'),
    V('Θεός', 'θεός', 'Dios'),
    V('ζωή', 'ζωή', 'vida'),
    V('φῶς', 'φῶς', 'luz'),
    V('ἐν', 'ἐν', 'en'),
    V('ήταν', 'είμαι', 'era (demótico)'),
    V('κτίση', 'κτίσις', 'creación'),
    V('κτίζω', 'κτίζω', 'creo, crear'),
    V('λέγω', 'λέγω', 'digo, decir'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la forma moderna de ἦν?'),
    options: [T('ήταν'), T('ἦν'), T('είναι'), T('ήμουν')],
    answer: 0,
  },
  exercises: [
    { kind: 'fill', prompt: T('Ἐν ___ ἦν ὁ λόγος'), answer: 'ἀρχῇ', hint: T('«En el principio»') },
    {
      kind: 'choose',
      prompt: T('¿Qué palabra significa «Palabra»?'),
      options: [T('λόγος'), T('ἀρχή'), T('ζωή'), T('φῶς')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona forma y etapa'),
      pairs: [
        { a: 'ἦν', b: T('koiné') },
        { a: 'ήταν', b: T('moderno') },
        { a: 'λόγος', b: T('Palabra') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('ἦν es koiné; ήταν es la forma demótica de ese mismo pasado.') }],
  notes: [
    {
      label: T('Fidelidad'),
      text: T(
        'Θεὸς ἦν ὁ λόγος usa el verbo ser y no κτίζω: Juan 1:1 no presenta la Palabra como criatura.',
      ),
    },
  ],
  examples: [
    { text: 'Ἐν ἀρχῇ ἦν ὁ λόγος', gloss: T('En el principio era la Palabra') },
    { text: 'Ἐν αρχή ήταν ο λόγος', gloss: T('En el principio la Palabra estaba') },
  ],
  tables: [
    {
      caption: T('Koiné y demótico'),
      head: ['Función', 'Koiné', 'Moderno'],
      rows: [
        ['ser (3ª sg.)', 'ἦν', 'ήταν'],
        ['junto a', 'παρά + dativo', 'παρά + acusativo'],
        ['Artículo', 'ὁ λόγος', 'ο λόγος'],
      ],
    },
  ],
};
