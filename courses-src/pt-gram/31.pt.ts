import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  section: T('O sentido e a subordinação'),
  title: T('O período composto em Marcos 4, 35-41'),
  subtitle: T('Contagem de verbos e grau das orações'),
  body: C(`**Visão geral.** São vinte verbos em sete versículos, e é por eles que a análise começa: {E saiu}, {e os discípulos o seguiam} traz dois verbos e duas orações.

**Regra 1.** Numa oração composta conta-se um verbo por oração: {E, ao anoitecer, disse aos seus discípulos: Passemos para o outro lado} tem dois verbos e duas orações.

**Regra 2.** As coordenadas ocupam o mesmo grau entre si: em {E saiu, e os discípulos o seguiam}, as duas são do primeiro grau, e nenhuma é subordinada da outra.

**Regra 3.** O grau se conta pela distância: {Passemos para o outro lado} depende só de {disse} e é de primeiro grau; {Cala-te! E saí!} depende da fala e é de segundo grau.

**Regra 4.** A {fala reproduzida} sem conectivo ocupa o lugar de {substantiva direta}: em {E disse-lhes: «Por que tendes por foro?»}, o objeto de {disse-lhes} é a pergunta inteira.

**Aplicação.** O parágrafo inteiro cabe em sete períodos, e o caminho curto é percorrê-los um a um. Em Marcos 4, 38, o período mais longo tem seis verbos: {E levantou-se grande temporal}, {e as ondas iam batendo}, {de modo que já estava se enchendo}, {E acordou}, {e repreendeu} e {e disse-lhe: Cala-te! E saí}. Três são coordenadas, uma é consecutiva e duas são as falas de Jesus.

**Verificação.** O que faz a análise fechar é a contagem de verbos, e ela é conferível: são vinte, e o número de orações do parágrafo é o mesmo número. Uma oração que completa um verbo da principal é {substantiva direta}, e são três no trecho, as três falas de Jesus. Uma que traz a consequência é {adverbial}, e é uma só, a enchente de água. Não há uma única {adjetiva} em sete versículos.`),
  vocab: [
    V('período', 'período', 'sequência de orações até o ponto'),
    V('período composto', 'período composto', 'período com duas ou mais orações'),
    V('verbo', 'verbo', 'marca o começo de cada oração'),
    V('oração principal', 'oração principal', 'a que os demais completam'),
    V('coordenada', 'coordenada', 'oração do mesmo grau da principal'),
    V('substantiva direta', 'substantiva direta', 'oração que completa um verbo'),
    V('adverbial consecutiva', 'adverbial consecutiva', 'oração que traz a consequência'),
    V('grau', 'grau', 'nível de dependência da oração'),
    V('fala reproduzida', 'fala reproduzida', 'discurso transcrito de outro interlocutor'),
    V('grande temporal', 'grande temporal', 'sujeito posposto de Marcos 4, 37'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'São vinte verbos em sete versículos, e é por eles que a análise começa: {E saiu}, {e os discípulos o seguiam} traz dois verbos e duas orações.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Numa oração composta conta-se um verbo por oração: {E, ao anoitecer, disse aos seus discípulos: Passemos para o outro lado} tem dois verbos e duas orações.',
      ),
    },
    {
      n: '§3',
      text: T(
        'As coordenadas ocupam o mesmo grau entre si: em {E saiu, e os discípulos o seguiam}, as duas são do primeiro grau, e nenhuma é subordinada da outra.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O grau se conta pela distância: {Passemos para o outro lado} depende só de {disse} e é de primeiro grau; {Cala-te! E saí!} depende da fala e é de segundo grau.',
      ),
    },
    {
      n: '§5',
      text: T(
        'A {fala reproduzida} sem conectivo ocupa o lugar de {substantiva direta}: em {E disse-lhes: «Por que tendes por foro?»}, o objeto de {disse-lhes} é a pergunta inteira.',
      ),
    },
  ],
  notes: [
    {
      label: T('O que o grego mostra que o português esconde'),
      text: T(
        'No grego de Marcos 4, a fala vem logo depois de λέγει τοῖς μαθηταῖς αὐτοῦ, e o verbo seguinte, Διέλθωμεν, é o primeiro da subordinada. O grego tem εἶπεν e παρέθετο como verbos que abrem o discurso, e não precisa de dois-pontos: é o verbo que marca o discurso direto, e não a pontuação. O português precisa dos dois-pontos, e é por isso que as três falas do trecho aparecem como {substantivas diretas}.',
      ),
    },
    {
      label: T('A pontuação que não indica grau'),
      text: T(
        'O ponto e vírgula em Marcos 4, 38 separa duas coordenadas, e o ponto e vírgula em Marcos 4, 37 separa a principal de uma coordenada e de uma subordinada. A vírgula de {Cala-te! E saí!} separa coordenadas que estão dentro da fala. Três usos, um sinal só: é por isso que o grau se conta pela estrutura e não pela pontuação.',
      ),
    },
  ],
  examples: [
    {
      text: 'E, ao anoitecer, disse aos seus discípulos: Passemos para o outro lado',
      gloss: T(
        'Dois verbos: principal {disse} e {substantiva direta} {Passemos}, de primeiro grau.',
      ),
    },
    {
      text: 'E saiu, e os discípulos o seguiam',
      gloss: T('Duas coordenadas; o sujeito {os discípulos} é posposto.'),
    },
    {
      text: 'E levantou-se grande temporal',
      gloss: T('Sujeito {grande temporal} posposto, depois do verbo {levantou-se}.'),
    },
    {
      text: 'de modo que já estava se enchendo de água',
      gloss: T('Consecutiva de primeiro grau: o verbo da subordinada é {estava}.'),
    },
    {
      text: 'E acordou, e repreendeu aos demônios, e disse-lhe: Cala-te! E saí!',
      gloss: T('Três coordenadas; a fala é a última e traz duas coordenadas dentro.'),
    },
    {
      text: 'E ficou grande calma, e cessou o vento',
      gloss: T('Duas coordenadas: {ficou} e {cessou} são verbos do mesmo grau.'),
    },
    {
      text: 'Por que tendes por foro? Não haveis fé ainda?',
      gloss: T('Duas coordenadas dentro de uma {substantiva direta}.'),
    },
    {
      text: 'E eles se admiravam uns dos outros',
      gloss: T(
        'Coordenada; {uns dos outros} é pronome recíproco, e o referente são os discípulos.',
      ),
    },
    {
      text: 'uns dos outros',
      gloss: T('Pronome recíproco: a ação é mútua, e o sujeito não é Jesus.'),
    },
  ],
  tables: [
    {
      caption: T('As subordinadas do parágrafo'),
      head: [T('Trecho'), T('Conectivo'), T('Valor'), T('Grau'), T('Verbo')],
      rows: [
        [
          T('{Passemos para o outro lado}'),
          T('{nenhum, é fala}'),
          T('{substantiva direta}'),
          T('{primeiro}'),
          T('{passemos}'),
        ],
        [
          T('{de modo que já estava se enchendo}'),
          T('{de modo que}'),
          T('{adverbial consecutiva}'),
          T('{primeiro}'),
          T('{estava}'),
        ],
        [
          T('{Cala-te! E saí!}'),
          T('{nenhum, é fala}'),
          T('{substantiva direta}'),
          T('{primeiro}'),
          T('{cala-te}, {saí}'),
        ],
        [
          T('{Por que tendes por foro?}'),
          T('{nenhum, é fala}'),
          T('{substantiva direta}'),
          T('{primeiro}'),
          T('{tendes}'),
        ],
        [
          T('{Não haveis fé ainda?}'),
          T('{nenhum, é fala}'),
          T('{substantiva direta}'),
          T('{segundo}'),
          T('{haveis}'),
        ],
      ],
    },
    {
      caption: T('O parágrafo, período por período'),
      head: [T('Versículo'), T('Verbos'), T('Orações'), T('Como se dividem')],
      rows: [
        [T('{Marcos 4, 35}'), T('2'), T('2'), T('principal + substantiva direta')],
        [T('{Marcos 4, 36}'), T('2'), T('2'), T('principal + coordenada aditiva')],
        [T('{Marcos 4, 37}'), T('3'), T('3'), T('principal + coordenada + consecutiva')],
        [
          T('{Marcos 4, 38}'),
          T('6'),
          T('6'),
          T('principal + três coordenadas + fala com uma coordenada'),
        ],
        [T('{Marcos 4, 39}'), T('2'), T('2'), T('principal + coordenada aditiva')],
        [T('{Marcos 4, 40}'), T('3'), T('3'), T('principal + fala com uma coordenada')],
        [T('{Marcos 4, 41}'), T('2'), T('2'), T('principal + coordenada aditiva')],
        [T('{total}'), T('20'), T('20'), T('7 principais, 9 coordenadas, 4 subordinadas')],
      ],
    },
    {
      caption: T('O grau pela distância'),
      head: [T('Oração'), T('Depende de'), T('Grau'), T('Exemplo')],
      rows: [
        [
          T('{Passemos para o outro lado}'),
          T('{disse}'),
          T('{primeiro}'),
          T('depende só da principal'),
        ],
        [T('{de modo que}'), T('{levantou-se}'), T('{primeiro}'), T('depende só da principal')],
        [T('{Cala-te! E saí!}'), T('{disse-lhe}'), T('{primeiro}'), T('é o objeto do verbo')],
        [
          T('{Não haveis fé ainda?}'),
          T('{Por que tendes por foro?}'),
          T('{segundo}'),
          T('está dentro da primeira fala'),
        ],
        [
          T('{E os discípulos o seguiam}'),
          T('nada'),
          T('{coordenada}'),
          T('independente da principal'),
        ],
        [T('{e cessou o vento}'), T('nada'), T('{coordenada}'), T('independente da principal')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'Em {E disse-lhes: «Por que tendes por foro? Não haveis fé ainda?»}, a oração {Não haveis fé ainda?} é:',
    ),
    options: [
      T('uma coordenada de segundo grau, porque está dentro da fala'),
      T('uma coordenada de primeiro grau, do mesmo período que {disse-lhes}'),
      T('uma subordinada substantiva direta de primeiro grau'),
      T('uma subordinada adverbial final, porque vem no fim do período'),
    ],
    answer: 0,
    hint: T('O grau conta a distância: onde está esta oração em relação a {disse-lhes}?'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Quantas orações subordinadas aparecem em Marcos 4, 35-41?'),
      options: [
        T('quatro: três {substantivas diretas} e uma {adverbial consecutiva}'),
        T('sete: uma em cada versículo'),
        T('duas: uma em Marcos 4, 37 e outra em Marcos 4, 38'),
        T('nenhuma: o trecho é todo composto por coordenação'),
      ],
      answer: 0,
      hint: T('Procure as três falas de Jesus e a oração introduzida por {de modo que}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o trecho ao grau que a sua subordinada tem.'),
      pairs: [
        { a: T('{Passemos para o outro lado}'), b: T('primeiro grau') },
        { a: T('{de modo que já estava}'), b: T('primeiro grau') },
        { a: T('{Não haveis fé ainda?}'), b: T('segundo grau') },
        { a: T('{e cessou o vento}'), b: T('coordenada, sem grau') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('Em Marcos 4, 35-41 há ______ verbos, e é por eles que a análise começa.'),
      answer: 'vinte',
      hint: T('Sete versículos, vinte verbos.'),
    },
  ],
};
