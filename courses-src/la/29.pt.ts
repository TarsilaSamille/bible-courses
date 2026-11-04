import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Oratio obliqua: a sequência oblíqua'),
  subtitle: T('{dixit, quia ...}: o verbo recua um degrau quando passa a ser afirma de outro'),
  section: T('Sintaxe'),
  body: C(`## Falar de outro é falar de outro tempo

Quando o latim relata o que alguém disse, o verbo do relato não repete o tempo nem o modo da frase original. Ele recua um degrau: o presente vira imperfecto do subjuntivo, e o perfeito vira perfeito do subjuntivo. A regra vale para todas as orações indiretas e não é uma preferência de estilo; é o que permite ao latim distinguir "ele diz que está lá" de "ele disse que estava lá" sem mudar a construção.

| No que se fala | Na oblíqua | Português |
|---|---|---|
| {dīcit ...} (pres. ind.) | {dīcit ...} (impf. subj.) | diz que [estava] lá |
| {dīxit ...} (perf. ind.) | {dīxit ...} (perf. subj.) | disse que [tinha estado] lá |
| {dīcet ...} (fut. ind.) | {dīcet ...} (fut. subj.) | dirá que [estará] lá |
| {putābat ...} (imperf. ind.) | {putābat ...} (impf. subj.) | achava que [estava] lá |

O caso comum é o primeiro. {Dīcit sē esse} "diz que ele é" traz um infinitivo, não um subjuntivo, porque a proposição indireta latina tem duas portas: o **infinitivo com sujeito em acusativo** e o **subjuntivo**. A primeira é mais comum e é a que a Vulgata prefere; a segunda aparece quando o verbo da oblíqua é um dos que exigem subjuntivo, ou quando o falante não assume o conteúdo.

## As cinco portas da oblíqua

O que decide o modo não é o sentido da proposição, é o conectivo. Se o verbo vem seguido de {quod}, {quia}, {quoniam}, {ut}, {ne}, {sī} ou de {cum} com sentido concessivo, a proposição subordinada é oblíqua e o verbo vai ao subjuntivo. Se vem sem conectivo, com um substantivo ou um pronome como sujeito, a Construction é AcI e o verbo vai ao infinitivo.

| Porta | Conectivo | Modo | Exemplo |
|---|---|---|---|
| AcI | nenhum | infinitivo | {dīcit sē esse} |
| oblíqua explícita | {quod}, {quia} | subjuntivo | {dīcit quia sīt stultus} |
| final dentro de oblíqua | {ut} | subjuntivo | {dīcit ut vēniās} |
| negativa dentro de oblíqua | {ne} | subjuntivo | {dīcit nē vēnisse} |
| condicional relatada | {sī} | subjuntivo | {dīcit sī vēnit} |
| concessiva relatada | {cum} | subjuntivo | {dīxit cum stultus esset} |

## Onde a regra falha, e é por aí que se lê

A regra é do latim clássico e a Vulgata é um texto literário traduzido, não um fala spontânea. O resultado é que Paulo, ao relatar o que sabe, mantém o indicativo: em Romanos 8:28 ele escreve {scīmus autem quia ... sunt sine lege}, e os verbos {sunt} e {est} são indicativos. O latim estrito pediria {sint} e {sit}. Quem traduzir expecting a oblíqua vai errar o tempo; quem mantiver o indicativo vai ler a afirmação de Paulo na voz de Paulo, que é o que o texto quer.

Há mais dois casos em que a sequência não acontece. {Postquam}, {antequam}, {praesertim} e {quamquam} introduzem com o indicativo: {postquam mortuus est} é perfeito, não {postquam mortuus sit}. E a pergunta indireta nunca faz sequência, porque o tempo da pergunta já é um tempo futuro para o ouvinte: {nesciō quid faciam} é subjuntivo por definição da pergunta, não por oblíqua.

## 1 João 5:14

> **Et hoc est fiducia, quod si quid petierimus secundum voluntatem eius, audiet nos: et si peccaverimus, propitiabitur nobis.**

O verbo do relato é {petierimus}, perfeito do subjuntivo de {petō}. O tempo original era o perfeito: "pedimos". A sequência deslocou o perfeito do indicativo para o perfeito do subjuntivo, e o efeito em português é nulo, porque o passado relativo se faz com "se". Mas o latim está fazendo uma coisa que o português não pode expressar: está marcando que o "pedir" é o conteúdo do que se diz, e não o ato de dizer.

Repare em {si quid petierimus}: o {sī} não é condicional de {petierimus}, é a própria proposição oblíqua convertida em condicional. E repare em {audiet nos}: futuro do indicativo, sem recuo nenhum, porque o futuro não tem passado. Em latim oblíquo o futuro do indicativo vira futuro do subjuntivo ({erit} → {sit}); a Vulgata deixa {audiet} como está, e é mais uma vez o mesmo mecanismo.

E o primeiro verbo da passagem, {et hoc est fiducia}, é uma proposição simples. {Quod si quid petierimus ...} é uma proposição composta, com {quod} como conector de causa e {si} como de condição. Um versículo, duas formas de período.`),
  vocab: [
    V('dīcit', 'dico', 'ele diz (pres. ind. 3.ª sg.)'),
    V('dixit', 'dico', 'ele disse (perf. ind. 3.ª sg.)'),
    V('putat', 'puto', 'ele acha (pres. ind.)'),
    V('putābat', 'puto', 'ele achava (imperf. ind.)'),
    V('petierimus', 'peto', 'que tenhamos pedido (perf. subj. 1.ª pl.)'),
    V('petiit', 'peto', 'pediu (perf. ind. 3.ª sg.)'),
    V('audiet', 'audio', 'escutará (fut. ind. 3.ª sg.)'),
    V('petō', 'petō', 'pedir (verbo da oblíqua de 1 Jo 5:14)'),
    V('quod', 'quod', 'que (conector oblíquo, causal ou completivo)'),
    V('quia', 'quia', 'porque (conector causal)'),
    V('sint', 'sum', 'sejam (subj. pres. 3.ª pl., na oblíqua)'),
    V('sīt', 'sīt', 'seja (subj. pres. 3.ª sg., o tempo da oblíqua)'),
    V('sit', 'sit', 'é (ind. pres. 3.ª sg., mantido na Vulgata)'),
    V('nesciō', 'nescio', 'não sei (1.ª sg., pergunta indireta)'),
    V('voluntas', 'voluntas', 'vontade (nom. sg.)'),
    V('fiducia', 'fiducia', 'confiança (nom. sg.)'),
    V('sine lege', 'sine lege', 'sem lei (ablativo regido por {sine})'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {dixit quia ...}, o que a sequência oblíqua faz com o tempo do verbo relatado?'),
    options: [
      T('Recua um degrau: o perfeito do indicativo vira perfeito do subjuntivo'),
      T('Não faz nada: o latim mantém o tempo original'),
      T('Avança um degrau: vira futuro do subjuntivo'),
      T('Troca o modo mas não o tempo'),
    ],
    answer: 0,
    hint: T('Regra §1: presente → imperfecto do subjuntivo, perfeito → perfeito do subjuntivo.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {nesciō quid faciam}, por que {faciam} é subjuntivo?'),
      options: [
        T('Porque é uma pergunta indireta, e não por oblíqua de {dīcere}'),
        T('Porque {nesciō} é um verbo de sentido fixo'),
        T('Porque {quid} é um pronome interrogativo, e pronomes exigem subjuntivo'),
        T('Porque a sequência do presente já aconteceu'),
      ],
      answer: 0,
      hint: T(
        'Regra §2: a pergunta indireta não faz sequência; o subjuntivo vem do sentido de {nesciō}.',
      ),
    },
    {
      kind: 'fill',
      prompt: T(
        'Na oblíqua de um perfeito, {dīxit quia vēnit}: o presente {vēnit} passa a ___ (subj. perfeito 3.ª sg.)',
      ),
      answer: 'vēnerit',
      hint: T('Presente → imperfecto, perfeito → perfeito do subjuntivo.'),
    },
    {
      kind: 'fill',
      prompt: T('Em Romanos 8:28, {scīmus autem quia ... sunt}: o verbo {sunt} está no ___'),
      answer: 'indicativo',
      hint: T('A Vulgata mantém o indicativo na oblíqua; o latim clássico pedia {sint}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a construção ao modo que ela exige'),
      pairs: [
        { a: T('{dīcit sē esse}'), b: T('infinitivo (AcI): sem conector') },
        {
          a: T('{dīcit quia sīt stultus}'),
          b: T('subjuntivo: {quod} ou {quia} obrigam a oblíqua'),
        },
        { a: T('{nesciō quid faciam}'), b: T('subjuntivo: pergunta indireta, sem sequência') },
        { a: T('{postquam mortuus est}'), b: T('indicativo: {postquam} não faz sequência') },
      ],
      answer: [0, 1, 2, 3],
      hint: T('Regra §2 e §3: o conectivo decide o modo, e {postquam} é exceção.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Na oratio obliqua o tempo recua um degrau: presente do indicativo → imperfecto do subjuntivo, perfeito → perfeito do subjuntivo, futuro → futuro do subjuntivo.',
      ),
    },
    {
      n: '2',
      text: T(
        'O modo da proposição indireta depende do conector: sem conector, AcI com infinitivo; com {quod}, {quia}, {ut}, {ne}, {sī} ou {cum} concessivo, subjuntivo.',
      ),
    },
    {
      n: '3',
      text: T(
        'A pergunta indireta não faz sequência: {nesciō quid faciam} é subjuntivo porque a pergunta o exige, não porque houve oblíqua.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Postquam}, {antequam} e {quamquam} nunca fazem sequência: mantêm o indicativo ({postquam mortuus est}).',
      ),
    },
    {
      n: '5',
      text: T(
        'A Vulgata mantém o indicativo em muitas oblíquas ({scīmus quia ... sunt}, {dīxit ut dormiātis}): ler assim é ler a afirmação na voz de quem a fez.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que o latim faz isso'),
      text: T(
        'Um verbo no presente está atrelado ao momento de quem fala; ao entrar no relato de outro, ele passa a valer para o momento do outro, que é um momento anterior ao nosso. O latim resolve isso com uma troca mecânica de tempo, e não com um tempo novo: o mesmo tempo que diz "ouvi" vira "que ouvi". Quem traduz para o português ganha de brinde a informação de que a ação é passada em relação ao narrador, porque o português faz isso com "ter" + particípio e o latim faz com a terminação.',
      ),
    },
    {
      label: T('A regra e o texto'),
      text: T(
        'A sequência oblíqua é a regra mais descrita e mais violada da sintaxe latina. Os gramáticos clássicos a apresentam como automática; os textos mostram que Paulo a ignora com frequência, e que a Igreja a usa quando quer marcar a distância entre a voz de quem fala e a voz de quem é citado. Um leitor que aplica a regra de onde sem olhar vai errar Romanos 8 inteiro; um leitor que olha o verbo vai ler o capítulo certo.',
      ),
    },
  ],
  examples: [
    { text: 'dīcit sē esse', gloss: T('diz que ele é (AcI, infinitivo) — a porta mais comum') },
    { text: 'dīcit quia sīt stultus', gloss: T('diz que ele é tolo ({quia} força o subjuntivo)') },
    { text: 'dixit vēnisse', gloss: T('disse que tinha vindo (oblíqua com AcI e perfeito)') },
    {
      text: 'putābat sibi victūrum',
      gloss: T('achava que ia vencer (infinitivo futuro + dativo)'),
    },
    {
      text: 'putābat se victūrum esse',
      gloss: T('achava que ele ia vencer (infinitivo com acusativo)'),
    },
    {
      text: 'dīxit cum stultus esset',
      gloss: T('disse embora fosse tolo ({cum} concessivo → subjuntivo)'),
    },
    {
      text: 'postquam mortuus est',
      gloss: T('depois que morreu ({postquam} mantém o indicativo)'),
    },
    {
      text: 'nesciō quid faciam',
      gloss: T('não sei o que fazer (pergunta indireta, sem sequência)'),
    },
    {
      text: 'si quid petierimus',
      gloss: T('se pedirmos alguma coisa ({petierimus} = perf. subj., recuado do perf. {petiit})'),
    },
    {
      text: 'scīmus autem quia ... sunt',
      gloss: T('sabemos pois que ... são (Rm 8:28: a Vulgata mantém o indicativo)'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — A sequência oblíqua, tempo por tempo'),
      head: [T('Tempo direto'), T('Tempo oblíquo'), T('Modo oblíquo'), T('Frase')],
      rows: [
        [T('presente do indicativo'), T('imperfeito'), T('subjuntivo'), T('{dīcit quia esset}')],
        [T('perfeito do indicativo'), T('perfeito'), T('subjuntivo'), T('{dīxit quia vēnerit}')],
        [
          T('imperfeito do indicativo'),
          T('mais-que-perfeito'),
          T('subjuntivo'),
          T('{putābat quia vēnisset}'),
        ],
        [T('futuro do indicativo'), T('futuro'), T('subjuntivo'), T('{dīcet ut sīt}')],
        [T('imperativo'), T('presente'), T('subjuntivo'), T('{dīcit ut faciat}')],
        [T('infinitivo'), T('—'), T('AcI'), T('{dīcit sē amāre}')],
      ],
    },
    {
      caption: T('Tabela 2 — Conector e modo'),
      head: [T('Conector'), T('Grau da subordinada'), T('Modo do verbo'), T('Exemplo')],
      rows: [
        ['{quod}', 'causal ou completivo', 'subjuntivo', '{dīcit quia sīt}'],
        ['{quia}', 'causal', 'subjuntivo', '{scīmus quia vēnerit}'],
        ['{ut}', 'final ou completivo', 'subjuntivo', '{dīcit ut vēniās}'],
        ['{ne}', 'final negativa', 'subjuntivo', '{dīcit nē vēnisse}'],
        ['{sī}', 'condicional relatada', 'subjuntivo', '{dīcit sī vēnit}'],
        ['{cum}', 'concessiva relatada', 'subjuntivo', '{dīxit cum stultus esset}'],
        ['{postquam}', 'temporal', 'indicativo', '{postquam mortuus est}'],
        ['nenhum', 'sujeito oblíquo', 'infinitivo (AcI)', '{dīcit sē esse}'],
      ],
    },
  ],
};
