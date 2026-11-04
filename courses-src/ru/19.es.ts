import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('Verbos de movimiento'),
  subtitle: T('идти/ходить: dirección y habitualidad'),
  section: T('El verbo: presente y aspecto'),
  body: C(
    'Muchos verbos rusos de movimiento forman pares imperfectivo/perfectivo. идти expresa movimiento dirigido, normalmente a pie; ходить, movimiento multidireccional o habitual. Compara Я иду в церковь, «voy ahora a la iglesia», con Я хожу в церковь, «voy a la iglesia con regularidad». El mismo esquema aparece en ехать/ездить, бежать/бегать, лететь/летать, плыть/плавать y нести/носить. Los prefijos desplazan el movimiento y el significado: прийти, llegar; уйти, marcharse; войти, entrar; выйти, salir. El imperfectivo носиться en Дух носился над водою describe movimiento circulante en Génesis 1:2. El aspecto no se obtiene mecánicamente: летит tiene consonante final sorda ante terminación sorda, y algunos pares son supletivos.',
  ),
  vocab: [
    V('идти', 'идти', 'ir a pie (dirigido)'),
    V('ходить', 'ходить', 'andar; ir habitualmente'),
    V('ехать', 'ехать', 'ir en transporte'),
    V('ездить', 'ездить', 'ir repetidamente'),
    V('прийти', 'прийти', 'llegar'),
    V('войти', 'войти', 'entrar'),
    V('носился', 'носиться', 'planeaba; circulaba'),
    V('лететь', 'лететь', 'volar'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué verbo indica movimiento dirigido?'),
    options: [T('ходить'), T('идти'), T('носиться')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Completa el perfectivo: ___йти (llegar)'), answer: 'пр' },
    {
      kind: 'choose',
      prompt: T('¿Qué forma describe un viaje regular?'),
      options: [T('еду'), T('езжу')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Completa: Он во___ в храм'), answer: 'шёл' },
  ],
  rules: [
    { n: '1', text: T('Los complementos estáticos o de capacidad pueden seleccionar {ходить}.') },
  ],
  notes: [
    {
      label: T('Una ida o muchas'),
      text: T(
        'El par {идти} / {ходить} describe el mismo acto visto de dos maneras: una ida ahora, o idas repetidas. Es una distinción de punto de vista, y el contexto decide.',
      ),
    },
  ],
  examples: [
    { text: 'Я иду в церковь', gloss: T('Voy a la iglesia ahora') },
    { text: 'Он ходит в церковь', gloss: T('Él va a la iglesia con regularidad') },
  ],
  tables: [
    {
      caption: T('Pares de movimiento'),
      head: ['Imperfectivo dirigido', 'Imperfectivo habitual', 'Perfectivo'],
      rows: [
        ['идти', 'ходить', 'прийти/уйти'],
        ['ехать', 'ездить', 'приехать/уехать'],
        ['бежать', 'бегать', 'пробежать'],
        ['лететь', 'летать', 'прилететь/улететь'],
        ['нести', 'носить', 'принести'],
      ],
    },
  ],
};
