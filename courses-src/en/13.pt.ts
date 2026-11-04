import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Capstone: discurso indireto, relativos e tag questions'),
  subtitle: T('He said that… — integração final'),
  section: T('Sintaxe'),
  body: C(`## Discurso indireto

Depois de um verbo de fala no passado, o inglês costuma recuar o tempo: {He says he comes} → {He said he would come}; {He says he came} → {He said he had come}. Isso é concordância gramatical, não mudança no fato histórico. O presente perfeito pode virar passado perfeito: {has seen} → {had seen}. Quando o fato permanece verdadeiro, o presente pode ficar: {He said that God is love}.

{Say} normalmente não recebe objeto indireto: {He said that...}. {Tell} recebe: {He told them that...}. Perguntar e ordenar costumam usar o infinitivo: {He asked where they lived}; {He told them to go}.

## Uma capela gramatical

Um parágrafo integrador pode combinar artigo, tempo, passiva, oração relativa, condicional e phrasal verb: {The light that was made to shine before the nations was not put out by those who believed}. {That} restringe {the light}; {was made} é passiva; {to shine} é um infinitivo final; {those who believed} é uma oração relativa; {put out} é um phrasal verb.

## Tag questions

A tag repete o auxiliar ou a cópula, não o verbo inteiro. {You believe, don't you?}; {He is good, isn't he?}; {They have gone, haven't they?}; {We were not late, were we?}. Afirmação positiva → tag negativa; afirmação negativa → tag positiva. Pronome e auxiliar têm de concordar.

A tag também busca contato real com quem ouve. {You are coming, aren't you?} convida à confirmação. No inglês literário, as tags podem ser ecoadas em prosa formal, mas o padrão contemporâneo prefere perguntas comuns de sujeito e verbo.`),
  vocab: [
    V('said that', 'say', 'disse que'),
    V('would come', 'come', 'viria'),
    V('had come', 'come', 'havia vindo'),
    V('ask where', 'ask', 'perguntar onde'),
    V('tell to go', 'tell', 'mandar ir'),
    V("isn't he", 'be', 'não é?'),
    V("don't you", 'do', 'não você?'),
    V("aren't you", 'be', 'não está você?'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T("Complete: 'He is good, ___?'"),
    answer: "isn't he",
    hint: T('Afirmativa recebe tag negativa com o mesmo auxiliar.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Retrocesso temporal: 'He said he would ___.'"), answer: 'come' },
    {
      kind: 'match',
      prompt: T('Relacione estrutura e função.'),
      pairs: [
        { a: 'that was made', b: T('relativo + passiva') },
        { a: 'to shine', b: T('finalidade') },
        { a: 'who believed', b: T('relativo restritivo') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T("Qual tag está correta para 'We were not late, ___?'"),
      options: [T("weren't we?"), T("wasn't we?"), T("aren't we?"), T("don't we?")],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O discurso indireto pode recuar o tempo, mas o conteúdo original permanece: reported tense is a present view of the past, not a new event.',
      ),
    },
    {
      n: '2',
      text: T(
        'Tag = auxiliar + pronome, com sinal oposto. Use o auxiliar da primeira oração, inclusive nas respostas curtas: Yes, I do.',
      ),
    },
    {
      n: '3',
      text: T(
        'Leia a frase integrada em camadas e identifique estrutura, tempo, voz e léxico antes de traduzir.',
      ),
    },
  ],
  notes: [
    {
      label: T('Tarefa final:'),
      text: T(
        'Leia o exemplo integrado em voz alta, cubra as glosas e identifique cada estrutura antes de conferir.',
      ),
    },
  ],
  examples: [
    { text: '{He said that he would come}', gloss: T('Ele disse que viria') },
    { text: '{The light that was made to shine}', gloss: T('A luz que foi feita para brilhar') },
    { text: "{You believe, don't you?}", gloss: T('Você acredita, não é?') },
    { text: "{I don't know, do you?}", gloss: T('Não sei, e você?') },
  ],
  tables: [
    {
      caption: T('Mapa de integração final'),
      head: [T('Estrutura'), T('No exemplo'), T('Função')],
      rows: [
        [T('relativo restritivo'), '{that was made}', T('identifica a luz')],
        [T('infinitivo'), '{to shine}', T('finalidade')],
        [T('relativo'), '{who believed}', T('restringe those')],
        [T('phrasal verb'), '{put out}', T('apagar')],
        [T('tag'), "{aren't you?}", T('confirma contato')],
      ],
    },
  ],
};
