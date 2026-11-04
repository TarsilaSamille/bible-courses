import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('O ablativo absoluto'),
  subtitle: T('{urbe captā}: a cidade tomada, o pretor chegou'),
  section: T('O ablativo absoluto'),
  body: C(`## A ideia

O ablativo absoluto é uma cláusula curta que funciona como um adverbial: dois ou mais ablativos, quase sempre um nome e um participio, que descrevem uma circunstância **independente** da proposição principal. Ele não tem sujeito nem objeto próprios, não é regido pelo verbo principal e pode ser traduzido por um gerúndio, por uma subordinada ou por um substantivo abstrato.

| Peças | Exemplo | Função |
|---|---|---|
| Nome em ablativo | \`{urbe}\` | quem sofre ou realiza a ação |
| Participio em ablativo | \`{captā}\` | a ação, com valor de perfectivo |
| Nome + aposto | \`{me duce}\` | «sob o meu comando» |
| Nome + adjetivo | \`{cōnsule vivo}\` | «com o cônsul vivo», «enquanto o cônsul viver» |

Em {urbe captā} o ablativo {urbe} é um **participio passivo** substantivado: literalmente «pela cidade, having sido tomada». O sentido é «tomada a cidade». O ablativo, aqui, não é instrumento nem meio: é o que os gramáticos chamam de ablativo **absoluto** justamente porque se basta sozinho, sem regência verbal.

## Participio em ablativo: tempo e aspecto

O tempo do participio que serve de predicado do ablativo absoluto é o passado, mas a força da frase muda com o contexto:

- **Perfectivo, anterior**: {urbs capta} = «tomada a cidade» — o efeito está feito.
- **Simultâneo ou permanente**: {Christō regnante} = «sob o reinado de Cristo», {me adiuvante} = «com a minha ajuda».
- **Futuro com o gerundivo**: {moritūrō praeside} = «sob a presidência de quem vai morrer» — mais raro.

Quando não há verbo explícito, o ablativo simples funciona como um verdadeiro absoluto: {mē adiūte} «com a minha ajuda», {tē gubernante} «sendo tu o guia».

## Como o português traduz

A tradução é sempre uma decisão, não um cálculo:

- {urbe captā, magistrātus vēnit} → «Uma vez tomada a cidade, o pretor chegou».
- {Deō volente} → «se Deus quiser» ou «com a permissão de Deus».
- {me duce} → «sob a minha liderança».
- {ōrtō sōle} → «ao nascer o sol» ou «com o sol já nascido».

## Aplicação na Vulgata

Marcos 16:2 diz: {Et orto iam sole, veniebant ad eum} «E, já tendo o sol nascido, iam vinham a ele». O ablativo absoluto {ōrtō sōle} vem no pretérito mais-que-perfeito, traduzido aqui pelo gerúndio español «habiendo salido». Repare que a oração principal {veniebant} «vinham» é a que carrega o sentido principal; {ōrtō sōle} só marca o tempo da ação. É essa inversão — a circunstância vem **antes** do verbo — que você vai encontrar com frequência nos evangelhos.

Em Lucas 2:44, {quaerentes illum in festo} usa o mesmo mecanismo com o substantivo {festum} e um participio substantivado: «procurando-o por entre a festa».

## Exercício de leitura

Em Atos 1:9, {Et dum diceret, hoc dictum est ei} combina gerúndio e ablativo absoluto ({hoc dictum est} «isto foi dito»), o que mostra que as duas construções se encaixam na mesma frase sem colidir.

## Tabela de conjugação útil

O que você precisa para montar um absoluto é apenas o ablativo singular do participio. Vale memorizar o padrão de {captus, -a, -um} e {regnāns}:

| Participio | Nom. | Gen. | Abl. sg. | Glosa |
|---|---|---|---|---|
| captus | captă | captī | captō | «tomado» |
| regnāns | regnāns | regnantis | regnante | «reinando» |
| vīvus | vīvŭs | vīvī | vīvō | «vivo» |
| missus | missŭs | missī | missō | «enviado» |
| dictum | dictum | dictī | dictō | «dito» |

Observe que a forma do ablativo singular termina em {ō} na 3.ª conjugação e em {e} na 1.ª e na 2.ª — a mesma alternância que você já conhece do ablativo dos substantivos.`),
  vocab: [
    V('urbs', 'urbs', 'cidade'),
    V('capio', 'capio', 'tomar, capturar'),
    V('captus', 'capio', 'tomado, capturado (part. pass.)'),
    V('magistratus', 'magistratus', 'pretor, magistrado'),
    V('venio', 'venio', 'vir'),
    V('Deus', 'Deus', 'Deus'),
    V('volens', 'volo', 'querendo (part. pres.)'),
    V('sol', 'sol', 'sol'),
    V('orior', 'orior', 'nascer, levantar-se'),
    V('ortus', 'orior', 'nascido, levantado (part.)'),
    V('dux', 'dux', 'líder, comandante'),
    V('adiuvo', 'adiuvo', 'ajudar'),
    V('guberno', 'guberno', 'governar, guiar'),
    V('tempus', 'tempus', 'tempo, ocasião'),
    V('verbum', 'verbum', 'palavra'),
    V('Dominus', 'Dominus', 'o Senhor'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {urbe captā, magistrātus vēnit}, o que {-ā} em {captā} demonstra?'),
    options: [
      T('Que é o sujeito gramatical da oração'),
      T('Que {captā} é um participio no ablativo, predicado do absoluto'),
      T('Que {captā} é o objeto direto de {magistrātus}'),
      T('Que {urbe} é um ablativo de meio'),
    ],
    answer: 1,
    hint: T('Regra §1: o ablativo absoluto se basta sozinho.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Ablativo singular de {captus} (particípio de {capio}): capt_'),
      answer: 'captō',
      hint: T('3.ª conjugação: o ablativo singular do participio termina em -ō.'),
    },
    {
      kind: 'choose',
      prompt: T('Como se traduz melhor {Deō volente}?'),
      options: [
        T('«Deus quer» (proposição principal)'),
        T('«se Deus quiser» (condição concessiva)'),
        T('«pelo Deus querente» (instrumento)'),
        T('«o Deus quer que» (finalidade)'),
      ],
      answer: 1,
      hint: T('Regra §2: o absoluto não tem verbo principal; o sentido vem do contexto.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada ablativo absoluto à sua tradução'),
      pairs: [
        { a: T('{urbe captā}'), b: T('tomada a cidade') },
        { a: T('{me duce}'), b: T('sob a minha liderança') },
        { a: T('{ōrtō sōle}'), b: T('ao nascer o sol') },
        { a: T('{hoc dictum est}'), b: T('isto foi dito') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Em {Et orto iam sole, veniebant ad eum} (Mc 16:2), qual proposição carrega o sentido principal?',
      ),
      options: [T('{orto iam sole}'), T('{veniebant ad eum}'), T('{iam}'), T('{ad eum}')],
      answer: 1,
      hint: T('O absoluto é circunstância; a proposição verbal é a principal.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O ablativo absoluto é uma cláusula nominal: nome (ou adjetivo substantivado) + participio, ambos em ablativo, sem regência verbal.',
      ),
    },
    {
      n: '2',
      text: T(
        'O tempo do participio é o passado, mas o valor é o de uma circunstância: anterior, simultânea ou permanente, conforme o contexto.',
      ),
    },
    {
      n: '3',
      text: T(
        'A terminação do ablativo singular do participio é {-e} na 1.ª e na 2.ª conjugação e {-ō} na 3.ª.',
      ),
    },
    {
      n: '4',
      text: T(
        'Nome + aposto também forma absoluto: {me duce} = «sob a minha liderança», e {mē adiūte} = «com a minha ajuda», sem participio.',
      ),
    },
    {
      n: '5',
      text: T(
        'Em orações com verbo principal, o absoluto vem normalmente antes dele: {urbe captā, magistrātus vēnit} = «Tomada a cidade, o pretor chegou».',
      ),
    },
  ],
  notes: [
    {
      label: T('Absoluto e ablativo oblíquo'),
      text: T(
        'Nem todo ablativo é absoluto. {Rosā puer amat} traz ablativo oblíquo regido por {amat} — é o meio da ação. {Rosā captā, puer vēnit} traz ablativo absoluto: nada na oração principal depende dele. O teste é sintático: se o ablativo é regido por algum elemento da proposição principal, é oblíquo; se fica solto, é absoluto.',
      ),
    },
    {
      label: T('Heródoto, História III, 32'),
      text: T(
        'Na passagem mais famosa do ablativo absoluto, {ūrbē expugnātā, ...}: a cidade sendo tomada. Toda a oração seguinte fica suspensa sem sujeito próprio, porque o assunto já foi gasto pela circunstância.',
      ),
    },
  ],
  examples: [
    { text: 'urbe captā', gloss: T('tomada a cidade') },
    { text: 'Deō volente', gloss: T('se Deus quiser, com a permissão de Deus') },
    { text: 'me duce', gloss: T('sob a minha liderança') },
    { text: 'mē adiūte', gloss: T('com a minha ajuda') },
    { text: 'Christō regnante', gloss: T('sob o reinado de Cristo') },
    { text: 'ōrtō sōle', gloss: T('ao nascer o sol, com o sol já nascido') },
    { text: 'cōnsule vivo', gloss: T('enquanto o cônsul viver') },
    { text: 'eo tempore', gloss: T('naquele tempo') },
    { text: 'hoc dictum est ei', gloss: T('isto foi dito a ele') },
    { text: 'tāē gubernante', gloss: T('sendo tu o guia') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — O ablativo absoluto: elementos e tradução'),
      head: [T('Estrutura'), T('Exemplo'), T('Tradução')],
      rows: [
        ['nome + participio passivo', T('a cidade tomada'), '{urbe captā}'],
        ['nome + participio presente', T('reinando Cristo'), '{Christō regnante}'],
        ['pronombre + substantivo', T('com a minha ajuda'), '{me adiuvante}'],
        ['ablativo simples', T('en certo tempo'), '{eo tempore}'],
        ['particípio + ablativo', T('isto foi dito a ele'), '{hoc dictum est ei}'],
      ],
    },
    {
      caption: T('Tabela 2 — Ablativo singular dos particípios que você mais usa'),
      head: [T('Particípio'), T('1.ª conj.'), T('2.ª conj.'), T('3.ª conj.')],
      rows: [
        [T('amans'), T('amante'), T('amante'), T('amante')],
        [T('monens'), T('monente'), T('monente'), T('monente')],
        [T('regnans'), T('regnante'), T('regnante'), T('regnante')],
        [T('videns'), T('vidente'), T('vidente'), T('vidente')],
        [T('dictus'), T('dicente'), T('dicente'), T('dicto')],
      ],
    },
  ],
};
