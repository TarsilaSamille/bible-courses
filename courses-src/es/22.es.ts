import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('{por} × {para}'),
  subtitle: T('causa × finalidad — el par temido'),
  section: T('Las preposiciones'),
  body: C(`## La regla de bolsillo

{por} responde a **por qué, por medio de, a cambio de, en nombre de, durante**.
{para} responde a **para qué, para quién, hacia dónde, para cuándo**.

## {por} en detalle

• Causa: {por amor} · {por miedo} · {gracias por} «gracias por».
• Medio: {por Cristo} · {por la fe}.
• Cambio: {por dos denarios} · {por mí}.
• El nombre de quien ejecuta la acción, en sentido **«en nombre de»**: {Por Cristo} «por Cristo» (Hb 13.8).
• Tiempo aproximado: {por la mañana} · {por dos años} «durante dos años».
• Movimiento a través: {por el camino} «por el camino».

## {para} en detalle

• Finalidad: {para orar} · {para siempre}.
• Destinatario: {para ti} · {para Dios}.
• Dirección: {para allá} · {para el cielo}.
• Plazo: {para mañana}.
• Opinión: {Para mí, sí} «para mí, sí».

## La pregunta que resuelve

Haz la pregunta en portugués: **«¿por qué?»** → usa {por}. **«¿para qué?»** → usa {para}.

• {¿Por qué murió Cristo?} → {Cristo murió **por** nosotros} (Rm 5.8: precio, sustitución).
• {¿Para qué viniste?} → {para dar testimonio} «para dar testimonio» (Jn 18.37), finalidad.

## El par que más se confunde

{por} + sustantivo = causa ({por gracia} «por gracia»);
{para} + verbo = finalidad ({para glorificar} «para glorificar»).

Ej.: {El Hijo de Dios murió por nosotros} «el Hijo de Dios murió por nosotros» · {Todo lo hizo por amor} «todo lo hizo por amor» · {Viene para salvar} «viene para salvar».`),
  vocab: [
    V('por', 'por', 'por (causa)'),
    V('para', 'para', 'para (finalidad)'),
    V('por amor', 'amor', 'por amor'),
    V('para orar', 'orar', 'para orar'),
    V('para qué', 'qué', '¿para qué?'),
    V('por nosotros', 'por', 'por nosotros (Rm 5.8)'),
    V('para dar testimonio', 'dar', 'para dar testimonio (Jn 18.37)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«Cristo murió ___ nosotros» (Rm 5.8)?'),
    options: [T('para'), T('por (¡sustitución!)'), T('con'), T('sin')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «___ la mañana» (por la mañana)'),
      answer: 'por',
      hint: T('Regla §2: el tiempo aproximado es siempre por.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración usa {para} con sentido de finalidad?'),
      options: [
        T('Viene por nosotros'),
        T('Viene para salvar'),
        T('Un libro por cinco euros'),
        T('Por la gracia de Dios'),
      ],
      answer: 1,
      hint: T('Regla §3: finalidad + verbo = para.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la pregunta con la preposición'),
      pairs: [
        { a: T('¿Por qué?'), b: T('{por}') },
        { a: T('¿Para qué?'), b: T('{para}') },
        { a: T('¿Para quién?'), b: T('{para}') },
        { a: T('¿Por medio de qué?'), b: T('{por}') },
      ],
      answer: ['0-0', '1-1', '2-1', '3-0'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{por} = causa, medio, cambio, agente, tiempo aproximado. {para} = fin, destinatario, dirección, plazo, opinión.',
      ),
    },
    {
      n: '2',
      text: T('Tiempo aproximado y duración usan siempre {por}: por la mañana, por dos años.'),
    },
    { n: '3', text: T('La pregunta «¿por qué?» pide {por}; «¿para qué?» pide {para}.') },
    { n: '4', text: T('{por} + sustantivo suele dar causa; {para} + verbo suele dar finalidad.') },
  ],
  notes: [
    {
      label: T('El camino decide'),
      text: T(
        '{por} indica camino, causa o medio; {para}, destino, fin o tiempo. {Por Cristo} es medio, {para Cristo} es destino. En el texto bíblico casi todo {para} es fin: sigue el rumbo.',
      ),
    },
  ],
  examples: [
    {
      text: '{Cristo murió por nosotros}',
      gloss: T('Cristo murió por nosotros (Rm 5.8 — ¡precio, no finalidad!).'),
    },
    { text: '{Viene para salvar}', gloss: T('Viene para salvar (finalidad).') },
    { text: '{por la mañana}', gloss: T('Por la mañana (tiempo aproximado).') },
    { text: '{Para mí, sí}', gloss: T('Para mí, sí (opinión).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Valores de {por}'),
      head: [T('Valor'), T('Ejemplo'), T('Pregunta')],
      rows: [
        [T('causa'), '{por amor}', T('¿por qué?')],
        [T('medio'), '{por la fe}', T('¿por medio de?')],
        [T('cambio'), '{por dos denarios}', T('¿a cambio de?')],
        [T('tiempo aprox.'), '{por la mañana}', T('¿cuándo?')],
        [T('agente sustituto'), '{murió por nosotros}', T('en lugar de quién?')],
      ],
    },
    {
      caption: T('Tabla 2 — Valores de {para}'),
      head: [T('Valor'), T('Ejemplo'), T('Pregunta')],
      rows: [
        [T('finalidad'), '{para glorificar}', T('¿para qué?')],
        [T('destinatario'), '{para ti}', T('¿para quién?')],
        [T('dirección'), '{para el cielo}', T('¿hacia dónde?')],
        [T('plazo'), '{para mañana}', T('¿para cuándo?')],
        [T('opinión'), '{Para mí, no}', T('en la opinión')],
      ],
    },
  ],
};
