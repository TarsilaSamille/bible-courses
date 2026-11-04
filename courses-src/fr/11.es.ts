import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Los adverbios de tiempo y frecuencia'),
  subtitle: T("{aujourd'hui}, {demain}, {déjà}, {jamais} y la construcción con {depuis}"),
  section: T('Los adjetivos y los adverbios'),
  body: C(`## Tres palabras y media bastan

El tiempo tiene los adverbios más sencillos de la lengua: {aujourd'hui} «hoy», {hier} «ayer», {demain} «mañana». Solo «mañana» tiene una palabra para «el día siguiente», que es {le lendemain}: una distinción que el português también hace y el español no necesita.

Estos tres se combinan con sustantivos de momento y forman expresiones fijas: {hier soir} «anoche», {demain matin} «mañana por la mañana», {après-midi} «tarde», {avant-midi} «mañana», {ce soir} «esta noche», {l'an prochain} «el año que viene». Fíjate en {après-midi} y {avant-midi}: van con guion porque un término de otra lengua ya viene pegado.

Y {aujourd'hui} tiene un segundo sentido, más metafórico: {le monde d'aujourd'hui} «el mundo actual», {les hommes d'aujourd'hui} «los hombres de hoy».

## Lo que sigue y lo que ya pasó

{Maintenant} es «ahora», el adverbio más neutro. {Bientôt} es «pronto», {déjà} es «ya», {tout à l'heure} es «en un momento» (literalmente «a cada hora»).

Dentro de una secuencia: {d'abord} «primero», {ensuite} «después», {puis} «luego», {enfin} «por fin», {alors} «entonces». Y {déjà} puede suavizar una concesión: {C'est déjà quelque chose} «ya es algo».

Para la **duración** trabaja el verbo, no el adverbio. {Je travaille depuis deux heures} «llevo dos horas trabajando» — el presente es obligatorio tras {depuis}, porque la acción empezó en el pasado y sigue. {Je travaille pendant deux heures} es distinto: «trabajo durante dos horas», un tramo delimitado. Confundir {depuis} con {pendant} es el error más común de quien llega al francés.

## Frecuencia: la escalera entera

La escala completa cabe en seis palabras:

| Adverbio | Significado | Ejemplo |
|---|---|---|
| {toujours} | siempre | {Je prie toujours} |
| {souvent} | a menudo | {Je prie souvent} |
| {de temps en temps} | de vez en cuando | {Je prie de temps en temps} |
| {parfois} | a veces | {Je prie parfois} |
| {rarement} | rara vez | {Je prie rarement} |
| {jamais} | nunca | {Je ne prie jamais} |

Dos reglas de primera importancia. Primera: con {jamais}, {toujours}, {souvent}, {parfois} y {rarement}, la frase queda **negativa o restrictiva**, y la negación va una sola vez: {je ne prie jamais}, {je ne prie pas toujours}, {je ne prie pas souvent}, {je ne prie pas parfois}, {je ne prie pas rarement}. {Je ne prie pas jamais} es redundante y suena mal.

Segunda: {jamais} ya lleva la negación dentro, así que {ne … pas … jamais} la duplica y hay que evitarlo.

## {déjà} y {encore}

Los dos extremos del mismo par:

- {déjà} — ya, acción cumplida: {j'ai déjà mangé}
- {encore} — todavía, acción en curso: {je suis encore là}
- {ne … pas encore} — todavía no: {je ne suis pas encore arrivé}
- {ne … plus} — ya no: {je ne suis plus là}
- {ne … jamais} — nunca: {je ne suis jamais allé en Italie}
- {ne … que} — nada más que: {je n'ai que le temps de prier}

Fíjate en la simetría: {pas encore} «todavía no» está en el mismo eje que {déjà} «ya». Y {ne … plus} es siempre negativo: {plus jamais} es el único ambiente positivo posible, y aun así es raro.

Hay una trampa sintáctica cuando {jamais} se une al futuro: {je ne verrai jamais} es un futuro negativo y ya significa «no veré nunca» — no necesita {pas}.

## Lectura — Louis Segond

{Hier, c'est-à-dire le jour d'avant} usa {hier} como adverbio con aposición explicativa. {Demain, si nous ne nous repentons pas} (Lc 13:3) coloca el adverbio al principio de la frase, algo raro y enfático. {Je ne suis pas encore monté} (Lc 4:31) da {pas encore} con presente: prueba de que {encore} habla de proceso, no de reloj. {Reste donc ce qui est bon} (Lc 3:14) pone {donc} entre verbo y objeto, el lugar fijo del adverbio corto. Y {Vous avez besoin d'un seul bon grain} (Mt 13:21) usa {seul} como adjetivo, no como adverbio: es la lección anterior.

## Lo esencial

El tiempo y la frecuencia en francés son palabras cortas, casi siempre colocadas tras el verbo. {depuis} más presente mide la duración hasta hoy; {pendant} más presente o pasado mide un tramo delimitado. Y la escalera de frecuencia tiene seis peldaños, de los cuales solo {jamais} obliga a la negación.`),
  vocab: [
    V("aujourd'hui", "aujourd'hui", 'hoy; también «de nuestros días»'),
    V('hier', 'hier', 'ayer; hier soir = anoche'),
    V('demain', 'demain', 'mañana; ≠ le lendemain'),
    V('le lendemain', 'lendemain', 'el día siguiente'),
    V('après-midi', 'après-midi', 'tarde; con de en plural'),
    V('maintenant', 'maintenant', 'ahora; adverbio más neutro'),
    V('bientôt', 'bientôt', 'pronto, dentro de poco'),
    V('déjà', 'déjà', 'ya; acción cumplida'),
    V('encore', 'encore', 'todavía; acción en curso'),
    V('toujours', 'toujours', 'siempre; con negación: no siempre'),
    V('souvent', 'souvent', 'a menudo; con negación: rara vez'),
    V('parfois', 'parfois', 'a veces; con negación: casi nunca'),
    V('rarement', 'rarement', 'raramente; con negación: no raro'),
    V('jamais', 'jamais', 'nunca; ya trae la negación'),
    V('depuis', 'depuis', 'desde (duración); + presente'),
    V('pendant', 'pendant', 'durante; tramo delimitado'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se dice «llevo dos horas trabajando»?'),
    options: [
      T('{Je travaille depuis deux heures}'),
      T('{Je travaille pendant deux heures}'),
      T('{Je travaille pour deux heures}'),
      T('{Je travaille déjà deux heures}'),
    ],
    answer: 0,
    hint: T('Una acción empezada y en curso lleva depuis + presente; pendant delimita.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Todavía no he llegado: {Je ne suis pas ___ arrivé}'),
      answer: 'encore',
      hint: T('La pareja es déjà «ya» contra pas encore «todavía no».'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase es correcta en la escala de frecuencia?'),
      options: [
        T('{Je ne prie pas jamais}'),
        T('{Je ne prie jamais}'),
        T('{Je ne prie pas toujours}'),
        T('{Je prie jamais}'),
      ],
      answer: 1,
      hint: T('{jamais} ya es negativo por sí mismo; {toujours} necesita pas.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el adverbio con su valor'),
      pairs: [
        { a: T('hier'), b: T('ayer') },
        { a: T('demain'), b: T('mañana (no el día siguiente)') },
        { a: T('rarement'), b: T('raramente') },
        { a: T('depuis'), b: T('desde, con presente') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En «{Je travaille depuis deux heures}», ¿qué indica el presente?'),
      options: [
        T('Que la acción termina ahora'),
        T('Que la acción empezó en el pasado y continúa'),
        T('Que la acción es un hábito'),
        T('Que la acción ya terminó ayer'),
      ],
      answer: 1,
      hint: T('Ese es el sentido de depuis: una ventana abierta antes y todavía abierta.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        "El tiempo tiene adverbios propios y pocos: {aujourd'hui} «hoy», {hier} «ayer», {demain} «mañana», {maintenant} «ahora». Demain no es le lendemain «el día siguiente»: son cosas distintas.",
      ),
    },
    {
      n: '2',
      text: T(
        "Esos adverbios se combinan con sustantivos de momento: {hier soir}, {demain matin}, {ce soir}, {après-midi}, {avant-midi}, {l'an prochain}. Las expresiones así formadas son fijas y admiten artículo y plural: {les après-midis}.",
      ),
    },
    {
      n: '3',
      text: T(
        "Depuis mide una duración en curso y exige presente: {je travaille depuis deux heures} «desde hace dos horas». Pendant mide un tramo cerrado y vale con cualquier tiempo: {pendant deux heures}, {pendant qu'il a parlé}.",
      ),
    },
    {
      n: '4',
      text: T(
        'La negación va una sola vez con {toujours}, {souvent}, {parfois} y {rarement}: {je ne prie pas toujours}. Con {jamais} no hay pas: {je ne prie jamais}. {Je ne prie pas jamais} duplica la negación y está mal.',
      ),
    },
    {
      n: '5',
      text: T(
        "Déjà marca una acción cumplida ({j'ai déjà mangé}) y encore una acción en curso ({je suis encore là}); juntos forman la oposición déjà / pas encore. Ne … plus es siempre negativo y ne … que significa «nada más que».",
      ),
    },
  ],
  notes: [
    {
      label: T('La escala de frecuencia cambia al negarse'),
      text: T(
        'Es el fenómeno más bonito de la lengua: los mismos adverbios dicen lo contrario en cuanto reciben {pas}. {Je prie toujours} = siempre; {je ne prie pas toujours} = no siempre. {Je prie souvent} = a menudo; {je ne prie pas souvent} = rara vez. {Je prie parfois} = a veces; {je ne prie pas parfois} = casi nunca. {Je prie rarement} = rara vez; {je ne prie pas rarement} = no es raro. Así, una frase francesa negativa puede significar exactamente lo contrario de una positiva.',
      ),
    },
    {
      label: T('Cuidado con {demain} y {le lendemain}'),
      text: T(
        '{Demain} es el día que viene. {Le lendemain} es el día después de ese: {je suis arrivé lundi; le lendemain, je suis parti} «llegué el lunes; al día siguiente, me fui». Lo mismo vale para {avant-hier} «anteayer», que ninguna otra lengua necesita con tanta precisión.',
      ),
    },
  ],
  examples: [
    { text: "aujourd'hui", gloss: T('hoy — el adverbio más corto del capítulo') },
    { text: 'hier soir', gloss: T('anoche — adverbio + sustantivo') },
    { text: 'le lendemain', gloss: T('el día siguiente — ≠ demain') },
    {
      text: 'je travaille depuis deux heures',
      gloss: T('desde hace dos horas — depuis + presente'),
    },
    { text: 'je ne prie jamais', gloss: T('nunca — jamais ya trae la negación') },
    { text: 'je ne prie pas toujours', gloss: T('no siempre — toujours negado') },
    { text: 'je ne prie pas souvent', gloss: T('rara vez — souvent negado') },
    { text: "j'ai déjà mangé", gloss: T('ya he comido — acción cumplida') },
    { text: 'je suis encore là', gloss: T('todavía estoy aquí — acción en curso') },
    { text: 'je ne suis pas encore arrivé', gloss: T('todavía no he llegado — pas encore') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Adverbios de momento'),
      head: [T('Palabra'), T('Glosa'), T('Con sustantivo'), T('Ejemplo')],
      rows: [
        ["{aujourd'hui}", 'hoje / de agora em diante', '{—}', "{le monde d'aujourd'hui}"],
        ['{hier}', 'ontem', '{hier soir, hier matin}', '{hier soir} = ontem à noite'],
        ['{demain}', 'amanhã', '{demain soir}', '{le lendemain} = o dia seguinte'],
        ['{maintenant}', 'agora', '{—}', '{maintenant, je parle}'],
        ['{bientôt}', 'em breve', '{—}', '{à bientôt} = até logo'],
        ['{déjà}', 'já', '{—}', "{j'ai déjà mangé}"],
        ['{encore}', 'ainda', '{—}', '{je suis encore là}'],
      ],
    },
    {
      caption: T('Tabla 2 — Frecuencia y negación'),
      head: [T('Forma positiva'), T('Glosa'), T('Forma negativa'), T('Glosa')],
      rows: [
        ['{toujours}', 'sempre', '{ne … pas toujours}', 'nem sempre'],
        ['{souvent}', 'frequentemente', '{ne … pas souvent}', 'raramente'],
        ['{parfois}', 'às vezes', '{ne … pas parfois}', 'quase nunca'],
        ['{rarement}', 'raramente', '{ne … pas rarement}', 'não é raro'],
        ['{jamais}', '— (já é negativo)', '{ne … jamais}', 'nunca'],
        ['{toujours} + {ne … pas}', '—', '{ne … jamais}', 'nunca (sem {pas})'],
      ],
    },
  ],
};
