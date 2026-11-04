import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('El adverbio: no se flexiona'),
  subtitle: T(
    '{bene} es igual en la primera y en la décima persona — la palabra más estable del latín',
  ),
  section: T('Adverbio'),
  body: C(`## Una palabra sin caso

El adverbio latino es la única parte de la cláusula que no se flexiona. {bene} es igual en {ego bene cantō}, en {cantās bene} y en {cantāmus bene}: no tiene género, no tiene número, no tiene persona. El sustantivo cambiaría de caso en cada una de esas tres frases y el verbo cambiaría de persona; el adverbio atraviesa las tres sin cambiar una letra.

Quien viene del português echa algo de menos. Un solo {bene} vale para {puella bene canit} y para {puellae bene canunt}, y esa economía es lo que permite escribir la Vulgata con dos palabras donde el portugués escribe cuatro. Un adverbio latino puede además modificar la cláusula entera en vez de una palabra: en {bene omnia fecit}, el {bene} no se pega a ningún verbo concreto, califica lo que se hizo.

## Tres maneras de formarlo

La regla práctica es una, con dos excepciones. El adjetivo de primera y segunda declinación se vuelve adverbio cambiando la desinencia por {ē}: {doctus} da {doctē}, {pulcher} da {pulchrē}, {firmus} da {firmē}, {miser} da {misē}. El adjetivo de tercera declinación usa {iter}: {celer} da {celeriter}, {fortis} da {fortiter}, {fidēlis} da {fidēliter}. Y el par más frecuente del latín no sigue ninguno de los dos: {bonus} da {bene} y {malus} da {male}.

| Adjetivo | Adverbio | Glosa |
|---|---|---|
| {doctus} | {doctē} | sabiamente |
| {pulcher} | {pulchrē} | hermosamente |
| {firmus} | {firmē} | con firmeza |
| {miser} | {misē} | miseramente |
| {bonus} | {bene} | bien |
| {malus} | {male} | mal |
| {celer} | {celeriter} | deprisa |
| {fortis} | {fortiter} | con fuerza |

El comparativo y el superlativo son regulares y entran en la misma cuenta: {fortiter}, {fortius}, {fortissimē}. El latín lo hace sin ninguna marca, al contrario del portugués, que necesita «más» y «lo más».

| Base | Comparativo | Superlativo |
|---|---|---|
| {bene} | {melius} | {optime} |
| {male} | {peius} | {pessime} |
| {fortiter} | {fortius} | {fortissimē} |
| {facile} | {facilius} | {facillimē} |
| {amplē} | {amplius} | {amplissimē} |
| {graviter} | {gravius} | {gravissimē} |

Fíjese en {facilius} y {facillimē}: el superlativo latino tiene {illim}, y en {facillimē} y {difficillimē} ese {il} aparece junto al comparativo en {ius}. Quien traduce literalmente escribe «más fácil» y «lo más facilísimo», y se equivoca en las dos.

## Dónde va el adverbio

La posición del adverbio es lo único del latín que el alumno suele tratar como libre y no lo es. El adverbio de modo suele ir pegado al verbo que califica, {cantāre pulchrē}, o justo antes, {pulchrē cantāre}. El adverbio de cantidad suele ir después del verbo. Y la negación {nōn} se coloca inmediatamente delante de lo que niega: {nōn bene} es «no bien», {bene nōn} no es uso corriente.

Los adverbios se clasifican por la pregunta a que responden, y la pregunta es la mejor manera de saber qué palabra tienes delante:

| Clase | Pregunta | Adverbios |
|---|---|---|
| de modo | ¿cómo? | {ita}, {sīc}, {aliter}, {fere} |
| de cantidad | ¿cuánto? | {satis}, {nimis}, {valde}, {parum}, {tantum} |
| de lugar | ¿dónde? | {hic}, {ibi}, {istinc}, {illinc} |
| de tiempo | ¿cuándo? | {hodie}, {herī}, {cras}, {iam}, {mox}, {tunc}, {semper} |
| de negación | ¿no? | {nōn}, {haud}, {nē} |
| de número | ¿cuántas veces? | {semel}, {bis}, {ter} |

{satis bene} significa «más o menos bien», y {nimis} significa «demasiado»: los dos miden, no califican. Un adverbio de cantidad es la manera más común que tiene el latín de decir «un poco», y el portugués casi siempre necesita un adjetivo para eso.

## Semper gaudete

En 1 Tesalonicenses 5:16-18 la Vulgata da tres instrucciones en tres versículos, y cada una se sostiene en un adverbio: {semper gaudete}, {sine intermissione orate}, {in omnibus gratias agite}. Tres adverbios en tres frases, y las tres frases son simples.

{semper} no se flexiona: «siempre», con todo el peso de un adverbio y ninguna marca de persona. {sine intermissione} muestra el otro camino, el que el latín prefiere cuando el adverbio no existe como palabra: un sustantivo en ablativo detrás de {sine}, {cum}, {contra}, {propter}. {in omnibus} responde dónde, en todas las cosas.

El verbo de cada versículo está en imperativo, y la negación de un imperativo ya es un adverbio por sí mismo: {nōn timete} es literalmente «no temáis», con el {timete} en segunda persona y el {nōn} plantado justo delante.`),
  vocab: [
    V('bene', 'bene', 'bien (adv. invariable, de {bonus})'),
    V('male', 'male', 'mal (adv. invariable, de {malus})'),
    V('doctē', 'doctē', 'sabiamente (adv. de {doctus}, 2.ª decl.)'),
    V('pulchrē', 'pulchrē', 'hermosamente (adv. de {pulcher})'),
    V('celeriter', 'celeriter', 'deprisa (adv. en {iter}, de {celer})'),
    V('fortiter', 'fortiter', 'con fuerza (adv. de {fortis})'),
    V('satis', 'satis', 'bastante (adv. de cantidad)'),
    V('nimis', 'nimis', 'demasiado (adv. de cantidad)'),
    V('valde', 'valde', 'mucho (adv. de cantidad)'),
    V('parum', 'parum', 'poco (adv. de cantidad)'),
    V('semper', 'semper', 'siempre (adv. de tiempo)'),
    V('numquam', 'numquam', 'nunca (adv. de tiempo, negación dentro)'),
    V('hodie', 'hodie', 'hoy (adv. de tiempo)'),
    V('cras', 'cras', 'mañana (adv. de tiempo)'),
    V('mox', 'mox', 'pronto, en seguida (adv. de tiempo)'),
    V('statim', 'statim', 'inmediatamente (adv. de tiempo)'),
    V('ita', 'ita', 'así (adv. de modo y de consecuencia)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {puellae bene canunt}, ¿cuántas formas tiene el adverbio {bene}?'),
    options: [
      T('Una sola: {bene} no se flexiona, mientras el sujeto y el verbo sí'),
      T('Dos: una para el singular y otra para el plural'),
      T('Tres: una por persona del sujeto'),
      T('Cuatro: porque {puellae} exige la forma oblicua del adverbio'),
    ],
    answer: 0,
    hint: T('Regla §1: el adverbio latino no tiene caso, número ni persona.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué par se sale de las reglas regulares de formación del adverbio?'),
      options: [
        T('{bonus} → {bene} y {malus} → {male}, que son las dos excepciones'),
        T('{doctus} → {doctē} y {pulcher} → {pulchrē}, que siguen la regla del {ē}'),
        T('{celer} → {celeriter}, que sigue la regla de la tercera declinación'),
        T('{fortis} → {fortiter}, que sigue la regla del {iter}'),
      ],
      answer: 0,
      hint: T(
        'Regla §2: {ē} para la 1.ª y 2.ª, {iter} para la 3.ª; {bene} y {male} se quedan fuera.',
      ),
    },
    {
      kind: 'fill',
      prompt: T('Complete el superlativo de {fortiter}: «con más fuerza» es ___'),
      answer: 'fortissimē',
      hint: T('El superlativo de adverbio en {iter} gana {issimē}.'),
    },
    {
      kind: 'fill',
      prompt: T('En {facilius} y {facillimē}, ¿qué se añade para llegar al superlativo? ___'),
      answer: 'il',
      hint: T('El superlativo latino tiene {illim}: {il} seguido de {lim}.'),
    },
    {
      kind: 'match',
      prompt: T('Relacione el adverbio con la clase que indica'),
      pairs: [
        { a: T('{hodie}'), b: T('tiempo') },
        { a: T('{valde}'), b: T('cantidad') },
        { a: T('{ita}'), b: T('modo') },
        { a: T('{mox}'), b: T('tiempo: «pronto»') },
      ],
      answer: [0, 1, 2, 3],
      hint: T('Regla §3: la clase del adverbio es la pregunta a que responde.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El adverbio latino es invariable: ninguna persona, ningún número, ningún caso, y por eso una sola forma cubre todo el sujeto.',
      ),
    },
    {
      n: '2',
      text: T(
        'Los adjetivos de 1.ª y 2.ª declinación forman adverbio en {ē} ({doctē}, {pulchrē}); los de 3.ª, en {iter} ({celeriter}, {fortiter}). {bene} y {male} son las dos excepciones que más usa la Vulgata.',
      ),
    },
    {
      n: '3',
      text: T(
        'Comparativo y superlativo de adverbio son regulares y sin marca: {melius}, {optime}, {facillimē}. El portugués necesita «más» y «lo más»; el latín no.',
      ),
    },
    {
      n: '4',
      text: T(
        'El adverbio responde a una pregunta de clase: cómo ({ita}), cuánto ({nimis}), dónde ({ibi}), cuándo ({mox}), cuántas veces ({bis}). Y {nōn} se coloca justo antes de lo que niega.',
      ),
    },
    {
      n: '5',
      text: T(
        'Cuando el adverbio no existe como palabra, el latín usa un ablativo: {sine intermissione orate} «orad sin interrupción», el mismo camino de {sine mora} y {sine fine}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué la Vulgata tiene más adverbios que el portugués'),
      text: T(
        'El portugués heredó del latín la invariabilidad del adverbio, pero multiplicó los sinónimos: «deprisa», «a toda prisa», «apresurado» cubren {celeriter}. El latín economiza y gasta esa economía en adverbios de negación y de grado, que es donde el texto bíblico necesita énfasis: {nōn}, {quidem}, {nēquīquam}, {frūstrā}. Quien busca en una traducción la palabra que se repite está buscando casi siempre un adverbio.',
      ),
    },
    {
      label: T('{bene} y {male}, los dos más frecuentes'),
      text: T(
        'Vienen de {bonus} y {malus}, pero no por la regla: {benē} y {malē} son las formas normales en Plauto y Cicerón, y {bene} y {male} sobrevivieron por ser más cortas y más fuertes. La lección de gramática es que existe un par de adverbios sin regla. La lección de lectura es que el par {male ... bene} forma un cuadro de oposición que atraviesa la Vulgata entera.',
      ),
    },
  ],
  examples: [
    { text: 'puella bene canit', gloss: T('la niña canta bien (una sola forma del adverbio)') },
    {
      text: 'puellae bene canunt',
      gloss: T('las niñas cantan bien (la misma forma del adverbio)'),
    },
    { text: 'doctē', gloss: T('sabiamente (de {doctus}, regla del {ē})') },
    { text: 'celeriter', gloss: T('deprisa (de {celer}, regla del {iter})') },
    { text: 'fortius', gloss: T('con más fuerza (comparativo, sin «más» escrito)') },
    {
      text: 'numquam',
      gloss: T('nunca (adverbio con la negación dentro: {numquam} = {nōn} umquam)'),
    },
    { text: 'facillimē', gloss: T('lo más fácilmente (superlativo con {illim})') },
    { text: 'satis bene', gloss: T('más o menos bien (cantidad + modo)') },
    { text: 'semper gaudete', gloss: T('regocijaos siempre (1 Tes 5:16)') },
    { text: 'nōn timete', gloss: T('no temáis (imperativo negativo: {nōn} + {timete})') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Adjetivo e advérbio: duas regras e uma exceção'),
      head: [T('Adjetivo'), T('Advérbio'), T('Regra'), T('Glosa')],
      rows: [
        ['{doctus}', '{doctē}', '1.ª e 2.ª declinação → {ē}', 'sabiamente'],
        ['{pulcher}', '{pulchrē}', '1.ª e 2.ª declinação → {ē}', 'belamente'],
        ['{miser}', '{misē}', '1.ª e 2.ª declinação → {ē}', 'miseramente'],
        ['{celer}', '{celeriter}', '3.ª declinação → {iter}', 'depressa'],
        ['{fortis}', '{fortiter}', '3.ª declinação → {iter}', 'com força'],
        ['{fidēlis}', '{fidēliter}', '3.ª declinação → {iter}', 'com fidelidade'],
        ['{bonus}', '{bene}', 'irregular', 'bem'],
        ['{malus}', '{male}', 'irregular', 'mal'],
      ],
    },
    {
      caption: T('Tabela 2 — Comparativo e superlativo de advérbio'),
      head: [T('Positivo'), T('Comparativo'), T('Superlativo'), T('Português')],
      rows: [
        ['{bene}', '{melius}', '{optime}', 'bem / melhor / o melhor'],
        ['{male}', '{peius}', '{pessime}', 'mal / pior / o pior'],
        ['{fortiter}', '{fortius}', '{fortissimē}', 'com força / mais forte / o mais forte'],
        ['{facile}', '{facilius}', '{facillimē}', 'facilmente / mais fácil / o mais fácil'],
        ['{amplē}', '{amplius}', '{amplissimē}', 'amplamente / mais amplo / o mais amplo'],
        ['{graviter}', '{gravius}', '{gravissimē}', 'pesadamente / mais grave / o mais grave'],
      ],
    },
    {
      caption: T('Tabela 3 — Advérbios por classe, com a pergunta que os define'),
      head: [T('Classe'), T('Pergunta'), T('Formas da Vulgata')],
      rows: [
        [T('modo'), T('como?'), T('{ita}, {sīc}, {aliter}, {fere}')],
        [T('quantidade'), T('quanto?'), T('{satis}, {nimis}, {valde}, {parum}, {tantum}')],
        [T('lugar'), T('onde?'), T('{hic}, {ibi}, {istinc}, {illinc}')],
        [T('tempo'), T('quando?'), T('{hodie}, {herī}, {cras}, {iam}, {mox}, {tunc}, {semper}')],
        [T('negação'), T('não?'), T('{nōn}, {haud}, {nē}')],
        [T('número'), T('quantas vezes?'), T('{semel}, {bis}, {ter}')],
      ],
    },
  ],
};
