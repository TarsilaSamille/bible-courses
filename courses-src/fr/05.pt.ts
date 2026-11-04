import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('O substantivo'),
  subtitle: T('o que dá nome às coisas — e os dois espelhos que o francês guarda'),
  section: T('Substantivos'),
  body: C(`## Um substantivo nomeia; o resto da frase faz o resto

Em français o substantivo é a peça que dá identidade a um referente, e é a peça que concorda com artigo, adjetivo e, às vezes, com verbo. {livre}, {maison}, {vérité}, {lumière} — cada um nomeia algo, e cada um entra em combinação com um número fixo de palavras.

Essa combinação é a **concordância**, e ela se mede em duas coisas: **gênero** (masculino ou feminino) e **número** (singular ou plural). Nada mais. Um substantivo French não tem caso: não se flexiona para indicar quem faz o quê. {le livre} é o mesmo {le livre} se for sujeito, objeto ou complemento — quem marca a função é o artigo, o pronome ou a posição na frase.

Compare com o português, que ainda declina: {o livro, do livro, ao livro, o livro}. O substantivo French perdeu essa informação por um motivo prático: sem casos, não há duas palavras para a mesma coisa, e o substantivo pode crescer sem que o substantivo chore.

## Os dois espelhos do substantivo

O que complica a vida do aluno não é a concordância, é adivinhar o gênero antes de saber o plural. Um substantivo French pode ser:

- **masculino**: {le livre}, {le soleil}, {le travail}, {le problème}, {le roi}, {le chat}
- **feminino**: {la table}, {la lune}, {la ville}, {la question}, {la reine}, {la chatte}

Um único substantivo pode ser **ambos**: {le livre} «o livro» e {la livre} «a coisa livre» (adjetivo substantivado). E {le tour} «o giro» contra {la tour} «a torre» — mesma palavra, dois sexos, dois significados.

E há substantivos que mudam de gênero conforme o sentido: o **telhado** é {le toit}, masculino, mas a **torre** é {la tour}, feminina, e o **giro** é {le tour} de novo. Mesma palavra, dois sexos, dois meanings.

Um guia de bolso, sem ser exaustivo: substantivos terminados em *-age, -ment, -ement, -issement* são quase sempre masculinos ({le courage}, {le mouvement}, {le savant}); os terminados em *-ette, -euse, -rice, -ie, -ude, -té* são quase sempre femininos ({laette}, {la vendeuse}, {la matrice}, {la sortie}, {la defeat}, {la bonté}). E nomes de países, cidades e rios são sempre femininos: {la France}, {l’Italie}, {la Seine}, {la Loire}. Exceptions Site Famous: {le Canada}, {le Portugal}, {le Japon} — os que terminam em *-a* [ə] remoto.

## O plural: três caminhos e uma regra geral

O plural French se forma por **acrescentar um {s}** mudo. Só isso, na esmagadora maioria dos casos: {le livre → les livres}, {la maison → les maisons}, {le travail → les travaux}.

O {s} final é mudo, como vimos no capítulo 1. Mas em duas situações ele é **audível**, e é aí que as duas regras especiais nascem.

**Regra das sibilantes**: quando o substantivo termina em {s, x, z}, o {s} do plural se torna [z], como o {s} intervocálico do capítulo 1. Exemplos: {un prix} [pʁi] → {des prix} [pʁi], com som de [z]. {le choix} [ʃwa] → {les choix} [ʃwaz], com som de [z]. {le nez} [ne] → {les nez} [nez], com [z]!

**Regra dos grupos**: quando o substantivo termina em *-eau* ou em *-ou*, o {s} do plural substitui o *-eau*/*-ou* final. {le journal} → {les journaux}, {le cadeau} → {les cadeaux}, E {un blocus} é palavra sem plural.

E há um punhado de irregulares que precisam ser decorados um a um: {le travail → les travaux}, que perde o som do {ai}. Os mais úteis do dia a dia são {œil → yeux} «olhos», {ciel → cieux} «céus» e {aïeul → aïeux} «avos».

## Leitura aplicada

O texto de **Louis Segond** em {Jean 1:14} usa substantivos de ambos os gêneros na mesma frase, e cada um deles escolhe o artigo certo: {Et la parole est devenu chair, et nous avons vu sa gloire, sa gloire comme celle du Père unique}.

{la parole} — feminino, {o Verbo}. {la chair} — feminino, {a carne}. {la gloire} — feminino, {a glória}, repetido. {le Père} — masculino, {o Pai}, e repare: o substantivo é masculino, mas o **verbo** é {est devenu} (3.ª pessoa do singular) porque em francês o verbo não varia com o gênero, apenas com o número. {le Fils} — masculino. {l.unique} — substantivo adjetivado com artigo.

Em {Jean 1:1}, o contraste mais limpo está no par {le commencement} / {la Parole}: {Au commencement était la Parole}. São {le} e {la} no mesmo trecho, e um aluno que aplicou o gênero português erraria um dos dois. Note também {la lumière} (f.) contra {le jour} (m.) em {Jean 1:5}: {La lumière brille dans les ténèbres}.

Do mesmo texto, {ténèbres} mostra o plural aplicado a um substantivo que em português já é plural: {les ténèbres} «as trevas». E {les œuvres} «as obras» (João 1:17) entra na regra dos grupos: {œuvre} → {œuvres}, com o {s} mudo.

## O essencial

O substantivo French concorda só em gênero e número, e não tem caso. O gênero se adivinha por terminação, por tipo semântico e por origem — e o plural é quase sempre um {s} mudo, com [z] após {s, x, z} e {s} absorvente após *-eau* e *-ou*.`),
  vocab: [
    V('livre', 'livre', 'livro (m.); {livre} sem {s} final'),
    V('table', 'table', 'mesa (f.); termina em {e} mudo, mas é feminino'),
    V('maison', 'maison', 'casa (f.); singular sem {s}'),
    V('soleil', 'soleil', 'sol (m.); {oi} = [wa] e {ll} = [j]'),
    V('travail', 'travail', 'trabalho (m.); plural {travaux} por perda de vogal'),
    V('problème', 'problème', 'problema (m.); {è} = [ɛ]'),
    V('vérité', 'vérité', 'verdade (f.); terminação *-ité* é feminina'),
    V('sortie', 'sortie', 'saída (f.); terminação *-ie* é feminina'),
    V('courage', 'courage', 'coragem (m.); terminação *-age* é masculina'),
    V('movement', 'mouvement', 'movimento (m.); terminação *-ment* é masculina'),
    V('prix', 'prix', 'preço (m.); {x} final vira [z] no plural'),
    V('choix', 'choix', 'escolha (m.); {oi} = [wa] e [z] no plural'),
    V('nez', 'nez', 'nariz (m.); plural {nez} com [z] após {e} final'),
    V('journal', 'journal', 'jornal (m.); *-al* faz {journaux}'),
    V('œil', 'œil', 'olho (m.); plural {yeux}, irregular'),
    V('œuvre', 'œuvre', 'obra (f.); {œu} = [ø]'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {le travail → les travaux}, o que aconteceu na formação do plural?'),
    options: [
      T('O {ai} tônico perdeu o som, o {l} e o {s} mudo se fundiram'),
      T('O substantivo passou a ser feminino, como em {la travail}'),
      T('O {s} do plural foi dobrado para {travauxs}'),
      T('A terminação *-ail* do latim foi restaurada tal como estava'),
    ],
    answer: 0,
    hint: T('Regra §2: o {ai} de {travail} é uma vogal semivocal e desaparece antes da {s}.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Plural de {le prix}: les pri___ (com som [z])'),
      answer: 'x',
      hint: T('O {x} final é mudo no singular, mas o {s} do plural transforma o {x} em [z].'),
    },
    {
      kind: 'choose',
      prompt: T('Qual substantivo é feminino por terminação?'),
      options: [T('{la liberté}'), T('{le savoir}'), T('{le development}'), T('{le mélange}')],
      answer: 0,
      hint: T(
        'Regra §1: *-age, -ment, -ement* são praticamente sempre masculinos; *-té* praticamente sempre feminino.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Associe o substantivo ao gênero correspondente'),
      pairs: [
        { a: T('{le soleil}'), b: T('masculino') },
        { a: T('{la lune}'), b: T('feminino') },
        { a: T('{le savoir}'), b: T('masculino (termina em *-oir*)') },
        { a: T('{la bonté}'), b: T('feminino (termina em *-té*)') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Complete o par de gênero duplo: ___ tour = a torre; ___ tour = o giro'),
      answer: 'la',
      hint: T(
        'A torre é {la tour}; o giro é {le tour}. A palavra é a mesma, o gênero muda com o sentido.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O substantivo French concorda apenas em gênero e número, e não tem caso: {le livre} é o mesmo em qualquer função.',
      ),
    },
    {
      n: '2',
      text: T(
        'O plural geral acrescenta {s} mudo: {le livre → les livres}, {la maison → les maisons}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Após {s, x, z} a {s} do plural soa [z]: {le nez} [ne] → {les nez} [nez], {le choix} [ʃwa] → {les choix} [ʃwaz].',
      ),
    },
    {
      n: '4',
      text: T(
        'Em *-eau* e *-ou* o {s} do plural substitui a terminação: {le journal → les journaux}, {le cadeau → les cadeaux}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Um mesmo substantivo pode ter dois gêneros conforme o sentido: {le tour} «o giro» e {la tour} «a torre», {le livre} «o livro» e {la livre} «o que é livre».',
      ),
    },
  ],
  notes: [
    {
      label: T('Como o substantivo sem casos liberate o francês'),
      text: T(
        'O latim tinha seis casos; o português antigo tinha quatro e o português atual, três, mas o substantivo continua flexionado. O francês foi mais longe: eliminou o caso e, em troca, obrigou artigo e adjetivo a carregar a informação. A vantagem é deRight a segundo momento: {le livre rouge} não muda quando o substantivo muda de posição, e o substantivo é uma coisa só. French é mais verboso, e é mais fácil de falar sem planning.',
      ),
    },
    {
      label: T('O plural que revela o gênero'),
      text: T(
        'Há substantivos em que o plural só existe, e essa existência já resolve a dúvida. Exemplo: o plural {yeux} «olhos» é a forma mais antiga da palavra, e o singular {œil} veio depois. O mesmo vale para {ciel → cieux}: o plural é a forma primitiva. Quando em dúvida, procure o plural — ele é o melhor professor de gênero que existe.',
      ),
    },
  ],
  examples: [
    {
      text: 'la parole est devenue chair',
      gloss: T('o Verbo se fez carne (Jo 1:14) — dois substantivos femininos'),
    },
    {
      text: 'comme celle du Père unique',
      gloss: T('como a do Pai único — {du} = «de + le» marca posse'),
    },
    {
      text: 'Au commencement était la Parole',
      gloss: T('no princípio era o Verbo — {le} e {la} no mesmo trecho'),
    },
    {
      text: 'La lumière brille dans les ténèbres',
      gloss: T('a luz brilha nas trevas (Jo 1:5) — {la} f. e {le} implícito nas trevas'),
    },
    { text: 'les œuvres', gloss: T('as obras (Jo 1:17) — {œu} = [ø] e {s} mudo') },
    {
      text: 'le travail et les travaux',
      gloss: T('o trabalho e os trabalhos — {ai} perde o som no plural'),
    },
    {
      text: 'l’œil et les yeux',
      gloss: T('o olho e os olhos — irregular, o plural é a forma antiga'),
    },
    {
      text: 'le prix et les prix',
      gloss: T('o preço e os preços — [pʁi] contra [pʁi], com [z] mudo'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Pistas de gênero por terminação'),
      head: [T('Terminação'), T('Gênero'), T('Exemplo'), T('Glosa')],
      rows: [
        ['-age', 'masculino', '{le courage}', 'coragem'],
        ['-ment', 'masculino', '{le mouvement}', 'movimento'],
        ['-issement', 'masculino', '{le savant}', 'erudito'],
        ['-ette', 'feminino', '{la cassette}', 'fita'],
        ['-euse', 'feminino', '{la vendeuse}', 'vendedora'],
        ['-rice', 'feminino', '{la matrice}', 'matriz'],
        ['-té', 'feminino', '{la bonté}', 'bondade'],
        ['país, cidade, rio', 'feminino', '{la Seine}', 'o rio Sena'],
      ],
    },
    {
      caption: T('Tabela 2 — As três regras do plural'),
      head: [T('Regra'), T('Termina em'), T('Faz'), T('Exemplo')],
      rows: [
        ['geral', 'qualquer outra coisa', '{s} mudo', '{le livre → les livres}'],
        ['sibilante', '{s, x, z}', '[z] audível', '{le choix → les choix}'],
        ['grupo', '*-eau, *-ou', '{s} absorve a terminação', '{le cadeau → les cadeaux}'],
        ['irregular', 'caso especial', 'troca de vogal', '{le travail → les travaux}'],
        ['irregular', '{œil}', 'forma própria', '{l’œil → les yeux}'],
      ],
    },
  ],
};
