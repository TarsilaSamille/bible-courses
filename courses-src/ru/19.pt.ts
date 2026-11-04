import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('Verbos de movimento'),
  subtitle: T('идти/ходить: direção e habitualidade'),
  section: T('O verbo: o presente e o aspecto'),
  body: C(
    'Muitos verbos russes de movimento formam pares imperfeito/perfeito. идти é movimento dirigido, normalmente a pé; ходить é multidirecional ou habitual. Compare Я иду в церковь, "estou indo para a igreja agora", com Я хожу в церковь, "vou à igreja regularmente". O mesmo padrão aparece em ехать/ездить para viagem de veículo, бежать/бегать para corrida, лететь/летать para voo, плыть/плавать para natação ou navegação, e нести/носить para carregar. A escolha depende também do ponto de vista: ходить pode significar caminhar, visitar regularmente ou ser capaz de caminhar; летать pode significar voar repetidamente ou ser piloto. Os prefixos podem deslocar o movimento e o sentido: прийти é chegar a um destino, уйти é sair, войти é entrar, выйти é sair para fora. Em Христос пришёл, o perfeito com prefixo apresenta a chegada como evento delimitado. O imperfeito носиться em Дух носился над водою descreve movimento repetido ou circulante em Gênesis 1:2. Não derive o aspecto mecanicamente: em летит a consoante final é surda antes de uma terminação surda, e alguns pares têm temas suppletivos.',
  ),
  vocab: [
    V('идти', 'идти', 'ir a pé (dirigido)'),
    V('ходить', 'ходить', 'andar; ir habitualmente'),
    V('ехать', 'ехать', 'ir em transporte'),
    V('ездить', 'ездить', 'ir repetidamente'),
    V('прийти', 'прийти', 'chegar'),
    V('войти', 'войти', 'entrar'),
    V('носился', 'носиться', 'pairava; circulava'),
    V('лететь', 'лететь', 'voar'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual verbo indica movimento dirigido?'),
    options: [T('ходить'), T('идти'), T('носиться')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete o perfectivo: ___йти (chegar)'), answer: 'пр' },
    {
      kind: 'choose',
      prompt: T('Qual forma descreve ido regular?'),
      options: [T('еду'), T('езжу')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: Он во___ в храм'), answer: 'шёл' },
  ],
  rules: [
    { n: '1', text: T('Complementos estáticos ou de capacidade podem selecionar {ходить}.') },
  ],
  notes: [
    {
      label: T('Uma ida ou idas'),
      text: T(
        'O par {идти} / {ходить} descreve o mesmo ato visto de duas maneiras: uma ida agora, ou idas repetidas. É uma distinção de ponto de vista, e o contexto decide qual está em jogo.',
      ),
    },
  ],
  examples: [
    { text: 'Я иду в церковь', gloss: T('Vou à igreja agora') },
    { text: 'Он ходит в церковь', gloss: T('Ele vai à igreja habitualmente') },
  ],
  tables: [
    {
      caption: T('Pares de movimento'),
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
