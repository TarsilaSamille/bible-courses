import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('El adjetivo y el adverbio'),
  title: T('El adverbio: cómo se forma'),
  subtitle: T('lenta, lentamente, y los que no tienen -mente'),
  body: C(`## El -mente de los femeninos

El adverbio regular se forma con el adjetivo en femenino más el sufijo {-mente}. {Lenta} da {lentamente}, {firme} da {firmemente}, {fácil} da {facilmente}, {geral} da {geralmente}, {constante} da {constantemente}. La regla es tan productiva que apenas tiene excepción: en el texto bíblico, ver {-mente} basta para saber que hay un adjetivo escondido detrás.

Lo que merece atención es que el camino no siempre muestra el paso del femenino. {Geral} no tiene marca de femenino en portugués, y aun así da {geralmente}; {bonito} da {bonitamente} sin que exista {bonita} usada como adjetivo suelto. El latín hacía lo mismo con los adverbios en {-e}, y el portugués cambió ese sufijo por {-mente}.

## Los irregulares y los que no tienen -mente

Una lista hay que aprenderla, y es corta. Calidad: {bem}, {mal}, {melhor}, {pior}. Tiempo: {cedo}, {tarde}, {depressa}, {agora}, {hoje}, {ontem}, {amanhã}, {sempre}, {nunca}, {jamais}. Lugar: {aqui}, {ali}, {lá}, {perto}, {longe}, {fora}, {dentro}. Y cantidad y duda: {bastante}, {demais}, {talvez}, {certamente}, {apenas}, {já}.

Esos adverbios no derivan de nada, y por eso solo la lectura los fija. {Bem} y {mal} son los más frecuentes de todos, y el texto bíblico los opone con frecuencia: {bem-aventurados}, {não me fazes bem}.

## El adverbio que también es adjetivo

Hay palabras que hacen los dos papeles sin cambiar de forma. {Livre} es adjetivo en {homem livre} y adverbio en {falou livre}; {forte} es adjetivo en {homem forte} y adverbio en {falou forte}; lo mismo con {firme}, {certo}, {claro}, {primeiro}, {único}, {mesmo}, {verdadeiro}, {alto}.

La prueba es corta: ¿puede la palabra ir detrás de un sustantivo? Si puede, es adjetivo; si solo puede estar junto al verbo, es adverbio. {Independente} es adjetivo y admite {um homem independente}; {independentemente} es adverbio y no admite nada delante. El portugués no flexiona el adverbio, y por eso los dos son palabras distintas y no la misma palabra en dos papeles.

## Criterio de lectura

Con cualquier adverbio, pregúntate: ¿se formó de un adjetivo, y cuál? ¿O es irregular, y entonces hay que saberlo de memoria? ¿Y la forma es la misma que la de un adjetivo?

El Salmo 84 termina con una bendición sobre quien «anda rectamente»: {retamente} es el adjetivo {reto} en femenino más {-mente}, y el sufijo {mente} hace ahí el trabajo que el griego ἡγημένως hacía con una sola forma. Quien reconoce el {-mente} lee el adverbio como una derivación y no como una palabra suelta.`),
  vocab: [
    V('lentamente', 'lenta', 'lentamente'),
    V('firmemente', 'firme', 'firmemente'),
    V('facilmente', 'fácil', 'fácilmente'),
    V('geralmente', 'geral', 'generalmente'),
    V('bonitamente', 'bonito', 'bonitamente'),
    V('independentemente', 'independentemente', 'independientemente'),
    V('livre', 'livre', 'livre (adjetivo y adverbio)'),
    V('forte', 'forte', 'fuerte (adjetivo y adverbio)'),
    V('bem', 'bem', 'bien'),
    V('mal', 'mal', 'mal'),
    V('depressa', 'depressa', 'deprisa'),
    V('cedo', 'cedo', 'temprano'),
    V('sempre', 'sempre', 'siempre'),
    V('nunca', 'nunca', 'nunca'),
    V('já', 'já', 'ya'),
  ],
  rules: [
    { n: '§1', text: T('El adverbio regular se forma con el adjetivo en femenino más {-mente}.') },
    {
      n: '§2',
      text: T(
        'Los adverbios irregulares no derivan de nada y hay que aprenderlos: {bem}, {mal}, {cedo}, {tarde}, {depressa}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Adjetivo y adverbio pueden tener la misma forma; la prueba es si la palabra puede ir detrás de un sustantivo.',
      ),
    },
    { n: '§4', text: T('El portugués no flexiona el adverbio: ni por número ni por género.') },
    {
      n: '§5',
      text: T(
        'Ver {-mente} en el texto es ver un adjetivo escondido: el adverbio es siempre una derivación.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'El griego bíblico usa pocos adverbios en {-mente} y muchos en {-ως}, como ἁγνῶς. El portugués necesita una palabra para cada uno, y el traductor elige la que el griego dejó implícita.',
      ),
    },
    {
      label: T('Pariente falso'),
      text: T(
        'No toda palabra terminada en {-mente} se comporta igual: {momentaneamente} y {fundamentalmente} son adverbios de verdad, y la prueba sigue siendo la misma, ir detrás de un sustantivo.',
      ),
    },
  ],
  examples: [
    { text: 'Falou lentamente.', gloss: T('{lenta} en femenino más {-mente}.') },
    {
      text: 'A verdade é obviamente simples.',
      gloss: T('{obviamente} viene de {obvia} en femenino.'),
    },
    { text: 'Chegou cedo demais.', gloss: T('Adverbio irregular, sin derivación.') },
    { text: 'Era um homem livre.', gloss: T('{livre} como adjetivo: va detrás del sustantivo.') },
    {
      text: 'Falou livre.',
      gloss: T('{livre} como adverbio: no puede ir detrás de un sustantivo.'),
    },
    {
      text: 'independentemente do preço.',
      gloss: T('Adverbio que no flexiona y no admite artículo.'),
    },
    { text: 'Ele dormiu bem.', gloss: T('Adverbio irregular de cualidad.') },
    { text: 'Sabe isso claramente.', gloss: T('{claramente} de {clara} más {-mente}.') },
  ],
  tables: [
    {
      caption: T('Formación del adverbio'),
      head: ['Adjetivo', 'Feminino', 'Advérbio'],
      rows: [
        ['lento', 'lenta', 'lentamente'],
        ['firme', 'firme', 'firmemente'],
        ['geral', 'geral', 'geralmente'],
        ['independente', 'independente', 'independentemente'],
      ],
    },
    {
      caption: T('Adverbios irregulares'),
      head: ['Grupo', 'Formas'],
      rows: [
        ['qualidade', 'bem, mal'],
        ['tempo', 'cedo, tarde, depressa, sempre, nunca'],
        ['lugar', 'aqui, ali, lá, perto, longe'],
        ['quantidade', 'bastante, demais, apenas, já'],
      ],
    },
    {
      caption: T('Adjetivo o adverbio'),
      head: ['Palavra', 'Adjetivo', 'Advérbio'],
      rows: [
        ['livre', 'homem livre', 'falou livre'],
        ['forte', 'homem forte', 'falou forte'],
        ['claro', 'dia claro', 'viu claro'],
        ['mesmo', 'o mesmo dia', 'faz o mesmo'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se forma el adverbio de {lenta}?'),
    options: [T('lentamente'), T('lento-mente'), T('lentido'), T('lenteza')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{cedo} es un adverbio ______.'),
      answer: 'irregular',
      hint: T('No sale de ningún adjetivo.'),
    },
    {
      kind: 'choose',
      prompt: T('En «homem livre», {livre} es:'),
      options: [T('un adjetivo'), T('un adverbio'), T('un pronombre'), T('un numeral')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona la frase con lo que la palabra es en ella.'),
      pairs: [
        { a: T('homem livre'), b: T('adjetivo') },
        { a: T('falou livre'), b: T('advérbio') },
        { a: T('falou claramente'), b: T('advérbio') },
        { a: T('dia claro'), b: T('adjetivo') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
