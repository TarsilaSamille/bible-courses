import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('Verbo'),
  title: T('A partícula do fim: perguntar não é reordenar'),
  subtitle: T(
    'A pergunta é a afirmação com uma sílaba colada no fim, e é a resposta — não a pergunta — que escolhe a forma',
  ),
  body: C(`
## A partícula fecha a frase, e nada se move

"Você vai" é {anata wa iku}. "Você vai?" é {anata wa iku ka}. Entre uma frase e outra entrou uma sílaba, e nada mais mudou: o pronome continuou na frente, o verbo continuou no fim, e a ordem sujeito, objeto indireto, objeto direto, verbo não foi tocada. **Não há inversão.** Em português e em espanhol a pergunta vira uma construção à parte, com o verbo subindo e um auxiliar subindo junto; o japonês não tem auxiliar de pergunta nenhum. A pergunta é a afirmação com {ka} colada no fim.

É por isso que {ka} é uma partícula e não uma palavra: ela não nomeia nada, não carrega conteúdo, e só pode viver num lugar, depois de todo o resto. Encaixada no meio da frase ela não é pergunta, é ruído.

E é o mesmo arranjo que aparece nas outras duas línguas deste projeto. A lição 21 do curso de mandarim faz exatamente isto com uma partícula final, e as lições 2 e 5 do coreano mostram que lá a partícula final também existe, com uma diferença que é o assunto da seção seguinte. Mandarim, coreano e japonês são três famílias linguísticas diferentes e chegam ao mesmo ponto: perguntar é barato, e é barato porque **perguntar não é reordenar as palavras, é acrescentar um som ao fim**.

## O que muda é a resposta, não a pergunta

Uma pergunta "você vai?" aceita mais de uma resposta: "vou", "não vou", "quando?", "vou, se chover". A partícula {ka} **não força sim ou não**; ela não diz nada sobre qual das formas a resposta vai tomar. Quem escolhe é a resposta, e é a resposta que decide o resto da frase.

O contraste com o coreano deixa isso claro. Lá a pergunta também é partícula no fim, mas ela vem acompanhada de uma troca de forma no verbo: o afirmativo usa uma terminação, o negativo usa outra, e a fala acrescenta ainda o pronome que desaparece na escrita. Três coisas mudam de uma vez. No japonês muda uma: o verbo é literalmente o mesmo nas duas frases, {iku ka}, e o que distingue "você vai?" de "vai?" é o resto da frase, não a ponta do verbo.

Essa liberdade da resposta é o que faz a partícula servir para três coisas ao mesmo tempo, e as três estão na tabela abaixo. Uma delas é a mais importante para a leitura bíblica: a frase "dizem que ele vai?" é, em japonês, relato e não pergunta. A mesma {ka}, com a mesma ordem e o mesmo verbo, anuncia que alguém contou algo, e quem está lendo precisa saber que aquilo não foi confirmado.

## Os interrogativos são substantivos, e substantivo anda antes do verbo

Seis palavras fazem as perguntas que a partícula sozinha não faz: {dare} quem, {nani} o que, {doko} onde, {itsu} quando, {dōshite} por quê, e {dō} mais yō para como. Todas são substantivos: não advérbios, não pronomes, substantivos que servem para perguntar. E substantivo, na lição da ordem, vai antes do verbo.

Por isso "Quem é você?" é {anata wa dare desu ka}: você, o tópico, {dare} em posição de substantivo, o verbo no fim, e {ka} no fim. O pronome interrogativo entra exatamente onde entraria um substantivo qualquer, e a partícula continua colada no fim.

O erro do iniciante é sempre o mesmo: {anata ka dare}, pronome interrogativo colado na partícula, como se o pronome fosse a coisa perguntada e a partícula viesse logo em seguida. Isso não é japonês em frase nenhuma, nem para perguntar nem para responder.

Existe um segundo padrão, e ele explica boa parte das perguntas que você vai encontrar na Bíblia: a **oração interrogativa direta**, em que o pronome interrogativo fecha a oração e a partícula fecha junto com ele. "Quem jogou a pedra?" é {dare ga ishi o nageta ka}, pronome em {ga}, verbo no fim, partícula no fim. Sem a partícula de sujeito, {dare ishi o nageta ka}, a frase é coloquial e significa a mesma coisa. O que os dois padrões têm em comum é uma coisa só: a partícula interrogativa nunca abre a frase.

## Jesus pergunta o tempo todo, e as perguntas dele são curtas

No evangelho de João, Jesus pergunta quase a cada página. Três delas merecem ser lidas de perto, porque cada uma usa uma peça do que vem antes.

João 1:38 é a mais limpa: "você vai para onde?" é {anata wa doko e iku ka}, pronome, tópico, substantivo interrogativo, partícula de direção, verbo no fim, partícula no fim. Nenhuma posição nova, nenhuma palavra nova. E a resposta de Pedro não é uma partícula: é uma frase inteira, que é o padrão das respostas deste capítulo.

João 4:7 mostra a pergunta no verbo: "não me dês de beber?" tem o verbo de pedir na forma negativa, com a partícula depois dele. A pergunta não precisa de construção própria; precisa de um verbo negativo.

João 8:7 é a mais famosa das três e a melhor para o estudo, porque tem a construção inteira: "quem sem pecado lança a primeira pedra?" é {tsumi no nai hito ga daremo ishi o nagenai ka}. Pronome interrogativo, partícula de sujeito, verbo no fim, partícula no fim, tudo empilhado na ordem da lição da sintaxe, e nada na frente. A resposta dos escribas é silêncio, e o silêncio é uma das respostas que {ka} permite sem nenhuma partícula nova.

E essa pergunta também é, para quem ouve, uma pergunta retórica: ela é feita para ser óbvia. Mesma construção, mesma partícula; quem ouve é que descobre se era pergunta de verdade.
`),
  vocab: [
    V('ka', 'か', 'partícula interrogativa: vai no fim da frase e não inverte nada (ka)'),
    V('dare', '誰', 'quem (dare) — pronome interrogativo, usado como substantivo'),
    V('nani', '何', 'o quê (nani) — pronome interrogativo'),
    V('doko', 'どこ', 'onde, para onde (doko) — pronome interrogativo'),
    V('itsu', 'いつ', 'quando (itsu) — pronome interrogativo'),
    V('dōshite', 'どうして', 'por quê (dōshite) — pronome interrogativo'),
    V('dō', 'どう', 'como (dō) — pronome interrogativo'),
    V('e', 'へ', 'direção: o "para onde" do movimento (e)'),
    V('mō', 'もう', 'já (mō) — partícula que responde a uma pergunta sobre o passado'),
    V('yō', 'よう', 'partícula de necessidade: "tem de" (yō)'),
    V('deshō', 'でしょう', 'afirmação abafada: "é provável que", "será que" (deshō)'),
    V('ne', 'ね', 'partícula que pede confirmação à escuta (ne)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A pergunta não inverte nada: é a afirmação com {ka} no fim, e a ordem da lição 9 continua exatamente igual.',
      ),
    },
    {
      n: '2',
      text: T(
        '{ka} não força resposta de sim ou não. Quem escolhe a forma da resposta é a resposta.',
      ),
    },
    {
      n: '3',
      text: T(
        'Os interrogativos são substantivos: {dare}, {nani}, {doko}, {itsu}, {dōshite} e {dō} ficam antes do verbo, como qualquer substantivo.',
      ),
    },
    {
      n: '4',
      text: T(
        'A partícula interrogativa fecha a frase. Ela nunca abre, e nunca fica colada ao pronome — {anata ka dare} não é japonês.',
      ),
    },
    {
      n: '5',
      text: T(
        'No coreano a pergunta troca a terminação do verbo e acrescenta o pronome do registro; no japonês o verbo não muda e só a partícula avisa.',
      ),
    },
  ],
  notes: [
    {
      label: T('A mesma partícula faz três coisas'),
      text: T(
        'A {ka} serve para a pergunta de verdade, para a pergunta retórica — quando é uma constatação feita em forma de pergunta — e para o relato de "ouvir dizer que". A retórica depende da entonação: "Você sabe?" subindo é pergunta, descendo é constatação. E é o **contexto** que desempata quando não há entonação, ou seja, no texto escrito: uma frase com {ka} logo depois de "ouvi dizer que" é relato, e ninguém vai responder.',
      ),
    },
    {
      label: T('A pergunta decide o registro da resposta'),
      text: T(
        'A resposta também tem partícula, e ela denuncia o quanto o respondente está na mesma formalidade da pergunta. {deshō} afina ("será que entende?"), {ne} procura confirmação ("entende, né?"), e desu com {ka} no fim é a forma neutra. Um mesmo "você entende?" pode receber três respostas — "sim, eu entendo", "sim, um pouco", "não exatamente" — e a diferença entre elas é mais registro do que informação.',
      ),
    },
  ],
  examples: [
    {
      text: '行くか',
      gloss: T('iku ka — você vai? o verbo no lugar de sempre, a partícula colada no fim'),
    },
    {
      text: 'どこへ行きますか',
      gloss: T(
        'doko e ikimasu ka — você vai para onde? o interrogativo antes do verbo, a partícula no fim',
      ),
    },
    {
      text: '行くそうですか',
      gloss: T('iku sō desu ka — dizem que ele vai? a mesma partícula, agora como relato'),
    },
    { text: '知っていますか', gloss: T('shitte imasu ka — você sabe? o verbo não mudou nada') },
    {
      text: '罪のない人がだれも石を投げない',
      gloss: T(
        'tsumi no nai hito ga daremo ishi o nagenai — "ninguém sem pecado lança uma pedra" (João 8:7)',
      ),
    },
  ],
  tables: [
    {
      caption: T('Os seis interrogativos, e a posição deles'),
      head: [T('Interrogativo'), T('Significa'), T('A frase que ele faz')],
      rows: [
        [T('{dare}'), T('quem'), T('Quem jogou a pedra?')],
        [T('{nani}'), T('o quê'), T('O que você disse?')],
        [T('{doko}'), T('onde, para onde'), T('Você vai para onde?')],
        [T('{itsu}'), T('quando'), T('Quando você volta?')],
        [T('{dōshite}'), T('por quê'), T('Por que você foi?')],
        [T('{dō} mais yō'), T('como'), T('Como você sabe disso?')],
      ],
    },
    {
      caption: T('Três funções da mesma partícula'),
      head: [T('Uso'), T('O que é'), T('O que o leitor faz com isso')],
      rows: [
        [
          T('pergunta'),
          T('{anata wa iku ka}'),
          T('responde com sim, com não, ou com outra pergunta'),
        ],
        [
          T('pergunta retórica'),
          T('{shiru ka}, entonação descendente'),
          T('trata como uma afirmação e responde como convém'),
        ],
        [
          T('"ouvir dizer que"'),
          T('{iku sō desu ka}'),
          T('sabe que aquilo é relato, não fato confirmado'),
        ],
      ],
    },
    {
      caption: T('A resposta também tem partícula'),
      head: [T('Partícula'), T('O que acrescenta'), T('Como soa')],
      rows: [
        [T('desu + {ka}'), T('neutralidade'), T('entendo — resposta seca, sem confiança a mais')],
        [
          T('{deshō}'),
          T('afirmação atenuada'),
          T('será que entende? — o respondente concorda em espírito'),
        ],
        [
          T('{ne}'),
          T('pedido de confirmação'),
          T('entende, né? — a resposta volta com outra {ne}'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que muda de "você vai" para "você vai?" em japonês?'),
    options: [
      T('o verbo sobe para o começo da frase'),
      T('aparece uma partícula no fim, e a ordem não muda'),
      T('o pronome vira pronome interrogativo'),
      T('entra um verbo auxiliar de pergunta'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "você vai?" — o verbo e a partícula interrogativa no fim: 行く____'),
      answer: 'か',
    },
    {
      kind: 'match',
      prompt: T('Ligue o interrogativo à pergunta que ele faz'),
      pairs: [
        { a: T('{dare}'), b: T('quem') },
        { a: T('{doko}'), b: T('onde, para onde') },
        { a: T('{itsu}'), b: T('quando') },
        { a: T('{dōshite}'), b: T('por quê') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em "dizem que ele vai", a partícula {ka} está sendo usada como:'),
      options: [
        T('pergunta de verdade'),
        T('pergunta retórica'),
        T('relato de ouvir dizer'),
        T('objeto direto'),
      ],
      answer: 2,
    },
  ],
};
