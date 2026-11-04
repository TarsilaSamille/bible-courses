import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('Los verbos separables'),
  subtitle: T('aufstehen, ankommen, einschlafen — lo que se separa en medio de la oración'),
  section: T('Los verbos'),
  body: C(`## El prefijo es un lugar, no un sonido

Muchos verbos alemanes nacen de un verbo simple con un **prefijo** espacial: {stehen} «estar de pie» + {auf} = {aufstehen} «levantarse». El prefijo no va pegado: indica **hacia dónde** o en qué dirección va la acción. Y por eso se desprende y se pega al final de la oración.

La consecuencia práctica es lo más importante del capítulo: **un verbo separable nunca acentúa su prefijo**. {Ich stehe auf} — el acento va en {auf}, al final. Adelantar el prefijo cambiaría el sentido: el alemán marca esa inversión, y el prefijo pasa a ser adverbial, ya sin formar parte del núcleo.

## Las tres posiciones

Un verbo separable tiene tres posiciones posibles, y la elección depende de lo que ya ocupe la segunda posición:

**1. Al final de la oración**, cuando nada más puede ocupar ese hueco: {Ich stehe früh auf.} «Me levanto temprano.» El {auf} es el último elemento.

**2. Detrás del verbo conjugado**, cuando hay un bloque temporal, un objeto o un complemento en segunda posición: {Ich stehe jeden Morgen früh auf.} «Me levanto cada mañana temprano.» Fíjate en que {jeden Morgen früh} es el bloque que ocupa la segunda posición, y el {auf} se queda pegado al final.

**3. En medio de la frase**, cuando el verbo conjugado es {sein} o {haben} en un verbo compuesto, o cuando hay un elemento posicional: {Ich bin früh aufgestanden.} «Me levanté temprano.» Aquí el participio {aufgestanden} es **inseparable**.

La prueba es sencilla: **busca un elemento que ocupe la segunda posición. Si existe, el {auf} va al final. Si no existe, se pega al verbo conjugado.**

## El acento como diagnóstico

En la escritura el acento desaparece; en la lectura decide. Compárese {Ich stehe früh **auf}** [ˈaʊ̯f] «me levanto temprano», verbo separable, con la misma palabra acentuando el prefijo, que sería otra palabra. La misma lógica vale para {durchschauen} [ˈdʊʁçˌʃaʊ̯ən] «ver a través de» y [duːʁçˈʃaʊ̯ən] «engañar»: la ortografía es idéntica y solo la pronunciación revela cuál de las dos quieres decir. En el texto impreso de Lutero la diferencia es invisible, y por eso la lectura en voz alta resuelve lo que el ojo no puede.

## Participio y dirección

El participio de un verbo separable **nunca** se separa: {aufstehen} da {aufgestanden}, {ankommen} da {angekommen}, {einschlafen} da {eingeschlafen}. El prefijo se vuelve a pegar y el verbo entero pasa a ser un adjetivo. En {Ich bin früh aufgestanden} el {auf} queda bloqueado en medio, y esa es la señal de que la forma es un participio y no un verbo en uso.

Y fíjate en la preposición: {aufstehen} ya contiene la preposición {auf} «sobre, hacia arriba». Por eso {aufstehen} nunca admite otro {auf}: el prefijo **es** la preposición. Lo mismo vale para {anrufen} «llamar por teléfono» y {zumachen} «cerrar».

## La lista útil

Los prefijos más comunes dicen exactamente lo que esperarías:

- {an-} «a, hacia»: {ankommen} «llegar», {anrufen} «llamar», {ansehen} «mirar», {antworten} «responder»
- {auf-} «hacia arriba»: {aufstehen} «levantarse», {aufmachen} «abrir», {aufhören} «dejar de»
- {aus-} «fuera, de»: {ausgehen} «salir», {aussuchen} «elegir», {ausstehen} «aguantar»
- {ein-} «dentro»: {eingehen} «entrar», {einschlafen} «dormirse», {einladen} «invitar»
- {mit-} «junto»: {mitkommen} «acompañar», {mitmachen} «participar», {mitnehmen} «llevarse»
- {nach-} «después»: {nachdenken} «reflexionar», {nachfragen} «preguntar de nuevo», {nachsehen} «comprobar»
- {vor-} «antes»: {vorlesen} «leer en voz alta», {vormachen} «demostrar»
- {zu-} «a, cerrado»: {zumachen} «cerrar», {zuhören} «escuchar atentamente», {zusagen} «prometer»

## Lo esencial

El prefijo es una posición al final de la oración, no parte del núcleo; el {auf} va al final cuando algo ya ocupa la segunda posición, y se pega en el participio; y ningún verbo separable acentúa su prefijo.`),
  vocab: [
    V('aufstehen', 'aufstehen', 'levantarse (stehe auf, stehst auf, ist aufgestanden)'),
    V('ankommen', 'ankommen', 'llegar (komme an, bist angekommen)'),
    V('anrufen', 'anrufen', 'llamar por teléfono (rufe an, ruft an)'),
    V('aufhören', 'aufhören', 'dejar de, cesar (höre auf, hört auf)'),
    V('ausgehen', 'ausgehen', 'salir (gehe aus, geht aus, ist ausgegangen)'),
    V('einschlafen', 'einschlafen', 'dormirse (schlafe ein, schläft ein)'),
    V('mitkommen', 'mitkommen', 'acompañar, venir junto (komme mit, kommt mit)'),
    V('nachdenken', 'nachdenken', 'reflexionar, pensar (denke nach, denkt nach)'),
    V('vorlesen', 'vorlesen', 'leer en voz alta (lese vor, liest vor)'),
    V('zumachen', 'zumachen', 'cerrar (mache zu, macht zu)'),
    V('zuhören', 'zuhören', 'escuchar atentamente (höre zu, hört zu)'),
    V('ansehen', 'ansehen', 'mirar, ver (sehe an, sieht an)'),
    V('einladen', 'einladen', 'invitar (lade ein, lädt ein, hat eingeladen)'),
    V('mitnehmen', 'mitnehmen', 'llevarse, llevar consigo (nehme mit, nimmt mit)'),
    V('aufgestanden', 'aufstehen', 'levantado (participio: nunca separable)'),
    V('auf', 'auf', 'prefijo y preposición «hacia arriba, sobre» (aufstehen, aufmachen)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Ich stehe jeden Morgen früh ___}, ¿dónde va el prefijo {auf}?'),
    options: [
      T(
        'Al final de la oración, tras {früh}, porque {jeden Morgen früh} ya ocupa la segunda posición',
      ),
      T('Justo después del verbo {stehe}, porque el presente exige adjunción'),
      T('Antes del sujeto {ich}, enfatizando el prefijo'),
      T('En medio de la oración, entre {Morgen} y {früh}'),
    ],
    answer: 0,
    hint: T('Regla §2: si algo ya ocupa la segunda posición, el {auf} va al final.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Participio de {ankommen} en {Ich bin gerade ___}:'),
      answer: 'angekommen',
      hint: T('El participio es inseparable: {an} + {ge} + {kommen}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada verbo con su prefijo y su sentido.'),
      pairs: [
        { a: T('einschlafen'), b: T('ein- «dentro»: dormir') },
        { a: T('ausgehen'), b: T('aus- «fuera»: salir') },
        { a: T('mitnehmen'), b: T('mit- «junto»: llevar') },
        { a: T('zumachen'), b: T('zu- «cerrado»: cerrar') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración tiene el prefijo bien colocado?'),
      options: [
        T('{Nach der Schule gehe ich nach Hause.} — nada en segunda posición, prefijo al final'),
        T(
          '{Nach der Schule ich gehe nach Hause.} — el verbo conjugado sale de la segunda posición',
        ),
        T('{Ich gehe nach der Schule nach Hause.} — el primer nach no es prefijo'),
        T('{Nach der Schule nach Hause gehe ich.} — el prefijo abre la oración'),
      ],
      answer: 0,
      hint: T(
        'Regla §2: sin elemento en segunda posición, el {auf} va justo tras el verbo conjugado.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Un verbo con prefijo es **separable** cuando el prefijo indica dirección o finalidad y puede quedarse al final de la oración. El acento cae siempre sobre el radical, nunca sobre el prefijo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Si la oración ya tiene un elemento en segunda posición, el prefijo va al final: {Ich stehe jeden Morgen früh auf.} Si no hay nada, se pega al verbo conjugado: {Ich stehe früh auf.}.',
      ),
    },
    {
      n: '3',
      text: T(
        'El participio y el infinitivo de un verbo separable son **inseparables**: {aufgestanden}, {aufstehen}, {angekommen}, {einzuschlafen}. El {auf} queda pegado entre el radical y las terminaciones.',
      ),
    },
    {
      n: '4',
      text: T(
        'Muchos prefijos son al mismo tiempo preposiciones: {aufstehen} ya contiene {auf}, y por eso no admite otro {auf}. Vale lo mismo para {anrufen} «llamar» y {zumachen} «cerrar».',
      ),
    },
    {
      n: '5',
      text: T(
        'En la pregunta el verbo conjugado pasa a la primera posición y el prefijo sigue al final: {Wann stehst du auf?} «¿Cuándo te levantas?»',
      ),
    },
  ],
  notes: [
    {
      label: T('El texto escrito esconde el acento'),
      text: T(
        'Todo este capítulo es, en la práctica, un capítulo de **pronunciación**. La ortografía no distingue {aufstehen} «levantarse» de las mismas letras con el prefijo acentuado, que sería otra palabra. En la lectura bíblica silenciosa da igual: lees {Er stand auf} y la gramática te dice que el prefijo se ha movido. En la lectura en voz alta, en cambio, el acento resuelve lo que la gramática solo sugiere, y por eso el {Talitha kumi} «Levántate, niña» de Marcos 5:41 suena tan distinto dicho como escrito.',
      ),
    },
    {
      label: T('Lectura bíblica'),
      text: T(
        'Los verbos separables dominan el texto de Lutero precisamente porque narran movimiento, y la Biblia es un texto que se mueve. En Marcos 5:41, {Talitha kumi} «Levántate, niña»: {kumi} es el imperativo de {kommen}, el verbo más separable que existe, y la frase se sostiene sin artículo ni pronombre. En Juan 20:1, {nahmen die Jüden ihre Speise mit sich und gingen hinaus} «los judíos llevaron su comida consigo y salieron»: el {mit} de {mitnehmen} «llevarse» se desprende al final de su grupo, algo que en español se resolvería con «llevaron consigo», sin ningún radical visible. En Hechos 1:13, {und tratten in das Haus, wo sie gewöhnlich beieinander saßen} «y entraron en la casa donde solían estar sentados»: el prefijo conservó su propia preposición {in}. Es la prueba más clara de que el prefijo es un adverbio, no una preposición.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ich stehe früh auf.',
      gloss: T('Me levanto temprano (nada en segunda posición: el auf se pega al verbo).'),
    },
    {
      text: 'Ich stehe jeden Morgen früh auf.',
      gloss: T('Me levanto cada mañana temprano ({jeden Morgen früh} ocupa la segunda posición).'),
    },
    {
      text: 'Wann stehst du auf?',
      gloss: T('¿Cuándo te levantas? (pregunta: verbo primero, prefijo al final).'),
    },
    {
      text: 'Nach der Schule gehe ich nach Hause.',
      gloss: T('Después de la escuela me voy a casa (el prefijo cierra la oración).'),
    },
    {
      text: 'Er steht nicht auf.',
      gloss: T('Él no se levanta ({nicht} se queda entre el verbo y el prefijo).'),
    },
    {
      text: 'Ich bin früh aufgestanden.',
      gloss: T('Me levanté temprano (participio inseparable, regla §3).'),
    },
    {
      text: 'Sie kommt heute nicht mit.',
      gloss: T('Ella no viene hoy ({mit} al final, tras {nicht}).'),
    },
    {
      text: 'Wir treffen uns vor der Kirche.',
      gloss: T('Nos vemos delante de la iglesia ({vor} ya es preposición aquí).'),
    },
    {
      text: 'Er ruft mich jeden Abend an.',
      gloss: T('Me llama todas las tardes ({an} al final).'),
    },
    {
      text: 'Warum gehst du nicht mit?',
      gloss: T('¿Por qué no vienes? (verbo primero, {mit} al final).'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Tres posiciones del verbo separable'),
      head: [T('Situación'), T('Oración'), T('Dónde cae el {auf}')],
      rows: [
        ['nada na 2ª posição', 'Ich stehe früh auf.', 'no fim'],
        ['tempo na 2ª posição', 'Ich stehe jeden Morgen früh auf.', 'no fim'],
        ['sujeito na 2ª posição', 'Heute stehe ich früh auf.', 'no fim'],
        ['pergunta', 'Wann stehst du auf?', 'no fim'],
        ['particípio', 'Ich bin früh aufgestanden.', 'colado no meio'],
        ['infinitivo', 'Ich werde früh aufstehen.', 'colado no meio'],
      ],
    },
    {
      caption: T('Tabla 2 — Prefijos y lo que indican'),
      head: [T('Prefijo'), T('Dirección'), T('Verbo'), T('Participio')],
      rows: [
        ['an-', 'a, para', 'ankommen', 'angekommen'],
        ['an-', 'a, para', 'anrufen', 'angerufen'],
        ['auf-', 'para cima', 'aufstehen', 'aufgestanden'],
        ['auf-', 'para cima', 'aufhören', 'aufgehört'],
        ['aus-', 'fora', 'ausgehen', 'ausgegangen'],
        ['ein-', 'dentro', 'einschlafen', 'eingeschlafen'],
        ['mit-', 'junto', 'mitkommen', 'mitgekommen'],
        ['nach-', 'depois', 'nachdenken', 'nachgedacht'],
        ['vor-', 'antes', 'vorlesen', 'vorgelesen'],
        ['zu-', 'fechado', 'zumachen', 'zugemacht'],
      ],
    },
  ],
};
