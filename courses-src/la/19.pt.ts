import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('Gerúndio e gerundivo'),
  subtitle: T('{amandī, amandus} — o infinitivo declinado e o particípio da obrigação'),
  section: T('O ablativo absoluto'),
  body: C(`## O gerúndio é um infinitivo declinado

O latim não tem «gerúndio» no sentido romance: o que os gramáticos chamam de gerúndio é o **infinitivo declinado**, e por isso ele tem quatro casos e apenas número singular. A {amandī} é o gerúndio; a {amandum} é o infinitivo.

| Caso | Forma | Valor típico | Exemplo |
|---|---|---|---|
| genitivo | \`{amandī}\` | complemento de substantivo | \`{ars amandī}\` «a arte de amar» |
| dativo | \`{amandō}\` | finalidade antiga, sujeito | \`{est mihi amandum}\` «tenho de amar» |
| acusativo | \`{amandum}\` | com preposição | \`{ad amandum}\` «para amar» |
| ablativo | \`{amandō}\` | meio ou simultâneo | \`{cum docendo}\` «ao ensinar» |

Compare: {amō} «eu amo», {amāre} «amar» (infinitivo), {amandī} «de amar» (gerúndio), {amāns, amantis} «amando» (particípio). São quatro coisas distintas, e o latim trata as quatro com cuidado.

## O gerundivo: FUTURE PASSIVO PARTICIPIAL

O gerundivo é o particípio futuro passivo em {-ūndus, -a, -um}: {amandus, -a, -um} «que deve ser amado», {legendus, -a, -um} «que deve ser lido», {faciendus} «que deve ser feito». Sozinho, sem {esse}, ele funciona como adjetivo.

Com {esse}, a construção é o **gerundivo impersonal**: o sujeito fica em dativo e o gerundivo concorda com o substantivo que o rege.

| Pessoa | Forma | Glosa |
|---|---|---|
| 3.ª sing. | \`{amandum est}\` | «deve ser amado» |
| 3.ª pl. | \`{amanda sunt}\` | «devem ser amados» |
| com dativo | \`{mihi legenda est}\` | «tenho de ler» |

Repare na concordância: {legendus} com {liber} (masc. sing.) dá {liber legendus est} «o livro deve ser lido»; o mesmo gerundivo com {lībra} dá {lībra legenda est} «o livro (f.) deve ser lido».

## Gerundivo impersonal × gerundivo personal

- **Impessoal** (o mais comum na Vulgata): {portāre est mihi} «tenho de levar».
- **Pessoal**: {puerī portāre discunt} «os meninos aprendem a levar», {nōn est tibi currere in stadiō} «não precisas correr no estádio».

A diferença é a mesma que existe entre «tenho de ler» e «o livro deve ser lido»: a primeira esvazia o sujeito, a segunda o traz de volta.

## Gerundivo com finalidades

O gerundivo expressa finalidade sem {ut}: {flōrida sunt causa legenda esse} = «as flores são para serem lidas» — é literalmente a Vulgata, Provérbios 1:1: {flōrida sunt acta Solomonis, nōn ita in parabolis, sed et in doctissimis īnstitūtīs} «flores são as ações de Salomão: não em parábolas, mas emcando mais sabios».

Com o substantivo no gerúndio, o sentido é ainda mais direto: {nihil tam crassum neque tam contrārium sensūs nostrī, nisi orātōrīs īnventum} «nada tão tosco e tão contrário aos nossos sentidos, se não foi inventado pelo orador».

## Aplicação na Vulgata

Em Efésios 2:10, {ipsius enim sumus factura, in Christō Iesū ad bonum opus ēlabōrātos} «somos obra sua, criados em Cristo Jesus para as boas obras»: o gerundivo {ēlabōrātos} com {ad} marca finalidade sem necessidade de {ut}.

Em 1 Timóteo 2,4, qui vult omnes hominēs salvōs fieri et ad cognitionem vēritatis venīre — o verbo {fierī} é um infinitivo de finalidade regido por {vult}.

## Resumo

| Forma | Categoria | Sinopse | Exemplo |
|---|---|---|---|
| \`{amāre}\` | infinitivo | amar | \`{amāre volō}\` «quero amar» |
| \`{amandī}\` | gerúndio | de amar | \`{amandī mē miserēre\` |
| \`{amāns}\` | particípio presente | amando | \`{amāns legit}\` «lendo» |
| \`{amandus}\` | gerundivo | que deve ser amado | \`{amanda esse\` |

O gerúndio é a peça mais flexível do sistema: substitui um AcI (§16), nomeia a finalidade e, no ablativo absoluto (§17), chega a fazer o papel de predicado de uma oração inteira.`),
  vocab: [
    V('amare', 'amo', 'amar (infinitivo)'),
    V('amandus', 'amo', 'que deve ser amado (gerundivo)'),
    V('amans', 'amo', 'amando (particípio presente)'),
    V('amatus', 'amo', 'amado (particípio passado)'),
    V('legendus', 'lego', 'que deve ser lido (gerundivo)'),
    V('faciendus', 'facio', 'que deve ser feito (gerundivo)'),
    V('docere', 'doceo', 'ensinar'),
    V('discere', 'disco', 'aprender'),
    V('portare', 'porto', 'levar, carregar'),
    V('salvus', 'salvus', 'salvo, são'),
    V('veritas', 'veritas', 'verdade'),
    V('cognitio', 'cognitio', 'conhecimento'),
    V('opus', 'opus', 'obra, trabalho'),
    V('parabola', 'parabola', 'parábola'),
    V('miserere', 'miseror', 'ter dó, ter pena'),
    V('Iesus', 'Iesus', 'Jesus'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {mihi legenda est}, o que está em dativo?'),
    options: [
      T('O objeto direto de {legere}'),
      T('O sujeito do gerundivo impessoal'),
      T('O agente da passiva'),
      T('A preposição regida pelo verbo'),
    ],
    answer: 1,
    hint: T('Regra §2: no gerundivo impessoal o sujeito é dativo.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Gerúndio de {legere}: legend_ («de ler»)'),
      answer: 'legendī',
      hint: T('O gerúndio é o infinitivo no genitivo: -ī.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual das formas é um gerundivo?'),
      options: [
        T('{amandī} «de amar»'),
        T('{amāns} «amando»'),
        T('{amātūrus} «que amará»'),
        T('{amandus} «que deve ser amado»'),
      ],
      answer: 3,
      hint: T('Regra §1: o gerundivo é o participio futuro passivo em -ndus.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma latima à sua categoria'),
      pairs: [
        { a: T('{amāre}'), b: T('infinitivo') },
        { a: T('{amandī}'), b: T('gerúndio (infinitivo declinado)') },
        { a: T('{amāns}'), b: T('particípio presente') },
        { a: T('{amandus}'), b: T('gerundivo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em {ad bonum opus ēlabōrātos} (Ef 2:10), o que {-ōs} indica?'),
      options: [
        T('Que é um dativo de agente'),
        T('Que é um gerundivo com finalidade, sem {ut}'),
        T('Que é o agente da passiva'),
        T('Que é um ablativo absoluto'),
      ],
      answer: 1,
      hint: T('Regra §4: o gerundivo com propósito dispensa o ut.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O gerúndio é o infinitivo declinado: {amandī}, {amandō}, {amandum}, {amandō}. Só existe no singular.',
      ),
    },
    {
      n: '2',
      text: T(
        'No gerundivo impessoal o sujeito fica em dativo e {esse} é impessoal: {portāre est mihi} «tenho de levar».',
      ),
    },
    {
      n: '3',
      text: T(
        'O gerundivo concorda com o substantivo que o rege: {liber legendus} «o livro que deve ser lido», {lībra legenda} «o livro (f.) que deve ser lido».',
      ),
    },
    {
      n: '4',
      text: T(
        'O gerundivo com {ad} e purpose dispensa {ut}: {ad bonum opus ēlabōrātos} «para as boas obras».',
      ),
    },
    {
      n: '5',
      text: T(
        'O gerúndio no genitivo substitui o AcI: {spes salūtis vestrae} «esperança de que haveis sido salvos» em vez de {spes vōs salūtōs esse}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que existem quatro palavras'),
      text: T(
        'O latim distingue o que o português e o espanhol fundiram num só verbo. {amāre} é o infinitivo (ação inteira), {amandī} nomeia a ação como substantivo («de amar»), {amāns} descreve o sujeito enquanto age, e {amandus} descreve o que precisa ser feito. Traduzir tudo por «amar» apaga a informação que o latim está marcando.',
      ),
    },
    {
      label: T('Provérbios 1:1 na Vulgata'),
      text: T(
        'A Vulgata abre Provérbios com {flōrida sunt acta Solomonis, nōn ita in parabolis, sed et in doctissimis īnstitūtīs} — «flores são as obras de Salomão: não em parábolas, mas sim nas «ensinos mais sabios». É a primeira frase do livro, e ela serve de definição para o método: o latim prefere o termo técnico ao termo poético.',
      ),
    },
  ],
  examples: [
    { text: 'amāre', gloss: T('amar (infinitivo)') },
    { text: 'amandī', gloss: T('de amar (gerúndio, genitivo)') },
    { text: 'amandō', gloss: T('amando; ao amar (ablativo ou dativo)') },
    { text: 'amandum', gloss: T('para amar; que deve ser amado') },
    { text: 'amāns', gloss: T('amando (particípio presente, com o sujeito)') },
    { text: 'amandus est', gloss: T('deve ser amado (gerundivo impessoal)') },
    { text: 'mihi legenda est', gloss: T('tenho de ler (gerundivo com dativo)') },
    { text: 'liber legendus est', gloss: T('o livro deve ser lido (gerundivo pessoal)') },
    { text: 'ad bonum opus ēlabōrātos', gloss: T('para as boas obras (gerundivo de finalidade)') },
    { text: 'cum docendo', gloss: T('ao ensinar, no ato de ensinar') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — O gerúndio (infinitivo declinado) de {amandus}'),
      head: [T('Caso'), T('Forma'), T('Uso'), T('Exemplo')],
      rows: [
        ['Nominativo', '—', T('não existe'), '—'],
        ['Genitivo', 'amandī', T('com substantivo'), '{ars amandī}'],
        ['Dativo', 'amandō', T('sujeito do gerundivo'), '{amandum est mihi}'],
        ['Acusativo', 'amandum', T('com preposição'), '{ad amandum}'],
        ['Ablativo', 'amandō', T('meio, circunstância'), '{cum docendo}'],
      ],
    },
    {
      caption: T('Tabela 2 — Gerundivo impessoal e pessoal'),
      head: [T('Tipo'), T('Estrutura'), T('Glosa')],
      rows: [
        [T('impessoal'), '{amandum est} (sem sujeito expresso)', T('«deve ser amado»')],
        [T('impessoal com dativo'), '{mihi legenda est}', T('«tenho de ler»')],
        [T('pessoal'), '{liber legendus est}', T('«o livro deve ser lido»')],
        [T('pessoal sem essere'), '{nōn est tibi currere}', T('«não precisas correr»')],
      ],
    },
  ],
};
