import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('Os pronomes relativos'),
  subtitle: T('{qui, que, dont, où} e os relativos formais {lequel, à qui}'),
  section: T('Os pronomes'),
  body: C(`## Ligar duas orações

Um pronome relativo faz duas coisas ao mesmo tempo: conjuga a segunda oração e representa o substantivo que falta nela. **{L'homme qui parle}** «o homem que fala» — {qui} é sujeito de {parle}. Trocar por {que} muda tudo: **{L'homme que je vois}** «o homem que eu vejo» — agora {que} é objeto.

São quatro os relativos simples, e cada um resolve uma função:

- **{qui}** — sujeito: {les élèves qui prient} «os alunos que oram».
- **{que}** — objeto direto: {la parole que j'ai entendue} «a palavra que ouvi».
- **{dont}** — «de quem / de que»: {l'homme dont je parle} «o homem de quem falo».
- **{où}** — lugar ou tempo: {la ville où je vis} «a cidade onde moro».

## A regra do antecedente humano

O ponto que mais surpreende é o uso de {qui} depois de preposição quando o antecedente é pessoa: **{la femme à qui je parle}** «a mulher a quem falo». Depois de preposição, {que} é **proibido** para pessoas; e para coisas, é {lequel} que entra: **{le livre avec lequel j'apprends}** «o livro com o qual aprendo».

A regra prática: **após preposição + pessoa = {qui}; após preposição + coisa = {lequel}**.

## {dont} não é só «de quem»

{dont} funciona com **qualquer substantivo possessivo** do latim, não só com pessoas:

- {l'homme dont je parle} «o homem de quem falo».
- {le livre dont je parle} «o livro de que falo» — trocando {de que} por {dont}.
- {Dieu, dont l'amour est éternel} «Deus, cujo amor é eterno» — {dont} aqui traduz **posse**, como o latim {cuius}.
- {le jour dont il est venu} «o dia em que ele veio» — sentido temporal.

E há o par com {de qui} e {à qui}, que é o reverso de {dont}: {la femme dont je parle} «de quem falo» e {la femme à qui je parle} «a quem falo» — a preposição sai de dentro do relativo e vai para antes dele.

## {lequel} e os concordados

Depois de preposição, {lequel} concorda em gênero e número: {lequel}, {laquelle}, {lesquels}, {lesquelles}.

- {le livre lequel j'ai lu} «o livro que li».
- {les livres lesquels je lis} «os livros que leio».
- {les gens avec lesquels je travaille} «as pessoas com quem trabalho».

E o par popular é {lequel} como substantivo, o «o qual»: **{la ville de laquelle il vient}** «a cidade de onde ele vem».

## {ce qui} e {ce que}

Quando não há antecedente, o relativo ganha {ce}: **{ce qui}** é sujeito, **{ce que}** é objeto.

- {Fais ce qui est juste} «Faz o que é justo» — {ce qui} é sujeito de {est}.
- {Dis ce que tu penses} «Diz o que pensas» — {ce que} é objeto de {dis}.
- {Je sais ce qui manque} «Sei o que falta».

E há as combinações com preposição, que usam o referente explícito: **{à ce que, de ce que, pour ce que}** — {C'est à ce que je travaille} «É para isso que eu trabalho».

## Leitura — Louis Segond

A Bible Francez usa o relativo o tempo todo, e o padrão mais produtivo é o par **{celui qui}** + verbo, que traduz o grego e o hebraico de «o que»:

- **{Celui qui écoute la parole de Dieu et qui la met en pratique}** (Lc 6:47) «aquele que ouve a palavra de Deus e a põe em prática» — {qui} duas vezes, com sujeito repetido.
- **{Dieu, dont l'amour est éternel}** (1Jo 4:8) — {dont} no sentido de posse.
- **{Les langues qui sont enflammées}** (Mc 16:8) — {qui} com antecedente plural.

E o mais fino do capítulo: nas antíteses, o texto bíblico francês prefere o **substituto demonstrativo** ao pronome: **{Moi, moi, je ne suis pas le juste}** (Lc 18:11), onde a antítese fica mais clara com o substantivo do que com {qui}. Compare com o latim {ego iustus} e o grego {ego eimi dikaios}: o tradutor francês trocou pronome por substantivo para a frase respirar.

A leitura em voz alta revela outra coisa: o relativo French **não tem Forms de gênero** em {qui} e {que}, mas tem em {lequel}. E {lequel} quase sempre aparece em traduções onde o grego marcava {ho}, {hē}, {hoi}.

## O essencial

{qui} é sujeito, {que} é objeto, {dont} é «de quem» ou posse, {où} é lugar e tempo. Depois de preposição, {qui} para pessoa e {lequel} para coisa, concordando em gênero e número. Sem antecedente, {ce qui} e {ce que} — e é essa a única coisa que você precisa levar do capítulo para ler a Bíblia Francez.`),
  vocab: [
    V('qui', 'qui', 'que (sujeito) / a quem (após preposição)'),
    V('que', 'que', 'que (objeto direto); proibido após preposição'),
    V('dont', 'dont', 'de quem / de que; também posse'),
    V('où', 'où', 'onde; também «no dia em que»'),
    V('lequel', 'lequel', 'o qual (após preposição + coisa)'),
    V('laquelle', 'lequel', 'a qual (feminino; {de laquelle} = de onde)'),
    V('lesquels', 'lequel', 'os quais (plural masculino)'),
    V('à qui', 'qui', 'a quem (indireto: {la femme à qui})'),
    V('ce qui', 'qui', 'o que (sujeito, sem antecedente)'),
    V('ce que', 'que', 'o que (objeto, sem antecedente)'),
    V('à ce que', 'ce que', 'para que; é para isso que'),
    V('l’homme qui parle', 'parler', 'o homem que fala ({qui} = sujeito)'),
    V('la parole que j’ai entendue', 'entendre', 'a palavra que ouvi ({que} = objeto)'),
    V('Dieu, dont l’amour', 'Dieu', 'Deus, cujo amor ({dont} = posse)'),
    V('celui qui écoute', 'celui', 'aquele que ouve (Lc 6:47)'),
    V('la ville de laquelle il vient', 'venir', 'a cidade de onde ele vem'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T("Em «{C'est à ce que je travaille}», o que {ce que} faz na frase?"),
    options: [
      T(
        'Substitui o objeto direto de {travaille}, e {à ce que} dá a preposição que {dont} não daria',
      ),
      T('É sujeito de {travaille}, como em {ce qui est juste}'),
      T('Indica lugar: {ce que} equivale a {où}'),
      T('É um pronome relativo sem antecedente e sem função definida'),
    ],
    answer: 0,
    hint: T(
      'Regra §5: sem antecedente, {ce qui} é sujeito e {ce que} é objeto; a preposição vai para o par, não para dentro dele.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('«Le livre dont je parle» é igual a «le livre ___ je parle».'),
      answer: 'de',
      hint: T('{dont} = {de} + relativo. Depois da preposição, {que} não pode aparecer.'),
    },
    {
      kind: 'choose',
      prompt: T('Em «{Les gens avec lesquels je travaille}», o relativo é {lequel} porque…'),
      options: [
        T('Vem depois de preposição e o antecedente é plural ({lesquels})'),
        T('Porque o verbo {travailler} é irregular no presente'),
        T('Porque o antecedente é humano e deveria ser {qui}'),
        T('Porque {avec} é uma preposição composta'),
      ],
      answer: 0,
      hint: T(
        'Regra §2: preposição + pessoa = {qui}; preposição + coisa = {lequel}, com concordância.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Ligue a função ao relativo correspondente'),
      pairs: [
        { a: T('sujeito da oração subordinada'), b: T('{qui}') },
        { a: T('objeto direto da subordinada'), b: T('{que}') },
        { a: T('«de quem» ou posse'), b: T('{dont}') },
        { a: T('lugar ou tempo'), b: T('{où}') },
        { a: T('sujeito sem antecedente'), b: T('{ce qui}') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        "{qui} é sujeito e {que} é objeto: {l'homme qui parle} contra {l'homme que je vois}. Trocar os dois destrói a frase.",
      ),
    },
    {
      n: '2',
      text: T(
        'Após preposição, {que} é proibido para pessoas: use {qui}. Para coisas, use {lequel}, que concorda em gênero e número ({lequel}, {laquelle}, {lesquels}, {lesquelles}).',
      ),
    },
    {
      n: '3',
      text: T(
        "{dont} equivale a {de} + relativo e funciona com pessoas e com coisas; com possessivos, traduz posse: {Dieu, dont l'amour est éternel}.",
      ),
    },
    {
      n: '4',
      text: T(
        '{où} marca lugar sem preposição e tempo quando o antecedente é uma data ou um substantivo de período: {la ville où je vis}, {le jour où il est venu}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Sem antecedente, o relativo recebe {ce}: {ce qui} é sujeito, {ce que} é objeto. Com preposição, o par é {à ce que}, {de ce que}, {pour ce que} — e a preposição nunca entra dentro do {que}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que {que} também é conjunção'),
      text: T(
        "O mesmo {que} faz três trabalhos: pronome relativo ({l'homme que je vois}), conjunção ({Je sais qu'il vient}) e comparativo ({plus grand que}). Quem os separa é a função, e a função é dada pelo que vem **antes**. Depois de substantivo, {que} é relativo; depois de verbo, é conjunção; depois de substantivo preceded de {plus}, é comparativo. Em **{Dis ce que tu penses}** há uma camada extra: {ce} é o antecedente abstrato e {que} é o relativo, dois pronomes fundidos numa locução.",
      ),
    },
    {
      label: T('O relativo é o coração da subordinação'),
      text: T(
        'Uma oração relativa tem sempre as duas metades: o **antecedente**, que fica na oração principal, e o **relativo**, que ocupa o lugar do substantivo faltante na subordinada. Por isso **{je vois la femme qui parle}** e **{la femme que je vois est fatiguée}** têm a mesma peça trocada de lado, e o referente muda com a posição. Em grego e latim isso era mais rígido; o francês dá liberdade ao antecedente, desde que o relativo continue bem formado. Na leitura bíblica isso aparece o tempo todo: **{le livre dont je parle}**, **{celui qui croit}**, **{ceux qui écoutent}** — três funções, uma só palavra repetida.',
      ),
    },
  ],
  examples: [
    { text: 'l’homme qui parle', gloss: T('o homem que fala ({qui} = sujeito)') },
    { text: 'la parole que j’ai entendue', gloss: T('a palavra que ouvi ({que} = objeto)') },
    { text: 'l’homme dont je parle', gloss: T('o homem de quem falo ({dont} = {de qui})') },
    { text: 'Dieu, dont l’amour est éternel', gloss: T('Deus, cujo amor é eterno (1Jo 4:8)') },
    { text: 'le jour où il est venu', gloss: T('o dia em que ele veio (tempo)') },
    { text: 'la femme à qui je parle', gloss: T('a mulher a quem falo (preposição + pessoa)') },
    {
      text: 'le livre avec lequel j’apprends',
      gloss: T('o livro com o qual aprendo (preposição + coisa)'),
    },
    { text: 'fais ce qui est juste', gloss: T('faz o que é justo ({ce qui} = sujeito)') },
    { text: 'dis ce que tu penses', gloss: T('diz o que pensas ({ce que} = objeto)') },
    {
      text: 'celui qui écoute la parole de Dieu',
      gloss: T('aquele que ouve a palavra de Deus (Lc 6:47)'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Os quatro relativos simples'),
      head: [T('Relativo'), T('Função'), T('Exemplo')],
      rows: [
        ['{qui}', T('sujeito'), "{l'homme qui parle}"],
        ['{que}', T('objeto direto'), "{la parole que j'ai entendue}"],
        ['{dont}', T('{de} + relativo; também posse'), "{Dieu, dont l'amour est éternel}"],
        ['{où}', T('lugar ou tempo'), '{le jour où il est venu}'],
      ],
    },
    {
      caption: T('Tabela 2 — Após preposição: {qui} ou {lequel}'),
      head: [T('Antecedente'), T('Pessoa'), T('Coisa')],
      rows: [
        [T('{à}'), T('{à qui} (a quem)'), T('{auquel} (ao qual)')],
        [T('{de}'), T('{de qui} (de quem)'), T('{duquel} (do qual)')],
        [T('{avec} / {pour} / outros'), T('{avec qui}'), T('{avec lequel}, {pour lequel}')],
      ],
    },
  ],
};
