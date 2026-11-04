import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  section: T('Os verbos'),
  title: T('Los verbos esenciales'),
  subtitle: T(
    '{ir}, {venir}, {ser}, {tener}, {hacer}, {decir} y los catorce que sostienen casi toda oración',
  ),
  body: C(`## Veinte verbos y una regla que decide media lengua

Un verbo regular se conjuga por sufijo: en {hablo}, {hablas}, {habla}, el tema {habl-} no se mueve y solo cambia la terminación. Los esenciales no tienen tema fijo. {voy}, {vengo}, {soy}, {tengo}, {hago}, {digo}, {puedo}, {quiero}, {sé} y {do} son diez formas que no produce ninguna regla, y hay que aprenderlas sueltas.

Son pocos y pesan mucho. {ir}, {venir}, {ser}, {estar}, {tener}, {hacer}, {decir}, {poder}, {querer}, {saber}, {ver}, {dar}, {comer}, {beber}, {dormir}, {morir}, {nacer}, {leer}, {escribir}, {hablar}, {escuchar}, {tomar}, {poner} y {salir} cubren casi todo lo que se dice en un capítulo de Evangelio. El resto de la lengua se construye encima de ellos.

Sobre esos regulares hay una regla que decide sola la mitad de las frases, y es la **vocal de la bota**: en el presente de muchos verbos terminados en {-ar} y {-er} las formas tónicas cambian la vocal. {pienso}, {quiero}, {siento}, {entiendo}, {tiendo}, {pierdo}, {miento}, {prefiero}. Pero {nosotros} y {vosotros} mantienen la vocal original: {pensamos}, {queremos}, {sentimos}, {entendemos}, {tienden}, {perdemos}, {mienten}, {preferimos}. Si la forma no termina en {-amos} ni en {-éis}, es la bota.

## {Ir} + {a} + infinitivo: el futuro que no flexiona

El español anuncia el futuro sin flexionar ningún verbo: es {ir} en presente más {a} más infinitivo. {Voy a comer}, {va a venir}, {vamos a salir}. La forma de {ir} conserva la persona ({voy}, {vas}, {va}, {vamos}, {vais}, {van}), pero el infinitivo no cambia nunca, y ese es el precio de un verbo que sirve en todos los tiempos compuestos.

La {a} no tiene papel propio fuera de esta construcción, y por eso la frase se deshace cuando se cambia el verbo: {voy al mercado} es {ir} con lugar, y {voy a ver} es {ir} más {ver} sin {a} en medio. Quien traduce del portugués {vou ver} por {voy a ver} acierta, y quien escribe {voy ver} escribe mal sin querer decir otra cosa.

El mismo truco funciona en el pasado: {iba a comer} era {ir} en imperfecto más infinitivo. Y el pretérito compuesto {he ido}, {has ido}, {hemos ido}, {había ido} es {ir} con el participio {ido}, que no cambia de género ni de número.

## Los tres cambios de raíz

Los verbos que cambian de vocal forman tres grupos, y lo que los separa es a qué vocal pasa cada una.

- **{e} pasa a {ie}**: {piensa}, {quiere}, {siente}, {entiende}, {tiende}, {pierde}, {miente}, {prefiere}.
- **{o} pasa a {ue}**: {vuelve}, {duerme}, {muere}, {muestra}, {encuentra}, {vuela}, {juega}, {huele}.
- **{e} pasa a {i}** solo en el pasado y solo en la 1.ª y 3.ª persona: {pidió}, {siguió}, {sirvió}, {vistió}, {eligió}, {eligieron}.

El primer grupo mantiene la vocal en las demás formas: {piensa}, {piensan}, {piensa}, {pensamos}, {pensáis}. El segundo también: {vuelve}, {vuelan}, {volvemos}. El tercero cambia solo en el pasado, y es el que el texto bíblico usa más, porque el pasado es el tiempo de la narración.

## {Tener que}, {deber} y {hay que}: la obligación con tres verbos

En español la obligación tiene tres verbos, y la elección dice de qué tipo es. **{tener que}** es personal: *{Tengo que irme}*, yo tengo que irme. **{deber}** es deber o necesidad: *{Debo irme}*, yo debo irme. **{Hay que}** es impersonal y no tiene sujeto: *{Hay que irse}*, hay que irse, da igual quién vaya.

Los tres governan el infinitivo y nunca una forma conjugada: *{tengo que ir}*, nunca *{tengo que voy}*. Es ese detalle el que denuncia a quien traduce del portugués, donde *{tenho que ir}* y *{tenho de ir}* son lo mismo.

## En la Biblia

Juan 1:1 trae {era}, el pretérito de {ser}, y Juan 1:5 trae {resplandece}, el presente de un verbo en {-er}. Son dos tiempos para el mismo asunto: lo que ya era antes de todo y lo que está pasando en escena. Y 1 Juan 4:8 trae {Dios es amor}, presente de {ser}, junto a Juan 3:16, {Dios amó al mundo}, pretérito de {amar}.

La elección entre {ama} y {amó} es elección del traductor. {Amar} en presente afirma lo que Dios es; en pretérito afirma lo que hizo. {Es amor} y {amó al mundo} dicen cosas distintas, y una traducción que pone los dos en el mismo tiempo borra la diferencia.`),
  vocab: [
    V('voy', 'ir', 'yo voy'),
    V('va', 'ir', 'él va; ¡vaya!'),
    V('vengo', 'venir', 'yo vengo'),
    V('viene', 'venir', 'él viene; ¡venga!'),
    V('soy', 'ser', 'yo soy'),
    V('es', 'ser', 'él es'),
    V('tengo', 'tener', 'yo tengo'),
    V('hago', 'hacer', 'yo hago'),
    V('digo', 'decir', 'yo digo'),
    V('puedo', 'poder', 'yo puedo'),
    V('quiero', 'querer', 'yo quiero'),
    V('pienso', 'pensar', 'yo pienso'),
    V('duermo', 'dormir', 'yo duermo'),
    V('sigo', 'seguir', 'yo sigo'),
    V('vuelvo', 'volver', 'yo vuelvo'),
    V('era', 'ser', 'él era'),
    V('amó', 'amar', 'él amó'),
    V('resplandece', 'resplandecer', 'él brilla'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Diez presentes irregulares no tienen regla: {voy}, {vengo}, {soy}, {tengo}, {hago}, {digo}, {puedo}, {quiero}, {sé} y {do}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'La vocal de la bota vale para las formas tónicas y nunca para {nosotros} ni {vosotros}: {pienso} contra {pensamos}, {vuelvo} contra {volvemos}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El futuro es {ir} en presente más {a} más el infinitivo, y el infinitivo no flexiona: {voy a comer}, {va a venir}, {vamos a salir}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Después de {a} no puede haber otro verbo conjugado: {voy a ver}, nunca {voy a veo}.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{tener que}, {deber} y {hay que} rigen el infinitivo: {tengo que ir}, {debo ir}, {hay que ir}, y nunca una forma conjugada.',
      ),
    },
  ],
  notes: [
    {
      label: T('El verbo {ir} y {ser} tienen el mismo pasado'),
      text: T(
        '{fui} es de {ser} y de {ir}: {fui bueno} es {ser}, {fui a Roma} es {ir}. Y el plural cierra los dos igual: {fuimos}, {fueron}. El contexto es lo que dice cuál, y el verbo español no da ninguna pista.',
      ),
    },
    {
      label: T('El futuro que el portugués ya tenía'),
      text: T(
        'El portugués dice {vou comer} y {irei comer}, dos formas para la misma idea. El español conservó solo la primera: {voy a comer}. Traducir {irei} por {voy a} no pierde el sentido, y traducir {vou} por {voy a} tampoco; lo que se pierde es quien escribe {voy comer}.',
      ),
    },
  ],
  examples: [
    {
      text: 'En el principio era el Verbo.',
      gloss: T('{era}: pretérito de {ser}, 3.ª del singular.'),
    },
    {
      text: 'La luz resplandece en las tinieblas.',
      gloss: T('{resplandece}: presente, lo que está pasando en escena (Jn 1:5).'),
    },
    { text: 'Dios es amor.', gloss: T('Presente de {ser}: lo que Dios es (1 Jn 4:8).') },
    { text: 'Dios amó al mundo.', gloss: T('Pretérito de {amar}: lo que Dios hizo (Jn 3:16).') },
    { text: 'Voy a comer.', gloss: T('{ir} en presente más {a} más el infinitivo {comer}.') },
    { text: 'Voy al mercado.', gloss: T('{ir} con lugar: aquí no hay {a} ni infinitivo.') },
    { text: 'Tengo que irme.', gloss: T('Obligación personal con {tener que} e infinitivo.') },
    { text: 'Hay que irse.', gloss: T('Obligación impersonal, sin sujeto.') },
    {
      text: 'No pensé y luego se lo pedí.',
      gloss: T('La vocal de la bota: {pienso} y {pensamos}.'),
    },
    {
      text: 'Volvió a su casa.',
      gloss: T('En el pasado {volvió} vuelve a la {o}: solo el presente cambia.'),
    },
  ],
  tables: [
    {
      caption: T('Presente de los esenciales irregulares'),
      head: [T('Persona'), T('ir'), T('venir'), T('tener'), T('hacer'), T('decir')],
      rows: [
        ['yo', '{voy}', '{vengo}', '{tengo}', '{hago}', '{digo}'],
        ['tú', '{vas}', '{vienes}', '{tienes}', '{haces}', '{dices}'],
        ['él', '{va}', '{viene}', '{tiene}', '{hace}', '{dice}'],
        ['nosotros', '{vamos}', '{venimos}', '{tenemos}', '{hacemos}', '{decimos}'],
        ['vosotros', '{vais}', '{venís}', '{tenéis}', '{hacéis}', '{decís}'],
        ['ellos', '{van}', '{vienen}', '{tienen}', '{hacen}', '{dicen}'],
      ],
    },
    {
      caption: T('Pretérito de los irregulares'),
      head: [T('Verbo'), T('Singular'), T('Plural')],
      rows: [
        ['{ir}', '{fui, fuiste, fue}', '{fuimos, fuisteis, fueron}'],
        ['{ser}', '{fui, fuiste, fue}', '{fuimos, fuisteis, fueron}'],
        ['{estar}', '{estuve, estuviste, estuvo}', '{estuvimos, estuvisteis, estuvieron}'],
        ['{tener}', '{tuve, tuviste, tuvo}', '{tuvimos, tuvisteis, tuvieron}'],
        ['{hacer}', '{hice, hiciste, hizo}', '{hicimos, hicisteis, hicieron}'],
        ['{decir}', '{dije, dijiste, dijo}', '{dijimos, dijisteis, dijeron}'],
        ['{poder}', '{pude, pudiste, pudo}', '{pudimos, pudisteis, pudieron}'],
        ['{saber}', '{supe, supiste, supo}', '{supimos, supisteis, supieron}'],
      ],
    },
    {
      caption: T('Cambios de raíz en el presente'),
      head: [T('Verbo'), T('{nosotros}'), T('Forma tónica'), T('Cambio')],
      rows: [
        ['pensar', '{pensamos}', '{pienso}', '{e} → {ie}'],
        ['querer', '{queremos}', '{quiero}', '{e} → {ie}'],
        ['seguir', '{seguimos}', '{sigo}', '{e} → {i}'],
        ['dormir', '{dormimos}', '{duermo}', '{o} → {ue}'],
        ['volver', '{volvemos}', '{vuelvo}', '{o} → {ue}'],
        ['morir', '{morimos}', '{muero}', '{o} → {ue}'],
        ['jugar', '{jugamos}', '{juego}', '{u} → {ue}'],
        ['sentir', '{sentimos}', '{siento}', '{e} → {ie}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el presente de {volver} en 3.ª persona del singular?'),
    options: [T('vuelve'), T('vuelvo'), T('volve'), T('volvido')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el futuro: "Nosotros ___ a salir" (ir + a + salir).'),
      answer: 'vamos',
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con el cambio de raíz.'),
      pairs: [
        { a: T('{pienso}'), b: T('{e} → {ie}') },
        { a: T('{duermo}'), b: T('{o} → {ue}') },
        { a: T('{sigo}'), b: T('{e} → {i}') },
        { a: T('{juego}'), b: T('{u} → {ue}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración expresa obligación impersonal?'),
      options: [T('Tengo que irme.'), T('Debo irme.'), T('Hay que irse.'), T('Voy a irme.')],
      answer: 2,
    },
  ],
};
