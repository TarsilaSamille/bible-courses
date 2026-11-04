import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('Artigos e substantivos'),
  subtitle: T('o, a, os, as — gênero, número e referência'),
  section: T('O artigo e o número'),
  body: C(`## O artigo traduz definitividade, não gramática

O português tem dois artigos: o definido ({o, a, os, as}) introduz uma referência identificável — o leitor já sabe do que se trata; o indefinido ({um, uma, uns, umas}) apresenta algo como um exemplar de uma classe. {Vi um homem} traz alguém novo; {vi o homem} traz alguém já conhecido.

No português bíblico isso fica mais delicado, porque o grego nem sempre traz artigo onde o português traz. Em João 1:1, {no princípio} traduz ἐν ἀρχῇ com artigo; mas no mesmo versículo, {Deus} traduz θεός sem artigo no grego original, e a decisão de manter o artigo ou não é do tradutor. Por isso a regra do tradutor não é "siga o português": é **traduza o sentido grego**.

O caso grego que mais importa está no versículo seguinte: {o Verbo} ({ὁ λόγος}) tem artigo, e é o artículo que marca que se trata de um sujeito determinado, não de "uma palavra". Traduzir por {a palavra} sem artigo muda o sentido teológico do versículo.

## Gênero: a terminação é a regra, com exceções

Em {-o}, {-e} e muitos derivados, o substantivo costuma ser masculino: {livro}, {lugar}, {caminho}, {sistema}. Em {-a}, {-ção}, {-dade}, {-ura}, costuma ser feminino: {casa}, {canção}, {liberdade}, {escritura}. A regra é forte mas não é lei: há {o mapa} (m), {a mão} (f), {o dia} (m), {a dieta} (f), {o problema} (m), {a Mano} (f).

E o gênero não é enfeite em português: ele marca o sexo das pessoas ({o homem}, {a mulher}) e, por isso, o tradutor precisa saber o que está traduzindo. {Mestre} pode ser homem ou mulher, e o contexto nem sempre resolve.

## Plural: três finais para um -ão

O plural regular troca a terminação: {livro → livros}, {casa → casas}. Mas o {-ão} é o caso especial, e ele não segue regra única: {coração → corações}, {pão → pães}, {mão → mãos}, {irmão → irmãos}, {cidadão → cidadãos}. São cinco finais diferentes para o mesmo {-ão}, e a pronúncia muda junto ({pães} e {mãos} soam diferente, {corações} e {irmãos} também).

Quando não há regra, há o **plural irregular**: {o rei → os reis}, {a água → as águas}, {o pai → os pais}. Esse plural é o mais antigo e o mais presente na Bíblia, e é a razão de várias formas arcaicas ainda serem naturais.

## O que ler

Em qualquer substantivo, pergunte: o artigo está lá no grego? O gênero aparece na terminação? E o plural é regular, {-ão} mudando, ou **irregular**? A terceira resposta é a que quase sempre decide, porque o grego não distingue {livros} de {livros} — mas distingue {τὰ βιβλία} de {τὸ βιβλίον} por número e caso, e é aí que a tradução precisa de {-s} que o grego não tem.`),
  vocab: [
    V('o', 'o', 'artigo definido masculino'),
    V('a', 'o', 'artigo definido feminino'),
    V('um', 'um', 'artigo indefinido masculino'),
    V('palavra', 'palavra', 'palavra'),
    V('verbo', 'verbo', 'verbo'),
    V('luz', 'luz', 'luz'),
    V('mundo', 'mundo', 'mundo'),
    V('carne', 'carne', 'carne'),
    V('céu', 'céu', 'céu'),
    V('verdade', 'verdade', 'verdade'),
    V('os', 'o', 'artigo definido masculino plural'),
    V('as', 'o', 'artigo definido feminino plural'),
    V('uma', 'um', 'artigo indefinido feminino'),
    V('mão', 'mão', 'mão'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o plural de “o mão”?'),
    options: [T('as mãos'), T('as mão'), T('os mãos'), T('as mãis')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “___ Verbo” (João 1:1).'),
      answer: 'O',
      hint: T('Artigo definido masculino.'),
    },
    {
      kind: 'choose',
      prompt: T('Em “a mão”, por que o substantivo é feminino?'),
      options: [
        T('Porque termina em -ão.'),
        T('Só porque é um substantivo.'),
        T('Porque tem artigo a.'),
        T('Porque significa corpo.'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue forma e função.'),
      pairs: [
        { a: T('o livro'), b: T('definido') },
        { a: T('um livro'), b: T('indefinido') },
        { a: T('luz'), b: T('feminino') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O artigo definido {o, a, os, as} introduz referência identificável e o indefinido {um, uma} traz um exemplar de uma classe: {vi um homem} apresenta alguém novo, {vi o homem} traz alguém já conhecido.',
      ),
    },
    {
      n: '§2',
      text: T(
        'A terminação sugere o gênero sem decidir: {-ção}, {-dade} e {-ura} quase sempre formam femininos, {-o} e {-eiro} quase sempre formam masculinos, e {o problema}, {o mapa} e {o coração} provam a exceção.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O {-ão} faz três plurais, e o grego decide qual: {-ãos} em {mão/mãos}, {-ães} em {pão/pães}, {-ões} em {irmão/irmãos}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Onde o grego traz artigo, o português traz: {ὁ λόγος} vira {o Verbo}. Onde o grego omite, como em {θεός}, o português omite e escreve {Deus}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O plural irregular {o rei → os reis} e {o pai → os pais} vem do português mais antigo, e é o que o texto bíblico preserva.',
      ),
    },
  ],
  notes: [
    {
      label: T('Maiúscula'),
      text: T(
        '{Verbo} e {Deus} com maiúscula não são estilo: é a convenção que renderiza o título grego {Logos} e impede que o substantivo se leia como um nome comum.',
      ),
    },
    {
      label: T('Onde o grego ajuda'),
      text: T(
        'O grego distingue {τὰ βιβλία} de {τὸ βιβλίον} por número e caso; o português precisa do {-s} que o grego não tem, e é aí que a tradução decide.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio era o Verbo.',
      gloss: T('{o Verbo} é masculino porque λόγος é masculino no grego.'),
    },
    {
      text: 'E o Verbo era Deus.',
      gloss: T('O grego traz θεός sem artigo, e o português omite o seu.'),
    },
    {
      text: 'A luz brilha nas trevas.',
      gloss: T('{brilha} no presente: o que continua acontecendo.'),
    },
    {
      text: 'Vi um homem junto ao Jordão.',
      gloss: T('{um} apresenta alguém novo para o ouvinte.'),
    },
    {
      text: 'Vi o homem que vos apresentara.',
      gloss: T('{o} traz alguém de quem o ouvinte já sabe.'),
    },
    {
      text: 'Deus amou o mundo.',
      gloss: T('{o mundo} é masculino, e nada na terminação {-o} avisa.'),
    },
    { text: 'A mão tocou o mártir.', gloss: T('Feminino que a terminação {-ão} não anuncia.') },
    {
      text: 'A palavra permaneceu entre nós.',
      gloss: T('Feminino lexical; o grego correspondente é masculino.'),
    },
    {
      text: 'Os céus declaram a glória de Deus.',
      gloss: T('{os céus} é plural, e é assim em hebraico e em grego.'),
    },
  ],
  tables: [
    {
      caption: T('O que cada artigo diz'),
      head: ['Artigo', 'Uso', 'Exemplo'],
      rows: [
        ['o, a, os, as', 'definido', 'o Verbo, a luz'],
        ['um, uma, uns, umas', 'indefinido', 'um homem, uma palavra'],
        ['sem artigo', 'zero', 'Deus em Jo 1.1'],
      ],
    },
    {
      caption: T('O gênero que a terminação não entrega'),
      head: ['Terminação', 'Sugere', 'Exceção'],
      rows: [
        ['-o, -eiro', 'masculino', 'o problema (m)'],
        ['-a, -ão', 'feminino', 'o coração (m)'],
        ['-ção, -dade', 'feminino', 'o órgão (m)'],
      ],
    },
    {
      caption: T('Os três plurais do {-ão}'),
      head: ['Terminação', 'Exemplos'],
      rows: [
        ['-ãos', 'mão/mãos, órgão/órgãos, bênção/bênçãos'],
        ['-ães', 'pão/pães, cã/cães, alemão/alemães'],
        ['-ões', 'irmão/irmãos, avião/aviões, limão/limões'],
      ],
    },
  ],
};
