import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Verbos no presente'),
  subtitle: T('amar, crer, partir e verbos irregulares'),
  section: T('O verbo: forma e tempo'),
  body: C(`## Três sentidos para uma forma só

O presente português descreve hábito, fato atual ou verdade permanente, e a forma é a mesma nos três casos. O que muda é o que o falante quer dizer, e é o contexto que decide. “Eu amo os meus amigos” é hábito; “ele ama” pode ser o que está acontecendo agora; “Deus é amor” (1 Jo 4.8) não é afirmação sobre o que Deus fará, é afirmação sobre o que ele é.

Nos textos bíblicos o presente é famoso por isso. João 3:16 diz {creram} no imperfecto, mas 1 Jo 4.8 e Jo 14.6 usam o presente para o que não tem data: {Deus é amor}, {Eu sou o caminho}. Traduzir por {será} ou {seria} resolve a gramática do verbo e quebra a afirmação.

## As terminações e a armadilha do -ir

As terminações regulares de {amar} são {-o, -as, -a, -amos, -am}; as de {crer} são {-o, -es, -e, -emos, -em}; as de {partir} são {-o, -es, -e, -imos, -em}. Repare que só o {-ir} muda de {-e} para {-i} no presente: é a única terminação que faz o verbo com o infinitivo em {-ir} seguir o padrão de {-er}.

É essa a armadilha do texto bíblico: {partimos} e {-imos}, não {partemos} e {-emos}. A forma {cremos} existe e é de {crer}; a forma {partimos} é de {partir} e nada mais.

Os verbos irregulares mais frequentes são {ser}, {ter}, {ir}, {dizer}, {fazer} e {haver}. Não há regra que os produza: {sou} e {são} vem do latim, e {temos} troca o {-n} do latim {tenemus} por um {-m}.

## O que a forma não diz

A forma {creio} é o presente de {crer} na primeira pessoa, e é o par que se confunde com {crio}, presente de {criar}. A diferença está no que o {e} faz: {cr-e-io} tem {ei}, {cr-io} tem só {i}.

A preposição {em} também muda o sentido sem mudar a forma. {creio} sozinho é incomplete, e {creio em Deus} quer dizer que acredito que Deus existe e é confiável. O grego de Jo 3:15 usa {πιστεύω} com {εἰς}, e é o dativo {εἰς} que {em} traduz.

## O que ler

Em qualquer verbo no presente, pergunte: é {amar} ou {partir}, e a terminação confirma? É irregular, e então qual forma irregular? E há preposição junto, como o {em} de {creio em}? As três respostas resolvem o verbo antes de a pessoa decidir o resto.`),
  vocab: [
    V('amo', 'amar', 'eu amo'),
    V('ama', 'amar', 'ele ama'),
    V('creio', 'crer', 'eu creio'),
    V('crê', 'crer', 'ele crê'),
    V('sou', 'ser', 'eu sou'),
    V('é', 'ser', 'ele é'),
    V('tenho', 'ter', 'eu tenho'),
    V('diz', 'dizer', 'ele diz'),
    V('vem', 'vir', 'ele vem'),
    V('está', 'estar', 'ele está'),
    V('amar', 'amar', 'amar (verbo)'),
    V('criar', 'criar', 'criar'),
    V('fazer', 'fazer', 'fazer'),
    V('haver', 'haver', 'haver (verbo irregular)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a forma presente de “crer” na 1ª pessoa?'),
    options: [T('creio'), T('crea'), T('crio'), T('creria')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete “Deus ___ amor”.'),
      answer: 'é',
      hint: T('Verbo ser, 3ª pessoa do presente.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase indica uma verdad permanente?'),
      options: [
        T('Eu amo os meus amigos.'),
        T('Deus é amor.'),
        T('Ele amou a cidade.'),
        T('Eu amarei os meus amigos.'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Ligue presente a pessoa correspondente.'),
      pairs: [
        { a: T('sou'), b: T('1ª pessoa') },
        { a: T('é'), b: T('3ª pessoa') },
        { a: T('temos'), b: T('1ª pessoa plural') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O presente de {ser} e {ter} não segue regra: {sou}, {és}, {é}, {somos}, {são} e {tenho}, {tens}, {tem}, {temos}, {têm}. São as duas formas que o texto bíblico repete a cada página.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Verbo em {-ir} faz {-o, -es, -e, -imos, -em}: {parto}, {partes}, {parte}, {partimos}, {partem}. Só o {-ir} troca o {-e} do presente por {-i}.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{cr-e-io} tem {ei} e {cr-io} não tem: é o {e} que separa {creio} de {crio}, e não a letra que vem depois.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{creio} sozinho está incompleto; {creio em Deus} é o que diz que acredito que ele existe e é confiável, e é o {em} que acrescenta isso.',
      ),
    },
    {
      n: '§5',
      text: T(
        'No presente sem data, {Deus é amor} (1 Jo 4.8) e {Eu sou o caminho} (Jo 14.6) afirmam o que o sujeito é. Traduzir por {será} ou {seria} conserva a forma e perde a afirmação.',
      ),
    },
  ],
  notes: [
    {
      label: T('Aceitação e'),
      text: T(
        'Em Portugal, {falo} e {fales} podem receber acento diferencial, que o brasileiro não usa. As tabelas deste curso seguem o sistema brasileiro, o mesmo das traduções bíblicas em português do Brasil.',
      ),
    },
    {
      label: T('O grego também'),
      text: T(
        'O grego de Jo 3.15 usa {πιστεύω} com {εἰς} ({creio em}), e {εἰς} é dativo: quem traduz por {creio Deus} perdeu o complemento.',
      ),
    },
  ],
  examples: [
    { text: 'Deus é amor.', gloss: T('Presente com valor de verdade sem data.') },
    { text: 'Eu sou o caminho.', gloss: T('Presente que afirma o que Jesus é (Jo 14.6).') },
    { text: 'Eu creio em Deus.', gloss: T('O {em} completa o sentido de {crer}.') },
    { text: 'Eu amo os meus amigos.', gloss: T('Presente de hábito, não de evento.') },
    { text: 'Ele ama o povo.', gloss: T('Pode ser o que está acontecendo agora.') },
    { text: 'A multidão grita.', gloss: T('Presente em cena, e o contexto dá o tempo.') },
    {
      text: 'Nós partimos ao amanhecer.',
      gloss: T('{-imos}: só o infinitivo em {-ir} troca o {-e}.'),
    },
    { text: 'Eles creem nos profetas.', gloss: T('{creem} de {crer}, e não de {criar}.') },
    { text: 'Não temas, disse ele.', gloss: T('Negação que precede o verbo e mantém o presente.') },
  ],
  tables: [
    {
      caption: T('Presente regular dos três modelos'),
      head: ['Pessoa', 'amar', 'crer', 'partir'],
      rows: [
        ['eu', 'amo', 'creio', 'parto'],
        ['tu', 'amas', 'crês', 'partes'],
        ['ele', 'ama', 'crê', 'parte'],
        ['nós', 'amamos', 'cremos', 'partimos'],
        ['eles', 'amam', 'creem', 'partem'],
      ],
    },
    {
      caption: T('Os irregulares que o texto repete'),
      head: ['Pessoa', 'ser', 'ter', 'haver'],
      rows: [
        ['eu', 'sou', 'tenho', 'hei'],
        ['tu', 'és', 'tens', 'há'],
        ['ele', 'é', 'tem', 'há'],
        ['nós', 'somos', 'temos', 'há'],
        ['eles', 'são', 'têm', 'há'],
      ],
    },
    {
      caption: T('O que o presente pode descrever'),
      head: ['Valor', 'Exemplo', 'Referência'],
      rows: [
        ['hábito', 'eu amo os meus amigos', '—'],
        ['fato atual', 'ele ama o povo', '—'],
        ['verdade sem data', 'Deus é amor', '1 Jo 4.8'],
      ],
    },
  ],
};
