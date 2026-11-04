import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Los verbos esenciales'),
  subtitle: T(
    '{andare}, {venire}, {fare}, {dire} y los demás que con ellos rigen casi toda oración',
  ),
  section: T('El nombre y el verbo'),
  body: C(`## Dos docenas de verbos, y cuatro sin regla

Un verbo italiano regular se conjuga por sufijo: en {parlo}, {parli}, {parla}, el tema {parl-} queda fijo y solo cambia la terminación. Los esenciales no tienen tema fijo. {vado}, {vengo}, {faccio} y {dico} son cuatro formas que no produce nada, y lo mismo vale para {posso}, {devo}, {voglio}, {so} y {do}.

Son pocos y pesan mucho. {andare}, {venire}, {fare}, {dire}, {avere}, {essere}, {potere}, {dovere}, {volere}, {sapere}, {vedere}, {dare}, {prendere}, {mangiare}, {bere}, {dormire}, {morire}, {nascere}, {leggere}, {scrivere}, {parlare}, {ascoltare}, {vestire} y {guardare} cubren casi todo lo que se dice en un capítulo de Evangelio. El resto de la lengua se construye encima de ellos.

Una regla decide por sí sola la forma de la mitad de las frases: en los verbos terminados en {-are}, la primera persona **pierde la {-o} final**. {parlo}, {guardo}, {mangio}, {ascolto}, {lavoro}. En los terminados en {-ere} y {-ire}, la {-o} **se queda**: {prendo}, {vivo}, {dormo}, {parto}. {Mangiare} sigue el primer grupo ({mangio}) y {dormire} el segundo ({dormo}), y el italiano no avisa cuál es cuál.

## {Andare} y {venire}: las dos series que se parecen

{andare} da {vado}, {vai}, {va}, {andiamo}, {andate}, {vanno}. {venire} da {vengo}, {vieni}, {viene}, {veniamo}, {venite}, {vengono}. Son las dos series más irregulares después de {essere} y {avere}, y la asimetría entre {v} y {n} es la única pista que queda: quien no se ha memorizado {vado} y {vengo} no tiene cómo adivinarlos.

El participio lo ordena todo: {andato}, {venuto}, {arrivato}, {salito}, {partito}, {uscito}. En el *passato prossimo* la forma es la misma en los dos, {sono andato}, {sono venuto}, y por eso el contexto tiene que decir quién llegó y quién partió. En griego, {ἦλθεν} y {ἦλθον} se acercan mucho, y esa cercanía es lo que el traductor tiene que decidir.

{fare} y {dire} siguen la misma lógica con una {-c} más: {faccio}, {fai}, {fa}, {diciamo}, {fanno}; {dico}, {dici}, {dice}, {diciamo}, {dicono}. {Diciamo} es de {dire} y {facciamo} es de {fare}, y los dos comparten final, lo que hace de ellos la pareja más confundida del capítulo.

## El imperativo que cambia de cara

El imperativo de {tu} es el infinitivo sin el final: {va}, {vieni}, {fa}, {di}, {guarda}, {prendi}, {dormi}, {mangia}, {bevi}, {leggi}. Con el {Lei} de cortesía la forma viene del subjuntivo, no del infinitivo: {vada}, {venga}, {faccia}, {dica}, {guardi}, {prenda}. Es la diferencia más visible entre hablar con un amigo y hablar con un desconocido, y aparece en la primera línea de cualquier texto.

La forma {di} lleva apóstrofo: {di’} cuando va sola, {dimelo} cuando se le pega un pronombre ({di} + {melo}). Quien escribe {dimelo} sin el apóstrofo se equivoca por un carácter, y es el tipo de cosa que el lector solo nota después de tropezar con ella.

## {Potere}, {dovere}, {volere}: los tres que piden infinitivo

{potere}, {dovere} y {volere} rigen el infinitivo y no el nombre: {posso andare}, {devo leggere}, {voglio capire}. {Volere} admite también el nombre, {voglio il libro}, y la diferencia es de sentido y no de forma: {voglio mangiare} es «quiero comer» y {voglio la minestra} es «quiero la sopa».

{so} es la única forma de {sapere} que pierde una letra: {so}, {sai}, {sa}, {sappiamo}, {sapete}, {sanno}. Solo el {yo} se queda sin la {s}, y por eso {so} choca con {dire} en el registro familiar: {non lo so}, yo no sé. Quien llega del portugués lee {so} como verbo decir y pierde el sentido.

## En la Biblia

Juan 1:1 abre con {era}, imperfecto de {essere}, el mismo verbo que da {Dio è luce} en el versículo 5, donde {è} es el presente. Juan 1:5 trae {brilla}, presente de un verbo en {-are}, y {era} otra vez para la luz que ya estaba. Tres verbos, tres tiempos, y {era} aparece dos veces con valores distintos: lo que ya era antes de todo y lo que estaba en escena.

Mateo 5:9 trae {beati}, los bienaventurados, y el verbo {essere} no flexiona nada: es un adjetivo sustantivado, como {beato} y {beata}. El mismo {essere} que flexiona en {era} aparece aquí sin persona ni número, y eso es lo que hace que {beati} funcione como frase y no como oración.`),
  vocab: [
    V('vado', 'andare', 'yo voy'),
    V('va', 'andare', 'él va; ¡ve!'),
    V('vengo', 'venire', 'yo vengo'),
    V('vieni', 'venire', '¡ven!'),
    V('faccio', 'fare', 'yo hago'),
    V('fa', 'fare', 'él hace; ¡haz!'),
    V('dico', 'dire', 'yo digo'),
    V('di', 'dire', '¡di!'),
    V('posso', 'potere', 'yo puedo'),
    V('devo', 'dovere', 'yo debo'),
    V('voglio', 'volere', 'yo quiero'),
    V('so', 'sapere', 'yo sé'),
    V('mangio', 'mangiare', 'yo como'),
    V('prendo', 'prendere', 'yo tomo'),
    V('era', 'essere', 'él era'),
    V('brilla', 'brillare', 'él brilla'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'En los verbos en {-are} la primera persona pierde la {-o}: {parlo}, {mangio}, {ascolto}. En los verbos en {-ere} y {-ire} la {-o} se queda: {prendo}, {dormo}, {vivo}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{vado}, {vengo}, {faccio}, {dico}, {posso}, {devo}, {voglio}, {so} y {do} no se derivan de nada, y eso es lo que hay que memorizar.',
      ),
    },
    {
      n: '3',
      text: T(
        'El imperativo de {tu} sale del infinitivo sin el final ({va}, {vieni}, {fa}, {di}), y el de {Lei} sale del subjuntivo ({vada}, {venga}, {faccia}, {dica}).',
      ),
    },
    {
      n: '4',
      text: T(
        '{di} pierde la {-i} y se vuelve {di’}: {dimelo} es {di} + {melo}, con el apóstrofo en medio.',
      ),
    },
    {
      n: '5',
      text: T(
        '{potere}, {dovere} y {volere} rigen el infinitivo: {posso andare}, {devo leggere}, {voglio capire}. {Volere} admite también el nombre.',
      ),
    },
  ],
  notes: [
    {
      label: T('El {so} que quiere decir dos cosas'),
      text: T(
        '{so} es el presente de {sapere}, «yo sé», y es también el presente de {dire} en el registro coloquial: {so tutto}, yo lo sé todo. Las dos formas son idénticas y el contexto decide, igual que pasa con {fui} en portugués y con {fuit} en la Vulgata.',
      ),
    },
    {
      label: T('El participio que delata el verbo'),
      text: T(
        'El {passato prossimo} es {essere} o {avere} más el participio, y el participio dice qué verbo entró: {sono andato}, {sono venuto}, {ho mangiato}, {ho bevuto}. Sin el participio, el italiano no dice si el sujeto fue o hizo.',
      ),
    },
  ],
  examples: [
    {
      text: 'In principio era il Verbo.',
      gloss: T('{era} es el imperfecto de {essere}, el mismo verbo que {è} en presente.'),
    },
    { text: 'Dio è luce.', gloss: T('{è} en presente: lo que Dios es.') },
    {
      text: 'La luce brilla nelle tenebre.',
      gloss: T('{brilla}: presente de un verbo en {-are}, el mismo grupo que {mangio} y {parlo}.'),
    },
    {
      text: 'Vado e vengo.',
      gloss: T('{vado} de {andare} y {vengo} de {venire}: las dos series irregulares.'),
    },
    {
      text: 'Sono andato a Roma.',
      gloss: T('Participio {andato} con {essere} en el {passato prossimo}.'),
    },
    { text: 'Ho mangiato il pane.', gloss: T('Participio {mangiato} con {avere}.') },
    { text: 'Non lo so.', gloss: T('{so} de {sapere}, y no de {dire}.') },
    { text: 'Posso venire domani.', gloss: T('{posso} rige el infinitivo {venire}.') },
    { text: 'Di’ questo a Pietro.', gloss: T('{di’} con apóstrofo: el {di} del imperativo.') },
    {
      text: 'Venga con noi.',
      gloss: T('Imperativo de {Lei}: viene del subjuntivo, no del infinitivo.'),
    },
  ],
  tables: [
    {
      caption: T('Presente dos essenciais irregulares'),
      head: ['Pessoa', 'andare', 'venire', 'fare', 'dire', 'potere'],
      rows: [
        ['io', 'vado', 'vengo', 'faccio', 'dico', 'posso'],
        ['tu', 'vai', 'vieni', 'fai', 'dici', 'puoi'],
        ['lui/lei', 'va', 'viene', 'fa', 'dice', 'può'],
        ['noi', 'andiamo', 'veniamo', 'facciamo', 'diciamo', 'possiamo'],
        ['voi', 'andate', 'venite', 'fate', 'dite', 'potete'],
        ['loro', 'vanno', 'vengono', 'fanno', 'dicono', 'possono'],
      ],
    },
    {
      caption: T('Particípios que não seguem a terminação'),
      head: ['Verbo', 'Particípio', 'Frase'],
      rows: [
        ['andare', 'andato', 'sono andato'],
        ['venire', 'venuto', 'sono venuto'],
        ['fare', 'fatto', 'ho fatto'],
        ['dire', 'detto', 'ho detto'],
        ['bere', 'bevuto', 'ho bevuto'],
        ['morire', 'morto', 'è morto'],
        ['nascere', 'nato', 'è nato'],
        ['leggere', 'letto', 'ho letto'],
      ],
    },
    {
      caption: T('Imperativo: tu e Lei'),
      head: ['Verbo', 'tu', 'Lei'],
      rows: [
        ['andare', 'va', 'vada'],
        ['venire', 'vieni', 'venga'],
        ['fare', 'fa', 'faccia'],
        ['dire', 'di’', 'dica'],
        ['dormire', 'dormi', 'dorma'],
        ['mangiare', 'mangia', 'mangia'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Completa: Io ___ dalla Spagna (andare, presente).'),
    options: [T('vado'), T('vengono'), T('ando'), T('vaio')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Imperativo de {tu} de {dormire}: Dormi, y el de {Lei} es ______.'),
      answer: 'Dorma',
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma con el verbo'),
      pairs: [
        { a: T('{faccio}'), b: T('{fare}') },
        { a: T('{vengo}'), b: T('{venire}') },
        { a: T('{mangio}'), b: T('{mangiare}') },
        { a: T('{posso}'), b: T('{potere}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración usa {essere} como verbo y no como sustantivo?'),
      options: [
        T('{Beati} i poveri in spirito.'),
        T('La {luce} era nel mondo.'),
        T('Il {mondo} è stato creato.'),
        T('{Egli} è Dio.'),
      ],
      answer: 3,
    },
  ],
};
