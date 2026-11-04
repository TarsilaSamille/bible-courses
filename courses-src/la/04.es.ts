import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Adjetivos de primera y segunda y el verbo sum'),
  subtitle: T('{bonus, -a, -um} concuerda con el sustantivo; {sum, es, est}'),
  section: T('Declinaciones y el verbo sum'),
  body: C(`## Un adjetivo, tres terminaciones

En latín un solo adjetivo tiene **tres** formas de referencia — una por cada género — y es la concordancia la que elige cuál se usa. {Bonus} es masculino, {bona} femenino, {bonum} neutro. El mismo sustantivo {verbum} puede recibir los tres:

{Verbum bonum} «la buena palabra»;
{Verb bona} «la buena (acción)»;
{Pueri boni} «los buenos niños».

El adjetivo concuerda con el sustantivo en **género, número y caso**. Sus terminaciones son idénticas a las del sustantivo: un adjetivo de primera/segunda se comporta como {bonus} — {bonā} es ablativo femenino, {bonīs} es dativo plural de cualquier género.

Una trampa: en los textos de la Vulgata, adjetivos como {sanctus} pueden substantivarse y volverse sustantivos — {sancti} «los santos», {sanctum} «lo santo». El contexto decide.

## Sum: el verbo más irregular del latín

{sum} «ser» es el verbo que más vas a encontrar y el más irregular: su raíz es {es-} (de ahí {sum}, {es}, {sunt}), lo que produce una serie de formas que no se parecen a nada:

| Persona | Presente | Imperfecto | Perfecto |
|---|---|---|---|
| yo | sum | eram | fui |
| tú | es | eras | fuisti |
| él/ella | est | erat | fuit |
| nosotros | sumus | eramus | fuimus |
| vosotros | estis | eratis | fuistis |
| ellos/ellas | sunt | erant | fuerunt |

Fíjate: {sum} + {b} = {sub}: {sub-} es el prefijo de {suble-} «sobrevivir» y de {sub-} «bajo». Ahí {sub} es la única pista de que el verbo tiene raíz {es}.

## Est, erat, erat

La Vulgata usa {sum} más en **imperfecto** que en presente, porque el latín prefiere narrar una acción continua antes que un estado seco. El Evangelio de Juan abre con tres imperfectos seguidos de un presente — y el cambio es deliberado:

{In principio erat Verbum} «En el principio **era** la Palabra» — duración sin comienzo;
{Et Verbum erat apud Deum} «y la Palabra **era** con Dios» — coexistencia;
{Et Deus erat Verbum} «y Dios **era** la Palabra» — identificación;
{Hic erat et hic est et hic venturus est} «Estaba **aquí**, y **está** aquí, y aquí vendrá» (Apocalipsis 1:4).

El paso de {erat} a {est} marca el tránsito de la eternidad al tiempo. Si observas que {sum} es el único verbo sin raíz de supino, entenderás por qué los traductores lo rinden siempre «ser» y nunca «estar».`),
  vocab: [
    V('bonus', 'bonus', 'bueno (masc.)'),
    V('bona', 'bonus', 'buena (fem.)'),
    V('malus', 'malus', 'malo (masc.)'),
    V('magnus', 'magnus', 'grande'),
    V('parvus', 'parvus', 'pequeño'),
    V('verus', 'verus', 'verdadero'),
    V('primus', 'primus', 'primero'),
    V('pulcher', 'pulcher', 'hermoso'),
    V('sanctus', 'sanctus', 'santo'),
    V('sum', 'sum', 'ser, estar'),
    V('es', 'sum', 'eres (2.ª sing.)'),
    V('est', 'sum', 'es (3.ª sing.)'),
    V('sunt', 'sum', 'son'),
    V('erat', 'sum', 'era (imperfecto)'),
    V('fuit', 'sum', 'fue (perfecto)'),
    V('Deus', 'Deus', 'Dios'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {puella bona rosam amat}, ¿qué concuerda y por qué?'),
    options: [
      T('{bona} concuerda con {puella}: femenino singular nominativo'),
      T('{bona} concuerda con {rosam}: femenino singular acusativo'),
      T('{bona} concuerda con {amat}: verbo presente'),
      T('{bona} no concuerda con nada: es un adverbio'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Por qué {sunt} y {est} no se parecen, si el verbo es el mismo?'),
      options: [
        T('Porque {sum} es irregular: su raíz es {es-}'),
        T('Porque son de dos declinaciones distintas'),
        T('Porque {sunt} es un sustantivo'),
        T('Porque la Vulgata lo escribe de forma irregular'),
      ],
      answer: 0,
      hint: T('Regla §4.'),
    },
    {
      kind: 'fill',
      prompt: T('Imperfecto de {sum}, tercera persona singular: e_a_'),
      answer: 'erat',
      hint: T('La forma aparece en {In principio erat Verbum}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona {bonus} con la concordancia correspondiente'),
      pairs: [
        { a: T('bonus'), b: T('masc. nom. singular') },
        { a: T('bonum'), b: T('neut. nom./acus. singular') },
        { a: T('bonae'), b: T('fem. gen./dat. singular') },
        { a: T('bonis'), b: T('dat./abl. plural, cualquier género') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El adjetivo concuerda con el sustantivo en género, número y caso — y sus terminaciones son las del sustantivo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Un adjetivo de primera/segunda tiene tres formas de referencia: {bonus}, {bona}, {bonum}.',
      ),
    },
    {
      n: '3',
      text: T('La posición del adjetivo es libre: {puer bonus} y {bonus puer} dicen lo mismo.'),
    },
    {
      n: '4',
      text: T(
        '{sum} tiene raíz {es-} y ninguna forma regular: la única manera es memorizar el paradigma entero.',
      ),
    },
    {
      n: '5',
      text: T(
        'El latín usa el imperfecto de {sum} para expresar duración sin comienzo; el presente, para un estado delimitado.',
      ),
    },
  ],
  notes: [
    {
      label: T('Pista de la raíz:'),
      text: T(
        'Si en una palabra reconoces {es-} seguido de algo, probablemente es forma de {sum}: {praesens} «presente» (de *praesum*, estoy presente), {absens}, {potens}. Es la única familia de palabras que mantiene viva la raíz {es-} en el latín.',
      ),
    },
    {
      label: T('Adjetivo sustantivado:'),
      text: T(
        'Cuando un adjetivo pierde el sustantivo, se convierte en sustantivo: {bonum} «el bien», {sancti} «los santos», {electi} «los elegidos». En {Tu solus bonus in bonis} (Marcos 10:18), {bonus} tiene sentido sustantivo: «sólo tú eres bueno».',
      ),
    },
  ],
  examples: [
    { text: 'bonus', gloss: T('bueno (masc. nom. singular)') },
    { text: 'bona', gloss: T('buena (fem. nom. singular)') },
    { text: 'bonum', gloss: T('bueno (neutro), o «el bien»') },
    { text: 'sum', gloss: T('soy, estoy') },
    { text: 'es', gloss: T('eres (2.ª singular)') },
    { text: 'est', gloss: T('es (3.ª singular)') },
    { text: 'sunt', gloss: T('son') },
    { text: 'erat', gloss: T('era (imperfecto)') },
    { text: 'fuit', gloss: T('fue (perfecto)') },
    {
      text: 'In principio erat Verbum',
      gloss: T('«En el principio era la Palabra» — {erat}, no {est}'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Adjetivos de primera y segunda: {bonus, -a, -um}'),
      head: [T('Caso'), T('Masc.'), T('Fem.'), T('Neut.')],
      rows: [
        ['Nom.', 'bonŭs', 'bonă', 'bonum'],
        ['Voc.', 'bonĭ', 'bonă', 'bonum'],
        ['Gen.', 'bonī', 'bonāe', 'bonī'],
        ['Dat.', 'bonō', 'bonāe', 'bonō'],
        ['Acu.', 'bonum', 'bonam', 'bonum'],
        ['Abl.', 'bonō', 'bonā', 'bonō'],
        ['Nom. pl.', 'bonī', 'bonae', 'bonă'],
        ['Acu. pl.', 'bonōs', 'bonās', 'bonă'],
        ['Dat./Abl. pl.', 'bonīs', 'bonīs', 'bonīs'],
      ],
    },
    {
      caption: T('Tabla 2 — Verbo {sum}: presente, imperfecto, perfecto'),
      head: [T('Persona'), T('Presente'), T('Imperfecto'), T('Perfecto')],
      rows: [
        [T('1.ª sing.'), 'sum', 'eram', 'fui'],
        [T('2.ª sing.'), 'es', 'eras', 'fuisti'],
        [T('3.ª sing.'), 'est', 'erat', 'fuit'],
        [T('1.ª pl.'), 'sumus', 'eramus', 'fuimus'],
        [T('2.ª pl.'), 'estis', 'eratis', 'fuistis'],
        [T('3.ª pl.'), 'sunt', 'erant', 'fuerunt'],
      ],
    },
  ],
};
