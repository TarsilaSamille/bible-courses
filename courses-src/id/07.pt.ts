import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Leitura: Pai-Nosso e Salmo 22'),
  subtitle: T('Bapa kami yang di sorga'),
  section: T('Leituras'),
  body: C(`O Pai-Nosso reúne nomes, pronomes, orações relativas, passivas e imperativos. O TB diz {Bapa kami yang di sorga, dikuduskanlah nama-Mu}, ou seja, «Pai nosso que está no céu, seja santificado o teu nome».

ANÁLISE
• {Bapa}: «pai»
• {kami}: sujeito possessivo «nosso»; a oração inteira exerce o papel de sujeito de {dikuduskanlah}.
• {yang di sorga}: relativo passivo: «que está no céu».
• {nama-Mu}: «teu nome»; {Mu} sufixo de segunda pessoa formal/possessivo, que se funde à base.
• {dikuduskanlah}: {di-} + {kuduskan} + {-lah}; passiva («seja santificado») com valor enfático de ordem.

Continue: {Datanglah kerajaan-Mu, jadilah kehendak-Mu}. {Datanglah} pode ter valor desiderativo: «venha»; {jadilah} «seja feito». O uso de {kerajaan-Mu} com {datang} gera a imagem bíblica da chegada do reino.

{Berikanlah kami pada hari ini makanan kami yang secukupnya}. {Berikanlah} combina {beri} + {kan} + {lah}; é mais natural que {berilah kami}. O pronome {kami} é o beneficiário; {yang secukupnya} é relativo e significa «que sea suficiente».

Em {Ampunilah kami akan kesalahan kami}, {akan} é NOMINALIZADOR postposicional, «de/por». Não é o futuro {akan}. {Kesalahan} significa «erros» ou «dívidas».

No Salmo 22:2, {Allahku, Allahku} = «Meu Deus, meu Deus» ({ku}, primeira pessoa). {Mengapa} introduz uma pergunta: «por quê». {meninggalkan} = {meN- + tinggal + kan} = «abandonar». {Aku} é enfático no registro bíblico.`),
  vocab: [
    V('Bapa', 'bapa', 'pai'),
    V('sorga', 'sorga', 'céu'),
    V('kuduskan', 'kudus', 'santificar'),
    V('dikuduskanlah', 'kudus', 'seja santificado!'),
    V('nama-Mu', 'nama', 'teu nome'),
    V('kerajaan', 'raja', 'reino'),
    V('kehendak', 'hendak', 'vontade, querer'),
    V('Berikanlah', 'beri', 'dá!'),
    V('secukupnya', 'cukup', 'que seja suficiente'),
    V('Ampunilah', 'ampun', 'perdoe!'),
    V('akan', 'akan', 'de; por (nominalizador)'),
    V('kesalahan', 'salah', 'erro, dívida'),
    V('meninggalkan', 'tinggal', 'abandonar'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que {-lah} faz em {dikuduskanlah}?'),
    options: [
      T('Marca o passado'),
      T('Dá força de ordem ou desejo à passiva'),
      T('Cria o plural'),
      T('Nega o verbo'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: «___lah nama-Mu» = «seja santificado o teu nome».'),
      answer: 'dikuduskan',
      hint: T('Começa com di- e contém kata kudus.'),
    },
    {
      kind: 'choose',
      prompt: T('Em «akan kesalahan», que função tem {akan}?'),
      options: [T('Futuro'), T('Nominalizador, «de»'), T('Pronome'), T('Negação')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A oração nominal inteira {Bapa kami yang di sorga} é sujeito de {dikuduskanlah}; não leia apenas {kami} como sujeito.',
      ),
    },
    { n: '2', text: T('{-lah} pode criar valor de orden owish ou deseo, mas não cria passado.') },
    {
      n: '3',
      text: T(
        'TB usa minúsculas para nomes divinos; em texto normal, capitalize {Allah}, {Tuhan} e {Yesus} conforme convenção da edição.',
      ),
    },
  ],
  notes: [
    {
      label: T('Pronúncia'),
      text: T('{sorga} se pronuncia aproximadamente [ˈsɔrɡa], con vocal velar abierta.'),
    },
  ],
  examples: [
    { text: 'Bapa kami yang di sorga.', gloss: T('Pai nosso que está no céu.') },
    { text: 'Datanglah kerajaan-Mu.', gloss: T('Venha o teu reino.') },
    { text: 'Ampunilah kami akan kesalahan kami.', gloss: T('Perdoa os nossos débitos.') },
  ],
  tables: [
    {
      caption: T('Estruturas do Pai-Nosso'),
      head: ['Estrutura', 'PT', 'ES'],
      rows: [
        ['yang + passiva', T('oração relativa'), '{yang di sorga} = «que está en el cielo»'],
        ['-Mu', T('posesivo de 2ª pessoa'), '{nama-Mu} = «tu nombre»'],
        ['akan + N', T('nominalizador'), '{akan kesalahan} = «de los errores»'],
      ],
    },
  ],
};
