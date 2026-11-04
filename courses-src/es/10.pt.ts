import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Os advérbios'),
  subtitle: T('-mente, muy/mucho, bien/mal'),
  section: T('Adjetivos e advérbios'),
  body: C(`## Advérbios em {-mente}

Muitos advérbios se formam do **feminino** do adjetivo + {-mente}: {claro} → {claramente} · {rápido} → {rápidamente} · {triste} → {tristemente} · {fiel} → {fielmente} «fielmente».

A pronúncia conserva **duas sílabas tônicas**: {CLARAmente} — o acento do adjetivo permanece, e {mente} leva a sua. Por isso, no texto bíblico, quando a sílaba tônica de {claramente} cai na antepenúltima, a palavra tem duas: {claramente}.

Os poucos advérbios curtos são **irregulares**: {bien} «bem» · {mal} «mal» · {mucho} · {poco} · {bastante} · {demasiado} — nenhum deles recebe {-mente}.

## {muy} × {mucho}

• {muy} + adjetivo ou advérbio: {muy bueno} «muito bom» · {muy lejos} «muito longe» · {muy difícil}.
• {mucho} sozinho (verbo {ser}/{estar}) ou + substantivo: {mucho amor} «muito amor» · {muchas gracias} «muito obrigado» · {Es mucho} «é muito».

{mucho} com verbo de ação é errado: diz-se {Trabaja mucho}, nunca «*Trabaja muy».

## Advérbios essenciais

• {bien} «bem» × {mal} «mal»: {Lo hizo bien} «fiz bem».
• {así} «assim»: {Así sea} «assim seja» (amém!).
• {siempre} «sempre» · {nunca} «nunca» · {jamás} «jamais» (mais forte) · {a veces} «às vezes» · {a menudo} «amiúde» · {casi nunca} «quase nunca».
• {ya} «já» × {todavía no} «ainda não».
• {más} «mais» (também substantivo: {el más} «o mais»).
• {bastante} «bastante» — funciona como advérbio e como adjetivo.

## Advérbios shorts que surprised

Assim como em português, o advérbio de negação {no} precede o verbo na negação oracional ({No lo sé} «Não sei») e {tampoco} acrescenta negação.

Ex.: {Orad sin cesar} «orai sem cessar» (1Ts 5:17 — {sin} + infinitivo!).`),
  vocab: [
    V('claramente', 'claro', 'claramente (-mente!)'),
    V('muy bueno', 'bueno', 'muito bom (muy!)'),
    V('mucho amor', 'amor', 'muito amor (mucho!)'),
    V('Así sea', 'así', 'assim seja (amém!)'),
    V('siempre', 'siempre', 'sempre'),
    V('trabaja mucho', 'trabajar', 'trabalha muito (nunca muy!)'),
    V('sin cesar', 'cesar', 'sem cessar (1Ts 5:17)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"muy" × "mucho"?'),
    options: [
      T('Iguais'),
      T('muy + adjetivo ("muy bueno"); mucho sozinho/substantivo ("mucho amor")'),
      T('O contrário'),
      T('Erro'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Forme o advérbio de "triste": ___ (tristemente)'),
      answer: 'tristemente',
      hint: T('Feminino do adjetivo + -mente.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta?'),
      options: [T('Trabaja muy'), T('Trabaja mucho'), T('Es mucho bueno'), T('Muy trabaja')],
      answer: 1,
      hint: T('Regra §2: muito + verbo de ação = mucho.'),
    },
    {
      kind: 'fill',
      prompt: T('Qual advérbio irregular significa "muito pouco"? (pouco + advérbio)'),
      answer: 'poco',
      hint: T('Irregular em -mente: poco, bien, mal, mucho.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Advérbios em -mente vêm do feminino e guardam DOIS acentos falados: CLARAmente.'),
    },
    { n: '2', text: T('muy + adjetivo (muy bueno); mucho sozinho ou + substantivo (mucho amor).') },
    { n: '3', text: T('mucho, poco, bien, mal, bastante, demasiado nunca recebem -mente.') },
  ],
  notes: [
    {
      label: T('O advérbio é invariável'),
      text: T(
        'Advérbios não variam em gênero nem número: {mujeres felices} fica igual. A flexão que você vê em {la feliz} é do substantivo, nunca do advérbio.',
      ),
    },
  ],
  examples: [
    { text: '{claramente}', gloss: T('Claramente (duas sílabas tônicas!).') },
    { text: '{mucho amor}', gloss: T('Muito amor.') },
    { text: '{Así sea}', gloss: T('Assim seja (amém!).') },
    { text: '{sin cesar}', gloss: T('Sem cessar (1Ts 5:17).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Advérbios irregulares'),
      head: [T('Adjetivo'), T('Advérbio regular'), T('Advérbio irregular')],
      rows: [
        ['{claro}', '{claramente}', '—'],
        ['{bueno}', '{buenamente}', '{bien}'],
        ['{malo}', '{malamente}', '{mal}'],
        ['{mucho}', '—', '{mucho}'],
        ['{poco}', '—', '{poco}'],
        ['{bastante}', '—', '{bastante}'],
      ],
    },
    {
      caption: T('Tabela 2 — muy × mucho'),
      head: [T('Palavra'), T('Usa com'), T('Exemplo')],
      rows: [
        ['{muy}', 'adjetivo / advérbio', '{muy bueno}'],
        ['{muy}', 'substantivo (ERRO)', '{muy amor}'],
        ['{mucho}', 'sozinho (ser/estar)', '{Es mucho}'],
        ['{mucho}', 'substantivo', '{mucho amor}'],
        ['{mucho}', 'verbo de ação', '{Trabaja mucho}'],
      ],
    },
  ],
};
