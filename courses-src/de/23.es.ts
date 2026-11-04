import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Los verbos irregulares'),
  subtitle: T('alternancia vocálica, {ist} y {hat} y el grupo del Präteritum'),
  section: T('Los verbos'),
  body: C(`## La alternancia vocálica

La mayoría de los verbos alemanes forma el pasado uniendo el radical perfectivo al imperfectivo, sin tocar la vocal: *spielen – spielte – gespielt*, *suchen – suchte – gesucht*. Los irregulares hacen otra cosa: cambian la vocal del radical. *sprechen – sprach – gesprochen*, *lesen – las – gelesen*, *geben – gab – gegeben*. A ese cambio se le llama *Ablaut*, y es la marca más antigua de la lengua, anterior incluso a la formación del protogermánico.

La regla desnuda del Perfekt es la siguiente: un verbo lleva **haben** cuando el sujeto actúa, e **ist** cuando el sujeto está en movimiento o cambia de estado. *Ich habe das Buch gelesen* (acción), *Das Kind ist zur Schule gegangen* (cambio), *Er ist gestorben* (estado). Los verbos que exigen **ist** forman un grupo pequeño y cerrado.

## Los cuatro verbos que rompen el patrón

Cuatro verbos forman un caso aparte, porque no conjujan ni como los fuertes ni como los débiles: **sein**, **haben**, **werden** y **wissen**. *sein* es el único verbo impersonal del grupo, y eso explica el uso de la tercera persona sin sujeto explícito: *Es ist kalt*, *Es ist heute Sonntag*. Y por eso el indicativo de *sein* es irregular: *ich bin, du bist, er ist, wir sind, ihr seid, sie sind*.

## El bloque del Präteritum

Los verbos **fuertes** formaron el pasado con *Ablaut*, y ese grupo — precisamente los verbos más frecuentes de la lengua — fijó la forma en **Präteritum** como pasado narrativo: *ich sagte, er kam, wir gingen*. Los débiles, en cambio, formaron el pasado con el sufijo *-te* y casi lo han perdido: hoy se dice *ich sagte* y no *ich sagte*. En el presente la diferencia entre fuerte y débil es mínima; lo que separa a los grupos es el pasado.

A los fuertes se cuentan además los verbos con *Umlaut* en el pasado, sin *Ablaut* completo: *halten – hielt – gehalten*, *bestellen – bestellte – bestellt*, *zählen – zählte – gezählt*. La vocal larga del presente salta a *ie*, y el *Perfekt* vuelve al *ie* del presente: *hält – hielt – gehalten*.

## Lo esencial

Lo que separa a un verbo de otro está en el pasado, no en el presente. Guarda tres columnas a la vez — presente, Präteritum, Perfekt — y la irregularidad deja de ser una lista para volverse un esquema.`),
  vocab: [
    V('sprechen', 'sprechen', 'hablar (sprach, hat gesprochen)'),
    V('lesen', 'lesen', 'leer (las, hat gelesen)'),
    V('sehen', 'sehen', 'ver (sah, hat gesehen)'),
    V('geben', 'geben', 'dar (gab, hat gegeben)'),
    V('nehmen', 'nehmen', 'coger, tomar (nahm, hat genommen)'),
    V('essen', 'essen', 'comer (aß, hat gegessen)'),
    V('trinken', 'trinken', 'beber (trank, hat getrunken)'),
    V('sein', 'sein', 'ser (war, ist gewesen)'),
    V('haben', 'haben', 'tener (hatte, hat gehabt)'),
    V('werden', 'werden', 'llegar a ser, ficar (wurde, ist geworden)'),
    V('wissen', 'wissen', 'saber (wusste, hat gewusst)'),
    V('gehen', 'gehen', 'ir (ging, ist gegangen)'),
    V('laufen', 'laufen', 'correr (lief, ist gelaufen)'),
    V('halten', 'halten', 'sostener, mantener (hielt, hat gehalten)'),
    V('ist geworden', 'werden', 'se ha vuelto (auxiliar ist)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el auxiliar del Perfekt en {Das Kind ist gestorben}?'),
    options: [
      T('ist, porque el verbo indica estado'),
      T('hat, porque es un verbo fuerte'),
      T('wird, porque es un estado nuevo'),
      T('bleibt, porque el sujeto permanece'),
    ],
    answer: 0,
    hint: T('Regla §3: los verbos de estado llevan ist.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Präteritum de {sprechen} en la primera persona: ich ___'),
      answer: 'sprach',
      hint: T('Fuerte: la -ie- del presente pasa a -a-.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de las oraciones usa correctamente el fuerte {nehmen}?'),
      options: [
        T('Él cogió la llave y se fue.'),
        T('Él cogióete la llave y se fue.'),
        T('Él nimmet la llave y se fue.'),
        T('Él nehmte la llave y se fue.'),
      ],
      answer: 0,
      hint: T('Reglas §1 y §2: un fuerte nunca lleva -te.'),
    },
    {
      kind: 'fill',
      prompt: T('Traduce {es begab sich} (Lc 2:8).'),
      answer: 'it came to pass',
      hint: T('Präteritum de sich begeben, la forma fija de las narrativas de Lutero.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con la forma del Perfekt'),
      pairs: [
        { a: T('gehen'), b: T('ist gegangen') },
        { a: T('lesen'), b: T('hat gelesen') },
        { a: T('werden'), b: T('ist geworden') },
        { a: T('verstehen'), b: T('hat verstanden') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Los fuertes cambian la vocal del radical en el pasado: sprechen – sprach – gesprochen, lesen – las – gelesen, trinken – trank – getrunken.',
      ),
    },
    {
      n: '2',
      text: T(
        'La terminación -te del Präteritum pertenece a los verbos débiles: ich sagte, wir suchten. En los fuertes nunca aparece: ich sprach, wir sprachen.',
      ),
    },
    {
      n: '3',
      text: T(
        'En el Perfekt solo los verbos de movimiento, cambio de estado y los cuatro especiales usan ist; todo lo demás lleva hat.',
      ),
    },
    {
      n: '4',
      text: T(
        'sein, haben, werden y wissen no siguen ningún modelo: apréndelos como frases enteras, nunca por analogía.',
      ),
    },
    {
      n: '5',
      text: T(
        'Tras los verbos con Umlaut el Perfekt vuelve al ie: halten – hielt – hat gehalten, zählen – zählte – hat gezählt.',
      ),
    },
  ],
  notes: [
    {
      label: T('Dos irregulares, dos tercios son herencias'),
      text: T(
        'Los verbos fuertes alemanes son casi todos de origen sajón o francón, y el patrón se fijó en un área dialectal hacia el siglo VI. En los dialectos docentes del sur — bávaro, suizo, austriaco — el *Ablaut* se abandonó, y se oye *ich hab gelesen* en lugar de *ich habe gelesen*. Lutero escribió en una forma que suena arcaica y elevada justamente para mantener distancia de ese cambio germánico cotidiano.',
      ),
    },
    {
      label: T('Lectura en Lutero'),
      text: T(
        'La construcción *und es begab sich* del relato de la Natividad, y todo el pretérito de las narrativas del Nuevo Testamento, corre solo sobre verbos fuertes: *es begab sich, daß ein Knecht des Herrn aus dem Hause des Herzogs Absalom zog* (Lc 2:8). El versículo es largo porque el Präteritum — lo que ocurrió una vez — permite que una acción puntual ocupe el lugar del presente narrativo.',
      ),
    },
  ],
  examples: [
    { text: 'Ich habe das Buch gelesen.', gloss: T('Leí el libro (Perfekt con haben).') },
    { text: 'Es ist heute Sonntag.', gloss: T('Hoy es domingo (sein sin sujeto).') },
    { text: 'Wir sind nach Hause gegangen.', gloss: T('Fuimos a casa (movimiento: ist).') },
    { text: 'Der Lehrer sprach lange.', gloss: T('El profesor habló mucho (Präteritum fuerte).') },
    { text: 'Sie hat das Brot gegessen.', gloss: T('Ella comió el pan (Ablaut a – aß – e).') },
    { text: 'Er hat den Brief genommen.', gloss: T('Él cogió la carta (nehmen: -ahm-, -omm-).') },
    { text: 'Ich habe es nicht gewusst.', gloss: T('No lo sabía (wissen: débil en el pasado).') },
    {
      text: 'Der Zug ist nach Berlin gefahren.',
      gloss: T('El tren fue a Berlín (ist + gefahren).'),
    },
    {
      text: 'Es begab sich zu der Zeit, daß ein Knecht des Herrn ging.',
      gloss: T('Sucedió en aquel tiempo que un siervo del Señor fue (Präteritum fuerte, Lc 2:8).'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Débiles y fuertes: {spielen} frente a {sprechen}'),
      head: [T('Tipo'), T('Presente'), T('Präteritum'), T('Participio')],
      rows: [
        ['fraco (-te)', 'spielt', 'spielte', 'gespielt'],
        ['fraco (-te)', 'sucht', 'suchte', 'gesucht'],
        ['forte (Ablaut)', 'spricht', 'sprach', 'gesprochen'],
        ['forte (Ablaut)', 'gibt', 'gab', 'gegeben'],
        ['forte (Ablaut)', 'isst', 'aß', 'gegessen'],
        ['forte (Ablaut)', 'nimmt', 'nahm', 'genommen'],
        ['forte (Ablaut)', 'schläft', 'schlief', 'geschlafen'],
        ['forte (Ablaut)', 'hilft', 'half', 'geholfen'],
        ['forte (Ablaut)', 'trifft', 'traf', 'getroffen'],
        ['forte (Ablaut)', 'isst', 'aß', 'gegessen'],
      ],
    },
    {
      caption: T('Tabla 2 — ¿{haben} o {ist} en el Perfekt?'),
      head: [T('Pregunta'), T('Auxiliar'), T('Ejemplo')],
      rows: [
        ['ação do sujeito', 'hat', 'Er hat das Buch gelesen.'],
        ['movimento', 'ist', 'Wir sind nach Hause gegangen.'],
        ['mudança de estado', 'ist', 'Das Wetter ist kalt geworden.'],
        ['processo sem agente', 'ist', 'Es ist lange her.'],
        ['verbo de estado', 'ist', 'Er ist gestorben. / geblieben.'],
        ['verbo de sentido', 'hat', 'Ich habe ihn verstanden.'],
      ],
    },
  ],
};
