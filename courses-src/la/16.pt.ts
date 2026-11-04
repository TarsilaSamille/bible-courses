import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('O sistema passivo'),
  subtitle: T('{amatur, amābātur, amātus est} — quem faz, quem sofre, e como o latim diz'),
  section: T('Verbos, tempos e os primeiros textos'),
  body: C(`## O verbo que muda de voz

Cada verbo latino tem duas vozes, e elas não são um acréscimo decorativo: são dois jeitos de olhar a mesma ação. No **ativo**, o sujeito faz: {Deus creavit caelum}. No **passivo**, o sujeito sofre: {caelum {creātus est} a {Deō}} «o céu foi criado por Deus». Note que as duas frases dizem a mesma coisa e que a information muda de lugar: na ativa o agente é o sujeito; na passiva o agente vira uma expressão com preposição e Ablativo, e quem ocupa o assento do sujeito é a coisa que sofre a ação.

Essa inversão não é enfeite. Ela é a máquina que permite a alguém falar do que **sofreu** em vez do que **fez** — e é isso que permite contar uma história, porque a história do Novo Testamento é em boa parte a história de quem foi morto, preso, entregue e ressuscitado.

## O presente passivo

Na primeira conjugação, o presente passivo troca as terminações ativas por formas em {-r} com a vogal temática alongada:

| Pessoa | Ativo | Passivo |
|---|---|---|
| 1.ª sing. | amō | amor |
| 2.ª sing. | amās | amāris |
| 3.ª sing. | amat | amātur |
| 1.ª pl. | amāmus | amāmur |
| 2.ª pl. | amātis | amāminī |
| 3.ª pl. | amant | amantur |

O mecanismo é elegantemente econômico: as quatro terminações passivas {-r, -ris, -tur, -mur, -minī, -ntur} servem para **todas as quatro conjugações**. {monētur} «é aconselhado» e {regitur} «é governado» têm exatamente o mesmo {-tur}. A 2.ª do plural tem duas formas, {amāminī} e {amātor} «sede amado», e a Vulgata prefere a primeira.

## Os outros tempos do sistema

O resto do passivo se constrói com dois sufixos nuevos, e a regra é a mesma para os quatro tempos principais:

- **Imperfeito**: {amābar} — a vogal temática mais {-bar};
- **Futuro**: {amābor} — a vogal temática mais {-bor}, e o futuro ativo correspondente é {amābo};
- **Perfeito**: {amātus sum} — o **particípio perfeito** mais {sum};
- **Mais-que-perfeito**: {amātus eram} — o mesmo participio mais {eram}.

O {sum} é a peça-chave e merece atenção. {Amātus est} é o mesmo verbo {sum} que você conhece do capítulo 2: {est} é o verbo *ser* no presente, {erant} é o *ser* no imperfeito. O latim não tem um auxiliar separado para o passivo — ele **empresta o verbo {sum}** e coloca o particípio na frente. A segunda pessoa do plural do futuro do mesmo sistema é {amāminī} «vos sereis amados», com o {minī} que já era da voz passiva.

## O agente: {ā} e {ab}

No passivo, quem faz a ação quase nunca é o sujeito, porque o sujeito é justamente quem a sofre. O agente pessoal entra por uma preposição assimilada: {ā}, que vira {ab} antes de consoante — {ā {Deō}} «por Deus», {ab {hūmānīs}} «pelos homens», {ab {Iūdae}} «pelos judeus», {ab {Apollōne}} «por Apolo». Em latim cristão, essa construção é tão comum que aparece em quase toda narração:

{Natus est {Iesus} in {Bethleēhem} Iudaeae} «Jesus nasceu em Belém da Judeia» (Mateus 2:1) — a preposição {in} com lugar, o Genitivo {Iudaeae} como «da Judeia».

{Traditus est {traditoribus} suīs} «foi entregue aos seus próprios traidores» (Mateus 26:4) — o agente ({traditoribus}, com {ā} absorvido na palavra) e o substantivo {traditōres} «traidores»:

O que {ā} **não** faz é levar instrumento ou meio. Isso é Ablativo puro, sem preposição: {gladiō {occīsus est}} «foi morto com uma espada», {vēlīs {ventīs est}} «foi empurrado com remos», {sermōne {falsus est}} «foi enganado com palavras». A distinção é ritual e não é decorativa: em uma oração litúrgica é comum repetir que a crucificação foi feita por um poder humano e por um poder divino, cada um com sua preposição.

## Deponentes: a forma mente

Muitos verbos têm **forma passiva e sentido ativo**. São os depoentes, e você já os encontrou: {loquor, loquor, locūtus sum} «falar», {nascor, nascis, nātus sum} «nascer», {mŏror, mŏris, mortuus sum} «morrer», {fruor, fruis, frūctus sum} «usufruir», {orior, oris, ortus sum} «levantar-se».

O ponto crucial é o **particípio**: nos depoentes, o participio é **sempre ativo**. {Nātus est} significa «nasceu», nunca «foi nascido por alguém». Por isso a frase {Natus est {Christus}} (Mateus 1:1) não precisa de agente — se o latim quisesse dizer «foi gerado por Deus» usaria {genitus est a {Deō}}.

## O passivo é mais comum que parece

Antes de ver os exemplos, vale um dado: no latim do Novo Testamento, cerca de um em cada quatro verbos está na voz passiva. Isso não é estilo bizantino — é a herança grega, e a Vulgata muitas vezes **aumenta** o número, porque o grego já usava o passivo por convenção e Jerónimoscar. Em {Ego sum via, veritas et vita} não há passivo, mas em {Nemo videt Deum} «ninguém vê Deus» o verbo está no passivo.

Vale notar também: o latim distingue **passivo de estado** de **passivo de ação**, e nem sempre a tradução mostra a diferença. {Sapiēns est} «é sábio» é estado (ser SABio); {Amātus est} «é amado» pode ser estado (é amado, e ponto) ou ação (alguém o ama). Em latim, se há agente, é ação; se não há, o contexto decide.

## Leitura

{Nato {Iesū} in {Bethleēhem}}, «nascido Jesus em Belém» — forma passiva de {nāscor}, que é depoente, e o participio {nātus} mais {est} é o **perfeito**, a ação inteira vista do fim. A preposição {in} com o lugar, o Genitivo {Iudaeae}:

{Passus est sub {Pōntio} {Pilāto}} «sofreu sob Poncio Pilatos» (Marcos 15:39) — {passus} «sofrido» é o participio perfeito de {patior, patī, passus sum} «sofrer», também depoente. O ablativo {Pōntio {Pilāto}} é o instrumento ou a esfera em que o sofrimento ocorreu.

{Crucifixus est sub {Pōntio} {Pilāto}} «foi crucificado sob Poncio Pilatos» (Marcos 15:24) — agora sim, verbo transitivo comum, {crucīfīgō} «crucificar», em passivo: o sujeito é Cristo, o agente {Pōntius Pilātus} está no Ablativo, e a preposição {sub} com Ablativo significa «sob a autoridade de».

{Vocātus est {Zachariās} angelō} «Zacarias foi chamado por um anjo» (Lucas 1:19) — {vocātus est} é o padrão mais comum de passivo perfeito na Vulgata: participio mais {est}, e o agente em Ablativo sem preposição explícita quando o contexto já deixou claro quem é.

## O essencial

A voz passiva troca o sujeito pelo paciente e manda o agente para um Ablativo com {ā} ou {ab}. As terminações {-tur, -ris, -mur, -ntur} servem às quatro conjugações, o futuro e o imperfeito ganham {-bor} e {-bar}, e o perfeito é sempre **particípio mais {sum}**. E atenção aos depoentes: a forma é passiva, o sentido é ativo, e o particípio deles é ativo — {nātus est} é «nasceu», não «foi nascido».`),
  vocab: [
    V('amor', 'amo', 'sou amado (pres. pass. 1.ª sg.)'),
    V('amātur', 'amo', 'é amado (3.ª sg.)'),
    V('amāris', 'amo', 'és amado (2.ª sg.)'),
    V('amāminī', 'amo', 'sereis amados (2.ª pl. fut.)'),
    V('amābar', 'amo', 'era amado (imperf. pass.)'),
    V('amābor', 'amo', 'serei amado (fut. pass.)'),
    V('amātus est', 'amo', 'foi amado (perfeito passivo)'),
    V('monētur', 'moneo', 'é aconselhado'),
    V('ā', 'a', 'por (agente no pessoal); {ab} ante consoante'),
    V('a', 'a', 'a, para (+ ac.) / de, por (+ abl.)'),
    V('gladiō', 'gladius', 'com uma espada (instr. abl.)'),
    V('occīsus est', 'occīdo', 'foi morto (perfeito passivo)'),
    V('crucifixus est', 'crucīfīgo', 'foi crucificado (perfeito passivo)'),
    V('nātus est', 'nascor', 'nasceu (deponente: forma passiva, sentido ativo)'),
    V('passus est', 'patior', 'sofreu (deponente)'),
    V('vocātus est', 'voco', 'foi chamado (perfeito passivo)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {caelum creātus est ā Deō}, qual é a função de {ā Deō}?'),
    options: [
      T('Agente pessoal: indica quem criou o céu'),
      T('Instrumento: indica com o que o céu foi criado'),
      T('Causa: indica por que o céu foi criado'),
      T('Tempo: indica quando o céu foi criado'),
    ],
    answer: 0,
    hint: T(
      'Regra §4: {ā}/{ab} + Ablativo = agente pessoal; instrumento é Ablativo sem preposição.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Imperfeito passivo de {amare}: amāba_'),
      answer: 'r',
      hint: T('O imperfecto passivo é a vogal temática mais {-bar}.'),
    },
    {
      kind: 'choose',
      prompt: T('O que {Natus est Christus} significa?'),
      options: [
        T('«Cristo nasceu» — {nascor} é depoente: forma passiva, sentido ativo'),
        T('«Cristo foi nascido por alguém» — o {ā} está implícito'),
        T('«Cristo foi dado à luz por uma parteira»'),
        T('«Cristo foi punished», por {pāsio} com sentido passivo'),
      ],
      answer: 0,
      hint: T('Regra §5: nos depoentes, o particípio é ativo.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o tempo à sua construção passiva'),
      pairs: [
        { a: T('amātur'), b: T('presente: vogal temática + {-tur}') },
        { a: T('amābar'), b: T('imperfeito: vogal temática + {-bar}') },
        { a: T('amābor'), b: T('futuro: vogal temática + {-bor}') },
        { a: T('amātus sum'), b: T('perfeito: particípio + {sum}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Traduza {gladiō occīsus est}.'),
      answer: 'he was killed with a sword',
      hint: T('Instrumento é Ablativo sem preposição: {gladiō} é o meio, não o agente.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A voz passiva troca o sujeito pelo paciente: o agente vai para uma expressão própria e o verbo é o mesmo da ativa.',
      ),
    },
    {
      n: '2',
      text: T(
        'As terminações passivas {-r, -ris, -tur, -mur, -minī, -ntur} servem às quatro conjugações: {monētur}, {regitur}, {auditur} «é ouvido».',
      ),
    },
    {
      n: '3',
      text: T(
        'Imperfeito e futuro passivo acrescentam {-bar} e {-bor} à vogal temática: {amābar}, {amābor}. O futuro ativo é {amābo}.',
      ),
    },
    {
      n: '4',
      text: T(
        'O agente pessoal é {ā} ({ab} ante consoante) mais Ablativo; o instrumento é Ablativo sem preposição. {Gladiō occīsus est} é morto com uma espada; {ā Iudāis occīsus est} é morto pelos judeus.',
      ),
    },
    {
      n: '5',
      text: T(
        'Nos depoentes, a forma é passiva e o particípio é ativo: {nātus est} é «nasceu», {passus est} é «sofreu».',
      ),
    },
  ],
  notes: [
    {
      label: T('Um em cada quatro verbos.'),
      text: T(
        'Se você abrir a Vulgata e procurar um verbo a cada cinco palavras, um deles será passivo. A causa é o grego: o grego koinoi tem o passivo como recurso padrão para frases como «é dito» (λέγεται) e «se encontra» (εὑρίσκεται), e a Vulgata traduz. {Traditus est} «foi entregue» é um presente grego traduzido no perfeito latim, o que produz uma leitura estranhamente intensa: o nativo lê cada {est} como um ponto, e nada continua. Vale guardar os verbos mais comuns do passivo perfeito — {dīcitur} «se diz», {nōtur} «se sabe», {vocātus est} «é chamado» — porque eles organizam a linguagem das orações litúrgicas e das notícias.',
      ),
    },
    {
      label: T('Contra a ideia de que o latim é uma língua passiva.'),
      text: T(
        'Diz-se com frequência que o latim é uma língua de sujeito passivo, quase oposta ao grego de sujeito ativo. É verdade em número, mas a leitura moderna desarmou essa oposição: a Vulgata é um texto **devocional**, não um relatório, e quem ora precisa deAgent humano na frase. Um{homem} não «éclubs salvo» por acaso: ele «é salvo {a {Deō}}». O ablativo de agente com {ā} é justamente o que impede o traduzido moderno de virar uma afirmação impessoal. Onde o latim diz {occīsus est ā Iudāis}, o português não tem uma construção inteira; precisa de «foi morto pelos judeus» ou «os judeus o mataram». Toda a agency está na preposição.',
      ),
    },
  ],
  examples: [
    { text: 'caelum creātus est ā Deō', gloss: T('o céu foi criado por Deus (agente com ā)') },
    { text: 'amātur', gloss: T('é amado — presente passivo, {-tur}') },
    { text: 'amābar', gloss: T('era amado — imperfeito, {-bar}') },
    { text: 'amābor', gloss: T('serei amado — futuro, {-bor}') },
    { text: 'amātus est', gloss: T('foi amado — particípio + {est}') },
    {
      text: 'Natus est Iesus in Bethleēhem Iudaeae',
      gloss: T('Jesus nasceu em Belém da Judeia (Mt 2:1)'),
    },
    {
      text: 'Traditus est traditoribus suis',
      gloss: T('foi entregue aos seus próprios traidores (Mt 26:4)'),
    },
    {
      text: 'Crucifixus est sub Pōntio Pilāto',
      gloss: T('foi crucificado sob Poncio Pilatos (Mc 15:24)'),
    },
    { text: 'Passus est sub Pōntio Pilāto', gloss: T('sofreu sob Poncio Pilatos (Mc 15:39)') },
    {
      text: 'gladiō occīsus est',
      gloss: T('foi morto com uma espada (instrumento, sem preposição)'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Voz ativa e passiva de {amare} (1.ª conjugação)'),
      head: [
        T('Pessoa'),
        T('Pres. ativo'),
        T('Pres. passivo'),
        T('Imperf. passivo'),
        T('Fut. passivo'),
      ],
      rows: [
        ['1.ª sing.', 'amō', 'amor', 'amābar', 'amābor'],
        ['2.ª sing.', 'amās', 'amāris', 'amābāris', 'amāberis'],
        ['3.ª sing.', 'amat', 'amātur', 'amābātur', 'amābitur'],
        ['1.ª pl.', 'amāmus', 'amāmur', 'amābāmur', 'amābimur'],
        ['2.ª pl.', 'amātis', 'amāminī', 'amābāminī', 'amābiminī'],
        ['3.ª pl.', 'amant', 'amantur', 'amābantur', 'amābuntur'],
      ],
    },
    {
      caption: T('Tabela 2 — O perfeito passivo como {particípio} + {sum}'),
      head: [T('Tempo'), T('Forma'), T('Português'), T('Espanhol')],
      rows: [
        ['Presente', 'amātus sum', 'sou amado', 'soy amado'],
        ['Imperfeito', 'amātus eram', 'era amado', 'era amado'],
        ['Perfeito', 'amātus fuī', 'fui amado', 'fui amado'],
        ['Mais-que-perfeito', 'amātus fueram', 'tinha sido amado', 'había sido amado'],
        ['Futuro', 'amātus erō', 'serei amado', 'seré amado'],
        ['Condicional', 'amātus sim', 'seria amado', 'sería amado'],
      ],
    },
  ],
};
