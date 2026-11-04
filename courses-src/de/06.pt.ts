import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Os substantivos'),
  subtitle: T('classe, flexão e compostos'),
  section: T('Os substantivos'),
  body: C(`O substantivo alemão é a única classe gramatical que obrigatoriamente começa com maiúscula, e é ele que carrega gênero, número e caso. Tudo o mais pode virar substantivo por nominalização: um infinitivo (das Essen, o comer), um adjetivo (der Arme, o pobre), um numeral (die Zweite, a segunda) e até um pronome (das Ich, o eu). Quando isso acontece, o substantivo recebe um gênero próprio, que nem sempre coincide com o da base.

Os compostos são a característica mais visível do substantivo alemão. A regra de formação é simples — os elementos vêm do maior para o menor, e o último é o núcleo: Krankenhaus = Krank + en + Haus (doente + casa). A ligação costuma receber um -s, chamado Fugen-s, embora ele nem sempre apareça (Krankenhaus, Arbeitnehmer, aber Haustür, Schiffahrt, Rucksack).

A Flexão do substantivo é sempre a mesma: a terminação do artigo acompanha o gênero, e a do substantivo varia apenas no genitivo singular e no plural. Um substantivo masculino tem no genitivo ou -s, ou -es (des Mannes, des Hauses), ou um -n (des Vaters, des Jungen). O feminino e o neutro formam o genitivo com -s ou -es (der Frau, des Kindes).

Um cuidado prático: o gênero do composto é o do núcleo, não o do primeiro elemento. Der Arbeitgeber tem masculino porque o núcleo é der Arbeitgeber (pessoa), embora Arbeit feminine. Um recurso que funciona melhor do que a pura força do hábito é decorar cada substantivo sempre acompanhado do artigo e no plural, porque é a forma que aparece na fala.`),
  vocab: [
    V('das Essen', 'Essen', 'a comida; o comer (nominalizado)'),
    V('frühstücken', 'frühstücken', 'tomar café da manhã'),
    V('das Frühstück', 'Frühstück', 'o café da manhã'),
    V('der Arme', 'Arme', 'o pobre (adjetivo nominalizado)'),
    V('das Lesen', 'Lesen', 'a leitura (nominalizada)'),
    V('die Zweite', 'zweite', 'a segunda (numeral nominalizado)'),
    V('das Krankenhaus', 'Krankenhaus', 'o hospital (composto)'),
    V('der Arbeitgeber', 'Arbeitgeber', 'o empregador (composto)'),
    V('die Haustür', 'Haustür', 'a porta da casa (composto sem Fugen-s)'),
    V('die Forschung', 'Forschung', 'a pesquisa (composto com -ung)'),
    V('die Rede', 'Rede', 'o discurso; a rede'),
    V('reden', 'reden', 'falar'),
    V('der Handschlag', 'Handschlag', 'o aperto de mãos'),
    V('das Verstehen', 'Verstehen', 'a compreensão'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o núcleo e o gênero de "der Arbeitgeber"?'),
    options: [
      T('Arbeit, feminino'),
      T('Arbeitgeber, masculino'),
      T('Geber, neutro'),
      T('der Arbeitgeber, neutro'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Desmonte o composto: Krankenhaus = Haus für ___'),
      answer: 'Kranke',
      hint: T('O primeiro elemento indica a pessoa afetada.'),
    },
    {
      kind: 'fill',
      prompt: T('Forme o substantivo de "verstehen" (compreender): das ___'),
      answer: 'Verstehen',
      hint: T('Um infinitivo nominalizado é neutro.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual composto NÃO tem Fugen-s?'),
      options: [T('das Krankenhaus'), T('die Haustür'), T('das Arbeithaus'), T('der Kirchturm')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relacione a base à nominalização.'),
      pairs: [
        { a: T('essen'), b: T('das Essen') },
        { a: T('arm'), b: T('der Arme') },
        { a: T('frühstücken'), b: T('das Frühstück') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Todo nominalizado é masculino, feminino ou neutro conforme a regra da cabeça nominal, e essa regra não é a da palavra de base.',
      ),
    },
    {
      n: '2',
      text: T(
        'O núcleo de um composto é o último elemento, e é ele que determina o gênero: die Blume + der Topf → die Blumenvase.',
      ),
    },
    {
      n: '3',
      text: T(
        'No genitivo singular, o masculino usa -s, -es ou -n conforme o peso da palavra; o feminino e o neutro usam -s ou -es.',
      ),
    },
    {
      n: '4',
      text: T(
        'O Fugen-s é morfema vazio: nunca recebe acento, nunca conta para o plural e pode desaparecer ao reduzir o composto (Krankenhaus → krank).',
      ),
    },
  ],
  notes: [
    {
      label: T('Dá um passo atrás'),
      text: T(
        'A construção composta é, na origem, uma receita de instrução. Onde o alemão diz Wenn Sie die Tür schließen, há uma maneira de falar contornando o artigo ausente. Quem aprende a desmontar o composto recupera a gramática sem decorar nada: Krankenhaus = Haus für Kranke.',
      ),
    },
    {
      label: T('Pouco a pouco'),
      text: T(
        'Uma estratégia de alto rendimento é o pareamento: Karte ↔ die Karte, die Karte ↔ maps, e o plural die Karten. Com três dados — artigo, singular e plural — o substantivo fica recuperável mesmo quando a memória falha.',
      ),
    },
  ],
  examples: [
    {
      text: 'Das Essen ist fertig.',
      gloss: T('A comida está pronta (das = neutro, Essen = comer).'),
    },
    {
      text: 'Die Armen essen später.',
      gloss: T('Os pobres comem mais tarde (Arme = adjetivo nominalizado).'),
    },
    {
      text: 'Er arbeitet in einem Krankenhaus.',
      gloss: T('Ele trabalha num hospital (composto com Fugen-s).'),
    },
    {
      text: 'Die Haustür war offen.',
      gloss: T('A porta da casa estava aberta (composto sem Fugen-s).'),
    },
    {
      text: 'Sie hält die Zweite im Kreuz.',
      gloss: T('Ela segura a segunda nas mãos (numeral nominalizado).'),
    },
    {
      text: 'Das Verstehen kam langsam.',
      gloss: T('A compreensão veio devagar (verbo nominalizado).'),
    },
    {
      text: 'Zum Frühstück gab es Brot.',
      gloss: T('Houve pão no café da manhã (z um = zu dem, genitivo).'),
    },
  ],
  tables: [
    {
      caption: T('Formas nominalizadas'),
      head: ['Base', 'Nominalização', 'Gênero', 'Leitura'],
      rows: [
        ['infinitivo (essen)', 'das Essen', 'neutro', 'a comida, o ato de comer'],
        ['infinitivo (frühstücken)', 'das Frühstück', 'neutro', 'o café da manhã'],
        ['adjetivo (arm)', 'der Arme', 'masculino', 'o pobre'],
        ['adjetivo (schön)', 'das Schönste', 'neutro', 'o mais belo, o melhor'],
        ['numeral (die zweite)', 'die Zweite', 'feminino', 'a segunda, a outra pessoa'],
        ['pronome (ich)', 'das Ich', 'neutro', 'o eu, o ego'],
        ['verbo (verstehen)', 'das Verstehen', 'neutro', 'a compreensão'],
      ],
    },
    {
      caption: T('Fugen-s no composto'),
      head: ['Composto', 'Análise', 'Fugen-s'],
      rows: [
        ['das Krankenhaus', 'Krank + en + Haus', 'presente'],
        ['der Arbeitgeber', 'Arbeit + Geber', 'ausente'],
        ['die Haustür', 'Haus + Tür', 'ausente'],
        ['die Rucksackreise', 'Rucksack + Reise', 'ausente'],
        ['die Schiffahrt', 'Schiff + Fahrt', 'fricativo /f/'],
        ['der Arbeitnehmer', 'Arbeit + Nehmer', 'ausente'],
        ['die Blumentopferdecke', 'Blume + Topf + Decke', 'presente, truncado'],
        ['der Dreikäsehoch', 'drei + Käse + Hoch', 'presente, truncado'],
      ],
    },
  ],
};
