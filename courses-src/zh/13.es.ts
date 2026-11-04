import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  section: T('Sintaxis'),
  title: T('Conectivos: {而}, {但}{是}, {所}{以}, {因}{为}'),
  subtitle: T('Cuatro palabras que unen oraciones, y una de ellas hace dos trabajos a la vez'),
  body: C(`
## Un solo carácter, dos trabajos

En español "y" y "pero" son palabras distintas, y uno elige entre ellas sin pensar. El mandarín tiene un carácter que cubre las dos: **{ér}**. Significa "y" en una oración y "pero" en la siguiente, y es el **contexto**, no la forma, lo que decide cuál de las dos está leyendo.

El par más limpio lo muestra: {ér jīn} es "y ahora": suma, continúa. {rán'ér} es "pero, sin embargo": interrumpe, corrige lo anterior. El segundo usa el mismo {ér} con un prefijo delante, y eso basta para volverlo contraste. No hay partícula, no hay flexión, nada que diga "aquí hay contradicción": lo dice la posición del resto de la frase.

Por eso el mandarín gasta una palabra menos que el español en lo que el español resuelve con dos, y por eso la lectura bíblica en chino obliga a decidir en cada {ér}. Un traductor que escribe {ér} por costumbre produce un texto más plano que el original griego, que era habilidoso en las oposiciones.

## El "pero" explícito: {但是}

Cuando el contraste es fuerte y deliberado, el mandarín usa {dànshì}, dos sílabas, sin ambigüedad posible, "pero". Es la palabra del segundo plano, escrita entera: {wǒ hěn lèi, dànshì wǒ yào qù} es "estoy muy cansado, pero quiero ir". Compare con {wǒ hěn lèi, ér wǒ yào qù}, que es la misma idea con {ér} y suena más ligera, más literaria.

La regla práctica para el lector: si la frase es prosa corriente y el contraste es el punto principal, {dànshì}. Si el texto es poético, o si la línea anterior y la siguiente ya están llenas de paralelismo, {ér} o {rán'ér}, porque allí el peso de un {dànshì} de dos sílabas rompería el ritmo.

Fíjese en la coma: va antes de {dànshì} y antes de un {ér} de contraste, siempre. Un conectivo de contraste es una pausa, y una pausa en mandarín se escribe con coma.

## Porque y por lo tanto: el par fijo

**{yīnwèi}** es "porque" y **{suǒyǐ}** es "por lo tanto". Los dos van al comienzo de la oración que gobiernan, y casi siempre aparecen juntos: {yīnwèi} … {suǒyǐ} es un par fijo, tan natural como "porque… por lo tanto" en español.

Aquí la noticia es buena, después de tanta inversión: el español y el mandarín coinciden en esto. "Por lo tanto voy" y {suǒyǐ} {wǒ} {qù} ponen la misma palabra en el mismo sitio. Lo que cambia es la dirección: en español el "porque" es una subordinación y el "por lo tanto" también abre la oración principal; en mandarín los dos son simétricos, cada uno abre su propia oración. {yīnwèi} {wǒ} {lèi}, {suǒyǐ} {wǒ} {bù} {qù}, "porque estoy cansado, por lo tanto no voy", es una frase de mandarín perfectamente bien formada, con los dos conectivos en paralelo.

Y {suǒyǐ} solo, sin {yīnwèi} delante, es perfectamente normal: {suǒyǐ} {wǒ} {dào le}, "por lo tanto llegué". El {yīnwèi} es el que necesita justificación; el {suǒyǐ} es el que puede abrir la frase.

## Conectivo, sujeto, verbo

Este es el error que comete todo hablante de español en su segunda frase en mandarín. Un conectivo no entra en posición libre como en español: el "porque" y el "por lo tanto" del mandarín tienen posición fija, y esa posición es **antes del sujeto**.

{yīnwèi} {wǒ} {lèi}, {suǒyǐ} {wǒ} {bù} {qù}.

Conectivo, sujeto, verbo. El conectivo precede al sujeto, no al verbo. Escribir {wǒ} {yīnwèi} {lèi} suena mal por la misma razón que suena mal {wǒ} {suǒyǐ} {qù}: ha puesto la preposición detrás del sujeto. Quien traduce del español por correspondencia palabra a palabra escribe "porque yo cansado" y descubre que nada funciona, porque el griego y el español tienen la libertad sintáctica que el mandarín no tiene.

Dos segundos de atención a la puntuación: la coma va después de {yīnwèi}, no antes. {yīnwèi} {wǒ} {lèi}, no {yīnwèi}, {wǒ} {lèi}. Y la {和合本} puntúa de manera distinta a la convención occidental en varios versículos con {yīnwèi}; si su copia tiene una coma donde la otra no la tiene, no es error suyo ni de ella, es convención editorial.

El gancho que lo fija todo: en Juan 3:16 la {和合本} abre el versículo con el conectivo. {yīnwèi} {shén} {ài} {shìrén}, "porque Dios amó al mundo". El versículo entero empieza con "porque", y el "amó" viene tres palabras después. Quien lee griego reconoce la apertura con el ὅτι; quien lee español reconoce el "porque" delante. Las dos lenguas están de acuerdo, y el mandarín lo deja visible ya en la primera línea. Y en Proverbios 3:5, {nǐ} {yào} {zhuānxīn} {yǐkào} {Yēhéhuá}, "confía en el Señor", {yǐkào} es el verbo, "apoyarse en": nada de esto funciona si el conectivo no viene en el sitio correcto de la oración.`),
  vocab: [
    V('ér', '而', 'y, pero (depende del contexto)'),
    V('dànshì', '但是', 'pero (contraste explícito)'),
    V("rán'ér", '然而', 'pero, sin embargo (contraste formal)'),
    V('suǒyǐ', '所以', 'por lo tanto, así que'),
    V('yīnwèi', '因为', 'porque (va al comienzo de la oración)'),
    V('yǐkào', '倚靠', 'apoyarse en, confiar en (yǐkào)'),
    V('lèi', '累', 'cansado (lèi)'),
    V('qù', '去', 'ir (qù)'),
    V('ài', '爱', 'amar (ài)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{ér} significa "y" o "pero" según el contexto; {rán\'ér} fuerza el sentido de contraste.',
      ),
    },
    {
      n: '2',
      text: T(
        '{dànshì} es el "pero" explícito y siempre sigue a una coma: {wǒ hěn lèi, dànshì wǒ yào qù}.',
      ),
    },
    { n: '3', text: T('{yīnwèi} y {suǒyǐ} abren la oración, al comienzo, y forman un par fijo.') },
    {
      n: '4',
      text: T(
        'Orden obligatorio: conectivo, sujeto, verbo — nunca el conectivo después del sujeto.',
      ),
    },
    { n: '5', text: T('La coma va antes de un conectivo de contraste y después de {yīnwèi}.') },
  ],
  notes: [
    {
      label: T('La "y" que se vuelve "pero"'),
      text: T(
        '{ér jīn} es "y ahora", suma; {rán\'ér} es "pero, sin embargo", corta. Mismo carácter, función opuesta: quien traduce tiene que elegir en cada aparición.',
      ),
    },
    {
      label: T('Atención a la puntuación de la {和合本}'),
      text: T(
        'La {和合本} a veces puntúa de manera distinta a la convención occidental en versículos con {yīnwèi}. Compare dos ediciones antes de concluir que hay error.',
      ),
    },
  ],
  examples: [
    {
      text: '我很累但是我要去',
      gloss: T('wǒ hěn lèi dànshì wǒ yào qù — estoy muy cansado, pero quiero ir'),
    },
    { text: '因为神爱世人', gloss: T('yīnwèi shén ài shìrén — porque Dios amó al mundo') },
    { text: '所以我今天不去', gloss: T('suǒyǐ wǒ jīntiān bù qù — por lo tanto hoy no voy') },
    { text: '然而他依然来了', gloss: T("rán'ér tā yīrán lái le — pero él vino de todos modos") },
  ],
  tables: [
    {
      caption: T('Los cuatro conectivos uno al lado del otro'),
      head: [T('Palabra'), T('Glosa'), T('Posición'), T('Nota')],
      rows: [
        [T('{ér}'), T('y / pero'), T('comienzo o medio'), T('decide el contexto')],
        [T('{dànshì}'), T('pero'), T('comienzo de la 2ª oración'), T('coma antes')],
        [T('{suǒyǐ}'), T('por lo tanto'), T('comienzo de la oración'), T('va antes del sujeto')],
        [T('{yīnwèi}'), T('porque'), T('comienzo de la oración'), T('coma después')],
      ],
    },
    {
      caption: T('El orden que no se negocia'),
      head: [T('Paso'), T('Forma correcta'), T('Error del hablante de español')],
      rows: [
        [T('1º'), T('{yīnwèi} {wǒ} {lèi}'), T('{wǒ} {yīnwèi} {lèi}')],
        [T('2º'), T('{suǒyǐ} {wǒ} {bù} {qù}'), T('{wǒ} {suǒyǐ} {bù} {qù}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {我很累，但是我要去}, ¿qué conectivo es el "pero" explícito?'),
    options: [T('{而}'), T('{所以}'), T('{但是}'), T('{因为}')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Abra la oración con el conectivo: ____神爱世人'),
      answer: '因为',
    },
    {
      kind: 'match',
      prompt: T('Une el conectivo con su función'),
      pairs: [
        { a: T('{而}'), b: T('y o pero, según el contexto') },
        { a: T('{但是}'), b: T('pero explícito, con coma antes') },
        { a: T('{所以}'), b: T('por lo tanto, al comienzo de la oración') },
        { a: T('{因为}'), b: T('porque, al comienzo de la oración') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es el orden correcto para "estoy cansado, por lo tanto no voy"?'),
      options: [
        T('{wǒ} {lèi}, {suǒyǐ} {bù} {qù}'),
        T('{lèi} {wǒ}, {suǒyǐ} {bù} {qù}'),
        T('{suǒyǐ} {wǒ} {bù} {qù}'),
        T('{wǒ} {suǒyǐ} {bù} {qù}'),
      ],
      answer: 2,
    },
  ],
};
