import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Essere e avere'),
  subtitle: T('los dos verbos esenciales'),
  section: T('El nombre y el verbo'),
  body: C(`## {Essere} cubre dos verbos del español

El italiano tiene un verbo donde el español tiene dos. {Essere} **significa ser y estar a la vez**, y la forma es la misma en los dos casos: {sono Marco} (soy Marco), {sono stanco} (estoy cansado), {sono medico} (soy médico), {la chiesa è in città} (la iglesia está en la ciudad). Quien traduce palabra por palabra escribe {io sono stanco}, que suena mal, porque {sono} aquí no es «ser» ni «estar»: es un solo verbo para las dos cosas.

La forma más común de decir «él es» es {lui è}, y es la que aparece por todas partes. Pero existe también {egli è}, que subraya: «egli è Dio» suena más fuerte que «lui è Dio», igual que «Él es el Señor» en español.

## Hambre, sed, sueño: {avere} también

{avere} significa tener, y **es el otro auxiliar**. Cubre lo que el español ya expresa con «tener»: {ho vent’anni}, {ho fame}, {ho sonno}, {ho freddo}. En italiano el hambre, la sed, el sueño, el frío y el calor **no tienen verbo propio**; todos usan {avere}. La diferencia del español aparece al traducir: «estoy con hambre» se vuelve {ho fame}, no {sono fame}.

Y hay un caso en que los dos verbos aparecen en la misma frase: {essere} dice quién es y {avere} dice qué tiene, {è medico e ha quarant’anni}. El traductor tiene que saber qué verbo español queda en cada mitad.

## Por qué los dos son esenciales

Estos dos verbos construyen casi todo lo que el italiano tiene de compuesto: el *passato prossimo* ({ho mangiato}, {sono andato}), el *futuro composto* ({avrò mangiato}, {sarò andato}) y el *condicional composto* ({avrei mangiato}, {sarei andato}). Quien no los sabe no puede formar ninguno de esos tiempos, y aparecen en casi cada página de texto bíblico.

Por eso lo primero que se busca en un texto italiano es {essere} o {avere}, antes del verbo principal. Casi todas las frases están construidas sobre ellos, y esa estructura es lo que hace que el italiano parezca más sencillo de lo que es.

## {Stato}, nombre y participio

{stato} es una palabra con dos valores: sustantivo, «estado», y participio de {essere}. {Sono stanco} usa el segundo; {lo stato della salute} usa el primero. Y como es participio flexiona: {stato}, {stata}, {stati}, {state}. El mismo {-ato} que hace el pasado de {essere} es también el sustantivo.

## En la Biblia

{Dio} suele aparecer sin artículo: {Dio è luce}, {Dio è amore}, {Dio è Dio}. El griego es lo contrario y lleva artículo casi siempre (ὁ θεός, ὁ ἄνθρωπος, ὁ λόγος). Que el nombre propio se quede sin artículo es la diferencia que el traductor tiene que notar: donde el griego dice «el Dios», el italiano suele decir solo {Dio}.`),
  vocab: [
    V('sono', 'essere', 'soy/estoy'),
    V('sei', 'essere', 'eres/estás'),
    V('è', 'essere', 'es/está'),
    V('siamo', 'essere', 'somos'),
    V('ho', 'avere', 'tengo'),
    V('hai', 'avere', 'tienes'),
    V('ha', 'avere', 'tiene'),
    V('abbiamo', 'avere', 'tenemos'),
    V('essere', 'essere', 'ser / estar'),
    V('avere', 'avere', 'tener'),
    V('stato', 'stato', 'estado; estado de'),
    V('chiesa', 'chiesa', 'iglesia'),
    V('città', 'città', 'ciudad'),
    V('fame', 'fame', 'hambre'),
    V('medico', 'medico', 'médico'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Completa: Noi ___ dalla Spagna.'),
    options: [T('siamo'), T('abbiamo'), T('sono'), T('hanno')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué frase indica profesión?'),
      options: [
        T('La chiesa è vicina.'),
        T('Sono medico.'),
        T('Ho venticinque anni.'),
        T('Dio è amore.'),
      ],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Completa: lui ___ un libro (tener)'),
      answer: 'ha',
      hint: T('Forma de lui/lei.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa: noi ___ in casa (essere, presente)'),
      answer: 'siamo',
      hint: T('Noi + siamo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Essere} cubre identidad, naturaleza, profesión y lugar: {sono Giovanni}, {è medico}, {la chiesa è in città}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Avere} une a la persona con lo que tiene: {ho vent’anni}, {ha fame}, {ha un libro}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Hambre, sed, sueño, frío y calor usan {avere} y no {essere}: {ho fame}, nunca {sono fame}.',
      ),
    },
    {
      n: '4',
      text: T(
        'En los tiempos compuestos los dos pasan a auxiliares: {ho mangiato}, {sono andato}, {avrò mangiato}, {sarei andato}.',
      ),
    },
    {
      n: '5',
      text: T('{Dio} prescinde del artículo y el griego no: {Dio è luce} junto a ὁ θεός.'),
    },
  ],
  notes: [
    {
      label: T('{Egli} contra {lui}'),
      text: T(
        '{egli è} suena más fuerte que {lui è}, y así es como el español traduce «Él es». La fuerza está en elegir la forma, no en el verbo: los dos dicen lo mismo, y el italiano usa el más flojo en el texto corriente y el más fuerte en la afirmación.',
      ),
    },
    {
      label: T('{Stato} dos veces'),
      text: T(
        '{stato} es sustantivo y participio a la vez. En {sono stanco} está el participio; en {lo stato della salute} está el sustantivo. Y, por ser participio de {essere}, flexiona: {stato}, {stata}, {stati}, {state}.',
      ),
    },
  ],
  examples: [
    { text: 'Dio è amore.', gloss: T('Dios es amor.') },
    { text: 'Maria ha letto il Vangelo.', gloss: T('María ha leído el Evangelio.') },
    { text: 'Sono stanco.', gloss: T('Estoy cansado.') },
    { text: 'Ho venticinque anni.', gloss: T('Tengo veinticinco años.') },
    { text: 'La chiesa è in città.', gloss: T('La iglesia está en la ciudad.') },
    { text: 'I discepoli hanno paura.', gloss: T('Los discípulos tienen miedo.') },
    { text: 'Egli è Dio.', gloss: T('Él es Dios.') },
    { text: 'Ha fame e ha sonno.', gloss: T('Tiene hambre y tiene sueño.') },
  ],
  tables: [
    {
      caption: T('Presente di essere e avere'),
      head: ['Persona', 'essere', 'avere'],
      rows: [
        ['io', 'sono', 'ho'],
        ['tu', 'sei', 'hai'],
        ['lui/lei', 'è', 'ha'],
        ['noi', 'siamo', 'abbiamo'],
        ['voi', 'siete', 'avete'],
        ['loro', 'sono', 'hanno'],
      ],
    },
    {
      caption: T('Qué verbo dice qué'),
      head: ['Cosa dice', 'essere', 'avere'],
      rows: [
        ['identità', 'sono Marco', '—'],
        ['stato', 'sono stanco', '—'],
        ['professione', 'è medico', '—'],
        ['luogo', 'la chiesa è in città', '—'],
        ['possesso', '—', 'ho un libro'],
        ['età e fame', '—', 'ha vent’anni, ha fame'],
      ],
    },
  ],
};
