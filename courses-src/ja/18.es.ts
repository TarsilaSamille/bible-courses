import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('Números'),
  title: T('El tiempo, las fechas y lo que cambia con el calendario'),
  subtitle: T(
    'La fecha sale en año-mes-día, la semana no se numera sino que se nombra por los cinco elementos, y la hora esconde el minuto — tres sistemas que se mezclan en la misma frase',
  ),
  body: C(`
## La fecha: año, mes, día, con la era por debajo

Los numerales y los contadores ya están dados; falta el encuentro de los dos, y el encuentro tiene nombre: fecha. Lo primero que hay que saber es el orden, porque contradice al mandarín. En japonés la fecha es **año-mes-día**, igual que en coreano, y al contrario del mandarín, que dice día-mes-año. "1 de abril de 2024" es {2024nen 4gatsu 1nichi}: {nen} es año, {tsuki} es mes, {nichi} es día. El numeral del mes es sino, ichigatsu, nigatsu, sangatsu, yongatsu, y es el mismo del coreano y del mandarín, porque los tres idiomas vienen del chino. El día también lleva numeral sino, con una excepción que es solo suya: el primer día del mes tiene una palabra propia, tsuitachi, que el japonés prefiere a "1 nichi".

El mismo {nichi} cambia de lectura según lo que está contando. En una fecha se lee "nichi": {1nichi} es "el día 1". En un contador de duración se lee "ka": {2nikan} es "dos días", dicho futsukan. El numeral no cambia; cambia lo que viene después, y es ese detalle lo que impide que el lector escriba "2 días" en un documento, "dos días" en otro y llame equivocado a uno de los dos.

El calendario, sin embargo, tiene dos capas. La oficial es el gregoriano, y entró solo en 1873: antes de eso Japón medía el año por la luna y numeraba por los años del emperador. La segunda capa sigue viva en la misma frase: la fecha por **era**. Un documento de 2019 puede traer {平成三十一年}, "el año 31 de Heisei", y es el mismo 2019. Esto no es reliquia de archivo: 1987 es {Shōwa 62nen}, Showa año 62, y así se data la página de firmas de una traducción reciente. Leer un documento japonés con fecha exige saber la era; no es erudición, es requisito.

Y aquí es donde entra la Biblia, con un detalle histórico que cualquiera puede comprobar. La primera Biblia completa en japonés moderno apareció en 1873, el mismo año de la adopción del calendario gregoriano y del decreto que acabó con la escritura vertical. El libro japonés nació en el instante exacto en que el idioma cambió de eje en la página. Por eso los prefacios traen la fecha en las dos formas a la vez: {2019nen 4gatsu 1nichi}, en cifras, y {平成三十一年}, en kanji y en era. Quien lee un prefacio de traducción está leyendo las dos, aunque solo note una.

## La semana no se numera: se nombra

El día de la semana abandona la lógica de la fecha. No existe "día 2 de la semana": existe {kayōbi}, martes, y el nombre no viene del número, viene del **elemento**. Los cinco elementos de la tradición china, fuego, tierra, agua, madera y metal, nombran cinco de los siete días; el sol y la luna nombran los otros dos, domingo y lunes. Por eso el nombre del día no indica su posición: {suiyōbi} no significa "día 3", significa "día del agua", y el miércoles es miércoles porque es el cuarto contando desde el lunes.

Un día de la semana japonés es una imagen antes de ser una dirección. {kin'yōbi} es viernes y, al mismo tiempo, el día del metal; {mokuyōbi} es jueves y el día de la madera, y la palabra de la madera es literalmente "bosque". Una invitación en japonés elige un elemento: "jueves a las tres" es {mokuyōbi 3ji}, y quien escucha sabe el día por la imagen antes de procesar el número. Traducir solo "jueves" pierde la imagen; traducir "día del bosque" pierde el orden de la semana. Las dos mitades tienen que sobrevivir a la traducción, y por eso las traducciones bíblicas conservan el par entero.

## La hora: {ji}, {fun} y el minuto que desaparece

Dos palabras resuelven la hora del día. {ji} es hora, {fun} es minuto, y {fun} tiene dos pronunciaciones, "pun" y "fun", sin diferencia de sentido, solo de registro. {3ji 15fun} son las tres y quince.

Y aquí está el detalle que solo aparece al hablar. En la hora, el minuto es **opcional**. En japonés corriente nadie dice "tres y quince minutos": se dice {3ji 15}, y {fun} se omite después del número, igual que en castellano, donde "minutos" también es opcional después del número. La forma escrita guarda el minuto; el habla lo prescinde. La media hora tiene palabra propia, y esa palabra es {han}, "mitad": {3ji han} son las tres y media, y {han} cuenta horas y horas, solo medias horas.

La mañana y la tarde tienen nombre y vienen antes del número. {gozen} es mañana, {gogo} es tarde: {gozen 9ji} son las nueve de la mañana, {gogo 3ji} son las tres de la tarde. En un texto escrito la ambigüedad desaparece; en una conversación no. Y quien escribe una hora sin {gozen} en una nota se entera demasiado tarde de que las nueve de la noche es una información muy distinta de las nueve de la mañana.

## Antes, después y duración: el mismo {ni} tres veces

{mae} y {ato} son sustantivos, como mostró la lección del grado, y por eso no funcionan como palabras sueltas: reciben partícula como cualquier sustantivo. "Antes de ir" es {mae ni iku}, literalmente "delante + ir"; "después de ir" es {ato ni iku}. Y "hasta" es {made}, que cierra un intervalo: {kara made} es el marco de cualquier duración, "de… hasta", y aparece por todas partes.

El mismo movimiento sirve para el pasado, y aquí es donde el castellano engaña. El japonés no tiene "hace" como partícula. Lo que hace el trabajo es el sustantivo {mae} más el contador de años: "hace tres años" es {3nen mae}, y "dentro de tres años" es {3nen ato}. Traducir {3nen mae} como "tres años antes" pierde el "desde ahora", porque el {mae} es relativo a un punto de habla, y ese punto es siempre el presente. Lo que hace el japonés es fechar: da el número y dice de qué lado de la referencia está.

Y la duración es el tercer trabajo de {ni}, el mismo que la primera lección ya registraba como destino y dirección. "Durante dos días" es {2ni watatte}, con {watatte} significando "a lo largo de", o el sustantivo compacto {2nikan}, que envuelve los dos días en una sola palabra. El mismo {ni} hace tres servicios: dice a dónde, dice cuándo y dice por cuánto tiempo. Lo que cambia no es la partícula, es el sustantivo con su contador, que siempre va antes. Una fecha en japonés se lee sin esfuerzo por eso.
`),
  vocab: [
    V('nen', '年', 'año; contador de años (nen)'),
    V('tsuki', '月', 'mes; luna (tsuki)'),
    V('nichi', '日', 'día; contador de días (nichi o ka)'),
    V('yōbi', '曜日', 'día de la semana (yōbi)'),
    V('ji', '時', 'hora; contador de horas (ji)'),
    V('fun', '分', 'minuto; contador de minutos (fun o pun)'),
    V('han', '半', 'mitad; y media (han)'),
    V('gozen', '午前', 'mañana (gozen)'),
    V('gogo', '午後', 'tarde (gogo)'),
    V('ni', 'に', 'en; a; destino, tiempo y duración (ni)'),
    V('mae', '前', 'antes; delante de; "hace" con contador (mae)'),
    V('ato', '後', 'después; detrás (ato)'),
    V('made', 'まで', 'hasta; límite (made)'),
    V('kara', 'から', 'desde; de (kara)'),
    V('watatte', '渡る', 'a lo largo de; durante (watatte)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La fecha es año-mes-día: lo contrario del mandarín y lo mismo que el coreano. El numeral del mes es sino.',
      ),
    },
    {
      n: '2',
      text: T(
        'El día de la semana no usa numeral alguno: se nombra por los cinco elementos y por el sol y la luna, y el nombre no da su posición en la semana.',
      ),
    },
    {
      n: '3',
      text: T(
        'En la hora, el minuto es opcional después del número: la escritura guarda {fun} y el habla lo omite. La media hora es {han}, y mañana y tarde van antes, como {gozen} y {gogo}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{mae} y {ato} son sustantivos y por eso llevan partícula: "antes de ir" es {mae ni iku}. El japonés no tiene "hace" como partícula: "hace tres años" es {3nen mae}.',
      ),
    },
    {
      n: '5',
      text: T(
        'El mismo {ni} marca destino, tiempo y duración. Lo que cambia es el sustantivo con su contador, que siempre va antes.',
      ),
    },
  ],
  notes: [
    {
      label: T('Una fecha en japonés tiene dos lecturas'),
      text: T(
        'El mismo día del calendario aparece en cifras y en era: {2019nen 4gatsu 1nichi} y {平成三十一年} son el mismo día. Lo mismo pasa en la hora, donde lo escrito y lo hablado no coinciden. Quedarse en el número e ignorar el resto es leer la mitad del texto.',
      ),
    },
    {
      label: T('1873: calendario, escritura y Biblia'),
      text: T(
        'Tres cosas ocurren el mismo año: entra el calendario gregoriano, un decreto termina la escritura vertical y sale la primera Biblia completa en japonés moderno. Es la única fecha de esta lección que vale la pena memorizar.',
      ),
    },
  ],
  examples: [
    {
      text: '2024年4月1日',
      gloss: T('2024nen 4gatsu 1nichi — 1 de abril de 2024, en el orden del japonés'),
    },
    { text: '水曜日', gloss: T('suiyōbi — miércoles, literalmente "día del agua"') },
    { text: '3時15分', gloss: T('sanji jūgo fun — las tres y quince; hablado, sin el minuto') },
    { text: '午前9時半', gloss: T('gozen kuji han — las nueve y media de la mañana') },
    { text: '2日にわたって', gloss: T('futsuka ni watatte — durante dos días') },
  ],
  tables: [
    {
      caption: T('La semana entera: ni un solo día está numerado'),
      head: [T('Nombre'), T('Elemento'), T('En castellano')],
      rows: [
        [T('{getsuyōbi 月曜日}'), T('luna'), T('lunes')],
        [T('{kayōbi 火曜日}'), T('fuego'), T('martes')],
        [T('{suiyōbi 水曜日}'), T('agua'), T('miércoles')],
        [T('{mokuyōbi 木曜日}'), T('madera'), T('jueves')],
        [T("{kin'yōbi 金曜日}"), T('metal'), T('viernes')],
        [T('{doyōbi 土曜日}'), T('tierra'), T('sábado')],
        [T('{nichiyōbi 日曜日}'), T('sol'), T('domingo')],
      ],
    },
    {
      caption: T('Las eras: cómo el mismo año se escribe de dos maneras'),
      head: [T('Era'), T('Años'), T('Cómo se escribe')],
      rows: [
        [T('{Meiji 明治}'), T('1868 a 1912'), T('{Meiji 6nen} = 1873')],
        [T('{Taishō 大正}'), T('1912 a 1926'), T('{Taishō 3nen} = 1914')],
        [T('{Shōwa 昭和}'), T('1926 a 1989'), T('{Shōwa 62nen} = 1987')],
        [T('{Heisei 平成}'), T('1989 a 2019'), T('{Heisei 31nen} = 2019')],
        [T('{Reiwa 令和}'), T('2019 en adelante'), T('{Reiwa 1nen} = 2019')],
      ],
    },
    {
      caption: T('El mismo {ni}, tres trabajos'),
      head: [T('Trabajo'), T('Ejemplo'), T('Lo que dice')],
      rows: [
        [T('destino'), T('{kyō made}'), T('hasta mañana')],
        [T('cuándo'), T('{mokuyōbi 3ji ni}'), T('el jueves, a las tres')],
        [T('duración'), T('{2ni watatte}'), T('durante dos días')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {2024nen 4gatsu 1nichi}, ¿cuál es el orden de los tres términos?'),
    options: [T('año, mes, día'), T('día, mes, año'), T('mes, día, año'), T('día, año, mes')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué significa {suiyōbi}, literalmente?'),
      options: [T('día del agua'), T('día 3'), T('día del fuego'), T('miércoles, sin imagen')],
      answer: 0,
    },
    {
      kind: 'fill',
      prompt: T('Completa el nombre de miércoles: 水曜____'),
      answer: '日',
    },
    {
      kind: 'match',
      prompt: T('Une la partícula con su función'),
      pairs: [
        { a: T('{mae}'), b: T('antes de; y "hace", con contador') },
        { a: T('{ato}'), b: T('después de') },
        { a: T('{made}'), b: T('hasta') },
        { a: T('{kara}'), b: T('desde') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
