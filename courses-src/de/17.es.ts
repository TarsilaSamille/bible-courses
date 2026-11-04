import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('Los adverbios de tiempo'),
  subtitle: T('heute, morgen, gestern, bald — cuándo ocurre, no dónde'),
  section: T('Adjetivos y adverbios'),
  body: C(`## Tiempo de oración y tiempo de calendario

El alemán separa dos preguntas que el español junta. {wann} «cuándo» pregunta por el **momento**; un adverbio como {heute} «hoy», {morgen} «mañana» o {gestern} «ayer» responde a eso. También {seit wann} «desde cuándo» y {bis wann} «hasta cuándo». La otra pregunta es {woher} o {wohin} «de dónde / hacia dónde», a la que responden {hier}, {dort}, {nach}, {zu} — y esas no son palabras de tiempo.

La palabra más difícil del capítulo es {morgen}: significa **mañana** sola, y **por la mañana** cuando viene acompañada. {Ich fahre morgen} «Voy mañana.» {Ich stehe morgen früh auf} «Me levanto mañana temprano.» El contexto te salva, pero en los textos formales el alemán prefiere {morgen früh} o {am Morgen}, y el alemán antiguo de Lutero usa {morgens} «por la mañana».

## Tres maneras de decir una idea

Para cada período el alemán tiene una palabra corta y una expresión con preposición, así que la misma idea aparece de tres formas:

- **ahora**: {jetzt} «ahora» / {heute} «hoy» / {heute Nachmittag} «esta tarde»
- **ayer**: {gestern} «ayer» / {gestern Abend} «anoche» / {vor gestern} «anteayer»
- **anteayer**: {vorgestern} (una sola palabra: {vor} + {gestern})
- **mañana**: {morgen} «mañana» / {morgen Abend} «mañana por la tarde» / {übermorgen} «pasado mañana»

Mira el patrón: {übermorgen} es {über} + {morgen}, {vorgestern} es {vor} + {gestern}. El alemán compone, no marca. El {vor} de {vor gestern} y el {über} de {übermorgen} miden una **cantidad de tiempo**, no un momento.

## {seit}, {bis}, {vor}, {nach}

Cuatro preposiciones de tiempo, cuatro sentidos, y confundirlas es el error más común:

| Preposición | Pregunta | Ejemplo | Glosa |
|---|---|---|---|
| {seit} + dativo | ¿desde cuándo? | {seit einem Jahr} | hace un año |
| {bis} + dativo | ¿hasta cuándo? | {bis morgen} | hasta mañana |
| {vor} + dativo / acusativo | ¿hace cuánto? | {vor drei Tagen} | hace tres días |
| {nach} + dativo | ¿cuánto después? | {nach dem Essen} | después de comer |

{seit} responde a {seit wann} y traduce el español «lleva» seguido de tiempo: {Ich bin seit zwei Jahren hier} «Llevo dos años aquí». {vor} también traduce «hace», pero solo con tiempo **pasado** y **contable**: {vor einer Stunde} «hace una hora». Nunca dices {seit einer Stunde} para una hora que ya pasó; eso significaría «desde [hace una hora]», que es otra cosa y es raro.

Y ojo con el par: {nach} con el sustantivo {nach} + {dem} indica **movimiento hacia fuera**; {nach} con verbo o adverbio indica **tiempo transcurrido después**: {nach dem Essen} «después de comer», {zwei Jahre nach seiner Ankunft} «dos años después de su llegada».

## {schon}, {noch}, {bereits}

Tres palabras que el español no distingue y el alemán separa con rigor:

- {schon} «ya» — algo que **ha ocurrido**: {Ich habe es schon gelesen} «Ya lo he leído.»
- {noch} «todavía» — algo que **todavía** es posible: {Ich habe es noch nicht gelesen} «Todavía no lo he leído.»
- {bereits} «ya, de antemano» — algo que **se solapa** con otro suceso: {Als ich ankam, war er bereits gegangen} «Cuando llegué, él ya se había ido.»

Y el par negado: {nicht mehr} «ya no» y {noch nicht} «todavía no». {Ich will nicht mehr} «Ya no quiero» (he dejado de querer) e {Ich will noch nicht} «Todavía no quiero» (todavía no he llegado ahí). Son estados distintos.

## {während}, {wenn}, {bevor}

Estas tres se confunden más que cualquier trío del curso:

- {während} «durante» — subordina y significa **al mismo tiempo que**: {während ich arbeite, höre ich Musik} «mientras trabajo, escucho música».
- {wenn} «cuando» — subordina, tiempo **disyuntivo**, pero puede convertirse en {ob} «si» cuando el verbo queda al final: {wenn ich zurückkomme, rufe ich an} «cuando vuelva, te llamo».
- {bevor} «antes de» — subordina y significa **anteriormente**: {bevor er ging, aß er} «antes de irse, comió».

La prueba es el verbo. {Wenn ich gehe, komme ich} «si voy, iré». {Wenn ich gehe, gehe ich} «cuando vaya, voy». Si el segundo verbo es el último, es {ob}; si queda en medio, es {wenn}.

## Lo esencial

{morgen} es mañana o la mañana; {seit} responde «desde cuándo» y {vor} responde «hace cuánto»; {nach} indica tiempo transcurrido después; {schon} dice que ya ocurrió y {noch} que todavía es posible; y {wenn} con verbo al final es {ob}.`),
  vocab: [
    V('heute', 'heute', 'hoy'),
    V('gestern', 'gestern', 'ayer'),
    V('morgen', 'morgen', 'mañana; por la mañana'),
    V('übermorgen', 'übermorgen', 'pasado mañana'),
    V('vorgestern', 'vorgestern', 'anteayer'),
    V('jetzt', 'jetzt', 'ahora, en este momento'),
    V('bald', 'bald', 'pronto, en seguida'),
    V('seit', 'seit', 'desde (dativo); desde que'),
    V('vor', 'vor', 'antes de; hace (tiempo pasado)'),
    V('bis', 'bis', 'hasta (dativo); hasta que'),
    V('nach', 'nach', 'después de; según; hacia'),
    V('schon', 'schon', 'ya (algo que ya ha ocurrido)'),
    V('noch', 'noch', 'todavía; todavía no (con {nicht})'),
    V('bereits', 'bereits', 'ya, previamente'),
    V('während', 'während', 'durante; mientras'),
    V('bevor', 'bevor', 'antes de (el verbo va al final)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Ich bin ___ zwei Jahren in dieser Stadt}, ¿qué preposición completa el hueco?'),
    options: [
      T('seit — responde a «desde cuándo» y marca una duración que sigue'),
      T('vor — {vor} mide tiempo ya transcurrido, no una duración en curso'),
      T('nach — {nach} indica tiempo posterior a un suceso'),
      T('bis — {bis} indica un límite final'),
    ],
    answer: 0,
    hint: T('Regla §2: {seit} + dativo para algo que empezó y sigue.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('El día anterior a ayer, en una palabra: ___'),
      answer: 'vorgestern',
      hint: T('Es {vor} + {gestern} fusionados, igual que {über} + {morgen} = {übermorgen}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la construcción con su función.'),
      pairs: [
        { a: T('vor drei Tagen'), b: T('hace tres días') },
        { a: T('seit drei Tagen'), b: T('hace tres días (y sigue)') },
        { a: T('nach drei Tagen'), b: T('tres días después') },
        { a: T('bis morgen'), b: T('hasta mañana') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿En qué oración está el verbo conjugado en la posición de {ob} «si»?'),
      options: [
        T('{Wenn ich zurückkomme, rufe ich dich an} — el segundo verbo está en medio.'),
        T('{Wenn ich zurückkomme, rufe ich dich an} — el segundo verbo está al final.'),
        T('{Während ich arbeite, höre ich Musik} — el segundo verbo está al final.'),
        T('{Bevor er ging, aß er} — el segundo verbo está al final.'),
      ],
      answer: 0,
      hint: T('Regla §5: si el segundo verbo no es el último, la subordinación es con {wenn}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{seit} + dativo responde a «desde cuándo» y marca una duración que empezó y sigue: {Ich warte seit einer Stunde} «llevo una hora esperando».',
      ),
    },
    {
      n: '2',
      text: T(
        '{vor} + dativo mide tiempo ya transcurrido: {vor drei Tagen} «hace tres días». Nunca uses {vor} para algo que empezó y sigue; en ese caso usa {seit}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{nach} + dativo marca tiempo transcurrido **después** de un suceso: {nach dem Essen} «después de la comida», {zwei Jahre nach seiner Ankunft} «dos años después de su llegada».',
      ),
    },
    {
      n: '4',
      text: T(
        '{bis} + dativo marca el límite final: {bis morgen} «hasta mañana», {bis zum Monatsende} «hasta fin de mes».',
      ),
    },
    {
      n: '5',
      text: T(
        '{schon} dice que algo ya ha ocurrido; {noch} dice que todavía es posible. Con {nicht}: {nicht mehr} «ya no» y {noch nicht} «todavía no» son estados distintos.',
      ),
    },
    {
      n: '6',
      text: T(
        '{während} significa «al mismo tiempo que». {wenn} significa «cuando» o «si»: si el verbo conjugado de la subordinada va al final, es {ob} «si»; si se queda en medio, es {wenn} «cuando».',
      ),
    },
  ],
  notes: [
    {
      label: T('{morgen} son dos palabras con un solo nombre'),
      text: T(
        'La palabra {morgen} es el mejor ejemplo de cómo el alemán prefiere el contexto a la marca. Sola significa «mañana». Acompañada de {Abend} o de un sustantivo de hora pasa a ser «por la mañana»: {morgen früh} «mañana temprano», {morgen Mittag} «mañana al mediodía». {Abend} se comporta igual: {am Abend} es el período, {heute Abend} el momento puntual. El alemán antiguo de Lutero usa {morgens} y {abends} como adverbios, forma hoy rara fuera de expresiones fijas.',
      ),
    },
    {
      label: T('Lectura bíblica'),
      text: T(
        'El tiempo en Lutero aparece casi siempre con {vor} o {nach}, nunca con {seit}. En el Salmo 90:1, {der du die Menschen heim suchest in Ewigkeit} «tú, que haces volver a los hombres a su descanso»: el infinitivo {suchest} señala una referencia, y la construcción marca la eternidad como algo que ya ha comenzado. En Hebreos 13:8, {Jesus Christus gestern und heute und derselbe auch in Ewigkeit} «Jesucristo ayer, hoy y el mismo para siempre»: {gestern} y {heute} en secuencia son gerundios — participios usados como adverbios. En Lucas 24:29, {stehet aber hier und gehet nicht} «quedaos aquí y no os vayáis»: el {gehet nicht} ata la orden al presente inmediato, y es uno de los pocos casos en que el tiempo del texto coincide con el del habla.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ich fahre morgen nach Berlin.',
      gloss: T('Voy a Berlín mañana ({morgen} = mañana, solo).'),
    },
    {
      text: 'Ich stehe morgen früh auf.',
      gloss: T('Me levanto mañana temprano ({morgen} = por la mañana, acompañado).'),
    },
    {
      text: 'Ich warte seit einer Stunde.',
      gloss: T('Llevo una hora esperando ({seit} + dativo, duración en curso).'),
    },
    {
      text: 'Wir kamen vor drei Tagen an.',
      gloss: T('Llegamos hace tres días ({vor} mide tiempo ya transcurrido).'),
    },
    {
      text: 'Zwei Wochen nach meiner Ankunft zog ich um.',
      gloss: T('Dos semanas después de mi llegada me mudé ({nach} + caso).'),
    },
    {
      text: 'Die Vorlesung dauert bis sechzehn Uhr.',
      gloss: T('La clase dura hasta las cuatro de la tarde ({bis} marca el límite).'),
    },
    {
      text: 'Ich habe das Buch schon gelesen.',
      gloss: T('Ya he leído este libro ({schon}: el hecho ha ocurrido).'),
    },
    {
      text: 'Ich habe das Buch noch nicht gelesen.',
      gloss: T('Todavía no he leído este libro ({noch nicht}: la posibilidad sigue).'),
    },
    {
      text: 'Während ich arbeite, höre ich Musik.',
      gloss: T('Mientras trabajo, escucho música ({während} = al mismo tiempo que).'),
    },
    {
      text: 'Wenn ich zurückkomme, rufe ich dich an.',
      gloss: T('Cuando vuelva, te llamo ({wenn} con el verbo en medio = cuando).'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Adverbios de tiempo y expresiones'),
      head: [T('Período'), T('Corto'), T('Con preposición'), T('Glosa')],
      rows: [
        ['hoje', 'heute', 'an heute', 'today'],
        ['amanhã', 'morgen', 'am nächsten Tag', 'tomorrow'],
        ['ontem', 'gestern', 'am letzten Tag', 'yesterday'],
        ['anteontem', 'vorgestern', 'vor gestern', 'the day before yesterday'],
        ['depois de amanhã', 'übermorgen', 'über morgen', 'the day after tomorrow'],
        ['agora', 'jetzt', 'in diesem Augenblick', 'now'],
        ['de manhã', 'früh', 'am Morgen', 'in the morning'],
        ['à noite', 'abends', 'am Abend', 'in the evening'],
        ['à tarde', 'nachmittags', 'am Nachmittag', 'in the afternoon'],
      ],
    },
    {
      caption: T('Tabla 2 — Las cuatro preposiciones de tiempo'),
      head: [T('Preposición'), T('Caso'), T('Pregunta'), T('Ejemplo')],
      rows: [
        ['seit', 'dativo', 'desde quando?', 'seit drei Monaten'],
        ['bis', 'dativo', 'até quando?', 'bis zum Sonntag'],
        ['vor', 'dativo / acusativo', 'há quanto tempo?', 'vor zwei Wochen'],
        ['nach', 'dativo', 'quanto tempo depois?', 'nach dem Unterricht'],
      ],
    },
  ],
};
