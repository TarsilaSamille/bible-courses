import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('O artigo: o sistema completo'),
  subtitle: T('il, uno, un po’ d’acqua, dei'),
  section: T('O artigo e os pronomes'),
  body: C(`## Três artigos e três contagens

O definido aponta para algo que já se sabe: {il libro} «o livro» (aquele que está à vista, ou o único), {la casa} «a casa», {i libri} «os livros». O indefinido introduz: {un libro} «um livro», {una casa} «uma casa». O partitivo é o terceiro, e é o que o português não tem: **dei** libri são alguns livros, um número indeterminado, {delle} rose algumas rosas. Com substantivos contáveis no singular, o partitivo coincide com o indefinido: {un libro} pode ser um livro ou um dos livros, e o contexto diz qual.

Os três sistemas fecham num quadro só. Definido: {il}, {lo}, {la}, {l’}, {i}, {gli}, {le}. Indefinido: {un}, {uno}, {una}. Partitivo: {un}/{uno}/{una} no singular, {dei}, {degli}, {delle} no plural.

## {lo} e {l’}: a inicial manda

O masculino ganha {lo} diante de **s + consoante**, {z}, {gn}, {ps} e {x}: {lo studente}, {lo zaino}, {lo gnomo}, {lo psicologo}, {lo yacht}. Diante de vogal, o artigo não tem forma própria e vira {l’}: {l’albero}, {l’uomo}, {l’amore}. O indefinido {uno} entra exatamente nas mesmas posições: {uno studente}, {uno zaino}, {uno gnomo}. E {un}, que é a forma comum, nunca aparece diante de vogal nem dessas consoantes.

## O partitivo e a elisão que o sustenta

O partitivo plural nasce de {di + i}: {di + i} dá {dei}, {di + gli} dá {degli}, {di + le} dá {delle}. Diante de vogal, o {di} não se junta a nada e fica só: é por isso que o português diz «um pouco de água» e o italiano escreve **{un po’ d’acqua}**, com um {d’} que parece um resto de preposição e não é nada disso. O mesmo {d’} aparece em {d’acqua}, {dell’acqua}, {d’uomini}, {delle} depois de substantivo.

E há uma distinção que o português não faz: quando o substantivo já está determinado, {di} vira {del}, {dello}, {della}, {dei}, {degli} — e {dei} deixa de ser partitivo. Diz-se {il libro di Paolo} «o livro de Paulo» e {dei libri} «alguns livros», nunca {dei Paolo}.

## Na Bíblia

Gv 1:6 abre com as três contagens na mesma frase: «Fu mandato da Dio un uomo, {il cui nome} era Giovanni». {Un uomo} é indefinido: aquele homem ainda não é ninguém para o leitor. {Il cui nome} é definido e relativo: o nome já é dele, e o artigo volta justamente porque a oração o retomou. E {da Dio} mostra a preposição {da}, a mesma de {d’} no {d’acqua}, com origem em vez de parte.

## O que ler

Sempre que aparecer {dei}, {degli} ou {delle}, verifique se o substantivo seguinte está determinado: determinado é genitivo e vira {del}; indeterminado é partitivo e fica {dei}. E quando o nome já vem com nome próprio, o o artigo some: {Dio}, {Maria}, {Roma} — sem e com maiúscula é a marca.`),
  vocab: [
    V('un', 'un', 'um/uma'),
    V('uno', 'uno', 'um (antes de s, z, gn, ps)'),
    V('una', 'una', 'uma'),
    V('libro', 'libro', 'livro'),
    V('studente', 'studente', 'estudante'),
    V('zaino', 'zaino', 'mochila'),
    V('albero', 'albero', 'árvore'),
    V('acqua', 'acqua', 'água'),
    V('d’acqua', 'acqua', 'de água'),
    V('po’', 'po’', 'pouco'),
    V('dei', 'di', 'de os (alguns)'),
    V('delle', 'di', 'de as (algumas)'),
    V('rosa', 'rosa', 'rosa'),
    V('giardino', 'giardino', 'jardim'),
    V('nome', 'nome', 'nome'),
    V('casa', 'casa', 'casa'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se traduz un po’ d’acqua?'),
    options: [T('um pouco de água'), T('uma água pequena'), T('pouca água'), T('a água do pouco')],
    answer: 0,
    hint: T('É um partitivo: some algo de água.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: ___ studente (um estudante)'),
      answer: 'uno',
      hint: T('s + consoante pede uno.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual é o partitivo plural de la rosa?'),
      options: [T('dei'), T('delle'), T('degli'), T('dela')],
      answer: 1,
      hint: T('Feminino plural.'),
    },
    {
      kind: 'fill',
      prompt: T('Genitivo de il libro: il libro ___ Paolo'),
      answer: 'di',
      hint: T('O substantivo já está determinado.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O artigo definido aponta para algo já identificado; o indefinido introduz algo novo.',
      ),
    },
    {
      n: '2',
      text: T('Lo entra diante de s + consoante, z, gn, ps e x; l’ entra diante de vogal.'),
    },
    {
      n: '3',
      text: T('Uno entra exatamente onde entraria lo, e flexiona como substantivo masculino.'),
    },
    {
      n: '4',
      text: T(
        'O partitivo plural nasce de di + artigo: di + i = dei, di + gli = degli, di + le = delle.',
      ),
    },
    {
      n: '5',
      text: T(
        'Com substantivo determinado o partitivo não cabe: il libro di Paolo, não dei Paolo.',
      ),
    },
  ],
  notes: [
    {
      label: T('O d’ que não significa nada'),
      text: T(
        'Em {un po’ d’acqua}, {d’} não é "de" com sentido: é a preposição {di} elidida diante de vogal, e o substantivo que vem depois é o complemento do partitivo. O mesmo {d’} aparece em {d’uomini}, {d’acqua}, {domani}, {dentro}.',
      ),
    },
    {
      label: T('Onde o artigo some'),
      text: T(
        'O artigo falta quando o substantivo já está determinado por outra coisa: nome próprio ({Dio}, {Milano}), numeral ({tre libri}), ou pronome indefinido ({ogni uomo}, {qualche libro}). Fora desses três casos a omissão soa como erro.',
      ),
    },
  ],
  examples: [
    { text: 'Un libro sulla tavola.', gloss: T('Um livro sobre a mesa.') },
    { text: 'Uno studente con uno zaino.', gloss: T('Um estudante com uma mochila.') },
    { text: 'Lo zaino dello studente.', gloss: T('A mochila do estudante.') },
    { text: 'Un po’ d’acqua.', gloss: T('Um pouco de água.') },
    { text: 'Dei libri di Paolo.', gloss: T('Alguns livros de Paulo.') },
    { text: 'Delle rose del giardino.', gloss: T('Algumas rosas do jardim.') },
    { text: 'L’albero della piazza.', gloss: T('A árvore da praça.') },
    { text: 'Degli studenti della classe.', gloss: T('Os estudantes da turma.') },
    {
      text: 'Fu mandato da Dio un uomo, il cui nome era Giovanni.',
      gloss: T('Foi enviado por Deus um homem, cujo nome era João.'),
    },
  ],
  tables: [
    {
      caption: T('Artigo definido'),
      head: ['Genere', 'Singolare', 'Plurale'],
      rows: [
        ['maschile', 'il libro', 'i libri'],
        ['maschile s + consonante', 'lo studente', 'gli studenti'],
        ['femminile', 'la casa', 'le case'],
        ['ante vocale', 'l’albero', 'gli alberi'],
      ],
    },
    {
      caption: T('Indefinido e partitivo'),
      head: ['', 'Singolare', 'Plurale'],
      rows: [
        ['masc. comune', 'un libro', 'dei libri'],
        ['masc. s + consonante', 'uno studente', 'degli studenti'],
        ['femminile', 'una casa', 'delle case'],
        ['con sostantivo', 'un po’ d’acqua', '—'],
      ],
    },
    {
      caption: T('Elisão de di, a, da'),
      head: ['Preposizione', 'Davanti all’articolo', 'Esempio'],
      rows: [
        ['di', 'dell’', 'dell’acqua'],
        ['a', 'all’', 'all’altra riva'],
        ['da', 'dall’', 'dall’inizio'],
        ['in', 'nel', 'nel libro'],
        ['su', 'sul', 'sul mare'],
      ],
    },
  ],
};
