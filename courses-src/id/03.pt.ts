import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('Tempo e verbo'),
  title: T('Os verbos essenciais'),
  subtitle: T(
    'makan, minum, pergi, datang, lihat, dengar: os verbos que sustentam quase toda frase',
  ),
  body: C(`## O verbo que não se conjuga

O verbo indonésio não muda de forma para dizer quem fala nem quando. {makan} é «comer» na primeira pessoa e na terceira, no presente e no passado: {saya makan}, {dia makan}, {kemarin dia makan}. O que muda de sentido não está no verbo, está na palavra que o acompanha.

Isso muda o que «verbo essencial» quer dizer. Em português, essencial é o verbo que se conjuga em toda frase. Em indonésio, é o que carrega o sentido e recebe os afixos: {makan} comer, {minum} beber, {pergi} ir, {datang} vir, {lihat} ver, {dengar} ouvir, {tahu} saber, {mau} querer, {ada} haver, {bilang} dizer, {tidur} dormir, {baca} ler, {tulis} escrever, {beri} dar, {ambil} tomar, {kerja} trabalhar cobrem quase tudo o que se diz num capítulo de Evangelho.

## meN-: o prefixo que muda a voz

O verbo ganha o prefixo {meN-} quando é ativo e tem objeto: {makan} vira {memakan}, {lihat} vira {melihat}, {dengar} vira {mendengar}, {tulis} vira {menulis}, {baca} vira {membaca}, {beri} vira {memberi}, {ambil} vira {mengambil}. O {N} não é uma letra: é a assimilação ao primeiro som da raiz. Diante de {p}, {t}, {k} e {s} o som cai e a raiz perde a consoante, como em {tulis} e {ambil}.

Sem {meN-} o verbo fica como está, e a frase muda de voz sem mudar de palavras. {Saya makan nasi} é «eu como arroz»; {nasi itu dimakan} é «esse arroz é comido», com {di-}, que é o {meN-} do passivo.

## sudah, sedang, akan, belum: onde mora o tempo

Como o verbo não flexiona, o tempo vem de quatro palavras que ficam antes dele. {sudah} marca o acabado: {saya sudah makan}, «eu já comi». {sedang} marca o que está em curso: {saya sedang makan}, «estou comendo». {akan} marca o que vem: {saya akan makan}, «vou comer». E {belum} marca o que ainda não aconteceu: {saya belum makan}, «ainda não comi».

O quarto é o que o português não tem com essa precisão. {belum} não é «não»: é «ainda não», e implica que vai acontecer. {tidak} nega o verbo, {bukan} nega o substantivo, e {belum} nega só o tempo.

## Na Bíblia

João 1:1 abre com {ada}: {Pada mulanya adalah Firman}. {adalah} é {ada} com o sufixo {lah}, e o indonésio diz «havia a Palavra» onde o grego diz {ἦν ὁ λόγος}. O verbo da existência é o mesmo em toda a Bíblia, e é a primeira palavra do versículo.

Marcos 4:39 traz duas ordens sem sujeito e sem tempo: {Diam! Tenanglah!} «Cala-te! Acalma-te!». O indonésio não precisa flexionar para mandar: o verbo fica nu e o {lah} fecha a ordem. E João 3:16 usa {mengaruniakan}, de {karunia} «dádiva», com {meN-} e {-kan}: «deu» no sentido de dar como presente.`),
  vocab: [
    V('makan', 'makan', 'comer'),
    V('memakan', 'makan', 'comer (ativo)'),
    V('minum', 'minum', 'beber'),
    V('pergi', 'pergi', 'ir'),
    V('datang', 'datang', 'vir'),
    V('lihat', 'lihat', 'ver'),
    V('melihat', 'lihat', 'ver (ativo)'),
    V('dengar', 'dengar', 'ouvir'),
    V('mendengar', 'dengar', 'ouvir (ativo)'),
    V('tahu', 'tahu', 'saber'),
    V('mau', 'mau', 'querer'),
    V('ada', 'ada', 'haver, existir'),
    V('adalah', 'ada', 'é (existencial)'),
    V('sudah', 'sudah', 'já'),
    V('sedang', 'sedang', 'estar fazendo'),
    V('akan', 'akan', 'ir (futuro)'),
    V('belum', 'belum', 'ainda não'),
    V('berkata', 'kata', 'dizer'),
    V('tinggal', 'tinggal', 'morar, ficar'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O verbo não flexiona: {saya makan}, {dia makan}, {kemarin dia makan} têm a mesma forma.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{meN-} é o ativo com objeto: {makan} → {memakan}, {lihat} → {melihat}, {dengar} → {mendengar}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Diante de {p}, {t}, {k} e {s} o som do prefixo cai: {tulis} → {menulis}, {ambil} → {mengambil}.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{sudah} «já», {sedang} «em curso», {akan} «futuro», {belum} «ainda não»: o tempo fica antes do verbo.',
      ),
    },
    {
      n: '§5',
      text: T('{belum} não é {tidak}: nega só o tempo, e implica que ainda vai acontecer.'),
    },
  ],
  notes: [
    {
      label: T('O ada que não é «ter»'),
      text: T(
        '{ada} é existência, não posse. «Eu tenho um livro» é {saya punya buku}, com {punya}, e {ada buku} é só «há um livro». Quem traduz {ada} por «ter» inverte a frase.',
      ),
    },
    {
      label: T('O imperativo sem forma própria'),
      text: T(
        'O indonésio não tem imperativo flexionado: o verbo nu já é ordem, e {lah} reforça. {Diam!} é «cala-te» sem desinência, sem pessoa e sem sujeito.',
      ),
    },
  ],
  examples: [
    {
      text: 'Pada mulanya adalah Firman',
      gloss: T('Jo 1:1 — {adalah} é {ada} com {lah}: a Palavra existia.'),
    },
    { text: 'Diam! Tenanglah!', gloss: T('Mc 4:39 — duas ordens sem sujeito nem tempo.') },
    {
      text: 'Ia telah mengaruniakan Anak-Nya',
      gloss: T('Jo 3:16 — {mengaruniakan}, de {karunia}: deu como dádiva.'),
    },
    { text: 'saya sudah makan', gloss: T('{sudah} antes do verbo: comi.') },
    { text: 'saya sedang makan', gloss: T('{sedang} antes do verbo: estou comendo.') },
    { text: 'saya belum makan', gloss: T('{belum} nega o tempo, não o fato.') },
    { text: 'nasi itu dimakan', gloss: T('{di-} faz o passivo sem mudar o verbo.') },
    { text: 'saya punya buku', gloss: T('{punya} é «ter»; {ada} seria «há».') },
    { text: 'dia menulis surat', gloss: T('{tulis} → {menulis}: o {t} cai diante de {meN-}.') },
  ],
  tables: [
    {
      caption: T('Os essenciais, com e sem meN-'),
      head: [T('Raiz'), T('Ativo'), T('Passivo'), T('Sentido')],
      rows: [
        [T('{makan}'), '{memakan}', '{dimakan}', T('comer')],
        [T('{lihat}'), '{melihat}', '{dilihat}', T('ver')],
        [T('{dengar}'), '{mendengar}', '{didengar}', T('ouvir')],
        [T('{tulis}'), '{menulis}', '{ditulis}', T('escrever')],
        [T('{baca}'), '{membaca}', '{dibaca}', T('ler')],
        [T('{beri}'), '{memberi}', '{diberi}', T('dar')],
        [T('{ambil}'), '{mengambil}', '{diambil}', T('tomar')],
      ],
    },
    {
      caption: T('As quatro marcas de tempo'),
      head: [T('Marca'), T('Sentido'), T('Exemplo')],
      rows: [
        [T('{sudah}'), T('acabado'), '{saya sudah makan}'],
        [T('{sedang}'), T('em curso'), '{saya sedang makan}'],
        [T('{akan}'), T('futuro'), '{saya akan makan}'],
        [T('{belum}'), T('ainda não'), '{saya belum makan}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Pada mulanya adalah Firman}, de que verbo vem {adalah}?'),
    options: [T('{ada}'), T('{adalah}'), T('{punya}'), T('{makan}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "Diam! ___!" com a ordem de acalmar (raiz {tenang}).'),
      answer: 'Tenanglah',
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao seu ativo com meN-.'),
      pairs: [
        { a: T('{tulis}'), b: T('{menulis}') },
        { a: T('{lihat}'), b: T('{melihat}') },
        { a: T('{ambil}'), b: T('{mengambil}') },
        { a: T('{dengar}'), b: T('{mendengar}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual marca diz «ainda não, mas vai acontecer»?'),
      options: [T('{tidak}'), T('{belum}'), T('{bukan}'), T('{sudah}')],
      answer: 1,
    },
  ],
};
