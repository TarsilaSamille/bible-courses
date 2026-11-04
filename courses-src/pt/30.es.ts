import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  section: T('Lectura'),
  title: T('Lectura: el Salmo 23 en traducción literal'),
  subtitle: T('apacentará, pastorear-me-á, y lo que lleva cada flexión'),
  body: C(`## El salmo entero

El Salmo 23 en Almeida tiene seis versículos y veintiún verbos. Es muy poco texto, y es suficiente para ver el portugués bíblico funcionando: {O SENHOR é o meu pastor; nada me faltará. Descansará em lugares de delícias; pastorear-me-á. Ainda que andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; o teu cajado e o teu bastão me-console. Tu preparas diante de mim uma mesa na presença dos meus adversários; ungiste com óleo a minha cabeça; o meu cálice transborda. Certamente que o bem e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do SENHOR por longos dias.}

Quien lee ese texto en un portugués de hoy no reconoce la mitad de los verbos. Y el motivo no es que la lengua sea difícil: es que la flexión bíblica es más antigua.

## El tiempo de cada verbo

Los verbos del salmo se reparten en cuatro series, y cada serie dice algo. El **presente** aparece en {é}, {estás} y {preparas}: es la escena, y el presente es el tiempo de la certeza. El **futuro** aparece en {Descansará}, {pastorear-me-á} y {seguirão}: son tres hechos que el texto da como ciertos. El **subjuntivo** aparece en {andasse} y {temeria}: son dos acciones que no ocurren. Y el **pretérito perfecto** aparece en {ungiste}: una acción hecha y contada.

El verbo que abre la segunda parte, {Descansará}, es el más interesante de todos: es futuro por la forma y presente por el sentido, porque el salmo habla de una vida entera como si fuera un ahora.

## Lo que la literalidad conserva

La traducción literal conserva tres cosas que la traducción suave pierde. La primera es la negación genérica: {nada me faltará} no es «no va a faltar», es «en ninguna circunstancia me faltará», y el griego usa una negación que vale para toda la vida. La segunda es el subjuntivo de hipótesis: {Ainda que andasse} es el imperfecto del subjuntivo, la forma que dice «aunque yo estuviera andando», no «aunque anduve ayer».

La tercera es la mesóclisis: {pastorear-me-á}. El pronombre {me} está entre la raíz y la terminación, y quien no conoce la forma lee tres palabras donde había un verbo. Quien traduce por {me vai pastorear} ha aclarado el texto y perdido la señal de que toda la oración es un solo verbo.

## Criterio de lectura

Con cualquier verbo de un texto bíblico, pregúntate: ¿es presente, futuro, perfecto o subjuntivo? ¿Y la flexión está marcando tiempo o solo forma? ¿Y es la forma que el portugués de hoy todavía usa?

El Salmo 23 es el ejemplo más limpio que existe de lo que lleva la flexión. {É} y {Descansará} están en el mismo versículo a seis palabras de distancia, y ninguno de los dos es el tiempo que elegiría un portugués de hoy. La literalidad no es una antigualla: es el mapa de la flexión que el texto usa.`),
  vocab: [
    V('o pastor', 'pastor', 'el pastor'),
    V('o SENHOR', 'SENHOR', 'el Señor'),
    V('Descansará', 'descansar', 'Descansará'),
    V('apacentará', 'apacentar', 'apacentará'),
    V('pastorear-me-á', 'pastorear', 'pastorear-me-á'),
    V('andasse', 'andar', 'andasse'),
    V('temeria', 'temer', 'temeria'),
    V('estás', 'estar', 'estás'),
    V('preparas', 'preparar', 'preparas'),
    V('ungiste', 'ungir', 'ungiste'),
    V('transborda', 'transbordar', 'transborda'),
    V('seguirão', 'seguir', 'seguirán'),
    V('habitarei', 'habitar', 'habitarei'),
    V('o bem', 'bem', 'el bien'),
    V('a misericórdia', 'misericórdia', 'la misericordia'),
    V('a casa do SENHOR', 'casa', 'la casa del Señor'),
  ],
  rules: [
    { n: '§1', text: T('El presente marca certeza: {é}, {estás}, {preparas}.') },
    {
      n: '§2',
      text: T(
        'El futuro en el salmo marca un hecho esperado: {Descansará}, {pastorear-me-á}, {seguirão}.',
      ),
    },
    { n: '§3', text: T('El subjuntivo del pasado marca hipótesis: {andasse}, {temeria}.') },
    { n: '§4', text: T('El perfecto marca una acción hecha y contada: {ungiste}.') },
    {
      n: '§5',
      text: T(
        'La flexión bíblica es más antigua que la del portugués actual, y por eso el texto antiguo se lee con atención.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        '{Apacentará} y {pastorear-me-á} son formas que el portugués de hoy no usa. Una traducción que las moderniza parece más fiel al lector y es menos fiel al griego.',
      ),
    },
    {
      label: T('Conserva la flexión'),
      text: T(
        'La flexión antigua no es exageración: en griego, cada una de esas formas es información. Cambiar {Descansará} por {descansa} cambia el tiempo del verbo y pierde el habla.',
      ),
    },
  ],
  examples: [
    { text: 'O SENHOR é o meu pastor.', gloss: T('Presente: el tiempo de la certeza.') },
    {
      text: 'Descansará em lugares de delícias.',
      gloss: T('Futuro: el texto da el hecho por cierto.'),
    },
    { text: 'Ainda que andasse pelo vale.', gloss: T('Imperfecto del subjuntivo: hipótesis.') },
    { text: 'Não temeria mal algum.', gloss: T('Imperfecto del condicional: hipótesis negada.') },
    { text: 'Tu preparas diante de mim uma mesa.', gloss: T('Presente: la escena del versículo.') },
    { text: 'Ungiste com óleo a minha cabeça.', gloss: T('Pretérito perfecto: acción hecha.') },
    { text: 'O meu cálice transborda.', gloss: T('Presente: el verbo describe y no narra.') },
    { text: 'Habitarei na casa do SENHOR.', gloss: T('Futuro: el verbo cierra el salmo.') },
  ],
  tables: [
    {
      caption: T('Los verbos del salmo, por tiempo'),
      head: ['Tempo', 'Verbos', 'O que marca'],
      rows: [
        ['presente', 'é, estás, preparas', 'certeza da cena'],
        ['futuro', 'Descansará, pastorear-me-á, seguirão', 'fato esperado como certo'],
        ['subjuntivo', 'andasse, temeria', 'hipótese'],
        ['perfeito', 'ungiste', 'ação feita e contada'],
        ['futuro', 'habitarei', 'o salmo fecha no futuro'],
      ],
    },
    {
      caption: T('Formas arcaicas'),
      head: ['Forma', 'Significado', 'Uso atual'],
      rows: [
        ['Descansará', 'descansará', 'em uso'],
        ['apacentará', 'pastoreará', 'arcaico'],
        ['pastorear-me-á', 'me pastoreará', 'arcaico'],
        ['ungiste', 'ungiste', 'em uso'],
      ],
    },
    {
      caption: T('Lo que lleva la flexión'),
      head: ['Série', 'O que diz', 'Exemplo'],
      rows: [
        ['negação genérica', 'nunca, em nenhum caso', 'nada me faltará'],
        ['hipótese', 'caso contrário, mesmo que', 'Ainda que andasse'],
        ['certeza', 'é assim, não pode ser diferente', 'é o meu pastor'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «Ainda que andasse», {andasse} está en el:'),
    options: [T('subjuntivo del pasado'), T('futuro'), T('perfecto'), T('presente del indicativo')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{Descansará} es un verbo en ______, con sentido de certeza.'),
      answer: 'futuro',
      hint: T('El texto da el hecho por cierto.'),
    },
    {
      kind: 'choose',
      prompt: T('En «nada me faltará», la negación es:'),
      options: [T('genérica'), T('puntual'), T('interrogativa'), T('concesiva')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con su tiempo.'),
      pairs: [
        { a: T('é'), b: T('presente') },
        { a: T('Descansará'), b: T('futuro') },
        { a: T('andasse'), b: T('subjuntivo') },
        { a: T('ungiste'), b: T('perfeito') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
