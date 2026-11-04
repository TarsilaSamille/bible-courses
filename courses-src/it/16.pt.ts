import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('Preposições articuladas'),
  subtitle: T('del, alla, dal, nel, sul'),
  section: T('A sintaxe e o substantivo'),
  body: C(`## Cinco fusões, seis formas cada

Cinco preposições simples **se fundem obrigatoriamente com o artigo**: {di}, {a}, {da}, {in}, {su}. Não é opcional; é regra, e a grade é mecânica. {Di} mais {il} dá {del}, mais {lo} dá {dello}, mais {la} dá {della}, mais {i} dá {dei}, mais {gli} dá {degli}, mais {le} dá {delle}.

{A} repete exatamente o mesmo padrão: {al}, {allo}, {alla}, {ai}, {agli}, {alle}. {Da} dá {dal}, {dallo}, {dalla}, {dai}, {dagli}, {dalle}. {In} gera {nel}, {nello}, {nella}, {nei}, {negli}, {nelle}. {Su} gera {sul}, {sullo}, {sulla}, {sui}, {sugli}, {sulle}. São vinte e quatro formas, e uma vez que a grade está na página, é preenchimento.

## O que cada fusão diz

A fusão **diz a relação sem preposição visível**. {Nel} é {in} mais {il}, e significa lugar: «em o». {Dal} é {da} mais {il}, e significa origem: «de o». {Della} é {di} mais {la}, e é genitivo feminino. {Sui} é {su} mais {i}, e significa «nos montes», posse ou lugar. Cada fusão carrega a informação que o substantivo sozinho não dá, e é por isso que o mesmo substantivo aparece com {del}, {dal} e {nel} no mesmo parágrafo sem que nenhuma das três possa ser trocada.

A grade não tem folga: {di} mais {gli} dá {degli}, e é essa a única via de chegar ali. {Di} mais {i} dá {dei}, e nenhuma outra combinação produz {dei}.

## A ordem dos elementos

Leia o versículo em blocos: {nel principio}, {presso Dio}, {la luce degli uomini}. «No princípio», «junto de Deus», «a luz dos homens». Quebrar a frase em palavras soltas perde a fusão e perde o sentido.

Depois, amplie: {dalla creazione} (desde a criação), {al mondo} (ao mundo), {sui monti} (nos montos). A fusão **dá o ponto de vista**, origem ({da}), direção ({a}), lugar ({in}) e posse ({su}), e é isso que a preposição simples sozinha não faz.

## O que ler

Sempre que vir {del}, {nel}, {dal} ou {sul}, reconheça a preposição e o artigo fundidos. Se a frase é {dal}, a relação é de origem e não de lugar, e quem traduz «de» para tudo perde a distinção. E note que {nel} e {dal} nunca levam artigo separado: um só, a fusão.`),
  vocab: [
    V('del', 'di', 'do (de + o)'),
    V('alla', 'a', 'à (a + a)'),
    V('dal', 'da', 'do (de + o)'),
    V('della', 'di', 'da (de + a)'),
    V('nel', 'in', 'no (em + o)'),
    V('sul', 'su', 'no (em + o)'),
    V('sui', 'su', 'nos (em + os)'),
    V('dei', 'di', 'dos (de + os)'),
    V('degli', 'di', 'dos (de + os)'),
    V('dalla', 'da', 'da (de + a)'),
    V('preposizione', 'preposizione', 'preposição'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete Mt 5:1: salì ___ monte'),
    answer: 'sul',
    hint: T('su + il'),
  },
  exercises: [
    { kind: 'fill', prompt: T('Forme: di + la → ___'), answer: 'della', hint: T('di + la') },
    {
      kind: 'choose',
      prompt: T('Qual fusão indica «no (+ plural)»?'),
      options: [T('sul'), T('sulla'), T('sui'), T('sugli')],
      answer: 2,
    },
    { kind: 'fill', prompt: T('Forme: da + gli → ___'), answer: 'dagli', hint: T('da + gli') },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A fusão é obrigatória quando a preposição está diante do artigo: {di il} → {del}, {a il} → {al}, {in il} → {nel}, {su il} → {sul}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Di + i} dá {dei} e {di + gli} dá {degli}; nenhuma outra combinação produz essas duas formas.',
      ),
    },
    {
      n: '3',
      text: T(
        '{Con} e {per} quase nunca se fundem: {con il}, {per il}, nunca {con lo} nem {coglio}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Nel} marca lugar, {dal} marca origem e {sui} marca posse: {nel monte}, {dal cielo}, {sui monti}.',
      ),
    },
    {
      n: '5',
      text: T(
        '{Nel} e {dal} nunca levam artigo separado: um só, a fusão, como em {nel principio}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O que a fusão carrega'),
      text: T(
        '{nel} é {in} mais {il} e marca lugar; {dal} é {da} mais {il} e marca origem; {della} é {di} mais {la} e é genitivo. Por isso o mesmo substantivo aparece com {del}, {dal} e {nel} no mesmo parágrafo, e nenhuma das três se troca por outra.',
      ),
    },
    {
      label: T('Onde a fusão engana'),
      text: T(
        '{Sui monti} é {su} mais {i} e significa «nos montes»; {sui} nunca é {su} mais {il}, que daria {sul}. E {sul} mais {i} dá {sui}. A grade da tabela não tem folga, e é por isso que ela se decora de uma vez.',
      ),
    },
  ],
  examples: [
    { text: 'Nel principio era la Parola.', gloss: T('No princípio era a Palavra.') },
    { text: 'La luce degli uomini.', gloss: T('A luz dos homens.') },
    { text: 'Sali sul monte.', gloss: T('Subiu o monte.') },
    { text: 'Vengo dall’Italia.', gloss: T('Venho da Itália.') },
    { text: 'La parola della verità.', gloss: T('A palavra da verdade.') },
    { text: 'Il libro di Paolo.', gloss: T('O livro de Paulo.') },
    { text: 'Uno strato di nebbia.', gloss: T('Uma camada de neblina.') },
    { text: 'Con Dio e per Dio.', gloss: T('Com Deus e por Deus.') },
  ],
  tables: [
    {
      caption: T('Fusões de preposição e artigo'),
      head: ['Preposizione', 'il', 'lo', 'la', 'i', 'gli', 'le'],
      rows: [
        ['di', 'del', 'dello', 'della', 'dei', 'degli', 'delle'],
        ['a', 'al', 'allo', 'alla', 'ai', 'agli', 'alle'],
        ['da', 'dal', 'dallo', 'dalla', 'dai', 'dagli', 'dalle'],
        ['in', 'nel', 'nello', 'nella', 'nei', 'negli', 'nelle'],
        ['su', 'sul', 'sullo', 'sulla', 'sui', 'sugli', 'sulle'],
      ],
    },
    {
      caption: T('O que cada fusão diz'),
      head: ['Fusão', 'Função'],
      rows: [
        ['del', 'di + il'],
        ['dal', 'da + il'],
        ['nel', 'in + il'],
        ['sul', 'su + il'],
        ['dei', 'di + i'],
        ['degli', 'di + gli'],
        ['dalla', 'da + la'],
        ['sui', 'su + i'],
      ],
    },
  ],
};
