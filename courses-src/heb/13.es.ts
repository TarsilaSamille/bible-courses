import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Lectura: Salmo 23:1-3'),
  subtitle: T('יְהוָה רֹעִי — el salmo más amado, palabra por palabra'),
  section: T('Formas no finitas y guturales'),
  body: C(`## El texto

{יְהוָה רֹעִי לֹא אֶחְסָר} «El SEÑOR es mi pastor; nada me faltará»

{בִּנְאוֹת דֶּשֶׁא יַרְבִּיצֵנִי} «en pastos verdes me hace descansar»

{עַל־מֵי מְנֻחוֹת יְנַהֲלֵנִי} «junto a aguas tranquilas me conduce»

{נַפְשִׁי יְשׁוֹבֵב} «restaura mi alma»

Cuatro versículos, y casi todo lo que has estudiado hasta aquí está aquí.

## Versículo 1: el sustantivo con sufijo

{רֹעִי} es el sustantivo {רֹעֶה} «pastor» con el sufijo {־ִי} (cap. 8). Fíjate en que **no es un participio**: {רֹעִי} es un nombre común con posesivo, y toda la cláusula es una cláusula nominal, algo perfectamente normal en hebreo: {אֱלֹהִים טוֹב} «Dios es bueno» no tiene verbo alguno.

{אֶחְסָר} es el qatal de 1.ª persona de {חסר} «faltar». Con {לֹא} delante, un qatal negado traduce el presente: «no me falta»; las traducciones portuguesas y españolas usan el futuro («nada me faltará»). La negación del perfectivo es uno de los recursos más elegantes de la lengua, y te la vas a encontrar por todo el Salmo.

Un detalle: o SENHOR es el nombre divino por excelencia, escrito {י} + {ה} + {ו} + {ה} para no decir «Adonai» (véase el cap. 13).

## Versículo 2: constructo, hifil y sufijo

{בִּנְאוֹת דֶּשֶׁא} es una cadena de constructo: {ב} «en» + el plural de {נֶאֶה} «pastura» ({בִּנְאוֹת}) + {דֶּשֶׁא} «verdura». La traducción lo agrupa: «en pastos de hierba» = «en pastos verdes».

{יַרְבִּיצֵנִי} es el verbo más interesante del versículo: raíz {רבץ} «tumbarse», molde **hifil** («hacer tumbarse»), con el sufijo {־נִי} «me». Portugués y español lo traducen con un verbo transitivo («me hace tumbarme») donde el hebreo usa un causativo. Recuerda: hifil = «hacer que alguien haga» (cap. 9).

La vocal {ֵ} en lugar del {ַ} habitual muestra lo que el sufijo {־נִי} le hace al verbo; es la misma regla que en {שְׁמָרַנִי}.

## Versículo 3: maqaf, constructo y piel

{עַל־מֵי מְנֻחוֹת} trae tres cosas en un versículo: maqaf uniendo {עַל} «junto a» con {מֵי} «aguas» (constructo de {מַיִם}, cap. 7); y {מְנֻחוֹת}, plural de {מְנוּחָה} «descanso» con {־וֹת} en lugar de {־ִים} porque el sustantivo es femenino (cap. 3).

{יְנַהֲלֵנִי} es hifil de {נהל} «guiar» + {־נִי}.unas palabras después, en el mismo versículo, {יְשׁוֹבֵב} es el **piel** de {שׁוב} «volver»: el piel de este verbo significa «traer de vuelta» = «restaurar». Fíjate en la diferencia: {נהל} en hifil es «conducir» (acción), {שׁוב} en piel es «restaurar» (transformación del objeto).

{נַפְשִׁי} merece una nota: {נֶפֶשׁ} significa a la vez «alma», «garganta» y «apetito». En los salmos, «mi alma» suele llevar el tono de «todo lo que deseo».

## Lo que enseña este salmo

El Salmo 23 es un retrato completo de la gramática: sustantivo + sufijo (v. 1), constructo (v. 2-3), hifil con objeto (v. 2-3), piel (v. 3), dual de {מַיִם} (v. 3), plural femenino (v. 3), qatal negado (v. 1), nombre divino (v. 1). Quien entiende los versículos 1-3 entiende el hebreo poético, y el resto del salmo es aplicación.

Si quieres cerrar el salmo: en el versículo 6 vuelve {רוּחַ} «viento/espíritu» al mismo tiempo que {שׁוב} «volver» y {נַפְשִׁי} «alma»: {וְשָׂבַת רוּחַ} es «y tú volverás», con el verbo {שׁבַת} (qatal) en lugar del piel. El cambio de molde cambia el tono: de «me restaura» a «y tú vuelves».`),
  vocab: [
    V('רֹעִי', 'רֹעֶה', 'mi pastor'),
    V('יְהוָה', 'יהוה', 'el SEÑOR'),
    V('אֶחְסָר', 'חסר', 'me falta'),
    V('לֹא', 'לֹא', 'no, nunca'),
    V('יַרְבִּיצֵנִי', 'רבץ', 'me hace descansar'),
    V('מְנֻחוֹת', 'מְנוּחָה', 'descansos (pl. fem.)'),
    V('יְנַהֲלֵנִי', 'נהל', 'me conduce'),
    V('נַפְשִׁי', 'נֶפֶשׁ', 'mi alma'),
    V('יְשׁוֹבֵב', 'שׁוב', 'restaura (piel)'),
    V('דֶּשֶׁא', 'דֶּשֶׁא', 'verdura, hierba'),
    V('בִּנְאוֹת', 'נֶאֶה', 'pastizales'),
    V('רוּחַ', 'רוּחַ', 'viento, espíritu'),
    V('צַלְמַוֶת', 'צַלְמָוֶת', 'sombra de muerte'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué significa el sufijo en «רֹעִי»?'),
    options: [
      T('«mi» (mi pastor)'),
      T('«suyo» (su pastor)'),
      T('plural (pastores)'),
      T('femenino (pastora)'),
    ],
    answer: 0,
    hint: T('Es la misma {־ִי} que en {סוּסִי} «mi caballo» (cap. 8).'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué significa {יַרְבִּיצֵנִי} literalmente?'),
      options: [
        T('«descansó»'),
        T('«me hace descansar» (hifil + objeto)'),
        T('«yo me tumbo»'),
        T('«repara»'),
      ],
      answer: 1,
      hint: T('Regla §3: el hifil es causativo, y {־נִי} es el objeto «me».'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la palabra con su análisis.'),
      pairs: [
        { a: '{רֹעִי}', b: T('sustantivo + sufijo') },
        { a: '{מְנֻחוֹת}', b: T('plural femenino') },
        { a: '{יְשׁוֹבֵב}', b: T('piel') },
        { a: '{מֵי}', b: T('dual en constructo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En {לֹא אֶחְסָר}, el qatal negado {אֶחְסָר} traduce:'),
      options: [
        T('pasado: «no me faltó»'),
        T('presente: «no me falta»'),
        T('imperativo: «no faltes»'),
        T('condicional: «si no faltara»'),
      ],
      answer: 1,
      hint: T('Regla §2: {לֹא} + qatal = presente negado.'),
    },
    {
      kind: 'fill',
      prompt: T(
        'Completa el versículo 1 del Salmo 23 con sustantivo + sufijo: «יְהוָה ___» (mi pastor).',
      ),
      answer: 'רֹעִי',
      hint: T('{רֹעֶה} + {־ִי} forma «pastor en el campo»: el sufijo marca posesión.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{רֹעִי} es sustantivo + sufijo, no participio: el hebreo admite cláusulas nominales sin verbo ({יְהוָה רֹעִי}).',
      ),
    },
    {
      n: '2',
      text: T('{לֹא} + qatal traduce el presente: {לֹא אֶחְסָר} «no me falta» = «nada me faltará».'),
    },
    {
      n: '3',
      text: T(
        'Hifil + {־נִי} traduce el portugués «me hace + verbo»: {יַרְבִּיצֵנִי} «me hace descansar».',
      ),
    },
    {
      n: '4',
      text: T('El plural femenino usa {־וֹת}: {מְנֻחוֹת} «descansos» (sustantivo {מְנוּחָה}), no {־ִים}.'),
    },
    {
      n: '5',
      text: T(
        'El piel de {שׁוב} significa «restaurar» (traer de vuelta), mientras el qatal de {שׁב} significa «volver»: el molde decide la dirección.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bajo la forma escrita:'),
      text: T(
        'Los salmos llegaron hasta nosotros con las vocales de los escribas medievales, pero el texto original de los salmos estaba escrito solo con consonantes, y el versículo 1 sobrevive también así. La lectura que estás haciendo tiene mil años, y aun así cada palabra funciona.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'El verbo {רבץ} «tumbarse» ha producido un nuevo parentesco: {רֹעִי} no es un participio, pero el hebreo moderno llama {רוֹעִי} al pastor del campo. Dos lenguas distintas, una raíz común: la oveja y el pastor siempre convivieron en el campo, y el verbo conservó ese olor pastoril durante tres mil años.',
      ),
    },
  ],
  examples: [
    { text: 'o SENHOR', gloss: T('el SEÑOR — nombre divino, escrito con {י} inicial') },
    { text: '{רֹעִי}', gloss: T('mi pastor — {רֹעֶה} + {־ִי}') },
    { text: '{לֹא אֶחְסָר}', gloss: T('nada me faltará — qatal negado') },
    { text: '{בִּנְאוֹת דֶּשֶׁא}', gloss: T('pastos verdes — cadena de constructo') },
    { text: '{יַרְבִּיצֵנִי}', gloss: T('me hace descansar — hifil + {־נִי}') },
    { text: '{עַל־מֵי}', gloss: T('junto a las aguas — maqaf + constructo') },
    { text: '{מֵי}', gloss: T('aguas — dual en constructo') },
    { text: '{מְנֻחוֹת}', gloss: T('descansos — plural femenino') },
    { text: '{יְנַהֲלֵנִי}', gloss: T('me conduce — hifil + {־נִי}') },
    { text: '{נַפְשִׁי}', gloss: T('mi alma — {נֶפֶשׁ} (alma/garganta/apetito)') },
    { text: '{יְשׁוֹבֵב}', gloss: T('restaura — piel de {שׁוב}') },
    { text: '{וְשָׂבַת רוּחַ}', gloss: T('y tú volverás (v. 6) — qatal de {שׁוב}') },
    { text: '{לֹא־אִירָא}', gloss: T('no temeré mal (v. 4) — negación del perfectivo') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Salmo 23:1-3 palabra por palabra'),
      head: [T('Palabra'), T('Glosa'), T('Análisis')],
      rows: [
        ['o SENHOR', T('el SEÑOR'), T('el nombre divino')],
        ['{רֹעִי}', T('mi pastor'), T('{רֹעֶה} + {־ִי} (sufijo, cap. 8)')],
        ['{לֹא}', T('no'), T('niega un qatal: presente')],
        ['{אֶחְסָר}', T('me falta'), T('qatal 1.ª sing. de {חסר}')],
        ['{בִּנְאוֹת}', T('pastos'), T('plural de {נֶאֶה} en constructo')],
        ['{דֶּשֶׁא}', T('verdura'), T('cadena de constructo')],
        ['{יַרְבִּיצֵנִי}', T('me hace descansar'), T('hifil de {רבץ} + {־נִי}')],
        ['{מֵי}', T('aguas'), T('constructo de {מַיִם} (dual)')],
        ['{מְנֻחוֹת}', T('descansos'), T('plural fem. de {מְנוּחָה}')],
        ['{יְנַהֲלֵנִי}', T('me conduce'), T('hifil de {נהל} + {־נִי}')],
        ['{נַפְשִׁי}', T('mi alma'), T('{נֶפֶשׁ} + {־ִי}')],
        ['{יְשׁוֹבֵב}', T('restaura'), T('piel de {שׁוב}')],
      ],
    },
    {
      caption: T('Tabla 2 — Las cuatro raíces del salmo y sus moldes'),
      head: [T('Raíz'), T('Qal'), T('Piel'), T('Hifil'), T('Glosa (cap. 23)')],
      rows: [
        ['{רבץ}', '{רָבֵץ}', '{רִבֵּץ}', '{יַרְבִּיץ}', T('descansar (v. 2)')],
        ['{נהל}', '{נָהַל}', '{נֵהַל}', '{יַנְהֵל}', T('conducir (v. 3)')],
        ['{שׁוב}', '{שָׁב}', '{יְשׁוֹב}', '{יְשִׁיב}', T('volver (v. 6) / restaurar (v. 3)')],
        ['{חסר}', '{חָסֵר}', '—', '{יַחְסֵר}', T('faltar (v. 1)')],
      ],
    },
  ],
};
