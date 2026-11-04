import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('Os pronomes pessoais'),
  subtitle: T('{je, tu, il, nous, vous, ils} e a separação entre {le, la, les} e {lui, leur}'),
  section: T('Os pronomes'),
  body: C(`## Sujeito: seis formas, três números

Os pronomes de sujeito são poucos e quase sempre aparecem. O francês não apaga o sujeito como o português faz em {chove} ou {fala-se}: em {il parle} o {il} é obrigatório, e em {parle-t-il} o {t} gruda no verbo para criar a pergunta.

| Pessoa | Singular | Plural |
|---|---|---|
| 1.ª | {je} | {nous} |
| 2.ª | {tu} | {vous} |
| 3.ª | {il} / {elle} | {ils} / {elles} |

A terminação do verbo já diz a pessoa: {parle} só pode ser {je} ou {il/elle}. Mas o sujeito **se mantém mesmo assim**, e é aí que o francês se separa do português e do espanhol. Você diz {je parle}, nunca apenas {parle}.

Uma ressalva: com os verbos impessoais e de mudança de estado, o sujeito vira {on} ou {il}: {il pleut}, {on dit}, {il fait chaud}. E em {Voici}, {Voilà}, o sujeito desaparece sem substituição.

## Objetos: {le, la, les} contra {lui, leur}

Aqui está a grande armadilha do capítulo. O português tem {o, a, os, as} e {lhe, lhes}; o francês diverge e mantém os dois grupos separados. Em francês eles são **sistemas distintos**, e a confusão entre eles é o erro mais comum de quem aprende.

- **{le, la, les, me, te, nous, vous, se}** — objetos **diretos**. Substituem a coisa.
- **{lui, leur, y, en}** — objetos **indiretos**. Substituem a pessoa ou o lugar de uma preposição.

O teste é o mesmo do latim e do português: se o pronome substitui um substantivo que é objeto direto do verbo, é {le/la/les}; se substitui um substantivo regido por preposição ({à}, {de}), é {lui/leur}.

| Frase | {le, la, les} | {lui, leur} |
|---|---|---|
| eu vejo **o** homem | {Je **le** vois} | — |
| eu falo **com ele** | — | {Je **lui** parle} |
| eu vejo **os** homens | {Je **les** vois} | — |
| eu falo **com eles** | — | {Je **leur** parle} |

Repare que {lui} e {leur} nunca mudam de forma: não há {elle} para {lui} nem {elles} para {leur}. E o gênero se recupera na frase: {Je lui ai parlé} — quem fala com uma mulher também recebe {lui}.

## A elisão de {le} e {la}

Diante de vocal ou de {h} mudo, {le} e {la} perdem o {e} e viram {l’}:

- {je l’aime} — eu o amo
- {je l’adore} — eu o adoro
- {il l’a fait} — ele o fez
- {la maison} — a casa (aqui não há elisão: substantivo)

A elisão é **obrigatória** e vale para {le}, {la}, {me}, {te}, {se} e {je}, {ne}, {que} diante de vocal. Ela não acontece com {les} nem com {lui/leur}, que já terminam em consoante ou vogal: {je les vois}, {je leur parle}.

## Concordância: {le} e {la} seguem o referente

O {le} e a {la} não têm gênero próprio: eles copiam o gênero do substantivo que substituem, não o da pessoa falante.

- {C’est la femme ; je **la** vois} — é a mulher; eu a vejo
- {C’est l’homme ; je **le** vois} — é o homem; eu o vejo
- {Ce sont les filles ; je **les** vois} — são as meninas; eu as vejo

E atenção a {le} como artigo neutro: {Le livre est sur la table} «o livro está sobre a mesa» — aqui o {le} é artigo masculino definido, não pronome. O contexto resolve: se há verbo, pode ser pronome; se não há verbo, é artigo.

## Aplicação: o texto bíblico

João 3:16 é o versículo mais citado da língua francesa, e ele é feito quase só de pronomes: {Car Dieu a tant aimé le monde qu’il a donné son Fils unique} — {qu’il} = que ele, {son} = o seu. E em {Je suis le chemin, la vérité et la vie} (João 14:6), os três {le/la} formam uma enumeração simétrica, cada um no seu gênero.

No texto, pronomes indiretos aparecem o tempo todo: {Pour vous} (Mateus 26:13) — {vous} é objeto indireto de {pour}, e é por isso que o português traduz «por vós». E {Ceux qui credront en lui} (Marcos 9:35) traz o pronome {lui} — indireto de {en} — que em português virou «nele» e que a regência de {croire en} explica melhor do que qualquer sintaxe.`),
  vocab: [
    V('je', 'je', 'eu (1.ª sing., sujeito)'),
    V('nous', 'nous', 'nós (1.ª pl., sujeito)'),
    V('tu', 'tu', 'tu (2.ª sing., familiar)'),
    V('vous', 'vous', 'vocês / você (2.ª pl. ou polidez)'),
    V('il / elle', 'il', 'ele / ela (3.ª sing., sujeito)'),
    V('ils / elles', 'ils', 'eles / elas (3.ª pl., sujeito)'),
    V('le', 'le', 'o (COD masculino)'),
    V('la', 'la', 'a (COD feminino)'),
    V('les', 'les', 'os/as (COD plural)'),
    V('lui', 'lui', 'a ele / a ela (COI, sem mudança de forma)'),
    V('leur', 'leur', 'a eles / a elas (COI plural)'),
    V('je l’aime', 'aimer', 'eu o amo (elisão obrigatória)'),
    V('parle-t-il', 'parler', 'ele fala? (hífen de interrogação)'),
    V('il pleut', 'pleuvoir', 'chove (sujeito {il} impessoal)'),
    V('qu’il a donné', 'donner', 'que ele deu (pronombre relativo)'),
    V('ceux qui credront en lui', 'croire', 'os que crerão nele ({lui} = COI)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em «{Je lui parle}», por que o pronome é {lui} e não {le}?'),
    options: [
      T(
        'Porque {lui} é objeto indireto: substitui o nome regido por {à}, que é a preposição de {parler à}',
      ),
      T('Porque {lui} é o plural de {le} e {le} já foi usado na frase'),
      T('Porque {parler} exige sempre o plural no objeto'),
      T('Porque {le} só pode substituir pessoas, nunca coisas'),
    ],
    answer: 0,
    hint: T(
      'Regra §2: {le, la, les} substituem o objeto direto; {lui, leur} substituem o nome de uma preposição.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Elisão: «Je ___ aime beaucoup» (ele)'),
      answer: 'l’',
      hint: T('Ante vocal, {le} vira {l’}: a {e} cai e o pronome se junta ao verbo.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o pronome à sua função'),
      pairs: [
        { a: T('je'), b: T('sujeito de 1.ª pessoa: {je parle}') },
        { a: T('les'), b: T('objeto direto plural: {je les vois}') },
        { a: T('leur'), b: T('objeto indireto plural: {je leur parle}') },
        { a: T('lui'), b: T('objeto indireto singular, imutável: {je lui parle}') },
        { a: T('on'), b: T('sujeito impessoal: {on dit que}') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Em «{C’est la femme ; je la vois}», qual é o gênero do {la}, e por quê?'),
      options: [
        T('Feminino, porque o pronome copia o gênero do referente ({la femme}), não o de quem vê'),
        T('Masculino, porque {la} é a forma feminina e o verbo {vois} é masculino'),
        T('Neutro, porque a frase já tem um substantivo feminino e o pronome se neutraliza'),
        T('Feminino, porque {la} nunca se refere a pessoas'),
      ],
      answer: 0,
      hint: T(
        'Regra §4: {le}, {la} e {les} seguem o gênero do substantivo substituído, não o da pessoa.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O sujeito **nunca** se apaga no francês: {je parle}, {il parle}, {nous parlons}. A terminação do verbo já indica a pessoa, mas o pronome se mantém mesmo assim.',
      ),
    },
    {
      n: '2',
      text: T(
        '{le, la, les, me, te, se} são **objetos diretos**; {lui, leur, y, en} são **objetos indiretos**. O teste é o latim: {le} substitui o acusativo, {lui} substitui o nome regido por preposição.',
      ),
    },
    {
      n: '3',
      text: T(
        'A elisão é obrigatória: {le} e {la} perdem o {e} diante de vocal ou {h} mudo e viram {l’}. O mesmo vale para {me}, {te}, {se} e, diante de vocal, para {je}, {ne} e {que}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{le} e {la} copiam o gênero do **substantivo** que substituem, não o da pessoa: {C’est la femme ; je la vois} tem {la} feminino porque {femme} é feminino. {lui} e {leur}, ao contrário, não têm gênero nem número.',
      ),
    },
    {
      n: '5',
      text: T(
        '{vous} cobre o plural e o singular formal. Para falar com uma pessoa qualquer, é a forma padrão: {vous êtes français?} soa natural, {tu es français?} só entre iguais ou com crianças.',
      ),
    },
  ],
  notes: [
    {
      label: T('O sistema herdado do latim'),
      text: T(
        'Os dois conjuntos de pronomes vêm de palavras latinas distintas, e é por isso que eles não se misturam. {me}, {te}, {se} vêm de {mihi}, {tibi}, {sibi}; {lui} e {leur} são formas reduzidas de {illui} e {illorum}. O que houve foi que o latim tinha um único pronome acusativo ({eum}, {eam}, {eos}) e um único ablativo ({eo}, {ea}, {eis}), e o francês conservou os dois separados — ao contrário do português, que fundiu {o} e {lhe} numa zona de sombra, e do espanhol, que o apagou quase por completo ao perder os casos. Consequência prática: em francês, se você está em dúvida, pergunte quem é o **agente da preposição**, não quem é o **objeto do verbo**.',
      ),
    },
    {
      label: T('A pergunta por hífen'),
      text: T(
        'Quando o verbo é conjugado e não tem pronome antes, a pergunta se faz colando o pronome ao verbo: {parle-t-il}, {vient-elle}, {sont-ils}. O pronome ganha um {t} que é resto do antiguo {te} de pergunta — o mesmo {te} de {te veux-tu?}. Com {est-ce que} não há hifen: {est-ce que tu viens?}. E com um substantivo temático, a inversão é outra: {Quand viens-tu?}, {Où vas-tu?}. Em todo caso, o sujeito continua presente: o francês não tem sujeito nulo na pergunta, nem na afirmação.',
      ),
    },
  ],
  examples: [
    { text: 'Je parle.', gloss: T('eu falo (sujeito obrigatório)') },
    { text: 'Nous parlons français.', gloss: T('nós falamos francês ({nous} + presente)') },
    { text: 'Je le vois.', gloss: T('eu o vejo ({le} = objeto direto)') },
    { text: 'Je lui parle.', gloss: T('eu falo com ele ({lui} = objeto indireto)') },
    { text: 'Je leur donne le livre.', gloss: T('dou-lhes o livro (dois objetos de uma vez)') },
    { text: 'Je l’aime.', gloss: T('eu o amo (elisão obrigatória)') },
    {
      text: 'C’est la femme ; je la vois.',
      gloss: T('é a mulher; eu a vejo (gênero do referente)'),
    },
    { text: 'Parle-t-il ?', gloss: T('ele fala? (hífen de interrogação)') },
    { text: 'Il pleut.', gloss: T('chove ({il} impessoal)') },
    { text: 'Ceux qui credront en lui.', gloss: T('os que crerão nele ({lui} = COI de {en})') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — os pronomes pessoais'),
      head: [T('Pessoa'), T('Singular'), T('Plural'), T('Uso')],
      rows: [
        [T('1.ª'), T('je'), T('nous'), T('sujeito')],
        [T('2.ª'), T('tu'), T('vous'), T('sujeito')],
        [T('3.ª'), T('il / elle'), T('ils / elles'), T('sujeito')],
        [T('COD'), T('me, te, le/la, se'), T('nous, vous, les'), T('substitui a coisa')],
        [T('COI'), T('me, te, lui, se, y, en'), T('nous, vous, leur'), T('substitui a pessoa')],
      ],
    },
    {
      caption: T('Tabela 2 — direto e indireto lado a lado'),
      head: [T('Frase com nome'), T('COD'), T('COI'), T('Glosa')],
      rows: [
        [T('je vois **le** garçon'), 'le', T('—'), T('eu vejo o menino')],
        [T('je parle **à** Paul'), T('—'), 'lui', T('eu falo com ele')],
        [T('je vois **les** filles'), 'les', T('—'), T('eu vejo as meninas')],
        [T('je parle **aux** filles'), T('—'), 'leur', T('eu falo com elas')],
        [T('je pense **à** lui'), T('—'), 'lui', T('eu penso nele')],
        [
          T('je parle **à** Marie'),
          T('—'),
          T('{à elle} → {lui}'),
          T('eu falo com ela (também {lui})'),
        ],
      ],
    },
  ],
};
