import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Por, para e crase'),
  subtitle: T('causa, finalidade e a + a = à'),
  section: T('Os conectivos'),
  body: C(`## Por e para: a mesma preposição, cinco sentidos

**Por** introduz causa, agente, meio, troca e duração: {por amor} (causa), {por Deus} (agente), {por meio de} (meio), {por dois dias} (duração), {por mil reais} (troca). **Para** introduz destino, finalidade, direção e prazo: {para Deus} (destino), {para orar} (finalidade), {para amanhã} (prazo).

O que decide é o contexto, e a mesma construção muda de sentido: {por mim} pode ser «por minha causa» ou «na minha opinião», enquanto {para mim} é «para o meu bem» ou «na minha opinião». São os dois lados de uma mesma ideia — **opinião** — com a preposição trocada.

O ponto de atenção para o tradutor é que o grego e o hebraico marcam essas relações com casos (genitivo, dativo, acusativo) e o português com preposições. Traduzir caso por caso sem entender a função é onde a tradução bíblica perde: {πορεύεσθε εἰς πᾶσαν τὴν γῆν} tem genitivo ({τὴν γῆν}, "de toda a terra") e acusativo ({πᾶσαν}, "toda"), e o português resolve com um "a" e um "em".

## A crase é a fusão de a + a

A crase é a fusão do artigo {a} com a preposição {a}: {vou à igreja}, {às três horas}, {à noite}. Ela não ocorre em três casos que o aprendiz decora mal:

Não ocorre diante de verbo: {vou orar}, não {vou à orar}. Não ocorre diante de palavra masculina determinada: {dei a uma cruz} — porque {a + o} = {ao}, e {um} é indeterminado, logo fica {a um}. Não ocorre diante de pronome pessoal: {falou a ela}, não {falou à ela}.

E há o caso do nome próprio: {vou a Roma} ou {vou à Roma}? A crase com nome próprio feminino é aceita na escrita, mas o uso varia e o Portuguese europeu prefere {a Roma}. O ponto prático: a crase nunca é obrigatória, e ninguém erra por não usá-la.

## A isca do italiano

O português adquire preposições de todo lado — {ir a}, {vir de} —, e o italiano também ({andare a}, {venire da}). Isso cria uma tentação específica: produzir crase por imitação do italiano, vendo {a} + {la} e escrevendo {à}. Mas o italiano não tem crase: {a la} não é uma fusão, e a correspondência entre italiano e português está no valor da preposição, não na forma.

Um tradutor que produz crase por analogia com o italiano escreve errado em português e ainda traz um problema que o original não tinha.

## O que ler

Em qualquer preposição, pergunte: qual é a função no grego (qual caso)? {por} causa, agente, meio, troca ou duração? {para} destino, finalidade, direção ou prazo? E há {a + a} fundido, ou é só {a}? A terceira resposta decide a crase, e as duas primeiras decidem a preposição. Juntas, elas resolvem a frase.`),
  vocab: [
    V('por', 'por', 'por'),
    V('para', 'para', 'para'),
    V('por amor', 'amor', 'por amor'),
    V('por Deus', 'Deus', 'por Deus'),
    V('para orar', 'orar', 'para orar'),
    V('para amanhã', 'amanhã', 'para amanhã'),
    V('vou à igreja', 'ir', 'vou à igreja'),
    V('a uma cruz', 'cruz', 'a uma cruz'),
    V('por nós', 'nós', 'por nós'),
    V('daria a vida', 'dar', 'daria a vida'),
    V('a', 'a', 'a (preposição)'),
    V('à', 'a', 'à (a + a, crase)'),
    V('igreja', 'igreja', 'igreja'),
    V('orar', 'orar', 'orar'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase usa {por} como causa?'),
    options: [
      T('Cristo morreu por nós.'),
      T('Vou para a cidade.'),
      T('Para orar, saí.'),
      T('Ficou por três dias.'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “vou ___ igreja”.'),
      answer: 'à',
      hint: T('a + a forma uma só palavra.'),
    },
    {
      kind: 'choose',
      prompt: T('Onde não há crase?'),
      options: [T('vou à igreja'), T('vou à mulher'), T('entrego à Maria'), T('chegou às cinco')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Ligue preposição e sentido.'),
      pairs: [
        { a: T('por (agente)'), b: T('agente') },
        { a: T('para'), b: T('finalidade') },
        { a: T('por (causa)'), b: T('causa') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'A crase é a fusão de {a} (preposição) com {a} (artigo): {a + o = ao}, {a + as = às}, {a + a = à}. Onde a segunda {a} falta, não há crase: {a uma cruz}, {a minha casa}, {a Dios}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Não há crase diante de verbo ({vou à orar} não existe), diante de pronome pessoal ({falou à ela} não existe) e diante de numeral cardinal ({a três dias}, não {às três dias} quando {três} é numeral).',
      ),
    },
    {
      n: '§3',
      text: T(
        'A crase exige o artigo definido, não qualquer {a}: {a uma cruz} fica sem crase porque {um} é indeterminado, e {a minha casa} fica sem crase porque {meu} é determinador. Com o {a} determinado, vem a crase: {ao homem}, {à cidade}.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{por} cobre causa, agente, meio, troca e duração: {por amor}, {por Deus}, {por meio de}, {por dois dias}, {por mil reais}. {para} cobre destino, finalidade, direção e prazo: {para Deus}, {para orar}, {para amanhã}. O mesmo par {por mim} e {para mim} muda de sentido: o primeiro é opinião, o segundo é benefício.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O grego e o hebraico marcam essas relações com casos ({πορεύεσθε εἰς πᾶσαν τὴν γῆν}: {πᾶσαν} acusativo, {τὴν γῆν} genitivo), e o português resolve com preposição e artigo: {por todo o mundo}. É a função que decide a preposição, não a forma que o caso sugere.',
      ),
    },
  ],
  notes: [
    {
      label: T('Não force'),
      text: T(
        'Muitas traduções bíblicas usam “a Deus” sem crase, e está certo: {a} ali é preposição, não artigo. Ninguém erra por não usar crase, porque a crase é facultativa em todos os casos em que o uso corrente a admite.',
      ),
    },
    {
      label: T('A isca do italiano'),
      text: T(
        'O italiano tem {a la}, que não é fusão nenhuma, e ver essa forma leva a escrever {à}. A correspondência entre italiano e português está no valor da preposição, nunca na forma: quem traduz por analogia com o italiano escreve errado em português.',
      ),
    },
  ],
  examples: [
    { text: 'Cristo morreu por nós.', gloss: T('{por} como causa, com o beneficiário {nós}.') },
    { text: 'Entregou a vida por o povo.', gloss: T('{por} como causa beneficiária imediata.') },
    { text: 'Foi criado por Deus.', gloss: T('{por} como agente da passiva.') },
    { text: 'Ficou por três dias.', gloss: T('{por} como duração.') },
    { text: 'Vou para a cidade.', gloss: T('{para} como destino.') },
    { text: 'Saí para orar.', gloss: T('{para} como finalidade.') },
    { text: 'Vou à igreja.', gloss: T('{a} mais {a}: a crase.') },
    { text: 'Dei a uma cruz.', gloss: T('Sem crase, porque {um} é indeterminado.') },
    { text: 'Falou a ela.', gloss: T('Sem crase, porque {ela} é pronome.') },
  ],
  tables: [
    {
      caption: T('Os cinco valores de {por}'),
      head: ['Valor', 'Exemplo', 'Referência'],
      rows: [
        ['causa', 'por amor', '—'],
        ['agente', 'por Deus', 'passiva de ser'],
        ['meio', 'por meio de', '—'],
        ['troca', 'por mil reais', '—'],
        ['duração', 'por três dias', '—'],
      ],
    },
    {
      caption: T('Os quatro valores de {para}'),
      head: ['Valor', 'Exemplo', 'Referência'],
      rows: [
        ['destino', 'para Deus', '—'],
        ['finalidade', 'para orar', '—'],
        ['direção', 'para o norte', '—'],
        ['prazo', 'para amanhã', '—'],
      ],
    },
    {
      caption: T('Onde há crase e onde não há'),
      head: ['Caso', 'Forma', 'Exemplo'],
      rows: [
        ['artigo determinado', 'há crase', 'ao homem, à cidade'],
        ['verbo', 'não há crase', 'vou orar'],
        ['pronome pessoal', 'não há crase', 'falou a ela'],
        ['indefinido', 'não há crase', 'a uma cruz'],
      ],
    },
  ],
};
