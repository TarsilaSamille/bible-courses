import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  section: T('La escritura'),
  title: T('El acento, y por qué decide lo que usted lee'),
  subtitle: T('мы y мы: la misma grafía para nosotros y para mosca'),
  body: C(`
## El acento es de la palabra, no de una regla

El acento ruso es, en la mayoría de los casos, un dato de diccionario. No se deriva del sufijo, ni del prefijo, ni de la terminación, y quien intente una regla general se equivocará justamente en las palabras que importan. Hay tendencias, y son reales: la primera sílaba es más común que cualquier otra, y los sustantivos en -а y -я suelen recibir el acento en la última. Una tendencia no es una regla. Cada verbo, sustantivo y adjetivo tiene el suyo, y se aprende junto con la palabra.

Eso tiene una consecuencia de lectura que ningún otro idioma del curso produce. Como el acento no se escribe en un texto corrido, algunas palabras quedan ambiguas hasta que usted sepa cuál es. No la palabra ambigua del diccionario: la palabra ambigua en la página, sin nada que la resuelva.

## Pares que sólo el acento separa

**мы es nosotros y мы es mosca.** Las cuatro letras son las mismas y no hay señal. Quien lee decide por el resto de la frase, y por eso el contexto, en ruso, no es adorno: es lo que desambigua la grafía.

Lo mismo pasa con уже, que es todavía o más estrecho según dónde caiga el acento, y con плачу, que es yo pago o yo lloro. El caso más interesante para quien lee es звонит: las letras son siempre las mismas, y el acento decide el aspecto. Con el acento en la última sílaba es el presente perfectivo, llama ahora; con el acento en la primera es el presente imperfectivo, llama, y sigue llamando.

Dicho de otro modo: **el acento no sólo distingue sentidos, distingue el aspecto del verbo.** Nada más en la página hace eso.

## El acento que cambia de sílaba

Una familia grande de sustantivos masculinios tiene acento móvil. En el nominativo singular el acento está en la raíz, en вода́, окно́, дом; en los demás casos se retira a la primera sílaba, como en во́ду, о́кна, до́мом. El agua que era agua pasa a ser agua, y cuando entra una preposición por delante es ella la que recibe el acento, como en на́ руки y по́д руку.

Eso pasa con una palabra portuguesa y no con la otra. Decimos el agua, del agua, con el agua, y el acento del sustantivo desaparece detrás del artículo. En ruso no desaparece nada: el acento cambia de sílaba, y el cambio se ve en la escritura.

Lo que no se mueve es más interesante que lo que se mueve. El nominativo singular no se mueve, porque es la forma que enseña el diccionario. El genitivo singular de un sustantivo masculino tampoco se mueve, porque el acento pasa a la preposición. Por eso о́браз conserva el acento en la primera sílaba en todas las posiciones.

## Donde el acento no decide

Hay un grupo de palabras, unas trescientas, que resisten la regla general y mantienen el acento en la primera sílaba en todos los casos. El adjetivo до́рогой es una de ellas, y el sustantivo доро́га no. Son la excepción que confirma que la regla existe.

Y está la letra que ya decide: donde hay ё, el acento está marcado en la grafía, y no hay ambigüedad posible. El versículo del Salmo 118:105 trae Слово Твое, y Твое tiene dos sílabas porque la ё marca la segunda. Si la ё se omitiera, el mismo versículo leería dos veces la misma palabra, una acentuada y otra no.

El gancho está en Juan 1, que usa las dos palabras en el mismo capítulo. **Все чрез Него начало быть** en 1:3, y **И от полноты Его все мы приняли и благодать на благодать** en 1:16. El mismo мы, la misma grafía, y ninguna señal: en 1:16 sólo puede ser el pronombre nosotros, porque lo que recibió la plenitud fue un grupo de personas y no una mosca. Y el все de las dos apariciones significa todos, y no todo: si el traductor hubiera escrito всё, el versículo diría que el mundo entero recibió, y eso no es lo que está allí.`),
  vocab: [
    V('ударение', 'ударение', 'acento'),
    V('ударный', 'ударный', 'acentuado'),
    V('мы', 'мы', 'nosotros, o mosca, según el acento'),
    V('уже', 'уже', 'todavía, o más estrecho'),
    V('плачу', 'платить', 'yo pago, con el acento en la última sílaba'),
    V('плачу', 'плакать', 'yo lloro, con el acento en la primera'),
    V('звонит', 'звонить', 'llama; el acento decide el aspecto'),
    V('вода', 'вода', 'agua, con el acento en la última sílaba'),
    V('воду', 'вода', 'el agua, con el acento en la primera'),
    V('нога', 'нога', 'pierna'),
    V('ногу', 'нога', 'la pierna, con el acento en la primera'),
    V('дом', 'дом', 'casa'),
    V('домом', 'дом', 'con la casa, instrumental con el acento en la primera'),
    V('на руки', 'рука', 'a las manos; el acento va a la preposición'),
    V('дорога', 'дорога', 'carretera, con el acento en la última sílaba'),
    V('дорогой', 'дорогой', 'caro; el acento nunca se mueve'),
  ],
  rules: [
    {
      n: '1',
      text: T('El acento es un dato de diccionario: apréndalo con la palabra, no por derivación.'),
    },
    {
      n: '2',
      text: T(
        'Sin acento escrito, algunas palabras son ambiguas: {мы}, {уже}, {плачу}. El contexto las desambigua.',
      ),
    },
    {
      n: '3',
      text: T(
        'En {звонит} el acento decide el aspecto, no sólo el sentido: última sílaba perfectivo, primera sílaba imperfectivo.',
      ),
    },
    {
      n: '4',
      text: T(
        'En los sustantivos masculinos de raíz consonántica el acento es móvil, y en los casos oblicuos se retira a la primera sílaba: {вода}́ pero {во}́{ду}.',
      ),
    },
    {
      n: '5',
      text: T('Donde hay {ё} el acento ya está marcado en la grafía, y no hay ambigüedad posible.'),
    },
  ],
  notes: [
    {
      label: T('Por qué se retira el acento'),
      text: T(
        'El acento de вода́ se retira hacia во́ду porque la forma flexionada es átona: la palabra ya no es el centro de la frase. Y cuando entra una preposición por delante, es la preposición la que recibe el acento, en на́ руки, по́д руку, за́ ногу. En ambos casos el sustantivo queda con la primera sílaba libre, y por eso el acento parece haberse ido a la preposición.',
      ),
    },
    {
      label: T('La palabra más ambigua del capítulo'),
      text: T(
        'En Juan 1:16, все мы приняли, el мы sólo puede ser el pronombre. Una mosca es una, y приняли es plural. Quien no sepa el acento del мы intentará leer un sustantivo en medio de la frase, y la lectura se atasca. La corrección de lectura en ruso es esta: cuando dos palabras tienen la misma grafía, el contexto no es una pista cualquiera, es la pista.',
      ),
    },
  ],
  examples: [
    { text: 'мы', gloss: T('nosotros, con el acento en la primera sílaba') },
    { text: 'мы', gloss: T('mosca, con el acento en la segunda') },
    { text: 'воду', gloss: T('el agua; el acento se retiró a la primera') },
    { text: 'вода', gloss: T('agua; el acento en la última sílaba') },
    { text: 'на руки', gloss: T('a las manos; el acento pasó a la preposición') },
    { text: 'звони́т', gloss: T('llama ahora; presente perfectivo') },
    { text: 'зво́нит', gloss: T('llama, y sigue llamando; presente imperfectivo') },
    { text: 'пла́чу', gloss: T('yo lloro') },
    { text: 'плачу́', gloss: T('yo pago') },
    { text: 'Все чрез Него начало быть', gloss: T('Todo llegó a ser por medio de él (Jn 1:3)') },
  ],
  tables: [
    {
      caption: T('Una grafía, dos lecturas'),
      head: [T('Palabra'), T('Primera lectura'), T('Segunda lectura')],
      rows: [
        [T('мы'), T('nosotros, acento en la primera sílaba'), T('mosca, acento en la segunda')],
        [T('уже'), T('todavía, acento en la última'), T('más estrecho, acento en la primera')],
        [T('плачу'), T('yo lloro, acento en la primera'), T('yo pago, acento en la última')],
        [T('звонит'), T('llama ahora, perfectivo'), T('sigue llamando, imperfectivo')],
        [
          T('свечи'),
          T('las velas, acento en la primera'),
          T('la vela que se consume, acento en la última'),
        ],
      ],
    },
    {
      caption: T('El acento móvil en los sustantivos masculinos'),
      head: [T('Caso'), T('вода'), T('нога'), T('дом'), T('город')],
      rows: [
        [T('nominativo singular'), T('вода́'), T('нога́'), T('дом'), T('го́род')],
        [T('genitivo'), T('воды́'), T('ноги́'), T('до́ма'), T('го́рода')],
        [T('dativo'), T('воде́'), T('ноге́'), T('до́му'), T('го́роду')],
        [T('acusativo'), T('во́ду'), T('но́гу'), T('дом'), T('го́род')],
        [T('instrumental'), T('водо́й'), T('ногой'), T('до́мом'), T('го́родом')],
        [T('prepositivo'), T('воде́'), T('ноге́'), T('до́ме'), T('го́роде')],
      ],
    },
    {
      caption: T('Quién recibe el acento tonal'),
      head: [T('Situación'), T('Qué ocurre'), T('Ejemplos')],
      rows: [
        [
          T('una preposición va delante'),
          T('la preposición recibe el acento'),
          T('на́ руки, по́д руку, за́ ногу'),
        ],
        [
          T('el sustantivo es el centro de la frase'),
          T('el acento queda en el sustantivo'),
          T('вода, нога, доро́га'),
        ],
        [
          T('el sustantivo está en plural'),
          T('el acento vuelve a la raíz'),
          T('во́ды, но́ги, го́роды'),
        ],
        [
          T('el sustantivo está en caso oblicuo'),
          T('el acento se retira a la primera sílaba'),
          T('во́ду, до́мом'),
        ],
        [T('la palabra tiene ё'), T('el acento ya está marcado'), T('Твое, всё, ещё')],
        [
          T('la palabra resiste la regla general'),
          T('el acento nunca se mueve'),
          T('до́рогой, ло́шадь, де́ньги'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En воду, ¿a dónde fue el acento?'),
    options: [
      T('Se quedó en la última sílaba, como en вода'),
      T('Se retiró a la primera sílaba'),
      T('Fue a la preposición, si hay una delante'),
    ],
    answer: 1,
    hint: T(
      'En caso oblicuo el sustantivo masculino de raíz consonántica pierde el acento de la raíz, y la primera sílaba lo conserva.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: В ___ было Слово (Jn 1:1)'), answer: 'начале' },
    {
      kind: 'choose',
      prompt: T('En И от полноты Его все мы приняли, el мы es...'),
      options: [T('mosca'), T('el pronombre nosotros'), T('ambiguo, sin contexto')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: доро___ (carretera, acento en la última sílaba)'),
      answer: 'га',
    },
  ],
};
