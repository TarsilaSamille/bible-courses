import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Verbos com preposição'),
  subtitle: T('{penser à, croire en, parler de, manquer à} — o verbo manda na preposição'),
  section: T('As preposições'),
  body: C(`## Preposição não se traduz sozinha

A regra mais importante deste capítulo cabe em uma frase: **a preposição vem do verbo, e nunca pode ser trocada**. Você não traduz {penser à} como «pensar algo»; você traduz o bloco inteiro. E o bloco pode significar mais do que a soma das partes.

O exemplo clássico é {penser}. Com {à}, pensa-se em uma coisa ou em uma pessoa: {Je pense à maison} «penso na casa», {Je pense à mon ami} «penso no meu amigo». Com {de}, pede-se opinião: {Que penses-tu de ce film?} «o que você acha deste filme?». São os mesmos dois verbos em português e duas preposições diferentes em francês — e a escolha é o significado.

## O mapa dos verbos frequentíssimos

Estes verbos aparecem em quase todo texto French e quase todos exigem preposição:

| Verbo | Preposição | Significado | Exemplo |
|---|---|---|---|
| {penser} | {à} | pensar em | {penser à Dieu} |
| {penser} | {de} | opinar sobre | {penser de ce film} |
| {croire} | {en} | crer em (fé) | {croire en Dieu} |
| {croire} | {que} | crer que | {je crois qu’il dit vrai} |
| {parler} | {à} | falar com | {parler à mon père} |
| {parler} | {de} | falar sobre | {parler de Dieu} |
| {parler} | {pour} | defender a causa | {parler pour le pauvre} |
| {attendre} | {?} | esperar por | {attendre le train} |
| {manquer} | {à / de} | faltar a / carecer | {manque à Paul} |
| {dépendre} | {de} | depender de | {dépendre de toi} |
| {avoir besoin} | {de} | precisar de | {avoir besoin d’aide} |
| {jouir} | {de} |ibrate gozar de | {jouir de la paix} |

Repare em {croire}: {croire en Dieu} é fé, {croire que} é opinião, e {croire quelqu’un} (sem preposição) é acreditar na pessoa. São três construções distintas com o mesmo verbo.

## Verbos descalarcomplemento nominal

Muitos verbos que em português levam o objeto direto, em francês levam um complemento com {de} ou {à}. É a inversão mais comum do capítulo, e ela é sistemática:

- {jouir **de**} la paix — gozar **de** a paz (pt: gozar a paz)
- {profiter **de**} la nuit — aproveitar **a** noite (pt: aproveitar a noite)
- {se rendre compte **de**} l{"o que} s’est passé — perceber **o que** aconteceu
- {douter **de**} la promesse — duvidar **da** promessa
- {renoncer **à**} l{"o} monde — renunciar **ao** mundo
- {asleep assistant myth} |

O padrão é claro: quando o verbo “possui” o complemento em português, o francês introduz uma preposição de posse ({de}) ou de finalidade ({à}). É a marca do que chamamos de regência, e ela precisa ser memorizada verbo a verbo.

## {chez} e o lugar de uma pessoa

{chez} é a preposição das pessoas e de seus espaços. {chez moi}, {chez Pierre}, {chez le médecin}, {chez nous}. E por extensão, do ambiente social: {chez les Juifs} «entre os judeus», {chez les paiens} «no mundo pagão», {l usage est courant chez les Français} «o costume é corrente entre os franceses».

É por isso que, quando o nome é de pessoa, o {à} desaparece: {chez Pierre} e não {à Pierre} para «na casa do Pierre». Em registro formal o {chez} também some: {chez le docteur} → {Dr Leblanc}.

## Aplicação: o texto bíblico

O texto em Segond é um MANUAL de verbos com preposição, porque o grego original já era:

- {Je crois en mon Fils} (João 6:36) — {croire en}, a fé
- {Je parle à mes disciples} — {parler à}, o interlocutor
- {Il ne faut pas juger sur les apparences} — {juger sur}, o critério
- {Il alla trouver Philippe}, em que {aller} pede {trouver} sem preposição: {aller **trouver**}, e não {aller à villes}.
- {Je ne suis pas venu pour être servi} — {venir pour}, finalidade

E há um caso raro que vale guardar: {Il suffit de} «basta». Em latim, {sufficit}-governava o infinitivo; o francês herdou a construção e nada mais.`),
  vocab: [
    V('penser à', 'penser', 'pensar em (ideia, pessoa)'),
    V('penser de', 'penser', 'opinar sobre (pedido de opinião)'),
    V('croire en', 'croire', 'crer em (fé, confiança)'),
    V('croire que', 'croire', 'crer que (opinião)'),
    V('croire quelqu’un', 'croire', 'acreditar em alguém (sem preposição)'),
    V('parler à', 'parler', 'falar com (interlocutor)'),
    V('parler de', 'parler', 'falar sobre (tema)'),
    V('parler pour', 'parler', 'defender a causa de'),
    V('jouir de', 'jouir', 'desfrutar de'),
    V('douter de', 'douter', 'duvidar de'),
    V('renoncer à', 'renoncer', 'renunciar a'),
    V('se rendre compte de', 'rendre', 'dar-se conta de'),
    V('dépendre de', 'dépendre', 'depender de'),
    V('avoir besoin de', 'avoir', 'precisar de'),
    V('manquer à', 'manquer', 'faltar a (pessoa)'),
    V('manquer de', 'manquer', 'carecer de (coisa)'),
    V('il suffit de', 'suffire', 'basta (herança do latim)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em «{Que penses-tu de ce film?}», por que o verbo {penser} recebeu {de} e não {à}?'),
    options: [
      T(
        'Porque {penser de} é a construção de opinião: pede-se o que se pensa, não aquilo em que se pensa',
      ),
      T('Porque {de} é sempre a preposição de opinião no francês'),
      T('Porque a pergunta com {?} exige {de} e a afirmação exige {à}'),
      T('Porque {penser de} é um erro de fala comum que o padrão corrige'),
    ],
    answer: 0,
    hint: T('Regra §1: {penser à} = pensar **em** algo; {penser de} = **opinar sobre** algo.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: «Je ___ mon Fils» (João 6:36 — crer em alguém com fé)'),
      answer: 'crois en',
      hint: T('É o verbo {croire} com {en}; o mesmo verbo com {que} significa outra coisa.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo à sua preposição obrigatória'),
      pairs: [
        { a: T('jouir'), b: T('{jouir de}') },
        { a: T('douter'), b: T('{douter de}') },
        { a: T('dépendre'), b: T('{dépendre de}') },
        { a: T('renoncer'), b: T('{renoncer à}') },
        { a: T('profiter'), b: T('{profiter de}') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta segundo a regência do verbo?'),
      options: [
        T('{Elle a profité de la nuit}'),
        T('{Elle a profité la nuit}'),
        T('{Elle a profité à la nuit}'),
        T('{Elle a profité pour la nuit}'),
      ],
      answer: 0,
      hint: T(
        'Regra §3: {profiter} rege {de}. {Jouir la paix} e {profiter la nuit} são erros de regência.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A preposição pertence ao verbo e não pode ser trocada: {penser **à**} = pensar em, {penser **de**} = opinar sobre, {croire **en**} = crer em, {croire **que**} = crer que.',
      ),
    },
    {
      n: '2',
      text: T(
        'Muitos verbos que levam objeto direto em português levam complemento com {de} ou {à} em francês: {jouir de}, {profiter de}, {douter de}, {renoncer à}, {jouer à}. Chama-se regência e precisa ser memorizada verbo a verbo.',
      ),
    },
    {
      n: '3',
      text: T(
        'Quando o nome é de uma pessoa, o lugar usa {chez} e não {à}: {chez Pierre}, {chez le médecin}, {chez nous}. Por extensão {chez} indica ambiente social: {chez les Juifs}, {chez les Français}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Alguns verbos não levam preposição nenhuma e a construção vem inteira: {aller **trouver** Philippe}, {venir **voir**}, {entendre **parler**}. Não escreva {aller à trouver}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Fique de olho nos verbos com dois sentidos: {manquer à} é faltar a alguém, {manquer de} é carecer de algo. {La vie manque de sens} «a vida carece de sentido» usa {de}, não {à}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que o latim criou a regência'),
      text: T(
        'Metade das regências do français vem de construções latinas em que um verbo regia um caso, e o caso sobreviveu como preposição. {douter} rege {de}, como o latim {dubitare} regeva o ablativo: *dubitare + abl*. {jouir de} vem de *frui + ablativo*. O português, que também vem do latim, perdeu essas marcas: hoje diz {duvidar de} e {gozar de} por sorte, e o obligation de {de} quase sumiu em {gozar a}. O francês guardou o caso morto na preposição viva, e é por isso que a regência parece arbitrária: ela é um fóssil de sintaxe.',
      ),
    },
    {
      label: T('A leitura bíblica ensina a regência'),
      text: T(
        'O Novo Testamento French é o melhor manual de verbos com preposição que existe, porque foi traduzido do grego e cada verbo conserva a preposição que o grego trazia. {Je crois en mon Fils} é {πιστεύω εἰς}, a preposição grega {εἰς} (para dentro) traduzida por {en}, porque {croire en} é entrar em relação de fé. {Je parle à mes disciples} é {λαλῶ πρὸς}, e {πρὸς} significa «em direção a». Se você aprender a regência francesa pelo Novo Testamento, vai estar aprendendo, ao mesmo tempo, a regência grega — e isso não é coincidência: é a mesma raiz.',
      ),
    },
  ],
  examples: [
    { text: 'Je pense à mon ami.', gloss: T('penso no meu amigo ({penser à} = pensar em)') },
    { text: 'Que penses-tu de ce film ?', gloss: T('o que você acha deste filme? (opinião)') },
    { text: 'Je crois en Dieu.', gloss: T('creio em Deus (fé)') },
    { text: 'Je crois qu’il dit vrai.', gloss: T('creio que ele diz a verdade (opinião)') },
    {
      text: 'Parlez pour qu’ils comprennent.',
      gloss: T('falem para que entendam ({parler pour} + finalidade)'),
    },
    {
      text: 'Il alla trouver Philippe.',
      gloss: T('foi encontrar Felipe ({aller} sem preposição)'),
    },
    { text: 'Elle a profité de la nuit.', gloss: T('aproveitou a noite ({profiter de})') },
    {
      text: 'Se rendre compte de la vérité.',
      gloss: T('dar-se conta da verdade (regência de {de})'),
    },
    { text: 'La vie manque de sens.', gloss: T('a vida carece de sentido ({manquer de})') },
    {
      text: 'L’usage est courant chez les Français.',
      gloss: T('o costume é corrente entre os franceses ({chez} = ambiente)'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — verbos com preposição alternativa'),
      head: [T('Verbo'), T('Preposição A'), T('Preposição B'), T('Diferença de sentido')],
      rows: [
        [
          'penser',
          'à — pensar em',
          'de — opinar sobre',
          'objeto de pensamento / pedido de opinião',
        ],
        ['croire', 'en — crer em', 'que — crer que', 'fé / opinião'],
        ['parler', 'à — falar com', 'de — falar sobre', 'interlocutor / tema'],
        ['manquer', 'à — faltar a', 'de — carecer de', 'pessoa / coisa'],
        ['venir', 'à — vir a', 'de — vir de', 'destino / origem'],
      ],
    },
    {
      caption: T('Tabela 2 — regência: verbo e complemento'),
      head: [T('Verbo'), T('Português'), T('Francês'), T('Exemplo')],
      rows: [
        ['jouir', 'gozar a', 'jouir de', 'jouir de la paix'],
        ['profiter', 'aproveitar a', 'profiter de', 'profiter de la nuit'],
        ['douter', 'duvidar de', 'douter de', 'douter de la promesse'],
        ['renoncer', 'renunciar a', 'renoncer à', 'renoncer au monde'],
        [
          'se rendre compte',
          'dar-se conta de',
          'se rendre compte de',
          'se rendre compte de la vérité',
        ],
        ['dépendre', 'depender de', 'dépendre de', 'dépendre de Dieu'],
        ['jouer', 'jogar', 'jouer à', 'jouer aux cartes'],
        ['manquer', 'faltar', 'manquer à / de', 'manque à Paul / manque de sens'],
      ],
    },
  ],
};
