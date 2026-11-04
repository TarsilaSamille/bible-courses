import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('O artigo: a zero nos específicos'),
  subtitle: T('go to school, by car, Teachers are — as quatro omissões'),
  section: T('Nome'),
  body: C(`## Quatro casos, e a lista é curta

O aluno de português erra o artigo mais por excesso do que por falta, e o excesso tem um motivo: no português {o} aparece quase sempre. Em inglês o artigo **desaparece** em quatro situações, e só quatro. Decorando as quatro, o aluno passa.

São elas: plural genérico, massa generalizada, instituição e {by} mais meio de transporte. O resto do substantivo continua recebendo artigo, e é a lista curta que a torna decorável.

## Plural genérico

{Teachers are} e {Books are} falam de toda a classe, não de um membro dela. O plural já diz "todos": o português diria "os professores que estão aqui" e o inglês diz {Teachers}.

Provérbios 18:21 na KJV coloca as duas pontas lado a lado: {Death and life are in the power of the tongue}. Os dois substantivos estão no plural genérico, sem artigo, e a frase vale para qualquer fala e para qualquer língua.

Quando o substantivo genérico é contável no singular, ele vai no plural mesmo sendo um só grupo: {Parents are responsible for their children}.

## Massa generalizada

{Music is} e {Life is} falam de todo o campo, não de um caso particular. É o mesmo movimento do parágrafo anterior com uma diferença: aqui o substantivo nem é pluralizável, e mesmo assim o artigo não vem.

1 João 1:5 diz {God is light, and there is no darkness in him at all}, e {light} e {darkness} são duas massas. Provérbios 15:3 diz {The eyes of the LORD are everywhere, beholding the evil and the good}, e {evil} e {good} são massas generalizadas; {the evil} passaria a significar um mal específico.

O artigo definido volta assim que a massa é determinada: {the water in the glass}, {the life of Christ}.

## Instituição e meio de transporte

{Go to school} e {go to church} não significam ir a um prédio específico e sim usar o que a instituição oferece. Com o artigo, a frase muda de sentido e passa a falar do edifício: {go to the church} é ir a uma igreja concreta, aquela que está à vista.

A KJV mostra a instituição em Marcos 1:21, com {And he went into the synagogue on the sabbath days}. O sentido de {synagogue} ali é a comunidade reunida, não as paredes da casa de oração.

{By car}, {by train}, {by post} e {by hand} não têm artigo nem preposição alternativa. É {by} mais o substantivo no singular, e a construção é tão automática quanto {a} mais um nome.

2 Coríntios 5:7 usa a mesma chave com substantivos abstratos: {we walk by faith, not by sight}. O {by} marca o meio, e o meio nunca recebe artigo.`),
  vocab: [
    V('go to school', 'school', 'ir à escola (estudar)'),
    V('go to church', 'church', 'ir à igreja (cultuar)'),
    V('go to the church', 'church', 'ir a uma igreja específica'),
    V('go to hospital', 'hospital', 'ir ao hospital (tratar-se)'),
    V('go to prison', 'prison', 'ir à prisão (ser preso)'),
    V('by car', 'car', 'de carro'),
    V('by train', 'train', 'de trem'),
    V('by hand', 'hand', 'à mão'),
    V('by post', 'post', 'pelo correio'),
    V('by faith', 'faith', 'pela fé'),
    V('in general', 'general', 'em geral'),
    V('light', 'light', 'luz'),
    V('darkness', 'darkness', 'escuridão'),
    V('synagogue', 'synagogue', 'sinagoga'),
    V('the tongue', 'tongue', 'a língua'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O artigo some em quatro casos: plural genérico, massa generalizada, instituição usada como função e by mais meio de transporte.',
      ),
    },
    {
      n: '2',
      text: T(
        'No plural genérico o substantivo vai no plural mesmo sendo um grupo único: parents, students, children.',
      ),
    },
    {
      n: '3',
      text: T(
        'Na massa generalizada o artigo não vem, e volta assim que a massa passa a ser determinada: water, mas the water in the glass.',
      ),
    },
    {
      n: '4',
      text: T(
        'Instituição sem artigo significa a função (estudar, cultuar, tratar-se); com artigo significa o edifício.',
      ),
    },
    {
      n: '5',
      text: T(
        'By mais meio não recebe artigo nem preposição alternativa: by car, by train, by hand, by faith.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Provérbios 18:21 traz Death and life em plural genérico, 1 João 1:5 traz light e darkness como massas, e Marcos 1:21 traz a instituição. Três casos distintos, e a KJV não sinaliza nenhum deles.',
      ),
    },
    {
      label: T('Excesso:'),
      text: T(
        'The school is famous é o edifício; I go to school é o sistema. Trocar um pelo outro muda o assunto da frase, e é a confusão mais comum depois do plural genérico.',
      ),
    },
  ],
  examples: [
    {
      text: '{Teachers are responsible}',
      gloss: T('os professores são responsáveis — plural genérico'),
    },
    {
      text: '{Music is a gift from God}',
      gloss: T('a música é um dom de Deus — massa generalizada'),
    },
    { text: '{go to school}', gloss: T('ir à escola, isto é, estudar') },
    { text: '{go to the school}', gloss: T('ir a uma escola específica') },
    { text: '{sent by post}', gloss: T('enviado pelo correio') },
    { text: '{we walk by faith, not by sight}', gloss: T('caminhamos pela fé, não pela vista') },
    {
      text: '{Death and life are in the power of the tongue}',
      gloss: T('a morte e a vida estão no poder da língua'),
    },
    {
      text: '{beholding the evil and the good}',
      gloss: T('contemplando o mal e o bem — massas generalizadas'),
    },
    { text: '{the water in the glass}', gloss: T('a água do copo — massa determinada') },
    { text: '{he went into the synagogue}', gloss: T('entrou na sinagoga — instituição') },
  ],
  tables: [
    {
      caption: T('Os quatro casos de artigo zero'),
      head: [T('Caso'), T('Exemplo'), T('Por que o artigo não vem')],
      rows: [
        [T('plural genérico'), '{Teachers are honest}', T('o plural já diz "todos"')],
        [T('massa generalizada'), '{Music is beautiful}', T('a frase cobre todo o campo')],
        [T('instituição'), '{go to school}', T('a instituição, não o edifício')],
        [T('by + meio'), '{by car}', T('meio de transporte')],
      ],
    },
    {
      caption: T('Com artigo e sem artigo'),
      head: [T('Com artigo'), T('Sem artigo'), T('Sentido')],
      rows: [
        ['{go to the church}', '{go to church}', T('edifício × culto')],
        ['{go to the hospital}', '{go to hospital}', T('edifício × tratamento')],
        ['{go to the prison}', '{go to prison}', T('edifício × prisão')],
        ['{go to the university}', '{go to university}', T('campus × estudo')],
        ['{by post}', '{by hand}', T('meio: nenhum dos dois leva artigo')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase usa o artigo corretamente?'),
    options: [
      T('He goes to the school to study'),
      T('He goes to school to study'),
      T('He goes to the schools to study'),
      T('He goes to school to study the school'),
    ],
    answer: 1,
    hint: T('Com sentido de estudar, school não leva artigo.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Complete sem artigo: 'Music ___ beautiful.'"), answer: 'is' },
    { kind: 'fill', prompt: T("Complete: 'She travels ___ car.'"), answer: 'by' },
    {
      kind: 'match',
      prompt: T('Ligue o caso ao exemplo.'),
      pairs: [
        { a: T('plural genérico'), b: '{Teachers are honest}' },
        { a: T('massa generalizada'), b: '{Music is beautiful}' },
        { a: T('instituição'), b: '{go to school}' },
        { a: T('by + meio'), b: '{by car}' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Em que frase o artigo é necessário?'),
      options: [
        T('I go to church every Sunday'),
        T('I go to the church on Friday'),
        T('I go to churches every Sunday'),
        T('I go to church in the churches'),
      ],
      answer: 1,
    },
  ],
};
