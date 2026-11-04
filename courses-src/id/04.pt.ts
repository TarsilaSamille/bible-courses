import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Tempo, aspecto e negação'),
  subtitle: T('sudah, sedang, akan, belum; tidak, bukan'),
  section: T('Tempo e verbo'),
  body: C(`Os verbos não se conjugam: o evento verbal pode não ter marca temporal explícita. O tempo e o aspecto entram por marcadores.

{sudah} situa um evento como completo: «ya ocurrió» — {Allah sudah berfirman}. {telah} pertence ao registro bíblico/formal e pode receber ênfase especial: {Ia telah datang}. {sedang} marca processo: {Dia sedang berdoa}. {akan} situa o evento depois do momento de referência: {Ia akan datang}. {belum} significa «ainda não»: {Ia belum datang}.

Para comparar o momento de referência:
• {Dia sudah datang} = «ele já chegou».
• {Dia sedang datang} = «ele está vindo» (aspecto em curso).
• {Dia akan datang} = «ele virá».
• {Dia belum datang} = «ele ainda não chegou».

Negações
{tidak} nega verbos e adjetivos: {tidak percaya}, {tidak baik}. {bukan} nega classes ou identifica: {Dia bukan nabi} = «Ele não é profeta»; {Ini bukan Allah} = «Isto não é Deus». {bukanlah} acrescenta ênfase: «certamente não é».

O sufixo {-lah} faz o verbo da oração principal ganhar destaque e, em orações coordenadas bipolares, destaca o segundo elemento: {Berfirmanlah Allah, jadilah terang}. Em {Datanglah!}, é imperativo enfático.`),
  vocab: [
    V('sudah', 'sudah', 'já; evento completo'),
    V('telah', 'telah', 'já (formal/bíblico)'),
    V('sedang', 'sedang', 'estar em curso'),
    V('akan', 'akan', 'vai; no futuro'),
    V('belum', 'belum', 'ainda não'),
    V('tidak', 'tidak', 'não (verbo/adjetivo)'),
    V('bukan', 'bukan', 'não (nome/identidade)'),
    V('berfirman', 'firman', 'falar, declarar'),
    V('datang', 'datang', 'vir'),
    V('berfirmanlah', 'firman', 'fale!; disse enfaticamente'),
    V('terang', 'terang', 'luz, claro'),
    V('gelap', 'gelap', 'escuro, trevas'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se forma «ele ainda não chegou»?'),
    options: [
      T('Dia belum datang'),
      T('Dia tidak datang'),
      T('Dia bukan datang'),
      T('Datang belum dia'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: «Dia ___ Invocation» = «ele está orando».'),
      answer: 'sedang',
      hint: T('Marcador de aspecto em curso.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase usa corretamente {bukan}?'),
      options: [
        T('Dia bukan nabi.'),
        T('Dia tidak nabi.'),
        T('Bukan dia percaya.'),
        T('Dia bukan percaya.'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Em frases neutras, o valor temporal pode vir do contexto: {Dia datang} pode ser presente habitual ou passado narrativo.',
      ),
    },
    {
      n: '2',
      text: T(
        '{sudah} e {telah} marcam conclusão; {belum} nega uma conclusión esperada e implica uma referência temporal.',
      ),
    },
    {
      n: '3',
      text: T(
        'Use {tidak} antes do verbo/adjetivo; use {bukan} antes de nome, pronombre ou para explicar identidade.',
      ),
    },
  ],
  notes: [
    {
      label: T('Não confunda'),
      text: T(
        '{sudah} significa «ya», enquanto {belum} significa «aún no». No español, «ya» y «todavía no» funcionan de forma distinta.',
      ),
    },
  ],
  examples: [
    { text: 'Allah sudah berfirman.', gloss: T('Deus já falou.') },
    { text: 'Dia sedang berdoa.', gloss: T('Ele está orando.') },
    { text: 'Ini bukan Firman.', gloss: T('Isto não é a Palavra.') },
    { text: 'Dia belum percaya.', gloss: T('Ele ainda não creu.') },
  ],
  tables: [
    {
      caption: T('Marcadores de tempo e aspecto'),
      head: ['Marcador', 'PT', 'ES'],
      rows: [
        ['sudah', T('já / completo'), '{Dia sudah datang}'],
        ['sedang', T('em curso'), '{Dia sedang datang}'],
        ['akan', T('posterior à referência'), '{Dia akan datang}'],
        ['belum', T('ainda não'), '{Dia belum datang}'],
      ],
    },
  ],
};
