import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('Os pronomes demonstrativos'),
  subtitle: T('{ce, cet, cette, ces}, os sufixos {-ci} e {-là} e {celui}'),
  section: T('Os pronomes'),
  body: C(`## A família que concorda

O demonstrativo French tem quatro formas e elas concordam com o substantivo em gênero e número:

- {ce} — masculino singular: {ce livre} «este livro».
- {cet} — masculino singular diante de vogal ou *h* mudo: {cet homme} «este homem», {cet arbre} «esta árvore».
- {cette} — feminino singular: {cette maison} «esta casa».
- {ces} — qualquer plural: {ces enfants} «estes crianças».

O {cet} é a mesma eufonia dos possessivos, com a mesma exceção: {ce héros} «este herói» e {ce hibou} «este bufo» ficam com o *-e*, porque o *h* é aspirado.

## {-ci} e {-là}: distância e escopo

Os sufixos {-ci} («aqui») e {-là} («aí») marcam a posição em relação a quem fala:

- {ce livre-ci} «este livro aqui» — perto de mim.
- {ce livre-là} «aquele livro ali» — longe de mim, ou no campo de visão de outra pessoa.

Sem sufixo, o valor é mais vago e depende de {ici} e de {là}: {Je vois le livre} «vejo o livro» é neutro; {Voici le livre} «eis aqui o livro» e {Voilà le livre} «eis ali o livro» fixam o ponto.

E há o par de **interjeições de apresentação**, que na prática são demonstrativos fossilizados: {le voilà} «eis ali está ele», {la voici} «eis aqui está ela», {les voilà} «eis ali estão eles».

## Substitutos: {celui} e companhia

Quando o demonstrativo substitui o substantivo, a forma muda para a família de {celui}:

- {celui} — masculino singular: {celui qui parle} «o que fala».
- {celle} — feminino singular: {celle qui habite ici} «a que mora aqui».
- {ceux} e {celles} — plural: {ceux que vous voyez} «os que você vê».

E com {de}, o pronome se contracta e vira uma forma só: {celui de} «o de», {celle de} «a de», {ceux de} «os de». Em {le livre de celui-ci} «o livro daquele» o possessivo vem antes do demonstrativo: {celui-ci} é uma só palavra.

## Os dois neutros: {ceci} e {cela}

Sem referente nominal, o demonstrativo vira {ceci} «isto» e {cela} «isso»:

- {Ceci est important.} «Isto é importante.» — o que eu tenho diante de mim, ou o que vou dizer.
- {Cela ne l'est pas.} «Isso não é.» — o que você já sabe, à distância.

E há a forma do verbo impessoal: {C'est} + substantivo, que vira {Ce sont} quando o substantivo é plural, mesmo que o antecedente seja masculino: **{C'est un livre}** é correto, **{C'est des livres}** é errado; o francês troca o demonstrativo, não o substantivo.

## Leitura — Louis Segond

A Bíblia francesa é pródiga em {ceci} e {cela}, porque o grego original também era. Expressões fixas como {cela va sans dire} «isso vai sem dizer» e {voilà ce que je voulais dire} «é isto que eu queria dizer» sobrevivem no francês moderno, e todas são construídas com {cela} ou {ce} mais um verbo.

A Bíblia francesa também usa {c'est} como sujeito com muita frequência onde o português usaria um verbo impessoal ou uma oração inteira: **{C'est la foi, ce n'est pas des œuvres}** (Gál 2:16) «é a fé, não são as obras», **{C'est par la foi, non par les œuvres}** — a construção se repete, e é a mais traduzida do Novo Testamento.

E o mais bonito: **{Voici}** e **{Voilà}** são os responsáveis por metade dos títulos franceses de séries e traduções — **{Voici laNouvelle Bible Louis Segond}** «eis aqui a Nova Bíblia Louis Segond». O texto usa {voici} para apresentar o que vem, e {voilà} para mostrar o que já está ali.

O mais bonito ainda é **{Ceux qui}** em Gál 4:28, **{ceux qui sont en Christ}** «os que estão em Cristo» — a Igreja é chamada pelo demonstrativo de terceira pessoa, e o verbo concorda com o substantivo que vem depois. Se {ceux} isolado já é estranho, ali o pronome tem sujeito.

## O essencial

{ce, cet, cette, ces} concordam com o substantivo; {-ci} e {-là} dizem onde; {celui, celle, ceux, celles} substituem o substantivo; {ceci} e {cela} funcionam sem referente. E {c'est}/{ce sont} trocam o singular pelo número do que vem depois, o que é o único lugar do capítulo em que o demonstrativo discorda do substantivo.`),
  vocab: [
    V('ce', 'ce', 'este (masculino singular)'),
    V('cet', 'cet', 'este (masculino + vogal ou h mudo)'),
    V('cette', 'cette', 'esta (feminino singular)'),
    V('ces', 'ces', 'estes (plural, qualquer gênero)'),
    V('ce héros', 'héros', 'este herói (h aspirado: sem {cet})'),
    V('ce livre-ci', 'livre', 'este livro aqui (perto de mim)'),
    V('ce livre-là', 'livre', 'aquele livro ali (longe de mim)'),
    V('celui', 'celui', 'o que (masculino singular)'),
    V('celle', 'celle', 'a que (feminino singular)'),
    V('ceux de', 'ceux', 'os de (plural + {de} contraído)'),
    V('celui-ci', 'celui', 'aquele (combinado: uma só palavra)'),
    V('ceci', 'ceci', 'isto (perto de mim)'),
    V('cela', 'cela', 'isso (longe, ou já conhecido)'),
    V('ce sont', 'être', 'são (plural, mesmo com antecedente masculino)'),
    V('voilà', 'voilà', 'eis ali está (demonstrativo fossilizado)'),
    V('voici', 'voici', 'eis aqui está (apresenta o que vem)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase está gramaticalmente correta?'),
    options: [
      T("{C'est des livres que j'ai achetés.} — {ce sont} acompanha o plural"),
      T("{C'est un homme que j'ai vu.} — {c'est} concorda com o plural {hommes}"),
      T("{C'est une heure suffice.} — {c'est} deveria ser {ce sont}"),
      T("{C'est trois petits chats.} — o número não afeta o demonstrativo"),
    ],
    answer: 0,
    hint: T(
      'Regra §4: o French troca o demonstrativo conforme o número do que vem depois, não conforme o antecedente.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Eufonia: «___ homme» (este homem, substantivo masculino).'),
      answer: 'cet',
      hint: T('Masculino diante de vogal ou *h* mudo: o *-e* cede lugar a *-t*.'),
    },
    {
      kind: 'choose',
      prompt: T('Em «{Voici la Nouvelle Bible Louis Segond}», o que {voici} introduz?'),
      options: [
        T('Algo que vem existir agora: {voici} apresenta, {voilà} aponta'),
        T('Algo já presente e visível: {voici} aponta, {voilà} apresenta'),
        T('Um lugar distante: {voici} é o equivalente de {là}'),
        T('Uma causa: {voici} introduz o motivo da oração'),
      ],
      answer: 0,
      hint: T('A regra é curta: {voici} apresenta o que vem, {voilà} mostra o que já está.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma ao seu valor'),
      pairs: [
        { a: T('{ce livre-ci}'), b: T('perto de quem fala') },
        { a: T('{ce livre-là}'), b: T('longe ou fora do campo de visão') },
        { a: T('{celui qui parle}'), b: T('substituto masculino do substantivo') },
        { a: T('{ceux de}'), b: T('plural de {celui} com {de} contraído') },
        { a: T('{cela}'), b: T('neutro, sem referente nominal') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{ce, cet, cette, ces} concordam com o substantivo em gênero e número; {cet} é obrigatório antes de vogal ou *h* mudo, e proibido antes de *h* aspirado ({ce héros}).',
      ),
    },
    {
      n: '2',
      text: T(
        'Os sufixos {-ci} e {-là} indicam distância de quem fala, não tiempo. {Ce livre-là} pode ter sido escrito há uma hora.',
      ),
    },
    {
      n: '3',
      text: T(
        'Quando substitui o substantivo, o demonstrativo vira {celui, celle, ceux, celles} — nunca {ce livre}, mas {celui}. Com {de}, contrai-se numa palavra: {celui de}, {ceux de}.',
      ),
    },
    {
      n: '4',
      text: T(
        "{C'est}/{Ce sont} discordam do substantivo que segue: o número do verbo é o do que vem depois, não o do antecedente. {C'est des hommes} é correto mesmo falando de um grupo já conhecido.",
      ),
    },
    {
      n: '5',
      text: T(
        '{ceci} e {cela} não concordam com nada porque não substituem substantivo: {Ceci est mon livre} e {Cela est ton livre} trocam de posse sem trocar a forma.',
      ),
    },
  ],
  notes: [
    {
      label: T('{voici} e {voilà} são primos de {voir}'),
      text: T(
        'As duas palavras vêm do mesmo radical de {voir} «ver»: {voici} traz o *-ci* de {ici} «aqui», {voilà} traz o *-là* de {là} «ali». E o verbo perdeu o *-r* porque deixou de ser verbo — virou o ato de apontar com o dedo. O francês tem essas fossilizações: palavras que um dia foram frases completas e hoje são apenas gestos. O mesmo aconteceu com {tiens}, de {tenir}, usado como {tiens!}, e com {voilà} em {le voilà}, que virou pronome/aposto em vez de verbo.',
      ),
    },
    {
      label: T('O demonstrativo French nasce da necessidade, não da lógica'),
      text: T(
        'Grego, latim e português têm um demonstrativo só, que muda de número: {este, estes}, {celui, ceux}. O francês multiplicou porque **a distância é informação**: {ce livre-ci} e {ce livre-là} podem coexistir na mesma frase, e isso é impossível com um demonstrativo único. O preço é uma família de quatro formas para o presente, mais quatro para o substituto, mais dois neutros. Em compensação, o francês resolve em duas palavras o que o português precisa de duas frases para dizer.',
      ),
    },
  ],
  examples: [
    { text: 'ce livre', gloss: T('este livro (masculino singular)') },
    { text: 'cet homme', gloss: T('este homem (eufonia antes de *h* mudo)') },
    { text: 'ce héros', gloss: T('este herói (h aspirado: sem eufonia)') },
    { text: 'ce livre-là', gloss: T('aquele livro ali') },
    { text: 'celui qui parle', gloss: T('o que fala (substituto masculino)') },
    { text: 'ceux de', gloss: T('os de (plural + {de} contraído)') },
    { text: 'Cela va sans dire', gloss: T('isso vai sem dizer (dizido fixo)') },
    {
      text: 'C’est la foi, ce n’est pas des œuvres',
      gloss: T('é a fé, não são as obras (Gl 2:16)'),
    },
    { text: 'C’est des hommes', gloss: T('são homens (o verbo segue o plural)') },
    { text: 'le voilà', gloss: T('eis ali está ele ({voilà} fossilizado)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Demonstrativos e substitutos'),
      head: [T('Gênero'), T('Singular'), T('Plural')],
      rows: [
        [T('Masculino'), T('{ce}, {cet} (+ vogal ou h mudo)'), T('{ces}')],
        [T('Feminino'), T('{cette}'), T('{ces}')],
        [T('Substituto'), T('{celui} / {celle}'), T('{ceux} / {celles}')],
        [T('Com {de}'), T('{celui de} / {celle de}'), T('{ceux de} / {celles de}')],
        [T('Neutro'), T('{ceci} (aqui) / {cela} (aí)'), T('{ceci} / {cela}')],
      ],
    },
    {
      caption: T('Tabela 2 — {-ci} e {-là} sobre um mesmo substantivo'),
      head: [T('Base'), T('{-ci}: aqui'), T('{-là}: ali')],
      rows: [
        ['{ce livre}', T('{ce livre-ci}'), T('{ce livre-là}')],
        ['{cette maison}', T('{cette maison-ci}'), T('{cette maison-là}')],
        ['{ces livres}', T('{ces livres-ci}'), T('{ces livres-là}')],
        ['{ceci} / {cela}', T('não se combina'), T('não se combina')],
      ],
    },
  ],
};
