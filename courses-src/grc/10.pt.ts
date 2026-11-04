import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Imperativo'),
  subtitle: T('λῦε × λῦσον: ordenar em processo ou em ato'),
  section: T('O verbo'),
  body: C(`## Ordem com aspecto

O imperativo grego ordena, exorta, suplica e convida — e, como todo verbo grego, carrega aspecto. O imperativo presente manda continuar ou manter um processo ({μετανοεῖτε} «vivei em arrependimento», {προσεύχεσθε} «vivei orando»); o imperativo aoristo manda executar um ato ({ἔγειρε} «levanta-te!», {πίστευσον} «crê!», At 16.31). O famoso {μετανοεῖτε} de Mc 1.15 está no presente: «vivei em arrependimento», não «arrependei-vos uma vez».

Na prática da leitura, traduções raramente marcam a diferença — cabe ao estudante percebê-la. Diante de dois imperativos, pergunte: o autor quer um estado permanente (presente) ou uma decisão pontual (aoristo)?

## As pessoas do imperativo

O imperativo tem 2ª e 3ª pessoas (não se dá ordem a si mesmo no singular). A 2ª sg. do presente ativo é a forma mais curta do verbo: {λῦε} (tema + ε, sem desinência). A 3ª sg. leva {-τω}: {λυέτω} «liberte ele!», {λυσάτω} no aoristo. A 2ª pl. coincide com o indicativo ({λύετε}, {λύσατε}) — só o contexto e a pontuação dizem que é ordem. A 3ª pl. termina em {-ντων}: {λυόντων}, {λυσάντων}.

Na voz média, a 2ª sg. termina em {-ου} ({λύου}, {φοβοῦ}), forma que reaparece nos verbos depoentes do cap. 11.

## Proibir em grego

A negação do imperativo tem regra própria, e ela cai em prova e em texto o tempo todo. Para proibir um ato pontual: {μή} + subjuntivo aoristo ({μὴ φοβηθῇς} «não temas», Mt 1.20; {μὴ κρίνετε} «não julgueis», Mt 7.1 — aqui presente, «não vivais julgando»). Para proibir a continuação de algo: {μή} + imperativo presente ({μὴ μεριμνᾶτε} «não andeis ansiosos», Mt 6.31).

O par resume a lógica do aspecto até na negação: pare de fazer (presente) × nem comece/considere feito (aoristo). {μὴ θησαυρίζετε} «não entesoureis» (hábito a abandonar) × {μὴ φοβηθῇς} «nem tenhas medo» (ato a evitar).`),
  vocab: [
    V('λῦε', 'λύω', 'liberta! (pres.)'),
    V('λῦσον', 'λύω', 'liberta! (aor.)'),
    V('λύετε', 'λύω', 'libertai!'),
    V('λύσατε', 'λύω', 'libertai! (aor.)'),
    V('λυέτω', 'λύω', 'liberte ele!'),
    V('μετανοεῖτε', 'μετανοέω', 'arrependei-vos'),
    V('πίστευσον', 'πιστεύω', 'crê!'),
    V('ἔγειρε', 'ἐγείρω', 'levanta-te!'),
    V('μή', 'μή', 'não (proibição)'),
    V('φοβοῦ', 'φοβέομαι', 'teme! / não temas!'),
    V('αἰτεῖτε', 'αἰτέω', 'pedi!'),
    V('γενηθήτω', 'γίνομαι', 'seja feito!'),
    V('ἐλθέτω', 'ἔρχομαι', 'venha!'),
    V('ὕπαγε', 'ὑπάγω', 'vai!'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«μετανοεῖτε» (Mc 1.15) está no presente porque…'),
    options: [
      T('O arrependimento é estado a manter, não ato único'),
      T('O aoristo não existe para esse verbo'),
      T('É ordem dada só aos apóstolos'),
      T('Presente e aoristo são intercambiáveis'),
    ],
    answer: 0,
    hint: T('Imperativo presente = processo a manter — regra §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a 2ª pessoa do singular do aoristo: λῦ___ («liberta!», de uma vez).'),
      answer: 'σον',
      hint: T('Aoristo 1º: tema + σ + ον.'),
    },
    {
      kind: 'choose',
      prompt: T('«μὴ κρίνετε» (Mt 7.1) nega com presente porque…'),
      options: [
        T('Proíbe um hábito a abandonar («não vivais julgando»)'),
        T('O aoristo seria gramaticalmente errado'),
        T('É exceção sem explicação'),
        T('μή só combina com presente'),
      ],
      answer: 0,
      hint: T('μή + presente = pare de fazer — regra §4.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma à sua descrição.'),
      pairs: [
        { a: 'λῦε', b: '2ª sg. pres.' },
        { a: 'λῦσον', b: '2ª sg. aor.' },
        { a: 'λυέτω', b: '3ª sg. pres.' },
        { a: 'λύου', b: '2ª sg. média' },
      ],
      answer: [
        { 0: '0', 1: '-', 2: '0' },
        { 0: '1', 1: '-', 2: '1' },
        { 0: '2', 1: '-', 2: '2' },
        { 0: '3', 1: '-', 2: '3' },
      ],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Imperativo presente = processo a manter; imperativo aoristo = ato a executar. A escolha do tempo é a mensagem.',
      ),
    },
    {
      n: '2',
      text: T(
        '2ª sg. do presente é a forma mais curta ({λῦε}, {βλέπε}); 3ª sg. leva -τω; 3ª pl. leva -ντων.',
      ),
    },
    {
      n: '3',
      text: T(
        '2ª pl. do imperativo = 2ª pl. do indicativo em forma ({λύετε}). Só o contexto revela a ordem.',
      ),
    },
    {
      n: '4',
      text: T(
        'Proibição: {μή} + subjuntivo aoristo (ato) ou {μή} + imperativo presente (hábito a abandonar).',
      ),
    },
    {
      n: '5',
      text: T(
        'No NT, a 3ª pessoa do imperativo traduz-se por «que ele… / deixai…»: {ἐλθέτω} «venha!», {γενηθήτω} «seja feita!».',
      ),
    },
  ],
  notes: [
    {
      label: T('Sutileza:'),
      text: T(
        '{ἄφες} (Mt 8.22) e {ἄφετε} (Mt 19.14, «deixai vir a mim») são o mesmo verbo ({ἀφίημι}, cap. 12) em tempos diferentes: ato pontual × atitude permanente. O aspecto decide a tradução.',
      ),
    },
    {
      label: T('Polidez:'),
      text: T(
        'O imperativo grego não é rude por si: pedidos a Deus ({δός}, «dá-nos», Mt 6.11) e súplicas ({ἐλέησόν με}, «tem piedade de mim») usam o mesmo modo das ordens. O tom vem do contexto, não da forma.',
      ),
    },
  ],
  examples: [
    { text: '{μετανοεῖτε}', gloss: T('arrependei-vos (presente: estado; Mc 1.15)') },
    { text: '{πίστευσον}', gloss: T('crê! (aoristo: decisão; At 16.31)') },
    { text: '{ἔγειρε καὶ περιπάτει}', gloss: T('levanta-te e anda! (Mt 9.5)') },
    { text: '{μὴ φοβοῦ}', gloss: T('não temas! (Lc 1.30)') },
    { text: '{μὴ κρίνετε}', gloss: T('não julgueis (presente: hábito; Mt 7.1)') },
    { text: '{αἰτεῖτε καὶ δοθήσεται}', gloss: T('pedi e dar-se-vos-á (Mt 7.7)') },
    { text: '{γενηθήτω τὸ θέλημά σου}', gloss: T('seja feita a tua vontade (3ª sg.; Mt 6.10)') },
    { text: '{ἐλθέτω ἡ βασιλεία σου}', gloss: T('venha o teu reino (Mt 6.10)') },
    { text: '{ὕπαγε εἰς εἰρήνην}', gloss: T('vai em paz (Mc 5.34)') },
    { text: '{ἄφες τοὺς νεκρούς}', gloss: T('deixa os mortos (aoristo: ato; Mt 8.22)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Imperativo presente ativo de λύω'),
      head: [T('Pessoa'), T('Forma'), T('Tradução')],
      rows: [
        ['2ª sg.', '{λῦε}', 'liberta! (continua)'],
        ['3ª sg.', '{λυέτω}', 'liberte ele!'],
        ['2ª pl.', '{λύετε}', 'libertai!'],
        ['3ª pl.', '{λυόντων}', 'libertem eles!'],
      ],
    },
    {
      caption: T('Tabela 2 — Imperativo aoristo ativo de λύω'),
      head: [T('Pessoa'), T('Forma'), T('Tradução')],
      rows: [
        ['2ª sg.', '{λῦσον}', 'liberta! (de uma vez)'],
        ['3ª sg.', '{λυσάτω}', 'liberte ele!'],
        ['2ª pl.', '{λύσατε}', 'libertai!'],
        ['3ª pl.', '{λυσάντων}', 'libertem eles!'],
      ],
    },
    {
      caption: T('Tabela 3 — Imperativo presente médio'),
      head: [T('Pessoa'), T('Forma'), T('Tradução')],
      rows: [
        ['2ª sg.', '{λύου}', 'liberta-te!'],
        ['3ª sg.', '{λυέσθω}', 'liberte-se ele!'],
        ['2ª pl.', '{λύεσθε}', 'libertai-vos!'],
      ],
    },
  ],
};
