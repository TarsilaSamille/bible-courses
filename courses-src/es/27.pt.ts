import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('Os pronomes demonstrativos'),
  subtitle: T('este/ese/aquel — aqui/aí/ali'),
  section: T('Os pronomes'),
  body: C(`## Três distâncias, como em português

{este} «este» (**aqui**, junto de quem fala) · {ese} «esse» (**aí**, junto de quem ouve) · {aquel} «aquele» (**ali**, longe dos dois).

Mas {este} e {ese} podem ser **neutros espaciais** quando o falante se inclui: {Ven aquí conmigo} «vem aqui comigo» · {Ven ahí conmigo} «vem aí comigo».

Adjetivos: {este libro} «este livro» · {esos libros} «esses livros» · {aquellos días} «aqueles dias».

## Os neutros

As **ideias** levam forma neutra: {esto} «isto» · {eso} «isso» · {aquello} «aquilo».

{¿Qué es esto?} «o que é isto?» · {Por eso} «por isso» · {en esto} «nisto» · {Más allá de esto} «além disto».

## O acento que sumiu

Até 2010, pronomes e adjetivos demonstrativos levavam acento diacrítico: {éste}, {ése}, {aquélla}, {éstos}. A RAE aboliu tudo: hoje se escreve **sempre sem acento**, e pronome e adjetivo ficam idênticos — {este} como pronombre significa «este de aquí» y como adjetivo, «este libro».

O texto bíblico Reina-Valera 1960 aparece em edições com e sem acento diacrítico; a norma atual é sem acento.

## Fórmulas do Novo Testamento

{Este es mi Hijo, el amado} «Este é meu Filho, o amado» (Mt 3:17).
{¿Dónde está?} «Onde está?».
{Esto es lo que os digo} «isto é o que vos digo».
{Aquello que oiram} «aquilo que ouvirem» (Jo 16:13).
{en esto conoced} «nisto conhecei» (1Jo 4:2) — {esto} como **meio**: «por meio disto».

Ex.: {Salió de Galilea} «Saiu da Galiléia» — demoninativo geográfico implícito: {aquel} {lugar}.`),
  vocab: [
    V('este', 'este', 'este (aqui!)'),
    V('ese', 'ese', 'esse (aí!)'),
    V('aquel', 'aquel', 'aquele (ali!)'),
    V('esto', 'esto', 'isto (neutro!)'),
    V('por eso', 'eso', 'por isso'),
    V('en esto', 'esto', 'nisto (1Jo 4:2)'),
    V('aquellos días', 'aquel', 'aqueles dias'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"este/ese/aquel" = ?'),
    options: [
      T('Aqui/aí/ali (três distâncias!)'),
      T('Passado/presente/futuro'),
      T('Eu/tu/ele'),
      T('Iguais'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Como se escreve hoje o pronome demonstrativo com acento: {Éste} ou {este}?'),
      answer: 'este',
      hint: T('Regra §3: a RAE aboliu o acento diacrítico.'),
    },
    {
      kind: 'choose',
      prompt: T('Em "Ven conmigo", qual demonstrativo?'),
      options: [
        T('{aquel}'),
        T('{aquello}'),
        T('{este} ou {ese} (quem inclui o falante!)'),
        T('{esto}'),
      ],
      answer: 2,
      hint: T('Regra §1: o falante se inclui no deixo.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o demonstrativo à sua função'),
      pairs: [
        { a: T('{este}'), b: T('perto de quem fala') },
        { a: T('{ese}'), b: T('perto de quem ouve') },
        { a: T('{aquel}'), b: T('longe dos dois') },
        { a: T('{esto}'), b: T('neutro (ideia, meio)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'este = aqui, ese = aí, aquel = ali. O falante está incluído: ven conmigo = ven aquí.',
      ),
    },
    {
      n: '2',
      text: T('Neutros (esto, eso, aquello) substituem qualquer substantivo e indicam ideia.'),
    },
    {
      n: '3',
      text: T(
        'Desde 2010 não se escreve acento em pronome nem em adjetivo demonstrativo: este, ése, aquel.',
      ),
    },
  ],
  notes: [
    {
      label: T('Aquele é demonstrativo; aquele é relativo'),
      text: T(
        'O mesmo pronome tem três distâncias: {este} toca, {ese} afasta, {aquel} lembra. {Aquél} com acento é o demonstrativo; {aquel} sem é o relativo — a mesma palavra com duas funções.',
      ),
    },
  ],
  examples: [
    { text: '{Este es mi Hijo, el amado}', gloss: T('Este é meu Filho, o amado (Mt 3:17).') },
    { text: '{en esto conoced}', gloss: T('Nisto conhecei (1Jo 4:2 — {esto} = meio).') },
    { text: '{por eso}', gloss: T('Por isso (neutro curto).') },
    { text: '¿Qué es esto?}', gloss: T('O que é isto? (Gn 3:9).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Paradigma dos demonstrativos'),
      head: [T('Distância'), T('m. sg.'), T('f. sg.'), T('m. pl.'), T('f. pl.'), T('Neutro')],
      rows: [
        ['aqui', '{este}', '{esta}', '{estos}', '{estas}', '{esto}'],
        ['aí', '{ese}', '{esa}', '{esos}', '{esas}', '{eso}'],
        ['ali', '{aquel}', '{aquella}', '{aquellos}', '{aquellas}', '{aquello}'],
      ],
    },
    {
      caption: T('Tabela 2 — Fórmulas bíblicas'),
      head: [T('Forma'), T('Sentido'), T('Referência')],
      rows: [
        ['{Este es mi Hijo}', T('este (adjunto)'), 'Mt 3.17'],
        ['{en esto conoced}', T('isto = meio'), '1 Jn 4.2'],
        ['{Aquello que oíréis}', T('aquello = coisa distante'), 'Jn 16.13'],
        ['{por eso}', T('eso = isso'), '1 Jn 3.24'],
      ],
    },
  ],
};
