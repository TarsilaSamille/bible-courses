import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('Conjunciones: porque, aunque, mientras'),
  subtitle: T('because × so, although × though — los pares que el alumno invierte'),
  section: T('Conectivos'),
  body: C(`## Las coordinadas y qué hace cada una

El inglés tiene siete conjunciones coordinadas y casi todos los libros de gramática las memorizan por el acrónim FANBOYS: {and}, {but}, {or}, {nor}, {for}, {yet}, {so}.

Dos de ellas necesitan aviso. {For} significa "porque" y no "por el bien de": {I stayed home, for I was ill}. Y {yet} significa "sin embargo" y nunca "todavía": {He is old, yet he works hard}.

{I saw him, but he did not see me} es la estructura de contraste más común del inglés, y la posición del {but} es siempre la misma: entre las dos mitades de la frase, sin coma dentro.

## Los dos pares que el alumno invierte

El primer par es {because} y {so}. {Because} da **causa** y {so} da **consecuencia**: {I stayed home because I was ill} y {I was ill, so I stayed home}. El aprendiz intercambia los dos con mucha frecuencia, y el efecto es invertir la lógica de la frase.

El segundo par es {although} y {because}. {Although} es concessiva y {because} es causal: {Although it rained, we went out} y {We went out because it did not rain}. Las dos abren la cláusula, y por eso la confusión pasa inadvertida.

La KJV usa {though} y {yet} en la misma cláusula en Juan 12:37: {Though he had done so many miracles before them, yet they believed not in him}. Son las dos coordinadas trabajando juntas: {though} concede y {yet} contrapone.

2 Corintios 5:17 enlaza el par de la causa con {therefore}: {Therefore if any man be in Christ, he is a new creature}. El {therefore} del inglés es el {so} de consecuencia, y la frase entera es {because} más {so} escrito por extenso.

## While no es aunque

El error que más aparece en traducción es {while} traducido por "aunque". {While} significa **al mismo tiempo que**: {While I was at home, she called}. Para el sentido concessivo el inglés usa {while} en el sentido de "aunque" solo en inglés arcaico y bíblico, y aun así el lector contemporáneo lo entiende como temporal.

La prueba es el tiempo de la segunda cláusula. Si es simultánea, {while} es temporal. Si es concessiva, es {although}.

## Las cuatro formas de decir la misma condición

La condicional tiene cuatro pares, y el Normalmente conoce uno. {If} y {unless} son el mismo par visto de dos lados: {If you come, I will stay} y {Unless you come, I will stay}. {Though} y {even though} difieren en énfasis: {even though} insiste en el contraste. {So that} y {in order that} introducen finalidad, y {as long as} y {provided that} introducen condición prolongada.

Lo que cambia el sentido es siempre el mismo elemento: un {not} dentro del {if}, un {even} antes del {though}, un {long} dentro del {as long as}. La cláusula es idéntica.`),
  vocab: [
    V('and', 'and', 'y'),
    V('but', 'but', 'pero'),
    V('or', 'or', 'o'),
    V('nor', 'nor', 'ni'),
    V('for', 'for', 'porque (arcaico)'),
    V('yet', 'yet', 'sin embargo'),
    V('so', 'so', 'así que'),
    V('because', 'because', 'porque'),
    V('although', 'although', 'aunque'),
    V('though', 'though', 'aunque'),
    V('while', 'while', 'mientras'),
    V('unless', 'unless', 'a menos que'),
    V('even though', 'even', 'aun que'),
    V('so that', 'so', 'para que'),
    V('as long as', 'as long as', 'mientras, con tal que'),
    V('therefore', 'therefore', 'por lo tanto'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'For significa porque y no por el bien de; yet significa sin embargo y nunca todavía.',
      ),
    },
    {
      n: '2',
      text: T(
        'Because da causa y so da consecuencia; intercambiar los dos invierte la lógica de la frase.',
      ),
    },
    {
      n: '3',
      text: T(
        'Although es concessiva y because es causal, y cualquiera de las dos puede abrir la cláusula.',
      ),
    },
    {
      n: '4',
      text: T(
        'While significa al mismo tiempo que; para el sentido concessivo usa although o though.',
      ),
    },
    {
      n: '5',
      text: T(
        'If y unless, though y even though, so that y in order that, as long as y provided that son pares que difieren en un solo elemento.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Juan 12:37 trae Though y yet en la misma cláusula, y 2 Corintios 5:17 trae therefore, que es el par because y so escrito por extenso.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Si alguien escribe "Aunque estaba enfermo, me quedé en casa", ha puesto donde un because. La prueba es preguntar cuál de las dos cláusulas explica a la otra.',
      ),
    },
  ],
  examples: [
    { text: '{I stayed home, for I was ill}', gloss: T('me quedé en casa, porque estaba enfermo') },
    { text: '{He is old, yet he works hard}', gloss: T('es viejo, sin embargo trabaja duro') },
    {
      text: '{I stayed home because I was ill}',
      gloss: T('me quedé en casa porque estaba enfermo'),
    },
    { text: '{I was ill, so I stayed home}', gloss: T('estaba enfermo, así que me quedé en casa') },
    { text: '{Although it rained, we went out}', gloss: T('aunque llovía, salimos') },
    {
      text: '{While I was at home, she called}',
      gloss: T('mientras yo estaba en casa, ella llamó'),
    },
    {
      text: '{Though he had done so many miracles, yet they believed not}',
      gloss: T('aunque había hecho tantos milagros, aun así no creyeron'),
    },
    {
      text: '{Therefore if any man be in Christ, he is a new creature}',
      gloss: T('por lo tanto, si alguien está en Cristo, es nueva criatura'),
    },
    { text: '{Unless you come, I will stay}', gloss: T('a menos que vengas, me quedo') },
    { text: '{even though he is tired}', gloss: T('aun que esté cansado') },
  ],
  tables: [
    {
      caption: T('Las coordinadas'),
      head: [T('Conjunción'), T('Función'), T('Ejemplo')],
      rows: [
        ['{and}', T('suma'), '{He read and she wrote}'],
        ['{but}', T('contraste'), '{He read but she wrote}'],
        ['{or}', T('alternativa'), '{Do you read or write}'],
        ['{nor}', T('negación acumulada'), '{neither read nor write}'],
        ['{for}', T('causa, arcaico'), '{I stayed, for I was ill}'],
        ['{yet}', T('contraste enfático'), '{He is old, yet he works}'],
        ['{so}', T('consecuencia'), '{I was ill, so I stayed}'],
      ],
    },
    {
      caption: T('Los pares que el alumno invierte'),
      head: [T('Par'), T('Primer sentido'), T('Segundo sentido')],
      rows: [
        ['{because} / {so}', T('causa'), T('consecuencia')],
        ['{although} / {because}', T('concesiva'), T('causal')],
        ['{if} / {unless}', T('hipótesis'), T('hipótesis negada')],
        ['{though} / {even though}', T('concesiva'), T('concesiva enfática')],
        ['{so that} / {in order that}', T('finalidad'), T('finalidad explícita')],
      ],
    },
    {
      caption: T('Cuándo la conjunción abre la cláusula'),
      head: [T('Conjunción'), T('¿Puede abrir?'), T('Ejemplo')],
      rows: [
        ['{because}', T('sí'), '{Because it rained, we stayed}'],
        ['{so}', T('sí, con coma'), '{It rained, so we stayed}'],
        ['{although}', T('sí'), '{Although it rained, we went}'],
        ['{though}', T('sí'), '{Though he asked, I refused}'],
        ['{while}', T('sí, pero temporal'), '{While we waited, he called}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál frase es correcta?'),
    options: [
      T('Because it rained, we stayed home'),
      T('Although it rained, we stayed home'),
      T('So it rained, we stayed home'),
      T('While it rained, we stayed home'),
    ],
    answer: 1,
    hint: T('La lluvia es el obstáculo, no la causa: usa although.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Completa la causa: 'I stayed home ___ I was ill.'"),
      answer: 'because',
    },
    {
      kind: 'fill',
      prompt: T("Completa la consecuencia: 'I was ill, ___ I stayed home.'"),
      answer: 'so',
    },
    {
      kind: 'match',
      prompt: T('Relaciona la conjunción con su función.'),
      pairs: [
        { a: 'although', b: T('concesiva') },
        { a: 'because', b: T('causal') },
        { a: 'unless', b: T('hipótesis negada') },
        { a: 'so that', b: T('finalidad') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase usa while correctamente?'),
      options: [
        T('While he was poor, he was happy'),
        T('While I read, he slept'),
        T('While he was poor, he became rich'),
        T('While the rain, we went out'),
      ],
      answer: 1,
    },
  ],
};
