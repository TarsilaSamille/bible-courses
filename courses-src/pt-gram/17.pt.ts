import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('A oração e seus termos'),
  title: T('Análise sintática completa'),
  subtitle: T('Identificação ordenada dos termos'),
  body: C(`**Visão geral.** Primeiro isolam-se {sujeito} e {predicado}; depois examinam-se os demais termos: em {criou Deus os céus}, o verbo {criou} vem antes do sujeito, e a ordem não altera a análise.

**Regra 1.** O {determinante} não é núcleo: em {os céus}, o {os} é artigo e o núcleo é {céus}; o que responde a {o quê?} é o nome, não o artigo.

**Regra 2.** A {preposição exigida} decide entre {objeto indireto}, {complemento nominal} e {adjunto adverbial}: em {falou a Moisés}, quem exige {a} é o verbo {falar}.

**Regra 3.** O {teste do núcleo} separa artigo de objeto: se em {criou os céus} o {os} fosse o objeto, o nome {céus} ficaria sem núcleo e a frase não fecharia.

**Regra 4.** Cinco perguntas fecham a análise: o termo é **exigido** ou **acrescentado**? É **núcleo** ou **determinante**? **Concorda** com outro termo? A **preposição exigida** está presente? E o **sentido** confirma?

**Aplicação.** Em {No princípio criou Deus os céus e a terra}: verbo {criou}, voz ativa, 3.ª pessoa do singular. Sujeito {Deus}, determinado e posposto. Predicado verbal {criou os céus e a terra}. Objetos diretos {os céus} e {a terra}. Adjunto adverbial {no princípio}, de tempo. Perceba que {os} e {a} são determinantes e não objetos, e é essa checagem de núcleo que separa {objeto direto} de {artigo}.

**Verificação.** Antes de dizer que um termo é algo, pergunte cinco vezes: ele é **exigido** ou **acrescentado**? Ele é **núcleo** ou **determinante**? Ele **concorda** com outro termo? A **preposição exigida** está presente? E o **sentido** no contexto confirma? Se qualquer uma das cinco falhar, a classificação está errada.`),
  vocab: [
    V('análise sintática', 'análise sintática', 'identificação ordenada dos termos'),
    V('sujeito', 'sujeito', 'termo que responde a quem'),
    V('predicado', 'predicado', 'o que se declara do sujeito'),
    V('objeto direto', 'objeto direto', 'complemento do verbo sem preposição'),
    V('objeto indireto', 'objeto indireto', 'complemento do verbo com preposição'),
    V('complemento nominal', 'complemento nominal', 'complemento de um nome'),
    V('adjunto', 'adjunto', 'termo que se pode retirar'),
    V('período', 'período', 'sequência completa de orações'),
    V('núcleo', 'núcleo', 'termo que dá sentido ao conjunto'),
    V('os céus', 'os céus', 'artigo mais substantivo, e não objeto'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Primeiro isolam-se {sujeito} e {predicado}; depois examinam-se os demais termos: em {criou Deus os céus}, o verbo {criou} vem antes do sujeito, e a ordem não altera a análise.',
      ),
    },
    {
      n: '§2',
      text: T(
        'O {determinante} não é núcleo: em {os céus}, o {os} é artigo e o núcleo é {céus}; o que responde a {o quê?} é o nome, não o artigo.',
      ),
    },
    {
      n: '§3',
      text: T(
        'A {preposição exigida} decide entre {objeto indireto}, {complemento nominal} e {adjunto adverbial}: em {falou a Moisés}, quem exige {a} é o verbo {falar}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O {teste do núcleo} separa artigo de objeto: se em {criou os céus} o {os} fosse o objeto, o nome {céus} ficaria sem núcleo e a frase não fecharia.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Cinco perguntas fecham a análise: o termo é **exigido** ou **acrescentado**? É **núcleo** ou **determinante**? **Concorda** com outro termo? A **preposição exigida** está presente? E o **sentido** confirma?',
      ),
    },
  ],
  notes: [
    {
      label: T('A ordem grega que não muda a análise'),
      text: T(
        'Em {No princípio criou Deus os céus e a terra}, a ordem grega (ὁ θεὸς ἐποίησεν τοὺς οὐρανοὺς) traz o sujeito depois do verbo e o adjunto no início, ao contrário do português atual. A análise é a mesma nos dois casos: o que muda é a posição, e é a posição que produz o erro do leitor ingênuo, não a estrutura.',
      ),
    },
    {
      label: T('Por que o teste do núcleo funciona'),
      text: T(
        'Todo sintagma tem um núcleo, e é o núcleo que responde à pergunta de conteúdo. Em {os céus}, {os} é determinante e {céus} é núcleo. Se o {os} fosse objeto direto, sobraria {céus} solto, e um nome solto não completa verbo nenhum. É por isso que o teste decide em uma linha o que a gramática demora três parágrafos a explicar.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio criou Deus os céus e a terra.',
      gloss: T(
        'Sujeito {Deus} posposto; predicado verbal; dois objetos diretos; um adjunto de tempo.',
      ),
    },
    {
      text: 'Deus criou os céus e a terra.',
      gloss: T('A mesma frase na ordem portuguesa: a análise não muda.'),
    },
    {
      text: 'os sinais que o Senhor deu',
      gloss: T('{que o Senhor deu} é adjetiva restritiva de {sinais}; o {os} é artigo.'),
    },
    {
      text: 'o amor de Deus pelo mundo',
      gloss: T('Dois complementos nominais: {de Deus} completa {amor} e {pelo mundo} também.'),
    },
    {
      text: 'falou a Moisés e a Arão',
      gloss: T('Dois objetos indiretos regidos pela preposição {a} que o verbo exige.'),
    },
    {
      text: 'a palavra que é vida',
      gloss: T('A oração adjetiva é o {predicativo} de {palavra}, via verbo {é}.'),
    },
    {
      text: 'Jesus chorou no Getsêmani',
      gloss: T('{no Getsêmani} é adjunto adverbial de lugar, e sai da frase sem quebrá-la.'),
    },
    {
      text: 'o mundo foi criado por Deus',
      gloss: T('{o mundo} é sujeito paciente e {por Deus} é o agente da passiva.'),
    },
    {
      text: 'τῷ θεῷ δόξα',
      gloss: T('No grego, {δόξα} é verbo e {τῷ θεῷ} o objeto indireto: o caso decide.'),
    },
  ],
  tables: [
    {
      caption: T('As cinco perguntas da análise'),
      head: [T('Pergunta'), T('Se {sim}'), T('Se {não}'), T('O que foi decidido')],
      rows: [
        [T('é exigido ou acrescentado?'), T('integrante'), T('acessório'), T('a espécie do termo')],
        [
          T('é núcleo ou determinante?'),
          T('núcleo'),
          T('determinante'),
          T('a estrutura do sintagma'),
        ],
        [T('concorda com outro termo?'), T('concordante'), T('invariável'), T('gênero e número')],
        [
          T('a preposição exigida está presente?'),
          T('integrante com preposição'),
          T('sem regência'),
          T('objeto ou complemento'),
        ],
        [
          T('o sentido no contexto confirma?'),
          T('confirmado'),
          T('rever a classificação'),
          T('a leitura final'),
        ],
      ],
    },
    {
      caption: T('Como o verbo dá os termos'),
      head: [T('Transitividade do verbo'), T('Termos que ele exige'), T('Exemplo'), T('Pergunta')],
      rows: [
        [T('{intransitivo}'), T('nenhum objeto'), T('{Jesus chorou}'), T('{chorou o quê?}')],
        [T('{transitivo direto}'), T('objeto direto'), T('{criou os céus}'), T('{criou o quê?}')],
        [
          T('{transitivo indireto}'),
          T('objeto indireto'),
          T('{falou a Moisés}'),
          T('{falou a quem?}'),
        ],
        [
          T('{bitransitivo}'),
          T('dois objetos'),
          T('{deu o livro ao amigo}'),
          T('{deu o quê? a quem?}'),
        ],
        [T('{auxiliar}'), T('nenhum, faz tempo'), T('{havia criado}'), T('{havia era o quê?}')],
        [T('{de ligação}'), T('predicativo'), T('{Deus é bom}'), T('{é, o quê?}')],
      ],
    },
    {
      caption: T('Sintagma, núcleo e determinante'),
      head: [T('Sintagma'), T('Núcleo'), T('Determinante'), T('Concordância')],
      rows: [
        [T('{os céus}'), T('{céus}'), T('{os}'), T('o artigo segue o nome')],
        [T('{as maiores profetas}'), T('{profetas}'), T('{as}'), T('o adjetivo segue o nome')],
        [T('{um homem novo}'), T('{homem}'), T('{um}'), T('o numeral segue o nome')],
        [T('{do Senhor}'), T('{Senhor}'), T('{do}'), T('a preposição não concorda')],
        [T('{muito bom}'), T('{bom}'), T('{muito}'), T('o advérbio não concorda')],
        [T('{em Jerusalém}'), T('{Jerusalém}'), T('{em}'), T('o nome próprio não flexiona')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {criou Deus os céus}, por que {os} não é objeto direto?'),
    options: [
      T('porque {os} é determinante, e o núcleo do sintagma é {céus}'),
      T('porque {os} é verbo e {céus} é o sujeito'),
      T('porque o verbo {criou} é intransitivo'),
      T('porque {os} é artigo e artigo nunca é objeto'),
    ],
    answer: 0,
    hint: T('Pergunte qual é o núcleo do sintagma: quem responde a {o quê?} é o núcleo.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {a palavra que é vida}, a oração {que é vida} é:'),
      options: [
        T('predicativo do sujeito, ligado pelo verbo {é}'),
        T('objeto direto de {palavra}'),
        T('adjunto adnominal de {palavra}'),
        T('complemento nominal de {vida}'),
      ],
      answer: 0,
      hint: T('O verbo {é} liga, e o que vem depois dele é o que se declara.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o termo à sua espécie.'),
      pairs: [
        { a: T('{Deus}'), b: T('sujeito') },
        { a: T('{os céus}'), b: T('objeto direto') },
        { a: T('{no princípio}'), b: T('adjunto adverbial') },
        { a: T('{por Deus}'), b: T('agente da passiva') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('Todo sintagma tem um ______, e é ele que responde à pergunta de conteúdo.'),
      answer: 'núcleo',
      hint: T('Em {os céus}, o núcleo é {céus}.'),
    },
  ],
};
