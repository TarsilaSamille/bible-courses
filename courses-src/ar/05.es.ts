import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Lectura: Juan 1:1–5'),
  subtitle: T('فِي الْبَدْءِ كَانَ الْكَلِمَةُ'),
  section: T('Lecturas'),
  body: C(`## El pasaje por bloques

Juan 1:1-5 tiene cuatro cláusulas cortas. En {فِي الْبَدْءِ} la preposición {فِي} rige el genitivo, visible en la terminación {الْبَدْءِ}; el sustantivo está, pues, en el caso regido y no en el nominativo. En {كَانَ الْكَلِمَةُ} el verbo {كَانَ} expresa estado, y {الْكَلِمَةُ} es el sujeto en nominativo.

## Predicativo y aposición

En {وَالْكَلِمَةُ كَانَتْ عِنْدَ اللهِ} el sujeto es {الْكَلِمَةُ}. En el versículo 1, donde el texto dice que la Palabra *era* Dios, {اللهَ} no es sujeto: está en acusativo, como predicativo. Esa es la marca de un versículo que no cabe en una lectura gramatical simple. En {نُورَ النَّاسِ} ocurre lo mismo: {نُورَ} es predicativo y {النَّاسِ} está en genitivo por aposición.

## Tiempo y aspecto

{كَانَ يُضِيءُ النُّورُ} lleva el imperfecto {يُضِيءُ} para describir algo continuo. El versículo 5, {النُّورُ يُضِيءُ فِي الظُّلْمَةِ}, mantiene la luz como agente de una acción que continúa, y {الظُّلْمَة} no la recibe. Nota la diferencia: lo que recibiese la luz sería objeto directo, y eso exigiría la marcación de caso correcta.

## Criterio de lectura

Marca cada cláusula e identifica primero el verbo, luego el sujeto y solo después los demás términos. Casi todos los errores de lectura de Juan 1 nacen de confundir sujeto con predicativo.`),
  vocab: [
    V('الْبَدْء', 'بدء', 'principio'),
    V('كَانَ', 'كان', 'era; estuvo'),
    V('الْكَلِمَة', 'كلمة', 'la Palabra'),
    V('عِنْدَ', 'عند', 'junto a'),
    V('الله', 'الله', 'Dios'),
    V('فِيهِ', 'في', 'en él; en ello'),
    V('الْحَيَاة', 'حياة', 'la vida'),
    V('النَّاس', 'ناس', 'la humanidad'),
    V('النُّور', 'نور', 'la luz'),
    V('يُضِيءُ', 'أضاء', 'ilumina'),
    V('الظُّلْمَة', 'ظلام', 'las tinieblas'),
    V('وَ', 'و', 'y; también'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Por qué {اللهَ} lleva fatha final?'),
    options: [T('Es sujeto'), T('Es predicativo de كَانَ'), T('Es plural'), T('Por convención')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('El sustantivo tras {فِي} está en genitivo: completa «فِي ___».'),
      answer: 'الْبَدْءِ',
      hint: T('La terminación cambia a -i.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona palabra y significado.'),
      pairs: [
        { a: T('luz'), b: T('luz') },
        { a: T('vida'), b: T('vida') },
        { a: T('tinieblas'), b: T('tinieblas') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('En {الْكَلِمَةُ كَانَ اللهَ}, ¿qué palabra es sujeto?'),
      options: [T('اللهَ'), T('الْكَلِمَةُ'), T('كان'), T('y')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('El nombre de {كَانَ} va en nominativo; el predicado puede llevar acusativo.'),
    },
    {
      n: '2',
      text: T('La fatha final de {اللهَ} marca aquí el acusativo; no es otra forma del nombre.'),
    },
    { n: '3', text: T('La {و} inicial enlaza oraciones y puede repetir un elemento ya conocido.') },
  ],
  notes: [
    {
      label: T('Transcripción'),
      text: T(
        'Las vocales largas pueden omitirse en el texto no vocalizado; suelen conservarse en la lectura bíblica vocalizada.',
      ),
    },
  ],
  examples: [
    { text: 'وَالْكَلِمَةُ كَانَ عِنْدَ اللهِ', gloss: T('y la Palabra estaba con Dios') },
    { text: 'وَالْحَيَاةُ كَانَتْ نُورَ النَّاسِ', gloss: T('y la vida era la luz de la humanidad') },
    { text: 'وَالنُّورُ يُضِيءُ فِي الظُّلْمَةِ', gloss: T('y la luz brilla en las tinieblas') },
  ],
  tables: [
    {
      caption: T('Análisis sintáctico'),
      head: [T('Segmento'), T('Función'), T('Español')],
      rows: [
        ['فِي الْبَدْءِ', 'prep. + gen.', 'no princípio'],
        ['كَانَ الْكَلِمَةُ', 'verbo + sujeito', 'a Palavra era'],
        ['عِنْدَ اللهِ', 'prep. + gen.', 'junto a Deus'],
        ['اللهَ', 'predicativo acusativo', 'era Deus'],
      ],
    },
  ],
};
