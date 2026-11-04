import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('O nome'),
  title: T('O substantivo e os três gêneros'),
  subtitle: T('το παιδί — η γυναίκα — ο άνθρωπος'),
  body: C(`## O neutro que o português não tem

O grego moderno tem três gêneros e o português tem dois. O terceiro é o neutro, e ele aparece justamente na palavra que o português flexiona sem perceber: {το παιδί} é neutro em grego, e a criança é «a criança» em português. Não existe forma portuguesa para esse neutro, e é por isso que o artigo grego precisa de três séries em vez de duas.

Um sintoma rápido: **quando a coisa é pequena, jovem ou feita para servir, quase sempre é neutra**. {το σπίτι}, {το παιδί}, {το φεγγάρι}. Não é regra, é estatística, e a estatística já basta para adivinhar.

## O gênero é a etimologia à vista

O gênero grego não é sorteio. Ele é o final antigo da palavra, e a flexão perdeu quase tudo mas deixou essa marca. O grego antigo pluralizava {λόγος} em {λόγοι} e {παιδίον} em {παιδία}; o moderno congelou o {-ος} no masculino e o {-ο} no neutro. Quem reconhece o final reconhece o gênero sem decorar nada.

Isso muda o modo de memorizar. {ο άνθρωπος} não é «um substantivo masculino»: é «um substantivo em -{ος}», e as duas frases dizem a mesma coisa.

## O que dá e o que não dá

Os finais são fortes. Em {-μα} cai quase só neutro: {το πρόβλημα}, {το σύμπτωμα}, {το νόμισμα}. São nomes de resultado ou de ação, e resultados são neutros. Em {-ση} cai só feminino: {η τιμή}, {η οικογένεια}. Em {-τής} cai só masculino, e quase sempre é um agente: {ο καθηγητής}, {ο στρατιώτης}.

O que não dá é a etimologia lexical. {ο ήλιος} é masculino e {το φεγγάρι} é neutro, mas nenhum dos dois finais diz por quê. {ο λέων} é masculino sem nenhum rastro de regra. São duas ou três palavras para aprender, não duas ou três regras.

## Onde isso aparece na Bíblia

> Καὶ ἐκ τοῦ πληρώματος αὐτοῦ ἐπληρώθημεν πάντες, καὶ χάριν ἀντὶ χάριτος ἔλαβον.

Nessa frase, {πλήρωμα} é neutro e {λόγος}, na frase anterior, é masculino. O grego distingue os dois sem esforço, porque carrega o gênero em cada palavra. Quem traduz para o português tem de escolher uma palavra portuguesa para cada e perde o contraste: {πλήρωμα} vira «plenitude», um substantivo abstracto que em português já não tem gênero nenhum.`),
  vocab: [
    V('το παιδί', 'το παιδί', 'a criança'),
    V('η γυναίκα', 'η γυναίκα', 'a mulher'),
    V('ο άνθρωπος', 'ο άνθρωπος', 'o homem, a pessoa'),
    V('λόγος', 'λόγος', 'a palavra, o Verbo'),
    V('το σπίτι', 'το σπίτι', 'a casa'),
    V('το πρόβλημα', 'το πρόβλημα', 'o problema'),
    V('το σύμπτωμα', 'το σύμπτωμα', 'o sintoma'),
    V('το νόμισμα', 'το νόμισμα', 'a moeda'),
    V('η τιμή', 'η τιμή', 'a honra'),
    V('η οικογένεια', 'η οικογένεια', 'a família'),
    V('πλήρωμα', 'πλήρωμα', 'a plenitude'),
    V('ο καθηγητής', 'ο καθηγητής', 'o professor'),
    V('ο στρατιώτης', 'ο στρατιώτης', 'o soldado'),
    V('ο λέων', 'ο λέων', 'o leão'),
    V('ο ήλιος', 'ο ήλιος', 'o sol'),
    V('το φεγγάρι', 'το φεγγάρι', 'a lua'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O artigo denuncia o gênero: το παιδί é neutro, e o português obriga a dizer «a criança».',
      ),
    },
    { n: '§2', text: T('O final entrega o gênero: -ος masculino, -η/-α feminino, -ι/-ο neutro.') },
    { n: '§3', text: T('Em -μα cai só neutro; em -ση só feminino; em -τής só masculino.') },
    {
      n: '§4',
      text: T(
        'Aprenda o substantivo com o artigo, nunca sozinho: é o artigo que carrega o gênero.',
      ),
    },
  ],
  notes: [
    {
      label: T('Fonte'),
      text: T(
        'O grego das citações bíblicas aparece com os acentos polifônicos, como na edição crítica; o resto da lição usa o grego moderno com acento único.',
      ),
    },
    {
      label: T('Cuidado'),
      text: T(
        'ο ήλιος e το φεγγάρι não obedecem a nenhuma regra de final. Nenhuma palavra faz isso, e vale mais saber quais são as exceções do que procurar a regra que não existe.',
      ),
    },
  ],
  examples: [
    { text: 'το παιδί κοιμάται', gloss: T('a criança dorme') },
    { text: 'η γυναίκα μιλάει', gloss: T('a mulher fala') },
    { text: 'ο άνθρωπος δουλεύει', gloss: T('o homem trabalha') },
    { text: 'το σπίτι είναι μικρό', gloss: T('a casa é pequena') },
    { text: 'το πρόβλημα είναι μεγάλο', gloss: T('o problema é grande') },
    { text: 'η οικογένεια είναι εδώ', gloss: T('a família está aqui') },
    { text: 'ο καθηγητής έρχεται', gloss: T('o professor vem') },
    { text: 'το φεγγάρι είναι πιο καλή', gloss: T('a lua está mais bonita') },
  ],
  tables: [
    {
      caption: T('Os três gêneros com o artigo'),
      head: ['Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['ο άνθρωπος', 'η γυναίκα', 'το παιδί'],
        ['ο λέων', 'η τιμή', 'το πρόβλημα'],
        ['ο ήλιος', 'η οικογένεια', 'το φεγγάρι'],
      ],
    },
    {
      caption: T('O final que denuncia o gênero'),
      head: ['Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['-τής', '-ση', '-μα'],
        ['ο καθηγητής', 'η τιμή', 'το πρόβλημα'],
        ['ο στρατιώτης', 'η δουλειά', 'το σύμπτωμα'],
      ],
    },
    {
      caption: T('Gênero por número'),
      head: ['Αριθμός', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['ένα', 'ο άνθρωπος', 'η γυναίκα', 'το παιδί'],
        ['πολλοί', 'οι άνθρωποι', 'οι γυναίκες', 'τα παιδιά'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual destes é neutro?'),
    options: [T('το παιδί'), T('ο άνθρωπος'), T('η γυναίκα'), T('ο ήλιος')],
    answer: 0,
  },
  exercises: [
    { kind: 'fill', prompt: T('___ παιδί κοιμάται'), answer: 'το', hint: T('Artigo neutro') },
    {
      kind: 'choose',
      prompt: T('Qual final só aparece no feminino?'),
      options: [T('-τής'), T('-ση'), T('-μα'), T('-ος')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Gênero de cada substantivo'),
      pairs: [
        { a: 'ο καθηγητής', b: T('masculino') },
        { a: 'η οικογένεια', b: T('feminino') },
        { a: 'το πρόβλημα', b: T('neutro') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'choose',
      prompt: T('Em «το πρόβλημα», o que o artigo revela?'),
      options: [
        T('que é masculino'),
        T('que é feminino'),
        T('que é neutro'),
        T('que é indefinido'),
      ],
      answer: 2,
    },
  ],
};
