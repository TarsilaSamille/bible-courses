import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('As palavras e suas classes'),
  title: T('Substantivo, artigo e adjetivo'),
  subtitle: T('Nomeação, determinação e caracterização'),
  body: C(`**Visão geral.** O {substantivo} nomeia e o {adjetivo} caracteriza: em {Deus amou o mundo}, {Deus} e {mundo} são substantivos e {amou} é verbo, sem adjetivo nenhum.

**Regra 1.** O {artigo definido} {o} individualiza e o {indefinido} {um} apresenta um entre muitos: {o mundo} é o mundo nomeado, {um mundo} é um dos muitos.

**Regra 2.** O adjetivo {concorda} com o substantivo em gênero e número, e não com o artigo: em {as{profeitas} maiores}, {maiores} é feminino plural por causa de {profetas}.

**Regra 3.** O adjetivo {atributivo} fica ligado ao nome e o {predicativo} fica ligado ao verbo por um {verbo de ligação}: {o velho filho} contra {o filho é estudioso}.

**Regra 4.** O nome {comum} aceita artigo e o {próprio} normalmente não: {o céu} e {os céus} levam artigo, mas {Deus} e {Moisés} dispensam-no.

**Aplicação.** Em {Deus criou os céus e a terra}, o grego (ὁ θεὸς ἐποίησεν τοὺς οὐρανοὺς καὶ τὴν γῆν) traz artigo antes de {céus} e de {terra}, e não antes de {Deus}. O nome próprio dispensou o artigo; os nomes comuns o recebem. E em {os maiores profetas}, o adjetivo {maiores} é feminino plural por concordar com {profetas}: se o nome fosse masculino, viria {os maiores} do mesmo jeito, e é por isso que a concordância nominal se faz sempre com o nome.

**Verificação.** Quatro perguntas montam o sintagma nominal: qual é o **núcleo**, o nome tem **artigo**, o adjetivo é **atributivo** ou **predicativo**, e o nome é **próprio** ou **comum**. Uma quinta decide a concordância: o adjetivo concorda com o **nome**, nunca com o artigo. Em {as{profeitas} maiores}, nome e artigo estão ambos no plural; se discordassem, quem estaria errado é o artigo, não o adjetivo.`),
  vocab: [
    V('substantivo', 'substantivo', 'substantivo'),
    V('artigo definido', 'artigo definido', 'artigo definido'),
    V('artigo indefinido', 'artigo indefinido', 'artigo indefinido'),
    V('adjetivo', 'adjetivo', 'adjetivo'),
    V('gênero', 'gênero', 'gênero'),
    V('número', 'número', 'número'),
    V('concreto', 'concreto', 'concreto'),
    V('abstrato', 'abstrato', 'abstrato'),
    V('os céus', 'os céus', 'artigo com nome no plural'),
    V('maiores', 'maiores', 'adjetivo que concorda com {profetas}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O {substantivo} nomeia e o {adjetivo} caracteriza: em {Deus amou o mundo}, {Deus} e {mundo} são substantivos e {amou} é verbo, sem adjetivo nenhum.',
      ),
    },
    {
      n: '§2',
      text: T(
        'O {artigo definido} {o} individualiza e o {indefinido} {um} apresenta um entre muitos: {o mundo} é o mundo nomeado, {um mundo} é um dos muitos.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O adjetivo {concorda} com o substantivo em gênero e número, e não com o artigo: em {as{profeitas} maiores}, {maiores} é feminino plural por causa de {profetas}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O adjetivo {atributivo} fica ligado ao nome e o {predicativo} fica ligado ao verbo por um {verbo de ligação}: {o velho filho} contra {o filho é estudioso}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O nome {comum} aceita artigo e o {próprio} normalmente não: {o céu} e {os céus} levam artigo, mas {Deus} e {Moisés} dispensam-no.',
      ),
    },
  ],
  notes: [
    {
      label: T('O artigo que o grego traz e o português nem sempre'),
      text: T(
        'O grego antigo usa artigo com quase todo nome definido, inclusive com {θεός} em {ὁ θεός}. O português dispensou o artigo nos nomes próprios, e {Deus} aparece sozinho na maior parte do texto bíblico. Onde o grego escreve {τοῦ θεοῦ} e o português escreve {de Deus}, a preposição está fazendo o trabalho que o artigo fazia.',
      ),
    },
    {
      label: T('Adjetivo que muda de função sem mudar de forma'),
      text: T(
        '{santo} é adjetivo em {o santo de Deus} e substantivo em {as santos obras}. A forma é a mesma; o que muda é a função, e é a preposição ou o artigo que a revela. Por isso a análise se faz do sintagma para a palavra, e não da palavra isolada, que não diz nada.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus criou os céus e a terra.',
      gloss: T(
        'Nome próprio {Deus} sem artigo, substantivos comuns {céus} e {terra} com artigo definido.',
      ),
    },
    {
      text: 'o mundo perdido',
      gloss: T(
        'Artigo definido {o} com substantivo comum {mundo}; o adjetivo {perdido} é atributivo.',
      ),
    },
    {
      text: 'um homem novo',
      gloss: T(
        'Artigo indefinido {um} com substantivo {homem}; {novo} é atributivo e concorda com {homem}.',
      ),
    },
    {
      text: 'a palavra da vida',
      gloss: T(
        'Artigo {a}, substantivo {palavra}, e {da} como a preposição {de} junta ao artigo {a}.',
      ),
    },
    {
      text: 'o Filho do Homem',
      gloss: T(
        'Substantivo {Filho} com nome próprio; {do Homem} traz a preposição {de} exigida por {filho}.',
      ),
    },
    {
      text: 'Deus é bom',
      gloss: T('{Deus} sujeito, {é} verbo de ligação, {bom} predicativo do sujeito.'),
    },
    {
      text: 'o bom pastor',
      gloss: T(
        'Adjetivo {bom} atributivo, ligado ao substantivo sem verbo: {o} determina, {bom} caracteriza.',
      ),
    },
    {
      text: 'os maiores profetas',
      gloss: T('O adjetivo {maiores} está no plural porque concorda com {profetas}, não com {os}.'),
    },
    {
      text: 'o amor de Deus',
      gloss: T('Substantivo abstrato {amor}, que recebe a preposição {de} exigida por ele mesmo.'),
    },
  ],
  tables: [
    {
      caption: T('Artigos: o que cada um faz'),
      head: [T('Artigo'), T('Uso'), T('Exemplo')],
      rows: [
        [T('{o}, {a}'), T('individualiza o nome'), T('{o mundo}, {a palavra}')],
        [T('{um}, {uma}'), T('apresenta um entre muitos'), T('{um mundo}, {um homem}')],
        [T('{este}, {esta}'), T('aponta para o ouvinte'), T('{este mundo}')],
        [T('{esse}, {aquele}'), T('aponta para o que se sabe'), T('{esse mundo}')],
        [T('{todo}, {todos}'), T('generaliza'), T('{todos os homens}')],
      ],
    },
    {
      caption: T('Adjetivo atributivo e predicativo'),
      head: [T('Tipo'), T('Onde está'), T('Como se reconhece'), T('Exemplo')],
      rows: [
        [
          T('atributivo'),
          T('ligado ao substantivo'),
          T('sem verbo de ligação no meio'),
          T('{o velho testamento}'),
        ],
        [
          T('predicativo'),
          T('ligado ao sujeito pelo verbo'),
          T('após verbo de ligação'),
          T('{o testamento é velho}'),
        ],
      ],
    },
    {
      caption: T('Gênero e número dos nomes'),
      head: [T('Tipo'), T('Singular'), T('Plural')],
      rows: [
        [T('masculino regular'), T('{leal}'), T('{leais}')],
        [T('feminino regular'), T('{leal}'), T('{leais}')],
        [T('masculino irregular'), T('{homem}'), T('{homens}')],
        [T('feminino irregular'), T('{mulher}'), T('{mulheres}')],
        [T('nome próprio'), T('{Deus}'), T('sem plural de uso corrente')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {as{profeitas} maiores}, o adjetivo {maiores} é feminino plural porque:'),
    options: [
      T('concorda com o substantivo {profetas}'),
      T('concorda com o artigo {as}'),
      T('é um comparativo e por isso flexiona'),
      T('herda o gênero do verbo da oração'),
    ],
    answer: 0,
    hint: T('A concordância nominal é com o nome, nunca com o determinante.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual palavra é um substantivo próprio?'),
      options: [T('{Moisés}'), T('{pastor}'), T('{leal}'), T('{mansão}')],
      answer: 0,
      hint: T('Nome próprio designa uma pessoa determinada e costuma ir sem artigo.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o adjetivo ao tipo que ele é na frase.'),
      pairs: [
        { a: T('{o velho testamento}'), b: T('atributivo') },
        { a: T('{o testamento é velho}'), b: T('predicativo do sujeito') },
        { a: T('{Deus é fiel}'), b: T('predicativo, com verbo de ligação') },
        { a: T('{as santos obras}'), b: T('substantivo, sem nome próprio') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('Em {um mundo novo}, o artigo ______ apresenta um entre muitos.'),
      answer: 'indefinido',
      hint: T('{um} opõe-se a {o}, que individualiza.'),
    },
  ],
};
