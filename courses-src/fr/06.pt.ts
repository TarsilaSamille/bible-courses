import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('O gênero dos substantivos'),
  subtitle: T('por que {le livre} é masculino e {la table} é feminino — as cinco pistas'),
  section: T('Substantivos'),
  body: C(`## O gênero é arbitrário; as pistas é que não são

O gênero dos substantivos French não tem motivo. Não vem do significado, não vem da etimologia latina, não vem da forma. {le livre} é masculino porque o latim *liber* era masculino; {la table} é feminino porque o latim *tabula* era feminino. Você não pode deduzir, só precisa saber.

Mas a boa notícia é que existem **cinco pistas** que, sozinhas, acertam a grande maioria dos casos.

## As cinco pistas

**1 · Animados e sexuados são masculinos.** {le père}, {le roi}, {le chat}, {l’homme}, {le garçon}, {le frère}, {le cheval}, {l’oiseau}. O gênero natural do referente foi simplesmente transposto para o substantivo. {La personne} é a exceção principal: {personne} é feminino, mas {le personne} é masc. de «pessoa excellente».

**2 · Objetos largos e cortantes são masculinos.** {leGate}, {le couteau}, {le crayon}, {le marteau}, {le tableau}, {le livre}, {le papier}, {le pain}, {le fromage}, {le vin}. Coisas que se «seguram» com firmeza tendem a ser masculinas.

**3 · Plantas, frutos e inerentes a females são femininos.** {la fleur}, {la rose}, {la pomme}, {la terre}, {la forêt}, {la forêt}, {la nature}, {la vie}, {la paix}, {la mort}, {la chance}, {la liberté}. Aastically, tudo o que cresce ou tudo o que é vital é feminino.

**4 · Terminações fortes.** Este é o guia mais confiável, e vale para décimos de milhares de substantivos:

Nos exemplos abaixo, o sinal … representa qualquer palavra com aquela terminação: {le courage}… é uma família, não uma palavra.

| Terminação | Gênero | Exemplos |
|---|---|---|
| *-age, -ment, -ement, -issement* | masculino | {le courage}, {le}… |
| *-eau* | masculino | {le tableau}, {le}… |
| *-ou* | masculino | {le}… |
| *-teur, -trice* | ambos | {le}… / {la}… |
| *-ette, -euse, -rice, -ie, -ude* | feminino | {la}… |
| *-tion, -sion, -té, -té* | feminino | {la}… |
| *-eur* (sem {r} final) | feminino | {la}… |

**5 · Dicionário.** Quando as quatro primeiras pistas falham, o dicionário é oJudge. Todo dicionário francês traz o gênero **antes** da definição: {le}… m., {la}… f., {m.} neutro. E a gente que aprende não tem escolha: French é falado por quem tem dicionário à mão.

## As exceções que você vai encontrar

As pistas falham mais do que se imagina, e é melhor saber quais são do que descobrir na rua. O bairro {le}… é masculino; a cidade {la}… também. E o mais irritante: {le}….

As terminações *-eur* são especialmente traiçoeiras: {l’erreur} «o erro» é feminino, {le moteur} «o motor» é masculino, {l seriousness}«a seriedade» é feminino, {le hauteur} «a altura» é feminino mas termina em *-eur*, e {le couleur} «a cor» também — {la couleur}. Ou seja: {la couleur} e {le couleur} é errado; o correto é {la couleur}.

E há substantivos cuja terminação mente: {le buen} não; {le travail} não existe. Mas {le}…: {le}….

Uma lista honesta das traições mais comuns: {le genre} (m.) contra {la genre} (f., «a espécie»); {le livre} (m., «o livro») contra {la livre} (f., «a livre»); {le tour} (m., «o giro») contra {la tour} (f., «a torre»); {le}… não; mas {le}…: {le}….

## Leitura aplicada

O texto de **Louis Segond** em {Jean 1:1} coloca dois gêneros na mesma linha, e essa linha é o melhor teste de gênero que existe: {Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu}.

{le commencement} — masculino, termina em *-ment*, como todos os {le changement}, {le mouvement}, {le sentiment}. {la Parole} — feminino, e o substantivo é capitalizado por ser um título: é o Verbo, não uma palavra qualquer. {Dieu} — masculino, {Dieu} com a {d} maiúscula e sem artigo, como todos os nomes próprios, que em French são quase sempre masculinos ou levados por {l’} se femininos ({l’Âme}, {l’Église}).

Em {Jean 1:5}, o par {la lumière} / {les ténèbres} é feminino nos dois casos: {lumière} e {ténèbres} são ambos em {è} + substantivo abstrato. Mas logo a seguir vem {la vie} (f.) e {les}…: {la mort} (f.), {le monde} (m.). Em {Jean 1:14}, {la parole} (f.), {la chair} (f.), {la gloire} (f.), {le Père} (m.), {le Fils} (m.), {l’unique} (m. ou f., aqui substantivo feminino por elipse).

O padrão que emerge é o mais prático de todos: **os substantivos abstratos em {-tion, -sion, -té} são femininos, e os nomes de Deus e do reinforcing são masculinos ou levam {l’}**. Em um texto French, isso lhe dá uma previsão correcta em quase todo caso.

## O essencial

O gênero é arbitrário, mas não é aleatório: cinco pistas — animados, duros, orgânicos, terminação, dicionário — chegam a quase tudo. E quando tudo falha, aceite: você vai consultar o dicionário em {la couleur} até o fim da vida, e isso é normal.`),
  vocab: [
    V('le livre', 'livre', 'o livro (m.); do latim masculino *liber*'),
    V('la table', 'table', 'a mesa (f.); do latim feminino *tabula*'),
    V('le couteau', 'couteau', 'a faca (f.); objeto cortante e {eau} final masc.'),
    V('le tableau', 'tableau', 'o quadro, a tela (m.); *-eau* sempre masculino'),
    V('la pomme', 'pomme', 'a maçã (f.); fruto, classe feminina'),
    V('la forêt', 'forêt', 'a floresta (f.); planta, classe feminina'),
    V('le courage', 'courage', 'a coragem (m.); termina em *-age*'),
    V('le sentiment', 'sentiment', 'o sentimento (m.); termina em *-ment*'),
    V('la liberté', 'liberté', 'a liberdade (f.); termina em *-té*'),
    V('l’erreur', 'erreur', 'o erro (f.); *-eur* sem {r} final é feminino'),
    V('le moteur', 'moteur', 'o motor (m.); *-eur* com {r} final pode ser masc.'),
    V('la hauteur', 'hauteur', 'a altura (f.); *-eur*, contra a regra'),
    V('la couleur', 'couleur', 'a cor (f.); *-eur* de cor root, {ll} = [j]'),
    V('la vendeuse', 'vendeuse', 'a vendedora (f.); termina em *-euse*'),
    V('la chair', 'chair', 'a carne (f.); {ch} = [ʃ], {ai} = [ɛ]'),
    V('l’Église', 'église', 'a Igreja (f.); {É} = [e] e {ll} = [j]'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Por que {la table} é feminino, mesmo sendo um objeto de madeira?'),
    options: [
      T('Porque o gênero vem do latim {tabula}, feminino, e não do significado atual'),
      T('Porque a palavra termina em {e} mudo, e toda {e} final é feminina'),
      T('Porque mesas, cadeiras e móveis são sempre femininos no francês'),
      T('Porque o substantivo tem cinco sílabas e o número de sílabas decide o gênero'),
    ],
    answer: 0,
    hint: T('Regra §1: o gênero é uma herança histórica, não uma consequência do significado.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete com o artigo correto: ___ commencement (o começo)'),
      answer: 'le',
      hint: T('Regra §4: *-ment* é praticamente sempre masculino.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual substantivo contraria a pista das terminações em *-eur*?'),
      options: [
        T('{le moteur} — masculino, apesar de {l’erreur} ser feminino'),
        T('{l’erreur} — feminino, e {-eur} manda'),
        T('{la couleur} — feminino, e {-eur} manda'),
        T('{la hauteur} — feminino, e {-eur} manda'),
      ],
      answer: 0,
      hint: T('Regra §4: *-eur* sem {r} final é feminino; com {r} final, é a palavra que decide.'),
    },
    {
      kind: 'match',
      prompt: T('Associe o substantivo ao gêneroFrench'),
      pairs: [
        { a: T('{le couteau}'), b: T('masculino por {eau} final') },
        { a: T('{la pomme}'), b: T('feminino por ser fruto') },
        { a: T('{le roi}'), b: T('masculino por ser animado e sexuado') },
        { a: T('{la liberté}'), b: T('feminino por {-té}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Em {la Parole était avec Dieu}, quantos substantivos femininos aparecem?'),
      answer: 'um',
      hint: T('Conta só os substantivos: {Parole} é f., {Dieu} é m. O verbo não conta.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O gênero French é herdado do latim, não deduzido do sentido: {le livre} vem de *liber*, {la table} de *tabula*.',
      ),
    },
    {
      n: '2',
      text: T(
        'Animados, sexuados e duros vão para o masculino: {le père}, {le chat}, {le couteau}, {le livre}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Plantas, frutos e vida vão para o feminino: {la pomme}, {la forêt}, {la vie}, {la mort}, {la liberté}.',
      ),
    },
    {
      n: '4',
      text: T(
        'As terminações são o guia mais forte: *-age, -ment, -eau, -ou* masc.; *-ette, -euse, -rice, -té, -tion* fem.',
      ),
    },
    {
      n: '5',
      text: T(
        'Em caso de dúvida, o dicionário decide: todo verbete traz o gênero antes da definição, e o aluno vai consultar o dicionário a vida inteira.',
      ),
    },
  ],
  notes: [
    {
      label: T('A palavra beau tem dois sexos e dois sentidos'),
      text: T(
        'As cognatas são as piores armadilhas: {beau} é masculino, mas {bel} (forma ante {e}) continua masculino, e a forma feminina é {belle}, sem {e}. O mesmo vale para {nouveau → nouvelle}, {vieux → vieille}, {fou → folle}, {blanc → blanche}, {long → longue}, {mort → morte}. Nenhum desses muda de gênero por ser a mesma palavra: o feminino é um sufixo novo, e o {x} vira [k] ou [s] como em {riche}, {fille}. Você precisa aprender cada par.',
      ),
    },
    {
      label: T('Por que isso não é um problema sério'),
      text: T(
        'Ninguém em França erra o gênero o tempo todo. Eles apenas **não pensam** nisso: o gênero é parte da palavra, como a vogal. Um nativo não «sabe» que {la table} é feminino; ele sabe *table* e o feminino vem junto, da mesma forma que o {o} de {table} em português vem junto com a palavra. Decorar {la table} como uma unidade, e não {table} + «feminino», é o que resolve.',
      ),
    },
  ],
  examples: [
    {
      text: 'Au commencement était la Parole',
      gloss: T('no princípio era o Verbo (Jo 1:1) — {le} e {la} lado a lado'),
    },
    { text: 'la Parole était avec Dieu', gloss: T('o Verbo era com Deus — {Dieu} m. sem artigo') },
    {
      text: 'La lumière brille dans les ténèbres',
      gloss: T('a luz brilha nas trevas — dois abstratos femininos'),
    },
    { text: 'la vie et la mort', gloss: T('a vida e a morte — ambos femininos por serem vida') },
    {
      text: 'sa gloire comme celle du Père unique',
      gloss: T('sua glória como a do Pai único — {le Père} m. contra {la gloire} f.'),
    },
    { text: 'l’Église', gloss: T('a Igreja — feminino com {l’} obrigatorio') },
    { text: 'le château et la tour', gloss: T('o castelo e a torre — {eau} masc., {our} fem.') },
    {
      text: 'la liberté, la vérité',
      gloss: T('a liberdade, a verdade — {-té} e {-ité} femininos'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — As cinco pistas de gênero, resumidas'),
      head: [T('Pista'), T('Categoria'), T('Gênero típico'), T('Exemplo')],
      rows: [
        ['1', 'animados e sexuados', 'masculino', '{le père}'],
        ['2', 'objetos duros e cortantes', 'masculino', '{le couteau}'],
        ['3', 'plantas e seres vivos', 'feminino', '{la pomme}'],
        ['4', 'terminação *-age, -ment*', 'masculino', '{le courage}'],
        ['4', 'terminação *-té, -tion*', 'feminino', '{la liberté}'],
        ['5', 'dicionário', 'qualquer', '{le}… / {la}…'],
      ],
    },
    {
      caption: T('Tabela 2 — Pares de gênero duplo no mesmo texto'),
      head: [T('Masculino'), T('Feminino'), T('Glosa m.'), T('Glosa f.')],
      rows: [
        ['{le commencement}', '{la}…', 'o começo', 'a origem'],
        ['{le livre}', '{la livre}', 'o livro', 'a coisa livre'],
        ['{le tour}', '{la tour}', 'o giro', 'a torre'],
        ['{le genre}', '{la}…', 'o gênero', 'a espécie'],
        ['{le}…', '{la couleur}', 'a cor (raro)', 'a cor (comum)'],
      ],
    },
  ],
};
