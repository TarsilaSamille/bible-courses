import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('Los adverbios'),
  subtitle: T('gern, heute, manchmal — la palabra que no se flexiona'),
  section: T('Adjetivos y adverbios'),
  body: C(`## El adverbio es el más fácil de todos

Un adverbio modifica a un verbo, a un adjetivo o a otro adverbio, y es **invariable**: {gut} da {sehr gut}, {schön} da {sehr schön}, {oft} da {sehr oft}. Nada se flexiona, nada tiene género, y la forma es la misma en singular y en plural. Eso vale incluso para el superlativo: {am besten} y {am schönsten} son formas de calidad que se usan exactamente como adverbios.

La formación es casi mecánica. La mayoría de los adverbios de calidad nacen de un adjetivo: basta borrar la terminación. {schön} da {schön}, {groß} da {groß}, {leicht} da {leicht}, {früh} da {früh}. El atajo del principiante es ese mismo: si la palabra no se flexiona, es adverbio; si se flexiona, todavía no lo es.

Dos familias escapan de la regla:

**1. Adverbios de calidad sin regla.** {gern} «a gusto» sigue siendo {gern}; {oft} da {öfter}; {viel} da {mehr}; {teuer} da {teurer}. Son pocos, pero hay que aprendérselos.

**2. Adverbios sin adjetivo alguno.** {heute}, {morgen}, {gestern}, {hier}, {dort}, {ja}, {nein}, {sehr}, {nicht}, {immer}, {nie}, {manchmal}. Ninguna regla los produce.

## La posición: el adverbio vive entre verbo y objeto

La regla de oro es corta: un adverbio de modo, tiempo o lugar que **no** sea negación se coloca entre el verbo conjugado y el objeto.

- {Ich fahre morgen nach Berlin.} «Voy a Berlín mañana.»
- {Ich sehe den Film heute Abend.} «Veo la película esta tarde.»
- {Er spricht gut Deutsch.} «Habla bien alemán.»

Con el verbo al final, el orden invertido sigue siendo correcto: {Morgen fahre ich nach Berlin.} Es literario y raro en el habla cotidiana.

Lo que **no** entra en ese hueco son los adverbios de negación y de grado: {nicht}, {kein}, {nie}, {nur}, {auch}, {schon}, {erst}, {immer}, {sehr}, {genug}, {ziemlich}. Esos van **después** del elemento que niegan o amplían: {Er ist sehr müde}, {Ich habe nur wenig Zeit}, {Das ist nicht mein Buch}.

## {nicht} y {kein}

El reparto del trabajo es estricto. {nicht} niega verbo, adjetivo y adverbio, y es invariable. {kein} niega **solo** el sustantivo, y se flexiona como un artículo: {kein Mann}, {keine Frau}, {kein Kind}, {mit keinem Freunde}, {keine Bücher}.

De ahí sale el error más común de quien habla español: en {Ich habe keine Zeit} «no tengo tiempo» la negación es {kein} porque el objetivo es {Zeit}. Nunca {Ich habe nicht Zeit}.

Y fíjate en lo que {nicht} marca: se pega al elemento negado. {Ich sehe den Film nicht} niega el verbo {sehen}; {Ich sehe nicht den Film} niega el objeto {den Film}. La diferencia es real y el oído nativo la percibe.

Para decir «no solo», el alemán apila las dos: {Das ist nicht nur ein Satz} «eso no es solamente una frase» — {nicht} niega el adverbio {nur} y {kein} refuerza el sustantivo.

## Doble negación

Lo que el español hace con un solo «no», el alemán a veces lo hace con dos: {Ich habe nichts gesehen} y {Ich habe nicht etwas gesehen} significan prácticamente lo mismo. En ambos casos el sustantivo lleva {n} más un elemento negativo ({nichts}, {niemand}, {kein}). El par {nicht nichts} «nada de nada» es raro, pero {kein einziger} «ni uno solo» es común: {Er hat kein einziges Wort gesagt} «No dijo ni una sola palabra».

## Lo esencial

El adverbio es la forma que no se flexiona; se forma borrando la terminación del adjetivo; {nicht} niega verbo y adjetivo, {kein} niega sustantivo y se flexiona; y la posición de {nicht}, {sehr}, {nur} y {immer} es siempre posterior al elemento que modifican.`),
  vocab: [
    V('sehr', 'sehr', 'muy (antes de adjetivo, adverbio o tras -er)'),
    V('gern', 'gern', 'a gusto, con gusto (comp.: lieber)'),
    V('oft', 'oft', 'a menudo, muchas veces (comp.: öfter)'),
    V('manchmal', 'manchmal', 'a veces, de vez en cuando'),
    V('leise', 'leise', 'despacio, bajito [ˈlaɪ̯zə]'),
    V('hoch', 'hoch', 'en voz alta; temprano (adv.)'),
    V('früh', 'früh', 'temprano (adv.); madrugador (adj.)'),
    V('teuer', 'teuer', 'caro (adv., en expresiones)'),
    V('nicht', 'nicht', 'no; nunca (niega verbo, adjetivo o adverbio)'),
    V('kein', 'kein', 'ningún, ningún (niega sustantivo; flexiona)'),
    V('nichts', 'nichts', 'nada'),
    V('immer', 'immer', 'siempre'),
    V('nie', 'nie', 'nunca'),
    V('nur', 'nur', 'solo, únicamente'),
    V('ziemlich', 'ziemlich', 'bastante, razonablemente'),
    V('bald', 'bald', 'pronto, en seguida'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la negación correcta de {Ich habe Zeit}?'),
    options: [
      T('{Ich habe keine Zeit} — {kein} niega el sustantivo {Zeit}'),
      T('{Ich habe nicht Zeit} — {nicht} aplicado a un sustantivo'),
      T('{Ich habe kein Zeit} — {kein} sin flexión de género'),
      T('{Ich bin keine Zeit} — el verbo está cambiado'),
    ],
    answer: 0,
    hint: T('Regla §4: {nicht} niega verbo y adjetivo; {kein} niega sustantivo y flexiona.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Convierte el adjetivo en adverbio: {Die Tür ist ___ (offen).'),
      answer: 'offen',
      hint: T('El adverbio pierde la terminación: {offen} se queda {offen}, sin la {e} final.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la función con su adverbio.'),
      pairs: [
        { a: T('negar un sustantivo'), b: T('kein') },
        { a: T('negar un verbo'), b: T('nicht') },
        { a: T('intensificar un adjetivo'), b: T('sehr') },
        { a: T('restringir a uno solo'), b: T('nur') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿En qué oración está bien colocado el {nicht}?'),
      options: [
        T('{Ich sehe den Film nicht} — el {nicht} niega el verbo {sehen}'),
        T('{Ich sehe nicht den Film} — el {nicht} niega el verbo {sehen}'),
        T('{Ich nicht sehe den Film} — el {nicht} detrás del pronombre {ich}'),
        T('{Den Film nicht sehe ich} — el {nicht} al principio de la oración'),
      ],
      answer: 0,
      hint: T('Regla §5: el {nicht} va al final del grupo que niega.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El adverbio es invariable: no se flexiona en género, número ni caso. {Er spricht gut} y {Sie sprechen gut} usan exactamente la misma palabra.',
      ),
    },
    {
      n: '2',
      text: T(
        'La regla de formación: el adverbio de calidad es el adjetivo sin terminación. {schön} da {schön}, {groß} da {groß}, {leicht} da {leicht}. Si se flexiona, todavía no es adverbio.',
      ),
    },
    {
      n: '3',
      text: T(
        'Los adverbios de modo, tiempo y lugar que no sean negación se colocan entre el verbo conjugado y el objeto: {Er spricht gut Deutsch}, {Ich fahre morgen nach Berlin}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{nicht} niega verbo, adjetivo y adverbio y es invariable. {kein} niega solo el sustantivo y declina como artículo: {kein}, {keine}, {keinem}, {keine}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Los adverbios de negación y de grado — {nicht}, {kein}, {nie}, {nur}, {auch}, {schon}, {erst}, {immer}, {sehr}, {genug} — van **después** del elemento que modifican: {Er ist sehr müde}, {Ich habe nur wenig Zeit}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Borra la terminación, y nada más'),
      text: T(
        'El truco del estudiante es siempre el mismo: escribe el adjetivo y borra la terminación. {schön} da {schön}; {hoch} da {hoch}; {teuer} da {teuer}. La diferencia está en esa terminación, y por eso funciona la regla. Pocas palabras se escapan: {gern} da {lieber}, no {gerner}; {oft} da {öfter}, no {ofter}; {viel} da {mehr}, no {vieler}. Son cinco o seis cosas, y resuelven de golpe los capítulos siguientes.',
      ),
    },
    {
      label: T('Lectura bíblica'),
      text: T(
        'Después de los artículos, {nicht} es la palabra más frecuente de la Biblia en Lutero. En Juan 3:16, {so hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab} — observa que {dass} introduce la consecuencia y que el verbo conjugado {hat} ya está en medio. En Romanos 3:23, {Es sind aber alle gesündigt und ermangeln des Ruhmens, der vor Gott sein sollte} «todos pecaron y están privados de la gloria que deberían tener ante Dios»: ahí un {nicht} sobraría, porque es {ermangeln} — «carecer» — quien lleva la negación. El patrón se repite: en el alemán bíblico, la negación rara vez es una palabra aislada.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ich fahre morgen nach Berlin.',
      gloss: T('Voy a Berlín mañana (adverbio de tiempo entre verbo y objeto).'),
    },
    {
      text: 'Er spricht sehr gut Deutsch.',
      gloss: T('Habla alemán muy bien ({sehr} intensifica el adverbio {gut}).'),
    },
    {
      text: 'Sie kommt nicht mit.',
      gloss: T('Ella no viene ({nicht} después del verbo, negando {mit}).'),
    },
    {
      text: 'Das ist nicht mein Buch.',
      gloss: T('Ese no es mi libro ({nicht} justo antes de lo que niega).'),
    },
    {
      text: 'Ich habe keine Zeit.',
      gloss: T('No tengo tiempo ({kein} niega el sustantivo y flexiona).'),
    },
    {
      text: 'Er trinkt nur Kaffee.',
      gloss: T('Solo bebe café ({nur} va después del verbo, fuera de la posición de modo).'),
    },
    {
      text: 'Wir kommen immer pünktlich.',
      gloss: T('Siempre llegamos a tiempo ({immer} después del verbo conjugado).'),
    },
    {
      text: 'Er ist nicht oft hier.',
      gloss: T('No está aquí a menudo ({nicht} niega el adverbio {oft}).'),
    },
    {
      text: 'Morgen fahre ich nach Berlin.',
      gloss: T('Mañana voy a Berlín (orden invertido, el verbo va al final).'),
    },
    {
      text: 'Er hat kein einziges Wort gesagt.',
      gloss: T('No dijo ni una sola palabra ({kein} más {n} en el sustantivo).'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Del adjetivo al adverbio'),
      head: [T('Adjetivo'), T('Adverbio'), T('Observación')],
      rows: [
        ['gut', 'gut', 'forma igual'],
        ['schön', 'schön', 'forma igual'],
        ['schnell', 'schnell', 'forma igual'],
        ['leise', 'leise', 'forma igual'],
        ['groß', 'groß', 'forma igual'],
        ['früh', 'früh', 'forma igual'],
        ['hoch', 'hoch', 'forma igual'],
        ['teuer', 'teuer', 'forma igual'],
        ['gern', 'gern', 'forma especial: comp. lieber'],
        ['oft', 'öfter', 'forma especial: comp. öfter'],
        ['viel', 'mehr', 'forma especial: comp. mehr'],
        ['teuer', 'teurer', 'forma especial: comp. teurer'],
      ],
    },
    {
      caption: T('Tabla 2 — Dónde queda el adverbio'),
      head: [T('Tipo'), T('Posición'), T('Ejemplo')],
      rows: [
        ['modo, tempo, lugar', 'entre o verbo e o objeto', 'Ich fahre morgen nach Berlin.'],
        [
          'modo, tempo, lugar (verbo no fim)',
          'antes do verbo, raro',
          'Morgen fahre ich nach Berlin.',
        ],
        ['negação (nicht)', 'no fim do grupo negado', 'Ich sehe den Film nicht.'],
        ['intensificador (sehr)', 'depois do elemento ampliado', 'Er ist sehr müde.'],
        ['restritor (nur)', 'depois do elemento limitado', 'Ich trinke nur Wasser.'],
        ['frequência (immer, oft)', 'depois do verbo conjugado', 'Wir kommen immer pünktlich.'],
      ],
    },
  ],
};
