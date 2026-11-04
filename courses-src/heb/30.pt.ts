import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('O verbo e a cláusula'),
  subtitle: T('בָּרָא, בְּרֵאשִׁית — por que o verbo hebraico não flexiona por pessoa'),
  section: T('Verbo'),
  body: C(`## O verbo não flexiona, e isso é o ponto

Em latim, {creavit} é 3.ª pessoa: a terminação {־it} diz quem criou. Em grego, {ἔκτισεν} idem. Em hebraico, {בָּרָא} de Gênesis 1.1 não tem terminação nenhuma, e o grego continua sendo a 3.ª pessoa porque o contexto diz.

Essa é a diferença que decide a leitura: **o verbo hebraico raramente flexiona por pessoa**. Quem flexiona são os sufixos, e só quando o sujeito é preciso: {בָּרָאתִּי} «eu criei» · {בָּרָאתָּ} «tu criaste» · {בָּרָאנוּ} «nós criamos» · {בָּרָאוּ} «eles criaram». A 3.ª pessoa do singular não tem sufixo, e por isso é idêntica à 3.ª do plural sem {ו} e ao verbo sem sujeito.

A consequência é que **um verbo isolado não tem dono**. {בָּרָא} pode ser «criou», «ele criou», «Deus criou» e «criaram» — todas as leituras cabem na forma. O sujeito está em {בְּרֵאשִׁית} no começo da frase ou em {אֱלֹהִים} logo depois, e é o dicionário do contexto que resolve. O grego resolve isso na forma; o hebraico obriga a resolver no contexto.

## Quatro pessoas que são uma só

A mesma forma {בָּרָא} serve, no mesmo versículo, para mais de uma pessoa, e a mudança é feita pelo resto da frase. Em Gênesis 1.1, {בְּרֵאשִׁית} «no princípio» e {אֱלֹהִים} «Deus» dão o sujeito: {בָּרָא} é «Deus criou». Em Gênesis 1.2, {וְהָאָרֶץ הָיְתָה} «e a terra era» traz {וְ} de sequência, e o verbo {בָּרָא} continua sendo o mesmo: a forma não mudou, o sujeito mudou com a frase anterior.

Vale reter a regra prática: **quem flexiona por pessoa no hebraico são os sufixos, e o wayyiqtol não flexiona nunca**. O {וַ} + verbo de {וַיֹּאמֶר} (cap. 10) marca passado narrativo, não pessoa. Todo o wayyiqtol é 3.ª pessoa do singular masculino, e é por isso que o português escreve «e disse» e «e disseram» com a mesma palavra.

## A cláusula nominal

A cláusula hebraica não precisa de verbo. Uma frase como {יְהוָה רֹעִי} «o SENHOR é meu pastor» (Sl 23.1) tem substantivo e nada mais, e significa o que em português exige verbo e cópula.

Isso muda o que o tradutor procura. Numa oração, procure primeiro um verbo; se não houver, o que vem é um substantivo funcionando de predicado, ou um particípio, ou uma frase inteira sem verbo. O verbo hebraico, quando aparece, é a peça curta; o resto são nomes.

E o inverso também vale: muitas orações do hebraico têm o verbo e quase nenhum nome. {עָשָׂה} «ele fez» sozinho é uma oração inteira. A tradução brasileira e espanhola têm de decidir o objeto que o hebraico deixou de fora, e essa decisão é do tradutor, não da gramática.

## Onde o verbo vai na frase

Se o verbo não flexiona por pessoa, ele também não fixa o lugar do sujeito. A ordem da palavra hebraica é: substantivo-verbo-substantivo, mas o substantivo que vem antes pode ser o sujeito ou o objeto, e quem resolve é o verbo.

{בָּרָא אֱלֹהִים} «Deus criou» — o substantivo é sujeito porque o verbo {בָּרָא} «criar» é transitivo e vem antes do complemento.

{אֱלֹהִים בָּרָא} «Deus criou» — a mesma palavra na mesma posição, e o substantivo é objeto: foi criado o que está sendo criado.

O hebraico antigo, ao contrário do grego, não distingue os dois casos por marca. Quem traduz escreve a mesma frase nas duas ordens, e quem estuda precisa do verbo e da lógica para dizer qual dos dois é o sujeito.

O resultado aparece logo na primeira linha de Gênesis. {בְּרֵאשִׁית בָּרָא אֱלֹהִים} é «no princípio criou Deus»: o substantivo {בְּרֵאשִׁית} está antes do verbo, e parece sujeito, e é uma preposição com substantivo. O sujeito de {בָּרָא} está no segundo substantivo, {אֱלֹהִים}. Uma linha de texto, e três decisões que só quem conhece o verbo resolve.`),
  vocab: [
    V('בָּרָא', 'ברא', 'criou (3.ª s., sem sufixo)'),
    V('בָּרָאתִּי', 'ברא', 'eu criei'),
    V('בָּרָאתָּ', 'ברא', 'tu criaste'),
    V('בָּרָאנוּ', 'ברא', 'nós criamos'),
    V('בָּרָאוּ', 'ברא', 'eles criaram'),
    V('בְּרֵאשִׁית', 'רֵאשִׁית', 'no princípio'),
    V('אֱלֹהִים', 'אֱלֹהִים', 'Deus'),
    V('בָּרָא אֱלֹהִים', 'ברא', 'Deus criou (sujeito + verbo)'),
    V('אֱלֹהִים בָּרָא', 'ברא', 'o que foi criado (objeto + verbo)'),
    V('וַיֹּאמֶר', 'אמר', 'e disse (wayyiqtol)'),
    V('יְהוָה רֹעִי', 'רֹעֶה', 'o SENHOR é meu pastor'),
    V('הָיְתָה', 'היה', 'era (qatal 3.ª f.)'),
    V('וְהָאָרֶץ', 'אֶרֶץ', 'e a terra'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {בָּרָא אֱלֹהִים} «Deus criou», por que {אֱלֹהִים} é sujeito?'),
    options: [
      T('Porque o verbo {בָּרָא} é transitivo e vem antes do complemento'),
      T('Porque {אֱלֹהִים} tem artigo'),
      T('Porque {בָּרָא} tem dagesh'),
      T('Porque {אֱלֹהִים} é plural'),
    ],
    answer: 0,
    hint: T('Regra §4: sem caso, é o verbo transitivo em posição inicial que marca o objeto.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Ligue a forma verbal à pessoa que indica.'),
      pairs: [
        { a: '{בָּרָא}', b: T('3.ª pessoa (sem sufixo)') },
        { a: '{בָּרָאתִּי}', b: T('1.ª pessoa do singular') },
        { a: '{בָּרָאוּ}', b: T('3.ª pessoa do plural') },
        { a: '{בָּרָאתָּ}', b: T('2.ª pessoa do singular') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Complete Gênesis 1.1: «בְּרֵאשִׁית ___ אֵת הַשָּׁמַיִם» (criou).'),
      answer: 'בָּרָא',
      hint: T('É o qatal de {ברא} «criar», sem sufixo: 3.ª pessoa.'),
    },
    {
      kind: 'choose',
      prompt: T('O que a forma {וַיֹּאמֶר} «e disse» mostra sobre pessoa?'),
      options: [
        T('Que o wayyiqtol é sempre 3.ª pessoa do singular masculino'),
        T('Que o wayyiqtol flexiona por pessoa'),
        T('Que {וַ} é sufixo de 3.ª pessoa'),
        T('Que o verbo tem sujeito explícito'),
      ],
      answer: 0,
      hint: T('Regra §2: o wayyiqtol não flexiona; {וַ} marca tempo, não pessoa.'),
    },
    {
      kind: 'choose',
      prompt: T('Em {יְהוָה רֹעִי} (Sl 23.1), que tipo de frase é?'),
      options: [
        T('Frase nominal: não há verbo'),
        T('Frase com verbo'),
        T('Frase com particípio'),
        T('Oração com negação'),
      ],
      answer: 0,
      hint: T('Regra §3: o hebraico admite cláusula sem verbo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O verbo hebraico raramente flexiona por pessoa: {בָּרָא} não tem terminação, e o contexto dá o sujeito.',
      ),
    },
    {
      n: '2',
      text: T(
        'Quem flexiona por pessoa são os sufixos ({בָּרָאתִּי}, {בָּרָאוּ}), e o wayyiqtol nunca flexiona: {וַ} marca tempo, não pessoa.',
      ),
    },
    {
      n: '3',
      text: T('A cláusula hebraica pode não ter verbo: {יְהוָה רֹעִי} é uma frase nominal completa.'),
    },
    {
      n: '4',
      text: T(
        'Sem caso nominal, a ordem é substantivo-verbo-substantivo e quem resolve o papel é o verbo: {בָּרָא אֱלֹהִים} tem sujeito {אֱלֹהִים}; {אֱלֹהִים בָּרָא} tem objeto.',
      ),
    },
  ],
  notes: [
    {
      label: T('Erro comum:'),
      text: T(
        'Não há forma verbal hebraica para a 3.ª pessoa do plural sem {ו}, e a 3.ª pessoa do singular não recebe sufixo. O resultado é que {בָּרָא} serve para «criou» e, num contexto de sufixo plural por fora, para «criaram». Quem traduz verbo por verbo sem olhar o resto da frase erra a pessoa em quase todas as orações do Tanakh.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'A flexão por pessoa que o hebraico tem é um resíduo do verbofenício. Os sufixos {תִּי}, {תָּ}, {נוּ}, {וּ} e {תֶּם} são os mesmos que o participio do inglês ainda mostra em {loved} e {loves}. O grego e o latim fizeram a flexão dentro da palavra; o hebraico jogou a pessoa para fora, e é por isso que ele sobrevive na Europa e não aqui.',
      ),
    },
  ],
  examples: [
    { text: '{בָּרָא}', gloss: T('criou — 3.ª pessoa, sem sufixo (Gn 1.1)') },
    { text: '{בָּרָאתִּי}', gloss: T('eu criei — sufixo {־תִּי}') },
    { text: '{בָּרָאתָּ}', gloss: T('tu criaste — sufixo {־תָּ}') },
    { text: '{בָּרָאנוּ}', gloss: T('nós criamos — sufixo {־נוּ}') },
    { text: '{בָּרָאוּ}', gloss: T('eles criaram — sufixo {־וּ}') },
    { text: '{בְּרֵאשִׁית בָּרָא}', gloss: T('no princípio criou — o sujeito vem depois (Gn 1.1)') },
    { text: '{בָּרָא אֱלֹהִים}', gloss: T('Deus criou — substantivo é sujeito') },
    { text: '{אֱלֹהִים בָּרָא}', gloss: T('o que foi criado — substantivo é objeto') },
    { text: '{וַיֹּאמֶר}', gloss: T('e disse — wayyiqtol, sempre 3.ª m.') },
    { text: '{יְהוָה רֹעִי}', gloss: T('o SENHOR é meu pastor — cláusula nominal (Sl 23.1)') },
    { text: '{וְהָאָרֶץ הָיְתָה}', gloss: T('e a terra era — {ו} de sequência (Gn 1.2)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Flexão por pessoa em {ברא}'),
      head: [T('Pessoa'), T('Sufixo'), T('Forma'), T('Glosa')],
      rows: [
        [T('3.ª s. (m.)'), T('—'), '{בָּרָא}', T('criou (ele)')],
        [T('3.ª pl.'), '{־וּ}', '{בָּרָאוּ}', T('criaram')],
        [T('2.ª s. (m.)'), '{־תָּ}', '{בָּרָאתָּ}', T('tu criaste')],
        [T('2.ª s. (f.)'), '{־תְּ}', '{בָּרָאתְּ}', T('tu criaste (f.)')],
        [T('1.ª s.'), '{־תִּי}', '{בָּרָאתִּי}', T('eu criei')],
        [T('1.ª pl.'), '{־נוּ}', '{בָּרָאנוּ}', T('nós criamos')],
        [T('2.ª pl. m.'), '{־תֶּם}', '{בָּרָאתֶּם}', T('vós criastes')],
      ],
    },
    {
      caption: T('Tabela 2 — O wayyiqtol não flexiona'),
      head: [T('Forma'), T('O que o {וַ} faz'), T('Pessoa'), T('Glosa')],
      rows: [
        ['{וַיֹּאמֶר}', T('marca narrativa'), T('sempre 3.ª m.'), T('e disse')],
        ['{וַיִּשְׁמַע}', T('marca narrativa'), T('sempre 3.ª m.'), T('e ouviu')],
        ['{וַיְהִי}', T('marca narrativa'), T('sempre 3.ª m.'), T('e houve')],
        ['{וְהוּא}', T('é só conjunção «e»'), T('{הוּ} é pronome'), T('e ele')],
      ],
    },
  ],
};
