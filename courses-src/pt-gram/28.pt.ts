import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('A oração e seus termos'),
  title: T('Análise dos termos acessórios'),
  subtitle: T('Adjuntos, aposto e vocativo'),
  body: C(`**Visão geral.** O {adjunto adnominal} caracteriza um nome e {adjunto adverbial} indica circunstância: em {o amor de Deus}, {de Deus} completa um nome; em {saiu à noite}, {à noite} indica tempo.

**Regra 1.** O {aposto} explica, restringe ou resume um termo anterior: em {Jesus, o Filho do carpinteiro, saiu}, {o Filho do carpinteiro} explica {Jesus}.

**Regra 2.** O {vocativo} interpela o interlocutor e vem entre vírgulas: em {Jesus, Senhor nosso, entrou}, {Senhor nosso} chama, e o que está entre as vírgulas é que é vocativo.

**Regra 3.** O teste que decide entre {aposto} e {vocativo} é o referente do {nosso}: em {Senhor nosso, aqui estamos}, o {nosso} já se refere a {nós}, e o termo é vocativo.

**Regra 4.** Todo acessório pode ser retirado sem quebrar a frase: em {E, ao anoitecer, disse}, {ao anoitecer} sai e o período fica inteiro, ao contrário de {os céus} em {criou os céus}.

**Aplicação.** Em {Jesus, Senhor nosso, respondeu}, os dois termos entre vírgulas são **vocativo** e **aposto** juntos, e o que os distingue é a função: o vocativo **chama** alguém e o aposto **explica** um nome. No grego, o vocativo é a **forma de vocativo** ({κύριε}) e o aposto é a mesma forma em **nominativo** ({ὁ κύριος}), e o grego distingue o que o português distingue por pontuação.

**Verificação.** A pergunta que decide: se eu **retirar** este termo, a frase ainda faz sentido? Se sim, é acessório. Se não, é integrante. Depois: ele **concorda** com um nome (adnominal) ou é invariável (adverbial)? E é **aposto** (explica) ou **vocativo** (interpela)? Três perguntas, e a análise fecha sem ambiguidade.`),
  vocab: [
    V('adjunto adnominal', 'adjunto adnominal', 'caracteriza um nome'),
    V('adjunto adverbial', 'adjunto adverbial', 'indica circunstância'),
    V('caracterização', 'caracterização', 'função do adjunto adnominal'),
    V('circunstância', 'circunstância', 'função do adjunto adverbial'),
    V('aposto', 'aposto', 'explica um termo anterior'),
    V('explicação', 'explicação', 'o que o aposto faz'),
    V('vocativo', 'vocativo', 'chama o interlocutor'),
    V('interpelação', 'interpelação', 'o que o vocativo faz'),
    V('Senhor nosso', 'Senhor nosso', 'vocativo no grego, {κύριε}'),
    V('o Filho do carpinteiro', 'o Filho do carpinteiro', 'aposto de {Jesus}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O {adjunto adnominal} caracteriza um nome e {adjunto adverbial} indica circunstância: em {o amor de Deus}, {de Deus} completa um nome; em {saiu à noite}, {à noite} indica tempo.',
      ),
    },
    {
      n: '§2',
      text: T(
        'O {aposto} explica, restringe ou resume um termo anterior: em {Jesus, o Filho do carpinteiro, saiu}, {o Filho do carpinteiro} explica {Jesus}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O {vocativo} interpela o interlocutor e vem entre vírgulas: em {Jesus, Senhor nosso, entrou}, {Senhor nosso} chama, e o que está entre as vírgulas é que é vocativo.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O teste que decide entre {aposto} e {vocativo} é o referente do {nosso}: em {Senhor nosso, aqui estamos}, o {nosso} já se refere a {nós}, e o termo é vocativo.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Todo acessório pode ser retirado sem quebrar a frase: em {E, ao anoitecer, disse}, {ao anoitecer} sai e o período fica inteiro, ao contrário de {os céus} em {criou os céus}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O grego marca o que o português pontua'),
      text: T(
        'Em grego, o vocativo {κύριε} e o nominativo {ὁ κύριος} são formas distintas, e a diferença está na terminação, não na pontuação. O português perdeu a terminação e ganhou a vírgula, de modo que {Senhor nosso} e {o Senhor} só se distinguem pelo contexto. É por isso que o mesmo trecho pode ter duas leituras sem que o grego permita.',
      ),
    },
    {
      label: T('O adjunto que muda a leitura quando muda de lugar'),
      text: T(
        'Em {Ontem viu Jesus}, o adjunto é {ontem} e nada mais se conclui. Em {Jesus viu ontem}, o mesmo {ontem} aparece e a leitura também não muda muito. Mas em {Só ontem viu Jesus}, o {só} deixa de ser adjunto adverbial e passa a intensificar {ontem}: a posição decide a função, e é por isso que adjunto não é sinônimo de advérbio.',
      ),
    },
  ],
  examples: [
    {
      text: 'Jesus, Senhor nosso, respondeu',
      gloss: T('{Senhor nosso} é vocativo: o {nosso} já se refere ao interlocutor.'),
    },
    {
      text: 'Jesus, o Filho do carpinteiro, saiu',
      gloss: T('{o Filho do carpinteiro} é aposto: explica e restringe {Jesus}.'),
    },
    {
      text: 'E, ao anoitecer, disse aos seus discípulos',
      gloss: T(
        'Duas vírgulas e três adjuntos: {ao anoitecer}, {aos seus discípulos} e o {E} de ligação.',
      ),
    },
    {
      text: 'o amor verdadeiro',
      gloss: T('{verdadeiro} é adjunto adnominal: caracteriza {amor} e concorda com ele.'),
    },
    {
      text: 'o Verbo se fez carne',
      gloss: T(
        '{se fez} é locução verbal e {carne} é o predicativo, com o verbo de ligação {se fez}.',
      ),
    },
    {
      text: 'o velho Davi',
      gloss: T('{Davi} é nome próprio e aposto restritivo: diz qual {rei} o texto quer dizer.'),
    },
    {
      text: 'Saiu de noite.',
      gloss: T('{de noite} é adjunto adverbial de tempo; pode ir para o fim da frase.'),
    },
    {
      text: 'Aleluia! Coração que não sente',
      gloss: T('A exclamação vem solta: o {Aleluia} é interjeição e o resto, período.'),
    },
    {
      text: 'Amigo, servidor do Senhor',
      gloss: T('Duas vírgulas em sequência: a primeira abre vocativo e a segunda, aposição.'),
    },
  ],
  tables: [
    {
      caption: T('Acessórios: o que cada um faz'),
      head: [T('Tipo'), T('Função'), T('Concorda?'), T('Pode sair?'), T('Exemplo')],
      rows: [
        [
          T('{adjunto adnominal}'),
          T('caracteriza um nome'),
          T('sim'),
          T('sim'),
          T('{o amor verdadeiro}'),
        ],
        [
          T('{adjunto adverbial}'),
          T('indica circunstância'),
          T('não'),
          T('sim'),
          T('{ao anoitecer}'),
        ],
        [
          T('{aposto explicativo}'),
          T('explica um termo'),
          T('sim'),
          T('sim'),
          T('{o Filho do carpinteiro}'),
        ],
        [
          T('{aposto restritivo}'),
          T('restringe um termo'),
          T('sim'),
          T('não'),
          T('{o velho Davi}'),
        ],
        [
          T('{vocativo}'),
          T('interpela o interlocutor'),
          T('sim'),
          T('não, muda o tom'),
          T('{Senhor nosso}'),
        ],
      ],
    },
    {
      caption: T('Aposto e vocativo lado a lado'),
      head: [T('Critério'), T('Aposto'), T('Vocativo'), T('Exemplo')],
      rows: [
        [
          T('quem explica'),
          T('um termo já dito'),
          T('o interlocutor'),
          T('{o Filho de Deus} contra {Senhor}'),
        ],
        [
          T('posição'),
          T('vem depois do nome'),
          T('vem no início ou meio'),
          T('{Jesus, o Filho, saiu}'),
        ],
        [
          T('forma grega'),
          T('{ὁ κύριος}, nominativo'),
          T('{κύριε}, vocativo'),
          T('as duas formas'),
        ],
        [
          T('o que o nome explica'),
          T('quem o nome é'),
          T('a quem se fala'),
          T('{o Filho} contra {Senhor}'),
        ],
        [
          T('retirar o termo'),
          T('altera o sentido'),
          T('altera o tom'),
          T('a explicação se perde'),
        ],
      ],
    },
    {
      caption: T('Adjunto adverbial por circunstância'),
      head: [T('Circunstância'), T('Pergunta'), T('Exemplo'), T('Pode sair?')],
      rows: [
        [T('tempo'), T('{quando?}'), T('{ao anoitecer}'), T('sim')],
        [T('lugar'), T('{onde?}'), T('{em Jerusalém}'), T('sim')],
        [T('modo'), T('{como?}'), T('{com cautela}'), T('sim')],
        [T('causa'), T('{por quê?}'), T('{por amor}'), T('raramente')],
        [T('finalidade'), T('{para quê?}'), T('{para que o veja}'), T('não')],
        [T('concessão'), T('{embora?}'), T('{embora tardasse}'), T('não')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Jesus, Senhor nosso, entrou em Jerusalém}, {Senhor nosso} é vocativo porque:'),
    options: [
      T('chama o interlocutor, e o {nosso} já se refere a ele'),
      T('explica quem é {Jesus}'),
      T('concorda com {Jesus} em gênero e número'),
      T('vem entre vírgulas, como todo vocativo'),
    ],
    answer: 0,
    hint: T('Um aposto explica o nome anterior; um vocativo chama quem ouve.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {E, ao anoitecer, disse aos seus discípulos}, {ao anoitecer} é:'),
      options: [
        T('adjunto adverbial de tempo, e pode sair da frase'),
        T('sujeito, porque vem logo depois do verbo {disse}'),
        T('objeto indireto de {disse}'),
        T('aposto de {E}'),
      ],
      answer: 0,
      hint: T('Retire {ao anoitecer} e a frase continua inteira.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o termo ao papel que ele exerce.'),
      pairs: [
        { a: T('{o Filho do carpinteiro}'), b: T('aposto') },
        { a: T('{Senhor nosso}'), b: T('vocativo') },
        { a: T('{verdadeiro} em {o amor verdadeiro}'), b: T('adjunto adnominal') },
        { a: T('{em Jerusalém}'), b: T('adjunto adverbial de lugar') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T(
        'O termo que explica um nome anterior é o ______. The term that explains a preceding name is the ______.',
      ),
      answer: 'aposto',
      hint: T('Em {Jesus, o Filho do carpinteiro, saiu}.'),
    },
  ],
};
