import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Os pronomes reflexivos'),
  subtitle: T('{me, te, se, nous, vous, se} e o verbo que volta ao sujeito'),
  section: T('Os pronomes'),
  body: C(`## Seis pronomes para uma pessoa só

O pronome reflexivo francês é {me}, {te}, {se}, {nous}, {vous}, {se} — o *-e* final marca a 3.ª pessoa. Ele aponta para o sujeito da própria frase:

- {Je me lave} «eu me lavo» — {je} e {me} são a mesma pessoa.
- {Tu te lèves} «tu te levantas».
- {Il s'habille} «ele se veste».
- {Nous nous retrouvons} «nos encontramos».
- {Vous vous asseyez} «vocês se sentam».

O pronome vem **antes** do verbo conjugado, e o verbo fica sem objeto: {Je lave moi} não existe.

## Reflexivo, recíproco, pronominal: três leituras

O {se} francês não distingue esses casos pela forma, só pelo sentido:

- **Reflexivo**: {Elle s'habille} «ela se veste» — uma pessoa, ela e ela.
- **Recíproco**: {Ils s'aiment} «eles se amam» — cada um ama o outro; o plural só tem sentido recíproco, porque {s'aimer} não tem outro objeto possível.
- **Pronominal**: {Je m'en souviens} «eu me lembro» — o pronome substitui um objeto que não é o sujeito: a lembrança é de outra coisa.

A ambiguidade é real: {Nous nous lavons} «nos lavamos» pode ser reflexivo (cada um se lava) ou recíproco (um lava o outro). Só o contexto decide.

## {s'en} e a partícula {en}

Muitos verbos pronominais incorporate {en} («de»): {s'en aller} «ir-se embora», {s'en souvenir} «lembrar-se de», {s'en tenir} «dar conta». O {en} fica grudado: {elle s'en va}, {il s'en souviens}.

No imperativo, o *-s* do {se} desaparece e sobra o hífen: **{Va-t'en !}** «vai embora!», **{Va-t'en, dis-lui}**. Com {y} o mesmo: **{Vas-y}** «vai lá».

## O participio concorda com {être}

Aqui está a regra, e ela se parte pelo auxiliar:

- {elle s'est levée} «ela se levantou» — {se lever}, verbo de movimento, {être}, **concorda**: o *-e* aparece.
- {elle s'est blessée} «ela se feriu» — {se blesser}, {être}, concorda.
- {elle s'est sentie} «ela se sentiu» — {se sentir}, {être}, concorda.
- {elle s'est lavé les mains} «ela se lavou as mãos» — {se} mais objeto direto, **sem** concordância, porque o objeto vem depois.

Ou seja: {se} mais verbo sem objeto, com {être}, concorda com o sujeito. {se} mais verbo com objeto, não concorda — e o objeto fica visível depois do participio.

## Verbos que mudam de sentido com {se}

O {se} não é enfeite. Ele muda o verbo:

- {dormir} «dormir» → {s'endormir} «adormecer».
- {passer} «passar» → {se passer} «acontecer» ({Que se passe-t-il ?} «o que está acontecendo?»).
- {revenir} «voltar» → {s'en revenir} «voltar atrás», no sentido de «deixar para trás».
- {servir} «servir» → {se servir de} «servir-se de».

E há verbos que **só** existem na forma pronominal: {se repentir} «arrepender-se», {se plaindre} «queixar-se», {se méfier de} «desconfiar de», {se servir de} «servir-se de».

## Leitura — Louis Segond

O texto bíblico francês está cheio de verbos pronominais, e eles aparecem com frequência onde está a mão: **{Il leur lava les pieds}** «ele lhes lavou os pés» (Jo 13) é indireto e reflexivo ao mesmo tempo, porque {les} e {eux} designam o mesmo grupo.

**{Se lever}** aparece em todos os relatos de ressurreição, e **{Il s'est levé, et il s'en est allé}** «ele ressuscitou e foi embora» é a fórmula de Lc 24:34. A partícula {en} acompanha porque o latim {recessit} traz o valor de «de lá».

O caso mais elocuente é **{se glorifier}** «gloriar-se»: **{Qu'il ne se glorifie pas}** «não se glorie» (1Co 4:19). A forma pronominal carrega o sentido de orgulho que o latim {gloriari} já tinha — o francês não acrescenta nada, traduz o que já está.

E há o mais curto de todos: **{Comment cela se peut-il ?}** «como isso pode ser?» — o verbo pronominal vira sujeito impessoal, e a frase inteira fica sem sujeito nominal.

## O essencial

O reflexivo aponta para o sujeito, vem antes do verbo e usa {me, te, se, nous, vous, se}. O {se} pode ser reflexivo, recíproco ou pronominal — a diferença é de sentido, não de forma. E quando o verbo base é {être} e não tem objeto, o particípio concorda com o sujeito: {elle s'est levée}.`),
  vocab: [
    V('me', 'me', 'me (1.ª pessoa singular)'),
    V('te', 'te', 'te (2.ª pessoa singular)'),
    V('se', 'se', 'se (3.ª pessoa)'),
    V('nous', 'nous', 'nos (recíproco ou reflexivo plural)'),
    V('vous', 'vous', 'os/ senhora (plural ou cortesia)'),
    V('je me lave', 'laver', 'eu me lavo ({se} + {laver})'),
    V('il s’habille', 'habiller', 'ele se veste'),
    V('elle s’est levée', 'lever', 'ela se levantou (particípio concorda)'),
    V('ils s’aiment', 'aimer', 'eles se amam (recíproco)'),
    V('s’en aller', 'aller', 'ir-se embora ({en} grudado)'),
    V('va-t’en', 'aller', 'vai embora! (imperativo, sem *-s*)'),
    V('je m’en souviens', 'souvenir', 'eu me lembro disso'),
    V('se repentir', 'repentir', 'arrepender-se (só pronominal)'),
    V('se passer', 'passer', 'acontecer ({Que se passe-t-il ?})'),
    V('s’endormir', 'dormir', 'adormecer (≠ {dormir})'),
    V('il leur lava les pieds', 'laver', 'ele lhes lavou os pés (Jo 13)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em «{Nous nous lavons}», por que a frase é ambígua?'),
    options: [
      T(
        'Porque {nous} pode ser reflexivo (cada um se lava) ou recíproco (um lava o outro): a forma é a mesma',
      ),
      T('Porque {nous} só pode ser recíproco, e o contexto eliminaria a dúvida'),
      T('Porque o verbo {laver} aceita três pronomes diferentes'),
      T('Porque {nous} precisa de {se} no lugar'),
    ],
    answer: 0,
    hint: T('O {se} French não distingue os casos pela forma: quem distingue é o sentido.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("«Elle s'est ___» (ela se levantou, de {se lever}, com {être})."),
      answer: 'levée',
      hint: T('Com {être}, o participio concorda com o sujeito feminino: *-e* final.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase NÃO tem valor recíproco?'),
      options: [
        T("{Elle s'habille.} — uma pessoa, uma ação"),
        T("{Ils s'aiment.} — cada um ama o outro"),
        T('{Nous nous retrouvons.} — cada um encontra o outro'),
        T('{Elles se parlent.} — cada uma fala com a outra'),
      ],
      answer: 0,
      hint: T(
        'O plural de {se} mais verbo transitivo é quase sempre recíproco; o singular nunca é.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Ligue o pronome ao sujeito a que aponta'),
      pairs: [
        { a: T('{Je me}'), b: T('{je} — 1.ª pessoa singular') },
        { a: T('{Tu te}'), b: T('{tu} — 2.ª pessoa singular') },
        { a: T('{Il se}'), b: T('{il/elle} — 3.ª pessoa, com *-e*') },
        { a: T('{Nous nous}'), b: T('{nous} — 1.ª pessoa plural') },
        { a: T('{Vous vous}'), b: T('{vous} — 2.ª pessoa, plural ou cortesia') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O pronome reflexivo vem antes do verbo conjugado e o verbo fica sem objeto: {Je me lave}, nunca {Je lave moi}.',
      ),
    },
    {
      n: '2',
      text: T(
        'O {se} é a mesma forma nos três usos: reflexivo, recíproco e pronominal. O plural mais verbo transitivo é quase sempre recíproco; o singular nunca é.',
      ),
    },
    {
      n: '3',
      text: T(
        'A 3.ª pessoa do singular e a 3.ª do plural têm a mesma forma, {se}. Quem desambigua é o verbo, não o pronome: {il se lève} contra {ils se lèvent}.',
      ),
    },
    {
      n: '4',
      text: T(
        "No imperativo, o {se} vira {toi} e perde o *-s* com hífen: {lave-toi}, {levez-toi}. Com {en} ou {y} junto, a forma é {t'en} e {y}: {va-t'en}, {vas-y}.",
      ),
    },
    {
      n: '5',
      text: T(
        "O participio pronominal concorda com o sujeito apenas quando não há objeto direto: {elle s'est levée} sim, {elle s'est lavé les mains} não.",
      ),
    },
  ],
  notes: [
    {
      label: T('Reflexivo não é sinônimo de «intransitivo»'),
      text: T(
        'Em outras línguas, um verbo como {laver} «lavar» é transitivo, e {se laver} é o seu equivalente reflexivo — a forma curta. Em francês, {se laver} é um **verbo diferente**, com significado próprio: {se laver} «lavar-se» e {laver qqch} «lavar alguma coisa» podem coexistir na mesma frase, {Je me lave les mains}, e isso é impossível em português, onde a forma pronominal é mera alternativa. Daí a regra prática: quando o verbo já tem objeto, o {se} pode ser opcional; quando não tem, {se} é obrigatório.',
      ),
    },
    {
      label: T('A concordância é uma herança do latim'),
      text: T(
        "No latim, um verbo de movimento com auxiliar {esse} — {levantasse-se}, { abeunt} — nunca recebia partícpio. O português herdou isso e cancelledo: {levantou-se}, sem *-e*. O francês restaurou a regra, e por isso {elle s'est levée} soa mais «correcto» do que {elle s'est levé} para um French. A Bible Louis Segond é cheirando a isso: as formas com *-e* dominam, porque o tradutor XIX century sentia a perda se não as usasse. Quem lê French e escreve {elle s'est levé} sem o *-e* não está errado em Portugal — está errado em França.",
      ),
    },
  ],
  examples: [
    { text: 'je me lave', gloss: T('eu me lavo (reflexivo, 1.ª pessoa)') },
    { text: 'tu te lèves', gloss: T('tu te levantas ({te} = {tu})') },
    { text: 'il s’habille', gloss: T('ele se veste ({se} = 3.ª pessoa)') },
    { text: 'nous nous retrouvons', gloss: T('nos encontramos (recíproco)') },
    { text: 'elle s’est levée', gloss: T('ela se levantou (particípio concorda)') },
    { text: 'elle s’est lavé les mains', gloss: T('ela se lavou as mãos (sem concordância)') },
    { text: 'ils s’aiment', gloss: T('eles se amam (recíproco obrigatório)') },
    { text: 'va-t’en', gloss: T("vai embora! (imperativo com {t'en})") },
    { text: 'je m’en souviens', gloss: T('eu me lembro disso ({en} grudado)') },
    { text: 'il leur lava les pieds', gloss: T('ele lhes lavou os pés (Jo 13:1-17)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Pronomes reflexivos'),
      head: [T('Sujeito'), T('Reflexivo'), T('Imperativo')],
      rows: [
        ['{je}', T('{me}'), T('—')],
        ['{tu}', T('{te}'), T('{toi} (*-s* some)')],
        ['{il / elle}', T('{se}'), T('{toi} — sem equivalente')],
        ['{nous}', T('{nous}'), T('{—}')],
        ['{vous}', T('{vous}'), T('{—}')],
      ],
    },
    {
      caption: T('Tabela 2 — Concordância do participio pronominal'),
      head: [T('Caso'), T('Exemplo'), T('Concorda?')],
      rows: [
        [T('{se} + verbo intransitivo + {être}'), T("{elle s'est levée}"), T('sim')],
        [T('{se} + verbo com objeto direto + {avoir}'), T("{elle s'est lavé les mains}"), T('não')],
        [T('{se} + infinitivo + {être}'), T("{elle s'est sentie}"), T('sim')],
        [T("{s'en} + verbo de movimento + {être}"), T("{il s'en est allé}"), T('sim')],
      ],
    },
  ],
};
