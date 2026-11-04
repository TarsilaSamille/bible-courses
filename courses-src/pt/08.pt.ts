import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Imperativo'),
  subtitle: T('fala, fale, falai'),
  section: T('O verbo: os modos'),
  body: C(`## Três registros, três formas

O imperativo português mudou de forma três vezes na história, e o português bíblico ficou com as três. O tu afirmativo usa o presente: {fala}, {crê}, {parte}. O você, mais formal, usa o presente do subjuntivo: {fale}, {creia}, {parta}. E o plural pode usar {falai} (Portugal antigo), {crede} (Portugal atual) ou {falem} (Brasil), conforme o registro.

Repare no que muda e no que não muda: o verbo vai do presente ao subjuntivo, mas o pronome some. Ninguém diz «fala tu» nem «fale você» na ordem normal: o pronome é clítico e vai para antes do verbo — fala-me, fale-me. O italiano tem a mesma estrutura (lição 10), e por isso a tradução do grego e do hebraico para português costuma errar justamente aqui.

## O negativo não é "não" mais nada

O negativo normalmente usa o **subjuntivo**: {não fales}, {não venha}, {não vá}. E na fala brasileira, um não forte: {não fale agora}, {nem fala}. O ponto é que {não falas} é raro e arcaizante; o registro corrente é {não fales}, e é essa forma que a Bíblia preserva.

Dois imperativos são **irregulares** e precisam ser aprendidos: o {tem} de *ter, tomar* e o {vem} de *vir*. Não há regra que os produza — {tem} vem do latim *tene*, {vem} de *veni* — e o português bíblico mantém essa irregularidade como sinal de arcaísmo.

## O português bíblico guarda as formas antigas

{ide} em Marcos 16.15 e {amai-vos} em João 13.34 são as duas marcas mais visíveis. {Ide} é a forma antiga de "vai" no plural, hoje "vai-vos" ou "idai"; {amai-vos} mantém o pronome reflexivo explícito, que o português moderno perdeu.

Esses dois exemplos não são arbitrariedades. O grego de Marcos 16.15 (πορεύεσθε) e o grego de João 13.34 (ἀγαπᾶτε ἀλλήλους) pedem explicitamente a relação e a direção, e o português antigo {amai-vos} diz exatamente isso: «amem uns aos outros». Traduzir por «amem» perde o **-vos** e com ele a mutualidade.

## O que ler

Se o verbo estiver no imperativo, pergunte três coisas: quem é o tu (tu, você, vocês)? O verbo é afirmativo ou negativo? E há pronome explícito? Um {amai-vos} tem os três: os três pronomes implícitos, o verbo afirmativo e o -vos explícito. É por aí que a leitura bíblica ganha sentido.`),
  vocab: [
    V('fala', 'falar', 'fala!'),
    V('fale', 'falar', 'fale!'),
    V('falai', 'falar', 'falai!'),
    V('não fales', 'falar', 'não fales!'),
    V('amai-vos', 'amar', 'amai-vos!'),
    V('vinde', 'vir', 'vinde!'),
    V('ide', 'ir', 'ide!'),
    V('vem', 'vir', 'vem!'),
    V('dize', 'dizer', 'dize!'),
    V('crede', 'crer', 'crede!'),
    V('falem', 'falar', 'falem!'),
    V('tem', 'ter', 'tem! (imperativo irregular)'),
    V('você', 'você', 'você (tratamento formal)'),
    V('mundo', 'mundo', 'mundo (em “Ide por todo o mundo”)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se diz “fala!” no plural brasileiro?'),
    options: [T('falas'), T('falai'), T('fale'), T('falaram')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “não ___ (falar)”.'),
      answer: 'fales',
      hint: T('Imperativo negativo usa o subjuntivo.'),
    },
    {
      kind: 'choose',
      prompt: T('Em João 13.34, “amai-vos” significa:'),
      options: [T('amem-se uns aos outros'), T('amar-vos'), T('amem-nos'), T('me amai')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue pessoa e forma.'),
      pairs: [
        { a: T('tu'), b: T('fala') },
        { a: T('você'), b: T('fale') },
        { a: T('plural'), b: T('falai') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O {tu} affirmativo usa o presente ({fala}, {crê}, {parte}), o {você} usa o presente do subjuntivo ({fale}, {creia}, {parta}) e o plural usa {falai} em Portugal antigo, {crede} em Portugal atual e {falem} no Brasil.',
      ),
    },
    {
      n: '§2',
      text: T(
        'O imperativo negativo é {não} mais subjuntivo em todas as pessoas: {não fales}, {não fale}, {não falem}. {Não falas} é arcaizante, e é a forma {não fales} que o grego (μὴ λάλησῃς) exige.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O pronome vai para antes do verbo e some da posição de sujeito: ninguém diz {fala tu} nem {fale você}. Com o clítico, {fala-me} e {fale-me} são a mesma ordem do pronome em português.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{tem} e {vem} são os dois imperativos irregulares que nenhuma regra produz: {tem} vem do latim {tene} e {vem} de {veni}. {Ten} e {ven} são as formas regulares do subjuntivo, não do imperativo.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{ide} e {amai-vos} conservam o pronome explícito: {ide} é o plural antigo de {vai} sem {vai-vos}, e {amai-vos} mantém o {vos} reflexivo que o português moderno perdeu. Traduzir por {vão} e {amem} perde os dois pronomes.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        '{Ide por todo o mundo} é formulação bíblica; o português de hoje diz “vão e façam discípulos”. O que se perde é o pronome, não o sentido.',
      ),
    },
    {
      label: T('A escolha do registro'),
      text: T(
        'Num texto dirigido ao público europeu, {falai} e {ide} são os naturais; num texto para o Brasil, {falem} e {vão}. A escolha é de registro, e o grego não decide qual dos dois é o certo.',
      ),
    },
  ],
  examples: [
    { text: 'Fala, e ninguém te ouve.', gloss: T('Imperativo de {tu}: presente {fala}.') },
    { text: 'Fale a verdade.', gloss: T('Imperativo de {você}: subjuntivo {fale}.') },
    { text: 'Não fales isso.', gloss: T('Negativo: {não} mais subjuntivo {fales}.') },
    { text: 'Ide por todo o mundo.', gloss: T('Plural antigo de Portugal, com pronome omitido.') },
    { text: 'Amai-vos uns aos outros.', gloss: T('O {vos} explícito é o que faz o mutual.') },
    { text: 'Crede em Cristo.', gloss: T('Plural de Portugal atual: {crede}, sem {vós}.') },
    {
      text: 'Tem olho para quem está.',
      gloss: T('{tem}: imperativo irregular de {ter}, latim {tene}.'),
    },
    { text: 'Vem e vê.', gloss: T('{vem}: imperativo irregular de {vir}, latim {veni}.') },
    {
      text: 'Não vos esqueçais uns dos outros.',
      gloss: T('Negativo do plural com pronome explícito.'),
    },
  ],
  tables: [
    {
      caption: T('Imperativo por pessoa e registro'),
      head: ['Pessoa', 'Afirmativo', 'Negativo'],
      rows: [
        ['tu', 'fala', 'não fales'],
        ['você', 'fale', 'não fale'],
        ['plural (Portugal antigo)', 'falai', 'não falais'],
        ['plural (Brasil)', 'falem', 'não falem'],
      ],
    },
    {
      caption: T('Os dois irregulares que nenhuma regra produz'),
      head: ['Imperativo', 'Latim', 'Regular seria'],
      rows: [
        ['tem', 'tene', 'tenha'],
        ['vem', 'veni', 'venha'],
      ],
    },
    {
      caption: T('Pronome: explícito e implícito'),
      head: ['Forma', 'Pronome', 'O que se perde'],
      rows: [
        ['ide', 'implícito', 'o {vai} plural'],
        ['amai-vos', 'explícito (-vos)', 'o mutual'],
        ['falem', 'implícito', 'o {vocês}'],
      ],
    },
  ],
};
