import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('El período: sus tres formas'),
  subtitle: T('Simple, compuesto y complejo — y el grado de cada subordinada'),
  section: T('Sintaxis'),
  body: C(`## El período simple

Período es lo que se dice de una vez, de un punto a otro, sin puntuación en el medio. El período simple tiene una sola proposición: un sujeto, un verbo y lo que el verbo rija. {Deus caritās est} es el ejemplo más corto que existe, y es una proposición completa: nominativo, verbo {est}, predicativo en nominativo. {Hic est fīlius meus dīlectus} también es simple, con {hīc} adverbio, {est} verbo y {fīlius} sujeto.

El período simple es raro en la prosa de Pablo, y no es casualidad. Un escritor que quiere mostrar que una cosa se sigue de otra necesita dos proposiciones; uno que quiere mostrar causa necesita causa. La frase simple es la frase de quien afirma, y la Vulgata casi nunca afirma sin argumentar.

## El período compuesto

El período compuesto tiene dos proposiciones: una principal y una subordinada, unidas por un conector. {Quī credit in mē, etiam si mortuus fuerit, vivet} tiene una principal ({vivet}, «vivirá») y una subordinada ({quī credit in mē, etiam si mortuus fuerit}), que es condicional y trae dentro una segunda subordinada ({etiam si mortuus fuerit}). Lo que hace compuesto al período es la subordinada; lo que lo hace fácil es que haya sólo una.

Aquí está el detalle que cambia la lectura: en latín la subordinada casi siempre va **antes** de la principal. El verbo principal queda al final, y por eso el latín se lee al revés. En inglés el orden es libre y el sujeto va delante; en latín el conector abre la frase y el verbo la cierra.

## El período complejo

El período complejo es el que tiene tres o más proposiciones, y es ahí donde se muestra el escritor. Lo que lo distingue no es el número de subordinadas, es el **grado**: la primera subordinada puede llevar la segunda, la segunda puede llevar la tercera, y es esa cadena la que hace el período.

En 1 Corintios 2:4 la Vulgata escribe {sed in manifestātiōne spīritūs et virtūtis, et nōn in sapientiāe verbōrum, sed in virtūte Dei}. La estructura es: {sed} abre el contraste; {in manifestatione} y {in virtute} son dos regímenes del ablativo; {et non in sapientiae verborum} niega el segundo; {sed in virtute Dei} lo sustituye. Cinco segmentos, una idea. Quien tradujera cada segmento por separado produciría una frase que no termina; quien entiende el grado produce una sola frase.

El grado de las subordinadas es lo que importa:

| Grado | Conector | Modo del verbo | Ejemplo |
|---|---|---|---|
| causal | {quod}, {quia}, {quoniam}, {ut} | indicativo | {scīmus quia vēnit} |
| final | {ut}, {ne} | subjuntivo | {vēnit ut videat} |
| completivo | {ut}, {quod} | subjuntivo o indicativo | {nesciō quid faciam} |
| condicional | {sī}, {nisi} | subjuntivo | {sī vēnit, videbit} |
| concedivo | {cum}, {quamquam}, {etiamsī} | subjuntivo o indicativo | {cum sīt stultus, errat tamen} |
| comparativo | {quasi}, {sicut}, {tamquam}, {velut} | indicativo | {sicut fīlius} |
| temporal | {cum}, {ubi}, {dum}, {antequam} | indicativo o subjuntivo | {cum vēnisset} |
| consecutivo | {ita}, {tam}, {tanta ... quanta} | indicativo | {ita ut confundat} |

Dos de esas líneas piden una lectura. El causal {quod} va al indicativo cuando el hablante asume el contenido como verdad, y al subjuntivo cuando es la opinión de otro. Y el temporal {cum} cambia de modo según el tiempo que marca: {cum vēnit} «cuando venía», {cum vēnisset} «cuando había venido, puesto que había venido».

## Donde aparece el griego en el portugués

El latín de la Vulgata es una lengua de subordinación, y la palabra griega que está detrás es {ὑπόταξις}: el período griego pone todas las subordinadas delante y la principal al final, en orden creciente de dependencia. Eso es lo contrario del hábito hebreo, que engancha una proposición con otra mediante {καί} y deja la principal en medio, como en Salmo 21:3, {Dīvīsērunt sibi vestimenta mea}.

El efecto en el portugués es visible: una frase de Pablo traducida suele traer «porque», «para que», «embora» e «já que» empilhados, y el traductor moderno acaba relendo o período em português para pôr o verbo onde o português quer. É é exatamente aí que o grego se sente grego: não no vocabulário, mas na ordem em que as ideias aparecem.

El período da Vulgata tem ainda uma característica que o grego não tem: a partícula {autem}, que aparece no meio do período e sempre volta ao mesmo ponto. Em {scīmus autem quia ...} ela não liga duas orações, ela muda o tom. Quem a trata como «mas» escreve outra coisa do que o latim fez.`),
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
    V('fuerit', 'sum', 'tiver estado (perf. subj. 3.ª sg., no concedivo)'),
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
      hint: T('Regra §2: subordinada antes, principal depois, e o latim se lê ao contrário.'),
    },
    {
      kind: 'fill',
      prompt: T('Em {Quī credit in mē, etiam si mortuus fuerit, vivet}, o verbo principal é ___'),
      answer: 'vivet',
      hint: T('A condicional abre a frase; o verbo principal a fecha.'),
    },
    {
      kind: 'fill',
      prompt: T('Em {cum sīt stultus, errat tamen}, o {cum} introduz uma subordinada ___'),
      answer: 'concessiva',
      hint: T('Subjuntivo depois de {cum} dá concessão: «embora».'),
    },
    {
      kind: 'match',
      prompt: T('Relacione o conector com o grau que introduz'),
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
        'O período simples tem uma proposição; o composto tem duas; o complexo tem três ou mais, encadeadas por grau.',
      ),
    },
    {
      n: '2',
      text: T(
        'Em latim a subordinada vem antes da principal: o verbo principal fecha o período, e é por isso que o latim se lê ao contrário.',
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
        'A partícula {autem} não liga orações: marca o tom dentro do período e sempre ocupa a segunda posição.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que o latim põe o verbo no fim'),
      text: T(
        'Não é arbitrariedade, é consequência: a subordinada é obrigada a vir primeiro. Se a subordinada abre a frase e a principal fecha, o verbo principal fica no fim por necessidade estrutural, e não por estilo. O grego faz o mesmo, e por isso os textos paulinos traduzidos para línguas de ordem livre soam tortos até o tradutor habituar o olho.',
      ),
    },
    {
      label: T('O período complexo é o que distingue o escritor'),
      text: T(
        'Qualquer um escreve períodos simples e compostos. O que separa um autor de outro é o número de graus que ele encadeia sem perder o fio, e é por isso que a prosa de Paulo é reconhecível mesmo quando o vocabulário é o mais comum. Um período complexo mal feito é um emaranhado; bem feito, é prova de que o escritor tinha o argumento inteiro na cabeça antes de escrever a primeira palavra.',
      ),
    },
  ],
  examples: [
    { text: 'Deus caritās est', gloss: T('Deus é o amor (período simples, 1 Jo 4:8)') },
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
      caption: T('Tabla 1 — Las tres formas del período'),
      head: [T('Forma'), T('Proposiciones'), T('Ejemplo'), T('Lo que marca el período')],
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
      caption: T('Tabla 2 — Grado de cada subordinada'),
      head: [T('Grado'), T('Conector'), T('Modo do verbo'), T('Ejemplo')],
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
