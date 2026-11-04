import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('Infinitivos e a proposição indireta'),
  subtitle: T('{dīcit eum vēnisse} — o AcI, a estrutura que substituiu o «que»'),
  section: T('Pronomes e sintaxe do período'),
  body: C(`## A maior invenção do latim

Em português e espanhol, para dizer «ele diz **que** vem», é preciso {que} mais uma oração completa com verbo conjugado. O latim não precisa de nada disso. Ele diz {dīcit eum {venīre}}: **acusativo com infinitivo**, ou AcI. O sujeito vai para o Acusativo e o verbo vira infinitivo. Ponto.

{Verbum dicendi} é o nome técnico do verbo que governa a construção — «verbo de dizer» — e vale para todo o grupo: {dīcere} «dizer», {scire} «saber», {putāre} «achar», {iubēre} «ordenar», {cupere} «querer», {audīre} «ouvir», {videre} «ver», {meminisse} «lembrar-se de». Todos eles, sem exceção, regem AcI.

Por isso {dīcit eum {venīre}} significa «diz que ele vem». É preciso escrever o Acusativo {eum} para o sujeito, e o infinitivo não tem sujeito próprio: o sujeito do AcI é o Acusativo do verbo rector. É a única oração do latim em que o sujeito é Acusativo, e é por isso que os manuais a tratam como caso especial — mas você vai perceber, depois de algumas páginas, que ela é apenas mais uma oratio obliqua: o latim tem pouquíssimas orações indiretas, e quase todas são AcI.

| Verbo rector | Sujeito (Ac.) | Infinitivo | Tradução |
|---|---|---|---|
| dīcit | eum | venīre | «diz que ele vem» |
| scient | eum | vēnisse | «sabem que ele veio» |
| iubet | eōs | īre | «ordena que eles vão» |
| vult | mē | manēre | «quer que eu fique» |
| putat | mulierēs | fortēs esse | «acha que as mulheres são fortes» |

Repare na última linha: {fortēs} concorda com {mulierēs}, não com o sujeito da oração principal. O AcI tem concordância própria, e essa é a pegadinha clásica.

## Os quatro infinitivos e o que cada um diz

O latim tem quatro infinitivos, e três deles dizem **quando** a ação acontece em relação ao momento do verbo rector. Essa é a chave de todo o sistema:

- {amāre} — presente, **simultâneo**: «que ama»;
- {amāvisse} — perfeito, **anterior**: «que amou»;
- {amātūrum esse} — futuro, **posterior**: «que vai amar»;
- {passūrum esse} — futuro ativo, para ações que DURAM: «que estará amando».

{Spēro eum {vēnisse}} «espero que ele tenha vindo» — perfeito, porque a vinda é anterior ao momento em que eu espero. {Spēro eum {ventūrum esse}} «espero que ele venha» — futuro, porque a vinda é posterior. {Spēro eum {venīre}} «espero que ele vem» — presente, porque a vinda é simultânea. A escolha entre os quatro é inteiramente uma questão de cronologia.

O futuro do AcI tem uma forma que vale memorizar à parte: o **participio futuro ativo** mais {esse}. {Amātūrus sum} «estou para amar» → futuro do AcI. Repare que o {amātūr-} é idêntico: o latim forma o futuro do infinitivo com o mesmo {amātūrum} que já conhecia do futuro ativo.

## O AcI na passiva

Quando o verbo rector é passivo, a oração inteira também é. E há uma consequência importante: o **participio** entra, e o participio concorda com o sujeito do AcI:

{Dīcitur eum {vēnisse}} «se diz que ele veio» — {dīcitur} é passivo, {eum} continua Acusativo, o infinitivo {vēnisse} continua intacto;

{Dīcitur mulierēs {fortēs esse}} «se diz que as mulheres são fortes» — o AcI está na passiva ({dīcitur}), e o adjetivo {fortēs} concorda com o sujeito plural feminino {mulierēs}. Se o sujeito fosse singular masculino, teríamos {Dīcitur virum fortem esse} «se diz que o homem é forte».

A mesma regra vale para {dīcuntur}, {putātur}, {iubētur}. O latim, ao passar o AcI para a passiva, mantém o Acusativo do sujeito e apenas troca o verbo rector por sua forma passiva. Um truque elegante, e o motivo pelo qual a passiva é tão comum nos textos devocionais.

## Verbos impersonais

Há verbos que não têm sujeito — os **impessoais** — e eles governam AcI. O mais importante é {oportet} «é necessário»:

{Oportet illum {crēscere}} «é necessário que ele cresça»;
{Oportet nos {laborāre}} «é necessário que trabalhemos»;
{Necesse est} «é necessário» — a mesma ideia com substantivo neutro.

Junto vai {oportet} o verbo {licet} «é permitido», o substantivo {necesse}, e o verbo {decet} «é conveniente». Todos regem AcI, e todos se traduzem com «que» mais subjuntivo em português, mais infinitivo em latim. A diferença é que em latim o sujeito do impersonal está em **Acusativo**, não em Nominativo: {oportet illum} e não {oportet ille}.

Vale notar o contraste com {decet}: {oportet} é obrigação («é preciso»), {licet} é permissão («se pode»), {decet} é adequação («é apropriado»). Os três têm a mesma sintaxe e a mesma tradução em português, e a diferença só aparece no verbo.

## O AcI e o neutro

Um caso especial que parece erro e não é: o AcI neutro. {Scire est {amāre}} «saber é amar» — o {scire} é o sujeito da oração principal e ao mesmo tempo um substantivo verbal, o que faz o Acusativo {amāre}no lugar de sujeito. A construção {Dīcere est {cōnsilium}} «dizer é conselho» é uma frase que soa estranhosa em português e é perfeitamente normal em latim, e aparece muito nas cartas.

## Leitura

{Si quis vult {venīre} post mē, {abneget} sēmetipsum} «Se alguém quiser vir atrás de mim, negue-se a si mesmo» (Mateus 16:24) — AcI perfeito ({vēnisse} na forma modal, aqui {venīre}) depois de um verbo de desejo, com o Acusativo {sēmetipsum} como sujeito indireto que também é objeto de {abneget}. Uma frase faz as duas coisas ao mesmo tempo, e é por isso que o latim a aceita.

{Scient me sequī} «sabem que me seguem» (João 6:56) — AcI mínimo: o verbo rector {scient} vem primeiro, o Acusativo {me} faz de sujeito, e o infinitivo {sequī} diz a ação. Repare que o latim dispensa o «que» e também o pronome reflexo.

{Oportet nos omnes ante faciem Christi Iesu {apparēre}} «é necessário que todos compareçamos diante do rosto de Cristo Jesus» (2 Coríntios 5:10) — o impersonal {oportet} com sujeito no Acusativo plural {nos omnes} e um único infinitivo {apparēre}. Em português, a mesma frase é «é necessário que todos compareçamos»: a preposição de {oportet} é {oportet} em latim e nada em português.

{Ego sum via, veritas et vita} «Eu sou o caminho, a verdade e a vida» (João 14:6) — e aqui **não** há AcI: {ego} e {sum} estão no Nominativo, porque o sujeito da oração é o próprio orador. O contraste entre {Scient me sequī} e {Ego sum} mostra que o latim escolhe a estrutura pela função: relatório de terceiro vai para o Acusativo, primeira pessoa vai para o Nominativo.

{Dīcere est cōnsilium} «dizer é conselho» — AcI neutro, o mais curto de todos: {dīcere} é o sujeito e {cōnsilium} é o predicativo. A construção aparece sobretudo em cartas, em Autores clássicos, e o latim a trata como frase normal.

{Vēnī, vīdī, vīcī} «vim, vi, venci» — a leitura minimalista: três verbos, zero preposições, e a relação com o objeto fica por conta do contexto.

## O essencial

O latim não usa «que»: usa AcI. Depois de um verbo de dizer, saber, querer ou ordenar, o sujeito da oração indireta vai para o Acusativo e o verbo vira infinitivo. Quatro infinitivos, quatro relações com o momento: presente é simultâneo, perfeito é anterior, futuro é posterior, e o futuro do futuro é o que «está em curso». A regra do resto é uma só: nos depoentes, no AcI e no Acusativo com infinitivo, tudo o que for adjetivo concorda com o sujeito **do AcI**, não com o da oração principal.`),
  vocab: [
    V('dīcit', 'dīcō', 'diz (verbo rector do AcI)'),
    V('dīcere', 'dīcō', 'dizer, falar'),
    V('scient', 'sciō', 'sabem (verbo rector do AcI)'),
    V('scire', 'sciō', 'saber'),
    V('venīre', 'veniō', 'vir (inf. presente, simultâneo)'),
    V('vēnisse', 'veniō', 'ter vindo (inf. perfeito, anterior)'),
    V('ventūrum esse', 'veniō', 'haver de vir (inf. futuro, posterior)'),
    V('eum', 'is', 'ele (ac. sg. m.) — sujeito do AcI'),
    V('putāre', 'putō', 'achar, crer'),
    V('iubēre', 'iubeō', 'ordenar, mandar'),
    V('cupere', 'cupiō', 'querer (desejar)'),
    V('oportet', 'oportet', 'é necessário, é preciso (+ AcI)'),
    V('licet', 'liceō', 'é permitido (+ AcI)'),
    V('laborāre', 'laborō', 'trabalhar'),
    V('dīcitur', 'dīcō', 'se diz (passiva; rege AcI)'),
    V('necesse est', 'necesse', 'é necessário (impessoal + AcI)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Spēro eum vēnisse}, que tempo do infinitivo foi escolhido e por quê?'),
    options: [
      T('Perfeito: a chegada é anterior ao momento em que se espera'),
      T('Presente: a chegada é simultânea ao momento da esperança'),
      T('Futuro: a chegada ainda vai acontecer'),
      T('Imperfeito: a chegada estava em curso'),
    ],
    answer: 0,
    hint: T(
      'Regra §2: os quatro infinitivos dizem quando a ação acontece em relação ao verbo rector.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Diz que ele vem: dīcit eum ___'),
      answer: 'venire',
      hint: T('O infinitivo presente é o terceiro tema do modelo.'),
    },
    {
      kind: 'choose',
      prompt: T('Em {Dīcitur mulierēs fortēs esse}, com quem concorda {fortēs}?'),
      options: [
        T('Com {mulierēs} — o sujeito do AcI, não o da oração principal'),
        T('Com {dīcitur} — o verbo rector, que é a cabeça da frase'),
        T('Com o sujeito implícito da oração principal, que deve ser masculino'),
        T('Com ninguém: adjetivos não concordam dentro do AcI'),
      ],
      answer: 0,
      hint: T('Regra §4: no AcI, tudo concorda com o sujeito do AcI.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo rector à sua tradução'),
      pairs: [
        { a: T('oportet illum crēscere'), b: T('é necessário que ele cresça (impessoal)') },
        { a: T('iubet eōs īre'), b: T('ordena que eles vão') },
        { a: T('vult mē manēre'), b: T('quer que eu fique') },
        { a: T('putat mulierēs fortēs esse'), b: T('acha que as mulheres são fortes') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Traduza {oportet nos laborāre}.'),
      answer: 'it is necessary that we work',
      hint: T('{oportet} é impersonal, e o sujeito {nos} está em Acusativo por causa disso.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Todo verbo de dizer, saber, pensar, querer ou ordenar rege AcI: o sujeito vai para o Acusativo e o verbo vira infinitivo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Os quatro infinitivos dizem a relação com o momento: presente é simultâneo, perfeito é anterior, futuro é posterior, {passūrum esse} é ação em curso.',
      ),
    },
    {
      n: '3',
      text: T(
        'O futuro do AcI é o participio futuro ativo mais {esse}: {amātūrum esse}, {ventūrum esse}. O mesmo {amātūrum} serve para o futuro ativo.',
      ),
    },
    {
      n: '4',
      text: T(
        'No AcI, qualquer adjetivo ou particípio concorda com o sujeito do próprio AcI: {mulierēs fortēs esse} é plural feminino, não a concordância da oração principal.',
      ),
    },
    {
      n: '5',
      text: T(
        'Os impersonais {oportet}, {licet}, {necesse est} e {decet} regem AcI, e o sujeito fica em Acusativo: {oportet illum}, nunca {oportet ille}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O AcI não é uma oração, é a ausência de uma oração.'),
      text: T(`Repare no que o latim **não** faz: ele não repete o sujeito. Em {Dīcit {Petrus} {Paulus} {venīre}}, você tem {Petrus} e {Paulus} no Acusativo porque ambos fazem o verbo. Um substantivo que faz o infinitivo é o sujeito — e isso vale mesmo quando o substantivo está dentro do AcI: {putāre {sē} {sapientem esse} «achar que ele é sábio».

Isso explica por que o latim praticamente não tem orações indiretas com sujeito próprio. A Vulgata quase sempre escreve {Ut} mais subjuntivo quando o sujeito é preciso, e reserva o AcI para quando o sujeito já está no Acusativo por outro motivo. O grego, ao contrário, tem orações infinitivas com sujeito próprio, e é por isso que traduzir do grego para o latim exige uma decisão em quase toda frase.`),
    },
    {
      label: T('Como Jerónimo traduz a obrigação do grego'),
      text: T(`O grego antigo tem um verbo simples para «é preciso»: **ὀφείλω**. Ele diz {ὀφείλει ἡμᾶς ἀποδοῦναι} «devemos pagar», e a Vulgata escreve {oportet nos reddere} «é necessário que paguemos». Note a transformação: o verbo grego é pessoal e tem sujeito próprio em Nominativo; o latim é impersonal, com sujeito no Acusativo e infinitivo. O mesmo acontece com {δεῖ} «é preciso», que dá {oportet} ou {necesse est}.

A consequência prática é que a tradução do grego para o latim **força uma decisão sintática** em quase toda obrigação. Quem traduz {ὀφείλει} por {debemus} estás escribiendo latín arcaico; quem escreve {oportet} está fazendo o que Jerónimo fez em todo o Novo Testamento.`),
    },
  ],
  examples: [
    { text: 'dīcit eum venīre', gloss: T('diz que ele vem (inf. presente, simultâneo)') },
    { text: 'scient Deum esse', gloss: T('sabem que Deus é (AcI mínimo)') },
    { text: 'spēro eum vēnisse', gloss: T('espero que ele tenha vindo (inf. perfeito)') },
    { text: 'spēro eum ventūrum esse', gloss: T('espero que ele venha (inf. futuro)') },
    { text: 'iubet eōs īre', gloss: T('ordena que eles vão (Acusativo plural)') },
    { text: 'vult mē manēre', gloss: T('quer que eu fique (1.ª pessoa do AcI)') },
    {
      text: 'putat mulierēs fortēs esse',
      gloss: T('acha que as mulheres são fortes (adjetivo = sujeito do AcI)'),
    },
    { text: 'dīcitur eum vēnisse', gloss: T('se diz que ele veio (AcI passivo)') },
    {
      text: 'oportet illum crēscere',
      gloss: T('é necessário que ele cresça (impessoal, sujeito em Ac.)'),
    },
    { text: 'dīcere est cōnsilium', gloss: T('dizer é conselho (AcI neutro)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Os quatro infinitivos e a sua relação com o momento'),
      head: [T('Infinitivo'), T('Significado'), T('Relação temporal'), T('Exemplo')],
      rows: [
        ['amāre', 'amar', 'simultâneo', 'dīcit eum amāre = «diz que ele ama»'],
        ['amāvisse', 'ter amado', 'anterior', 'dīcit eum amāvisse = «diz que ele amou»'],
        [
          'amātūrum esse',
          'haver de amar',
          'posterior',
          'dīcit eum amātūrum esse = «diz que ele vai amar»',
        ],
        [
          'passūrum esse',
          'estar amando',
          'ação em curso',
          'dīcit eum passūrum esse = «diz que ele estará amando»',
        ],
        ['dīcere', 'dizer (neutro, sujeito)', '—', 'dīcere est cōnsilium = «dizer é conselho»'],
      ],
    },
    {
      caption: T('Tabela 2 — AcI ativo e AcI passivo'),
      head: [T('Tipo'), T('Forma'), T('Tradução'), T('Gloss')],
      rows: [
        ['Ativo', 'dīcit eum vēnisse', 'diz que ele veio', 'dīcere — verbo de dizer'],
        [
          'Ativo',
          'putat mulierēs fortēs esse',
          'acha que as mulheres são fortes',
          'putāre — verbo de opinião',
        ],
        [
          'Ativo impersonal',
          'oportet illum crēscere',
          'é necessário que ele cresça',
          'oportet — sem sujeito',
        ],
        ['Passivo', 'dīcitur eum vēnisse', 'se diz que ele veio', 'dīcere — forma passiva'],
        [
          'Passivo',
          'dīcitur virum fortem esse',
          'se diz que o homem é forte',
          'singular masculino',
        ],
        [
          'Passivo impersonal',
          'oportet illum crēscere',
          'é preciso que ele cresça',
          'o sujeito continua em Acusativo',
        ],
      ],
    },
  ],
};
