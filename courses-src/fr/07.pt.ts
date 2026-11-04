import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('O plural dos substantivos'),
  subtitle: T('{-s}, {-x} e os plurais em {-aux}'),
  section: T('Substantivos'),
  body: C(`## A regra que se ouve

O plural francês é, na maioria esmagadora dos casos, um *-s* mudo. {livre} «livro» dá {livres}; {ami} «amigo» dá {amis}; {maison} «casa» dá {maisons}. A letra aparece, o som não. Um francês fala {lɛʁv} para o singular e {lɛʁv} para o plural — a mesma coisa. Por isso o plural só se recupera pelo contexto, pelos determinantes ou pelo verbo.

Quem usa a palavra errada denuncia-se logo, mesmo sem falar: é o mesmo efeito de escrever «os livro».

## Quando o *-s* já está lá

Se o substantivo já termina em *-s*, *-x* ou *-z*, o plural não acrescenta nada, nem letra nem som:

- {le fils} → {les fils} «o filho → os filhos»
- {le prix} → {les prix} «o preço → os preços»
- {la voix} → {les voix} «a voz → as vozes»
- {le nez} → {les nez} «o nariz → os narizes»

São os chamados **plurais invariáveis**, e são mais frequentes em francês do que a gente imagina: {le temps}, {le mois}, {l'angle}, {le corps}, {le sourcil}, {le pelvis}. A lista merece ser memorizada, porque aqui o erro custa caro.

## Os dois grandes grupos: *-eau* e *-al*

O padrão mais produtivo do plural francês é a troca de uma terminação por outra, sempre com o mesmo *x* final: *-eau → -eaux* e *-al → -aux*.

| Singular | Plural | Glossário |
|---|---|---|
| {château} | {châteaux} | castelo / castelos |
| {oiseau} | {oiseaux} | pássaro / pássaros |
| {bateau} | {bateaux} | barco / barcos |
| {cheval} | {chevaux} | cavalo / cavalos |
| {animal} | {animaux} | animal / animais |
| {journal} | {journaux} | jornal / jornais |
| {hôpital} | {hôpitaux} | hospital / hospitais |

Quem estuda francês aprende logo que **o plural em si é regular**; a irregularidade está sempre no caso, nunca no número. Não existe "dual" nem "plural dobrado": há apenas uma forma para muitos.

## Onde o padrão falha

A regra do *-al → -aux* é forte, mas não universal. Um punhado de palavras resiste:

- {festival} → {festivals}, {carnaval} → {carnavals}, {bal} → {bals}
- {oral} → {oraux}, {hospital} → {hôpitaux}, {global} → {globaux}

O mesmo vale para *-eau*: {le nouveau} → {les nouveaux}, {le peau} → {les peaux}, mas {le château} → {les châteaux} e {le bateau} → {les bateaux}. O que decide é o número de sílabas, não a letra.

## O grupo do *-ou*

A terminação *-ou* só faz *-oux* numa lista fechada e muito pequena: {genou} → {genoux} «joelho/joelhos», {caillou} → {cailloux} «seixo/seixos», {chou} → {choux} «couvejo/couvejos», {hibou} → {hiboux} «coruja/corujas», {joujou} → {joujoux} «brinquedo/brinquedos». Todo o resto apenas recebe *-s*: {clou → clous}, {trou → trous}, {cou → cous}, {bijou → bijoux}.

## Leitura — Louis Segond

{Au commencement, Dieu créa les cieux et la terre} (Gn 1:1) — {les cieux} com *-x* invariável. {Il fit ensuite le soleil, la lune et les étoiles} (Gn 1:16) — três substantivos, o segundo com *-x*. {Vous serez donc parfaits comme votre Père qui est aux cieux est parfait} (Mt 5:48) — o plural dos {enfants de Dieu} é o que segura a promessa. Os mesmos mecanismos resolvem {les animaux de la terre}, {les oiseaux du ciel} e {les poissons des eaux} de Gênesis 1.

## O essencial

Uma letra muda e nada muda no som: é essa a ideia central do plural francês. Só quando a terminação se troca (*-al → -aux*, *-ou → -oux*, *-iel → -ieux*) é que o ouvido recebe um sinal.`),
  vocab: [
    V('livre', 'livre', 'livro (→ livres)'),
    V('les fils', 'fils', 'os filhos; plural invariável'),
    V('les prix', 'prix', 'os preços; invariável (x)'),
    V('la voix', 'voix', 'a voz; invariável no plural'),
    V('le nez', 'nez', 'o nariz; invariável (z)'),
    V('le château', 'château', 'o castelo; -eau → -eaux'),
    V('le cheval', 'cheval', 'o cavalo; -al → -aux'),
    V('le journal', 'journal', 'o jornal;journals em -aux'),
    V("l'animal", 'animal', 'o animal; animaux'),
    V("l'hôpital", 'hôpital', 'o hospital; hôpitaux'),
    V('le genou', 'genou', 'o joelho; -ou → -oux'),
    V('le chou', 'chou', 'o couvejo; -ou → -oux'),
    V('le clou', 'clou', 'o prego; só acrescenta -s'),
    V('le ciel', 'ciel', 'o céu; cieux'),
    V("l'œil", 'œil', 'o olho; yeux (plural único)'),
    V('le travail', 'travail', 'o trabalho; travaux'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se forma normalmente o plural de {journal}?'),
    options: [
      T('{journaux} — troca de terminação, como em {cheval}'),
      T('{journals} — apenas *-s* mudo'),
      T('{journaux} — porque termina em *-al*'),
      T('{journaus} — inserção de *-u*'),
    ],
    answer: 0,
    hint: T(
      'A opção 1 nomeia a regra; a opção 3 é a razão dela. As duas estão certainas — escolha a que descreve o mecanismo.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Plural de {cheval}: cheva_'),
      answer: 'ux',
      hint: T('Regra §3: {-al} → {-aux}.'),
    },
    {
      kind: 'choose',
      prompt: T(
        'Qual destes plurais é irregular — isto é, não segue o padrão do grupo a que pertence?',
      ),
      options: [T('{les voix}'), T('{les châteaux}'), T('{les carnavals}'), T('{les genoux}')],
      answer: 2,
      hint: T('Três seguem o grupo; {carnaval} resiste ao -aux.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o singular ao plural correspondente'),
      pairs: [
        { a: T('lejournal'), b: T('les journaux') },
        { a: T('le prix'), b: T('les prix') },
        { a: T('le bouton'), b: T('les boutons') },
        { a: T('le chou'), b: T('les choux') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Em «{les yeux}, {les oreilles} et {les bouches}», quantos plurais invariáveis aparecem?',
      ),
      options: [T('Nenhum'), T('Um'), T('Dois'), T('Três')],
      answer: 1,
      hint: T('Olhos e bocas não são invariáveis: {yeux} é irregular e {bouches} é regular.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A regra geral acrescenta *-s* mudo ao singular: {livre → livres}, {ami → amis}, {maison → maisons}, {enfant → enfants}. O som não muda, e o plural só se reconhece pelo contexto.',
      ),
    },
    {
      n: '2',
      text: T(
        'Substantivos terminados em *-s*, *-x* ou *-z* são invariáveis no plural: {le fils → les fils}, {le prix → les prix}, {la voix → les voix}, {le nez → les nez}.',
      ),
    },
    {
      n: '3',
      text: T(
        'As trocas produtivas são *-eau → -eaux* e *-al → -aux*: {château → châteaux}, {oiseau → oiseaux}, {cheval → chevaux}, {animal → animaux}, {journal → journaux}, {hôpital → hôpitaux}.',
      ),
    },
    {
      n: '4',
      text: T(
        'O *-al → -aux* é regra, não lei: {festival → festivals}, {carnaval → carnavals}, {bal → bals} ficam fora. O número de sílabas explica a resistência, não a letra final.',
      ),
    },
    {
      n: '5',
      text: T(
        'O *-ou → -oux* só vale para uma lista fechada — {genou → genoux}, {caillou → cailloux}, {chou → choux}, {hibou → hiboux} —; nos demais basta *-s*: {clou → clous}, {trou → trous}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Plurais conceituais'),
      text: T(
        'Alguns plurais não são uma mecânica: são formas autênticas, com raízes próprias. {œil → yeux}, {ciel → cieux}, {vitrail → vitraux}, {dieu → dieux}, {eau → eaux}. Nenhum delas se deduz por regra — decorra-as como palavras.',
      ),
    },
    {
      label: T('Números, siglas e nomes'),
      text: T(
        'Anos, siglas e sobrenomes não tomam plural: {les années 1990}, {les États-Unis}, {les Dupont}, {les Martin}. O plural entra apenas quando a pessoa se torna coletiva: {les Duponts} «os vários Dupont».',
      ),
    },
  ],
  examples: [
    { text: 'livre → livres', gloss: T('livro → livros: *-s* mudo') },
    { text: 'le fils → les fils', gloss: T('o filho → os filhos: invariável') },
    { text: 'le prix → les prix', gloss: T('o preço → os preços: invariável (x)') },
    { text: 'la voix → les voix', gloss: T('a voz → as vozes: invariável') },
    { text: 'le château → les châteaux', gloss: T('castelo → castelos: *-eau → -eaux*') },
    { text: 'le cheval → les chevaux', gloss: T('cavalo → cavalos: *-al → -aux*') },
    { text: "l'animal → les animaux", gloss: T('animal → animais: *-al → -aux*') },
    { text: 'le genou → les genoux', gloss: T('joelho → joelhos: *-ou → -oux*') },
    { text: 'le clou → les clous', gloss: T('prego → pregos: apenas *-s*') },
    { text: "l'œil → les yeux", gloss: T('olho → olhos: plural único e irregular') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — A regra geral e os plurais invariáveis'),
      head: [T('Caso'), T('Terminação do singular'), T('Plural'), T('Som'), T('Exemplos')],
      rows: [
        [
          'regra geral',
          '{-e}, {-a}, consoante',
          '{-s}',
          'inalterado',
          '{livre → livres}, {ami → amis}',
        ],
        ['já em -s', '{-s}', '{-s}', 'inalterado', '{le fils → les fils}'],
        ['já em -x', '{-x}', '{-x}', 'inalterado', '{le prix → les prix}, {le voix → les voix}'],
        ['já em -z', '{-z}', '{-z}', 'inalterado', '{le nez → les nez}'],
        ['estados, meses', '{le temps}, {le mois}', 'iguais', 'inalterado', '{le mois → les mois}'],
      ],
    },
    {
      caption: T('Tabela 2 — Terminações que trocam de forma'),
      head: [T('Grupo'), T('Troca'), T('Exemplos'), T('Limite ou exceção')],
      rows: [
        [
          '-eau',
          '-eaux',
          '{château → châteaux}, {bateau → bateaux}',
          '{le nouveau → les nouveaux}, {le peau → les peaux}',
        ],
        [
          '-al',
          '-aux',
          '{cheval → chevaux}, {animal → animaux}',
          '{festival → festivals}, {bal → bals}, {hospital → hôpitaux}',
        ],
        ['-ou (lista)', '-oux', '{genou → genoux}, {chou → choux}', '{clou → clous}, {cou → cous}'],
        ['-iel', '-ieux', '{ciel → cieux}', '{le miel → les miels}'],
        [
          '-eau / -eil',
          '-eaux / -eux',
          '{œil → yeux}, {vitrail → vitraux}',
          'plurais irreprodutíveis por regra',
        ],
      ],
    },
  ],
};
