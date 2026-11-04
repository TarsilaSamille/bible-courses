import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('Pronomes pessoais'),
  subtitle: T('ἐγώ, σύ, αὐτός: ênfase e os três papéis de αὐτός'),
  section: T('Pronomes'),
  body: C(`## Por que pronome, se o verbo já diz?

Em grego, {λέγω} já significa «eu digo» e {λέγεις} já significa «tu dizes» — o pronome explícito é redundante para a gramática. Por isso, sempre que {ἐγώ} ou {σύ} aparecem como sujeito, há ênfase ou contraste: {σὺ εἶ ὁ υἱός μου} «TU és o meu filho» (Mc 1.11, no batismo), {ἐγὼ οὐκ εἰμὶ ἄξιος} «EU não sou digno» (Mt 3.11). O pronome é um holofote: onde ele cai, está o foco.

A mesma lógica vale para {ἐγώ εἰμι} «EU SOU» (Jo 8.58) — com ou sem predicado, a fórmula evoca o Nome divino de Êxodo 3.14 na Septuaginta ({ἐγώ εἰμι ὁ ὤν}). Reconhecer a ênfase é metade da exegese desses versos.

## ἐγώ e σύ: tônicas e enclíticas

Os pronomes de 1ª e 2ª pessoa têm formas tônicas (com acento próprio, enfáticas) e formas enclíticas curtas (sem acento, apoiadas na palavra anterior). {ἐμοῦ} × {μου}, {ἐμοί} × {μοι}, {ἐμέ} × {με}; {σοῦ} × {σου}, {σοί} × {σοι}, {σέ} × {σε}.

Na prática do Novo Testamento, as enclíticas dominam como possessivos e objetos: {ὁ υἱός μου} «o meu filho», {λέγω σοι} «digo-te», {μετὰ σοῦ} «contigo». As tônicas aparecem em contraste ({σὺ λέγεις} «És TU que dizes», Jo 18.37), depois de preposições enfáticas e em paralelismos. Regra prática: enclítica = uso neutro; tônica = atenção.

O plural ({ἡμεῖς}, {ὑμεῖς}) segue a mesma lógica, com formas plenas em todos os casos: {ἡμῶν} «nosso», {ὑμῖν} «a vós», {ἡμᾶς} «a nós». O Pai-Nosso usa o possessivo ({Πάτερ ἡμῶν}); já {ὑμεῖς} enfático abre contrastes como Mt 5.13 ({ὑμεῖς ἐστε τὸ ἅλας} «VÓS sois o sal»).

## αὐτός em três papéis

{αὐτός} é o coringa pronominal, com três empregos distintos que a posição revela. Primeiro, adjetivo intensivo junto a substantivo articulado: {αὐτὸς ὁ κύριος} «o PRÓPRIO Senhor» (1Ts 4.16), {αὐτὸς ἐγώ} «eu MESMO».

Segundo, pronome de 3ª pessoa nos casos oblíquos (o grego não tem «ele» no nominativo — usa {ἐκεῖνος} ou o artigo): {αὐτόν} «a ele», {αὐτῇ} «a ela», {αὐτῶν} «deles». {εἶδεν αὐτόν} «viu-o»; {μετ᾽ αὐτῶν} «com eles».

Terceiro, com artigo, significa «o mesmo»: {ὁ αὐτὸς} «o mesmo» (1Co 1.10, {τὸ αὐτὸ λέγητε} «digais a mesma coisa»), {ἐπὶ τὸ αὐτό} «juntos, no mesmo lugar» (At 2.1). Três posições, três sentidos — e a confusão entre eles é a armadilha clássica deste capítulo.`),
  vocab: [
    V('ἐγώ', 'ἐγώ', 'eu (ênfase)'),
    V('ἐμοῦ', 'ἐγώ', 'de mim (tônica)'),
    V('μου', 'ἐγώ', 'meu, me'),
    V('μοι', 'ἐγώ', 'a mim, me'),
    V('ἡμεῖς', 'ἐγώ', 'nós'),
    V('ἡμῶν', 'ἐγώ', 'nosso, de nós'),
    V('σύ', 'σύ', 'tu (ênfase)'),
    V('σοῦ', 'σύ', 'de ti (tônica)'),
    V('σου', 'σύ', 'teu, te'),
    V('σοι', 'σύ', 'a ti'),
    V('αὐτός', 'αὐτός', 'o próprio, mesmo'),
    V('αὐτόν', 'αὐτός', 'a ele, o'),
    V('αὐτῶν', 'αὐτός', 'deles'),
    V('ἑαυτόν', 'ἑαυτοῦ', 'a si mesmo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em «σὺ εἶ ὁ υἱός μου» (Mc 1.11), o «σύ» explícito indica…'),
    options: [
      T('Ênfase solene («TU és»)'),
      T('Erro de concordância'),
      T('Plural majestático'),
      T('Sujeito indeterminado'),
    ],
    answer: 0,
    hint: T('Verbo + pronome explícito = holofote — regra §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a enclítica possessiva: ὁ υἱός ___ («o meu filho»).'),
      answer: 'μου',
      hint: T('Genitivo enclítico de ἐγώ: Tabela 1.'),
    },
    {
      kind: 'choose',
      prompt: T('«ὁ αὐτὸς λόγος» significa…'),
      options: [
        T('A mesma palavra'),
        T('A própria palavra (intensivo)'),
        T('Ele disse a palavra'),
        T('A palavra dele'),
      ],
      answer: 0,
      hint: T('Com artigo antes: «o mesmo» — regra §5.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma de αὐτός ao seu papel.'),
      pairs: [
        { a: 'αὐτὸς ὁ κύριος', b: 'intensivo' },
        { a: 'εἶδεν αὐτόν', b: 'pronome' },
        { a: 'τὸ αὐτό', b: '«o mesmo»' },
        { a: 'μετ᾽ αὐτῶν', b: 'pronome' },
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
        'Pronome explícito como sujeito = ênfase ou contraste. Sem ênfase, o verbo sozinho basta.',
      ),
    },
    {
      n: '2',
      text: T(
        'Enclíticas ({μου}, {σου}, {με}, {σε}) = uso neutro (posse, objeto). Tônicas ({ἐμοῦ}, {σοί}) = atenção e contraste.',
      ),
    },
    {
      n: '3',
      text: T('αὐτός sem artigo + substantivo articulado = «o próprio» ({αὐτὸς ὁ κύριος}).'),
    },
    {
      n: '4',
      text: T('αὐτός nos oblíquos sem artigo por perto = pronome «ele/ela» ({αὐτόν}, {αὐτῶν}).'),
    },
    {
      n: '5',
      text: T('ὁ αὐτός (com artigo) = «o mesmo» ({ἐπὶ τὸ αὐτό} «juntos»). A posição decide tudo.'),
    },
  ],
  notes: [
    {
      label: T('Fonética:'),
      text: T(
        'Enclíticas ganham acento quando a palavra anterior é oxítona ou quando duas enclíticas se empilham ({ἄκουσόν μου} «ouve-me»). Os editores marcam esses acentos — não os confunda com formas tônicas.',
      ),
    },
    {
      label: T('Reflexivo:'),
      text: T(
        'Para «a si mesmo», o grego compõe {ἑαυτόν} (αὐτός + prefixo reflexivo): {ἑαυτὸν ἐταπείνωσεν} «humilhou-se a si mesmo» (Fp 2.8). O cap. 26 (demonstrativos) completa o quadro pronominal.',
      ),
    },
  ],
  examples: [
    { text: '{σὺ εἶ ὁ υἱός μου}', gloss: T('tu és o meu filho (ênfase; Mc 1.11)') },
    { text: '{ἐγώ εἰμι}', gloss: T('EU SOU (Jo 8.58; fórmula divina)') },
    { text: '{ὑμεῖς ἐστε τὸ ἅλας}', gloss: T('vós sois o sal (contraste; Mt 5.13)') },
    { text: '{ὁ υἱός μου}', gloss: T('o meu filho (enclítica possessiva)') },
    { text: '{λέγω σοι}', gloss: T('digo-te (objeto enclítico)') },
    { text: '{αὐτὸς ὁ κύριος}', gloss: T('o próprio Senhor (intensivo; 1Ts 4.16)') },
    { text: '{εἶδεν αὐτόν}', gloss: T('viu-o (pronome oblíquo)') },
    { text: '{μετ᾽ αὐτῶν}', gloss: T('com eles (genitivo plural)') },
    { text: '{τὸ αὐτὸ λέγητε}', gloss: T('digais a mesma coisa (1Co 1.10)') },
    { text: '{ἐπὶ τὸ αὐτό}', gloss: T('juntos, no mesmo lugar (At 2.1)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — ἐγώ (1ª pessoa)'),
      head: [
        T('Caso'),
        { 0: 'S', 1: 'g', 2: '.', 3: ' ', 4: 't', 5: 'ô', 6: 'n', 7: 'i', 8: 'c', 9: 'a' },
        {
          0: 'S',
          1: 'g',
          2: '.',
          3: ' ',
          4: 'e',
          5: 'n',
          6: 'c',
          7: 'l',
          8: 'í',
          9: 't',
          10: 'i',
          11: 'c',
          12: 'a',
        },
        T('Plural'),
      ],
      rows: [
        [T('Nominativo'), '{ἐγώ}', '—', '{ἡμεῖς}'],
        [T('Genitivo'), '{ἐμοῦ}', '{μου}', '{ἡμῶν}'],
        [T('Dativo'), '{ἐμοί}', '{μοι}', '{ἡμῖν}'],
        [T('Acusativo'), '{ἐμέ}', '{με}', '{ἡμᾶς}'],
      ],
    },
    {
      caption: T('Tabela 2 — σύ (2ª pessoa)'),
      head: [
        T('Caso'),
        { 0: 'S', 1: 'g', 2: '.', 3: ' ', 4: 't', 5: 'ô', 6: 'n', 7: 'i', 8: 'c', 9: 'a' },
        {
          0: 'S',
          1: 'g',
          2: '.',
          3: ' ',
          4: 'e',
          5: 'n',
          6: 'c',
          7: 'l',
          8: 'í',
          9: 't',
          10: 'i',
          11: 'c',
          12: 'a',
        },
        T('Plural'),
      ],
      rows: [
        [T('Nominativo'), '{σύ}', '—', '{ὑμεῖς}'],
        [T('Genitivo'), '{σοῦ}', '{σου}', '{ὑμῶν}'],
        [T('Dativo'), '{σοί}', '{σοι}', '{ὑμῖν}'],
        [T('Acusativo'), '{σέ}', '{σε}', '{ὑμᾶς}'],
      ],
    },
    {
      caption: T('Tabela 3 — αὐτός (declina como adjetivo 2-1-2)'),
      head: [T('Caso'), T('Masc.'), T('Fem.'), T('Neutro')],
      rows: [
        [T('Nominativo'), '{αὐτός}', '{αὐτή}', '{αὐτό}'],
        [T('Genitivo'), '{αὐτοῦ}', '{αὐτῆς}', '{αὐτοῦ}'],
        [T('Dativo'), '{αὐτῷ}', '{αὐτῇ}', '{αὐτῷ}'],
        [T('Acusativo'), '{αὐτόν}', 'αὐτήν', '{αὐτό}'],
      ],
    },
  ],
};
