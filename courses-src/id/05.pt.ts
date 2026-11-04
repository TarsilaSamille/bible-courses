import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Leitura: Yohanes 1:1 (TB)'),
  subtitle: T('Pada mulanya adalah Firman'),
  section: T('Leituras'),
  body: C(`Leia o texto em três passadas. Primeiro, identifique as orações com {yang}: são relativas e introduzem informação sobre um substantivo. Segundo, observe a progressão: {adalah Firman} → {bersama-sama dengan Allah} → {adalah Allah}. A repetição de {Firman itu} cria Paralelismo, um recurso retórico do versículo.

TEXTO
{Pada mulanya adalah Firman; Firman itu bersama-sama dengan Allah dan Firman itu adalah Allah.}

ANÁLISE
• {Pada mulanya}: {pada} «em», {mula} «começo» e {-nya}, forma definida: «no começo».
• {adalah}: «é»; em uma narrativa pode traduzir-se por «era». Diferente de {ada} («há/existe»), {adalah} normalmente classifica ou identifica.
• {Firman}: «Palavra». A maiúscula TB indica o Logos, Cristo. O termo pode ser abreviado por pronominalização: em João 1:14, {dia} = «ele», retomando {Firman}.
• {bersama-sama dengan Allah}: {bersama} + {-sama} = «junto com»; {dengan} «com».
• {adalah Allah}: «é Deus». Não se deve converter automaticamente a cópula em «era»; a tradução TB preserva o paralelismo e o valor presentativo.

João 1:14: {Firman itu telah menjadi manusia}. {telah} completa o evento ({telah menjadi}); {manusia} indica natureza humana, não apenas aparência.

A nota de rodapé 1 de algumas edições explica que {monotes} significa «único». Em João 1:14, {penuh kasih karunia dan kebenaran} combina natureza divina e missão.`),
  vocab: [
    V('pada', 'pada', 'em, durante, em'),
    V('mula', 'mula', 'começo'),
    V('adalah', 'adalah', 'ser, é (identidade)'),
    V('Firman', 'firman', 'Palavra, Verbo'),
    V('itu', 'itu', 'esse, aquele'),
    V('bersama-sama', 'sama', 'junto com'),
    V('dengan', 'dengan', 'com'),
    V('menjadi', 'jadi', 'tornar-se, passar a ser'),
    V('manusia', 'manusia', 'ser humano, humanidade'),
    V('monotes', 'monotes', 'único'),
    V('kasih karunia', 'kasih karunia', 'graça'),
    V('kebenaran', 'benar', 'verdade, fidelidade'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Na segunda oração, o que {itu} retoma?'),
    options: [T('Allah'), T('Firman'), T('mulanya'), T('manusia')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a linha final: «Firman itu adalah ___».'),
      answer: 'Allah',
      hint: T('Nome próprio; mantenha a maiúscula.'),
    },
    {
      kind: 'choose',
      prompt: T('Como se traduz naturalmente {Firman itu telah menjadi manusia}?'),
      options: [
        T('A Palavra tornou-se humana.'),
        T('A Palavra está a ponto de ser humana.'),
        T('A Palavra se parece a um ser humano.'),
        T('A Palavra está tornando-se humana.'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{yang} pode introduzir uma oração substantiva («o que») ou relativa; aqui introduz relativa: {Firman itu} = «aquela Palavra».',
      ),
    },
    {
      n: '2',
      text: T(
        '{itu} aponta para algo ya mencionado. A Anteposição de {itu} à cabeça nominal: {Firman} {itu} = «aquela Palabra».',
      ),
    },
    {
      n: '3',
      text: T(
        '{-nya} pode formar um sintagma definido nominal: {mula} → {mulanya}. Neste verso, a tradução española natural es «al comienzo».',
      ),
    },
  ],
  notes: [
    {
      label: T('Códigos de tradução'),
      text: T(
        'TB significa Terjemahan Baru, tradução moderna da Alkitab para o indonésio. A forma exacta pode variar entre edições.',
      ),
    },
  ],
  examples: [
    { text: 'Pada mulanya adalah Firman.', gloss: T('No princípio era a Palavra.') },
    { text: 'Firman itu bersama-sama dengan Allah.', gloss: T('A Palavra estava junto com Deus.') },
    { text: 'Firman itu adalah Allah.', gloss: T('A Palavra era Deus.') },
  ],
  tables: [
    {
      caption: T('Paralelismo de João 1:1'),
      head: ['Progressão', 'PT', 'ES'],
      rows: [
        ['1', T('A Palavra era'), T('junto com Deus')],
        ['2', T('A Palavra era'), T('Deus')],
      ],
    },
  ],
};
