import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  section: T('Adjetivo'),
  title: T('O adjetivo é um substantivo: como modificá-lo e como negá-lo'),
  subtitle: T(
    'O japonês não tem adjetivo: tem um nome que vem antes do outro nome, e a negação é sempre um verbo',
  ),
  body: C(`
## O "adjetivo" japonês é um substantivo

Em português, "livro vermelho" é um substantivo seguido de um adjetivo que concorda com ele. Em japonês esse adjetivo não existe. {赤い本} se lê literalmente "vermelho livro": a qualidade vem antes do nome e não concorda com nada, porque não é um adjetivo, é um **substantivo** que ocupa o lugar que o português reserva para a qualidade. A ligação entre os dois nomes é a partícula {の}, e em {赤い本} ela aparece omitida, porque o japonês dispensa o {の} quando o modificador já está claro.

A ordem é o primeiro aviso, e ela é o oposto do mandarim. No mandarim o adjetivo vem depois do substantivo; no japonês é o contrário, e o motivo é o mesmo do coreano: as duas línguas põem o objeto antes do verbo e o verbo antes do sujeito, e o substantivo é o sujeito. O sujeito é a última peça da frase, e por isso o nome vem em segundo lugar e a qualidade vem colada nele. Quem chega do mandarim precisa trocar o olho de lugar, não de palavra.

## Os dois sufixos que fazem o modificador

Transformar nome em modificador tem dois caminhos, e saber qual dos dois usar é exatamente o detalhe que os livros de gramática costumam omitir.

As formas **básicas**, as que se aprende primeiro e que não derivam de nada, usam o sufixo {い}: {美しい} "bonito", {赤い} "vermelho", {新しい} "novo". Aqui o modificador é a própria forma, sem nada a mais.

As formas **derivadas**, as que saíram de um verbo ou de outro nome, usam o sufixo {な}: {静かな} "silencioso", {元気な} "animado", {雪の} "de neve". Aqui a forma base aparece como substantivo, {静か} sozinho é "quietude", "o silêncio", e o modificador é essa base com o {い} final trocado por {な}.

Regra de bolso: **se o nome termina em {な} ou em {ぶ}, o modificador costuma ser a própria forma com {な}**. {好きな本} é "o livro de que eu gosto", e {上手な人} é "pessoa perita": nos dois casos o nome sozinho não basta. O teste é prático e dispensa regra: troque o final do nome por {な}; se a frase continua a fazer sentido, o modificador era {な}.

## Negar um nome é negar o verbo {ある}

Em japonês não existe "não bonito", porque não existe adjetivo para negar. O que existe é o verbo {ある}, que faz dois trabalhos: diz que uma coisa existe e diz que uma coisa é assim. É esse verbo que se nega, com a negação da lição 7.

- {美しいです} — "é bonito"
- {美しくありません} — "não é bonito"
- {静かではない} — "não é silencioso"
- {本がありません} — "não há livro"

O ponto que muda a leitura bíblica é este: **em japonês não se nega uma palavra, nega-se a frase que diz que a coisa existe**. O "não" pertence ao verbo, e o verbo é sempre {ある} quando o que se está descrevendo é uma qualidade. É por isso que o advérbio derivado de {美しい} precisa de verbo para virar negativo: {美しくありません} é "não é bonita" porque tem verbo, e não porque {美しい} tenha forma negativa, e essa forma não existe em lugar nenhum do japonês.

O kanji dá a prova de que não é teoria de gramática. {遅い} é "lento" e "tarde" ao mesmo tempo, e {遅く} é "devagar": o ideograma do "atrasado" é o mesmo. Por isso 1 Coríntios 13:4 se lê no japonês como {愛は寛容である}, "o amor é paciente". {寛容} é um substantivo no lugar que em português ocupa o adjetivo, e a frase termina em {ある}, marcado por {は} e ligado ao nome por {で}.

## Advérbio e grau: também é nome

Um advérbio japonês nunca é uma palavra à parte: é um nome com uma partícula ou com um sufixo. Nome + {に}: {静かに}, "silenciosamente". Verbo planado + {な}: de {速い} sai a base {早}, e {早} + {な} é "rapidamente". As duas fórmulas dizem a mesma coisa, e é por isso que {速い} é nome ("rapidez"), é verbo ("ser rápido") e é advérbio ("rapidamente") sem trocar de forma. Em português essas três coisas são três palavras; em japonês é uma só.

O grau também é nome, e o mais útil é {過ぎる}, "passar de": {速すぎます} é "é rápido demais", literalmente "excede em rapidez". Depois dele vêm {ぐらい} e {ほど}, que fazem o mesmo serviço com um sentido de aproximação, "ao ponto de": {泣くほど} é "a ponto de chorar", e {泣くぐらい} é o mesmo com um tom de exclamação.

João 1:5 mostra a outra face da mesma regra, e mostra melhor porque é curto. A luz é sujeito de um verbo de ação, "a luz brilha nas trevas" sai como {光は暗闇の中に照らす}, e a mesma palavra é predicado em 1 João 1:5, onde Deus é luz: {神は光である}. São dois verbos para o mesmo substantivo, e o grego faz a mesma distinção: no versículo de João ele tem uma qualidade e uma ação, e o japonês precisa de dois verbos diferentes para as duas. Ler "a luz brilha" como "a luz é brilhante" é ler errado: brilhar é ação, e ação em japonês sempre tem verbo.
`),
  vocab: [
    V('akai', '赤い', 'vermelho (akai) — nome que ocupa o lugar do adjetivo'),
    V('utsukushii', '美しい', 'bonito (utsukushii) — forma básica, modificador em い'),
    V('shizuka', '静か', 'silencioso, quieto (shizuka) — forma derivada de um verbo'),
    V('no', 'の', 'de; liga um nome a outro nome (no)'),
    V('na', 'な', 'sufixo que faz modificador derivado (na)'),
    V('aru', 'ある', 'ser, existir (aru) — o verbo das qualidades'),
    V('arimasu', 'ない', 'negação de ある: "não é", "não há" (arimasu)'),
    V('hayaku', '速い', 'rápido (hayaku); com に ou な dá "rapidamente"'),
    V('sugiru', '過ぎる', 'passar de; com に dá "tão... que", "rápido demais" (sugiru)'),
    V('gurai', 'ぐらい', '"tão... que", "ao ponto de" (gurai)'),
    V('hodo', 'ほど', '"tão... que", "ao ponto de" (hodo)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O que modifica um nome no japonês é um nome, e vem antes: {赤い本} é "vermelho livro", nunca "livro vermelho".',
      ),
    },
    {
      n: '2',
      text: T(
        'Forma básica usa {い} e já é o próprio modificador; forma derivada usa {な}: {静かな}, nunca {静かい}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Nome que termina em {な} ou em {ぶ} costuma virar modificador com {な}: {好きな本}, {上手な人}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Nome não se nega: nega-se o verbo {ある}. "Não é bonito" é {美しくありません}, e não existe "não bonito".',
      ),
    },
    {
      n: '5',
      text: T(
        'Advérbio e grau também são nomes: nome + {に}, verbo planado + {な}, e {過ぎる}, {ぐらい}, {ほど}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Nome que também é qualidade'),
      text: T(
        'Alguns nomes descrevem uma qualidade e por isso viram modificador com {な} em vez de {い}. Neles a base é um substantivo completo: {静か} sozinho é "quietude", e {好きな本} é "o livro de que eu gosto". O teste é de uma troca: se trocar o final do nome por {な} não quebra a frase, era {な}.',
      ),
    },
    {
      label: T('O erro estrutural'),
      text: T(
        'O leitor que vem do português escreve "não bonito" e sente que falta o verbo. Não falta: em japonês o que existe é a negação do verbo {ある}, da lição 7. Não existe "não bonito" porque não existe adjetivo — e é por isso que a negação de uma qualidade em japonês é sempre uma frase com verbo.',
      ),
    },
  ],
  examples: [
    { text: '赤い本', gloss: T('akai hon — livro vermelho') },
    { text: '美しい花', gloss: T('utsukushii hana — uma flor bonita') },
    { text: '静かな部屋', gloss: T('shizuka na heya — uma sala silenciosa') },
    { text: '静かではありません', gloss: T('shizuka de wa arimasu — não é silencioso') },
    { text: '早く走ります', gloss: T('hayaku hashirimasu — corro rápido') },
    { text: '速すぎます', gloss: T('hayaku sugimasu — é rápido demais') },
  ],
  tables: [
    {
      caption: T('Negar um nome é negar o verbo'),
      head: [T('O que se quer dizer'), T('Japonês'), T('O que acontece')],
      rows: [
        [T('é bonito'), T('{美しいです}'), T('nada: {です} é o {ある} afirmativo')],
        [T('não é bonito'), T('{美しくありません}'), T('{ある} no negativo, sem partícula')],
        [T('não é bonito, coloquial'), T('{美しくない}'), T('o mesmo {ある}, com o {ない} nu')],
        [T('não bonito'), T('não existe'), T('o "não" é verbo, nunca partícula')],
      ],
    },
    {
      caption: T('Os dois jeitos de fazer um modificador'),
      head: [T('De onde vem a palavra'), T('Exemplo'), T('Como fica o modificador')],
      rows: [
        [T('forma básica'), T('{美しい花}'), T('a própria forma, em {い}')],
        [T('forma básica'), T('{新しい本}'), T('a própria forma, em {い}')],
        [T('derivada de um verbo'), T('{静かな}'), T('a base com {な}: {静か} fica nome')],
        [T('nome que descreve qualidade'), T('{上手な人}'), T('a base com {な}: {上手} fica nome')],
      ],
    },
    {
      caption: T('Do nome ao advérbio e ao grau'),
      head: [T('Nome'), T('Com {に} ou {な}'), T('O que sai')],
      rows: [
        [T('{静か}'), T('{静かに}'), T('silenciosamente')],
        [T('{速い}'), T('{早く}'), T('rapidamente, com o nome + {に}')],
        [T('{速い}'), T('{速すぎます}'), T('rápido demais, "passando em rapidez"')],
        [T('{泣く}'), T('{泣くほど}'), T('a ponto de chorar')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em "não é bonito", o que está sendo negado?'),
    options: [
      T('a palavra bonito'),
      T('o verbo {ある}'),
      T('a partícula {の}'),
      T('o sufixo {い}'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "não é bonito" com a forma negativa do verbo {ある}: {美しく}____'),
      answer: 'ありません',
    },
    {
      kind: 'match',
      prompt: T('Ligue a construção ao que ela produz'),
      pairs: [
        { a: T('{静かに}'), b: T('nome + {に}: advérbio') },
        { a: T('{早く}'), b: T('verbo planado + {な}: advérbio') },
        { a: T('{泣くほど}'), b: T('grau de aproximação, "ao ponto de"') },
        { a: T('{速すぎます}'), b: T('grau com {過ぎる}, "passar de"') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em mandarim o adjetivo vem depois do substantivo. Em japonês, onde ele vem?'),
      options: [
        T('também depois do substantivo'),
        T('antes do substantivo'),
        T('no lugar do substantivo'),
        T('depois do verbo'),
      ],
      answer: 1,
    },
  ],
};
