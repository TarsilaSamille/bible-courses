import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Los artículos definidos'),
  subtitle: T(
    '{le, la, les} — el artículo que identifica, y las diez contracciones que hacen lo demás',
  ),
  section: T('Artículos'),
  body: C(`## El artículo definido es una promesa de que ya sabes de qué se trata

El español dice {el libro} cuando quiere decir *uno entre muchos*. El francés dice {le livre} y quiere decir **ese** libro, el único que importa en la conversación. Por eso aparece tanto: en casi toda frase francesa hay un artículo, y es a través de él como el oyente sabe de qué hablas.

Hay tres formas, y no varían por nada más — solo por el **género y el número del sustantivo**:

| | Singular | Plural |
|---|---|---|
| Masculino | {le} {livre} | {les} {livres} |
| Femenino | {la} {lettre} | {les} {lettres} |
| Ante vocal | {l’} {homme} | {les} {amis} |

Fíjate en un detalle: ante vocal o {h} muda, el masculino se vuelve {l’} y el femenino también: {l’homme}, {’école}, {l’ami}, {l’astre}. No existe {la homme} ni {le ami}.

El plural {les} es idéntico en los dos géneros, como en español. Y {les} casi nunca significa solo «los de mi casa»: fuera de un contexto que ya ha fijado el conjunto, {les} es un plural general, una totalidad. {J’aime les espagnols} «me gustan los españoles» es una afirmación sobre todos, no sobre algunos.

## Lo que le hace el artículo a una persona

Aquí el francés se separa de ti. {Pierre est un étudiant} «Pierre es estudiante» — {un} es genérico y cubre la categoría. Pero {le Père est Dieu} «el Padre es Dios», {la longueur est fixe} «la longitud es fija»: ante un nombre propio o un sustantivo abstracto, el artículo definido dice que **ese** es el asunto, no un ejemplar cualquiera. Esto es lo que las gramáticas llaman artículo definido con valor único.

El resultado es que el mismo sustantivo cambia de significado según el artículo. {le château} «el castillo» (uno concreto), {un château} «un castillo» (cualquiera, uno que se podría construir), {du château} «madera de castillo» (y aquí {d’} + {le} = {du}, regla de la lección siguiente).

## Elisión y contracción: dos operaciones distintas

Dos reglas distintas producen el mismo tipo de efecto, y confundirlas es el error más común de quien aprende.

La **elisión** ocurre cuando un artículo *terminado en vocal* se encuentra con una palabra que empieza por vocal: una de las dos pierde la vocal. Vale para artículos definidos {le, la} e indefinidos {un, une}, nunca para {les}, {de}, {du} o {des}.

La **contracción** ocurre cuando dos elementos **no articles** se funden en una sola palabra: {de + le = du}, {de + les = des}, {à + le = au}, {à + les = aux}, {de + la = de la}, {à + la = à la}. No desaparece ninguna vocal; las dos palabras simplemente se juntan.

El cuadro completo:

| Preposición | + le | + la | + les |
|---|---|---|---|
| {de} | {du} | {de la} | {des} |
| {à} | {au} | {à la} | {aux} |
| {en} | — | — | — |

Fíjate en que {de le} nunca aparece solo: o se vuelve {du}, o el sustantivo es plural y se vuelve {des}, o el sustantivo empieza por vocal y la {de} se queda sola: {de l’homme}. No existe {de le} ni {de les}.

## El plural partitivo, que muerde antes de tiempo

Un uso de {des} merece atención desde ya: {des} es muy común con sustantivos que en español no llevan artículo, y significa «algunos», «un poco de». {du pain} «pan», {des fruits} «fruta», {du vin} «vino», {de l’eau} «agua», {du riz} «arroz». El español diría {el pan}, {las frutas} — el desplazamiento es constante, y el nombre «partitivo» viene exactamente de ahí. La lección siguiente le está dedicada.

## Lectura aplicada

Vuelve a leer {Juan 1:1} en **Louis Segond** con los artículos aislados: {Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu}. Cuatro contracciones de {de + le}: {avec Dieu} (Dieu es masculino), {parole} con {la} dos veces, {était} dos veces. Cada {la Parole} apunta al **mismo** Verbo, y esa identidad — lo que hace exactamente un artículo definido — es lo que defiende todo el pasaje.

En {Juan 1:5}: {La lumière brille dans les ténèbres, et les ténèbres ne l’ont point reçue}. {La lumière} con {l’} ante vocal; {les ténèbres} dos veces, el mismo sustantivo; {l’ont} es {ne … l’ + ont} con el pronombre {la} elidido. En {Juan 1:14}: {Et la parole est devenu chair} — el paralelismo entre {la parole} y {la chair} muestra la misma construcción con {la} en ambos casos, una vez más que el {le}.

Al otro lado, {Juan 1:6}: {Il y eut un homme envoyé de Dieu, dont le nom était Jean}. Aquí {un homme} es indefinido, {de Dieu} marca origen y {le nom} vuelve a ser definido. La alternancia de {un} y {le} en una sola frase es la tarea más importante del artículo: {un} presenta, {le} identifica.

## Lo esencial

El artículo definido es lo que da identidad. Concuerda en género y número, se vuelve {l’} ante vocal, y desaparece dentro de {du}, {aux}, {des} — pero esas fusiones son con {de} y {à}, nunca con el artículo solo. Distingue siempre **elisión** (se pierde una vocal) de **contracción** (se fusionan dos palabras).`),
  vocab: [
    V('le', 'le', 'el (artículo definido masculino singular); se vuelve {l’} ante vocal'),
    V('la', 'la', 'la (artículo definido femenino singular); se vuelve {l’} ante vocal'),
    V('les', 'les', 'los, las (plural, ambos los géneros); nunca se elide'),
    V('l’homme', 'homme', 'el hombre; {h} muda pero el artículo sigue visible'),
    V('l’école', 'école', 'la escuela; elisión {la} + {école}'),
    V('le livre', 'livre', 'el libro; definido = ese libro, ya conocido'),
    V('la lumière', 'lumière', 'la luz; {è} abierta e {i} final muda'),
    V('les ténèbres', 'ténèbres', 'las tinieblas; {é} abierta y {s} final muda'),
    V('le Père', 'père', 'el Padre; definido con nombre abstracto, valor único'),
    V('du château', 'château', 'castillo (material); {de + le} contraído'),
    V('aux Vineyard', 'vigne', 'las viñas; {à + les} contraído en {aux}'),
    V('de l’homme', 'homme', 'del hombre; {de} se queda solo porque el nombre empieza por vocal'),
    V('de la vie', 'vie', 'de la vida; {de + la} no contrae'),
    V('la parole', 'parole', 'la palabra; {e} final muda y {o} abierta [ɔ]'),
    V('la chair', 'chair', 'la carne; {ch} = [ʃ] y {r} uvular final'),
    V('l’', 'le', 'forma elidida del artículo definido ante vocal o {h} muda'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {la Parole était avec Dieu}, ¿qué indica el {la}?'),
    options: [
      T('Que se trata del mismo Verbo que antes, no de cualquier palabra'),
      T('Que el Verbo es un sustantivo común, igual que {lettre}'),
      T('Que la frase es una pregunta retórica sobre palabras'),
      T('Que el artículo se eligió solo por simetría fonética'),
    ],
    answer: 0,
    hint: T('Regla §1: artículo definido = identidad, no categoría.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Artículo definido masculino ante {école}: l___ école'),
      hint: T('La palabra ya empieza por {l’}. No entra nada en el hueco.'),
      answer: '’',
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase contiene una contracción y no una elisión?'),
      options: [
        T('{Il va au temple}'),
        T('{Il va à l’école}'),
        T('{Il va à la maison}'),
        T('{Il va de l’école}'),
      ],
      answer: 0,
      hint: T(
        'Regla §3: la contracción funde {à} con {les}; la elisión solo afecta a {le}, {la}, {un}, {une}.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma con su contexto correcto'),
      pairs: [
        { a: T('{l’}'), b: T('elisión de {le} o {la} ante vocal') },
        { a: T('{du}'), b: T('contracción de {de} con {le}') },
        { a: T('{aux}'), b: T('contracción de {à} con {les}') },
        { a: T('{de la}'), b: T('sin contracción posible entre {de} y {la}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('¿Cuántas veces aparece {la Parole} en la primera frase de Juan 1?'),
      answer: 'trois',
      hint: T('Una vez al final de la cláusula, y dos veces en la siguiente.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El artículo definido marca identidad, no categoría: {le Père est Dieu} es «el (único) Padre es Dios», no «un padre».',
      ),
    },
    {
      n: '2',
      text: T(
        'Ante vocal o {h} muda, {le} y {la} se vuelven {l’}; el plural {les} nunca se elide.',
      ),
    },
    {
      n: '3',
      text: T(
        'La elisión pierde una vocal; la contracción es solo unión. {l’ami} = elisión, {du} y {aux} = contracción, {de la} = nada.',
      ),
    },
    {
      n: '4',
      text: T(
        '{de + le = du}, {de + les = des}, {à + le = au}, {à + les = aux}; {de + la} y {à + la} quedan separados.',
      ),
    },
    {
      n: '5',
      text: T(
        '{de le} y {de les} nunca aparecen solos: se vuelven {du}/{des}, o el nombre empieza por vocal y queda {de l…}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El artículo te da información gratis en español'),
      text: T(
        'En español distinguir {el} de {un} cambia el sentido, pero el contexto hace buena parte del trabajo. El francés es más rígido: ante un nombre propio {un} está mal; ante un sustantivo abstracto y único {le} es obligatorio. Traducir palabra por palabra da {un Dieu} donde el francés quiere {Dieu}, o elimina la {la} donde el francés la quiere.',
      ),
    },
    {
      label: T('{les} es total, no enumerativo'),
      text: T(
        'En español {los fulfils} se lee de forma distributiva; en francés {les} ante un nombre propio suena como afirmación sobre **todos** los miembros del grupo. {J’aime les pommes} es una opinión sobre la fruta como categoría. Para la lectura distributiva necesitas {les … un peu}, {le … un} o la repetición del sustantivo.',
      ),
    },
  ],
  examples: [
    { text: 'la Parole', gloss: T('el Verbo — definido = ese mismo Verbo') },
    { text: 'l’Éternel', gloss: T('el Señor (Sal 23:1) — {l’} + vocal {Éternel}') },
    { text: 'le Père', gloss: T('el Padre — valor único, como en {le Père est Dieu}') },
    {
      text: 'les ténèbres ne l’ont point reçue',
      gloss: T('las tinieblas no la recibieron — {l’} = pronombre {la} elidido'),
    },
    {
      text: 'un homme envoyé de Dieu',
      gloss: T('un hombre enviado por Dios — {un} indefinido, {de} sin contracción'),
    },
    {
      text: 'dont le nom était Jean',
      gloss: T('cuyo nombre era Juan — {le} vuelve a definido tras el indefinido'),
    },
    { text: 'au commencement', gloss: T('en el principio — {à + le} contraído en {au}') },
    { text: 'avec Dieu', gloss: T('con Dios — un nombre propio masculino no lleva artículo') },
    {
      text: 'la vie est la lumière',
      gloss: T('la vida es la luz (Jn 8:12) — {la} + {e} muda dos veces'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — El artículo definido por género y número'),
      head: [T('Género'), T('Singular'), T('Plural'), T('Ante vocal')],
      rows: [
        ['Masculino', 'le', 'les', "l'ami"],
        ['Feminino', 'la', 'les', "l'école"],
        ['Exemplo', '{le livre}', '{les livres}', '{l’homme}'],
      ],
    },
    {
      caption: T('Tabla 2 — Elisión y contracción una al lado de la otra'),
      head: [T('Operación'), T('Entrada'), T('Salida'), T('Vocal perdida')],
      rows: [
        ['Elisão', '{le} + {ami}', "{l'ami}", 'sim'],
        ['Elisão', '{la} + {école}', "{l'école}", 'sim'],
        ['Contratação', '{de} + {le}', '{du}', 'não'],
        ['Contratação', '{à} + {les}', '{aux}', 'não'],
        ['Sem fusão', '{de} + {la}', '{de la}', 'não'],
        ['Sem fusão', '{de} + {l’homme}', '{de l’homme}', 'não'],
      ],
    },
  ],
};
