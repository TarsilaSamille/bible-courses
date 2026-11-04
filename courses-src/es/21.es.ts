import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('La voz pasiva'),
  subtitle: T('fue escrito — se venden casas'),
  section: T('Los verbos'),
  body: C(`## Dos pasivas, no una

El español resuelve la pasiva de dos maneras: con {ser} (sucesos, documentos, muerte) y con {se} (procesos cotidianos, fenómenos naturales).

**A. {ser} + participio** — la pasiva clásica, solemne, del documento y del evangelio.

{fue escrito} «fue escrito» · {es amado} «es amado» · {será salvado} «será salvado» · {fue crucificado} «fue crucificado».

El participio **concorda** con el sujeto: {fueron escritas} «fueron escritas».

El agente entra con {por}: {escrito por Dios} «escrito por Dios» · {purificado por la sangre de Cristo} (Hb 9.14).

**B. {se} + verbo** — la pasiva circunstancial, impersonal o natural: {se venden casas} «se venden casas» · {se habla español} «se habla español» · {se hace todo} «se hace todo».

Aquí el verbo **concorda con el sustantivo**: {se venden} «se venden» (¡plural!) · {se habla español} «se habla español» (singular, porque {español} es singular). Es el mismo mecanismo del portugués de Brasil.

## Cómo distinguir el {se} reflexivo del {se} pasivo

La prueba es la **presencia de un objeto indirecto o de un agente explícito**:

• Reflexivo: {El niño se lava} «el niño se lava»; {se arrepintió} «se arrepintió».
• Pasiva: {Se escribió una carta} «se escribió una carta» — el sujeto actúa, pero el objeto es paciente.
• Con los pronombres {me, te, se}: si señalan a quien ejecuta la acción, es reflexivo; si señalan a la cosa afectada, es impersonal.

## Resumen bíblico

{fue traspasado} «fue traspasado» (Jn 19.37) · {fueron hallados} «fueron hallados».

La Iglesia primitiva usaba casi solo la primera: {ser} + participio, con el agente marcado por {por}.`),
  vocab: [
    V('fue escrito', 'escribir', 'fue escrito'),
    V('será salvado', 'salvar', 'será salvado'),
    V('fue crucificado', 'crucificar', 'fue crucificado'),
    V('se venden', 'vender', 'se venden'),
    V('se arrepintió', 'arrepentirse', 'se arrepintió (¡reflexivo!)'),
    V('fue traspasado', 'traspasar', 'fue traspasado (Jn 19.37)'),
    V('por Dios', 'por', 'por Dios (¡agente!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «se venden casas», ¿con qué concuerda?'),
    options: [T('Con «casas» (plural)'), T('Siempre singular'), T('Con el agente'), T('Con nada')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Pasiva con ser: «___ fue escrito» (esto fue escrito)'),
      answer: 'Esto',
      hint: T('Regla §1: el sujeto va antes del verbo.'),
    },
    {
      kind: 'choose',
      prompt: T('En «se escribe una carta», la construcción es…'),
      options: [
        T('reflexiva'),
        T('pasiva con se (¡el sujeto no es el paciente!)'),
        T('impersonal'),
        T('Un error'),
      ],
      answer: 1,
      hint: T('Regla §3: ¿quién actúa? ¿quién lo recibe?'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la pasiva con su tipo'),
      pairs: [
        { a: T('{fue escrito}'), b: T('ser + participio (solemne)') },
        { a: T('{se venden casas}'), b: T('se + verbo (cotidiano)') },
        { a: T('{fue crucificado}'), b: T('el participio concuerda (¡masc.!)') },
        { a: T('{se arrepintió}'), b: T('se reflexivo (¡no pasivo!)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'ser + participio = pasiva agentiva; el participio concuerda con el sujeto: fueron escritas.',
      ),
    },
    { n: '2', text: T('El agente de la pasiva agentiva viene con por: escrito por Dios.') },
    {
      n: '3',
      text: T(
        'se + verbo = pasiva impersonal; el verbo concuerda con el sustantivo: se venden casas.',
      ),
    },
    {
      n: '4',
      text: T(
        'se + pronombre (me, te, se) indica que la acción cae sobre la persona: se lava, se arrepintió.',
      ),
    },
  ],
  notes: [
    {
      label: T('{ser} + participio'),
      text: T(
        'Se confunden dos construcciones: {fue escrito} (pasiva, sin agente) y {fue escrito por Dios} (agente explícito). El {por} es lo que separa resultado de autoría.',
      ),
    },
  ],
  examples: [
    { text: '{fue escrito}', gloss: T('Fue escrito (pasiva agentiva).') },
    { text: '{se venden casas}', gloss: T('Se venden casas (¡verbo en plural!).') },
    { text: '{fue traspasado}', gloss: T('Fue traspasado (Jn 19.37).') },
    { text: '{se arrepintió}', gloss: T('Se arrepintió (¡reflexivo, no pasiva!).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Las dos pasivas'),
      head: [T('Tipo'), T('Estructura'), T('Concordancia'), T('Ejemplo')],
      rows: [
        [T('pasiva agentiva'), '{ser} + particípio', T('participio ~ sujeto'), '{fue escrito}'],
        [T('pasiva impersonal'), '{se} + verbo', T('verbo ~ sustantivo'), '{se venden casas}'],
        [T('reflexivo'), '{se} + verbo + objeto indireto', T('verbo = sujeto'), '{se arrepintió}'],
      ],
    },
    {
      caption: T('Tabla 2 — Participios irregulares más usados'),
      head: [T('Infinitivo'), T('Gerundio'), T('Participio')],
      rows: [
        ['{escribir}', '{escribiendo}', '{escrito}'],
        ['{hacer}', '{haciendo}', '{hecho}'],
        ['{decir}', '{diciendo}', '{dicho}'],
        ['{ver}', '{viendo}', '{visto}'],
        ['{leer}', '{leyendo}', '{leído}'],
        ['{crucificar}', '{crucificando}', '{crucificado}'],
        ['{morir}', '{muriendo}', '{muerto}'],
        ['{abrir}', '{abriendo}', '{abierto}'],
      ],
    },
  ],
};
