import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('Los pronombres'),
  title: T('Pronombres: el sistema entero'),
  subtitle: T('meu, teu, seu, este, aquele, algum, y la diferencia de los dos sistemas'),
  body: C(`## Los pronombres personales y la partícula que llegó a pronombre

Los pronombres personales se dividen en tónicos y átonos. Los tónicos son {eu}, {tu}, {ele/ela}, {nós}, {vós}, {eles/elas}, y existen solos, con sentido pleno. Los átonos son {me}, {te}, {o/a}, {se}, {nos}, {vos}, {lhe/lhes}, y no existen solos: solo entran pegados al verbo.

La cliticización es lo que produjo esa división. En portugués antiguo, {dar-vo-lo} quería decir «dar a usted el libro»: el pronombre era una pieza autónoma y el verbo venía al final. El latín había hecho lo mismo con {mihi} y {tibi}. El proceso es viejo, y las reformas ortográficas del siglo XX no lo inventaron: lo que había sido pronombre pasó a ser partícula en el portugués estándar, y en Portugal y en Brasil el pronombre solo dejó de existir.

## Los posesivos y la pelea entre teu e seu

El posesivo va antes del sustantivo y concuerda con el dueño, no con la cosa: {meu livro}, {minha casa}, {meus livros}, {minhas casas}. Después del sustantivo solo entran {dele}, {dela}, {deles}, {delas}, y en esa posición el posesivo ya es pronombre: {o livro dele}.

{Teu} y {seu} siguen siendo pronombres completos, y por eso tienen dos formas: {o teu} y {a tua}, {o meu} y {a minha}. {Seu} es el más ambiguo: en {o seu pai} puede ser el padre del hablante o el del oyente. Con {tu}, el {seu} tiende a ser del hablante; con {você}, del oyente, y la ambigüedad la resuelve el contexto, no la forma.

## Los demostrativos: un sistema de tres distancias

El portugués tiene demostrativos para tres posiciones, y eso es lo que lo distingue del español. {Este} es lo que está cerca del hablante, {esse} es lo que está lejos del hablante, y {aquele} es lo que está lejos del oyente. El español resuelve con dos, {este} y {ese}, y tiene que recurir a {aquel} para lo que está lejos del oyente.

La misma lógica vale para los pronombres demostrativos: {isto}, {isso}, {aquilo}. Y vale para el tiempo: {nesta semana} es la semana del hablante, {nessa semana} la del oyente, {naquela semana} la de un tercero.

## Indefinidos y relativos

Los indefinidos dan cantidad o cualidad sin identificar: {algum}, {nenhum}, {todo}, {cada}, {qual}, {outro}, {tudo}. {Algum} queda negado por {nenhum}, que es el {algum} negado por completo, y {todo} va antes del sustantivo o después, con efecto distinto: {todo homem} dice que todos los hombres tienen la propiedad; {o homem todo} dice que el hombre entero la tiene.

Los relativos abren la subordinada y valen por un nombre anterior: {que}, {qual}, {cujo}, {quem}, {onde}, {quando}, {como}. {Que} es el más común y vale por persona y por cosa; {quem} solo por persona; {cujo} liga un nombre a un poseedor, y por eso concuerda con el dueño ({cujo pai}, {cujo nome}).

## Criterio de lectura

En Jn 3.16, {que todo aquele que crê nele não pereça}: {todo aquele que} es un indefinido ({todo}) más un relativo ({que}) más un demostrativo ({aquele}) funcionando como sustantivo. Tres clases de pronombre en una sola palabra, y la frase entera se sostiene sobre esa pila.

Con cualquier pronombre, pregúntate: ¿es tónico o átono? ¿Es posesivo, demostrativo, indefinido o relativo? Y si es demostrativo, ¿a qué distancia está? Con las tres respuestas el pronombre queda cerrado, y el texto deja de tener pronombres que explicar.`),
  vocab: [
    V('eu', 'eu', 'yo'),
    V('tu', 'tu', 'tú'),
    V('ele', 'ele', 'él/ella'),
    V('nós', 'nós', 'nosotros'),
    V('eles', 'eles', 'ellos/ellas'),
    V('meu', 'meu', 'mi'),
    V('teu', 'teu', 'tu'),
    V('seu', 'seu', 'su'),
    V('dele', 'dele', 'suyo/de ella'),
    V('este', 'este', 'este (cerca del hablante)'),
    V('esse', 'esse', 'ese (lejos del hablante)'),
    V('aquele', 'aquele', 'aquél (lejos del oyente)'),
    V('isto', 'isto', 'esto'),
    V('aquilo', 'aquilo', 'aquello'),
    V('algum', 'algum', 'algún'),
    V('todo', 'todo', 'todo'),
    V('cada', 'cada', 'cada'),
  ],
  rules: [
    {
      n: '§1',
      text: T('Los pronombres tónicos existen solos: {eu}, {tu}, {ele}, {nós}, {vós}, {eles}.'),
    },
    {
      n: '§2',
      text: T('Los átonos existen solo pegados al verbo: {me}, {te}, {o}, {se}, {nos}, {lhe}.'),
    },
    {
      n: '§3',
      text: T(
        'El posesivo concuerda con el dueño, no con la cosa: {meu}, {minha}, {meus}, {minhas}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El demostrativo tiene tres posiciones: {este} cerca, {esse} lejos, {aquele} lejos del oyente.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Los relativos abren la subordinada y valen por un nombre: {que}, {quem}, {cujo}, {onde}, {quando}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'El portugués bíblico, con {vos} y {meu}, es la norma y no el arcaísmo. Las reformas ortográficas del siglo XX cambiaron la gramática, no la Biblia: un texto de 1611 sigue siendo legible.',
      ),
    },
    {
      label: T('Lo que resuelve el griego'),
      text: T(
        'El griego tiene tres demostrativos, y cada uno fija la distancia respecto del hablante. El portugués da una palabra a cada uno, así que la traducción conserva la información y a veces pierde la distancia.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ele deu-me o livro.',
      gloss: T('Pronombre tónico {Ele} y átono {me} en la misma frase.'),
    },
    { text: 'O teu nome.', gloss: T('Posesivo con artículo definido: {teu} más {nome}.') },
    {
      text: 'A tua casa é minha.',
      gloss: T('{teu} se completa en dos formas: {o teu} y {a tua}.'),
    },
    { text: 'Isto é o que pedi.', gloss: T('Demostrativo de primera persona: {isto}.') },
    { text: 'Aquilo disse o profeta.', gloss: T('Demostrativo de tercera persona: {aquilo}.') },
    { text: 'Nenhuma árvore deu fruto.', gloss: T('Indefinido negado: {nenhum}.') },
    {
      text: 'Cada homem trae sua cruz.',
      gloss: T('{cada} distribuye, y no totaliza como {todo}.'),
    },
    { text: 'O rei cujo nome é eterno.', gloss: T('{cujo} liga el relativo al posesivo.') },
  ],
  tables: [
    {
      caption: T('Pronombres personales'),
      head: ['Pessoa', 'Tônico', 'Átono'],
      rows: [
        ['eu', 'eu', 'me'],
        ['tu', 'tu', 'te'],
        ['ele/ela', 'ele/ela', 'o/a, lhe'],
        ['nós', 'nós', 'nos'],
        ['vós', 'vós', 'vos'],
        ['eles/elas', 'eles/elas', 'os/as, lhes'],
      ],
    },
    {
      caption: T('Demostrativos: tres posiciones'),
      head: ['Posição', 'Adjetivo', 'Pronome'],
      rows: [
        ['perto de quem fala', 'este', 'isto'],
        ['longe de quem fala', 'esse', 'isso'],
        ['longe de quem ouve', 'aquele', 'aquilo'],
      ],
    },
    {
      caption: T('Relativos'),
      head: ['Pronome', 'Vale por', 'Exemplo'],
      rows: [
        ['{que}', 'pessoa ou coisa', 'o livro que li'],
        ['{quem}', 'pessoa', 'aquele que viu'],
        ['{cujo}', 'posse', 'cujo pai'],
        ['{onde}, {quando}, {como}', 'lugar, tempo, modo', 'onde mora'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué pronombre es el demostrativo de lo que está lejos del oyente?'),
    options: [T('aquele'), T('este'), T('esse'), T('esse mesmo')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('El posesivo concuerda con ______, no con la cosa.'),
      answer: 'o dono',
      hint: T('{meu} y {minha} cambian con el dueño.'),
    },
    {
      kind: 'choose',
      prompt: T('En «o livro que li», {que} es:'),
      options: [T('relativo'), T('demostrativo'), T('indefinido'), T('posesivo')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el pronombre con su valor.'),
      pairs: [
        { a: T('este'), b: T('perto de quem fala') },
        { a: T('esse'), b: T('longe de quem fala') },
        { a: T('aquele'), b: T('longe de quem ouve') },
        { a: T('cada'), b: T('distribui') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
