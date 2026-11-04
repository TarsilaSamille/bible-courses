import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('Las tres voces del verbo'),
  subtitle: T('فَعَلَ، يَفْعَلُ، سَيَفْعَلُ'),
  section: T('Verbos'),
  body: C(`## Tres voces, no tres tiempos

El verbo árabe tiene tres formas principales, y lo que marcan no es tiempo: es aspecto. **El perfecto presenta el evento como entero; el imperfecto, como en curso; el futuro, como por venir.**

{كَتَبَ} es perfecto y significa "escribió", pero también puede significar "escribió y ahí acabó": el perfecto duplica el efecto. {يَكْتُبُ} es imperfecto y significa "escribe", en el sentido de que el proceso está en marcha, y es la forma que el español traduciría por presente o por futuro, según el contexto. {سَيَكْتُبُ} es futuro y se reconoce por el prefijo {سَـ} pegado al imperfecto.

La consecuencia para la lectura es seria. Quien traduce {كَتَبَ} por "escribía" se equivoca; quien traduce {يَكْتُبُ} por "escribió" se equivoca; y quien traduce {يَكْتُبُ} por "escribe" acierta sin saber por qué, porque acertó el aspecto y no el tiempo.

## El pasado tiene tres vocales, y ese es el secreto

El perfecto no vocaliza de una sola manera. {كَتَبَ} es {فَعَلَ}, con {a} en la primera y la última posición. {عِلِمَ} es {فَعِلَ}, con {i} en la primera y {a} en la última. {نَصَرَ} es {فَعُلَ}, con {u} en la primera y {a} en la última.

Esas vocales no son casualidad. Ellas **clasifican la raíz**, y la clase decide qué preposiciones acepta el verbo y cómo se forma su nombre verbal. Un verbo de la clase {فَعِلَ} tiende a regir {بِـ} o {لِـ}; uno de la clase {فَعُلَ} tiende a regir {لِـ}; y los de la clase {فَعَلَ}, que son la mayoría, casi no usan partícula alguna. {كَتَبَ} no usa ninguna, {عِلِمَ} usa {بِـ}, {نَصَرَ} usa {لِـ}.

El nombre verbal sigue la misma lógica: {مَفْعَل} para {فَعَلَ}, {مَفْعِلَة} para {فَعِلَ} y {مَفْعُولَة} para {فَعُلَ}. {عِلْم} viene de {عِلِمَ} y {نَظَرٌ} viene de {نَصَرَ}. Quien conoce la clase vocal de una raíz conoce el nombre verbal antes de abrir el diccionario.

## La forma corta

Y hay una cuarta forma, más frecuente que las otras tres, y que no es una forma conjugada. Es el imperfecto o el jussivo sin los sufijos de persona.

{اُكْتُبْ} es la orden. {أَنْ يُكْتَبَ} es "que se escriba". {لَنْ يُهْلِكَ} es "no será destruido". En los tres la persona desaparece, y la desaparición es la información: una forma que no flexiona no está juzgando a nadie, está afirmando algo en general.

Por eso los refranes y los dichos usan esa forma. Un refrán que dice "el hombre escribe" no flexiona, porque el refrán no cuenta personas, y la forma corta resuelve eso sin necesitar pronombre.

El origen histórico de la forma corta es la {ا} final del perfecto, que fue cayendo con el tiempo: {فَعَلَ} pasó a {فَعَلْ} y luego a {فَعَل}. Quien lee un texto antiguo encuentra las dos cosas en el mismo manuscrito, y la presencia de un sufijo de persona es lo que dice cuál está en uso.

## Criterio de lectura

En {وَقَالَ اللهُ: لِيَكُنْ نُورٌ، فَكَانَ نُورٌ} hay tres voces en una frase. {وَقَالَ} es perfecto y narra una acción concluida. {لِيَكُنْ} es jussivo precedido de {لِـ}, y la {لِـ} aquí no es posesión ni destino: es finalidad, "que haya". {فَكَانَ} es perfecto otra vez, y repite el evento como resultado.

Una frase de cinco palabras con dos voces y una finalidad, y la traducción que escribe "y dijo Dios: haya luz, y hubo luz" acierta las tres porque leyó las formas y no una traducción anterior.`),
  vocab: [
    V('كَتَبَ', 'كتب', 'escribió'),
    V('يَكْتُبُ', 'كتب', 'escribe'),
    V('سَيَكْتُبُ', 'كتب', 'escribirá'),
    V('اُكْتُبْ', 'كتب', '¡escribe!'),
    V('عِلِمَ', 'علم', 'supo; aprendió'),
    V('نَصَرَ', 'نصر', 'miró'),
    V('وَقَالَ', 'قال', 'dijo'),
    V('لِيَكُنْ', 'كان', 'que haya; que sea'),
    V('نُورٌ', 'نور', 'luz'),
    V('فَعَلَ', 'فعل', 'el patrón del perfecto'),
    V('مَفْعَل', 'فعل', 'un patrón de nombre verbal'),
    V('مَفْعِلَة', 'فعل', 'un patrón de nombre verbal'),
    V('مَفْعُولَة', 'فعل', 'un patrón de nombre verbal'),
    V('كَانَ', 'كان', 'era; estuvo'),
    V('يَفْعَلُ', 'فعل', 'el patrón del imperfecto'),
    V('سَـ', 'س', 'el prefijo del futuro'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la forma del futuro?'),
    options: [T('كَتَبَ'), T('يَكْتُبُ'), T('سَيَكْتُبُ'), T('اُكْتُبْ')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el patrón del perfecto de la clase i: {عِلِمَ} sigue ___ِعِلَ.'),
      answer: 'فَ',
      hint: T('Es el patrón {فَعِلَ}.'),
    },
    {
      kind: 'match',
      prompt: T('Associe patrón y ejemplo.'),
      pairs: [
        { a: T('فَعَلَ'), b: T('كَتَبَ') },
        { a: T('فَعِلَ'), b: T('عِلِمَ') },
        { a: T('فَعُلَ'), b: T('نَصَرَ') },
        { a: T('فَعَلْ'), b: T('اُكْتُبْ') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué descarta la forma corta?'),
      options: [T('La persona'), T('La raíz'), T('El pasado'), T('La vocal')],
      answer: 0,
    },
    {
      kind: 'choose',
      prompt: T('En {لِيَكُنْ نُورٌ}, ¿qué uso tiene {لِـ}?'),
      options: [T('Posesión'), T('Destino'), T('Finalidad'), T('Origen')],
      answer: 2,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('**El árabe tiene tres voces, no tres tiempos: perfecto, imperfecto y futuro.**'),
    },
    {
      n: '2',
      text: T('El perfecto presenta el evento como entero; el imperfecto, como en curso.'),
    },
    {
      n: '3',
      text: T(
        'La tercera vocal del perfecto ({َ}, {ِ}, {ُ}) clasifica la raíz y predice qué preposiciones acepta el verbo.',
      ),
    },
    {
      n: '4',
      text: T('El futuro es {سَـ} más el imperfecto, y la orden es el imperfecto sin prefijo.'),
    },
    {
      n: '5',
      text: T(
        'La forma corta es el imperfecto o el jussivo sin sufijo de persona, y aparece después de {أَنْ}, {لَنْ} y de la {لِـ} de finalidad.',
      ),
    },
  ],
  notes: [
    {
      label: T('Una raíz, tres voces'),
      text: T(
        '{كَتَبَ}, {يَكْتُبُ} y {سَيَكْتُبُ} tienen las mismas tres consonantes, y las vocales cambian de sitio. Lo que cambia en la raíz es nada, y lo que carga el sentido es la terminación. Es la misma lógica del plural roto, y por eso los dos sistemas se entienden.',
      ),
    },
    {
      label: T('Por qué la forma corta sale en los refranes'),
      text: T(
        'Un refrán no flexiona porque no cuenta personas. La forma corta resuelve eso sin pronombre, y por eso un texto antiguo a veces trae {فَعَلَ} con sufijo y a veces trae la forma desnuda, sin que nada haya cambiado de sentido.',
      ),
    },
  ],
  examples: [
    { text: 'وَقَالَ', gloss: T('dijo; perfecto') },
    { text: 'لِيَكُنْ نُورٌ', gloss: T('que haya luz; jussivo tras {لِـ}') },
    { text: 'فَكَانَ نُورٌ', gloss: T('y hubo luz; perfecto') },
    { text: 'كَتَبَ', gloss: T('escribió; perfecto') },
    { text: 'يَكْتُبُ', gloss: T('escribe; imperfecto') },
    { text: 'سَيَكْتُبُ', gloss: T('escribirá; futuro') },
    { text: 'اُكْتُبْ', gloss: T('¡escribe!; orden') },
    { text: 'عِلِمَ', gloss: T('supo; la clase i') },
    { text: 'نَصَرَ', gloss: T('miró; la clase u') },
  ],
  tables: [
    {
      caption: T('Las tres voces y la forma corta'),
      head: [T('Forma'), T('Patrón'), T('Lo que afirma'), T('Ejemplo')],
      rows: [
        [T('perfecto'), 'فَعَلَ', T('el evento entero'), 'كَتَبَ'],
        [T('imperfecto'), 'يَفْعَلُ', T('el evento en curso'), 'يَكْتُبُ'],
        [T('futuro'), 'سَيَفْعَلُ', T('el evento por venir'), 'سَيَكْتُبُ'],
        [T('orden'), 'اُفْعُلْ', T('una orden'), 'اُكْتُبْ'],
      ],
    },
    {
      caption: T('Las tres clases vocálicas'),
      head: [T('Clase'), T('Perfecto'), T('Verbo'), T('Partícula típica'), T('Nombre verbal')],
      rows: [
        [T('a débil'), 'فَعَلَ', 'كَتَبَ', T('ninguna'), 'مَفْعَل'],
        [T('i débil'), 'فَعِلَ', 'عِلِمَ', 'بـ', 'مَفْعِلَة'],
        [T('u débil'), 'فَعُلَ', 'نَصَرَ', 'لـ', 'مَفْعُولَة'],
      ],
    },
    {
      caption: T('La forma corta y dónde aparece'),
      head: [T('Contexto'), T('Forma larga'), T('Forma corta'), T('Glosa')],
      rows: [
        [T('orden'), 'اُكْتُبْ', 'اُكْتُبْ', T('¡escribe!')],
        [T('tras {أَنْ}'), 'أَنْ يَكْتُبَ', 'أَنْ يُكْتَبَ', T('que se escriba')],
        [T('tras {لَنْ}'), 'لَنْ يَكْتُبَ', 'لَنْ يُكْتَبَ', T('no se escribirá')],
        [T('en refranes'), 'كَتَبَ الرَّجُلُ', 'كَتَبَ', T('el hombre escribe')],
      ],
    },
  ],
};
