import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Leitura guiada: Pai-Nosso e Salmo 22'),
  subtitle: T('Padre nostro che sei nei cieli'),
  section: T('O tempo do verbo'),
  body: C(`## Leia o Pai-Nosso por blocos

O truque para ler o Pai-Nosso em italiano não é o vocabulário: **é identificar o verbo de cada oração**. {Padre nostro che sei nei cieli}: {sei} é o presente de {essere}, e {nei} é a fusão de {in} + {i}, «nos». {Sia santificato il tuo nome}: {sia} é congiuntivo, **porque expressa desejo**; a forma {è} seria erro. {Venga il tuo regno}: {venga} é o congiuntivo de {venire}. {Sia fatta la tua volontà} repete {sia} pelo mesmo motivo.

O padrão é visível: tudo o que é desejo vai para o congiuntivo, e são justamente os três pedidos centrais. Não é acaso, porque um pedido é, por definição, algo que o falante quer e ainda não tem.

## {Dacci}: verbo e clítico colados

{Dacci oggi il nostro pane quotidiano} traz {dacci}, que **é o imperativo de** {dare} com o {ci} grudado, «dá-nos». O {ci} se cola ao verbo porque é objeto indireto, e a ordem é verbo mais clítico. Traduzir por «dá a nós» funciona, mas perde que em italiano é um termo só, e o mesmo vale para {dammelo} e {diccelo}.

{Rimetti a noi i nostri debiti} traz {rimettere}, que aqui significa «perdoar, soltar», e não «repor». A construção com {a noi} é dativo de pessoa, a mais comum do italiano, e é o equivalente de «a nós» quando o português marca destinatário. Onde o português diz «largar», o italiano diz {lasciarare} e {perdonare}, e no Pai-Nosso aparece {rimettere}.

## No Salmo 22, o que faz a tradução

{Dio mio, Dio mio, perché mi hai abbandonato?} é uma pergunta por motivo. {Perché} aqui faz o mesmo que o grego (ἱνατί) e o hebraico (למה): pergunta por quê. Traduzir por «porque» sem perceber que é pergunta retórica deixa a frase sem força, e o Salmo perde o grito.

{Mi} em {mi hai abbandonato} é objeto indireto, «a mim», e {hai} é o presente de {avere}, «tens». O verbo é mais curto que em português, e a forma resolve o que a palavra não resolve: onde uma tradução italiana traz o dativo de vantagem, {mi}, a outra traz o ablativo, {me}. As duas são italianas, e quem traduz tem de escolher sabendo que a escolha já foi feita.

## O que ler

Em qualquer oração do Pai-Nosso, pergunte: isto é desejo (congiuntivo), ordem (imperativo) ou fato (indicativo)? No Salmo, pergunte: {perché} é causa ou pergunta? A resposta muda a tradução mais do que qualquer palavra isolada.`),
  vocab: [
    V('Padre', 'padre', 'Pai'),
    V('nostro', 'nostro', 'nosso'),
    V('cieli', 'cielo', 'céus'),
    V('venga', 'venire', 'venha (subj.)'),
    V('dacci', 'dare', 'dá-nos!'),
    V('rimetti', 'rimettere', 'perdoa'),
    V('debito', 'debito', 'dívida'),
    V('abbandonato', 'abbandonare', 'abandonado'),
    V('sei', 'essere', 'sés (2ª sg.)'),
    V('nei', 'in', 'nos (in + i)'),
    V('oggi', 'oggi', 'hoje'),
    V('pane', 'pane', 'pão'),
    V('hai', 'avere', 'tens'),
    V('perché', 'perché', 'porque'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que é nei em nei cieli?'),
    options: [T('Um pronome'), T('A fusão in + i'), T('Um verbo'), T('Um advérbio negativo')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: ___ il tuo regno (congiuntivo di venire)'),
      answer: 'Venga',
      hint: T('Subjuntivo irregular.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual forma significa «dá-nos»?'),
      options: [T('daci'), T('dacci'), T('dacelo'), T('dacine')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: Dio mio, Dio mio, perché mi ___ abbandonato?'),
      answer: 'hai',
      hint: T('Presente di avere, tu.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Tudo o que é desejo vai para o congiuntivo: {Sia santificato}, {Venga il tuo regno}, {Sia fatta la tua volontà}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Nei} é {in} + {i}, «nos»: {nei cieli} quer dizer «nos céus», e {cieli} é o plural de {cielo}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{Dacci} é {da} + {ci}: no imperativo o pronome gruda no verbo, {daccelo}, {dammelo}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Perché} com verbo no passado pergunta motivo: {perché mi hai abbandonato?}, como ἱνατί e למה.',
      ),
    },
    {
      n: '5',
      text: T(
        '{Mi} em {mi hai abbandonato} é objeto indireto, e {hai} é o presente de {avere}: «tens».',
      ),
    },
  ],
  notes: [
    {
      label: T('{Rimettere} não é repor'),
      text: T(
        'Em {Rimetti a noi i nostri debiti}, {rimettere} significa perdoar e {a noi} é dativo de pessoa. O português «perdoa-nos as nossas dívidas» traduz as duas coisas; quem escreve «devolve» em {rimetti} traduz a letra e perde o sentido.',
      ),
    },
    {
      label: T('O texto não é tradução'),
      text: T(
        'As duas traduções italianas do Salmo 22 usam registros diferentes, e o grego original decide: onde uma traz o dativo {mi}, a outra traz o ablativo {me}. A forma resolve melhor o problema do que a palavra, porque as duas opções são italianas e só uma corresponde ao grego.',
      ),
    },
  ],
  examples: [
    { text: 'Padre nostro che sei nei cieli.', gloss: T('Pai nosso que estás nos céus.') },
    { text: 'Sia santificato il tuo nome.', gloss: T('Seja santificado o teu nome.') },
    { text: 'Venga il tuo regno.', gloss: T('Venha o teu reino.') },
    { text: 'Sia fatta la tua volontà.', gloss: T('Seja feita a tua vontade.') },
    { text: 'Dacci oggi il nostro pane.', gloss: T('Dá-nos hoje o nosso pão.') },
    { text: 'Rimetti a noi i nostri debiti.', gloss: T('Perdoa-nos as nossas dívidas.') },
    { text: 'Perché mi hai abbandonato?', gloss: T('Por que me abandonaste?') },
    { text: 'Non ci abbandonare.', gloss: T('Não nos deixes.') },
  ],
  tables: [
    {
      caption: T('Mapa do Pai-Nosso'),
      head: ['Frase', 'Verbo', 'Modo'],
      rows: [
        ['Padre nostro che sei nei cieli', 'sei', 'indicativo'],
        ['Sia santificato il tuo nome', 'sia', 'congiuntivo'],
        ['Venga il tuo regno', 'venga', 'congiuntivo'],
        ['Sia fatta la tua volontà', 'sia', 'congiuntivo'],
        ['Dacci oggi il nostro pane', 'dacci', 'imperativo'],
        ['Rimetti a noi i nostri debiti', 'rimetti', 'imperativo'],
      ],
    },
    {
      caption: T('Formas que o leitor tropeça'),
      head: ['Forma', 'Analisi'],
      rows: [
        ['nei', 'in + i'],
        ['dacci', 'da + ci'],
        ['mi', 'pronome indiretto'],
        ['perché', 'interrogativo'],
        ['hai', 'avere, tu'],
      ],
    },
  ],
};
