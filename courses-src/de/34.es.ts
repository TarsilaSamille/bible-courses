import { C, T, V } from '../shared.mts';

export default {
  id: 34,
  title: T('La sintaxis avanzada'),
  subtitle: T('orden de los constituyentes, la segunda posición y el Nachfeld'),
  section: T('La sintaxis avanzada'),
  body: C(`## El orden de los constituyentes

El alemán tiene dos órdenes de palabras, y alternar entre ellas es lo que da al idioma su ritmo. En la **oración principal** el verbo conjugado ocupa la **segunda posición** (V2): el primer constituyente de la frase se adelanta y el verbo va justo detrás. Lo que ocupa ese primer lugar es libre —un adverbio, un objeto, el propio sujeto— y esa libertad produce el contraste entre {Heute Abend bin ich müde} y {Bin ich müde}, que solo es correcto como pregunta.

Si el primer constituyente es el sujeto, el verbo cierra la oración: {Der HERR ist mein Hirte}. Si es un adverbio, el sujeto se coloca detrás del verbo: {Heute Abend bin ich müde}. No se pierde nada: los mismos elementos aparecen en ambos casos, solo cambian las posiciones.

## La subordinada se invierte

En la **oración subordinada** el verbo conjugado se va al **último** lugar. La inversión es exacta: {..., weil ich müde bin} termina en {bin}, mientras que la principal correspondiente acaba en {ist}: {Ich bin müde, weil ich heute lange gearbeitet habe}. La misma inversión vale para todas las subordinadas —{dass}, {weil}, {obwohl}, {wenn}, {damit}, {als}— sin excepción.

La consecuencia práctica importa: en una subordinada introductoria la información nueva casi siempre llega antes del verbo. Compara {Ich weiß, dass Gott die Liebe ist} con {Ich weiß, dass die Liebe Gott ist}. La segunda es más enfática, porque el verbo {ist} es lo que queda en relieve al final.

## Conectar y sostener

El sustantivo regido por preposición es la espina dorsal de la frase: {ein Mann **mit** einem **Stock**} —cada preposición se coloca justo antes de su sustantivo—. Y {ein **Stock** aus **Holz**}, igual que {der Weg **zu** Gott}, sigue la misma norma. En {mit seinem Bruder} aparece el **dativo**: {mit} rige dativo, así que {seinem Bruder} queda en dativo, con terminación -m.

Hay más: en {ein Mann von großer Geduld}, {von} seguido de sustantivo sin artículo es un complemento de contenido, casi una preposición. Lo mismo vale para {aus}, {mit}, {von} y {zu} cuando la cosa se omite.

## Períodos largos

Cuando la oración se alarga, un constituyente situado al final de una cláusula puede saltar al **Nachfeld**, el campo posterior al verbo, y convertirse en la última información del período. En {Ich habe lange gewartet, und meine Freunde kamen endlich}, el dato decisivo es *por fin llegaron*. O con un inciso: {Die Bibel war, wie viele andere Bücher, von Gott}. El contenido explicativo se coloca al final precisamente para leerse al final.

## Cómo leer

Para traducir una oración larga, sigue siempre la misma ruta: localiza el verbo conjugado, encuentra el sujeto delante de él (o dentro de una cláusula entre paréntesis) y solo después reúne los objetos. Si el verbo está al final, estás en una subordinada y puede que tengas que retroceder dos constituyentes para hallar el sujeto.`),
  vocab: [
    V('zweite Position', 'zweite Position', 'segunda posición (verbo en V2)'),
    V('Endstellung', 'Endstellung', 'posición final del verbo en la subordinada'),
    V('Nachfeld', 'Nachfeld', 'campo posverbal de la cláusula'),
    V('Nebensatz', 'Nebensatz', 'oración subordinada'),
    V('Hauptsatz', 'Hauptsatz', 'oración principal'),
    V('weil', 'weil', 'porque (subordinada causal)'),
    V('obwohl', 'obwohl', 'aunque (subordinada concessiva)'),
    V('dass', 'dass', 'que (complemento oracional)'),
    V('damit', 'damit', 'para que (finalidad)'),
    V('weil ich müde bin', 'sein', 'porque estoy cansado (verbo al final)'),
    V(
      'Heute Abend bin ich müde.',
      'sein',
      'Esta noche estoy cansado (adverbio en primera posición)',
    ),
    V('mit seinem Bruder', 'mit', 'con su hermano (dativo)'),
    V('ein Mann von großer Geduld', 'von', 'un hombre de gran paciencia'),
    V('wie viele andere Bücher', 'wie', 'como muchos otros libros (inciso)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿En cuál de estas oraciones el verbo conjugado está en segunda posición?'),
    options: [
      T('Porque estoy cansado, me voy a dormir.'),
      T('Esta noche estoy cansado.'),
      T('Sé que Dios es el amor.'),
      T('El hombre con el bastón es mi padre.'),
    ],
    answer: 1,
    hint: T(
      'Regla §1: la subordinada manda el verbo al final; la principal lo coloca en segunda posición.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Completa con el verbo en la posición correcta: Ich weiß, dass Gott ___ Liebe ist.',
      ),
      answer: 'ist',
      hint: T('Regla §2: en la subordinada introductoria el verbo conjugado va al final.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué versión coloca el adverbio en la posición inicial correcta?'),
      options: [
        T('Esta noche estoy cansado.'),
        T('Esta noche estoy cansado (adverbio dentro del par V2).'),
        T('¿Estoy cansado esta noche?'),
        T('Yo esta noche estoy cansado.'),
      ],
      answer: 0,
      hint: T(
        'V2 significa el verbo en segunda posición, no después de dos palabras cualesquiera.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la estructura con su posición verbal'),
      pairs: [
        { a: T('Heute Abend bin ich müde.'), b: T('verbo en segunda posición') },
        { a: T('..., weil ich müde bin.'), b: T('verbo en la última posición') },
        {
          a: T('Die Bibel war, wie viele andere Bücher, von Gott.'),
          b: T('inciso en el Nachfeld'),
        },
        { a: T('mit seinem Bruder'), b: T('preposición con dativo') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'En la oración principal el verbo conjugado ocupa la segunda posición: el primer constituyente es libre, el verbo no. {Heute Abend bin ich müde} es correcto; {Heute Abend ich bin müde} no lo es.',
      ),
    },
    {
      n: '2',
      text: T(
        'En la subordinada el verbo conjugado ocupa el último lugar, después del sujeto y de todos los complementos: {weil ich heute lange gearbeitet habe}.',
      ),
    },
    {
      n: '3',
      text: T(
        'La posición inicial solo la ocupa el sujeto cuando este no está desplazado. Con sujeto implícito en el lugar o el destino, la frase abre con el adverbio: {Morgen fahre ich nach Berlin}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Toda preposición se coloca justo antes de su sustantivo o pronombre: {mit einem Stock}, {der Weg zu Gott}. Si la preposición es interrogativa, la pregunta se abre con ella: {Worauf wartest du?}.',
      ),
    },
    {
      n: '5',
      text: T(
        'El Nachfeld recibe lo que se adelantó o sirve de comentario; nunca recibe el sujeto ni el objeto directo mientras estos sigan disponibles en la frase.',
      ),
    },
  ],
  notes: [
    {
      label: T('Invertir o no invertir'),
      text: T(
        'Lo que cuesta a los principiantes es saber si la oración que están traduciendo es principal o subordinada. La pista más segura es el nexo: {weil}, {dass}, {obwohl}, {wenn}, {damit}, {als}, {bevor}, {nachdem} y {ob} nunca aparecen en oración principal. Si el texto tiene uno de ellos y el verbo conjugado está al final, no hay duda: estás ante una subordinada y el orden esperado es el inverso.',
      ),
    },
    {
      label: T('Enlazar el párrafo con el texto bíblico'),
      text: T(
        'El estilo de Lutero es un caso extremo de esa alternancia. Compara {Im Anfang war das Wort} —adverbio en primera posición, verbo en la segunda— con {Das Wort war am Anfang}: la misma información, el énfasis opuesto. Al traducir un versículo conviene hacer las dos versiones: la literal, que respeta la posición original, y la reordenada, que sube el verbo por comodidad del español. La diferencia entre ambas es siempre la diferencia entre lo que el texto destaca y lo que la gramática facilita.',
      ),
    },
  ],
  examples: [
    {
      text: 'Heute Abend bin ich müde.',
      gloss: T('Esta noche estoy cansado (adverbio en primera posición).'),
    },
    {
      text: 'Der HERR ist mein Hirte, mir wird nichts mangeln.',
      gloss: T('El SEÑOR es mi pastor, nada me faltará (sujeto en primera posición).'),
    },
    {
      text: 'Ich bin müde, weil ich heute lange gearbeitet habe.',
      gloss: T('Estoy cansado porque trabajé mucho hoy (verbo al final).'),
    },
    {
      text: 'Wir wissen, dass die Liebe Gott ist.',
      gloss: T('Sabemos que el amor es Dios (información nueva antes del verbo).'),
    },
    {
      text: 'Obwohl er müde war, blieb er stehen.',
      gloss: T('Aunque estaba cansado, se detuvo (subordinada antes de la principal).'),
    },
    {
      text: 'Ich spreche mit einem alten Mann.',
      gloss: T('Hablo con un anciano (preposición rige dativo -em).'),
    },
    {
      text: 'Ein Mann von großer Geduld',
      gloss: T('un hombre de gran paciencia (von sin artículo).'),
    },
    {
      text: 'Die Bibel war, wie viele andere Bücher, von Gott.',
      gloss: T('La Biblia fue, como muchos otros libros, por Dios (inciso en el Nachfeld).'),
    },
    {
      text: 'Ich habe lange gewartet, und meine Freunde kamen endlich.',
      gloss: T('Esperé mucho y mis amigos por fin llegaron (verbo al final del segundo miembro).'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Principal (V2) y subordinada (verbo final)'),
      head: [T('Lo que viene primero'), T('Oración principal'), T('Subordinada')],
      rows: [
        ['sujeito', 'Der HERR ist mein Hirte.', '..., weil Gott mein Hirte ist.'],
        ['advérbio', 'Heute Abend bin ich müde.', '..., weil ich heute müde bin.'],
        ['objeto', 'Seinen Bruder liebt er sehr.', '..., dass er seinen Bruder liebt.'],
        ['tempo', 'Morgen komme ich wieder.', '..., wenn ich morgen wiederkomme.'],
        ['conector', 'Trotzdem blieb ich stehen.', '..., obwohl ich müde war.'],
        ['modal', 'Ich muss jetzt gehen.', '..., dass ich jetzt gehen muss.'],
      ],
    },
    {
      caption: T('Tabla 2 — Campos de la cláusula en orden V2'),
      head: [T('Campo'), T('Contenido'), T('Ejemplo')],
      rows: [
        ['1 (Vorfeld)', 'sujeito, objeto, advérbio', 'Heute Abend ...'],
        ['2', 'verbo conjugado', '... bin ...'],
        ['3 (Mittelfeld)', 'complementos, argumentos', '... müde.'],
        ['4 (Endfeld)', 'informação nova, comentários', '... denn er kommt heute.'],
        ['5 (Nachfeld)', 'parêntese explicativo', '..., wie viele andere Bücher.'],
      ],
    },
  ],
};
