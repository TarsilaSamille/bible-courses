import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('Verbo'),
  title: T('El pasivo: {被} y {把}'),
  subtitle: T('El pasivo que el mandarín casi evita, y la construcción que usa en su lugar'),
  body: C(`
## {被} marca el pasivo, y el agente va después

El portugués forma el pasivo con el verbo *ser*: "ele foi batido". El mandarín no tiene esa forma. Usa la partícula **{bèi}** ({被}) pegada al verbo: {tā bèi dǎ le}, "fue batido". La posición es fija, **sujeto + {bèi} + verbo**, y el {bèi} no es una preposición de regencia: es una etiqueta.

El punto que casi todo el mundo pierde está al final de la frase. En portugués el agente va antes del participio, "fue batido por João". En mandarín va después de todo el sintagma verbal, o no va: {tā bèi dǎ le}, punto final, "fue batido", y nadie sabe por quién. Cuando el agente aparece, aparece al final: {shū bèi tā dǎ le}, "el libro fue batido por él".

O sea: la misma información cabe en los dos idiomas, en posiciones opuestas. El portugués adelanta el agente; el mandarín lo aplaza. Quien traduce del portugués al mandarín y deja el agente al principio produce una frase que suena a traducción.

## {把}: el par con {被}

Y esa es la razón de que {bèi} sea raro en el habla: el mandarín casi siempre dice lo mismo de otro modo. Donde el portugués recurriría al pasivo, el mandarín usa **{bǎ}** ({把}), que sube el objeto y convierte la cosa tratada en el punto de la frase.

{wǒ bǎ shū kàn le}, "yo leí el libro". Sujeto + {bǎ} + objeto + verbo. El objeto es lo que se trata, y al mandarín le gusta mostrar la cosa más que la pasión del sujeto.

Compara con el pasivo equivalente: {shū bèi wǒ kàn le}, "el libro fue leído por mí". Las dos frases dicen lo mismo. La segunda marca que el libro sufrió la acción; la primera marca que el libro es el objeto en **foco**. El mandarín prefiere la primera casi siempre, y por eso el {bèi} aparece tanto en texto escrito y expositivo, en comentario teológico, y tan poco en el habla cotidiana.

Son dos miembros de un par, y la elección entre ellos es una elección de foco, no de sentido:

- {bǎ} destaca el objeto: {wǒ bǎ shū kàn le}, "yo leí el libro".
- {bèi} destaca el sujeto que sufre la acción: {shū bèi wǒ kàn le}, "el libro fue leído por mí".

Se usa {bǎ} cuando el objeto es conocido y ya está en foco, lo que en la práctica es casi siempre. Se usa {bèi} cuando el sujeto sufre la acción, o cuando el agente es la información importante y hay que nombrarlo. Las dos construcciones pueden convivir en una misma frase con sujetos distintos: {wǒ bǎ shū kàn le, tā bèi wǒ qù le háng}, "yo leí el libro; él fue al banco por mí". Una subordinada con {bǎ}, otra con {bèi}: la frase no queda desequilibrada, porque cada mitad destaca lo que necesita destacar.

## {被} que hace: el uso causativo

El punto más delicado es que el {bèi} también significa "hacer algo", y las dos lecturas son casi idénticas en la superficie.

{bèi} + sustantivo = "ser algo hecho por alguien": {bèi tā kànjiàn}, "ser visto por él". {wǒ bèi tā pīpíng le}, "yo fui elogiado por él". Misma palabra, misma posición, y nada en la forma escrita dice si la frase es pasiva o causativa. Lo que decide es la **naturaleza del verbo**: en {bèi tā kànjiàn}, {tā} es el agente y {kànjiàn}, "ver", es la acción, y el sujeto de la frase es el objetivo. Con sustantivo en lugar de verbo, la construcción con {bèi} es casi siempre causativa: {bèi nà lóu} es literalmente "ser el resultado de derribar a alguien", es decir, "ser derribado por alguien"; {bèi shā rén}, "ser muerto asesino", quiere decir "ser asesinado por alguien", y el agente puede omitirse.

Y es ese uso el que la {和合本} prefiere al traducir el pasivo bíblico. En Isaías 53:3, {tā bèi wǒmen de zuì suǒ kǔ}, "fue angustiado por nuestros pecados". El {bèi} es pasivo; el agente, {wǒmen de zuì}, está en medio, dentro de un sustantivo, y no al final como lo pondría el portugués. El {suǒ} convierte el verbo {kǔ}, "sufrir", en sustantivo agentivo, y es esa construcción, {bèi} más agente nominalizado más {suǒ} más verbo, la que el chino bíblico usa para decir "fue angustiado por". Compara con Mateo 27:46, {bèi dīng le}, "fue clavado": el mismo {bèi}, sin agente alguno, porque la cruz es el agente implícito y nombrarlo sería un escándalo.

## La negación con {被} y {把}

La negación va antes del verbo, y la posición es fija: {wǒ bù chī}, la partícula pegada al verbo. Con {bèi} y {bǎ} la situación es otra, porque esas dos palabras desplazan el verbo de sitio. En {tā bèi dǎ le}, el {dǎ} ya no está pegado al sujeto: hay una partícula entre los dos. En {wǒ bǎ shū kàn le}, el {kàn} fue empujado más allá del objeto. Y la negación se adapta: sigue siendo {méi} ({没}), no {bù}, y entra antes del {bèi} o del {bǎ}, {tā méi bèi dǎ}, "no fue batido", {wǒ méi bǎ shū kàn wán}, "no leí el libro entero". Quien escribe {bù} por costumbre donde el mandarín exige {méi} produce una frase que suena rara sin que nadie sepa decir por qué.`),
  vocab: [
    V('被', '被', 'partícula pasiva; con sustantivo, "ser hecho por" (bèi)'),
    V('把', '把', 'partícula que destaca el objeto y va antes del verbo (bǎ)'),
    V('打', '打', 'golpear; hacer (dǎ)'),
    V('书', '书', 'libro (shū)'),
    V('看', '看', 'ver; leer (kàn)'),
    V('罪', '罪', 'pecado (zuì)'),
    V('所', '所', 'nominalizador "aquello que"; forma agente de un verbo (suǒ)'),
    V('苦', '苦', 'sufrir; ser angustiado (kǔ)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El pasivo es sujeto + {bèi} + verbo: {tā bèi dǎ le}. El {bèi} es etiqueta, no preposición.',
      ),
    },
    { n: '2', text: T('El agente va DESPUÉS del sintagma verbal, o no va: {shū bèi tā dǎ le}.') },
    {
      n: '3',
      text: T(
        'La construcción con {bǎ} es sujeto + {bǎ} + objeto + verbo, y sustituye al pasivo en el habla: {wǒ bǎ shū kàn le}.',
      ),
    },
    {
      n: '4',
      text: T(
        'El {bǎ} destaca el objeto; el {bèi} destaca el sujeto que sufre la acción. La elección es de foco, no de sentido.',
      ),
    },
    {
      n: '5',
      text: T(
        '{bèi} + sustantivo es causativo, "ser hecho por": {bèi tā kànjiàn} es "ser visto por él".',
      ),
    },
  ],
  notes: [
    {
      label: T('El agente nunca va antes'),
      text: T(
        'El portugués escribe "fue batido por João" y pone el agente delante. El mandarín escribe {shū bèi tā dǎ le} y pone el agente al final. Lo que es información nueva en portugués se adelanta; en mandarín se aplaza.',
      ),
    },
    {
      label: T('Con {bèi} la negación es {méi}'),
      text: T(
        '{tā méi bèi dǎ} — "no fue batido". El {méi} entra antes del {bèi}, no pegado al verbo como en la lección 9, y el {bù} suena mal ahí: el {bèi} y el {bǎ} desplazan el verbo, y el mandarín se queda con la negación de pasado.',
      ),
    },
  ],
  examples: [
    { text: '他被打了', gloss: T('tā bèi dǎ le — fue batido') },
    { text: '書被他看了', gloss: T('shū bèi tā kàn le — el libro fue leído por él') },
    { text: '我把書看了', gloss: T('wǒ bǎ shū kàn le — yo leí el libro') },
    {
      text: '他被我們的罪所苦',
      gloss: T('tā bèi wǒmen de zuì suǒ kǔ — fue angustiado por nuestros pecados (Isaías 53:3)'),
    },
  ],
  tables: [
    {
      caption: T('La misma acción en tres construcciones'),
      head: [T('Frase'), T('Construcción'), T('Lo que se destaca'), T('Portugués')],
      rows: [
        [
          T('{wǒ kàn le shū}'),
          T('sujeto — verbo — objeto, la forma neutra'),
          T('la acción'),
          T('yo leí el libro'),
        ],
        [
          T('{wǒ bǎ shū kàn le}'),
          T('{bǎ}: el objeto sube antes del verbo'),
          T('el objeto'),
          T('yo leí el libro, con el libro en foco'),
        ],
        [
          T('{shū bèi wǒ kàn le}'),
          T('{bèi}: pasivo con agente explícito'),
          T('el sujeto que sufre'),
          T('el libro fue leído por mí'),
        ],
      ],
    },
    {
      caption: T('{bèi} y {bǎ} lado a lado'),
      head: [T('Partícula'), T('Posición'), T('Realce'), T('Cuándo se usa')],
      rows: [
        [
          T('{bèi}'),
          T('sujeto + {bèi} + verbo'),
          T('el sujeto sufre la acción'),
          T('cuando hay que nombrar al agente, o va después'),
        ],
        [
          T('{bǎ}'),
          T('sujeto + {bǎ} + objeto + verbo'),
          T('el objeto es tratado'),
          T('cuando el objeto ya está en foco — casi siempre'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {書被我看了}, ¿qué marca el {bèi}?'),
    options: [
      T('El objeto, subido al frente'),
      T('El paso del sujeto, que sufre la acción'),
      T('La negación de la acción'),
      T('El tiempo de la acción'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "fue batido" con la partícula del pasivo: 他____打了'),
      answer: '被',
    },
    {
      kind: 'match',
      prompt: T('Une la construcción con lo que destaca'),
      pairs: [
        { a: T('{bèi}'), b: T('el sujeto que sufre la acción') },
        { a: T('{bǎ}'), b: T('el objeto en foco') },
        { a: T('agente al final del sintagma'), b: T('solo es posible con {bèi}') },
        { a: T('{méi} antes del {bèi}'), b: T('la negación del pasivo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Para decir "yo leí el libro" de la manera más natural del mandarín, ¿qué forma?'),
      options: [T('{書被我看了}'), T('{我把書看了}'), T('{被書我看了}'), T('{我書看了}')],
      answer: 1,
    },
  ],
};
