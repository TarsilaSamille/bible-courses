import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('Os advérbios de tempo'),
  subtitle: T('heute, morgen, gestern, bald — quando acontece, e não onde'),
  section: T('Adjetivos e advérbios'),
  body: C(`## Tempo de frase e tempo de calendário

O alemão separa duas perguntas que o português junta. {wann} «quando» pergunta pelo **momento**; um adverbio como {heute} «hoje», {morgen} «amanhã» ou {gestern} «ontem» responde a isso. {seit wann} «desde quando» e {bis wann} «até quando» também. A segunda é {woher} ou {wohin} «de onde / para onde», respondida por {hier}, {dort}, {nach}, {zu} — e essas não são palavras de tempo.

A palavra mais difícil do capítulo é {morgen}: significa **amanhã** quando está sozinha, e **de manhã** quando está acompanhada. {Ich fahre morgen} «Eu vou amanhã.» {Ich stehe morgen früh auf} «Eu levanto amanhã cedo.» O contexto salva, mas em textos formais o alemão prefere {morgen früh} ou {am Morgen}, e o alemão antigo, o de Lutero, usa {morgens} «de manhã».

## Três tempos para uma só ideia

Para cada período, o alemão tem uma palavra curta e uma frase com preposição. O resultado é que a mesma ideia aparece de três maneiras:

- **agora**: {jetzt} «agora» / {heute} «hoje» / {heute Nachmittag} «hoje à tarde»
- **ontem**: {gestern} «ontem» / {gestern Abend} «ontem à noite» / {vor gestern} «ante de ontem»
- **anteontem**: {vorgestern} «anteontem» (uma única palavra: {vor} + {gestern})
- **amanhã**: {morgen} «amanhã» / {morgen Abend} «amanhã à noite» / {übermorgen} «depois de amanhã»

Repare no padrão: {übermorgen} é {über} + {morgen}, {vorgestern} é {vor} + {gestern}. O alemão não marca o tempo no verbo: compõe-o em advérbios e em expressões. O {vor} de {vor gestern} e o {über} de {übermorgen} designam **quantidade de tempo**, não momento.

## {seit}, {bis}, {vor}, {nach}

Quatro preposições de tempo, quatro sentidos, e confundi-las é o erro mais comum:

| Preposição | Pergunta | Exemplo | Glosa |
|---|---|---|---|
| {seit} + dativo | desde quando? | {seit einem Jahr} | há um ano |
| {bis} + dativo | até quando? | {bis morgen} | até amanhã |
| {vor} + dativo / acusativo | quanto tempo antes? | {vor drei Tagen} | há três dias |
| {nach} + dativo | quanto tempo depois? | {nach dem Essen} | depois da refeição |

{seit} responde a {seit wann} e traduz o português «há» seguido de tempo: {Ich bin seit zwei Jahren hier} «Eu estou aqui há dois anos». {vor} também traduz «há», mas apenas com **tempo passado** e **quantificável**: {vor einer Stunde} «há uma hora». Você nunca diz {seit einer Stunde} para uma hora que já passou; isso significaria «desde [uma hora atrás]», o que é diferente e raro.

E atenção ao par: {nach} com o substantivo {nach} + {dem} indica **movimento para fora**; {nach} com verbo ou advérbio indica **tempo decorrido depois**: {nach dem Essen} «depois da refeição», {zwei Jahre nach seiner Ankunft} «dois anos depois da chegada dele».

## {schon}, {noch}, {bereits}

Três palavras que o português não distingue e o alemão separa com rigor:

- {schon} «já» — algo que **aconteceu**: {Ich habe es schon gelesen} «Já li isso.»
- {noch} «ainda» — algo que **continua** possível: {Ich habe es noch nicht gelesen} «Ainda não li isso.»
- {bereits} «já, previamente» — algo que **se sobrepõe** a outro evento: {Als ich ankam, war er bereits gegangen} «Quando cheguei, ele já tinha ido.»

E o par de negação: {nicht mehr} «já não» e {noch nicht} «ainda não». {Ich will nicht mehr} «Eu não quero mais» (deixei de querer) e {Ich will noch nicht} «Eu ainda não quero» (ainda não cheguei nesse ponto). São estados diferentes.

## {während}, {wenn}, {bevor}

Estas três se confundem mais do que qualquer trio do curso:

- {während} «durante» — subordina e significa **ao mesmo tempo que**: {während ich arbeite, höre ich Musik} «enquanto trabalho, ouço música».
- {wenn} «quando» — subordina, tempo **disjuntivo**, mas pode virar {ob} «se» quando o verbo fica em último lugar: {wenn ich zurückkomme, rufe ich an} «quando eu voltar, ligo».
- {bevor} «antes de» — subordina e significa **anteriormente**: {bevor er ging, aß er} «antes de sair, ele comeu».

O teste é o verbo. {Wenn ich gehe, komme ich} «se eu for, eu vou». {Wenn ich gehe, gehe ich} «quando eu for, eu vou». Se o segundo verbo estiver no último lugar, é {ob}; se estiver no meio, é {wenn}.

## O essencial

{morgen} é amanhã ou de manhã; {seit} responde «desde quando» e {vor} responde «há quanto tempo»; {nach} indica tempo decorrido depois; {schon} diz que já aconteceu e {noch} que ainda é possível; e {wenn} com verbo no fim é {ob}.`),
  vocab: [
    V('heute', 'heute', 'hoje'),
    V('gestern', 'gestern', 'ontem'),
    V('morgen', 'morgen', 'amanhã; de manhã'),
    V('übermorgen', 'übermorgen', 'depois de amanhã'),
    V('vorgestern', 'vorgestern', 'anteontem'),
    V('jetzt', 'jetzt', 'agora, neste momento'),
    V('bald', 'bald', 'em breve, logo'),
    V('seit', 'seit', 'desde (dativo); desde que'),
    V('vor', 'vor', 'antes de; há (tempo passado)'),
    V('bis', 'bis', 'até (dativo); até que'),
    V('nach', 'nach', 'depois de; segundo; em direção a'),
    V('schon', 'schon', 'já (algo que já aconteceu)'),
    V('noch', 'noch', 'ainda; ainda não (com {nicht})'),
    V('bereits', 'bereits', 'já, previamente'),
    V('während', 'während', 'durante; enquanto'),
    V('bevor', 'bevor', 'antes de (o verbo vai para o fim)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Ich bin ___ zwei Jahren in dieser Stadt}, qual preposição preenche o espaço?'),
    options: [
      T('seit — responde a «desde quando» e indica duração que continua'),
      T('vor — {vor} mede tempo já decorrido, não duração em curso'),
      T('nach — {nach} indica tempo posterior a um evento'),
      T('bis — {bis} indica um limite final'),
    ],
    answer: 0,
    hint: T('Regra §2: {seit} + dativo para algo que começou e continua.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('O dia anterior a ontem, em uma palavra: ___'),
      answer: 'vorgestern',
      hint: T('É {vor} + {gestern} soldados, como {über} + {morgen} = {übermorgen}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a construção à sua função.'),
      pairs: [
        { a: T('vor drei Tagen'), b: T('há três dias') },
        { a: T('seit drei Tagen'), b: T('há três dias (e continua)') },
        { a: T('nach drei Tagen'), b: T('três dias depois') },
        { a: T('bis morgen'), b: T('até amanhã') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em qual frase o verbo conjugado está na posição de {ob} «se»?'),
      options: [
        T('{Wenn ich zurückkomme, rufe ich dich an} — o segundo verbo está no meio.'),
        T('{Wenn ich zurückkomme, rufe ich dich an} — o segundo verbo está no fim.'),
        T('{Während ich arbeite, höre ich Musik} — o segundo verbo está no fim.'),
        T('{Bevor er ging, aß er} — o segundo verbo está no fim.'),
      ],
      answer: 0,
      hint: T('Regra §5: se o segundo verbo não for o último, a subordinação é com {wenn}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{seit} + dativo responde a «desde quando» e marca uma duração que começou e continua: {Ich warte seit einer Stunde} «estou esperando há uma hora».',
      ),
    },
    {
      n: '2',
      text: T(
        '{vor} + dativo mede tempo já decorrido: {vor drei Tagen} «há três dias». Nunca use {vor} para algo que começou e ainda continua; nesse caso use {seit}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{nach} + dativo marca tempo decorrido **depois** de um evento: {nach dem Essen} «depois da refeição», {zwei Jahre nach seiner Ankunft} «dois anos depois da sua chegada».',
      ),
    },
    {
      n: '4',
      text: T(
        '{bis} + dativo marca o limite final: {bis morgen} «até amanhã», {bis zum Monatsende} «até o fim do mês».',
      ),
    },
    {
      n: '5',
      text: T(
        '{schon} diz que algo já aconteceu; {noch} diz que ainda é possível. Com {nicht}: {nicht mehr} «já não» e {noch nicht} «ainda não» são estados diferentes.',
      ),
    },
    {
      n: '6',
      text: T(
        '{während} significa «ao mesmo tempo que». {wenn} significa «quando» ou «se»: se o verbo conjugado da subordinação vai para o fim, é {ob} «se»; se fica no meio, é {wenn} «quando».',
      ),
    },
  ],
  notes: [
    {
      label: T('{morgen} é duas palavras com um só nome'),
      text: T(
        'A palavra {morgen} é o exemplo mais bonito de como o alemão prefere o contexto a uma marca explícita. Sozinha, ela é «amanhã». Acompanhada de {Abend} ou de um substantivo de hora, passa a ser «de manhã»: {morgen früh} «amanhã cedo», {morgen Mittag} «amanhã ao meio-dia». O mesmo acontece com {abend}: {am Abend} «à noite», {Abend} «a noite» — o substantivo com {am} indica o período, o advérbio sem artigo indica o momento pontual. O antigo Luther usa {morgens} e {abends} como advérbios, forma hoje rara fora da المكونات fixos.',
      ),
    },
    {
      label: T('Leitura bíblica'),
      text: T(
        'O tempo em Luther aparece quase sempre com {vor} ou {nach}, nunca com {seit}. Em Salmo 90:1, {Du, der du die Menschen heimsuchest in Ewigkeit} «Tu, que reconduzes os homens ao repouso eterno»: o verbo {suchest} está no presente, e é essa mistura de presente com {in Ewigkeit} que apresenta a eternidade como algo sem começo, não como algo que começou. Em Hebreus 13:8, {Jesus Christus gestern und heute und derselbe auch in Ewigkeit} «Jesus Cristo ontem, hoje e o mesmo para sempre»: {gestern} e {heute} em sequência funcionam como particípios usados como advérbios. Em Lucas 24:29, {stehet aber hier und gehet nicht} «ficai aqui e não vos vindeis»: o {gehet nicht} liga a proibição ao presente imediato, e é um dos poucos casos em que o tempo do texto coincide com o da fala.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ich fahre morgen nach Berlin.',
      gloss: T('Eu vou a Berlim amanhã ({morgen} = amanhã, sozinho).'),
    },
    {
      text: 'Ich stehe morgen früh auf.',
      gloss: T('Levanto amanhã de madrugada ({morgen} = de manhã, acompanhado).'),
    },
    {
      text: 'Ich warte seit einer Stunde.',
      gloss: T('Estou esperando há uma hora ({seit} + dativo, duração em curso).'),
    },
    {
      text: 'Wir kamen vor drei Tagen an.',
      gloss: T('Chegamos há três dias ({vor} mede tempo já decorrido).'),
    },
    {
      text: 'Zwei Wochen nach meiner Ankunft zog ich um.',
      gloss: T('Duas semanas depois de minha chegada mudei-me ({nach} + caso).'),
    },
    {
      text: 'Die Vorlesung dauert bis sechzehn Uhr.',
      gloss: T('A aula dura até as dezesseis horas ({bis} marca o limite).'),
    },
    {
      text: 'Ich habe das Buch schon gelesen.',
      gloss: T('Já li este livro ({schon}: o fato aconteceu).'),
    },
    {
      text: 'Ich habe das Buch noch nicht gelesen.',
      gloss: T('Ainda não li este livro ({noch nicht}: a possibilidade permanece).'),
    },
    {
      text: 'Während ich arbeite, höre ich Musik.',
      gloss: T('Enquanto trabalho, ouço música ({während} = ao mesmo tempo que).'),
    },
    {
      text: 'Wenn ich zurückkomme, rufe ich dich an.',
      gloss: T('Quando eu voltar, ligo para você ({wenn} com verbo no meio = quando).'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Advérbios de tempo e expressões'),
      head: [T('Período'), T('Curto'), T('Com preposição'), T('Glosa')],
      rows: [
        ['hoje', 'heute', 'an heute', 'today'],
        ['amanhã', 'morgen', 'am nächsten Tag', 'tomorrow'],
        ['ontem', 'gestern', 'am letzten Tag', 'yesterday'],
        ['anteontem', 'vorgestern', 'vor gestern', 'the day before yesterday'],
        ['depois de amanhã', 'übermorgen', 'über morgen', 'the day after tomorrow'],
        ['agora', 'jetzt', 'in diesem Augenblick', 'now'],
        ['de manhã', 'früh', 'am Morgen', 'in the morning'],
        ['à noite', 'abends', 'am Abend', 'in the evening'],
        ['à tarde', 'nachmittags', 'am Nachmittag', 'in the afternoon'],
      ],
    },
    {
      caption: T('Tabela 2 — As quatro preposições de tempo'),
      head: [T('Preposição'), T('Caso'), T('Pergunta'), T('Exemplo')],
      rows: [
        ['seit', 'dativo', 'desde quando?', 'seit drei Monaten'],
        ['bis', 'dativo', 'até quando?', 'bis zum Sonntag'],
        ['vor', 'dativo / acusativo', 'há quanto tempo?', 'vor zwei Wochen'],
        ['nach', 'dativo', 'quanto tempo depois?', 'nach dem Unterricht'],
      ],
    },
  ],
};
