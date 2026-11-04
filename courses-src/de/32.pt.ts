import { C, T, V } from '../shared.mts';

export default {
  id: 32,
  title: T('Os pronomes pessoais'),
  subtitle: T('ich, du, er, es, wir, ihr e Sie'),
  section: T('Os pronomes'),
  body: C(`O quadro dos pronomes pessoais tem sete linhas e três colunas, e as colunas são as três posições possíveis na frase. Ich, mir, mich: Nominativo, Dativo e Acusativo. A mesma estrutura vale para todas as pessoas: du, dir, dich; er/sie/es, ihm/ihr/ihnen, ihn/sie/es. No plural: wir, uns, uns; ihr, euch, euch; Sie, Ihnen, Sie. A regra que memoriza tudo é curta: no Acusativo, o pronome tem a forma do Nominativo, exceto na segunda pessoa do singular (dich), onde a forma do Nominativo é curta e a do Acusativo é longa.

O Acusativo é o lugar da ação: sich lässt machen, man wagt, er folgt ihr. É por isso que todos os verbos de ação sintética exigem um pronome acusativo, e todos os verbos estáticos exigem um dativo. Ich kenne ihn (ele não me conhece) e Ich helfe ihm (eu o ajudo) não são a mesma frase: são dois casos diferentes, e o português costuma esconder a diferença em preposições.

Sie é a palavra mais sobrecarregada do Alemão. Na escrita ela está em maiúscula e significa você ou eles, conforme o número do verbo: Sie kommen pode ser vocês vêm ou eles vêm. Na fala, a distinção se faz com o verbo em singular ou no plural: Komm! é você, kommen Sie! é você ou eles, e o contexto resolve. Quem escreve texto formal e precisa evitar a ambiguidade recorre a Ihnen (dativo) ou usa Siesie.

O tratamento du, ihr e Sie rege pronomes reflexos diferentes, e a escolha é mais uma questão de distância social do que de gramática. Contra Sie os reflexos são sich: Setzen Sie sich. Contra ihr, vocês: Setzt euch. Contra du: Setz dich. Com Sie na terceira pessoa há um sich pessoal, e entre eles aparece o reflexo recíproco sie sich; contra ihr não há recíproco, porque a forma setzt euch é apenas reflexiva: Ihr setzt euch.

Por fim, es tem uma função que os manuais esquecem de mencionar: pode ocupar o lugar de um substantivo inteiro, o que é impossível com er ou sie. Es ist heute kalt, Es sind viele Leute gekommen, Wie ist es? Aqui o pronome ocupa o lugar de um substantivo, não de um nome.`),
  vocab: [
    V('ich', 'ich', 'eu (nominativo)'),
    V('mir', 'ich', 'a mim (dativo)'),
    V('mich', 'ich', 'a mim (acusativo)'),
    V('du', 'du', 'tu (nominativo)'),
    V('dir', 'du', 'a ti (dativo)'),
    V('dich', 'du', 'a ti (acusativo)'),
    V('er', 'er', 'ele (nominativo)'),
    V('ihn', 'er', 'o, ele (acusativo)'),
    V('ihm', 'er', 'a ele (dativo)'),
    V('es', 'es', 'isso, ele (neutro)'),
    V('sie', 'sie', 'ela (nominativo minúsculo)'),
    V('wir', 'wir', 'nós (nominativo)'),
    V('ihr', 'ihr', 'vocês (nominativo)'),
    V('Sie', 'Sie', 'você, eles (maiúscula)'),
    V('Ihnen', 'Sie', 'a você, a eles (dativo)'),
    V('sich', 'sich', 'a si mesmo (reflexivo)'),
    V('euch', 'ihr', 'a vocês (reflexivo/acusativo)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o pronome acusativo de "du"?'),
    options: [T('du'), T('dich'), T('dir'), T('dihr')],
    answer: 1,
    hint: T('É a única linha do quadro que não repete o Nominativo.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o dativo: Das Buch gefällt ___ (a mim).'),
      answer: 'mir',
      hint: T('É a forma em -r do Pronome ich.'),
    },
    {
      kind: 'choose',
      prompt: T('Em "Ich gebe Ihnen das Buch", o que significa Ihnen?'),
      options: [
        T('a você, na forma de dativo'),
        T('a eles, na forma de nominativo'),
        T('nós mesmos, no Acusativo'),
        T('a você, no Acusativo'),
      ],
      answer: 0,
    },
    {
      kind: 'fill',
      prompt: T('Complete a frase impessoal: ___ ist heute kalt.'),
      answer: 'Es',
      hint: T('O tempo verbal não tem o que reger, então entra es.'),
    },
    {
      kind: 'match',
      prompt: T('Relacione o pronome ao caso.'),
      pairs: [
        { a: T('mich'), b: T('acusativo') },
        { a: T('dir'), b: T('dativo') },
        { a: T('Ihnen'), b: T('dativo de Sie') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    { n: '1', text: T('No Acusativo o pronome repete o Nominativo, exceto em du, que vira dich.') },
    {
      n: '2',
      text: T(
        'Dativo e Acusativo têm forma igual no plural, exceto em Sie, cujo Acusativo é Sie e cujo Dativo é Ihnen.',
      ),
    },
    {
      n: '3',
      text: T(
        'Sie maiúsculo pode significar você ou eles; a ambiguidade é resolvida pelo número do verbo e pelo contexto.',
      ),
    },
    {
      n: '4',
      text: T(
        'es pode substituir um grupo inteiro: Es sind viele Leute gekommen. Com er ou sie isso é impossível.',
      ),
    },
    {
      n: '5',
      text: T('O tratamento decide o reflexivo: sich contra Sie, euch contra ihr, dich contra du.'),
    },
  ],
  notes: [
    {
      label: T('O dativo que se parece com o português'),
      text: T(
        'Ich helfe ihm e Ich gebe ihm das Buch traduzem-se em português com uma preposição, e essa preposição faz o caso sumir. Quem traduz ao português e depois tenta refazer a frase perde a informação. A leitura bíblica depende dessa exatidão: Wenn ich euch nicht liebe, so ist keine Liebe in mir (1 João 4:16) traz um dativo e um pronome acusativo na mesma oração, e nenhum dos dois sobrevive à preposição portuguesa.',
      ),
    },
    {
      label: T('Ligação bíblica'),
      text: T(
        'A Tradução de Lutero usa ich e du sem artigo, o que é o sinal mais confiável de intimidade no texto bíblico. Ich bin bei euch (Mateus 28:20) e Ihr seid mein Leib (1 Coríntios 12:23) colocam o falante e o interlocutor no mesmo plano. O mesmo versículo, no uso litúrgico, traz Sie: Siehe, ich bin bei euch alle Tage, que é a forma litúrgica do texto, sem ambiguidade de tratamento.',
      ),
    },
  ],
  examples: [
    { text: 'Ich sehe dich.', gloss: T('Eu vejo você (pronome acusativo).') },
    {
      text: 'Ich gebe dir das Buch.',
      gloss: T('Eu dou o livro a você (dativo antes do acusativo).'),
    },
    { text: 'Es gefällt mir.', gloss: T('Isso me agrada (pronome em dativo).') },
    { text: 'Sie kommen heute.', gloss: T('Vocês vêm hoje (ou eles vêm: o verbo resolve).') },
    { text: 'Setzen Sie sich, bitte.', gloss: T('Sente-se, por favor (reflexivo sich).') },
    { text: 'Setzt euch!', gloss: T('Sentem-se! (reflexivo euch).') },
    {
      text: 'Es sind viele Leute hier.',
      gloss: T('Há muitas pessoas aqui (es no lugar de um grupo).'),
    },
    { text: 'Wie ist es?', gloss: T('Como vai? (impessoal com es).') },
    { text: 'Ich kenne ihn gut.', gloss: T('Eu o conheço bem (acusativo ele).') },
  ],
  tables: [
    {
      caption: T('O quadro dos pronomes pessoais'),
      head: ['Pessoa', 'Nominativo', 'Dativo', 'Acusativo'],
      rows: [
        ['ich', 'ich', 'mir', 'mich'],
        ['du', 'du', 'dir', 'dich'],
        ['er/sie/es', 'er/sie/es', 'ihm/ihr/ihnen', 'ihn/sie/es'],
        ['wir', 'wir', 'uns', 'uns'],
        ['ihr', 'ihr', 'euch', 'euch'],
        ['Sie', 'Sie', 'Ihnen', 'Sie'],
      ],
    },
    {
      caption: T('Nominativo e Acusativo: só uma exceção'),
      head: ['Pronome', 'Nominativo', 'Acusativo', 'Exceção?'],
      rows: [
        ['1ª sing.', 'ich', 'mich', 'não'],
        ['2ª sing.', 'du', 'dich', 'sim: du → dich'],
        ['3ª masc.', 'er', 'ihn', 'não (vogal → nada)'],
        ['3ª fem.', 'sie', 'sie', 'não'],
        ['neutro', 'es', 'es', 'não'],
        ['plural', 'wir/ihr/Sie', 'uns/euch/Sie', 'não'],
      ],
    },
  ],
};
