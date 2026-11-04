import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('El sustantivo: género y número'),
  subtitle: T('il libro, la casa; -o, -a, -e'),
  section: T('La sintaxis y el sustantivo'),
  body: C(`## El género no se deduce: hay que memorizar el par

El italiano no tiene regla para el género. No es la terminación, ni el sonido, ni el sentido: {la mano} y {il libro} tienen la misma forma y géneros opuestos. Lo que se hace es aprender el sustantivo **siempre pegado al artículo**, porque el par es lo que aparece en el texto, y el artículo es la única pista que el italiano ofrece.

Hay una prueba parcial para los sustantivos en {-e}: cambia por {il} y por {la} y ve cuál de los dos suena. {Il nome} es masculino y {la nome} no existe. {La mente} es femenino, e {il mente} es el participio de {mentire}, otra palabra distinta. {Il sale} es la sal; {la sale} es la factura que llegó.

## El plural: {-o} y {-a} cambian, {-e} no dice nada

La rejilla es corta. Masculino en **-o** pasa a **-i**: {libro} → {libri}. Femenino en **-a** pasa a **-e**: {casa} → {case}. Y todo lo que termina en **-e** pasa a **-i**, sin distinción de género: {il re} → {i re}, {la mano} → {le mani}, {il paese} → {i paesi}.

El detalle que atasca es este: **el plural italiano no revela el género**. La forma {i} es la misma en los dos sexos, y quien necesita saber de cuál se trata lee el artículo o el adjetivo que lo acompaña: {gli studenti} alti, {le studenti} alte. Por eso el adjetivo sigue flexionando en plural aunque el sustantivo ya no flexione.

## En la Biblia

Gn 1:1 es una lección de artículo en dos líneas: {In principio Dio creò il cielo e la terra}. Fíjate en el par {il cielo} / {la terra}, un masculino y un femenino, dos artículos, dos terminaciones. Añádase {Dio}, que es masculino aunque sea aquello que hizo todo lo que es.

Gn 1:27 añade lo que la gramática italiana hace mejor: {Dio creò l’uomo a sua immagine, a immagine di Dio lo creò: maschio e femmina li creò}. {Maschio} y {femmina} son dos sustantivos de género opuesto en singular, dos artículos opuestos, y {li} cierra la frase: es el pronombre indirecto {loro} sin el {loro}. Una traducción que escribe {l’uomo e la donna} no está mal recordado: está modernizando.

## Criterio de lectura

Cuando veas un sustantivo italiano, haz dos preguntas antes de traducir: qué artículo lo acompaña y qué terminación tiene en plural. Si el plural termina en {-e}, el género sale del artículo del plural o del adjetivo que viene junto.`),
  vocab: [
    V('libro', 'libro', 'libro'),
    V('casa', 'casa', 'casa'),
    V('mano', 'mano', 'mano'),
    V('nome', 'nome', 'nombre'),
    V('mente', 'mente', 'mente'),
    V('sale', 'sale', 'sal / factura'),
    V('re', 're', 'rey'),
    V('paese', 'paese', 'país, aldea'),
    V('parte', 'parte', 'parte'),
    V('cielo', 'cielo', 'cielo'),
    V('terra', 'terra', 'tierra'),
    V('Dio', 'Dio', 'Dios'),
    V('uomo', 'uomo', 'hombre'),
    V('maschio', 'maschio', 'masculino'),
    V('femmina', 'femmina', 'femenino'),
    V('libri', 'libro', 'libros'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el plural de il paese?'),
    options: [T('i paes'), T('i paesi'), T('i paese'), T('le paesi')],
    answer: 1,
    hint: T('Sustantivo masculino en -e: el plural pasa a -i.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el par: la casa → ___ case'),
      answer: 'le',
      hint: T('Femenino en -a pasa a -e.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo es el plural de la mano?'),
      options: [T('i mani'), T('le mani'), T('le mane'), T('gli mani')],
      answer: 1,
      hint: T('Termina en -a y es femenino.'),
    },
    {
      kind: 'fill',
      prompt: T('¿Qué artículo revela el género de {nome}? ___ nome'),
      answer: 'il',
      hint: T('La prueba es il o la.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('El género del sustantivo italiano es arbitrario: solo el artículo lo revela.'),
    },
    {
      n: '2',
      text: T('Masculino -o pasa a -i; femenino -a pasa a -e; -e pasa a -i sin indicar género.'),
    },
    {
      n: '3',
      text: T('En plural la terminación no dice el sexo: lo cargan el artículo y el adjetivo.'),
    },
    { n: '4', text: T('Ante s + consonante, z, gn o ps el masculino usa lo; ante vocal, l’.') },
    {
      n: '5',
      text: T('Los sustantivos en -e pueden ser de cualquier género: il nome, la parte, il re.'),
    },
  ],
  notes: [
    {
      label: T('La prueba de il/la'),
      text: T(
        '{il nome} es masculino y {la nome} no existe; {la mente} es femenino e {il mente} es otra palabra, el participio de {mentire}. Si el sustantivo acepta los dos artículos, no has encontrado un género difícil: has encontrado un par de homónimos.',
      ),
    },
    {
      label: T('Por qué el artículo importa al leer'),
      text: T(
        'En un texto bíblico el artículo no es adorno: es lo que dice si {il Figlio} nombra a alguien o a algo. Donde la traducción italiana escribe {la sapienza}, el traductor no eligió por el sonido, eligió por teología.',
      ),
    },
  ],
  examples: [
    { text: 'Il libro è la parola di Dio.', gloss: T('El libro es la Palabra de Dios.') },
    { text: 'I libri sono qui, le case no.', gloss: T('Los libros están aquí, las casas no.') },
    { text: 'Gli studenti sono alti.', gloss: T('Los estudiantes son altos (masculino).') },
    { text: 'Le studenti sono alte.', gloss: T('Las estudiantes son altas (femenino).') },
    { text: 'Dio creò l’uomo a sua immagine.', gloss: T('Dios creó al hombre a su imagen.') },
    { text: 'Maschio e femmina li creò.', gloss: T('Macho y hembra los creó.') },
    { text: 'I re e le regine.', gloss: T('Los reyes y las reinas.') },
    { text: 'Le mani di Maria.', gloss: T('Las manos de María.') },
    { text: 'Il sale è sulla tavola.', gloss: T('La sal está sobre la mesa.') },
  ],
  tables: [
    {
      caption: T('Terminação e plural'),
      head: ['Singolare', 'Plurale', 'Genere'],
      rows: [
        ['il libro', 'i libri', 'masculino'],
        ['la casa', 'le case', 'femminile'],
        ['il re', 'i re', 'masculino'],
        ['la mano', 'le mani', 'femminile'],
        ['il paese', 'i paesi', 'masculino'],
        ['la parte', 'le parti', 'femminile'],
        ['il nome', 'i nomi', 'masculino'],
        ['la mente', 'le menti', 'femminile'],
      ],
    },
    {
      caption: T('O artigo como pista'),
      head: ['Articolo', 'Singolare', 'Plurale'],
      rows: [
        ['il', 'il libro', 'i libri'],
        ['lo', 'lo studente', 'gli studenti'],
        ['la', 'la casa', 'le case'],
        ['l’', 'l’albero', 'gli alberi'],
      ],
    },
  ],
};
