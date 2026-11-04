import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('As três vozes do verbo'),
  subtitle: T('فَعَلَ، يَفْعَلُ، سَيَفْعَلُ'),
  section: T('O verbo'),
  body: C(`## Três vozes, não três tempos

O verbo árabe tem três formas principais, e o que elas marcam não é tempo: é aspecto. **O perfeito apresenta o evento como inteiro; o imperfeito, como em curso; o futuro, como por vir.**

{كَتَبَ} é perfeito e significa "escreveu", mas também pode significar "escreveu e acabou": operfecto dobra o efeito. {يَكْتُبُ} é imperfeito e significa "escreve", no sentido de o processo estar em curso, e é a forma que o português traduziria por presente ou por futuro, conforme o contexto. {سَيَكْتُبُ} é futuro e se reconhece pelo prefixo {سَـ} colado ao imperfeito.

A consequência para a leitura é séria. Quem traduz {كَتَبَ} por "escrevia" errou; quem traduz {يَكْتُبُ} por "escreveu" errou; e quem traduz {يَكْتُبُ} por "escreve" acertou sem saber por quê, porque acertou a aspecto e não a tempo.

## O passado tem três vogais, e isso é o segredo

O perfeito não tem uma só forma de vogalizar. {كَتَبَ} é {فَعَلَ}, com {a} no primeiro e na última posição. {عِلِمَ} é {فَعِلَ}, com {i} na primeira e {a} na última. {نَصَرَ} é {فَعُلَ}, com {u} na primeira e {a} na última.

Essas três vogais não são acaso. Elas **classificam a raiz**, e a classificação decide quais preposições o verbo aceita e como o nome verbal dele é formado. Um verbo da classe {فَعِلَ} tende a reger {بِـ} ou {لِـ}; um da classe {فَعُلَ} tende a reger {لِـ}; e os da classe {فَعَلَ}, que são a maioria, quase não usam partícula nenhuma. {كَتَبَ} não usa partícula, {عِلِمَ} usa {بِـ}, {نَصَرَ} usa {لِـ}.

O nome verbal segue a mesma lógica: {مَفْعَل} para {فَعَلَ}, {مَفْعِلَة} para {فَعِلَ} e {فَعُلْ}. {عِلْم} vem de {عِلِمَ} e {نَظَرٌ} vem de {نَصَرَ}. Quem conhece a classe vocal da raiz sabe o nome verbal antes de abrir o dicionário.

## A forma curta

E há uma quarta forma que aparece mais do que as outras três, e que ninguém teachingxlhes é uma forma conjugada. É o imperfeito ou o jussivo sem os sufixos de pessoa.

{اُكْتُبْ} é o comando. {أَنْ يُكْتَبَ} é "que se escreva". {لَنْ يُهْلِكَ} é "não será destruído". Em todos os três a pessoa desaparece, e a ausência é a informação: quem não flexiona não está julgando a pessoa, está afirmando algo em geral.

É por isso que ditos e sentenças usam essa forma. Um provérbio que diz "o homem escreve" não flexiona porque o proverbio não conta pessoas, e é a forma curta que resolve isso sem precisar de pronome.

A origem histórica da forma curta é o final {ا} do perfeito, que caiu ao longo do tempo: {فَعَلَ} virou {فَعَلْ} virou {فَعَل}. Quem lê um texto antigo encontra as duas coisas no mesmo manuscrito, e a flexão do sufixo é o que diz qual das duas está em uso.

## Critério de leitura

Em {وَقَالَ اللهُ: لِيَكُنْ نُورٌ، فَكَانَ نُورٌ} há três vozes em uma frase. {وَقَالَ} é perfeito e narra uma ação concluída. {لِيَكُنْ} é jussivo precedido de {لِـ}, e o {لِـ} aqui não é posse nem destino: é finalidade, "para que haja". {فَكَانَ} é perfeito de novo, e repete o evento como resultado.

Uma frase de cinco palavras que contém duas vozes e uma finalidade, e a tradução que escreve "disse Deus: haja luz, e houve luz" acerta as três porque leu as formas e não as traduções anteriores.`),
  vocab: [
    V('كَتَبَ', 'كتب', 'escreveu'),
    V('يَكْتُبُ', 'كتب', 'escreve'),
    V('سَيَكْتُبُ', 'كتب', 'escreverá'),
    V('اُكْتُبْ', 'كتب', 'escreve!'),
    V('عِلِمَ', 'علم', 'soube; aprendeu'),
    V('نَصَرَ', 'نصر', 'olhou'),
    V('وَقَالَ', 'قال', 'disse'),
    V('لِيَكُنْ', 'كان', 'que haja; que seja'),
    V('نُورٌ', 'نور', 'luz'),
    V('فَعَلَ', 'فعل', 'o molde do perfeito'),
    V('مَفْعَل', 'فعل', 'o molde do nome verbal'),
    V('مَفْعِلَة', 'فعل', 'o molde do nome verbal'),
    V('مَفْعُولَة', 'فعل', 'o molde do nome verbal'),
    V('كَانَ', 'كان', 'era; esteve'),
    V('يَفْعَلُ', 'فعل', 'o molde do imperfeito'),
    V('سَـ', 'س', 'prefixo do futuro'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a forma do futuro?'),
    options: [T('كَتَبَ'), T('يَكْتُبُ'), T('سَيَكْتُبُ'), T('اُكْتُبْ')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o molde do perfeito da classe i: {عِلِمَ} segue ___ِعِلَ.'),
      answer: 'فَ',
      hint: T('É o molde {فَعِلَ}.'),
    },
    {
      kind: 'match',
      prompt: T('Associe molde e exemplo.'),
      pairs: [
        { a: T('فَعَلَ'), b: T('كَتَبَ') },
        { a: T('فَعِلَ'), b: T('عِلِمَ') },
        { a: T('فَعُلَ'), b: T('نَصَرَ') },
        { a: T('فَعَلْ'), b: T('اُكْتُبْ') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('O que a forma curta descarta?'),
      options: [T('A pessoa'), T('A raiz'), T('O passado'), T('A vogal')],
      answer: 0,
    },
    {
      kind: 'choose',
      prompt: T('Em {لِيَكُنْ نُورٌ}, que uso tem {لِـ}?'),
      options: [T('Posse'), T('Destino'), T('Finalidade'), T('Origem')],
      answer: 2,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('**O árabe tem três vozes, não três tempos: perfeito, imperfeito e futuro.**'),
    },
    { n: '2', text: T('O perfeito apresenta o evento como inteiro; o imperfeito, como em curso.') },
    {
      n: '3',
      text: T(
        'A terceira vogal do perfeito ({َ}, {ِ}, {ُ}) classifica a raiz e prevê quais preposições o verbo aceita.',
      ),
    },
    {
      n: '4',
      text: T('O futuro é {سَـ} mais o imperfeito, e o comando é o imperfeito sem prefixo.'),
    },
    {
      n: '5',
      text: T(
        'A forma curta é o imperfeito ou o jussivo sem sufixo de pessoa, e aparece depois de {أَنْ}, {لَنْ} e do {لِـ} de finalidade.',
      ),
    },
  ],
  notes: [
    {
      label: T('A mesma raiz, três vozes'),
      text: T(
        '{كَتَبَ}, {يَكْتُبُ} e {سَيَكْتُبُ} têm as mesmas três consoantes, e as vogais mudam de lugar. O que muda na raiz é zero, e o que carrega o sentido é a terminação. É a mesma lógica do plural quebrado, e por isso os dois sistemas se entendem.',
      ),
    },
    {
      label: T('Por que a forma curta aparece nos ditos'),
      text: T(
        'Um provérbio não flexiona porque não conta pessoas. A forma curta resolve isso sem pronome, e é por isso que o mesmo texto antigo às vezes traz {فَعَلَ} com sufixo e às vezes traz a forma sem sufixo, sem que nada tenha mudado de sentido.',
      ),
    },
  ],
  examples: [
    { text: 'وَقَالَ', gloss: T('he said; perfect') },
    { text: 'لِيَكُنْ نُورٌ', gloss: T('let there be light; jussive after {لِـ}') },
    { text: 'فَكَانَ نُورٌ', gloss: T('and there was light; perfect') },
    { text: 'كَتَبَ', gloss: T('he wrote; perfect') },
    { text: 'يَكْتُبُ', gloss: T('he writes; imperfect') },
    { text: 'سَيَكْتُبُ', gloss: T('he will write; future') },
    { text: 'اُكْتُبْ', gloss: T('write!; command') },
    { text: 'عِلِمَ', gloss: T('he knew; the i class') },
    { text: 'نَصَرَ', gloss: T('he looked; the u class') },
  ],
  tables: [
    {
      caption: T('As três vozes e a forma curta'),
      head: [T('Forma'), T('Padrão'), T('O que afirma'), T('Exemplo')],
      rows: [
        [T('perfeito'), 'فَعَلَ', T('o evento inteiro'), 'كَتَبَ'],
        [T('imperfeito'), 'يَفْعَلُ', T('o evento em curso'), 'يَكْتُبُ'],
        [T('futuro'), 'سَيَفْعَلُ', T('o evento por vir'), 'سَيَكْتُبُ'],
        [T('comando'), 'اُفْعُلْ', T('uma ordem'), 'اُكْتُبْ'],
      ],
    },
    {
      caption: T('As três classes vocálicas'),
      head: [T('Classe'), T('Perfeito'), T('Verbo'), T('Partícula típica'), T('Nome verbal')],
      rows: [
        [T('a fraca'), 'فَعَلَ', 'كَتَبَ', T('nenhuma'), 'مَفْعَل'],
        [T('i fraca'), 'فَعِلَ', 'عِلِمَ', 'بـ', 'مَفْعِلَة'],
        [T('u fraca'), 'فَعُلَ', 'نَصَرَ', 'لـ', 'مَفْعُولَة'],
      ],
    },
    {
      caption: T('A forma curta e onde aparece'),
      head: [T('Contexto'), T('Forma longa'), T('Forma curta'), T('Glosa')],
      rows: [
        [T('comando'), 'اُكْتُبْ', 'اُكْتُبْ', T('escreve!')],
        [T('depois de {أَنْ}'), 'أَنْ يَكْتُبَ', 'أَنْ يُكْتَبَ', T('que se escreva')],
        [T('depois de {لَنْ}'), 'لَنْ يَكْتُبَ', 'لَنْ يُكْتَبَ', T('não se escreverá')],
        [T('em ditos'), 'كَتَبَ الرَّجُلُ', 'كَتَبَ', T('o homem escreve')],
      ],
    },
  ],
};
