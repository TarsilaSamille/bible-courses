import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('Artigos e substantivos'),
  subtitle: T('género, número e artigo'),
  section: T('Il nome e il verbo'),
  body: C(`## Gênero, número e três acertos

O substantivo italiano tem **gênero e número**, e o artigo definido concorda com os dois, mais uma terceira coisa: **a fonética da inicial**. São três decisões na mesma palavra, e é por isso que o artigo italiano parece difícil. Compare {il libro}, {la casa}, {lo studente}, {i libri}, {le case}.

**O plural segue a letra** quase sempre: {-o} vira {-i} ({libro} → {libri}) e {-a} vira {-e} ({casa} → {case}). A complicação são os substantivos em {-e}, que fazem {-i} nos dois gêneros: {il re} → {i re}, {la parte} → {le parti}. E há os que não mudam nunca: {la foto} → {le foto}, {la mano} → {le mani}. Alguns são só femininos ({la mano}), outros só masculinos ({il libro}), outros os dois ({il poeta} e {la poeta}). Esses se aprendem; não há regra.

Atenção ao contrário: {la mano} é feminino apesar do {-o}, e {il libro} é masculino. A terminação dá a pista, o artigo dá a certeza.

## Lo e l’: a fonética manda

A letra inicial muda o artigo masculino diante de s + consoante, {z}, {gn} e {ps}: {lo studente}, {lo zelo}, {lo gnomo}, {lo psicologo}. Diante de vogal o artigo masculino não tem forma própria e vira {l’}: {l’uomo}, {l’angelo}, {l’amore}. O feminino faz o mesmo: {l’amica}, {l’amore}, {l’isola}.

É essa série dupla que explica os verbos com {l’}. Não são uma exceção: são o {a} de {avere} e o {e} de {essere} colados num substantivo que começa por vogal, {l’uomo} e {l’angelo}. O português cola o artigo ao nome, {o homem}; o italiano cola a preposição, {a Dio} e {l’uomo}, e o {a} é o mesmo nos dois casos.

## Na Bíblia

{In principio} (Jo 1:1) preserva o sentido grego de «no começo» (ἐν ἀρχῇ). Mais adiante, {la Parola} será definida pelo sentido grego de {Verbo} (ὁ λόγος), e não pelo de «palavra falada». Um tradutor que reconhece as duas coisas em {Parola} não precisa escolher entre elas: a palavra italiana carrega o {logos} e o diz ao mesmo tempo.

## O que ler

Ao ver um substantivo italiano, deduza o gênero pela terminação e confirme pelo artigo: se a palavra começa por vogal ou por s + consoante, o artigo é {l’} ou {lo}, e a fonética fecha o diagnóstico. Quando os dois sinais divergirem, o contexto decide.`),
  vocab: [
    V('il', 'il', 'o'),
    V('lo', 'lo', 'o (forma especial)'),
    V('la', 'la', 'a'),
    V('l’', 'l', 'o/a (antes de vogal)'),
    V('gli', 'gli', 'os (de lo, i)'),
    V('libro', 'libro', 'livro'),
    V('parola', 'parola', 'palavra'),
    V('pane', 'pane', 'pão'),
    V('luce', 'luce', 'luz'),
    V('mano', 'mano', 'mão'),
    V('re', 're', 'rei'),
    V('foto', 'foto', 'foto'),
    V('Dio', 'Dio', 'Deus'),
    V('uomo', 'uomo', 'homem'),
    V('mondo', 'mondo', 'mundo'),
    V('Parola', 'parola', 'Palavra (Logos)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o plural de la parola?'),
    options: [T('i paroli'), T('le parole'), T('gli parole'), T('la parole')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: ___ studenti (o + estudante masculino)'),
      answer: 'gli',
      hint: T('lo → gli'),
    },
    {
      kind: 'choose',
      prompt: T('Que artigo precede lo zaino?'),
      options: [T('il'), T('lo'), T('la'), T('l’')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Transforme em plural: la luce → ___ luci'),
      answer: 'le',
      hint: T('A palavra luz é feminina.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O plural de {libro} é {libri} e o de {casa} é {case}: {-o} vira {-i} e {-a} vira {-e}.',
      ),
    },
    {
      n: '2',
      text: T(
        'Substantivos em {-e} fazem {-i} nos dois gêneros: {il re} → {i re}, {la parte} → {le parti}.',
      ),
    },
    {
      n: '3',
      text: T(
        'A terminação não decide o gênero: {la mano} é feminino e {il libro} é masculino; o artigo desempata.',
      ),
    },
    {
      n: '4',
      text: T(
        'Masculino diante de s + consoante, {z}, {gn} ou {ps} usa {lo}: {lo studente}, {lo zelo}, {lo gnomo}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Diante de vogal o artigo vira {l’}: {l’uomo} e {l’amica} são {l’uomo} mais substantivo nos dois casos.',
      ),
    },
  ],
  notes: [
    {
      label: T('O artigo e o nome próprio'),
      text: T(
        'O artigo definido {il} aparece no nome comum ({il libro}) e some no nome próprio conhecido: {Dio}, {Gesù}, {Maria}. Em {gli esseri umani}, {gli} é artigo e {umani} é substantivo; o italiano escreve assim porque em grego e em hebraico a frase é o inverso.',
      ),
    },
    {
      label: T('Os dois -o'),
      text: T(
        'Há {-o} masculino ({il libro}, {il governo}, {il modo}) e {-o} feminino ({la mano}, {la foto}, {la moto}). Nenhum dos dois lados tem regra: o que resolve é o artigo, e é por isso que nenhum dicionário italiano dispensa o substantivo de levar artigo.',
      ),
    },
  ],
  examples: [
    { text: 'Il libro è la parola di Dio.', gloss: T('O livro é a Palavra de Deus.') },
    { text: 'Lo studente legge le parole.', gloss: T('O estudante lê as palavras.') },
    { text: 'La mano dello studente.', gloss: T('A mão do estudante.') },
    { text: 'Gli esseri umani.', gloss: T('Os seres humanos.') },
    { text: 'L’uomo e la donna.', gloss: T('O homem e a mulher.') },
    { text: 'Le case sono bianche.', gloss: T('As casas são brancas.') },
    { text: 'Lo zelo del giovane.', gloss: T('O zelo do jovem.') },
    { text: 'In principio era la Parola.', gloss: T('No princípio era a Palavra.') },
  ],
  tables: [
    {
      caption: T('Artigos definidos'),
      head: ['Singolare', 'Plurale', 'Forma'],
      rows: [
        ['il libro', 'i libri', 'maschile'],
        ['lo studente', 'gli studenti', 's + consonante'],
        ['la ragazza', 'le ragazze', 'femminile'],
        ['l’uomo', 'gli uomini', 'davanti a vocale'],
      ],
    },
    {
      caption: T('Plural pela terminação'),
      head: ['Singolare', 'Plurale', 'Regola'],
      rows: [
        ['il libro', 'i libri', '-o → -i'],
        ['la casa', 'le case', '-a → -e'],
        ['il re', 'i re', '-e → -i'],
        ['la parte', 'le parti', '-e → -i'],
        ['la mano', 'le mani', '-o → -i'],
        ['la foto', 'le foto', 'invariabile'],
      ],
    },
  ],
};
