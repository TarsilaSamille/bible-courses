import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('El sustantivo'),
  subtitle: T('lo que da nombre a las cosas — y los dos espejos que guarda el francés'),
  section: T('Sustantivos'),
  body: C(`## Un sustantivo nombra; el resto de la frase hace el resto

En francés el sustantivo es la pieza que da identidad a un referente, y es la que concuerda con el artículo, el adjetivo y a veces el verbo. {livre}, {maison}, {vérité}, {lumière} — cada uno nombra algo, y cada uno entra en combinación con un conjunto fijo de palabras.

Esa combinación es la **concordancia**, y se mide en dos cosas: **género** (masculino o femenino) y **número** (singular o plural). Nada más. Un sustantivo francés no tiene caso: no se flexiona para indicar quién hace qué a quién. {le livre} es el mismo {le livre} sea sujeto, objeto o complemento — quien marca la función es el artículo, el pronombre o la posición en la frase.

Compáralo con el español, que todavía declina: {el libro, del libro, al libro}. El sustantivo francés perdió esa información por una razón práctica: sin casos no hay dos palabras para la misma cosa, y el sustantivo puede crecer sin que la lengua cruja.

## Los dos espejos del sustantivo

Lo que complica la vida del alumno no es la concordancia, es adivinar el género antes de saber el plural. Un sustantivo francés puede ser:

- **masculino**: {le livre}, {le soleil}, {le travail}, {le problème}, {le roi}, {le chat}
- **femenino**: {la table}, {la lune}, {la ville}, {la question}, {la reine}, {la chatte}

Un mismo sustantivo puede ser **ambos**: {le livre} «el libro» y {la livre} «la cosa libre» (adjetivo sustantivado). Y hay sustantivos cuyo género cambia con el sentido: {le tour} «el giro, la vuelta» y {la tour} «la torre» — misma palabra, dos géneros, dos significados.

Una guía de bolsillo, sin ser exhaustiva: los sustantivos terminados en *-age, -ment, -ement, -issement* son casi siempre masculinos ({le courage}, {le mouvement}, {le savoir}); los terminados en *-ette, -euse, -rice, -ie, -ude, -té* son casi siempre femeninos ({la sellette}, {la vendeuse}, {la matrice}, {la sortie}, {la remède}, {la bonté}). Y los nombres de países, ciudades y ríos son siempre femeninos: {la France}, {l’Italie}, {la Seine}, {la Loire}. Las excepciones famosas son {le Canada}, {le Portugal}, {le Japon} — los que acaban en [ə] débil.

## El plural: tres caminos y una regla general

El plural francés se forma **añadiendo una {s} muda**. Solo eso, en la aplastante mayoría de los casos: {le livre → les livres}, {la maison → les maisons}, {le travail → les travaux}.

La {s} final es muda, como vimos en la primera lección. Pero en dos situaciones es **audible**, y de ahí nacen las dos reglas especiales.

**Regla de las sibilantes**: cuando el sustantivo acaba en {s, x, z}, la {s} del plural se vuelve [z], como la {s} intervocálica de la lección 1. {un prix} [pʁi] → {des prix} [pʁi], con sonido [z]. {le choix} [ʃwa] → {les choix} [ʃwaz], con [z]. {le nez} [ne] → {les nez} [nez], ¡con [z]!

**Regla de los grupos**: cuando el sustantivo acaba en *-eau* o en *-ou*, la {s} del plural sustituye la *-eau*/*-ou* final. {le journal} → {les journaux}, {le cadeau} → {les cadeaux}. Y {un blocus} es una palabra sin plural.

Y hay un puñado de irregulares que hay que aprender uno por uno: {le travail → les travaux}, {le délice → les délices}. Los más útiles en el día a día son {œil → yeux} «ojos», {ciel → cieux} «cielos», {aïeul → aïeux} «abuelos».

## Lectura aplicada

El texto de **Louis Segond** de {Juan 1:14} usa sustantivos de ambos los géneros en una sola frase, y cada uno elige el artículo correcto: {Et la parole est devenue chair, et nous avons vu sa gloire, sa gloire comme celle du Père unique}.

{la parole} — femenino, «el Verbo». {la chair} — femenino, «la carne». {la gloire} — femenino, «la gloria», repetido. {le Père} — masculino, «el Padre», y fíjate: el sustantivo es masculino, pero el **verbo** es {est devenue}, tercera persona del singular, porque en francés un verbo no varía con el género, solo con el número. {le Fils} — masculino. {l’unique} — un adjetivo sustantivado con artículo.

En {Juan 1:1}, el contraste más limpio está en el par {le commencement} / {la Parole}: {Au commencement était la Parole}. Ahí están {le} y {la} en el mismo tramo, y un alumno que aplique el género español se equivocará en uno de los dos. Fíjate también en {la lumière} (f.) frente a {le jour} (m.) en {Juan 1:5}: {La lumière brille dans les ténèbres}.

Del mismo pasaje, {ténèbres} muestra el plural aplicado a un sustantivo que ya es plural en español: {les ténèbres} «las tinieblas». Y {les œuvres} «las obras» (Jn 1:17) sigue la regla de los grupos: {œuvre} → {œuvres}, con la {s} muda.

## Lo esencial

El sustantivo francés concuerda solo en género y número, y no tiene caso. El género se adivina por terminación, por tipo semántico y por origen — y el plural es casi siempre una {s} muda, con [z] tras {s, x, z} y una {s} que se traga la terminación tras *-eau* y *-ou*.`),
  vocab: [
    V('livre', 'livre', 'libro (m.); {s} final muda'),
    V('table', 'table', 'mesa (f.); acaba en {e} muda, pero es femenino'),
    V('maison', 'maison', 'casa (f.); singular sin {s}'),
    V('soleil', 'soleil', 'sol (m.); {oi} = [wa] y {ll} = [j]'),
    V('travail', 'travail', 'trabajo (m.); plural {trabajos} por pérdida de vocal'),
    V('problème', 'problème', 'problema (m.); {è} = [ɛ]'),
    V('vérité', 'vérité', 'verdad (f.); la terminación *-ité* es femenina'),
    V('sortie', 'sortie', 'salida (f.); la terminación *-ie* es femenina'),
    V('courage', 'courage', 'valor (m.); la terminación *-age* es masculina'),
    V('movement', 'mouvement', 'movimiento (m.); la terminación *-ment* es masculina'),
    V('prix', 'prix', 'precio (m.); la {x} final se vuelve [z] en plural'),
    V('choix', 'choix', 'elección (m.); {oi} = [wa] y [z] en plural'),
    V('nez', 'nez', 'nariz (m.); plural narices con [z] tras la {e} final'),
    V('journal', 'journal', 'periódico (m.); *-al* da {periodistas}'),
    V('œil', 'œil', 'ojo (m.); plural {ojos}, irregular'),
    V('œuvre', 'œuvre', 'obra (f.); {œu} = [ø]'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {le travail → les travaux}, ¿qué pasó al formarse el plural?'),
    options: [
      T('El {ai} tónico perdió el sonido y la {l} muda se fundió con la {s}'),
      T('El sustantivo pasó a ser femenino, como en {la travail}'),
      T('La {s} del plural se dobló a {trabajoss}'),
      T('La terminación latina *-ail* se restauró tal cual'),
    ],
    answer: 0,
    hint: T('Regla §2: el {ai} de {travail} es vocal semivocal y desaparece ante la {s}.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Plural de {le prix}: les pri___ (con sonido [z])'),
      answer: 'x',
      hint: T('La {x} final es muda en singular, pero la {s} del plural convierte la {x} en [z].'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué sustantivo es femenino por terminación?'),
      options: [T('{la libertad}'), T('{el saber}'), T('{el desarrollo}'), T('{la mezcla}')],
      answer: 0,
      hint: T(
        'Regla §1: *-age, -ment, -ement* son casi siempre masculinos; *-té* casi siempre femenino.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el sustantivo con su género'),
      pairs: [
        { a: T('{el sol}'), b: T('masculino') },
        { a: T('{la luna}'), b: T('femenino') },
        { a: T('{el saber}'), b: T('masculino (acaba en *-oir*)') },
        { a: T('{la bondad}'), b: T('femenino (acaba en *-té*)') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Completa el par de género doble: ___ tour = la torre; ___ tour = el giro'),
      answer: 'la',
      hint: T(
        'La torre es {la tour}; el giro es {le tour}. Misma palabra, el género cambia con el sentido.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El sustantivo francés concuerda solo en género y número, y no tiene caso: {le livre} es el mismo en cualquier función.',
      ),
    },
    {
      n: '2',
      text: T(
        'El plural general añade una {s} muda: {le livre → les livres}, {la maison → les maisons}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Tras {s, x, z} la {s} del plural suena [z]: {le nez} [ne] → {les nez} [nez], {le choix} [ʃwa] → {les choix} [ʃwaz].',
      ),
    },
    {
      n: '4',
      text: T(
        'En *-eau* y *-ou* la {s} del plural sustituye la terminación: {le journal → les journaux}, {le cadeau → les cadeaux}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Un mismo sustantivo puede tener dos géneros según el sentido: {le tour} «el giro» y {la tour} «la torre», {le livre} «el libro» y {la livre} «lo que es libre».',
      ),
    },
  ],
  notes: [
    {
      label: T('Cómo el sustantivo sin casos liberó al francés'),
      text: T(
        'El latín tenía seis casos; el português antiguo tenía cuatro y el moderno tres, pero el sustantivo sigue flexionándose. El francés fue más allá: eliminó el caso y obligó al artículo y al adjetivo a llevar esa información. La ganancia es pequeña: {le livre rouge} no cambia cuando el sustantivo se mueve, y el sustantivo es una sola cosa. El francés es más prolijo, y más fácil de hablar sin planificar.',
      ),
    },
    {
      label: T('El plural que revela el género'),
      text: T(
        'Hay sustantivos que solo existen en plural, y esa existencia ya resuelve la duda: el plural suele ser la forma más antigua. Lo mismo vale con {ciel → cieux}: el plural es la forma primitiva. Cuando dudes, busca el plural: es el mejor profesor de género que existe.',
      ),
    },
  ],
  examples: [
    {
      text: 'la parole est devenue chair',
      gloss: T('el Verbo se hizo carne (Jn 1:14) — dos sustantivos femeninos'),
    },
    {
      text: 'comme celle du Père unique',
      gloss: T('como la del Padre único — {du} = «de + le» marca posesión'),
    },
    {
      text: 'Au commencement était la Parole',
      gloss: T('en el principio era el Verbo — {le} y {la} en el mismo tramo'),
    },
    {
      text: 'La lumière brille dans les ténèbres',
      gloss: T('la luz brilla en las tinieblas (Jn 1:5) — {la} f. y {le} implícito en tinieblas'),
    },
    { text: 'les œuvres', gloss: T('las obras (Jn 1:17) — {œu} = [ø] y {s} muda') },
    {
      text: 'le travail et les travaux',
      gloss: T('el trabajo y los trabajos — el {ai} pierde el sonido en plural'),
    },
    {
      text: 'l’œil et les yeux',
      gloss: T('el ojo y los ojos — irregular, el plural es la forma antigua'),
    },
    {
      text: 'le prix et les prix',
      gloss: T('el precio y los precios — [pʁi] frente a [pʁi], con [z] muda'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Pistas de género por terminación'),
      head: [T('Terminación'), T('Género'), T('Ejemplo'), T('Glosa')],
      rows: [
        ['-age', 'masculino', '{le courage}', 'coragem'],
        ['-ment', 'masculino', '{le mouvement}', 'movimento'],
        ['-issement', 'masculino', '{le savant}', 'erudito'],
        ['-ette', 'feminino', '{la cassette}', 'fita'],
        ['-euse', 'feminino', '{la vendeuse}', 'vendedora'],
        ['-rice', 'feminino', '{la matrice}', 'matriz'],
        ['-té', 'feminino', '{la bonté}', 'bondade'],
        ['país, cidade, rio', 'feminino', '{la Seine}', 'o rio Sena'],
      ],
    },
    {
      caption: T('Tabla 2 — Las tres reglas del plural'),
      head: [T('Regla'), T('Acaba en'), T('Hace'), T('Ejemplo')],
      rows: [
        ['geral', 'qualquer outra coisa', '{s} mudo', '{le livre → les livres}'],
        ['sibilante', '{s, x, z}', '[z] audível', '{le choix → les choix}'],
        ['grupo', '*-eau, *-ou', '{s} absorve a terminação', '{le cadeau → les cadeaux}'],
        ['irregular', 'caso especial', 'troca de vogal', '{le travail → les travaux}'],
        ['irregular', '{œil}', 'forma própria', '{l’œil → les yeux}'],
      ],
    },
  ],
};
