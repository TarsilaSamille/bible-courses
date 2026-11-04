import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  section: T('A estrutura do período'),
  title: T('Análise do período composto'),
  subtitle: T('O procedimento de análise, passo a passo'),
  body: C(`**Visão geral.** Primeiro contam-se os verbos: em {Disse Jesus: «Quem são estes?»}, há dois, {disse} e {são}, e portanto duas orações.

**Regra 1.** Depois separa-se o que é {independente} do que é {dependente}: a fala {Quem são estes?} completa o verbo {disse}, e por isso é {substantiva direta}.

**Regra 2.** O que completa um verbo da principal é {substantiva direta}, e o que traz consequência é {adverbial consecutiva}: em {de modo que já estava se enchendo}, o valor é de consequência.

**Regra 3.** O {grau} se conta pela distância: {Passemos para o outro lado} depende só de {disse} e é de primeiro grau; {Cala-te! E saí!} depende da fala e é de segundo grau.

**Regra 4.** A {fala reproduzida} sem conectivo ocupa o lugar de {substantiva direta}: em {E disse: Cala-te!}, o que é objeto de {disse} é a fala inteira, e não {Cala-te}.

**Aplicação.** Em {Disse Jesus: «Quem são estes?»}, o período tem **duas** orações: {Disse Jesus} (principal, verbal) e {Quem são estes} (subordinada **substantiva** direta, objeto de {disse}). Dentro da primeira, {Jesus} é sujeito e {Disse} o verbo. Dentro da segunda, {estes} é sujeito, {são} verbo e {quem} pronome interrogativo. E a **fala** é o próprio conteúdo da subordinada, e o grego faz o mesmo com {τίς οὗτοί εἰσιν}.

**Verificação.** Percorra seis passos na ordem. Um: conte os verbos. Dois: separe o que é {principal} do que é {subordinada}. Três: pergunte a cada subordinada **o que** ela completa. Quatro: se completa um verbo, é {substantiva}; se caracteriza um nome, é {adjetiva}; se indica circunstância, é {adverbial}. Cinco: conte o {grau} pela distância. Seis: nomeie a função dentro da principal. A análise sai sem dependência de intuição.`),
  vocab: [
    V('período composto', 'período composto', 'período com duas ou mais orações'),
    V('verbo conjugado', 'verbo conjugado', 'marca o começo de cada oração'),
    V('oração coordenada', 'oração coordenada', 'independente, do mesmo grau'),
    V('oração subordinada', 'oração subordinada', 'depende de um termo da principal'),
    V('substantiva', 'substantiva', 'funciona como substantivo'),
    V('adjetiva', 'adjetiva', 'funciona como adjetivo'),
    V('adverbial', 'adverbial', 'indica circunstância'),
    V('reduzida', 'reduzida', 'sem verbo conjugado próprio'),
    V('τίς οὗτοί εἰσιν', 'τίς οὗτοί εἰσιν', 'a pergunta de Jesus no grego'),
    V('Cala-te! E saí!', 'Cala-te! E saí!', 'fala com duas coordenadas dentro'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Primeiro contam-se os verbos: em {Disse Jesus: «Quem são estes?»}, há dois, {disse} e {são}, e portanto duas orações.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Depois separa-se o que é {independente} do que é {dependente}: a fala {Quem são estes?} completa o verbo {disse}, e por isso é {substantiva direta}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O que completa um verbo da principal é {substantiva direta}, e o que traz consequência é {adverbial consecutiva}: em {de modo que já estava se enchendo}, o valor é de consequência.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O {grau} se conta pela distância: {Passemos para o outro lado} depende só de {disse} e é de primeiro grau; {Cala-te! E saí!} depende da fala e é de segundo grau.',
      ),
    },
    {
      n: '§5',
      text: T(
        'A {fala reproduzida} sem conectivo ocupa o lugar de {substantiva direta}: em {E disse: Cala-te!}, o que é objeto de {disse} é a fala inteira, e não {Cala-te}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O procedimento que substitui a intuição'),
      text: T(
        'A análise sintática fica fácil quando a pergunta é sempre a mesma: o que esta oração completa? Se completa um verbo, é {substantiva}. Se caracteriza um nome, é {adjetiva}. Se indica tempo, causa ou finalidade, é {adverbial}. A pergunta não muda de lição para lição, e é por isso que o procedimento se decora: não o resultado.',
      ),
    },
    {
      label: T('O grau que a pontuação não revela'),
      text: T(
        'Em Marcos 4, 38, o ponto e vírgula separa duas coordenadas, e o ponto e vírgula de Marcos 4, 37 separa a principal de uma coordenada e de uma subordinada. A mesma pontuação marca coisas diferentes, e é por isso que o grau se conta pela estrutura e não pelo sinal. Quem conta grau pela vírgula erra justamente nos versículos mais densos.',
      ),
    },
  ],
  examples: [
    {
      text: 'Disse Jesus: «Quem são estes?»',
      gloss: T('Duas orações: {Disse Jesus} e a fala, que é {substantiva direta}.'),
    },
    {
      text: 'E, ao anoitecer, disse: Passemos para o outro lado',
      gloss: T('A fala é {substantiva direta} de primeiro grau, sem conectivo escrito.'),
    },
    {
      text: 'de modo que já estava se enchendo de água',
      gloss: T(
        'Subordinada {adverbial consecutiva} de primeiro grau, introduzida por {de modo que}.',
      ),
    },
    { text: 'Cala-te! E saí!', gloss: T('Fala com duas coordenadas dentro: {Cala-te} e {saí}.') },
    {
      text: 'o barco queDependent',
      gloss: T('A oração {que Dependent} é {adjetiva restritiva}: limita o nome {barco}.'),
    },
    {
      text: 'Vinde, e segui-me',
      gloss: T('Duas coordenadas: {Vinde} e {segui-me}, ambas independentes.'),
    },
    {
      text: 'Creio, porque tu és o Filho',
      gloss: T('Principal {Creio} e subordinada {adverbial causal} de primeiro grau.'),
    },
    {
      text: 'É necessário que venhas',
      gloss: T('A subordinada {substantiva subjetiva} ocupa o lugar do sujeito de {é}.'),
    },
    {
      text: 'τίς οὗτοί εἰσιν',
      gloss: T('A pergunta grega que corresponde a {Quem são estes?}, com o mesmo valor.'),
    },
  ],
  tables: [
    {
      caption: T('Os seis passos da análise'),
      head: [T('Passo'), T('Pergunta'), T('O que se procura'), T('Exemplo')],
      rows: [
        [T('1'), T('quantos verbos há?'), T('o número de orações'), T('{disse}, {são}')],
        [
          T('2'),
          T('qual é a principal?'),
          T('a oração que os demais completam'),
          T('{Disse Jesus}'),
        ],
        [
          T('3'),
          T('o que cada subordinada completa?'),
          T('a função de cada uma'),
          T('{Quem são estes}'),
        ],
        [
          T('4'),
          T('é substantiva, adjetiva ou adverbial?'),
          T('o tipo'),
          T('{substantiva direta}'),
        ],
        [T('5'), T('a que distância está da principal?'), T('o grau'), T('{primeiro grau}')],
        [
          T('6'),
          T('que papel tem dentro da principal?'),
          T('a função final'),
          T('{objeto de disse}'),
        ],
      ],
    },
    {
      caption: T('Subordinadas e o que cada uma completa'),
      head: [T('Tipo'), T('O que completa'), T('Pode ser trocada por'), T('Exemplo')],
      rows: [
        [
          T('{substantiva direta}'),
          T('objeto de um verbo'),
          T('{isso}'),
          T('{Creio que isto é verdade}'),
        ],
        [
          T('{substantiva subjetiva}'),
          T('sujeito de um verbo'),
          T('{isso}'),
          T('{É necessário que venhas}'),
        ],
        [
          T('{substantiva predicativa}'),
          T('complemento nominal'),
          T('{isso}'),
          T('{Certo é que ele veio}'),
        ],
        [
          T('{adjetiva restritiva}'),
          T('um nome, para limitar'),
          T('{que}, {o qual}'),
          T('{o barco que vias}'),
        ],
        [
          T('{adjetiva explicativa}'),
          T('um nome, para explicar'),
          T('{que}, {o qual}'),
          T('{o barco, que era velho}'),
        ],
        [
          T('{adverbial causal}'),
          T('a causa do que se afirma'),
          T('{isso}'),
          T('{não fui, porque era tarde}'),
        ],
        [
          T('{adverbial final}'),
          T('a finalidade do que se faz'),
          T('{isso}'),
          T('{vim para que vês}'),
        ],
      ],
    },
    {
      caption: T('Grau das orações no período'),
      head: [T('Grau'), T('Depende de'), T('Distância da principal'), T('Exemplo')],
      rows: [
        [T('primeiro'), T('da principal'), T('imediata'), T('{Passemos para o outro lado}')],
        [T('segundo'), T('de uma subordinada'), T('uma oração dentro'), T('{Cala-te! E saí!}')],
        [
          T('terceiro'),
          T('de uma do segundo grau'),
          T('duas orações dentro'),
          T('raro na Escritura'),
        ],
        [
          T('{reduzida}'),
          T('de qualquer termo'),
          T('sem verbo próprio'),
          T('{Caminhando para Ele}'),
        ],
        [T('{coordenada}'), T('da principal'), T('mesmo grau que a principal'), T('{E saiu}')],
        [T('{principal}'), T('de nada'), T('ponto de partida'), T('{Disse Jesus}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Disse Jesus: «Quem são estes?»}, a fala {Quem são estes?} é:'),
    options: [
      T('substantiva direta de primeiro grau, objeto de {disse}'),
      T('oração principal, porque vem depois do verbo'),
      T('adjetiva explicativa de {Jesus}'),
      T('coordenada assindética de {Disse Jesus}'),
    ],
    answer: 0,
    hint: T('A pergunta que decide: o que a fala completa? Ela completa o verbo {disse}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {de modo que já estava se enchendo}, a subordinada é:'),
      options: [
        T('adverbial consecutiva, porque traz o resultado'),
        T('substantiva direta, porque completa um verbo'),
        T('adjetiva restritiva, porque limita um nome'),
        T('coordenada conclusiva, porque vem depois'),
      ],
      answer: 0,
      hint: T('O {de modo que} é o conectivo das consecutivas.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o trecho ao tipo de oração que ele contém.'),
      pairs: [
        { a: T('{Vinde, e segui-me}'), b: T('coordenada') },
        { a: T('{Cala-te! E saí!}'), b: T('fala com duas coordenadas') },
        { a: T('{Passemos para o outro lado}'), b: T('substantiva direta de primeiro grau') },
        { a: T('{porque tu és o Filho}'), b: T('adverbial causal') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('O número de orações de um período é o número de ______ que ele tem.'),
      answer: 'verbos',
      hint: T('Dois verbos, duas orações.'),
    },
  ],
};
