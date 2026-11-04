import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  section: T('Verbo'),
  title: T('Os verbos essenciais'),
  subtitle: T('行く, 来る, する, 食べる, 着る: os verbos que sustentam quase toda frase'),
  body: C(`## Quinze verbos, e dois que não têm regra

Um verbo japonês regular flexiona pela terminação: em {食べる}, {食べない}, {食べた}, o radical {食べ-} não se mexe. Os essenciais incluem os dois únicos verbos irregulares do japonês: {する} «fazer» e {来る} «vir». Nenhum outro verbo é irregular — mas esses dois aparecem em toda página.

São poucos e pesam muito. {行く} ir, {来る} vir, {する} fazer, {ある} existir (inanimado), {いる} existir (animado), {食べる} comer, {飲む} beber, {着る} vestir, {見る} ver, {聞く} ouvir, {言う} dizer, {書く} escrever, {読む} ler, {分かる} entender, {知る} saber, {思う} pensar, {持つ} ter, {寝る} dormir, {歩く} andar, {走る} correr, {泳ぐ} nadar, {話す} falar cobrem quase tudo o que se diz num capítulo de Evangelho.

## {する} e {来る}: os dois irregulares

{する} «fazer» é o verbo mais irregular: {する}, {しない}, {した}, {して}. O passado é {した}, não {すた}. E o te-form é {して}, não {して} com o {し} do radical. {来る} «vir» é o outro: {来る}, {来ない}, {来た}, {来て}. O radical muda de {く} para {こ} no negativo e no passado: {来ない}, {来た}.

Esses dois verbos são a exceção que confirma a regra: todo o resto do japonês flexiona regularmente. Quem decorou {する} e {来る} decorou as únicas formas que não se deduzem.

## {ある} e {いる}: existir

{ある} «existir» é para coisas inanimadas: {本がある}, «há um livro». {いる} «existir» é para coisas animadas: {人がいる}, «há uma pessoa». O negativo de {ある} é {ない}, não {あるない}: {本がない}, «não há livro». O negativo de {いる} é {いない}: {人がいない}, «não há pessoa».

{ある} não tem passivo nem causativo — é um verbo de estado, não de ação. {いる} também. Os dois são os verbos mais frequentes do japonês, e a escolha entre eles é a escolha entre animado e inanimado.

## Na Bíblia

João 1:1 começa com {あった}: {初めに言があった}, no começo havia o Verbo. {あった} é o passado de {ある}, e {言} é o substantivo «palavra». O japonês diz «havia a palavra», e o grego diz {ἦν ὁ λόγος}, «era o Verbo». A diferença é a do verbo: {ある} é estado, {いる} é existência animada.

João 3:16 traz {愛した}, o passado de {愛する} «amar»: {神は世界を愛した}, Deus amou o mundo. O japonês coloca o verbo no final da frase, e o objeto vem antes: {世界を愛した}. O grego diz {ἠγάπησεν τὸν κόσμο}, e a ordem é a mesma.

Marcos 4:39 traz {黙れ}, «cala-te»: é o imperativo de {黙る} «calar». O japonês coloca a ordem no verbo, e o objeto vem antes: {黙れ} é a ordem completa.`),
  vocab: [
    V('行く', '行く', 'ir'),
    V('行った', '行く', 'fui'),
    V('来る', '来る', 'vir'),
    V('来た', '来る', 'vim'),
    V('する', 'する', 'fazer'),
    V('した', 'する', 'fiz'),
    V('ある', 'ある', 'existir (inanimado)'),
    V('ない', 'ある', 'não haver'),
    V('いる', 'いる', 'existir (animado)'),
    V('いない', 'いる', 'não haver (animado)'),
    V('食べる', '食べる', 'comer'),
    V('食べた', '食べる', 'comi'),
    V('飲む', '飲む', 'beber'),
    V('飲んだ', '飲む', 'bebi'),
    V('着る', '着る', 'vestir'),
    V('見る', '見る', 'ver'),
    V('見た', '見る', 'vi'),
    V('聞く', '聞く', 'ouvir'),
    V('聞いた', '聞く', 'ouvi'),
    V('言う', '言う', 'dizer'),
    V('言った', '言う', 'disse'),
    V('書く', '書く', 'escrever'),
    V('書いた', '書く', 'escrevi'),
    V('読む', '読む', 'ler'),
    V('分かる', '分かる', 'entender'),
    V('知る', '知る', 'saber'),
    V('思う', '思う', 'pensar'),
    V('持つ', '持つ', 'ter'),
    V('寝る', '寝る', 'dormir'),
    V('歩く', '歩く', 'andar'),
    V('走る', '走る', 'correr'),
    V('泳ぐ', '泳ぐ', 'nadar'),
    V('話す', '話す', 'falar'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{する} e {来る} são os únicos verbos irregulares: {する}, {しない}, {した}, {して}; {来る}, {来ない}, {来た}, {来て}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{ある} é para inanimados, {いる} para animados. O negativo de {ある} é {ない}, não {あるない}.',
      ),
    },
    {
      n: '§3',
      text: T('O passado de {行く} é {行った}, não {行いた}. O te-form é {行って}, não {行いて}.'),
    },
    {
      n: '§4',
      text: T(
        'O japonês coloca o verbo no final da frase: {世界を愛した}, «amou o mundo». O objeto vem antes do verbo.',
      ),
    },
    {
      n: '§5',
      text: T(
        'João 1:1 usa {あった} (passado de {ある}) e João 3:16 usa {愛した} (passado de {愛する}): o Verbo já existia, e Deus amou.',
      ),
    },
  ],
  notes: [
    {
      label: T('O {ある} que não tem passivo'),
      text: T(
        '{ある} é um verbo de estado, não de ação. Não tem passivo nem causativo. Onde o português diz «foi feito», o japonês diz {作られた} (passivo de {作る}), não {ある}.',
      ),
    },
    {
      label: T('O {いる} que não é «ser»'),
      text: T(
        '{いる} é «existir» para animados, não «ser». Onde o português diz «ele é médico», o japonês diz {医者だ}, com o verbo de ser {だ}, não {いる}.',
      ),
    },
  ],
  examples: [
    { text: '初めに言があった', gloss: T('Jo 1:1 — {あった} é passado de {ある}: havia o Verbo.') },
    {
      text: '神は世界を愛した',
      gloss: T('Jo 3:16 — {愛した} é passado de {愛する}: Deus amou o mundo.'),
    },
    { text: '本がある', gloss: T('{ある} com inanimado: há um livro.') },
    { text: '人がいる', gloss: T('{いる} com animado: há uma pessoa.') },
    { text: '本がない', gloss: T('negativo de {ある}: não há livro.') },
    { text: '行った', gloss: T('passado de {行く}: fui.') },
    { text: '来た', gloss: T('passado de {来る}: vim.') },
    { text: '食べた', gloss: T('passado de {食べる}: comi.') },
    { text: '黙れ', gloss: T('Mc 4:39 — imperativo de {黙る}: cala-te.') },
  ],
  tables: [
    {
      caption: T('O presente e o passado dos essenciais'),
      head: [T('Verbo'), T('Dicção'), T('Presente'), T('Passado'), T('Negativo')],
      rows: [
        [T('{行く}'), T('godan'), T('{行く}'), T('{行った}'), T('{行かない}')],
        [T('{来る}'), T('irregular'), T('{来る}'), T('{来た}'), T('{来ない}')],
        [T('{する}'), T('irregular'), T('{する}'), T('{した}'), T('{しない}')],
        [T('{食べる}'), T('ichidan'), T('{食べる}'), T('{食べた}'), T('{食べない}')],
        [T('{飲む}'), T('godan'), T('{飲む}'), T('{飲んだ}'), T('{飲まない}')],
        [T('{着る}'), T('ichidan'), T('{着る}'), T('{着た}'), T('{着ない}')],
        [T('{見る}'), T('ichidan'), T('{見る}'), T('{見た}'), T('{見ない}')],
        [T('{聞く}'), T('godan'), T('{聞く}'), T('{聞いた}'), T('{聞かない}')],
        [T('{言う}'), T('godan'), T('{言う}'), T('{言った}'), T('{言わない}')],
        [T('{書く}'), T('godan'), T('{書く}'), T('{書いた}'), T('{書かない}')],
        [T('{読む}'), T('godan'), T('{読む}'), T('{読んだ}'), T('{読まない}')],
        [T('{持つ}'), T('godan'), T('{持つ}'), T('{持った}'), T('{持たない}')],
        [T('{寝る}'), T('ichidan'), T('{寝る}'), T('{寝た}'), T('{寝ない}')],
        [T('{歩く}'), T('godan'), T('{歩く}'), T('{歩いた}'), T('{歩かない}')],
        [T('{走る}'), T('godan'), T('{走る}'), T('{走った}'), T('{走らない}')],
        [T('{泳ぐ}'), T('godan'), T('{泳ぐ}'), T('{泳いだ}'), T('{泳がない}')],
        [T('{話す}'), T('godan'), T('{話す}'), T('{話した}'), T('{話さない}')],
      ],
    },
    {
      caption: T('ある e いる: a escolha entre animado e inanimado'),
      head: [T('Verbo'), T('Uso'), T('Presente'), T('Passado'), T('Negativo')],
      rows: [
        [T('{ある}'), T('inanimado'), T('{ある}'), T('{あった}'), T('{ない}')],
        [T('{いる}'), T('animado'), T('{いる}'), T('{いた}'), T('{いない}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {初めに言があった}, qual o tempo de {あった}?'),
    options: [T('Presente'), T('Passado'), T('Futuro'), T('Te-form')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "神は世界を___" com o passado de {愛する} para "amou".'),
      answer: '愛した',
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao seu passado.'),
      pairs: [
        { a: T('{行く}'), b: T('{行った}') },
        { a: T('{来る}'), b: T('{来た}') },
        { a: T('{食べる}'), b: T('{食べた}') },
        { a: T('{する}'), b: T('{した}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual o negativo de {ある}?'),
      options: [T('{あるない}'), T('{ない}'), T('{あらない}'), T('{なかった}')],
      answer: 1,
    },
  ],
};
