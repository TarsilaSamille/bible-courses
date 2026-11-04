import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('La voz pasiva'),
  subtitle: T('{être + participio}, {par} y el {on} sustituto'),
  section: T('Los verbos'),
  body: C(`## El auxiliar es siempre {être}

La pasiva francesa es más sencilla que la portuguesa: **un** auxiliar para todo, siempre {être}, conjugado en el tiempo que habría tenido el verbo directo. El participio concuerda con el sujeto, y nada más.

| Tiempo | Activa | Pasiva |
|---|---|---|
| presente | {Il écrit} | {Il est écrit} |
| imperfecto | {Il écrivait} | {Il était écrit} |
| futuro | {Il écrira} | {Il sera écrit} |
| passé composé | {Il a écrit} | {Il a été écrit} |
| más-que-perfecto | {Il avait écrit} | {Il avait été écrit} |
| condicional | {Il écrirait} | {Il aurait été écrit} |

Fíjate en que el auxiliar recibe **exactamente** las formas que habría recibido el verbo activo: si la activa va a {écrivait}, la pasiva va a {était écrit}. En el auxiliar no cambia nada.

## El participio, ese material único

El participio es una forma nominal con tres funciones a la vez: adjetivo ({une porte {fermée}}), verbo ({il a {fermé} la porte}) y sustantivo ({le {fermé} de la maison}). En francés tiene una sola rareza de flexión: las terminaciones {-é}, {-u}, {-i}, y la forma corta **con {s}** cuando queda sola, que es el resto de la {s} de {tu} que perdiste en el imperativo.

Formas irregulares que necesitas: {été} (de {être}), {eu}, {dû}, {crû}, {bu}, {pris}, {mis}, {vu}, {dit}, {fait}, {écrit}, {mort}, {né}, {venu}. El único grupo realmente frecuente es el de terminación en {-u}, y es ahí donde aparece la {s} final: {lû}, {dû}, {crû}, {bu}.

## El agente con {par}

{par} introduce el origen, la causa o el instrumento, en pasado o presente: {aimé par Dieu}, {écrit par la main de saint Jean}, {le texte fut écrit {par} un auteur inconnu}. En los textos antiguos {par} es más frecuente que {de}.

El agente explícito desaparece en el habla cotidiana: los hablantes evitan la pasiva con agente y dicen {Quelqu’un a pris mon livre} en lugar de {Mon livre a été pris par quelqu’un}. La pasiva vive entonces sin agente, o se convierte en frase con {on}.

## La sustituta: {on}

La pasiva por excelencia del francés hablado es la frase con {on}, pronombre indefinido congelado en el papel de sujeto:

- {On parle français} — se habla francés
- {On voit la mer d’ici} — se ve el mar desde aquí
- {On m’a dit que tu partais} — me dijeron que te ibas

Fíjate en que {on} es también sujeto del verbo **activo**: {On mange à midi}, «se come al mediodía». La construcción es la misma; solo cambia el tiempo. Por eso el manual clásico escribe {on} entre paréntesis como sujeto.

## Un tiempo distinto: el passé simple

La lectura bíblica en Segond vive de un tiempo que el portugués y el español han desterrado: el **passé simple**. Es el tiempo de la narración, el tiempo del relato:

- {Dieu créa les cieux et la terre} (Génesis 1:1)
- {Il fut crucifié} — fue crucificado
- {Jésus monta la montagne}
- {La loi fut donnée sur le Sinaï}

El passé simple es el **pasado narrativo**: convive con el presente, no con el imperfecto, y es el tiempo que hace que {Il alla} suene a cuento. En {Il fut crucifié}, ese {fut} es este mismo pasado; la pasiva en pasado simple se forma con {fut} más participio, sin {été}.

Y hay un matiz histórico: el passé simple es la terminación de un tiempo que el latín no tenía, y llegó a través del perfecto latino. Es la forma que dio nombre al *passé simple*, por oposición al *passé composé*, que es la novedad del siglo XIX.

## Aplicación: el texto

Lee {Le Verbe s’est fait chair} «La Palabra se hizo carne» (Jn 1:14): pasiva de {se faire}, con {est} en presente. Lee {Il a été jeté dans la prison}: passé composé pasivo con {été} más participio. Lee {La parole est devenue chair}.

La Escritura francesa antigua prefiere sistemáticamente el **pasado** para los hechos cumplidos: {Il a été crucifié}, {Elle a été prise}. La forma francesa de presente ({est ressuscité}) es una lectura perezosa a la que cae cada generación.`),
  vocab: [
    V('il est écrit', 'écrire', 'está escrito (pasiva presente)'),
    V('a été écrit', 'écrire', 'fue escrito (pasiva de passé composé)'),
    V('fut crucifié', 'crucifier', 'fue crucificado (pasado simple)'),
    V('été', 'être', 'sido (participio irregular de {être})'),
    V('dû', 'devoir', 'debido (participio en {û})'),
    V('pris', 'prendre', 'tomado (participio irregular)'),
    V('mis', 'mettre', 'puesto (participio irregular)'),
    V('vu', 'voir', 'visto (participio irregular)'),
    V('par Dieu', 'par', 'por Dios (agente)'),
    V('on parle français', 'parler', 'se habla francés ({on} en lugar del agente)'),
    V('on m’a dit', 'dire', 'me dijeron ({on} más objeto indirecto)'),
    V('la porte fermée', 'fermer', 'la puerta cerrada (participio como adjetivo)'),
    V('il fut appelé', 'appeler', 'fue llamado (el {fut} es el pasado simple)'),
    V('serait écrit', 'écrire', 'sería escrito (condicional pasiva)'),
    V('si fait', 'faire', 'se hace ({si} más {fait}, impersonal)'),
    V('a été pris', 'prendre', 'fue tomado (irregular en la pasiva)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'En «{Le texte a été écrit par un auteur inconnu}», ¿por qué aparece {été} antes de {écrit}?',
    ),
    options: [
      T('Porque {être} es el auxiliar de toda la pasiva y carga el tiempo ({a} = passé composé)'),
      T('Porque {écrit} no puede expresar el pasado por sí solo'),
      T('Porque {par} exige un auxiliar antes del participio'),
      T('Porque el participio de {être} es {été} y debe repetir el verbo'),
    ],
    answer: 0,
    hint: T('Regla §1: en la pasiva el tiempo entero va al auxiliar, y el participio no flexiona.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Participio de {prendre}: «Il a ___ ce livre» (pasado simple)'),
      answer: 'pris',
      hint: T('Irregular en {-is}, igual que {mis} y {dit}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el tiempo activo con su forma pasiva'),
      pairs: [
        { a: T('Il écrit'), b: T('{Il est écrit}') },
        { a: T('Il écrivait'), b: T('{Il était écrit}') },
        { a: T('Il écrira'), b: T('{Il sera écrit}') },
        { a: T('Il avait écrit'), b: T('{Il avait été écrit}') },
        { a: T('Il a écrit'), b: T('{Il a été écrit}') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase es la pasiva de Segond, con pasado simple?'),
      options: [
        T('{Il fut crucifié} — {fut} más participio, sin {été}'),
        T('{Il a été crucifié} — passé composé'),
        T('{Il est crucifié} — presente narrativo'),
        T('{Il crucifie} — presente simple'),
      ],
      answer: 0,
      hint: T(
        'El {fut} de la pasiva simple es la terminación {a} del tercer grupo, y no el verbo {être}: no hay {été} en medio.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La pasiva se forma con {être} en el tiempo correspondiente más el participio, que concuerda con el sujeto. El auxiliar es siempre {être}, aunque el verbo principal sea {avoir}.',
      ),
    },
    {
      n: '2',
      text: T(
        'El participio regular termina en {-é} en los verbos del 1.er y 2.º grupo, {-i} en el 3.º y {-u} en el 4.º. Solo, gana {s}: {pris}, {mis}, {acquis}.',
      ),
    },
    {
      n: '3',
      text: T(
        'En la pasiva el tiempo va **todo** al auxiliar: {a été} es el passé composé, {était} el imperfecto, {sera} el futuro. El participio nunca flexiona: solo concuerda en género y número.',
      ),
    },
    {
      n: '4',
      text: T(
        'El pasado simple pasivo es {fut} más participio, **sin** {été}: {il fut crucifié}, {la loi fut donnée}. Esa es la forma que encontrarás por todas partes en la lectura bíblica.',
      ),
    },
    {
      n: '5',
      text: T(
        '{par} introduce el agente; sin {par} y sin {on}, la pasiva omite el agente por decisión. En el habla cotidiana la frase con {on} casi siempre sustituye a la pasiva: {On parle français}, y no {Le français est parlé}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El passé simple está muriendo'),
      text: T(
        'El {passé simple} ({il fut, il alla, il vit}) es el tiempo del relato en el francés escrito, y abandonó el habla hace más de un siglo: nadie dice {il alla}. El habla usa {il est allé}. Pero la lectura bíblica en Segond está llena de él, porque es un texto del siglo XIX que sigue la convención narrativa de la Vulgata y de la revisión de 1810. Eso pone una trampa al estudiante: leerás {Jésus monta la montagne} y concluirás que {monta} es presente — es el pasado, disfrazado de igual al presente. El contexto te salva: {il monta la montagne} en presente exigiría una continuación, {il est monté}.',
      ),
    },
    {
      label: T('La lectura bíblica prefiere el pasado'),
      text: T(
        'Compara dos sistemas. El latín dice {Factum est corpus eius}, «se hizo carne». Segond escribe {Le Verbe s’est fait chair} (Jn 1:14), con {est} en presente. Una traducción moderna española escribe {El Verbo se hizo carne}, con el pasado simple. El francés antiguo eligió el presente, no por error, sino porque su pasiva de presente suena a hecho consumado: {est écrit} es más definitivo que {a été écrit}. Cuando traduzcas un versículo al portugués y salga «foi feito», recuerda que el francés original se quedó en {est}.',
      ),
    },
  ],
  examples: [
    { text: 'Le livre est lu.', gloss: T('el libro está siendo leído (presente)') },
    { text: 'La maison est décrite.', gloss: T('la casa está descrita (el participio concuerda)') },
    { text: 'Le texte a été écrit.', gloss: T('el texto fue escrito (pasiva de passé composé)') },
    { text: 'Il fut crucifié.', gloss: T('fue crucificado ({fut} más participio, sin {été})') },
    { text: 'Aimé par Dieu.', gloss: T('amado por Dios ({par} más agente)') },
    { text: 'On parle français.', gloss: T('se habla francés (pasiva con {on})') },
    { text: 'On m’a dit que tu partais.', gloss: T('me dijeron que te ibas') },
    {
      text: 'La parole est devenue chair.',
      gloss: T('la Palabra se hizo carne ({est} es presente narrativo)'),
    },
    { text: 'une porte fermée', gloss: T('una puerta cerrada (participio como adjetivo)') },
    { text: 'le prix dû', gloss: T('el precio debido ({dû} significa «debido»)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — tiempos de la pasiva'),
      head: [T('Tiempo'), T('Activa'), T('Pasiva'), T('Participio de {écrire}')],
      rows: [
        ['présent', 'il écrit', 'il est écrit', 'écrit'],
        ['imparfait', 'il écrivait', 'il était écrit', 'écrit'],
        ['futur simple', 'il écrira', 'il sera écrit', 'écrit'],
        ['passé composé', 'il a écrit', 'il a été écrit', 'écrit'],
        ['plus-que-parfait', 'il avait écrit', 'il avait été écrit', 'écrit'],
        ['conditionnel', 'il écrirait', 'il aurait été écrit', 'écrit'],
        ['passé simple', 'il écrivit', 'il fut écrit', 'écrit'],
        ['subjonctif', 'qu’il écrive', 'qu’il soit écrit', 'écrit'],
      ],
    },
    {
      caption: T('Tabla 2 — formas del participio'),
      head: [T('Terminación'), T('Ejemplos'), T('Glosa')],
      rows: [
        ['{-é}', 'aimé, fermé, parlé', 'amado, fechado, falado'],
        ['{-u}', 'vu, dû, reçu', 'visto, devido, recebido'],
        ['{-i}', 'pris, mis, fini', 'tomado, posto, terminado'],
        ['{-s} (sozinho)', 'pris, mis, acquis', 'tomado, posto, adquirido'],
        [
          'irregulares',
          'été, eu, fait, dit, vu, né, venu',
          'sido, tenido, hecho, dicho, visto, nacido, venido',
        ],
      ],
    },
  ],
};
