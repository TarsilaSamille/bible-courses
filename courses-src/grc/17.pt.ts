import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('Comparativos e leitura: Mc 1'),
  subtitle: T('μείζων, πλείων, κρείττων — e a primeira leitura corrida'),
  section: T('O verbo'),
  body: C(`## Comparar em grego

O comparativo regular junta {-τερος, -τερα, -ον} ao tema do adjetivo: {μικρός} → {μικρότερος} «menor», {ἰσχυρός} → {ἰσχυρότερος} «mais forte», {σοφός} → {σοφώτερος} «mais sábio». O superlativo junta {-τατος, -τάτη, -ον}: {μικρότατος} «mínimo», {ἁγιώτατος} «santíssimo» (Jd 20, {τῇ ἁγιωτάτῃ πίστι} «a santíssima fé»). A declinação segue o 2-1-2 do cap. 4.

O segundo termo da comparação vai ao genitivo ({μείζων μου} «maior do que eu») ou vem com {ἤ} «do que» + mesmo caso ({κρείττων ἐστὶν ἤ}…). O genitivo de comparação é elegante e frequente: {ὁ πατήρ μου μείζων μού ἐστιν} «meu Pai é maior do que eu» (Jo 14.28).

## Os irregulares que você já conhece

Os adjetivos mais usados fogem da regra — e você já tropeçou neles: {μέγας} → {μείζων} «maior» (superlativo {μέγιστος}), {πολύς} → {πλείων} «mais, mais numeroso» ({πλεῖστοι} «muitíssimos»), {ἀγαθός} → {κρείττων} «melhor» ({κράτιστος} «ótimo» — título de Teófilo em Lc 1.3, {κράτιστε}), {κακός} → {χείρων} «pior» (2Tm 3.13, {ἐπὶ τὸ χεῖρον} «para pior»), {μικρός} → {ἐλάττων} «menor» ao lado do regular {μικρότερος}.

O superlativo grego tem ainda o uso elativo — sem comparação, só intensidade: {ἐλάχιστος} «muitíssimo pequeno», {πρῶτος} «primeiríssimo». Diante de superlativo sem segundo termo, traduza com «muito» ou «-íssimo».

## Leitura guiada: Marcos 1.2-11

Chegou a hora de ler texto corrido. Marcos 1 abre com Isaías e fecha com o batismo — e quase toda a gramática dos caps. 1–15 aparece nestes versos. Leia devagar, reconhecendo cada forma.

{Ἰδοὺ ἀποστέλλω τὸν ἄγγελόν μου πρὸ προσώπου σου} — «Eis que envio o meu mensageiro diante de ti»: presente ({ἀποστέλλω}) com valor de futuro, acusativo como objeto, {μου} possessivo enclítico.

{φωνὴ βοῶντος ἐν τῇ ἐρήμῳ} — «voz do que clama no deserto»: particípio substantivado no genitivo ({βοῶντος}, de {βοάω}), dativo de lugar.

{Ἑτοιμάσατε τὴν ὁδὸν κυρίου} — «Preparai o caminho do Senhor»: imperativo aoristo plural, genitivo de posse.

{ἐγένετο Ἰωάννης βαπτίζων} — «apareceu João batizando»: aoristo médio de {γίνομαι} + particípio presente (ação simultânea).

{σὺ εἶ ὁ υἱός μου ὁ ἀγαπητός} — «tu és o meu Filho, o amado»: pronome enfático + predicativo com artigo repetido (cap. 4!).`),
  vocab: [
    V('μείζων', 'μέγας', 'maior'),
    V('μέγιστος', 'μέγας', 'máximo'),
    V('πλείων', 'πολύς', 'mais numeroso'),
    V('κρείττων', 'ἀγαθός', 'melhor'),
    V('χείρων', 'κακός', 'pior'),
    V('ἐλάττων', 'μικρός', 'menor'),
    V('μικρότερος', 'μικρός', 'menor (reg.)'),
    V('ἤ', 'ἤ', 'do que, ou'),
    V('Ἰδοὺ', 'ὁράω', 'eis!'),
    V('ἄγγελος', 'ἄγγελος', 'mensageiro, anjo'),
    V('ἔρημος', 'ἔρημος', 'deserto'),
    V('βοάω', 'βοάω', 'clamar'),
    V('ἑτοιμάζω', 'ἑτοιμάζω', 'preparar'),
    V('ἀγαπητός', 'ἀγαπητός', 'amado'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«μείζων μου» usa genitivo porque…'),
    options: [
      T('É genitivo de comparação (segundo termo)'),
      T('Todo comparativo rege genitivo possessivo'),
      T('μου é sempre genitivo'),
      T('É dativo de interesse'),
    ],
    answer: 0,
    hint: T('Segundo termo da comparação: genitivo ou ἤ — regra §2.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('«κράτιστε Θεόφιλε» (Lc 1.3) é…'),
      options: [
        T('Vocativo superlativo (título honorífico)'),
        T('Nominativo comparativo'),
        T('Genitivo de comparação'),
        T('Acusativo de duração'),
      ],
      answer: 0,
      hint: T('κράτιστος = superlativo de ἀγαθός; -ε final = vocativo.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete o comparativo regular: μικρ___ («menor»).'),
      answer: 'ότερος',
      hint: T('Sufixo do comparativo regular: -τερος.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada comparativo ao seu positivo.'),
      pairs: [
        { a: 'μείζων', b: 'μέγας' },
        { a: 'πλείων', b: 'πολύς' },
        { a: 'κρείττων', b: 'ἀγαθός' },
        { a: 'χείρων', b: 'κακός' },
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
        'Comparativo regular: -τερος; superlativo: -τατος. Declinação 2-1-2, como o positivo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Segundo termo: genitivo ({μείζων μου}) ou ἤ + mesmo caso. Sem segundo termo, superlativo = elativo («muitíssimo»).',
      ),
    },
    {
      n: '3',
      text: T(
        'Cinco irregulares mandam no texto: {μείζων}, {πλείων}, {κρείττων}, {χείρων}, {ἐλάττων}. Decore os cinco.',
      ),
    },
    {
      n: '4',
      text: T(
        'Na leitura corrida, cada forma deve ser reconhecida — não traduzida palavra por palavra. Ritmo antes de precisão.',
      ),
    },
  ],
  notes: [
    {
      label: T('Método de leitura:'),
      text: T(
        "Na primeira leitura corrida, sublinhe apenas o que reconhece (artigos, casos, tempos) e chute o resto pelo contexto. Na segunda, confira o vocabulário. Ler grego é reconnaître d'abord, traduire ensuite.",
      ),
    },
    {
      label: T('μᾶλλον:'),
      text: T(
        'O advérbio {μᾶλλον} «mais, antes» faz comparações sem adjetivo: {μᾶλλον ἤ} «antes que». Paulo o usa em dilemas ({μᾶλλον} viver ou partir, Fp 1.23).',
      ),
    },
  ],
  examples: [
    { text: '{μείζων μου}', gloss: T('maior do que eu (genitivo de comparação)') },
    { text: '{ὁ πατήρ μου μείζων μού ἐστιν}', gloss: T('meu Pai é maior do que eu (Jo 14.28)') },
    { text: '{κράτιστε Θεόφιλε}', gloss: T('ó excelentíssimo Teófilo (vocativo; Lc 1.3)') },
    { text: '{πλεῖον}', gloss: T('mais (neutro substantivado; Mt 5.20)') },
    { text: '{ἐπὶ τὸ χεῖρον}', gloss: T('para pior (2Tm 3.13)') },
    { text: '{Ἰδοὺ ἀποστέλλω}', gloss: T('eis que envio (presente futurístico; Mc 1.2)') },
    { text: '{φωνὴ βοῶντος}', gloss: T('voz do que clama (particípio; Mc 1.3)') },
    { text: '{Ἑτοιμάσατε}', gloss: T('preparai! (imperativo aoristo; Mc 1.3)') },
    { text: '{ἐγένετο Ἰωάννης}', gloss: T('apareceu João (aoristo médio; Mc 1.4)') },
    { text: '{σὺ εἶ ὁ υἱός μου}', gloss: T('tu és o meu Filho (Mc 1.11)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Comparativo e superlativo regulares'),
      head: [T('Positivo'), T('Comparativo'), T('Superlativo')],
      rows: [
        ['{μικρός}', '{μικρότερος}', 'μικρότατος'],
        ['{ἰσχυρός}', '{ἰσχυρότερος}', 'ἰσχυρότατος'],
        ['{σοφός}', '{σοφώτερος}', 'σοφώτατος'],
      ],
    },
    {
      caption: T('Tabela 2 — Irregulares essenciais'),
      head: [T('Positivo'), T('Comparativo'), T('Superlativo')],
      rows: [
        ['{μέγας}', '{μείζων}', 'μέγιστος'],
        ['{πολύς}', '{πλείων}', 'πλεῖστος'],
        ['{ἀγαθός}', '{κρείττων}', 'κράτιστος'],
        ['{κακός}', '{χείρων}', 'χείριστος'],
        ['{μικρός}', '{ἐλάττων}', 'ἐλάχιστος'],
      ],
    },
  ],
};
