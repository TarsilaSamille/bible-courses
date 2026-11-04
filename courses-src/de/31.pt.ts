import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('As preposições'),
  subtitle: T('casos fixos e Wechselpräpositionen'),
  section: T('As preposições'),
  body: C(`Toda preposição do Alemão governa um caso, e o caso dela é fixo. Não há exceções: mit exige dativo, e não existe *mit dem Weg no sentido de ao longo do caminho, que seria in German along dem Weg. As Wechselpräpositionen, ou preposições de caso alternado, são apenas nove, e todas as nove aceitam dativo ou acusativo conforme o sentido: an, auf, aus, bei, für, hinter, in, neben, seit, über, unter, von, vor, zu, zwischen. A lista merece ser decorada inteira, porque é ela que comanda o accusativo nas preposições de movimento.

A regra da alternância é de sentido, não de forma. A preposição com dativo marca posição: Ich sitze an dem Tisch, Er wohnt bei meiner Schwester, Das Buch liegt auf dem Tisch. A preposição com acusativo marca destino ou duração: Ich setze mich an den Tisch, Er geht zu dem Arzt, Das Buch liegt auf dem Tisch — repare que auf com o mesmo substantivo pode aceitar os dois casos, e o que muda é o verbo: liegen fica, legen põe.

Existem dois pares que produzem frases quase idênticas com sentidos opostos: auf e an, e über e unter. Ich hänge das Bild an die Wand e Ich hänge das Bild über den Tisch. Er geht unter die Brücke e Er kommt unter der Brücke durch. A preposição não significa nada sozinha: ela funciona como um prego, e é o verbo que decide em que pregar.

Um segundo grupo, muito menor, é o das preposições com genitivo. São apenas seis: während, wegen, trotz, statt, anstatt, außerhalb. Elas são típica da linguagem escrita e soam mais literárias a quem vem do português, onde o genativo desapareceu. Während des Lebens é mais formal do que problemático.

Por fim, três preposições de duas palavras merecem memorização separada: anstatt ... zu, um ... zu e auf ... zu, que expressam respectively substituição, finalidade e movimento em direção a algo que já estava em movimento. E há um caso especial que engana: em perguntas de tempo com sentido de espera, em pode reger o dativo: Wann kommst du an?`),
  vocab: [
    V('an', 'an', 'a, em (Wechselpräposition)'),
    V('auf', 'auf', 'sobre, em cima de'),
    V('bei', 'bei', 'perto de, junto a'),
    V('für', 'für', 'para, por'),
    V('hinter', 'hinter', 'atrás de, atrás'),
    V('in', 'in', 'em, dentro de'),
    V('neben', 'neben', 'ao lado de'),
    V('über', 'über', 'sobre (no ar), acima de'),
    V('unter', 'unter', 'sob, debaixo de'),
    V('vor', 'vor', 'diante de, antes de'),
    V('zwischen', 'zwischen', 'entre'),
    V('von', 'von', 'de, a partir de (sempre dativo)'),
    V('zu', 'zu', 'a, para (sempre dativo)'),
    V('mit', 'mit', 'com (sempre dativo)'),
    V('während', 'während', 'durante (genitivo)'),
    V('wegen', 'wegen', 'por causa de (genitivo)'),
    V('trotz', 'trotz', 'apesar de (genitivo)'),
    V('außerhalb', 'außerhalb', 'fora de (genitivo)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase está correta?'),
    options: [
      T('Er hängt das Bild an die Wand.'),
      T('Er hängt das Bild an der Wand.'),
      T('Er hängt das Bild an dem Wand.'),
      T('Er hängt das Bild in die Wand.'),
    ],
    answer: 0,
    hint: T('Regra §1: movimento exige acusativo, logo die.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete com o caso correto: Das Buch liegt auf ___ Tisch (sobre a mesa).'),
      answer: 'dem',
      hint: T('Posição estática pede dativo: auf dem Tisch.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual preposição exige dativo mesmo indicando movimento?'),
      options: [T('zu'), T('in'), T('an'), T('auf')],
      answer: 0,
      hint: T('Er geht zu dem Arzt: destino, mas dativo.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete com genitivo: Wegen ___ Wetters bleiben wir hier.'),
      answer: 'des',
      hint: T('O substantivo Weather neutro precisa de -es no genitivo.'),
    },
    {
      kind: 'match',
      prompt: T('Relacione a preposição ao caso que ela exige.'),
      pairs: [
        { a: T('mit'), b: T('sempre dativo') },
        { a: T('für'), b: T('sempre acusativo') },
        { a: T('trotz'), b: T('sempre genitivo') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Dativo para posição, acusativo para direção: Ich hänge das Bild an die Wand, mas das Bild hängt an der Wand.',
      ),
    },
    {
      n: '2',
      text: T(
        'von, zu, mit, aus, bei, seit e nach exigem dativo sempre, mesmo quando indicam movimento: Er geht zu dem Arzt.',
      ),
    },
    {
      n: '3',
      text: T(
        'Com substantivos de pessoa, a preposição e a de em dativo pode ser omitida: der Freund von Maria → ein Freund von mir, zu Maria.',
      ),
    },
    {
      n: '4',
      text: T(
        'O verbo decide o caso da preposição, não o substantivo: Er legt das Buch auf den Tisch (ponte) e Das Buch liegt auf dem Tisch (está).',
      ),
    },
    {
      n: '5',
      text: T(
        'Em perguntas de espera, an fica no dativo: Wann kommst du an? a resposta, com o sentido de chegada, usa o acusativo: Wann kommst du an den Bahnhof?',
      ),
    },
  ],
  notes: [
    {
      label: T('A preposição não significa sozinha'),
      text: T(
        'Über e unter mostram por que o estudo caso a caso é inútil. Ich hänge das Bild über den Tisch e Ich hänge das Bild an die Wand usam a mesma construção, e a única diferença é a preposição: sobre o mesa, na parede. Já über der Brücke e unter der Brücke descrevem a mesma relação de espaço vista de lados opostos. Quem aprende as preposições como vocabulário sem os verbos que as accompanyam guarda uma lista; quem aprende verbo e preposição juntos guarda uma frase.',
      ),
    },
    {
      label: T('Ligação bíblica'),
      text: T(
        'A Tradução de Lutero tem um hábito persistente de zu: ohne mich könnt ihr nichts tun (João 15:5) usa a segunda pessoa do plural sem artigo, e zu é a preposição que nunca dispensa o dativo. Wer nicht liebt den Menschen, liebt auch den Bruder nicht (1 João 4:20) acrescenta ohne com acusativo. A segunda preposição, gegen, é rara na Bíblia e comum na fala, o que mostra que a tradução também envelhece.',
      ),
    },
  ],
  examples: [
    { text: 'Ich sitze an dem Tisch.', gloss: T('Eu estou sentado à mesa (posição, dativo).') },
    { text: 'Ich setze mich an den Tisch.', gloss: T('Eu me sento à mesa (destino, acusativo).') },
    { text: 'Er wohnt bei meiner Schwester.', gloss: T('Ele mora com a irmã (bei + dativo).') },
    {
      text: 'Das Buch liegt auf dem Tisch.',
      gloss: T('O livro está sobre a mesa (auf + dativo).'),
    },
    {
      text: 'Er legt das Buch auf den Tisch.',
      gloss: T('Ele põe o livro sobre a mesa (auf + acusativo).'),
    },
    {
      text: 'Wegen des Regens bleiben wir zu Hause.',
      gloss: T('Por causa da chuva ficamos em casa (wegen + genitivo).'),
    },
    {
      text: 'Trotz des Sturms gingen wir hinaus.',
      gloss: T('Apesar da tempestade saímos (trotz + genitivo).'),
    },
    { text: 'Ich gehe, um zu helfen.', gloss: T('Eu vou para ajudar (um ... zu).') },
    {
      text: 'Er kam an dem Bahnhof an.',
      gloss: T('Ele chegou à estação (partido verbo an, dativo an).'),
    },
  ],
  tables: [
    {
      caption: T('Wechselpräpositionen: dativo ou acusativo'),
      head: ['Preposição', 'Dativo (posição)', 'Acusativo (destino)'],
      rows: [
        ['an', 'an dem Tisch', 'an den Tisch'],
        ['auf', 'auf dem Tisch', 'auf den Tisch'],
        ['bei', 'bei meiner Schwester', 'zu meiner Schwester'],
        ['in', 'in dem Haus', 'in das Haus'],
        ['über', 'über dem Tisch', 'über den Tisch'],
        ['unter', 'unter dem Baum', 'unter den Baum'],
        ['vor', 'vor der Tür', 'vor die Tür'],
      ],
    },
    {
      caption: T('Preposições com caso fixo'),
      head: ['Caso', 'Preposições', 'Exemplo'],
      rows: [
        ['dativo', 'aus, bei, mit, nach, seit, von, zu', 'Er kommt aus Berlin.'],
        ['acusativo', 'durch, für, gegen, ohne, um', 'Das ist für dich.'],
        ['genitivo', 'während, wegen, trotz, statt, außerhalb', 'wegen des Wetters'],
        ['duas palavras', 'anstatt ... zu, um ... zu, auf ... zu', 'Ich gehe, um zu helfen.'],
      ],
    },
  ],
};
