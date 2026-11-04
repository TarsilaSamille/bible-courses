import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('Los pronombres demostrativos'),
  subtitle: T('este/ese/aquel — aquí/ahí/allí'),
  section: T('Los pronombres'),
  body: C(`## Tres distancias, como en portugués

{este} «este» (**aquí**, junto a quien habla) · {ese} «ese» (**ahí**, junto a quien escucha) · {aquel} «aquel» (**allí**, lejos de los dos).

Pero {este} y {ese} pueden ser **espaciales y neutros** cuando el hablante se incluye: {Ven aquí conmigo} «ven aquí conmigo» · {Ven ahí conmigo} «ven ahí conmigo».

Adjetivos: {este libro} «este libro» · {esos libros} «esos libros» · {aquellos días} «aquellos días».

## Los neutros

Las **ideas** llevan forma neutra: {esto} «esto» · {eso} «eso» · {aquello} «aquello».

{¿Qué es esto?} «¿qué es esto?» · {Por eso} «por eso» · {en esto} «en esto» · {Más allá de esto} «más allá de esto».

## El acento que desapareció

Hasta 2010, los pronombres y adjetivos demostrativos llevaban acento diacrítico: {éste}, {ése}, {aquélla}, {éstos}. La RAE lo abolió: hoy se escriben **siempre sin acento**, y pronombre y adjetivo quedan idénticos — {este} como pronombre significa «este de aquí» y como adjetivo, «este libro».

Las ediciones antiguas de Reina-Valera 1960 conservan la ortografía vieja; las actuales la actualizan.

## Fórmulas del Nuevo Testamento

{Este es mi Hijo, el amado} «Este es mi Hijo, el amado» (Mt 3.17).
{¿Dónde está?} «¿dónde está?»
{Esto es lo que os digo} «esto es lo que os digo».
{Aquello que oíréis} «aquello que oíréis» (Jn 16.13).
{en esto conoced} «en esto conoced» (1 Jn 4.2) — {esto} como **medio**: «por medio de esto».

Ej.: {Salió de Galilea} «salió de Galilea» — el demostrativo geográfico queda sobreentendido: {aquel} {lugar}.`),
  vocab: [
    V('este', 'este', 'este (¡aquí!)'),
    V('ese', 'ese', 'ese (¡ahí!)'),
    V('aquel', 'aquel', 'aquel (¡allí!)'),
    V('esto', 'esto', 'esto (¡neutro!)'),
    V('por eso', 'eso', 'por eso'),
    V('en esto', 'esto', 'en esto (1 Jn 4.2)'),
    V('aquellos días', 'aquel', 'aquellos días'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿«este/ese/aquel» = ?'),
    options: [
      T('Aquí/ahí/allí (¡tres distancias!)'),
      T('Pasado/presente/futuro'),
      T('Yo/tú/él'),
      T('Iguales'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('¿Cómo se escribe hoy el pronombre demostrativo acentuado: {Éste} o {este}?'),
      answer: 'este',
      hint: T('Regla §3: la RAE abolió el acento diacrítico.'),
    },
    {
      kind: 'choose',
      prompt: T('En «Ven conmigo», ¿qué demostrativo?'),
      options: [
        T('{aquel}'),
        T('{aquello}'),
        T('{este} o {ese} (¡quien habla se incluye!)'),
        T('{esto}'),
      ],
      answer: 2,
      hint: T('Regla §1: el hablante se incluye en el deixis.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el demostrativo con su función'),
      pairs: [
        { a: T('{este}'), b: T('cerca de quien habla') },
        { a: T('{ese}'), b: T('cerca de quien escucha') },
        { a: T('{aquel}'), b: T('lejos de los dos') },
        { a: T('{esto}'), b: T('neutro (idea, medio)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'este = aquí, ese = ahí, aquel = allí. El hablante está incluido: ven conmigo = ven aquí.',
      ),
    },
    {
      n: '2',
      text: T(
        'Los neutros (esto, eso, aquello) sustituyen a cualquier sustantivo y apuntan a una idea.',
      ),
    },
    {
      n: '3',
      text: T(
        'Desde 2010 no se escribe acento en pronombre ni en adjetivo demostrativo: este, ese, aquel.',
      ),
    },
  ],
  notes: [
    {
      label: T('Ese es demostrativo; ese es relativo'),
      text: T(
        'El mismo pronomen tiene tres distancias: {este} toca, {ese} aparta, {aquel} recuerda. {Aquél} con tilde es el demostrativo; {aquel} sin ella, el relativo — una palabra, dos funciones.',
      ),
    },
  ],
  examples: [
    { text: '{Este es mi Hijo, el amado}', gloss: T('Este es mi Hijo, el amado (Mt 3.17).') },
    { text: '{en esto conoced}', gloss: T('En esto conoced (1 Jn 4.2 — esto = medio).') },
    { text: '{por eso}', gloss: T('Por eso (neutro corto).') },
    { text: '¿Qué es esto?}', gloss: T('¿Qué es esto? (Gn 3.9)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Paradigma de los demostrativos'),
      head: [T('Distancia'), T('m. sg.'), T('f. sg.'), T('m. pl.'), T('f. pl.'), T('Neutro')],
      rows: [
        ['aqui', '{este}', '{esta}', '{estos}', '{estas}', '{esto}'],
        ['aí', '{ese}', '{esa}', '{esos}', '{esas}', '{eso}'],
        ['ali', '{aquel}', '{aquella}', '{aquellos}', '{aquellas}', '{aquello}'],
      ],
    },
    {
      caption: T('Tabla 2 — Fórmulas bíblicas'),
      head: [T('Forma'), T('Sentido'), T('Referencia')],
      rows: [
        ['{Este es mi Hijo}', T('este (atributivo)'), 'Mt 3.17'],
        ['{en esto conoced}', T('esto = medio'), '1 Jn 4.2'],
        ['{Aquello que oíréis}', T('aquello = cosa lejana'), 'Jn 16.13'],
        ['{por eso}', T('eso = eso'), '1 Jn 3.24'],
      ],
    },
  ],
};
