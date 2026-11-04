import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('O caso e as três terminações'),
  subtitle: T('ـُ، ـَ، ـِ'),
  section: T('O nome'),
  body: C(`## Três terminações e uma pergunta

O latim tinha três casos e perdeu dois no caminho até o português. O português guardou um vestígio, e ele está dentro das preposições: "de mim", "para Deus", "a ele". O árabe guardou os três, e a marca está no substantivo, não na preposição.

São {ـُ} no nominativo, {ـَ} no acusativo e {ـِ} no genitivo: {كِتَابٌ}, {كِتَابًا}, {كِتَابٍ}. A pergunta que decide é uma só, e é sobre o nome: **o que este nome faz nesta oração?** Se é sujeito, nominativo. Se é objeto direto de verbo transitivo, acusativo. Se está depois de uma preposição, genitivo.

É por isso que a terminação é a informação mais barata que a frase oferece. Um leitor que traduz a partir da preposição vai errar meio tempo, porque {بِـ} e {لِـ} pedem genitivo e {كَتَبَ} pede acusativo, e as duas coisas estão na mesma linha.

## Quem decide o caso

O caso vem da função, e as funções são poucas. O sujeito de qualquer verbo vai no nominativo: {جَاءَ الرَّجُلُ}. O objeto direto de um verbo transitivo vai no acusativo: {كَتَبَ رِسَالَةً}. O complemento de uma preposição vai no genitivo: {فِي الْبَيْتِ}.

Há um caso que não vem de nenhuma dessas fontes e que aparece o tempo todo: **o segundo elemento de uma iḍāafa é sempre genitivo**. {بَيْتُ اللهِ} não tem preposição nenhuma à vista, e mesmo assim {اللهِ} está no genitivo, porque é a segunda peça de um conjunto. É o único contexto em que o genitivo aparece sem preposição, e por isso é o que mais engana quem está começando.

O verbo {كَانَ} tem um comportamento próprio que precisa ser isolado. O sujeito dele é nominativo, como sempre: {كَانَ الْمَلِكُ}. O que vem depois é predicativo, e o predicativo vai no acusativo: {كَانَ الْمَلِكُ عَالِمًا}. Traduzir isso como nominativo produz uma frase que ninguém diz.

## Onde o caso não aparece

E aqui está a exceção, que ocupa mais que a regra porque é onde o leitor erra.

O plural feminino regular esconde o caso. {مُعَلِّمَاتٌ} é nominativo e {مُعَلِّمَاتٍ} é acusativo ou genitivo, mas a vogal final some e as duas formas ficam idênticas quando a {ة} não se escreve. Um dicionário dirá que são a mesma palavra, e o texto biblical está cheio de casos em que o caso só se sabe pela preposição que vem antes.

O mesmo acontece com o plural de {أَفْعَال}: {رِجَالٌ}, {رِجَالٍ}, {رِجَالٍ}. E com o plural masculino regular, que ao menos distingue o nominativo {ـُونَ} dos outros.

A lista mais curta é a dos diptotos. São poucas palavras, quase todas nome próprio ou nome de lugar: {أَحْمَدٌ}, {مَسْجِدٌ}, {هِنْدٌ}, {دِينَارٌ}. Elas trocam a vogal final por {ٍ} no genitivo e a suprimem no acusativo: {رَأَيْتُ أَحْمَدٍ}, {فِي مَسَاجِدَ}, {فِي مَسَاجِدٍ}. Quem não souber que a lista existe vai ler {فِي مَسَاجِدَ} como erro de escrita.

## Critério de leitura

Comece pelo verbo e siga a partir dele. Em {كَذَا بَحُبُّ اللَّهُ الْعَالَمَ حَتَّى بَذَلَ ابْنَهُ} há duas construções de acusativo: {الْعَالَمَ} é objeto de {بَحُبّ}, {ابْنَهُ} é objeto de {بَذَلَ}, e a fatha final de cada um diz isso sem ajuda nenhuma. Um leitor que traduz a terminação final como nominativo chega ao fim com a frase inteira errada, e o erro é invisível se ele não olhar para o substantivo.`),
  vocab: [
    V('كِتَابٌ', 'كتاب', 'livro; nominativo'),
    V('كِتَابًا', 'كتاب', 'livro; acusativo'),
    V('كِتَابٍ', 'كتاب', 'livro; genitivo'),
    V('رِسَالَةً', 'رسالة', 'mensagem; acusativo'),
    V('رَجُلٌ', 'رجل', 'homem; nominativo'),
    V('جَاءَ', 'جاء', 'veio'),
    V('الْبَيْتِ', 'بيت', 'a casa; genitivo'),
    V('الْمَلِكُ', 'ملك', 'o rei; nominativo'),
    V('عَالِمًا', 'علم', 'sábio; acusativo como predicativo'),
    V('كُتُبٌ', 'كتب', 'livros; plural quebrado no nominativo'),
    V('كُتُبًا', 'كتب', 'livros; plural quebrado no acusativo'),
    V('أَحْمَدٌ', 'أحمد', 'nome próprio; diptoto'),
    V('مَسَاجِدَ', 'مسجد', 'mesquitas; diptoto no acusativo'),
    V('الْعَالَمَ', 'عالم', 'o mundo; acusativo'),
    V('بَحُبُّ', 'حبب', 'ama'),
    V('ابْنَهُ', 'ابن', 'o filho dele; acusativo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {كَتَبَ رِسَالَةً}, qual é o caso de {رِسَالَةً}?'),
    options: [T('Nominativo'), T('Acusativo'), T('Genitivo'), T('Vocal')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o genitivo: “em uma casa” é {فِي ___}.'),
      answer: 'بَيْتٍ',
      hint: T('Depois de uma preposição o nome recebe a terminação com kasra.'),
    },
    {
      kind: 'match',
      prompt: T('Associe função e caso.'),
      pairs: [
        { a: T('sujeito'), b: T('nominativo') },
        { a: T('objeto direto'), b: T('acusativo') },
        { a: T('depois de preposição'), b: T('genitivo') },
        { a: T('segunda peça da iḍāafa'), b: T('genitivo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em {كَانَ الْمَلِكُ عَالِمًا}, qual é o caso de {عَالِمًا}?'),
      options: [T('Nominativo'), T('Acusativo'), T('Genitivo'), 'Dual'],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('Qual destas palavras é diptoto?'),
      options: [T('كِتَابٌ'), T('أَحْمَدٌ'), T('مُعَلِّمٌ'), 'كِتَابَتَانِ'],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('**O caso é uma terminação do nome: {ـُ} nominativo, {ـَ} acusativo, {ـِ} genitivo.**'),
    },
    {
      n: '2',
      text: T(
        'O caso é decidido pela função do nome na oração: sujeito, objeto direto ou complemento de preposição.',
      ),
    },
    {
      n: '3',
      text: T(
        'O segundo elemento de uma iḍāafa é sempre genitivo, e é o único contexto em que o genitivo aparece sem preposição.',
      ),
    },
    {
      n: '4',
      text: T('O plural feminino regular esconde o caso: {مُعَلِّمَاتٌ} e {مُعَلِّمَاتٍ} são as duas formas.'),
    },
    {
      n: '5',
      text: T(
        'Os diptotos trocam a vogal final por {ٍ} no genitivo e a suprimem no acusativo: {فِي مَسَاجِدَ}, {فِي مَسَاجِدٍ}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que o latim perdeu'),
      text: T(
        'O latim conservou os três casos até o fim, e o português herdou o caso só dentro das preposições: "de mim", "para Deus". O árabe guardou os três, e por isso a terminação é informação e não enfeite.',
      ),
    },
    {
      label: T('O caso que não está escrito'),
      text: T(
        'Num texto antigo o caso nem sempre aparece. A terminação ausente às vezes se recupera pela terminação do verbo ou pela preposição que vem depois, e é por isso que o mesmo substantivo aparece com {ـُ} num manuscrito e {ـَ} noutro sem que nenhum dos dois esteja errado.',
      ),
    },
  ],
  examples: [
    { text: 'جَاءَ الرَّجُلُ', gloss: T('o homem veio; sujeito no nominativo') },
    { text: 'كَتَبَ رِسَالَةً', gloss: T('ele escreveu uma mensagem; acusativo') },
    { text: 'فِي الْبَيْتِ', gloss: T('em casa; genitivo por preposição') },
    { text: 'بَيْتُ اللهِ', gloss: T('a casa de Deus; genitivo por iḍāafa') },
    { text: 'كَانَ الْمَلِكُ عَالِمًا', gloss: T('o rei era sábio; predicativo no acusativo') },
    { text: 'مُعَلِّمَاتٍ', gloss: T('mestras; acusativo e genitivo iguais') },
    { text: 'كُتُبٌ', gloss: T('livros; plural quebrado no nominativo') },
    { text: 'أَحْمَدٍ', gloss: T('Ahmad; diptoto no genitivo') },
    { text: 'فِي مَسَاجِدَ', gloss: T('em mesquitas; diptoto no acusativo, sem vogal final') },
  ],
  tables: [
    {
      caption: T('As três terminações'),
      head: [T('Caso'), T('Terminação'), T('Função'), T('Exemplo')],
      rows: [
        [T('nominativo'), 'ـُ', T('sujeito'), 'كِتَابٌ'],
        [T('acusativo'), 'ـَ', T('objeto direto, predicativo'), 'كِتَابًا'],
        [T('genitivo'), 'ـِ', T('regido por preposição ou iḍāafa'), 'كِتَابٍ'],
      ],
    },
    {
      caption: T('Quem decide o caso'),
      head: [T('Papel do nome'), T('Caso'), T('Exemplo')],
      rows: [
        [T('sujeito do verbo'), T('nominativo'), 'جَاءَ الرَّجُلُ'],
        [T('objeto de verbo transitivo'), T('acusativo'), 'كَتَبَ رِسَالَةً'],
        [T('depois de preposição'), T('genitivo'), 'فِي الْبَيْتِ'],
        [T('segunda peça da iḍāafa'), T('genitivo'), 'بَيْتُ اللهِ'],
        [T('predicativo depois de {كَانَ}'), T('acusativo'), 'عَالِمًا'],
      ],
    },
    {
      caption: T('Onde o caso se esconde'),
      head: [T('Tipo'), T('Nominativo'), T('Acusativo'), T('Genitivo')],
      rows: [
        [T('feminino regular'), 'مُعَلِّمَاتٌ', 'مُعَلِّمَاتٍ', 'مُعَلِّمَاتِ'],
        [T('masculino regular'), 'مُعَلِّمُونَ', 'مُعَلِّمِينَ', 'مُعَلِّمِينَ'],
        [T('plural quebrado'), 'كُتُبٌ', 'كُتُبًا', 'كُتُبٍ'],
        [T('diptoto'), 'أَحْمَدٌ', 'أَحْمَدًا', 'أَحْمَدٍ'],
      ],
    },
  ],
};
