import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  section: T('Verbo'),
  title: T('Verbos de estado y ada'),
  subtitle: T('ada masalah, rumah itu besar, punya: tres maneras de decir que algo es'),
  body: C(`## Acción y estado

El indonesio separa el verbo que describe una acción del predicado que describe un estado, y la separación se ve en la gramática.

{masuk} es acción: alguien entra, y el evento tiene principio y fin. {Rumah itu masuk} solo tiene sentido en un sentido específico, y una acción necesita normalmente un agente.

{sakit} es estado: alguien está enfermo, y no hay evento. El portugués lo resuelve con «estar», que es un verbo; el indonesio no necesita ninguno, porque el adjetivo puede ser predicado por sí solo: {Dia sakit} «está enfermo», {Rumah itu besar} «aquella casa es grande», {Pintu itu terbuka} «aquella puerta está abierta».

En registro escrito formal aparece el {adalah} y marca la cópula: {Rumah itu adalah besar}. La forma existe y no está mal, pero suena marcada, igual que en portugués suena marcada repetir la misma forma donde hay una más corta. Es una señal de que el {adalah} solo hace falta cuando lo que sigue podría leerse como un verbo.

Y hay un grupo de estados que usa {ber-}: {berdiri} «estar de pie», {berburu} «cazar», {bersekolah} «ir a la escuela». El {ber-} no significa estar en ninguna parte: significa estar en un estado o en una actividad, y la palabra que viene después dice cuál.

## El adjetivo como predicado

La regla cabe en una línea: **un adjetivo puede ocupar el lugar del verbo.**

{Ils sont occupés} es portugués; {Dia sibuk} es indonesio. {Ils ont raison} es portugués; {Dia benar} es indonesio. Lo que cambia es que el portugués tiene un verbo copulativo y el indonesio puede no tenerlo.

Esto vale en todos los huecos. Como sujeto, {Pintu terbuka}; como predicado, {Dia sakit}; en comparación, {Rumah ini lebih besar dari itu}; bajo negación, {Ini bukan rumah}; bajo pregunta, {Apakah dia sakit?}.

La excepción es cuando el adjetivo tiene que impedir que se lea como sustantivo: {Yang sakit itu dia} «el que está enfermo es él». Ahí el {yang} es obligatorio, porque sin él {sakit} se leería como sustantivo, «la enfermedad».

Hay un uso de {adalah} que conviene registrar: **reforza** una identidad ya evidente. {Dia adalah manusia} «él es humano» suena enfático, casi ofendido, cosa que {Dia manusia} no suena. El lenguaje religioso y los textos teológicos usan ese {adalah} con frecuencia, y quien traduce por «es» pierde el peso.

## El estado entra por la puerta de ada

El portugués dice «hay un problema», el lector reconoce la construcción enseguida y cree que está leyendo portugués. Está leyendo otra cosa.

{ada} no identifica sujeto: {Ada masalah} «hay un problema» no dice de quién es el problema. {Ada perbedaan} «hay una diferencia», {Ada pertanyaan} «hay una pregunta», {Ada yang salah} «hay algo errado». El sustantivo abstracto es lo que está en estado, y {ada} es el verbo que lo pone.

Dos construcciones con {ada} son más frecuentes de lo que el traductor nota. {Ada yang ...} es existencial y significa «hay alguien que»: {Ada yang datang} «vino alguien». Y {ada} como verbo principal en una oración como {Kita hanya perlu satu hal} pide {saja} «basta».

En cuanto a la posesión, el indonesio no usa {ada}. Tener es {punya}, {milik} o el clítico {-nya}: {Saya punya rumah} «tengo una casa», {Rumah itu milik saya} «aquella casa es mía», {Rumahnya besar} «su casa es grande». Confundir {ada} con {punya} invierte la dirección de la oración, y es el error más común de quien escribe indonesio con una sintaxis portuguesa en la cabeza.

La negación sigue la misma separación: {tidak ada} niega el estado («no hay», «no existe»), y el negativo de {adalah} es {bukan} ({bukan masalah} «no es un problema»). Una oración como {Ini bukan masalah} es una identidad, y {Ini tidak ada masalah} es una negación de existencia. El portugués distingue «no es un problema» de «no hay problema»; el indonesio los distingue con palabras distintas.

## Berbahagilah orang-orang yang...

{Mateo 5:3} trae la estructura de estado completa, y es el ejemplo más limpio que hay.

El verbo de la oración es {berbahagia}, que es {ber-} más el sustantivo {bahagia} «felicidad». Es un verbo de estado con el {ber-} del grupo de estado, y el griego hace lo mismo con {makarios}. Después viene {orang-orang}, la reduplicación integral que marca el plural, y después {yang} atado a un adjetivo, {miskin} «pobres».

Fíjate en que no hay {adalah} en ningún punto de la oración. El estado está en el adjetivo {miskin}, y la estructura es {berbahagia} más sujeto más {yang} más adjetivo. Una oración griega equivalente tendría artículo, verbo copulativo y tal vez una partícula; la oración indonesa no tiene ninguno de los tres.

Esa es la razón de que la bienaventuranza sea tan fácil de leer en indonesio y tan difícil de traducir. El griego obliga al traductor a decidir qué es predicado y qué es sustantivo; el indonesio ya lo decidió, y lo que queda para el traductor es la elección entre «pobres» y «desposeídos» y entre «felices» y «bienaventurados», que es una elección de diccionario y no de gramática.`),
  vocab: [
    V('ada', 'ada', 'haber, existir'),
    V('adalah', 'adalah', 'ser, es'),
    V('bukan', 'bukan', 'no (cópula y sustantivo)'),
    V('tidak ada', 'ada', 'no haber, no existir'),
    V('sakit', 'sakit', 'enfermo; estar enfermo'),
    V('besar', 'besar', 'grande'),
    V('kecil', 'kecil', 'pequeño'),
    V('terbuka', 'buka', 'estar abierto'),
    V('masuk', 'masuk', 'entrar'),
    V('keluar', 'keluar', 'salir'),
    V('rumah', 'rumah', 'casa'),
    V('pintu', 'pintu', 'puerta'),
    V('masalah', 'masalah', 'problema'),
    V('pertanyaan', 'pertanyaan', 'pregunta'),
    V('punya', 'punya', 'tener'),
    V('milik', 'milik', 'de, pertenecer a'),
    V('berdiri', 'diri', 'estar de pie'),
    V('berbahagia', 'bahagia', 'ser feliz'),
    V('bahagia', 'bahagia', 'feliz, felicidad'),
    V('miskin', 'miskin', 'pobre'),
    V('salah', 'salah', 'errado; culpable'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Un adjetivo puede ser predicado sin cópula: {Dia sakit}, {Rumah itu besar}, {Pintu terbuka}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{ada} pone un sustantivo en estado sin identificar sujeto: {Ada masalah}, {Ada pertanyaan}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Tener es {punya}, {milik} o el clítico {-nya}, nunca {ada}: {Saya punya rumah}, nunca {ada rumah saya} para «tengo una casa».',
      ),
    },
    {
      n: '4',
      text: T(
        'El negativo de {ada} es {tidak ada} y el de {adalah} es {bukan}: {Ini bukan masalah} y {Ini tidak ada masalah} son oraciones distintas.',
      ),
    },
    {
      n: '5',
      text: T(
        'Con {yang}, el adjetivo necesita el {yang} para que no se lea como sustantivo: {Yang sakit itu dia}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El adalah enfático'),
      text: T(
        '{Dia adalah manusia} no es lo mismo que {Dia manusia}. El {adalah} marca una identidad que el oyente quizá esperaba negar, y por eso suena cerca de una acusación. En texto religioso y en traducciones antiguas sale a menudo.',
      ),
    },
    {
      label: T('Dónde se disfraza de verbo el estado'),
      text: T(
        'Verbos como {berdiri} y {berbahagia} parecen verbos de acción y no lo son: {berdiri} es estar de pie, {berbahagia} es ser feliz. El {ber-} marca estado, y por eso la oración de Mateo 5:3 puede llevar {berbahagia} donde la lengua prescinde de un {adalah}.',
      ),
    },
  ],
  examples: [
    { text: 'Dia sakit.', gloss: T('Él está enfermo.') },
    { text: 'Rumah itu besar.', gloss: T('Aquella casa es grande.') },
    {
      text: 'Rumah itu adalah besar.',
      gloss: T('Aquella casa es realmente grande (formal, enfático).'),
    },
    { text: 'Ada masalah besar di sini.', gloss: T('Hay un gran problema aquí.') },
    { text: 'Ada pertanyaan yang belum terjawab.', gloss: T('Hay una pregunta sin responder.') },
    { text: 'Saya punya dua buku.', gloss: T('Yo tengo dos libros.') },
    { text: 'Rumah itu milik saya.', gloss: T('Aquella casa es mía.') },
    { text: 'Ini bukan masalah.', gloss: T('Esto no es un problema.') },
    { text: 'Ini tidak ada masalah.', gloss: T('No hay problema.') },
    { text: 'Yang sakit itu dia.', gloss: T('El que está enfermo es él.') },
  ],
  tables: [
    {
      caption: T('Predicado de estado'),
      head: ['Tipo', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        ['adjetivo', 'S + adj', 'Dia sakit', 'ele está doente'],
        ['adjetivo', 'S + adj', 'Rumah itu besar', 'aquela casa é grande'],
        ['estado com ter-', 'S + ter-', 'Pintu terbuka', 'a porta está aberta'],
        ['estado com ber-', 'S + ber-', 'Dia berdiri di sana', 'ele está de pé ali'],
        ['identidade', 'S + adalah', 'Dia adalah manusia', 'ele é humano'],
        ['existência', 'ada + nome', 'Ada masalah', 'há um problema'],
        ['posse', 'S + punya', 'Dia punya rumah', 'ele tem uma casa'],
      ],
    },
    {
      caption: T('Existir, ser e ter'),
      head: ['Pergunta', 'Resposta', 'Exemplo', 'Leia como'],
      rows: [
        ['existe?', 'ada', 'Ada pertanyaan', 'há uma pergunta'],
        ['existe?', 'ada', 'Ada yang salah', 'há algo errado'],
        ['o que é?', 'adalah', 'Ini adalah buku', 'isto é um livro'],
        ['quem tem?', 'punya', 'Dia punya rumah', 'ele tem uma casa'],
        ['de quem?', 'milik', 'Rumah itu milik saya', 'aquela casa é minha'],
        ['de quem?', 'clítico -nya', 'Rumahnya besar', 'a casa dele é grande'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la forma más natural de «está enfermo»?'),
    options: [T('Dia sakit'), T('Dia adalah sakit'), T('Dia ada sakit'), T('Dia sickness')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el verbo de existencia: hay un problema = ___ masalah.'),
      answer: 'Ada',
      hint: T('El verbo que pone algo en estado sin identificar sujeto.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se dice «no hay problema»?'),
      options: [
        T('Ini tidak ada masalah'),
        T('Ini bukan masalah'),
        T('Ini tidak masalah'),
        T('Ini ada masalah'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Une la pregunta con el verbo'),
      pairs: [
        { a: T('¿existe?'), b: T('{ada}') },
        { a: T('¿qué es?'), b: T('{adalah}') },
        { a: T('¿quién lo tiene?'), b: T('{punya}') },
        { a: T('¿de quién es?'), b: T('{milik}') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
