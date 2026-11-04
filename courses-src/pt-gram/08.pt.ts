import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  section: T('A flexão da palavra e a concordância'),
  title: T('Concordância'),
  subtitle: T('Nominal, verbal e com sujeito indeterminado'),
  body: C(`**Visão geral.** O verbo concorda em pessoa e número com o sujeito: em {Deus amou}, {amou} é 3.ª do singular; em {Deus e a sua palavra amaram}, o verbo vai ao plural.

**Regra 1.** A concordância nominal é com o substantivo, nunca com o artigo: em {as{profeitas} maiores}, {maiores} é feminino plural por causa de {profetas}.

**Regra 2.** Com sujeito indeterminado o verbo fica na 3.ª do singular: em {se diz que a torre caiu}, a forma {diz} não diz quem diz.

**Regra 3.** O sujeito posposto não muda a concordância: em {os discípulos o enviaram}, o pronome {o} é objeto direto e o verbo {enviaram} é plural por causa de {os discípulos}.

**Regra 4.** Verbo de ligação e de predicação concordam com o sujeito: em {A palavra é o maior dom}, o {maior} é masculino singular por concordar com {dom}.

**Aplicação.** Em {Jesus amou os seus amigos}, o sujeito é {Jesus}, o verbo {amou} está na 3.ª pessoa do singular e {os} é artigo definido: o verbo concorda só com o sujeito. Em {os discípulos o enviaram}, o sujeito é composto ({os discípulos}), o verbo vai para a 3.ª do plural ({enviaram}), e {o} é objeto direto posposto. O pronome {o} não determina o número do verbo, e é esse o ponto em que a maioria erra.

**Verificação.** Para o verbo, três perguntas bastam: qual é o **sujeito** e é singular ou plural? Se for composto, a coordenação é {e} ou {nem}? E é **indeterminado**? Com as três respostas o verbo está decidido. Para o adjetivo, uma só: com quem ele concorda? Sempre com o **nome**, e nunca com o artigo nem com o verbo.`),
  vocab: [
    V('concordância nominal', 'concordância nominal', 'entre artigo, adjetivo e nome'),
    V('concordância verbal', 'concordância verbal', 'entre verbo e sujeito'),
    V('singular', 'singular', 'número de um'),
    V('plural', 'plural', 'número de mais de um'),
    V('primeira pessoa', 'primeira pessoa', 'quem fala'),
    V('terceira pessoa', 'terceira pessoa', 'quem não é o que fala'),
    V('sujeito composto', 'sujeito composto', 'dois ou mais núcleos'),
    V('sujeito indeterminado', 'sujeito indeterminado', 'presente mas não identificado'),
    V('enviaram', 'enviaram', 'plural por causa de {os discípulos}'),
    V('maiores', 'maiores', 'feminino plural por {profetas}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O verbo concorda em pessoa e número com o sujeito: em {Deus amou}, {amou} é 3.ª do singular; em {Deus e a sua palavra amaram}, o verbo vai ao plural.',
      ),
    },
    {
      n: '§2',
      text: T(
        'A concordância nominal é com o substantivo, nunca com o artigo: em {as{profeitas} maiores}, {maiores} é feminino plural por causa de {profetas}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Com sujeito indeterminado o verbo fica na 3.ª do singular: em {se diz que a torre caiu}, a forma {diz} não diz quem diz.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O sujeito posposto não muda a concordância: em {os discípulos o enviaram}, o pronome {o} é objeto direto e o verbo {enviaram} é plural por causa de {os discípulos}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Verbo de ligação e de predicação concordam com o sujeito: em {A palavra é o maior dom}, o {maior} é masculino singular por concordar com {dom}.',
      ),
    },
  ],
  notes: [
    {
      label: T('A concordância grega é mais informativa'),
      text: T(
        'O grego antigo distingue o número do sujeito com mais rigor que o português: {πάντες} εἶδαν diz que o sujeito era plural e {εἶδον} é a forma genérica. Onde o português aceita {viram} para um e para muitos, o grego obriga a distinguir. Quem traduz do grego está, sem querer, decidido sobre o número que o português deixa aberto.',
      ),
    },
    {
      label: T('Concordância que se faz longe'),
      text: T(
        'Em {os discípulos do SENHOR saíram da cidade}, o sujeito é {os discípulos} e o verbo {saíram} está longe, separado por {do SENHOR}. O que concorda é o sujeito, e ele está no começo; o verbo é que está longe. A distância não é argumento: o que decide é a que termo o verbo pertence.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus amou o mundo.',
      gloss: T(
        'Sujeito {Deus} singular, verbo {amou} na 3.ª do singular: a concordância é direta.',
      ),
    },
    {
      text: 'Deus e a sua palavra amaram o mundo.',
      gloss: T('Sujeito composto: o verbo {amaram} vai ao plural por causa dos dois núcleos.'),
    },
    {
      text: 'os discípulos o enviaram',
      gloss: T('O pronome {o} é objeto direto e não afeta o plural de {enviaram}.'),
    },
    {
      text: 'se diz que a torre caiu',
      gloss: T('Sujeito indeterminado: {diz} fica na 3.ª do singular mesmo havendo {se}.'),
    },
    {
      text: 'as maiores profetas',
      gloss: T('{maiores} é feminino plural por concordar com {profetas}, não com {as}.'),
    },
    {
      text: 'o maior dos mandamentos',
      gloss: T('{maior} é masculino singular: a genitiva {dos mandamentos} não muda o gênero.'),
    },
    {
      text: 'a palavra é o maior dom',
      gloss: T('O predicativo {o maior dom} concorda com {A palavra}: {maior} é feminino.'),
    },
    {
      text: 'havia muitas pessoas na cidade',
      gloss: T('{havia} é impessoal e fica na 3.ª do singular, mesmo com {muitas pessoas}.'),
    },
    {
      text: ' Jesus amou os seus amigos',
      gloss: T(
        'Sujeito {Jesus} posposto, verbo na 3.ª do singular: a posição não muda a concordância.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Concordância verbal por espécie de sujeito'),
      head: [T('Sujeito'), T('Verbo'), T('Exemplo')],
      rows: [
        [T('{Deus}'), T('3.ª do singular'), T('{Deus amou}')],
        [T('{Deus e a sua palavra}'), T('3.ª do plural'), T('{Deus e a sua palavra amaram}')],
        [T('{os discípulos}'), T('plural, mesmo posposto'), T('{os discípulos saíram}')],
        [T('{ninguém}'), T('3.ª do singular'), T('{ninguém viu}')],
        [T('{se diz que}'), T('3.ª do singular'), T('{se diz que veio}')],
        [T('{É necessário}'), T('3.ª do singular'), T('{É necessário vir}')],
        [T('{o povo}'), T('3.ª do singular'), T('{o povo ficou}')],
      ],
    },
    {
      caption: T('Concordância nominal: com quem o nome concorda'),
      head: [T('Palavra'), T('Com quem concorda'), T('Exemplo')],
      rows: [
        [T('artigo'), T('com o substantivo'), T('{os} em {os livros}')],
        [T('adjetivo'), T('com o substantivo'), T('{antigos} em {os livros antigos}')],
        [T('numeral'), T('com o substantivo'), T('{dois} em {dois livros}')],
        [T('pronome'), T('com o substantivo'), T('{meus} em {meus livros}')],
        [T('artigo'), T('nunca com o adjetivo'), T('{os} nunca vira {as} por causa de {antigas}')],
      ],
    },
    {
      caption: T('Número do verbo na pessoa do sujeito'),
      head: [T('Pessoa'), T('Singular'), T('Plural')],
      rows: [
        [T('1.ª'), T('{amo}'), T('{amamos}')],
        [T('2.ª'), T('{amas}'), T('{amais}')],
        [T('3.ª'), T('{ama}'), T('{amam}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {os discípulos o enviaram}, o verbo {enviaram} está no plural porque:'),
    options: [
      T('o sujeito é {os discípulos}, e o pronome {o} não conta'),
      T('o objeto {o} vem antes do verbo'),
      T('o verbo está depois do sujeito posposto'),
      T('há dois termos nominais na frase'),
    ],
    answer: 0,
    hint: T('O {o} é objeto direto: tire-o e o verbo continua plural.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {se diz que a torre caiu}, o sujeito é:'),
      options: [
        T('indeterminado, e o verbo fica na 3.ª do singular'),
        T('composto, porque há {se} e {que}'),
        T('oculto, porque o verbo {disse} traz a pessoa'),
        T('inexistente, porque não há verbo de ação'),
      ],
      answer: 0,
      hint: T('A forma {diz} não diz quem diz, e é por isso que o sujeito é indeterminado.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a palavra ao termo com que ela concorda.'),
      pairs: [
        { a: T('{maiores} em {as{profeitas} maiores}'), b: T('com o substantivo {profetas}') },
        { a: T('{amou} em {Deus amou}'), b: T('com o sujeito {Deus}') },
        { a: T('{amaram} em {Deus e a sua palavra amaram}'), b: T('com sujeito composto') },
        { a: T('{maior} em {o maior dos mandamentos}'), b: T('com o substantivo {mandamento}') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('O verbo concorda com o ______, e nunca com o objeto direto.'),
      answer: 'sujeito',
      hint: T('Em {os discípulos o enviaram}, o sujeito são {os discípulos}.'),
    },
  ],
};
