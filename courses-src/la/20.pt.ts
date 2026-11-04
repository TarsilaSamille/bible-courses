import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('As condicionais'),
  subtitle: T('{sī, nisi}: tempo, modo e modalidade'),
  section: T('O ablativo absoluto'),
  body: C(`## {sī} e {nisi}

A conjunção {sī} «se» introduz uma proposição condicional; {nisi} significa «se não», salvo quando o sentido é «a menos que». A escolha do modo e do tempo na proposição introdutora **não** é uma tradução mecânica do «se» português: o latim distribui razão temporal e a modalidade por um sistema de cinco tipos.

| Tipo | Protótipo | Glosa | Verbo principal |
|---|---|---|---|
| real, presente | \`{sī vēnit}\` | «se vem» | indicativo |
| real, passado | \`{sī vēnit}\` | «se veio» | {laetātus sum} |
| ideal, presente | \`{sī rōgēs}\` | «se pedires» | {rogō} |
| ideal, perfeito | \`{sī rōgāveris}\` | «se tiveres pedido» | {rogō} |
| irreal, presente | \`{sī scīrēs}\` | «se soubesses» | {dicam} |
| irreal, passado | \`{sī vēnisset}\` | «se tivesse vindo» | {dixissem} |

A lógica é esta: o **indicativo** trata a condição como um fato, o que eu assumo ou verifico; o **subjuntivo** a trata como uma hipótese mental, que eu(coloco ou nego). O tempo **subjuntivo** presente acrescenta a ideia de «tentativa» ou «expectativa» ({rogēs} «tentarás pedir»), e o **subjuntivo perfeito** acrescenta a ideia de «resultado porvir» ({rōgāveris} «terás pedido»).

## Condicional real

É a mais simples: {sī} + indicativo. Vale para presente e para passado, e o verbo principal fica no indicativo.

- {sī scīs, vēnit?} «se souberes, vem?»
- {sī vēnit, laetātus sum} «se ele veio, estou contente»
- {sī Deus vult, omnia possunt} «se Deus quer, tudo é possível»

A Vulgata usa muito essa construção em Ezequiel: {sī vēnerit bellum, et multiplicābitur} «se vier a guerra, e ela se multiplicará».

## Condicional ideal

{subjuntivo} presente ou perfeito. O falante supõe a condição como um ato deliberado ou desejado:

- {sī rōgēs, petam} «se pedires, pedirei»
- {sī crēderitis, videbitis} «se crerdes, vereis» — é o futuro de Nicodemos em João 3:36
- {sī scīvēritis, cognoscētis} «se souberdes, conhecereis»

O perfeito {crēderitis} é o mais curioso: a condição é anterior, a consequência é posterior.

## Condicional irreal

{Imperfecto} ou {pluperfeito} subjuntivo. A condição é apresentada como não cumprida, e por isso o verbo principal quase sempre também é subjuntivo ou {dicerem}.

- {sī scīrēs, omnia dīcerem} «se soubesses, tudo te diria» (imaginação do irreferido)
- {sī vēnisset, laetātus essem} «se tivesse vindo, eu teria ficado contente»
- {nisi Dominus fuisset in nobis, perīssēmus...} «se o Senhor não estivesse connosco, teríamos perecido» (Salmo 123:6)

É a construção mais patética do latim: quem fala já sabe que a condição não se cumpriu.

## {Nisi} e {nisi...}

{nisi} pode ser tanto «senão» condicional quanto «a menos que» (= {nisi} = {si nōn}).

- {nē quidem moritur, nisi expellātur} «não morre, a menos que seja expulso»
- {nisi Dominus in fovea fuerit, nōn erāmus ei creditūrī} «se o Senhor não tivesse estado no poço, não teríamos acreditado nele» (Gênesis 37:15)

## Aplicação na Vulgata

Em João 15:24, {mē nōbis loquente, et expellente eōs de domō nostrā, nōn venisset super eōs, ultra eōs nōn fecissent} «se eu não lhes tivesse falado e não os tivesse expulso de nossa casa, não teriam pecado». Note a construção {nōn... nōn...}: duas negações, o que produz um «duplo negativo» lúcido.

Em Provérbios 3:5, {Confide in Domino et fac bonum: et dīreget semitas tuās} é um imperativo, mas o versículo seguinte mostra o condicional ideal: {sī tibi placeant iustitiae meae} «se te agradarem as minhas justiças».

## Quadro-síntese

| Conjunção | Modo | Tempo | Uso típico |
|---|---|---|---|
| \`{sī}\` | indicativo | qualquer | fato suposto como real |
| \`{sī}\` | subjuntivo | presente | tentativa, pedido, expectativa |
| \`{sī}\` | subjuntivo | perfeito | resultado anterior |
| \`{sī}\` | subjuntivo | imperfeito | hipótese não cumprida |
| \`{sī}\` | subjuntivo | pluperfeito | arrependimento do irreferido |
| \`{nisi}\` | qualquer | qualquer | «se não» ou «a menos que» |
| \`{sī nōn}\` | qualquer | qualquer | «se não», mais explícito |`),
  vocab: [
    V('si', 'si', 'se'),
    V('nisi', 'nisi', 'se não; a menos que'),
    V('rogare', 'rogo', 'pedir'),
    V('roges', 'rogo', 'pedes (subj.pres.)'),
    V('rogaveris', 'rogo', 'tiveres pedido (subj. perf.)'),
    V('scire', 'scio', 'saber'),
    V('scires', 'scio', 'soubesses (subj. imp.)'),
    V('venire', 'venio', 'vir'),
    V('venisset', 'venio', 'tivesse vindo (subj. pluperf.)'),
    V('laetatus', 'laetor', 'contente (part. pass.)'),
    V('credere', 'credo', 'crer'),
    V('perire', 'pereo', 'perecer'),
    V('Dominus', 'Dominus', 'o Senhor'),
    V('bellum', 'bellum', 'guerra'),
    V('poena', 'poena', 'castigo, penalidade'),
    V('virtus', 'virtus', 'força, virtude'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {sī vēnisset, laetātus essem}, que construção é essa?'),
    options: [
      T('Condicional real, com indicativo na condição'),
      T('Condicional ideal, com subjuntivo presente'),
      T(
        'Condicional irreal, com subjuntivo pluscuamperfecto na condição e subjuntivo no verbo principal',
      ),
      T('Condicional final com {ut}'),
    ],
    answer: 2,
    hint: T('Regra §3: {vēnisset} é o subjuntivo pluperfeito do irreferido.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Condicional irreal: sī vēnisset, laetātus ess_'),
      answer: 'em',
      hint: T('O verbo principal também vai em subjuntivo: laetātus essem.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual é o mais natural modo de dizer «se eu soubesse»?'),
      options: [T('{sī sciō}'), T('{sī scīrem}'), T('{sī scīrēs}'), T('{sī scīverim}')],
      answer: 2,
      hint: T('Regra §3: o irreal presente usa o subjuntivo imperfecto.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada estrutura ao seu tipo de condicional'),
      pairs: [
        { a: T('{sī vēnit}'), b: T('real') },
        { a: T('{sī rōgēs}'), b: T('ideal (presente)') },
        { a: T('{sī rōgāveris}'), b: T('ideal (perfeito)') },
        { a: T('{sī vēnisset}'), b: T('irreal (passado)') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em {nisi Dominus fuisset in nobis, perīssēmus} (Sl 123:6), {nisi} significa...'),
      options: [
        T('«senão» (condicional)'),
        T('«a menos que» (concessivo)'),
        T('«porque» (causal)'),
        T('«quando» (temporal)'),
      ],
      answer: 0,
      hint: T('Regra §4: {nisi} = {si nōn} quando a condição é contrafactual.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Sī} + indicativo = condicional real: a condição é tratada como fato, no presente ou no passado.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Sī} + subjuntivo presente = condicional ideal: a condição é um ato que o falante pretende ou espera ({rōgēs} «se pedires»).',
      ),
    },
    {
      n: '3',
      text: T(
        '{Sī} + subjuntivo imperfeito ou pluperfeito = condicional irreal: a condição é declarada não cumprida, e o verbo principal vai também em subjuntivo.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Nisi} = {si nōn}: em orações contrafactuais vale «se não»; com verbo de gostar em sentido concessivo, vale «a menos que».',
      ),
    },
    {
      n: '5',
      text: T(
        'O tempo do verbo principal acompanha o tipo: presente nas reais, futuro nas ideais, subjuntivo ou {dicerem} nas irreais.',
      ),
    },
  ],
  notes: [
    {
      label: T('O subjuntivo não é o «se»'),
      text: T(
        'Um aluno de origem romanceira costuma traduzir {sī rōgēs} por «se pido» e {sī rōgāveris} por «si he pedido». O latim diz outra coisa: «se tentarás pedir» e «se tiveres pedido». O tempo subjuntivo não aponta para o passado nem para o presente, mas para a **atitude** do falante: presente = intenção, perfeito = resultado, imperfeito = hipótese falsa, pluperfeito = arrependimento.',
      ),
    },
    {
      label: T('Salmo 123:6 na Vulgata'),
      text: T(
        'O verso mais famoso da Vulgata em modo subjuntivo é {Nisi Dominus fuisset in nobis, perīssēmus iam} — «se o Senhor não tivesse estado conosco, já teríamos perecido». O pluperfeito {fuisset} coloca a condição no passado impossível, e o imperfeito {perīssēmus} na segunda parte reforça a ideia de resultado frustrado. É a construção que os autores chamam de «irreal present» com {nisi}.',
      ),
    },
  ],
  examples: [
    { text: 'sī vēnit', gloss: T('se vem, se vier (condicional real)') },
    { text: 'sī vēnit, laetātus sum', gloss: T('se veio, estou contente') },
    { text: 'sī rōgēs, petam', gloss: T('se pedires, pedirei') },
    { text: 'sī crēderitis, videbitis', gloss: T('se crerdes, vereis') },
    { text: 'sī scīrēs', gloss: T('se soubesses (irreal presente)') },
    { text: 'sī vēnisset, laetātus essem', gloss: T('se tivesse vindo, eu teria ficado contente') },
    { text: 'nisi Dominus fuisset in nobis', gloss: T('se o Senhor não estivesse connosco') },
    { text: 'nisi expellātur', gloss: T('a menos que seja expulso') },
    { text: 'sī tibi placeant iustitiae meae', gloss: T('se te agradarem as minhas justiças') },
    { text: 'sī vēnerit bellum', gloss: T('se vier a guerra') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Os cinco tipos de condicional'),
      head: [T('Tipo'), T('Proposição condicional'), T('Glosa'), T('Atitude do falante')],
      rows: [
        ['real', '{sī crēdis}', T('«se crees»'), T('fato assumido')],
        ['ideal', '{sī rōgēs}', T('«se pedires»'), T('intenção')],
        ['ideal', '{sī rōgāveris}', T('«se tiveres pedido»'), T('resultado futuro')],
        ['irreal', '{sī scīrēs}', T('«se soubesses»'), T('hipótese falsa')],
        ['irreal', '{sī vēnisset}', T('«se tivesse vindo»'), T('arrependimento')],
      ],
    },
    {
      caption: T('Tabela 2 — {Sī} e {nisi} na Vulgata'),
      head: [T('Passagem'), T('Texto'), T('Modo')],
      rows: [
        [T('Gn 37:15'), '{nisi Dominus in fovea fuerit}', T('subj. pluperfeito')],
        [T('Sl 123:6'), '{nisi Dominus fuisset in nobis}', T('subj. pluperfeito')],
        [T('Jo 3:36'), '{sī crēderitis, videbitis}', T('subj. perfeito + fut.')],
        [T('Jo 15:24'), '{sī ... nōn fecissent}', T('subj. pluperfeito')],
        [T('Ez 37:10'), '{sī ... multiplicābitur}', T('indicativo + fut.')],
      ],
    },
  ],
};
