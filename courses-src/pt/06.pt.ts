import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Pai-Nosso e Salmo 22'),
  subtitle: T('ora, perdão e sofrimento'),
  section: T('Leitura'),
  body: C(`## O Pai-Nosso tem três tempos

O Pai-Nosso alterna invocação, pedidos e instrução, e cada parte usa um tempo diferente. A invocação é declarativa e presente: {Pai nosso que estás nos céus}. Os pedidos são desejos, e desejo é **subjuntivo**: {santificado seja o teu nome}, {venha o teu reino}, {seja feita a tua vontade}. A instrução volta ao **imperativo** e ao presente: {o pão nosso de cada dia dá-nos hoje}.

Repare no padrão: os três pedidos centrais do Pai-Nosso são justamente os três subjuntivos. Não é retórica — é gramática. Um pedido é, por definição, algo que se quer e ainda não se tem, e em português (como em grego, com ἐλθέτω) o subjuntivo marca exatamente isso. Traduzir {seja} por {é} muda um pedido em uma afirmação.

## Dá-nos: verbo e pronome colados

{o pão nosso de cada dia dá-nos hoje} tem {dá-nos} — verbo + pronome nos, na mesma palavra. A forma é {dá} + {nos} grudados, e é a marca do português clítico. O paralelo grego é ἐπιδίδου ἡμῖν (δίδω + ἡμῖν), com o pronome no **dativo**, e é ele que diz "a nós" e não "nós".

O registro também importa: {dá-nos} é a forma que o português europeu usa, e a forma brasileira corrente é {dá pra nós} ou {nos dá}. São a mesma função com três registros, e o tradutor escolhe conforme o público — sem alterar o sentido.

## Perdoemos: subjuntivo em frase de narração

{perdoa-nos as nossas dívidas, assim como nós também perdoamos aos nossos devedores} traz {perdoamos} no presente do subjuntivo, e não {perdoamos} indicativo nem {perdoámos} perfeito. A frase é narração ("assim como nós também perdoamos"), mas o verbo é subjuntivo.

Por quê? Porque o grego de Mt 6:12 usa ἀφῆτε (aoristo, presente do subjuntivo) e o fato é subjuntivo, porque a oração não afirma que perdoamos — ela pede que perdoemos. A diferença entre {perdoamos} (afirmação) e {perdoemos} (pedido) é a diferença entre dizer e rezar, e o português biblical preserva.

E repare no {aos}: é {a + os} contra o dativo grego, o que mostra que a preposição em português está cumprindo o papel do caso.

## O Salmo 22: a pergunta que é lamento

O Salmo 22 começa com {Deus meu, Deus meu, por que me desamparaste?} — e é exatamente essa frase que Jesus pronuncia na cruz (Mt 27:46; Mc 15:34). O {por que} não é uma pergunta por informação: é um lamento. A pergunta retórica em hebraico (אַלְמָה, alamá) e em grego (ἱνατί, hinati) é o mesmo grito: onde está você.

A diferença entre a pergunta e o lamento está no que segue. No Salmo, o versículo 2 muda o tom: {mas tu, Senhor, estás longe}; e a partir daí o tom muda para louvor. Jesus, na cruz, não tem os versículos seguintes — Ele fica na pergunta. Copiar o Salmo inteiro para a cruz é ler um hino que Ele não cantou naquele momento.

## O que ler

Em cada oração do Pai-Nosso, pergunte: é afirmação (indicativo), pedido (subjuntivo) ou ordem (imperativo)? E no Salmo 22, {por que} é pergunta por informação ou lamento? A resposta muda mais a leitura do que qualquer palavra isolada.`),
  vocab: [
    V('estás', 'estar', 'estás'),
    V('santificado', 'santificar', 'santificado'),
    V('dá-nos', 'dar', 'dá-nos'),
    V('perdoa', 'perdoar', 'perdoa'),
    V('dívidas', 'dívida', 'dívidas'),
    V('desamparaste', 'desamparar', 'desamparaste'),
    V('entregou', 'entregar', 'entregou'),
    V('pão', 'pão', 'pão'),
    V('reino', 'reino', 'reino'),
    V('tribulação', 'tribulação', 'tribulação'),
    V('perdoar', 'perdoar', 'perdoar'),
    V('nome', 'nome', 'nome'),
    V('céus', 'céu', 'céus (plural)'),
    V('hoje', 'hoje', 'hoje'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que {nos} significa em “nos céus”?'),
    options: [T('Pronome objeto'), T('em + os'), T('Verbo'), T('Adjetivo')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “___ nosso de cada dia”.'),
      answer: 'pão',
      hint: T('Alimento essencial.'),
    },
    {
      kind: 'choose',
      prompt: T('Em “Deus meu, Deus meu”, a repetição cria:'),
      options: [T('uma pergunta direta'), T('uma oração'), T('uma comparação'), T('um futuro')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Ligue pedido e resposta.'),
      pairs: [
        { a: T('santificado seja'), b: T('santificado seja') },
        { a: T('venha'), b: T('venha') },
        { a: T('seja feita'), b: T('seja feita') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Em {santificado seja o teu nome} e {venha o teu reino}, o verbo está no subjuntivo: a oração não afirma nada, ela pede. O grego de Mt 6:9 e 6:10 usa o mesmo modo ({ἁγιασθήτω}, {ἐλθέτω}).',
      ),
    },
    {
      n: '§2',
      text: T(
        '{dá-nos} é {dá} + {nos} colados, e {perdoa-nos} é {perdoa} + {nos}: o hífen da escrita mostra a junção que a fala esconde. Traduzir por {nos dá} mantém o sentido e desfaz a forma.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{perdoamos} afirma e {perdoemos} pede. A oração {assim como nós também perdoamos} traz {perdoamos} porque narra uma prática, e é a forma do grego (ἀφῆτε) que obriga a {perdoemos} na oração do pedido.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{não} mais verbo no subjuntivo é a fórmula do imperativo negativo: {não temas}, {não faltes}, {não leveis}. A forma {não temas} vem do subjuntivo, e não do futuro: {não temais} e {não temeram} são a mesma fórmula.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{por que} em {Deus meu, Deus meu, por que me desamparaste?} não pede informação: é lamento. O hebraico ({אַלְמָה}) e o grego ({ἱνατί}) que Jesus cita são a mesma pergunta retórica, e a resposta do Salmo (v. 2) é o que Jesus na cruz não tem.',
      ),
    },
  ],
  notes: [
    {
      label: T('Leitura'),
      text: T(
        'O Salmo 22 é oração de sofrimento antes de ser usado isoladamente como passagem. O v. 1 é o grito, o v. 2 já vira louvor, e Jesus na cruz fica no v. 1 (Mt 27:46; Mc 15:34).',
      ),
    },
    {
      label: T('Registro'),
      text: T(
        '{dá-nos} é a forma do português europeu. As correntes no Brasil são {dá pra nós} e {nos dá}: três registros para a mesma função, e a escolha é do tradutor conforme o público.',
      ),
    },
  ],
  examples: [
    {
      text: 'Pai nosso que estás nos céus.',
      gloss: T('Presente declarativo: a oração afirma, não pede.'),
    },
    { text: 'Santificado seja o teu nome.', gloss: T('Subjuntivo: pedido, não afirmação.') },
    { text: 'Venha o teu reino.', gloss: T('O mesmo subjuntivo, agora com {venha}.') },
    { text: 'Não nos leveis à tentação.', gloss: T('Imperativo negativo: {não} mais subjuntivo.') },
    {
      text: 'O pão nosso de cada dia dá-nos hoje.',
      gloss: T('Verbo e pronome na mesma palavra, mais o imperativo.'),
    },
    { text: 'Perdoa-nos as nossas dívidas.', gloss: T('{nos} é o objeto colado ao verbo.') },
    {
      text: 'Assim como nós também perdoamos.',
      gloss: T('{perdoamos} é afirmação, e por isso indicativo.'),
    },
    {
      text: 'Deus meu, Deus meu, por que me desamparaste?',
      gloss: T('A pergunta que é lamento (Salmo 22:1).'),
    },
    {
      text: 'Mas tu, Senhor, estás longe.',
      gloss: T('O v. 2 muda o tom: daqui em diante é louvor.'),
    },
  ],
  tables: [
    {
      caption: T('Os três tempos do Pai-Nosso'),
      head: ['Parte', 'Tempo', 'Exemplo'],
      rows: [
        ['invocação', 'presente', 'que estás nos céus'],
        ['pedido', 'subjuntivo', 'venha o teu reino'],
        ['instrução', 'imperativo', 'dá-nos hoje'],
      ],
    },
    {
      caption: T('Afirmar e pedir, lado a lado'),
      head: ['Verbo', 'O que faz', 'Exemplo'],
      rows: [
        ['perdoamos', 'afirma', 'assim como perdoamos'],
        ['perdoemos', 'pede', 'perdoa-nos'],
        ['perdoai', 'manda', 'perdoai aos outros'],
      ],
    },
    {
      caption: T('Verbo com pronome colado'),
      head: ['Forma', 'Separação', 'Pronome'],
      rows: [
        ['dá-nos', 'dá + nos', 'nos'],
        ['perdoa-nos', 'perdoa + nos', 'nos'],
        ['entregou-lho', 'entregou + lho', 'lhe + o'],
      ],
    },
  ],
};
