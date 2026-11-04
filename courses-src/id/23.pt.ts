import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  section: T('Verbo'),
  title: T('Causativo e benefactive'),
  subtitle: T('mengirimi, membelikan: o -kan que faz o verbo indireto'),
  body: C(`## O -kan não é uma coisa só

Quem aprende o {-kan} como «fazer» aprende a menor parte dele. O sufixo aparece em quatro famílias, e elas se distinguem pelo segundo objeto que o verbo ganha.

{1} Causativo ou factitivo. O sujeito faz o verbo acontecer. {menuliskan} «fazer escrever», {membesarkan} «criar, hacer crescer», {memperpanjang} «prolongar», {mendengarkan} «fazer ouvir». O segundo objeto é a coisa Affected e a ação vem de fora.

{2} Benefactive. O sujeito faz o verbo **para** alguém. {membelikan} «comprar para alguém», {mengirimi} «enviar uma carta a alguém», {membayarkan} «pagar por alguém», {memasukkan} «guardar algo dentro». O segundo objeto é o beneficiário, e é o mesmo beneficiário que o português marca com {para}.

{3} Aplicativo. O segundo objeto é o lugar onde a ação é aplicada. {memasukkan} «pôr dentro», {menanamkan} «plantar em», {mencangkokkan} «enxertar em». O recipient é o lugar.

{4} Factivo com agente. O sujeito faz outro sujeito fazer. O exemplo legítimo é {menyuruh} «mandar que», que traz a ação pedida e não um agente.

A distinção que interessa ao leitor é a segunda, porque é a que o grego do Novo Testamento usa com mais frequência e a que o português resolve com uma preposição. Um participio grego como «escrito para» ou «enviado a» é um {-kan} em indonésio, e o tradutor que procura {para} no verbo vai procurá-lo no lugar errado.

## A preposição que virou sufixo

Em português o benefactive é uma preposição: «comprar **para** alguém», «enviar **a** alguém». Em indonésio a mesma informação pode estar em três lugares, e vale saber os três.

{1} No sufixo. {membelikan} já diz «comprar para alguém», e o beneficiário vem como segundo objeto: {membelikan buku untuk ibu} «comprar um livro para a mãe».

{2} Na preposição. O verbo fica sem sufixo e o destinatário vem marcado: {membawa oleh ubur}, {mengirimi surat kepada ayah} «enviar uma carta ao pai». Com nome próprio, o {kepada} se funde: {mengirimi Ami}.

{3} No clítico. Com pronome, o destinatário vira clítico e a preposição some: {mengirim surat kepadamu} «enviar uma carta a ti», {meminum obat untuknya} «tomar o remédio por ele».

O ponto que engana é que o {-kan} e o {untuk} podem aparecer juntos, e não é errado: {membelikan buku untuk ibunya} «comprar um livro para a mãe dela». O {-kan} faz o verbo indireto, e o {untuk} diz quem se beneficia. São duas informações diferentes, mesmo quando o mesmo nome aparece nas duas posições.

E há um caso em que o {-kan} faz o trabalho de {untuk} sozinho: {mengirimi} sem mais nada já significa «enviar uma carta a alguém», com o destinatário obrigatoriamente interno ao verbo. É o mesmo mecanismo de {menuliskan}, e é o que produz a leitura mais difícil: um verbo com dois objetos em que o segundo não aparece.

## Quando não há -kan

Há verbos de ajudar, ensinar e servir que **não** levam {-kan}, e o destinatário vem sempre marcado: {membantu} «ajudar», {menolong} «socorrer», {mengajar} «ensinar», {melayani} «servir», {mendoah} «rezar por».

{membantu ibunya} «ajuda a mãe», {melayani tamu} «serve o hóspede», {mendoah untuk negara} «reza pela pátria». A preposição é obrigatória aqui, e o tradutor que põe {-kan} produz {membantukan ibunya}, que é um verbo diferente e mais raro.

A regra prática para o leitor: **pergunte quem se beneficia.** Se o beneficiário for o destinatário natural da ação e o verbo significa algo como fazer por alguém, o {-kan} é provável. Se o verbo já é sobre ajudar, e o {-kan} soa estranho, é porque não é beneficiário.

E há {-kan} que são lexicalizados e não significam nada disso: {mengatakan} «dizer», {meletakkan} «pôr», {meminum} «beber». São {-kan} que perderam o segundo objeto e ficaram com o sentido da base. Uma lista desses verbos é mais útil que uma regra, porque são poucos.

## Berilah dengan gratis

{Matius 10:8} traz o exemplo mais limpo de benefactive no Novo Testamento: a TB pede ao disruptor que {Berilah dengan gratis, dan terimalah juga dengan gratis}. O {dengan gratis} é um advérbio de modo, e o verbo {beri} não leva {-kan} porque «dar» já é transitivo.

Quem traduz por «dai gratuitamente» acerta no sentido e erra na leitura: o versículo é sobre um verbo que dá a alguém, e quem escreve {memberikan dengan gratis} introduz um {-kan} que torna o verbo indireto e sugere que o dar é feito por outra pessoa. O grego original tem um verbo simples para dar; o indonésio tem dois, e o contexto escolhe o mais simples.

A frase seguinte da TB, sobre {menerima}, mostra o outro lado: receber também não leva {-kan}, porque «receber» já é um verbo com destinatário. E o paralelismo que o grego faz com um único verbo repetido, o indonésio faz com dois verbos que rimam e uma preposição comum, e o leitor tem de notar que a preposição é a mesma nos dois casos.`),
  vocab: [
    V('beri', 'beri', 'dar'),
    V('terima', 'terima', 'receber'),
    V('beli', 'beli', 'comprar'),
    V('membelikan', 'beli', 'comprar para alguém'),
    V('kirim', 'kirim', 'enviar'),
    V('mengirim', 'kirim', 'enviar'),
    V('mengirimkan', 'kirim', 'enviar em nome de'),
    V('iri', 'iri', 'carta, mensagem'),
    V('mengirimi', 'iri', 'enviar carta a alguém'),
    V('bayar', 'bayar', 'pagar'),
    V('membayarkan', 'bayar', 'pagar por alguém'),
    V('masuk', 'masuk', 'entrar'),
    V('memasukkan', 'masuk', 'pôr dentro'),
    V('bantu', 'bantu', 'ajudar'),
    V('membantu', 'bantu', 'ajudar'),
    V('melayani', 'layani', 'servir'),
    V('dengar', 'dengar', 'ouvir'),
    V('mendengarkan', 'dengar', 'fazer ouvir, escutar'),
    V('untuk', 'untuk', 'para'),
    V('kepada', 'kepada', 'a, para'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Com {-kan} o verbo fica indireto: {membelikan} «comprar para alguém», {mengirimi} «enviar carta a alguém».',
      ),
    },
    {
      n: '2',
      text: T(
        'O beneficiário pode vir no segundo objeto ({untuk + nome}), na preposição ({kepada + nome}) ou no clítico ({kepadamu}).',
      ),
    },
    {
      n: '3',
      text: T(
        '{mengirimi} sem objeto visível já significa «enviar uma carta a alguém»: o destinatário está dentro do verbo.',
      ),
    },
    {
      n: '4',
      text: T(
        'Verbos de ajudar, ensinar e servir não levam {-kan}: {membantu ibunya}, {melayani tamu}, {mendoah untuk negara}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Alguns {-kan} são lexicalizados e nada indicam de indireto: {mengatakan} «dizer», {meletakkan} «pôr».',
      ),
    },
  ],
  notes: [
    {
      label: T('O segundo objeto obrigatório'),
      text: T(
        'Em {mengirimi} e {menuliskan} o segundo objeto é obrigatório, mas pode ficar implícito quando o contexto já o estabeleceu. É por isso que a mesma raiz ora parece transitiva ora indireta: {mengirim surat} e {mengirimi surat}.',
      ),
    },
    {
      label: T('Por que -kan e -i coexistem'),
      text: T(
        'Os dois sufixos fazem o verbo indireto e a escolha segue o que se acrescenta: {-kan} introduz uma ação feita a alguém, {-i} introduz o recipiente ou a superfície. {menuliskan} recebe, {menutupi} cobre.',
      ),
    },
  ],
  examples: [
    {
      text: 'Dia membelikan buku untuk ibunya.',
      gloss: T('Ele comprou um livro para a mãe dele.'),
    },
    { text: 'Dia mengirimi surat kepada ayah.', gloss: T('Ele enviou uma carta ao pai.') },
    { text: 'Dia mengirimi Ami surat.', gloss: T('Ele enviou uma carta à Ami.') },
    {
      text: 'Dia meminjamkan bukunya kepada adi.',
      gloss: T('Ele empresta o livro dele ao irmão.'),
    },
    { text: 'Dia membayar ongkos bus.', gloss: T('Ele pagou a passagem de ônibus.') },
    { text: 'Dia membantu ibunya.', gloss: T('Ele ajuda a mãe dele.') },
    { text: 'Dia mendengarkan lagu itu.', gloss: T('Ele escuta aquela música.') },
    {
      text: 'Surat itu dimasukkan ke dalam kotak.',
      gloss: T('A carta foi colocada dentro da caixa.'),
    },
    { text: 'Dia mengatakan yang sebenarnya.', gloss: T('Ele disse a verdade.') },
    { text: 'Dia meletakkan buku di meja.', gloss: T('Ele pôs o livro na mesa.') },
  ],
  tables: [
    {
      caption: T('As quatro famílias do -kan'),
      head: ['Família', 'Segundo objeto', 'Exemplo', 'Leia como'],
      rows: [
        ['causativo', 'o que é afetado', 'membesarkan anak', 'criar uma criança'],
        ['causativo', 'o que é afetado', 'memperpanjang jalan', 'prolongar a rua'],
        ['benefactive', 'quem se beneficia', 'membelikan buku', 'comprar um livro'],
        ['benefactive', 'quem recebe', 'mengirimi surat', 'enviar uma carta'],
        ['aplicativo', 'o lugar', 'memasukkan surat', 'pôr dentro uma carta'],
        ['lexicalizado', 'nenhum', 'mengatakan rahasia', 'dizer um segredo'],
      ],
    },
    {
      caption: T('Onde o destinatário pode aparecer'),
      head: ['Via', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        [
          'segundo objeto',
          'V-kan + untuk + nome',
          'membelikan buku untuk ibu',
          'comprar um livro para a mãe',
        ],
        [
          'preposição',
          'mengirimi + kepada + nome',
          'mengirimi surat kepada ayah',
          'enviar uma carta ao pai',
        ],
        ['clítico', 'mengirim + clítico', 'kepadamu', 'para ti'],
        ['interno ao verbo', 'mengirimi', 'mengirimi Ami', 'enviar uma carta à Ami'],
        ['verbo sem -kan', 'membantu + untuk', 'membantu ibunya', 'ajudar a mãe'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que {mengirimi} acrescenta a {mengirim}?'),
    options: [
      T('um destinatário: «enviar carta a alguém»'),
      T('o passado'),
      T('o plural'),
      T('a voz passiva'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: «comprar para a mãe» = Ix ___ buku untuk ibu.'),
      answer: 'membelikan',
      hint: T('A base {beli} mais o sufixo indireto.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta?'),
      options: [
        T('Dia mengirimi surat kepada ayah.'),
        T('Dia mengirimi surat ke ayah.'),
        T('Dia kirimkan surat kepada.'),
        T('Dia mengirims surat kepada ayah.'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao seu tipo'),
      pairs: [
        { a: T('{membelikan}'), b: T('benefactive') },
        { a: T('{memasukkan}'), b: T('aplicativo') },
        { a: T('{membantu}'), b: T('sem -kan') },
        { a: T('{mengatakan}'), b: T('lexicalizado') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
