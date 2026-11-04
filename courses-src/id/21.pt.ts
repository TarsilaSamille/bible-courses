import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  section: T('Numeral'),
  title: T('Tempo, data e número'),
  subtitle: T('sudah, masih, baru, hampir, segera, kemarin, nanti, lalu'),
  body: C(`## As palavras que o português não tem como advérbio

O português marqueteia o tempo com o verbo: «já vim», «ainda vou», «quase terminei». O indonésio não pode, porque o verbo não flexiona, e por isso tem um conjunto de palavras que fazem esse serviço sozinhas.

{sudah} é «já», e é o mais comum: {saya sudah makan} «já comi», {dia sudah datang} «ele já chegou».

{masih} é «ainda», no sentido de continuação: {dia masih di sini} «ele ainda está aqui», {saya masih tinggal di sini} «ainda moro aqui». O par {masih belum} é «ainda não».

{baru} é «só», no sentido de recência: {dia baru datang} «ele acabou de chegar», {saya baru tahu} «só agora soube». Com {saja} fica mais forte: {baru saja} «só agora mesmo».

{hampir} é «quase»: {hampir selesai} «está quase pronto». Com a repetição, {hampir-hampir}, o sentido passa a «por pouco», quase com ironia: {hampir-hampir tidak sampai}.

{segera} é «em breve»: {akan segera datang} «virá em breve». {kemarin} é «ontem», {nanti} é «depois», e {tadi} é «agora mesmo», para trás.

{sementara itu} é «enquanto isso», {sekarang} é «agora», {saat ini} é «neste momento». E há as frequencies: {selalu} «sempre», {sering} «frequentemente», {kadang-kadang} «às vezes», {jarang} «raramente», {pernah} «alguma vez», {tidak pernah} «nunca».

Todas essas palavras são invariables. Nenhuma flexiona, nenhuma concorda com o substantivo, e nenhuma muda por causa do sujeito.

## O tempo do verbo vem antes

Quatro das palavras acima são aspecto, e aspecto vem antes do verbo, como já estava na regra de posição.

{sudah} mais verbo é «ter +participado»: {sudah datang} «já chegou», {sudah+BASE} é a forma mais comum de expressar passado em indonésio.

{akan} mais verbo é o futuro: {akan datang} «virá». {sedang} mais verbo é o progressivo: {sedang datang} «está vindo». {belum} mais verbo é «ainda não»: {belum datang} «ainda não chegou». E {telah} é um segundo marcador de passado, mais formal, que aparece sobretudo em texto escrito: {telah datang}.

O par {sudah} e {belum} é o mais útil de todos: {sudah datang} «já chegou» e {belum datang} «ainda não chegou» são as duas metades do mesmo fio. A resposta a {belum datang} é sempre {sudah datang}, e a pergunta mais comum do diálogo corrente é {sudah?}, que significa «já?» e espera {sudah} ou {belum}.

{masih} e {baru} também vêm antes do verbo quando são aspecto: {masih tinggal} «ainda mora», {baru tahu} «acabou de saber». E há uma diferença fina entre eles que o português não tem: {masih} olha para trás, para uma situação que começou antes e continua; {baru} olha para a frente, para algo que acabou de começar.

## Onde a data fica

O tempo que é substantivo vai no lugar de um advérbio: no fim do sintagma verbal ou no começo da frase. {Dia datang kemarin} «ele veio ontem», {Kemarin dia datang} «ontem ele veio», {Dia datang di hari Senin} «ele veio na segunda-feira».

As unidades são {hari} «dia», {minggu} «semana», {bulan} «mês», {tahun} «ano», dan {jam} «hora». Os dias da semana levam maiúscula e não usam numeral: {Senin}, {Selasa}, {Rabu}, {Kamis}, {Jumat}, {Sabtu}, {Minggu}. Note que {Minggu} é domingo no calendário e semana em conversa corrente, o que é uma fonte clássica de confusão.

Os meses também são nomes próprios emprestados: {Januari}, {Februari}, {Maret}, dan assim por diante até {Desember}. Não há forma de escrever janeiro em minúscula.

A data completa não leva preposição: {17 Agustus 1945}, e em texto corrido {tanggal 17 Agustus}. O substantivo {tanggal} é do sânscrito e significa «marca, dia do mês», e a TB o usa exatamente nessa função. Quem traduz do português escreve {no dia 17 de agosto}, com três preposições que o indonésio não tem.

## Mintilah, maka akan diberikan kepadamu

{Matius 7:7} é a passagem onde o tempo do verbo aparece em estado puro, e ela vale mais do que qualquer tabela: {Mintilah, maka akan diberikan kepadamu; carilah, maka kamu akan mendapat; ketoklah, maka akan dibukakan kepadamu}.

Os três imperativos são {minta}, {cari} e {ketok}, e os três verbos que seguem são {diberikan}, {mendapat} e {dibukakan}: {akan} mais verbo nos três casos, mais duas passivas com {di-} e sem {oleh} escrito.

O que o texto não tem é {-lah} no passado. Onde o grego do Sermão da Montanha alterna aoristo e imperfeito, a TB usa {akan} três vezes e {sudah} nenhuma, porque o tempo em indonésio não está no verbo. O leitor que procura uma mudança de tempo no verbo não encontra e conclui que o texto repete a mesma ideia três vezes. Está errado: o que muda é o verbo, não o tempo.`),
  vocab: [
    V('sudah', 'sudah', 'já'),
    V('telah', 'telah', 'já (passado, registro escrito)'),
    V('akan', 'akan', 'vai (futuro)'),
    V('sedang', 'sedang', 'estar a (progressivo)'),
    V('belum', 'belum', 'ainda não'),
    V('masih', 'masih', 'ainda'),
    V('baru', 'baru', 'só agora; novo'),
    V('hampir', 'hampir', 'quase'),
    V('segera', 'segera', 'em breve'),
    V('kemarin', 'kemarin', 'ontem'),
    V('nanti', 'nanti', 'depois, mais tarde'),
    V('tadi', 'tadi', 'agora mesmo (passado)'),
    V('lalu', 'lalu', 'depois, então'),
    V('sekarang', 'sekarang', 'agora'),
    V('selalu', 'selalu', 'sempre'),
    V('kadang-kadang', 'kadang', 'às vezes'),
    V('hari', 'hari', 'dia'),
    V('tanggal', 'tanggal', 'data, dia do mês'),
    V('Senin', 'Senin', 'segunda-feira'),
    V('Minggu', 'Minggu', 'domingo; semana'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O tempo do verbo vem do advérbio: {sudah}, {akan}, {sedang}, {belum} vêm antes do verbo.',
      ),
    },
    {
      n: '2',
      text: T(
        '{sudah} mais verbo é o passado: {sudah datang} «já chegou». {telah} faz o mesmo em registro escrito.',
      ),
    },
    {
      n: '3',
      text: T('{belum} tem resposta obrigatória: a resposta a {belum datang} é {sudah datang}.'),
    },
    {
      n: '4',
      text: T(
        '{masih} olha para trás e {baru} olha para a frente; os dois vêm antes do verbo quando são aspecto.',
      ),
    },
    {
      n: '5',
      text: T('A data não leva preposição: {17 Agustus 1945}, {hari Senin}, {tanggal 17 Agustus}.'),
    },
  ],
  notes: [
    {
      label: T('Um advérbio sem flexão'),
      text: T(
        'Nenhuma das palavras de tempo flexiona. {sudah}, {akan}, {belum} e {sedang} não mudam conforme o sujeito nem o número, e é por isso que o mesmo verbo serves para {saya}, {dia} e {mereka}: {saya sudah datang}, {dia sudah datang}, {mereka sudah datang}.',
      ),
    },
    {
      label: T('Minggu e a semana'),
      text: T(
        '{Minggu} é domingo no calendário e «semana» na conversa corrente, e o contexto decide. Num calendário não há ambiguidade; numa carta, sim, e vale evitar a palavra quando a data importa.',
      ),
    },
  ],
  examples: [
    { text: 'Saya sudah makan.', gloss: T('Já comi.') },
    { text: 'Dia masih di sini.', gloss: T('Ele ainda está aqui.') },
    { text: 'Saya baru tahu ontem.', gloss: T('Só agora soube, ontem.') },
    { text: 'Hampir selesai.', gloss: T('Está quase pronto.') },
    { text: 'Dia akan segera datang.', gloss: T('Ele virá em breve.') },
    { text: 'Dia belum datang.', gloss: T('Ele ainda não chegou.') },
    { text: 'Sudah?', gloss: T('Já?') },
    { text: 'Dia datang kemarin.', gloss: T('Ele veio ontem.') },
    { text: 'Kita bertemu di hari Senin.', gloss: T('Encontramo-nos na segunda-feira.') },
    {
      text: 'Peristiwa itu terjadi pada 17 Agustus 1945.',
      gloss: T('O facto aconteceu a 17 de agosto de 1945.'),
    },
  ],
  tables: [
    {
      caption: T('Palavras de tempo e de aspecto'),
      head: ['Palavra', 'Significado', 'Posição', 'Exemplo'],
      rows: [
        ['sudah', 'já', 'antes do verbo', 'sudah datang'],
        ['telah', 'já (escrito)', 'antes do verbo', 'telah datang'],
        ['akan', 'vai', 'antes do verbo', 'akan datang'],
        ['sedang', 'estar a', 'antes do verbo', 'sedang datang'],
        ['belum', 'ainda não', 'antes do verbo', 'belum datang'],
        ['masih', 'ainda', 'antes do verbo', 'masih tinggal'],
        ['baru', 'só agora', 'antes do verbo', 'baru tahu'],
      ],
    },
    {
      caption: T('Advérbios que ficam fora do verbo'),
      head: ['Palavra', 'Significado', 'Posição', 'Exemplo'],
      rows: [
        ['kemarin', 'ontem', 'fim da frase', 'dia datang kemarin'],
        ['nanti', 'depois', 'fim da frase', 'nanti kita bicara'],
        ['tadi', 'agora mesmo', 'fim da frase', 'tadi dia telephon'],
        ['hampir', 'quase', 'antes do verbo', 'hampir selesai'],
        ['segera', 'em breve', 'antes do verbo', 'akan segera datang'],
        ['sekarang', 'agora', 'qualquer', 'sekarang dia bekerja'],
        ['selalu', 'sempre', 'antes do verbo', 'selalu datang tepat waktu'],
        ['kadang-kadang', 'às vezes', 'antes do verbo', 'kadang-kadang lupa'],
      ],
    },
    {
      caption: T('Datas e unidades de tempo'),
      head: ['Unidade', 'Palavra', 'Exemplo', 'Leia como'],
      rows: [
        ['dia', 'hari', 'hari Senin', 'na segunda-feira'],
        ['semana', 'minggu', 'minggu depan', 'na semana que vem'],
        ['mês', 'bulan', 'bulan Januari', 'em janeiro'],
        ['ano', 'tahun', 'tahun 1945', 'em 1945'],
        ['data', 'tanggal', 'tanggal 17 Agustus', 'a 17 de agosto'],
        ['completa', '(dia + mês + ano)', '17 Agustus 1945', '17 de agosto de 1945'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Dia belum datang}, o que significa a frase?'),
    options: [
      T('ele ainda não chegou'),
      T('ele já chegou'),
      T('ele chega em breve'),
      T('ele chegou ontem'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o passado: «já chegou» = ___ datang.'),
      answer: 'sudah',
      hint: T('A palavra de aspecto que vem antes do verbo.'),
    },
    {
      kind: 'choose',
      prompt: T('Como se escreve uma data completa?'),
      options: [
        T('17 Agustus 1945'),
        T('di 17 dari Agustus 1945'),
        T('ke 17 Agustus 1945'),
        T('pada tanggal tujuh belas Agustus'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue a palavra ao seu tempo'),
      pairs: [
        { a: T('{sudah}'), b: T('já') },
        { a: T('{belum}'), b: T('ainda não') },
        { a: T('{akan}'), b: T('vai') },
        { a: T('{kemarin}'), b: T('ontem') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
