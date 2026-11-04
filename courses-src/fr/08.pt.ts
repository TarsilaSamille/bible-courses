import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Os adjetivos'),
  subtitle: T('Concordância, posição e as formas reduzidas'),
  section: T('Os adjetivos e os adverbios'),
  body: C(`## O adjetivo é um substantivo que se veste

Em francês, o adjetivo ocupa o lugar do substantivo e concorda com ele em **género e número**. O masculino é a forma de referência; o feminino acrescenta *-e*; o plural acrescenta *-s*; o feminino plural acrescenta *-es*. Assim, a partir de {grand} temos quatro formas:

| | Masculino | Feminino |
|---|---|---|
| Singular | {grand} | {grande} |
| Plural | {grands} | {grandes} |

O truque é esse: **o feminino acrescenta sempre uma letra, e o plural outra**. Por isso quase todos os adjetivosigem exatamente quatro formas, e uma delas se deduz das outras três.

Há, porém, duas famílias que fogem disso. Os adjetivos em *-eux* passam a *-euse*: {heureux → heureuse}, {jaloux → jalouse}, {fâcheux → fâcheuse}. E os que terminam em *-f* fazem *-ve* numa dúzia de casos: {neuf → neuve}, {plein → pleine}, {serpentin → serpentine}. Nos demais *-f*, o caminho é simples: {actif → active}, {passif → passive}.

Os irregulares são poucos, mas precisam ser decorados: {beau → belle}, {vieux → vieille}, {blanc → blanche}, {doux → douce}, {faux → fausse}, {sec → sèche}, {public → publique}. São exatamente as palavras que aparecem o dia todo.

## A posição: depois por princípio, antes por hábito

A posição normal do adjetivo é **depois do substantivo**: {une maison grande}, {un homme heureux}, {une question difficile}. Depois dele, ele nunca pode ser confundido com nada.

Um grupo pequeno e muito frequente de adjetivos curtos aparece **antes**: {grand}, {petit}, {jeune}, {vieux}, {bon}, {mauvais}, {beau}, {joli}, {nouveau}, {premier}, {dernier}, {long}, {haut}, {large}, {gros}, {vaste}, {faux}, {vrai}. A lista cabe em duas linhas.

A tradição guardou essa lista em cinco palavras: **beauté, âge, nombre, bonté, taille** — beleza, idade, número, bondade e tamanho. A frase serve de memória, não de lei; a prática real desmente metade dela.

## Quando a posição muda o sentido

Aqui está o traço mais interessante do capítulo. Compare:

- {un homme pauvre} — um homem sem recursos
- {un pauvre homme} — um pobre homem (com pena)
- {un homme grand} — um homem alto
- {un grand homme} — um grande homem (generoso, excelente)
- {une femme fiévreuse} ≠ {une fiévreuse femme}

Quando o adjetivo vem antes, ele ganha um tom **afetivo ou avaliativo**: {le grand Dieu}, {le petit Seamois}. Quando vem depois, é descritivo e neutro: {Dieu le grand} é apenas «o Deus alto».

Há ainda usos quase fixos: os títulos vêm antes ({la Sainte Bible}), as cores quase sempre depois ({une robe bleue}, {un ciel clair}), e a maioria dos participios passados também depois.

## As formas reduzidas diante de vogal

Quando o adjetivo precisa ficar diante de uma vogal ou de um *h* mudo, algumas formas perdem o final:

| Forma cheia | Forma reduzida | Exemplo |
|---|---|---|
| {beau} | {bel} | {un bel ami} |
| {nouveau} | {nouvel} | {un nouvel arbre} |
| {vieux} | {vieil} | {un vieil homme} |
| {fou} | {fol} | {un fol amusement} |
| {mou} | {mol} | {un mol oreiller} |

Note que {beau} e {vieux} também mudam no plural diante de substantivo: {les beaux enfants}, {les vieux livres}. Nenhuma outra flexão sofre essa redução.

## Leitura — Louis Segond

{Dieu a fait de l'homme une âme vivante} usa {vivante}, adjetivo posposto: em francês biblico, a posição colada ao substantivo é a norma. {Il est votre Dieu, et vous êtes son peuple} traz o adjetivo substantivado {son} sem nome de Deus. {Voici, je mets devant toi une vie} (Éx 33:19) usa a construção absoluta {devant toi}, e {C'est une bonne nouvelle, et un grand sujet de joie} (Lc 2:10) põe {bonne} e {grand} antes do substantivo — a posição afetiva, exatamente a que acabamos de descrever. {L'amour est patient, il est bienfaisant; l'amour n'envie point} (1Co 13:4) acumula adjetivos invariáveis e uma construção verbal já elíptica, fora do alcance deste capítulo.

## O essencial

Concordância em género e número resolve quase tudo; a posição explica o resto. A forma base é a do masculino singular, o feminino ganha *-e*, o plural ganha *-s*, e a única liberdade que você tem é decidir se o adjetivo sobe para antes do substantivo — e aí o sentido muda.`),
  vocab: [
    V('grand', 'grand', 'grande; ant. elipse: de grandes'),
    V('petit', 'petit', 'pequeno; fem. petite'),
    V('jeune', 'jeune', 'jovem; também «de idade»'),
    V('beau', 'beau', 'bonito; belle, beaux, bel'),
    V('vieux', 'vieux', 'velho; vieille, vieux, vieil'),
    V('nouveau', 'nouveau', 'novo; nouvel ante vogal'),
    V('heureux', 'heureux', 'feliz; -eux → -euse'),
    V('blanc', 'blanc', 'branco; blanche, blancs'),
    V('doux', 'doux', 'doce; douce (forte de -d)'),
    V('faux', 'faux', 'falso; fausse; ante vogal: fol'),
    V('pauvre', 'pauvre', 'pobre; a posição muda o sentido'),
    V('premier', 'premier', 'primeiro; posição fixa'),
    V('même', 'même', 'mesmo; -e só antes de substantivo'),
    V('joli', 'joli', 'bonito, elegante; quase sempre antes'),
    V('lourd', 'lourd', 'pesado; ant. de lourds'),
    V('fidèle', 'fidèle', 'fiel; forma regular, sóbria'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o feminino plural de {vieux}?'),
    options: [T('{vieilles}'), T('{vieux}'), T('{vieuxes}'), T('{vieille}')],
    answer: 0,
    hint: T('É um irregular: o feminino é {vieille} e só então se acrescenta o *-s* do plural.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Feminino de {heureux} (sem o plural): heureu_'),
      answer: 'se',
      hint: T('Regra §2: a família do *-eux* faz *-euse*.'),
    },
    {
      kind: 'choose',
      prompt: T('Em «{un homme grand}», o que significa a frase?'),
      options: [
        T('Um homem generoso ou excelente, não um homem alto'),
        T('Um homem alto: {grand} é neutro na posição inicial'),
        T('Um homem velho, por confusão com {vieux}'),
        T('A frase é agramatical'),
      ],
      answer: 0,
      hint: T('Regra §5: adjetivo antes do substantivo ganha tom afetivo.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma à função correspondente'),
      pairs: [
        { a: T('bel'), b: T('forma reduzida de {beau} ante vogal') },
        { a: T('beaux'), b: T('plural masculino de {beau}') },
        { a: T('blanche'), b: T('feminino irregular de {blanc}') },
        { a: T('nouvel'), b: T('forma reduzida de {nouveau} ante vogal') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Quantos adjetivos abaixo estão na posição **antes** do substantivo?'),
      options: [T('Nenhum'), T('Um'), T('Dois'), T('Três')],
      answer: 1,
      hint: T(
        'Em {une robe bleue}, {une maison grande} e {un petit enfant}, só o terceiro antepõe o adjetivo.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O adjetivo concorda em género e número: feminino *-e*, plural *-s*, feminino plural *-es* — a menos que a forma já termine em *-e*, *-s* ou *-x*, como em {heureux → heureuse → heureux → heureuses}.',
      ),
    },
    {
      n: '2',
      text: T(
        'Duas famílias mudam de modo especial: *-eux* vira *-euse* ({heureux → heureuse}, {jaloux → jalouse}) e *-f* vira *-ve* em poucos casos ({neuf → neuve}, {serpentin → serpentine}), *-e* nos demais ({actif → active}).',
      ),
    },
    {
      n: '3',
      text: T(
        'Os irregulares são poucos e valem o esforço: {beau → belle}, {vieux → vieille}, {blanc → blanche}, {doux → douce}, {faux → fausse}, {sec → sèche}, {public → publique}. No plural diante de substantivo, {beau} e {vieux} mudam: {beaux}, {vieux}.',
      ),
    },
    {
      n: '4',
      text: T(
        'A posição normal é depois do substantivo. Diante ficam os curtos e frequentes: {beau, joli, jeune, nouveau, bon, vieux, grand, petit, gros, long, haut, large, premier, dernier, vrai, faux}.',
      ),
    },
    {
      n: '5',
      text: T(
        'A posição pode inverter o sentido: {un homme pauvre} é «um homem sem recursos», {un pauvre homme} é «um pobre homem»; {un homme grand} é alto, {un grand homme} é notável. Títulos vão antes ({la Sainte Bible}), cores quase sempre depois ({une robe bleue}).',
      ),
    },
  ],
  notes: [
    {
      label: T('Formas reduzidas: a lista é curta'),
      text: T(
        'Diante de vogal ou *h* mudo há formas sem a vogal final: {beau → bel} ({un bel ami}), {nouveau → nouvel} ({un nouvel homme}), {vieux → vieil} ({un vieil arbre}), {fou → fol} ({un fol amusement}), {mou → mol} ({un mol oreiller}). São exatamente essas cinco; o resto da língua continua intacto.',
      ),
    },
    {
      label: T('Cores e alguns particípios'),
      text: T(
        'As cores seguem quase sempre o substantivo — {une robe bleue}, {une maison blanche} —, mas quando {bleu} vira substantivo vai para o fim: {un garment bleu}. Cores compostas levam um segundo nome, quase sempre **antes**: {bleu clair}, {bleu foncé}, {vert clair}, {marron clair}. Já os particípios passados de verbo transitivo ficam em geral depois: {une maison abandonnée}, {une porte fermée}.',
      ),
    },
  ],
  examples: [
    { text: 'une maison grande', gloss: T('uma casa grande — depois do substantivo') },
    { text: 'un homme heureux', gloss: T('um homem feliz — *-eux → -euse*') },
    { text: 'des filles heureuses', gloss: T('moças felizes — feminino plural em *-es*') },
    { text: 'une belle maison', gloss: T('uma bela casa — irregular: {belle}') },
    { text: 'un bel ami', gloss: T('um belo amigo — forma reduzida de {beau}') },
    { text: 'un nouvel arbre', gloss: T('uma árvore nova — {nouvel} ante vogal') },
    { text: 'un vieil homme', gloss: T('um velho — {vieil} ante vogal') },
    { text: 'la Sainte Bible', gloss: T('a Santa Bíblia — título, sempre antes') },
    { text: 'un homme pauvre', gloss: T('um homem sem recursos — sentido literal') },
    { text: 'un grand homme', gloss: T('um grande homem — sentido elogiativo') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Flexão dos adjetivos'),
      head: [T('Modelo'), T('Masc. sing.'), T('Fem. sing.'), T('Masc. pl.'), T('Fem. pl.')],
      rows: [
        ['regra geral', '{grand}', '{grande}', '{grands}', '{grandes}'],
        ['-eux → -euse', '{heureux}', '{heureuse}', '{heureux}', '{heureuses}'],
        ['-f → -ve', '{neuf}', '{neuve}', '{neufs}', '{neuves}'],
        ['-f → -e', '{actif}', '{active}', '{actifs}', '{actives}'],
        ['irregular', '{beau}', '{belle}', '{beaux}', '{belles}'],
        ['irregular', '{vieux}', '{vieille}', '{vieux}', '{vieilles}'],
        ['irregular', '{blanc}', '{blanche}', '{blancs}', '{blanches}'],
        ['irregular', '{doux}', '{douce}', '{doux}', '{douces}'],
      ],
    },
    {
      caption: T('Tabela 2 — Onde o adjetivo fica'),
      head: [T('Posição'), T('Tipo'), T('Efeito'), T('Exemplos')],
      rows: [
        [
          'depois',
          'after (the rule)',
          'literal, descritivo',
          '{une maison grande}, {un homme heureux}',
        ],
        [
          'antes (lista curta)',
          'before (short list)',
          'ênfase, hábito',
          '{un petit enfant}, {une belle maison}',
        ],
        [
          'antes (sentido)',
          'before (sense)',
          'avaliação, tom afetivo',
          '{un homme pauvre} × {un pauvre homme}',
        ],
        [
          'depois (cores)',
          'after (colours)',
          'uso quase fixo',
          '{une robe bleue}, {un ciel clair}',
        ],
        [
          'antes (títulos)',
          'before (titles)',
          'convenção fixa',
          '{la Sainte Bible}, {le grand Dieu}',
        ],
      ],
    },
  ],
};
