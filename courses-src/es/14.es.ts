import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('{ser} y {estar}'),
  subtitle: T('esencia × estado — el par famoso'),
  section: T('Los verbos'),
  body: C(`## {ser} = identidad

{ser} responde a **quién es**: identidad, origen, hora, materia, profesión. Formas: {soy}, {eres}, {es}, {somos}, {sois}, {son}.

{Soy cristiano} «soy cristiano» · {Es de Dios} «es de Dios» · {Son las tres} «son las tres» · {Fue escrito} «fue escrito» (¡pasiva!).

## {estar} = estado

{estar} responde a **cómo está** o **dónde está**: lugar, estado físico, acción en curso. Formas: {estoy}, {estás}, {está}, {estamos}, {estáis}, {están}.

{Estoy aquí} «estoy aquí» · {Está escrito} «está escrito» (¡estado!) · {Están orando} «están orando» · {Está cansado} «está cansado».

## Cuatro decisiones

1. **Identidad × profesión**: {Es médico} «es médico», nunca {Está médico}.
2. **Materia × estado**: {Es de madera} «es de madera» frente a {Está mojado} «está mojado».
3. **Lugar**: siempre {estar} — {La casa está en Madrid} — salvo eventos programados: {La reunión es en Madrid} «la reunión es en Madrid».
4. **Acción en curso**: {estar} + gerundio ({está hablando}) o {estar} + {a} + infinitivo ({está a punto de} «está prestes a»).

## La puerta de la pasiva

{ser} + participio = **voz pasiva** ({fue creado}) · {estar} + participio = **estado** ({está cerrado} «está cerrado»). El cap. 20 vuelve al tema.

## Teología en dos palabras

{Dios es amor} «Dios **es** amor» (1 Jn 4.8) frente a {Dios está con nosotros} «Dios **está** con nosotros» (1 Jn 4.16: la unidad, porque el Espíritu está entre nosotros). La elección del verbo carga la teología.`),
  vocab: [
    V('soy', 'ser', 'soy (¡esencia!)'),
    V('estoy', 'estar', 'estoy (¡estado!)'),
    V('es', 'ser', 'es (¡esencia!)'),
    V('está', 'estar', 'está (¡estado!)'),
    V('Son las tres', 'ser', 'son las tres'),
    V('están orando', 'estar', 'están orando (¡gerundio!)'),
    V('es', 'ser', 'es (1 Jn 4.8)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«Dios es amor» frente a «Dios está con nosotros»?'),
    options: [
      T('Iguales'),
      T('Esencia (¡ser!) frente a presencia/estado (¡estar!)'),
      T('Lo contrario'),
      T('Error'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «Son las ___» (son las tres)'),
      answer: 'tres',
      hint: T('La hora es tiempo: siempre ser.'),
    },
    {
      kind: 'choose',
      prompt: T('«La casa ___ en Madrid.» ¿Qué verbo?'),
      options: [T('{es}'), T('{está}'), T('{son}'), T('{están}')],
      answer: 1,
      hint: T('Regla §2: lugar = estar.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la oración con el verbo correcto'),
      pairs: [
        { a: T('{Dios es amor}'), b: T('ser (esencia)') },
        { a: T('{La puerta está cerrada}'), b: T('estar (¡estado!)') },
        { a: T('{Fue escrito}'), b: T('ser (¡pasiva!)') },
        { a: T('{Están orando}'), b: T('estar (¡gerundio!)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Ser = identidad, origen, hora, materia. Estar = lugar, estado, acción en curso.'),
    },
    {
      n: '2',
      text: T(
        'Ser + participio forma la pasiva (fue escrito); estar + participio indica estado (está cerrado).',
      ),
    },
    { n: '3', text: T('Lugares y estados usan estar; los eventos programados usan ser.') },
  ],
  notes: [
    {
      label: T('Un adjetivo, dos verbos'),
      text: T(
        'La elección entre {ser} y {estar} no es de significado sino de estado: {es aburrido} diagnostica, {está aburrido} observa. Con {ser} + {-ado} el valor es permanente; con {estar}, temporal.',
      ),
    },
  ],
  examples: [
    { text: '{Dios es amor}', gloss: T('Dios es amor (¡esencia! 1 Jn 4.8).') },
    { text: '{Dios está con nosotros}', gloss: T('Dios está con nosotros (¡presencia!)') },
    { text: '¿Dónde estás?}', gloss: T('¿Dónde estás? (Gn 3.9)') },
    { text: '{Están orando}', gloss: T('Están orando (acción en curso).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — ser × estar'),
      head: [T('Persona'), T('ser (¡esencia!)'), T('estar (¡estado!)')],
      rows: [
        ['yo', '{soy}', '{estoy}'],
        ['tú', '{eres}', '{estás}'],
        ['él/ella/usted', '{es}', '{está}'],
        ['nosotros', '{somos}', '{estamos}'],
        ['vosotros', '{sois}', '{estáis}'],
        ['ellos/ustedes', '{son}', '{están}'],
      ],
    },
    {
      caption: T('Tabla 2 — Lo que pide cada verbo'),
      head: [T('Pregunta'), T('Verbo'), T('Ejemplo')],
      rows: [
        [T('¿Quién es?'), '{ser}', '{Es el Hijo}'],
        [T('¿De qué está hecho?'), '{ser}', '{La mesa es de madera}'],
        [T('¿Qué hora es?'), '{ser}', '{Son las tres}'],
        [T('¿Dónde está?'), '{estar}', '{Está en la casa}'],
        [T('¿Cómo está?'), '{estar}', '{Está enfermo}'],
        [T('¿Qué está pasando?'), '{estar}', '{Están orando}'],
      ],
    },
  ],
};
