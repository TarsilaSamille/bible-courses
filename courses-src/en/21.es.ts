import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('El adverbio: comparación y la posición del not'),
  subtitle: T('greater, the best, I do not think so — qué admite comparación'),
  section: T('Adverbios'),
  body: C(`## Comparar con more y con less

El comparativo de una sílaba añade {er} y el superlativo añade {est}: {fast → faster → fastest}, {hard → harder → hardest}. Con dos o más sílabas entran {more} y {most}: {slowly → more slowly → most slowly}, {carefully → more carefully → most carefully}.

La regla del **superlativo con {the}** viene justo después: un superlativo de más de una sílaba exige el artículo definido delante. El inglés dice {the most careful}, {the most slowly}, y la forma sin {the} solo aparece dentro de expresiones fijas como {He is one of the most careful teachers in the school}. Un superlativo corto prescinde del artículo, y por eso {fastest} puede ir solo y {most carefully} no.

Juan 15:13 en la KJV trae el comparativo irregular: {Greater love hath no man than this}. La forma {greater} no sale de {great} por ninguna regla visible, y quien traduce tiene que tratarla como palabra.

## Los irregulares, y los que no comparan

{Hardly}, {barely} y {lately} **no** comparan: no existe {more hardly} ni {the most lately}. Son adverbios de sentido fijo, y quien los compara produce {He hardly ever comes more hardly}, que no es inglés.

Lo que es realmente irregular es otra lista, y es corta: {well → better → best}, {badly → worse → worst}, {little → less → least}, {far → farther/further → farthest/furthest}. Y {late} da {later} y {latest}, que significan "después" y "lo más reciente", no "más tarde".

La frase de práctica con **well** es la que más aparece en los exámenes: {She sings well}, {She sings better than her sister}, {She sings the best of anyone}.

## Dónde va el not

La negación en inglés no va antes del verbo. Va **después del auxiliar**: {I do not think so}, {He did not come}, {They have not seen it}. Escribir {I not think} rompe la frase, y en el habla americana {I think not} suena demasiado formal.

Cuando el verbo principal sigue a un auxiliar, el {not} queda entre los dos: {I think he is right} pasa a {I think he is not right}, y nunca {I think he is not right} con el {not} detrás del verbo.

La KJV usa la misma distribución: Marcos 4:38 dice {carest thou not that we perish?}, con el {not} después del verbo y antes del pronombre. El portugués también pone la negación detrás del verbo, y es la relación entre el {not} y el pronombre la que produce la lectura equivocada.

## Cuando no hay auxiliar

Con {be} y con los modales no hay problema: el {not} va detrás ({He is not here}, {She cannot come}). Con los verbos corrientes el inglés **inserta** un auxiliar: {I do not believe}, {He does not know}, {They did not come}.

Es la misma partícula {do} en tres tiempos — {do not}, {does not}, {did not} —, y es la llave de toda la negación. Quien lo entiende entiende también la pregunta, porque la pregunta invierte exactamente el mismo par.`),
  vocab: [
    V('faster', 'fast', 'más rápido'),
    V('fastest', 'fast', 'el más rápido'),
    V('more slowly', 'slowly', 'más despacio'),
    V('most carefully', 'carefully', 'lo más cuidadosamente'),
    V('greater', 'great', 'mayor'),
    V('the highest', 'high', 'el más alto'),
    V('hardly', 'hardly', 'apenas'),
    V('barely', 'barely', 'a duras penas'),
    V('lately', 'lately', 'últimamente'),
    V('better', 'well', 'mejor'),
    V('the best', 'well', 'el mejor'),
    V('worse', 'badly', 'peor'),
    V('the worst', 'badly', 'el peor'),
    V('further', 'far', 'más lejos'),
    V('farthest', 'far', 'el más lejano'),
  ],
  rules: [
    {
      n: '1',
      text: T('Una sílaba compara con -er y -est; dos o más sílabas comparan con more y most.'),
    },
    {
      n: '2',
      text: T(
        'Un superlativo de más de una sílaba exige el artículo definido delante: the most careful, the most quietly.',
      ),
    },
    { n: '3', text: T('Hardly, barely y lately no tienen forma comparativa ni superlativa.') },
    {
      n: '4',
      text: T(
        'Well, badly, little y far tienen comparativos irregulares: better/best, worse/worst, less/least, farther/farthest.',
      ),
    },
    {
      n: '5',
      text: T('La negación va después del auxiliar y nunca antes del verbo: I do not think so.'),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Juan 15:13 trae greater, comparativo irregular sin regla visible. Marcos 4:38 trae carest thou not, con la negación detrás del verbo y delante del pronombre.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Si alguien escribe "I not think" o "he not came", el problema no es el vocabulario: es que ha traducido la posición que la negación ocupa en portugués, donde sigue al verbo.',
      ),
    },
  ],
  examples: [
    { text: '{Greater love hath no man than this}', gloss: T('mayor amor nadie tiene que este') },
    { text: '{She sings better than her sister}', gloss: T('ella canta mejor que su hermana') },
    { text: '{She sings the best of anyone}', gloss: T('ella canta mejor que nadie') },
    {
      text: '{He is one of the most careful teachers}',
      gloss: T('es uno de los profesores más cuidadosos'),
    },
    { text: '{It is farther than I thought}', gloss: T('está más lejos de lo que pensaba') },
    { text: '{I do not think so}', gloss: T('no lo creo así') },
    { text: '{I think he is not right}', gloss: T('creo que no tiene razón') },
    { text: '{carest thou not that we perish}', gloss: T('¿no te importa que perecemos?') },
    { text: '{He does not know}', gloss: T('él no sabe') },
    { text: '{They did not come}', gloss: T('ellos no vinieron') },
  ],
  tables: [
    {
      caption: T('Comparación del adverbio'),
      head: [T('Tipo'), T('Forma'), T('Ejemplo')],
      rows: [
        [T('una sílaba'), T('{+er} / {+est}'), '{faster, hardest}'],
        [T('dos o más sílabas'), T('{more} / {most}'), '{more slowly, most carefully}'],
        [T('irregular'), T('—'), '{better/best, worse/worst, less/least}'],
        [T('superlativo largo'), T('{the most + adverbio}'), '{the most carefully}'],
      ],
    },
    {
      caption: T('No comparan'),
      head: [T('Palabra'), T('Qué es'), T('Qué escribir en su lugar')],
      rows: [
        ['{hardly}', T('adverbio de escasez'), '{almost never}'],
        ['{barely}', T('adverbio de escasez'), '{just, hardly}'],
        ['{lately}', T('adverbio de tiempo reciente'), '{recently}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál frase es correcta?'),
    options: [
      T('I not think so'),
      T('I do not think so'),
      T('I not do think so'),
      T('I think not so much'),
    ],
    answer: 1,
    hint: T('La negación va después del auxiliar, no antes del verbo.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Completa el comparativo: 'She sings ___ than her sister.'"),
      answer: 'better',
    },
    {
      kind: 'fill',
      prompt: T("Completa el superlativo con artículo: 'He is ___ most careful of them.'"),
      answer: 'the',
    },
    {
      kind: 'match',
      prompt: T('Relaciona la base con el par completo.'),
      pairs: [
        { a: 'well', b: T('better / the best') },
        { a: 'badly', b: T('worse / the worst') },
        { a: 'little', b: T('less / the least') },
        { a: 'far', b: T('farther / the farthest') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál frase es correcta?'),
      options: [
        T('She hardly ever comes more hardly than me'),
        T('She comes later than me'),
        T('She comes lately than me'),
        T('She comes the lately than me'),
      ],
      answer: 1,
    },
  ],
};
