import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('Capstone: 1 Coríntios 13 na Vulgata'),
  subtitle: T('O período mais complexo do latim — lido verso a verso'),
  section: T('Leitura'),
  body: C(`## {Si linguis hominum loquar et angelorum}

O **condicional usa o subjuntivo**: {Si} + {loquar} (subjuntivo presente) abre a subordinada; o verbo principal {factus sum} está no perfeito indicativo, e o período inteiro é contrário ao fato. A subordinada é **comparativa**, não apenas temporal: {factus sum} «tornei-me» apresenta o resultado.

**{linguis hominum}**: {linguis} é **dativo plural**, regido por {loquar} — o dativo daquilo em que se fala, «nas línguas dos homens».

**{et angelorum}**: o substantivo é omitido, como o grego faz com frequência, e {angelorum} está em genitivo plural, dependente de {linguis}: «e dos anjos».

**{caritatem autem non habeam}**: {autem} marca contraste, «mas»; {caritatem} é acusativo, objeto de {habeam} (subjuntivo perfeito de {habeō}).

**{factus sum velut aes sonans}**: {factus sum} é o **perífrasto passivo** de {faciō} com sentido ativo, «tornei-me»; {velut} introduz a comparação e {aes} (nominativo plural de {aes, aeris}) é o sujeito de {sonans}, particípio presente com {-ns} final. A imagem é um sino que toca sem ninguém ouvindo.

## {Caritas patiens est, benigna est}

Dois perífrastos passivos seguidos: {patiens} (de {patior}, «sofro») e {benigna} (adjetivo da 1ª declinação) são ambos nominativo feminino singular, e descrevem {caritas}.

A série que vem é um desfile de negações: {non aemulatur} «não é invejoso» ({aemulor}, depoente), {non agit perperam} «não faz o mal» ({perperam}, advérbio, «mal»), {non inflatur} «não se ensoberbece» ({inflō}, transitivo, «inflar»). O latim marca a negação uma vez só, com {non}, e deixa o sentido carregar o resto.

## {Nunc autem manent fidēs, spēs, caritās}

**{manent}** é presente do indicativo, 3ª pessoa do plural, «permanecem» — formalmente idêntico ao imperfeito, e só o contexto os separa.

**{trīa haec}**: {trīa} é o nominativo neutro plural do numeral {trīs} e, como {haec} é um demonstrativo neutro plural, concorda: «estas três coisas». O grego faz exatamente o mesmo em τρία ταῦτα.

**{maior autem horum est caritās}**: {maior} é o comparativo de {magnus}, usado **sem {quam}** — é a comparação padrão do latim. {horum} está em genitivo plural, «destas», e {caritās} fecha o período como sujeito.

## O que levar

Você leu um período inteiro: condicional, AcI, comparação, depoente, ablativo absoluto implícito e numeral. Toda construção já apareceu em capítulos anteriores; juntas mostram por que o latim se lê **de trás para frente**, identificando primeiro a oração principal e só depois seus membros.`),
  vocab: [
    V('loquar', 'loquor', 'eu fale (subj. pres. 1.ª sg.)'),
    V('habeam', 'habeo', 'que eu tenha (subj. perf. 1.ª sg.)'),
    V('caritas', 'caritas', 'o amor (1.ª decl.)'),
    V('autem', 'autem', 'porém, mas (conectivo)'),
    V('aes', 'aes', 'bronze, metal (nom. pl.)'),
    V('sonans', 'sono', 'que soa (part. pres.)'),
    V('factus', 'facio', 'tornado, feito (part. perf.)'),
    V('velut', 'velut', 'como, qual como (conector)'),
    V('patiens', 'patior', 'que sofre (part. pres.)'),
    V('benignus', 'benignus', 'benevolente, bondoso'),
    V('aemulor', 'aemulor', 'invejar (deponente)'),
    V('perperam', 'perperam', 'mal, de modo errado (adv.)'),
    V('maneo', 'maneo', 'permanecer, ficar'),
    V('trīs', 'tres', 'três (numerais)'),
    V('maior', 'magnus', 'maior (comparativo)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Si linguis hominum loquar}, qual é o modo do verbo da oração subordinada?'),
    options: [
      T('Subjuntivo presente, próprio dos condicionais'),
      T('Indicativo perfeito, por causa de {factus sum}'),
      T('Infinitivo, por causa de {Si}'),
      T('Futuro, porque fala do amor'),
    ],
    answer: 0,
    hint: T('Regra §1: {Si} com ideia de condição leva Subjuntivo.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete: {Caritas non aemulatur} — o verbo {aemulor} é depoente, então a forma é ___',
      ),
      answer: 'aemulatur',
      hint: T('Mesma forma na voz ativa e passiva; o sentido é ativo.'),
    },
    {
      kind: 'choose',
      prompt: T('Em {maior autem horum est caritas}, como se traduz o comparativo?'),
      options: [
        T('Sem {quam}: «o amor é maior»'),
        T('Com {quam} obrigatório: «maior quam caritas»'),
        T('Como superlativo: «o maior dos amores»'),
        T('Como verbo: «ama mais»'),
      ],
      answer: 0,
      hint: T('Regra §4: o comparativo latino dispensa {quam}.'),
    },
    {
      kind: 'fill',
      prompt: T('Qual é o caso de {linguis} em {Si linguis hominum loquar}?'),
      answer: 'dative plural',
      hint: T('É o dativo de aquilo em que se fala, regido por {loquar}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a construção à função'),
      pairs: [
        { a: T('factus sum'), b: T('passivo perifrástico de sentido ativo') },
        { a: T('aemulatur'), b: T('verbo deponente') },
        { a: T('patiens est'), b: T('particípio presente com valor de adjetivo') },
        { a: T('trīa haec'), b: T('numeral neutro + demonstrativo, concordantes') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Si} com sentido condicional leva Subjuntivo; a principal fica no Indicativo ({si ... velim, erro} «se eu quiser, vou errar»).',
      ),
    },
    {
      n: '2',
      text: T(
        'O dativo de conteúdo: {loquor} + Dativo diz **em que** se fala: {linguis hominum loquar} «falar nas línguas dos homens».',
      ),
    },
    {
      n: '3',
      text: T(
        'Verbos depoentes têm forma passiva e sentido ativo: {aemulatur} «inveja», {patitur} «sofre», {loquitur} «fala».',
      ),
    },
    {
      n: '4',
      text: T(
        'O comparativo latino dispensa {quam}: {maior} «maior», {maior quam} só quando se quer ênfase arcaica.',
      ),
    },
    {
      n: '5',
      text: T(
        'Um substantivo no Genitivo plural pode ser omitido quando o adjunto é o único substantivo da frase: {et angelorum} «e dos anjos».',
      ),
    },
  ],
  notes: [
    {
      label: T('Ler o latim de trás para a frente'),
      text: T(
        'A primeira tarefa num período latino não é traduzir palavra por palavra: é achar a **construção principal**. Em 1Cor 13,1 ela é {factus sum velut aes sonans}. Localizada a principal, o resto cai em ordem: primeiro a condicional, depois o AcI, e os ablativos por último. Traduzir na ordem do latim produz uma frase incompreensível.',
      ),
    },
    {
      label: T('O fim do capítulo'),
      text: T(
        'A Vulgata diz {tria haec: maior autem horum est caritās}, com {horum} como Genitivo partitivo — «destas três, a maior é o amor». As traduções modernas usam a leitura grega, com {ex ipsis} «de entre elas», mas a diferença é pequena: o que muda a leitura é o superlativo, não o genitivo.',
      ),
    },
  ],
  examples: [
    { text: 'Si linguis hominum loquar', gloss: T('se eu falar nas línguas dos homens') },
    { text: 'caritatem autem non habeam', gloss: T('mas não tiver o amor') },
    { text: 'factus sum velut aes sonans', gloss: T('tornei-me como um bronze que soa') },
    { text: 'caritas patiens est', gloss: T('o amor é paciente (passivo perifrástico)') },
    { text: 'non agit perperam', gloss: T('não faz o mal') },
    { text: 'non inflatur', gloss: T('não se ensoberbece (passivo verbal)') },
    { text: 'trīa haec', gloss: T('estas três coisas') },
    { text: 'maior horum est caritas', gloss: T('a maior delas é o amor') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — O período de 1Cor 13,1'),
      head: [T('Palavra'), T('Análise'), T('Português')],
      rows: [
        ['{Si}', 'conector de condição', 'se'],
        ['{loquar}', 'subj. presente 1.ª sg.', 'eu fale'],
        ['{linguis}', 'dativo plural', 'nas línguas'],
        ['{angelorum}', 'genitivo plural', 'dos anjos'],
        ['{habeam}', 'subj. perfeito 1.ª sg.', 'eu tenha'],
        ['{factus sum}', 'passivo perifrástico', 'me tornei'],
        ['{aes sonans}', 'comparação com {velut}', 'bronze que soa'],
      ],
    },
    {
      caption: T('Tabela 2 — Verbos de 1Cor 13,4-7'),
      head: [T('Latim'), T('Categoria'), T('Português')],
      rows: [
        ['{patiens est}', 'passivo perifrástico', 'sofre'],
        ['{aemulatur}', 'deponente, 3.ª sg.', 'inveja'],
        ['{agit perperam}', 'ativo, {perperam} adverbial', 'faz mal'],
        ['{inflatur}', 'passivo de {inflō}', 'é inflado'],
        ['{manent}', 'indicativo presente 3.ª pl.', 'permanecem'],
      ],
    },
  ],
};
