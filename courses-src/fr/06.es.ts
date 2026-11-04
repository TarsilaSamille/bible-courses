import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('El género de los sustantivos'),
  subtitle: T('por qué {le livre} es masculino y {la table} es femenino — las cinco pistas'),
  section: T('Sustantivos'),
  body: C(`## El género es arbitrario; las pistas no

El género de los sustantivos franceses no tiene motivo. No viene del significado, ni de la etimología latina, ni de la forma. {le livre} es masculino porque el latín *liber* era masculino; {la table} es femenino porque el latín *tabula* era femenino. No puedes deducirlo, solo tienes que saberlo.

La buena noticia es que existen **cinco pistas** que, entre ellas, aciertan la gran mayoría de los casos.

## Las cinco pistas

**1 · Los animados y sexuados son masculinos.** {le père}, {le roi}, {le chat}, {l’homme}, {le garçon}, {le frère}, {le cheval}, {l’oiseau}. El género natural del referente se trasladó simplemente al sustantivo. {La personne} es la excepción principal: {personne} es femenino, pero {le personne} es un insulto masculino que significa «una personaakhum outstanding».

**2 · Los objetos largos y cortantes son masculinos.** {leGate}, {le couteau}, {le crayon}, {le marteau}, {le tableau}, {le livre}, {le papier}, {le pain}, {le fromage}, {le vin}. Las cosas que se «agarran» con firmeza tienden a ser masculinas.

**3 · Plantas, frutos y seres vivos son femeninos.** {la fleur}, {la rose}, {la pomme}, {la terre}, {la forêt}, {la nature}, {la vie}, {la paix}, {la mort}, {la chance}, {la liberté}. Estéticamente, todo lo que crece o todo lo que vive es femenino.

**4 · Terminaciones fuertes.** Esta es la guía más fiable, y cubre decenas de miles de sustantivos:

| Terminación | Género | Ejemplos |
|---|---|---|
| *-age, -ment, -ement, -issement* | masculino | {le courage}, {le}… |
| *-eau* | masculino | {le tableau}, {le}… |
| *-ou* | masculino | {le}… |
| *-teur, -trice* | ambos | {le}… / {la}… |
| *-ette, -euse, -rice, *-ie, -ude* | femenino | {la}… |
| *-tion, -sion, -té* | femenino | {la}… |
| *-eur* (sin {r} final) | femenino | {la}… |

**5 · El diccionario.** Cuando las cuatro primeras pistas fallan, el diccionario es el juez. Todo diccionario francés da el género **antes** de la definición: {le} m., {la} f., {m.} neutro. Y el alumno no tiene opción: el francés lo hablan quienes tienen el diccionario a mano.

## Las excepciones que encontrarás

Las pistas fallan más de lo que uno creería, y es mejor saber cuáles que descubrirlo en la calle. El barrio {le}… es masculino; la ciudad {la}… es femenina. Y lo más molesto: {le}….

Las terminaciones *-eur* son especialmente traicioneras: {l’erreur} «error» es femenino, {le moteur} «motor» es masculino, {le hauteur} «altura» es femenino, y {la couleur} «color» es femenino. Así que {la couleur} es correcto y {le couleur} está mal.

Y hay sustantivos cuya terminación miente: {le}… no existe. Pero {le}…: {le}….

Una lista honesta de las traiciones más comunes: {le genre} (m., «género») frente a {la genre} (f., «especie»); {le livre} (m., «libro») frente a {la livre} (f., «lo que es libre»); {le tour} (m., «giro») frente a {la tour} (f., «torre»); {le}… no; pero {le}…: {le}….

## Lectura aplicada

El texto de **Louis Segond** de {Juan 1:1} pone dos géneros en una misma línea, y esa línea es la mejor prueba de género que existe: {Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu}.

{le commencement} — masculino, acaba en *-ment*, como todos {le changement}, {le mouvement}, {le sentiment}. {la Parole} — femenino, y el sustantivo va en mayúscula por ser un título: es el Verbo, no una palabra cualquiera. {Dieu} — masculino, con {d} mayúscula y sin artículo, como todos los nombres propios, que en francés son casi siempre masculinos o, si femeninos, llevan {l’} ({l’Âme}, {l’Église}).

En {Juan 1:5}, el par {la lumière} / {les ténèbres} es femenino en ambos casos: {lumière} y {ténèbres} son sustantivos abstractos. Pero justo después viene {la vie} (f.) y {le monde} (m.). En {Juan 1:14}, {la parole} (f.), {la chair} (f.), {la gloire} (f.), {le Père} (m.), {le Fils} (m.), {l’unique} (m. o f., aquí un adjetivo sustantivado en femenino).

El patrón que emerge es el más útil de todos: **los sustantivos abstractos en {-tion, -sion, -té} son femeninos, y los nombres de Dios y del yo son masculinos o llevan {l’}**. En un texto francés eso te da una predicción correcta en casi todos los casos.

## Lo esencial

El género es arbitrario pero no aleatorio: cinco pistas — animados, duros, orgánicos, terminación, diccionario — llegan a casi todo. Y cuando todo falla, acéptalo: vas a buscar {la couleur} en el diccionario hasta el final de tus días, y eso es normal.`),
  vocab: [
    V('le livre', 'livre', 'el libro (m.); del latín masculino *liber*'),
    V('la table', 'table', 'la mesa (f.); del latín femenino *tabula*'),
    V('le couteau', 'couteau', 'el cuchillo (m.); objeto cortante, y *-eau* es masculino'),
    V('le tableau', 'tableau', 'el cuadro, la pizarra (m.); *-eau* siempre masculino'),
    V('la pomme', 'pomme', 'la manzana (f.); fruto, clase femenina'),
    V('la forêt', 'forêt', 'el bosque (f.); planta, clase femenina'),
    V('le courage', 'courage', 'el valor (m.); acaba en *-age*'),
    V('le sentiment', 'sentiment', 'el sentimiento (m.); acaba en *-ment*'),
    V('la liberté', 'liberté', 'la libertad (f.); acaba en *-té*'),
    V('l’erreur', 'erreur', 'el error (f.); *-eur* sin {r} final es femenino'),
    V('le moteur', 'moteur', 'el motor (m.); *-eur* con {r} final puede ser masculino'),
    V('la hauteur', 'hauteur', 'la altura (f.); *-eur*, contra la regla'),
    V('la couleur', 'couleur', 'el color (f.); *-eur* de la raíz de color, {ll} = [j]'),
    V('la vendeuse', 'vendeuse', 'la vendedora (f.); acaba en *-euse*'),
    V('la chair', 'chair', 'la carne (f.); {ch} = [ʃ], {ai} = [ɛ]'),
    V('l’Église', 'église', 'la Iglesia (f.); {É} = [e] y {ll} = [j]'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Por qué {la table} es femenino, aunque sea un objeto de madera?'),
    options: [
      T('Porque el género viene del latín {tabula}, femenino, y no del significado actual'),
      T('Porque la palabra acaba en {e} muda, y toda {e} final es femenina'),
      T('Porque mesas, sillas y muebles son siempre femeninos en francés'),
      T('Porque el sustantivo tiene cinco sílabas y el número de sílabas decide el género'),
    ],
    answer: 0,
    hint: T('Regla §1: el género es una herencia histórica, no una consecuencia del significado.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa con el artículo correcto: ___ commencement (el comienzo)'),
      answer: 'le',
      hint: T('Regla §4: *-ment* es casi siempre masculino.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué sustantivo va contra la pista de las terminaciones en *-eur*?'),
      options: [
        T('{le moteur} — masculino, aunque {l’erreur} es femenino'),
        T('{l’erreur} — femenino, y {-eur} manda'),
        T('{la couleur} — femenino, y {-eur} manda'),
        T('{la hauteur} — femenino, y {-eur} manda'),
      ],
      answer: 0,
      hint: T('Regla §4: *-eur* sin {r} final es femenino; con {r} final, decide la palabra.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el sustantivo con su género francés'),
      pairs: [
        { a: T('{el cuchillo}'), b: T('masculino por {eau} final') },
        { a: T('{la manzana}'), b: T('femenino por ser fruto') },
        { a: T('{el rey}'), b: T('masculino por ser animado y sexuado') },
        { a: T('{la libertad}'), b: T('femenino por {-té}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('En {la Parole était avec Dieu}, ¿cuántos sustantivos femeninos aparecen?'),
      answer: 'um',
      hint: T('Cuenta solo los sustantivos: {Parole} es f., {Dieu} es m. El verbo no cuenta.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El género francés se hereda del latín, no se deduce del sentido: {le livre} viene de *liber*, {la table} de *tabula*.',
      ),
    },
    {
      n: '2',
      text: T(
        'Animados, sexuados y duros van al masculino: {le père}, {le chat}, {le couteau}, {le livre}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Plantas, frutos y vida van al femenino: {la pomme}, {la forêt}, {la vie}, {la mort}, {la liberté}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Las terminaciones son la guía más fuerte: *-age, -ment, -eau, -ou* masc.; *-ette, -euse, -rice, -té, -tion* fem.',
      ),
    },
    {
      n: '5',
      text: T(
        'Ante la duda decide el diccionario: toda entrada da el género antes de la definición, y el alumno lo consultará toda la vida.',
      ),
    },
  ],
  notes: [
    {
      label: T('La palabra beau tiene dos sexos y dos sentidos'),
      text: T(
        'Las cognadas son las trampas peores: {beau} es masculino, pero {bel} (la forma ante {e}) sigue masculino, y el femenino es {belle}, sin {e}. Lo mismo con {nouveau → nouvelle}, {vieux → vieille}, {fou → folle}, {blanc → blanche}, {long → longue}, {mort → morte}. Ninguno cambió de género por razón alguna: el femenino es un sufijo nuevo, y la {x} se vuelve [k] o [s] como en {riche}, {fille}. Tienes que aprender cada par.',
      ),
    },
    {
      label: T('Por qué esto no es un problema serio'),
      text: T(
        'Nadie en Francia errar de género todo el rato. Simplemente **no piensa** en ello: el género es parte de la palabra, como la vocal. Un nativo no «sabe» que {la table} es femenino; sabe *table* y el femenino viene incluido, igual que el {o} de {mesa} en español viene con la palabra. Aprende {la table} como una unidad, no {table} más «femenino», y se resuelve.',
      ),
    },
  ],
  examples: [
    {
      text: 'Au commencement était la Parole',
      gloss: T('en el principio era el Verbo (Jn 1:1) — {le} y {la} uno al lado del otro'),
    },
    {
      text: 'la Parole était avec Dieu',
      gloss: T('el Verbo era con Dios — {Dieu} m. sin artículo'),
    },
    {
      text: 'La lumière brille dans les ténèbres',
      gloss: T('la luz brilla en las tinieblas — dos abstractos femeninos'),
    },
    { text: 'la vie et la mort', gloss: T('la vida y la muerte — ambos femeninos por ser vida') },
    {
      text: 'sa gloire comme celle du Père unique',
      gloss: T('su gloria como la del Padre único — {le Père} m. frente a {la gloire} f.'),
    },
    { text: 'l’Église', gloss: T('la Iglesia — femenino con {l’} obligatorio') },
    { text: 'le château et la tour', gloss: T('el castillo y la torre — {eau} masc., {our} fem.') },
    {
      text: 'la liberté, la vérité',
      gloss: T('la libertad, la verdad — {-té} y {-ité} femeninos'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Las cinco pistas de género, resumidas'),
      head: [T('Pista'), T('Categoría'), T('Género típico'), T('Ejemplo')],
      rows: [
        ['1', 'animados e sexuados', 'masculino', '{le père}'],
        ['2', 'objetos duros e cortantes', 'masculino', '{le couteau}'],
        ['3', 'plantas e seres vivos', 'feminino', '{la pomme}'],
        ['4', 'terminação *-age, -ment*', 'masculino', '{le courage}'],
        ['4', 'terminação *-té, -tion*', 'feminino', '{la liberté}'],
        ['5', 'dicionário', 'qualquer', '{le}… / {la}…'],
      ],
    },
    {
      caption: T('Tabla 2 — Pares de género doble en el mismo texto'),
      head: [T('Masculino'), T('Femenino'), T('Glosa masc.'), T('Glosa fem.')],
      rows: [
        ['{le commencement}', '{la}…', 'o começo', 'a origem'],
        ['{le livre}', '{la livre}', 'o livro', 'a coisa livre'],
        ['{le tour}', '{la tour}', 'o giro', 'a torre'],
        ['{le genre}', '{la}…', 'o gênero', 'a espécie'],
        ['{le}…', '{la couleur}', 'a cor (raro)', 'a cor (comum)'],
      ],
    },
  ],
};
