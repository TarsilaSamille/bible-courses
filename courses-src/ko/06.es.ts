import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  section: T('Verbo'),
  title: T('Los verbos esenciales'),
  subtitle: T(
    '{gada}, {oda}, {hada}, {itda}, {meokda}, {boda}: los verbos que sostienen casi toda frase',
  ),
  body: C(`## Las dos listas de verbos

Todo verbo coreano pertenece a una de dos listas, y la diferencia no es de sentido ni de estilo: es de flexión. Los verbos cuya raíz termina en vocal o en {-l} cambian de forma según el registro: {gada} «ir» hace {ga}, {gayo}, {gamnida}. Los verbos cuya raíz termina en otra consonante nunca cambian: {meokda} «comer» es la misma palabra en cualquier frase, y lo que cambia es la terminación que viene después.

La lista larga es la mayor parte del idioma, y es donde el principiante se traba, porque un verbo que no cambia parece equivocado dentro de la frase. La lista corta es corta de verdad: {gada} ir, {oda} venir, {hada} hacer, {boda} ver, {juda} dar, {sseuda} escribir, {masida} beber, {gareuchida} enseñar, {saranghada} amar responden por casi todo lo que se habla.

## {itda} y {eopda}: haber y no haber

{itda} cubre lo que el portugués reparte entre «haber», «estar» y «tener»: {chaek-i itda} es «hay un libro» y «tengo un libro», con el mismo verbo. {eopda} es su negación, y no la de otro verbo: {chaek-i eopda}, «no hay libro». Quien busca un verbo aparte para «tener» no lo encuentra, porque no existe.

Eso cambia la negación. Como {eopda} ya es el negativo de {itda}, la frase «no hay» no lleva el negador {an}: escribir {an itda} es negar dos veces.

## El pasado y las dos negaciones

El pasado se forma con {-at-} o {-eot-} entre la raíz y la terminación: {meokda} hace {meogeotda}, «comí», y {hada} hace {haetda}, «hice». Es el mismo sufijo en las dos listas, y por eso la lista larga no es tan inmóvil como parece: la raíz se queda, el pasado entra en el medio.

La negación tiene dos formas. {an} va antes del verbo: {an meokda}, «no como». Y {-ji anta} va después, con el auxiliar: {meokji anta}, «no como». Las dos dicen lo mismo, y la segunda es la que se usa cuando el verbo es largo o cuando la frase pide registro escrito.

## En la Biblia

Juan 1:1 abre con {gyesida}, el honorífico de {itda}: {taechoe malsseum-i gyesyeotda}, «en el principio era el Verbo». El coreano no usa {itda} puro para hablar de Dios: el verbo de la existencia recibe la marca de respeto, y el pasado {gyesyeotda} carga las dos cosas a la vez.

Juan 3:16 trae dos verbos esenciales en secuencia: {saranghasa}, de {saranghada} «amar», y {jusyeotda}, el pasado honorífico de {juda} «dar». Dios amó y dio, y los dos verbos son de la lista corta. Marcos 4:39 cierra con {jamjamhara! goyohara!}, «¡cállate! ¡cálmate!», que es el imperativo {-hara} sobre la raíz: el coreano manda sin sujeto y sin persona.`),
  vocab: [
    V('gada', '가다', 'ir'),
    V('ga', '가', 'voy (forma plana)'),
    V('gayo', '가요', 'voy (polido hablado)'),
    V('gamnida', '갑니다', 'voy (polido escrito)'),
    V('oda', '오다', 'venir'),
    V('hada', '하다', 'hacer'),
    V('haetda', '했다', 'hice'),
    V('itda', '있다', 'haber, estar, tener'),
    V('eopda', '없다', 'no haber'),
    V('gyesida', '계시다', 'haber (honorífico)'),
    V('meokda', '먹다', 'comer'),
    V('meogeotda', '먹었다', 'comí'),
    V('masida', '마시다', 'beber'),
    V('boda', '보다', 'ver'),
    V('deutda', '듣다', 'oír'),
    V('malhada', '말하다', 'decir'),
    V('alda', '알다', 'saber'),
    V('juda', '주다', 'dar'),
    V('jusida', '주시다', 'dar (honorífico)'),
    V('saranghada', '사랑하다', 'amar'),
    V('an', '안', 'no (antes del verbo)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'La raíz terminada en vocal o {-l} flexiona: {gada}, {ga}, {gayo}, {gamnida}. La raíz terminada en consonante no cambia: {meokda}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{itda} es «haber», «estar» y «tener» con el mismo verbo: {chaek-i itda} es «hay libro» y «tengo libro».',
      ),
    },
    {
      n: '§3',
      text: T(
        '{eopda} es el negativo de {itda}, y no lleva {an}: {chaek-i eopda}, nunca {an eopda}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El pasado entra con {-at-} o {-eot-} entre la raíz y la terminación: {meokda} → {meogeotda}, {hada} → {haetda}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'La negación corta {an} va antes del verbo; la larga {-ji anta} va después: {an meokda} y {meokji anta}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El itda que no es «ser»'),
      text: T(
        '{itda} no es la cópula. «Él es médico» es {geu-neun uisa-ida}, con {ida}, y no con {itda}. El {ida} identifica; el {itda} dice que algo existe o está en algún lugar.',
      ),
    },
    {
      label: T('El an que no entra en el pasado'),
      text: T(
        'La negación corta {an} queda antes del verbo y no se mueve en el pasado: {an meogeotda}, «no comí», mantiene el {an} delante y el pasado en el verbo.',
      ),
    },
  ],
  examples: [
    {
      text: '처음에 말씀이 계셨다',
      gloss: T('Jn 1:1 — {계시다} es el honorífico de {있다}: en el principio era el Verbo.'),
    },
    {
      text: '하나님이 세상을 사랑하사',
      gloss: T('Jn 3:16 — {사랑하사}, de {사랑하다}: Dios amó el mundo.'),
    },
    {
      text: '독생자를 주셨다',
      gloss: T('Jn 3:16 — {주셨다}, pasado honorífico de {주다}: dio al Hijo.'),
    },
    { text: '잠잠하라! 고요하라!', gloss: T('Mc 4:39 — imperativo de {-하라}: calla, cállate.') },
    { text: '책이 있다', gloss: T('{있다} con la partícula de sujeto: hay un libro.') },
    { text: '책이 없다', gloss: T('{없다} niega sin {안}: no hay libro.') },
    { text: '먹었다', gloss: T('pasado de {먹다}: comí.') },
    { text: '안 먹다', gloss: T('{안} antes del verbo: no como.') },
    { text: '먹지 않다', gloss: T('{-지 않다} después del verbo: no como.') },
  ],
  tables: [
    {
      caption: T('Los esenciales: diccionario, polido y pasado'),
      head: [T('Diccionario'), T('Polido'), T('Pasado'), T('Sentido')],
      rows: [
        [T('{gada}'), '{gamnida}', '{gatda}', T('ir')],
        [T('{oda}'), '{omnida}', '{watda}', T('venir')],
        [T('{hada}'), '{hamnida}', '{haetda}', T('hacer')],
        [T('{boda}'), '{bomnida}', '{boatda}', T('ver')],
        [T('{meokda}'), '{meokseumnida}', '{meogeotda}', T('comer')],
        [T('{juda}'), '{jumida}', '{jwotda}', T('dar')],
        [T('{alda}'), '{amnida}', '{aratda}', T('saber')],
      ],
    },
    {
      caption: T('Las dos negaciones'),
      head: [T('Forma'), T('Posición'), T('Ejemplo')],
      rows: [
        [T('{an}'), T('antes del verbo'), '{an meokda}'],
        [T('{-ji anta}'), T('después del verbo'), '{meokji anta}'],
        [T('{eopda}'), T('sustituye {itda}'), '{chaek-i eopda}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {taechoe malsseum-i gyesyeotda}, ¿cuál es el verbo de base?'),
    options: [T('{itda}'), T('{ida}'), T('{hada}'), T('{oda}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete «{doksaengja-reul ___}» con el pasado honorífico de {juda} (Jn 3:16).'),
      answer: 'jusyeotda',
    },
    {
      kind: 'match',
      prompt: T('Une el verbo con su pasado.'),
      pairs: [
        { a: T('{meokda}'), b: T('{meogeotda}') },
        { a: T('{hada}'), b: T('{haetda}') },
        { a: T('{gada}'), b: T('{gatda}') },
        { a: T('{oda}'), b: T('{watda}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué forma niega {itda}?'),
      options: [T('{an itda}'), T('{eopda}'), T('{itji anta}'), T('{anida}')],
      answer: 1,
    },
  ],
};
