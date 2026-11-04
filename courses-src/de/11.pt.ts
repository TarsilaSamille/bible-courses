import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('O acusativo'),
  subtitle: T('objeto direto e direção'),
  section: T('Os casos'),
  body: C(`O acusativo marca aquilo que a ação do verbo atinge diretamente: o objeto, o affected person, o destino. Ich sehe den Mann, Ich schreibe ein Buch, Sie kaufen ein Haus. Em todos esses casos, o acusativo responde à pergunta em quem ou em quê incide a ação.

O mesmo caso cobre a direção. Verbos de movimento pedem acusativo não para o ponto de partida, mas para o destino: Ich gehe in die Stadt, Wir fahren nach Berlin, Er läuft über die Brücke. Note a diferença com o português: Ich gehe in die Stadt é o destino; in der Stadt ist o lugar, e portanto dativo.

Há ainda um uso affected person, uso próprio do alemão: quando o dano recai sobre alguém, o acusativo marca a vítima. Er friert sich die Hände, Ich wasche mir die Haare, Er hat sich das Bein gebrochen. São construções com pronome reflexivo em dativo e objeto em acusativo, e o sentido é "fazer algo a si mesmo".

Verbos com dois acusativos são mais raros, mas frequentes no REGISTER escritural: Ich schenke dir ein Buch, Er zeigt mir die Tür, Gott gab ihm ein Gesetz. A ordem padrão do alemão põe o destinatário (dativo) antes da coisa; quando os dois são acusativos, a ordem é marcada pelo caso do pronome.

As preposições de acusativo são fixas, e são apenas estas: durch (através), für (para), gegen (contra), ohne (sem), um (em volta de, em torno de), bis (até), entlang (ao longo de). Com elas, o caso está garantido e não se negocia: durch den Wald, für dich, gegen meinen Willen, ohne Zweifel, um die Ecke, bis morgen, den Fluss entlang.`),
  vocab: [
    V('der Akkusativ', 'Akkusativ', 'o caso acusativo'),
    V('sehen', 'sehen', 'ver (acusativo)'),
    V('schreiben', 'schreiben', 'escrever'),
    V('kaufen', 'kaufen', 'comprar'),
    V('brauchen', 'brauchen', 'precisar'),
    V('schenken', 'schenken', 'dar de presente'),
    V('zeigen', 'zeigen', 'mostrar'),
    V('durch', 'durch', 'através de (prep. de acusativo)'),
    V('für', 'für', 'para (prep. de acusativo)'),
    V('gegen', 'gegen', 'contra (prep. de acusativo)'),
    V('ohne', 'ohne', 'sem (prep. de acusativo)'),
    V('um', 'um', 'em torno de (prep. de acusativo)'),
    V('entlang', 'entlang', 'ao longo de (prep. de acusativo)'),
    V('sich waschen', 'waschen', 'lavar-se'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em "Ich gehe in die Stadt", que caso tem die?'),
    options: [T('nominativo'), T('acusativo'), T('dativo'), T('genitivo')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a preposição: Ich gehe ___ Garten spazieren.'),
      answer: 'im',
      hint: T('in + dem = no jardim (destino).'),
    },
    {
      kind: 'fill',
      prompt: T('Complete o acusativo: Ich brauche ___ (o livro).'),
      answer: 'das Buch',
      hint: T('Neutro não muda no acusativo.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual preposição exige acusativo?'),
      options: [T('mit'), T('von'), T('durch'), T('bei')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Relacione a preposição ao caso.'),
      pairs: [
        { a: T('ohne'), b: T('acusativo') },
        { a: T('für'), b: T('acusativo') },
        { a: T('mit'), b: T('dativo') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O destino de um verbo de movimento é marcado por preposição de acusativo (in, an, auf, über) ou por substantivo sem preposição (nach Berlin, zu Hause).',
      ),
    },
    {
      n: '2',
      text: T(
        'A construção affected person tem sempre reflexivo em dativo: sich, mir, dir, ihm, ihr, uns, euch, ihnen — nunca mich em dativo.',
      ),
    },
    {
      n: '3',
      text: T(
        'Com dois acusativos, o primeiro costuma ser o pronome e mantém a ordem pronominal: Ich gebe ihm das Buch, Ich gebe es ihm.',
      ),
    },
    {
      n: '4',
      text: T(
        'Nomes próprios sem artigo tendem ao acusativo, sobretudo em construções de tempo: letzten Montag, nächsten Sommer, letzten Sonntag.',
      ),
    },
  ],
  notes: [
    {
      label: T('Wo ou wohin'),
      text: T(
        'A pergunta wo? (onde?) pede dativo; a pergunta wohin? (para onde?) pede acusativo. Ich bin in der Schule (dativo, lugar) e Ich gehe in die Schule (acusativo, destino) usam o mesmo substantivo com artigos diferentes. É a pergunta, não a preposição, que decide o caso — e por isso wo e wohin são a melhor chave de toda a seção de preposições.',
      ),
    },
    {
      label: T('Ligação bíblica'),
      text: T(
        'Em João 3:16, Denn Gott hat seinen Sohn gegeben (dativo), dass die Welt gerettet werde (finalidade). O verbo dar mostra o padrão que acabamos de ver: o destinatário fica em dativo e a coisa dada em acusativo.',
      ),
    },
  ],
  examples: [
    { text: 'Ich sehe den Mann.', gloss: T('Eu vejo o homem (objeto direto).') },
    { text: 'Wir fahren nach Berlin.', gloss: T('Vamos para Berlim (destino sem artigo).') },
    {
      text: 'Er läuft über die Brücke.',
      gloss: T('Ele corre sobre a ponte (über = acusativo, movimento).'),
    },
    { text: 'Ich bin in der Schule.', gloss: T('Estou na escola (in + dativo = lugar).') },
    { text: 'Ich gehe in die Schule.', gloss: T('Vou para a escola (in + acusativo = destino).') },
    { text: 'Er friert sich die Hände.', gloss: T('Ele congela as próprias mãos (afetado).') },
    { text: 'Ich schenke ihr ein Buch.', gloss: T('Eu dou a ela um livro de presente.') },
    {
      text: 'Ohne Zweifel ist das richtig.',
      gloss: T('Sem dúvida isso está certo (ohne + acusativo).'),
    },
  ],
  tables: [
    {
      caption: T('Usos do acusativo'),
      head: ['Uso', 'Estrutura', 'Exemplo', 'Pergunta'],
      rows: [
        ['objeto direto', 'verbo + N', 'Ich sehe den Mann.', 'em quem?'],
        ['destino', 'verbo de movimento + N', 'Wir fahren nach Berlin.', 'para onde?'],
        ['pessoa afetada', 'reflexivo dativo + N', 'Er friert sich die Hände.', 'a quem acontece?'],
        ['com complemento de direção', 'um + N', 'Er bog um die Ecke.', 'em torno de quê?'],
        ['com duração', 'por + N', 'Zwei Wochen lang.', 'por quanto tempo?'],
        [
          'com dois acusativos',
          'verbo + pronome + N',
          'Ich schenke dir ein Buch.',
          'a quem o quê?',
        ],
      ],
    },
    {
      caption: T('Preposições de acusativo'),
      head: ['Preposição', 'Significado', 'Exemplo'],
      rows: [
        ['durch', 'através de', 'durch den Wald gehen'],
        ['für', 'para, por', 'für dich, für zwei Wochen'],
        ['gegen', 'contra', 'gegen meinen Willen'],
        ['ohne', 'sem', 'ohne Zweifel, ohne Geld'],
        ['um', 'em torno de, para (mudar)', 'um die Ecke, um neun Uhr'],
        ['bis', 'até', 'bis morgen, bis Leipzig'],
        ['entlang', 'ao longo de', 'den Fluss entlang'],
      ],
    },
  ],
};
