import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('La gramática del italiano: un mapa'),
  subtitle: T('articolo, nome, aggettivo; verbo, complemento'),
  section: T('Lectura y sintaxis'),
  body: C(`## La frase nominal y la frase verbal

Toda frase nominal italiana tiene **artículo** y **nombre**, en ese orden, y el artículo es lo que determina. Después viene el **adjetivo**, que concuerda en género y número: «{il} {libro} {nuovo}», «{i} {libri} {nuovi}», «{la} {casa} {grande}», «{le} {case} {grandi}». Y puede venir un **genitivo**, que es {di} más un nombre sin artículo: «{il} {libro} {di Paolo}», «{la} {luce} {della} {lampada}».

Toda frase verbal tiene **verbo** y puede tener **complemento**, y el complemento va después: {verbo} + {complemento}, «{leggere} {il libro}», «{andare} {a} {Roma}». Lo que cambia la frase es el **modo** del verbo: el indicativo dice lo que pasa, el subjuntivo dice lo que se supone, y la preposición resuelve el resto.

## {a} e {in} para lugar, {di} e {da} para origen

Cuatro preposiciones se reparten en dos pares, y la distinción es siempre la misma: **dirección** contra permanencia, origen contra procedencia.

**{a}** es dirección, {in} es permanencia: «vado {a} {casa}» (voy a casa), «sono {in} {casa}» (estoy en casa). En italiano, con lugar geográfico, {a} sigue valiendo: «vado {a} {Roma}», «vado {a} {lavoro}».

**{di}** es origen sin punto de partida marcado, {da} es origen *desde* un punto o de un agente: «vengo {da} {Italia}» (vengo de Italia), «vengo {di} {Milano}» (vengo de Milán, o soy milanés). Y «fu scritto {da} {Giovanni}» solo existe con {da}: el agente es una persona que actúa *desde* algún sitio.

## Las mismas palabras en funciones distintas

Lo que más atasca en italiano no es el vocabulario: es {la}, {il}, {che}, {a} y {di} apareciendo en papeles distintos sin cambiar de forma.

{La} es artículo en «{la} {casa}» y pronombre enfático en «{la} {vedo}». {Il} es artículo en «{il} {libro}» y artículo de vuelta en una relativa: «{il} {cui nome}», «{il} {quale}». {Che} es relativo en «{il} {libro} {che leggo}» e interrogativo en «{Che} {dice?}». {Di} es preposición en «{di} {Paolo}» y nombre de acción en «{il} {cantare}», «{il} {leggere}». {Da} es preposición en «{da} {Roma}» y perifrasis en «{da} {leggere}», que significa «para ser leído», no «de una lectura».

## En la Biblia

Jn 1:1 es una frase nominal y una frase verbal superpuestas: «{In} {principio} {era} {la} {Parola}». {In} es preposición, {principio} es sustantivo sin artículo porque es abstracto, {era} es verbo, {la} es artículo y {Parola} es el núcleo. Traducir {in} por «dentro» y {principio} por «un comienzo» desmonta la frase.

Jn 1:3 añade lo que el mapa necesita mostrar: «{Tutto} per lui è stato fatto, e senza di lui non è stato fatto nulla di ciò che esiste». {Tutto} es pronombre sin artículo, {nulla} es indefinido, y {ciò che esiste} es una relativa en que el relativo {che} hace de sujeto: {esiste} es el verbo y {ciò} es lo que existe.

## Criterio de lectura

Marca en el texto el artículo de cada sustantivo y el modo de cada verbo. Donde haya nombre sin artículo, pregunta si es nombre propio, numeral o indirecto; donde haya verbo en subjuntivo, pregunta si hay {che}, {se} o {non} cerca, porque son ellos los que atraen el subjuntivo.`),
  vocab: [
    V('articolo', 'articolo', 'artículo'),
    V('nome', 'nome', 'nombre'),
    V('aggettivo', 'aggettivo', 'adjetivo'),
    V('genitivo', 'genitivo', 'genitivo'),
    V('verbo', 'verbo', 'verbo'),
    V('soggetto', 'soggetto', 'sujeto'),
    V('complemento', 'complemento', 'complemento'),
    V('preposizione', 'preposizione', 'preposición'),
    V('a', 'a', 'a (dirección)'),
    V('in', 'in', 'en (permanencia)'),
    V('di', 'di', 'de'),
    V('da', 'da', 'de (origen, agente)'),
    V('principio', 'principio', 'principio'),
    V('Parola', 'parola', 'Palabra'),
    V('tutto', 'tutto', 'todo'),
    V('nulla', 'nulla', 'nada'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué frase indica permanencia y no dirección?'),
    options: [T('Vado a casa.'), T('Sono in casa.'), T('Vado a Roma.'), T('Vado al lavoro.')],
    answer: 1,
    hint: T('In marca el lugar donde se está.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Cómo se dice «el libro de Pablo»?'),
      options: [
        T('il libro di Paolo'),
        T('il libro da Paolo'),
        T('il libro a Paolo'),
        T('il libro in Paolo'),
      ],
      answer: 0,
      hint: T('La posesión es di; da se queda con origen y agente.'),
    },
    {
      kind: 'choose',
      prompt: T('En «da leggere», ¿qué significa?'),
      options: [T('de una lectura'), T('para ser leído'), T('leyendo'), T('de quien lee')],
      answer: 1,
      hint: T('Da más el participio es la pasiva.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa el genitivo: la luce ___ lampada (de)'),
      answer: 'della',
      hint: T('Di + la se funde.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Toda frase nominal tiene artículo y nombre; un nombre sin artículo es nombre propio, numeral o indirecto.',
      ),
    },
    {
      n: '2',
      text: T(
        'El genitivo es di más un nombre, y ese nombre nunca lleva artículo: il libro di Paolo.',
      ),
    },
    { n: '3', text: T('A marca dirección, in marca permanencia: vado a casa / sono in casa.') },
    {
      n: '4',
      text: T(
        'Da marca origen desde un punto y agente: vengo dall’Italia, fu scritto da Giovanni.',
      ),
    },
    {
      n: '5',
      text: T('La, il, che, di y da cambian de función sin cambiar de forma; decide la posición.'),
    },
  ],
  notes: [
    {
      label: T('Nombre sin artículo'),
      text: T(
        'El artículo falta en cuatro casos: nombre propio ({Dio}, {Milano}), numeral ({tre libri}), indirecto que ya hace su papel ({ogni uomo}, {qualche libro}) y sustantivo abstracto en registro poético ({principio}, {verità}). Fuera de eso, la omisión suena a error.',
      ),
    },
    {
      label: T('Nombre que viene de un verbo'),
      text: T(
        'Un verbo puede volverse sustantivo: {il} {movimento}, {la} {costruzione}, {il} {pagamento}, {la} {lettura}, {il} {camminare}. En ese caso el {di} de la preposición se vuelve nombre de acción: «il modo di pensare», «le braccia della croce». El contexto dice si el sustantivo es la cosa o el acto.',
      ),
    },
  ],
  examples: [
    { text: 'Il libro nuovo di Paolo.', gloss: T('El libro nuevo de Pablo.') },
    { text: 'I libri nuovi della classe.', gloss: T('Los libros nuevos de la clase.') },
    { text: 'La luce della lampada.', gloss: T('La luz de la lámpara.') },
    { text: 'Vado a casa.', gloss: T('Voy a casa.') },
    { text: 'Sono in casa.', gloss: T('Estoy en casa.') },
    { text: 'Vengo da Italia.', gloss: T('Vengo de Italia.') },
    { text: 'Il Vangelo fu scritto da Giovanni.', gloss: T('El Evangelio fue escrito por Juan.') },
    { text: 'Un libro da leggere.', gloss: T('Un libro para leer.') },
    { text: 'Il cantare è la preghiera.', gloss: T('El cantar es la oración.') },
    { text: 'Ciò che esiste.', gloss: T('Lo que existe.') },
  ],
  tables: [
    {
      caption: T('La frase nominal'),
      head: ['Pieza', 'Función', 'Esempio'],
      rows: [
        ['articolo', 'determina', 'il libro'],
        ['nome', 'nucleo', 'libro'],
        ['aggettivo', 'qualifica', 'libro nuovo'],
        ['genitivo', 'especifica', 'libro di Paolo'],
        ['numeral', 'conta', 'tre libri'],
      ],
    },
    {
      caption: T('La frase verbal'),
      head: ['Pieza', 'Función', 'Esempio'],
      rows: [
        ['verbo', 'núcleo', 'leggere'],
        ['soggetto', 'quién actúa', 'Maria'],
        ['complemento directo', 'lo que se alcanza', 'il libro'],
        ['complemento indirecto', 'a quién', 'a Paolo'],
        ['complemento avverbiale', 'dónde, cuándo, cómo', 'a casa'],
        ['predicativo', 'identifica', 'è medico'],
      ],
    },
    {
      caption: T('La misma palabra en funciones distintas'),
      head: ['Parola', 'Función 1', 'Función 2'],
      rows: [
        ['la', 'artículo (la casa)', 'pronombre (la vedo)'],
        ['il', 'artículo (il libro)', 'artículo en relativa (il cui nome)'],
        ['che', 'relativo (che leggo)', 'interrogativo (Che dice?)'],
        ['a', 'preposición (a casa)', 'verbo avere (a = tiene)'],
        ['di', 'preposición (di Paolo)', 'nombre de acción (il cantare)'],
        ['da', 'preposición (da Roma)', 'pasiva (da leggere)'],
      ],
    },
  ],
};
