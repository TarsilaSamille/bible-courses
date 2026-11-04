import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  section: T('Lectura'),
  title: T('Lectura: Filipenses 2'),
  subtitle: T('el capítulo más corto del Nuevo Testamento, hecho de adverbios y partículas'),
  body: C(`## Veinte palabras

{Filipenses 2} tiene cinco versículos que rodean el centro del Nuevo Testamento: la descenso de Cristo y la exaltación que viene después. El texto griego es un himno, con versos paralelos y una construcción de participios que los gramáticos discuten hace mil años. La traducción a casi todas las lenguas de Europa se volvió la favorita para cantarse en los himnarios.

El texto hace lo contrario. Donde el griego tiene versos que riman y un ritmo, el indonesio tiene veinte palabras de prosa corriente. No hay metro, no hay estribillo, y no hay nada que cantar.

Lo que queda es la gramática, y la gramática es lo que cuenta aquí. Veinte palabras de prosa indonesa son casi todas sustantivo, adverbio y partícula. Es el resumen de todo lo que el curso ha alcanzado.

Lee el capítulo en tres pasadas. Primera: cuáles son los sustantivos. Segunda: dónde están los adverbios. Tercera: cuántas veces aparece {yang}.

## Los cinco que ya conoces

Lo que el texto trae en este capítulo no es nuevo. Son {yang}, {sebagai}, {-nya}, {akan} y {sudah}, y cada uno aparece haciendo exactamente lo que se ha descrito.

{1} {Yang}. Aparece muchas veces, y en los dos trabajos. Al principio de una oración es el relativo que ata un sustantivo a un verbo: el pasaje que dice que Cristo {mengosongkan} a sí mismo usa un sustantivo seguido de {yang} seguido de un verbo. En medio es la nominalización: el sustantivo abstracto donde el griego escribe un participio, el indonesio escribe {yang} más un verbo o un sustantivo a secas.

{2} {Sebagai}. Aparece más de una vez, y hace el trabajo del instrumental griego. El griego dice «teniendo la forma de Dios», y el texto dice {sebagai} más sustantivo. El lector que conoce {sebagai} como adverbio lo lee mal: es una preposición, y lo que viene detrás es un sustantivo.

{3} {-nya}. La posesión aparece aquí en dos formas. El posesivo pegado, {diriNya}, que es tercera persona y remite al sujeto de la oración; y el posesivo nominalizado, cuando el verbo se vuelve sustantivo abstracto con {-nya} y la oración pasa a hablar de un suceso.

{4} {Akan}. Aparece cuando el texto mira hacia delante, y es el futuro de la lengua. Donde el griego tenía el tiempo en la terminación, el texto tiene {akan} más verbo. Quien busca flexión no encuentra nada que cambie y concluye que el pasaje se repite.

{5} {Sudah}. Aparece en el mismo hueco, mirando hacia atrás, y es el pasado de la lengua. El par {akan} y {sudah} es todo el reloj del capítulo, y está repartido en versículos distintos.

Lo que {yang} hace en {diriNya} merece una segunda mirada, porque es el único punto en que aparece un pronombre reflexivo: el griego tiene {heauton} y el indonesio tiene {-Nya}. El griego marca la reflexividad en la terminación y el indonesio en el sufijo, y los dos dicen que la acción recae sobre el sujeto.

## Donde el griego aprieta y el indonesio no

El griego del capítulo es difícil por una razón concreta: apila participios. Un versículo típico trae tres o cuatro participios en cadena, cada uno modifica al anterior, y el lector tiene que desenredar la cadena para saber qué es sujeto.

El indonesio no apila, porque no tiene sintaxis participial. Donde el griego tiene {being}, el texto tiene {sedang} más verbo. Donde el griego tiene {having been}, el texto tiene {sudah} más verbo. Donde el griego tiene un participio absoluto, el texto tiene una oración con {yang}.

El resultado es un texto más fácil y más pobre. Más fácil porque cada paso es un verbo con un adverbio delante. Más pobre porque la superposición de participios es un recurso de estilo, y el estilo se pierde cuando se cambia por gramática.

Y hay una cosa que el indonesio no hace aquí y el griego hace dos veces: la anáfora. En el griego los pronombres de los versos siguientes retoman la primera cláusula. En indonesio, {diriNya} e {itu} hacen el mismo trabajo con un sufijo y un demostrativo, y el lector no se da cuenta de que sigue un hilo que el griego escribió explícitamente.

La regla de lectura para un pasaje así cabe en una línea: **busque adverbios antes de buscar sintaxis.** Si no sigue el pasaje, mire {akan}, {sudah}, {sebagai} y {yang}. Son cuatro palabras, y casi toda la dificultad de un versículo indonesio vive en ellas.

## Qué hacer cuando un versículo no tiene sentido

Un versículo que parece no tener sentido en indonesio casi siempre tiene uno de estos cuatro problemas, y ninguno es de vocabulario.

El primero es un {yang} mal leído. El lector busca un sustantivo detrás y no encuentra ninguno, porque el {yang} es la nominalización. El segundo es {sebagai} leído como adverbio. El tercero es un adverbio de aspecto traducido como si fuera un tiempo: {sudah} es el pasado y no el futuro, y una oración con {sudah} no es una oración incompleta, es una oración sobre un resultado.

Y el cuarto es la ausencia de flexión. El versículo griego tiene información en el verbo que el indonesio pone en otro sitio, y el lector busca en el lugar equivocado.

Por eso este capítulo es buena lectura incluso sin el griego. Quien lo lee y entiende cada adverbio ha entendido más de Filipenses 2 que quien lo leyó de prisa y captó el estribillo.`),
  vocab: [
    V('yang', 'yang', 'que, lo que, quien'),
    V('sebagai', 'sebagai', 'como, a título de'),
    V('diriNya', 'diri', 'a sí mismo'),
    V('akan', 'akan', 'va a'),
    V('sudah', 'sudah', 'ya'),
    V('itu', 'itu', 'ese, aquel'),
    V('sedang', 'sedang', 'estar'),
    V('mengosongkan', 'kosong', 'vaciar'),
    V('tidak', 'tidak', 'no'),
    V('seperti', 'seperti', 'como'),
    V('Allah', 'Allah', 'Dios'),
    V('Tuhan', 'Tuhan', 'Señor'),
    V('nama', 'nama', 'nombre'),
    V('menerima', 'terima', 'recibir'),
    V('melihat', 'lihat', 'ver'),
    V('kita', 'kita', 'nosotros'),
    V('gereja', 'gereja', 'iglesia'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'En este capítulo, {yang} es relativo al principio de las oraciones y nominaliza en medio.',
      ),
    },
    {
      n: '2',
      text: T('{sebagai} es preposición y no adverbio: lo que viene detrás es un sustantivo.'),
    },
    {
      n: '3',
      text: T(
        '{-Nya} en {diriNya} marca reflexividad: la acción recae sobre el sujeto de la oración.',
      ),
    },
    {
      n: '4',
      text: T(
        '{akan} y {sudah} son el reloj del capítulo: el primero mira hacia delante, el segundo hacia atrás.',
      ),
    },
    {
      n: '5',
      text: T(
        'Cuando un versículo no tiene sentido, busque adverbios de aspecto y {yang} antes que la sintaxis.',
      ),
    },
  ],
  notes: [
    {
      label: T('Qué hace la edición'),
      text: T(
        'La redacción exacta de una traducción varía entre ediciones y entre impresiones, y en un pasaje tan cantado como Filipenses 2 son comunes las formas alternativas. Las formas que este capítulo usa con estabilidad son {yang}, {sebagai}, {-nya}, {akan} y {sudah}; si tu copia difiere en una palabra suelta, el sentido no ha cambiado.',
      ),
    },
    {
      label: T('Por dónde empezar a leer Santiago'),
      text: T(
        'Filipenses 2 tiene una ventaja: cada versículo lleva una idea y el vocabulario se repite. Santiago tiene lo contrario, y por eso es mejor lectura para quien ya ha leído este.',
      ),
    },
  ],
  examples: [
    { text: 'Ia sendiri mengosongkan diriNya.', gloss: T('Él mismo se vació.') },
    { text: 'Sebab itu Allah yang exaltou dia.', gloss: T('Por eso Dios lo exaltó.') },
    { text: 'Yang kamu baca itu buku.', gloss: T('Aquello que lees es un libro.') },
    { text: 'Dia berbicara sebagai wakil.', gloss: T('Habló como representante.') },
    { text: 'Surat itu sudah ditulis.', gloss: T('La carta ya está escrita.') },
    { text: 'Surat itu akan ditulis.', gloss: T('La carta se escribirá.') },
    { text: 'Namanya adalah Allah.', gloss: T('Su nombre es Dios.') },
    { text: 'Maka Allah yang exaltasi dia.', gloss: T('Por eso Dios lo exaltó.') },
    { text: 'Saudara, aku mencintaimu.', gloss: T('Hermano, te amo.') },
    { text: 'Sebab Allah mengasihi kita.', gloss: T('Porque Dios nos ama.') },
  ],
  tables: [
    {
      caption: T('Os cinco elementos do capítulo'),
      head: ['Forma', 'Trabalho no texto', 'Exemplo de função', 'O que Replace em PT'],
      rows: [
        ['yang', 'relativo e nominalização', 'nome + yang + verbo', 'que, o que'],
        ['sebagai', 'instrumental grego', 'sebagai + substantivo', 'como, a título de'],
        ['-Nya', 'reflexivo e genitivo', 'diriNya', 'a si mesmo'],
        ['akan', 'futuro', 'akan + verbo', 'vai, fut.'],
        ['sudah', 'passado', 'sudah + verbo', 'já, pass.'],
      ],
    },
    {
      caption: T('Grego contra indonésio no mesmo trecho'),
      head: ['Grego', 'Papel', 'Indonésio', 'Perda ou ganho'],
      rows: [
        ['particípio', 'voz e tempo juntos', 'sedang + verbo', 'mais simples'],
        ['particípio perfeito', 'ação prévia', 'sudah + verbo', 'mais simples'],
        ['particípio absoluto', 'ação independente', 'oração com yang', 'mais longa'],
        ['instrumental', 'meio ou forma', 'sebagai + nome', 'uma palavra'],
        ['anáfora', 'fio do texto', 'diriNya, itu', 'mais discreta'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Ia sendiri mengosongkan diriNya}, ¿qué marca el {-Nya}?'),
    options: [T('reflexividad: a sí mismo'), T('plural'), T('negación'), T('futuro')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: ya escribió = Dia ___ menulis surat.'),
      answer: 'sudah',
      hint: T('El adverbio que mira hacia atrás.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué palabra del capítulo es preposición y no adverbio?'),
      options: [T('sebagai'), T('akan'), T('sudah'), T('itu')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Une la forma con su función en el texto'),
      pairs: [
        { a: T('{yang}'), b: T('relativo o nominalización') },
        { a: T('{sebagai}'), b: T('forma, medio') },
        { a: T('{akan}'), b: T('futuro') },
        { a: T('{sudah}'), b: T('pasado') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
