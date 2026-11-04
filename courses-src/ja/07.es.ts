import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  section: T('Verbo'),
  title: T('Los verbos esenciales'),
  subtitle: T('行く, 来る, する, 食べる, 着る: los verbos que sostienen casi toda frase'),
  body: C(`## Quince verbos, y dos que no tienen regla

Un verbo japonés regular flexiona por la terminación: en {食べる}, {食べない}, {食べた}, la raíz {食べ-} no se mueve. Los esenciales incluyen los dos únicos verbos irregulares del japonés: {する} «hacer» y {来る} «venir». Ningún otro verbo es irregular, pero esos dos aparecen en toda página.

Son pocos y pesan mucho. {行く} ir, {来る} venir, {する} hacer, {ある} existir (inanimado), {いる} existir (animado), {食べる} comer, {飲む} beber, {着る} vestir, {見る} ver, {聞く} oír, {言う} decir, {書く} escribir, {読む} leer, {分かる} entender, {知る} saber, {思う} pensar, {持つ} tener, {寝る} dormir, {歩く} andar, {走る} correr, {泳ぐ} nadar, {話す} hablar cubren casi todo lo que se dice en un capítulo de Evangelio.

## {する} y {来る}: los dos irregulares

{する} «hacer» es el verbo más irregular: {する}, {しない}, {した}, {して}. El pasado es {した}, no {すた}. Y el te-form es {して}, no {して} con el {し} de la raíz. {来る} «venir» es el otro: {来る}, {来ない}, {来た}, {来て}. La raíz pasa de {く} a {こ} en el negativo y en el pasado: {来ない}, {来た}.

Estos dos verbos son la excepción que confirma la regla: todo el resto del japonés flexiona regularmente. Quien memorizó {する} y {来る} memorizó las únicas formas que no se deducen.

## {ある} y {いる}: existir

{ある} «existir» es para cosas inanimadas: {本がある}, «hay un libro». {いる} «existir» es para cosas animadas: {人がいる}, «hay una persona». El negativo de {ある} es {ない}, no {あるない}: {本がない}, «no hay libro». El negativo de {いる} es {いない}: {人がいない}, «no hay persona».

{ある} no tiene pasiva ni causativa: es un verbo de estado, no de acción. {いる} también. Los dos son los verbos más frecuentes del japonés, y la elección entre ellos es la elección entre animado e inanimado.

## En la Biblia

Juan 1:1 empieza con {あった}: {初めに言があった}, en el principio existía el Verbo. {あった} es el pasado de {ある}, y {言} es el sustantivo «palabra». El japonés dice «había la palabra», y el griego dice {ἦν ὁ λόγος}, «era el Verbo». La diferencia es la del verbo: {ある} es estado, {いる} es existencia animada.

Juan 3:16 trae {愛した}, el pasado de {愛する} «amar»: {神は世界を愛した}, Dios amó el mundo. El japonés pone el verbo al final de la frase, y el objeto viene antes: {世界を愛した}. El griego dice {ἠγάπησεν τὸν κόσμον}, y el orden es el mismo.

Marcos 4:39 trae {黙れ}, «cállate»: es el imperativo de {黙る} «callar». El japonés pone la orden en el verbo, y el objeto viene antes: {黙れ} es la orden completa.`),
  vocab: [
    V('行く', '行く', 'ir'),
    V('行った', '行く', 'fui'),
    V('来る', '来る', 'venir'),
    V('来た', '来る', 'vine'),
    V('する', 'する', 'hacer'),
    V('した', 'する', 'hice'),
    V('ある', 'ある', 'existir (inanimado)'),
    V('ない', 'ある', 'no haber'),
    V('いる', 'いる', 'existir (animado)'),
    V('いない', 'いる', 'no haber (animado)'),
    V('食べる', '食べる', 'comer'),
    V('食べた', '食べる', 'comí'),
    V('飲む', '飲む', 'beber'),
    V('飲んだ', '飲む', 'bebí'),
    V('着る', '着る', 'vestir'),
    V('見る', '見る', 'ver'),
    V('見た', '見る', 'vi'),
    V('聞く', '聞く', 'oír'),
    V('聞いた', '聞く', 'oí'),
    V('言う', '言う', 'decir'),
    V('言った', '言う', 'dije'),
    V('書く', '書く', 'escribir'),
    V('書いた', '書く', 'escribí'),
    V('読む', '読む', 'leer'),
    V('分かる', '分かる', 'entender'),
    V('知る', '知る', 'saber'),
    V('思う', '思う', 'pensar'),
    V('持つ', '持つ', 'tener'),
    V('寝る', '寝る', 'dormir'),
    V('歩く', '歩く', 'andar'),
    V('走る', '走る', 'correr'),
    V('泳ぐ', '泳ぐ', 'nadar'),
    V('話す', '話す', 'hablar'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{する} y {来る} son los únicos verbos irregulares: {する}, {しない}, {した}, {して}; {来る}, {来ない}, {来た}, {来て}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{ある} es para inanimados, {いる} para animados. El negativo de {ある} es {ない}, no {あるない}.',
      ),
    },
    {
      n: '§3',
      text: T('El pasado de {行く} es {行った}, no {行いた}. El te-form es {行って}, no {行いて}.'),
    },
    {
      n: '§4',
      text: T(
        'El japonés pone el verbo al final de la frase: {世界を愛した}, «amó el mundo». El objeto viene antes del verbo.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Juan 1:1 usa {あった} (pasado de {ある}) y Juan 3:16 usa {愛した} (pasado de {愛する}): el Verbo ya existía, y Dios amó.',
      ),
    },
  ],
  notes: [
    {
      label: T('El {ある} que no tiene pasiva'),
      text: T(
        '{ある} es un verbo de estado, no de acción. No tiene pasiva ni causativa. Donde el portugués dice «fue hecho», el japonés dice {作られた} (pasiva de {作る}), no {ある}.',
      ),
    },
    {
      label: T('El {いる} que no es «ser»'),
      text: T(
        '{いる} es «existir» para animados, no «ser». Donde el portugués dice «él es médico», el japonés dice {医者だ}, con la cópula {だ}, no {いる}.',
      ),
    },
  ],
  examples: [
    {
      text: '初めに言があった',
      gloss: T('Jn 1:1 — {あった} es pasado de {ある}: existía el Verbo.'),
    },
    {
      text: '神は世界を愛した',
      gloss: T('Jn 3:16 — {愛した} es pasado de {愛する}: Dios amó el mundo.'),
    },
    { text: '本がある', gloss: T('{ある} con inanimado: hay un libro.') },
    { text: '人がいる', gloss: T('{いる} con animado: hay una persona.') },
    { text: '本がない', gloss: T('negativo de {ある}: no hay libro.') },
    { text: '行った', gloss: T('pasado de {行く}: fui.') },
    { text: '来た', gloss: T('pasado de {来る}: vine.') },
    { text: '食べた', gloss: T('pasado de {食べる}: comí.') },
    { text: '黙れ', gloss: T('Mc 4:39 — imperativo de {黙る}: cállate.') },
  ],
  tables: [
    {
      caption: T('El presente y el pasado de los esenciales'),
      head: [T('Verbo'), T('Clase'), T('Presente'), T('Pasado'), T('Negativo')],
      rows: [
        [T('{行く}'), T('godan'), T('{行く}'), T('{行った}'), T('{行かない}')],
        [T('{来る}'), T('irregular'), T('{来る}'), T('{来た}'), T('{来ない}')],
        [T('{する}'), T('irregular'), T('{する}'), T('{した}'), T('{しない}')],
        [T('{食べる}'), T('ichidan'), T('{食べる}'), T('{食べた}'), T('{食べない}')],
        [T('{飲む}'), T('godan'), T('{飲む}'), T('{飲んだ}'), T('{飲まない}')],
        [T('{着る}'), T('ichidan'), T('{着る}'), T('{着た}'), T('{着ない}')],
        [T('{見る}'), T('ichidan'), T('{見る}'), T('{見た}'), T('{見ない}')],
        [T('{聞く}'), T('godan'), T('{聞く}'), T('{聞いた}'), T('{聞かない}')],
        [T('{言う}'), T('godan'), T('{言う}'), T('{言った}'), T('{言わない}')],
        [T('{書く}'), T('godan'), T('{書く}'), T('{書いた}'), T('{書かない}')],
        [T('{読む}'), T('godan'), T('{読む}'), T('{読んだ}'), T('{読まない}')],
        [T('{持つ}'), T('godan'), T('{持つ}'), T('{持った}'), T('{持たない}')],
        [T('{寝る}'), T('ichidan'), T('{寝る}'), T('{寝た}'), T('{寝ない}')],
        [T('{歩く}'), T('godan'), T('{歩く}'), T('{歩いた}'), T('{歩かない}')],
        [T('{走る}'), T('godan'), T('{走る}'), T('{走った}'), T('{走らない}')],
        [T('{泳ぐ}'), T('godan'), T('{泳ぐ}'), T('{泳いだ}'), T('{泳がない}')],
        [T('{話す}'), T('godan'), T('{話す}'), T('{話した}'), T('{話さない}')],
      ],
    },
    {
      caption: T('ある y いる: la elección entre animado e inanimado'),
      head: [T('Verbo'), T('Uso'), T('Presente'), T('Pasado'), T('Negativo')],
      rows: [
        [T('{ある}'), T('inanimado'), T('{ある}'), T('{あった}'), T('{ない}')],
        [T('{いる}'), T('animado'), T('{いる}'), T('{いた}'), T('{いない}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {初めに言があった}, ¿cuál es el tiempo de {あった}?'),
    options: [T('Presente'), T('Pasado'), T('Futuro'), T('Te-form')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete «神は世界を___» con el pasado de {愛する} para «amó».'),
      answer: '愛した',
    },
    {
      kind: 'match',
      prompt: T('Une el verbo con su pasado.'),
      pairs: [
        { a: T('{行く}'), b: T('{行った}') },
        { a: T('{来る}'), b: T('{来た}') },
        { a: T('{食べる}'), b: T('{食べた}') },
        { a: T('{する}'), b: T('{した}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es el negativo de {ある}?'),
      options: [T('{あるない}'), T('{ない}'), T('{あらない}'), T('{なかった}')],
      answer: 1,
    },
  ],
};
