import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('Os pronomes possessivos'),
  subtitle: T('{mon, ma, mes} e os tônicos {le mien, la sienne, les leurs}'),
  section: T('Os pronomes'),
  body: C(`## Dois sistemas com a mesma origem

O possessivo francês vem em duas famílias, e elas dividem um único par de raízes: {mon, ma, mes} para o possuidor, {le mien, la mienne, les miens} para a coisa que é dele.

A forma **átona** vem antes do substantivo e nunca aparece sozinha: {mon père} «meu pai», {ta mère} «tua mãe», {mes enfants} «meus filhos», {notre Père} «Pai nosso», {votre maison} «casa de vocês», {leur pays} «país deles».

A forma **tônica** traz artigo definido e vale como um substantivo, sozinho ou depois de preposição: {le mien} «o meu», {la tienne} «a tua», {les leurs} «os deles». É a única que sobrevive sem nome: {C'est mon livre, pas le tien} «Este é meu livro, não o teu».

## Átonos: a concordância é com a coisa

O ponto que engana quem fala português é que {mon}, {ta}, {mes} concordam com o **objeto possuído**, não com quem possui.

- {mon} antes de substantivo masculino: {mon livre}, {mon père}, {mon Dieu}.
- {ma} antes de substantivo feminino: {ma maison}, {ma sœur}, {ma vie}.
- {mes} para qualquer plural: {mes livres}, {mes sœurs}, {mes enfants}.

E há a **eufonia**: {mon} vira {ma} diante de {ma} — {ma maison} «minha casa» — e diante de {mon} — {mon père} «meu pai».

## A eufonia: {mon} e {cet}

O {mon} absorve o *-n* final diante de vogal ou *h* mudo, e vira {ma}, {mo}, {mes}:

- {mon âme} «minha alma» — substantivo feminino, mas a eufonia manda.
- {mon histoire} «minha história» — igual, {h} mudo.
- {mon école} «minha escola».
- {mon homme} «meu marido» — *h* mudo; compare {mon héros} «meu herói», com *h* aspirado, que **não** muda.

A mesma regra vale para {ton}, {son}, {notre}, {votre}: {ton âme}, {son école}, {votre histoire}. O *-s* final de {mes}, {tes}, {ses} não muda nunca: {mes amis}, {tes idées}, {ses frères}.

## Tônicos: com artigo, sempre

O tônico repete o artigo do substantivo que substitui:

| | Singular | Plural |
|---|---|---|
| Masculino | {le mien}, {le tien}, {le sien} | {les miens}, {les tiens}, {les siens} |
| Feminino | {la mienne}, {la tienne}, {la sienne} | {les miennes}, {les tiennes}, {les siennes} |

E {le nôtre}, {la nôtre}, {les nôtres}, {le vôtre}, {le leur}, {les leurs}. Funcionam como substantivos: {Je préfère le sien} «Prefiro o dele». Depois de preposição, é o tônico que aparece, nunca o átono: {le livre de mon frère} — mas {le sien} e não ~~{le de lui}~~ quando o possuidor é o próprio pronome.

## O ponto cego: {son, sa, ses} e {leur}

{sur}, {sa}, {ses} podem significar «dele» ou «dela». O contexto decide: {sa mère} «a mãe dele» ou «a mãe dela»? O verbo próximo costuma desempatar — {il parle à sa mère} «ele fala com a mãe dele». Noplural, {ses} «os seus» também é ambíguo.

{leur} e {leurs} são quase sempre «deles», porque o possessivo plural só existe nessa forma: {leurs enfants} «os filhos deles». Mas {leur} sem *-s*, antes de substantivo, é objeto indireto: {je leur parle} «falo-lhes».

## Leitura — Louis Segond

O texto bíblico French usa o átono o tempo todo, porque quase nunca precisa dizer «de quem». **{Notre Père, qui es aux cieux}** «Pai nosso, que estás nos céus» — {notre} em 2.ª pessoa, com a mesma flexão que {ton}: {notre Père} e {ton Père} podem coexistir na mesma frase, um addressing e outro em narração.

**{Ton nom soit sanctifié}** e, logo adiante, **{Ton règne vienne}** «venha o teu reino»: o substantivo repete-se, o possessivo também, e é o padrão do Padre nosso — a oração anda por pares, nome e possessivo.

O tônico aparece onde a tradução French precisa Markus: **{l'un le autre}** «um ao outro» vem do latim, e **{ceux de Jean}** «os de João» usa o tônico contracted: {celui de}, {ceux de}, {celles de} — como em **les saints de Dieu** ou no mais corrente **{les enfants de Dieu}**.

O caso mais bonito é o dos **{frères de Jésus}** (Mc 3:5): {de} liga o substantivo a um nome próprio, e {son} SOME porque o possessivo absoluto não seria claro.

## O essencial

{mon, ta, mes} concordam com a coisa e vivem antes do substantivo; {le mien, la tienne, les leurs} trazem artigo e vivem como substantivo. A eufonia troca {mon} por {ma}, {mo}, {mes} antes de vogal e *h* mudo. E {son} é o único ambíguo do sistema.`),
  vocab: [
    V('mon', 'mon', 'meu (masculino singular)'),
    V('ma', 'ma', 'meu (feminino singular)'),
    V('mes', 'mes', 'meu (plural, qualquer gênero)'),
    V('ton', 'ton', 'teu (masculino singular)'),
    V('son', 'son', 'seu: dele ou dela (ambíguo)'),
    V('notre', 'notre', 'nosso ({notre Père})'),
    V('votre', 'votre', 'de vocês ({votre maison})'),
    V('leur', 'leur', 'deles (antes de nome) / lhes (COI)'),
    V('le mien', 'mien', 'o meu (tônico masculino)'),
    V('la sienne', 'sien', 'a dele/dela (tônico feminino)'),
    V('les leurs', 'leur', 'os deles (tônico plural)'),
    V('le nôtre', 'nôtre', 'o nosso (tônico)'),
    V('mon âme', 'âme', 'minha alma (eufonia: {ma} impossível)'),
    V('mon héros', 'héros', 'meu herói (h aspirado: sem eufonia)'),
    V('mon homme', 'homme', 'meu marido (h muda: {mon} intacto)'),
    V('leurs enfants', 'enfant', 'os filhos deles ({leurs} com *-s*)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em «Il parle à ___ mère», quem é o dono da mãe?'),
    options: [
      T(
        'Dele, quase sempre: o sujeito masculino {il} é o dono mais provável, e a eufonia só permite {sa}',
      ),
      T('Não se pode saber: {sa} é ambíguo e o contexto dado não resolve'),
      T('Dela: o verbo {parle} é feminino e determina o possuidor'),
      T('Das duas: {sa} nunca se refere a {il}'),
    ],
    answer: 0,
    hint: T(
      'A ambiguidade existe em teoria; na prática o sujeito {il} adjacente é o desempate mais forte.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Eufonia: «___ école» (a minha escola).'),
      answer: 'mon',
      hint: T('O substantivo é feminino, mas {ma} + {école} é impossível, então o *-n* volta.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase usa corretamente o possessivo tônico?'),
      options: [
        T('Ce livre est à moi, le ___ est dans ta chambre.'),
        T('Ce livre est à mon, le ___ est dans ta chambre.'),
        T('Ce livre est à moi, le mon est dans ta chambre.'),
        T('Ce livre est à moi, le miens est dans ta chambre.'),
      ],
      answer: 0,
      hint: T('O tônico precisa de artigo e concorda: {le mien}, {la mienne}, {les miens}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma à sua função'),
      pairs: [
        { a: T('{ma sœur}'), b: T('átono feminino: concorda com a coisa') },
        { a: T('{mon}'), b: T('forma de eufonia, sem *-n*') },
        { a: T('{la sienne}'), b: T('tônico feminino: artigo + concordância') },
        { a: T('{les leurs}'), b: T('tônico plural: «os deles»') },
        { a: T('{je leur parle}'), b: T('{leur} sem *-s* = objeto indireto') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O átono concorda com a coisa possuída, nunca com o possuidor: {son livre} «o livro dele» mesmo sendo o dono feminino.',
      ),
    },
    {
      n: '2',
      text: T(
        'A eufonia retira o *-n* de {mon, ton, son} antes de vogal ou *h* mudo: {mon âme}, {ton école}, {son histoire}. O *-s* de {mes, tes, ses} nunca cai.',
      ),
    },
    {
      n: '3',
      text: T(
        'O *h* aspirado bloqueia a eufonia: {mon héros}, {la haga}, {le hibou} — todos com *-n* e *-s* intactos.',
      ),
    },
    {
      n: '4',
      text: T(
        'O tônico sempre leva artigo e concorda em gênero e número: {le mien}, {la mienne}, {les miens}, {les miennes}. Sem artigo é errado.',
      ),
    },
    {
      n: '5',
      text: T(
        '{leur} sem *-s* antes de substantivo é objeto indireto; {leurs} com *-s* é possessivo. A distinção é só ortográfica, mas muda o sentido da frase.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que {leur} não flexiona'),
      text: T(
        'Todos os possessivos alternativos vêm envoltos em artigo, e por isso concordam: {le mien}, {la mienne}. Mas {leur} começou como uma forma **de objeto indireto** e nunca virou possessivo por flexão — o possessivo é {leurs}, tirado do plural {le leur}. Por isso {leur} é uma das poucas palavras French que serve para duas funções com uma letra de diferença, e é por isso que a ortografia French, que é fonética, se torna enganosa justamente aqui.',
      ),
    },
    {
      label: T('A eufonia contra a gramática'),
      text: T(
        'Em {mon âme}, a gramática pediria {ma}: {âme} é feminino. Mas {ma âme} é impronunciável — duas vogais nasalais seguidas — e a língua ganha. O mesmo aconteceu com {bel} «belo», que perdeu o *-e* final por causa de {belle}: um substantivo masculino flexiona como feminino, e ninguém chama isso de erro. A eufonia é a camada mais antiga do francês, e é ela que conserva vestígios do latim popular.',
      ),
    },
  ],
  examples: [
    { text: 'mon père', gloss: T('meu pai (masculino, sem eufonia)') },
    { text: 'ma maison', gloss: T('minha casa (feminino, {ma} normal)') },
    { text: 'mon âme', gloss: T('minha alma (eufonia vence a concordância)') },
    { text: 'mon héros', gloss: T('meu herói (h aspirado, sem eufonia)') },
    {
      text: 'C’est mon livre, pas le tien',
      gloss: T('este é meu livro, não o teu ({le} + {tien})'),
    },
    { text: 'je préfère le sien', gloss: T('prefiro o dele (tônico masculino)') },
    { text: 'je leur parle', gloss: T('falo-lhes ({leur} = objeto indireto)') },
    { text: 'leurs enfants', gloss: T('os filhos deles (possessivo plural)') },
    { text: 'Notre Père, qui es aux cieux', gloss: T('Pai nosso, que estás nos céus') },
    { text: 'les enfants de Dieu', gloss: T('os filhos de Deus ({de} + nome próprio)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Possessivos átonos (1.ª e 2.ª pessoa)'),
      head: [T('Pessoa'), T('Singular'), T('Plural')],
      rows: [
        ['1.ª', T('{mon} / {ma}'), T('{mes}')],
        ['2.ª {tu}', T('{ton} / {ta}'), T('{tes}')],
        ['2.ª {vous}', T('{votre}'), T('{vos}')],
        ['3.ª', T('{son} / {sa}'), T('{ses}')],
      ],
    },
    {
      caption: T('Tabela 2 — Possessivos tônicos'),
      head: [T('Gênero'), T('Singular'), T('Plural')],
      rows: [
        [
          T('Masculino'),
          T('{le mien}, {le tien}, {le sien}, {le nôtre}, {le vôtre}'),
          T('{les miens}, {les tiens}, {les siens}, {les nôtres}, {les vôtres}'),
        ],
        [
          T('Feminino'),
          T('{la mienne}, {la tienne}, {la sienne}, {la nôtre}'),
          T('{les miennes}, {les tiennes}, {les siennes}, {les nôtres}'),
        ],
      ],
    },
  ],
};
