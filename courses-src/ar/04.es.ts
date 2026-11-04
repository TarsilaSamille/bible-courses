import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Verbos en pasado'),
  subtitle: T('كَتَبَ: raíces y sufijos personales'),
  section: T('El verbo'),
  body: C(`## La raíz triconsonantal

Cada verbo árabe nace de una raíz de tres consonantes, y es la raíz la que carga el significado. {ك-ت-ب} significa escribir; {ق-و-ل} decir; {خ-ل-ق} crear. La raíz no es una palabra: es un patrón de tres consonantes al que se ajustan vocales y sufijos. Por eso dos verbos de la misma raíz se reconocen aunque no compartan forma alguna.

## El pasado

El pasado se forma añadiendo vocales y un sufijo de persona. Compara {كَتَبَ} (él), {كَتَبَتْ} (ella), {كَتَبْتَ} (tú), {كَتَبْتُ} (yo), {كَتَبْنَا} (nosotros) y {كَتَبُوا} (ellos). La terminación {وا} marca el plural masculino, {نا} el plural común. Una terminación en {ت} es la segunda persona o la tercera femenina — el contexto las distingue.

## Vocales epentéticas

Las vocales del pasado no son arbitrarias: {كَتَبَ} lleva {ا} tras la primera consonante, y la segunda recibe {َ}. En raíces cuya última consonante es débil, aparece {ِ} debajo: {قَالَ}. Esta regla es la que permite distinguir una raíz triconsonantal de una débil, tema de la lección 8.

## El tiempo en la frase

En Génesis 1:3, {وَقَالَ اللهُ: لِيَكُنْ نُورٌ}, la estructura es un verbo en pasado seguido de una orden en jussivo. El perfecto de {ق-و-ل} narra; {لِيَكُنْ} ordena. El verbo {خَلَقَ} viene después, y es la forma que una traducción corriente vuelve «hubo luz» — el portugués genérico esconde la distinción que el árabe mantiene.

## Criterio de lectura

Al encontrar un verbo en el texto, retira primero la raíz de tres consonantes, luego identifica el sufijo de persona y solo entonces interpreta el tiempo. La raíz es lo que hace posible buscar en el diccionario.`),
  vocab: [
    V('كَتَبَ', 'كتب', 'escribió'),
    V('كَتَبَتْ', 'كتب', 'escribió'),
    V('كَتَبْتَ', 'كتب', 'escribiste'),
    V('كَتَبْتُ', 'كتب', 'escribí'),
    V('كَتَبْنَا', 'كتب', 'escribimos'),
    V('كَتَبُوا', 'كتب', 'escribieron'),
    V('قَالَ', 'قال', 'dijo'),
    V('خَلَقَ', 'خلق', 'creó'),
    V('آمَنَ', 'آمن', 'creyó'),
    V('أَنَا', 'أنا', 'yo'),
    V('أَنْتَ', 'أنت', 'tú'),
    V('نَحْنُ', 'نحن', 'nosotros'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Completa: ___ كَتَبَ (escribió).'),
    answer: 'هُوَ',
    hint: T('Pronombre de tercera persona masculina.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Relaciona persona y forma.'),
      pairs: [
        { a: T('yo'), b: T('كتبتُ') },
        { a: T('nosotros'), b: T('كتبنا') },
        { a: T('ella'), b: T('كتبت') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué raíz significa escribir?'),
      options: [T('q-w-l'), T('k-t-b'), T('kh-l-q'), T('ʾ-m-n')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('En {وَقَالَ اللهُ}, ¿qué función tiene اللهُ?'),
      options: [T('objeto'), T('sujeto'), T('adverbio'), T('numeral')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('La raíz aporta el significado; por sí sola no funciona como palabra.') },
    {
      n: '2',
      text: T(
        'El perfecto suele llevar sufijo personal; la terminación -a de 3.ª m. se interpreta por contexto.',
      ),
    },
    { n: '3', text: T('La negación del pasado puede ser {لَمْ} + jussivo, como en {لَمْ يَكْتُبْ}.') },
  ],
  notes: [
    {
      label: T('Orden'),
      text: T('El orden verbo-sujeto-objeto es típico, aunque el sujeto puede desplazarse.'),
    },
  ],
  examples: [
    { text: 'قَالَ اللهُ', gloss: T('allāhu qāla — Dios dijo') },
    { text: 'آمَنْتُ بِالله', gloss: T('āmantu billāh — creí en Dios') },
    { text: 'لِيَكُنْ نُورٌ', gloss: T('li-yakun nūr — haya luz') },
  ],
  tables: [
    {
      caption: T('Paradigma de كتب'),
      head: [T('Persona'), T('Singular'), T('Plural')],
      rows: [
        ['1.ª', 'كَتَبْتُ', 'كَتَبْنَا'],
        ['2.ª m.', 'كَتَبْتَ', 'كَتَبْتُمْ'],
        ['2.ª f.', 'كَتَبْتِ', 'كَتَبْتُنَّ'],
        ['3.ª m.', 'كَتَبَ', 'كَتَبُوا'],
        ['3.ª f.', 'كَتَبَتْ', 'كَتَبْنَ'],
      ],
    },
  ],
};
