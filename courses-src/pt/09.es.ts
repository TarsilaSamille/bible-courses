import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Futuro, condicional y mesóclisis'),
  subtitle: T('falaré, hablaría, decir-me-ás'),
  section: T('Los pronombres'),
  body: C(`## Un futuro que no es futuro

El futuro de indicativo se forma con el infinitivo más las terminaciones: {falar} + {+ei} = {falarei}. El condicional usa el mismo material: {falaria}. La diferencia de forma es mínima —una terminación— y la de sentido es enorme: el futuro expresa predicción o compromiso ({virá}, {não falta}), mientras el condicional expresa hipótesis, posibilidad o cortesía ({seria}, {poderia}, {gostaria}).

Y aquí está la trampa: **la forma de futuro no garantiza sentido temporal**. El portugués es generoso con el futuro para afirmaciones categóricas: en las profecías, el futuro puede ser inmediato («El que viene está a la puerta») o puede ser certeza («el Hijo del Hombre vendrá»). El griego hace lo mismo (μέλλω), y es la mezcla de tiempo con certeza la que produce las dos lecturas.

## Condicional e hipótesis: lo que el griego no tiene

El condicional portugués es más rico que el griego para las hipótesis, porque el griego usa el subjuntivo (ἐάν τις ἔλθῃ) y el portugués tiene que encadenar: {se alguém vier, ...}, {se viesse, ...}. Los tres tiempos portugueses —{se vier} (futuro de subjuntivo), {se viesse} (imperfecto), {se tivesse vindo} (pluscuamperfecto)— cubren lo que el griego resuelve con una sola forma.

Por eso traducir un subjuntivo griego tan a menudo obliga a añadir un «se» que no estaba. No siempre es error: a veces es la única manera de decirlo en portugués. Pero cuando el griego está en **optativo** (ἐάν τις ἔλθῃ, ὄφρα, ὡς) y el portugués tira la condición, la traducción ha perdido algo.

## La mesóclisis en el portugués bíblico

{dir-me-ás} es el caso extremo: la forma directa del futuro de indicativo, con el pronombre entre {dir} y {ás}. No es un error ni un dialecto: es el portugués arcaizante conservado en traducciones antiguas y en formas como {fazei-me} y {dar-te-ei}.

La mesóclisis salió del uso en el portugués moderno, pero sigue apareciendo en texto literario, bíblico o juramentado. Quien lea Gálatas o Hebreos en una traducción antigua encuentra esta forma a menudo, y no conviene «corregirla» de {dir-me-ás} a {dirás-me} sin saber lo que se hace.

## Criterio de lectura

Cada vez que veas un verbo en futuro, pregunta: ¿es predicción o hipótesis? Si es hipótesis, ¿es condicional o futuro de subjuntivo? Y si el texto es antiguo, ¿hay forma **mesoclítica**? Persona, número y pronombre son contenido, no forma, y por eso el griego casi siempre hay que leerlo, no solo traducirlo.`),
  vocab: [
    V('falarei', 'falar', 'hablaré'),
    V('virá', 'vir', 'vendrá'),
    V('falaria', 'falar', 'hablaría'),
    V('seria', 'ser', 'sería'),
    V('direi', 'dizer', 'diré'),
    V('farei', 'fazer', 'haré'),
    V('dir-me-ás', 'dizer', 'me dirás'),
    V('louvar-te-ei', 'louvar', 'te alabaré'),
    V('verá', 'ver', 'verá'),
    V('poderia', 'poder', 'podría (condicional)'),
    V('louvar', 'louvar', 'alabar'),
    V('olho', 'olho', 'ojo (mirar; también ojo)'),
    V('pronome', 'pronome', 'pronombre'),
    V('hipótese', 'hipótese', 'hipótesis'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué forma es condicional?'),
    options: [T('hablaré'), T('hablaría'), T('hablaba'), T('habló')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «todo ojo lo ___».'),
      answer: 'verá',
      hint: T('Futuro de ver.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Dónde aparece la mesóclisis?'),
      options: [T('me dirás'), T('dime ahora'), T('que me dirás'), T('me será dicho')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona tiempo y función.'),
      pairs: [
        { a: T('futuro'), b: T('predicción') },
        { a: T('condicional'), b: T('hipótesis') },
        { a: T('mesóclisis'), b: T('pronombre dentro del verbo') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El futuro y el condicional salen del mismo infinitivo: {falar} más {+ei} da {falarei}, y {falar} más {+ia} da {falaria}. La terminación es la única diferencia, y el sentido cambia entero: previsión ({virá}) contra hipótesis ({seria}).',
      ),
    },
    {
      n: '§2',
      text: T(
        'Forma de futuro no es sentido temporal: {Aquele que vem está na porta} usa el presente para algo inmediato, y {o Filho do homem virá} usa el futuro para una certeza. El griego hace lo mismo con {μέλλω}, y es la mezcla de tiempo y certeza la que produce las dos lecturas.',
      ),
    },
    {
      n: '§3',
      text: T(
        'La hipótesis se hace con tres tiempos que el griego resuelve con uno: {se vier} (futuro de subjuntivo), {se viesse} (imperfecto) y {se tivesse vindo} (pluscuamperfecto). {Se vier} habla del futuro, {se viesse} del irreal y {se tivesse vindo} del irreal anterior.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{dir-me-ás} es mesóclisis: el pronombre {me} queda **entre** {dir} y {ás}. En portugués moderno la forma es {dirás-me}, y la mesóclisis sobrevive en texto literario, bíblico y juramentado ({dar-te-ei}, {louvar-te-ei}).',
      ),
    },
    {
      n: '§5',
      text: T(
        'El griego resuelve la hipótesis con el optativo ({ἐάν τις ἔλθῃ}, {ὄφρα}, {ὡς}), y el portugués necesita encadenar {se} más condicional ({se alguém vier}). Traducir el optativo sin la condición pierde la hipótesis, y no es la flexión la que la repone.',
      ),
    },
  ],
  notes: [
    {
      label: T('Registro'),
      text: T(
        'Formas como {louvar-te-ei} pertenecen a un registro elevado; el portugués actual prefiere «eu te louvarei». La mesóclisis salió del uso cotidiano y sigue en Gálatas, Hebreus y en los juramentos.',
      ),
    },
    {
      label: T('El griego también tiene futuro'),
      text: T(
        'El griego tiene {μέλλω} más infinitivo ({μέλλω λέγειν}, «está para decir») y un futuro verbal propio ({λέψω}). El portugués bíblico prefiere el futuro sintético ({digo}, {farei}) donde el griego usaba {μέλλω}.',
      ),
    },
  ],
  examples: [
    { text: 'Todo olho o verá.', gloss: T('Futuro ({verá}) con sentido de certeza.') },
    {
      text: 'Ele falaria se tivesse tempo.',
      gloss: T('Condicional en el irreal: hipótesis no cumplida.'),
    },
    {
      text: 'Se viesse, eu o ouviria.',
      gloss: T('{viesse} más {ouviria}: hipótesis en el presente.'),
    },
    {
      text: 'Se viesse eu, tudo mudaria.',
      gloss: T('La posición de {viesse} no cambia el tiempo.'),
    },
    { text: 'Dir-me-ás o que devo.', gloss: T('Mesóclisis: pronombre entre {dir} y {ás}.') },
    { text: 'Louvar-te-ei, Senhor.', gloss: T('Mesóclisis con verbo de movimiento ({louvar}).') },
    { text: 'Dar-te-ei mais do que mereces.', gloss: T('Mesóclisis en registro elevado.') },
    { text: 'A cobiça acabaria com ele.', gloss: T('Condicional: posibilidad, no previsión.') },
    { text: 'Aquele que vem está à porta.', gloss: T('Presente con sentido de futuro inmediato.') },
  ],
  tables: [
    {
      caption: T('Futuro y condicional, persona por persona'),
      head: ['Pessoa', 'Futuro', 'Condicional'],
      rows: [
        ['eu', 'falarei', 'falaria'],
        ['tu', 'falarás', 'falarias'],
        ['ele', 'falará', 'falaria'],
      ],
    },
    {
      caption: T('Los tres tiempos de la hipótesis'),
      head: ['Tempo', 'Forma', 'Exemplo'],
      rows: [
        ['futuro do subjuntivo', 'se vier', 'se vier, eu vou'],
        ['imperfeito', 'se viesse', 'se viesse, eu iria'],
        ['mais-que-perfeito', 'se tivesse vindo', 'se tivesse vindo, eu teria ido'],
      ],
    },
    {
      caption: T('Próclisis y mesóclisis con el mismo pronombre'),
      head: ['Forma', 'Onde está o pronome', 'Registro'],
      rows: [
        ['dirás-me', 'depois do verbo', 'atual'],
        ['dir-me-ás', 'entre {dir} e {ás}', 'bíblico'],
        ['dar-te-ei', 'entre {dar} e {ei}', 'elevado'],
      ],
    },
  ],
};
