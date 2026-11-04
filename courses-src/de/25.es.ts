import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('El Präteritum'),
  subtitle: T('el pasado narrativo, los fuertes con Ablaut y el würde'),
  section: T('Los verbos'),
  body: C(`## La forma

El Präteritum se construye sin auxiliar: un solo verbo conjugado, el verbo principal, situado en segunda posición y seguido del objeto directo. *Ich kaufte ein Brot*, *Wir gingen nach Hause*, *Die Alten kamen zuerst*. Todo lo demás mantiene el orden normal, y la proposición no tiene nada al final que la cierre.

Los verbos débiles añaden **-te** al radical del presente: *sagen – sagte*, *kaufen – kaufte*, *fragen – fragte*, *warten – wartete*. La terminación sigue a la persona, pero la vocal del radical no cambia: *ich kaufte, du kauftest, er kaufte, wir kauften*. Esa regularidad es lo que permitió que *-te* llegara a ser la terminación más común — y después la más rara — en el habla.

Los verbos fuertes, en cambio, repiten el cambio vocálico que ya conoces: *sprechen – sprach*, *nehmen – nahm*, *essen – aß*, *trinken – trank*, *gehen – ging*, *sehen – sah*, *lesen – las*. El participio se queda aparte, con la terminación *-en*: *gesprochen*, *genommen*, *gegangen*. Ningún *-te*, ningún auxiliar.

## Cuándo usar el Präteritum

El Perfekt es el tiempo del habla sobre algo que acaba de pasar; el Präteritum es el tiempo de la **narración**. En una receta de cocina, en el relato de un viaje, en el resumen de un libro, todo va en Präteritum. Y por eso *ich ging* e *ich bin gegangen* no son sinónimos: el primero cuenta, el segundo informa.

Junto al Präteritum hay una forma que se le parece y no es él: el **Konjunktiv II** con *würde*. *Ich würde kommen* es una suposición sobre el futuro, no una narración. La diferencia está en la actitud: el Präteritum afirma, *würde* supone. *Wenn ich Zeit hätte, würde ich kommen* — si tuviera tiempo, vendría.

## Lectura

La Biblia de Lutero es, en buena parte, un libro de Präteritum. Las narrativas del evangelio de Marcos corren casi todas en *war, ging, kam, sprach, sah*, y esa uniformidad es justamente lo que hace la lectura en voz alta tan rítmica. *Es begab sich aber zu der Zeit, daß Jesus ging und seinen Jüngern Befahl gab* (Mc 3:13). Fíjate en que *Befahl gab* es posicional, no *hat Befehl gegeben*: el narrador está dentro de la escena, no comentándola.

## Lo esencial

El Präteritum coloca una palabra donde harían falta dos. Quien escribe en Präteritum se retira de la escena y la mira desde fuera; quien escribe en Perfekt sale de la escena y habla con alguien.`),
  vocab: [
    V('sagte', 'sagen', 'dijo (Präteritum débil en -te)'),
    V('kaufte', 'kaufen', 'compró (Präteritum débil)'),
    V('sprach', 'sprechen', 'habló (Präteritum fuerte)'),
    V('ging', 'gehen', 'fue, anduvo (Präteritum fuerte)'),
    V('sah', 'sehen', 'vio (Präteritum fuerte)'),
    V('war', 'sein', 'era (Präteritum de sein)'),
    V('wußte', 'wissen', 'sabía (fuerte sin -te)'),
    V('hätte', 'haben', 'tendría (Konjunktiv II)'),
    V('würde kommen', 'werden', 'vendría (Konjunktiv II)'),
    V('Befahl gab', 'geben', 'dio órdenes (verbo posicional)'),
    V('Ich kaufte ein Brot.', 'kaufen', 'Compré un pan.'),
    V('Die Alten kamen zuerst.', 'kommen', 'Los viejos llegaron primero.'),
    V('Wir sind nach Hause gegangen.', 'gehen', 'Fuimos a casa (Perfekt, no Präteritum).'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el Präteritum correcto de {sagen} en la primera persona?'),
    options: [T('sagte'), T('sagteest'), T('gesagt'), T('sagt')],
    answer: 0,
    hint: T('Regla §2: débil = radical del presente + -te.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Präteritum de {gehen} en la tercera persona: er ___'),
      answer: 'ging',
      hint: T('Fuerte: e → i, y cae la -en final.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración está en el pasado narrativo?'),
      options: [
        T('El tren salió a las nueve.'),
        T('El tren ha salido a las nueve.'),
        T('El tren saldrá a las nueve.'),
        T('El tren está saliendo a las nueve.'),
      ],
      answer: 0,
      hint: T('Tabla 2: la narrativa escrita pide Präteritum.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa la hipótesis: Wenn ich Zeit ___, würde ich kommen.'),
      answer: 'hätte',
      hint: T('Es el Konjunktiv II de haben: hätte.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con su Präteritum'),
      pairs: [
        { a: T('nehmen'), b: T('nahm') },
        { a: T('fragen'), b: T('fragte') },
        { a: T('trinken'), b: T('trank') },
        { a: T('warten'), b: T('wartete') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El Präteritum no tiene auxiliar: el verbo principal va conjugado en segunda posición y nada cierra la proposición. Ich kaufte ein Brot.',
      ),
    },
    {
      n: '2',
      text: T(
        'Los débiles añaden -te al radical: kaufte, fragte, wartete. La terminación cambia, la vocal del radical no.',
      ),
    },
    {
      n: '3',
      text: T(
        'Los fuertes cambian la vocal y nada más: sprach, nahm, aß, trank, ging, sah, las. Busque -te en un fuerte: está mal.',
      ),
    },
    {
      n: '4',
      text: T(
        'El Präteritum afirma; würde y el Konjunktiv II suponen. Ich kam es hecho, ich würde kommen es hipótesis.',
      ),
    },
    {
      n: '5',
      text: T(
        'La primera persona del singular apenas aparece en Präteritum, salvo en verbos de deseo y con valor optativo: ich dachte, ich wünschte, ich wüsste gern.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué el habla casi ha perdido el Präteritum'),
      text: T(
        'En las lenguas germánicas antiguas el Präteritum era el tiempo normal, y lo que hoy llamamos Perfekt era raro, usado sobre todo con verbos de movimiento. Las lenguas románicas hicieron lo contrario: en portugués y español el pretérito perfecto asume el papel narrativo y el pretérito queda como resto literario. El alemán siguió su propio camino: mantuvo el Präteritum en la escritura y el Perfekt en el habla. Y la diferencia entre *ich sagte* e *ich habe gesagt* es todavía hoy la diferencia entre quien relata y quien informa.',
      ),
    },
    {
      label: T('El evangelio de Marcos en Lutero'),
      text: T(
        'La traducción de Lutero reescribió el texto griego de Marcos con economía de cláusulas cortas y verbos fuertes: apenas hay *hatte gekonnt*, apenas hay *würde*, solo *war, trat, rief, legte, sprach*. El ritmo que resulta es la razón por la que las narrativas de Marcos son las que más se leen en voz alta en las iglesias luteranas. Lo mismo se ve en las bienaventuranzas de Mateo, donde el evangelista escribe en el mismo registro: *Selig sind die Armen im Geist*, y Lutero conserva la brevedad del original.',
      ),
    },
  ],
  examples: [
    { text: 'Ich kaufte ein Brot.', gloss: T('Compré un pan (débil en -te).') },
    { text: 'Die Alten kamen zuerst.', gloss: T('Los viejos llegaron primero (fuerte sin -te).') },
    { text: 'Ich sah ihn am Fluss.', gloss: T('Lo vi junto al río (fuerte: sah).') },
    {
      text: 'Es war ein Mensch, der von Gott gesandt ist.',
      gloss: T('Había un hombre enviado por Dios (Jn 1:6).'),
    },
    {
      text: 'Jesus ging und seinen Jüngern Befahl gab.',
      gloss: T('Jesús fue y dio orden a sus discípulos (Mc 3:13).'),
    },
    {
      text: 'Wenn ich Zeit hätte, würde ich kommen.',
      gloss: T('Si tuviera tiempo, vendría (Konjunktiv II).'),
    },
    { text: 'Er ist nach Hause gegangen.', gloss: T('Él se fue a casa (Perfekt, no Präteritum).') },
    {
      text: 'Ich wüsste gern, wie es weitergeht.',
      gloss: T('Me gustaría saber cómo sigue (primera persona con valor optativo).'),
    },
    {
      text: 'Die Bahn hat sich um zwei Stunden verspätet.',
      gloss: T('El tren se retrasó dos horas (suceso reciente: Perfekt).'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Präteritum de un débil y de un fuerte'),
      head: [T('Persona'), T('sagen (débil)'), T('sprechen (fuerte)')],
      rows: [
        ['ich', 'sagte', 'sprach'],
        ['du', 'sagtest', 'sprachst'],
        ['er / sie / es', 'sagte', 'sprach'],
        ['wir', 'sagten', 'sprachen'],
        ['ihr', 'sagtet', 'sprecht'],
        ['sie / Sie', 'sagten', 'sprachen'],
      ],
    },
    {
      caption: T('Tabla 2 — ¿Präteritum o Perfekt?'),
      head: [T('Contexto'), T('Tiempo'), T('Ejemplo')],
      rows: [
        ['narrativa escrita', 'Präteritum', 'Er ging nach Hause und schlief.'],
        ['relato oral', 'Perfekt', 'Er ist nach Hause gegangen und hat geschlafen.'],
        ['notícia de algo recente', 'Perfekt', 'Die Bahn hat sich verspätet.'],
        ['receita, instrução', 'Präteritum', 'Man nahm zwei Eier und rührte den Teig.'],
        ['condição irreal', 'Konjunktiv II', 'Wenn ich Zeit hätte, würde ich kommen.'],
        ['estado permanente', 'Präsens', 'Ich wohne seit zehn Jahren in Berlin.'],
      ],
    },
  ],
};
