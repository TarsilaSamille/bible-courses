import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('Formas de tratamento ({usted}, {vosotros})'),
  subtitle: T('tú × usted — 3ª pessoa que é 2ª!'),
  section: T('Os pronomes'),
  body: C(`## Dois sistemas de tratamento

O espanhol distingue duas relações: a **informal** ({tú} e {vosotros}) e a **formal** ({usted} e {ustedes}).

{tú} → {amigo}, {hijo}, {Dios} (quando se fala com intimidade): {¿Cómo estás?} «como estás?» · {Dios te ama} «Deus te ama».
{usted} → {jefe}, {cliente}, {professor}, {Dios} (em contexto reverente): {¿Cómo está usted?} «como está?» · {Dios le ama} «Deus o ama».

## {usted} é 3ª pessoa

{usted} conjuga na **terceira pessoa** e usa pronomes de 3ª pessoa: {usted habla} «o senhor fala» (identicamente a {él habla}) · {le} «lhe» (nunca {te}!) · {lo} para o acusativo.

No imperativo, {usted} recebe o **subjuntivo**: {hable} «fale» · {dígame} «diga-me».

## O plural: {vosotros} × {ustedes}

Na **Espanha**, o plural informal é {vosotros} e o formal é {ustedes}: {vosotros habláis} «falais» × {ustedes hablan} «os senhores falam».

Na **América**, quase ninguém usa {vosotros}: {ustedes} cobre **todo** o plural: {ustedes hablan} «vocês falam», seja para amigos ou para estranhos. Por isso o impessoal «{se habla español}» é tão natural lá.

## {vos}: o voseo

No Rioplatense (Argentina, Uruguai) {tú} vira {vos} na 2ª pessoa do singular, com o verbo na 2ª do plural: {vos hablás} «falas» · {vos tenés} «tens». O {vos} **não** aparece com {usted}: são sistemas separados.

Ex.: {Dios le bendiga} «Deus o abençoe» (formal) × {Dios te bendiga} «Deus te abençoe» (íntimo).`),
  vocab: [
    V('usted habla', 'hablar', 'o senhor fala (3ª!)'),
    V('estás', 'estar', 'estás (íntimo!)'),
    V('ustedes hablan', 'hablar', 'vocês falam (América = todos!)'),
    V('vos hablás', 'hablar', 'tu falas (voseo!)'),
    V('le bendiga', 'bendecir', 'o abençoe (formal!)'),
    V('vosotros habláis', 'hablar', 'falais (só Espanha!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"usted habla" — que pessoa?'),
    options: [
      T('2ª pessoa'),
      T('3ª pessoa com valor de 2ª (formal!)'),
      T('1ª pessoa'),
      T('Impessoal'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Formal: "Dios ___ ama" (Deus o ama)'),
      answer: 'le',
      hint: T('Regra §2: para usted o indireto é le.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase é CORRETA na América?'),
      options: [
        T('Vosotros habláis español'),
        T('Ustedes hablan español'),
        T('Vos hablan español'),
        T('Hablan español'),
      ],
      answer: 1,
      hint: T('Regra §3: fora da Espanha, «ustedes» cobre tudo.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o pronome ao tratamento'),
      pairs: [
        { a: T('{tú}'), b: T('informal') },
        { a: T('{usted}'), b: T('formal') },
        { a: T('{vosotros}'), b: T('informal plural (Espanha)') },
        { a: T('{vos}'), b: T('voseo (Argentina)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('tú = informal; usted = formal. A escolha é social, não gramatical.') },
    {
      n: '2',
      text: T('Usted conjuga em 3ª pessoa e usa le/lo/los: usted habla, le doy el libro.'),
    },
    { n: '3', text: T('Fora da Espanha, «ustedes» é o único plural; «vosotros» é GD raríssimo.') },
    { n: '4', text: T('O voseo (vos) substitui «tú» no Rioplatense e nunca convive com «usted».') },
  ],
  notes: [
    {
      label: T('O plural muda de valor'),
      text: T(
        '{vosotros} é a segunda pessoa do plural na Espanha e {ustedes} na América. Não é registro, é geografia: as duas formas coexistem e significam coisas diferentes por região.',
      ),
    },
  ],
  examples: [
    { text: '¿Cómo estás?}', gloss: T('Como estás? (informal, entre amigos).') },
    { text: '¿Cómo está usted?}', gloss: T('Como está? (formal).') },
    { text: '{Dios le bendiga}', gloss: T('Deus o abençoe (formal — {le}).') },
    { text: '{vos hablás}', gloss: T('Tu falas (voseo rioplatense).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Os quatro registros'),
      head: [T('Pessoa'), T('Singular'), T('Plural'), T('Uso')],
      rows: [
        ['informal', '{tú}', '{vosotros}', T('família, amigos (Espanha)')],
        ['formal', '{usted}', '{ustedes}', T('educação, trabalho')],
        ['informal', '{vos}', '—', T('Rioplatense (voseo)')],
        ['formal', '{usted}', '{ustedes}', T('América: todos os plurais')],
      ],
    },
    {
      caption: T('Tabela 2 — O que muda com o tratamento'),
      head: [T('Elemento'), T('tú'), T('usted')],
      rows: [
        [T('verbo'), '{hablas}', '{habla}'],
        [T('objeto indireto'), '{me}', '{le}'],
        [T('imperativo'), '{habla}', '{hable}'],
        [T('negativo'), '{no hables}', '{no hable}'],
        [T('possessivo'), '{mi libro}', '{su libro}'],
      ],
    },
  ],
};
