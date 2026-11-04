import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('O futuro e o condicional'),
  subtitle: T('hablaré, hablaría — infinitivo inteiro!'),
  section: T('Os verbos'),
  body: C(`## Gêmeos formados pelo infinitivo inteiro

Futuro e condicional construem-se com o **infinitivo completo** mais as desinências {-é, -ás, -á, -emos, -éis, -án} e {-ía, -ías, -ía, -íamos, -íais, -ían}. Nada muda no meio — é a forma mais regular da língua (Hill).

{hablar} → {hablaré}, {hablarás}, {hablará}, {hablaremos}, {hablaréis}, {hablarán}.
{hablar} → {hablaría}, {hablarías}, {hablaría}, {hablaríamos}, {hablaríais}, {hablarían}.

## Os irregulares

Os irregulares usam o **mesmo radical** nos dois tempos, o que torna o par inseparável: {tendré}/{tendría} · {podré}/{podría} · {diré}/{diría} · {haré}/{haría} · {vendré}/{vendría} · {sabré}/{sabría} · {saldré}/{saldría} · {cabrá}/{cabría} · {valdrá}/{valdría}.

Fique com os verbos regulares: {comer} → {comeré}/{comería}, {vivir} → {viviré}/{viviría}.

## Futuro: o que está escrito

O futuro simples é também usado para:

• **Fato provável** (≈ 90% de certeza): {Serán las tres} «serão três horas».
• **Hipótese presente**: {¿Dónde estará?} «onde estará?»
• **Futuro próximo**: {voy a venir} «estou a vir» (= presente + {a} + infinitivo).

## Condicional: desejo e cortesia

• {me gustaría} «gostaria de»
• {¿Podrías?} «poderia?» (pedido educado)
• {Deberías orar} «deverias orar» (conselho)
• Condição: {si tuviera tiempo, lo haría} «se tivesse tempo, faria» (imperfeito + condicional).

Bíblico: {vendrá} «virá» (Mt 24:30) · {todo ojo le verá} «todo olho o verá» (Ap 1:7) · {será grande} «será grande» (Lc 1:32).`),
  vocab: [
    V('hablaré', 'hablar', 'falarei'),
    V('hablaría', 'hablar', 'falaria'),
    V('tendré', 'tener', 'terei'),
    V('vendrá', 'venir', 'virá'),
    V('gustaría', 'gustar', 'gostaria'),
    V('verá', 'ver', 'verá'),
    V('será grande', 'ser', 'será grande (Lc 1:32)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete Ap 1:7: "todo ojo le ___" (verá)'),
    answer: 'verá',
    hint: T('Futuro regular de "ver".'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Condicional de "tener" (yo): ___ (teria)'),
      answer: 'tendría',
      hint: T('Regra §2: mesmo radical do futuro (tendré).'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase é um pedido educado?'),
      options: [
        T('Hablaré mañana'),
        T('¿Podrías ayudarme?'),
        T('Quiero que vengas'),
        T('Vendrá pronto'),
      ],
      answer: 1,
      hint: T('Regra §5: condicional = cortesia.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao par futuro/condicional'),
      pairs: [
        { a: T('{poder}'), b: T('{podré} / {podría}') },
        { a: T('{decir}'), b: T('{diré} / {diría}') },
        { a: T('{venir}'), b: T('{vendré} / {vendría}') },
        { a: T('{hablar}'), b: T('{hablaré} / {hablaría}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Futuro e condicional usam o infinitivo inteiro; nada muda no meio da palavra.'),
    },
    {
      n: '2',
      text: T(
        'Irregulares têm o MESMO radical nos dois: tendré/tendría, podré/podría, diré/diría.',
      ),
    },
    {
      n: '3',
      text: T('O futuro também expressa probabilidade e hipótese presente: Serán las tres.'),
    },
    { n: '4', text: T('O futuro próximo é presente + a + infinitivo: voy a venir.') },
    { n: '5', text: T('Condicional = desejo e cortesia: me gustaría, ¿Podrías?') },
  ],
  notes: [
    {
      label: T('O futuro é opcional'),
      text: T(
        '{Hablar} e {hablaré} dizem o mesmo. O futuro é preciso quando você quer marcar decisão, previsão ou Distance: {veniré mañana} é mais enfático que {vendré}.',
      ),
    },
  ],
  examples: [
    { text: '{vendrá}', gloss: T('Virá (Mt 24:30).') },
    { text: '{todo ojo le verá}', gloss: T('Todo olho o verá (Ap 1:7).') },
    { text: '{me gustaría}', gloss: T('Gostaria de (condicional de desejo).') },
    { text: '{será grande}', gloss: T('Será grande (Lc 1:32).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Futuro e condicional'),
      head: [T('Pessoa'), T('Futuro (hablar)'), T('Condicional (hablar)')],
      rows: [
        ['yo', '{hablaré}', '{hablaría}'],
        ['tú', '{hablarás}', '{hablarías}'],
        ['él/ella/usted', '{hablará}', '{hablaría}'],
        ['nosotros', '{hablaremos}', '{hablaríamos}'],
        ['vosotros', '{hablaréis}', '{hablaríais}'],
        ['ellos/ustedes', '{hablarán}', '{hablarían}'],
      ],
    },
    {
      caption: T('Tabela 2 — Pares irregulares'),
      head: [T('Infinitivo'), T('Futuro'), T('Condicional')],
      rows: [
        ['{tener}', '{tendré}', '{tendría}'],
        ['{poder}', '{podré}', '{podría}'],
        ['{decir}', '{diré}', '{diría}'],
        ['{hacer}', '{haré}', '{haría}'],
        ['{venir}', '{vendré}', '{vendría}'],
        ['{saber}', '{sabré}', '{sabría}'],
        ['{salir}', '{saldré}', '{saldría}'],
        ['{valer}', '{valdrá}', '{valdría}'],
        ['{comer}', '{comeré}', '{comería}'],
      ],
    },
  ],
};
