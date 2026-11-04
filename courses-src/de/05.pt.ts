import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Quando não se usa artigo'),
  subtitle: T('Matérias, estações, idiomas, profissões'),
  section: T('Os artigos'),
  body: C(`O alemão usa o artigo definido muito mais que o espanhol ou o português, mas também o dispensa em um número previsível de casos. A regra prática é: se o substantivo nomeia uma substância, um período, um idioma ou uma função, e não uma coisa contável e individual, o artigo desaparece.

Entram nesse grupo as matérias e materiais: Wasser, Gold, Holz, Brot, Wein. Diz-se Ich trinke Wasser, e não Ich trinke das Wasser, quando se fala da substância em geral. As estações e os meses seguem o mesmo padrão: im Sommer, im Januar, letzten Monat. Os dias da semana idem: am Montag, heute, gestern, letzten Sonntag.

Os idiomas e as disciplinas dispensam artigo: Sie spricht Deutsch, Er ist gut in Mathematik, Ich lerne Englisch. Os países também, quando não se trata de um país determinado: Er reist nach Deutschland, aber Er reist in die Schweiz (aqui, artículo, porque se nomeia uma unidade política determinada).

As profissões e funções, quando descrevem o que alguém é, levam artigo zero: Er ist Lehrer. Sie ist Ärztin. Vou in die Schule, in die Kirche, zur Arbeit: o substantivo é uma instituição tomada pelo seu uso.

Por fim, note a construção frequentíssima Ich habe Hunger, Ich habe Durst, Ich habe Angst, Ich habe Zeit: o substantivo abstrato entra sem artigo, e apenas se diria "ich habe eine Angst" quando a angústia é uma ocorrência concreta e delimitada.`),
  vocab: [
    V('das Wasser', 'Wasser', 'a água (matéria, sem artigo)'),
    V('das Gold', 'Gold', 'o ouro'),
    V('der Sommer', 'Sommer', 'o verão (estação)'),
    V('der Januar', 'Januar', 'janeiro (mês)'),
    V('am Montag', 'Montag', 'na segunda-feira'),
    V('Deutsch', 'Deutsch', 'alemão (o idioma)'),
    V('Mathematik', 'Mathematik', 'a matemática (disciplina)'),
    V('der Lehrer', 'Lehrer', 'o professor'),
    V('die Ärztin', 'Ärztin', 'a médica (feminina de Arzt)'),
    V('in die Schule', 'Schule', 'à escola (instituição)'),
    V('Hunger haben', 'Hunger', 'ter fome'),
    V('Durst haben', 'Durst', 'ter sede'),
    V('Angst haben', 'Angst', 'ter medo'),
    V('ein Stück Brot', 'Brot', 'um pedaço de pão'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase está correta?'),
    options: [
      T('Ich trinke das Wasser.'),
      T('Ich trinke Wasser.'),
      T('Ich trinke ein Wasser.'),
      T('Ich trinke die Wassers.'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete sem artigo: Er ist ___ (professor).'),
      answer: 'Lehrer',
      hint: T('Profissão como predicado.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete a instituição: Die Kinder gehen in ___ Schule.'),
      answer: 'die',
      hint: T('A instituição como unidade determinada leva artigo.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual substantivo pede artigo definido?'),
      options: [T('Wasser'), T('Deutsch'), T('Wein'), T('das Brot')],
      answer: 3,
    },
    {
      kind: 'match',
      prompt: T('Relacione a construção ao seu sentido.'),
      pairs: [
        { a: T('Angst haben'), b: T('ter medo (disposição)') },
        { a: T('ein Stück Brot'), b: T('um pedaço de pão (medida)') },
        { a: T('in die Kirche'), b: T('à igreja (instituição)') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Substantivos de substância em geral não levam artigo; a medida é que o introduz: ein Glas Wasser, zwei Tassen Kaffee.',
      ),
    },
    {
      n: '2',
      text: T(
        'Datas e estações aparecem sem artigo quando indicam o período de forma geral, e com artigo quando indicam um período determinado: im Januar / im Januar 2024.',
      ),
    },
    {
      n: '3',
      text: T(
        'Idiomas, disciplinas e países nunca levam artigo definido: ich spreche Englisch, er studiert Medizin, wir fahren nach Österreich.',
      ),
    },
    {
      n: '4',
      text: T(
        'Uma profissão como predicativo dispensa artigo (Er ist Arzt), mas como aposto definido exige-o (Als Arzt half er; Der Arzt half).',
      ),
    },
  ],
  notes: [
    {
      label: T('Zero article ≠ ausência de informação'),
      text: T(
        'Ler a ausência de artigo como "falta de informação" leva a erros. Em Er ist Lehrer o substantivo não é menos determinado: significa precisamente que a pessoa exerce aquela função. O artículo zero é um morfema com valor próprio, e não uma omissão.',
      ),
    },
    {
      label: T('Ligação bíblica'),
      text: T(
        'Em João 6:35, Ich bin das Brot des Lebens. O contraste entre das Brot (a massa determinada) e o abstrato Leben mostra que o artigo marca o substantivo determinado, não o conceito.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ich trinke gern Wasser.',
      gloss: T('Eu gosto de beber água (substância sem artigo).'),
    },
    {
      text: 'Er trinkt ein Glas Wasser.',
      gloss: T('Ele bebe um copo de água (a medida introduz o artículo).'),
    },
    { text: 'Im Sommer ist es hier heiß.', gloss: T('No verão é quente aqui.') },
    {
      text: 'Gestern war ich im Garten.',
      gloss: T('Ontem eu estava no jardim (gestern sem artigo).'),
    },
    { text: 'Sie spricht gut Deutsch.', gloss: T('Ela fala bem alemão (idioma sem artigo).') },
    {
      text: 'Die Kinder gehen in die Schule.',
      gloss: T('As crianças vão para a escola (instituição com artigo).'),
    },
    { text: 'Ich habe Hunger.', gloss: T('Estou com fome (abstração sem artigo).') },
    {
      text: 'Er fährt morgen nach Berlin.',
      gloss: T('Ele vai amanhã para Berlim (destino sem artigo).'),
    },
  ],
  tables: [
    {
      caption: T('Com artigo e sem artigo'),
      head: ['Categoria', 'Com artigo', 'Sem artigo'],
      rows: [
        ['matérias', 'das Wasser trinken (a água do copo)', 'Wasser trinken (beber água)'],
        ['estações', 'im Sommer 2000', 'der Sommer war heiß (o verão de 2000)'],
        ['meses e dias', 'im Januar, am Montag', 'heute, gestern, morgen'],
        ['idiomas', 'das Deutsch lernen', 'Deutsch sprechen'],
        ['disciplinas', 'in der Mathematik gut sein', 'gut in Mathematik sein'],
        ['países', 'in die Schweiz reisen', 'nach Deutschland reisen'],
        ['profissões', 'der Lehrer Meier', 'Er ist Lehrer (função)'],
        ['instituições', 'in die Schule gehen', 'zur Schule gehen (ir lá)'],
        ['estados', 'die Angst im Gesicht sehen', 'Angst haben (disposição)'],
        ['quantidade', 'ein Stück Brot, zwei Gläser', 'viel Brot, wenig Zeit'],
      ],
    },
    {
      caption: T('Substantivos sem artigo frequentíssimo'),
      head: ['Construção', 'Exemplo', 'Tradução'],
      rows: [
        ['haber + abstração', 'Ich habe Hunger.', 'estou com fome'],
        ['haber + abstração', 'Wir haben Zeit.', 'temos tempo'],
        ['verbo + abstração', 'Er macht sich Sorgen.', 'preocupa-se'],
        ['in + função', 'in die Schule / in die Kirche', 'à escola / à igreja'],
        ['nach + direção', 'nach Hause, nach Deutschland', 'para casa, para a Alemanha'],
        ['Zu + Institution', 'zur Arbeit, zum Arzt', 'ao trabalho, ao médico'],
      ],
    },
  ],
};
