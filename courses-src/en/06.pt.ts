import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Modais e voz passiva'),
  subtitle: T('must, may, shall — was made'),
  section: T('O verbo'),
  body: C(`## Modais: uma única forma

Os modais {can/could}, {may/might}, {must}, {shall/should}, {will/would} e {ought} não mudam de forma segundo a pessoa. Depois deles entra o infinitivo sem {to}: {can pray}, {must obey}, {may come}. No passado ou no irreal, o auxiliar se modifica: {could go}, {should have helped}, {might come}.

Os valores não são intercambiáveis. {Can} trata de capacidade ou possibilidade; {may}, de permissão formal ou possibilidade incerta; {must}, de obrigação forte; {shall} aparece em promessas formais, instruções e fórmulas bíblicas. No inglês contemporâneo, {will} normalmente expressa vontade ou predição.

## Passiva

A passiva usa {be} em todos os tempos + particípio: {is written}, {was healed}, {will be saved}. O agente pode aparecer com {by}; se a informação importante é quem sofre a ação, o {by} pode ser omitido: {The prisoner was released}.

{Was made flesh} é ao mesmo tempo passiva e uma forte afirmação teológica. Em João 1:14, {was made} destaca a encarnação, enquanto o agente divino pode ficar sem nome. Não conclua que toda passiva elimina o agente; ela muda a ordem da informação.`),
  vocab: [
    V('can', 'can', 'poder'),
    V('may', 'may', 'poder/permitir'),
    V('must', 'must', 'dever'),
    V('shall', 'shall', 'deverá/deve'),
    V('should', 'should', 'deveria/conselho'),
    V('was made', 'make', 'foi feito'),
    V('is written', 'write', 'está escrito'),
    V('will be saved', 'save', 'será salvo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Que construção é “was made flesh”?'),
    options: [T('Ativa'), T('Passiva: be + particípio'), T('Reflexiva'), T('Condicional')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: “She ___ pray” (ela pode orar).'), answer: 'can' },
    {
      kind: 'match',
      prompt: T('Relacione modal e valor.'),
      pairs: [
        { a: 'must', b: T('obrigação') },
        { a: 'may', b: T('permissão') },
        { a: 'should', b: T('conselho') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta?'),
      options: [T('He must to go'), T('He must go'), T('He must went'), T('He must going')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('After a modal, never use to: He can help, não He can to help.') },
    {
      n: '2',
      text: T(
        'Modal base + have + participle locates a past action in modal time: She should have called.',
      ),
    },
    {
      n: '3',
      text: T(
        'Na passiva, o auxiliar é be: is made, was made, will be made; não *is made por have.',
      ),
    },
  ],
  notes: [
    {
      label: T('Registro:'),
      text: T(
        'Shall has a formal or Biblical tone today. {Will} is normal in ordinary promises, while {should} advises rather than commands.',
      ),
    },
  ],
  examples: [
    { text: '{Thou shalt not kill}', gloss: T('Não matarás — arcaico/mandamento') },
    { text: '{The Word was made flesh}', gloss: T('A Palavra foi feita carne — passiva') },
    { text: '{It shall be done}', gloss: T('Será feito — shall + passiva') },
  ],
  tables: [
    {
      caption: T('Valores modais'),
      head: [T('Modal'), T('Valor típico'), T('Exemplo')],
      rows: [
        ['{can}', T('capacidade'), '{I can read}'],
        ['{may}', T('permissão'), '{You may enter}'],
        ['{must}', T('obrigação'), '{We must love}'],
        ['{should}', T('conselho/dever'), '{You should pray}'],
      ],
    },
  ],
};
