import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('Los verbos'),
  title: T('Los verbos esenciales'),
  subtitle: T(
    '{gehen}, {kommen}, {sein}, {haben}, {machen}, {sagen} y los verbos que deciden cada oración',
  ),
  body: C(`## Veinte verbos, y tres sin forma fija

Un verbo alemán regular quita la terminación y devuelve una nueva: en {mache}, {machst}, {macht}, el tema {mach-} no se mueve. Los esenciales no tienen tema fijo: {bin}, {bist}, {ist}, {war}, {werde}, {wird}, {habe}, {hast}, {hat}, {will}, {wollte} son formas que ninguna regla produce, y hay que aprenderlas sueltas.

Son pocos y pesan mucho. {gehen}, {kommen}, {sein}, {haben}, {machen}, {sagen}, {geben}, {sehen}, {essen}, {trinken}, {schlafen}, {sterben}, {lesen}, {schreiben}, {sprechen}, {hören}, {nehmen}, {bringen}, {wissen}, {können}, {wollen}, {müssen}, {dürfen}, {sollen} cubren casi todo lo que se dice en un capítulo de Evangelio.

## El Präsens que cambia de vocal en du y er

En el Präsens, los verbos de cambio de vocal cambian solo en la 2.ª y 3.ª persona del singular. Es donde {sehen} se vuelve {siehst}/{sieht}, {lesen} se vuelve {liest}/{liest}, {geben} se vuelve {gibst}/{gibt}, {essen} se vuelve {isst}/{isst}, {sprechen} se vuelve {sprichst}/{spricht}.

Tres familias: {e} pasa a {ie} o {i}, {a} pasa a {ä}, {au} pasa a {äu}. No es una anotación de estilo: es la regla que decide la pronunciación. Quien escribe {sehen} sin notar que la {e} se volvió {ie} dice {si-en} donde el alemán dice {sihst}.

{Wir} y {sie/Sie} conservan el tema del infinitivo: {sehen} hace {sehen}, {fahren} hace {fahren}. Y el Präsens de {können}, {wollen}, {müssen} y los demás modales no cambia vocal ninguna en singular; solo la 1.ª y 3.ª del singular quedan sin terminación: {ich kann}, {er kann}, y {du kannst}.

## Perfekt: quién lleva {haben} y quién lleva {sein}

El Perfekt es {haben} o {sein} en presente más un participio: {ich habe gemacht}, {ich bin gegangen}. La elección del auxiliar no es libre. Los verbos de movimiento y de cambio de estado llevan {sein}: {ich bin gegangen}, {sie ist gekommen}, {er ist gestorben}, {wir sind gefahren}. El resto lleva {haben}: {ich habe gegessen}, {du hast gelesen}, {sie haben geschlafen}.

Si el verbo no se mueve y no cambia de estado, es {haben}. Si hay movimiento físico o el sujeto nace, muere, permanece o se vuelve otra cosa, es {sein}. Así de simple, y casi ningún verbo escapa.

El pretérito de {sein} no tiene participio; es la forma {war}: {ich war}, {du warst}, {er war}, {wir waren}, {ihr wart}, {sie waren}. Y el Präteritum de {haben} es {hatte}, {hattest}, {hatte}, {hatten}, {hattet}, {hatten}.

## Los seis modales

{können}, {wollen}, {müssen}, {dürfen}, {sollen} y {mögen} son los modales, y lo que los marca es el tema: en la 1.ª y 3.ª persona del singular el presente no tiene terminación. {ich kann}, {er kann}; {ich will}, {er will}; {ich muss}, {er muss}; {ich darf}, {er darf}; {ich soll}, {er soll}; {ich mag}, {er mag}. Solo en la 2.ª persona aparece el {st}: {du kannst}, {du willst}.

El modal rige el infinitivo, que no lleva {zu}: {ich kann gehen}, {er will lesen}, {wir müssen essen}. El {zu} entra en el resto: {ich entscheide mich, zu gehen} lleva {zu gehen}, {kannst du gehen} no.

## En la Biblia

Juan 1:1 abre con {war}: {Im Anfang war das Wort}, en el principio era el Verbo. {War} es el pretérito de {sein}, y es lo que el alemán usa donde el griego usaba {ἦν}. Juan 3:16 trae {hat Gott die Welt geliebt} en la traducción de Lutero: {geliebt} es el participio de {lieben} y {hat} es el auxiliar.

Marcos 4:39 es un verbo imperativo entero: {Schweige und verstumme!}, cállate y enmudece. {Schweige} es el imperativo de {schweigen} y {verstumme} es el de {verstummen}, los dos sin terminación visible. El griego es {Σιωπήσον καὶ γαλάσσου}, y Lutero preserva lo que KJV convierte en mandato seco: esto es un mandamiento, no una afirmación.`),
  vocab: [
    V('bin', 'sein', 'yo soy'),
    V('bist', 'sein', 'tú eres'),
    V('war', 'sein', 'él era / yo era'),
    V('werde', 'werden', 'yo me vuelvo'),
    V('habe', 'haben', 'yo tengo'),
    V('hatte', 'haben', 'yo tenía'),
    V('gehe', 'gehen', 'yo voy'),
    V('komme', 'kommen', 'yo vengo'),
    V('esse', 'essen', 'yo como'),
    V('isst', 'essen', 'tú comes / él come'),
    V('sehe', 'sehen', 'yo veo'),
    V('siehst', 'sehen', 'tú ves'),
    V('lese', 'lesen', 'yo leo'),
    V('liest', 'lesen', 'tú lees / él lee'),
    V('gebe', 'geben', 'yo doy'),
    V('gibt', 'geben', 'él da'),
    V('kann', 'können', 'yo puedo / él puede'),
    V('will', 'wollen', 'yo quiero / él quiere'),
    V('muss', 'müssen', 'yo debo / él debe'),
    V('darf', 'dürfen', 'yo puedo (autorizado)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{sein} y {haben} se flexionan a mano: {ich bin}, {du bist}, {er ist}, {wir sind}, {ihr seid}, {sie sind}; {ich habe}, {du hast}, {er hat}, {wir haben}, {ihr habt}, {sie haben}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'En el Präsens la vocal de los verbos fuertes cambia en la 2.ª y 3.ª del singular: {e}→{ie/i} ({siehst}, {liest}, {gibst}, {isst}), {a}→{ä} ({fährst}, {trägst}, {schläfst}), {au}→{äu} ({läufst}).',
      ),
    },
    {
      n: '§3',
      text: T(
        'El Perfekt usa {sein} con verbos de movimiento o cambio de estado ({ich bin gegangen}, {er ist gestorben}), y {haben} con el resto ({ich habe gegessen}).',
      ),
    },
    {
      n: '§4',
      text: T(
        'Los modales no tienen terminación en la 1.ª y 3.ª del singular: {ich kann}, {er will}, {sie muss}, {es darf}. El infinitivo que rigen no lleva {zu}: {ich kann gehen}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'El imperativo de {du} sale de la 2.ª persona sin la terminación: {geh!}, {komm!}, {sieh!}, {lies!}, {iss!}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El Pretérito que el Perfekt sustituyó'),
      text: T(
        '{War} y {hatte} son los únicos pasados que el alemán usa cuando el presente del Perfekt no funciona. Con los modales es al revés: el Perfekt ({hätte gekonnt}) es raro y el Pretérito ({konnte}, {wollte}, {musste}, {durfte}, {sollte}, {mochte}) es el pasado normal. {Ich konnte gehen} es común; {ich habe gekonnt gehen} apenas aparece fuera del uso coloquial.',
      ),
    },
    {
      label: T('El {ward} que Juan 3:16 ya no tiene'),
      text: T(
        'La traducción de Lutero trae {ward} en lugar de {wurde} en el pretérito de {werden}: {ward Fleisch} es {wurde Fleisch}. {Ward} es el Pretérito antiguo de {werden}, desapareció del alemán moderno, pero está en la edición de 1545 y es lo que el lector encuentra.',
      ),
    },
  ],
  examples: [
    { text: 'Im Anfang war das Wort.', gloss: T('{war}: pretérito de {sein}, Jn 1:1.') },
    { text: 'Das Wort ist Gott.', gloss: T('{ist}: presente de {sein}.') },
    { text: 'Ich habe gegessen.', gloss: T('Perfekt con {haben}: participio de {essen}.') },
    { text: 'Er ist gekommen.', gloss: T('Perfekt con {sein}: movimiento.') },
    { text: 'Sie ist gestorben.', gloss: T('Perfekt con {sein}: cambio de estado.') },
    { text: 'Ich kann nicht kommen.', gloss: T('Modal {können} sin terminación de persona.') },
    { text: 'Wir müssen essen.', gloss: T('{müssen} rige el infinitivo sin {zu}.') },
    { text: 'Geh!', gloss: T('Imperativo de {gehen} sin la terminación.') },
    { text: 'Iss!', gloss: T('Imperativo de {essen} sin la {e}.') },
    { text: 'Ich sehe den Mann.', gloss: T('Presente de {sehen}, tema sin cambio.') },
  ],
  tables: [
    {
      caption: T('Präsens de los esenciales'),
      head: [T('Persona'), T('sein'), T('haben'), T('gehen'), T('essen'), T('sehen')],
      rows: [
        ['ich', 'bin', 'habe', 'gehe', 'esse', 'sehe'],
        ['du', 'bist', 'hast', 'gehst', 'isst', 'siehst'],
        ['er/sie/es', 'ist', 'hat', 'geht', 'isst', 'sieht'],
        ['wir', 'sind', 'haben', 'gehen', 'essen', 'sehen'],
        ['ihr', 'seid', 'habt', 'geht', 'esst', 'seht'],
        ['sie/Sie', 'sind', 'haben', 'gehen', 'essen', 'sehen'],
      ],
    },
    {
      caption: T('Perfekt y el auxiliar de cada verbo'),
      head: [T('Verbo'), T('Auxiliar'), T('Perfekt'), T('Participio')],
      rows: [
        ['gehen', 'sein', 'ist gegangen', 'gegangen'],
        ['kommen', 'sein', 'ist gekommen', 'gekommen'],
        ['sterben', 'sein', 'ist gestorben', 'gestorben'],
        ['bleiben', 'sein', 'ist geblieben', 'geblieben'],
        ['fahren', 'sein', 'ist gefahren', 'gefahren'],
        ['werden', 'sein', 'ist geworden', 'geworden'],
        ['essen', 'haben', 'hat gegessen', 'gegessen'],
        ['sehen', 'haben', 'hat gesehen', 'gesehen'],
        ['lesen', 'haben', 'hat gelesen', 'gelesen'],
        ['schreiben', 'haben', 'hat geschrieben', 'geschrieben'],
        ['geben', 'haben', 'hat gegeben', 'gegeben'],
        ['nehmen', 'haben', 'hat genommen', 'genommen'],
      ],
    },
    {
      caption: T('Los seis modales en presente'),
      head: [T('Modal'), T('ich'), T('du'), T('er'), T('wir'), T('Perfekt')],
      rows: [
        ['können', 'kann', 'kannst', 'kann', 'können', 'hat gekonnt'],
        ['wollen', 'will', 'willst', 'will', 'wollen', 'hat gewollt'],
        ['müssen', 'muss', 'musst', 'muss', 'müssen', 'hat gemusst'],
        ['dürfen', 'darf', 'darfst', 'darf', 'dürfen', 'hat gedurft'],
        ['sollen', 'soll', 'sollst', 'soll', 'sollen', 'hat gesollt'],
        ['mögen', 'mag', 'magst', 'mag', 'mögen', 'hat gemocht'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué auxiliar lleva {sterben} en el Perfekt?'),
    options: [T('{haben}'), T('{sein}'), T('{werden}'), T('{gehen}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el Präsens de {essen}: "Du ___" (3.ª del singular).'),
      answer: 'isst',
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con el auxiliar de su Perfekt.'),
      pairs: [
        { a: T('{gehen}'), b: T('{sein}') },
        { a: T('{essen}'), b: T('{haben}') },
        { a: T('{kommen}'), b: T('{sein}') },
        { a: T('{lesen}'), b: T('{haben}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es la forma correcta del modal {können} en 1.ª persona?'),
      options: [T('{ich kanne}'), T('{ich kannst}'), T('{ich kann}'), T('{ich können}')],
      answer: 2,
    },
  ],
};
