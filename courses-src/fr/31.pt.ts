import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('{y}, {en} e a ordem dos pronomes'),
  subtitle: T('{j’y pense}, {j’en parle} e a sequência fixa antes do verbo'),
  section: T('Os pronomes'),
  body: C(`## {y}: para onde, aonde, no que

{y} substitui um complemento introduzido por {à}, {chez} ou por um substantivo de lugar:

- {Je pense à Paris} → {J'y pense} «penso nisso / em Paris».
- {Je vais chez Paul} → {J'y vais} «vou lá».
- {Il habite à Lyon} → {Il y habite} «mora lá».

O {y} é **um único pronome**: não marca pessoa, nem número, nem gênero. Funciona porque o verbo já sabe quem é o sujeito, e o lugar já está determinado pelo verbo ou pela preposição que ele substitui.

E há um caso em que {y} **não** é pronome: {Il y a} «há». Ali {y} faz parte da locução, como em {il y a deux livres}, e o mesmo {y} fixo aparece na pergunta invertida {y a-t-il}.

## {en}: de quê, de quanto

{en} substitui um complemento com {de} ou uma quantidade:

- {Je parle du livre} → {J'en parle} «falo disso».
- {Je prends du pain} → {J'en prends} «tomo disto».
- {Elle a deux enfants} → {Elle en a deux} «ela tem dois».
- {Je m'en souviens} «eu me lembro disso».
- {Donnez-m'en} «me deem disso».

O valor partitivo é essencial: **{Je veux du pain ; j'en veux}** «quero pão; quero disto». Sem o {en} a frase não faz sentido; com ele, a quantidade desaparece e sobra a ideia de «disto».

## A sequência fixa

Os pronomes que acompanham um verbo conjugado têm posição fixa:

**sujeito + {ne} + reflexivo + objeto direto + objeto indireto + {y} + {en} + verbo + {pas} + advérbios**

Na prática, o que importa é: **{y} e {en} vão sempre juntos, no fim da fila** — depois do objeto direto e do indireto.

- {Je ne te le donne pas} «Não te dou» — {te} = objeto direto, {le} = indireto.
- {Ne lui en parle pas} «Não lhe falles nisso» — {lui} = indireto, {en} = {de} + isso.
- {Je vous en ai parlé} «Já falei com vocês nisso».
- {N'y pensez pas} «Não pense nisso» — {ne} antes de {y} vira {n'y}.

E a **elisão**: {je} + {y} = {j'y}, {je} + {en} = {j'en}, {ne} + {y} = {n'y}, {le} + {en} = {l'en}, {me} + {en} = {m'en}.

## O imperativo é diferente

No **imperativo afirmativo**, os pronomes vão **depois** do verbo, ligados por hífen:

- {Donnez-m'en} «me deem disso».
- {Va-t'en} «vai embora».
- {Vas-y} «vai lá».
- {Donne-le} «dá-lhe».

Na **negação**, o imperativo volta à ordem normal: {Ne me donnez pas} «não me deem», {N'y allez pas} «não vão lá».

E com o infinitivo, tudo fica **depois**: {Je veux lui parler} «quero falar com ele» — o pronome vai atrás do infinitivo, com a sua preposição.

## Leitura — Louis Segond

O texto bíblico francês usa {y} e {en} o tempo todo, e há versos feitos só de pronome e verbo. A fórmula de Mt 6:12 é **{Et ne nous laisse pas nos debts}** «e não nos deixes cair em tentação»: {ne} abre, {nous} vem logo depois, o verbo {laisse} fica no meio, e {pas} aparece no lugar fixo, atrás do verbo. Nenhum {en} visível — a preposição {nos} já faz o serviço dele.

**{Il y a}** está em toda parte: **{Il n'y a qu'un seul Dieu}**, **{Il y a de la différence}**, **{Il n'y a pas mieux}** «não há melhor». O {y} funciona aqui como sujeito impessoal, e é isso que permite ao francês dizer «há» onde o português precisaria de «existe».

E o caso mais bonito do capítulo: **{Là où il y a de l'amour, il y a de la paix}** «onde há amor, há paz». Duas orações com {il y a} e nenhuma pessoa presente: {y} segura sozinho o papel de sujeito, e a repetição faz o ritmo.

## O essencial

{y} substitui {à} + lugar; {en} substitui {de} + complemento, e também serve para quantidades. Na sequência, {y} e {en} são sempre os últimos antes do verbo, e a elisão cola {j'y}, {j'en}, {n'y}, {l'en}. No imperativo afirmativo, tudo muda: os pronomes vão **depois**, com hífen. Firmados esses dois, metade dos problemas com pronomes no francês desaparece.`),
  vocab: [
    V('y', 'y', 'aí / nisso (substitui {à} + lugar)'),
    V('en', 'en', 'disso / disto (substitui {de} + algo)'),
    V('j’y pense', 'penser', 'penso nisso ({je} elidido)'),
    V('j’en parle', 'parler', 'falo disso'),
    V('il y a', 'avoir', 'há ({y} faz parte da locução)'),
    V('n’y pensez pas', 'penser', 'não pense nisso ({ne} elide-se)'),
    V('je vous en ai parlé', 'parler', 'já lhe falei disso ({en} no fim da fila)'),
    V('donnez-m’en', 'donner', 'me deem disso (imperativo afirmativo)'),
    V('va-t’en', 'aller', 'vai embora! (imperativo + {en})'),
    V('vas-y', 'aller', 'vai lá (imperativo + {y})'),
    V('ne me donnez pas', 'donner', 'não me deem (negação: ordem normal)'),
    V('je veux lui parler', 'parler', 'quero falar com ele (infinitivo: pronomes depois)'),
    V('elle en a deux', 'avoir', 'ela tem dois ({en} = quantidade)'),
    V('il y a deux livres', 'livre', 'há dois livros ({y} fixo)'),
    V('ne lui en parle pas', 'parler', 'não lhe falle nisso ({lui} + {en})'),
    V('j’en veux', 'vouloir', 'quero (deste) — valor partitivo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em «{Ne lui en parle pas}», qual é a ordem dos pronomes?'),
    options: [
      T('{ne} + {lui} (indireto) + {en} (de + isso) + verbo + {pas}: o {en} é sempre o último'),
      T('{ne} + {en} + {lui} + verbo + {pas}: o {en} vem antes do indireto'),
      T('{lui} + {ne} + {en} + verbo + {pas}: o indireto abre a frase'),
      T('{ne} + {lui} + {en} + {pas} + verbo: o {pas} precede o verbo na negação'),
    ],
    answer: 0,
    hint: T(
      'A sequência é: {ne}, reflexivo, objeto direto, objeto indireto, {y}, {en}, verbo, {pas}.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Elisão: «Je pense à ce livre» → «___ pense à ce livre».'),
      answer: 'J’y',
      hint: T("{je} + {y} = {j'y}: o *-e* de {je} desaparece antes de {y}."),
    },
    {
      kind: 'choose',
      prompt: T("Em «{Donnez-m'en}», por que o pronome vem depois do verbo?"),
      options: [
        T('Porque é o imperativo afirmativo: aí os pronomes vão depois, com hífen'),
        T('Porque {en} nunca pode vir antes do verbo'),
        T('Porque o verbo {donner} é irregular e desloca o pronome'),
        T('Porque a negação está implícita na forma do verbo'),
      ],
      answer: 0,
      hint: T('Regra §4: só o imperativo afirmativo desloca os pronomes para depois do verbo.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a frase ao pronome que ela elide ou exige'),
      pairs: [
        { a: T('{Il y a deux livres}'), b: T('{y} fixo: forma parte de {il y a}') },
        { a: T('{Je pense à ce livre}'), b: T("{j'y} — elisão de {je} + {y}") },
        { a: T('{Elle a deux enfants}'), b: T('{en} partitivo: {elle en a deux}') },
        { a: T("{N'y pensez pas}"), b: T("{n'y} — {ne} elide-se antes de {y}") },
        { a: T('{Je veux lui parler}'), b: T('{lui} depois do infinitivo') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        "{y} substitui {à} + lugar ou nome de lugar ({chez}, {au}, {en}) e não marca pessoa, número nem gênero: {J'y pense}, {Il y habite}.",
      ),
    },
    {
      n: '2',
      text: T(
        "{en} substitui {de} + complemento e tem valor partitivo: {j'en parle}, {j'en veux}, {elle en a deux}. Em {il y a} não há {en} nenhum — o {y} é fixo.",
      ),
    },
    {
      n: '3',
      text: T(
        'Na sequência do verbo conjugado, a ordem é fixa: {ne} + reflexivo + objeto direto + objeto indireto + {y} + {en} + verbo + {pas}.',
      ),
    },
    {
      n: '4',
      text: T(
        "No imperativo afirmativo, os pronomes passam **depois** do verbo e ligados por hífen: {donnez-m'en}, {va-t'en}, {vas-y}. Na negação, voltam para antes: {ne me donnez pas}.",
      ),
    },
    {
      n: '5',
      text: T(
        'Com o infinitivo, {me, te, se, lui, leur, y, en} ficam **depois**: {Je veux lui parler}, {Je vais y aller}. É o oposto do imperativo afirmativo.',
      ),
    },
  ],
  notes: [
    {
      label: T('O mesmo {en} faz três trabalhos'),
      text: T(
        "{en} é o pronome mais produtivo do francês, porque faz três coisas ao mesmo tempo. Primeiro, substitui o **complemento de {de}**: {Je parle du livre} → {J'en parle}. Segundo, tem **valor partitivo**, traduzindo a ideia de «um pouco disto»: {Je prends du pain} → {J'en prends}. Terceiro, funciona como **pronome indefinido**: {Elle en a deux} «ela tem dois» — a palavra «dois» sobrevive, e {en} se limita a dizer «desse total». Um único pronome com três regras de uso: qualquer um dos trêsContexts resolve sozinho.",
      ),
    },
    {
      label: T('A negate French briga com {y} e {en}'),
      text: T(`Em **{Ne nous laissez pas nos debts}** (Mt 6:12), o {ne} fica no início, o {nous} vem logo depois, e o {pas} fica **depois do verbo** — essa é a posição do {pas} em todas as negações French. É por isso que **{ne lui en parle pas}** e não ~~{ne lui parle pas en}~~. E a elisão {ne} + {y} é obrigatória: **{n'y pensez pas}**, nunca **{ne y pensez pas}**. E {ne} + {y} + substantivo marca uma afirmação negativa: **{il n'y a pas de places}** «não há lugares».

O que a negação faz é cercar o verbo: {ne} na frente, {pas} atrás, e tudo o que está entre eles fica intacto. Os pronomes {y} e {en} moram sempre dentro desse cercado, e é por isso que eles nunca ficam para fora da negação.`),
    },
  ],
  examples: [
    { text: 'j’y pense', gloss: T('penso nisso ({je} elidido, {à} + lugar)') },
    { text: 'j’en parle', gloss: T('falo disso ({de} + o livro)') },
    { text: 'j’en veux', gloss: T('quero (deste) — valor partitivo') },
    { text: 'elle en a deux', gloss: T('ela tem dois ({en} com quantidade)') },
    { text: 'il y a deux livres', gloss: T('há dois livros ({y} fixo)') },
    { text: 'n’y pensez pas', gloss: T('não pense nisso ({ne} elide-se)') },
    { text: 'ne lui en parle pas', gloss: T('não lhe falle disso ({lui} + {en})') },
    { text: 'donnez-m’en', gloss: T('me deem disso (imperativo afirmativo)') },
    { text: 'vas-y', gloss: T('vai lá (imperativo + {y})') },
    {
      text: 'Et ne nous laisse pas nos debts',
      gloss: T('e não nos deixes cair em tentação (Mt 6:12)'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Elisão de {je} e {ne}'),
      head: [T('Antes de'), T('Forma curta'), T('Exemplo')],
      rows: [
        ['{je} + {y}', T("{j'y}"), "{j'y pense}"],
        ['{je} + {en}', T("{j'en}"), "{j'en parle}"],
        ['{ne} + {y}', T("{n'y}"), "{n'y pensez pas}"],
        ['{me/te/le/la} + {en}', T("{m'en}, {t'en}, {l'en}"), "{donnez-m'en}"],
        ['{me/te/se} + {y}', T("{m'y}, {t'y}, {s'y}"), '{vas-y}'],
      ],
    },
    {
      caption: T('Tabela 2 — A ordem dos pronomes'),
      head: [T('Posição'), T('Quem ocupa'), T('Exemplo')],
      rows: [
        ['1', T('{ne} (negação)'), '{ne lui en parle pas}'],
        ['2', T('reflexivo'), '{il se rend compte}'],
        ['3', T('objeto direto'), '{je le vois}'],
        ['4', T('objeto indireto'), '{je lui parle}'],
        ['5', T('{y}'), "{j'y vais}"],
        ['6', T('{en}'), "{j'en parle}"],
        ['7', T('verbo e {pas}'), '{je ne le vois pas}'],
        ['Imperativo af.', T('tudo vai depois do verbo'), "{donnez-m'en}"],
      ],
    },
  ],
};
