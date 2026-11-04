import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('Fonética'),
  title: T('Os quatro tons'),
  subtitle: T('A mesma sílaba, quatro significados — o tom é parte da palavra'),
  body: C(`## O que é o tom

O Mandarin é uma língua tonal: cada sílaba tem um dos quatro tons, mais um tom neutro. O tom não é melodia; é altura relativa. Duas sílabas idênticas com tons diferentes são palavras diferentes, às vezes de significado oposto.

Os quatro tons são {ā}, primeiro, alto e plano; {á}, segundo, que sobe; {ǎ}, terceiro, que desce e sobe; e {à}, quarto, que desce bruscamente. O tom neutro, sem marca, é o das sílabas curtas, e soa como meio-tom.

O exemplo mais citado mostra por que isso importa para a tradução: {mā} é "mãe", {má} é "cavalo" e {mǎ} é "peça de xadrez". A mesma escrita, três palavras sem relação.

## O atalho do terceiro tom

Para quem está a ler há um atalho: **quase toda sílaba com o terceiro tom** escreve-se com a vogal {i} ou {u}. É por isso que {nǐ}, "você", e {hǎo}, "bom", têm aquele som que soa tão diferente de {nī} e {hāo}. A regra falha em poucos casos, {ē} e {é}, o que basta para enganar quem se apoia nela sozinha.

## O tom na leitura da Bíblia

Os versículos chineses são escritos sem qualquer marca de tom, e o tradutor escolheu o tom pelo sentido. Quem lê em voz alta precisa recriar essa escolha. Em João 1:1, {yǔ} é o verbo "ser" na terceira pessoa, e o tradutor escreve {是}: o contexto resolve o que a escrita não diz.`),
  vocab: [
    V('妈', '妈', 'mãe (mā, tom 1)'),
    V('马', '马', 'cavalo; peça de xadrez (mǎ, tom 3)'),
    V('nǐ', '你', 'você (nǐ, tom 3)'),
    V('hǎo', '好', 'bom (hǎo, tom 3)'),
    V('是', '是', 'ser (shì, tom 4)'),
    V('不', '不', 'não (bù, tom 4)'),
    V('四', '四', 'quatro (sì, tom 4)'),
  ],
  rules: [
    { n: '1', text: T('Cada sílaba tem um de quatro tons, ou tom neutro.') },
    { n: '2', text: T('O terceiro tom quase sempre se escreve com {i} ou {u}: {nǐ} e {hǎo}.') },
    {
      n: '3',
      text: T(
        'Dois terceiros seguidos: o primeiro éFalado com altura baixa, para não colidir — {nǐ hǎo} soa como "níhhǎo".',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que o texto não tem tom'),
      text: T(
        'A {和合本} é de 1919 e escreve sem marcas de tom, por influência do costume europeu. As edições modernas usam marcas.',
      ),
    },
  ],
  examples: [
    { text: '妈', gloss: T('mā — mãe (tom 1)') },
    { text: '马', gloss: T('mǎ — cavalo / peça (tom 3)') },
    { text: '你好', gloss: T('nǐ hǎo — olá (dois terceiros)') },
  ],
  tables: [
    {
      caption: T('Os quatro tons'),
      head: [T('Tom'), T('Marca'), T('Altura'), T('Exemplo')],
      rows: [
        [T('1'), T('{ā}'), T('alto e plano'), T('{mā} mãe')],
        [T('2'), T('{á}'), T('sobe'), T('{má} cavalo')],
        [T('3'), T('{ǎ}'), T('desce e sobe'), T('{mǎ} peça')],
        [T('4'), T('{à}'), T('desce'), T('{mà}四项')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {nǐ hǎo}, o que acontece com o primeiro tom?'),
    options: [
      T('Fica no terceiro tom'),
      T('É falado com altura baixa, para não colidir'),
      T('Muda para o primeiro tom'),
      T('Vira tom neutro'),
    ],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Escreva a vogal acentuada de "mãe": m____'), answer: 'ā' },
    {
      kind: 'match',
      prompt: T('Ligue a sílaba ao tom'),
      pairs: [
        { a: T('{mā}'), b: T('tom 1 — mãe') },
        { a: T('{mà}'), b: T('tom 4 — desce') },
        { a: T('{hǎo}'), b: T('tom 3 — desce e sobe') },
        { a: T('{má}'), b: T('tom 2 — sobe') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
