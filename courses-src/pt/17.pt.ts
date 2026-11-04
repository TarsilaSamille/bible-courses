import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  section: T('Os pronomes'),
  title: T('Pronomes: o sistema inteiro'),
  subtitle: T('meu, teu, seu, este, aquele, algum, e o duplo sistema'),
  body: C(`## Os pessoais e a partícula que virou pronome

Os pronomes pessoais se dividem em tônicos e átonos. Os tônicos são {eu}, {tu}, {ele/ela}, {nós}, {vós}, {eles/elas}, e eles existem sozinhos, com sentido pleno. Os átonos são {me}, {te}, {o/a}, {se}, {nos}, {vos}, {lhe/lhes}, e eles não existem sozinhos: só entram grudados ao verbo.

A cliticização é o que produziu essa divisão. Em português antigo, {dar-vo-lo} queria dizer «dar a você o livro»: o pronome era uma peça autônoma, e o verbo vinha por último. O mesmo processo que o latim fez com {mihi} e {tibi}. O processo é antigo, e as reformas ortográficas do século XX não o inventaram: o que era pronome virou partícula no português padrão, e em Portugal e no Brasil o pronome sozinho deixou de existir.

## Os possessivos e o partido entre teu e seu

O possessivo entra antes do substantivo e concorda com o dono, não com a coisa: {meu livro}, {minha casa}, {meus livros}, {minhas casas}. Depois do substantivo só entram {dele}, {dela}, {deles}, {delas}, e nessa posição o possessivo já é um pronome: {o livro dele}.

O {teu} e o {seu} continuam sendo pronomes completos, e por isso têm duas formas: {o teu} e {a tua}, {o meu} e {a minha}. O {seu} é o mais ambíguo: em {o seu pai} pode ser o pai de quem fala ou o pai de quem ouve. Em frase com {tu} o {seu} tende a ser de quem fala; em frase com {você} tende a ser de quem ouve, e a ambiguidade é resolvida pelo contexto, não pela forma.

## Os demonstrativos: um sistema de três distâncias

O português tem demonstrativos para três posições, e é isso que o distingue do espanhol. {Este} é o que está junto de quem fala, {esse} é o que está longe de quem fala, e {aquele} é o que está longe de quem ouve. O espanhol resolve com dois, {este} e {ese}, e tem de recorrer a {aquel} para o longe de quem ouve.

A mesma lógica vale para os substantivos demonstrativos: {isto}, {isso}, {aquilo}. E vale para o tempo: {nesta semana} é a semana de quem fala, {nessa semana} é a semana de quem ouve, {naquela semana} é a semana de um terceiro.

## Indefinidos e relativos

Os indefinidos dizem quantidade ou qualidade sem identificar: {algum}, {nenhum}, {todo}, {cada}, {qual}, {outro}, {tudo}. {Algum} nega por negação ({algum dia}), {nenhum} é o {algum} negado por completo, e {todo} vai antes do substantivo ou depois, com efeito diferente: {todo homem} diz que todos os homens têm a propriedade; {o homem todo} diz que o homem inteiro a tem.

Os relativos abrem a subordinada e valem por um nome anterior: {que}, {qual}, {cujo}, {quem}, {onde}, {quando}, {como}. {Que} é o mais comum e vale para pessoa e para coisa; {quem} só para pessoa; {cujo} liga um nome a um possuidor, e por isso concorda com o dono ({cujo pai}, {cujo nome}).

## O que ler

Em João 3.16, {que todo aquele que crê nele não pereça}: {todo aquele que} é um indefinido ({todo}) mais um relativo ({que}) mais um demonstrativo ({aquele}) funcionando como substantivo. Três classes de pronome numa palavra só, e a frase inteira se sustenta nessa pilha.

Em qualquer pronome, pergunte: é tônico ou átono? É possessivo, demonstrativo, indefinido ou relativo? E se for demonstrativo, a que distância está? Com as três respostas o pronome está fechado, e o texto deixa de ter pronomes para explicar.`),
  vocab: [
    V('eu', 'eu', 'eu'),
    V('tu', 'tu', 'tu'),
    V('ele', 'ele', 'ele/ela'),
    V('nós', 'nós', 'nós'),
    V('eles', 'eles', 'eles/elas'),
    V('meu', 'meu', 'meu'),
    V('teu', 'teu', 'teu'),
    V('seu', 'seu', 'seu'),
    V('dele', 'dele', 'dele/dela'),
    V('este', 'este', 'este (perto de quem fala)'),
    V('esse', 'esse', 'esse (longe de quem fala)'),
    V('aquele', 'aquele', 'aquele (longe de quem ouve)'),
    V('isto', 'isto', 'isto'),
    V('aquilo', 'aquilo', 'aquilo'),
    V('algum', 'algum', 'algum'),
    V('todo', 'todo', 'todo'),
    V('cada', 'cada', 'cada'),
  ],
  rules: [
    {
      n: '§1',
      text: T('Os pronomes tônicos existem sozinhos: {eu}, {tu}, {ele}, {nós}, {vós}, {eles}.'),
    },
    {
      n: '§2',
      text: T('Os átonos só existem grudados ao verbo: {me}, {te}, {o}, {se}, {nos}, {lhe}.'),
    },
    {
      n: '§3',
      text: T(
        'O possessivo concorda com o dono, não com a coisa: {meu}, {minha}, {meus}, {minhas}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O demonstrativo tem três posições: {este} junto, {esse} longe, {aquele} longe do ouvinte.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Os relativos abrem a subordinada e valem por um nome: {que}, {quem}, {cujo}, {onde}, {quando}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'O português bíblico, com {vos} e {meu} são a norma, e não o arcaísmo. As reformas ortográficas do século XX mudaram a gramática, não a Bíblia: um texto de 1611 continua legível.',
      ),
    },
    {
      label: T('O que o grego resolve'),
      text: T(
        'O grego tem três demonstrativos, e cada um fixa a distância em relação a quem fala. O português resolve os três com uma palavra cada, e por isso a tradução conserva a informação e às vezes perde a distância.',
      ),
    },
  ],
  examples: [
    { text: 'Ele deu-me o livro.', gloss: T('Pronome tônico {Ele} e átono {me} na mesma frase.') },
    { text: 'O teu nome.', gloss: T('Possessivo com artigo definido, {teu} mais {nome}.') },
    {
      text: 'A tua casa é minha.',
      gloss: T('O {teu} completa em duas formas: {o teu} e {a tua}.'),
    },
    { text: 'Isto é o que pedi.', gloss: T('Demonstrativo de primeira pessoa: {isto}.') },
    { text: 'Aquilo disse o profeta.', gloss: T('Demonstrativo de terceira pessoa: {aquilo}.') },
    { text: 'Nenhuma árvore deu fruto.', gloss: T('Indefinido negado: {nenhum}.') },
    {
      text: 'Cada homem trae sua cruz.',
      gloss: T('{cada} distribui, e não totaliza como {todo}.'),
    },
    { text: 'O rei cujo nome é eterno.', gloss: T('{cujo} liga o relativo ao possessivo.') },
  ],
  tables: [
    {
      caption: T('Pronomes pessoais'),
      head: ['Pessoa', 'Tônico', 'Átono'],
      rows: [
        ['eu', 'eu', 'me'],
        ['tu', 'tu', 'te'],
        ['ele/ela', 'ele/ela', 'o/a, lhe'],
        ['nós', 'nós', 'nos'],
        ['vós', 'vós', 'vos'],
        ['eles/elas', 'eles/elas', 'os/as, lhes'],
      ],
    },
    {
      caption: T('Demonstrativos: três posições'),
      head: ['Posição', 'Adjetivo', 'Pronome'],
      rows: [
        ['perto de quem fala', 'este', 'isto'],
        ['longe de quem fala', 'esse', 'isso'],
        ['longe de quem ouve', 'aquele', 'aquilo'],
      ],
    },
    {
      caption: T('Relativos'),
      head: ['Pronome', 'Vale por', 'Exemplo'],
      rows: [
        ['{que}', 'pessoa ou coisa', 'o livro que li'],
        ['{quem}', 'pessoa', 'aquele que viu'],
        ['{cujo}', 'posse', 'cujo pai'],
        ['{onde}, {quando}, {como}', 'lugar, tempo, modo', 'onde mora'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual pronome é demonstrativo de longe de quem ouve?'),
    options: [T('aquele'), T('este'), T('esse'), T('esse mesmo')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('O possessivo concorda com ______, não com a coisa.'),
      answer: 'o dono',
      hint: T('{meu} e {minha} mudam com quem possui.'),
    },
    {
      kind: 'choose',
      prompt: T('Em “o livro que li”, {que} é:'),
      options: [T('relativo'), T('demonstrativo'), T('indefinido'), T('possessivo')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o pronome ao valor.'),
      pairs: [
        { a: T('este'), b: T('perto de quem fala') },
        { a: T('esse'), b: T('longe de quem fala') },
        { a: T('aquele'), b: T('longe de quem ouve') },
        { a: T('cada'), b: T('distribui') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
