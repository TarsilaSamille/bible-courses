import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('{por} × {para}'),
  subtitle: T('causa × finalidade — o par temido'),
  section: T('As preposições'),
  body: C(`## A regra de bolso

{por} responde a **por quê, por meio de, por troca, em nome, durante**.
{para} responde a **para quê, para quem, para onde, para quando**.

## {por} em detalhe

• Causa: {por amor} «por amor» · {por miedo} «por medo» · {gracias por} «por causa de».
• Meio: {por Cristo} «por Cristo» · {por la fe} «pela fé».
• Troca: {por dos denarios} «por dois denários» · {por mí} «por mim».
• Nome de quem faz a ação, **no sentido de «em nome de»**: {Por Cristo} «por Cristo» (Hb 13:8).
• Tempo aproximado: {por la mañana} «de manhã» · {por dos años» «durante dois anos».
• Movimento atravessado: {por el camino} «pelo caminho».

## {para} em detalhe

• Finalidade: {para orar} «para orar» · {para siempre} «para sempre».
• Destinatário: {para ti} «para ti» · {para Dios} «para Deus».
• Direção: {para allá} «para lá» · {para el cielo} «para o céu».
• Prazo: {para mañana} «para amanhã» · {para el fin del año}.
• Opinião: {Para mí, sí} «Para mim, sim».

## A pergunta que desarma

Faça a pergunta em português: **«por quê?»** → use {por}. **«para quê?»** → use {para}.

• {¿Por qué murió Cristo?} «por que morreu Cristo?» → {Cristo murió **por** nosotros} (Rm 5:8: preço, substituição).
• {¿Para qué viniste?} «para que vieste?» → {para dar testimonio} «para dar testemunho» (Jo 18:37), finalidade.

## O par que mais se erra

{por} + substantivo = causa ({por gracia} «pela graça»);
{para} + verbo = finalidade ({para glorificar} «para glorificar»).

Ex.: {El Hijo de Dios murió por nosotros} «o Filho de Deus morreu por nós» · {Todo lo hizo por amor} «fiz tudo por amor» · {Viene para salvar} «vem para salvar».`),
  vocab: [
    V('por', 'por', 'por (causa)'),
    V('para', 'para', 'para (fim)'),
    V('por amor', 'amor', 'por amor'),
    V('para orar', 'orar', 'para orar'),
    V('para qué', 'qué', 'para quê?'),
    V('por nosotros', 'por', 'por nós (Rm 5:8)'),
    V('para dar testimonio', 'dar', 'para dar testemunho (Jo 18:37)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"Cristo murió ___ nosotros" (Rm 5:8)?'),
    options: [T('para'), T('por (substituição!)'), T('con'), T('sin')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: "___ la mañana" (de manhã)'),
      answer: 'por',
      hint: T('Regra §2: tempo aproximado é sempre por.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase usa {para} com sentido de finalidade?'),
      options: [
        T('Viene por nosotros'),
        T('Viene para salvar'),
        T('Un libro por cinco euros'),
        T('Por la gracia de Dios'),
      ],
      answer: 1,
      hint: T('Regra §3: finalidade + verbo = para.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a pergunta à preposição'),
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
        '{por} = causa, meio, troca, agente, tempo aproximado. {para} = fim, destinatário, direção, prazo, opinião.',
      ),
    },
    {
      n: '2',
      text: T('Tempo aproximado e duração usam sempre {por}: por la mañana, por dos años.'),
    },
    { n: '3', text: T('A pergunta «¿por qué?» pede {por}; «¿para qué?» pede {para}.') },
    {
      n: '4',
      text: T('{por} + substantivo costuma dar causa; {para} + verbo costuma dar finalidade.'),
    },
  ],
  notes: [
    {
      label: T('O caminho decide'),
      text: T(
        '{por} indica caminho, causa ou meio; {para} indica destino, fim ou tempo. {Por Cristo} é meio, {para Cristo} é destino. Num texto bíblico, quase todo {para} é fim — aCOMPARE o rumo.',
      ),
    },
  ],
  examples: [
    {
      text: '{Cristo murió por nosotros}',
      gloss: T('Cristo morreu por nós (Rm 5:8 — preço, não finalidade!).'),
    },
    { text: '{Viene para salvar}', gloss: T('Vem para salvar (finalidade).') },
    { text: '{por la mañana}', gloss: T('De manhã (tempo aproximado).') },
    { text: '{Para mí, sí}', gloss: T('Para mim, sim (opinião).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Valores de {por}'),
      head: [T('Valor'), T('Exemplo'), T('Pergunta')],
      rows: [
        [T('causa'), '{por amor}', T('por quê?')],
        [T('meio'), '{por la fe}', T('por meio de?')],
        [T('troca'), '{por dos denarios}', T('em troca de?')],
        [T('tempo aprox.'), '{por la mañana}', T('quando?')],
        [T('agente substituto'), '{murió por nosotros}', T('no lugar de quem?')],
      ],
    },
    {
      caption: T('Tabela 2 — Valores de {para}'),
      head: [T('Valor'), T('Exemplo'), T('Pergunta')],
      rows: [
        [T('finalidade'), '{para glorificar}', T('para quê?')],
        [T('destinatário'), '{para ti}', T('para quem?')],
        [T('direção'), '{para el cielo}', T('para onde?')],
        [T('prazo'), '{para mañana}', T('até quando?')],
        [T('opinião'), '{Para mí, no}', T('na opinião')],
      ],
    },
  ],
};
