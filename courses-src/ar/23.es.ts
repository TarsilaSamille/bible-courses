import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('El caso y las tres terminaciones'),
  subtitle: T('ـُ، ـَ، ـِ'),
  section: T('Sustantivos'),
  body: C(`## Tres terminaciones y una pregunta

El latín tenía tres casos y perdió dos por el camino hacia el español. El español conservó un resto, y el resto está dentro de las preposiciones: "de mí", "a Dios", "a él". El árabe conservó los tres, y la marca está en el sustantivo, no en la preposición.

Son {ـُ} en el nominativo, {ـَ} en el acusativo y {ـِ} en el genitivo: {كِتَابٌ}, {كِتَابًا}, {كِتَابٍ}. Una sola pregunta decide entre ellos, y la pregunta es sobre el sustantivo: **¿qué está haciendo este sustantivo en esta cláusula?** Si es sujeto, nominativo. Si es objeto directo de un verbo transitivo, acusativo. Si va detrás de una preposición, genitivo.

Por eso la terminación es la información más barata que ofrece la frase. Quien traduzca a partir de la preposición se equivoca la mitad de las veces, porque {بِـ} y {لِـ} piden genitivo y {كَتَبَ} pide acusativo, y las dos cosas están en la misma línea.

## Qué decide el caso

El caso viene de la función, y las funciones son pocas. El sujeto de cualquier verbo va en nominativo: {جَاءَ الرَّجُلُ}. El objeto directo de un verbo transitivo va en acusativo: {كَتَبَ رِسَالَةً}. El complemento de una preposición va en genitivo: {فِي الْبَيْتِ}.

Hay un caso que no viene de ninguna de esas fuentes y que aparece todo el tiempo: **el segundo elemento de una iḍāafa es siempre genitivo**. {بَيْتُ اللهِ} no enseña ninguna preposición, y {اللهِ} está en genitivo igualmente, porque cierra una unidad. Es el único contexto en que el genitivo aparece sin preposición, y por eso desconcierta a quien empieza.

El verbo {كَانَ} tiene un comportamiento propio que conviene aislar ahora. Su sujeto es nominativo, como siempre: {كَانَ الْمَلِكُ}. Lo que sigue es un predicado, y el predicado va en acusativo: {كَانَ الْمَلِكُ عَالِمًا}. Traducir eso como nominativo produce una frase que nadie dice.

## Donde el caso no aparece

Y aquí está la excepción, que ocupa más que la regla porque es donde el lector se equivoca.

El plural regular femenino esconde el caso. {مُعَلِّمَاتٌ} es nominativo y {مُعَلِّمَاتٍ} es acusativo o genitivo, pero la vocal final desaparece y las dos formas quedan idénticas cuando la {ة} no se escribe. Un diccionario dirá que son la misma palabra, y el texto bíblico está lleno de puntos donde el caso solo se sabe por la preposición que venía antes.

Lo mismo pasa con el plural de {أَفْعَال}: {رِجَالٌ}, {رِجَالٍ}, {رِجَالٍ}. Y con el plural regular masculino, que al menos distingue el nominativo {ـُونَ} del resto.

La lista más corta es la de los diptotos. Son pocas palabras, casi todas nombre propio o nombre de lugar: {أَحْمَدٌ}, {مَسْجِدٌ}, {هِنْدٌ}, {دِينَارٌ}. Cambian la vocal final por {ٍ} en el genitivo y la suprimen en el acusativo: {رَأَيْتُ أَحْمَدٍ}, {فِي مَسَاجِدَ}, {فِي مَسَاجِدٍ}. Quien no sepa que la lista existe va a leer {فِي مَسَاجِدَ} como un error de copia.

## Criterio de lectura

Empiece por el verbo y siga desde ahí. En {كَذَا بَحُبُّ اللَّهُ الْعَالَمَ حَتَّى بَذَلَ ابْنَهُ} hay dos construcciones de acusativo: {الْعَالَمَ} es objeto de {بَحُبّ}, {ابْنَهُ} es objeto de {بَذَلَ}, y la fatha final de cada uno lo dice sin ninguna ayuda. Quien traduce la terminación final como nominativo llega al final con toda la cláusula equivocada, y el error queda invisible si nunca miró el sustantivo.`),
  vocab: [
    V('كِتَابٌ', 'كتاب', 'libro; nominativo'),
    V('كِتَابًا', 'كتاب', 'libro; acusativo'),
    V('كِتَابٍ', 'كتاب', 'libro; genitivo'),
    V('رِسَالَةً', 'رسالة', 'mensaje; acusativo'),
    V('رَجُلٌ', 'رجل', 'hombre; nominativo'),
    V('جَاءَ', 'جاء', 'vino'),
    V('الْبَيْتِ', 'بيت', 'la casa; genitivo'),
    V('الْمَلِكُ', 'ملك', 'el rey; nominativo'),
    V('عَالِمًا', 'علم', 'sabio; acusativo como predicado'),
    V('كُتُبٌ', 'كتب', 'libros; plural roto en nominativo'),
    V('كُتُبًا', 'كتب', 'libros; plural roto en acusativo'),
    V('أَحْمَدٌ', 'أحمد', 'nombre propio; diptoto'),
    V('مَسَاجِدَ', 'مسجد', 'mezquitas; diptoto en acusativo'),
    V('الْعَالَمَ', 'عالم', 'el mundo; acusativo'),
    V('بَحُبُّ', 'حبب', 'ama'),
    V('ابْنَهُ', 'ابن', 'su hijo; acusativo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {كَتَبَ رِسَالَةً}, ¿qué caso tiene {رِسَالَةً}?'),
    options: [T('Nominativo'), T('Acusativo'), T('Genitivo'), T('Vocal')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el genitivo: "en una casa" es {فِي ___}.'),
      answer: 'بَيْتٍ',
      hint: T('Tras una preposición el sustantivo toma la terminación con kasra.'),
    },
    {
      kind: 'match',
      prompt: T('Associe función y caso.'),
      pairs: [
        { a: T('sujeto'), b: T('nominativo') },
        { a: T('objeto directo'), b: T('acusativo') },
        { a: T('tras una preposición'), b: T('genitivo') },
        { a: T('segundo elemento de la iḍāafa'), b: T('genitivo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En {كَانَ الْمَلِكُ عَالِمًا}, ¿qué caso tiene {عَالِمًا}?'),
      options: [T('Nominativo'), T('Acusativo'), T('Genitivo'), 'Dual'],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de estas palabras es un diptoto?'),
      options: [T('كِتَابٌ'), T('أَحْمَدٌ'), T('مُعَلِّمٌ'), 'كِتَابَتَانِ'],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '**El caso es una terminación del sustantivo: {ـُ} nominativo, {ـَ} acusativo, {ـِ} genitivo.**',
      ),
    },
    {
      n: '2',
      text: T(
        'El caso lo decide la función del sustantivo en la cláusula: sujeto, objeto directo o complemento de preposición.',
      ),
    },
    {
      n: '3',
      text: T(
        'El segundo elemento de una iḍāafa es siempre genitivo, y es el único contexto donde el genitivo aparece sin preposición.',
      ),
    },
    {
      n: '4',
      text: T(
        'El plural regular femenino esconde el caso: {مُعَلِّمَاتٌ} y {مُعَلِّمَاتٍ} son las dos formas.',
      ),
    },
    {
      n: '5',
      text: T(
        'Los diptotos cambian la vocal final por {ٍ} en el genitivo y la suprimen en el acusativo: {فِي مَسَاجِدَ}, {فِي مَسَاجِدٍ}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué el latín lo perdió'),
      text: T(
        'El latín conservó los tres casos hasta el final, y el español heredó el caso solo dentro de las preposiciones: "de mí", "a Dios". El árabe conservó los tres, y por eso la terminación es información y no adorno.',
      ),
    },
    {
      label: T('El caso que no está escrito'),
      text: T(
        'En un texto antiguo el caso no siempre está. La terminación ausente a veces se recupera por la del verbo o por la preposición que viene después, y por eso el mismo sustantivo aparece con {ـُ} en un manuscrito y {ـَ} en otro sin que ninguno esté mal.',
      ),
    },
  ],
  examples: [
    { text: 'جَاءَ الرَّجُلُ', gloss: T('el hombre vino; sujeto en nominativo') },
    { text: 'كَتَبَ رِسَالَةً', gloss: T('escribió un mensaje; acusativo') },
    { text: 'فِي الْبَيْتِ', gloss: T('en la casa; genitivo por preposición') },
    { text: 'بَيْتُ اللهِ', gloss: T('la casa de Dios; genitivo por iḍāafa') },
    { text: 'كَانَ الْمَلِكُ عَالِمًا', gloss: T('el rey era sabio; predicado en acusativo') },
    { text: 'مُعَلِّمَاتٍ', gloss: T('maestras; acusativo y genitivo iguales') },
    { text: 'كُتُبٌ', gloss: T('libros; plural roto en nominativo') },
    { text: 'أَحْمَدٍ', gloss: T('Ahmad; diptoto en genitivo') },
    { text: 'فِي مَسَاجِدَ', gloss: T('en mezquitas; diptoto en acusativo, sin vocal final') },
  ],
  tables: [
    {
      caption: T('Las tres terminaciones'),
      head: [T('Caso'), T('Terminación'), T('Función'), T('Ejemplo')],
      rows: [
        [T('nominativo'), 'ـُ', T('sujeto'), 'كِتَابٌ'],
        [T('acusativo'), 'ـَ', T('objeto directo, predicado'), 'كِتَابًا'],
        [T('genitivo'), 'ـِ', T('tras preposición o iḍāafa'), 'كِتَابٍ'],
      ],
    },
    {
      caption: T('Qué decide el caso'),
      head: [T('Papel del sustantivo'), T('Caso'), T('Ejemplo')],
      rows: [
        [T('sujeto del verbo'), T('nominativo'), 'جَاءَ الرَّجُلُ'],
        [T('objeto de verbo transitivo'), T('acusativo'), 'كَتَبَ رِسَالَةً'],
        [T('tras una preposición'), T('genitivo'), 'فِي الْبَيْتِ'],
        [T('segundo elemento de la iḍāafa'), T('genitivo'), 'بَيْتُ اللهِ'],
        [T('predicado tras {كَانَ}'), T('acusativo'), 'عَالِمًا'],
      ],
    },
    {
      caption: T('Dónde se esconde el caso'),
      head: [T('Tipo'), T('Nominativo'), T('Acusativo'), T('Genitivo')],
      rows: [
        [T('regular femenino'), 'مُعَلِّمَاتٌ', 'مُعَلِّمَاتٍ', 'مُعَلِّمَاتِ'],
        [T('regular masculino'), 'مُعَلِّمُونَ', 'مُعَلِّمِينَ', 'مُعَلِّمِينَ'],
        [T('plural roto'), 'كُتُبٌ', 'كُتُبًا', 'كُتُبٍ'],
        [T('diptoto'), 'أَحْمَدٌ', 'أَحْمَدًا', 'أَحْمَدٍ'],
      ],
    },
  ],
};
