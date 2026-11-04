import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('O advérbio: não flexiona'),
  subtitle: T('{bene} é o mesmo na primeira e na décima pessoa — a palavra mais estável do latim'),
  section: T('Advérbio'),
  body: C(`## Uma palavra sem caso

O advérbio latino é a única parte da proposição que não flexiona. {bene} é o mesmo em {ego bene cantō}, em {cantās bene} e em {cantāmus bene}: não tem gênero, não tem número, não tem pessoa. O substantivo mudaria de caso em cada uma dessas três frases e o verbo mudaria de pessoa; o advérbio atravessa as três sem trocar uma letra.

Quem vem do português sente falta de alguma coisa. Um único {bene} vale para {puella bene canit} e para {puellae bene canunt}, e essa economia é o que permite escrever a Vulgata com duas palavras onde o português escreve quatro. Um advérbio latino pode ainda modificar a proposição inteira em vez de uma palavra: em {bene omnia fecit}, o {bene} não se gruda a nenhum verbo isolado, ele qualifica o que foi feito.

## Três maneiras de formar

A regra prática é uma só, com duas exceções. O adjetivo de primeira e segunda declinação vira advérbio trocando a desinência por {ē}: {doctus} dá {doctē}, {pulcher} dá {pulchrē}, {firmus} dá {firmē}, {miser} dá {misē}. O adjetivo de terceira declinação usa {iter}: {celer} dá {celeriter}, {fortis} dá {fortiter}, {fidēlis} dá {fidēliter}. E o par mais frequente do latim é o único que não segue nenhum dos dois: {bonus} dá {bene} e {malus} dá {male}.

| Adjetivo | Advérbio | Glosa |
|---|---|---|
| {doctus} | {doctē} | sabiamente |
| {pulcher} | {pulchrē} | belamente |
| {firmus} | {firmē} | com firmeza |
| {miser} | {misē} | miseramente |
| {bonus} | {bene} | bem |
| {malus} | {male} | mal |
| {celer} | {celeriter} | depressa |
| {fortis} | {fortiter} | com força |

O comparativo e o superlativo são regulares e entram na mesma conta: {fortiter}, {fortius}, {fortissimē}. O latim faz isso sem nenhum marcador, ao contrário do português, que precisa de "mais" e de "o mais".

| Base | Comparativo | Superlativo |
|---|---|---|
| {bene} | {melius} | {optime} |
| {male} | {peius} | {pessime} |
| {fortiter} | {fortius} | {fortissimē} |
| {facile} | {facilius} | {facillimē} |
| {amplē} | {amplius} | {amplissimē} |
| {graviter} | {gravius} | {gravissimē} |

Repare no par {facilius} e {facillimē}: o superlativo latino tem {illim}, e em {facillimē} e {difficillimē} esse {il} aparece junto do comparativo em {ius}. Quem traduz literalmente escreve "mais facil" e "o mais facilíssimo", e erra nas duas.

## Onde o advérbio fica

A posição do advérbio é a única coisa do latim que o aluno costuma tratar como livre e não é. O advérbio de modo costuma vir colado ao verbo que qualifica, {cantāre pulchrē}, ou logo antes dele, {pulchrē cantāre}. O advérbio de quantidade costuma vir depois do verbo. E a negação {nōn} fica imediatamente antes da palavra que nega: {nōn bene} é "não bem", {bene nōn} não é uso corrente.

Os advérbios se classificam pela pergunta a que respondem, e a pergunta é a melhor forma de saber que palavra você encontrou:

| Classe | Pergunta | Advérbios |
|---|---|---|
| de modo | como? | {ita}, {sīc}, {aliter}, {fere} |
| de quantidade | quanto? | {satis}, {nimis}, {valde}, {parum}, {tantum} |
| de lugar | onde? | {hic}, {ibi}, {istinc}, {illinc} |
| de tempo | quando? | {hodie}, {herī}, {cras}, {iam}, {mox}, {tunc}, {semper} |
| de negação | não? | {nōn}, {haud}, {nē} |
| de número | quantas vezes? | {semel}, {bis}, {ter} |

{satis bene} significa "bem mais ou menos", e {nimis} significa "demais": os dois medem, não qualificam. Um advérbio de quantidade é a forma mais comum de o latim dizer "um pouco", e o português quase sempre precisa de um adjetivo para isso.

## Semper gaudete

Em 1 Tessalonicenses 5:16-18 a Vulgata dá três instruções em três versículos, e cada uma se sustenta num advérbio: {semper gaudete}, {sine intermissione orate}, {in omnibus gratias agite}. São três advérbios em três frases, e as três frases são simples.

{semper} não flexiona: "sempre", com todo o peso de um advérbio e nenhuma marca de pessoa. {sine intermissione} mostra o outro caminho, o que o latim prefere quando o advérbio não existe: um substantivo no ablativo depois de {sine}, {cum}, {contra}, {propter}. {in omnibus} responde onde, em todas as coisas.

O verbo de cada versículo está no imperativo, e a negação de um imperativo já é um advérbio por si só: {nōn timete} é literalmente "não temais", com o {timete} na segunda pessoa e o {nōn} parado à frente dele.`),
  vocab: [
    V('bene', 'bene', 'bem (adv. invar., de {bonus})'),
    V('male', 'male', 'mal (adv. invar., de {malus})'),
    V('doctē', 'doctē', 'sabiamente (adv. de {doctus}, 2.ª decl.)'),
    V('pulchrē', 'pulchrē', 'belamente (adv. de {pulcher})'),
    V('celeriter', 'celeriter', 'depressa (adv. em {iter}, de {celer})'),
    V('fortiter', 'fortiter', 'com força (adv. de {fortis})'),
    V('satis', 'satis', 'o bastante (adv. de quantidade)'),
    V('nimis', 'nimis', 'demais (adv. de quantidade)'),
    V('valde', 'valde', 'muito (adv. de quantidade)'),
    V('parum', 'parum', 'pouco (adv. de quantidade)'),
    V('semper', 'semper', 'sempre (adv. de tempo)'),
    V('numquam', 'numquam', 'nunca (adv. de tempo, negação incorporada)'),
    V('hodie', 'hodie', 'hoje (adv. de tempo)'),
    V('cras', 'cras', 'amanhã (adv. de tempo)'),
    V('mox', 'mox', 'logo, em breve (adv. de tempo)'),
    V('statim', 'statim', 'imediatamente (adv. de tempo)'),
    V('ita', 'ita', 'assim (adv. de modo e de consequentio)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {puellae bene canunt}, quantas formas tem o advérbio {bene}?'),
    options: [
      T('Uma só: {bene} não flexiona, enquanto o sujeito e o verbo flexionam'),
      T('Duas: uma para o singular e outra para o plural'),
      T('Três: uma por pessoa do sujeito'),
      T('Quatro: porque {puellae} exige a forma oblíqua do advérbio'),
    ],
    answer: 0,
    hint: T('Regra §1: o advérbio latino não tem caso, número nem pessoa.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual par foge das regras regulares de formação do advérbio?'),
      options: [
        T('{bonus} → {bene} e {malus} → {male}, que são as duas exceções'),
        T('{doctus} → {doctē} e {pulcher} → {pulchrē}, que seguem a regra do {ē}'),
        T('{celer} → {celeriter}, que segue a regra da terceira declinação'),
        T('{fortis} → {fortiter}, que segue a regra do {iter}'),
      ],
      answer: 0,
      hint: T('Regra §2: {ē} para a 1.ª e 2.ª, {iter} para a 3.ª; {bene} e {male} ficam fora.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete o superlativo de {fortiter}: «o mais corajosamente» é ___'),
      answer: 'fortissimē',
      hint: T('O superlativo de advérbio em {iter} ganha {issimē}.'),
    },
    {
      kind: 'fill',
      prompt: T('Em {facilius} e {facillimē}, o que se acrescenta para chegar ao superlativo? ___'),
      answer: 'il',
      hint: T('O superlativo latino tem {illim}: {il} seguido de {lim}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o advérbio à classe que indica'),
      pairs: [
        { a: T('{hodie}'), b: T('tempo') },
        { a: T('{valde}'), b: T('quantidade') },
        { a: T('{ita}'), b: T('modo') },
        { a: T('{mox}'), b: T('tempo: «logo, em breve»') },
      ],
      answer: [0, 1, 2, 3],
      hint: T('Regra §3: a classe do advérbio é a pergunta a que ele responde.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O advérbio latino é invariável: nenhuma pessoa, número ou caso, e por isso uma forma só cobre todo o sujeito.',
      ),
    },
    {
      n: '2',
      text: T(
        'Adjetivos de 1.ª e 2.ª declinação formam advérbio em {ē} ({doctē}, {pulchrē}); os de 3.ª, em {iter} ({celeriter}, {fortiter}). {bene} e {male} são as duas exceções que a Vulgata mais usa.',
      ),
    },
    {
      n: '3',
      text: T(
        'Comparativo e superlativo de advérbio são regulares e sem marcador: {melius}, {optime}, {facillimē}. O português precisa de "mais" e de "o mais"; o latim não.',
      ),
    },
    {
      n: '4',
      text: T(
        'O advérbio responde a uma pergunta de classe: como ({ita}), quanto ({nimis}), onde ({ibi}), quando ({mox}), quantas vezes ({bis}). E {nōn} fica imediatamente antes do que nega.',
      ),
    },
    {
      n: '5',
      text: T(
        'Quando o advérbio não existe como palavra, o latim usa um ablativo: {sine intermissione orate} «sem interrupção orai», o mesmo caminho de {sine mora} e {sine fine}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que a Vulgata tem mais advérbios que o português'),
      text: T(
        'O português herdou do latim a invariabilidade do advérbio, mas multiplicou os sinônimos: "depressa", "com pressa", "à pressa" cobrem {celeriter}. O latim economiza e gasta a economia em advérbios de negação e de grado, que é onde o texto bíblico precisa de ênfase: {nōn}, {quidem}, {nēquīquam}, {frūstrā}. Quem procura, na tradução, a palavra que se repete está quase sempre procurando um advérbio.',
      ),
    },
    {
      label: T('{bene} e {male}, os dois mais frequentes'),
      text: T(
        'Eles vêm de {bonus} e {malus}, mas não pela regra: {benē} e {malē} são as formas normais em Plauto e Cícero, e {bene} e {male} sobreviveram por serem mais curtas e mais fortes. A lição de gramática é que existe um par de advérbios sem regra. A lição de leitura é que o par {male ... bene} forma um quadro de oposição que atravessa a Vulgata inteira.',
      ),
    },
  ],
  examples: [
    { text: 'puella bene canit', gloss: T('a menina canta bem (uma forma só do advérbio)') },
    { text: 'puellae bene canunt', gloss: T('as meninas cantam bem (a mesma forma do advérbio)') },
    { text: 'doctē', gloss: T('sabiamente (de {doctus}, regra do {ē})') },
    { text: 'celeriter', gloss: T('depressa (de {celer}, regra do {iter})') },
    { text: 'fortius', gloss: T('mais corajosamente (comparativo, sem "mais" escrito)') },
    {
      text: 'numquam',
      gloss: T('nunca (advérbio com negação já dentro: {numquam} = {nōn} umquam)'),
    },
    { text: 'facillimē', gloss: T('o mais facilmente (superlativo com {illim})') },
    { text: 'satis bene', gloss: T('bem mais ou menos (quantidade + modo)') },
    { text: 'semper gaudete', gloss: T('regozijai-vos sempre (1 Tess 5:16)') },
    { text: 'nōn timete', gloss: T('não temais (imperativo negativo: {nōn} + {timete})') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Adjetivo e advérbio: duas regras e uma exceção'),
      head: [T('Adjetivo'), T('Advérbio'), T('Regra'), T('Glosa')],
      rows: [
        ['{doctus}', '{doctē}', '1.ª e 2.ª declinação → {ē}', 'sabiamente'],
        ['{pulcher}', '{pulchrē}', '1.ª e 2.ª declinação → {ē}', 'belamente'],
        ['{miser}', '{misē}', '1.ª e 2.ª declinação → {ē}', 'miseramente'],
        ['{celer}', '{celeriter}', '3.ª declinação → {iter}', 'depressa'],
        ['{fortis}', '{fortiter}', '3.ª declinação → {iter}', 'com força'],
        ['{fidēlis}', '{fidēliter}', '3.ª declinação → {iter}', 'com fidelidade'],
        ['{bonus}', '{bene}', 'irregular', 'bem'],
        ['{malus}', '{male}', 'irregular', 'mal'],
      ],
    },
    {
      caption: T('Tabela 2 — Comparativo e superlativo de advérbio'),
      head: [T('Positivo'), T('Comparativo'), T('Superlativo'), T('Português')],
      rows: [
        ['{bene}', '{melius}', '{optime}', 'bem / melhor / o melhor'],
        ['{male}', '{peius}', '{pessime}', 'mal / pior / o pior'],
        ['{fortiter}', '{fortius}', '{fortissimē}', 'com força / mais forte / o mais forte'],
        ['{facile}', '{facilius}', '{facillimē}', 'facilmente / mais fácil / o mais fácil'],
        ['{amplē}', '{amplius}', '{amplissimē}', 'amplamente / mais amplo / o mais amplo'],
        ['{graviter}', '{gravius}', '{gravissimē}', 'pesadamente / mais grave / o mais grave'],
      ],
    },
    {
      caption: T('Tabela 3 — Advérbios por classe, com a pergunta que os define'),
      head: [T('Classe'), T('Pergunta'), T('Formas da Vulgata')],
      rows: [
        [T('modo'), T('como?'), T('{ita}, {sīc}, {aliter}, {fere}')],
        [T('quantidade'), T('quanto?'), T('{satis}, {nimis}, {valde}, {parum}, {tantum}')],
        [T('lugar'), T('onde?'), T('{hic}, {ibi}, {istinc}, {illinc}')],
        [T('tempo'), T('quando?'), T('{hodie}, {herī}, {cras}, {iam}, {mox}, {tunc}, {semper}')],
        [T('negação'), T('não?'), T('{nōn}, {haud}, {nē}')],
        [T('número'), T('quantas vezes?'), T('{semel}, {bis}, {ter}')],
      ],
    },
  ],
};
