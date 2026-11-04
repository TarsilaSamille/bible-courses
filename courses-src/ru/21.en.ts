import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('Imperative, wish and purpose'),
  subtitle: T('скажи! — пусть — чтобы'),
  section: T('The verb: tense, mood and negation'),
  body: C(
    'The imperative is normally formed from the second person singular or third person plural of the future: ты скажешь gives скажи, вы скажете gives скажите. For ты, singular stress often uses the stem without -те: читайте becomes читай. We says пойдём, “let us go”. Imperatives of быть include будь and будьте, not будься. The negative uses не: не говори, or не скажи; aspect affects scope. пусть expresses a third-person wish and takes a present or future form: пусть будет свет, “let there be light”. A purpose clause uses чтобы. With the same subject, the verb is an infinitive: Он читает, чтобы понять. With different subjects, it is past tense: Он говорит, чтобы я понял. Thus чтобы does not merely mark the past.',
  ),
  vocab: [
    V('скажи', 'сказать', 'say'),
    V('читай', 'читать', 'read'),
    V('будьте', 'быть', 'be'),
    V('пусть будет', 'быть', 'let there be'),
    V('чтобы', 'чтобы', 'so that'),
    V('не говори', 'говорить', 'do not speak'),
    V('пойдём', 'пойти', 'let us go'),
    V('да святится', 'святиться', 'may it be hallowed'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you say “let there be light”?'),
    options: [T('будет свет'), T('пусть будет свет'), T('будь свет')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete the imperative: скаж…'), answer: 'и' },
    { kind: 'fill', prompt: T('Complete: Он читает, ___ понять'), answer: 'чтобы' },
    {
      kind: 'choose',
      prompt: T('Which negation fits habitual speech?'),
      options: [T('не говори'), T('не сказал'), T('не сказать')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'With {чтобы}, use the infinitive if the subject is shared; use the past if subjects differ.',
      ),
    },
  ],
  notes: [
    {
      label: T('Чтобы informs, it does not mark'),
      text: T(
        'After {чтобы}, the verb tense is not a leftover: it is information. If the subjects are the same, the infinitive appears; if they differ, the past does — and that difference resolves what is being said.',
      ),
    },
  ],
  examples: [
    { text: 'Он читает, чтобы понять', gloss: T('He reads in order to understand') },
    { text: 'Пусть будет свет', gloss: T('Let there be light') },
  ],
  tables: [
    {
      caption: T('Imperative formation'),
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
