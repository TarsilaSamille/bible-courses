import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  section: T('Sintaxe'),
  title: T('A ordem SVO, que não é a nossa'),
  subtitle: T('O Mandarin põe o verbo no meio, e quem segura a frase é o contexto'),
  body: C(`
## O verbo vai para o meio

Português diz "eu como maçã": sujeito, verbo, objeto. O Mandarin diz {wǒ chī píngguǒ}, o mesmo com o {chī} no meio. Parece idêntico, e a diferença aparece no que vem depois. O português pode adiantar o objeto, "ontem comi-o"; em Mandarin o objeto fica depois do verbo, e o advérbio também: {wǒ zuótiān chī le tā}.

A ordem é sempre **sujeito, verbo, objeto**, e não se inverte. Por isso uma oração não pode ser movida para a frente como o português permite.

## O objeto indireto vem primeiro

Quando há dois complementos, o indireto vem primeiro: {wǒ gěi tā yī běn shū} é "dou-lhe um livro". O {gěi} marca "dar" e o {tā} é o objeto indireto. O português seria "dou um livro a ele"; a ordem dos complementos é a oposta, e quem traduz pela sintaxe portuguesa inverte tudo.

## Sem sujeito, a frase vira enigma

Com o verbo no meio e o sujeito omitido, um grupo isolado como {chī le} não significa nada: quem comeu? O contexto é obrigatório. É por isso que a leitura bíblica em chinês se faz por capítulos e não por versículos, e por isso que os Salmos, tão cheios de sintagma nominal, são mais difíceis do que a prosa dos Evangelhos.`),
  vocab: [
    V('chī', '吃', 'comer (chī)'),
    V('gěi', '给', 'dar (gěi)'),
    V('本', '本', 'livro; classificador (běn)'),
    V('昨天', '昨天', 'ontem (zuótiān)'),
  ],
  rules: [
    { n: '1', text: T('A ordem é sempre sujeito — verbo — objeto, e nunca se inverte.') },
    { n: '2', text: T('Com dois complementos, o indireto vem primeiro: {wǒ gěi tā yī běn shū}.') },
    { n: '3', text: T('Sem sujeito explícito, o contexto tem de dizer quem age.') },
  ],
  notes: [
    {
      label: T('Leia por capítulos, não por versículos'),
      text: T(
        'Numa língua onde o sujeito se omite e o verbo não fecha a frase, o versículo isolado perde o que o torna legível. O capítulo é a unidade de sentido.',
      ),
    },
  ],
  examples: [
    { text: '我吃苹果', gloss: T('wǒ chī píngguǒ — eu como maçã') },
    { text: '我昨天吃了它', gloss: T('wǒ zuótiān chī le tā — eu comi-o ontem') },
    { text: '我给他一本书', gloss: T('wǒ gěi tā yī běn shū — dou-lhe um livro') },
  ],
  tables: [
    {
      caption: T('Os mesmos dois complementos em ordens opostas'),
      head: [T('Língua'), T('Ordem dos complementos'), T('Exemplo')],
      rows: [
        [T('português'), T('objeto antes do indireto'), T('dou um livro a ele')],
        [T('chinês'), T('indireto antes do objeto'), T('{wǒ gěi tā yī běn shū}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {我给他一本书}, qual é o verbo?'),
    options: [T('{我}'), T('{给}'), T('{他}'), T('{本}')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete "eu como" com o verbo: 我____ (comer)'), answer: '吃' },
    {
      kind: 'match',
      prompt: T('Ligue a palavra à função na frase'),
      pairs: [
        { a: T('{我}'), b: T('sujeito') },
        { a: T('{吃}'), b: T('verbo') },
        { a: T('{昨天}'), b: T('advérbio de tempo') },
        { a: T('{本}'), b: T('classificador') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
