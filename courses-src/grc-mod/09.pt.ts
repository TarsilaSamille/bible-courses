import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Subjuntivo να'),
  subtitle: T('θέλω να…'),
  section: T('O verbo'),
  body: C(`## να é a chave do grego moderno

να introduz uma ação subordinada sem valor de ordem: θέλω να μιλήσω «quero falar», πρέπει να φύγω «tenho de sair», ώστε να μάθω «para que eu aprenda». Repare que o verbo subordinado aparece no aoristo (μιλήσω) mesmo quando o principal está no presente — em grego, o aoristo é a forma "não marcado" do subordinado.

## Onde o subjuntivo aparece

Depois de verbos de vontade, necessidade e possibilidade, o aoristo é obrigatório: θέλω να, πρέπει να, μπορώ να, προσπαθώ να, καταφέρνω να. São poucos e a lista é fechada: se não está nessa lista, provavelmente o verbo vai no indicativo.

Depois de όταν «quando», πριν «antes», να αφού «depois que», γιατί «porque» e similar, também é aoristo. É o mesmo mecanismo grego do γενικής: o que é o núcleo de uma subordinada vai para a forma de subordinada.

## να não é o subjuntivo do koiné

O subjuntivo grego antigo (πιο να λέω) sobrevive em expressões fixas — πιο να λω, μην ξεχάσετε — mas no uso corrente o grego moderno prefere o indeterminado: να μιλήσω, e não πιο να λέω. Se você traduzir NT usando πιο, vai soar arcaico para o falante moderno.

## θα + να não é padrão

θα έρθει é normal: futuro ou possibilidade. θα να έρθει, não. São dois marcadores para a mesma ideia; o grego escolhe um. Na dúvida, θα έρθει pode ser «virá» ou «pode ser que venha» — e é essa ambiguidade que a tradução tem de resolver.

## Critério de leitura

Sempre que um verbo de plano vem depois de θέλω, πρέπει, πολύ, αρκετά, ώστε ou πριν, espere o aoristo. E não procure πιο: no grego moderno ele é resto, não regra.`),
  vocab: [
    V('να', 'να', 'que (subjuntivo)'),
    V('θέλω να', 'θέλω', 'quero que/que'),
    V('πρέπει να', 'πρέπει', 'é preciso que'),
    V('θα', 'θα', 'futuro/possibilidade'),
    V('φύγω', 'φεύγω', 'sair'),
    V('μάθω', 'μαθαίνω', 'aprender'),
    V('έρθει', 'έρχομαι', 'virá; quizá venga'),
    V('μιλήσω', 'μιλώ', 'hablar'),
    V('θέλω', 'θέλω', 'quero'),
    V('πρέπει', 'πρέπει', 'é preciso, devo'),
    V('μπορώ', 'μπορώ', 'posso'),
    V('ώστε', 'ώστε', 'para que'),
    V('για να', 'για να', 'para (finalidade)'),
    V('ελληνικά', 'ελληνικά', 'grego (língua)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('θέλω ___ μιλήσω'),
    answer: 'να',
    hint: T('Partícula de subordinación'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual construção expressa finalidade?'),
      options: [T('πρέπει να'), T('θα'), T('για να'), T('δεν')],
      answer: 2,
    },
    {
      kind: 'fill',
      prompt: T('δεν ___ πάω σήμερα'),
      answer: 'θα',
      hint: T('Indicador de tiempo futuro'),
    },
    {
      kind: 'match',
      prompt: T('Associar conector e sentido'),
      pairs: [
        { a: 'θέλω', b: T('querer') },
        { a: 'πρέπει', b: T('deber') },
        { a: 'για να', b: T('para') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('Tras muchos verbos, να precede el aoristo/subjuntivo.') }],
  notes: [
    {
      label: T('Koiné'),
      text: T('El kaoine employait formas como ἵνα λέγῃ; el moderno prefiere el aoristo con να.'),
    },
  ],
  examples: [{ text: 'θέλω να μάθω ελληνικά', gloss: T('quero aprender grego') }],
  tables: [
    {
      caption: T('Construções'),
      head: ['Tipo', 'Ejemplo'],
      rows: [
        ['deseo', 'θέλω να φύγω'],
        ['necesidad', 'πρέπει να φύγω'],
        ['finalidad', 'για να φύγω'],
      ],
    },
  ],
};
