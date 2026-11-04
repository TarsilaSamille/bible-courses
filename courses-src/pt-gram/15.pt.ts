import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('A flexão da palavra e a concordância'),
  title: T('Flexão verbal'),
  subtitle: T('Tempos, modos, vozes e conjugação'),
  body: C(`**Visão geral.** O verbo flexiona-se em pessoa, número, tempo e modo: em {Deus amou}, a forma {amou} é 3.ª pessoa do singular do pretérito.

**Regra 1.** O {indicativo} apresenta certeza, o {subjuntivo} apresenta dúvida ou finalidade, e o {imperativo} formula comando: em {Sei que ele sabe} contra {Sei que ele saiba}.

**Regra 2.** A {voz ativa} apresenta o agente e a {passiva} apresenta o paciente: em {Deus criou}, o agente é {Deus}; em {o mundo foi criado}, o paciente é {o mundo}.

**Regra 3.** Os {tempos compostos} se formam com auxiliar mais particípio: em {havia criado}, o {havia} é auxiliar e {criado} é o particípio, não outro verbo.

**Regra 4.** O {infinitivo} e o {gerúndio} não flexionam pessoa nem número: em {Para que me ama?} o primeiro é {amar} e o segundo {amar}, iguais nos dois.

**Aplicação.** Em {O Verbo se fez carne}, o verbo {se fez} é **passiva** ({ser} + {feito}), e o paciente é {o Verbo}. O grego original (ἐγένετο σάρξ) usa **aoristo** e **voz média**, em que o verbo é ativo na forma e passivo no sentido: algo **fez** algo, mas quem sofre é o Verbo. Traduzir por {o Verbo foi feito carne} é correto em português, e esconde que o grego não tinha passiva aqui.

**Verificação.** Para classificar um verbo, pergunte: **que tempo** ({falou}, {falava}, {falarei})? **Que modo** ({fala}, {fale}, {fala!})? **Que voz** ({Deus criou}, {o mundo foi criado}, {ele se matou})? E o **auxiliar** é {ter} ou {ser}? Com as quatro, a flexão verbal inteira está descrita. E o particípio é o que denuncia a passiva: um particípio sem auxiliar não é passiva, é adjetivo.`),
  vocab: [
    V('tempo verbal', 'tempo verbal', 'momento da ação'),
    V('modo verbal', 'modo verbal', 'atitude do falante'),
    V('voz verbal', 'voz verbal', 'relação entre sujeito e ação'),
    V('indicativo', 'indicativo', 'modo da certeza'),
    V('subjuntivo', 'subjuntivo', 'modo da dúvida e da finalidade'),
    V('imperativo', 'imperativo', 'modo do comando'),
    V('infinitivo', 'infinitivo', 'forma que não flexiona'),
    V('particípio', 'particípio', 'forma que forma a passiva'),
    V('se fez', 'se fez', 'particípio irregular de {fazer}'),
    V('ἐγένετο σάρξ', 'ἐγένετο σάρξ', 'aoristo e voz média em grego'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O verbo flexiona-se em pessoa, número, tempo e modo: em {Deus amou}, a forma {amou} é 3.ª pessoa do singular do pretérito.',
      ),
    },
    {
      n: '§2',
      text: T(
        'O {indicativo} apresenta certeza, o {subjuntivo} apresenta dúvida ou finalidade, e o {imperativo} formula comando: em {Sei que ele sabe} contra {Sei que ele saiba}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'A {voz ativa} apresenta o agente e a {passiva} apresenta o paciente: em {Deus criou}, o agente é {Deus}; em {o mundo foi criado}, o paciente é {o mundo}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Os {tempos compostos} se formam com auxiliar mais particípio: em {havia criado}, o {havia} é auxiliar e {criado} é o particípio, não outro verbo.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O {infinitivo} e o {gerúndio} não flexionam pessoa nem número: em {Para que me ama?} o primeiro é {amar} e o segundo {amar}, iguais nos dois.',
      ),
    },
  ],
  notes: [
    {
      label: T('A voz média grega que o português não tem'),
      text: T(
        'O grego antigo tem três vozes, e o português tem duas. A {voz média} grega aparece em verbos como {λύω}, em que o sujeito é ao mesmo tempo quem faz e quem sofre; em {ἐγένετο}, o verbo está no aoristo médio, e o sujeito {Verbo} faz algo que sofre. Traduzir por passiva portuguesa inverte a posição do sujeito e faz o leitor crer que {o Verbo} é o paciente passivo, quando no grego é o agente que sofre.',
      ),
    },
    {
      label: T('O subjuntivo que o grego usava mais'),
      text: T(
        'O grego antigo usava o subjuntivo em contextos onde o português atual usa o indicativo ou o futuro: a incerteza de {ἴδω} aparece onde o português diz {sei}. Cada tradução desses casos é uma decisão: manter o subjuntivo grega soa arcaico em português, e substituí-lo por {se} mais indicativo esconde a força logical do original.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus amou o mundo.',
      gloss: T('{amou} é pretérito perfeito, 3.ª do singular, na voz ativa.'),
    },
    {
      text: 'O mundo foi criado.',
      gloss: T('Voz passiva analítica: {foi} é auxiliar e {criado} é o particípio.'),
    },
    {
      text: 'O Verbo se fez carne.',
      gloss: T('{se fez} é locução passiva com {ser} e o particípio irregular {feito}.'),
    },
    {
      text: 'Sei que ele sabe.',
      gloss: T('Verbo de juízo {sei}: o que segue vai no indicativo, porque se afirma o fato.'),
    },
    {
      text: 'Sei que ele saiba.',
      gloss: T('Com {é necessário} o mesmo {que} leva ao subjuntivo, porque não se afirma o fato.'),
    },
    {
      text: 'Vinde e segui-me.',
      gloss: T('{Vinde} e {segui} são imperativos: a ordem vem sem sujeito.'),
    },
    {
      text: 'havia criado',
      gloss: T(
        'Pretérito mais-que-perfeito composto: {havia} é auxiliar e {criado} é o particípio.',
      ),
    },
    {
      text: 'Amar é obedecer.',
      gloss: T('Dois infinitivos emsujeitos paralelos, sem pessoa nem número.'),
    },
    {
      text: 'para que me amares',
      gloss: T('{amar} no subjuntivo é exigência do {para que}: a finalidade não é fato.'),
    },
  ],
  tables: [
    {
      caption: T('Tempos do indicativo'),
      head: [T('Tempo'), T('Singular'), T('Plural'), T('Uso típico')],
      rows: [
        [T('presente'), T('{ama}'), T('{amam}'), T('fato atual')],
        [T('pretérito perfeito'), T('{amou}'), T('{amaram}'), T('fato concluído')],
        [T('pretérito imperfeito'), T('{amava}'), T('{amavam}'), T('estado em curso')],
        [T('futuro'), T('{amará}'), T('{amarão}'), T('projeção')],
        [T('mais-que-perfeito'), T('{amara}'), T('{amaram}'), T('anterior a outro passado')],
      ],
    },
    {
      caption: T('Modos e o que cada um diz'),
      head: [T('Modo'), T('O que exprime'), T('Exemplo'), T('Sinal típico')],
      rows: [
        [T('{indicativo}'), T('certeza, fato'), T('{Ele sabe}'), T('{que} + indicativo')],
        [
          T('{subjuntivo}'),
          T('dúvida, finalidade, desejo'),
          T('{Ele saia}'),
          T('{para que} + subjuntivo'),
        ],
        [T('{imperativo}'), T('comando, pedido'), T('{Sai}'), T('forma sem {-r}')],
        [T('{infinitivo}'), T('ação sem sujeito'), T('{amar}'), T('{-r}')],
        [T('{gerúndio}'), T('ação em curso'), T('{amando}'), T('{-ndo}')],
      ],
    },
    {
      caption: T('Vozes: ativa, passiva e a grega média'),
      head: [T('Voz'), T('Quem aparece'), T('Como se marca'), T('Frase')],
      rows: [
        [T('{ativa}'), T('o agente'), T('verbo sem auxiliar'), T('{Deus criou}')],
        [
          T('{passiva analítica}'),
          T('o paciente'),
          T('{ser} ou {ter} + particípio'),
          T('{o mundo foi criado}'),
        ],
        [T('{passiva sintética}'), T('o paciente'), T('{se} + verbo'), T('{se fez carne}')],
        [T('{reflexiva}'), T('o mesmo agente'), T('{se} + verbo transitivo'), T('{ele se matou}')],
        [
          T('{média grega}'),
          T('agente que sofre'),
          T('não existe em português'),
          T('{ἐγένετο σάρξ}'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {O mundo foi criado}, o que {criado} é?'),
    options: [
      T('particípio, que com {foi} forma a passiva'),
      T('um verbo no pretérito, com sentido próprio'),
      T('um adjetivo que caracteriza {o mundo}'),
      T('um advérbio de modo aplicado ao substantivo'),
    ],
    answer: 0,
    hint: T('Sem o {foi}, o {criado} seria só um adjetivo.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {para que me amares}, o verbo está no subjuntivo porque:'),
      options: [
        T('{para que} exprime finalidade, e finalidade não é fato Sterile'),
        T('{me} é pronome oblíquo e exige subjuntivo'),
        T('o sujeito {tu} é de segunda pessoa'),
        T('{amar} é infinitivo e todo infinitivo vai no subjuntivo'),
      ],
      answer: 0,
      hint: T('O indicativo afirma; o subjuntivo espera.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma verbal ao que ela é.'),
      pairs: [
        { a: T('{amou}'), b: T('pretérito do indicativo') },
        { a: T('{amava}'), b: T('pretérito imperfeito') },
        { a: T('{amará}'), b: T('futuro do indicativo') },
        { a: T('{amando}'), b: T('gerúndio') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T(
        'A forma que não flexiona pessoa nem número é o ______. The form that inflects neither person nor number is the ______.',
      ),
      answer: 'infinitivo',
      hint: T('Em {amar é obedecer}, os dois são infinitivos.'),
    },
  ],
};
