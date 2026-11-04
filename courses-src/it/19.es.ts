import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('El artículo: el sistema completo'),
  subtitle: T('il, uno, un po’ d’acqua, dei'),
  section: T('El artículo y los pronombres'),
  body: C(`## Tres artículos y tres cuentas

El definido señala algo que ya se sabe: {il libro} «el libro» (el que está a la vista, o el único), {la casa} «la casa», {i libri} «los libros». El indefinido introduce: {un libro} «un libro», {una casa} «una casa». El partitivo es el tercero, y es el que el português no tiene: **dei** libri son algunos libros, un número indeterminado, {delle} rose algunas rosas. Con sustantivos contables en singular, el partitivo coincide con el indefinido: {un libro} puede ser un libro o uno de los libros, y el contexto dice cuál.

Los tres sistemas cierran en una sola rejilla. Definido: {il}, {lo}, {la}, {l’}, {i}, {gli}, {le}. Indefinido: {un}, {uno}, {una}. Partitivo: {un}/{uno}/{una} en singular, {dei}, {degli}, {delle} en plural.

## {lo} y {l’}: decide la inicial

El masculino gana {lo} ante **s + consonante**, {z}, {gn}, {ps} y {x}: {lo studente}, {lo zaino}, {lo gnomo}, {lo psicologo}, {lo yacht}. Ante vocal, el artículo no tiene forma propia y se vuelve {l’}: {l’albero}, {l’uomo}, {l’amore}. El indefinido {uno} entra exactamente en las mismas posiciones: {uno studente}, {uno zaino}, {uno gnomo}. Y {un}, que es la forma común, nunca aparece ante vocal ni ante esas consonantes.

## El partitivo y la elisión que lo sostiene

El partitivo plural nace de {di + i}: {di + i} da {dei}, {di + gli} da {degli}, {di + le} da {delle}. Ante vocal, el {di} no se une a nada y se queda: por eso el português dice «un poco de agua» y el italiano escribe **{un po’ d’acqua}**, con una {d’} que parece un resto de preposición y no lo es. La misma {d’} aparece en {d’acqua}, {dell’acqua}, {d’uomini}, y {delle} después de sustantivo.

Y hay una distinción que el português no hace: cuando el sustantivo ya está determinado, {di} pasa a {del}, {dello}, {della}, {dei}, {degli} — y {dei} deja de ser partitivo. Se dice {il libro di Paolo} «el libro de Pablo» y {dei libri} «algunos libros», nunca {dei Paolo}.

## En la Biblia

Jn 1:6 abre con las tres cuentas en una misma frase: «Fu mandato da Dio un uomo, {il cui nome} era Giovanni». {Un uomo} es indefinido: aquel hombre todavía no es nadie para el lector. {Il cui nome} es definido y relativo: el nombre ya es suyo, y el artículo vuelve justamente porque la oración lo retomó. Y {da Dio} muestra la preposición {da}, la misma que la {d’} de {d’acqua}, con origen en vez de parte.

## Criterio de lectura

Siempre que aparezca {dei}, {degli} o {delle}, comprueba si el sustantivo siguiente está determinado: determinado es genitivo y pasa a {del}; indeterminado es partitivo y se queda en {dei}. Y cuando el nombre ya viene con nombre propio, el artículo desaparece: {Dio}, {Maria}, {Roma}, sin él y con mayúscula como marca.`),
  vocab: [
    V('un', 'un', 'un / una'),
    V('uno', 'uno', 'uno (ante s, z, gn, ps)'),
    V('una', 'una', 'una'),
    V('libro', 'libro', 'libro'),
    V('studente', 'studente', 'estudiante'),
    V('zaino', 'zaino', 'mochila'),
    V('albero', 'albero', 'árbol'),
    V('acqua', 'acqua', 'agua'),
    V('d’acqua', 'acqua', 'de agua'),
    V('po’', 'po’', 'poco'),
    V('dei', 'di', 'algunos'),
    V('delle', 'di', 'algunas'),
    V('rosa', 'rosa', 'rosa'),
    V('giardino', 'giardino', 'jardín'),
    V('nome', 'nome', 'nombre'),
    V('casa', 'casa', 'casa'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se traduce un po’ d’acqua?'),
    options: [T('un poco de agua'), T('un agua pequeña'), T('poca agua'), T('el agua del poco')],
    answer: 0,
    hint: T('Es un partitivo: algo de agua.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: ___ studente (un estudiante)'),
      answer: 'uno',
      hint: T('s + consonante pide uno.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es el partitivo plural de la rosa?'),
      options: [T('dei'), T('delle'), T('degli'), T('dela')],
      answer: 1,
      hint: T('Femenino plural.'),
    },
    {
      kind: 'fill',
      prompt: T('Genitivo de il libro: il libro ___ Paolo'),
      answer: 'di',
      hint: T('El sustantivo ya está determinado.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El artículo definido señala algo ya identificado; el indefinido introduce algo nuevo.',
      ),
    },
    { n: '2', text: T('Lo entra ante s + consonante, z, gn, ps y x; l’ entra ante vocal.') },
    {
      n: '3',
      text: T('Uno entra exactamente donde entraría lo, y flexiona como sustantivo masculino.'),
    },
    {
      n: '4',
      text: T(
        'El partitivo plural nace de di + artículo: di + i = dei, di + gli = degli, di + le = delle.',
      ),
    },
    {
      n: '5',
      text: T('Con sustantivo determinado el partitivo no cabe: il libro di Paolo, no dei Paolo.'),
    },
  ],
  notes: [
    {
      label: T('La d’ que no significa nada'),
      text: T(
        'En {un po’ d’acqua}, {d’} no es «de» con sentido: es la preposición {di} elidida ante vocal, y el sustantivo que viene detrás es el complemento del partitivo. La misma {d’} aparece en {d’uomini}, {d’acqua}, {domani}, {dentro}.',
      ),
    },
    {
      label: T('Dónde desaparece el artículo'),
      text: T(
        'El artículo falta cuando el sustantivo ya está determinado por otra cosa: nombre propio ({Dio}, {Milano}), numeral ({tre libri}) o pronombre indefinido ({ogni uomo}, {qualche libro}). Fuera de esos tres casos la omisión suena a error.',
      ),
    },
  ],
  examples: [
    { text: 'Un libro sulla tavola.', gloss: T('Un libro sobre la mesa.') },
    { text: 'Uno studente con uno zaino.', gloss: T('Un estudiante con una mochila.') },
    { text: 'Lo zaino dello studente.', gloss: T('La mochila del estudiante.') },
    { text: 'Un po’ d’acqua.', gloss: T('Un poco de agua.') },
    { text: 'Dei libri di Paolo.', gloss: T('Algunos libros de Pablo.') },
    { text: 'Delle rose del giardino.', gloss: T('Algunas rosas del jardín.') },
    { text: 'L’albero della piazza.', gloss: T('El árbol de la plaza.') },
    { text: 'Degli studenti della classe.', gloss: T('Los estudiantes de la clase.') },
    {
      text: 'Fu mandato da Dio un uomo, il cui nome era Giovanni.',
      gloss: T('Fue enviado por Dios un hombre, cuyo nombre era Juan.'),
    },
  ],
  tables: [
    {
      caption: T('Articolo definito'),
      head: ['Genere', 'Singolare', 'Plurale'],
      rows: [
        ['maschile', 'il libro', 'i libri'],
        ['maschile s + consonante', 'lo studente', 'gli studenti'],
        ['femminile', 'la casa', 'le case'],
        ['ante vocale', 'l’albero', 'gli alberi'],
      ],
    },
    {
      caption: T('Indefinito e partitivo'),
      head: ['', 'Singolare', 'Plurale'],
      rows: [
        ['masc. comune', 'un libro', 'dei libri'],
        ['masc. s + consonante', 'uno studente', 'degli studenti'],
        ['femminile', 'una casa', 'delle case'],
        ['con sostantivo', 'un po’ d’acqua', '—'],
      ],
    },
    {
      caption: T('Elisione di di, a, da'),
      head: ['Preposizione', 'Davanti all’articolo', 'Esempio'],
      rows: [
        ['di', 'dell’', 'dell’acqua'],
        ['a', 'all’', 'all’altra riva'],
        ['da', 'dall’', 'dall’inizio'],
        ['in', 'nel', 'nel libro'],
        ['su', 'sul', 'sul mare'],
      ],
    },
  ],
};
