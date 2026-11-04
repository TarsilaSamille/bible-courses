import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Voz pasiva'),
  subtitle: T('fue escrito, es amado, se venden casas'),
  section: T('La sintaxis'),
  body: C(`## La pasiva que muestra el resultado

La pasiva analítica usa ser o estar más participio: {foi escrito}, {é amado}, {será salvo}. El participio **concorda con el sujeto**: {a palavra foi escrita}, {os livros foram escritos}, {as casas foram vendidas}. Y el agente, cuando aparece, viene con **por**: {foi criado por Deus}, {foi buscado por Maria}.

Aquí está el punto que casi todo el mundo pierde: ser y estar no son sinónimos aquí. ser más participio marca hecho consumado y resultado —{foi criado por Deus}, {a lei foi dada}— y es la forma de la narración bíblica. estar más participio marca estado en el presente o acción en curso: {está escrito}, {está ferido}, {estava sentado}. Traducir «foi escrito» por «está escrito» cambia un hecho por un estado, y eso es una diferencia, no una sinonimia.

La pasiva de ser tiene además tiempos que la de estar no tiene: el pasado ({foi, foram}) y el futuro ({será, serão}). Por eso {será salvo} es frase bíblica común, mientras {está salvo} solo describe un momento.

## vendem-se casas: el se que es partícula

La construcción pronominal con se puede ser pasiva: {vendem-se casas}, {aluga-se o quarto}. Fíjate en que el verbo concuerda con el sujeto ({casas}, plural), lo que prueba que no hay un «se» de objeto: si lo hubiera, el singular sería {vende-se uma casa}.

No todo {se} es pasivo. {arrependeu-se} es **reflexivo**, porque el sujeto practica y sufre la acción a la vez: él se arrepiente, y el arrepentimiento es suyo. La prueba es sencilla: pregunta quién practica la acción. Si es el propio sujeto, {se} es reflexivo; si es otro, {se} es partícula.

Y hay un caso intermedio, el se pronominal de tercera persona: {lavou-se} puede ser «se lavó» (reflexivo) o «fue lavado» (pasivo). Lo que lo resuelve viene de fuera de la frase, de quien narra.

## Elegir ser o estar depende del foco

Lo que decide es el foco, el resultado y el estado, no una traducción automática. La narración bíblica prefiere ser ({foram enviados}, {foi aberto}); describir una escena prefiere estar ({estava sentado}, {estava escrito na parede}). La elección cambia qué tiempos verbales están disponibles, y por eso quien traduce tiene que decidir antes de elegir la palabra.

## Criterio de lectura

En cualquier frase con {ser} o {estar}, pregúntate: ¿es hecho (ser) o estado (estar)? ¿Está presente el {por}? ¿Y el {se} es reflexivo o partícula? Con esas tres respuestas la pasiva del portugués cabe en una línea, y la traducción de {foram enviados} por {se enviaram} deja de ocurrir.`),
  vocab: [
    V('escrito', 'escrever', 'escrito'),
    V('salvo', 'salvar', 'salvado'),
    V('crucificado', 'crucificar', 'crucificado'),
    V('consumado', 'consumar', 'consumado'),
    V('vendem-se', 'vender', 'se venden'),
    V('diz-se', 'dizer', 'se dice'),
    V('arrependeu-se', 'arrepender-se', 'se arrepintió'),
    V('por Deus', 'por', 'por Dios'),
    V('foi morto', 'matar', 'fue muerto'),
    V('ser', 'ser', 'ser (verbo auxiliar)'),
    V('estar', 'estar', 'estar (verbo auxiliar)'),
    V('se', 'se', 'se (partícula pronominal)'),
    V('por', 'por', 'por (agente de la pasiva)'),
    V('casas', 'casa', 'casas'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «se venden casas», el verbo concuerda con:'),
    options: [T('casas'), T('se'), T('venta'), T('nada')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «la ley fue escrita ___ Dios».'),
      answer: 'por',
      hint: T('Introduce el agente de la pasiva.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración es reflexiva?'),
      options: [
        T('La ley fue escrita.'),
        T('Se arrepintió.'),
        T('Las casas se venden.'),
        T('La ciudad fue fundada.'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relaciona construcción y sentido.'),
      pairs: [
        { a: T('fue escrito'), b: T('pasiva') },
        { a: T('se vende'), b: T('se pasivo') },
        { a: T('se arrepintió'), b: T('se reflexivo') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{a palavra foi escrita} y {os livros foram escritos} muestran que el participio concuerda con el sujeto: {escrita} con {palavra} y {escritos} con {livros}. Eso separa {foi escrito} de {foram escritos}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{ser} más participio marca un hecho consumado y tiene los tiempos {foi} y {será}: {foi criado por Deus}, {será salvo}. {estar} más participio marca un estado y se queda en presente y pasado: {está escrito}, {estava sentado}. {Está salvo} describe un estado; {foi salvo} narra un suceso.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El agente de la pasiva de {ser} entra con {por}: {foi criado por Deus}, {foi buscado por Maria}. La de {estar} no tiene agente: nadie dice {está escrito por Deus}, porque {estar} no narra.',
      ),
    },
    {
      n: '§4',
      text: T(
        'En {vendem-se casas} el verbo concuerda con el sujeto ({casas}, plural). Con objeto la concordancia sería {vende-se uma casa}, y esa diferencia es lo que prueba que el {se} es partícula apasivadora y no pronombre objeto.',
      ),
    },
    {
      n: '§5',
      text: T(
        'La prueba del {se} es la pregunta de quién actúa: en {arrependeu-se} es el propio sujeto, y el {se} es reflexivo; en {lavou-se} puede ser reflexivo o partícula, y quien lo decide es quien cuenta la historia, no la frase.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico'),
      text: T(
        '{Está consumado} (Jn 19:30) destaca el estado; {foi crucificado} destaca el proceso y admite agente con {por}. La elección cambia los tiempos verbales disponibles, y por eso se decide antes de elegir la palabra.',
      ),
    },
    {
      label: T('El griego decide el tiempo'),
      text: T(
        'El griego pasa del aoristo al perfecto ({ἐγένετο}, {γέγονεν}) en la misma pasada de Jn 19:30, y el portugués tiene que elegir entre {foi} y {está}. La elección de {ser} o {estar} sigue lo que hace el griego, no la preferencia del traductor.',
      ),
    },
  ],
  examples: [
    {
      text: 'A palavra foi escrita por Deus.',
      gloss: T('Pasiva de {ser}: suceso, con agente por {por}.'),
    },
    { text: 'Os livros foram escritos.', gloss: T('{escritos} concuerda con {livros}.') },
    { text: 'A lei está escrita na pedra.', gloss: T('{estar} más participio: estado.') },
    { text: 'Ele está ferido.', gloss: T('Estado, no proceso.') },
    { text: 'Estava sentado à direita.', gloss: T('Pasado de {estar}: escena.') },
    { text: 'Ele se arrependeu.', gloss: T('{se} reflexivo: el propio sujeto actúa.') },
    { text: 'Vendem-se casas.', gloss: T('{se} partícula: el verbo concuerda con {casas}.') },
    { text: 'Aluga-se o quarto.', gloss: T('Con objeto, el {se} sería pronombre.') },
    { text: 'Serão salvos.', gloss: T('Futuro que solo la pasiva de {ser} tiene.') },
  ],
  tables: [
    {
      caption: T('Las dos pasivas'),
      head: ['Estrutura', 'Marca', 'Exemplo'],
      rows: [
        ['ser + particípio', 'fato consumado', 'foi escrito'],
        ['estar + particípio', 'estado', 'está escrito'],
        ['ser + particípio + por', 'fato com agente', 'foi criado por Deus'],
      ],
    },
    {
      caption: T('Los tiempos que tiene cada una'),
      head: ['Auxiliar', 'Passado', 'Futuro'],
      rows: [
        ['ser', 'foi, foram', 'será, serão'],
        ['estar', 'estava, estavam', '—'],
      ],
    },
    {
      caption: T('El {se} que confunde'),
      head: ['Frase', 'Tipo de {se}', 'Teste'],
      rows: [
        ['arrependeu-se', 'reflexivo', 'o sujeito pratica'],
        ['lavou-se', 'ambíguo', 'quem conta decide'],
        ['vendem-se casas', 'partícula', 'o verbo concorda'],
      ],
    },
  ],
};
