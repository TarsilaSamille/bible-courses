import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('El artículo y el número'),
  title: T('Contable, no contable y la partícula de'),
  subtitle: T('uma porção de paciência, y el congreso que cambia de sentido'),
  body: C(`## Lo que se cuenta y lo que se pesa

Un sustantivo contable es el que se puede numerar uno a uno: {um livro}, {dois livros}, {três filhos}. Un sustantivo no contable es el que se pesa, se mide o se toma por medida: {o pão}, {a água}, {o ouro}, {a paciência}, {a fé}, {o amor}. No existe {dois pães} en el sentido de contar, y sí {dois pães} como medida de lo comprado.

El no contable es lo que obliga a que la preposición entre en juego. No puede ir directo al sustantivo que viene después; necesita una palabra que cuente por él: {uma porção de paciência}, {um pouco de fé}, {um copo de água}, {uma caixa de sabonete}, {uma multidão de gente}.

## La partícula de como contador

La partícula {de} es lo que convierte la masa en cantidad. {Água} es lo que existe; {uma garrafa de água} es una unidad de agua; {três garrafas de água} son tres unidades. El mismo sustantivo, la misma {-ção}, dos sentidos, y toda la diferencia está en la preposición.

Con material, comida y sustancias la construcción es casi obligatoria: {uma colher de sal}, {uma fatia de pão}, {uma vara de madeira}, {uma pocção de óleo}. El portugués bíblico hace lo mismo que cualquier otro portugués, y quien traduce del griego tiene que producirla aunque el griego prescinda del genitivo.

## El singular que cambia de sentido

Hay sustantivos en los que el singular y el plural dicen cosas distintas. {Um tratado} es un documento firmado; {um tratado} es un curso de medicina. {A igreja} es el edificio; {a igreja} es la asamblea de los fieles. {O povo} es la multitud; {o povo} es la nación.

En esos casos el que los delata es el verbo. {A igreja estava vazia} habla del edificio; {a igreja estava em oração} habla de la asamblea. {O congresso sediou-se} habla de una conferencia; {o congresso decorreu durante três dias} habla de la sesión entera.

## Criterio de lectura

Pregunta de cada sustantivo: ¿se cuenta o no se cuenta? Si no se cuenta, ¿hay una palabra delante que lo cuente? ¿Y hay un verbo que diga de qué sentido se trata?

El Salmo 8.4 hace exactamente la segunda pregunta: «¿Qué es {o homem} para que te acuerdes de él, o el {filho do homem} para que de él cuides?» El singular {o homem} no está contando personas: está hablando de la humanidad como una sola cosa, y es el hebreo de esa ambigüedad el que produce la pregunta.`),
  vocab: [
    V('o pão', 'pão', 'o pão (no contable)'),
    V('a água', 'água', 'a água (no contable)'),
    V('o livro', 'livro', 'o livro (contable)'),
    V('a fé', 'fé', 'la fe (no contable)'),
    V('o amor', 'amor', 'o amor (no contable)'),
    V('uma porção de', 'porção', 'una porción de'),
    V('um pouco de', 'pouco', 'un poco de'),
    V('um copo de', 'copo', 'un vaso de'),
    V('uma caixa de', 'caixa', 'una caja de'),
    V('a multidão de', 'multidão', 'una multitud de'),
    V('o tratado', 'tratado', 'el tratado (documento)'),
    V('a igreja', 'igreja', 'la iglesia (edificio o asamblea)'),
    V('o povo', 'povo', 'el pueblo (multitud o nación)'),
    V('contável', 'contável', 'contable'),
    V('não contável', 'não contável', 'no contable'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Un sustantivo es contable si se puede numerar uno a uno; es no contable si se pesa, se mide o se toma por medida.',
      ),
    },
    {
      n: '§2',
      text: T(
        'El sustantivo no contable necesita una palabra que lo cuente: {uma porção de paciência}, {um copo de água}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'La partícula {de} es lo que separa la masa de la unidad: {água} y {uma garrafa de água}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Algunos sustantivos cambian de sentido según el número y según el verbo que viene después.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Cuando el sentido está en duda, decide el verbo: {a igreja estava vazia} y {a igreja estava em oração}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'El hebreo y el griego usan el genitivo para lo mismo, y la construcción hebrea de medida tiene correspondencia directa en {uma porção de}.',
      ),
    },
    {
      label: T('El otro lado'),
      text: T(
        'Hay palabras que solo existen en la cuenta y aun así llevan {de} por analogía con la masa: {uma dúzia de ovos}, {um monte de gente}, {um par de meias}.',
      ),
    },
  ],
  examples: [
    {
      text: 'Havia pão para todos.',
      gloss: T('No contable: lo que existe es la masa, no la unidad.'),
    },
    { text: 'Uma porção de paciência.', gloss: T('La palabra cuenta lo que no se puede contar.') },
    { text: 'Três garrafas de água.', gloss: T('La misma {-ção} contada tres veces.') },
    { text: 'Uma colher de sal.', gloss: T('Material medido: la partícula es obligatoria.') },
    { text: 'O tratado foi assinado.', gloss: T('El sentido de documento, no de curso.') },
    {
      text: 'O tratado cura a doença.',
      gloss: T('El mismo sustantivo, otro sentido, otro verbo.'),
    },
    { text: 'A igreja estava vazia.', gloss: T('El singular del edificio.') },
    {
      text: 'A igreja orava em silêncio.',
      gloss: T('El singular de la asamblea, que delata el verbo.'),
    },
  ],
  tables: [
    {
      caption: T('Contable y no contable'),
      head: ['Tipo', 'Exemplos', 'Como entra'],
      rows: [
        ['contável', 'livro, filho, cidade', 'direto: um livro, dois filhos'],
        ['massa', 'pão, água, ouro', 'com nome que conta: um pouco de pão'],
        ['abstrato', 'fé, amor, paciência', 'com nome que conta: muita paciência'],
      ],
    },
    {
      caption: T('La partícula de como contador'),
      head: ['Massa', 'Unidade', 'Contagem'],
      rows: [
        ['água', 'uma garrafa de água', 'três garrafas de água'],
        ['sal', 'uma colher de sal', 'duas colheres de sal'],
        ['madeira', 'uma vara de madeira', 'cinco varas de madeira'],
      ],
    },
    {
      caption: T('Un nombre, dos sentidos'),
      head: ['Nome', 'Sentido A', 'Sentido B'],
      rows: [
        ['o tratado', 'documento assinado', 'curso de medicina'],
        ['a igreja', 'o edifício', 'a assembleia dos fiéis'],
        ['o congresso', 'uma conferência', 'a sessão inteira'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué construcción es correcta?'),
    options: [
      T('uma porção de paciência'),
      T('uma porção paciência'),
      T('um pouco paciência'),
      T('uma porção da paciência'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('El sustantivo {pão} es ______ contable.'),
      answer: 'não',
      hint: T('Lo que se pesa no se numera.'),
    },
    {
      kind: 'choose',
      prompt: T('En «a igreja estava vazia», {a igreja} significa:'),
      options: [
        T('el edificio'),
        T('la asamblea de los fieles'),
        T('los sacerdotes'),
        T('la ciudad'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona la masa con su contador.'),
      pairs: [
        { a: T('água'), b: T('um copo de água') },
        { a: T('sal'), b: T('uma colher de sal') },
        { a: T('paciência'), b: T('uma porção de paciência') },
        { a: T('madeira'), b: T('uma vara de madeira') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
