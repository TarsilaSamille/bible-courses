import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Verbos depoentes e o subjuntivo'),
  subtitle: T('{loquor, loquor, locutus} — forma passiva, sentido ativo'),
  section: T('Verbos, tempos e os primeiros textos'),
  body: C(`## O verbo que parece passivo e não é

Os **depoentes** recebem as terminações passivas mas valem passivamente. É o oposto exato do que o nome sugere: {de-pono} de onde vem o substantivo *deponent* «quem põe fora, quem deposita». O latim tem talvez vinte deles, todos de 1.ª conjugação, e todos de uso comum:

- {loquor, loquor, locūtus sum} «falar»;
- {vĕgor, vĕgis, vēnī sum} «ir, caminhar» (assim como {vēnī}, perfeito de {vĕnio});
- {mŏror, mŏris, mortuus sum} «morrer»;
- {nascor, nascis, nātus sum} «nascer»;
- {orior, oris, ortus sum} «levantar-se»;
- {fruor, fruis, frūctus sum} «usufruir de»;
- {conor, conis, cōnātus sum} «tentar»;
- {comitor, comitis, comitātus sum} «acompanhar».

Para o contexto, {loquor} pode ser um verbo de primeira pessoa, e quase sempre é:

{Pueri in schola {loquuntur}} «os meninos falam na escola»;
{Omnes de {Deo} {locuti sunt}} «todos falaram de Deus».

O particípio, ao contrário, é **sempre** ativo: {locutus} significa «falante» ou «que falou», nunca «falado».

## O subjuntivo, o modo da vontade

O latim tem quatro modos, e o subjuntivo é o mais importante depois do indicativo porque traduz tudo aquilo que em português vira «que», «se», «talvez», «espero»:

- {Amat} «ama» — fato, presente do indicativo;
- {Amēt} «ame» — ordem, presente do subjuntivo;
- {Amāvit} «amou» — fato passado, perfeito;
- {Amāverit} «terá amado» — futuro, futuro perfeito.

Perceba o mecanismo: o subjuntivo se forma com a vogal temática **alongada** e mais {t} nas três primeiras pessoas:

| Pessoa | Indicativo | Subjuntivo |
|---|---|---|
| 1.ª sing. | amō | amēm |
| 2.ª sing. | amās | amēs |
| 3.ª sing. | amat | amet |
| 1.ª pl. | amāmus | amēmus |
| 2.ª pl. | amātis | amētis |
| 3.ª pl. | amant | ament |

## As três عائلias do subjuntivo

O latim é prodigioso em modos. A Vulgata vive de três famílias:

1. **Presente** ({amēt}): o mais comum, e serve para ordens e para condições presentes.
2. **Imperfeito** ({amāret}): o modo das ações possíveis no passado — «se amasse», «queria amar». Aparece muito em orações de tipo {quamquam} «embora» e em provérbios: {Amāret quantum vellet}.
3. **Perfeito** ({amāverit}): o modo das ações **anteriores** a outra ação. É o mais fácil de reconhecer, porque tem o tema de {amāv-} mais {erit}.

Em {Si non venerit, non videbit} (João 15:24), o latim escreve {venerit} e {videbit}: os dois são futuro perfeito, e o primeiro é subjuntivo. O grego também; a diferença é que o latim perdeu o aoristo e ficou só com o «subjuntivo do perfecto».

## Subjuntivo ou indicativo?

Uma regra prática basta para 90% dos casos da Vulgata: **use o subjuntivo quando há uma ideia de ordem, dúvida, condição ou finalidade**.

| Indicação | Exemplo |
|---|---|
| ordem | {Veniat} «que venha» |
| fim | {ut?} {spectat} «para ver» |
| condição | {Si {venerit}...} «se vier» |
| concessão | {cum} {non...} «embora não» |

A conjunção mais produtiva é {ut} + subjuntivo, que em latim significa tanto «que» (oração completiva) quanto «para que» (final). O contexto decide, e a tradução é que resolve: {scient, ut ...} «ele sabe que», {venit, ut videat} «veio para ver».`),
  vocab: [
    V('loquor', 'loquor', 'falo'),
    V('loquuntur', 'loquor', 'falam'),
    V('locutus', 'loquor', 'que falou, orador'),
    V('vĕgor', 'vĕgor', 'vou, caminho'),
    V('vēnit', 'vĕnio', 'veio'),
    V('nascor', 'nascor', 'nascemos'),
    V('natus', 'nascor', 'nascido'),
    V('orior', 'orior', 'levanto-me'),
    V('mortuus', 'mŏror', 'morto'),
    V('conor', 'conor', 'tento, procuro'),
    V('fruor', 'fruor', 'usufruo de (+ abl.)'),
    V('ut', 'ut', 'que, para que (+ subj.)'),
    V('ne', 'ne', 'nem… para que não'),
    V('quamquam', 'quamquam', 'embora'),
    V('licet', 'licet', 'ainda que, é permitido'),
    V('sperare', 'spero', 'esperar'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Pueri in schola loquuntur}, qual é o valor de {loquuntur}?'),
    options: [
      T('Forma passiva com sentido ativo: «falam»'),
      T('Passivo de {loqui}: «são falados»'),
      T('Subjuntivo presente: «que falem»'),
      T('Imperfeito de {loqui}: «falavam»'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Como se forma o presente do subjuntivo a partir do presente do indicativo?'),
      options: [
        T('Alongando a vogal temática e acrescentando {t} nas três primeiras pessoas'),
        T('Trocando {a} por {e} em toda a forma'),
        T('Acrescentando {ns} a todas as formas'),
        T('Usando o tema do supino mais {erim}'),
      ],
      answer: 0,
      hint: T('Regra §2: {amat} → {amet}.'),
    },
    {
      kind: 'fill',
      prompt: T('Perfeito de {loquor}: locutus su_'),
      answer: 'sum',
      hint: T('O depoente forma o perfeito com o auxiliar {sum}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma ao que ela significa no contexto'),
      pairs: [
        { a: T('Veniat'), b: T('subjuntivo: «que venha» — uma ordem') },
        { a: T('amat'), b: T('indicativo: «ama» — um fato') },
        { a: T('amāret'), b: T('subj. imperfeito: «se amasse» — possibilidade') },
        { a: T('amāverit'), b: T('subj. perfeito: «que tiver amado» — ação anterior') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Verbos depoentes têm forma passiva e sentido ativo; o participio deles é sempre ativo.',
      ),
    },
    {
      n: '2',
      text: T(
        'O presente do subjuntivo alonga a vogal temática e acrescenta {t}: {amat} → {amet}.',
      ),
    },
    {
      n: '3',
      text: T('O perfeito do subjuntivo mostra o tema de {amāv-} mais {-erit}: {amāverit}.'),
    },
    {
      n: '4',
      text: T(
        'Use o subjuntivo para ordem, finalidade, condição e dúvida; o indicativo, para o fato.',
      ),
    },
    {
      n: '5',
      text: T('{ut} + subjuntivo vale «que» e «para que»; o contexto e a preposição {ad} decidem.'),
    },
  ],
  notes: [
    {
      label: T('Por que o latim perdeu o futuro:'),
      text: T(
        'O latim tem futuro (amābit) e futuro perfeito (amāverit), mas o segundo é muito mais comum, e com razão: o grego também o prefere, e para o grego future perfect é optativo. Traduzindo para o latim, Jerônimo trocou a maioria dos optativos gregos por {amāverit}. É por isso que a Vulgata tem muito mais futuro perfeito do que talvez se esperasse.',
      ),
    },
    {
      label: T('Contra o optativo:'),
      text: T(
        'O latim **não tem optativo**; o grego tem. Todas as funções do optativo grego foram absorvidas pelo subjuntivo latino. Se um aluno traduz do grego e escreve «optativo» em latim, está escrevendo grego disfarçado.',
      ),
    },
  ],
  examples: [
    { text: 'loquor', gloss: T('falo — forma passiva, sentido ativo') },
    { text: 'loquuntur', gloss: T('falam') },
    { text: 'locutus', gloss: T('que falou — participio ativo') },
    { text: 'venit', gloss: T('veio — {vēnit} de {vĕnio}') },
    { text: 'natus', gloss: T('nascido — de {nascor} deponente') },
    { text: 'mortuus', gloss: T('morto — de {mŏror} deponente') },
    { text: 'amēt', gloss: T('que ame (subj. presente)') },
    { text: 'amāret', gloss: T('se amasse (subj. imperfeito)') },
    { text: 'amāverit', gloss: T('que tiver amado (subj. perfeito)') },
    {
      text: 'Si non venerit, non videbit',
      gloss: T('«Se não vier, não verá» — {venerit} é subjuntivo'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Subjuntivos de {amāre}: as três famílias'),
      head: [T('Pessoa'), T('Presente'), T('Imperfeito'), T('Perfeito')],
      rows: [
        ['1.ª sing.', 'amēm', 'amārem', 'amāverim'],
        ['2.ª sing.', 'amēs', 'amārēs', 'amāveris'],
        ['3.ª sing.', 'amēt', 'amāret', 'amāverit'],
        ['1.ª pl.', 'amēmus', 'amāremus', 'amāverimus'],
        ['2.ª pl.', 'amētis', 'amārētis', 'amāveritis'],
        ['3.ª pl.', 'ament', 'amārent', 'amāverint'],
      ],
    },
    {
      caption: T('Tabela 2 — Verbos depoentes e seus particípios'),
      head: [T('Infinitivo'), T('1.ª sing.'), T('Particípio'), T('Glosa')],
      rows: [
        ['loquor', 'loquor', 'locūtus', 'falar'],
        ['vĕgor', 'vĕgor', 'vēnitus', 'caminhar'],
        ['mŏror', 'mŏror', 'mortuus', 'morrer'],
        ['nascor', 'nascor', 'nātus', 'nascer'],
        ['orior', 'orior', 'ortus', 'levantar-se'],
        ['fruor', 'fruor', 'frūctus', 'usufruir'],
        ['conor', 'conor', 'cōnātus', 'tentar'],
        ['comitor', 'comitor', 'comitātus', 'acompanhar'],
      ],
    },
  ],
};
