import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('Período: as três formas'),
  subtitle: T('Simples, composto e complexo — e o grau de cada subordinada'),
  section: T('Sintaxe'),
  body: C(`## Período simples

Período é o que se diz de uma vez, de um ponto a outro, sem pontuação no meio. O período simples tem uma proposição só: um sujeito, um verbo, o que o verbo governar. {Deus caritās est} é o exemplo mais curto que existe, e é uma proposição completa: nominativo, verbo {est}, predicativo no nominativo. {Hic est fīlius meus dīlectus} também é simples, com {hīc} advérbio, {est} verbo e {fīlius} sujeito.

O período simples é raro na prosa de São Paulo, e isso não é acaso. Um escritor que quer mostrar que duas coisas se seguem uma da outra precisa de duas proposições; um escritor que quer mostrar causa precisa de causa. A frase simples é a frase de quem afirma, e a Vulgata quase nunca afirma sem argumentar.

## Período composto

O período composto tem duas proposições: uma principal e uma subordinada, ligadas por um conector. {Quī credit in mē, etiam si mortuus fuerit, vivet} tem uma principal ({vivet}, "viverá") e uma subordinada ({quī credit in mē, etiam si mortuus fuerit}), que é condicional e traz uma segunda subordinada dentro dela ({etiam si mortuus fuerit}). O que faz o período composto é a subordinada; o que o torna fácil é haver só uma.

Aqui está o detalhe que muda a leitura: em latim, a subordinada quase sempre vem **antes** da principal. O verbo principal fica no fim, e é por isso que se lê o latim de trás para a frente. Em português a ordem é livre e o substantivo vai para a frente; em latim o conector abre a frase e o verbo fecha.

## Período complexo

O período complexo é o que tem três ou mais proposições, e é aqui que o escritor se mostra. O que o distingue não é o número de subordinadas, é o **grau**: a primeira subordinada pode levar a segunda, a segunda pode levar a terceira, e é essa cadeia que faz o período.

Em 1 Coríntios 2:4 a Vulgata escreve {sed in manifestātiōne spīritūs et virtūtis, et nōn in sapientiāe verbōrum, sed in virtūte Dei}. A estrutura é: {sed} abre contraste; {in manifestatione} e {in virtute} são dois regimes do ablativo; {et non in sapientiae verborum} nega o segundo deles; {sed in virtute Dei} o substitui. Cinco segmentos, uma ideia. Um tradutor que traduzisse cada segmento solto produziria uma frase que não termina; quem entende o grau produz uma frase só.

O grau das subordinadas é o que interessa:

| Grau | Conector | Modo do verbo | Exemplo |
|---|---|---|---|
| causal | {quod}, {quia}, {quoniam}, {ut} | indicativo | {scīmus quia vēnit} |
| final | {ut}, {ne} | subjuntivo | {vēnit ut videat} |
| completivo | {ut}, {quod} | subjuntivo ou indicativo | {nesciō quid faciam} |
| condicional | {sī}, {nisi} | subjuntivo | {sī vēnit, videbit} |
| concessivo | {cum}, {quamquam}, {etiamsī} | subjuntivo ou indicativo | {cum sīt stultus, errat tamen} |
| comparativo | {quasi}, {sicut}, {tamquam}, {velut} | indicativo | {sicut fīlius} |
| temporal | {cum}, {ubi}, {dum}, {antequam} | indicativo ou subjuntivo | {cum vēnisset} |
| consecutivo | {ita}, {tam}, {tanta ... quanta} | indicativo | {ita ut confundat} |

Duas dessas linhas pedem uma leitura. O causal {quod} vai ao indicativo quando o falante assume o conteúdo como verdade e ao subjuntivo quando é opinião de outro. E o temporal {cum} muda de modo conforme o tempo que marcar: {cum vēnit} «quando vinha», {cum vēnisset} «quando, já que, tinha vindo».

## Onde o grego aparece em português

O latim da Vulgata é uma língua de subordinação, e a palavra grega que está por trás é {ὑπόταξις}: o período grego coloca todas as subordinadas na frente e a principal no fim, em ordem crescente de dependência. Isso é o oposto do habits ebrew, que liga uma proposição à outra com {καί} e deixa a principal no meio, como em Salmo 21:3, {Dīvīsērunt sibi vestimenta mea}.

O efeito no português é visível: uma frase de São Paulo traduzida costuma ter "porque", "para que", "embora", "já que" empilhados, e o tradutor moderno acaba relendo o período em português, colocando o verbo onde o português quer. É exatamente aí que o grego se sente grego: não no vocabulário, mas na ordem em que as ideias aparecem.

O período da Vulgata tem ainda uma característica que o grego não tem: a partícula {autem}, que aparece no meio do período e sempre volta ao mesmo ponto. Em {scīmus autem quia ...} ela não liga duas orações, ela muda o tom. Um tradutor que a trata como "mas" escreve uma coisa diferente da que o latim fez.`),
  vocab: [
    V('Deus', 'Deus', 'Deus (nom. sg., sujeito de {est})'),
    V('caritās', 'caritas', 'o amor (nom. f. sg., predicativo)'),
    V('est', 'sum', 'é (verbo {sum}, 3.ª sg.)'),
    V('fīlius', 'filius', 'filho (nom. sg.)'),
    V('dīlectus', 'dilectus', 'dileto, amado (part. perf. pass.)'),
    V('vivet', 'vivo', 'vive (pres. ind.) ou viverá (fut. ind.)'),
    V('credit', 'credo', 'crê (pres. ind. 3.ª sg.)'),
    V('vēnit', 'venio', 'vem (pres. ind.) ou veio (perf. ind.)'),
    V('sed', 'sed', 'mas (conector adversativo)'),
    V('et', 'et', 'e (conector aditivo)'),
    V('nōn', 'non', 'não (adv. de negação)'),
    V('fuerit', 'sum', 'tiver estado (perf. subj. 3.ª sg., no concessivo)'),
    V('manifestātiōne', 'manifestatio', 'manifestação (abl. f. sg., de meio)'),
    V('sapientiāe', 'sapientia', 'sabedoria (gen. f. sg., regendo {verbōrum})'),
    V('virtūte', 'virtus', 'poder (abl. f. sg.)'),
    V('Dei', 'deus', 'de Deus (gen. m. sg.)'),
    V('verbōrum', 'verbum', 'palavras (gen. pl.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Deus caritās est}, que tipo de período é?'),
    options: [
      T('Simples: uma proposição, com sujeito, verbo e predicativo no nominativo'),
      T('Composto: o substantivo {caritās} é uma proposição subordinada'),
      T('Complexo: {Deus} e {caritās} são duas proposições'),
      T('Nominal: não há verbo'),
    ],
    answer: 0,
    hint: T('Regra §1: o período simples tem exatamente uma proposição.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Por que o latim da Vulgata costuma pôr o verbo principal no fim?'),
      options: [
        T('Porque a subordinada vem primeiro por regra, e a principal fecha o período'),
        T('Porque o latim tem ordem fixa como o grego'),
        T('Porque o verbo não pode ficar no meio em nenhuma língua indo-europeia'),
        T('Porque o pronome relativo vem primeiro'),
      ],
      answer: 0,
      hint: T(
        'Regra §2: subordinada antes, principal depois, e o latim se lê de trás para a frente.',
      ),
    },
    {
      kind: 'fill',
      prompt: T('Em {Quī credit in mē, etiam si mortuus fuerit, vivet}, o verbo principal é ___'),
      answer: 'vivet',
      hint: T('A condicional abre a frase; o verbo principal fecha.'),
    },
    {
      kind: 'fill',
      prompt: T('Em {cum sīt stultus, errat tamen}, o {cum} introduz uma subordinada ___'),
      answer: 'concessiva',
      hint: T('Subjuntivo depois de {cum} dá concessão: «embora».'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o conector ao grau que ele introduz'),
      pairs: [
        { a: T('{ut}'), b: T('final ou completivo') },
        { a: T('{sī}'), b: T('condicional') },
        { a: T('{cum}'), b: T('temporal ou concessiva, conforme o modo') },
        { a: T('{ita ... ut}'), b: T('consecutivo') },
      ],
      answer: [0, 1, 2, 3],
      hint: T('Regra §3: o conector decide o grau; {cum} decide duas vezes.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Período simples tem uma proposição; composto tem duas; complexo tem três ou mais, encadeadas por grau.',
      ),
    },
    {
      n: '2',
      text: T(
        'Em latim a subordinada vem antes da principal: o verbo principal fecha o período, e por isso o latim se lê de trás para a frente.',
      ),
    },
    {
      n: '3',
      text: T(
        'O grau da subordinada é decidido pelo conector: {quod} causal, {ut} final ou completivo, {sī} condicional, {cum} temporal ou concessivo, {quasi} comparativo, {ita ... ut} consecutivo.',
      ),
    },
    {
      n: '4',
      text: T(
        'O mesmo conector pode servir a graus diferentes: {cum} é temporal com o indicativo e concessivo com o subjuntivo; {quod} é causal no indicativo e oblíquo no subjuntivo.',
      ),
    },
    {
      n: '5',
      text: T(
        'A partícula {autem} não liga orações: ela marca o tom dentro do período e sempre ocupa a segunda posição.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que o latim põe o verbo no fim'),
      text: T(
        'Não é arbitrariedade, é consequência: consequência de a subordinada ser obrigatória vir antes. Se a subordinada abre a frase e a principal fecha, o verbo principal fica no fim por necessidade estrutural, não por estilo. O grego faz o mesmo, e é por isso que os textos paulinos traduzidos para línguas de ordem livre soam tortos até o tradutor habituar o olho.',
      ),
    },
    {
      label: T('O período complexo é o que distingue o escritor'),
      text: T(
        'Qualquer um escreve período simples e composto. O que separa um autor de outro é o número de graus que ele encadeia sem perder o fio, e é por isso que a prosa de Paulo é reconhecível mesmo quando o vocabulário é o mais comum. Um período complexo mal feito é um emaranhado; bem feito, é uma prova de que o escritor tinha o argumento inteiro na cabeça antes de escrever a primeira palavra.',
      ),
    },
  ],
  examples: [
    { text: 'Deus caritās est', gloss: T('Deus é o amor (período simples, de 1 Jo 4:8)') },
    {
      text: 'Quī credit in mē, etiam si mortuus fuerit, vivet',
      gloss: T('quem crê em mim, mesmo que esteja morto, viverá (período composto)'),
    },
    {
      text: 'sed in manifestatione spiritus et virtutis',
      gloss: T('mas na manifestação do Espírito e do poder (ablativo de meio)'),
    },
    {
      text: 'et nōn in sapientiāe verbōrum',
      gloss: T('e não na sabedoria das palavras (negação do segundo regime)'),
    },
    {
      text: 'sed in virtūte Dei',
      gloss: T('mas no poder de Deus (terceiro segmento, mesmo ablativo)'),
    },
    { text: 'scīmus quia vēnit', gloss: T('sabemos que veio (causal com indicativo)') },
    { text: 'vēnit ut videat', gloss: T('veio para ver (final com subjuntivo)') },
    {
      text: 'cum sīt stultus, errat tamen',
      gloss: T('embora seja tolo, ainda assim erra (concessivo)'),
    },
    { text: 'ita ut confundat', gloss: T('de modo que confunda (consecutivo)') },
    {
      text: 'scīmus autem quia',
      gloss: T('sabemos pois que (partícula na segunda posição, dentro do período)'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Os três períodos'),
      head: [T('Forma'), T('Proposições'), T('Exemplo'), T('O que o período marca')],
      rows: [
        [T('simples'), T('1'), T('{Deus caritās est}'), T('afirma')],
        [T('composto'), T('2'), T('{sī vēnit, videbit}'), T('uma subordinada, um grau')],
        [
          T('complexo'),
          T('3 ou mais'),
          T('{scīmus autem quia ... sit}'),
          T('dois ou mais graus encadeados'),
        ],
      ],
    },
    {
      caption: T('Tabela 2 — Grau de cada subordinada'),
      head: [T('Grau'), T('Conector'), T('Modo do verbo'), T('Exemplo')],
      rows: [
        [T('causal'), T('{quod}, {quia}'), T('indicativo'), T('{scīmus quia vēnit}')],
        [T('final'), T('{ut}, {ne}'), T('subjuntivo'), T('{vēnit ut videat}')],
        [T('completivo'), T('{ut}, {quod}'), T('subjuntivo'), T('{nesciō quid faciam}')],
        [T('condicional'), T('{sī}, {nisi}'), T('subjuntivo'), T('{sī vēnit, videbit}')],
        [
          T('concessivo'),
          T('{cum}, {quamquam}'),
          T('subjuntivo'),
          T('{cum sīt stultus, errat tamen}'),
        ],
        [T('comparativo'), T('{quasi}, {sicut}'), T('indicativo'), T('{sicut fīlius}')],
        [T('temporal'), T('{cum}, {ubi}, {dum}'), T('ind. ou subj.'), T('{cum vēnisset}')],
        [T('consecutivo'), T('{ita}, {tam}'), T('indicativo'), T('{ita ut confundat}')],
      ],
    },
  ],
};
