import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('El acusativo'),
  subtitle: T('objeto directo y dirección'),
  section: T('Los casos'),
  body: C(`El acusativo marca aquello en lo que incide directamente la acción del verbo: el objeto, la persona afectada, el destino. Ich sehe den Mann, Ich schreibe ein Buch, Sie kaufen ein Haus. En todos estos casos el acusativo responde a la pregunta en quién o en qué incide la acción.

El mismo caso cubre la dirección. Los verbos de movimiento exigen acusativo no para el punto de partida, sino para el destino: Ich gehe in die Stadt, Wir fahren nach Berlin, Er läuft über die Brücke. Observa la diferencia con el portugués: Ich gehe in die Stadt es el destino; in der Stadt es el lugar, y por tanto dativo.

Hay además un uso de persona afectada propio del alemán: cuando el daño recae sobre alguien, el acusativo marca a la víctima. Er friert sich die Hände, Ich wasche mir die Haare, Er hat sich das Bein gebrochen. Son construcciones con pronombre reflexivo en dativo y objeto en acusativo, y el sentido es «hacerse algo a sí mismo».

Los verbos con dos acusativos son más raros, pero frecuentes en el registro escrito: Ich schenke dir ein Buch, Er zeigt mir die Tür, Gott gab ihm ein Gesetz. El orden estándar del alemán pone al destinatario (dativo) antes de la cosa; cuando ambos son acusativos, el orden lo marca el caso del pronombre.

Las preposiciones de acusativo son fijas y solo estas: durch (a través de), für (para), gegen (contra), ohne (sin), um (alrededor de), bis (hasta), entlang (a lo largo de). Con ellas el caso está garantizado y no se negocia: durch den Wald, für dich, gegen meinen Willen, ohne Zweifel, um die Ecke, bis morgen, den Fluss entlang.`),
  vocab: [
    V('der Akkusativ', 'Akkusativ', 'el caso acusativo'),
    V('sehen', 'sehen', 'ver (acusativo)'),
    V('schreiben', 'schreiben', 'escribir'),
    V('kaufen', 'kaufen', 'comprar'),
    V('brauchen', 'brauchen', 'necesitar'),
    V('schenken', 'schenken', 'regalar'),
    V('zeigen', 'zeigen', 'mostrar'),
    V('durch', 'durch', 'a través de (prep. de acusativo)'),
    V('für', 'für', 'para (prep. de acusativo)'),
    V('gegen', 'gegen', 'contra (prep. de acusativo)'),
    V('ohne', 'ohne', 'sin (prep. de acusativo)'),
    V('um', 'um', 'alrededor de (prep. de acusativo)'),
    V('entlang', 'entlang', 'a lo largo de (prep. de acusativo)'),
    V('sich waschen', 'waschen', 'lavarse'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «Ich gehe in die Stadt», ¿qué caso tiene die?'),
    options: [T('nominativo'), T('acusativo'), T('dativo'), T('genitivo')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa la preposición: Ich gehe ___ Garten spazieren.'),
      answer: 'im',
      hint: T('in + dem = en el jardín (destino).'),
    },
    {
      kind: 'fill',
      prompt: T('Completa el acusativo: Ich brauche ___ (el libro).'),
      answer: 'das Buch',
      hint: T('El neutro no cambia en el acusativo.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué preposición exige acusativo?'),
      options: [T('mit'), T('von'), T('durch'), T('bei')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Relaciona la preposición con el caso.'),
      pairs: [
        { a: T('ohne'), b: T('acusativo') },
        { a: T('für'), b: T('acusativo') },
        { a: T('mit'), b: T('dativo') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El destino de un verbo de movimiento se marca con preposición de acusativo (in, an, auf, über) o con sustantivo sin preposición (nach Berlin, zu Hause).',
      ),
    },
    {
      n: '2',
      text: T(
        'La construcción de persona afectada lleva siempre reflexivo en dativo: sich, mir, dir, ihm, ihr, uns, euch, ihnen — nunca mich en dativo.',
      ),
    },
    {
      n: '3',
      text: T(
        'Con dos acusativos el primero suele ser el pronombre y mantiene el orden pronominal: Ich gebe ihm das Buch, Ich gebe es ihm.',
      ),
    },
    {
      n: '4',
      text: T(
        'Los nombres propios sin artículo tienden al acusativo, sobre todo en construcciones de tiempo: letzten Montag, nächsten Sommer, letzten Sonntag.',
      ),
    },
  ],
  notes: [
    {
      label: T('Wo o wohin'),
      text: T(
        'La pregunta wo? (¿dónde?) pide dativo; la pregunta wohin? (¿adónde?) pide acusativo. Ich bin in der Schule (dativo, lugar) e Ich gehe in die Schule (acusativo, destino) usan el mismo sustantivo con artículos distintos. Es la pregunta, no la preposición, la que decide el caso, y por eso wo y wohin son la mejor clave de toda la sección de preposiciones.',
      ),
    },
    {
      label: T('Vínculo bíblico'),
      text: T(
        'En Juan 3:16, denn Gott hat seinen Sohn gegeben (dativo), dass die Welt gerettet werde (finalidad). El verbo dar muestra el patrón que acabamos de ver: el destinatario queda en dativo y la cosa dada en acusativo.',
      ),
    },
  ],
  examples: [
    { text: 'Ich sehe den Mann.', gloss: T('Veo al hombre (objeto directo).') },
    { text: 'Wir fahren nach Berlin.', gloss: T('Vamos a Berlín (destino sin artículo).') },
    {
      text: 'Er läuft über die Brücke.',
      gloss: T('Corre por el puente (über = acusativo, movimiento).'),
    },
    { text: 'Ich bin in der Schule.', gloss: T('Estoy en la escuela (in + dativo = lugar).') },
    { text: 'Ich gehe in die Schule.', gloss: T('Voy al colegio (in + acusativo = destino).') },
    { text: 'Er friert sich die Hände.', gloss: T('Se congela las propias manos (afectado).') },
    { text: 'Ich schenke ihr ein Buch.', gloss: T('Le regalo un libro a ella.') },
    {
      text: 'Ohne Zweifel ist das richtig.',
      gloss: T('Sin duda esto es correcto (ohne + acusativo).'),
    },
  ],
  tables: [
    {
      caption: T('Usos del acusativo'),
      head: ['Uso', 'Estrutura', 'Exemplo', 'Pergunta'],
      rows: [
        ['objeto direto', 'verbo + N', 'Ich sehe den Mann.', 'em quem?'],
        ['destino', 'verbo de movimento + N', 'Wir fahren nach Berlin.', 'para onde?'],
        ['pessoa afetada', 'reflexivo dativo + N', 'Er friert sich die Hände.', 'a quem acontece?'],
        ['com complemento de direção', 'um + N', 'Er bog um die Ecke.', 'em torno de quê?'],
        ['com duração', 'por + N', 'Zwei Wochen lang.', 'por quanto tempo?'],
        [
          'com dois acusativos',
          'verbo + pronome + N',
          'Ich schenke dir ein Buch.',
          'a quem o quê?',
        ],
      ],
    },
    {
      caption: T('Preposiciones de acusativo'),
      head: ['Preposição', 'Significado', 'Exemplo'],
      rows: [
        ['durch', 'através de', 'durch den Wald gehen'],
        ['für', 'para, por', 'für dich, für zwei Wochen'],
        ['gegen', 'contra', 'gegen meinen Willen'],
        ['ohne', 'sem', 'ohne Zweifel, ohne Geld'],
        ['um', 'em torno de, para (mudar)', 'um die Ecke, um neun Uhr'],
        ['bis', 'até', 'bis morgen, bis Leipzig'],
        ['entlang', 'ao longo de', 'den Fluss entlang'],
      ],
    },
  ],
};
