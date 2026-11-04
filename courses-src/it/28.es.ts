import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('Lectura: la carta a los Romanos'),
  subtitle: T('Vi esorto dunque; però questo non'),
  section: T('Lectura y sintaxis'),
  body: C(`## El griego trae las partículas; el italiano no

Pablo escribe en griego, y el griego conserva partículas que no tienen traducción una a una. **{γάρ}** explica, **{δέ}** opone, **{οὖν}** concluye, **{μέν}** y **{δέ}** juntos forman un par. Esas palabras están en el margen del texto griego marcando la arquitectura de la frase, y ninguna es contenido: son posición.

El italiano no tiene nada de eso. Donde el griego tiene {οὖν}, el italiano escribe {dunque} o {perciò} o {quindi}, tres palabras para una idea. Donde el griego tiene {γάρ}, escribe {poiché}, {infatti} o {siccome}. Donde el griego tiene {δέ}, el italiano escribe {ma}, {e} o {anzi}, y el propio griego usa {δέ} para {e}, lo que hace la correspondencia aún menos mecánica.

## Lo que el italiano gana y lo que pierde

El italiano a veces **distingue** lo que el griego unía: {però} no es {ma}, {infatti} no es {poiché}, {tuttavia} no es {benché}. La traducción italiana ganó matices que el griego no tenía, y esa es una ganancia real, de la que también disfruta el lector de português.

Lo que perdió fueron los énfasis de cadena. En el griego, tres {οὖν} seguidos muestran que el razonamiento es deductivo; en el italiano, tres {dunque} en una carta solo dan impresión de estilo, no de lógica. A cambio, nadie lo echa de menos: el portugués tampoco tiene partículas, y por eso esa pérdida es del griego al italiano, no del italiano a quien lee.

## Romanos 12:1-2, leído por dentro

«{Vi esorto dunque}, fratelli, per la compassione di Dio, a offrire i vostri corpi come sacrificio vivente, santo, gradito a Dio. E {non conformatevi} a questo mondo, ma {trasformatevi}, {rinnovando} il vostro modo di pensare.»

El {dunque} del principio viene de un {οὖν}, y no es decorativo: liga la carta a las decisiones que los capítulos anteriores ya han tomado. El {ma} del segundo versículo traduce un {δέ}, y el griego opone dos prohibiciones a un mandato: no os conforméis a este mundo, pero transformaos. El {rinnovando} es un gerundio, y {rinnovando il vostro modo di pensare} hace las dos cosas: dice el medio del verbo {trasformatevi} y nombra el medio, que es el {modo di pensare}. Ese {di pensare} es un genitivo, el mismo mecanismo que {il libro di Paolo}.

La {compassione di Dio} es otro genitivo, {di} más nombre sin artículo. Y {questo mondo} lleva artículo porque {questo} es demostrativo; sin él, {mondo} sería cualquier mundo.

## Criterio de lectura

Quien traduce del griego tiene que elegir: verter las partículas y escribir un texto más pesado y más fiel, o apagarlas y escribir un italiano más ligero. Lo que no funciona es verterlas todas por {perché}, que es el error más común y el más difícil de notar después.`),
  vocab: [
    V('dunque', 'dunque', 'pues'),
    V('perciò', 'perciò', 'por eso'),
    V('quindi', 'quindi', 'por tanto'),
    V('però', 'però', 'pero'),
    V('infatti', 'infatti', 'en efecto'),
    V('poiché', 'poiché', 'ya que'),
    V('anzi', 'anzi', 'más bien'),
    V('tuttavia', 'tuttavia', 'sin embargo'),
    V('corpi', 'corpo', 'cuerpos'),
    V('sacrificio', 'sacrificio', 'sacrificio'),
    V('mondo', 'mondo', 'mundo'),
    V('rinnovando', 'rinnovare', 'renovando'),
    V('trasformatevi', 'trasformare', 'transformaos'),
    V('conformatevi', 'conformare', 'conforméis'),
    V('compassione', 'compassione', 'compasión'),
    V('pensare', 'pensare', 'pensar'),
    V('fratelli', 'fratello', 'hermanos'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué palabra italiana traduce el οὖν de Romanos 12:1?'),
    options: [T('poiché'), T('dunque'), T('benché'), T('sebbene')],
    answer: 1,
    hint: T('Οὖν concluye y enlaza con lo ya dicho.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: Vi esorto ___, fratelli (pues)'),
      answer: 'dunque',
      hint: T('Es la conclusión del razonamiento anterior.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué palabra italiana vertió mejor el γάρ explicativo?'),
      options: [T('infatti'), T('benché'), T('anzi'), T('ossia')],
      answer: 0,
      hint: T('γάρ da la razón.'),
    },
    {
      kind: 'choose',
      prompt: T('En «rinnovando il vostro modo di pensare», ¿qué es «di pensare»?'),
      options: [
        T('Un verbo conjugado'),
        T('Un genitivo'),
        T('Una preposición aislada'),
        T('Un numeral'),
      ],
      answer: 1,
      hint: T('Es el nombre que explica la naturaleza del modo de pensar.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El griego usa partículas de posición (γάρ, δέ, οὖν, μέν) que el italiano no reproduce palabra por palabra.',
      ),
    },
    {
      n: '2',
      text: T(
        'El italiano ofrece tres palabras donde el griego tenía una: dunque, perciò, quindi.',
      ),
    },
    {
      n: '3',
      text: T('El italiano a veces distingue más que el griego: però, infatti, tuttavia, anzi.'),
    },
    {
      n: '4',
      text: T(
        'Lo que se pierde es la cadena de conclusiones (οὖν), no el sentido de cada oración.',
      ),
    },
    {
      n: '5',
      text: T('Cada genitivo italiano es di más un nombre sin artículo: la compassione di Dio.'),
    },
  ],
  notes: [
    {
      label: T('Qué cambia para quien lee en portugués'),
      text: T(
        'El lector de portugués no echa de menos {γάρ} ni {οὖν}, porque el portugués tampoco los tiene. La diferencia real es otra: el texto italiano parece más suelto de lo que es. Donde el griego alternaba partículas distintas, el italiano repitió la misma palabra tres veces.',
      ),
    },
    {
      label: T('Cuándo vale la pena ser fiel'),
      text: T(
        'En traducciones académicas es común ver al italiano mantener la distinción: {poiché} para causa, {infatti} para explicación, {perciò} para conclusión. No es una obligación, es elección de estilo, y en un texto bíblico ayuda al lector a ver dónde el razonamiento cambia de dirección.',
      ),
    },
  ],
  examples: [
    { text: 'Vi esorto dunque, fratelli.', gloss: T('Os ruego pues, hermanos.') },
    { text: 'E non conformatevi a questo mondo.', gloss: T('Y no os conforméis a este mundo.') },
    { text: 'Ma trasformatevi.', gloss: T('Pero transformeos.') },
    {
      text: 'Rinnovando il vostro modo di pensare.',
      gloss: T('Renovando vuestro modo de pensar.'),
    },
    { text: 'Per la compassione di Dio.', gloss: T('Por la compasión de Dios.') },
    {
      text: 'Per quelli che amano Dio tutte le cose cooperano al bene.',
      gloss: T('Para los que aman a Dios, todas las cosas contribuyen al bien.'),
    },
    { text: 'Il giudizio è di Cristo.', gloss: T('El juicio es de Cristo.') },
    { text: 'Non giudicare per le apparenze.', gloss: T('No juzgues por las apariencias.') },
  ],
  tables: [
    {
      caption: T('Partículas del griego y el italiano'),
      head: ['Greco', 'Funzione', 'Italiano', 'Che cosa si perde'],
      rows: [
        ['{γάρ}', 'spiega', 'poiché, infatti', 'la explicación se vuelve causa'],
        ['{οὖν}', 'conclude', 'dunque, perciò, quindi', 'la cadena del razonamiento'],
        ['{δέ}', 'oppone o suma', 'ma, e, anzi', 'el mismo δέ hace las dos'],
        ['{μέν}', 'primero del par', '—', 'casi siempre desaparece'],
        ['{γε}', 'por lo menos', 'almeno', 'queda dentro de la oración'],
        ['{οὐ}, {μή}', 'niega', 'non', 'el griego niega en tres sitios'],
      ],
    },
    {
      caption: T('Romanos 12:1-2, por líneas'),
      head: ['Línea', 'Greco', 'Italiano', 'Glosa'],
      rows: [
        ['1', '{παρακαλῶ οὖν}', '{vi esorto dunque}', 'os ruego pues'],
        ['1', '{τὰ σώματα}', '{i vostri corpi}', 'vuestros cuerpos'],
        ['1', '{θυσίαν ζῶσαν}', '{sacrificio vivente}', 'sacrificio vivo'],
        ['2', '{μὴ συσχηματίζεσθε}', '{non conformatevi}', 'no os conforméis'],
        ['2', '{μεταμορφοῦσθε}', '{trasformatevi}', 'transformaos'],
        ['2', '{ἀνανεοῦσθαι}', '{rinnovando}', 'renovando'],
      ],
    },
  ],
};
