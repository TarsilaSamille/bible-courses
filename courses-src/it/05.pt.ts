import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('O passato prossimo'),
  subtitle: T('ho parlato: ação concluída'),
  section: T('O passado e a leitura'),
  body: C(`## Uma única forma para o passado inteiro

O italiano falado tem um tempo para o passado, o *passato prossimo*, **feito de auxiliar no presente mais participio**: {ho parlato}, {abbiamo letto}, {Dio disse}, {Gesù è stato crocifisso}. Não é defeito, é sistema: o italiano marca o passado com o auxiliar {ho}, que é a primeira pessoa do presente de {avere}. O resultado é que o passado inteiro passou a usar o presente como auxiliar.

A quem aprende, isso parece confuso: {ho parlato} (falei) e {parlo} (falo) têm o mesmo auxiliar. A diferença está no participio, que **carrega o evento**. Sem o participio, {ho} é só «eu tenho».

## {Avere} ou {essere}: a escolha que muda a tradução

Verbos transitivos usam {avere}: {ho mangiato} (comi), {ho scritto} (escrevi), {ho letto} (li). Verbos de movimento, de estado e reflexivos usam {essere}: {sono andato} (fui), {sono stato} (estive), {sono nato} (nasci), {mi sono lavato} (lavei-me).

Com {essere}, o participio concorda com o sujeito: {sono andato}, {sono andata}, {sono andati}, {sono andate}. É a mesma concordância do adjetivo, e é por isso que {le ragazze sono partite} tem {partite} e não {partito}. Com {avere} nada disso acontece: {abbiamo parlato} vale para um e para mil.

## Os particípios irregulares são um punhado

**Os regulares são mecânicos**: {-are} vira {-ato} ({parlare} → {parlato}), {-ere} vira {-uto} ({leggere} → {letto}, {prendere} → {preso}), {-ire} vira {-ito} ({finire} → {finito}). Os irregulares se aprendem, e são poucos: {dire} → {detto}, {fare} → {fatto}, {leggere} → {letto}, {prendere} → {preso}, {scrivere} → {scritto}, {aprire} → {aperto}, {morire} → {morto}.

O risco está concentrado nos mais frequentes, o que é uma boa notícia. E note que {stare} dá {stato} e {essere} dá {stato} também: mesma forma, verbos diferentes.

## A ponte com a Bíblia

{Dio disse} e {la luce fu scritta} mostram a transição entre dois modos de dizer o passado. O discurso está no *passato prossimo*, {disse}, enquanto {fu} expressa um fato consumado, e usa {essere} no passado em vez de {è stato}.

A distinção prática: {disse} conta o que aconteceu; {fu scritto} destaca o resultado, que continua válido depois de acontecer. Num evangelho, alternar os dois é o que dá ao texto o seu ritmo entre narrativa e afirmação.`),
  vocab: [
    V('ho parlato', 'parlare', 'falei'),
    V('ha letto', 'leggere', 'leu'),
    V('sono andato', 'andare', 'fui (masc.)'),
    V('sono andata', 'andare', 'fui (fem.)'),
    V('detto', 'dire', 'dito'),
    V('fatto', 'fare', 'feito'),
    V('letto', 'leggere', 'lido'),
    V('scritto', 'scrivere', 'escrito'),
    V('disse', 'dire', 'disse'),
    V('fu', 'essere', 'foi'),
    V('dire', 'dire', 'dizer'),
    V('fare', 'fare', 'fazer'),
    V('prendere', 'prendere', 'pegar, tomar'),
    V('stato', 'stare', 'estado (participio)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se diz «eu falei»?'),
    options: [T('io parlo'), T('ho parlato'), T('sono parlato'), T('avevo parlato')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual auxiliar acompanha andare?'),
      options: [T('avere'), T('essere'), T('avere essere'), T('si')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: Maria ha ___ il pane (mangiare)'),
      answer: 'mangiato',
      hint: T('Participio de -are em -ato.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete: siamo arrivat_ al tempio'),
      answer: 'i',
      hint: T('Noi, masculino plural.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O *passato prossimo* é auxiliar no presente mais participio: {ho parlato}, {abbiamo letto}, {sono andato}.',
      ),
    },
    {
      n: '2',
      text: T(
        'Com {essere} o participio concorda com o sujeito: {sono andata}, {sono andati}, {le ragazze sono partite}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Com {avere} o participio não concorda: {abbiamo parlato} vale para uma pessoa e para mil.',
      ),
    },
    {
      n: '4',
      text: T(
        'Participios regulares: {-are} → {-ato}, {-ere} → {-uto}, {-ire} → {-ito}; os irregulares são {detto}, {fatto}, {letto}, {preso}, {scritto}.',
      ),
    },
    {
      n: '5',
      text: T('O auxiliar nunca aparece sozinho: {ho mangiato}, e nunca {ho mangiato mangiato}.'),
    },
  ],
  notes: [
    {
      label: T('Auxiliar ou verbo?'),
      text: T(
        '{ho mangiato} pode ser «comi» ou «tenho comido»: a escolha vem do que o verbo principal exige, não da intenção. Os verbos de movimento e de mudança de estado pedem {essere} por convenção, não por sentido, e é por isso que {sono partito} e non {ho partito} são ambos corretos, mas o segundo soa errado.',
      ),
    },
    {
      label: T('Disse e fu'),
      text: T(
        '{disse} é *passato prossimo* e relata; {fu} é o *passato remoto* de {essere} e.resulta. Onde o português tem um verbo só, o italiano tem dois, e alternar entre eles é o que separa a narrativa da afirmação no texto bíblico.',
      ),
    },
  ],
  examples: [
    { text: 'Abbiamo letto la Scrittura.', gloss: T('Lemos as Escrituras.') },
    { text: 'Gesù è stato crocifisso.', gloss: T('Jesus foi crucificado.') },
    { text: 'Dio disse: «Sii luce».', gloss: T('Deus disse: «Sê luz».') },
    { text: 'Le ragazze sono partite.', gloss: T('As meninas foram.') },
    { text: 'Ho scritto la lettera.', gloss: T('Escrevi a carta.') },
    { text: 'Siamo arrivati al tempio.', gloss: T('Chegamos ao templo.') },
    { text: 'Mi sono lavato le mani.', gloss: T('Lavei as mãos.') },
    { text: 'La legge fu scritta da Mosè.', gloss: T('A lei foi escrita por Moisés.') },
  ],
  tables: [
    {
      caption: T('Auxiliares no passato prossimo'),
      head: ['Verbo', 'Auxiliar', 'Esempio'],
      rows: [
        ['transitivo', 'avere', 'ho mangiato il pane'],
        ['transitivo', 'avere', 'ha scritto la lettera'],
        ['movimento', 'essere', 'sono andato a Roma'],
        ['stato', 'essere', 'sono stato malato'],
        ['riflessivo', 'essere', 'mi sono lavato'],
      ],
    },
    {
      caption: T('Participio regular e irregular'),
      head: ['Infinitivo', 'Participio', 'Tipo'],
      rows: [
        ['parlare', 'parlato', 'regolare: -are → -ato'],
        ['finire', 'finito', 'regolare: -ire → -ito'],
        ['leggere', 'letto', 'irregolare'],
        ['prendere', 'preso', 'irregolare'],
        ['dire', 'detto', 'irregolare'],
        ['scrivere', 'scritto', 'irregolare'],
        ['morire', 'morto', 'irregolare'],
      ],
    },
  ],
};
