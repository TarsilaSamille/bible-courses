import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  section: T('Verbo'),
  title: T('O verbo e as duas formas: o final e o -{ru}'),
  subtitle: T(
    'O verbo japonês flexiona pela ponta e não tem nem pessoa, nem número, nem gênero — por isso a lição é curta e a flexão é tudo',
  ),
  body: C(`
## O verbo flexiona pela ponta

O verbo japonês não flexiona por pessoa nem por número. "Eu como" e "nós comemos" são a mesma palavra: **não existe plural, nem concorda com o sujeito, nem muda com "eu" ou "você"**. O que muda é a ponta da palavra. Por isso a flexão está sempre no fim e nunca no começo, e por isso a flexão é escrita em kana mesmo quando o resto do verbo é kanji.

O verbo {naru} "ser, tornar-se" não é uma palavra só: é {nar}, a raiz que significa "tornar-se", mais a partícula {u}. É esse {u} que flexiona. O mesmo vale para toda a língua. Quem está começando erra porque procura a flexão no começo da palavra; ela está no último som, e é esse som que carrega a informação toda.

## Dois grupos, uma desinência cada

Os verbos do japonês se dividem em dois grupos, e a diferença entre eles é uma letra no final.

O **godan** termina em {u} e flexiona a última sílaba do radical. {taberu} "comer" vira *tabe-*, {hanasu} "falar" vira *hanashi-*, {shinu} "morrer" vira *shini-*, {kaku} "escrever" vira *kaki-*. Repare que a vogal antes do {u} também se alonga: *hanasu* → *hanashimasu*, {shinu} → *shinimasu*. O verbo absorve partícula como um rio absorve margem.

O **ichidan** termina em {ru} e flexiona tirando esse {ru}. {miru} "ver" vira *mi-*, {neru} "dormir" vira *ne-*, {iru} "estar" vira *i-*. Só um {ru} deles, e ele é o final: é por isso que eles são chamados de "ruizinhos". O truque para nunca errar está no bolso: **tire o {ru} e veja se o que sobra faz sentido no presente**. Tirando o {ru} de {miru} sobra *mi*, que é um verbo inteiro, e isso é ichidan. De {taberu} sobra *tabe*, que não significa nada sozinho, e de {hanasu} sobra *hana*, que significa "flor" e por isso engana: isso é godan. Quando o {ru} cai e sobra uma palavra que existe, é ichidan; quando sobra um pedaço, é godan.

Dois verbos fogem de tudo. Suru "fazer" flexiona inteiro: *shita*, *shite*, *shite wa ikenai*. Kuru "vir" troca a base toda: {kuru} vira *kita*, *kite*, e o negativo vira *kuranai*. São dois apenas entre os verbos mais usados da língua, e por isso são dois que todo mundo decora na primeira semana.

## Negação: o "não" vem depois

O japonês faz o contrário do português, e é preciso dizer isso duas vezes porque é o erro número um. Em português o "não" vem antes, "não como". Em japonês o "não" vem depois, colado no verbo, na forma {aru}: {naru} + {nai} = *naranai*, "não é", "não se torna".

E o detalhe que quase ninguém espera: **a forma negativa muda a base do verbo**. {naru} vira *naranai*, e o *ru* do presente não sobrevive: o que fica é *naran-* + *ai*. O mesmo acontece com {kuru}, que vira *kuranai*. Isso é por isso que o {ru} de um ichidan e o {u} de um godan são coisas diferentes na negativa, mesmo quando a letra é a mesma.

Há uma exceção que é preciso saber porque aparece o tempo todo. O final {masu} é o polite, e *narimasu* é o "ser" formal. O negativo dele não é *masenai*: é *imasen*. O polite desce um grau inteiro em vez de virar um negativo formal. *Narimasen desu* é o "não é" cortês de quem fala, e a diferença é real, não estilística.

## Plano, polido e honorífico

O verbo tem dois registros que você vai escolher o tempo todo. O plano é o verbo sem nada: {naru}, {taberu}, *shita*. O polido acrescenta {masu}, e o verbo *desu* entra como final de frase: *narimasu desu*. Quem fala com estranhos usa o polido; quem escreve narrativa bíblica usa quase sempre o plano. A tradução japonesa da Bíblia é um texto narrativo, e por isso os verbos aparecem na forma plana. Ler "no princípio era o Verbo" como *genki desu* é ler a tradução com a gramática errada.

Acima dos dois há o honorífico, que é tratar o outro como mais alto: *itashimasu*, "fazer" com reverência. Ele não aparece na escrita bíblica, mas é o registro das cartas e das orações.

E o que o verbo japonês não tem também conta: sem gênero, sem pessoa, sem número e sem tempo verbal próprio. O tempo de verdade vem das partículas, *ta*, *te*, *maeni*, *mashita*. Uma frase como *suru*, "fazer", não diz nada sobre quando nem sobre quem.

## O verbo de João 1:1

O primeiro versículo de João é o melhor exemplo de tudo isto. "No princípio era o Verbo" é *hazimeni kotoba ga atta*: o verbo é {aru} "existir, estar", e a flexão é a do passado, *atta*. É o verbo de existência, não de ação: a Palavra não faz alguma coisa, a Palavra está lá. E é o verbo mais importante do capítulo inteiro, porque os outros verbos de João são ações de Jesus, enquanto o versículo que abre o livro não tem ação nenhuma, tem presença. Quem aprendeu a ler {aru} no começo da Bíblia leu o versículo certo.
`),
  vocab: [
    V('naru', 'なる', 'ser; tornar-se (naru)'),
    V('nar', 'なる', 'radical de "tornar-se" (nar)'),
    V('taberu', '食べる', 'comer (taberu)'),
    V('hanasu', '話す', 'falar; falar com (hanasu)'),
    V('shinu', '死ぬ', 'morrer (shinu)'),
    V('kaku', '書く', 'escrever (kaku)'),
    V('miru', '見る', 'ver; olhar (miru)'),
    V('neru', '寝る', 'dormir (neru)'),
    V('iru', 'いる', 'estar; permanecer (iru)'),
    V('ikiru', '生きる', 'viver (ikiru)'),
    V('kuru', '来る', 'vir (kuru)'),
    V('suru', 'する', 'fazer (suru)'),
    V('aru', 'ある', 'ser; existir; estar (aru)'),
    V('naranai', 'ならない', 'não ser; não chegar a ser (naranai)'),
    V('kuranai', '来ない', 'não vir (kuranai)'),
    V('nai', 'ない', 'negação: o final que vem depois do verbo (nai)'),
    V('masu', 'ます', 'final do registro polido (masu)'),
    V('u', 'う', 'final /u do verbo godan (u)'),
    V('ru', 'る', 'final /ru do verbo ichidan (ru)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O verbo flexiona pela ponta: {naru} é {nar} mais a partícula {u}, e é esse {u} que flexiona.',
      ),
    },
    {
      n: '2',
      text: T(
        'Godan termina em {u} e flexiona a última sílaba do radical ({taberu} vira *tabe-*, {hanasu} vira *hanashi-*); ichidan termina em {ru} e flexiona tirando esse {ru} ({miru} vira *mi-*).',
      ),
    },
    {
      n: '3',
      text: T(
        'Truque de bolso: tire o {ru}. Se o que sobra é uma palavra que existe, é ichidan; se sobra um pedaço, é godan.',
      ),
    },
    {
      n: '4',
      text: T(
        'A negação vem depois do verbo, com {aru}: {naru} vira *naranai*, {kuru} vira *kuranai*. O final {masu} tem negativo próprio, *imasen*.',
      ),
    },
    {
      n: '5',
      text: T(
        'O verbo não tem gênero, nem pessoa, nem número, nem tempo verbal: o tempo vem das partículas.',
      ),
    },
  ],
  notes: [
    {
      label: T('O truque do -ru'),
      text: T(
        'Vale mais que qualquer tabela de conjugação. {miru} → *mi*, que é verbo sozinho: ichidan. {taberu} → *tabe*, que não é nada: godan. O único risco é uma palavra que exista por acaso, como *hana*, "flor", que sai de {hanasu}; nesse caso a flexão real resolve.',
      ),
    },
    {
      label: T('Por que a lição é curta'),
      text: T(
        'Como não há pessoa nem número a marcar, uma única linha de flexão resolve o verbo inteiro. A flexãoária do japonês tem poucas formas, e o que faz o texto variar é a partícula que vem depois — assunto da lição 8.',
      ),
    },
  ],
  examples: [
    {
      text: '言葉があった',
      gloss: T('hazimeni kotoba ga atta — no princípio a Palavra estava lá (o Verbo *era*)'),
    },
    {
      text: 'パンを食べます',
      gloss: T('pan o tabemasu — como pão (plano e polido ao mesmo tempo: ichidan mais {masu})'),
    },
    {
      text: '紙を書きました',
      gloss: T('kami o kakimashita — escrevi num papel (plano, passado, godan)'),
    },
    {
      text: '先生が来ません',
      gloss: T('sensei ga kimasen — o professor não vem ({kuru} mais o negativo *imasen*)'),
    },
    {
      text: 'お書きになりました',
      gloss: T('okakini narimashita — o senhor escreveu (honorífico)'),
    },
  ],
  tables: [
    {
      caption: T('As duas desinências, lado a lado'),
      head: [T('Grupo'), T('Termina em'), T('Como flexiona'), T('Exemplo')],
      rows: [
        [T('godan'), T('{u}'), T('muda a última sílaba do radical'), T('{taberu} → *tabe-*')],
        [T('godan'), T('{u}'), T('a vogal também se alonga'), T('{hanasu} → *hanashi-*')],
        [T('godan'), T('{u}'), T('a vogal também se alonga'), T('{kaku} → *kaki-*')],
        [T('ichidan'), T('{ru}'), T('tira o {ru} e pronto'), T('{miru} → *mi-*')],
        [T('ichidan'), T('{ru}'), T('tira o {ru} e pronto'), T('{neru} → *ne-*')],
      ],
    },
    {
      caption: T('Os que não obedecem a nenhuma regra'),
      head: [T('Verbo'), T('Passado'), T('Negativo'), T('O que acontece')],
      rows: [
        [
          T('{suru}'),
          T('*shita*'),
          T('*shinai*'),
          T('flexiona inteiro: *shite*, *shite wa ikenai*'),
        ],
        [T('{kuru}'), T('*kita*'), T('*kuranai*'), T('troca a base toda, inclusive no negativo')],
        [
          T('{ikiru}'),
          T('*ikita*'),
          T('*ikinai*'),
          T('acaba em {ru}, mas flexiona como godan: *iki-*'),
        ],
        [T('{aru}'), T('*atta*'), T('*nai*'), T('irregular: o {u} vira outro som no passado')],
      ],
    },
    {
      caption: T('Três registros, três formas de dizer a mesma coisa'),
      head: [T('Registro'), T('Verbo'), T('Frase'), T('Onde se usa')],
      rows: [
        [
          T('plano'),
          T('{naru}'),
          T('*naru desu*'),
          T('texto por extenso, como a narrativa bíblica'),
        ],
        [
          T('polido'),
          T('*narimasu*'),
          T('*narimasu desu*'),
          T('fala comum; negativo em *narimasen*'),
        ],
        [
          T('honorífico'),
          T('*itashimasu*'),
          T('*itashimasu*'),
          T('cartas, orações eutti tratamento do outro'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O verbo {miru} "ver" é ichidan: tira-se o {ru}. Que base sobra?'),
    options: [T('mi'), T('mir'), T('m'), T('miru')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete a forma negativa de {naru} "tornar-se", que troca a base e acrescenta {aru}: nara____',
      ),
      answer: 'nai',
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao grupo ou ao irregular'),
      pairs: [
        { a: T('{miru}'), b: T('ichidan: tira o {ru}') },
        { a: T('{taberu}'), b: T('godan: muda a penúltima sílaba') },
        { a: T('{kuru}'), b: T('irregular: o passado é *kita*') },
        { a: T('{ikiru}'), b: T('acaba em {ru} mas é godan') },
        { a: T('{aru}'), b: T('verbo de existência: "era", "está lá"') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Em "no princípio ERA o Verbo" (João 1:1), qual é o verbo do versículo?'),
      options: [T('{kuru}'), T('{suru}'), T('{aru}'), T('{miru}')],
      answer: 2,
    },
  ],
};
