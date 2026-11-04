import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  section: T('Os conectivos'),
  title: T('Conjunções: coordinate'),
  subtitle: T('e, mas, pois, e a vírgula que decide a leitura'),
  body: C(`## O e que faz três coisas

A conjunção {e} é a mais usada do português e faz três trabalhos diferentes. Ela **soma**: {Deus amou o mundo e deu o seu Filho}. Ela **alterna**: {Não é branco nem preto}. E ela **inicia** a frase, posição em que não há soma nenhuma: {E viu Deus tudo o que tinha feito, e eis que era muito bom}.

O terceiro uso é o que o texto bíblico usa mais, e é o que o tradutor costuma perder. Em Gn 1.31, o {e} do começo da oração não tem o que somar: a frase inteira é um só ato.

## A oposição e a conclusão

As adversativas põem uma oração contra a outra: {mas}, {porém}, {contudo}, {todavia}, {entretanto}, {mas}. Entre elas há diferença de registro, não de sentido: {mas} é a mais forte e a mais comum em narrativa; {porém} e {contudo} são mais formais; {todavia} é a mais literária.

As conclusivas fecham um raciocínio: {logo}, {portanto}, {por isso}, {de sorte que}. E há a confusão clássica do português: {pois} é a adversativa antiga, e por isso significa {mas}, não {porque}. Em texto de 1611, {pois} depois de uma vírgula é {mas}: {Não foi possível levá-lo, pois estava morto}.

## A vírgula que decide

A vírgula antes de {e} não é obrigatória e o que ela faz é mudar o sentido. Em {vou à loja e comprei pão}, são duas ações da mesma pessoa: foi e comprou. Em {vou à loja, e comprei pão}, a primeira oração é um plano e a segunda é uma atitude contrária, e a vírgula separa as duas pessoas.

O mesmo acontece com {mas}. {Era pobre, mas honesto} põe duas qualidades na mesma pessoa. {Era pobre, mas não era honesto} diz outra coisa, e a vírgula é o que separa a negação.

## O que ler

Em qualquer conjunção, pergunte: ela soma, opõe ou conclui? E há vírgula antes? E a frase precisa dela para fazer sentido ou só para respirar?

João 1.14 começa com {E o Verbo se fez carne}: o {e} não soma nada, ele marca o começo da oração, e é a mesma função que o {e} de {eis que era muito bom} no primeiro capítulo. Quem traduz com {e} no meio de uma frase introduziu uma soma que o texto não tem.`),
  vocab: [
    V('e', 'e', 'e (conjunção)'),
    V('mas', 'mas', 'mas'),
    V('porém', 'porém', 'porém'),
    V('contudo', 'contudo', 'contudo'),
    V('todavia', 'todavia', 'todavia'),
    V('logo', 'logo', 'logo'),
    V('portanto', 'portanto', 'portanto'),
    V('por isso', 'isso', 'por isso'),
    V('pois', 'pois', 'pois (adversativa antiga)'),
    V('porque', 'porque', 'porque'),
    V('nem', 'nem', 'nem'),
    V('ou', 'ou', 'ou'),
    V('então', 'então', 'então'),
    V('mas sim', 'mas', 'mas sim'),
    V('a soma', 'soma', 'a soma'),
    V('a oposição', 'oposição', 'a oposição'),
  ],
  rules: [
    { n: '§1', text: T('{E} soma ({e}), alterna ({nem}, {ou}) e inicia a frase ({E viu Deus}).') },
    { n: '§2', text: T('As adversativas opõem: {mas}, {porém}, {contudo}, {todavia}.') },
    { n: '§3', text: T('As conclusivas fecham: {logo}, {portanto}, {por isso}, {de sorte que}.') },
    { n: '§4', text: T('{Pois} é a adversativa antiga e significa {mas}, não {porque}.') },
    {
      n: '§5',
      text: T(
        'A vírgula antes de {e} muda o sentido: separa duas ações da mesma pessoa de duas ações contrárias.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'O grego coordena o período com partículas: {δέ} soma, {ἀλλά} opõe, {γάρ} explica, {οὖν} conclui. O português traduz cada uma com uma palavra, e a escolha entre {mas} e {porém} é do tradutor.',
      ),
    },
    {
      label: T('O e inicial'),
      text: T(
        'O {e} que começa a frase não é soma: é uma partícula de ritmo. Em português popular ele aparece onde o grego teria {δέ}.',
      ),
    },
  ],
  examples: [
    { text: 'E viu Deus tudo o que tinha feito.', gloss: T('{E} no início da oração, sem soma.') },
    { text: 'Amou e deu a vida.', gloss: T('Duas ações do mesmo sujeito.') },
    { text: 'Não é prata nem ouro.', gloss: T('{Nem} alterna e nega.') },
    { text: 'Era pobre, mas honesto.', gloss: T('Duas qualidades da mesma pessoa.') },
    { text: 'Era pobre, mas não era honesto.', gloss: T('A vírgula muda o sentido.') },
    { text: 'Choveu; logo, fomos para dentro.', gloss: T('Conclusiva explícita.') },
    {
      text: 'Não foi possível levá-lo, pois estava morto.',
      gloss: T('{Pois} com sentido de {mas}.'),
    },
    { text: 'Ou vens, ou ficas.', gloss: T('{Ou} reforça a alternativa.') },
  ],
  tables: [
    {
      caption: T('Adversativas'),
      head: ['Conjunção', 'Registro', 'Exemplo'],
      rows: [
        ['mas', 'todos', 'era pobre, mas honesto'],
        ['porém', 'formal', 'era pobre, porém honesto'],
        ['contudo', 'formal', 'era pobre, contudo honesto'],
        ['todavia', 'literário', 'era pobre, todavia honesto'],
      ],
    },
    {
      caption: T('Conclusivas'),
      head: ['Conjunção', 'O que faz', 'Exemplo'],
      rows: [
        ['logo', 'fecha o raciocínio', 'logo, viu Deus'],
        ['portanto', 'formal', 'portanto, viu Deus'],
        ['por isso', 'marca a causa no fundo', 'por isso viu Deus'],
        ['pois', 'explica, com valor de porque', 'pois viu Deus'],
      ],
    },
    {
      caption: T('A vírgula com e'),
      head: ['Com vírgula', 'Sem vírgula', 'Diferença'],
      rows: [
        [
          'vou à loja, e comprei pão.',
          'vou à loja e comprei pão.',
          'atitude contrária contra ação única',
        ],
        [
          'era pobre, mas não era honesto.',
          'era pobre, mas honesto.',
          'negação contra característica',
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em «não foi possível levá-lo, pois estava morto», {pois} significa:'),
    options: [T('mas'), T('porque'), T('portanto'), T('então')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{e} no início da oração não é ______, é partícula de ritmo.'),
      answer: 'soma',
      hint: T('A frase não soma duas ações.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual conjunção é conclusiva?'),
      options: [T('portanto'), T('mas'), T('pois'), T('contudo')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue a conjunção ao seu valor.'),
      pairs: [
        { a: T('mas'), b: T('oposição') },
        { a: T('logo'), b: T('conclusão') },
        { a: T('pois'), b: T('oposição antiga') },
        { a: T('nem'), b: T('alternativa negativa') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};
