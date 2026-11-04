import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('A estrutura do período'),
  title: T('Pontuação'),
  subtitle: T('Pausa, relação e delimitação'),
  body: C(`**Visão geral.** A {vírgula} separa termos de mesma função ou marca uma pausa menor: em {E, logo, disse o SENHOR}, ela separa o adjunto {logo} do resto.

**Regra 1.** Os {dois-pontos} anunciam o que vem: em {Disse Jesus: «Vinde a mim»}, eles introducem a fala, e a fala é o objeto de {disse}.

**Regra 2.** O {ponto e vírgula} separa períodos extensos, e não termos: em {A alma é paciente; o amor, não}, o ponto e vírgula separa duas orações inteiras.

**Regra 3.** As {aspas} delimitam o discurso direto, e os {travessões} e {parênteses} acrescentam uma explicação à parte: em {Jesus, o Filho de Deus, saiu}, o travessão marca a explicação.

**Regra 4.** A vírgula não pode separar o verbo do sujeito nem dois termos ligados por {e}: em {Deus, que criou o mundo, ama}, as vírgulas marcam a oração adjetiva, e não o sujeito.

**Aplicação.** Em {Disse Jesus, olhando para eles: «Quem são estes?»}, os dois-pontos antecipam a fala e a vírgula separa o adjunto {olhando para eles} do núcleo. Em grego, a fala vem entre aspas Gregas ou itálicas e é anunciada por **ἐγένετο δέ** sem pontuação de dois-pontos: as duas línguas fazem o mesmo trabalho com sinais diferentes, e é por isso que a pontuação de um texto antigo é sempre uma **interpretação** do tradutor.

**Verificação.** Antes de pontuar, pergunte: onde a frase **para**? Quais termos estão **ligados** de forma que não se podem separar? E a vírgula que eu quero colocar separa **núcleo de núcleo**? Se separa, está errada. Três perguntas resolvem a pontuação de uma frase inteira, e a segunda é a que impede a vírgula indevida entre sujeito e verbo.`),
  vocab: [
    V('ponto final', 'ponto final', 'marca o fim do período'),
    V('vírgula', 'vírgula', 'pausa menor'),
    V('ponto e vírgula', 'ponto e vírgula', 'pausa entre períodos'),
    V('dois-pontos', 'dois-pontos', 'anuncia o que vem'),
    V('travessão', 'travessão', 'acrescenta uma explicação'),
    V('aspas', 'aspas', 'delimitam a fala'),
    V('parênteses', 'parênteses', 'acrescentam sem interromper'),
    V('reticências', 'reticências', 'suspensão do sentido'),
    V('olhando para eles', 'olhando para eles', 'adjunto que a vírgula separa'),
    V('ἐγένετο δέ', 'ἐγένετο δέ', 'anuncia a fala em grego, sem dois-pontos'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'A {vírgula} separa termos de mesma função ou marca uma pausa menor: em {E, logo, disse o SENHOR}, ela separa o adjunto {logo} do resto.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Os {dois-pontos} anunciam o que vem: em {Disse Jesus: «Vinde a mim»}, eles introducem a fala, e a fala é o objeto de {disse}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O {ponto e vírgula} separa períodos extensos, e não termos: em {A alma é paciente; o amor, não}, o ponto e vírgula separa duas orações inteiras.',
      ),
    },
    {
      n: '§4',
      text: T(
        'As {aspas} delimitam o discurso direto, e os {travessões} e {parênteses} acrescentam uma explicação à parte: em {Jesus, o Filho de Deus, saiu}, o travessão marca a explicação.',
      ),
    },
    {
      n: '§5',
      text: T(
        'A vírgula não pode separar o verbo do sujeito nem dois termos ligados por {e}: em {Deus, que criou o mundo, ama}, as vírgulas marcam a oração adjetiva, e não o sujeito.',
      ),
    },
  ],
  notes: [
    {
      label: T('A pontuação que o grego não tinha'),
      text: T(
        'O grego antigo tinha um sinal de ponto e outro de coma, e nenhum sinal para a fala: os discurso diretos vêm entre aspas, e é o verbo introdutor que marca a passagem. O português precisou inventar os dois-pontos, e foi por isso que a pontuação grega traduzida é sempre uma leitura moderna: quem lê {Disse Jesus: «Vinde a mim»} em grego está lendo {εἶπεν ὁ Ἰησοῦς}, que não tem nada de dois-pontos.',
      ),
    },
    {
      label: T('O travessão que se confundiu com a vírgula'),
      text: T(
        'O travessão marca uma relação que o leitor precisa reconstruir: uma explicação à parte, um par que só tem sentido junto. Em {Jesus, o Filho de Deus, saiu}, o travessão diz que {o Filho de Deus} explica {Jesus}. Quando o mesmo par pode ser lido sem pausa, é vírgula, e é por isso que os dois sinais não são intercambiáveis.',
      ),
    },
  ],
  examples: [
    {
      text: 'Disse Jesus, olhando para eles: «Quem são estes?»',
      gloss: T('Vírgula separa o adjunto {olhando}; dois-pontos antecipam a fala.'),
    },
    {
      text: 'No princípio, disse Deus.',
      gloss: T('A vírgula separa o adjunto adverbial {No princípio} do sujeito {Deus}.'),
    },
    {
      text: 'Deus, que criou o mundo, ama o homem.',
      gloss: T('As vírgulas marcam a oração adjetiva {que criou o mundo}, não o sujeito.'),
    },
    {
      text: 'A alma é paciente; o amor, não.',
      gloss: T(
        'O ponto e vírgula separa duas orações inteiras, e a vírgula marca a omissão do {é}.',
      ),
    },
    {
      text: 'Jesus, o Filho de Deus, saiu.',
      gloss: T('O travessão marca a explicação à parte, e não uma pausa simples.'),
    },
    {
      text: 'O Verbo (aquele que estava com Deus) se fez carne.',
      gloss: T('O parênteses acrescenta uma explicação sem interromper a leitura.'),
    },
    {
      text: 'E Jesus chorou...',
      gloss: T('As reticências marcam suspensão, e o ponto fecha o período.'),
    },
    {
      text: '«Quem são estes?» perguntou Jesus.',
      gloss: T('A fala vem entre aspas e antes do verbo, e a posição invertida é a ordem grega.'),
    },
    {
      text: 'O Verbo se fez carne e habitou entre nós.',
      gloss: T('Sem vírgula entre {carne} e {e}: a conjunção já liga os verbos.'),
    },
  ],
  tables: [
    {
      caption: T('Os sinais e o que cada um marca'),
      head: [T('Sinal'), T('O que marca'), T('Onde aparece'), T('Exemplo')],
      rows: [
        [T('.'), T('fim do período'), T('no fim da frase'), T('{saiu.}')],
        [T(','), T('pausa menor, enumeração'), T('dentro do período'), T('{E, logo, disse}')],
        [
          T(';'),
          T('pausa entre orações extensas'),
          T('entre coordenadas'),
          T('{paciente; o amor, não}'),
        ],
        [
          T(':'),
          T('anúncio do que vem'),
          T('antes da fala ou da explicação'),
          T('{Disse: «Vinde»}'),
        ],
        [
          T('-'),
          T('explicação à parte'),
          T('em pares explicativos'),
          T('{Jesus, o Filho de Deus, saiu}'),
        ],
        [T('«»'), T('discurso direto'), T('em volta da fala'), T('{«Quem são estes?»}')],
        [
          T('()'),
          T('acréscimo sem interromper'),
          T('em volta do parêntese'),
          T('{(aquele que estava com Deus)}'),
        ],
        [T('...'), T('suspensão'), T('antes do ponto final'), T('{chorou...}')],
      ],
    },
    {
      caption: T('Onde a vírgula entra e onde não entra'),
      head: [T('Situação'), T('Vírgula?'), T('Exemplo'), T('Porquê')],
      rows: [
        [
          T('entre sujeito e verbo'),
          T('não'),
          T('{Deus ama}'),
          T('separaria o que é um só sintagma'),
        ],
        [
          T('entre os termos de uma enumeração'),
          T('sim'),
          T('{a, b e c}'),
          T('cada item é um sintagma'),
        ],
        [
          T('antes de {e} em enumeração simples'),
          T('não'),
          T('{Jesus foi, viu e falou}'),
          T('a conjunção já separa'),
        ],
        [
          T('entre duas coordenadas'),
          T('sim'),
          T('{veio, mas não viu}'),
          T('cada oração é um período'),
        ],
        [
          T('ao redor de oração adjetiva explicativa'),
          T('sim'),
          T('{Deus, que criou, ama}'),
          T('a oração é acessória'),
        ],
        [
          T('depois de adjunct no início'),
          T('sim'),
          T('{No princípio, disse Deus}'),
          T('a pausa marca o fim do adjunct'),
        ],
        [
          T('entre dois sujeito coordenados'),
          T('não'),
          T('{Deus e sua palavra amaram}'),
          T('o sujeito é um só sintagma'),
        ],
      ],
    },
    {
      caption: T('Pontuação da fala e do discurso indireto'),
      head: [T('Tipo'), T('Sinal'), T('Exemplo'), T('Observação')],
      rows: [
        [
          T('fala direta'),
          T('«aspas» e dois-pontos antes'),
          T('{Disse: «Vinde»}'),
          T('o verbo fica fora'),
        ],
        [
          T('fala direta depois do verbo'),
          T('«aspas» sem dois-pontos'),
          T('{Disse «Vinde»}'),
          T('a pausa é menor'),
        ],
        [
          T('fala indireta'),
          T('sem aspas, com {que}'),
          T('{Disse que viria}'),
          T('não há discurso transcrito'),
        ],
        [
          T('fala no fim'),
          T('«aspas» e ponto final'),
          T('{«Quem são?» perguntou}'),
          T('a posição é grega'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Deus, que criou o mundo, ama o homem}, a vírgula marca:'),
    options: [
      T('a oração adjetiva {que criou o mundo}'),
      T('a separação entre o sujeito {Deus} e o verbo {ama}'),
      T('a separação entre dois objetos diretos'),
      T('a enumeração de três ações distintas'),
    ],
    answer: 0,
    hint: T('A vírgula separa o acessório do núcleo, nunca o sujeito do verbo.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual sinal anuncia a fala que vem a seguir?'),
      options: [
        T('os dois-pontos, em {Disse Jesus: «Vinde a mim»}'),
        T('o travessão, em {Disse Jesus — «Vinde a mim»}'),
        T('o ponto e vírgula, em {Disse Jesus; «Vinde a mim»}'),
        T('o ponto final, em {Disse Jesus. «Vinde a mim»}'),
      ],
      answer: 0,
      hint: T('Os dois-pontos dizem {isto é o que vem}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o sinal ao uso correto.'),
      pairs: [
        { a: T('{,}'), b: T('pausa menor dentro do período') },
        { a: T('{:}'), b: T('anúncio da fala') },
        { a: T('{;}'), b: T('separação de orações extensas') },
        { a: T('{-}'), b: T('explicação à parte') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T(
        'O sinal que marca o fim do período é o ______. The sign that marks the end of the period is the ______.',
      ),
      answer: 'ponto',
      hint: T('Em {saiu.}, o ponto fecha a oração.'),
    },
  ],
};
