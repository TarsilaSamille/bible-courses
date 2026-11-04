import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('El Perfekt'),
  subtitle: T('haben e ist más el participio, y el orden de las palabras'),
  section: T('Los verbos'),
  body: C(`## La fórmula

El Perfekt es el único tiempo pasado que el alemán construye de fuera hacia dentro: primero el auxiliar (*haben* o *ist*) en segunda posición, el participio al final, todo lo demás en medio. *Ich habe den ganzen Tag gearbeitet*. Cambia el auxiliar y toda la frase cambia de sentido sin que se mueva nada más.

La elección del auxiliar es semántica. **haben** marca un proceso que el sujeto ejecuta y del que responde: *Wir haben das Buch übersetzt*. **ist** marca desplazamiento, cambio de estado o algo que le ocurre a alguien: *Der Brief ist angekommen*. No hay un criterio puramente gramatical: lo que decide es si el sujeto es agente o paciente.

## El participio

El participio sigue cuatro patrones de formación, y todos son regulares:

- **débil**, con la terminación *-t* y la -en del infinitivo: *machen → gemacht*, *lernen → gelernt*, *suchen → gesucht*;
- **fuerte**, cuando el verbo tiene alternancia vocálica: *sprechen → gesprochen*, *lesen → gelesen*, *nehmen → genommen*;
- **mixto**, con la terminación *-en* tras un adjetivo corto: *stark gemalt*, *hell gebrannt*;
- **sin participio**, cuando el verbo es inseparable o termina en *-ieren*: *verstehen → verstanden*, *studieren → studiert*, *passieren → passiert*.

Los verbos separables recuperan el prefijo: *anrufen → angerufen*, *aufstehen → aufgestanden*. El *ge-* se mete entre el radical y la terminación, y la vocal del prefijo se armoniza cuando se puede: *sprechen → gesprochen*, *lesen → gelesen*.

## Qué hace la posición

El Perfekt es una forma de segunda posición, como el presente. El auxiliar hereda la plaza del verbo conjugado y el participio va al final, después de cualquier elemento no finito: *Ich habe es gestern nicht geschafft*. Si hay una segunda parte de la oración separada por coma, el auxiliar vuelve al final de esa parte: *Er ist ins Haus gegangen, hat aber niemanden gesehen*.

Y la posición revela el tiempo. Compara *Ich habe das Buch gelesen* (acción cerrada cuyo resultado se ve ahora) con *Ich lese das Buch* (acción en curso). El tiempo verbal es el tiempo de la sintaxis.

## Lo esencial

El Perfekt no es un pasado lejano: es un pasado **cerrado** visto desde el presente. El auxiliar dice si el sujeto actuó o fue alcanzado; el participio cierra la oración; el resultado sigue siendo válido ahora.`),
  vocab: [
    V('haben', 'haben', 'auxiliar del Perfekt con acción'),
    V('ist', 'sein', 'auxiliar del Perfekt con desplazamiento o estado'),
    V('gelesen', 'lesen', 'leído (participio fuerte)'),
    V('gesprochen', 'sprechen', 'hablado (participio fuerte)'),
    V('gemacht', 'machen', 'hecho (participio débil en -t)'),
    V('verstanden', 'verstehen', 'entendido (inseparable, sin ge-)'),
    V('angerufen', 'anrufen', 'llamado por teléfono (prefijo recuperado)'),
    V('aufgestanden', 'aufstehen', 'levantado (separable con ist)'),
    V('stark gemalt', 'malen', 'pintado con fuerza (participio mixto)'),
    V('übersetzt', 'übersetzen', 'traducido (inseparable, sin ge-)'),
    V('Ich habe den ganzen Tag gearbeitet.', 'arbeiten', 'Trabajé todo el día.'),
    V('Der Brief ist angekommen.', 'ankommen', 'La carta llegó (desplazamiento).'),
    V('Was ich euch geboten habe', 'bieten', 'lo que os he mandado (Mt 28:20)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Der Brief ___ angekommen}, ¿qué auxiliar entra?'),
    options: [
      T('ist, porque el sujeto es paciente de la acción'),
      T('hat, porque el participio termina en -en'),
      T('wird, porque el verbo es débil'),
      T('bleibt, porque es un movimiento corto'),
    ],
    answer: 0,
    hint: T('Regla §2: quien no actúa lleva ist.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Participio de {sprechen}: ___'),
      answer: 'gesprochen',
      hint: T('El participio fuerte armoniza la vocal: sp → gespro-.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración está bien formada?'),
      options: [
        T('He recibido la carta.'),
        T('He recibido la carta (ge- espurio).'),
        T('Yo la carta recibido.'),
        T('Yo la carta recibido (auxiliar erróneo).'),
      ],
      answer: 0,
      hint: T('Regla §3: bekommen es inseparable, luego no hay ge-.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa la posición final: Ich habe das Buch gestern ___ (leer).'),
      answer: 'gelesen',
      hint: T('El participio cierra la oración, después de los complementos.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con su participio'),
      pairs: [
        { a: T('machen'), b: T('gemacht') },
        { a: T('verstehen'), b: T('verstanden') },
        { a: T('anrufen'), b: T('angerufen') },
        { a: T('studieren'), b: T('studiert') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El Perfekt tiene dos piezas y un orden: auxiliar en segunda posición, participio al final. Ich habe das Buch gestern nicht gelesen.',
      ),
    },
    {
      n: '2',
      text: T(
        'haben cuando el sujeto ejecuta la acción, ist cuando la acción o el estado le ocurre: Wir haben gearbeitet frente a Er ist gestorben.',
      ),
    },
    {
      n: '3',
      text: T(
        'El participio de los verbos inseparables no lleva ge-: verstehen → verstanden, übersetzen → übersetzt, gefallen → gefallen.',
      ),
    },
    {
      n: '4',
      text: T(
        'El participio de los modales es el propio infinitivo y ocupa la última posición: Ich habe kommen müssen, no *gekommen müssen*.',
      ),
    },
    {
      n: '5',
      text: T(
        'Con otro auxiliar al final de la proposición, el Perfekt parte la cláusula y repite el auxiliar: Ich habe ihn gesehen, und er hat mich erkannt.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué el Perfekt es la voz de la escritura'),
      text: T(
        'La historia del Perfekt es la historia de una palabra que antes era débil. En el alto Germánico antiguo, *haben* era todavía el único auxiliar; el *ist* del Perfekt aparece hacia el siglo IX. En el habla oral del sur de Alemania el Perfekt ha desaparecido casi por completo: allí se dice *ich habe gelesen* e *ich bin gelesen*, con el participio suelto. La forma escrita que fijó la escuela es la forma literaria, y por eso una historia escrita en alemán moderno suena enseguida a texto de estudio y no a conversación.',
      ),
    },
    {
      label: T('Lectura en Lutero'),
      text: T(
        'En las páginas de Lutero, el Perfekt aparece siempre que el narrador sale del narrado y vuelve al oyente: *und lehret sie halten alles, was ich euch geboten habe* (Mt 28:20), *und ich habe euch gesagt* (Jn 24:25). El Präteritum mete al oyente dentro de la escena; el Perfekt, con su auxiliar en segunda posición, lo devuelve al *ahora* de la narración. Es un recurso de teólogo, no de cronista.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ich habe den ganzen Tag gearbeitet.',
      gloss: T('Trabajé todo el día (auxiliar en segunda posición).'),
    },
    {
      text: 'Wir haben das Buch nicht übersetzt.',
      gloss: T('No traducimos el libro (inseparable sin ge-).'),
    },
    { text: 'Der Brief ist angekommen.', gloss: T('La carta llegó (ist: desplazamiento).') },
    {
      text: 'Er ist ins Haus gegangen, hat aber niemanden gesehen.',
      gloss: T('Entró en casa pero no vio a nadie (auxiliar repetido).'),
    },
    {
      text: 'Ich habe es gestern nicht geschafft.',
      gloss: T('No lo logré ayer (participio al final).'),
    },
    {
      text: 'Hat sie das Buch schon gelesen?',
      gloss: T('¿Ella ya ha leído el libro? (pregunta con el auxiliar primero).'),
    },
    { text: 'Ich habe kommen müssen.', gloss: T('Tuve que venir (doble infinitivo).') },
    {
      text: 'Und lehret sie halten alles, was ich euch geboten habe.',
      gloss: T('Y enseñadles a guardar todo lo que os he mandado (Mt 28:20).'),
    },
    {
      text: 'Wann hast du das Buch bekommen?',
      gloss: T('¿Cuándo recibiste el libro? (inseparable sin ge-).'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Cuatro patrones de formación del participio'),
      head: [T('Patrón'), T('Débil'), T('Fuerte'), T('Mixto'), T('Sin participio')],
      rows: [
        [
          'verbo simples',
          'machen → gemacht',
          'sprechen → gesprochen',
          'stark → stark gemalt',
          'verstehen → verstanden',
        ],
        ['verbo com -ieren', '—', '—', '—', 'studieren → studiert'],
        ['separável', 'suchen → gesucht', 'anrufen → angerufen', '—', 'passieren → passiert'],
        ['inseparável be-, ge-, ver-', 'besuchen → besucht', '—', '—', 'bekommen → bekommen'],
        ['regra', 'ge- + radical + -t', 'ge- + radical + -en', 'ge- + radical + -en', 'sem ge-'],
      ],
    },
    {
      caption: T('Tabla 2 — Orden de las palabras en el Perfekt'),
      head: [T('Posición'), T('Lo que la ocupa'), T('Ejemplo')],
      rows: [
        ['1.ª', 'sujeito, elemento de tempo ou negação', 'Gestern habe ich lange geschlafen.'],
        ['2.ª', 'verbo conjugado (auxiliar do Perfekt)', 'Ich habe lange geschlafen.'],
        ['final', 'particípio + complementos', 'Ich habe lange geschlafen.'],
        ['meio', 'sujeito indireto, complementos', 'Ich habe das Buch nicht fertig gelesen.'],
        ['2.ª parte', 'novo auxiliar após a vírgula', 'Er ging fort, hat aber nichts gesagt.'],
      ],
    },
  ],
};
