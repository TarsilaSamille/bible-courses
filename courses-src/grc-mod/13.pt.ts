import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Imperativo'),
  subtitle: T('μίλα! — μίλησε!'),
  section: T('O verbo'),
  body: C(`## O imperativo não tem tempo

O imperativo grego é a única forma que fica igual em todas as pessoas: não muda com o sujeito. Por isso, quem não distingo ο πατήρ de πατέρας ou πατήρ, vai ler um substantivo como se fosse verbo — e a frase inteira muda de sentido.

## Presente ou aoristo: a diferença é de verdade, não de forma

μίλα! «fala!» é o presente: o comportamento, o hábito. μίλησε! «fala agora!» é o aoristo: um ato concreto, já decidido. Os dois se traduzem pelo mesmo imperativo em português, e é por isso que a escolha do aoristo em grego é um dado, não um detalhe: o texto está dizendo que a coisa vai acontecer mesmo.

Na prática, o aoristo aparece quando há alguém de frente para quem fala (πες μου «diz-me», δώσε μου «dá-me») e no FUTURO IMMEDIATO: φέρε μου τὸ βιβλίον «traz-me o livro» é aoristo, não φέρετε. O grego resolve assim o que português resolve com «vai buscar», que parece futuro mas é ordem.

## O plural é fácil; o problema é o pronome

μιλάμε, μιλάτε; μιλήσαμε, μιλήσατε. ελάστε! «venhai!»; αγαπάτε αλλήλους! «amai-vos uns aos outros!».

O pronome posposto não é exótico: πες μου «diz-me», δώσε μου «dá-me», άφησέ μη «deixa-me». ΜΗ na segunda pessoa é μου: δώσε μου. Nos outros casos é με, σε, μας, σας: δώσε με, δώσε σε, δώσε μας, δώσε σας. ο πατήρ μου e πατήρ μου é a mesma frase; a posição forte é só ênfase.

## A negação vem antes

μη e μην, antes do verbo: μη λές! «não digas!», μην πεις! «não digues!». A forma idiomática e mais enfática é ποτέ μην: Ποτέ μην πεις! «Nunca digas!». Compare com a negação do grego antigo, que também permitia pós-verbo (μὴ λέγε) — a posição mudou no grego moderno.

## O que ler

Sempre que um verbo estiver no imperativo, pergunte: presente ou aoristo? A resposta diz se é rotina ou fato consumado. E atenção ao μη depois de άφησε: ali o μη é pronominal («me»), não negação.`),
  vocab: [
    V('μίλα', 'μιλώ', 'fala!'),
    V('μίλαμε', 'μιλώ', 'falemos'),
    V('μίλησε', 'μιλώ', 'fala agora!'),
    V('μιλήσαμε', 'μιλώ', 'falemos agora'),
    V('πες', 'λέω', 'diz!'),
    V('έλα', 'έρχομαι', 'vem!'),
    V('ελάστε', 'έρχομαι', 'venid!'),
    V('μη μιλήσεις', 'μιλώ', 'não falas'),
    V('πες μου', 'λέω', 'diz-me'),
    V('φάε', 'τρώω', 'come! (de comer)'),
    V('πήγε', 'πάω', 'vai!'),
    V('πιστεψε', 'πιστεύω', 'acredita!'),
    V('αλλήλους', 'αλλήλους', 'uns aos outros'),
    V('μην', 'μη', 'não (negação)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é imperativo aoristo?'),
    options: [T('μίλα'), T('μίλησε'), T('μιλάτε'), T('θα μιλήσετε')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('___! quero falar'), answer: 'μίλα', hint: T('Imperativo presente') },
    {
      kind: 'choose',
      prompt: T('Qual é o plural inclusivo?'),
      options: [T('μίλα'), T('μιλάτε'), T('μιλήσαμε'), T('μη μιλάς')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Associar função'),
      pairs: [
        { a: 'έλα!', b: T('chamar') },
        { a: 'μη φύγεις', b: T('proibir') },
        { a: 'πες μου', b: T('pronome posposto') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('Singular e plural precisam de formas distintas.') }],
  notes: [
    {
      label: T('Koiné'),
      text: T('πίστευσον es aoristo koiné; su equivalente moderno es πίστεψε.'),
    },
  ],
  examples: [{ text: 'αγαπάτε αλλήλους', gloss: T('amai-vos') }],
  tables: [
    {
      caption: T('Imperativo'),
      head: ['Aspecto', 'Singular', '1º plural'],
      rows: [
        ['presente', 'μίλα!', 'μιλάμε!'],
        ['aoristo', 'μίλησε!', 'μιλήσαμε!'],
      ],
    },
  ],
};
