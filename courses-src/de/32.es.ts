import { C, T, V } from '../shared.mts';

export default {
  id: 32,
  title: T('Los pronombres personales'),
  subtitle: T('ich, du, er, es, wir, ihr y Sie'),
  section: T('Los pronombres'),
  body: C(`El cuadro de los pronombres personales tiene siete filas y tres columnas, y las columnas son las tres posiciones posibles en la oración. Ich, mir, mich: nominativo, dativo y acusativo. La misma estructura vale para todas las personas: du, dir, dich; er/sie/es, ihm/ihr/ihnen, ihn/sie/es. En plural: wir, uns, uns; ihr, euch, euch; Sie, Ihnen, Sie. La regla que memoriza todo es corta: en acusativo el pronombre toma la forma del nominativo, salvo en la segunda persona del singular (dich), donde el nominativo es corto y el acusativo largo.

El acusativo es el lugar de la acción: sich lässt machen, man wagt, er folgt ihr. Por eso todos los verbos de acción sintéticos exigen un pronombre acusativo, y todos los verbos estáticos exigen un dativo. Ich kenne ihn (él no me conoce) e Ich helfe ihm (yo le ayudo) no son la misma oración: son dos casos distintos, y el portugués suele esconder la diferencia en preposiciones.

Sie es la palabra más sobrecargada del alemán. En la escritura va en mayúscula y significa usted o ellos, según el número del verbo: Sie kommen puede ser ustedes vienen o ellos vienen. En el habla la distinción se hace con el verbo en singular o en plural: Komm! es usted, kommen Sie! es usted o ellos, y el contexto lo resuelve. Quien necesita evitar la ambigüedad recurre a Ihnen (dativo) o usa Sie\\sie.

La elección entre du, ihr y Sie dicta pronombres reflexivos distintos, y la elección es más una cuestión de distancia social que de gramática. Frente a Sie el reflexivo es sich: Setzen Sie sich. Frente a ihr, vosotros: Setzt euch. Frente a du: Setz dich. Con Sie en tercera persona hay un sich personal, y entre ellos aparece el recíproco sie sich; frente a ihr no hay recíproco, porque la forma setzt euch es solo reflexiva: Ihr setzt euch.

Por último, es tiene una función que los manuales olvidan mencionar: puede ocupar el lugar de un grupo sintagmático entero, lo que es imposible con er o sie. Es ist heute kalt, Es sind viele Leute gekommen, Wie ist es? Aquí el pronombre ocupa el lugar de un sustantivo, no de un nombre.`),
  vocab: [
    V('ich', 'ich', 'yo (nominativo)'),
    V('mir', 'ich', 'a mí (dativo)'),
    V('mich', 'ich', 'a mí (acusativo)'),
    V('du', 'du', 'tú (nominativo)'),
    V('dir', 'du', 'a ti (dativo)'),
    V('dich', 'du', 'a ti (acusativo)'),
    V('er', 'er', 'él (nominativo)'),
    V('ihn', 'er', 'lo, él (acusativo)'),
    V('ihm', 'er', 'a él (dativo)'),
    V('es', 'es', 'eso, ella (neutro)'),
    V('sie', 'sie', 'ella (minúscula)'),
    V('wir', 'wir', 'nosotros (nominativo)'),
    V('ihr', 'ihr', 'vosotros (nominativo)'),
    V('Sie', 'Sie', 'usted, ellos (mayúscula)'),
    V('Ihnen', 'Sie', 'a usted, a ellos (dativo)'),
    V('sich', 'sich', 'a sí mismo (reflexivo)'),
    V('euch', 'ihr', 'a vosotros (reflexivo/acusativo)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el pronombre acusativo de «du»?'),
    options: [T('du'), T('dich'), T('dir'), T('dihr')],
    answer: 1,
    hint: T('Es la única fila del cuadro que no repite el nominativo.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el dativo: Das Buch gefällt ___ (a mí).'),
      answer: 'mir',
      hint: T('Es la forma en -r del pronombre ich.'),
    },
    {
      kind: 'choose',
      prompt: T('En «Ich gebe Ihnen das Buch», ¿qué significa Ihnen?'),
      options: [
        T('a usted, en forma de dativo'),
        T('a ellos, en forma de nominativo'),
        T('a nosotros mismos, en acusativo'),
        T('a usted, en acusativo'),
      ],
      answer: 0,
    },
    {
      kind: 'fill',
      prompt: T('Completa la oración impersonal: ___ ist heute kalt.'),
      answer: 'Es',
      hint: T('El verbo no tiene qué regir, así que entra es.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el pronombre con el caso.'),
      pairs: [
        { a: T('mich'), b: T('acusativo') },
        { a: T('dir'), b: T('dativo') },
        { a: T('Ihnen'), b: T('dativo de Sie') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('En acusativo el pronombre repite el nominativo, salvo en du, que pasa a dich.'),
    },
    {
      n: '2',
      text: T(
        'Dativo y acusativo tienen la misma forma en plural, salvo en Sie, cuyo acusativo es Sie y cuyo dativo es Ihnen.',
      ),
    },
    {
      n: '3',
      text: T(
        'Sie mayúscula puede significar usted o ellos; la ambigüedad la resuelven el número del verbo y el contexto.',
      ),
    },
    {
      n: '4',
      text: T(
        'es puede sustituir un grupo entero: Es sind viele Leute gekommen. Con er o sie eso es imposible.',
      ),
    },
    {
      n: '5',
      text: T(
        'El tratamiento decide el reflexivo: sich frente a Sie, euch frente a ihr, dich frente a du.',
      ),
    },
  ],
  notes: [
    {
      label: T('El dativo que se parece al portugués'),
      text: T(
        'Ich helfe ihm e Ich gebe ihm das Buch se traducen al portugués con una preposición, y esa preposición hace desaparecer el caso. Quien traduce al portugués y luego intenta rehacer la frase pierde la información. La lectura bíblica depende de esa exactitud: Wenn ich euch nicht liebe, so ist keine Liebe in mir (1 Juan 4:16) lleva un dativo y un pronombre acusativo en la misma oración, y ninguno de los dos sobrevive a la preposición portuguesa.',
      ),
    },
    {
      label: T('Vínculo bíblico'),
      text: T(
        'La traducción de Lutero usa ich y du sin artículo, que es la señal más fiable de intimidad en el texto bíblico. Ich bin bei euch (Mateo 28:20) e Ihr seid mein Leib (1 Corintios 12:23) colocan al hablante y al interlocutor en el mismo plano. El mismo versículo, en el uso litúrgico, tiene Sie: Siehe, ich bin bei euch alle Tage, que es la forma litúrgica del texto, sin ambigüedad de tratamiento.',
      ),
    },
  ],
  examples: [
    { text: 'Ich sehe dich.', gloss: T('Te veo (pronombre acusativo).') },
    { text: 'Ich gebe dir das Buch.', gloss: T('Te doy el libro (dativo antes del acusativo).') },
    { text: 'Es gefällt mir.', gloss: T('Eso me gusta (pronombre en dativo).') },
    { text: 'Sie kommen heute.', gloss: T('Ustedes vienen hoy (o ellos: lo resuelve el verbo).') },
    { text: 'Setzen Sie sich, bitte.', gloss: T('Siéntense, por favor (reflexivo sich).') },
    { text: 'Setzt euch!', gloss: T('¡Siéntense! (reflexivo euch).') },
    {
      text: 'Es sind viele Leute hier.',
      gloss: T('Hay mucha gente aquí (es en lugar de un grupo).'),
    },
    { text: 'Wie ist es?', gloss: T('¿Cómo va todo? (impersonal con es).') },
    { text: 'Ich kenne ihn gut.', gloss: T('Lo conozco bien (acusativo él).') },
  ],
  tables: [
    {
      caption: T('El cuadro de los pronombres personales'),
      head: ['Pessoa', 'Nominativo', 'Dativo', 'Acusativo'],
      rows: [
        ['ich', 'ich', 'mir', 'mich'],
        ['du', 'du', 'dir', 'dich'],
        ['er/sie/es', 'er/sie/es', 'ihm/ihr/ihnen', 'ihn/sie/es'],
        ['wir', 'wir', 'uns', 'uns'],
        ['ihr', 'ihr', 'euch', 'euch'],
        ['Sie', 'Sie', 'Ihnen', 'Sie'],
      ],
    },
    {
      caption: T('Nominativo y acusativo: solo una excepción'),
      head: ['Pronome', 'Nominativo', 'Acusativo', 'Exceção?'],
      rows: [
        ['1ª sing.', 'ich', 'mich', 'não'],
        ['2ª sing.', 'du', 'dich', 'sim: du → dich'],
        ['3ª masc.', 'er', 'ihn', 'não (vogal → nada)'],
        ['3ª fem.', 'sie', 'sie', 'não'],
        ['neutro', 'es', 'es', 'não'],
        ['plural', 'wir/ihr/Sie', 'uns/euch/Sie', 'não'],
      ],
    },
  ],
};
