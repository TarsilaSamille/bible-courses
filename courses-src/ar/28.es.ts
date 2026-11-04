import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('Personas del verbo y las dos negaciones'),
  subtitle: T('كَتَبْتُ، أَكْتُبُ، لَمْ يَكُنْ'),
  section: T('Verbos'),
  body: C(`## Dos series, dos maneras de marcar la persona

El verbo árabe marca la persona de dos maneras, y la elección entre ellas depende de la voz. **El perfecto flexiona por sufijos, pegados al final de la palabra; el imperfecto flexiona por prefijos, pegados al principio.**

En el perfecto la primera persona es {كَتَبْتُ}, la segunda {كَتَبْتَ} o {كَتَبْتِ}, la tercera {كَتَبَ} y {كَتَبَتْ}, y el plural {كَتَبْنَا}, {كَتَبْتُمْ}, {كَتَبُوا}. En el imperfecto los mismos sitios los ocupan los prefijos: {أَكْتُبُ}, {تَكْتُبُ}, {تَكْتُبُ}, {نَكْتُبُ}, {تَكْتُبُونَ}, {يَكْتُبُونَ}.

La tercera persona del perfecto es el punto que importa. No hay sufijo ninguno, y por eso {كَتَبَ} y {كَتَبَتْ} casi se escriben igual: la diferencia está en la {تْ} final y en el género del sustantivo. Una regla basta para leer casi todas las formas del perfecto sin memorizar nada.

## El pasado negativo tiene una forma que no flexiona

Y aquí está la excepción, que es lo más bonito y lo más ingrato del verbo árabe.

El pasado negativo es {لَمْ} más el verbo en **jussivo**, no en indicativo. {لَمْ يَكُنْ} es "no estaba", y no {لَمْ يَكُونُ} ni {لَمْ يَكُونَ}. Lo que hace el jussivo es dejar caer la vocal final, y por eso la negación del pasado suena distinta de la positiva en casi todas las formas.

Dos verbos rompen la serie, y eso es lo que hace instructive al grupo. **{لَمْ يَكُنْ} y {لَمْ يَأْتِ} pierden letras después de {لَمْ}.** {كَانَ} pierde la {و}, {جَاءَ} pierde la {أ} y cambia la {ت} final por {تْ}. Quien flexiona por regla escribe {لَمْ يَكُونْ}, y esa forma no aparece en ningún texto.

La flexión de la negación también es menor que la del positivo, y eso es una sola regla: la persona del pasado negativo aparece en el **pronombre**, no en el verbo. {لَمْ أَكُنْ} es la primera persona, {لَمْ نَكُنْ} la primera del plural, {لَمْ يَكُنْ} la tercera. Tres formas para seis sitios, y la reducción es real.

## Las dos negaciones

Juntando lo que viene de {لا} con lo que viene de {لَمْ}, el cuadro cierra y queda lo bastante pequeño como para memorizarlo entero.

El pasado es {لَمْ} más jussivo. El presente es {لا} más indicativo. El futuro es {لَنْ} más subjuntivo. Y {مَا} más indicativo es la negación sin referencia de tiempo, la más antigua de las cuatro y la que sale en los textos más viejos.

Cada negación trae su propio modo verbal, y esa es la parte que se memoriza: **jussivo con {لَمْ}, indicativo con {لا} y {مَا}, subjuntivo con {لَنْ}.** El resto de la flexión es igual que en el positivo. Quien conoce la negación y la voz lee cualquier forma negativa del verbo.

## Criterio de lectura

En {لَا تَأْتِ فِيَنَا تَجْرِيَةً} la negación trae una de las dos formas que nadie flexiona por regla. {لا} manda el verbo al jussivo, y el jussivo de {أَتى} es {يَأْتِ}, con la {أ} caída y la {ت} cambiada. Una persona que está aprendiendo escribe {لَا يَأْتِي}, que es una forma que existe y significa otra cosa: "no es él el que viene".

Por eso el jussivo de las raíces débiles merece atención: las dos formas quedan lo bastante cerca como para confundirse, y la confusión convierte una prohibición en una afirmación negada.`),
  vocab: [
    V('كَتَبْتُ', 'كتب', 'escribí'),
    V('كَتَبْتَ', 'كتب', 'escribiste'),
    V('كَتَبْتِ', 'كتب', 'escribiste'),
    V('كَتَبَتْ', 'كتب', 'escribió ella'),
    V('كَتَبْنَا', 'كتب', 'escribimos'),
    V('كَتَبْتُمْ', 'كتب', 'escribisteis'),
    V('كَتَبُوا', 'كتب', 'escribieron'),
    V('أَكْتُبُ', 'كتب', 'escribo'),
    V('تَكْتُبُ', 'كتب', 'escribes'),
    V('يَكْتُبُ', 'كتب', 'escribe'),
    V('تَكْتُبِينَ', 'كتب', 'escribes'),
    V('نَكْتُبُ', 'كتب', 'escribimos'),
    V('يَكْتُبُونَ', 'كتب', 'escriben'),
    V('لَمْ أَكُنْ', 'كان', 'no estaba yo'),
    V('لَمْ يَكُنْ', 'كان', 'no estaba'),
    V('لَمْ يَأْتِ', 'أتى', 'no vino'),
    V('كَانَ', 'كان', 'era; estaba'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo marca el perfecto la persona?'),
    options: [T('Por prefijos'), T('Por sufijos'), T('Por partículas'), T('No flexiona')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el pasado negativo: "no estaba" es {لَمْ ___}.'),
      answer: 'يَكُنْ',
      hint: T('La {و} de {يَكُون} cae después de {لَمْ}.'),
    },
    {
      kind: 'match',
      prompt: T('Associe persona y forma del perfecto.'),
      pairs: [
        { a: T('كَتَبْتُ'), b: T('primera persona') },
        { a: T('كَتَبْتَ'), b: T('segunda persona') },
        { a: T('كَتَبَتْ'), b: T('tercera persona femenina') },
        { a: T('كَتَبُوا'), b: T('plural') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es el jussivo de {يَكُون} después de {لَمْ}?'),
      options: [T('يَكُونُ'), T('يَكُونَ'), T('يَكُنْ'), T('يَكُونُوا')],
      answer: 2,
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo marca el imperfecto la persona?'),
      options: [T('Por prefijos'), T('Por sufijos'), T('Por partículas'), T('No flexiona')],
      answer: 0,
    },
  ],
  rules: [
    { n: '1', text: T('**El perfecto flexiona por sufijos y el imperfecto por prefijos.**') },
    {
      n: '2',
      text: T(
        'La tercera persona del perfecto no lleva sufijo: {كَتَبَ} y {كَتَبَتْ} solo se diferencian en la {تْ} final y en el género del sustantivo.',
      ),
    },
    { n: '3', text: T('El dual y el jussivo cortan el patrón: {كَتَبْتُمَا} y {لَمْ يَكْتُبْ}.') },
    { n: '4', text: T('El pasado negativo es {لَمْ} más jussivo, no más indicativo.') },
    { n: '5', text: T('{يَكُون} y {يَأْتِي} pierden letras después de {لَمْ}: {لَمْ يَكُنْ}, {لَمْ يَأْتِ}.') },
  ],
  notes: [
    {
      label: T('Los dos verbos que rompen la serie'),
      text: T(
        '{كَانَ} y {جَاءَ} son los únicos que pierden letras en la forma negativa. La pérdida es visible e irregular: {لَمْ يَكُنْ} pierde la {و}, y {لَمْ يَأْتِ} pierde la {أ} y cambia la {ت}. Quien flexiona por regla escribe {لَمْ يَكُونْ}, y eso nadie lo pronuncia.',
      ),
    },
    {
      label: T('Por qué el negativo flexiona menos'),
      text: T(
        'La persona del pasado negativo aparece en el pronombre, no en el verbo: {لَمْ أَكُنْ} es la primera persona y {لَمْ نَكُنْ} la primera del plural. Son tres formas para seis sitios, y la reducción es real.',
      ),
    },
  ],
  examples: [
    { text: 'كَتَبْتُ', gloss: T('escribí; sufijo {ـتُ}') },
    { text: 'كَتَبْتَ', gloss: T('escribiste; sufijo {ـتَ}') },
    { text: 'كَتَبَتْ', gloss: T('escribió ella; sufijo {ـتْ}') },
    { text: 'كَتَبُوا', gloss: T('escribieron; sufijo {ـوا}') },
    { text: 'أَكْتُبُ', gloss: T('escribo; prefijo {أَ}') },
    { text: 'يَكْتُبُونَ', gloss: T('escriben; prefijo {يَ}') },
    { text: 'لَمْ أَكُنْ', gloss: T('no estaba yo') },
    { text: 'لَمْ يَكُنْ', gloss: T('no estaba; la {و} cayó') },
    { text: 'لَمْ يَأْتِ', gloss: T('no vino; la {أ} cayó') },
  ],
  tables: [
    {
      caption: T('El perfecto por sufijos'),
      head: [T('Persona'), T('Sufijo'), T('Forma'), T('Glosa')],
      rows: [
        [T('1ª'), 'ـتُ', 'كَتَبْتُ', T('escribí')],
        [T('2ª masc.'), 'ـتَ', 'كَتَبْتَ', T('escribiste')],
        [T('2ª fem.'), 'ـتِ', 'كَتَبْتِ', T('escribiste')],
        [T('3ª masc.'), T('ninguno'), 'كَتَبَ', T('escribió')],
        [T('3ª fem.'), 'ـتْ', 'كَتَبَتْ', T('escribió ella')],
        [T('1ª plural'), 'ـنَا', 'كَتَبْنَا', T('escribimos')],
        [T('2ª plural'), 'ـتُمْ', 'كَتَبْتُمْ', T('escribisteis')],
        [T('3ª plural'), 'ـوا', 'كَتَبُوا', T('escribieron')],
      ],
    },
    {
      caption: T('El imperfecto por prefijos'),
      head: [T('Persona'), T('Prefijo'), T('Forma'), T('Glosa')],
      rows: [
        [T('1ª'), 'أَ', 'أَكْتُبُ', T('escribo')],
        [T('2ª masc.'), 'تَ', 'تَكْتُبُ', T('escribes')],
        [T('2ª fem.'), 'تَ', 'تَكْتُبِينَ', T('escribes')],
        [T('3ª masc.'), 'يَ', 'يَكْتُبُ', T('escribe')],
        [T('3ª fem.'), 'تَ', 'تَكْتُبُ', T('escribe ella')],
        [T('1ª plural'), 'نَ', 'نَكْتُبُ', T('escribimos')],
        [T('3ª plural'), 'يَ', 'يَكْتُبُونَ', T('escriben')],
      ],
    },
    {
      caption: T('Las cuatro negaciones'),
      head: [T('Tiempo'), T('Partícula'), T('Modo del verbo'), T('Ejemplo')],
      rows: [
        [T('pasado'), 'لَمْ', T('jussivo'), 'لَمْ يَكُنْ'],
        [T('presente'), 'لا', T('indicativo'), 'لا يَكْتُبُ'],
        [T('futuro'), 'لَنْ', T('subjuntivo'), 'لَنْ يَكْتُبَ'],
        [T('sin tiempo'), 'مَا', T('indicativo'), 'مَا كَانَ'],
      ],
    },
  ],
};
