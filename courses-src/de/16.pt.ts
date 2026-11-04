import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('Os advérbios'),
  subtitle: T('gern, heute, manchmal — a palavra que não flexiona'),
  section: T('Adjetivos e advérbios'),
  body: C(`## O advérbio é o mais fácil de todos

O advérbio modifica verbo, adjetivo ou outro advérbio, e é **invariável**: {gut} vira {sehr gut}, {schön} vira {sehr schön}, {oft} vira {sehr oft}. Nada flexiona, nada tem gênero, e a forma é a mesma no singular e no plural. Isso vale até para o superlativo: {am besten} e {am schönsten} são formas de qualidade usadas exatamente como advérbios.

A formação é quase mecânica. A maioria dos advérbios de qualidade nasce de um adjetivo: basta apagar a terminação. {schön} dá {schön}, {groß} dá {groß}, {leicht} dá {leicht}, {früh} dá {früh}. O atalho do iniciante é esse mesmo: se a palavra não flexiona, é advérbio; se flexiona, ainda não é.

Duas famílias escapam da regra:

**1. Advérbios de qualidade sem regra.** {gern} «de bom grado» continua {gern}; {oft} vira {öfter}; {viel} vira {mehr}; {teuer} vira {teurer}. São poucos, mas precisam ser decorados.

**2. Advérbios sem adjetivo nenhum.** {heute}, {morgen}, {gestern}, {hier}, {dort}, {ja}, {nein}, {sehr}, {nicht}, {immer}, {nie}, {manchmal}. Não há regra que os produza.

## A posição: o advérbio mora entre verbo e objeto

A regra de ouro é curta: advérbio de modo, de tempo ou de lugar que **não** seja negação fica entre o verbo conjugado e o objeto.

- {Ich fahre morgen nach Berlin.} «Eu vou a Berlim amanhã.»
- {Ich sehe den Film heute Abend.} «Eu assisto ao filme hoje à noite.»
- {Er spricht gut Deutsch.} «Ele fala bom alemão.»

Com o verbo no fim, a ordem invertida continua correta: {Morgen fahre ich nach Berlin.} É literário e raro na fala cotidiana.

O que **não** entra nessa posição são os advérbios de negação e de grau: {nicht}, {kein}, {nie}, {nur}, {auch}, {schon}, {erst}, {immer}, {sehr}, {genug}, {ziemlich}. Esses vêm **depois** do elemento que negam ou ampliam: {Er ist sehr müde}, {Ich habe nur wenig Zeit}, {Das ist nicht mein Buch}.

## {nicht} e {kein}

A divisão do trabalho é rigorosa. {nicht} nega verbo, adjetivo e advérbio, e é invariável. {kein} nega **apenas** o substantivo, e flexiona como artigo: {kein Mann}, {keine Frau}, {kein Kind}, {mit keinem Freunde}, {keine Bücher}.

Daí decorre o erro mais comum de quem fala português: em {Ich habe keine Zeit} «não tenho tempo», a negação é {kein} porque o alvo é {Zeit}. Nunca {Ich habe nicht Zeit}.

E note o que {nicht} marca: ele se cola ao elemento negado. {Ich sehe den Film nicht} nega o verbo {sehen}; {Ich sehe nicht den Film} nega o objeto {den Film}. A diferença é real e o ouvido nativo a percebe.

Para dizer «não apenas», o alemão empilha as duas: {Das ist nicht nur ein Satz} «isto não é apenas uma frase» — {nicht} nega o advérbio {nur} e {kein} reforça o substantivo.

## Dupla negação

O que o português faz com um único {não}, o alemão às vezes faz com dois: {Ich habe nichts gesehen} e {Ich habe nicht etwas gesehen} significam praticamente o mesmo. Nos dois casos o substantivo recebe {n} e um item negativo ({nichts}, {niemand}, {kein}). O par {nicht nichts} «de jeito nenhum» é raro, mas {kein einziger} «nem um só» é comum: {Er hat kein einziges Wort gesagt} «Ele não disse uma única palavra».

## O essencial

O advérbio é a forma não flexionada; você o forma apagando a terminação do adjetivo; {nicht} nega verbo e adjetivo, {kein} nega substantivo e flexiona; e a posição de {nicht}, {sehr}, {nur} e {immer} é sempre depois do elemento que modificam.`),
  vocab: [
    V('sehr', 'sehr', 'muito (antes de adjetivo, advérbio ou depois de -er)'),
    V('gern', 'gern', 'de bom grado, com gosto (comp.: lieber)'),
    V('oft', 'oft', 'às vezes, muitas vezes (comp.: öfter)'),
    V('manchmal', 'manchmal', 'às vezes, de vez em quando'),
    V('leise', 'leise', 'devoagar, baixinho [ˈlaɪ̯zə]'),
    V('hoch', 'hoch', 'em voz alta; cedo (adv.)'),
    V('früh', 'früh', 'cedo (adv.); madrugador (adj.)'),
    V('teuer', 'teuer', 'caro (adv., em expressões)'),
    V('nicht', 'nicht', 'não; nunca (nega verbo, adjetivo ou advérbio)'),
    V('kein', 'kein', 'nenhum, nenhum (nega substantivo; flexiona)'),
    V('nichts', 'nichts', 'nada'),
    V('immer', 'immer', 'sempre'),
    V('nie', 'nie', 'nunca'),
    V('nur', 'nur', 'só, apenas'),
    V('ziemlich', 'ziemlich', 'bastante, razoavelmente'),
    V('bald', 'bald', 'em breve, logo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a negação correta de {Ich habe Zeit}?'),
    options: [
      T('{Ich habe keine Zeit} — {kein} nega o substantivo {Zeit}'),
      T('{Ich habe nicht Zeit} — {nicht} aplicado a um substantivo'),
      T('{Ich habe kein Zeit} — {kein} sem flexão de gênero'),
      T('{Ich bin keine Zeit} — verbo trocado'),
    ],
    answer: 0,
    hint: T('Regra §4: {nicht} nega verbo e adjetivo; {kein} nega substantivo e flexiona.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Transforme o adjetivo em advérbio: {Die Tür ist ___ (offen).'),
      answer: 'offen',
      hint: T('O advérbio perde a terminação: {offen} fica {offen}, sem o {e} final.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a função ao advérbio correspondente.'),
      pairs: [
        { a: T('negar um substantivo'), b: T('kein') },
        { a: T('negar um verbo'), b: T('nicht') },
        { a: T('intensificar um adjetivo'), b: T('sehr') },
        { a: T('restringir a um único'), b: T('nur') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em qual frase o {nicht} está na posição correta?'),
      options: [
        T('{Ich sehe den Film nicht} — o {nicht} nega o verbo {sehen}'),
        T('{Ich sehe nicht den Film} — o {nicht} nega o verbo {sehen}'),
        T('{Ich nicht sehe den Film} — o {nicht} depois do pronome {ich}'),
        T('{Den Film nicht sehe ich} — o {nicht} no início da oração'),
      ],
      answer: 0,
      hint: T('Regra §5: {nicht} fica no fim do grupo que nega.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O advérbio é invariável: não flexiona em gênero, número ou caso. {Er spricht gut} e {Sie sprechen gut} usam exatamente a mesma palavra.',
      ),
    },
    {
      n: '2',
      text: T(
        'A regra de formação: o advérbio de qualidade é o adjetivo sem terminação. {schön} dá {schön}, {groß} dá {groß}, {leicht} dá {leicht}. Se flexiona, ainda não é advérbio.',
      ),
    },
    {
      n: '3',
      text: T(
        'Advérbios de modo, tempo e lugar que não sejam negação ficam entre o verbo conjugado e o objeto: {Er spricht gut Deutsch}, {Ich fahre morgen nach Berlin}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{nicht} nega verbo, adjetivo e advérbio e é invariável. {kein} nega exclusivamente o substantivo e flexiona como artigo: {kein}, {keine}, {keinem}, {keine}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Os advérbios de negação e de grau — {nicht}, {kein}, {nie}, {nur}, {auch}, {schon}, {erst}, {immer}, {sehr}, {genug} — vêm **depois** do elemento que modificam: {Er ist sehr müde}, {Ich habe nur wenig Zeit}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Apague a terminação, e não outra coisa'),
      text: T(
        'O truque do aluno é sempre o mesmo: escreva o adjetivo e apague a terminação. {schön} dá {schön}; {hoch} dá {hoch}; {teuer} dá {teuer}. A diferença está nessa terminação, e é por isso que a regra funciona. Poucas palavras escapam: {gern} dá {lieber} e não {gerner}, {oft} dá {öfter} e não {ofter}, {viel} dá {mehr} e não {vieler}. São cinco ou seis itens, e eles resolvem os próximos capítulos de uma vez.',
      ),
    },
    {
      label: T('Leitura bíblica'),
      text: T(
        'O {nicht} é, depois dos artigos, o termo mais frequente da Bíblia em Luther. Em João 3:16, {so hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab} — repare que {dass} «que» introduz a consequência e que o verbo conjugado {hat} já está no meio. Em Romanos 3:23, {Es sind aber alle gesündigt und ermangeln des Ruhmens, der vor Gott sein sollte} «todos pecaram e destituem-se da glória que diante de Deus deveriam ter»: ali um {nicht} seria redundante, porque é {ermangeln} «faltar» que faz a negação. O padrão se repete: no alemão bíblico, a negação raramente é uma palavra isolada.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ich fahre morgen nach Berlin.',
      gloss: T('Eu vou a Berlim amanhã (tempo entre verbo e objeto).'),
    },
    {
      text: 'Er spricht sehr gut Deutsch.',
      gloss: T('Ele fala muito bem alemão ({sehr} intensifica o advérbio {gut}).'),
    },
    {
      text: 'Sie kommt nicht mit.',
      gloss: T('Ela não vem junto ({nicht} depois do verbo, nega {mit}).'),
    },
    {
      text: 'Das ist nicht mein Buch.',
      gloss: T('Este não é o meu livro ({nicht} imediatamente antes do que nega).'),
    },
    {
      text: 'Ich habe keine Zeit.',
      gloss: T('Não tenho tempo ({kein} nega o substantivo e flexiona).'),
    },
    {
      text: 'Er trinkt nur Kaffee.',
      gloss: T('Ele só bebe café ({nur} vai depois do verbo, fora da posição de modo).'),
    },
    {
      text: 'Wir kommen immer pünktlich.',
      gloss: T('Nós sempre chegamos a tempo ({immer} depois do verbo conjugado).'),
    },
    {
      text: 'Er ist nicht oft hier.',
      gloss: T('Ele não está aqui muitas vezes ({nicht} nega o advérbio {oft}).'),
    },
    {
      text: 'Morgen fahre ich nach Berlin.',
      gloss: T('Amanhã vou a Berlim (ordem invertida, o verbo vai para o fim).'),
    },
    {
      text: 'Er hat kein einziges Wort gesagt.',
      gloss: T('Ele não disse uma única palavra ({kein} + {n} no substantivo).'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Do adjetivo ao advérbio'),
      head: [T('Adjetivo'), T('Advérbio'), T('Observação')],
      rows: [
        ['gut', 'gut', 'forma igual'],
        ['schön', 'schön', 'forma igual'],
        ['schnell', 'schnell', 'forma igual'],
        ['leise', 'leise', 'forma igual'],
        ['groß', 'groß', 'forma igual'],
        ['früh', 'früh', 'forma igual'],
        ['hoch', 'hoch', 'forma igual'],
        ['teuer', 'teuer', 'forma igual'],
        ['gern', 'gern', 'forma especial: comp. lieber'],
        ['oft', 'öfter', 'forma especial: comp. öfter'],
        ['viel', 'mehr', 'forma especial: comp. mehr'],
        ['teuer', 'teurer', 'forma especial: comp. teurer'],
      ],
    },
    {
      caption: T('Tabela 2 — Onde o advérbio fica'),
      head: [T('Tipo'), T('Posição'), T('Exemplo')],
      rows: [
        ['modo, tempo, lugar', 'entre o verbo e o objeto', 'Ich fahre morgen nach Berlin.'],
        [
          'modo, tempo, lugar (verbo no fim)',
          'antes do verbo, raro',
          'Morgen fahre ich nach Berlin.',
        ],
        ['negação (nicht)', 'no fim do grupo negado', 'Ich sehe den Film nicht.'],
        ['intensificador (sehr)', 'depois do elemento ampliado', 'Er ist sehr müde.'],
        ['restritor (nur)', 'depois do elemento limitado', 'Ich trinke nur Wasser.'],
        ['frequência (immer, oft)', 'depois do verbo conjugado', 'Wir kommen immer pünktlich.'],
      ],
    },
  ],
};
