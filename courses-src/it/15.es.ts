import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('Discurso indirecto'),
  subtitle: T('disse che sarebbe venuto'),
  section: T('La sintaxis y el sustantivo'),
  body: C(`## Quien relata retrocede en el tiempo

Cuando alguien reproduce algo que ocurrió antes, **los verbos retroceden**: el presente pasa a imperfecto, el futuro a condicional y el *passato prossimo* a *trapassato prossimo*. Esa es **la regla del discurso indirecto**, y en italiano no tiene excepción.

{Dice che viene} («dice que viene») se vuelve {disse che veniva}. {Dice che verrà} («dice que vendrá») se vuelve {disse che sarebbe venuto}. {Dice che è venuto} («dice que vino») se vuelve {disse che era venuto}. El condicional {sarebbe venuto} es lo que más intriga: es el futuro del punto de vista del narrador, y al relatarse pasa a condicional. Quien escribe «dijo que vendrá» falla el tiempo.

## Cuándo sobrevive el congiuntivo

Si la oración original ya está en congiuntivo, por duda, finalidad o hipótesis, el discurso indirecto suele mantener el congiuntivo. Y a veces hay marca de aspecto: {disse che sarebbe venuto} puede ser «dijo que acaso vendría», porque {sarebbe} carga la duda que el narrador no confirma.

El italiano tiene futuro compuesto ({vedrà}, {avrà visto}) y *trapassato*, y en el discurso indirecto los dos a veces convergen: {disse che sarebbe venuto} y {disse che era venuto} pueden convivir en la misma frase, con un matiz de tiempo distinto.

## Preguntas y órdenes en el discurso indirecto

Las preguntas indirectas **conservan el orden de la pregunta directa**, sin inversión: {Dove abiti?} se vuelve {domandò dove abitasse}. Fíjate en {abitasse}, que sustituye al presente {abiti}. Y las órdenes pueden usar {di} más infinitivo: {ordinò di uscire}, «ordenó que saliera».

En ambos casos, lo que era pregunta u orden en la frase original se vuelve una oración declarativa: ya no hay signo de interrogación ni verbo principal en imperativo. Traducir {Dove abiti?} seguido de {domandò} como «¿Dónde vives? Preguntó» falla la estructura.

## Criterio de lectura

Cada vez que veas {disse che} seguido de un verbo que no está en pasado, ve al pasado. Y si el verbo está en condicional, {sarebbe}, {avrebbe}, {potrebbe}, casi siempre es discurso indirecto: futuro relatado, o duda que el narrador deja abierta.`),
  vocab: [
    V('disse', 'dire', 'dijo'),
    V('veniva', 'venire', 'venía'),
    V('sarebbe venuto', 'venire', 'vendría'),
    V('era venuto', 'venire', 'había venido'),
    V('domandò', 'domandare', 'preguntó'),
    V('di uscire', 'uscire', 'a salir'),
    V('abitasse', 'abitare', 'viviera'),
    V('ordinò', 'ordinare', 'ordenó'),
    V('dica', 'dire', 'diga'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En discurso indirecto, ¿qué pasa con Dice che verrà?'),
    options: [
      T('Disse che verrà'),
      T('Disse che sarebbe venuto'),
      T('Disse che viene'),
      T('Disse che venga'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Transforma: dice che è venuto → disse che ___ venuto'),
      answer: 'era',
      hint: T('Presente → trapassato prossimo.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo pasa Dove abiti? al discurso indirecto?'),
      options: [T('Dove abiti?'), T('dove abitasse'), T('dove abiterai'), T('che abiti')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Completa: Il maestro ordinò ___ uscire'),
      answer: 'di',
      hint: T('Orden + di + infinitivo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'En el discurso indirecto el presente pasa a imperfecto, el futuro a condicional y el *passato prossimo* a *trapassato prossimo*: {dice che viene} → {disse che veniva}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Disse che sarebbe venuto} es el futuro del punto de vista del narrador; escribir «dijo que vendrá» falla el tiempo.',
      ),
    },
    {
      n: '3',
      text: T(
        'Si la oración original ya está en congiuntivo, el discurso indirecto lo mantiene: {disse che sarebbe venuto} puede ser «dijo que acaso vendría».',
      ),
    },
    {
      n: '4',
      text: T(
        'La pregunta indirecta conserva el orden directo y usa el congiuntivo: {Dove abiti?} → {domandò dove abitasse}.',
      ),
    },
    {
      n: '5',
      text: T(
        'La orden indirecta usa {di} más infinitivo: {ordinò di uscire}, y el imperativo se vuelve declarativo.',
      ),
    },
  ],
  notes: [
    {
      label: T('{Che cosa} o {se}'),
      text: T(
        'Una pregunta directa se vuelve indirecta con dos recursos: {che} para el sujeto, {so che viene}, y {se} para todo lo demás, {non so se viene}. El pronombre también sube: {lo} se vuelve {che lo}, en {so che lo vedo}.',
      ),
    },
    {
      label: T('{Sarebbe} puede ser duda'),
      text: T(
        'En el congiuntivo, {sarebbe} carga la duda que el narrador no confirma, y por eso muchas traducciones italianas escriben «disse che forse sarebbe venuto». El futuro relatado y el condicional de duda son la misma forma en italiano.',
      ),
    },
  ],
  examples: [
    { text: 'Gesù disse: «Verrò».', gloss: T('Jesús dijo: «Vendré».') },
    { text: 'Disse che veniva.', gloss: T('Dijo que venía.') },
    { text: 'Disse che sarebbe venuto.', gloss: T('Dijo que vendría.') },
    { text: 'Disse che era venuto.', gloss: T('Dijo que había venido.') },
    {
      text: 'Gli uomini dissero che sarebbe venuto.',
      gloss: T('Los hombres dijeron que vendría.'),
    },
    { text: 'Domandò dove abitasse.', gloss: T('Preguntó dónde vivía.') },
    { text: 'Ordinò di uscire.', gloss: T('Ordenó que salieran.') },
    { text: 'Non so se viene.', gloss: T('No sé si viene.') },
  ],
  tables: [
    {
      caption: T('Discurso directo e indirecto'),
      head: ['Frase diretta', 'Frase indiretta'],
      rows: [
        ['dice che viene', 'disse che veniva'],
        ['dice che verrà', 'disse che sarebbe venuto'],
        ['dice che è venuto', 'disse che era venuto'],
        ['Dove abiti?', 'domandò dove abitasse'],
        ['Esci di qui', 'ordinò di uscire'],
      ],
    },
    {
      caption: T('Conector de la pregunta indirecta'),
      head: ['Domanda', 'Nella indiretta'],
      rows: [
        ['so che viene', 'che (sujeito)'],
        ['so se viene', 'se (todo o resto)'],
        ['so chi viene', 'chi'],
        ['so dove abita', 'dove'],
        ['so quando arriva', 'quando'],
      ],
    },
  ],
};
