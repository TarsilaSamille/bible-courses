import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Prefixos per- e ke-; sufixo -an'),
  subtitle: T('pergi, kehendak, makanan'),
  section: T('O nome'),
  body: C(`Estes três padrões ampliam nomes e verbos, mas seus valores não são intercambiáveis.

per- + verbo, muitas vezes com -kan, exprime afastamento ou conclusão de um processo: {pergi} «ir», {perjalanan} «viagem», {berpisah} «separar-se». {per-…-kan} pode expressar ação prolongada e também causação: {menjalankan} faz CORRER; {memperlihatkan} «fazer ver»; {mempersembahkan} «oferecer/apresentar». O elemento {kan} não significa PASSADO.

ke- + substantivo + -an indica resultado, domínio ou coleção: {ke- + behem → keberadaan}, {ke- + hendak + -an → kehendak}, {ke- + raja + -an → kerajaan}. A ditongia {ea} reflete um processo histórico, não uma regra geral aplicável a todo ke-an.

O substantivo {kebenaran} pode ser analisado historically como {ke- + benar + -an}, mas significa «verdade, justiça, fidelidade» conforme o contexto. {Kerajaan} significa «reino» e pode operar metaforicamente: {Kerajaan Allah} «Reino de Deus».

{-an} como sufixo nominal forma ferramenta, produto, atividade ou domínio: {-an + makan → makanan} «comida» (literalmente «o que é comido»); {-an + tulis → tulisan} «escrito»; {-an + baca → bacaan} «leitura». Não toda forma em -an contém ke-.`),
  vocab: [
    V('pergi', 'pergi', 'ir, partir'),
    V('perjalanan', 'jalan', 'viagem'),
    V('berpisah', 'pisah', 'separar-se'),
    V('menjalankan', 'jalan', 'fazer correr; executar'),
    V('memperlihatkan', 'lihat', 'mostrar'),
    V('mempersembahkan', 'sembah', 'oferecer, apresentar'),
    V('kehendak', 'hendak', 'vontade, querer'),
    V('kerajaan', 'raja', 'reino'),
    V('kebenaran', 'benar', 'verdade, justiça, fidelidade'),
    V('makanan', 'makan', 'comida'),
    V('minuman', 'minum', 'bebida'),
    V('tulisan', 'tulis', 'escrito, escrita'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a melhor análise de {kerajaan}?'),
    options: [
      T('ke- + raja + -an, «reino»'),
      T('ke- = passado + -an = plural'),
      T('ke- = negação + -an = objeto'),
      T('ke- = lugar + -an = futuro'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: «Allah ___ kami» = «Deus alcança a nós».'),
      answer: 'mencapai',
      hint: T('Verbo: meN- + capai.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual exemplo é um substantivo abstrato com -an?'),
      options: [T('kebenaran'), T('buku'), T('kamu'), T('saya')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('{ke-} costuma mudar a vogal da raiz: {raja} → {kerajaan}, {hendak} → {kehendak}.'),
    },
    {
      n: '2',
      text: T(
        'A cominação de {per-}, {ke-} e {-an} não é inteiramente livre. As formas estabelecidas não se derivam apenas por regras mecânicas.',
      ),
    },
    {
      n: '3',
      text: T(
        'Em {mempersembahkan}, {per-} destaca a realização da ação e {-kan} destaca o objeto ou resultado; não traduza literalmente o pacote de afixos.',
      ),
    },
  ],
  notes: [
    {
      label: T('Etimologia'),
      text: T(
        '{ke-} é o mesmo prefixo que aparece em {kedua} «dois» e {kepada} «a/para»; {-an} também aparece sem ke-.',
      ),
    },
  ],
  examples: [
    { text: 'Yesus pergi ke bukit.', gloss: T('Jesus foi para o monte.') },
    { text: 'Jadilah kehendak-Mu.', gloss: T('Seja feita a tua vontade.') },
    { text: 'Matius menerima makanan.', gloss: T('Mateus recebe comida.') },
  ],
  tables: [
    {
      caption: T('Padrões e valores'),
      head: ['Padrão', 'Valor', 'ES'],
      rows: [
        ['per- + V', T('ir, afastar-se, completar'), '{pergi} «irse»'],
        ['per-…-kan', T('fazer/realizar plenamente'), '{menjalankan} «hacer correr»'],
        ['ke-…-an', T('resultado, domínio, coleção'), '{kerajaan} «reino»'],
        ['-an', T('produto, instrumento, atividade'), '{makanan} «comida»'],
      ],
    },
  ],
};
