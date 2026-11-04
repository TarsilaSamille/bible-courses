import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('Singular, dual, plural'),
  subtitle: T('كِتَابَانِ، كِتَابَيْنِ، هُمَا'),
  section: T('Sustantivos'),
  body: C(`## Tres números, y el tercero estorba

El español tiene dos. El árabe tiene tres, y el tercero es el dual: una forma que existe para decir "exactamente dos". {كِتَابٌ} es un libro, {كِتَابَانِ} son dos libros, {كُتُبٌ} son libros.

Lo que el dual carga es poca cosa y muy específica: no es cantidad, es exactitud. Quien dice {كِتَابَانِ} no está diciendo "algunos libros", está diciendo dos. Una traducción que escribe "libros" donde el original dice {كِتَابَانِ} borra la palabra más informativa de la frase, y una lectura del griego pasa por esa pérdida sin darse cuenta.

El dual no es decoración ni herencia de poeta. Es obligatorio siempre que la cuenta es dos, y el sustantivo, el verbo y el pronombre tienen cada uno su forma.

## El dual en el sustantivo

El dual del sustantivo añade dos letras: {ـانِ} en el nominativo y {ـين} en el acusativo y el genitivo. {كِتَابَانِ} y {كِتَابَيْنِ}. El femenino mete un {ت} antes: {كِتَابَتَانِ} y {كِتَابَتَيْنِ}.

La regla vale también para los plurales rotos, y ahí es donde engaña. {قَلَمٌ} da {قَلَمَانِ}, no {قَلَمَان} ni {قَلَمَين}: la {ن} del plural sigue ahí, con la terminación del dual pegada.

Y hay una asimetría: **el dual no tiene parentesco con el plural**. No existe forma para "dos o más"; el {ـانِ} pertenece solo al dual, y el plural es siempre {كُتُبٌ} o {مُعَلِّمُونَ}. Quien busque un término medio entre {كِتَابَانِ} y {كُتُبٌ} no lo encuentra, y esa ausencia es lo que hace el singular y el plural tan fáciles de distinguir en un texto antiguo.

## El dual en el verbo y en el pronombre

El verbo tiene dual de primera persona, {كَتَبْنَا}, "escribimos", y la terminación {ـنا} es la misma del plural. Lo que separa los dos es el resto de la persona, no el final.

Las otras personas tienen forma propia. El imperfecto de segunda persona es {تَكْتُبَانِ}, y ese {بَانِ} es lo que el ojo reconoce. El pronombre del dual es {أَنْتُمَا} para la segunda persona y {هُمَا} para la tercera, y {هُمَا} sirve a masculino y femenino sin distinción: quien dice {هُمَا} sobre dos mujeres acierta, y el contexto es lo que dice cuál.

El dual de tercera persona es el único punto del sistema en que el verbo y el pronombre comparten terminación: {هُمَا} y {كَتَبَا}. No es casualidad, y quien aprende a leer reconoce la construcción solo por el sonido.

## Donde reaparece el dual

Y aquí está lo que le importa a quien lee, porque el dual sobrevive en formas que el español ya no tiene.

Las preposiciones seguidas de dual usan los mismos sufijos que los pronombres, y el resultado es una sola palabra: {بَيْنَهُمَا} entre los dos, {عَنْهُمَا} sobre los dos, {لَهُمَا} para los dos, {كِتَابُهُمَا} el libro de los dos. Cada una lleva un dual dentro, y el contexto no siempre deja claro si los dos son personas o cosas.

Después hay un uso que ya no cuenta. {كُلَّاهُمَا} y {أَيُّهُمَا} significan "ambos", y es uno de los pocos casos en que el número exacto no está en juego. Traducir {كُلَّاهُمَا} por "los dos" no está mal en el número y está mal en el sentido: {كُلّ} confirma en vez de contar.

La costumbre antigua es lo que sostiene el resto. Los salmos usan {هُمَا} con frecuencia, y una traducción que escribe "ellos" donde el original dice "los dos" pierde el énfasis sin darse cuenta. La forma más antigua de {كُلَّاهُمَا} aparece en los salmos y en Génesis, y de ahí viene el uso moderno de "ambos".

## Criterio de lectura

Busque {ـانِ} y {ـين} antes de traducir cualquier sustantivo. En {أَخَاهُمَا} la terminación doble dice enseguida que la frase trata de dos personas y no de un grupo: el plural {ـُن} y {ـِن} nunca aparece. Cuando la traducción ya está hecha y el número es ambiguo, vuelva a la terminación: {ـا} en el pronombre y en el verbo significa dos, y esa información estaba en la palabra desde el principio.`),
  vocab: [
    V('كِتَابٌ', 'كتاب', 'un libro'),
    V('كِتَابَانِ', 'كتاب', 'dos libros; dual nominativo'),
    V('كِتَابَيْنِ', 'كتاب', 'dos libros; dual acusativo y genitivo'),
    V('كِتَابَتَانِ', 'كتاب', 'dos libros; dual femenino'),
    V('قَلَمٌ', 'قلم', 'un bolígrafo'),
    V('قَلَمَانِ', 'قلم', 'dos bolígrafos'),
    V('أَنْتُمَا', 'أنتما', 'vosotros dos'),
    V('هُمَا', 'هما', 'los dos; igual para ambos sexos'),
    V('نَحْنُ', 'نحن', 'nosotros'),
    V('كِتَابُهُمَا', 'كتاب', 'el libro de los dos'),
    V('بَيْنَهُمَا', 'بين', 'entre los dos'),
    V('كُلَّاهُمَا', 'كل', 'ambos; solo con dual'),
    V('كَتَبَا', 'كتب', 'los dos escribieron'),
    V('كَتَبَتَا', 'كتب', 'las dos escribieron'),
    V('تَكْتُبَانِ', 'كتب', 'vosotros dos escribís'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuántos números tiene el sustantivo árabe?'),
    options: [T('Dos'), T('Tres'), T('Cuatro'), T('Cinco')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el dual en el nominativo: "dos libros" es {كِتَاب___}'),
      answer: 'َانِ',
      hint: T('El dual añade dos letras al sustantivo.'),
    },
    {
      kind: 'match',
      prompt: T('Associe persona y forma del dual.'),
      pairs: [
        { a: T('أَنْتُمَا'), b: T('segunda persona') },
        { a: T('هُمَا'), b: T('tercera persona') },
        { a: T('كَتَبَا'), b: T('verbo, tercera persona') },
        { a: T('كَتَبَتَا'), b: T('verbo, tercera persona femenina') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué significa {كُلَّاهُمَا}?'),
      options: [T('Los dos'), T('Ambos'), T('Ninguno de los dos'), T('Los dos, en negación')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('En {قَلَمَانِ}, ¿de dónde viene la {ن} final?'),
      options: [
        T('Del plural roto'),
        T('De la terminación del dual'),
        T('Del artículo'),
        T('Del femenino'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El sustantivo árabe tiene tres números: singular, dual y plural, y el dual es obligatorio cuando la cuenta es exactamente dos.',
      ),
    },
    {
      n: '2',
      text: T(
        '**El dual del sustantivo es {ـانِ} en el nominativo y {ـين} en los demás casos**, con {ت} en el femenino.',
      ),
    },
    {
      n: '3',
      text: T(
        'El dual del verbo termina en {ا}: {كَتَبَا} y {كَتَبَتَا}; en el imperfecto aparece como {بَانِ}, como en {تَكْتُبَانِ}.',
      ),
    },
    { n: '4', text: T('El pronombre del dual es {أَنْتُمَا} y {هُمَا}, y {هُمَا} sirve a los dos sexos.') },
    { n: '5', text: T('El dual reaparece en {بَيْنَهُمَا} y {كُلَّاهُمَا}, y ahí ya no cuenta, confirma.') },
  ],
  notes: [
    {
      label: T('El dual que el español perdió'),
      text: T(
        'Ninguna lengua europea moderna tiene dual, y por eso el {ـانِ} asusta a primera vista. No es exotismo: es la misma información que el español resuelve con "los dos", y el árabe con una terminación. Quien lee {كِتَابَيْنِ} sabe algo que el lector de español no ve: que son dos y no tres.',
      ),
    },
    {
      label: T('Cuándo el dual se vuelve "ambos"'),
      text: T(
        '{كُلَّاهُمَا} y {أَيُّهُمَا} significan ambos. No es un número nuevo: es el dual con {كُلّ} delante, y traducirlo por "los dos" falla porque {كُلّ} confirma en vez de contar.',
      ),
    },
  ],
  examples: [
    { text: 'كِتَابٌ', gloss: T('un libro; singular') },
    { text: 'كِتَابَانِ', gloss: T('dos libros; dual nominativo') },
    { text: 'كِتَابَيْنِ', gloss: T('dos libros; dual acusativo y genitivo') },
    { text: 'كِتَابَتَانِ', gloss: T('dos libros; dual femenino') },
    { text: 'قَلَمَانِ', gloss: T('dos bolígrafos; la {ن} del plural sigue ahí') },
    { text: 'أَنْتُمَا', gloss: T('vosotros dos') },
    { text: 'هُمَا', gloss: T('los dos; sin distinción de sexo') },
    { text: 'بَيْنَهُمَا', gloss: T('entre los dos; el dual dentro del sufijo') },
    { text: 'كَتَبَا', gloss: T('los dos escribieron') },
  ],
  tables: [
    {
      caption: T('El dual en el sustantivo'),
      head: [T('Género'), T('Singular'), T('Dual nominativo'), T('Dual acusativo/genitivo')],
      rows: [
        [T('masculino'), 'كِتَابٌ', 'كِتَابَانِ', 'كِتَابَيْنِ'],
        [T('femenino'), 'كِتَابَةٌ', 'كِتَابَتَانِ', 'كِتَابَتَيْنِ'],
        [T('plural roto'), 'قَلَمٌ', 'قَلَمَانِ', 'قَلَمَيْنِ'],
      ],
    },
    {
      caption: T('El dual en el verbo y el pronombre'),
      head: [T('Persona'), T('Pronombre'), T('Verbo'), T('Nota')],
      rows: [
        [T('1ª del plural'), 'نَحْنُ', 'كَتَبْنَا', T('misma terminación que el plural')],
        [T('2ª del singular'), 'أَنْتَ', 'كَتَبْتَ', T('sin dual')],
        [T('2ª del dual'), 'أَنْتُمَا', 'كَتَبْتُمَا', T('dual visible')],
        [T('3ª masc. del dual'), 'هُمَا', 'كَتَبَا', T('dual visible')],
        [T('3ª fem. del dual'), 'هُمَا', 'كَتَبَتَا', T('mismo pronombre, verbo con {ـَتْ}')],
      ],
    },
    {
      caption: T('Dónde reaparece el dual'),
      head: [T('Construcción'), T('Forma'), T('Gloss')],
      rows: [
        [T('pronombre del dual'), 'هُمَا', T('los dos')],
        [T('posesivo del dual'), 'كِتَابُهُمَا', T('el libro de los dos')],
        [T('preposición más dual'), 'بَيْنَهُمَا', T('entre los dos')],
        [T('preposición más dual'), 'عَنْهُمَا', T('sobre los dos')],
        [T('ambos'), 'كُلَّاهُمَا', T('ambos')],
        [T('imperfecto del dual'), 'تَكْتُبَانِ', T('vosotros dos escribís')],
      ],
    },
  ],
};
