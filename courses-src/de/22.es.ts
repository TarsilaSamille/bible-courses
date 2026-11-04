import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('Los verbos modales'),
  subtitle: T('können, müssen, sollen, wollen, mögen, dürfen'),
  section: T('Los verbos'),
  body: C(`## Qué es un verbo modal

Los verbos modales no nombran acciones: nombran la **actitud** de quien actúa frente a la acción. *können* es capacidad, *müssen* necesidad, *sollen* obligación o recomendación, *wollen* voluntad, *dürfen* permiso y *mögen* deseo o antipatia. En lugar de decir qué ocurrió, dicen cómo se coloca el hablante ante ello.

La huella visible está en la forma: los seis pierden la terminación **-en** en la primera y la tercera persona del singular. No es *ich kann-e*, es *ich kann*. El plural de primera y tercera persona vuelve al infinitivo: *wir können*, *sie können*.

## Posición y segundo verbo

El modal es siempre el **segundo** verbo de la proposición: *Ich muss jetzt gehen*, *Wir wollen das Buch lesen*. Y nunca aparece solo: necesita un infinitivo, que en la proposición principal va al final — *Er muss die Rechnung bezahlen*.

En el Perfekt y en el pasado, el participio del modal se sustituye por el infinitivo: en vez de *hat gekonnt* se dice *hat können können*. Por eso el Perfekt de los modales es enteramente **irregular** y siempre lleva un segundo infinitivo: *Sie hat kommen können*.

## Sustitución de la pasiva

Como un modal puede recibir la voz pasiva, basta acoplarlo con cualquier verbo en infinitivo: *Die Rechnung muss bezahlt werden*, *Die Fenster müssen gestrichen werden*. El sustantivo de agente (der Passivsatz) sobra y la frase queda mucho más corta. La Biblia de Lutero está llena de construcciones así.

## Lo esencial

Los modales ni conjujan como los verbos normales ni toman participio en el pasado: conjujan con la terminación corta y se reparan con el infinitivo. Y como no describen una acción, casi nunca admiten un objeto directo por sí solos — *Ich kann* necesita *das* o un infinitivo para decir qué es lo que se puede.`),
  vocab: [
    V('können', 'können', 'poder, ser capaz de'),
    V('kann', 'können', 'puede (3.ª persona e ich)'),
    V('müssen', 'müssen', 'tener que, deber'),
    V('sollen', 'sollen', 'deber, se supone que'),
    V('wollen', 'wollen', 'querer'),
    V('dürfen', 'dürfen', 'tener permiso, poder (con derecho)'),
    V('mögen', 'mögen', 'gustar, querer (concesivo)'),
    V('ich kann', 'können', 'yo puedo'),
    V('Sie hat kommen können', 'können', 'ella pudo venir (Perfekt con doble infinitivo)'),
    V('muss bezahlt werden', 'werden', 'tiene que ser pagado (sustitución de la pasiva)'),
    V(
      'Du sollst deinen Vater und deine Mutter ehren',
      'sollen',
      'honrarás a tu padre y a tu madre',
    ),
    V('Wir müssen die Fenster streichen', 'streichen', 'tenemos que pintar las ventanas'),
    V('Er will nicht kommen', 'wollen', 'él no quiere venir'),
    V('Das mag sein', 'mögen', 'puede ser (concesivo)'),
    V('Ich muss sofort gehen', 'gehen', 'tengo que ir inmediatamente'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la forma correcta de {können} en la tercera persona del singular?'),
    options: [T('kann'), T('kannen'), T('kannst'), T('könnt')],
    answer: 0,
    hint: T('Regla §1: en el singular no hay terminación -en.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el Perfekt: Ich habe arbeiten ___ (tuve que trabajar).'),
      answer: 'müssen',
      hint: T('Regla §3: el participio del modal es el propio infinitivo.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración forma la voz pasiva con un modal?'),
      options: [
        T('La carta tiene que escribirse.'),
        T('La carta debo yo escribir.'),
        T('¿Debo la carta escribir?'),
        T('La carta será debe escrita.'),
      ],
      answer: 0,
      hint: T('Regla §4: modal + infinitivo + werden.'),
    },
    {
      kind: 'fill',
      prompt: T('Traduce: {Du sollst deinen Vater und deine Mutter ehren}'),
      answer: 'you shall honour your father and your mother',
      hint: T('Es el cuarto mandamiento en la traducción de Lutero.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el modal con su valor'),
      pairs: [
        { a: T('dürfen'), b: T('permiso') },
        { a: T('müssen'), b: T('necesidad') },
        { a: T('sollen'), b: T('obligación o consejo') },
        { a: T('wollen'), b: T('voluntad propia') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La primera y la tercera persona del singular pierden la -en: ich kann, er muss, sie soll, du magst. El plural de primera y tercera es igual al infinitivo: wir können, sie mögen.',
      ),
    },
    {
      n: '2',
      text: T(
        'El modal ocupa la segunda posición y el infinitivo va al final: Du musst die Tür schließen.',
      ),
    },
    {
      n: '3',
      text: T(
        'En el Perfekt no hay participio: vuelve el propio infinitivo, y el auxiliar se va al final. Ich habe arbeiten müssen (no *gemusst).',
      ),
    },
    {
      n: '4',
      text: T(
        'Modal + infinitivo + werden da la pasiva sustitutiva: Die Briefe müssen heute geschrieben werden.',
      ),
    },
    {
      n: '5',
      text: T(
        'La negación de müssen vacía el valor: Ich muss significa «tengo que», pero Ich muss nicht significa «no necesito».',
      ),
    },
  ],
  notes: [
    {
      label: T('mögen tiene dos vidas'),
      text: T(
        'Con el sentido de «gustar», *mögen* se comporta como un verbo normal y admite objeto: *Ich mag Kaffee*. Con sentido concedente — «puede ser que» — el objeto desaparece y la frase se convierte en un comentario sobre lo que se admite: *Das mag sein*, *Er mag krank sein*. En esa segunda vida el verbo no dice nada del sujeto y se acerca a un conector, junto a *vielleicht* y *wohl*.',
      ),
    },
    {
      label: T('Lectura en Lutero'),
      text: T(
        'El cuarto mandamiento — *Du sollst deinen Vater und deine Mutter ehren* — usa *sollen*, no *müssen*. La diferencia no es cosmética: *müssen* diría que alguien desde fuera obliga, *sollen* dice que la voluntad misma es el fundamento. Igual, las bienaventuranzas empiezan todas por *Selig sind*, y los sermones de Lutero alternan *sollen* y *dürfen* para pasar de la Ley a la plenitud del Evangelio.',
      ),
    },
  ],
  examples: [
    { text: 'Ich kann gut schwimmen.', gloss: T('Sé nadar bien (capacidad).') },
    { text: 'Du musst die Tür schließen.', gloss: T('Tienes que cerrar la puerta (necesidad).') },
    {
      text: 'Du sollst deinen Vater und deine Mutter ehren.',
      gloss: T('Honrarás a tu padre y a tu madre (mandamiento).'),
    },
    {
      text: 'Hier darf man nicht rauchen.',
      gloss: T('Aquí no se puede fumar (permiso denegado).'),
    },
    {
      text: 'Die Rechnung muss bezahlt werden.',
      gloss: T('La factura tiene que ser pagada (pasiva con modal).'),
    },
    {
      text: 'Sie hat kommen können.',
      gloss: T('Ella pudo venir (doble infinitivo en el Perfekt).'),
    },
    { text: 'Wir haben nicht kommen dürfen.', gloss: T('No nos dejaron venir.') },
    {
      text: 'Er will morgen nach Berlin fahren.',
      gloss: T('Él quiere viajar a Berlín mañana (voluntad).'),
    },
    {
      text: 'Mag sein, er hat sich verspätet.',
      gloss: T('Puede ser que él se haya retrasado (concesivo).'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Presente de los seis modales'),
      head: [T('Infinitivo'), T('ich'), T('du'), T('er/sie/es'), T('wir'), T('ihr'), T('sie/Sie')],
      rows: [
        ['können', 'kann', 'kannst', 'kann', 'können', 'könnt', 'können'],
        ['müssen', 'muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen'],
        ['sollen', 'soll', 'sollst', 'soll', 'sollen', 'sollt', 'sollen'],
        ['wollen', 'will', 'willst', 'will', 'wollen', 'wollt', 'wollen'],
        ['dürfen', 'darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen'],
        ['mögen', 'mag', 'magst', 'mag', 'mögen', 'mögt', 'mögen'],
      ],
    },
    {
      caption: T('Tabla 2 — Lo que comunica cada modal'),
      head: [T('Modal'), T('Valor'), T('Oración de ejemplo')],
      rows: [
        ['können', 'capacidade, possibilidade', 'Ich kann gut schwimmen.'],
        ['müssen', 'necessidade interna ou externa', 'Ich muss früh aufstehen.'],
        ['sollen', 'ordem, instrução, conselho', 'Du sollst nicht lügen.'],
        ['wollen', 'vontade própria do sujeito', 'Er will nach Berlin.'],
        ['dürfen', 'permissão, autorização', 'Hier darf man nicht rauchen.'],
        ['mögen', 'gosto, desejo, concessivo', 'Mag sein, er hat Angst.'],
      ],
    },
  ],
};
