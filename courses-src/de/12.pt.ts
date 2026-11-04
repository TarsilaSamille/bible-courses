import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('O dativo'),
  subtitle: T('a quem e para quem'),
  section: T('Os casos'),
  body: C(`O dativo é o caso do destinatário. Ele responde a duas perguntas que em português se confundem: a quem se entrega algo? e para quem se faz algo? Ich gebe dem Mann das Buch responde à primeira; Ich backe für dich responde à segunda.

O dativo tem três usos principais. O primeiro é o objeto indireto de verbos de transferência, fala e sentiment: Ich helfe dem Kranken, Sie dankt dem Herrn, Er antwortet mir, Das Kind freut sich über die Geschenke. O segundo é o possedor registrado como dativo quando o possuidor é uma pessoa e o possuído se mantém no caso que já tinha: Ich wasche mir die Hände, Er putzt sich das Gesicht, Sie bäckt sich einen Kuchen.

O terceiro uso é o mais característico do alemão: expressões impersonais com dativo. Não há sujeito verdadeiro, e o complemento em dativo é quem experimenta a situação: Mir ist kalt, Mir graut davor, Mir tut der Kopf weh, Es ist mir wichtig. Em português essas construções exigem um sujeito preenchido, o que torna a tradução desajeitada; o que importa aqui é reter a ideia de que o dativo é o_experimentador da frase.

Os verbos que regem dativo formam uma lista fechada que vale a pena decorar. Memorize os principais: helfen, danken, folgen, gehören, gefallen, passen, schmecken, antworten, dienen, gratulieren, drucken, wehtun, fehlen, schaden, verzeihen, erlauben, verbieten, befehlen, empfehlen.

A ordem dos termos também tem regra. Quando há dativo e acusativo, o dativo vem primeiro: Ich gebe dem Mann das Buch. E o pronome reflexivo em dativo se antecipa ao dativo lexical: Ich schenke mir ein Buch.`),
  vocab: [
    V('der Dativ', 'Dativ', 'o caso dativo'),
    V('helfen', 'helfen', 'ajudar (dativo)'),
    V('danken', 'danken', 'agradecer (dativo)'),
    V('folgen', 'folgen', 'seguir (dativo)'),
    V('gehören', 'gehören', 'pertencer (dativo)'),
    V('passen', 'passen', 'servir, ficar bem (dativo)'),
    V('schmecken', 'schmecken', 'saborar (dativo)'),
    V('antworten', 'antworten', 'responder (dativo)'),
    V('gratulieren', 'gratulieren', 'parabenizar (dativo)'),
    V('schmecken lassen', 'schmecken', 'deixar ao gosto de'),
    V('mit', 'mit', 'com (prep. de dativo)'),
    V('von', 'von', 'de, a partir de (prep. de dativo)'),
    V('zu', 'zu', 'a, para (prep. de dativo)'),
    V('bei', 'bei', 'perto de, junto a (prep. de dativo)'),
    V('mir', 'ich', 'a mim (dativo)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual verbo exige dativo?'),
    options: [T('sehen'), T('danken'), T('kaufen'), T('lesen')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o dativo: Das Buch gehört ___ (a mim).'),
      answer: 'mir',
      hint: T('Pronome pessoal de 1ª pessoa no dativo.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete a preposição: Ich fahre ___ Berlin (para Berlim).'),
      answer: 'nach',
      hint: T('Indica destino, sem artigo.'),
    },
    {
      kind: 'choose',
      prompt: T('Em "Ich schenke dir ein Buch", qual é a ordem dos termos?'),
      options: [
        T('acusativo antes do dativo'),
        T('dativo antes do acusativo'),
        T('genitivo antes do dativo'),
        T('a ordem é livre'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relacione a construção ao seu uso.'),
      pairs: [
        { a: T('Mir ist kalt'), b: T('impessoal') },
        { a: T('Ich wasche mir die Haare'), b: T('possessor em dativo') },
        { a: T('Er wird von Gott geliebt'), b: T('agente da passiva') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Dativo e acusativo juntos formam a ordem padrão objeto indireto primeiro: Ich gebe dem Nachbarn das Paket.',
      ),
    },
    {
      n: '2',
      text: T(
        'O pronome reflexivo em dativo precede o dativo lexical: Ich wasche mir die Haare, nicht mir die Haare ich.',
      ),
    },
    {
      n: '3',
      text: T(
        'As preposições mit, von, zu, bei, aus, seit, gegenüber exigem dativo, e nesse caso o substantivo pode aparecer sem artigo: bei Maria, von dem Herrn, zu Hause.',
      ),
    },
    {
      n: '4',
      text: T(
        'Com pessoas no dativo, o artigo pode ser omitido depois de zu, von, für e bei: der Freund von Maria, die Mutter von Heinrich, ein Freund von mir.',
      ),
    },
  ],
  notes: [
    {
      label: T('O dativo experimental'),
      text: T(
        'Em Mir ist kalt não existe sujeito no sentido português. O que a frase afirma é que há alguém para quem é frio, e esse alguém é o dativo. Traduzir literalmente produz um Pandora-box do tipo Estou com frio, que reintroduz um sujeito inexistente. A tradução correta preserva a ausência: Ich habe kalt, Mir ist nicht gut.',
      ),
    },
    {
      label: T('Ligação bíblica'),
      text: T(
        'Em João 3:16, hat Gott die Welt geliebt (dativo de objeto indireto). A construção se repete em 1 João 4:9, Gott hat seinen Sohn geliebt für die Welt. A preposição für + acusativo explicita o mesmo dativo numa forma nominal.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ich gebe dem Mann das Buch.',
      gloss: T('Eu dou o livro ao homem (dativo antes do acusativo).'),
    },
    { text: 'Kannst du mir helfen?', gloss: T('Você pode me ajudar? (helfen + dativo).') },
    { text: 'Das Buch gehört mir.', gloss: T('O livro me pertence (gehören + dativo).') },
    { text: 'Das Buch gefällt mir.', gloss: T('O livro me agrada (gefallen + dativo).') },
    { text: 'Ich wasche mir die Hände.', gloss: T('Eu lavo as mãos (possessor em dativo).') },
    { text: 'Mir ist kalt.', gloss: T('Estou com frio (impessoal com dativo).') },
    { text: 'Es ist mir wichtig.', gloss: T('É importante para mim (interesse em dativo).') },
    {
      text: 'Die Hunde folgen dem Herrn.',
      gloss: T('Os cães seguem o senhor (dativo de destino).'),
    },
    {
      text: 'Sie wohnt bei ihrer Schwester.',
      gloss: T('Ela mora com a irmã dela (bei + dativo).'),
    },
  ],
  tables: [
    {
      caption: T('Os três usos do dativo'),
      head: ['Uso', 'Estrutura', 'Exemplo', 'Pergunta'],
      rows: [
        ['objeto indireto', 'verbo + dat. + acc.', 'Ich gebe dem Mann das Buch.', 'a quem?'],
        ['possessor pessoal', 'reflexivo + dat. + N', 'Ich wasche mir die Hände.', 'de quem são?'],
        ['impessoal', 'impers. + dat.', 'Mir ist kalt.', 'como se sente quem?'],
        ['interesse', 'es ist + dat. + adj.', 'Es ist mir wichtig.', 'o que importa a quem?'],
        ['dativo de agente', 'passiva + von + dat.', 'Er wird von Gott geliebt.', 'por quem?'],
      ],
    },
    {
      caption: T('Verbos que regem dativo'),
      head: ['Verbo', 'Português', 'Frase'],
      rows: [
        ['helfen', 'ajudar', 'Kannst du mir helfen?'],
        ['danken', 'agradecer', 'Ich danke dir.'],
        ['folgen', 'seguir', 'Die Hunde folgen dem Herrn.'],
        ['gehören', 'pertencer', 'Das Buch gehört mir.'],
        ['gefallen', 'agradar (a alguém)', 'Das Buch gefällt mir.'],
        ['passen', 'servir, ficar bem', 'Der Mantel passt dir.'],
        ['schmecken', 'saborar', 'Der Wein schmeckt mir gut.'],
        ['antworten', 'responder', 'Er antwortet der Frage.'],
        ['wehtun', 'doer', 'Der Kopf tut mir weh.'],
        ['schaden', 'prejudicar', 'Das Rauchen schadet der Gesundheit.'],
      ],
    },
  ],
};
