import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('A regência, a crase e a colocação pronominal'),
  title: T('Regência em detalhe'),
  subtitle: T('Preposições exigidas por verbos e nomes'),
  body: C(`**Visão geral.** Cada verbo tem sua preposição, e ela não se negocia: {crer em}, {obedecer a}, {gostar de}, {depender de}, {aspirar a}, {lembrar de}, {assistir a}.

**Regra 1.** A mesma palavra pode mudar de regência conforme o sentido: {assistiu o jogo} (ver) e {assistiu à missa} (estar presente), e o que desempata é o sentido.

**Regra 2.** A regência nominal segue o verbo de origem: {necessidade} vem de {necessitar} e exige {de}, {amor} vem de {amar} e exige {a}, {amigo} também vem de {amar} e exige {de}.

**Regra 3.** O {dativo} sem preposição é a regra em {falar a alguém}, e o português dispensa a preposição onde o grego marca o caso.

**Regra 4.** Com pronome oblíquo a preposição desaparece: {falei-lhe} em vez de {falei a ele}, e {crer nele} em vez de {crer em ele}.

**Aplicação.** Em {a necessidade de amar}, a preposição {de} é exigida pelo substantivo {necessidade}, que vem do verbo {necessitar}, e que exige {de}. O grego ({ἀνάγκη} com genitivo) marca a relação por caso, e é por isso que a estrutura {necessidade de + infinitivo} em português esconde um **infinitivo** que o grego governava por genitivo: {ἀνάγκη τοῦ ἀγαπᾶν}.

**Verificação.** Para cada termo regido, pergunte três coisas: o **regente** é verbo, nome ou adjetivo? Ele tem **mais de uma** regência possível? E a preposição **mudaria** o sentido? Se a preposição não for óbvia, procure o **verbo de origem** do substantivo. E atenção ao **dativo sem marca**, em que o grego usa caso e o português às vezes não usa preposição nenhuma, e é por isso que a tradução precisa decidir.`),
  vocab: [
    V('crer', 'crer', 'exige {em}'),
    V('obedecer', 'obedecer', 'exige {a}'),
    V('gostar', 'gostar', 'exige {de}'),
    V('aspirar', 'aspirar', 'exige {a}'),
    V('depender', 'depender', 'exige {de}'),
    V('amigo de', 'amigo de', 'regência nominal de {amar}'),
    V('fiel a', 'fiel a', 'regência nominal de {crer}'),
    V('referir-se a', 'referir-se a', 'verbo pronominal com regência'),
    V('necessidade', 'necessidade', 'vem de {necessitar}'),
    V('ἀνάγκη τοῦ ἀγαπᾶν', 'ἀνάγκη τοῦ ἀγαπᾶν', 'genitivo grego governando um infinitivo'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Cada verbo tem sua preposição, e ela não se negocia: {crer em}, {obedecer a}, {gostar de}, {depender de}, {aspirar a}, {lembrar de}, {assistir a}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'A mesma palavra pode mudar de regência conforme o sentido: {assistiu o jogo} (ver) e {assistiu à missa} (estar presente), e o que desempata é o sentido.',
      ),
    },
    {
      n: '§3',
      text: T(
        'A regência nominal segue o verbo de origem: {necessidade} vem de {necessitar} e exige {de}, {amor} vem de {amar} e exige {a}, {amigo} também vem de {amar} e exige {de}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O {dativo} sem preposição é a regra em {falar a alguém}, e o português dispensa a preposição onde o grego marca o caso.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Com pronome oblíquo a preposição desaparece: {falei-lhe} em vez de {falei a ele}, e {crer nele} em vez de {crer em ele}.',
      ),
    },
  ],
  notes: [
    {
      label: T('A regência que muda com a tradução'),
      text: T(
        'Em {E vos falando, assim, Senhor}, o grego {εἶπεν} traz um verbo simples e o português introduz um infinitivo, o que muda o grau da oração. Onde o grego usa um particípio, o português costuma escrever uma oração inteira, e cada uma dessas expansões acrescenta um verbo que não estava no original. A contagem de verbos do período muda, e é por isso que a tradução precisa ser contada.',
      ),
    },
    {
      label: T('O verbo que muda de preposição sem mudar de sentido'),
      text: T(
        'Em {depender de}, {insistir em} e {confiar em}, a preposição vem do latim e nem sempre sobrevive. O português antigo usava {confiar}; o atual usa {confiar em} e também {confiar no}, em que o {no} é {em} mais o artigo {o}. É por isso que a crase aparece exatamente onde a preposição termina em {a}: {depender da}, {confiar na}.',
      ),
    },
  ],
  examples: [
    {
      text: 'creio em Deus',
      gloss: T('{crer} exige {em}; sem a preposição, a frase está errada.'),
    },
    {
      text: 'obedeceu ao pai',
      gloss: T('{obedecer} exige {a}, e o {o} é o artigo que fecha a crase.'),
    },
    { text: 'gostou da música', gloss: T('{gostar} exige {de}, que com o artigo {a} dá {da}.') },
    {
      text: 'a necessidade de dormir',
      gloss: T('Regência nominal: {necessidade} vem de {necessitar} e exige {de}.'),
    },
    {
      text: 'o amor de Deus',
      gloss: T('Regência nominal com {a}: {amor} vem de {amar} e a preposição é {a}.'),
    },
    {
      text: 'falei-lhe',
      gloss: T('Com pronome oblíquo, a preposição {a} desaparece e fica o {lhe}.'),
    },
    { text: 'assistiu ao jogo', gloss: T('Sentido de presenciar: {assistir} exige {a}.') },
    { text: 'assistiu o jogo', gloss: T('Sentido de ver: o mesmo verbo dispensa a preposição.') },
    {
      text: 'ἀνάγκη τοῦ ἀγαπᾶν',
      gloss: T(
        'O genitivo grego governa o infinitivo, e o português traduz por {de} mais o infinitivo.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Preposições exigidas por verbos'),
      head: [T('Verbo'), T('Exige'), T('Não admite'), T('Exemplo')],
      rows: [
        [T('{crer}'), T('{em}'), T('{crer Deus}'), T('{creio em Deus}')],
        [T('{obedecer}'), T('{a}'), T('{obedecer o pai}'), T('{obedeceu ao pai}')],
        [T('{gostar}'), T('{de}'), T('{gostar música}'), T('{gostou da música}')],
        [T('{aspirar}'), T('{a}'), T('{aspirar o céu}'), T('{aspirou ao céu}')],
        [T('{depender}'), T('{de}'), T('{depender alguém}'), T('{depende de alguém}')],
        [T('{confiar}'), T('{em}'), T('{confiar nele}'), T('{confia nele}')],
        [T('{lembrar}'), T('{de}'), T('{lembrar aquilo}'), T('{lembra-se daquilo}')],
        [T('{assistir}'), T('{a} ou nada'), T('o sentido decide'), T('{assistiu à missa}')],
        [T('{proceder}'), T('{de}'), T('{proceder Deus}'), T('{procede de Deus}')],
        [T('{informar}'), T('{sobre}'), T('{informar o caso}'), T('{informou sobre o caso}')],
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
        [T('{simpatia}'), T('{simpatizar}'), T('{por}'), T('{simpatia por ele}')],
        [T('{obrigação}'), T('{obrigar}'), T('{de}'), T('{a obrigação de vir}')],
        [T('{confiança}'), T('{confiar}'), T('{em}'), T('{confiança em Deus}')],
        [T('{dependência}'), T('{depender}'), T('{de}'), T('{a dependência da ajuda}')],
      ],
    },
    {
      caption: T('Verbal e nominal lado a lado'),
      head: [T('Verbo'), T('Nome derivado'), T('Preposição'), T('Observação')],
      rows: [
        [T('{crer em}'), T('{confiança em}'), T('{em}'), T('a preposição não muda')],
        [T('{obedecer a}'), T('{obediência a}'), T('{a}'), T('o grego usa dativo')],
        [T('{gostar de}'), T('{gosto por}'), T('{de} vira {por}'), T('o nome troca a preposição')],
        [T('{amar a}'), T('{amor a}'), T('{a}'), T('o nome mantém a preposição')],
        [T('{depender de}'), T('{dependência de}'), T('{de}'), T('o nome mantém a preposição')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase tem a regência nominal correta?'),
    options: [
      T('a necessidade de descansar'),
      T('a necessidade para descansar'),
      T('o amor com Deus'),
      T('a {necessidade} de Deus'),
    ],
    answer: 0,
    hint: T('{necessidade} vem de {necessitar}, e {necessitar} exige {de}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Entre {assistiu à missa} e {assistiu o jogo}, o que muda é:'),
      options: [
        T('o sentido do verbo, e com ele a regência'),
        T('o número do sujeito, que força a preposição'),
        T('a pessoa do verbo, que muda a preposição'),
        T('o modo verbal, que decide a preposição'),
      ],
      answer: 0,
      hint: T('Um dicionário que dá só a preposição ensina a errar.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo à preposição que ele exige.'),
      pairs: [
        { a: T('{crer}'), b: T('{em}') },
        { a: T('{obedecer}'), b: T('{a}') },
        { a: T('{gostar}'), b: T('{de}') },
        { a: T('{lembrar}'), b: T('{de}') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('A regência nominal herda a preposição do ______ de origem do substantivo.'),
      answer: 'verbo',
      hint: T('{necessidade} vem de {necessitar}.'),
    },
  ],
};
