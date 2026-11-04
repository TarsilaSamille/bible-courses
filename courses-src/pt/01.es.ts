import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('Artículos y sustantivos'),
  subtitle: T('o, a, os, as — género, número y referencia'),
  section: T('El artículo y el número'),
  body: C(`## El artículo traduce definitividad, no gramática

El portugués tiene dos artículos: el definido ({o, a, os, as}) introduce una referencia identificable —el lector ya sabe de qué se trata—; el indefinido ({um, uma, uns, umas}) presenta algo como un ejemplar de una clase. {Vi um homem} trae a alguien nuevo; {vi o homem} trae a alguien ya conocido.

En el portugués bíblico esto se complica, porque el griego no siempre trae artículo donde el portugués sí. En Jn 1:1, {no princípio} traduce ἐν ἀρχῇ con su artículo; pero en el mismo versículo, {Deus} traduce θεός sin artículo en el griego, y la decisión de mantenerlo o no es del traductor. Así que la regla no es «sigue el portugués»: es **traduce el sentido griego**.

El caso griego que más importa está en el versículo siguiente: {o Verbo} (ὁ λόγος) sí tiene artículo, y ese artículo marca un sujeto determinado y no «una palabra». Quitarlo y escribir {a palavra} cambia el sentido teológico del versículo.

## Género: la terminación es la regla, con excepciones

En {-o}, {-e} y muchos derivados el sustantivo suele ser masculino: {livro}, {lugar}, {caminho}, {sistema}. En {-a}, {-ção}, {-dade}, {-ura} suele ser femenino: {casa}, {canção}, {liberdade}, {escritura}. La regla es fuerte pero no es ley: existen {o mapa} (m), {a mão} (f), {o dia} (m), {a dieta} (f), {o problema} (m), {a mano} (f).

Y el género no es adorno en portugués: marca el sexo de las personas ({o homem}, {a mulher}), así que quien traduce necesita saber qué está traduciendo. {Mestre} puede ser un hombre o una mujer, y el contexto no siempre lo resuelve.

## Plural: tres terminaciones para un -ão

El plural regular cambia la terminación: {livro → livros}, {casa → casas}. Pero {-ão} es el caso especial, y no sigue una regla única: {coração → corações}, {pão → pães}, {mão → mãos}, {irmão → irmãos}, {cidadão → cidadãos}. Cinco terminaciones distintas para el mismo {-ão}, y la pronunciación cambia con ellas: {pães} y {mãos} suenan distinto, y también {corações} e {irmãos}.

Donde no hay regla está el **plural irregular**, construido sin alterar la forma: {o rei → os reis}, {a água → as águas}, {o pai → os pais}. Es el plural más antiguo y el más presente en la Biblia, y por eso varias formas arcaicas todavía suenan naturales.

## Criterio de lectura

Con cualquier sustantivo, pregúntate: ¿está el artículo en el griego? ¿Aparece el género en la terminación? ¿Y el plural es regular, {-ão} desplazado o **irregular**? La tercera respuesta es la que suele decidir, porque el griego no distingue {livros} de {livros}: sí distingue τὰ βιβλία de τὸ βιβλίον por número y caso, y ahí es donde la traducción necesita una {-s} que el griego no tiene.`),
  vocab: [
    V('o', 'o', 'artículo definido masculino'),
    V('a', 'o', 'artículo definido femenino'),
    V('um', 'um', 'artículo indefinido masculino'),
    V('palavra', 'palavra', 'palabra'),
    V('verbo', 'verbo', 'palabra; verbo'),
    V('luz', 'luz', 'luz'),
    V('mundo', 'mundo', 'mundo'),
    V('carne', 'carne', 'carne'),
    V('céu', 'céu', 'cielo'),
    V('verdade', 'verdade', 'verdad'),
    V('os', 'o', 'artículo definido masculino plural'),
    V('as', 'o', 'artículo definido femenino plural'),
    V('uma', 'um', 'artículo indefinido femenino'),
    V('mão', 'mão', 'mano'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el plural de «o mão»?'),
    options: [T('las manos'), T('las mano'), T('los manos'), T('las mãis')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «___ Verbo» (Juan 1:1).'),
      answer: 'O',
      hint: T('Artículo definido masculino.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Por qué el sustantivo es femenino en «a mão»?'),
      options: [
        T('Porque termina en -ão.'),
        T('Solo porque es un sustantivo.'),
        T('Porque lleva el artículo a.'),
        T('Porque significa cuerpo.'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona forma y función.'),
      pairs: [
        { a: T('el libro'), b: T('definido') },
        { a: T('un libro'), b: T('indefinido') },
        { a: T('luz'), b: T('femenino') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El artículo definido {o, a, os, as} introduce una referencia identificable y el indefinido {um, uma} trae un ejemplar de una clase: {vi um homem} presenta a alguien nuevo, {vi o homem} trae a alguien ya conocido.',
      ),
    },
    {
      n: '§2',
      text: T(
        'La terminación sugiere el género sin decidirlo: {-ção}, {-dade} y {-ura} forman casi siempre femininos, {-o} y {-eiro} casi siempre masculinos, y {o problema}, {o mapa} y {o coração} prueban la excepción.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{-ão} hace tres plurales, y el griego decide cuál: {-ãos} en {mão/mãos}, {-ães} en {pão/pães}, {-ões} en {irmão/irmãos}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Donde el griego trae artículo, el portugués lo trae: {ὁ λόγος} se vuelve {o Verbo}. Donde el griego lo omite, como en {θεός}, el portugués lo omite y escribe {Deus}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'El plural irregular {o rei → os reis} y {o pai → os pais} viene del portugués más antiguo, y es lo que el texto bíblico conserva.',
      ),
    },
  ],
  notes: [
    {
      label: T('Mayúscula'),
      text: T(
        '{Verbo} y {Deus} en mayúscula no son estilo: son la convención que traduce el título griego {Logos} e impide que el sustantivo se lea como un nombre común.',
      ),
    },
    {
      label: T('Dónde ayuda el griego'),
      text: T(
        'El griego distingue {τὰ βιβλία} de {τὸ βιβλίον} por número y caso; el portugués necesita la {-s} que el griego no tiene, y ahí decide la traducción.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio era o Verbo.',
      gloss: T('{o Verbo} es masculino porque λόγος es masculino en griego.'),
    },
    {
      text: 'E o Verbo era Deus.',
      gloss: T('El griego trae θεός sin artículo, y el portugués omite el suyo.'),
    },
    {
      text: 'A luz brilha nas trevas.',
      gloss: T('{brilha} en presente: lo que sigue ocurriendo.'),
    },
    { text: 'Vi um homem junto ao Jordão.', gloss: T('{um} presenta a alguien nuevo al oyente.') },
    {
      text: 'Vi o homem que vos apresentara.',
      gloss: T('{o} trae a alguien que el oyente ya conoce.'),
    },
    {
      text: 'Deus amou o mundo.',
      gloss: T('{o mundo} es masculino, y la terminación {-o} no avisa.'),
    },
    {
      text: 'A mão tocou o mártir.',
      gloss: T('Femenino, y la terminación {-ão} no anuncia nada.'),
    },
    {
      text: 'A palavra permaneceu entre nós.',
      gloss: T('Femenino léxico; el griego correspondiente es masculino.'),
    },
    {
      text: 'Os céus declaram a glória de Deus.',
      gloss: T('{os céus} es plural, y lo es en hebreo y en griego.'),
    },
  ],
  tables: [
    {
      caption: T('Lo que dice cada artículo'),
      head: ['Artigo', 'Uso', 'Exemplo'],
      rows: [
        ['o, a, os, as', 'definido', 'o Verbo, a luz'],
        ['um, uma, uns, umas', 'indefinido', 'um homem, uma palavra'],
        ['sem artigo', 'zero', 'Deus em Jo 1.1'],
      ],
    },
    {
      caption: T('El género que la terminación no entrega'),
      head: ['Terminação', 'Sugere', 'Exceção'],
      rows: [
        ['-o, -eiro', 'masculino', 'o problema (m)'],
        ['-a, -ão', 'feminino', 'o coração (m)'],
        ['-ção, -dade', 'feminino', 'o órgão (m)'],
      ],
    },
    {
      caption: T('Los tres plurales de {-ão}'),
      head: ['Terminação', 'Exemplos'],
      rows: [
        ['-ãos', 'mão/mãos, órgão/órgãos, bênção/bênçãos'],
        ['-ães', 'pão/pães, cã/cães, alemão/alemães'],
        ['-ões', 'irmão/irmãos, avião/aviões, limão/limões'],
      ],
    },
  ],
};
