import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  section: T('Verbo'),
  title: T('Os verbos essenciais'),
  subtitle: T(
    '{gada}, {oda}, {hada}, {itda}, {meokda}, {boda}: os verbos que sustentam quase toda frase',
  ),
  body: C(`## As duas listas de verbos

Todo verbo coreano pertence a uma de duas listas, e a diferença não é de sentido nem de estilo: é de flexão. Os verbos cuja raiz termina em vogal ou em {-l} mudam de forma conforme o registro: {gada} «ir» faz {ga}, {gayo}, {gamnida}. Os verbos cuja raiz termina em outra consoante nunca mudam: {meokda} «comer» é a mesma palavra em qualquer frase, e o que muda é a terminação que vem depois.

A lista longa é a maior parte do idioma, e é onde o iniciante trava, porque um verbo que não muda parece errado dentro da frase. A lista curta é curta mesmo: {gada} ir, {oda} vir, {hada} fazer, {boda} ver, {juda} dar, {sseuda} escrever, {masida} beber, {gareuchida} ensinar, {saranghada} amar respondem por quase tudo o que se fala.

## {itda} e {eopda}: haver e não haver

{itda} cobre o que o português reparte entre «haver», «estar» e «ter»: {chaek-i itda} é «há um livro» e «tenho um livro», com o mesmo verbo. {eopda} é a negação dele, e não de outro verbo: {chaek-i eopda}, «não há livro». Quem procura um verbo separado para «ter» não encontra, porque não existe.

Isso muda a negação. Como {eopda} já é o negativo de {itda}, a frase «não há» não leva o negador {an}: escrever {an itda} é negar duas vezes.

## O passado e as duas negações

O passado se forma com {-at-} ou {-eot-} entre a raiz e a terminação: {meokda} faz {meogeotda}, «comi», e {hada} faz {haetda}, «fiz». É o mesmo sufixo nas duas listas, e é por isso que a lista longa não é tão imóvel quanto parece: a raiz fica, o passado entra no meio.

A negação tem duas formas. {an} vem antes do verbo: {an meokda}, «não como». E {-ji anta} vem depois, com o verbo auxiliar: {meokji anta}, «não como». As duas dizem o mesmo, e a segunda é a que se usa quando o verbo é longo ou quando a frase pede registro escrito.

## Na Bíblia

João 1:1 abre com {gyesida}, o honorífico de {itda}: {taechoe malsseum-i gyesyeotda}, «no princípio era o Verbo». O coreano não usa {itda} puro para falar de Deus: o verbo da existência ganha a marca de respeito, e o passado {gyesyeotda} carrega as duas coisas ao mesmo tempo.

João 3:16 traz dois verbos essenciais em sequência: {saranghasa}, de {saranghada} «amar», e {jusyeotda}, o passado honorífico de {juda} «dar». Deus amou e deu, e os dois verbos são da lista curta. Marcos 4:39 fecha com {jamjamhara! goyohara!}, «cala-te! aquieta-te!», que é o imperativo de {-hara} sobre a raiz: o coreano manda sem sujeito e sem pessoa.`),
  vocab: [
    V('gada', '가다', 'ir'),
    V('ga', '가', 'vou (forma plana)'),
    V('gayo', '가요', 'vou (polido falado)'),
    V('gamnida', '갑니다', 'vou (polido escrito)'),
    V('oda', '오다', 'vir'),
    V('hada', '하다', 'fazer'),
    V('haetda', '했다', 'fiz'),
    V('itda', '있다', 'haver, estar, ter'),
    V('eopda', '없다', 'não haver'),
    V('gyesida', '계시다', 'haver (honorífico)'),
    V('meokda', '먹다', 'comer'),
    V('meogeotda', '먹었다', 'comi'),
    V('masida', '마시다', 'beber'),
    V('boda', '보다', 'ver'),
    V('deutda', '듣다', 'ouvir'),
    V('malhada', '말하다', 'dizer'),
    V('alda', '알다', 'saber'),
    V('juda', '주다', 'dar'),
    V('jusida', '주시다', 'dar (honorífico)'),
    V('saranghada', '사랑하다', 'amar'),
    V('an', '안', 'não (antes do verbo)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Raiz terminada em vogal ou {-l} flexiona: {gada}, {ga}, {gayo}, {gamnida}. Raiz terminada em consoante não muda: {meokda}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{itda} é «haver», «estar» e «ter» com o mesmo verbo: {chaek-i itda} é «há livro» e «tenho livro».',
      ),
    },
    {
      n: '§3',
      text: T(
        '{eopda} é o negativo de {itda}, e não leva {an}: {chaek-i eopda}, nunca {an eopda}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O passado entra com {-at-} ou {-eot-} entre a raiz e a terminação: {meokda} → {meogeotda}, {hada} → {haetda}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'A negação curta {an} vem antes do verbo; a longa {-ji anta} vem depois: {an meokda} e {meokji anta}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O itda que não é «ser»'),
      text: T(
        '{itda} não é a cópula. «Ele é médico» é {geu-neun uisa-ida}, com {ida}, e não com {itda}. O {ida} identifica; o {itda} diz que algo existe ou está em algum lugar.',
      ),
    },
    {
      label: T('O an que não entra no passado'),
      text: T(
        'A negação curta {an} fica antes do verbo e não se move no passado: {an meogeotda}, «não comi», mantém o {an} na frente e o passado no verbo.',
      ),
    },
  ],
  examples: [
    {
      text: '처음에 말씀이 계셨다',
      gloss: T('Jo 1:1 — {계시다} é o honorífico de {있다}: no princípio havia a Palavra.'),
    },
    {
      text: '하나님이 세상을 사랑하사',
      gloss: T('Jo 3:16 — {사랑하사}, de {사랑하다}: Deus amou o mundo.'),
    },
    {
      text: '독생자를 주셨다',
      gloss: T('Jo 3:16 — {주셨다}, passado honorífico de {주다}: deu o Filho.'),
    },
    {
      text: '잠잠하라! 고요하라!',
      gloss: T('Mc 4:39 — imperativo de {-하라}: cala-te, aquieta-te.'),
    },
    { text: '책이 있다', gloss: T('{있다} com partícula de sujeito: há livro.') },
    { text: '책이 없다', gloss: T('{없다} nega sem {안}: não há livro.') },
    { text: '먹었다', gloss: T('passado de {먹다}: comi.') },
    { text: '안 먹다', gloss: T('{안} antes do verbo: não como.') },
    { text: '먹지 않다', gloss: T('{-지 않다} depois do verbo: não como.') },
  ],
  tables: [
    {
      caption: T('Os essenciais: dicionário, polido e passado'),
      head: [T('Dicionário'), T('Polido'), T('Passado'), T('Sentido')],
      rows: [
        [T('{gada}'), '{gamnida}', '{gatda}', T('ir')],
        [T('{oda}'), '{omnida}', '{watda}', T('vir')],
        [T('{hada}'), '{hamnida}', '{haetda}', T('fazer')],
        [T('{boda}'), '{bomnida}', '{boatda}', T('ver')],
        [T('{meokda}'), '{meokseumnida}', '{meogeotda}', T('comer')],
        [T('{juda}'), '{jumida}', '{jwotda}', T('dar')],
        [T('{alda}'), '{amnida}', '{aratda}', T('saber')],
      ],
    },
    {
      caption: T('As duas negações'),
      head: [T('Forma'), T('Posição'), T('Exemplo')],
      rows: [
        [T('{an}'), T('antes do verbo'), '{an meokda}'],
        [T('{-ji anta}'), T('depois do verbo'), '{meokji anta}'],
        [T('{eopda}'), T('substitui {itda}'), '{chaek-i eopda}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {taechoe malsseum-i gyesyeotda}, qual é o verbo de base?'),
    options: [T('{itda}'), T('{ida}'), T('{hada}'), T('{oda}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete «{doksaengja-reul ___}» com o passado honorífico de {juda} (Jo 3:16).'),
      answer: 'jusyeotda',
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao seu passado.'),
      pairs: [
        { a: T('{meokda}'), b: T('{meogeotda}') },
        { a: T('{hada}'), b: T('{haetda}') },
        { a: T('{gada}'), b: T('{gatda}') },
        { a: T('{oda}'), b: T('{watda}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual forma nega {itda}?'),
      options: [T('{an itda}'), T('{eopda}'), T('{itji anta}'), T('{anida}')],
      answer: 1,
    },
  ],
};
