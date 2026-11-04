import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('Advérbio'),
  title: T('O advérbio: como se forma'),
  subtitle: T('-nya, -an e a forma igual ao adjetivo'),
  body: C(`## Três maneiras de formar um advérbio

O advérbio indonésio é a única classe produtiva por derivação, e há três caminhos para chegar nele. Nenhum deles flexiona: o advérbio é um advérbio em toda oração, e é isso que o distingue do latim.

{1} Com {-nya}, colado a um adjetivo ou a um verbo. {cepat} «rápido» → {cepatnya} «rapidamente»; {baik} «bom» → {baiknya} «bem»; {sungguh} «verdadeiro» → {sungguhnya} «de verdade». É o caminho mais regular, e a forma se parece com um substantivo: na origem, {cepatnya} é literalmente «a sua rapidez».

{2} Com {-an} ou {-i}. {sungguh} → {sungguhan} «a sério»; {betul} → {betulan} «propriamente»; {sendiri} → {sendirian} «sozinho». O {-an} aqui tem o mesmo trabalho que tem sobre substantivos: forma um nominal, e o nominal usado como advérbio passa a significar modo. {memang} «certamente» é da mesma família.

{3} Sem marca nenhuma: o advérbio é a palavra do adjetivo, idêntica. {cepat} «rápido» e {cepat} «rapidamente»; {benar} «certo» e {benar} «corretamente»; {jujur} «honesto» e {jujur} «honestamente»; {keras} «duro» e {bekerja keras} «trabalhar duramente».

A terceira via é a mais comum e a mais invisível, porque o leitor não percebe que mudou de classe. O português tem um par fixo para isso ({rápido}/{rapidamente}, {fácil}/{facilmente}) e o indonésio não: a palavra é uma só e o que muda é o lugar que ela ocupa.

## A mesma palavra em dois papéis

Quando {cepat} está depois do verbo, é advérbio: {dia datang cepat} «ele vem rápido». Quando está antes do verbo ou depois de ser, é adjetivo: {dia cepat datang} «ele vem rápido» já não é a mesma coisa, e {cepat} à frente de um substantivo é o adjetivo de {anak cepat}.

A pergunta que resolve é: **o que vem depois?** Se o que vem depois é um substantivo ou nada, é adjetivo; se o que vem depois é outro verbo ou um advérbio, é advérbio. {dia datang cepat} tem outro verbo depois. {anak cepat} tem um substantivo depois.

{benar} mostra por que a distinção importa mais do que parece. Em {dia bicara benar}, oAdvérbio {benar} significa «ele fala com verdade». Em {dia yang benar}, {benar} é adjetivo e {yang} liga a um substantivo. A mesma palavra, e quem não sabe a diferença traduz as duas errado.

{benar} como advérbio e {benar} como adjetivo não têm diferença de pronúncia nem de escrita. O indonésio resolveu o que o português resolveu com {-mente} e com uma palavra a mais, e o preço foi a necessidade de olhar a posição.

## O advérbio que parece verbo

Há advérbios formados de verbos, e eles são a fonte principal de erro de quem está começando.

A forma mais comum é a reduplicação com {-an}, que dá atividade feita por gosto, sem finalidade: {jalan-jalan} «passear», {makan-makan} «comer à toa», {main-main} «brincar». Como advérbio, {makan-makan} significa «à toa, sem propósito nenhum»: {Saya makan-makan saja} «eu só como mesmo, à toa».

O outro grupo é o que o português resolve com gerúndio ou com locução: {sedang} «estar a», {akan} «ir +infinitivo», {sudah} «ter + participado». Todos os três são advérbios de tempo easpecto e nenhum deles é verbo. A confusão é comum porque {sedang} pode vir antes do verbo, como se fosse auxiliar.

E há um grupo que não é advérbio nem verbo, e que a gramática chama de conector: {lalu} «depois», {kemudian} «depois disso», {sementara itu} «enquanto isso». São palavras que organizam a frase e não descrevem o verbo. O {lalu} merece atenção especial porque também significa «logo depois» e, em prova antiga, aparece como marcador de passado distante.

Nenhum advérbio flexiona. Não há advérbio plural, nem advérbio de gênero, nem advérbio que mude conforme o sujeito. Uma palavra que aparece em todas as formas é advérbio ou nome próprio; se o contexto mostra que ela descreve um verbo, é advérbio.

## Cepat, lambat, dan lambat untuk marah

{Tiago 1:19} traz, em uma frase só, os dois advérbios mais comuns da língua bíblica. A TB escreve {cepat mendengar}, {lambat untuk berbicara} e {lambat untuk marah}, e os três vêm de palavras que também são adjetivos.

O que interessa aqui não é o conteúdo do versículo, e sim o fato de que a TB conseguiu pôr três advérbios sem uma terminação de modo nem um auxiliar. {cepat} é o adjetivo de {cepat} e está no lugar onde o advérbio vai. {lambat untuk berbicara} tem um {untuk} que não é uma preposição de objetivo: é o que liga o advérbio ao verbo que ele modifica.

O grego original era mais difícil do que isso. A versão grega de Tiago pede ao leitor que reconheça três adjetivos particípios em sequência, e a tradutora resolveu isso com três palavras que ela já tinha. Um tradutor do grego para o português precisa de três substantivos; para o indonésio, de três palavras que ele já tinha à mão. É esse o lugar onde o indonésio mostra o que é: uma língua que chega ao mesmo sentido com menos palavras, e que faz o trabalho de construção desaparecer dentro do verbo.`),
  vocab: [
    V('cepat', 'cepat', 'rápido; rapidamente'),
    V('cepatnya', 'cepat', 'rapidamente'),
    V('baik', 'baik', 'bom; bem'),
    V('baiknya', 'baik', 'bem'),
    V('benar', 'benar', 'certo; corretamente'),
    V('betulan', 'betul', 'propriamente, de verdade'),
    V('sungguh', 'sungguh', 'verdadeiro'),
    V('sungguhan', 'sungguh', 'a sério'),
    V('sungguhnya', 'sungguh', 'de verdade'),
    V('keras', 'keras', 'duro; com força'),
    V('jujur', 'jujur', 'honesto; honestamente'),
    V('lalu', 'lalu', 'depois, então'),
    V('kemudian', 'kemudian', 'depois disso'),
    V('sedang', 'sedang', 'estar a (aspecto)'),
    V('jalan-jalan', 'jalan', 'passear'),
    V('makan-makan', 'makan', 'comer à toa'),
    V('berbicara', 'bicara', 'falar'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O advérbio se forma por {-nya} sobre adjetivo ou verbo, por {-an}/{(-i)}, ou fica igual ao adjetivo.',
      ),
    },
    {
      n: '2',
      text: T('{cepat} advérbio e {cepat} adjetivo são a mesma palavra; o que decide é a posição.'),
    },
    {
      n: '3',
      text: T(
        'O teste é o que vem depois: substantivo depois significa adjetivo, verbo depois significa advérbio.',
      ),
    },
    {
      n: '4',
      text: T(
        'Verbos reduplicados com {-an} funcionam como advérbio de finalidade: {makan-makan} «comer à toa».',
      ),
    },
    { n: '5', text: T('Nenhum advérbio flexiona: nem número, nem gênero, nem pessoa.') },
  ],
  notes: [
    {
      label: T('Por que -nya funciona'),
      text: T(
        'O {-nya} dos advérbios é o mesmo sufixo dos outros cinco empregos: nominalização. {cepatnya} era «a rapidez dele» e passou a significar «com rapidez». O mesmo caminho nominalizou {datangnya} «a vinda» e {keluarannya} «a saída».',
      ),
    },
    {
      label: T('A linha entre advérbio e conector'),
      text: T(
        '{lalu} e {kemudian} organizam a frase e não descrevem o verbo, por isso alguns grammars os tratam como conjunções. Para o leitor a regra prática é simples: se a palavra pode ser retirada sem mudar quem faz o quê, ela é conector.',
      ),
    },
  ],
  examples: [
    { text: 'Dia datang cepat.', gloss: T('Ele vem rápido.') },
    { text: 'Anak itu cepat.', gloss: T('Aquela criança é rápida.') },
    { text: 'Kita harus bekerja keras.', gloss: T('Temos de trabalhar com força.') },
    { text: 'Dia berbicara jujur.', gloss: T('Ele fala honestamente.') },
    { text: 'Bekerja terus selama dua tahun.', gloss: T('Trabalhou sem parar durante dois anos.') },
    { text: 'Sungguhan, saya tidak tahu.', gloss: T('De verdade, eu não sei.') },
    { text: 'Setelah minum, dia keluar.', gloss: T('Depois de beber, ele saiu.') },
    { text: 'Saya makan-makan saja.', gloss: T('Eu só como mesmo, à toa.') },
    { text: 'Dia kemudian tidak datang.', gloss: T('Depois ele não veio.') },
    { text: 'Sekarang sudah ada yang belajar.', gloss: T('Agora já há quem estuda.') },
  ],
  tables: [
    {
      caption: T('Os três caminhos do advérbio'),
      head: ['Caminho', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        ['com -nya', 'X + nya', 'cepatnya', 'rapidamente'],
        ['com -nya', 'X + nya', 'baiknya', 'bem'],
        ['com -an / -i', 'X + an', 'betulan', 'propriamente'],
        ['com -an / -i', 'X + an', 'sungguhan', 'a sério'],
        ['igual ao adjetivo', 'X', 'cepat', 'rapidamente'],
        ['igual ao adjetivo', 'X', 'jujur', 'honestamente'],
        ['reduplicado', 'V + V-an', 'jalan-jalan', 'passeando'],
      ],
    },
    {
      caption: T('Adjetivo ou advérbio: o teste da posição'),
      head: ['Frase', 'O que vem depois', 'Valor de cepat', 'Leia como'],
      rows: [
        ['dia datang cepat', 'verbo', 'advérbio', 'ele vem rápido'],
        ['anak cepat', 'substantivo', 'adjetivo', 'criança rápida'],
        ['lalu dengan cepat', 'nada', 'advérbio', 'depois, rapidamente'],
        ['hari ini cepat', 'verbo', 'advérbio', 'hoje, cedo'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Dia datang cepat}, que papel tem {cepat}?'),
    options: [T('advérbio'), T('adjetivo'), T('verbo'), T('pronome')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Forme o advérbio com {-nya}: «rapidamente» = ___.'),
      answer: 'cepatnya',
      hint: T('Adjetivo mais o sufixo nominal.'),
    },
    {
      kind: 'choose',
      prompt: T('Em {Anak cepat}, que papel tem {cepat}?'),
      options: [T('adjetivo'), T('advérbio'), T('conector'), T('numeral')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue a base ao advérbio'),
      pairs: [
        { a: T('{sungguh}'), b: T('{sungguhan}') },
        { a: T('{betul}'), b: T('{betulan}') },
        { a: T('{cepat}'), b: T('{cepatnya}') },
        { a: T('{jalan}'), b: T('{jalan-jalan}') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
