import { C, T, V } from '../shared.mts';

export default {
  id: 34,
  title: T('A sintaxe avançada'),
  subtitle: T('ordem dos membros, oração segunda e campo Nachfeld'),
  section: T('A sintaxe avançada'),
  body: C(`## A ordem dos membros

O alemão tem duas ordens de palavras, e alterná-las é o que dá ao idioma o seu ritmo. Na **oração principal**, o verbo conjugado ocupa a **segunda posição** (V2): o primeiro membro da frase vai para a frente e o verbo fica logo depois dele. O que ocupa esse primeiro lugar é livre — um advérbio, um objeto, o próprio sujeito — e é essa liberdade que produz o contraste entre {Heute Abend bin ich müde} e {Bin ich müde}, que só é correto como pergunta.

Se o primeiro membro é o sujeito, o verbo fecha a oração: {Der HERR ist mein Hirte}. Se é um advérbio, o sujeito vai para depois do verbo: {Heute Abend bin ich müde}. Nada se perde: os mesmos elementos aparecem nos dois casos, mudam apenas as posições.

## A subordinada vai ao contrário

Na **oração subordinada**, o verbo conjugado vai para o **último** membro. É a inversão exata: {..., weil ich müde bin} termina em {bin}, enquanto a principal correspondente termina em {ist}: {Ich bin müde, weil ich heute lange gearbeitet habe}. A mesma inversão vale para todas as subordinadas — {dass}, {weil}, {obwohl}, {wenn}, {damit}, {als} — sem exceção.

A consequência prática é importante: em uma subordinada introdutora, a informação nova vem quase sempre antes do verbo. Compare {Ich weiß, dass Gott die Liebe ist} com {Ich weiß, dass die Liebe Gott ist}. A segunda é mais enfática, porque o verbo {ist} é o que fica em evidência no fim.

## Conectar e sustentar

O substantivo regido por preposição é a espinha dorsal da oração: {Ein Mann **mit** einem **Stock**} — cada preposição vem antes do seu substantivo. Já {ein **Stock** aus **Holz**} e {der Weg **zu** Gott} seguem a mesma regra. Em {mit seinem Bruder} há o chamado **dativo**: {mit} rege dativo, e {seinem Bruder} fica no dativo, com terminação -m.

Em seguida: em {ein Mann von großer Geduld}, {von} + substantivo sem artigo é um complemento de conteúdo, quase uma preposição. O mesmo vale para {aus}, {mit}, {von} e {zu} quando a coisa é eliminada.

## Períodos longos

Quando a oração fica comprida, o elemento que está no fim de uma oração pode saltar para o **Nachfeld**, o campo depois do verbo, e virar a última informação do período. Em {Ich habe lange gewartet, und meine Freunde kamen endlich}, a informação decisiva é *chegaram*. Ou, com símbolo: {Die Bibel war, wie viele andere Bücher, von Gott}. O conteúdo explicativo é colocado no fim justamente para ser lido por último.

## A ordem para ler

Para traduzir uma oração longa, faça sempre o mesmo trajeto: encontre o verbo conjugado, localize o sujeito à sua frente (ou dentro de uma oração entre parênteses), e só depois recolha os objetos. Se o verbo está no fim, você está numa subordinada e pode voltar dois membros atrás para achar o sujeito.`),
  vocab: [
    V('zweite Position', 'zweite Position', 'segunda posição (verbo na V2)'),
    V('Endstellung', 'Endstellung', 'posição final do verbo na subordinada'),
    V('Nachfeld', 'Nachfeld', 'campo pós-verbal da oração'),
    V('Nebensatz', 'Nebensatz', 'oração subordinada'),
    V('Hauptsatz', 'Hauptsatz', 'oração principal'),
    V('weil', 'weil', 'porque (subordinada causal)'),
    V('obwohl', 'obwohl', 'embora (subordinada concessiva)'),
    V('dass', 'dass', 'que (complemento oracional)'),
    V('damit', 'damit', 'para que (finalidade)'),
    V('weil ich müde bin', 'sein', 'porque eu estou cansado (verbo no fim)'),
    V('Heute Abend bin ich müde.', 'sein', 'Hoje à noite estou cansado (advérbio na V1)'),
    V('mit seinem Bruder', 'mit', 'com o seu irmão (dativo)'),
    V('ein Mann von großer Geduld', 'von', 'um homem de grande paciência'),
    V('wie viele andere Bücher', 'wie', 'como muitos outros livros (parêntese)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em qual destas frases o verbo conjugado está na segunda posição?'),
    options: [
      T('Weil ich müde bin, gehe ich schlafen.'),
      T('Heute Abend bin ich müde.'),
      T('Ich weiß, dass Gott die Liebe ist.'),
      T('Der Mann mit dem Stock ist mein Vater.'),
    ],
    answer: 1,
    hint: T(
      'Regra §1: a subordinada manda o verbo para o fim; a principal o coloca na segunda posição.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete com o verbo na posição correta: Ich weiß, dass Gott ___ Liebe ist.'),
      answer: 'ist',
      hint: T('Regra §2: na subordinada introdutora o verbo conjugado vem por último.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual versão coloca o advérbio na posição de frase inicial correta?'),
      options: [
        T('Heute Abend bin ich müde.'),
        T('Heute Abend ich bin müde.'),
        T('Bin ich müde heute Abend.'),
        T('Ich heute Abend bin müde.'),
      ],
      answer: 0,
      hint: T('V2 significa verbo na segunda posição, não depois de duas palavras quaisquer.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a estrutura à sua posição verbal'),
      pairs: [
        { a: T('Heute Abend bin ich müde.'), b: T('verbo na segunda posição') },
        { a: T('..., weil ich müde bin.'), b: T('verbo na última posição') },
        { a: T('Die Bibel war, wie viele andere Bücher, von Gott.'), b: T('inciso no Nachfeld') },
        { a: T('mit seinem Bruder'), b: T('preposição com dativo') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Na oração principal o verbo conjugado ocupa a segunda posição: o primeiro membro é livre, o verbo não. {Heute Abend bin ich müde} é correto; {Heute Abend ich bin müde} não é.',
      ),
    },
    {
      n: '2',
      text: T(
        'Na subordinada o verbo conjugado ocupa a última posição, depois do sujeito e de todos os complementos: {weil ich heute lange gearbeitet habe}.',
      ),
    },
    {
      n: '3',
      text: T(
        'A posição inicial só é ocupada pelo sujeito se ele não for deslocado. Com sujeito implícito no lugar ou no destino, a frase abre com o advérbio: {Morgen fahre ich nach Berlin}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Toda preposição vem imediatamente antes do seu substantivo ou pronome: {mit einem Stock}, {der Weg zu Gott}. Se a preposição for interrogativa, a pergunta se abre com ela: {Worauf wartest du?}',
      ),
    },
    {
      n: '5',
      text: T(
        'O Nachfeld recebe o que foi antecipado ou serve de comentário; nunca recebe o sujeito nem o objeto direto quando ainda estão disponíveis na frase.',
      ),
    },
  ],
  notes: [
    {
      label: T('Inverter ou não inverter'),
      text: T(
        'O que é difícil para iniciantes é saber se a oração que você está traduzindo é principal ou subordinada. A pista mais segura é o conector: {weil}, {dass}, {obwohl}, {wenn}, {damit}, {als}, {bevor}, {nachdem} e {ob} nunca aparecem em oração principal. Se o texto tem um desses verbos e o verbo conjugado está no fim, não há dúvida: você está diante de uma subordinada e a ordem esperada é a inversa.',
      ),
    },
    {
      label: T('Ligar o parágrafo ao texto bíblico'),
      text: T(
        'O estilo de Lutero é um exemplo extremo dessa alternância. Compare {Im Anfang war das Wort} — advérbio no primeiro lugar, verbo na segunda — com {Das Wort war am Anfang}: mesma informação, ênfase oposta. Ao traduzir um versículo, vale fazer as duas versões: a literal, que respeita a posição original, e a reordenada, que sobe o verbo por conveniência do português. A diferença entre as duas é sempre a diferença entre o que o texto destaca e o que a gramática facilita.',
      ),
    },
  ],
  examples: [
    {
      text: 'Heute Abend bin ich müde.',
      gloss: T('Hoje à noite estou cansado (advérbio na primeira posição).'),
    },
    {
      text: 'Der HERR ist mein Hirte, mir wird nichts mangeln.',
      gloss: T('O SENHOR é o meu pastor, nada me faltará (sujeito na V1).'),
    },
    {
      text: 'Ich bin müde, weil ich heute lange gearbeitet habe.',
      gloss: T('Estou cansado, porque eu trabalhei muito hoje (verbo no fim).'),
    },
    {
      text: 'Wir wissen, dass die Liebe Gott ist.',
      gloss: T('Sabemos que o amor é Deus (nova informação antes do verbo).'),
    },
    {
      text: 'Obwohl er müde war, blieb er stehen.',
      gloss: T('Embora estivesse cansado, ele parou (subordinada antes da principal).'),
    },
    {
      text: 'Ich spreche mit einem alten Mann.',
      gloss: T('Falo com um velho (preposição rege dativo -em).'),
    },
    {
      text: 'Ein Mann von großer Geduld',
      gloss: T('um homem de grande paciência (von sem artigo).'),
    },
    {
      text: 'Die Bibel war, wie viele andere Bücher, von Gott.',
      gloss: T('A Bíblia foi, como muitos outros livros, por Deus (inciso no Nachfeld).'),
    },
    {
      text: 'Ich habe lange gewartet, und meine Freunde kamen endlich.',
      gloss: T(
        'Esperei muito, e meus amigos finalmente chegaram (verbo no fim do segundo membro).',
      ),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Principal (V2) e subordinada (verbo final)'),
      head: [T('O que vem primeiro'), T('Oração principal'), T('Subordinada')],
      rows: [
        ['sujeito', 'Der HERR ist mein Hirte.', '..., weil Gott mein Hirte ist.'],
        ['advérbio', 'Heute Abend bin ich müde.', '..., weil ich heute müde bin.'],
        ['objeto', 'Seinen Bruder liebt er sehr.', '..., dass er seinen Bruder liebt.'],
        ['tempo', 'Morgen komme ich wieder.', '..., wenn ich morgen wiederkomme.'],
        ['conector', 'Trotzdem blieb ich stehen.', '..., obwohl ich müde war.'],
        ['modal', 'Ich muss jetzt gehen.', '..., dass ich jetzt gehen muss.'],
      ],
    },
    {
      caption: T('Tabela 2 — Campos da oração em ordem V2'),
      head: [T('Campo'), T('Conteúdo'), T('Exemplo')],
      rows: [
        ['1 (Vorfeld)', 'sujeito, objeto, advérbio', 'Heute Abend ...'],
        ['2', 'verbo conjugado', '... bin ...'],
        ['3 (Mittelfeld)', 'complementos, argumentos', '... müde.'],
        ['4 (Endfeld)', 'informação nova, comentários', '... denn er kommt heute.'],
        ['5 (Nachfeld)', 'parêntese explicativo', '..., wie viele andere Bücher.'],
      ],
    },
  ],
};
