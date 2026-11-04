import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Verbos no passado'),
  subtitle: T('كَتَبَ: raízes e sufixos pessoais'),
  section: T('O verbo'),
  body: C(`## A raiz triconsonantal

Cada verbo árabe nasce de uma raiz de três consoantes, e é ela que carrega o significado. {ك-ت-ب} significa escrever; {ق-و-ل} dizer; {خ-ل-ق} criar. A raiz não é uma palavra: é um padrão de três consoantes ao qual se encaixam vogais e sufixos. Por isso dois verbos da mesma raiz se reconhecem mesmo sem nenhuma semelhança de forma.

## O passado

O passado se forma acrescentando vogais e um sufixo de pessoa. Compare {كَتَبَ} (ele), {كَتَبَتْ} (ela), {كَتَبْتَ} (tu), {كَتَبْتُ} (eu), {كَتَبْنَا} (nós) e {كَتَبُوا} (eles). O final {وا} é a marca do plural masculino; {نا}, a do plural comum. Quem termina em {ت} é a segunda pessoa ou a terceira feminina — é o contexto que separa as duas.

## Vogais epentéticos

As vogais do passado não são arbitrárias: {كَتَبَ} traz {ا} após a primeira consoante, e a segunda consoante recebe {َ}. Em raízes que terminam em consoante média, aparece {ِ} sob a última: {قَالَ}. É essa regra que permite distinguir uma raiz triconsonantal de uma fraca, tema da lição 8.

## O tempo na frase

Em Gênesis 1:3, {وَقَالَ اللهُ: لِيَكُنْ نُورٌ} a estrutura é verbo no passado seguido de ordem no jussivo. O passado de {ق-و-ل} narrou; o {لِيَكُنْ} ordena. O verbo {خَلَقَ} aparece em seguida, e é a forma que a tradução corrente diz "houve luz" — o português genérico esconde a distinção que o árabe mantém.

## Critério de leitura

Ao encontrar um verbo no texto, retire primeiro a raiz de três consoantes, depois identifique o sufixo de pessoa e só então interprete o tempo. A raiz é o que permite a pesquisa no dicionário.`),
  vocab: [
    V('كَتَبَ', 'كتب', 'ele escreveu'),
    V('كَتَبَتْ', 'كتب', 'ela escreveu'),
    V('كَتَبْتَ', 'كتب', 'tu escreveste'),
    V('كَتَبْتُ', 'كتب', 'eu escrevi'),
    V('كَتَبْنَا', 'كتب', 'nós escrevemos'),
    V('كَتَبُوا', 'كتب', 'eles escreveram'),
    V('قَالَ', 'قال', 'ele disse'),
    V('خَلَقَ', 'خلق', 'ele criou'),
    V('آمَنَ', 'آمن', 'ele creu'),
    V('أَنَا', 'أنا', 'eu'),
    V('أَنْتَ', 'أنت', 'tu'),
    V('نَحْنُ', 'نحن', 'nós'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: ___ كَتَبَ (ele escreveu).'),
    answer: 'هُوَ',
    hint: T('Pronome de terceira pessoa masculina.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Associe pessoa e forma.'),
      pairs: [
        { a: T('eu'), b: T('كَتَبْتُ') },
        { a: T('nós'), b: T('كَتَبْنَا') },
        { a: T('ela'), b: T('كَتَبَتْ') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('Qual raiz significa escrever?'),
      options: [T('ق-و-ل'), T('ك-ت-ب'), T('خ-ل-ق'), T('آ-م-ن')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('Em {وَقَالَ اللهُ}, qual função tem اللهُ?'),
      options: [T('objeto'), T('sujeito'), T('advérbio'), T('numeral')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('A raiz descreve o significado; não aparece sozinha como palavra funcional.'),
    },
    {
      n: '2',
      text: T(
        'O passadoBuiltin ends com sufixo pessoal, exceto 3.ª m., cuja terminação -a é ambígua em contexto.',
      ),
    },
    { n: '3', text: T('A negação do passado pode ser {لَمْ} + jussivo, como em {لَمْ يَكْتُبْ}.') },
  ],
  notes: [
    {
      label: T('Ordem'),
      text: T('A ordem verbo-sujeito-objeto é típica, mas a posição do sujeito pode variar.'),
    },
  ],
  examples: [
    { text: 'قَالَ اللهُ', gloss: T('allāhu qāla — Deus disse') },
    { text: 'آمَنْتُ بِالله', gloss: T('āmantu billāh — eu creu em Deus') },
    { text: 'لِيَكُنْ نُورٌ', gloss: T('li-yakun nūr — haja luz') },
  ],
  tables: [
    {
      caption: T('Paradigma de كتب'),
      head: [T('Pessoa'), T('Singular'), T('Plural')],
      rows: [
        ['1.ª', 'كَتَبْتُ', 'كَتَبْنَا'],
        ['2.ª m.', 'كَتَبْتَ', 'كَتَبْتُمْ'],
        ['2.ª f.', 'كَتَبْتِ', 'كَتَبْتُنَّ'],
        ['3.ª m.', 'كَتَبَ', 'كَتَبُوا'],
        ['3.ª f.', 'كَتَبَتْ', 'كَتَبْنَ'],
      ],
    },
  ],
};
