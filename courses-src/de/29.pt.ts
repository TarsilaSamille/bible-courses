import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('O imperativo'),
  subtitle: T('du, ihr, Sie e a forma de você'),
  section: T('Os verbos'),
  body: C(`O imperativo alemão tem duas famílias, e elas se distinguem pela tratamento, não pelo número. Contra du, ihr e Sie você tem apenas o singular: komm!, kommt!, kommen Sie!. A forma de polidez para você é quase igual ao presente Indicativo, apenas com a terminação -en acrescentada no lugar do -t: Sie kommen = vocês vêm, kommen Sie! = venham!. Contra du e ihr você tem as duas formas, mais uma forma com Sie que é sempre igual à de vocês.

O singular de du sai do presente do Indicativo sem terminação: du kommst → komm!, du fährst → fahr!, du heißt → heiß! Não há forma para a segunda pessoa do plural que derive da primeira pessoa: ihr kommt vem de *kommet, hoje arcaico. Para os verbos fortes do tipo lesen, sehen, geben, essen, tressen a vogal alterna na forma de du (du gibst) e por isso o imperativo também a alterna (gib!, sieh!, iss!, lies!). Essa é a únicasituação em que o imperativo não coincide com o Indicativo sem terminação.

A terminação -e do plural em -t merece atenção: ihr sagt → sagt!, ihr macht → macht!, mas ihr fahrt → fahrt! e ihr geht → geht! A regra é que o -e é obrigatório quando a forma termina em -t ou -d e opcional nos demais casos. É a mesma razão que produz o -e opcional do Konjunktiv I, com o exemplo clássico do segundo auxiliar.

Com Sie, o verbo é sempre o presente com -e: Setzen Sie sich!, Haben Sie Geduld!, Sagen Sie mir die Wahrheit!. E há um ponto de polidez que os manuais alemães quase sempre silenciam: o imperativo negativo é se Verb nicht, e com Sie a negação vai depois do pronome: Setzen Sie sich nicht!.

Um último traço: o Alemão tem poucas formas de subjuntivo, e o imperativo é a única que sobreviveu intacta da língua antiga. É também a única forma que o Alemão não precisa positifsar: komm! é ao mesmo tempo neutro e enfático.`),
  vocab: [
    V('komm!', 'kommen', 'vem! (du, singular)'),
    V('kommt!', 'kommen', 'venham! (ihr, plural)'),
    V('kommen Sie!', 'kommen', 'venham! (polidez)'),
    V('du', 'du', 'tu (tratamento familiar)'),
    V('ihr', 'ihr', 'vocês (tratamento familiar)'),
    V('Sie', 'Sie', 'você, senhora, senhor (polidez)'),
    V('gib!', 'geben', 'dá! (vogal alternada)'),
    V('iss!', 'essen', 'come! (verbo forte)'),
    V('lies!', 'lesen', 'lê! (verbo forte)'),
    V('fahr!', 'fahren', 'vai! (sem -e no singular)'),
    V('setzt euch!', 'setzen', 'sentem-se! (reflexivo no plural)'),
    V('nicht', 'nicht', 'não (negação do imperativo)'),
    V('haben Sie Geduld', 'haben', 'tenha paciência (polidez)'),
    V('warten Sie', 'warten', 'espere (polidez)'),
    V('Vergiss nicht', 'vergessen', 'não esqueça (imperativo negativo)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o imperativo correto de "du fährst"?'),
    options: [T('fährst!'), T('fahr!'), T('fahre!'), T('gefahr!')],
    answer: 1,
    hint: T('Regra §1: o singular de du é o presente sem terminação.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o imperativo de polidez: ___ Sie sich! (sentar-se)'),
      answer: 'Setzen',
      hint: T('Com Sie o verbo recebe -en no lugar de -t.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual imperativo está correto segundo a regra do -e?'),
      options: [T('Fahrt!'), T('Fahre!'), T('Fahrt zu!'), T('Fahret!')],
      answer: 0,
      hint: T('A forma termina em -t: o -e é obrigatório.'),
    },
    {
      kind: 'fill',
      prompt: T('Forme o imperativo negativo: Komm nicht zu spät! → Warte __ nicht!'),
      answer: 'mir',
      hint: T('O pronome ocupa a posição media da frase.'),
    },
    {
      kind: 'match',
      prompt: T('Relacione a pessoa à forma do imperativo.'),
      pairs: [
        { a: T('du'), b: T('komm!') },
        { a: T('ihr'), b: T('kommt!') },
        { a: T('Sie'), b: T('kommen Sie!') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O singular de du tira a terminação do presente: du fährst → fahr!, du heißt → heiß!',
      ),
    },
    {
      n: '2',
      text: T(
        'Verbos fortes com alternância vocálica mudam a vogal no imperativo: du gibst → gib!, du isst → iss!, du liest → lies!',
      ),
    },
    {
      n: '3',
      text: T(
        'No plural, o -e é obrigatório depois de -t e -d e opcional nos demais: geht! e fahrt!, mas wartet! e macht!',
      ),
    },
    {
      n: '4',
      text: T('Com Sie o imperativo é o presente com -e e o pronome vai antes: Setzen Sie sich!'),
    },
    {
      n: '5',
      text: T(
        'O imperativo negativo se forma com nicht depois do verbo: Komm nicht zu spät!; com Sie a negação segue o pronome: Kommen Sie nicht!',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que não há segunda pessoa do plural'),
      text: T(
        'O indicativo de primeira pessoa do plural Ich komme não é a fonte do plural do imperativo. A forma vem de *kommet, com terminação -et, que sobreviveu em poucos contextos fixos e é hoje completamente arcaica fora do imperativo. A lição 31 mostra que o pronome ihr nasceu da forma do verbo, e não o contrário: era o verbo que carregava a marca de segunda pessoa, e o pronome foi preenchendo devagar o espaço deixado por ela.',
      ),
    },
    {
      label: T('Ligação bíblica'),
      text: T(
        'Os mandamentos são o maior repositório de imperativos do alemão. Du sollst deinen Vater und deine Mutter ehren (Êxodo 20:12) traz a segunda pessoa do singular, e Du sollst nicht töten traz a mesma estrutura com a negação nach. Em Gálatas 5:1, Die Freiheit des Gesetzes steht uns Christen zu, a Tradução de Lutero usa o Konjunktiv; a forma em -st do imperativo é a chave para ler o texto como um conjunto de ordens e não de descrições.',
      ),
    },
  ],
  examples: [
    { text: 'Komm sofort!', gloss: T('Venha já! (du, sem terminação).') },
    { text: 'Gib mir das Buch!', gloss: T('Dê-me o livro! (alternância vocálica).') },
    { text: 'Vergiss das nicht!', gloss: T('Não esqueça isso! (negação depois do verbo).') },
    { text: 'Setzt euch!', gloss: T('Sentem-se! (reflexivo no plural).') },
    { text: 'Wartet auf mich!', gloss: T('Esperem por mim! (-e obrigatório após -t).') },
    { text: 'Macht das Fenster auf!', gloss: T('Abra a janela! (-e opcional).') },
    { text: 'Kommen Sie herein!', gloss: T('Entre, por favor (Sie + verbo com -en).') },
    { text: 'Seien Sie ruhig!', gloss: T('Fique tranquilo (sempre a forma de Sie).') },
    {
      text: 'Halte die Tür offen!',
      gloss: T('Mantenha a porta aberta (subjuntivo do imperativo, raro).'),
    },
  ],
  tables: [
    {
      caption: T('Formas do imperativo por pessoa'),
      head: ['Pessoa', 'Indicativo', 'Imperativo'],
      rows: [
        ['du (singular)', 'du kommst', 'komm!'],
        ['ihr (plural)', 'ihr kommt', 'kommt!'],
        ['Sie (polidez)', 'Sie kommen', 'kommen Sie!'],
        ['du + sein', 'du bist', 'sei!'],
        ['ihr + sein', 'ihr seid', 'seid!'],
        ['Sie + sein', 'Sie sind', 'seien Sie!'],
      ],
    },
    {
      caption: T('A terminação -e do plural'),
      head: ['Verbo', 'Sem -e', 'Com -e'],
      rows: [
        ['sagen', 'sagt!', '—'],
        ['machen', 'macht!', '—'],
        ['gehen', 'geht!', '—'],
        ['fahren', 'fahrt!', '—'],
        ['warten', 'wart!', 'wartet!'],
        ['arbeiten', 'arbeit!', 'arbeitet!'],
      ],
    },
  ],
};
