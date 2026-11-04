import { C, T, V } from '../shared.mts';

export default {
  id: 32,
  title: T('Os pronomes indefinidos'),
  subtitle: T('quelqu’un, personne, rien, tout — e o French que se esconde atrás deles'),
  section: T('Consolidação'),
  body: C(`## Quem? Alguma coisa? Nada? Tudo?

Os indefinidos substituem um substantivo vago demais para ser nomeado. O par positivo-negativo é o eixo do capítulo: **{quelqu’un}** é «alguém», **{quelque chose}** é «algo», e os seus opostos são **{personne}** «ninguém» e **{rien}** «nada». Note a assimetria: em português e espanhol basta dizer «não vejo ninguém», mas o francês insists: {Je ne vois personne} — o {ne} é obrigatório na forma escrita, e o verbo já está conjugado na_negative.

Na fala corrente o {ne} desaparece: {je vois pas}, {y a rien}. Mesmo assim, quando você escreve, use a forma completa.

## Tout: o indefinido que muda de cara

{tout} significa «tudo» e funciona como advérbio em muitas expressões ({Tout est possible}, «tudo é possível»). Quando tem artigo, torna-se adjetivo e ganha a concordância: {tous}, {toutes}. Em {tous priaient}, «todos oravam», o substantivo foi omitido: o pronome sozinho ocupa a função de sujeito. Já como atributo, {tout} é **invariável**: {le monde tout entier} = «o mundo inteiro», sem *toute*.

Há ainda um {tout} de uso comum, sem nada de indefinido: {chacun son don} — aqui {chacun} é «cada um» e {son} é possessivo, com sentido distributivo: «cada um com o seu dom». O francês tem uma palavra só para isso, {chacun}, sem plural.

## On, l'autre, aucun

{on} significa «se» impersonal: {On parle français} — «Fala-se francês». Em {On a construit ce pont}, o sujeito é um ser humano genérico, quase sempre um «se» passive. É a alternativa oral a {il est construit}.

{l'autre} é «o outro» e precisa de nome: {l'autre homme}, {l'autre jour}. O substantivo é obrigatório, exceto quando {l'autre} significa «os outros» de forma geral.

{aucun} é «nenhum» e também nega com sentido mais forte que {pas de}: {Je n'ai aucun courage} — «Não tenho nenhuma coragem». E na combinação fixada: {ne... aucun} nunca tem o sentido de «algum», ao contrário de {ne... pas}, que admite o sentido afirmativo em frases como {Je ne demande pas de prix}.

## Ce que se aprende nos capítulos seguintes

Ao chegar aos textos de leitura, quase todas as orações(recordar) que você vai encontrar contêm um indefinido. {Père nostre qui êtes aux cieux} é relativo; mas {Donnez-nous aujourd'hui notre pain} traz um {notre} possessivo, e {Pardonne-nous nos offenses} traz {nos} indireto. Nenhum deles é indefinido — e é justamente essa é a função deles. O indefinido é sempre o nome do conteúdo: quem recebe, o quê, quanto, e quando não se sabe quem ou o quê, o francês **não inventa**: escreve {quelqu'un} ou {personne}.`),
  vocab: [
    V('quelqu’un', 'quelqu’un', 'alguém (pronome indefinido)'),
    V('quelque chose', 'quelque chose', 'algo, alguma coisa'),
    V('personne', 'personne', 'ninguém (também «pessoa»)'),
    V('rien', 'rien', 'nada'),
    V('tout', 'tout', 'tudo (invariável como atributo)'),
    V('tous', 'tout', 'todos (plural masculino)'),
    V('toutes', 'tout', 'todas (plural feminino)'),
    V('chacun', 'chacun', 'cada um (sem plural; distributivo)'),
    V('aucun', 'aucun', 'nenhum (nega mais forte que pas de)'),
    V('plusieurs', 'plusieurs', 'vários, muitos (sempre plural)'),
    V('quelques', 'quelque', 'alguns (plural de quelques)'),
    V('chose', 'chose', 'coisa (feminino, quase sempre com quelque)'),
    V('on', 'on', 'se (impessoal); alguém (genérico)'),
    V('l’autre', 'autre', 'o outro, os outros'),
    V('ni', 'ni', 'nem (em ni…ni)'),
    V('autre', 'autre', 'outro (atributo); demais (de outro(s))'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Je ne vois personne}, por que a forma escrita exige {ne}?'),
    options: [
      T('Porque {personne} já é negativo: {ne} apenas marca formalmente a negação'),
      T('Porque {ne} muda o sentido para afirmativo, como em {ne… pas}'),
      T('Porque o verbo precisa de {ne} no plural'),
      T('Porque {personne} exige o subjuntivo'),
    ],
    answer: 0,
    hint: T('O {ne} é o «não» de família em {ne… personne}, {ne… rien}, {ne… aucun}.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: {Le monde ___ entier} — o {tout} atributivo é invariable.'),
      answer: 'tout',
      hint: T('Só quando {tout} tem artigo é que concorda: {tous}, {toutes}.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase usa {chacun} no sentido distributivo de «cada um com o seu»?'),
      options: [
        T('{Chacun son don}, cada um com o seu dom'),
        T('{Chacun des enfants}, cada um dos crianços'),
        T('{Chacun a mangé une pomme}'),
        T('{Chacun, enfin}, cada um, finalmente'),
      ],
      answer: 0,
      hint: T('O distributivo exige um possessivo singular ({son}, {sa}, {ses}) logo depois.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma indefinida ao que ela substitui'),
      pairs: [
        { a: T('on'), b: T('«se» impersonal, agente genérico') },
        { a: T('personne'), b: T('zero pessoas, com ne obrigatório na escrita') },
        { a: T('tout'), b: T('a totalidade, advérbio ou atributo invariável') },
        { a: T('chacun'), b: T('cada um, distributivo, sem plural') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T(
        'Quantos nomes de pessoa há em {Je ne vois personne et rien du tout}? Responda com um número: ___',
      ),
      answer: '1',
      hint: T('Conte quem é nomeado, não quantas orações existem.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Os indefinidos negativos {personne}, {rien} e {aucun} **já são negativos**: never aparece um segundo negativo. {Je ne vois personne}, nunca *{ne… pas personne}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{ne} é obrigatório na escrita com {personne}, {rien}, {aucun} e {jamais}, mas {pas} fica fora: {Je ne mange rien}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{tout} concorda ({tous}, {toutes}) quando substitui um substantivo, mas é invariable quando qualifica: {le monde tout entier}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{chacun} nunca tem plural e distribui com um possessivo singular: {chacun son choix}, «cada um com a sua escolha».',
      ),
    },
    {
      n: '5',
      text: T(
        '{aucun} nega sempre, mesmo em frases negativas: {Il n’a aucun travail}, «ele não tem nenhum trabalho». Com {personne} e {rien}, a negação já está na palavra.',
      ),
    },
  ],
  notes: [
    {
      label: T('Não existe o indefinado genérico do inglês'),
      text: T(
        'Em inglês, *someone* pode ser genérico (*Someone should call the police*). Em francês não: {quelqu’un} exige uma pessoa concreta, e o genérico se faz com {on} ou com um substantivo plural ({Des visiteurs attendent}, «esperam visitantes»). Por isso {Quelqu’un a frappé} soa como خبر concreta: alguém bateu de fato.',
      ),
    },
    {
      label: T('Antes da leitura: quais pronomes você vai encontrar'),
      text: T(
        'No {Père Notre-Dame} e no {Symbole des Apôtres}, os indefinidos são raros e modestos: {quelque chose}, {personne}, {tout le monde}. O que domina são os **relativos** ({qui}, {que}, {dont}) e os **possessivos** ({notre}, {nos}). Guarde essa distinção: um texto solene em francês repete os mesmos pronomes, e o que muda são os verbos. Por isso, ao ler, começe por {substituir mentalmente os pronomes} pelo sintagma completo — e repare no verbo, que nunca anda sozinho: ele aparece sempre logo após o sujeito.',
      ),
    },
  ],
  examples: [
    { text: 'Je ne vois personne', gloss: T('não vejo ninguém') },
    { text: 'Il ne dit rien', gloss: T('não diz nada') },
    { text: 'Tout est possible', gloss: T('tudo é possível') },
    { text: 'Tous priaient', gloss: T('todos oravam (o substantivo fica de fora)') },
    { text: 'le monde tout entier', gloss: T('o mundo inteiro (tout invariável)') },
    { text: 'chacun son don', gloss: T('cada um com o seu dom') },
    { text: 'on parle français', gloss: T('fala-se francês (on = se impersonal)') },
    { text: 'je n’ai aucun courage', gloss: T('não tenho coragem nenhuma') },
    { text: 'ne… pas de prix', gloss: T('não peça nenhum prênio (sentido afirmativo)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — O par negativo indefinido'),
      head: [T('Forma'), T('Pessoa'), T('Coisas'), T('Exemplo')],
      rows: [
        [T('positivo'), T('quelqu’un'), T('quelque chose'), T('J’ai vu quelqu’un')],
        [T('negativo'), T('personne'), T('rien'), T('Je n’ai rien vu')],
        [T('com ne'), T('personne'), T('rien'), T('Il ne parle à personne')],
        [T('genérico'), T('chacun'), T('tout'), T('Chacun son chemin')],
      ],
    },
    {
      caption: T('Tabela 2 — {tout} em quatro funções'),
      head: [T('Função'), T('Forma'), T('Frase'), T('Português')],
      rows: [
        [T('advérbio'), T('tout'), T('Tout est possible'), 'tudo é possível'],
        [T('sujeito pluralizado'), T('tous / toutes'), T('Tous priaient'), 'todos rezavam'],
        [T('atributo'), T('tout (invariável)'), T('le monde tout entier'), 'o mundo todo'],
        [T('tempo fixo'), T('tout'), T('tout de suite'), 'logo, imediatamente'],
      ],
    },
  ],
};
