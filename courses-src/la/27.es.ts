import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('Adverbio, numeral y partícula'),
  subtitle: T('{enim}, {autem}, {quoque}: las palabras que no significan solas y lo cambian todo'),
  section: T('Adverbio'),
  body: C(`## Partículas: ni sujeto ni verbo

Una partícula latina no es una abreviatura ni un resto de sintaxis. Es una palabra sin lexema, que no vale por sí misma y solo gana sentido unida a otra. {autem} no significa nada aislada: significa «pero» porque viene justo después de un verbo y marca que lo que sigue contradice lo dicho antes. Quite {autem} de una frase y la gramática no cambia; el argumento sí.

Lo que caracteriza a la partícula es la posición. La partícula latina es **pospositiva** o **enclítica**: viene después de la palabra a la que se liga, o pegada a ella.

| Partícula | Posición | Valor | Ejemplo |
|---|---|---|---|
| {quoque} | enclítica, pegada | y también | {ipse quoque} |
| {igitur} | pospositiva, 2.ª | por tanto | {dixit igitur} |
| {autem} | pospositiva, 2.ª | pero | {audivit autem} |
| {enim} | pospositiva, 2.ª | pues | {scimus enim} |
| {tamen} | flexible | aun así | {tamen non} |
| {ita} | libre | así | {ita est} |
| {itaque} | pospositiva | y así | {itaque venit} |

El orden canónico es verbo, partícula, resto. En {scimus autem quia ...}, {scimus} va primero y {autem} inmediatamente después; por eso quien no conoce el latín tiende a poner el «pero» al principio de la frase y destruye el orden del argumento.

## Un numeral que se volvió adverbio

Los ordinales nacen de los cardinales y algunos se vuelven adverbio sin flexión alguna. {prīmum} es «por primera vez» y también «primero de todo»; {deinde} es «después»; {iterum} y {rursus} son «otra vez»; {denique} y {novīssimē} son «finalmente»; {tandem} es «por fin». La misma familia tiene los multiplicativos: {semel} «una vez», {bis} «dos veces», {ter} «tres veces», {quater} «cuatro veces». Y hay un adverbio numeral que es casi un verbo: {plūs}, «más», en el sentido de «en mayor número».

El numeral aparece también como medida, y por eso la Vulgata escribe {annōs quīnquagintā} donde el portugués escribe «cinquenta años»: acusativo de extensión, sin preposición y sin adverbio alguno.

## La negación elíptica de Pablo

La partícula que mejor explica la Vulgata es {nōn}, porque en Pablo aparece elíptica: sola, sin verbo y a veces sin sujeto, valiendo por «no es el caso que», «de ninguna manera», «ni pensarlo». El lector portugués espera una palabra por idea y encuentra una sola negación; lo que niega es a veces la conclusión misma que el lector estaba dispuesto a aceptar.

| Construcción | Latín | Portugués |
|---|---|---|
| negación simple | {nōn} | não |
| negación de una inferencia | {nōn} (solo) | não é o caso que |
| negación del imperativo | {nē} | não (imperativo) |
| negación reforzada | {nēmō}, {nēnōn} | de modo algum |
| «não, e ainda» | {nē ... quidem} | certamente não |
| nem X nem Y | {nec ... nec} | nem X nem Y |
| negação dupla | {nōn ... nōn} | nem, de modo algum |

{nē ... quidem} es el par que más intriga: {quidem} significa «ciertamente», y la negación va delante, de modo que la frase es una afirmación que se deshace. En 1 Timoteo 4:12 el latín escribe {nēmōne neglexeris iuventūtis tuae}, literalmente «de ninguna manera desprecies tu juventud»: hay dos negaciones, y la palabra de refuerzo es {mō}, el propio {mō} de {nēmō} = «de modo algum». El portugués entiende «no desprecies»; el latín entiende «no desprecies de ninguna manera», y la fuerza está en el adverbio, no en el verbo.

La construcción más productiva de todas es la corrección con {sed}: {nōn ... sed} y {nōn ... sed etiam}, «no solo X, sino también Y». Romanos 1:16 trae la construcción: {primum Iudaeō, deinde et Graecō}.

## Romanos 1:16

> **Non enim erubesco evangelium Dei: virtus enim Dei est ad salutem omni credenti, primum Iudaeo, deinde et Graeco.**

Son cinco señales en una sola frase: {nōn} abre, {enim} explica justo después del verbo, el segundo {enim} explica el poder, {primum} y {deinde} marcan el orden del destinatario. Fíjese en que {Non enim erubesco} y {virtus enim Dei est} son la misma construcción repetida, y que la repetición es el argumento: Pablo no se avergüenza, porque el poder de Dios es para la salvación.

Quien traduce palabra por palabra escribe «não porque me envergonho do evangelho de Deus: porque o poder de Deus é para a salvação de todo aquele que crê, primeiro do judeu, também do grego». Quien entiende las partículas escribe «não me envergonho do evangelho de Deus, pois o poder de Deus é para salvação de todo aquele que crê, primeiro o judeu, também o grego». A diferença está na posição da justificativa: no latim o «porque» é uma partícula presa ao verbo, e por isso não pode vir para o começo.`),
  vocab: [
    V('enim', 'enim', 'pues (partícula pospositiva, 2.ª posição)'),
    V('autem', 'autem', 'pero (partícula pospositiva)'),
    V('igitur', 'igitur', 'por tanto (partícula pospositiva)'),
    V('itaque', 'itaque', 'y así (partícula pospositiva)'),
    V('quoque', 'quoque', 'y también (enclítica, {que} pospuesta)'),
    V('tamen', 'tamen', 'aun así (adverbio y partícula, posición flexible)'),
    V('ita', 'ita', 'así (adv. de consecuencia y de comparación)'),
    V('quidem', 'quidem', 'ciertamente (enclítica: con {nē} da «ciertamente não»)'),
    V('nēmōne', 'nēmōne', 'de nenhuma maneira (adv. de negação)'),
    V('prīmum', 'primum', 'primeiro (adv., de {prīmus})'),
    V('deinde', 'deinde', 'depois, em seguida (adv., de {secundus})'),
    V('iterum', 'iterum', 'outra vez (adv. numeral)'),
    V('denique', 'denique', 'finalmente (adv. numeral)'),
    V('semel', 'semel', 'uma vez (adv. numeral)'),
    V('bis', 'bis', 'duas vezes (adv. numeral)'),
    V('ter', 'ter', 'três vezes (adv. numeral)'),
    V('sine', 'sine', 'sem (preposição com ablativo)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Non enim erubesco evangelium Dei}, qual é a função de {enim}?'),
    options: [
      T('Partícula pospositiva: explica a razão de {nōn} e se liga ao verbo {erubesco}'),
      T('Adverbio de tempo: «então não me envergonho»'),
      T('Conjunção que abre uma oração subordinada'),
      T('Verbo auxiliar do futuro: «não estes envergonhando»'),
    ],
    answer: 0,
    hint: T('Regra §1: uma partícula é pospositiva, e {enim} significa «pois».'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {nēmōne neglexeris iuventūtis tuae}, quantas negações há e por quê?'),
      options: [
        T('Duas: o {nē} do imperativo e o {mō} do advérbio {nēmō}, que reforça'),
        T('Uma: só o {nē} inicial'),
        T('Três: {nē}, {mō} e {nōn}'),
        T('Nenhuma: {neglexeris} já é negativo'),
      ],
      answer: 0,
      hint: T('Regra §3: {nēmō} é o advérbio «de modo algum», que se soma ao {nē} do imperativo.'),
    },
    {
      kind: 'fill',
      prompt: T(
        'Em Romanos 1:16, {primum Iudaeō, deinde et Graecō}: «primeiro o judeu, ___ o grego» é ___',
      ),
      answer: 'et',
      hint: T('A correção final usa {et} para acrescentar sem repetir o substantivo.'),
    },
    {
      kind: 'fill',
      prompt: T('Qual partícula significa «mas» e é pospositiva? ___'),
      answer: 'autem',
      hint: T('{autem} vem depois do verbo e marca contraste.'),
    },
    {
      kind: 'match',
      prompt: T('Relacione a partícula ao seu valor'),
      pairs: [
        { a: T('{enim}'), b: T('pois (razão)') },
        { a: T('{autem}'), b: T('mas (contraste)') },
        { a: T('{igitur}'), b: T('portanto (consequência)') },
        { a: T('{quidem}'), b: T('certamente (com {nē}: «certamente não»)') },
      ],
      answer: [0, 1, 2, 3],
      hint: T('Regla §1: la segunda posición después del verbo es suya.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Partícula é pospositiva ou enclítica: {scimus autem}, {ipse quoque}. A ordem canônica é verbo, partícula, resto.',
      ),
    },
    {
      n: '2',
      text: T(
        '{enim} = «pois» (razão), {autem} = «mas» (contraste), {igitur} = «portanto» (consequência), {quoque} = «e também», {tamen} = «ainda assim». Nenhuma vale sozinha.',
      ),
    },
    {
      n: '3',
      text: T(
        'A negação é flexível: {nōn} no indicativo, {nē} no imperativo, {nēquīquam} e {frūstrā} como advérbios, {nec} = «nem». E {nē ... quidem} = «certamente não».',
      ),
    },
    {
      n: '4',
      text: T(
        'O numeral serve de advérbio em {prīmum}, {deinde}, {iterum}, {rursus}, {denique}, e de multiplicativo em {semel}, {bis}, {ter}, {quater}.',
      ),
    },
    {
      n: '5',
      text: T(
        'A correção com {sed} e {et} é o motor da prosa de Paulo: {nōn ... sed}, {nōn ... sed etiam} = «não apenas X, mas também Y».',
      ),
    },
  ],
  notes: [
    {
      label: T('A partícula explica a ordem dos termos'),
      text: T(
        'Como a partícula é pospositiva, ela trava a ordem: em {Non enim erubesco}, a negação vem primeiro, o verbo em segundo, a partícula em terceiro. Uma tradução que inverte essa ordem perde o_realce, porque em latim a negação enfatiza a voz de quem fala e a conjunção explica o motivo. É a diferença entre «não me envergonho do evangelho» e «do evangelho não me envergonho»: o latim dá a razão no segundo caso, e o grego faz o mesmo.',
      ),
    },
    {
      label: T('Advérbio que vem do numeral, numeral que vem do advérbio'),
      text: T(
        '{iterum} é um advérbio numeral, mas numa frase como {iterum deinde} parece advérbio comum: o latim tem poucas palavras para o ordinal e muitas para o advérbio, e {primum}, {deinde}, {rursus} vivem na fronteira dos dois campos. Por isso Paulo escreve {iterum, deinde et rursus} «novamente, portanto, e ainda outra vez»: três palavras latinas para três advérbios simples em português, e nenhum deles flexiona.',
      ),
    },
  ],
  examples: [
    {
      text: 'Non enim erubesco evangelium Dei',
      gloss: T('não me envergonho do evangelho de Deus (Rm 1:16: {nōn} + {enim})'),
    },
    { text: 'scimus autem quia', gloss: T('sabemos pois que ({autem} marca o contraste)') },
    {
      text: 'dixit igitur',
      gloss: T('disse então ({igitur} = «portanto» ou «então», conforme o contexto)'),
    },
    { text: 'ipsē quoque', gloss: T('ele mesmo também ({quoque} enclítica)') },
    {
      text: 'nēmōne neglexeris iuventūtis tuae',
      gloss: T('de nenhuma maneira desprezes a tua juventude (1 Tm 4:12)'),
    },
    { text: 'nē ... quidem', gloss: T('certamente não ({quidem} enclítica atrás de {nē})') },
    { text: 'nōn solum sed etiam', gloss: T('não apenas, mas também') },
    {
      text: 'primum Iudaeō, deinde et Graecō',
      gloss: T('primeiro o judeu, também o grego (Rm 1:16)'),
    },
    { text: 'ter mortuus est', gloss: T('morreu três vezes ({ter}, multiplicativo)') },
    {
      text: 'iterum et deinde rursus',
      gloss: T('de novo, e depois outra vez (três advérbios, um deles numeral)'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Partículas y adverbios conectivos'),
      head: [T('Palabra'), T('Posición'), T('Valor'), T('Ejemplo')],
      rows: [
        ['{quoque}', 'enclítica', 'e também', '{ipse quoque}'],
        ['{igitur}', 'pós-positiva, 2.ª', 'portanto', '{dixit igitur}'],
        ['{autem}', 'pós-positiva, 2.ª', 'porém', '{audivit autem}'],
        ['{enim}', 'pós-positiva, 2.ª', 'pois', '{scimus enim}'],
        ['{tamen}', 'flexível', 'ainda assim', '{tamen non}'],
        ['{ita}', 'livre', 'assim', '{ita est}'],
        ['{itaque}', 'pós-positiva', 'e assim', '{itaque venit}'],
        ['{quidem}', 'enclítica', 'certamente', '{nē quidem}'],
      ],
    },
    {
      caption: T('Tabla 2 — Numeral en función de adverbio'),
      head: [T('Forma'), T('Del numeral'), T('Glosa'), T('Dónde')],
      rows: [
        ['{prīmum}', '{prīmus}', 'primeiro, em primeiro lugar', 'ordenação'],
        ['{deinde}', '{secundus}', 'depois, em seguida', 'sequência'],
        ['{iterum}', '{iterum}', 'de novo', 'repetição'],
        ['{rursus}', '{rursus}', 'outra vez, de novo', 'repetição'],
        ['{denique}', '{dēnique}', 'finalmente', 'fecho'],
        ['{semel}', '{semel}', 'uma vez', 'multiplicativo'],
        ['{bis}', '{duo}', 'duas vezes', 'multiplicativo'],
        ['{ter}', '{trēs}', 'três vezes', 'multiplicativo'],
        ['{quater}', '{quattuor}', 'quatro vezes', 'multiplicativo'],
      ],
    },
    {
      caption: T('Tabla 3 — Las cinco formas de la negación'),
      head: [T('Latín'), T('Portugués'), T('Dónde aparece'), T('Ejemplo')],
      rows: [
        ['{nōn}', 'não', 'indicativo, orações', '{nōn} timeō'],
        ['{nē}', 'não', 'imperativo, final negativa', '{nē} neglexeris'],
        ['{nēquīquam}', 'em vão, de nada', 'advérbio', '{nēquīquam} laborāre'],
        ['{nēmō}', 'de modo algum', 'reforça a negação', '{nēmō} timeō'],
        ['{nec}', 'nem', 'liga duas negações', '{nec} ... {nec}'],
        ['{frūstrā}', 'em vão', 'advérbio', '{frūstrā} laborāre'],
      ],
    },
  ],
};
