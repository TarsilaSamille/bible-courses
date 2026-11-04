import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('Los plurales irregulares'),
  subtitle: T('uomini, uova, braccia, bar'),
  section: T('La sintaxis y el sustantivo'),
  body: C(`## Cinco plurales que tiran la regla por la ventana

El plural regular ya se ha visto: {-o} pasa a {-i}, {-a} pasa a {-e}, {-e} pasa a {-i}. Lo que se rompe es un grupo de palabras que cambian la vocal final en vez de añadir una: {uomo} → **uomini**, {donna} → **donne**, {bambino} → **bambini**, {piede} → **piedi**. Lo más bonito es {uovo} → **uova** y {braccio} → **braccia**, donde el masculino {-o} pasa a {-a} y el plural parece femenino sin serlo.

Después está el otro grupo, el de los que parecen irregulares y no lo son: {cameriere} → **camerieri**, {cantante} → **cantanti**, {libro} → **libri**. Aquí no hay ninguna excepción; es la rejilla normal, y la sorpresa es solo nuestra.

## Donde el plural no cambia absolutamente nada

Hay sustantivos que no aceptan plural ninguno, y la forma se queda igual para siempre: {la città} → **le città**, {la specie} → **le specie**, {la serie} → **le serie**, {il bar} → **i bar**, {il cor} → **i cor}, que también admite la forma más culto {i cuori}. Ninguno denuncia el género en la terminación, porque no hay terminación nueva: quien ve {le città} sabe que es femenino por el artículo, y quien ve {i bar} sabe que es masculino por lo mismo.

## En la Biblia

Mc 21:9 tiene un plural que el lector de português memoriza sin advertirlo: «Osanna al Figlio di Davide», precedido de {i figli di Gerusalemme}, de {le Palme}, de {cantanti} y de {i bambini}. Cuatro sustantivos y tres plurales irregulares en una sola frase.

Lo más instructivo es {i figli}: en italiano moderno es {figli}, sin la {-o} del latín. Quien escribe {i figlios} está vertiendo una forma litúrgica y arcaica, no equivocándose; pero en un texto corrido, {i figli} es lo que hay que esperar.

## Criterio de lectura

Cuando el sustantivo sea {uomo}, {donna}, {bambino} o {piede}, busca el plural irregular antes de montar la frase: es la lista más corta de todas y la que más aparece. Cuando el plural es idéntico al singular, no traduzcas dos veces ni suprimas un artículo: la forma se repite, el artículo cambia.`),
  vocab: [
    V('uomo', 'uomo', 'hombre'),
    V('uomini', 'uomo', 'hombres'),
    V('donna', 'donna', 'mujer'),
    V('donne', 'donna', 'mujeres'),
    V('bambino', 'bambino', 'niño'),
    V('bambini', 'bambino', 'niños'),
    V('piede', 'piede', 'pie'),
    V('piedi', 'piede', 'pies'),
    V('uovo', 'uovo', 'huevo'),
    V('uova', 'uovo', 'huevos'),
    V('manica', 'manica', 'manga'),
    V('maniche', 'manica', 'mangas'),
    V('cameriere', 'cameriere', 'camarero'),
    V('cantante', 'cantante', 'cantante'),
    V('cantanti', 'cantante', 'cantantes'),
    V('braccio', 'braccio', 'brazo'),
    V('braccia', 'braccio', 'brazos'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el plural de uovo?'),
    options: [T('uovi'), T('uova'), T('uove'), T('uoi')],
    answer: 1,
    hint: T('Plural irregular masculino en -a.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el plural: l’uomo → ___'),
      answer: 'uomini',
      hint: T('La -o final desaparece y entra -i.'),
    },
    {
      kind: 'match',
      prompt: T('Liga el singular con el plural.'),
      pairs: [
        { a: 'donna', b: 'donne' },
        { a: 'braccio', b: 'braccia' },
        { a: 'manica', b: 'maniche' },
        { a: 'cantante', b: 'cantanti' },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase es correcta?'),
      options: [T('Due la città'), T('Due città'), T('Due la cittàs'), T('Dui città')],
      answer: 1,
      hint: T('Città es invariable: el artículo se va al plural.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Cinco plurales cambian la vocal final: uomo/uomini, donna/donne, bambino/bambini, piede/piedi, uovo/uova, braccio/braccia.',
      ),
    },
    {
      n: '2',
      text: T(
        'Los sustantivos en -e hacen -i como todo el mundo: cameriere/camerieri, cantante/cantanti.',
      ),
    },
    {
      n: '3',
      text: T('Los sustantivos invariables conservan la forma: città, specie, serie, bar, cor.'),
    },
    {
      n: '4',
      text: T('En plural invariable solo el artículo revela el género: le città frente a i bar.'),
    },
    {
      n: '5',
      text: T(
        'La letra del plural no es el género: braccia (masculino) y maniche (femenino) conviven.',
      ),
    },
  ],
  notes: [
    {
      label: T('No todo irregular tiene la misma llave'),
      text: T(
        '{uovo} y {braccio} son masculino y pasan a -a; {manica} es femenino y pasa a -e. Lo que decide no es el género, es la palabra: ninguna regla produce el grupo, hay que aprender la lista entera.',
      ),
    },
    {
      label: T('Cuando el plural es el mismo'),
      text: T(
        'En {i cor} el italiano puede estar hablando de corazones o de corales, porque las dos palabras son {il cor}; el contexto resuelve, no la terminación. Y {i figlios}, {i liberos} e {i mondi} son plurales arcaicos en -o que el português no tiene: son formas litúrgicas y poéticas.',
      ),
    },
  ],
  examples: [
    { text: 'I figli di Gerusalemme acclamano.', gloss: T('Los hijos de Jerusalén le aclaman.') },
    { text: 'Due uomini e due donne.', gloss: T('Dos hombres y dos mujeres.') },
    { text: 'Cantanti e camerieri nella sala.', gloss: T('Cantantes y camareros en la sala.') },
    { text: 'Cinque braccia e due uova.', gloss: T('Cinco brazos y dos huevos.') },
    { text: 'Le mani e i piedi del lebbroso.', gloss: T('Las manos y los pies del leproso.') },
    { text: 'Cento bambini nella strada.', gloss: T('Cien niños en la calle.') },
    { text: 'Le città sono grandi.', gloss: T('Las ciudades son grandes.') },
    { text: 'I bar chiudono tardi.', gloss: T('Los bares cierran tarde.') },
  ],
  tables: [
    {
      caption: T('Plurales que exigen memoria'),
      head: ['Singolare', 'Plurale', 'Cosa succede'],
      rows: [
        ['uomo', 'uomini', '-o scompare, entra -i'],
        ['donna', 'donne', '-a scompare, entra -e'],
        ['bambino', 'bambini', 'come un -o normale'],
        ['piede', 'piedi', '-e scompare'],
        ['uovo', 'uova', '-o diventa -a'],
        ['manica', 'maniche', '-a diventa -e'],
        ['cameriere', 'camerieri', '-e diventa -i'],
        ['cantante', 'cantanti', '-e diventa -i'],
        ['libro', 'libri', '-o diventa -i'],
        ['braccio', 'braccia', '-o diventa -a'],
      ],
    },
    {
      caption: T('Plurales invariables'),
      head: ['Singolare', 'Genere', 'Plurale'],
      rows: [
        ['la città', 'femminile', 'le città'],
        ['la specie', 'femminile', 'le specie'],
        ['la serie', 'femminile', 'le serie'],
        ['il bar', 'maschile', 'i bar'],
        ['il cor', 'maschile', 'i cor'],
        ['il paese', 'maschile', 'i paesi'],
      ],
    },
  ],
};
