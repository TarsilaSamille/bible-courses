import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  section: T('Preposiciones'),
  title: T('Partículas y preposiciones'),
  subtitle: T('di, ke, dari, pada, untuk, dengan, oleh, dalam, antara'),
  body: C(`## Nueve preposiciones y qué hace cada una

El portugués tiene decenas de preposiciones y ninguna hace el trabajo de otra. El indonesio tiene nueve que hacen todo el servicio, y la función de cada una es previsible.

{di} es lugar y tiempo fijo: {di rumah}, {di sekolah}, {di hari Minggu}, {di bulan Januari}. {ke} es dirección: {ke rumah}, {ke sekolah}, {ke Betlehem}. {dari} es origen: {dari rumah}, {dari Betlehem}, {dari mana} «de dónde».

{untuk} es finalidad y destinatario: {untuk Anda}, {untuk semua}, {untuk lahir}. {dengan} es compañía e instrumento: {dengan saya}, {dengan tangan}. {oleh} es el agente del pasivo: {ditulis oleh Petrus}.

{dalam} es interior y abstracto: {dalam rumah}, {dalam hati}, {dalam perjalanan}. {antara} es una relación entre dos: {antara kamu dan saya}, {antara dua jalan}. Y {tentang} es asunto: {kitab tentang Yohanes}.

Con nombre propio, {di} y {ke} se comportan de manera previsible y útil: {di} más nombre propio es donde está el lugar, {ke} más nombre propio es adónde se va. {Di Betlehem} «en Belén» es donde estaban los magos; {ke Betlehem} «a Belén» es el movimiento. La misma ciudad, las dos preposiciones.

## di y ke: el par que el portugués no tiene

El portugués no opone lugar y dirección de la misma manera. Dice «en casa» y «a casa», «en la ciudad» y «a la ciudad», y el lector tiene que aprender qué preposición va con qué sustantivo. El indonesio convierte la oposición en una regla, y la regla vale para todos los sustantivos sin excepción.

**{di} es dónde está la cosa; {ke} es adónde va.** {Buku itu di meja} «el libro está sobre la mesa». {Buku itu ke mana?} «¿adónde va el libro?» {Saya ke sekolah} «voy al colegio». {Saya di sekolah} «estoy en el colegio».

Confundir las dos produce el error de lectura más visible, y el síntoma se reconoce fácil: quien las tiene mezcladas escribe {ke} donde el texto tenía {di} y produce una oración que describe movimiento donde el original describe estado. Es el tipo de error que no cambia ninguna palabra y cambia la oración.

Las dos se combinan también con el clítico, y la forma es la misma en ambos casos: {dirumahnya} «en su casa», {kerumahnya} «a su casa». La diferencia está en la preposición, no en el resto.

Y hay un grupo de palabras que producen las dos preposiciones, que es el nominal en {-an}: {ke-an} da {taman} «el ir al jardín» y también «el jardín». Son sustantivos que nacieron de una preposición y que hoy valen para lugar y para dirección a la vez. El síntoma es el mismo sustantivo detrás de las dos: {ke jalan} y {di jalan}, y el contexto es lo único que sabe cuál es cuál.

## oleh, dengan, pada: las tres que se confunden

Tres preposiciones con funciones distintas y un error común entre ellas.

{oleh} funciona solo como agente. {Surat itu ditulis oleh Petrus} «la carta la escribe Pedro», {yang rusak itu diperbaiki oleh perusahaan} «lo que se rompió lo reparó la empresa». Fuera del pasivo, {oleh} significa «marca»: {tanda oleh Petrus} «la marca de Pedro». Quien traduce {oleh} por «por» en todo contexto produce «la marca por Pedro», que es otra oración.

{dengan} tiene dos caras y no se mezclan. Con una persona es compañía: {dengan saya}, {dengan Petrus}. Con un instrumento es medio: {dengan tangan}, {dengan pisau}. Y con un abstracto es relación: {dengan kasih sayang} «con amor». La diferencia es que la compañía exige una persona y el instrumento exige una cosa, y lo que va detrás de {dengan} dice cuál de las dos es.

{pada} es la preposición literaria y la clítica. En lo escrito, {pada} marca lugar y tiempo con un tono formal: {pada hari pertama}, {pada masa itu}. Con pronombre se vuelve clítico: {kepadamu} «a ti», {padanya} «a él», {beri padanya} «darle». Y {pada} tiene un uso que no tiene ninguna otra: {pada anggap dia guru} «considerado maestro», {pada anggap dia terbaik} «considerado el mejor». Ahí {pada} marca la función de un término, no su lugar.

La regla para no confundir es una pregunta: **¿el término es un lugar, una persona, una cosa o una función?** Un lugar fijo es {di} o {dalam}; un destino es {ke}; una persona o cosa que acompaña es {dengan}; el agente del pasivo es {oleh}; una función es {pada}.

## Ke Betlehem, di Betlehem

{el relato de los magos}, en {Mateo 2:11}, tiene las dos preposiciones en una frase, y por eso es el mejor ejemplo de {di} y {ke} que hay.

El texto dice que fueron {ke Betlehem} y que entraron {di rumah}. La primera preposición marca el movimiento de ciudad a ciudad, la segunda marca la posición dentro de la casa. El portugués hace lo mismo con «a Belén» y «en la casa», pero quien traduce palabra por palabra escribe {ke rumah} para el segundo término y produce «a la casa», que es un movimiento y no un lugar.

El mismo versículo trae {di dalam rumah}, que junta las dos: {dalam} dice interior y {di} dice lugar. Es una señal de que la preposición compuesta {di dalam} dice más que {di} a secas, y el lector de texto bíblico la encuentra por todas partes.

Y el versículo termina con {sembah} más un objeto directo, lo que muestra otra cosa: la preposición muestra la relación, y la relación se lee en el verbo que la rodea.`),
  vocab: [
    V('di', 'di', 'en, en (lugar, tiempo)'),
    V('ke', 'ke', 'a, hacia'),
    V('dari', 'dari', 'de, desde'),
    V('daripada', 'dari', 'que (comparación)'),
    V('pada', 'pada', 'en (formal), como función'),
    V('untuk', 'untuk', 'para'),
    V('dengan', 'dengan', 'con'),
    V('oleh', 'oleh', 'por (agente)'),
    V('dalam', 'dalam', 'dentro, en (interior, abstracto)'),
    V('antara', 'antara', 'entre'),
    V('tentang', 'tentang', 'sobre'),
    V('rumah', 'rumah', 'casa'),
    V('meja', 'meja', 'mesa'),
    V('sekolah', 'sekolah', 'escuela'),
    V('tangan', 'tangan', 'mano'),
    V('di dalam', 'dalam', 'dentro de'),
    V('Betlehem', 'Betlehem', 'Belén'),
    V('sembah', 'sembah', 'adorar, ofrecer'),
  ],
  rules: [
    { n: '1', text: T('{di} es lugar y tiempo fijo; {ke} es dirección; {dari} es origen.') },
    {
      n: '2',
      text: T('Con nombre propio, {di} es dónde y {ke} es adónde: {di Betlehem}, {ke Betlehem}.'),
    },
    {
      n: '3',
      text: T('{oleh} solo funciona como agente del pasivo; fuera de él significa «marca».'),
    },
    {
      n: '4',
      text: T(
        '{dengan} con persona es compañía y con cosa es instrumento: {dengan Petrus}, {dengan tangan}.',
      ),
    },
    {
      n: '5',
      text: T(
        '{pada} con pronombre se vuelve clítico: {kepadamu}, {padanya}; con nombre marca función: {pada anggap dia guru}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El clítico en la preposición'),
      text: T(
        'Las preposiciones absorben el clítico igual que {di} y {ke} antes del sustantivo: {dirumahnya}, {kerumahnya}, {kepadamu}. La preposición no cambia; lo que cambia es lo que va antes de ella.',
      ),
    },
    {
      label: T('Dónde dari se vuelve comparación'),
      text: T(
        '{Daripada} es {dari} más {-an} y significa «que», para comparar: {Rumahnya lebih besar daripada rumahku}. El mismo {-an} que hace lugar en {taman} hace comparación en {daripada}.',
      ),
    },
  ],
  examples: [
    { text: 'Buku itu di meja.', gloss: T('El libro está sobre la mesa.') },
    { text: 'Saya ke sekolah sekarang.', gloss: T('Voy al colegio ahora.') },
    { text: 'Saya di sekolah sekarang.', gloss: T('Estoy en el colegio ahora.') },
    { text: 'Surat itu ditulis oleh Petrus.', gloss: T('La carta la escribe Pedro.') },
    { text: 'Tanda itu oleh Petrus.', gloss: T('Esa marca es de Pedro.') },
    { text: 'Dia datang dengan Petrus.', gloss: T('Vino con Pedro.') },
    { text: 'Dia memotong dengan pisau.', gloss: T('Él corta con el cuchillo.') },
    { text: 'Ini untuk kamu.', gloss: T('Esto es para ti.') },
    {
      text: 'Rumah ini lebih besar daripada rumahku.',
      gloss: T('Esta casa es más grande que la mía.'),
    },
    { text: 'Di dalam rumah itu ada orang.', gloss: T('Dentro de aquella casa hay gente.') },
  ],
  tables: [
    {
      caption: T('As nove preposições'),
      head: ['Preposição', 'Função', 'Exemplo', 'Leia como'],
      rows: [
        ['di', 'lugar e tempo parado', 'di rumah', 'em casa'],
        ['ke', 'direção', 'ke rumah', 'para casa'],
        ['dari', 'origem', 'dari rumah', 'de casa'],
        ['pada', 'lugar formal, função', 'pada hari pertama', 'no primeiro dia'],
        ['untuk', 'finalidade, destinatário', 'untukmu', 'para você'],
        ['dengan', 'companhia, instrumento', 'dengan tangan', 'com a mão'],
        ['oleh', 'agente da passiva', 'ditulis oleh Petrus', 'escrito por Pedro'],
        ['dalam', 'interior, abstrato', 'dalam hati', 'no coração'],
        ['antara', 'entre dois', 'antara kamu dan saya', 'entre você e eu'],
      ],
    },
    {
      caption: T('O par que o português resolve com o substantivo'),
      head: ['Pergunta', 'Resposta', 'Exemplo', 'Leia como'],
      rows: [
        ['onde está?', 'di', 'Buku itu di meja.', 'o livro está na mesa'],
        ['para onde vai?', 'ke', 'Buku itu ke mana?', 'o livro vai para onde?'],
        ['de onde veio?', 'dari', 'Buku itu dari mana?', 'de onde veio o livro?'],
        ['com quem?', 'dengan', 'Datang dengan Petrus.', 'veio com Pedro'],
        ['com o quê?', 'dengan', 'Potong dengan pisau.', 'corta com a faca'],
        ['para quem?', 'untuk', 'Ini untuk kamu.', 'isto é para você'],
        ['feito por quem?', 'oleh', 'Ditulis oleh Petrus.', 'escrito por Pedro'],
        ['dentro de onde?', 'di dalam', 'di dalam rumah', 'dentro da casa'],
        ['entre o quê?', 'antara', 'antara dua jalan', 'entre duas ruas'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Saya di sekolah}, ¿qué marca la preposición?'),
    options: [
      T('posición: estoy en el colegio'),
      T('dirección: voy al colegio'),
      T('origen: vengo del colegio'),
      T('destinatario: es para el colegio'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa con dirección: voy a casa = saya ___ rumah.'),
      answer: 'ke',
      hint: T('La preposición de destino.'),
    },
    {
      kind: 'choose',
      prompt: T('En {Surat itu ditulis _ Petrus}, ¿qué preposición completa la oración?'),
      options: [T('oleh'), T('dengan'), T('untuk'), T('dalam')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Une la preposición con su función'),
      pairs: [
        { a: T('{di}'), b: T('lugar fijo') },
        { a: T('{ke}'), b: T('dirección') },
        { a: T('{dari}'), b: T('origen') },
        { a: T('{oleh}'), b: T('agente') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
