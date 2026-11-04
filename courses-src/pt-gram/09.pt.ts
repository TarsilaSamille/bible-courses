import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  section: T('A flexão da palavra e a concordância'),
  title: T('Regência'),
  subtitle: T('Dependência verbal e nominal'),
  body: C(`**Visão geral.** A regência verbal é a relação entre o verbo e o termo que ele completa: em {crer em Deus}, a preposição {em} é exigida por {crer}, e sem ela a frase não está pronta.

**Regra 1.** A regência nominal vem do verbo de origem: em {necessidade de amar}, o substantivo {necessidade} vem de {necessitar}, que exige {de}, e a preposição é dele.

**Regra 2.** A preposição exigida integra o termo: em {falei a Moisés}, {a} fica colada a {falar}, e o conjunto {a Moisés} é que é objeto indireto.

**Regra 3.** A regência sem preposição existe: em {assistiu à missa} e em {assistiu o jogo}, o verbo {assistir} muda de regência conforme o sentido.

**Regra 4.** A regência é a chave mais difícil da tradução, porque o grego marca por caso e o português por preposição: {ὁ λόγος τοῦ θεοῦ} é {a palavra de Deus}.

**Aplicação.** Em {a palavra de Deus}, o substantivo {palavra} é regido pela preposição {de}, e a linha grega (ὁ λόγος τοῦ θεοῦ) traz {τοῦ} no **genitivo**: o grego diz qual é a relação por caso, e o português diz por preposição. Em {falei a Moisés}, por outro lado, a preposição {a} é do verbo {falar}, e não do substantivo. São dois lugares diferentes para a mesma preposição, e é por isso que a regência é a chave mais difícil da tradução.

**Verificação.** Faça três perguntas. O **regente** é verbo, nome ou adjetivo? Ele tem **mais de uma** regência possível? E a preposição **mudaria** o sentido? Se a preposição não for óbvia, procure o **verbo de origem** do substantivo: em {necessidade}, o verbo é {necessitar}, e a preposição é a dele. E atenção ao **dativo sem marca**, em que o grego usa caso e o português às vezes não usa preposição nenhuma.`),
  vocab: [
    V('regência verbal', 'regência verbal', 'relação entre verbo e termo'),
    V('regência nominal', 'regência nominal', 'relação entre nome e termo'),
    V('transitivo direto', 'transitivo direto', 'verbo com objeto direto'),
    V('transitivo indireto', 'transitivo indireto', 'verbo com objeto indireto'),
    V('intransitivo', 'intransitivo', 'verbo sem objeto'),
    V('necessidade', 'necessidade', 'nome que vem de {necessitar}'),
    V('obedecer', 'obedecer', 'exige {a}'),
    V('crer', 'crer', 'exige {em}'),
    V('gostar', 'gostar', 'exige {de}'),
    V('assistir', 'assistir', 'exige {a} num sentido e nada no outro'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'A regência verbal é a relação entre o verbo e o termo que ele completa: em {crer em Deus}, a preposição {em} é exigida por {crer}, e sem ela a frase não está pronta.',
      ),
    },
    {
      n: '§2',
      text: T(
        'A regência nominal vem do verbo de origem: em {necessidade de amar}, o substantivo {necessidade} vem de {necessitar}, que exige {de}, e a preposição é dele.',
      ),
    },
    {
      n: '§3',
      text: T(
        'A preposição exigida integra o termo: em {falei a Moisés}, {a} fica colada a {falar}, e o conjunto {a Moisés} é que é objeto indireto.',
      ),
    },
    {
      n: '§4',
      text: T(
        'A regência sem preposição existe: em {assistiu à missa} e em {assistiu o jogo}, o verbo {assistir} muda de regência conforme o sentido.',
      ),
    },
    {
      n: '§5',
      text: T(
        'A regência é a chave mais difícil da tradução, porque o grego marca por caso e o português por preposição: {ὁ λόγος τοῦ θεοῦ} é {a palavra de Deus}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O caso grego que vira preposição'),
      text: T(
        'O genitivo grego tem uma carta de valores que o português distribui entre {de}, {do}, {para} e a ausência de preposição. Onde o grego escreve {τοῦ θεοῦ}, o português pode escrever {de Deus} ou {do Senhor}. A informação é a mesma; o que muda é o meio, e é por isso que a tradução palavra a palavra falha justamente aqui.',
      ),
    },
    {
      label: T('Verbo que muda de regência com o mesmo sentido'),
      text: T(
        '{Assistir} significa ver e significa estar presente, e os dois regimes são diferentes: {assistiu o jogo} e {assistiu à missa}. O que desempata é o sentido, não a forma. É por isso que um dicionário que só dá a preposição sem o sentido ensina a errar.',
      ),
    },
  ],
  examples: [
    { text: 'crer em Deus', gloss: T('{crer} exige a preposição {em}: {crer Deus} está errado.') },
    {
      text: 'obedecer ao pai',
      gloss: T('{obedecer} exige {a}; com pronome, vira {obedecer-lhe} sem preposição.'),
    },
    { text: 'gostar da música', gloss: T('{gostar} exige {de}, e o {a} do artigo fecha a crase.') },
    {
      text: 'a necessidade de amar',
      gloss: T('{necessidade} vem de {necessitar} e exige {de}: é regência nominal.'),
    },
    {
      text: 'a palavra de Deus',
      gloss: T('{palavra} exige {de}; no grego, {τοῦ θεοῦ} marca a mesma relação por genitivo.'),
    },
    {
      text: 'falei a Moisés',
      gloss: T('{a} é exigida pelo verbo {falar}, e {Moisés} é objeto indireto.'),
    },
    { text: 'assistiu à missa', gloss: T('Sentido de estar presente: {assistir} exige {a}.') },
    { text: 'assistiu o jogo', gloss: T('Sentido de ver: o mesmo verbo dispensa preposição.') },
    {
      text: 'confiou nele',
      gloss: T('{confiar} exige {em}, e o pronome {lhe} dispensa a preposição.'),
    },
  ],
  tables: [
    {
      caption: T('Preposições exigidas por verbos'),
      head: [T('Verbo'), T('Exige'), T('Não admite'), T('Exemplo')],
      rows: [
        [T('{crer}'), T('{em}'), T('{crer Deus}'), T('{crer em Deus}')],
        [T('{obedecer}'), T('{a}'), T('{obedecer o pai}'), T('{obedecer ao pai}')],
        [T('{gostar}'), T('{de}'), T('{gostar música}'), T('{gostar da música}')],
        [T('{aspirar}'), T('{a}'), T('{aspirar o céu}'), T('{aspirar ao céu}')],
        [T('{depender}'), T('{de}'), T('{depender alguém}'), T('{depender de alguém}')],
        [T('{confiar}'), T('{em}'), T('{confiar nele}'), T('{confiar em ele}')],
        [T('{lembrar}'), T('{de}'), T('{lembrar aquilo}'), T('{lembrar-se daquilo}')],
        [
          T('{assistir}'),
          T('{a} ou nada'),
          T('o sentido decide'),
          T('{assistir à missa}, {assistir o jogo}'),
        ],
      ],
    },
    {
      caption: T('Regência nominal: do nome ao verbo'),
      head: [T('Nome'), T('Verbo de origem'), T('Exige'), T('Exemplo')],
      rows: [
        [T('{necessidade}'), T('{necessitar}'), T('{de}'), T('{a necessidade de amar}')],
        [T('{amor}'), T('{amar}'), T('{a}'), T('{o amor a Deus}')],
        [T('{amigo}'), T('{amar}'), T('{de}'), T('{amigo de Deus}')],
        [T('{fiel}'), T('{crer}'), T('{a}'), T('{fiel a Deus}')],
        [T('{necessidade}'), T('{necessitar}'), T('{de}'), T('{a necessidade de vir}')],
        [T('{simpatia}'), T('{simpatizar}'), T('{por}'), T('{simpatia por ele}')],
        [T('{obrigação}'), T('{obrigar}'), T('{de}'), T('{a obrigação de vir}')],
        [T('{necessidade}'), T('{necessitar}'), T('{de}'), T('{necessidade de descanso}')],
      ],
    },
    {
      caption: T('Regência verbal e nominal lado a lado'),
      head: [T('Verbo'), T('Nome derivado'), T('Preposição em comum')],
      rows: [
        [T('{crer em}'), T('{confiança em}'), T('{em}')],
        [T('{obedecer a}'), T('{obediência a}'), T('{a}')],
        [T('{gostar de}'), T('{gosto por}'), T('{de} muda para {por}')],
        [T('{amar a}'), T('{amor a}'), T('{a}')],
        [T('{depender de}'), T('{dependência de}'), T('{de}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase tem regência correta?'),
    options: [T('crer em Deus'), T('crer Deus'), T('obedecer o pai'), T('gostar a música')],
    answer: 0,
    hint: T('{crer} exige {em}; as outras três trocaram a preposição.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {a necessidade de amar}, a preposição {de} foi exigida por:'),
      options: [
        T('o substantivo {necessidade}'),
        T('o verbo {amar}'),
        T('o substantivo {amor}'),
        T('o artigo {a}'),
      ],
      answer: 0,
      hint: T('{necessidade} vem do verbo {necessitar}, e é dele que vem a preposição.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo à preposição que ele exige.'),
      pairs: [
        { a: T('{crer}'), b: T('{em}') },
        { a: T('{obedecer}'), b: T('{a}') },
        { a: T('{gostar}'), b: T('{de}') },
        { a: T('{aspirar}'), b: T('{a}') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('undefined'),
      answer: 'nome',
      hint: T('Em {o amor de Deus}, o nome {amor} é o regente.'),
    },
  ],
};
