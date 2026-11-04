import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Sufijos pronominales'),
  subtitle: T('סוּסִי, אָבִינוּ — «mi» y «nuestro» pegados a la palabra'),
  section: T('Primeros textos y partículas'),
  body: C(`## La frase posesiva en dos letras

El hebreo no tiene «de» ni pronombres posesivos: pega un **sufijo** al final de la palabra (Gesenius §91-103). En {סוּסִי} «mi caballo», la {־ִי} final es el pronombre «yo». La ventaja es la brevedad — dos letras en lugar de una palabra entera — y la ventaja estadística es enorme: cerca de un tercio de las palabras del Tanaj acaba así.

Los sufijos se juntan a tres cosas: al **sustantivo** (posesión), al **verbo** (objeto directo) y a la **preposición** (también objeto). Son los mismos diez.

## En el sustantivo

{סוּסִי} «mi caballo» · {סוּסְךָ} «tu caballo (m.)» · {סוּסְךְ} «tu caballo (f.)» · {סוּסוֹ} «su caballo (de él)» · {סוּסָהּ} «su caballo (de ella)» · {סוּסֵנוּ} «nuestro caballo» · {סוּסֵיכֶם} «vuestro caballo (m. pl.)» · {סוּסָם} «su caballo (de ellos)»

La forma de {אָב} «padre» es irregular y por eso famosa: {אָבִי} «mi padre», {אָבִינוּ} «nuestro padre». Es literalmente la primera palabra de la oración que todo judío y todo cristiano conoce.

## En el verbo: el objeto directo

{בָּרָא} + {הוּ} → {בְּרָאוֹ} «lo creó»
{שָׁמַר} + {נִי} → {שְׁמָרַנִי} «me guardó»
{קָרָא} + {נִי} → {קְרָאֻנִי} «me llamó»

Fíjate en la vocal: el sufijo {־נִי} de 1.ª persona hace subir la vocal de la raíz a {־וּ} ({שְׁמָרַנִי}, {זְכֹרֵנִי}). No hace falta memorizar la regla: lee las formas y el patrón aparece.

## Na preposição: o objeto indireto

{עִם} + {־ִי} → {עִמִּי} «conmigo»
{אֶל} + {־ךָ} → {אֵלֶיךָ} «a ti»
{ל} + {־נוּ} → {לָנוּ} «a nosotros»
{ב} + {־ךָ} → {בְּךָ} «en ti»

Así, {אֱלֹהַי בְּךָ בָטָחְתִּי} (Sal 25.2) es literalmente «mi Dios, en ti confío»: la preposición {בְּ} recibió el sufijo {־ךָ} y el verbo {בָטָחְתִּי} recibió {־תִּי}. Dos personas en la misma frase, dos sufijos.

## El sufijo va al final del grupo

La regla práctica: el sufijo se pega a la **última** palabra del sintagma, no necesariamente al sustantivo que califica. En {דְּבַר־מֶלֶךְ} «la palabra del rey», el posesivo aparece como {דְּבַר־מֶלֶךְּוֹ} «la palabra de su rey», y el lector deduce de quién es el rey. La posición es el último punto de la cadena.

## Cuidado con las formas ambiguas

Algunas palabras absorben el sufijo y quedan con dos lecturas. {בֵּיתִי} puede ser «mi casa» ({בַּיִת} + {־ִי}) o «dentro de mí» ({בַּיִת} + {־י} locativo, abreviado). El contexto decide: en {בֵּיתִי} y {בֵּיתִךְ} la lectura posesiva es la más común.

Lo mismo ocurre con {אִתּוֹ} «con él» (que se parece a {אִתּי} «conmigo») y con {אֵלֶיךָ} «a ti» frente a {אֵלֶיךְ} «a tus». Una diferencia mínima con un efecto enorme en la lectura.

## Oraciones para retener

{סוּסִי} «mi caballo» · {אָבִינוּ} «nuestro padre» · {עִמִּי} «conmigo» · {בְּךָ} «en ti» · {לָנוּ} «a nosotros» · {בְּרָאוֹ} «lo creó».`),
  vocab: [
    V('סוּסִי', 'סוּס', 'mi caballo'),
    V('סוּסְךָ', 'סוּס', 'tu caballo'),
    V('סוּסוֹ', 'סוּס', 'su caballo'),
    V('סוּסָהּ', 'סוּס', 'su caballo'),
    V('סוּסֵנוּ', 'סוּס', 'nuestro caballo'),
    V('אָבִי', 'אָב', 'mi padre'),
    V('אָבִינוּ', 'אָב', 'nuestro padre'),
    V('בְּרָאוֹ', 'ברא', 'lo creó'),
    V('עִמִּי', 'עִם', 'conmigo'),
    V('לָנוּ', 'לְ', 'a nosotros'),
    V('בְּךָ', 'בְּ', 'en ti'),
    V('אֵלֶיךָ', 'אֶל', 'a ti'),
    V('שָׁמַר', 'שׁמר', 'guardar (raíz)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «סוּסִי» («mi caballo»), ¿qué significa el sufijo {־ִי}?'),
    options: [T('«mi» (1.ª persona)'), T('«suyo» (3.ª persona)'), T('plural'), T('femenino')],
    answer: 0,
    hint: T('Compara con {סוּסוֹ} «su caballo» y {סוּסֵנוּ} «nuestro caballo».'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('¿Qué sufijo de «אָבִינוּ» significa «nuestro»?'),
      answer: 'נוּ',
      hint: T('Son las dos últimas letras, con {ֶ} (segol) antes de la {נ}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la base con el resultado bearing the suffix.'),
      pairs: [
        { a: '{סוּס} + {־ִי}', b: '{סוּסִי}' },
        { a: '{בָּרָא} + {־וֹ}', b: '{בְּרָאוֹ}' },
        { a: '{עִם} + {־ִי}', b: '{עִמִּי}' },
        { a: '{ל} + {־נוּ}', b: '{לָנוּ}' },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En «אֱלֹהַי בְּךָ בָטָחְתִּי» (Sal 25.2), ¿cuántos pronombres aparecen?'),
      options: [
        T('Dos: {־ךָ} en la preposición y {־תִּי} en el verbo'),
        T('Uno: solo {־תִּי}'),
        T('Tres: {אֱלֹהַי}, {־ךָ} y {־תִּי}'),
        T('Ninguno: la frase usa solo pronombres independientes'),
      ],
      answer: 0,
      hint: T('Regla §1: los mismos diez sufijos sirven para posesión y objeto.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Por qué {בֵּיתִי} es una forma ambigua?'),
      options: [
        T('Puede ser «mi casa» o «dentro de mí»'),
        T('Tiene dos vocales distintas'),
        T('Es un verbo, no un sustantivo'),
        T('Perdió el artículo {הַ}'),
      ],
      answer: 0,
      hint: T('Regla §5: la misma {־י} puede ser posesiva o locativa.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El sufijo pronominal marca posesión, objeto directo y objeto indirecto: los mismos diez sirven para los tres.',
      ),
    },
    {
      n: '2',
      text: T(
        'El sufijo se pega a la última palabra del grupo: {דְּבַר־מֶלֶךְּוֹ} «la palabra de su rey», no «la palabra de su rey».',
      ),
    },
    {
      n: '3',
      text: T(
        'El sufijo {־נִי} de 1.ª persona hace que la vocal de la raíz pase a {־וּ}: {שָׁמַר} → {שְׁמָרַנִי}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Los sufijos de 3.ª persona ({-וֹ}, {־ָהּ}, {־ָם}, {־ָן}) nunca llevan dageš; los de 2.ª ({-ְךָ}, {־ְךְ}, {־ֵיכֶם}) forman dageš en la letra final.',
      ),
    },
    {
      n: '5',
      text: T(
        'Algunas palabras absorben el sufijo y quedan ambiguas: {בֵּיתִי} «mi casa» o «dentro de mí».',
      ),
    },
  ],
  notes: [
    {
      label: T('Las cifras:'),
      text: T(
        'El sufijo {־ִי} aparece unas 1.900 veces en el Tanaj y {־וֹ} más de 2.600. Ninguna otra categoría morfológica se le acerca. Si aprendes una sola cosa de la gramática hebrea, que sea esta: la persona vive al final de la palabra, no al principio.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        '{אָבִי} «mi padre» sobrevivió en lenguas que ya no hablan hebreo: siríaco, Persia media, algunas lenguas europeas y el propio portugués y el castellano antiguo en formas como «abba». Job y el Credo terminan con él. Un sufijo de dos letras que ha viajado tres mil años.',
      ),
    },
  ],
  examples: [
    { text: '{סוּסִי}', gloss: T('mi caballo — {־ִי} = «mi»') },
    { text: '{סוּסוֹ}', gloss: T('su caballo — {־וֹ} = «suyo»') },
    { text: '{סוּסָהּ}', gloss: T('su caballo — {־הּ} con qamats') },
    { text: '{סוּסֵנוּ}', gloss: T('nuestro caballo — {־נוּ} = «nuestro»') },
    { text: '{אָבִינוּ}', gloss: T('nuestro padre — la primera palabra de la oración') },
    { text: '{בְּרָאוֹ}', gloss: T('lo creó — objeto {־וֹ} pegado al verbo') },
    { text: '{שְׁמָרַנִי}', gloss: T('me guardó — vocal {ַ} + {־נִי}') },
    { text: '{עִמִּי}', gloss: T('conmigo — {עִם} + {־ִי}') },
    { text: '{אֵלֶיךָ}', gloss: T('a ti — {אֶל} + {־ךָ} (dageš en {כ})') },
    { text: '{בְּךָ}', gloss: T('en ti — {בְּ} + {־ךָ}') },
    { text: '{בָטָחְתִּי}', gloss: T('confío — {־תִּי} = «yo» (Sal 25.2)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Los diez sufijos pronominales'),
      head: [T('Persona'), T('Sufijo'), T('Ejemplo con {סוּס}'), T('Glosa')],
      rows: [
        [T('1.ª sing.'), '{־ִי}', '{סוּסִי}', T('mi caballo')],
        [T('2.º masc. sing.'), '{־ְךָ}', '{סוּסְךָ}', T('tu caballo')],
        [T('2.ª fem. sing.'), '{־ְךְ}', '{סוּסְךְ}', T('tu caballo')],
        [T('3.º masc. sing.'), '{־וֹ}', '{סוּסוֹ}', T('su caballo')],
        [T('3.ª fem. sing.'), '{־ָהּ}', '{סוּסָהּ}', T('su caballo')],
        [T('1.ª pl.'), '{־ֵנוּ}', '{סוּסֵנוּ}', T('nuestro caballo')],
        [T('2.ª pl. masc.'), '{־ֵיכֶם}', '{סוּסֵיכֶם}', T('vuestro caballo')],
        [T('3.ª pl.'), '{־ָם}', '{סוּסָם}', T('su caballo')],
        [T('2.ª pl. fem.'), '{־ֵיכֶן}', '{סוּסֵיכֶן}', T('vuestro caballo (f.)')],
        [T('3.ª pl. fem.'), '{־ָן}', '{סוּסָן}', T('su caballo (f.)')],
      ],
    },
    {
      caption: T('Tabla 2 — El mismo sufijo en tres funciones'),
      head: [T('Función'), T('Base + sufijo'), T('Resultado'), T('Glosa')],
      rows: [
        [T('Posesión (sustantivo)'), '{סוּס} + {־ִי}', '{סוּסִי}', T('mi caballo')],
        [T('Objeto (verbo)'), '{שָׁמַר} + {־נִי}', '{שְׁמָרַנִי}', T('me guardó')],
        [T('Objeto indirecto (preposición)'), '{ב} + {־ךָ}', '{בְּךָ}', T('en ti')],
      ],
    },
    {
      caption: T('Tabla 3 — Formas famosas que debes conocer'),
      head: [T('Forma'), T('Análisis'), T('Glosa')],
      rows: [
        ['{אָבִי}', T('{אָב} + {־ִי} (forma asimilada)'), T('mi padre')],
        ['{אָבִינוּ}', T('{אָב} + {־ינוּ}'), T('nuestro padre')],
        ['{בְּרָאוֹ}', T('{בָּרָא} + {־וֹ} (objeto)'), T('lo creó')],
        ['{עִמִּי}', T('{עִם} + {־ִי}'), T('conmigo')],
        ['{אֵלֶיךָ}', T('{אֶל} + {־ךָ}'), T('a ti')],
        ['{לָנוּ}', T('{ל} + {־נוּ}'), T('a nosotros')],
        ['{בְּךָ}', T('{ב} + {־ךָ}'), T('en ti')],
        ['{בֵּיתִי}', T('ambigua: posesión o locativo'), T('mi casa / dentro de mí')],
      ],
    },
  ],
};
