import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Leitura: Salmo 23:1-3'),
  subtitle: T('יְהוָה רֹעִי — o salmo mais amado, palavra por palavra'),
  section: T('Formas não finitas e guturais'),
  body: C(`## O texto

{יְהוָה רֹעִי לֹא אֶחְסָר} «O SENHOR é meu pastor; nada me faltará»

{בִּנְאוֹת דֶּשֶׁא יַרְבִּיצֵנִי} «em pastos verdes ele me faz repousar»

{עַל־מֵי מְנֻחוֹת יְנַהֲלֵנִי} «junto às águas tranquilas ele me conduz»

{נַפְשִׁי יְשׁוֹבֵב} «ele restaura a minha alma»

Quatro versículos, e quase tudo o que você estudou até agora está aqui.

## Verso 1: o substantivo com sufixo

{רֹעִי} é o substantivo {רֹעֶה} «pastor» com o sufixo {־ִי} (cap. 8). Repare que **não é participio**: {רֹעִי} é um nome comum com possessivo, e a frase inteira é uma frase nominal, e em hebraico isso é perfeitamente natural: {אֱלֹהִים טוֹב} «Deus é bom» não tem verbo.

{אֶחְסָר} é o qatal de 1.ª pessoa de {חסר} «faltar». Com {לֹא} na frente, um qatal negado traduz o presente: «não me falta» — e as traduções portuguesas e espanholas usam o futuro («nada me faltará»). A negação do perfectivo é um dos recursos mais elegantes da língua, e você vai encontrá-la em todo o Salmo.

Detalhe: o SENHOR é o nome divino por excelência, escrito com {י} + {ה} + {ו} + {ה} para não dizer «Adonai» (ver cap. 13).

## Verso 2: constructo, hiphil e sufixo

{בִּנְאוֹת דֶּשֶׁא} é uma cadeia de constructo: {בִּ} «em» + {נֶאֶה} «pastagem» no plural {בִּנְאוֹת} + {דֶּשֶׁא} «verdura». A tradução reúne: «em pastos de erva» = «em pastos verdes».

{יַרְבִּיצֵנִי} é o verbo mais interessante do versículo: raiz {רבץ} «deitar», molde **hiphil** («fazer deitar»), com o sufixo {־נִי} «me». Traduzimos com verbo transitivo em português e espanhol («ele me faz deitar»), o que o hebraico faz com um verbo causativo. Lembre: hiphil = «fazer alguém fazer» (cap. 9).

A vogal {ֵ} no lugar do {ַ} normal mostra o que o sufixo {־נִי} faz ao verbo; é a mesma regra de {שְׁמָרַנִי}.

## Verso 3: maqaf, constructo e piel

{עַל־מֵי מְנֻחוֹת} traz três coisas num versículo: maqaf unindo {עַל} «sobre» a {מֵי} «águas» (constructo de {מַיִם}, cap. 7); e {מְנֻחוֹת}, plural de {מְנוּחָה} «descanso» com {־וֹת} no lugar do {־ִים} porque o substantivo é feminino (cap. 3).

{יְנַהֲלֵנִי} é hiphil de {נהל} «guiar» + {־נִי}. {

Mais adiante, no mesmo versículo, {יְשׁוֹבֵב} é **piel** de {שׁוב} «voltar»: o pele do verbo significa «trazer de volta» = «restaurar». Note a diferença: {נהל} em hiphil é «conduzir» (ação), {שׁוב} em piel é «restaurar» (transformação do objeto).

{נַפְשִׁי} merece nota: {נֶפֶשׁ} significa ao mesmo tempo «alma», «garganta» e «apetite». Nos salmos, «minha alma» costuma ter o tom de «todo o que eu desejo».

## O que este salmo ensina

O Salmo 23 é um retrato completo da gramática: substantivo + sufixo (v. 1), constructo (v. 2-3), hiphil com objeto (v. 2-3), piel (v. 3), dual de {מַיִם} (v. 3), plural feminino (v. 3), negação de qatal (v. 1), nome divino (v. 1). Quem entende o versículo 1-3 entende o hebraico poético — e o resto do livro é aplicação.

Se quiser fechar o salmo: no verso 6, {רוּחַ} «vento/espírito» volta ao mesmo tempo que {שׁוֹב} «voltar» e {נַפְשִׁי} «alma»: {וְשָׂבַת רוּחַ} é «e tu voltarás», com o verbo {שׁבַת} (qatal) no lugar do piel. A mudança de molde muda o tom: de «ele me restaura» para «e tu voltas».`),
  vocab: [
    V('רֹעִי', 'רֹעֶה', 'meu pastor'),
    V('יְהוָה', 'יהוה', 'o SENHOR'),
    V('אֶחְסָר', 'חסר', 'me falta'),
    V('לֹא', 'לֹא', 'não, jamais'),
    V('יַרְבִּיצֵנִי', 'רבץ', 'ele me faz repousar'),
    V('מְנֻחוֹת', 'מְנוּחָה', 'descansos (pl. fem.)'),
    V('יְנַהֲלֵנִי', 'נהל', 'ele me conduz'),
    V('נַפְשִׁי', 'נֶפֶשׁ', 'minha alma'),
    V('יְשׁוֹבֵב', 'שׁוב', 'ele restaura (piel)'),
    V('דֶּשֶׁא', 'דֶּשֶׁא', 'verdura, relva'),
    V('בִּנְאוֹת', 'נֶאֶה', 'pastagens'),
    V('רוּחַ', 'רוּחַ', 'vento, espírito'),
    V('צַלְמַוֶת', 'צַלְמָוֶת', 'sombra de morte'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que o sufixo em «רֹעִי» significa?'),
    options: [
      T('«meu» (meu pastor)'),
      T('«dele» (o pastor dele)'),
      T('plural (pastores)'),
      T('feminino (pastora)'),
    ],
    answer: 0,
    hint: T('É o mesmo {־ִי} de {סוּסִי} «meu cavalo» (cap. 8).'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('O que {יַרְבִּיצֵנִי} significa literalmente?'),
      options: [
        T('«ele repousou»'),
        T('«ele me faz repousar» (hiphil + objeto)'),
        T('«eu me deito»'),
        T('«ele conserta»'),
      ],
      answer: 1,
      hint: T('Regra §3: hiphil é causativo, e {־נִי} é o objeto «me».'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a palavra à sua análise.'),
      pairs: [
        { a: '{רֹעִי}', b: T('substantivo + sufixo') },
        { a: '{מְנֻחוֹת}', b: T('plural feminino') },
        { a: '{יְשׁוֹבֵב}', b: T('piel') },
        { a: '{מֵי}', b: T('dual em constructo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em {לֹא אֶחְסָר}, o qatal negado {אֶחְסָר} traduz:'),
      options: [
        T('passado: «não me faltou»'),
        T('presente: «não me falta»'),
        T('imperativo: «não falte»'),
        T('condicional: «se eu não faltasse»'),
      ],
      answer: 1,
      hint: T('Regra §2: {לֹא} + qatal = presente negado.'),
    },
    {
      kind: 'fill',
      prompt: T(
        'Complete o verso 1 do Salmo 23 com o substantivo + sufixo: «יְהוָה ___» (meu pastor).',
      ),
      answer: 'רֹעִי',
      hint: T('{רֹעֶה} + {־ִי} forma o pastor no campo: o sufixo indica posse.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{רֹעִי} é substantivo + sufixo, não particípio: o hebraico admite frases nominais sem verbo ({יְהוָה רֹעִי}).',
      ),
    },
    {
      n: '2',
      text: T('{לֹא} + qatal traduz o presente: {לֹא אֶחְסָר} «não me falta» = «nada me faltará».'),
    },
    {
      n: '3',
      text: T('Hiphil + {־נִי} traduz o português «me faz + verbo»: {יַרְבִּיצֵנִי} «me faz repousar».'),
    },
    {
      n: '4',
      text: T('O plural feminino usa {־וֹת}: {מְנֻחוֹת} «descansos» (substantivo {מְנוּחָה}), não {־ִים}.'),
    },
    {
      n: '5',
      text: T(
        'Piel de {שׁוב} significa «restaurar» (trazer de volta), enquanto qatal de {שׁב} significa «voltar»: o molde decide a direção.',
      ),
    },
  ],
  notes: [
    {
      label: T('Sob a forma escrita:'),
      text: T(
        'Os salmos chegaram até nós com as vogais dos escribas medievais, mas o texto original dos salmos era escrito apenas com consoantes, como o versículo 1, que sobrevive também sem vogais. As traduções dizem portanto um pouco mais: a leitura que você está fazendo é uma leitura de mil anos, e ainda assim cada palavra funciona.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'O verbo {רבץ} «reposar» gerou um novo parentesco: {רֹעִי} não é participio, mas o hebraico tardio de hoje diz {רוֹעִי} ao pastor no campo. Duas línguas distintas, uma raiz em comum: a ovelha e o pastor sempre conviveram no campo, e o verbo reteve esse cheiro pastoril ao longo de três mil anos.',
      ),
    },
  ],
  examples: [
    { text: 'o SENHOR', gloss: T('o SENHOR — nome divino, escrito com {י} inicial') },
    { text: '{רֹעִי}', gloss: T('meu pastor — {רֹעֶה} + {־ִי}') },
    { text: '{לֹא אֶחְסָר}', gloss: T('nada me faltará — qatal negado') },
    { text: '{בִּנְאוֹת דֶּשֶׁא}', gloss: T('pastos verdes — cadeia de constructo') },
    { text: '{יַרְבִּיצֵנִי}', gloss: T('ele me faz repousar — hiphil + {־נִי}') },
    { text: '{עַל־מֵי}', gloss: T('junto às águas — maqaf + constructo') },
    { text: '{מֵי}', gloss: T('águas — dual em constructo') },
    { text: '{מְנֻחוֹת}', gloss: T('descansos — plural feminino') },
    { text: '{יְנַהֲלֵנִי}', gloss: T('ele me conduz — hiphil + {־נִי}') },
    { text: '{נַפְשִׁי}', gloss: T('minha alma — {נֶפֶשׁ} (alma/garganta/apetite)') },
    { text: '{יְשׁוֹבֵב}', gloss: T('ele restaura — piel de {שׁוב}') },
    { text: '{וְשָׂבַת רוּחַ}', gloss: T('e tu voltarás (v. 6) — qatal de {שׁוב}') },
    { text: '{לֹא־אִירָא}', gloss: T('não temerei mal (v. 4) — negação de perfectivo') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Salmo 23:1-3 palavra por palavra'),
      head: [T('Palavra'), T('Glosa'), T('Análise')],
      rows: [
        ['o SENHOR', T('o SENHOR'), T('o nome divino (tetragrama)')],
        ['{רֹעִי}', T('meu pastor'), T('{רֹעֶה} + {־ִי} (sufixo, cap. 8)')],
        ['{לֹא}', T('não'), T('nega um qatal: presente')],
        ['{אֶחְסָר}', T('me falta'), T('qatal 1.ª sing. de {חסר}')],
        ['{בִּנְאוֹת}', T('pastos'), T('plural de {נֶאֶה} em constructo')],
        ['{דֶּשֶׁא}', T('verdura'), T('cadeia de constructo')],
        ['{יַרְבִּיצֵנִי}', T('ele me faz repousar'), T('hiphil de {רבץ} + {־נִי}')],
        ['{מֵי}', T('águas'), T('constructo de {מַיִם} (dual)')],
        ['{מְנֻחוֹת}', T('descansos'), T('plural fem. de {מְנוּחָה}')],
        ['{יְנַהֲלֵנִי}', T('ele me conduz'), T('hiphil de {נהל} + {־נִי}')],
        ['{נַפְשִׁי}', T('minha alma'), T('{נֶפֶשׁ} + {־ִי}')],
        ['{יְשׁוֹבֵב}', T('ele restaura'), T('piel de {שׁוב}')],
      ],
    },
    {
      caption: T('Tabela 2 — As quatro raízes do salmo e seus moldes'),
      head: [T('Raiz'), T('Qal'), T('Piel'), T('Hiphil'), T('Glosa (cap. 23)')],
      rows: [
        ['{רבץ}', '{רָבֵץ}', '{רִבֵּץ}', '{יַרְבִּיץ}', T('reposar (v. 2)')],
        ['{נהל}', '{נָהַל}', '{נֵהַל}', '{יַנְהֵל}', T('conduzir (v. 3)')],
        ['{שׁוב}', '{שָׁב}', '{יְשׁוֹב}', '{יְשִׁיב}', T('voltar (v. 6) / restaurar (v. 3)')],
        ['{חסר}', '{חָסֵר}', '—', '{יַחְסֵר}', T('faltar (v. 1)')],
      ],
    },
  ],
};
