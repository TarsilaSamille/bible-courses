import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('Imperativo, deseo y finalidad'),
  subtitle: T('скажи! — пусть — чтобы'),
  section: T('El verbo: tiempo, modo y negación'),
  body: C(
    'El imperativo ruso se forma normalmente a partir de la segunda persona del singular o de la tercera del plural del futuro: ты скажешь da скажи, вы скажете da скажите. Para ты, cuando el acento recae en la última sílaba suele usarse el tema sin -те: читайте pasa a читай. Para nosotros: пойдём, «vamos». Los imperativos de быть son будь y будьте, no будься. La negación usa не: не говори o не скажи; el aspecto afecta al alcance. пусть expresa deseo o mandato en tercera persona y suele llevar presente o futuro: пусть будет свет, «haya luz». La oración de finalidad usa чтобы. Si ambos sujetos coinciden, el verbo aparece en infinitivo: Он читает, чтобы понять. Si difieren, aparece en pasado: Он говорит, чтобы я понял. Por tanto, чтобы no es simplemente una marca de pasado.',
  ),
  vocab: [
    V('скажи', 'сказать', 'di'),
    V('читай', 'читать', 'lee'),
    V('будьте', 'быть', 'sed'),
    V('пусть будет', 'быть', 'sea'),
    V('чтобы', 'чтобы', 'para que'),
    V('не говори', 'говорить', 'no hables'),
    V('пойдём', 'пойти', 'vamos'),
    V('да святится', 'святиться', 'sea santificado'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se dice «haya luz»?'),
    options: [T('будет свет'), T('пусть будет свет'), T('будь свет')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Completa el imperativo: скаж…'), answer: 'и' },
    { kind: 'fill', prompt: T('Completa: Он читает, ___ понять'), answer: 'чтобы' },
    {
      kind: 'choose',
      prompt: T('¿Qué negación combina con el habla habitual?'),
      options: [T('не говори'), T('не сказал'), T('не сказать')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Con {чтобы}, usa el infinitivo si coincide el sujeto; usa el pasado si los sujetos difieren.',
      ),
    },
  ],
  notes: [
    {
      label: T('Чтобы informa, no marca'),
      text: T(
        'Tras {чтобы}, el tiempo del verbo no es un resto: es información. Si los sujetos son el mismo, aparece el infinitivo; si difieren, el pasado — y esa diferencia resuelve lo que se dice.',
      ),
    },
  ],
  examples: [
    { text: 'Он читает, чтобы понять', gloss: T('Él lee para entender') },
    { text: 'Пусть будет свет', gloss: T('Haya luz') },
  ],
  tables: [
    {
      caption: T('Formación del imperativo'),
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
