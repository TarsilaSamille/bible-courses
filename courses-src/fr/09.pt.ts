import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('O comparativo e o superlativo'),
  subtitle: T('{plus}, {moins}, {aussi} e os irregulares {meilleur} e {pire}'),
  section: T('Os adjetivos e os adverbios'),
  body: C(`## Três palavras bastam

O comparativo francês é uma das construções mais econômicas da língua: **mais** para superioridade, **moins** para inferioridade, **aussi** para igualdade. Cada uma entra com o adjetivo, e a comparação com pessoas exige {que}:

- {plus grand que moi} — maior que eu
- {moins clair que lui} — menos claro que ele
- {aussi belle qu'elle} — tão bonita quanto ela

Com pessoas, o {que} é obligatorio. Com coisas e qualidades, pode omitir-se com frequência: {plus grand}, {plus intelligent}. Com substantivos, a comparação troca de roupa: em vez do adjetivo, usa {plus de}, {moins de}, {autant de} — {plus de livres} «mais livros», {moins de temps} «menos tempo», {autant d'amis} «tantos amigos».

## O comparativo de igualdade, com duas formas

{aussi … que} é a forma comum. Mas quando o {que} vem no início da oração, tudo se inverte e aparece {pour … que}: {aussi belle qu'elle pour les yeux} «tão bonita quanto ela aos olhos». O sentido é o mesmo; a posição é que muda.

E há um terceiro caminho, com {tel … que}, que expressa proporção: {Il est tel qu'on le voit} ou o muito prático {un homme si grand qu'on ne peut le contourner}.

## Os três irregulares que importam

O comparativo e o superlativo de três adjetivos fogem do padrão:

| Adjetivo | Comparativo | Superlativo |
|---|---|---|
| {bon} | {meilleur} | {le meilleur} |
| {mauvais} | {pire} | {le pire} |
| {petit} | {moindre} | {le moindre} |

A {pire} merece cuidado: é unicamente numeral e verbo. Como numeral, {deux} mantém o *-x* mudo; como verbo, {il piteit} soa errado — a forma certa é {il pitié}. Isso é contraste fonético, não decorativo.

Quanto a {moindre}, ele fala de **grau ou quantidade**, não de tamanho físico: {un moindre effort} «um esforço menor», {à moindre mesure}. Para altura e dimensão, use {plus petit}: {un peu plus petit} «um pouco menor». Confundir os dois é o erro mais comum desta lição.

Os advérbios follow suit: {bien → mieux}, {mal → pire}, {beaucoup → plus}, {peu → moins}. Assim, {Il travaille mieux} é o comparativo de {bien}.

## O superlativo relativo

O **superlativo relativo** faz a comparação dentro de um grupo conhecido. Leva artigo, e o {plus} concorda como um adjetivo comum — nos dois lugares:

- {le plus grand} — o maior (masculino singular)
- {la plus belle} — a mais bonita (feminino singular)
- {les plus beaux} — os mais bonitos (plural)

Veja o duplo acordo: em {la plus belle}, tanto o artigo {la} como o {plus} são femininos. Escrever {la plus beau} é o erro clássico.

Com {de}, o superlativo indica um grupo inteiro: {le meilleur des élèves} «o melhor dos alunos», {la plus belle des villes} «a mais bonita das cidades».

## O superlativo absoluto

Quando não há comparação, apenas grau: {très grand} «muito grande», {bien meilleur} «muito melhor», {vraiment terrible} «realmente terrível». Aqui {très} intensifica o adjetivo, e {bien} intensifica o advérbio.

## Leitura — Louis Segond

{Il est plus riche et plus puissant que tous les princes de la terre} (Gn 13:2) — o mesmo {plus} governando substantivo e adjetivo em uma só construção. {Vous êtes le sel de la terre; mais si le sel devient fade, à quoi sert-il?} (Mt 5:13) usa o superlativo substantivado {le sel} e a comparativa modal {à quoi sert-il}. {Le plus grand among you shall be made the least} — na versão francesa de Lucas 14:30, {Le plus grand parmi vous devienne le plus petit} põe as duas formas lado a lado, o que torna a lição visível. {Le Seigneur est ma force et mon salut} (Sl 42:2) usa {ma}, construção possessiva tratada em capítulo próprio.

## O essencial

{mais} compara com o que é maior, {moins} com o que é menor, {aussi} com o que é igual. O superlativo relativo exige artigo e duplo acordo; o absoluto não compara com ninguém e por isso dispensa artigo.`),
  vocab: [
    V('plus grand', 'grand', 'maior; comparativo regular'),
    V('moins clair', 'clair', 'menos claro; comparativo de {moins}'),
    V('aussi belle que', 'beau', 'tão bonita quanto; igualdade'),
    V('meilleur', 'bon', 'melhor; comparativo irregular de {bon}'),
    V('le pire', 'mauvais', 'o pior; {pire} irregular'),
    V('le moindre', 'petit', 'o menor; grau, não tamanho'),
    V('mieux', 'bien', 'melhor (adv.); de {bien}'),
    V('le plus petit', 'petit', 'o menor em tamanho; para dimensões'),
    V('plus de livres', 'livre', 'mais livros; comparação de substantivos'),
    V('autant de', 'autant', 'tanto, tantos; com {que}'),
    V('très grand', 'grand', 'muito grande; superlativo absoluto'),
    V('le meilleur des élèves', 'élève', 'o melhor dos alunos; {de} + grupo'),
    V('tel que', 'tel', 'tal que; comparação de proporção'),
    V('si grand qu', 'grand', 'tão grande que; {si} … {que}'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se diz «tão bonita quanto ela» em francês?'),
    options: [
      T("{aussi belle qu'elle}"),
      T("{plus belle qu'elle}"),
      T("{si belle qu'elle}"),
      T("{aussi plus belle qu'elle}"),
    ],
    answer: 0,
    hint: T('Igualdade pede {aussi}; {plus} é superioridade e {si} é intensidade.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Superlativo feminino singular de {beau}: la ___ belle (o outro)'),
      answer: 'plus',
      hint: T('O superlativo relativo repete o artigo, e o {plus} também concorda.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta e é a mais natural?'),
      options: [
        T('{Un moindre effort} — um esforço de menos, em grau'),
        T('{Un moindre homme} — um homem de menor estatura'),
        T('{Un plus petit homme} — o homem mais baixo'),
        T('{Le moins homme du monde} — superlativo relativo correto'),
      ],
      answer: 2,
      hint: T('Regra §4: {moindre} mede grau; {plus petit} mede tamanho.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o comparativo ao sentido correspondente'),
      pairs: [
        { a: T('plus grand que'), b: T('superioridade') },
        { a: T('moins clair que'), b: T('inferioridade') },
        { a: T('aussi belle que'), b: T('igualdade') },
        { a: T('autant de'), b: T('comparação de quantidade') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em «{la plus belle des villes}», quantos elementos fazem comparação?'),
      options: [T('Nenhum'), T('Um'), T('Dois'), T('Três')],
      answer: 1,
      hint: T(
        'O superlativo é um só: «a mais bonita». O que muda é o grupo de referência, {des villes}.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O comparativo regular faz-se com {plus} ou {moins} + adjetivo (ou advérbio) e termina em {que}: {plus grand que moi}, {moins vite que lui}. Com pessoas o {que} é obrigatório; com coisas, pode Often faltar.',
      ),
    },
    {
      n: '2',
      text: T(
        "A igualdade faz-se com {aussi … que}: {aussi belle qu'elle} «tão bonita quanto ela». Com {que} inicial, vira {pour … que}: {aussi belle qu'elle pour les yeux}. Para proporção, use {si … que} ou {tel … que}.",
      ),
    },
    {
      n: '3',
      text: T(
        'Substantivos comparam-se com {de}, nunca com o adjetivo: {plus de livres} «mais livros», {moins de temps} «menos tempo», {autant de livres} «tantos livros».',
      ),
    },
    {
      n: '4',
      text: T(
        'Os irregulares são {meilleur} (de {bon}), {pire} (de {mauvais}) e {moindre} (de {petit}). {moindre} mede grau ou quantidade ({un moindre effort}); para tamanho e altura, use {plus petit}. Nos advérbios: {mieux}, {pire}, {moins}.',
      ),
    },
    {
      n: '5',
      text: T(
        'O superlativo relativo exige artigo e duplo acordo: {le plus grand}, {la plus belle}, {les plus beaux}. Com {de} aponta o grupo ({le meilleur des élèves}). O absoluto dispensa artigo: {très grand}, {bien meilleur}, {vraiment terrible}.',
      ),
    },
  ],
  notes: [
    {
      label: T('A armadilha do duplo acordo'),
      text: T(
        'Em {le plus}, {la plus} e {les plus}, o {plus} funciona como um adjetivo comum e por isso concorda: {la plus belle}, {les plus beaux}. {la plus beau} e {les plus belle} são erros de quem trata o superlativo como uma fórmula única.',
      ),
    },
    {
      label: T('Por que {pire} é diferente'),
      text: T(
        '{pire} tem três vidas: funciona como substantivo ({le pire} «o pior»), como numeral ({deux} «dois») e como verbo ({il a pitié} «tem piedade»). Noutras línguas o cognato {pietà} aparece ao lado dele; em francês a palavra é curta e sozinha, e é preciso guardá-la como substantivo e verbo, nunca como palavra coringa.',
      ),
    },
  ],
  examples: [
    { text: 'plus grand que moi', gloss: T('maior que eu — superioridade') },
    { text: 'moins clair que lui', gloss: T('menos claro que ele — inferioridade') },
    { text: "aussi belle qu'elle", gloss: T('tão bonita quanto ela — igualdade') },
    {
      text: "aussi belle qu'elle pour les yeux",
      gloss: T('tão bonita quanto ela aos olhos — {pour … que}'),
    },
    { text: 'plus de livres', gloss: T('mais livros — {de} em vez do adjetivo') },
    { text: 'le plus grand', gloss: T('o maior — superlativo relativo') },
    { text: 'la plus belle', gloss: T('a mais bonita — duplo acordo') },
    { text: 'les plus beaux', gloss: T('os mais bonitos — plural concordado') },
    { text: 'le meilleur des élèves', gloss: T('o melhor dos alunos — {de} aponta o grupo') },
    { text: 'il travaille mieux', gloss: T('ele trabalha melhor — {mieux}, de {bien}') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Comparativos e superlativos'),
      head: [
        T('Tipo'),
        T('Positivo'),
        T('Comparativo'),
        T('Superlativo relativo'),
        T('Superlativo absoluto'),
      ],
      rows: [
        ['superioridade', '{grand}', '{plus grand}', '{le plus grand}', '{très grand}'],
        ['inferioridade', '{clair}', '{moins clair}', '{le moins clair}', '{très clair}'],
        ['igualdade', '{beau}', '{aussi beau que}', '{le plus beau}', '{très beau}'],
        ['irregular (bom)', '{bon}', '{meilleur}', '{le meilleur}', '{bien meilleur}'],
        ['irregular (mau)', '{mauvais}', '{pire}', '{le pire}', '{vraiment mauvais}'],
        ['irregular (pequeno)', '{petit}', '{moindre}', '{le moindre}', '{vraiment petit}'],
        ['adverbial', '{bien}', '{mieux}', '{le mieux}', '{très bien}'],
        ['quantidade', '{beaucoup}', '{plus}', '{le plus}', '{beaucoup}'],
      ],
    },
    {
      caption: T('Tabela 2 — Qual construção usar'),
      head: [T('Comparação'), T('Estrutura'), T('Exemplo'), T('Glosa')],
      rows: [
        [
          'com pessoas',
          '{plus / moins + adj + que + pessoa}',
          '{plus grand que moi}',
          'maior que eu',
        ],
        ['com coisas', '{plus / moins + adj}', '{plus grand}', 'maior'],
        ['igualdade', '{aussi + adj + que}', "{aussi belle qu'elle}", 'tão bonita quanto ela'],
        ['igualdade (invertida)', '{pour … que}', '{pour les yeux}', 'aos olhos'],
        ['proporção', '{si + adj + que}', "{si grand qu'il tient}", 'tão grande que coube'],
        [
          'substantivos',
          '{plus / moins / autant + de + subst.}',
          '{plus de livres}',
          'mais livros',
        ],
        [
          'grupo inteiro',
          '{le meilleur + des + subst.}',
          '{le meilleur des élèves}',
          'o melhor dos alunos',
        ],
      ],
    },
  ],
};
