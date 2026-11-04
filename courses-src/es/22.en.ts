import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('{por} × {para}'),
  subtitle: T('cause × purpose — the feared pair'),
  section: T('Prepositions'),
  body: C(`## The pocket rule

{por} answers **why, by what means, in exchange for, on behalf of, during**.
{para} answers **for what, for whom, where to, by when**.

## {por} in detail

• Cause: {por amor} · {por miedo} · {gracias por}.
• Means: {por Cristo} · {por la fe}.
• Exchange: {por dos denarios} · {por mí}.
• The doer's name in the sense **"on behalf of"**: {Por Cristo} (Heb 13:8).
• Approximate time: {por la mañana} · {por dos años} "for two years".
• Motion through: {por el camino}.

## {para} in detail

• Purpose: {para orar} · {para siempre}.
• Recipient: {para ti} · {para Dios}.
• Direction: {para allá} · {para el cielo}.
• Deadline: {para mañana}.
• Opinion: {Para mí, sí}.

## The question that settles it

Ask the question in Portuguese: **"why?"** → use {por}. **"what for?"** → use {para}.

• {¿Por qué murió Cristo?} → {Cristo murió **por** nosotros} (Rom 5:8: price, substitution).
• {¿Para qué viniste?} → {para dar testimonio} (John 18:37), purpose.

## The easy-to-miss pair

{por} + noun = cause ({por gracia}); {para} + verb = purpose ({para glorificar}).

Ex.: {El Hijo de Dios murió por nosotros} · {Todo lo hizo por amor} · {Viene para salvar}.`),
  vocab: [
    V('por', 'por', 'for (cause)'),
    V('para', 'para', 'for (purpose)'),
    V('por amor', 'amor', 'for love'),
    V('para orar', 'orar', 'to pray'),
    V('para qué', 'qué', 'what for?'),
    V('por nosotros', 'por', 'for us (Rom 5:8)'),
    V('para dar testimonio', 'dar', 'to bear witness (John 18:37)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"Cristo murió ___ nosotros" (Rom 5:8)?'),
    options: [T('para'), T('por (substitution!)'), T('con'), T('sin')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: "___ la mañana" (in the morning)'),
      answer: 'por',
      hint: T('Rule §2: approximate time is always por.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence uses {para} in the sense of purpose?'),
      options: [
        T('Viene por nosotros'),
        T('Viene para salvar'),
        T('Un libro por cinco euros'),
        T('Por la gracia de Dios'),
      ],
      answer: 1,
      hint: T('Rule §3: purpose + verb = para.'),
    },
    {
      kind: 'match',
      prompt: T('Match the question to the preposition'),
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
        '{por} = cause, means, exchange, agent, approximate time. {para} = purpose, recipient, direction, deadline, opinion.',
      ),
    },
    {
      n: '2',
      text: T('Approximate time and duration always take {por}: por la mañana, por dos años.'),
    },
    { n: '3', text: T('The question "¿por qué?" calls for {por}; "¿para qué?" calls for {para}.') },
    { n: '4', text: T('{por} + noun tends to give cause; {para} + verb tends to give purpose.') },
  ],
  notes: [
    {
      label: T('The path decides'),
      text: T(
        '{por} marks path, cause or means; {para} marks goal, purpose or time. {Por Cristo} is means, {para Cristo} is goal. In biblical text almost every {para} is purpose — trace the direction.',
      ),
    },
  ],
  examples: [
    {
      text: '{Cristo murió por nosotros}',
      gloss: T('Christ died for us (Rom 5:8 — price, not purpose!).'),
    },
    { text: '{Viene para salvar}', gloss: T('He comes in order to save (purpose).') },
    { text: '{por la mañana}', gloss: T('In the morning (approximate time).') },
    { text: '{Para mí, sí}', gloss: T('As for me, yes (opinion).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Values of {por}'),
      head: [T('Value'), T('Example'), T('Question')],
      rows: [
        [T('cause'), '{por amor}', T('why?')],
        [T('means'), '{por la fe}', T('by means of?')],
        [T('exchange'), '{por dos denarios}', T('in exchange for?')],
        [T('approx. time'), '{por la mañana}', T('when?')],
        [T('substitute agent'), '{murió por nosotros}', T('in place of whom?')],
      ],
    },
    {
      caption: T('Table 2 — Values of {para}'),
      head: [T('Value'), T('Example'), T('Question')],
      rows: [
        [T('purpose'), '{para glorificar}', T('what for?')],
        [T('recipient'), '{para ti}', T('for whom?')],
        [T('direction'), '{para el cielo}', T('where to?')],
        [T('deadline'), '{para mañana}', T('by when?')],
        [T('opinion'), '{Para mí, no}', T('in the view')],
      ],
    },
  ],
};
