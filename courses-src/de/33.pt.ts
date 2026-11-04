import { C, T, V } from '../shared.mts';

export default {
  id: 33,
  title: T('Os possessivos'),
  subtitle: T('mein, dein, sein, ihr e unser'),
  section: T('Os pronomes'),
  body: C(`Os possessivos alemães formam uma família de doze palavras, e todas seguem a mesma regra de flexão, com duas exceções. A regra é: Nominativo e Acusativo terminam em nada ou em -n conforme o número; Dativo e Genitivo recebem -em e -es. mein, dein, sein, ihr, unser, euer marcas nominativo e acusativo sem terminação no singular e com -n no plural: mein Buch, meine Bücher, meinem Buch, meines Buches. Euer é a única forma escrita com -e- inicial.

As duas exceções são sein e ihr. Sein é o possessivo de terceira pessoa, e na escrita é idêntico à forma sie: er sieht sein Buch e er sieht sie, com o sentido decidindo. Ihr, além de ser o possessivo de segunda pessoa do plural, é o pronome vosso de tratamento; o contexto faz a distinção, do mesmo modo que faz a distinção entre Sie e Capital Sie. Em linguagem falada, o possessivo de terceira pessoa raramente aparece: quase sempre se repete o artigo, como em Ich sehe den Hund, e o possessivo é reservado para ênfase, ironia ou quando evita repetição.

O possessivo é um adjetivo, e como tal flexiona-se: mein kleiner Hund, meine kleine Katze, mit meinem kleinen Hund, wegen meines kleinen Hundes. É por isso que ele se comporta como o adjetivo da lição 14: depois de um artigo definido a forma é a fraca, e o que muda é o gênero e o número, não o possessivo em si.

Há um caso especial que merece atenção: o possuidor com pessoas no Genitivo pode ser omitido depois de um possessivo. Der Vater meiner Schwester, Die Mutter meines Bruders. E o possessivo pode virar sujeito, como em Mein Vater ist Lehrer.

Por fim, existe um conjunto de substantivos que age como pronome possessivo e dispensa artigo: mein Vater, dein Buch, sein Haus, ihr Kind, unser Land. São os possessivos de uso prático, e é neles que o possessivo aparece com mais frequência do que em qualquer outro lugar.`),
  vocab: [
    V('mein', 'mein', 'meu, minha (1ª pessoa)'),
    V('dein', 'dein', 'teu, tua (2ª pessoa)'),
    V('sein', 'sein', 'seu, sua (3ª pessoa)'),
    V('ihr', 'ihr', 'vosso, vossa (2ª plural)'),
    V('unser', 'unser', 'nosso, nossa (1ª plural)'),
    V('euer', 'euer', 'de vocês (2ª plural, com -e-)'),
    V('meinem', 'mein', 'meu, meu (dativo)'),
    V('meiner', 'mein', 'minha (feminino/genitivo forte)'),
    V('meines', 'mein', 'meu (neutro, genitivo)'),
    V('Ihre', 'Ihr', 'sua, de senhora (maiúscula)'),
    V('mein Vater', 'mein', 'meu pai (sem artigo)'),
    V('sein Buch', 'sein', 'o livro dele'),
    V('der Vater meiner Schwester', 'Vater', 'o pai da minha irmã (genitivo)'),
    V('unser Land', 'unser', 'nosso país'),
    V('von wegen', 'wegen', 'por causa de (com genitivo)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a forma correta em "mit ___ Bruder"?'),
    options: [T('mein'), T('meinem'), T('meines'), T('meine')],
    answer: 1,
    hint: T('Regra §2: o dativo acrescenta -em ao possessivo.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o plural: Ich habe ___ Bücher (meus livros).'),
      answer: 'meine',
      hint: T('No plural o possessivo recebe -e, igual ao substantivo.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta com o possuidor de 2ª pessoa do plural?'),
      options: [
        T('Das ist euer Haus.'),
        T('Das ist ihr Haus.'),
        T('Das ist eueren Haus.'),
        T('Das ist eurem Haus.'),
      ],
      answer: 0,
      hint: T('Regra §4: ihr é pronome, euer é possessivo.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete o genitivo: wegen ___ Bruders (do meu irmão).'),
      answer: 'meines',
      hint: T('O genitivo acrescenta -es ao possessivo.'),
    },
    {
      kind: 'match',
      prompt: T('Relacione o possessivo à pessoa.'),
      pairs: [
        { a: T('mein'), b: T('1ª pessoa do singular') },
        { a: T('unser'), b: T('1ª pessoa do plural') },
        { a: T('Ihr'), b: T('Sie, tratamento formal') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Nominativo e Acusativo não têm terminação no singular e recebem -n no plural: mein Haus, meine Häuser.',
      ),
    },
    {
      n: '2',
      text: T('Dativo e Genitivo recebem -em e -es: mit meinem Bruder, wegen meines Bruders.'),
    },
    {
      n: '3',
      text: T(
        'Só o possuidor muda; a forma do substantivo que o segue é a de um adjetivo, com -e no singular e -n no plural.',
      ),
    },
    {
      n: '4',
      text: T(
        'Escrever -e- inicial (euer, Euer) é opcional e comum, mas é erro usar ihr no lugar de euer em possessivo: *ihr Haus é errado para o vosso.',
      ),
    },
    {
      n: '5',
      text: T(
        'Nach dem Eigentum wird der Genitiv benutzt und kann bei Personennamen entfallen: das Haus meines Vaters, das Haus meiner Mutter, des Herrn.',
      ),
    },
  ],
  notes: [
    {
      label: T('Onde o possessivo aparece de verdade'),
      text: T(
        'Em fala spontaneous, o possessivo é raro. Quem fala prefere Ich sehe das Buch a Ich sehe mein Buch. O possessivo ganha força em três situações: quando o nome é ambíguo (Meine Mutter ist gekommen pode ser a minha ou a sua mãe), quando se quer contraste (Mein Bruder arbeitet, seiner nicht) e quando se evita repetição (Ich habe mein Buch gelesen und danach ihres). A lição 31 explica por que o artigo wins no uso corrente.',
      ),
    },
    {
      label: T('Ligação bíblica'),
      text: T(
        'O possessivo é a marca de pertencimento no texto bíblico, e o padrão é claro: Ich bin dein, du bist mein (João 2:16), uma frase que troca os possessivos sem perder o ritmo. Die Welt mit ihrer Pracht und ihrer Herrlichkeit (Isaías 2:14) repete o -r do Genitivo, e o Possessivpronomen assume o lugar do artigo: alle ihre Städte.',
      ),
    },
  ],
  examples: [
    { text: 'Mein Vater ist Lehrer.', gloss: T('Meu pai é professor (possessivo como sujeito).') },
    { text: 'Das ist mein Buch.', gloss: T('Este é o meu livro (sem artigo).') },
    { text: 'Ich sehe deine Schwester.', gloss: T('Eu vejo a sua irmã (dein, 2ª pessoa).') },
    { text: 'Er liebt sein Volk.', gloss: T('Ele ama o seu povo (sein = dele).') },
    {
      text: 'Wir singen in unserer Kirche.',
      gloss: T('Cantamos na nossa igreja (dativo unserem).'),
    },
    {
      text: 'Wegen meines Bruders blieb ich.',
      gloss: T('Por causa do meu irmão fiquei (genitivo meines).'),
    },
    {
      text: 'Meine kleinen Kinder schlafen.',
      gloss: T('Meus pequenos filhos dormem (adjetivo fraco plural).'),
    },
    { text: 'Sagen Sie Ihren Namen.', gloss: T('Diga o seu nome (Ihre maiúscula, polidez).') },
    { text: 'Das ist euer Buch.', gloss: T('Este é o livro de vocês (euer com -e-).') },
  ],
  tables: [
    {
      caption: T('Declinação dos possessivos'),
      head: ['Caso', 'Singular', 'Plural'],
      rows: [
        ['Nominativo', 'mein Buch', 'meine Bücher'],
        ['Acusativo', 'mein Buch', 'meine Bücher'],
        ['Dativo', 'meinem Buch', 'meinen Büchern'],
        ['Genitivo', 'meines Buches', 'meiner Bücher'],
        ['fem. Nom.', 'meine Frau', 'meine Frauen'],
        ['neutro Nom.', 'mein Kind', 'meine Kinder'],
      ],
    },
    {
      caption: T('Possessivos por pessoa e por caso'),
      head: ['Pessoa', 'Nominativo', 'Dativo', 'Genitivo'],
      rows: [
        ['ich', 'mein', 'meinem', 'meines'],
        ['du', 'dein', 'deinem', 'deines'],
        ['er/sie/es', 'sein', 'seinem', 'seines'],
        ['wir', 'unser', 'unserem', 'unseres'],
        ['ihr', 'euer', 'eurem', 'eures'],
        ['Sie', 'Ihr', 'Ihrem', 'Ihres'],
      ],
    },
  ],
};
