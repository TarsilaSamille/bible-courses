import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('Imperativo, desire e finalidade'),
  subtitle: T('скажи! — пусть — чтобы'),
  section: T('O verbo: tempo, modo e negação'),
  body: C(
    'O imperativo russo é formado normalmente a partir da segunda pessoa do singular ou da terceira do plural do futuro: ты скажешь dá скажи, вы скажете dá скажите. Para ты, quando a tonicidade fica na sílaba final, usa-se muitas vezes o tema sem -те: читайте vira читай; пишите vira пиши. Para "nós" usa-se пойдём, "vamos". Os imperativos de быть são будь e будьте, e não будься. A negação usa не antes do verbo: не говори, "não fale", ou не скажи, "não diga desta vez"; a escolha do aspecto altera o alcance da proibição. пусть exprime desejo ou ordem na terceira pessoa e normalmente recebe forma de presente ou de futuro: пусть будет свет, "haja luz", ou пусть придёт, "que ele venha". Na oração do Pai-Nosso, да святится e да будет são construções optativas paralelas. Uma oração de finalidade usa normalmente чтобы. Se as duas orações têm o mesmo sujeito, o verbo aparece no infinitivo: Он читает, чтобы понять, "Ele lê para compreender". Se os sujeitos diferem, o verbo aparece no passado: Чтобы ты веровал, "para que creias", Он говорит, чтобы я понял, "Ele fala para que eu compreenda". Portanto чтобы não é apenas um marcador do passado.',
  ),
  vocab: [
    V('скажи', 'сказать', 'diz'),
    V('читай', 'читать', 'lê'),
    V('будьте', 'быть', 'sejam'),
    V('пусть будет', 'быть', 'seja'),
    V('чтобы', 'чтобы', 'para que'),
    V('не говори', 'говорить', 'não fale'),
    V('пойдём', 'пойти', 'vamos'),
    V('да святится', 'святиться', 'seja santificado'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se diz “haja luz” com desejo?'),
    options: [T('будет свет'), T('пусть будет свет'), T('будь свет')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete o imperativo: скаж…'), answer: 'и' },
    { kind: 'fill', prompt: T('Complete: Он читает, ___ понять'), answer: 'чтобы' },
    {
      kind: 'choose',
      prompt: T('Qual negação combina com fala habitual?'),
      options: [T('не говори'), T('не сказал'), T('не сказать')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Com {чтобы}, o verbo fica no infinitivo se o sujeito é o mesmo; no passado se difere.',
      ),
    },
  ],
  notes: [
    {
      label: T('Чтобы informa, não marca'),
      text: T(
        'Depois de {чтобы}, o tempo do verbo não é um resíduo: é informação. Se os sujeitos são o mesmo, aparece o infinitivo; se são diferentes, o passado — e é essa diferença que resolve o que se está dizendo.',
      ),
    },
  ],
  examples: [
    { text: 'Он читает, чтобы понять', gloss: T('Ele lê para entender') },
    { text: 'Пусть будет свет', gloss: T('Haja luz') },
  ],
  tables: [
    {
      caption: T('Formação do imperativo'),
      head: ['Pessoa', 'Futuro', 'Imperativo'],
      rows: [
        ['ты', 'скажешь', 'скажи'],
        ['вы', 'скажете', 'скажите'],
        ['мы', 'скажем', 'скажем / скажемте'],
        ['они', 'скажут', '—'],
      ],
    },
  ],
};
