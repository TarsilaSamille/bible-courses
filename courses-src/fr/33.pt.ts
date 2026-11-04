import { C, T, V } from '../shared.mts';

export default {
  id: 33,
  title: T('Os pronomes e palavras interrogativos'),
  subtitle: T('qui, quoi, quel, où, quand, comment, combien — e a inversão que eles exigem'),
  section: T('Consolidação'),
  body: C(`## A pergunta francesa faz três coisas de uma vez

Uma pergunta em francês não é uma frase terminada em «?». Ela (1) escolhe uma **palavra interrogativa**, (2) pode exigir a **inversão** do sujeito com o verbo, e (3) escolhe entre {est-ce que}, {qui} e a inversão direta. Por isso a mesma pergunta oral tem três formas: {Tu viens ?}, {Est-ce que tu viens ?}, {Viens-tu ?}

Das três, a mais falada hoje é **{est-ce que}**, porque não mexe na ordem das palavras: {Est-ce que tu as compris ?} funciona em qualquer contexto. A inversão direta ({comprends-tu ?}) soa antiga ou literária, e é comum na Bible.

## O quadro das palavras

{qui} pergunta **pessoa**, {quoi} pergunta **coisa**, {quel} pergunta **atributo ou qualidade**, e {lequel} pergunta **escolha entre alternativas**: {Lequel veux-tu ?} — «Qual deles você quer?». Note que {lequel} e {le} não se fundem: é {le + quel}, e no feminino {laquelle}, no plural {lesquels}, {lesquelles}.

{où} é lugar ({Où habites-tu ?}), {quand} é tempo, {comment} é modo, {pourquoi} é causa — e {combien} é quantidade, com a particularidade de exigir *{de}*: {Combien de livres ?}, {Combien de gens sont venus ?}

## Inverta com cuidado

A inversão só é obrigatória quando **não há palavra interrogativa**: {Viens-tu ?}, {Parlez-vous français ?}, {A-t-elle raison ?} (com {a} elíptico). Quando a pergunta já tem {qui}, {où}, {quand}, a ordem normal basta: *{Où habites-tu ?}* soa errado; {Où tu habites ?} também. A forma neutra é *{Où est-ce que tu habites ?}*.

E atenção ao verbo {être}: com {qui}, {où} etc. ele **não** inverte — {Qui est là ?}, não *{Qui est-il là ?} — porque {est} já é a forma forte. O truque do hiato fonético ({a-t-elle}, {est-il}) só existe para manter a pronúncia.

## O que muda nos textos

No {Symbole des Apôtres} não há pergunta alguma, mas o estilo é o mesmo: orações relativas com {qui} e {que}, e um {d'où} no v. 10. Já no Salmo 23 há um {combien} disfarçado em exclamação: *«jusque dans les jours de mes vieux ans»* é lido em francês corrente como {Combien de jours !}: uma exclamação de quantidade, não uma pergunta. E o v. 4, {Tu prépares devant moi une table}, antepõe o verbo conjugado ao pronome oblíquo, criando aquele efeito de suspensão que os textos solenes cultivam.

Em suma: a interrogação francesa é uma de três famílias — **com {est-ce que}**, **com palavra interrogativa + ordem natural**, ou **inversão direta**. Reconhecer qual das três você está lendo é metade da fluência passiva.`),
  vocab: [
    V('qui', 'qui', 'quem, que (pessoa)'),
    V('quoi', 'quoi', 'o quê (coisa)'),
    V('quel', 'quel', 'qual (atributo, m. sing.)'),
    V('lequel', 'lequel', 'qual (escolha entre alternativas)'),
    V('où', 'où', 'onde'),
    V('quand', 'quand', 'quando'),
    V('comment', 'comment', 'como (modo)'),
    V('pourquoi', 'pourquoi', 'por que, por quê'),
    V('combien', 'combien', 'quanto (exige de)'),
    V('est-ce que', 'est-ce que', 'a partícula neutra de interrogação'),
    V('qui est-ce que', 'qui est-ce que', 'quem é que (sujeito, sem inversão)'),
    V('si', 'si', 'se, se houver (dúvida retórica)'),
    V('quelque chose', 'quelque chose', 'algo (resposta a quoi)'),
    V('personne', 'personne', 'ninguém (resposta a qui)'),
    V('quelconque', 'quelconque', 'qualquer, qualquer um (indefinido)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a pergunta mais natural em français falado hoje?'),
    options: [
      T('{Est-ce que tu as compris ?}'),
      T('{As-tu compris ?}'),
      T('{Tu as compris ?}'),
      T('{Que tu as compris ?}'),
    ],
    answer: 0,
    hint: T('Regra §1: a inversão direta é minoritária fora da literatura.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: {Combien ___ livres as-tu lus ?} — depois de {combien} entra {de}.'),
      answer: 'de',
      hint: T('O mesmo acontece com {assez de}, {beaucoup de}, {peu de}.'),
    },
    {
      kind: 'choose',
      prompt: T('Em {Lequel veux-tu ?}, o que {lequel} faz que {quel} não faz?'),
      options: [
        T('Substitui um substantivo: {le quel} = «o qual»'),
        T('Substitui um verbo'),
        T('Exige o futuro'),
        T('Marca negação'),
      ],
      answer: 0,
      hint: T('Compare {Quel film ?} com {Lequel film ?}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a pergunta à resposta que ela espera'),
      pairs: [
        { a: T('Qui est-ce que tu attends ?'), b: T('quelqu’un, parce que c’est une personne') },
        { a: T('Qu’est-ce que tu attends ?'), b: T('quelque chose, parce que c’est une chose') },
        { a: T('Combien de pages ?'), b: T('un nombre, suivi de {de}') },
        { a: T('Où est-ce qu’elle est ?'), b: T('une expression de lieu, jamais {qui}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T(
        'Quantas palavras interrogativas diferentes aparecem no trio {qui, quoi, quel, combien}? Responda com um número: ___',
      ),
      answer: '4',
      hint: T('Conte os itens da lista, não as letras.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A inversão direta soa formal ou antiga; no dia a dia use {est-ce que}, que preserva a ordem natural.',
      ),
    },
    {
      n: '2',
      text: T(
        'A inversão só é obrigatória sem palavra interrogativa: {Viens-tu ?}, {A-t-elle raison ?} (com {a} elíptico).',
      ),
    },
    {
      n: '3',
      text: T(
        '{qui} pede pessoa, {quoi} pede coisa; {quel} qualifica e {lequel} escolhe: {Lequel ?} responde com um sintagma nominal.',
      ),
    },
    {
      n: '4',
      text: T('{combien} exige {de} antes do nome: {Combien de gens ?}, {Combien de fois ?}.'),
    },
    {
      n: '5',
      text: T(
        'Com {être} a inversão é automática: {Es-tu ici ?}, {Est-il ?}, {Sont-ils ?}. Depois de {qui}, {où}, {quand}, {combien} o verbo {être} fica na ordem natural.',
      ),
    },
  ],
  notes: [
    {
      label: T('A diferença que ninguém traduz'),
      text: T(
        'Em inglês, *Who did you see?* e *Whom did you see?* são variantes. Em francês, a distinção não é de caso, mas de **função**: {qui} só pode ser **sujeito** ({Qui parle ?}), nunca objeto direto. Para o objeto direto com pessoa, o francês usa {qui**que**} ({Qui que tu sois}, «seja quem você for») ou uma Construction com preposição ({De qui parles-tu ?}, «de quem você fala?»). {Quoi}, ao contrário, serve a coisa e pode ocupar qualquer posição.',
      ),
    },
    {
      label: T('Perguntas nos textos sagrados'),
      text: T(
        'A {Père Notre-Dame} e o {Symbole des Apôtres} vãm sem perguntas: sãodeclarações decálogos. O Salmo 23 traz uma interjeção — {Jusqu’à quand !} — que o hebraico original ({até quando}) torna quase literal, e as versões modernas a tratam como pergunta retórica de agonia. Mas a verdadeira lição de {Jusqu’à quand ?} nesse contexto não ç a de uma pergunta: ç uma **interjeição temporal**, como em {Oh, quand ?}.',
      ),
    },
  ],
  examples: [
    { text: 'Qui est-ce que tu attends ?', gloss: T('Quem você está esperando?') },
    { text: 'Qu’est-ce qu’il cherche ?', gloss: T('O que ele procura?') },
    { text: 'Oð est-ce qu’elle est ?', gloss: T('Onde ela está?') },
    {
      text: 'Combien de jours !',
      gloss: T('Quantos dias! (leitura natural de «jusque dans les jours de mes vieux ans»)'),
    },
    { text: 'Est-ce que tu as compris ?', gloss: T('Você entendeu?') },
    { text: 'As-tu compris ?', gloss: T('Entendeu? (inversão direta, registro formal)') },
    { text: 'Lequel des deux veux-tu ?', gloss: T('Qual dos dois você quer?') },
    { text: 'De qui parles-tu ?', gloss: T('De quem você fala?') },
    {
      text: 'Qui que tu sois, reste aimé',
      gloss: T('Seja quem você for, permaneça amado ({qui que} = «seja quem for»)'),
    },
    { text: 'Jusqu’à quand, Seigneur ?', gloss: T('Até quando, Senhor? (exclamação temporal)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — As três famílias de pergunta'),
      head: [T('Família'), T('Modelo'), T('Exemplo'), T('Português')],
      rows: [
        [
          T('com {est-ce que}'),
          T('verbo + {est-ce que} + sujeito'),
          T('Est-ce que tu viens ?'),
          T('você está vindo?'),
        ],
        [
          T('com palavra interrogativa'),
          T('{mot} + sujeito + verbo'),
          T('Où habites-tu ?'),
          T('onde você mora?'),
        ],
        [
          T('inversão direta'),
          T('sujeito + verbo + sujeito'),
          T('Habites-tu où ?'),
          T('você mora onde?'),
        ],
      ],
    },
    {
      caption: T('Tabela 2 — Flexão de quel / lequel'),
      head: [T('Número'), T('Masculino'), T('Feminino')],
      rows: [
        [T('singular'), T('quel'), T('quelle')],
        [T('plural'), T('quels'), T('quelles')],
        [T('com {le}'), T('lequel, lesquels'), T('laquelle, lesquelles')],
        [T('com {les}'), T('lequel, lesquels'), T('lesquelles')],
      ],
    },
  ],
};
