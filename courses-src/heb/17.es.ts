import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('Volitivos y negación'),
  subtitle: T('אַל־תִּירָא, נַעֲשֶׂה — la voluntad y su negación'),
  section: T('Formas no finitas y guturales'),
  body: C(`## Tres volitivos (Gesenius §48)

El hebreo ordena las formas volitivas en tres grupos, todos derivados del esqueleto {קְטֹל}:

**Imperativo** — la orden de quien habla: {כְּתֹב} «¡escribe!» · {שְׁמַע} «¡escucha!» · {לֵךְ} «¡ve!» · {צֵא} «¡sal!». Es el esqueleto puro, sin prefijo y sin sufijo (en 3.º m. y 2.º m.).

**Cohortativo** — «déjame…», «vamos…»: {אֶכְתְּבָה} «déjame escribir» (1.º m.) · {תִּכְתֹּב} «escribe (cohort.)» (2.º m.) · {נַעֲשֶׂה} «hagamos» (1.ª pl.) · {יִכְתְּבוּ} «escriban» (3.ª pl.). La {ה} de la 1.ª persona y el dageš fuerte de la {ת} marcan la persona.

**Jussivo** — «que él…», «que sea…»: {יְהִי} «sea» · {יִכְתֹּב} «que él escriba» · {יָבֹא} «que venga» · {תֹּאמַר} «que ella diga». Aquí el dageš de la segunda letra **desaparece** y la vocal se acorta: compara {כּוֹתֵב} (participio) con {יִכְתֹּב} (jussivo).

Las dos voluntades más repetidas del Génesis son {נַעֲשֶׂה} «hagamos» (Gn 1.26) y {יְהִי} «sea» (Gn 1.3): crear y hablar.

## El Credo de Israel

{שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד} «Escucha, Israel: el SEÑOR nuestro Dios, el SEÑOR es uno» (Dt 6.4). El verbo {שְׁמַע} en imperativo es la misma palabra que el sustantivo {שֵׁם} «nombre», y el juego de palabras entre ambos es el punto del versículo: oír el nombre de Dios es guardar su mandamiento.

## Negación: dos puertas

El hebreo niega de dos maneras, y la elección es obligatoria:

**{לֹא}** + verbo declarativo (indicativo o futuro): {לֹא־תִרְצָח} «no matarás» (Ex 20.13) · {לֹא־תִּגֶּנּב} «no robarás» · {לֹא־תְעָנֶה} «no responderás».

**{אַל}** + verbo jussivo: {אַל־תִּירָא} «¡no temas!» · {אַל־תִּפְגְּעִי} «¡no me instes!» (Rt 1.16) · {אַל־תִּתְעַבֵּר} «¡no pases!». El {אַל} es más breve y más enérgico: niega la voluntad, la petición, el ánimo.

Después de {אַל} siempre sigue un jussivo; después de {לֹא}, un indicativo o un futuro. Llenar una cláusula de {אַל} marca el registro de la exhortación, y por eso la Escritura tiene dezenas de «no temas».

Simplificando: {אַל} pertenece a la escena de diálogo; {לֹא} pertenece a la ley y a la narrativa.

## {אַל}, {לֹא} y {ו}

La {ו} de coordinación cambia la fuerza de la negación: {וְלֹא יְהִי} (Gn 1.5) «y no hubo» es {יְהִי} en jussivo con {לֹא}, la negación más dura, «y no ocurrió». En {וְלֹא יְהוּא} «y no era» el {לֹא} niega el {הָיָה}.

La construcción {אֵין} + verbo (o + participio) es la tercera puerta: {אֵין־לוֹ} «no tiene» — {אֵין} + el sustantivo {ו} + {־לוֹ}.

## El tiempo de la voluntad

El imperativo pertenece al presente de la escena; el jussivo y el cohortativo aparecen en órdenes, instrucciones y, con la {ו} de secuencia, en el futuro narrativo: «y vendrá el sacerdote» (Nm 3.1), con la {י} del futuro. Así cuenta el hebreo lo que va a ocurrir como si fuera una orden.

## Construye tus propias oraciones

{כְּתֹב} «¡escribe!» · {נִכְתֹּב} «¡escribamos!» · {יִכְתֹּב} «que él escriba» · {אַל־תִּכְתֹּב} «¡no escribas!» · {לֹא תִכְתֹּב} «no escribirás»

Cinco modos desde una sola raíz. Esta es la parte más regular de la gramática hebrea: encuentra el esqueleto {קְטֹל} y lo demás sigue.`),
  vocab: [
    V('שְׁמַע', 'שׁמע', '¡escucha! (imperativo)'),
    V('כְּתֹב', 'כתב', '¡escribe! (imperativo)'),
    V('לֵךְ', 'הלך', '¡ve! (imperativo)'),
    V('נַעֲשֶׂה', 'עשׂה', 'hagamos (cohortativo)'),
    V('אֶכְתְּבָה', 'כתב', 'déjame escribir'),
    V('יִכְתֹּב', 'כתב', 'que él escriba (jussivo)'),
    V('יְהִי', 'היה', 'sea (jussivo)'),
    V('יָבֹא', 'בוא', 'que venga (jussivo)'),
    V('אַל־תִּירָא', 'ירא', '¡no temas!'),
    V('אַל־תִּפְגְּעִי', 'פגע', '¡no me instes! (f.)'),
    V('לֹא', 'לֹא', 'no'),
    V('אל', 'אל', 'no (con jussivo)'),
    V('אֵין', 'אֵין', 'no hay, no tiene'),
    V('תֵּלִדִי', 'ילד', 'tendrás (jussivo, Gn 3.16)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Completa Dt 6.4: «___ יִשְׂרָאֵל» (Escucha, Israel).'),
    answer: 'שְׁמַע',
    hint: T('Imperativo de {שׁמע} «oír» — el esqueleto {קְטֹל} puro.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Relaciona la forma con el modo verbal.'),
      pairs: [
        { a: '{כְּתֹב}', b: T('imperativo') },
        { a: '{נַעֲשֶׂה}', b: T('cohortativo') },
        { a: '{יִכְתֹּב}', b: T('jussivo') },
        { a: '{אֶכְתְּבָה}', b: T('cohortativo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál negación de «no temas» es gramaticalmente CORRECTA?'),
      options: [T('אַל־תִּירָא'), T('לֹא־תִּירָא'), T('לֹא־תִּרְאֶה'), T('אֵין־תִּירָא')],
      answer: 0,
      hint: T('Regla §3: {אַל} exige jussivo, y {תִּירָא} es el jussivo de {ירא}.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué distingue el jussivo {יִכְתֹּב} del qatal {כָּתַב}?'),
      options: [
        T('El prefijo {י}'),
        T('La ausencia del dageš en la segunda letra y la vocal acortada'),
        T('El sufijo {־וּ}'),
        T('El artículo {הַ}'),
      ],
      answer: 1,
      hint: T('Compara las dos formas letra por letra: la {כ} de {יִכְתֹּב} no tiene dageš.'),
    },
    {
      kind: 'fill',
      prompt: T('Escribe el cohortativo de 1.ª persona del plural para «hagamos» (raíz {עשׂה}).'),
      answer: 'נַעֲשֶׂה',
      hint: T('El cohortativo de 1.ª pl. empieza con {נ} + dageš fuerte: {נַעֲשֶׂה}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Imperativo = esqueleto {קְטֹל} puro; el cohortativo gana {ָה} (1.º m.) o dageš fuerte en la {ת}; el jussivo pierde el dageš de la segunda letra.',
      ),
    },
    {
      n: '2',
      text: T(
        'El jussivo de 3.ª persona es «que él haga»; el cohortativo de 1.ª persona es «déjame hacer»: ambos expresan voluntad, con distinto acento.',
      ),
    },
    {
      n: '3',
      text: T(
        '{לֹא} niega el indicativo y el futuro; {אַל} niega el jussivo. Intercambiar las partículas produce una cláusula extraña.',
      ),
    },
    {
      n: '4',
      text: T(
        'Negar {יְהִי} con la {ו} de secuencia — {וְלֹא יְהִי} — es la negación más fuerte de la Escritura: «y no ocurrió».',
      ),
    },
    {
      n: '5',
      text: T(
        'Jussivo y cohortativo son idénticos en varias personas; el contexto (conversación, oración, narrativa) decide la lectura.',
      ),
    },
  ],
  notes: [
    {
      label: T('Exégesis:'),
      text: T(
        'En Génesis 3, después de que habla la serpiente, Dios dice a Eva: {הִשְׁמוֹתְךָ תֵּלִדִי} «tu dolor en el parto aumentará» — {תֵּלִדִי} es un jussivo, no un futuro: es voluntad divina declarada, y por eso se cumple en Génesis 3.16. Traducir {תֵּלִדִי} como «tendrás» borra la voluntad; traducirlo como «quiere que tengas» la revela.',
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'El jussivo casi ha desaparecido del hebreo moderno y del español cotidiano, pero sobrevive intacto en los textos litúrgicos y en formas como «¡Sea!» (el jussivo de «ser»). Es la única flexión del verbo griego que el portugués y el español conservaron viva por herencia: el latín tenía {sīt}, el griego {ἔστω}, y el portugués decía «seja» hasta el siglo XVIII.',
      ),
    },
  ],
  examples: [
    { text: '{שְׁמַע}', gloss: T('¡escucha! — imperativo de {שׁמע} (Dt 6.4)') },
    { text: '{לֵךְ}', gloss: T('¡ve! — imperativo de {הלך}') },
    { text: '{נַעֲשֶׂה}', gloss: T('hagamos — cohortativo 1.ª pl. (Gn 1.26)') },
    { text: '{אֶכְתְּבָה}', gloss: T('déjame escribir — cohortativo 1.º m.') },
    { text: '{יִכְתֹּב}', gloss: T('que él escriba — jussivo (cayó el dageš)') },
    { text: '{יְהִי}', gloss: T('sea — jussivo de {הָיָה} (Gn 1.3)') },
    { text: '{יָבֹא}', gloss: T('que venga — jussivo de {בוא}') },
    { text: '{תֹּאמַר}', gloss: T('que ella diga — jussivo 3.ª f.') },
    { text: '{יִכְתְּבוּ}', gloss: T('que escriban — cohortativo 3.ª pl.') },
    { text: '{לֹא־תִרְצָח}', gloss: T('no matarás — {לֹא} + futuro (Ex 20.13)') },
    { text: '{אַל־תִּירָא}', gloss: T('¡no temas! — {אַל} + jussivo') },
    { text: '{אַל־תִּפְגְּעִי}', gloss: T('¡no me instes! — jussivo 2.ª f. (Rt 1.16)') },
    { text: '{וְלֹא יְהִי}', gloss: T('y no hubo — negación máxima (Gn 1.5)') },
    { text: '{אֵין־לוֹ}', gloss: T('no tiene — {אֵין} + {ו} + {־לוֹ}') },
    { text: '{שֵׁם}', gloss: T('nombre — misma raíz que {שְׁמַע} «escucha»') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Los tres volitivos a partir de {כתב}'),
      head: [T('Modo'), T('Forma'), T('Persona'), T('Glosa')],
      rows: [
        [T('Imperativo'), '{כְּתֹב}', T('2.º m.'), T('¡escribe!')],
        [T('Cohortativo'), '{אֶכְתְּבָה}', T('1.º m.'), T('déjame escribir')],
        [T('Cohortativo'), '{נִכְתֹּב}', T('2.ª pl. m.'), T('¡escribamos!')],
        [T('Cohortativo'), '{יִכְתְּבוּ}', T('3.ª pl.'), T('que ellos escriban')],
        [T('Jussivo'), '{יִכְתֹּב}', T('3.º m.'), T('que él escriba')],
        [T('Jussivo'), '{תֹּאמַר}', T('3.ª f.'), T('que ella diga')],
        [T('Jussivo (de {היה})'), '{יְהִי}', T('3.º m.'), T('sea, haya')],
      ],
    },
    {
      caption: T('Tabla 2 — Las dos puertas de la negación'),
      head: [T('Partícula'), T('Exige'), T('Ejemplo'), T('Glosa')],
      rows: [
        ['{לֹא}', T('indicativo / futuro'), '{לֹא־תִרְצָח}', T('no matarás (Ex 20.13)')],
        ['{אַל}', T('jussivo'), '{אַל־תִּירָא}', T('¡no temas!')],
        ['{לֹא}', T('jussivo (más duro)'), '{וְלֹא יְהִי}', T('y no hubo (Gn 1.5)')],
        ['{אֵין}', T('verbo / sustantivo'), '{אֵין־לוֹ}', T('no tiene')],
        ['{אֵל}', T('forma alternativa de {אַל}'), '{אַל־תִּתְעַבֵּר}', T('¡no pases!')],
      ],
    },
  ],
};
