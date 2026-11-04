import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('O verbo: o que muda de forma'),
  subtitle: T('base, passado, -ing — e a honestidade dos irregulares'),
  section: T('O verbo'),
  body: C(`## Quatro colunas, e o resto é lista

Cada verbo inglês vive em quatro formas: o **base** ({work}), o **passado** ({worked}), o **particípio** ({worked}) e o **-ing** ({working}). Com verbo regular os quatro derivam por regra, e a regra cabe numa frase: o passado e o particípio recebem {ed}, e o {ing} troca o {e} final por {ing}.

A irregularidade começa depois disso, e ela é grande. {Go → went → gone}, {write → wrote → written}, {stand → stood → stood}: três verbos, três caminhos, e nenhuma regra que os produza. Isso é uma das piores partes da língua, e a honestidade vale mais que a promessa de que "é só decorar".

O particípio é a coluna que quase ninguém conhece e que aparece em toda frase com auxiliar: {I have worked}, {she has written}, {they have gone}. É ele que faz o verbo conjugado carregar o resto da frase.

## O verbo conjugado carrega a partícula

O inglês flexiona o verbo por pessoa: {I work}, {you work}, {he works}. E o verbo conjugado **traz a partícula junto**: {I have worked}, e nunca {I am work}.

Quando o verbo principal vem depois de um auxiliar, quem flexiona é o auxiliar e o principal fica na forma base ou no {ing} ou no particípio. Com {have}: {I have worked}, {she has worked}, {we had worked}. Com {be}: {I am working}, {she is working}, {they were working}. Com {do}: {I do work}, {she does not work}, {they did not work}.

Os três auxiliares são {be}, {have} e {do}, e nenhum flexiona pelo nome do substantivo: o nome continua {work}, {write} e {go} em todas as pessoas.

## Os grupos de irregular

Os irregulares se agrupam, e reconhecer o grupo é mais rápido do que decorar a lista palavra por palavra. O grupo mais productive é o da **vogal trocada**: {sing → sang}, {drink → drank}, {come → came}, {run → ran}. O segundo é o do **{o} que vira {ee}**: {write → wrote}, {give → gave}, {take → took}, {break → broke}. O terceiro é o do **{d} que vira {t}**: {lend → lent}, {send → sent}, {spend → spent}, {build → built}.

João 3:16 na KJV mostra um irregular sem disfarce: {for so loved God the world}. O {loved} não é {love} com {ed} nem é {loved} regular; é uma forma que já vem pronta.

## O que a KJV faz com o tempo

A KJV usa a terminação arcaica de terceira pessoa: {he that heareth}, {God loveth}, {he that speaketh}. A terminação {eth} marca a terceira pessoa do presente nas formas com tema vocálico, e é só registro.

A consequence prática é que o aluno de KJV encontra o tempo verbal ao contrário do que espera: o presente aparece onde o português esperaria futuro ({he that heareth}), e o passado aparece em forma irregular com frequência ({loved}, {came}, {saw}).

Marcos 4:39 acumula os três em uma frase: {And he arose, and rebuked the wind, and said unto the sea, Peace, be still!}. {Arose} é irregular, {said} tem duas formas em inglês e uma em português, e {be still} é verbo mais {adjetivo}.`),
  vocab: [
    V('work', 'work', 'trabalhar'),
    V('worked', 'work', 'trabalhou'),
    V('working', 'work', 'trabalhando'),
    V('go', 'go', 'ir'),
    V('went', 'go', 'foi'),
    V('gone', 'go', 'ido'),
    V('write', 'write', 'escrever'),
    V('wrote', 'write', 'escreveu'),
    V('written', 'write', 'escrito'),
    V('stand', 'stand', 'ficar de pé'),
    V('stood', 'stand', 'ficou de pé'),
    V('sing', 'sing', 'cantar'),
    V('sang', 'sing', 'cantou'),
    V('drink', 'drink', 'beber'),
    V('gave', 'give', 'deu'),
    V('loved', 'love', 'amou'),
    V('heareth', 'hear', 'ouve'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Cada verbo tem quatro formas: base, passado, particípio e -ing. Nos regulares, -ed e -ing bastam.',
      ),
    },
    {
      n: '2',
      text: T(
        'Depois de um auxiliar, o verbo principal fica na base, no particípio ou no -ing; é o auxiliar que flexiona por pessoa.',
      ),
    },
    {
      n: '3',
      text: T('Os auxiliares são be, have e do, e nenhum deles flexiona pelo nome do substantivo.'),
    },
    {
      n: '4',
      text: T(
        'Os irregulares se agrupam em três famílias: vogal trocada, -o que vira -ee, e -d que vira -t.',
      ),
    },
    {
      n: '5',
      text: T(
        'A terminação -eth da KJV é registro de terceira pessoa do presente, e não tempo verbal.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'João 3:16 traz loved, Marcos 4:39 traz arose, e a KJV usa heareth no lugar de he hears. As três coisas acontecem no mesmo versículo de qualquer capítulo.',
      ),
    },
    {
      label: T('Honestidade:'),
      text: T(
        'Os irregulares são a pior parte da língua e não têm regra. A honestidade aqui é melhor que a promessa: a lista é o que é, e o que resolve é aprender o verbo inteiro, com exemplo.',
      ),
    },
  ],
  examples: [
    { text: '{I have worked}', gloss: T('eu tenho trabalhado') },
    { text: '{she has written}', gloss: T('ela escreveu (participado)') },
    { text: '{they have gone}', gloss: T('eles se foram') },
    { text: '{I am working}', gloss: T('eu estou trabalhando') },
    { text: '{he works}', gloss: T('ele trabalha') },
    { text: '{for so loved God the world}', gloss: T('porque Deus amou o mundo') },
    { text: '{And he arose}', gloss: T('e ele se levantou') },
    { text: '{he that heareth}', gloss: T('aquele que ouve — KJV') },
    { text: '{he went and did not come}', gloss: T('ele foi e não veio') },
    { text: '{we had worked}', gloss: T('nós tínhamos trabalhado') },
  ],
  tables: [
    {
      caption: T('As quatro colunas'),
      head: [T('Base'), T('Passado'), T('Particípio'), T('-ing')],
      rows: [
        ['{work}', '{worked}', '{worked}', '{working}'],
        ['{play}', '{played}', '{played}', '{playing}'],
        ['{go}', '{went}', '{gone}', '{going}'],
        ['{write}', '{wrote}', '{written}', '{writing}'],
        ['{stand}', '{stood}', '{stood}', '{standing}'],
        ['{eat}', '{ate}', '{eaten}', '{eating}'],
        ['{give}', '{gave}', '{given}', '{giving}'],
      ],
    },
    {
      caption: T('Famílias de irregulares'),
      head: [T('Família'), T('O que muda'), T('Exemplos')],
      rows: [
        [T('vogal trocada'), T('o núcleo da raiz'), '{sing → sang, drink → drank, come → came}'],
        [T('-o vira -ee'), T('a vogal final'), '{write → wrote, give → gave, take → took}'],
        [T('-d vira -t'), T('a consoante final'), '{lend → lent, send → sent, build → built}'],
        [T('sem regra'), T('tudo'), '{stand → stood, buy → bought}'],
      ],
    },
    {
      caption: T('Os três auxiliares'),
      head: [T('Auxiliar'), T('Serve para'), T('Exemplo')],
      rows: [
        ['{be}', T('presente e passado contínuos'), '{I am working, they were working}'],
        ['{have}', T('tempos perfeitos'), '{I have worked, we had worked}'],
        [
          '{do}',
          T('presente e passado simples, com negação e pergunta'),
          '{I do work, they did not work}',
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase está correta?'),
    options: [T('I have went'), T('I have gone'), T('I am work'), T('I have go')],
    answer: 1,
    hint: T('Depois de have, o verbo vai no particípio: gone.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete o particípio: 'She has ___ the letter.' (write)"),
      answer: 'written',
    },
    {
      kind: 'fill',
      prompt: T("Complete o passado irregular: 'He ___ to church yesterday.' (go)"),
      answer: 'went',
    },
    {
      kind: 'match',
      prompt: T('Ligue a base ao passado irregular.'),
      pairs: [
        { a: 'go', b: 'went' },
        { a: 'write', b: 'wrote' },
        { a: 'drink', b: 'drank' },
        { a: 'send', b: 'sent' },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta?'),
      options: [
        T('I am work every day'),
        T('I am working every day'),
        T('I am worked every day'),
        T('I work every day am'),
      ],
      answer: 1,
    },
  ],
};
