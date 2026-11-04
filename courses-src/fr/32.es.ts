import { C, T, V } from '../shared.mts';

export default {
  id: 32,
  title: T('Los pronombres indefinidos'),
  subtitle: T('quelqu’un, personne, rien, tout — y el francés que se esconde tras ellos'),
  section: T('Consolidación'),
  body: C(`## ¿Quién? ¿Algo? ¿Nada? ¿Todo?

Los indefinidos sustituyen un sustantivo demasiado vago para nombrarlo. El par positivo-negativo es el eje del capítulo: **{quelqu’un}** es «alguien», **{quelque chose}** «algo», y sus opuestos son **{personne}** «nadie» y **{rien}** «nada». Fíjate en la asimetría: português y español se bastan con un «no», pero el francés insiste: {Je ne vois personne} — el {ne} pertenece a la forma escrita, y además el verbo va conjugado en negativo.

En el habla cotidiana el {ne} desaparece: {je vois pas}, {y a rien}. Aun así, al escribir, usa la forma completa.

## Tout: el indefinido que cambia de aspecto

{tout} significa «todo» y funciona como adverbio en muchas expresiones ({Tout est possible}, «todo es posible»). Con artículo se vuelve adjetivo y concuerda: {tous}, {toutes}. En {tous priaient}, «todos rezaban», el sustantivo se omite: el pronombre ocupa por sí solo la función de sujeto. Como atributo, en cambio, {tout} es **invariable**: {le monde tout entier} = «el mundo entero», sin *toute*.

Existe además un {tout} de uso corriente, nada indefinido: en {chacun son don}, {chacun} es «cada uno» y {son} es un posesivo con sentido distributivo: «cada uno con su don». El francés tiene una sola palabra para eso, {chacun}, sin plural.

## On, l'autre, aucun

{on} es el «se» impersonal: {On parle français} — «Se habla francés». En {On a construit ce pont}, el sujeto es un ser humano genérico, casi siempre un «se» pasivo. Es la alternativa oral de {il est construit}.

{l'autre} es «el otro» y necesita su sustantivo: {l'autre homme}, {l'autre jour}. El sustantivo es obligatorio, salvo cuando {l'autre} significa «los demás» en general.

{aucun} es «ninguno» y niega con más fuerza que {pas de}: {Je n'ai aucun courage} — «No tengo ninguna valentía». Y en la combinación fija: {ne... aucun} nunca tiene el sentido afirmativo de «algún», al contrario que {ne... pas}, que sí lo admite en frases como {Je ne demande pas de prix}.

## Lo que se lleva a los capítulos de lectura

Casi toda subordinada de los capítulos de lectura contiene un indefinido. {Père nostre qui êtes aux cieux} es un relativo; {Donnez-nous aujourd'hui notre pain} trae el posesivo {notre}; {Pardonne-nous nos offenses} trae el objeto indirecto {nous}. Ninguno es indefinido, y ese es justamente el punto: el indefinido nombra el *contenido* — quién recibe, qué cosa, cuánta cantidad. Cuando quien habla no sabe quién ni qué, el francés nunca inventa: escribe {quelqu'un} o {personne}.`),
  vocab: [
    V('quelqu’un', 'quelqu’un', 'alguien (pronombre indefinido)'),
    V('quelque chose', 'quelque chose', 'algo, alguna cosa'),
    V('personne', 'personne', 'nadie (también «persona»)'),
    V('rien', 'rien', 'nada'),
    V('tout', 'tout', 'todo (invariable como atributo)'),
    V('tous', 'tout', 'todos (plural masculino)'),
    V('toutes', 'tout', 'todas (plural femenino)'),
    V('chacun', 'chacun', 'cada uno (sin plural; distributivo)'),
    V('aucun', 'aucun', 'ninguno (niega más que pas de)'),
    V('plusieurs', 'plusieurs', 'varios, muchos (siempre plural)'),
    V('quelques', 'quelque', 'algunos (plural de quelques)'),
    V('chose', 'chose', 'cosa (femenino, casi siempre con quelque)'),
    V('on', 'on', 'se (impersonal); alguien (genérico)'),
    V('l’autre', 'autre', 'el otro, los otros'),
    V('ni', 'ni', 'ni (en ni…ni)'),
    V('autre', 'autre', 'otro (atributo); demás (de autre(s))'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Je ne vois personne}, ¿por qué la forma escrita exige {ne}?'),
    options: [
      T('Porque {personne} ya es negativo: el {ne} solo marca formalmente la negación'),
      T('Porque el {ne} cambia el sentido a afirmativo, como en {ne… pas}'),
      T('Porque el verbo necesita {ne} en plural'),
      T('Porque {personne} exige el subjuntivo'),
    ],
    answer: 0,
    hint: T('El {ne} es el «no» de familia en {ne… personne}, {ne… rien}, {ne… aucun}.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: {Le monde ___ entier} — el {tout} atributivo es invariable.'),
      answer: 'tout',
      hint: T('Solo cuando {tout} lleva artículo concuerda: {tous}, {toutes}.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase usa {chacun} en sentido distributivo de «cada uno con su»?'),
      options: [
        T('{Chacun son don}, cada uno con su don'),
        T('{Chacun des enfants}, cada uno de los niños'),
        T('{Chacun a mangé une pomme}, cada uno comió una manzana'),
        T('{Chacun, enfin}, cada uno, al fin'),
      ],
      answer: 0,
      hint: T('El distributivo exige un posesivo singular ({son}, {sa}, {ses}) justo después.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma indefinida con lo que sustituye'),
      pairs: [
        { a: T('on'), b: T('«se» impersonal, agente genérico') },
        { a: T('personne'), b: T('cero personas, con ne obligatorio al escribir') },
        { a: T('tout'), b: T('la totalidad, adverbio o atributo invariable') },
        { a: T('chacun'), b: T('cada uno, distributivo, sin plural') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T(
        '¿Cuántos nombres de persona hay en {Je ne vois personne et rien du tout}? Responde con un número: ___',
      ),
      answer: '1',
      hint: T('Cuenta a quién se nombra, no cuántas oraciones hay.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Los indefinidos negativos {personne}, {rien} y {aucun} **ya son negativos**: nunca aparece un segundo negativo. {Je ne vois personne}, jamás *{ne… pas personne}.',
      ),
    },
    {
      n: '2',
      text: T(
        'El {ne} es obligatorio al escribir con {personne}, {rien}, {aucun} y {jamais}, pero {pas} se omite: {Je ne mange rien}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{tout} concuerda ({tous}, {toutes}) cuando sustituye a un sustantivo, pero es invariable cuando lo cualifica: {le monde tout entier}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{chacun} nunca tiene plural y distribuye con un posesivo singular: {chacun son choix}, «cada uno con su elección».',
      ),
    },
    {
      n: '5',
      text: T(
        '{aucun} niega siempre, incluso en frases negativas: {Il n’a aucun travail}, «no tiene ningún trabajo». Con {personne} y {rien} la negación ya está en la palabra.',
      ),
    },
  ],
  notes: [
    {
      label: T('El francés no tiene pronombre indefinido genérico'),
      text: T(
        'En inglês, *someone* puede ser genérico (*Someone should call the police*). En francés no: {quelqu’un} exige una persona concreta, y lo genérico se hace con {on} o con un sustantivo plural ({Des visiteurs attendent}, «esperan visitantes»). Por eso {Quelqu’un a frappé} suena a noticia concreta: alguien llamó de verdad.',
      ),
    },
    {
      label: T('Antes de la lectura: qué pronombres te vas a encontrar'),
      text: T(
        'En el {Père Notre-Dame} y en el {Symbole des Apôtres}, los indefinidos son raros y modestos: {quelque chose}, {personne}, {tout le monde}. Dominan los **relativos** ({qui}, {que}, {dont}) y los **posesivos** ({notre}, {nos}). Conserva esa distinción: un texto solemne en francés repite los mismos pronombres, y lo que varía son los verbos. Así, al leer, empieza por expandir mentalmente los pronombres en el sintagma completo — y recuerda que el verbo nunca anda suelto: siempre va justo detrás de su sujeto.',
      ),
    },
  ],
  examples: [
    { text: 'Je ne vois personne', gloss: T('no veo a nadie') },
    { text: 'Il ne dit rien', gloss: T('no dice nada') },
    { text: 'Tout est possible', gloss: T('todo es posible') },
    { text: 'Tous priaient', gloss: T('todos rezaban (el sustantivo se omite)') },
    { text: 'le monde tout entier', gloss: T('el mundo entero (tout invariable)') },
    { text: 'chacun son don', gloss: T('cada uno con su don') },
    { text: 'on parle français', gloss: T('se habla francés (on = se impersonal)') },
    { text: 'je n’ai aucun courage', gloss: T('no tengo ninguna valentía') },
    { text: 'ne… pas de prix', gloss: T('no pido ninguna recompensa (sentido afirmativo)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — El par negativo indefinido'),
      head: [T('Forma'), T('Persona'), T('Cosas'), T('Ejemplo')],
      rows: [
        [T('positivo'), T('quelqu’un'), T('quelque chose'), T('Vi a alguien')],
        [T('negativo'), T('personne'), T('rien'), T('No vi nada')],
        [T('con ne'), T('personne'), T('rien'), T('No habla con nadie')],
        [T('genérico'), T('chacun'), T('tout'), T('Cada uno su camino')],
      ],
    },
    {
      caption: T('Tabla 2 — {tout} en cuatro funciones'),
      head: [T('Función'), T('Forma'), T('Oración'), T('Portugués')],
      rows: [
        [T('adverbio'), T('tout'), T('Todo es posible'), 'tudo é possível'],
        [T('sujeto pluralizado'), T('tous / toutes'), T('Todos rezaban'), 'todos rezavam'],
        [T('atributo'), T('tout (invariable)'), T('el mundo entero'), 'o mundo todo'],
        [T('tiempo fijo'), T('tout'), T('de inmediato'), 'logo, imediatamente'],
      ],
    },
  ],
};
