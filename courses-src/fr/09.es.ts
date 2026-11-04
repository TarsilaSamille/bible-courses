import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('El comparativo y el superlativo'),
  subtitle: T('{plus}, {moins}, {aussi} y los irregulares {meilleur} y {pire}'),
  section: T('Los adjetivos y los adverbios'),
  body: C(`## Tres palabras bastan

El comparativo francés es una de las construcciones más económicas de la lengua: **plus** para la superioridad, **moins** para la inferioridad, **aussi** para la igualdad. Cada una entra con el adjetivo, y la comparación con personas exige {que}:

- {plus grand que moi} — más grande que yo
- {moins clair que lui} — menos claro que él
- {aussi belle qu'elle} — tan bella como ella

Con personas el {que} es obligatorio. Con cosas y cualidades puede omitirse a menudo: {plus grand}, {plus intelligent}. Con sustantivos, la comparación cambia de ropa: en vez del adjetivo se usa {plus de}, {moins de}, {autant de} — {plus de livres} «más libros», {moins de temps} «menos tiempo», {autant d'amis} «tantos amigos».

## El comparativo de igualdad, en dos formas

{aussi … que} es la forma común. Pero cuando el {que} abre la cláusula, todo se invierte y aparece {pour … que}: {aussi belle qu'elle pour les yeux} «tan bella como ella a los ojos». El sentido es el mismo; lo que cambia es la posición.

Hay un tercer camino, con {tel … que}, que expresa proporción: {Il est tel qu'on le voit}, o el muy práctico {un homme si grand qu'on ne peut le contourner}.

## Los tres irregulares que importan

El comparativo y el superlativo de tres adjetivos escapan del patrón:

| Adjetivo | Comparativo | Superlativo |
|---|---|---|
| {bon} | {meilleur} | {le meilleur} |
| {mauvais} | {pire} | {le pire} |
| {petit} | {moindre} | {le moindre} |

La palabra {pire} merece cuidado: solo es numeral y verbo. Como numeral, {deux} conserva la -x muda; como verbo, {il pitié} suena mal — la forma correcta es {il a pitié}. Eso es contraste fonético, no adorno.

En cuanto a {moindre}, habla de **grado o cantidad**, no de tamaño físico: {un moindre effort}, {à moindre mesure}. Para altura y dimensión usa {plus petit}: {un peu plus petit}. Confundir los dos es el error más común de esta lección.

Los adverbios siguen la regla: {bien → mieux}, {mal → pire}, {beaucoup → plus}, {peu → moins}. Así, {il travaille mieux} es el comparativo de {bien}.

## El superlativo relativo

El **superlativo relativo** compara dentro de un grupo conocido. Lleva artículo, y el {plus} concuerda como un adjetivo normal — en los dos sitios:

- {le plus grand} — el mayor
- {la plus belle} — la más bella
- {les plus beaux} — los más bellos

Fíjate en la concordancia doble: en {la plus belle}, tanto el artículo {la} como el {plus} son femeninos. Escribir {la plus beau} es el error de manual.

Con {de}, el superlativo señala un grupo entero: {le meilleur des élèves} «el mejor de los alumnos», {la plus belle des villes} «la más bella de las ciudades».

## El superlativo absoluto

Cuando no hay comparación, solo grado: {très grand} «muy grande», {bien meilleur} «mucho mejor», {vraiment terrible} «realmente terrible». Aquí {très} intensifica el adjetivo y {bien} intensifica el adverbio.

## Lectura — Louis Segond

{Il est plus riche et plus puissant que tous les princes de la terre} (Gn 13:2) — el mismo {plus} rigiendo sustantivo y adjetivo en una sola construcción. {Vous êtes le sel de la terre; mais si le sel devient fade, à quoi sert-il?} (Mt 5:13) usa el superlativo sustantivado {le sel} y la comparación modal {à quoi sert-il}. En el francés de Lc 14:30, {Le plus grand parmi vous devienne le plus petit} pone las dos formas lado a lado, lo que hace visible esta lección. {Le Seigneur est ma force et mon salut} (Sal 42:2) usa {ma}, construcción posesiva tratada en su propio capítulo.

## Lo esencial

{plus} compara con lo mayor, {moins} con lo menor, {aussi} con lo igual. El superlativo relativo exige artículo y concordancia doble; el absoluto no compara con nadie y por eso prescinde de artículo.`),
  vocab: [
    V('plus grand', 'grand', 'más grande; comparativo regular'),
    V('moins clair', 'clair', 'menos claro; comparativo con moins'),
    V('aussi belle que', 'beau', 'tan bella como; igualdad'),
    V('meilleur', 'bon', 'mejor; comparativo irregular de {bon}'),
    V('le pire', 'mauvais', 'el peor; {pire} irregular'),
    V('le moindre', 'petit', 'el menor; grado, no tamaño'),
    V('mieux', 'bien', 'mejor (adv.); de {bien}'),
    V('le plus petit', 'petit', 'el más pequeño en tamaño; para dimensiones'),
    V('plus de livres', 'livre', 'más libros; comparación de sustantivos'),
    V('autant de', 'autant', 'tanto, tantos; con que'),
    V('très grand', 'grand', 'muy grande; superlativo absoluto'),
    V('le meilleur des élèves', 'élève', 'el mejor de los alumnos; de + grupo'),
    V('tel que', 'tel', 'tal que; comparación de proporción'),
    V('si grand qu', 'grand', 'tan grande que; si … que'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se dice «tan bella como ella» en francés?'),
    options: [
      T("{aussi belle qu'elle}"),
      T("{plus belle qu'elle}"),
      T("{si belle qu'elle}"),
      T("{aussi plus belle qu'elle}"),
    ],
    answer: 0,
    hint: T('La igualdad pide {aussi}; {plus} es superioridad y {si} es intensidad.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Superlativo femenino singular de {beau}: la ___ belle (la otra)'),
      answer: 'plus',
      hint: T('El superlativo relativo duplica el artículo, y el {plus} también concuerda.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase es correcta y la más natural?'),
      options: [
        T('{Un moindre effort} — un esfuerzo de menor grado'),
        T('{Un moindre homme} — un hombre de menor estatura'),
        T('{Un plus petit homme} — el hombre más bajo'),
        T('{Le moins hombre del mundo} — superlativo relativo correcto'),
      ],
      answer: 2,
      hint: T('Regla §4: {moindre} mide grado; {plus petit} mide tamaño.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el comparativo con su sentido'),
      pairs: [
        { a: T('plus grand que'), b: T('superioridad') },
        { a: T('moins clair que'), b: T('inferioridad') },
        { a: T('aussi belle que'), b: T('igualdad') },
        { a: T('autant de'), b: T('comparación de cantidad') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En «{la plus belle des villes}», ¿cuántos elementos hacen la comparación?'),
      options: [T('Ninguno'), T('Uno'), T('Dos'), T('Tres')],
      answer: 1,
      hint: T(
        'El superlativo es uno: «la más bella». Lo que cambia es el grupo de referencia, {des villes}.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El comparativo regular se hace con plus o moins + adjetivo (o adverbio) y termina en que: {plus grand que moi}, {moins vite que lui}. Con personas el que es obligatorio; con cosas suele poder faltar.',
      ),
    },
    {
      n: '2',
      text: T(
        "La igualdad se construye con aussi … que: {aussi belle qu'elle} «tan bella como ella». Con que inicial pasa a pour … que: {aussi belle qu'elle pour les yeux». Para la proporción use si … que o tel … que.",
      ),
    },
    {
      n: '3',
      text: T(
        'Los sustantivos se comparan con de, nunca con el adjetivo: {plus de livres} «más libros», {moins de temps} «menos tiempo», {autant de livres} «tantos libros».',
      ),
    },
    {
      n: '4',
      text: T(
        'Los irregulares son meilleur (de bon), pire (de mauvais) y moindre (de petit). Moindre mide grado o cantidad ({un moindre effort}); para tamaño y altura use plus petit. En los adverbios: mieux, pire, moins.',
      ),
    },
    {
      n: '5',
      text: T(
        'El superlativo relativo exige artículo y concordancia doble: {le plus grand}, {la plus belle}, {les plus beaux}. Con de señala el grupo ({le meilleur des élèves}). El absoluto prescinde de artículo: {très grand}, {bien meilleur}, {vraiment terrible}.',
      ),
    },
  ],
  notes: [
    {
      label: T('La trampa de la concordancia doble'),
      text: T(
        'En le plus, la plus y les plus, el plus funciona como un adjetivo normal y por tanto concuerda: {la plus belle}, {les plus beaux}. {la plus beau} y {les plus belle} son los errores de quien trata el superlativo como una fórmula única.',
      ),
    },
    {
      label: T('Por qué {pire} es distinto'),
      text: T(
        '{pire} tiene tres vidas: funciona como sustantivo ({le pire} «el peor»), como numeral ({deux} «dos») y como verbo ({il a pitié} «tiene piedad»). En otras lenguas el cognado {pietà} aparece justo al lado; en francés la palabra es corta y está sola, y hay que guardarla como sustantivo y verbo, nunca como comodín.',
      ),
    },
  ],
  examples: [
    { text: 'plus grand que moi', gloss: T('más grande que yo — superioridad') },
    { text: 'moins clair que lui', gloss: T('menos claro que él — inferioridad') },
    { text: "aussi belle qu'elle", gloss: T('tan bella como ella — igualdad') },
    {
      text: "aussi belle qu'elle pour les yeux",
      gloss: T('tan bella como ella a los ojos — pour … que'),
    },
    { text: 'plus de livres', gloss: T('más libros — de en vez del adjetivo') },
    { text: 'le plus grand', gloss: T('el mayor — superlativo relativo') },
    { text: 'la plus belle', gloss: T('la más bella — concordancia doble') },
    { text: 'les plus beaux', gloss: T('los más bellos — plural concordado') },
    { text: 'le meilleur des élèves', gloss: T('el mejor de los alumnos — de señala el grupo') },
    { text: 'il travaille mieux', gloss: T('trabaja mejor — mieux, de bien') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Comparativos y superlativos'),
      head: [
        T('Tipo'),
        T('Positivo'),
        T('Comparativo'),
        T('Superlativo relativo'),
        T('Superlativo absoluto'),
      ],
      rows: [
        ['superioridade', '{grand}', '{plus grand}', '{le plus grand}', '{très grand}'],
        ['inferioridade', '{clair}', '{moins clair}', '{le moins clair}', '{très clair}'],
        ['igualdade', '{beau}', '{aussi beau que}', '{le plus beau}', '{très beau}'],
        ['irregular (bom)', '{bon}', '{meilleur}', '{le meilleur}', '{bien meilleur}'],
        ['irregular (mau)', '{mauvais}', '{pire}', '{le pire}', '{vraiment mauvais}'],
        ['irregular (pequeno)', '{petit}', '{moindre}', '{le moindre}', '{vraiment petit}'],
        ['adverbial', '{bien}', '{mieux}', '{le mieux}', '{très bien}'],
        ['quantidade', '{beaucoup}', '{plus}', '{le plus}', '{beaucoup}'],
      ],
    },
    {
      caption: T('Tabla 2 — Qué construcción usar'),
      head: [T('Comparación'), T('Estructura'), T('Ejemplo'), T('Glosa')],
      rows: [
        [
          'com pessoas',
          '{plus / moins + adj + que + pessoa}',
          '{plus grand que moi}',
          'maior que eu',
        ],
        ['com coisas', '{plus / moins + adj}', '{plus grand}', 'maior'],
        ['igualdade', '{aussi + adj + que}', "{aussi belle qu'elle}", 'tão bonita quanto ela'],
        ['igualdade (invertida)', '{pour … que}', '{pour les yeux}', 'aos olhos'],
        ['proporção', '{si + adj + que}', "{si grand qu'il tient}", 'tão grande que coube'],
        [
          'substantivos',
          '{plus / moins / autant + de + subst.}',
          '{plus de livres}',
          'mais livros',
        ],
        [
          'grupo inteiro',
          '{le meilleur + des + subst.}',
          '{le meilleur des élèves}',
          'o melhor dos alunos',
        ],
      ],
    },
  ],
};
