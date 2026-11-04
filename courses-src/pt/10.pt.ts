import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Pronomes e colocação'),
  subtitle: T('me, te, o, lhe'),
  section: T('Os pronomes'),
  body: C(`## Pronome átono: a regra e a exceção

Os pronomes átonos indicam objeto, direção ou complemento: me, te, o/a, nos, vos, lhe, se. No português brasileiro, normalmente vêm antes do verbo: {me dá}, {não me viu}, {me contou}. No português europeu, podem vir depois: {dá-me}, {viu-me}.

A ordem se chama **próclise** (antes) e **enclise** (depois), e ela não é aleatória: em frase com negativo, com interrogação ou em certas subordinadas, a próclise é praticamente obrigatória. {Não me viu} e não {não viu-me}; {Quem me viu?} e não {Quem viu-me?}. Ou seja, nos contextos que mais importam num texto bíblico — pergunta e negação — a posição está decidida.

## O que muda depois de -r, -s, -z

O sistema tem uma exceção por forma verbal: depois de verbo terminado em -r, -s, -z, o {o/a} vira {lo/la} e pode ir para o fim: {amá-lo}, {vê-lo}, {fazê-lo}. É por isso que a forma {lo/la} é a típica do português com verbo transitivo direto terminado em -r.

A regra tem exceções que valem a pena memorizar: o infinitivo terminado em -r mantém o {o} — {para amá-lo} — e o gerúndio também. O que não muda é o substantivo: {dar o livro} e {dar-lhe o livro} são coisas diferentes, e a segunda tem os dois pronomes.

## lhe: indireto, e não substituto

lhe é pronome indireto: {Deus lhe deu} significa "Deus deu a ele". Ele não substitui o objeto direto, e é por isso que {lhe dar o livro} está errado — o correto é {dar-lhe o livro}, com o objeto direto {o livro} explícito.

Em português antigo e no bíblico, {lhe} pode aparecer também com sentido de para e de: {lhe peço}, {retira-lhe o coração}. O hebraico usa sufixo de dativo (-lô) e de genitivo, e é a esse recurso que essas formas correspondem — como o dativo de pessoa do italiano (lição 11). O plural de {lhe} é lhes: {Deus lhes deu} «Deus deu a eles».

## A mesóclise existe, é rara e é bíblica

{dir-me-ás} é **mesóclise**: o pronome aparece entre dois elementos do verbo ({dir} + {me} + {ás}). É a forma mais antiga e mais literária, e aparece na Bíblia em português arcaizante e em traduções antigas. Ninguém fala assim; todo mundo entende quando aparece.

## O que ler

Em qualquer pronome, pergunte três coisas: é átono (me, te, se) ou tônico (eu, tu, ele)? É direto ({o livro}) ou indireto ({a ele})? E está antes (próclise) ou depois (enclise)? Se você responder as três, o pronome está resolvido. O resto é convenção de estilo, e a forma de traduzir é o que o contexto obriga.`),
  vocab: [
    V('me', 'me', 'me'),
    V('te', 'te', 'te'),
    V('o', 'o', 'o'),
    V('lhe', 'lhe', 'a ele/ela'),
    V('nos', 'nos', 'a nós'),
    V('amá-lo', 'amar', 'amá-lo'),
    V('fi-lo', 'fazer', 'fi-lo'),
    V('dizendo-lhe', 'dizer', 'dizendo-lhe'),
    V('dir-me-ás', 'dizer', 'dir-me-ás'),
    V('vê-lo', 'ver', 'vê-lo'),
    V('dá-me', 'dar', 'dá-me (enclítico)'),
    V('lo', 'o', 'lo (objeto masculino)'),
    V('consigo', 'consigo', 'consigo (reflexivo)'),
    V('Deus', 'Deus', 'Deus'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: “amar + o” = ____.'),
    answer: 'amá-lo',
    hint: T('O vira lo depois de r.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('“Deus lhe deu” tem lhe como:'),
      options: [T('objeto direto'), T('complemento indireto'), T('sujeito'), T('adverbio')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('Qual é a forma brasileira mais comum?'),
      options: [T('me dá'), T('dá-me'), T('dá-mim'), T('me dar')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue pronome e função.'),
      pairs: [
        { a: T('me'), b: T('objeto direto') },
        { a: T('lhe'), b: T('indireto') },
        { a: T('consigo'), b: T('reflexivo') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O pronome átono vem antes do verbo em português brasileiro ({me dá}) e pode vir depois em português europeu e literário ({dá-me}). Com negativo ou interrogação a próclise é obrigatória: {não me viu}, {Quem me viu?}, e não {não viu-me}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Depois de verbo em {-r}, {-s} ou {-z}, o {o} vira {lo} e o {a} vira {la}: {amá-lo}, {vê-lo}, {fazê-la}. O infinitivo em {-r} é a exceção, porque já termina em {o}: {para amá-lo}.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{lhe} é indireto e não substitui o objeto direto: {Deus lhe deu a lei} é correto, e {lhe dar o livro} não é, porque o {o} do objeto some. O plural de {lhe} é {lhes}: {Deus lhes deu}.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{consigo}, {contigo}, {conosco} e {convosco} nunca grudam no verbo: o {con} vira {com} e a forma é sempre separada. É a exceção do sistema que nenhuma regra de cliticização alcança.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{dar-lhe o livro} leva os dois pronomes: {dar} + {lhe} + {o}. {Dá-lho} funde {lhe} e {o} em {lho} numa única palavra, e é a forma que o texto bíblico arcaizante usa.',
      ),
    },
  ],
  notes: [
    {
      label: T('Dialeto e estilo'),
      text: T(
        '{me dá} não é errado: é o padrão brasileiro. {Dá-me} é tradicional em Portugal e na escrita literária, e é a forma que a tradução bíblica arcaizante preserva.',
      ),
    },
    {
      label: T('O dativo do grego'),
      text: T(
        'O {lhe} corresponde ao dativo grego ({δίδω + ἡμῖν}) e ao sufixo hebraico {-לֹ}. Onde o português bíblico escreve {a nós} ou {para nós}, é o dativo do original que o tradutor está expressando com preposição.',
      ),
    },
  ],
  examples: [
    { text: 'Deus lhe deu a lei.', gloss: T('{lhe} indireto, {a lei} objeto direto explícito.') },
    { text: 'Deus lhes deu a lei.', gloss: T('O plural de {lhe} é {lhes}.') },
    { text: 'Ele me contou tudo.', gloss: T('Próclise: o pronome antes do verbo.') },
    { text: 'Contou-me tudo.', gloss: T('Enclise: a mesma função, outra ordem.') },
    { text: 'Não me viu chegar.', gloss: T('Com negativo, a próclise é obrigatória.') },
    { text: 'Quem me viu?', gloss: T('Com interrogação, a próclise também.') },
    { text: 'Vi-o na rua.', gloss: T('Depois de {-r}, o {o} vira {lo}.') },
    { text: 'Queria vê-lo.', gloss: T('O infinitivo em {-r} mantém o {o} do {vê-lo}.') },
    { text: 'Fale comigo.', gloss: T('{comigo} nunca gruda no verbo.') },
  ],
  tables: [
    {
      caption: T('Próclise, enclise e mesóclise'),
      head: ['Contexto', 'Brasil', 'Portugal / literário'],
      rows: [
        ['afirmativo', 'me dá', 'dá-me'],
        ['negativo', 'não me viu', 'não me viu'],
        ['interrogativo', 'Quem me viu?', 'Quem me viu?'],
        ['antigo', 'me dirás', 'dir-me-ás'],
      ],
    },
    {
      caption: T('O que muda depois de {-r}, {-s}, {-z}'),
      head: ['Verbo', 'Sem clítico', 'Com clítico'],
      rows: [
        ['amar', 'amar o livro', 'amá-lo'],
        ['ver', 'ver a casa', 'vê-la'],
        ['fazer', 'fazer o pão', 'fazê-lo'],
      ],
    },
    {
      caption: T('Pronomes que não grudam'),
      head: ['Forma', 'Vem de', 'Por que não gruda'],
      rows: [
        ['consigo', 'com + sigo', 'o {con} vira {com}'],
        ['conosco', 'com + nós', 'idem'],
        ['convosco', 'com + vós', 'idem'],
      ],
    },
  ],
};
