import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('A voz passiva'),
  subtitle: T('{être + participio}, {par} e o substituto {on}'),
  section: T('Os verbos'),
  body: C(`## O auxiliar é sempre {être}

A passiva francesa é mais simples do que a do português: **um** auxiliar para tudo, sempre {être}, conjugado no tempo que o verbo direto teria. O particípio concorda com o sujeito, e só.

| Tempo | Ativa | Passiva |
|---|---|---|
| presente | {Il écrit} | {Il est écrit} |
| imperfeito | {Il écrivait} | {Il était écrit} |
| futuro | {Il écrira} | {Il sera écrit} |
| passé composé | {Il a écrit} | {Il a été écrit} |
| plus-que-parfait | {Il avait écrit} | {Il avait été écrit} |
| conditionnel | {Il écrirait} | {Il aurait été écrit} |

Repare que o auxiliar recebe **exatamente** as formas que o verbo ativo receberia: se a ativa vai para {écrivait}, a passiva vai para {était écrit}. Nada muda no verbo auxiliar.

## O particípio, esse material único

O particípio é uma forma nominal com três funções ao mesmo tempo: adjetivo ({une porte {fermée}}), verbo ({il a {fermé} la porte}) e substantivo ({le {fermé} de la maison}). Em francês ele tem um só problema de flexão: {-é}, {-u} e {-i}, e a forma curta **em {s}** quando fica sozinho, que é o resto do {s} do {tu} que você perdeu no imperativo.

Formas irregulares que você precisa: {été} (de {être}), {eu}, {dû}, {crû}, {bu}, {pris}, {mis}, {vu}, {dit}, {fait}, {écrit}, {mort}, {né}, {venu}. O único grupo realmente frequente é o das terminações em {-u}, e é neles que o {s} final aparece: {lû}, {dû}, {crû}, {bu}.

## O agente com {par}

O {par} introduz a origem, a causa ou o instrumento, no passado ou presente: {aimé par Dieu}, {écrit par la main de saint Jean}, {le texte fut écrit {par} un auteur inconnu}. Em os textos antigos, {par} é mais comum do que {de}: {l’amour de Dieu} e {la grâce par la foi}.

O agente explícito desaparece na fala comum: os falantes evitam a passiva com agente e dizem {Quelqu’un a pris mon livre} em vez de {Mon livre a été pris par quelqu’un}. A passiva vive então sem agente, ou vira frase com {on}.

## A substituta: {on}

A passiva por excellence do francês falado é a frase com {on}, que é um pronome indefinido fixado no papel de sujeito:

- {On parle français} — se fala francês
- {On voit la mer d’ici} — vê-se o mar daqui
- {On m’a dit que tu partais} — disseram-me que estavas de partida

Note que {on} também é o sujeito do verbo **activo**: {On mange à midi}, «Come-se ao meio-dia». A construção é a mesma; muda só o tempo. É por isso que o manual clássico escreve {on} entre parênteses como sujeito: {on (l’on) est prié de ne rien}.

## Um tempo à parte: o passé simple

A leitura bíblica em Segond vive de um tempo que o português e o espanhol praticamente extinguiram: o **passé simple**. Ele é o tempo da narração, o tempo do relato:

- {Dieu créa les cieux et la terre} (Gênesis 1:1)
- {Il fut crucifié} — foi crucificado
- {Jésus monta la montagne}
- {La loi fut donnée sur le Sinaï}

O passé simple é o **passado narrativo**: ele só convive com o presente, não com o imperfeito, e é o tempo que faz {Il alla} soar a conto. Em {Il fut crucifié}, o {fut} é este mesmo passado; a voz passiva no passado simples é formada com {fut} + participio, sem {été}.

E há uma sutileza histórica: o passé simple é a terminação de um tempo que o latim não tinha ({chantai}, {portai}, {vendit}), e ele veio do pretérito latino. Foi essa terminação que carregou o nome de *passé simple*, por oposição ao *passé composé*, que é a novidade do século XIX.

## Aplicação: o texto

Leia {Le Verbe s’est fait chair} «O Verbo se fez carne» (João 1:14): passiva de {se faire}, com {est} no presente. Leia {Il a été jeté dans la prison} «foi jogado na prisão}: passé composé passiva com {été} + participio. Leia {La parole est devenue chair}: presente com sentido de fato consumado

A Escritura francesa antiga prefere sistematicamente o **passado** para os fatos consumados: {Il est ressuscité}, {Il a été crucifié}, {Elle a été prise}. O presente French ({est ressuscité}) é uma leitura comodista de cada génération para o presente.`),
  vocab: [
    V('il est écrit', 'écrire', 'está escrito (passiva presente)'),
    V('a été écrit', 'écrire', 'foi escrito (passé composé passiva)'),
    V('fut crucifié', 'crucifier', 'foi crucificado (passado simples)'),
    V('été', 'être', 'sido (particípio irregular de {être})'),
    V('dû', 'devoir', 'devido (particípio em {û})'),
    V('pris', 'prendre', 'tomado (particípio irregular)'),
    V('mis', 'mettre', 'posto (particípio irregular)'),
    V('vu', 'voir', 'visto (particípio irregular)'),
    V('par Dieu', 'par', 'por Deus (agente)'),
    V('on parle français', 'parler', 'se fala francês ({on} no lugar do agente)'),
    V('on m’a dit', 'dire', 'disseram-me ({on} + COI)'),
    V('la porte fermée', 'fermer', 'a porta fechada (particípio como adjetivo)'),
    V('il fut appelé', 'appeler', 'foi chamado ({fut} = passado simples)'),
    V('serait écrit', 'écrire', 'seria escrito (condicional passiva)'),
    V('si fait', 'faire', 'se faz ({si} + {fait} = impessoal)'),
    V('a été pris', 'prendre', 'foi tomado (passada com irregular)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'Em «{Le texte a été écrit par un auteur inconnu}», por que aparece {été} antes de {écrit}?',
    ),
    options: [
      T('Porque {être} é o auxiliar de toda a passiva e carrega o tempo ({a} = passé composé)'),
      T('Porque {écrit} não consegue expressar o passado sozinho'),
      T('Porque {par} exige um auxiliar antes do particípio'),
      T('Porque o particípio de {être} é {été} e precisa repetir o verbo'),
    ],
    answer: 0,
    hint: T('Regra §1: na passiva, o tempo inteiro fica no auxiliar, e o particípio não flexiona.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Particípio de {prendre}: «Il a ___ ce livre» (passado simples)'),
      answer: 'pris',
      hint: T('Irregular em {-is}, igual a {mis} e {dit}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o tempo ativo à sua forma passiva'),
      pairs: [
        { a: T('Il écrit'), b: T('{Il est écrit}') },
        { a: T('Il écrivait'), b: T('{Il était écrit}') },
        { a: T('Il écrira'), b: T('{Il sera écrit}') },
        { a: T('Il avait écrit'), b: T('{Il avait été écrit}') },
        { a: T('Il a écrit'), b: T('{Il a été écrit}') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase é a passiva de Segond, com passado simples?'),
      options: [
        T('{Il fut crucifié} — {fut} + particípio, sem {été}'),
        T('{Il a été crucifié} — passado composto'),
        T('{Il est crucifié} — presente narrativo'),
        T('{Il crucifie} — presente simples'),
      ],
      answer: 0,
      hint: T(
        'O {fut} da passiva simples é a terminação {a} do 3.º grupo, e não o verbo {futre} — não há {été} no meio.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A passiva se forma com {être} no tempo correspondente mais o particípio, que concorda com o sujeito. O auxiliar é sempre {être}, mesmo quando o verbo principal é {avoir}.',
      ),
    },
    {
      n: '2',
      text: T(
        'O particípio regular termina em {-é} nos verbos do 1.º e 2.º grupo, {-i} nos do 3.º, e {-u} nos do 4.º. Sozinho, ganha {s}: {pris}, {mis}, {acquis}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Na passiva o tempo fica **todo** no auxiliar: {a été} é o passé composé, {était} é o imperfeito, {sera} é o futuro. O particípio nunca flexiona — só concorda em gênero e número.',
      ),
    },
    {
      n: '4',
      text: T(
        'O passado simples passivo é {fut} + particípio, **sem** {été}: {il fut crucifié}, {la loi fut donnée}. É essa forma que você vai encontrar o tempo todo na leitura bíblica.',
      ),
    },
    {
      n: '5',
      text: T(
        'Com {par} introduz o agente; sem {par} e sem {on}, a passiva deixa o agente por escolha. Na fala comum a frase com {on} quase sempre substitui a passiva: {On parle français}, e não {Le français est parlé}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O passé simple está morrendo'),
      text: T(
        'O {passé simple} ({il fut, il alla, il vit}) é o tempo do relato em francês escrito, e ele desapareceu da fala há mais de um século: ninguém diz {il alla}. Quem fala usa {il est allé}. Mas a leitura bíblica em Segond está cheia dele, porque é um texto do século 19 que segue a convenção narrativa da Vulgata e da reimpressão de 1810. Isso cria uma armadilha para quem está aprendendo: você vai ler {Jésus{int} monta a monture} e concluir que {monta} é presente — é o passado, disfarçado de igual ao presente. O contexto salva: {il monta la montagne} no presente exigiria um depois, {il est monté}.',
      ),
    },
    {
      label: T('A leitura bíblica prefere o passado'),
      text: T(
        'Compare duas traduções da mesma frase. O latim diz {Factum est corpus eius}, «tornou-se corpo». O Segond escreve {Le Verbe s’est fait chair} (João 1:14), com {est} no presente. Uma tradução moderna escreve {El Verbo se hizo carne}, com o passado simples espanhol. O francês antigo escolheu o presente, não por erro, mas porque a sua voz passiva de presente soa como um fato consumado: {est écrit} é mais definitivo do que {a été écrit}. Quando você traduzir um versículo para o português e sair {foi feito}, lembre que o francês original ficou no {est}.',
      ),
    },
  ],
  examples: [
    { text: 'Le livre est lu.', gloss: T('o livro está sendo lido (presente)') },
    { text: 'La maison est décrite.', gloss: T('a casa é descrita (particípio concorda)') },
    { text: 'Le texte a été écrit.', gloss: T('o texto foi escrito (passé composé passiva)') },
    { text: 'Il fut crucifié.', gloss: T('foi crucificado ({fut} + particípio, sem {été})') },
    { text: 'Aimé par Dieu.', gloss: T('amado por Deus ({par} + agente)') },
    { text: 'On parle français.', gloss: T('se fala francês (passiva com {on})') },
    { text: 'On m’a dit que tu partais.', gloss: T('disseram-me que estavas de partida') },
    {
      text: 'La parole est devenue chair.',
      gloss: T('a Palavra se fez carne ({est} = presente narrativo)'),
    },
    { text: 'une porte fermée', gloss: T('uma porta fechada (particípio como adjetivo)') },
    { text: 'le prix dû', gloss: T('o preço devido ({dû} = «devido»)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — tempos da passiva'),
      head: [T('Tempo'), T('Ativa'), T('Passiva'), T('Particípio de {écrire}')],
      rows: [
        ['présent', 'il écrit', 'il est écrit', 'écrit'],
        ['imparfait', 'il écrivait', 'il était écrit', 'écrit'],
        ['futur simple', 'il écrira', 'il sera écrit', 'écrit'],
        ['passé composé', 'il a écrit', 'il a été écrit', 'écrit'],
        ['plus-que-parfait', 'il avait écrit', 'il avait été écrit', 'écrit'],
        ['conditionnel', 'il écrirait', 'il aurait été écrit', 'écrit'],
        ['passé simple', 'il écrivit', 'il fut écrit', 'écrit'],
        ['subjonctif', 'qu’il écrive', 'qu’il soit écrit', 'écrit'],
      ],
    },
    {
      caption: T('Tabela 2 — formas do particípio'),
      head: [T('Terminação'), T('Exemplos'), T('Glosa')],
      rows: [
        ['{-é}', 'aimé, fermé, parlé', 'amado, fechado, falado'],
        ['{-u}', 'vu, dû, reçu', 'visto, devido, recebido'],
        ['{-i}', 'pris, mis, fini', 'tomado, posto, terminado'],
        ['{-s} (sozinho)', 'pris, mis, acquis', 'tomado, posto, adquirido'],
        [
          'irregulares',
          'été, eu, fait, dit, vu, né, venu',
          'sido, tenido, hecho, dicho, visto, nacido, venido',
        ],
      ],
    },
  ],
};
