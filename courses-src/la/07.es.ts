import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Primer texto: Juan 1:1-5 en la Vulgata'),
  subtitle: T('Once versículos, tres verbos — cómo ordena la Vulgata una frase'),
  section: T('Verbos, tiempos y primeros textos'),
  body: C(`## El texto

Lectura de la Vulgata, Juan 1:1-5:

> In principio erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum.
> Hoc erat in principio apud Deum.
> Omnia per ipsum facta sunt, et sine ipso factum est nihil quod est.
> In ipso vita erat, et vita erat lux hominum.
> Et lux in tenebris lucet, et tenebrae eam non comprehenderunt.

## Análisis de la primera frase

**In principio erat Verbum.** Tres palabras y tres funciones: {In} con ablativo = «en», {principio} = ablativo de lugar, {erat} = verbo {sum} en tercera del imperfecto, {Verbum} = sujeto en nominativo. El orden es {adverbio + verbo + sujeto} — el inverso al nuestro, y el orden más antiguo y literario.

**et Verbum erat apud Deum.** ¿Cambió la vocal consonante de {et} ante {Verbum}? No: el copista simplemente reprodujo el griego, donde la regla es firme, y en latín la forma alternativa {Verbum} simplemente suena mejor. Fíjate en la repetición de {erat}: el verbo no varía, el sujeto sí. En latín rara vez se usa un pronombre para lo que el sustantivo ya ha dicho.

**et Deus erat Verbum.** Aquí la construcción cambia de figura. {Deus} en nominativo y {Verbum} sin artículo en nominativo: es una predicación de identidad, una ecuación. En latín eso se hace con {sum} y sin auxiliar alguno — {Deus erat Verbum} «Dios era la Palabra».

## El orden de palabras que prefiere el latín

Compara los dos sistemas:

| Concepto | Griego | Latín |
|---|---|---|
| neutro (prosa) | verbo en 2.º lugar | — |
| verbo | al final de la oración | posición libre |
| sujeto | va después | va antes |

Lo que para el griego es la norma, para el latín es solo el tono literario: en prosa corriente el latín también pone el verbo en segundo lugar, como en {Deus verbum erat}.

## Sine ipso factum est nihil

Esta es la frase más elegante de la Vulgata, y todo en ella es ablativo. {Sine} rige el ablativo {ipso}; {nihil} es el sujeto, {quod est} la oración relativa que delimita el nada, y {factum est} el verbo {facere} en perfecto pasivo. El verbo {sum} aparece dos veces con sentidos distintos: el {est} de la relativa es {sum} simple, y el {est} de {factum est} es solo el auxiliar del pasivo.

Fíjate en la negación: {nihil} es el acusativo neutro de {nihil}, y precisamente por ser neutro puede ser sujeto. Si fuera {nemo}, el sujeto tendría que ser {nemo} y el verbo quedaría {nihil factum est}.`),
  vocab: [
    V('Verbum', 'verbum', 'palabra, Verbo'),
    V('principium', 'principium', 'principio, comienzo'),
    V('in', 'in', 'en, dentro de (+ abl.)'),
    V('apud', 'apud', 'junto a, cerca de'),
    V('Deus', 'Deus', 'Dios'),
    V('omnia', 'omnia', 'todas las cosas'),
    V('per', 'per', 'por, a través de'),
    V('sine', 'sine', 'sin (+ abl.)'),
    V('vita', 'vita', 'vida'),
    V('lux', 'lux', 'luz'),
    V('tenebrae', 'tenebrae', 'tinieblas'),
    V('lucet', 'luceo', 'brilla (de {lux})'),
    V('comprehendunt', 'comprehendo', 'alcanzan, comprenden'),
    V('mundus', 'mundus', 'mundo'),
    V('factus', 'facio', 'hecho, formado (part. de {facio})'),
    V('homo', 'homo', 'hombre, ser humano'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {In principio erat Verbum}, ¿cuál es la función de {principio}?'),
    options: [
      T('Ablativo de lugar, regido por {in}'),
      T('Genitivo, «del principio»'),
      T('Acusativo, objeto de {erat}'),
      T('Dativo, «al principio»'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Por qué {Deus erat Verbum} es una ecuación y no una metáfora?'),
      options: [
        T('Los dos términos están en el mismo caso: nominativo'),
        T('El verbo {erat} es el mismo que en las dos cláusulas anteriores'),
        T('No hay artículo, y el latín no lo usaría en una metáfora'),
        T('Porque {Verbum} es el único sustantivo neutro del versículo'),
      ],
      answer: 0,
      hint: T('Regla §4.'),
    },
    {
      kind: 'fill',
      prompt: T('En {sine ipso factum est nihil}, ¿qué caso rige {sine}? (una palabra)'),
      answer: 'ablativo',
      hint: T('Es el mismo caso que {principio} en {In principio}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con lo que hace en el versículo 1'),
      pairs: [
        { a: T('In'), b: T('preposición, siempre con ablativo') },
        { a: T('erat'), b: T('verbo {sum} en imperfecto, 3.ª sing.') },
        { a: T('apud'), b: T('preposición, siempre con acusativo') },
        { a: T('et'), b: T('conjunción, «y»') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{in}, {sine}, {cum}, {per} rigen el ablativo; {apud}, {ad}, {per} con sentido de movimiento rigen el acusativo.',
      ),
    },
    {
      n: '2',
      text: T('El imperfecto de {sum} expresa duración sin comienzo — el tiempo que no empieza.'),
    },
    {
      n: '3',
      text: T(
        'La ecuación se hace con {sum} entre dos términos del mismo caso: {Deus erat Verbum}.',
      ),
    },
    {
      n: '4',
      text: T('El latín evita pronombres redundantes: repite el sustantivo, no el {is}/{ea}/{id}.'),
    },
    {
      n: '5',
      text: T(
        'En {factum est} el {est} es solo auxiliar del pasivo; en {nihil quod est} ese mismo {est} es {sum} simple.',
      ),
    },
  ],
  notes: [
    {
      label: T('λόγος:'),
      text: T(
        'El griego original de {Verbum} es λόγος — palabra que en griego significa tanto «palabra» como «relación», «orden», «razón». Jerónimo no lo tradujo por {sermo} «sermón» ni por {verbum} en sentido retórico: mantuvo {Verbum} porque en latín el término ya cargaba la tensión entre palabra dicha y palabra cumplida. Fíjate en que {per ipsum} repite el {Verbum} sin nombrarlo, y {quod est} traduce λόγος una segunda vez.',
      ),
    },
    {
      label: T('Tiempo verbal:'),
      text: T(
        'El latín no tiene los tiempos que tiene el portugués. Lo que existe es el **aspecto**: el perfecto {non comprehenderunt} muestra la acción entera desde su final, el imperfecto {erat} muestra el proceso desde dentro. Traducir siempre por un solo tiempo del portugués aplana el latín más de lo debido.',
      ),
    },
  ],
  examples: [
    { text: 'In principio', gloss: T('«en el principio» — {in} + ablativo') },
    { text: 'erat Verbum', gloss: T('«era la Palabra» — verbo antes del sujeto') },
    { text: 'apud Deum', gloss: T('«junto a Dios» — {apud} + acusativo') },
    { text: 'Deus erat Verbum', gloss: T('«Dios era la Palabra» — ecuación') },
    {
      text: 'Hoc erat in principio apud Deum',
      gloss: T('«Esto era en el principio junto a Dios»'),
    },
    { text: 'Omnia per ipsum facta sunt', gloss: T('«Todas las cosas fueron hechas por él»') },
    { text: 'sine ipso', gloss: T('«sin él» — {sine} + ablativo') },
    { text: 'factum est nihil', gloss: T('«se hizo nada» — {nihil} es sujeto neutro') },
    { text: 'lux hominum', gloss: T('«luz de los hombres» — genitivo de posesión') },
    {
      text: 'tenebrae eam non comprehenderunt',
      gloss: T('«las tinieblas no lo alcanzaron» — {eam} = la luz'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Análisis de {In principio erat Verbum}'),
      head: [T('Palabra'), T('Caso'), T('Función'), T('Glosa')],
      rows: [
        ['In', T('—'), T('preposición'), 'em, no (+ ablativo)'],
        ['principio', T('ablativo sing.'), T('lugar'), 'no princípio'],
        ['erat', T('3.ª sing.'), T('verbo {sum}, imperfecto'), 'era'],
        ['Verbum', T('nominativo sing.'), T('sujeto'), 'a Palavra'],
      ],
    },
    {
      caption: T('Tabla 2 — Verbos de {In principio} a {non comprehenderunt}'),
      head: [T('Forma'), T('Lema'), T('Tiempo y modo'), T('Traducción')],
      rows: [
        ['erat', 'sum', T('indicativo imperfecto'), 'era'],
        ['est', 'sum', T('indicativo presente'), 'é'],
        ['sunt', 'sum', T('indicativo presente'), 'foram feitos'],
        ['factum est', 'facio', T('perfecto pasivo'), 'foi feito'],
        ['lucet', 'luceo', T('indicativo presente'), 'brilha'],
        ['comprehenderunt', 'comprehendo', T('indicativo perfecto'), 'alcançaram'],
      ],
    },
  ],
};
