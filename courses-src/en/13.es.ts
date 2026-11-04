import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Capstone: discurso indirecto, relativos y tag questions'),
  subtitle: T('He said that… — integración final'),
  section: T('Sintaxis'),
  body: C(`## Discurso indirecto

Tras un verbo de habla en pasado, el inglés suele hacer retroceso temporal: {He says he comes} → {He said he would come}; {He says he came} → {He said he had come}. Es concordancia gramatical, no un cambio de los hechos. El presente perfecto puede pasar a pasado perfecto: {has seen} → {had seen}. Si el hecho sigue siendo verdad, puede mantenerse el presente: {He said that God is love}.

{Say} normalmente no lleva objeto indirecto: {He said that...}. {Tell} sí: {He told them that...}. Ask y order a menudo emplean infinitivo: {He asked where they lived}; {He told them to go}.

## Una capilla de gramática

Un párrafo integrador reúne artículos, tiempo, pasiva, relativo, condicional y phrasal verb: {The light that was made to shine before the nations was not put out by those who believed}. {That} restringe {the light}; {was made} es pasiva; {to shine} es infinitivo de finalidad; {those who believed} es relativo; {put out} es phrasal verb.

## Tag questions

La etiqueta repite el auxiliar o cópula, no el verbo entero. {You believe, don't you?}; {He is good, isn't he?}; {They have gone, haven't they?}; {We were not late, were we?}. Enunciado positivo → etiqueta negativa; enunciado negativo → etiqueta positiva. Pronombre y auxiliar deben concordar.

La etiqueta busca contacto real con el interlocutor. {You are coming, aren't you?} solicita confirmación. En inglés literario puede aparecer en prosa formal, pero el estándar contemporáneo prefiere la pregunta normal sujeto-verbo.`),
  vocab: [
    V('said that', 'say', 'dijo que'),
    V('would come', 'come', 'vendría'),
    V('had come', 'come', 'había venido'),
    V('ask where', 'ask', 'preguntar dónde'),
    V('tell to go', 'tell', 'decir que vaya'),
    V("isn't he", 'be', '¿no es?'),
    V("don't you", 'do', '¿no es verdad?'),
    V("aren't you", 'be', '¿no estás?'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T("Completa: 'He is good, ___?'"),
    answer: "isn't he",
    hint: T('Un enunciado positivo lleva una tag negativa con el mismo auxiliar.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Retroceso temporal: 'He said he would ___.'"), answer: 'come' },
    {
      kind: 'match',
      prompt: T('Relaciona estructura y función.'),
      pairs: [
        { a: 'that was made', b: T('relativo + pasiva') },
        { a: 'to shine', b: T('finalidad') },
        { a: 'who believed', b: T('relativo restrictivo') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T("¿Qué tag es correcta para 'We were not late, ___?'"),
      options: [T("weren't we?"), T("wasn't we?"), T("aren't we?"), T("don't we?")],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El discurso indirecto puede hacer retroceso temporal, pero el contenido original permanece: el tiempo indirecto es una visión presente del pasado, no un suceso nuevo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Tag = auxiliar + pronombre, con polaridad opuesta. Usa el auxiliar principal, también en respuestas breves: Yes, I do.',
      ),
    },
    {
      n: '3',
      text: T(
        'Lee una frase integrada por capas e identifica estructura, tiempo, voz y léxico antes de traducir.',
      ),
    },
  ],
  notes: [
    {
      label: T('Tarea final:'),
      text: T(
        'Lee el ejemplo integrado en voz alta, tapa las glosas e identifica cada estructura antes de comprobar.',
      ),
    },
  ],
  examples: [
    { text: '{He said that he would come}', gloss: T('Dijo que vendría') },
    { text: '{The light that was made to shine}', gloss: T('La luz que fue hecha para brillar') },
    { text: "{You believe, don't you?}", gloss: T('Tú crees, ¿no es verdad?') },
    { text: "{I don't know, do you?}", gloss: T('No lo sé, ¿y tú?') },
  ],
  tables: [
    {
      caption: T('Mapa de integración final'),
      head: [T('Estructura'), T('En el ejemplo'), T('Función')],
      rows: [
        [T('relativo restrictivo'), '{that was made}', T('identifica la luz')],
        [T('infinitivo'), '{to shine}', T('finalidad')],
        [T('relativo'), '{who believed}', T('restringe those')],
        [T('phrasal verb'), '{put out}', T('apagar')],
        [T('tag'), "{aren't you?}", T('busca contacto')],
      ],
    },
  ],
};
