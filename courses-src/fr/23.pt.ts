import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('As preposições'),
  subtitle: T('{à, de, en, par, pour, dans, sur, chez} — destino, origem, meio, propósito'),
  section: T('As preposições'),
  body: C(`## O que uma preposição faz

Uma preposição francesa liga um nome a um verbo, a outro nome ou a um infinitivo, e o sentido vem do verbo, não da preposição. {Jean habite {à} Paris} e {Jean pense {à} Paris} usam a mesma preposição e dizem coisas diferentes: no primeiro, {à} é lugar; no segundo, {à} é o alvo do pensamento.

As preposições mais produtivas do dia a dia são seis, e elas se distribuem em duas colunas:

| Preposição | Valor principal | Exemplo | Glosa |
|---|---|---|---|
| {à} | destino, lugar, direção | {Je vais {à} Lyon} | vou para Lyon |
| {de} | origem, posse, material | {Il vient {de} Rome} | ele vem de Roma |
| {en} | lugar, tempo, meio | {Elle est {en} Italie} | ela está na Itália |
| {par} | agente, meio, caminho | {Par la foi} | pela fé |
| {pour} | finalidade, duração, opinião | {Pour toi} | para ti |
| {avec} | companhia, instrumento | {Avec Dieu} | com Deus |

O truque para não confundir {par} e {pour} é traduzir pela **intenção**: {par la foi} significa «pela fé», isto é, o meio; {pour la foi} significa «pela fé», isto é, o motivo. Um uso é religioso e o outro não.

## As contrações: {au, aux, du, des}

O que faz a preposição francesa ser especial não é o sentido: é a **fusão**. {à} + {le} dá {au}; {à} + {les} dá {aux}; {de} + {le} dá {du}; {de} + {les} dá {des}. São as mesmas preposições, apenas fundidas ao artigo, e o significado não muda em nada.

| Contrato | Forma longa | Exemplo | Glosa |
|---|---|---|---|
| {au} | {à + le} | {au marché} | no mercado |
| {aux} | {à + les} | {aux portes} | às portas |
| {du} | {de + le} | {du ciel} | do céu |
| {des} | {de + les} | {des enfants} | das crianças |

E há uma regra de som que explica quase tudo: contrai-se **apenas** quando o artigo é {le} ou {les}. Com {la} e {l’}, não há fusão: {à la} ({à la maison}), {de la} ({de la famille}), {à l’} ({à l’église}). Com {lui} e {elles} também não: {de lui}, {à elles}.

## Tempo com {à, en, dans, depuis}

O tempo é o campo onde o francês mais engana quem vem do português, porque o português usa a mesma preposição para coisas distintas.

- **{en} + expressão**: {en 1810}, {en été}, {en France}, {en deux minutes}. É a preposição de tempo **dentro** de um período ou de um limite.
- **{à} + expressão**: {à midi}, {à minuit}, {à six heures}, {à Noël}, {à la Pentecôte}. Marca um **instante**, um ponto exato.
- **{dans} + expressão**: {dans une heure}, {dans deux jours}. Marca um **futuro** relativo: daqui a.
- **{depuis} + expressão**: {depuis deux ans}, {depuis ce matin}. Marca **origem temporal**, um ponto de partida que continua valendo.

Resumo em uma linha: {en} = dentro, {à} = no ponto, {dans} = daqui a, {depuis} = desde.

## Lugar com {dans, sur, sous, chez, devant}

O lugar é o segundo grande campo:

- {dans} — interior: {dans la maison}, {dans la forêt}, {dans la boîte}
- {sur} — superfície, apoio: {sur la table}, {sur le mur}, {sur l’eau}
- {sous} — abaixo, coberto: {sous l’arbre}, {sous la terre}, {sous la main}
- {chez} — o lugar de uma pessoa, por extensão o ambiente: {chez moi}, {chez le médecin}, {chez les Juifs}
- {devant} / {derrière} — frente e fundo: {devant la maison}, {derrière l’église}

Um teste rápido: se o nome é de uma pessoa, use {chez}. Não {à Pierre} para «na casa do Pierre», e sim {chez Pierre}. Em contextos formais, {chez} pode ser omitido: {chez le doctor} → {chez le docteur} → {Dr Leblanc}.

## Aplicação: o texto bíblico

O texto de Lucas é todo feito de preposições, e cada uma delas é uma informação. {Au commencement était la Parole} «No princípio era a Palavra» (João 1:1): {au} = {à + le}, lugar abstrato. {La Parole était auprès de Dieu} «a Palavra estava com Deus» (1:1): {auprès de} = «ao lado de». {En ce temps-là, Jésus sortit} «Naquele tempo, Jesus saiu» (Lucas 2:1): {en} = tempo. {Il alla à la maison de Dieu} «foi à casa de Deus» (Lucas 2:49): {à} + {de}, destino com posse.

E o texto repete o par que mais importa: {Pour vous et pour beaucoup} «por vós e por muitos» (Mateus 26:13) — {pour} como finalidade, não como meio. Uma tradução descuidada apaga essa distinção — e é a mesma distinção que separa {par la foi} de {pour la foi}.`),
  vocab: [
    V('à Paris', 'à', 'em Paris (lugar)'),
    V('à la maison', 'à', 'para casa (destino; {la} não contrai)'),
    V('de France', 'de', 'da França (origem, posse)'),
    V('au marché', 'à', 'no mercado ({à + le})'),
    V('du ciel', 'de', 'do céu ({de + le})'),
    V('aux portes', 'à', 'às portas ({à + les})'),
    V('des enfants', 'de', 'das crianças ({de + les})'),
    V('en 1810', 'en', 'em 1810 (tempo dentro)'),
    V('à midi', 'à', 'ao meio-dia (instante)'),
    V('dans une heure', 'dans', 'daqui a uma hora (futuro relativo)'),
    V('depuis ce matin', 'depuis', 'desde esta manhã (origem temporal)'),
    V('par la foi', 'par', 'pela fé (meio, caminho)'),
    V('pour la foi', 'pour', 'pela fé (motivo, finalidade)'),
    V('chez moi', 'chez', 'na minha casa'),
    V('sous l’arbre', 'sous', 'sob a árvore (cobertura)'),
    V('auprès de Dieu', 'auprès', 'perto de Deus, com Deus'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em «{Je vais à Lyon}» e «{Je pense à Lyon}», o que muda?'),
    options: [
      T(
        'Nada na preposição: muda o verbo que a governa — {aller} dá destino, {penser} dá direção do pensamento',
      ),
      T('A preposição vira {en}, que é a forma de lugar neutro'),
      T('A segunda frase exige um artigo: {à le Lyon}'),
      T('A segunda frase é incorreta, porque {penser} não admite preposição'),
    ],
    answer: 0,
    hint: T('Em francês o sentido da preposição vem do verbo que a precede, não dela mesma.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Contraia: {à + le marché} →'),
      answer: 'au',
      hint: T('O artigo {le} funde-se com {à}; com {la} não há fusão.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a preposição ao seu valor'),
      pairs: [
        { a: T('à'), b: T('destino, ponto exato: {à six heures}') },
        { a: T('en'), b: T('dentro de um período: {en 1810}') },
        { a: T('dans'), b: T('futuro relativo: {dans deux jours}') },
        { a: T('depuis'), b: T('origem temporal: {depuis ce matin}') },
        { a: T('chez'), b: T('lugar de uma pessoa: {chez le médecin}') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase usa {pour} com sentido de finalidade, e não de meio?'),
      options: [
        T('{Tout est fait pour la gloire de Dieu}'),
        T('{Il a été sauvé par la foi}'),
        T('{Par la foi, les justes vivront}'),
        T('{Il est entré par la porte}'),
      ],
      answer: 0,
      hint: T(
        'Regra §1: {pour} aponta para um fim, {par} para um meio. {par la foi} usa {par} justamente por causa disso.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{par} introduz **meio, agente ou caminho**; {pour} introduz **finalidade, duração ou opinião**. {Par la foi} = «pela fé» (meio), {pour la foi} = «por causa da fé» (motivo). Trocá-los troca o sentido teológico.',
      ),
    },
    {
      n: '2',
      text: T(
        'Há contração apenas com {le} e {les}: {à le} = {au}, {à les} = {aux}, {de le} = {du}, {de les} = {des}. Com {la}, {l’}, {lui} e {elles} não há fusão.',
      ),
    },
    {
      n: '3',
      text: T(
        'No tempo, cada preposição marca um valor: {en} = dentro de um período, {à} = num instante, {dans} = num futuro relativo, {depuis} = a partir de um ponto. O português tem menos preposições para o mesmo trabalho.',
      ),
    },
    {
      n: '4',
      text: T(
        'No lugar, {dans} é interior, {sur} é superfície, {sous} é abaixo ou coberto, e {chez} é o lugar de uma pessoa. O teste do {chez}: se o nome é de pessoa, use {chez}, nunca {à}.',
      ),
    },
    {
      n: '5',
      text: T(
        'O sentido da preposição vem do verbo que a rege, não dela mesma: {Je vais à ville} (destino), {Je pense à la ville} (direção do pensamento), {Je viens de la ville} (origem). Três verbos, três valores, uma só preposição cada.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que o latim sumiu e o grego também'),
      text: T(
        'O latim tinha um sistema rico de casos que já codificava origem, destino, instrumento e tempo na própria terminação do substantivo. O grego tinha quatro casos. O francês, que é o herdeiro mais fiel dessa lógica, optou por apagar os casos e pôr a informação dentro de preposições — e aí está o salto: {de} e {à} viraram as duas preposições mais fortes, com dezenas de valores cada. É por isso que a mesma palavra latim {sub} aparece ora como {sur}, ora como {sous}: o caso latim dizia isso, e o francês precisa perguntar qual dos dois.',
      ),
    },
    {
      label: T('O texto bíblico é um mapa de preposições'),
      text: T(
        'Quem aprende a ler João 1 e Lucas 2 aprende, sem perceber, a usar metade das preposições do francês. {Au commencement} é {à + le} aplicado ao tempo abstrato. {Auprès de Dieu} é uma palavra composta, e significa «junto de». {En ce temps-là} é {en} aplicado a um momento. E {Il alla à la maison de Dieu} empilha três informações num verbo: {à} (destino), {la maison} (o nome), {de Dieu} (de quem é a casa). A preposição francesa é tão informativa quanto a terminação do caso latim — quem sabe latin vai ler o Novo Testamento em francês quase sem esforço.',
      ),
    },
  ],
  examples: [
    { text: 'Je vais à Lyon.', gloss: T('vou para Lyon ({à} = destino)') },
    { text: 'Il vient de Rome.', gloss: T('ele vem de Roma ({de} = origem)') },
    { text: 'au marché', gloss: T('no mercado ({à + le} fundido)') },
    { text: 'aux portes de la ville', gloss: T('às portas da cidade ({à + les})') },
    { text: 'du ciel', gloss: T('do céu ({de + le})') },
    { text: 'en 1810', gloss: T('em 1810 (dentro de um período)') },
    { text: 'à la Pentecôte', gloss: T('na Pentecostes ({à} = instante; {la} não contrai)') },
    { text: 'dans deux jours', gloss: T('daqui a dois dias (futuro relativo)') },
    { text: 'depuis ce matin', gloss: T('desde esta manhã (origem temporal)') },
    { text: 'chez le médecin', gloss: T('no médico ({chez} = lugar de pessoa)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — as contrações do artigo'),
      head: [T('Preposição'), T('+ {le}'), T('+ {les}'), T('+ {la} / {l’}')],
      rows: [
        ['à', 'au', 'aux', 'à la / à l’'],
        ['de', 'du', 'des', 'de la / de l’'],
        ['pour', 'pour le', 'pour les', 'pour la / pour l’'],
        ['sans', 'sans le', 'sans les', 'sans la / sans l’'],
        ['avec', 'avec le', 'avec les', 'avec la / avec l’'],
      ],
    },
    {
      caption: T('Tabela 2 — tempo e lugar'),
      head: [T('Valor'), T('Preposição'), T('Exemplo'), T('Glosa')],
      rows: [
        [T('tempo dentro de'), 'en', T('{en 1810}'), T('em 1810')],
        [T('instante'), 'à', T('{à minuit}'), T('à meia-noite')],
        [T('futuro relativo'), 'dans', T('{dans deux jours}'), T('daqui a dois dias')],
        [T('origem temporal'), 'depuis', T('{depuis ce matin}'), T('desde esta manhã')],
        [T('interior'), 'dans', T('{dans la forêt}'), T('na floresta')],
        [T('superfície'), 'sur', T('{sur la table}'), T('sobre a mesa')],
        [T('lugar de pessoa'), 'chez', T('{chez le médecin}'), T('no médico')],
      ],
    },
  ],
};
