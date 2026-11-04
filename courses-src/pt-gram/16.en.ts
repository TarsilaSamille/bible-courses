import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  section: T('A flexão da palavra e a concordância'),
  title: T('Os verbos essenciais'),
  subtitle: T(
    'The irregulars that carry almost the whole text: {ir}, {vir}, {ser}, {estar}, {ter}, {fazer}, {dizer}',
  ),
  body: C(`**Visão geral.** A regular verb inflects by ending: in {criou}, {cria} and {criaram}, the stem {cria-} stays constant and only {-ou} changes. An irregular verb has no constant stem at all, and for that reason it is not learned by rule but whole.

There are few of them and they weigh a lot. {ser}, {estar}, {ter}, {haver}, {ir}, {vir}, {ver}, {fazer}, {dizer}, {saber}, {poder} and {querer} cover almost every clause that says something about somebody. The rest group by stem: {dormir}, {morrer}, {partir} and {abrir} lose the {i} in the participle, and that is a much smaller problem.

**Regra 1.** The irregulars of the present are twelve sets of forms that have to be memorized: {sou, és, é, somos, são}, {estou, estás, está, estamos, estão}, {tenho, tens, tem, temos, têm}, {vou, vais, vai, vamos, vão}, {venho, vens, vem, viemos, vêm}, {faço, fazes, faz, fazemos, fazem}, {digo, dizes, diz, dizemos, dizem}, {vejo, vês, vê, vemos, veem}, {sei, sabes, sabe, sabemos, sabem}, {posso, podes, pode, podemos, podem}, {quero, queres, quer, queremos, querem} and {há} with {hei}. It is the longest and most used list in the language.

**Regra 2.** Two forms belong to two verbs. {fui} is of {ser} and of {ir}: in {Eu fui ao templo} the verb is {ir}, in {Eu fui fiel} it is {ser}, and the form does not say which. {vou} is {ir} in the first person of the present and also {ir} plus an infinitive: {vou partir} is future, {vou à cidade} is present, and what follows the verb is what tells the two uses apart.

**Regra 3.** The {tu} imperative drops the final {s} in three verbs: {vai}, {vê} and {diz}. Old Portuguese and European Portuguese keep the {s} in {vais}, {ves} and {dizes}, and that is the form Almeida uses. In {Vai e diz a eles}, {vai} and {diz} are verb forms, second person, imperative mood, present tense.

**Regra 4.** {estar} has a preterite of its own: {estive, estiveste, esteve, estivemos, estiveram}. {Eu estive lá} and {Eu fui lá} are not synonyms, and the second one is {ir}. {ser} and {fazer} share the preterite, and {fora} is the third person of both: {ela fora útil} is {ser}, {ela fora a obra} is {fazer}.

**Aplicação.** In {No princípio {era} o Verbo, e o Verbo {estava} com Deus, e o Verbo {era} Deus}, there are four essential verbs in one sentence. {era} twice, from {ser} in the imperfect, and {estava}, from {estar} in the imperfect. Greek has a single verb, {ἦν}, and the translation split one into two; the distinction Brazilian Portuguese draws between {ser} and {estar} is recent and was not available to whoever translated it.

**Verificação.** In front of an irregular form, ask: what is the **stem** ({vou}, {venho})? Which **tense** is it in ({fui}, {vou}, {vai})? Is the **person** {tu}, {ele} or {eles}? Is the form **common** or **exclusive to one verb**, like {estive}? And does the **sentence** confirm it? Without the last question, {fui} still has no owner.`),
  vocab: [
    V('ir', 'ir', 'motion verb'),
    V('vir', 'vir', 'motion verb'),
    V('ser', 'ser', 'verb of identity'),
    V('estar', 'estar', 'verb of state'),
    V('ter', 'ter', 'verb of possession'),
    V('haver', 'haver', 'verb of existence and of time'),
    V('fazer', 'fazer', 'verb of action'),
    V('dizer', 'dizer', 'verb of speech'),
    V('ver', 'ver', 'verb of perception'),
    V('saber', 'saber', 'verb of knowledge'),
    V('poder', 'poder', 'verb of possibility'),
    V('querer', 'querer', 'verb of will'),
    V('fui', 'ser', 'form of {ser} and of {ir}'),
    V('estive', 'estar', 'preterite of {estar}'),
    V('vai', 'ir', 'present and imperative of {ir}'),
    V('diz', 'dizer', 'present and imperative of {dizer}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The twelve irregulars of the present are {sou}, {estou}, {tenho}, {vou}, {venho}, {faço}, {digo}, {vejo}, {sei}, {posso}, {quero} and {há}. None of them is deduced from another.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{fui} belongs to {ser} and to {ir}: {Eu fui ao templo} is {ir}, {Eu fui fiel} is {ser}. {vou} is {ir} in the first person and {ir} plus an infinitive, and what follows the verb tells the two uses apart.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The {tu} imperative of {ir}, {ver} and {dizer} is {vai}, {vê} and {diz}, without the {s}. With the {s} ({vais}, {ves}, {dizes}) it is the form of Old Portuguese and of Almeida.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{estar} in the preterite is {estive}, {estiveste}, {esteve}, and never {fui}: {Eu estive lá} is {estar}, {Eu fui lá} is {ir}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'In {No princípio era o Verbo}, the two {era} are {ser} and the {estava} is {estar}. Greek has a single verb, {ἦν}, and the split into two is Portuguese.',
      ),
    },
  ],
  notes: [
    {
      label: T('The {fora} that serves two verbs'),
      text: T(
        '{fora} is the third person of the preterite both of {ser} ({ela fora útil}) and of {fazer} ({ela fora a obra}). In old translations the verb {fazer} followed by {obras} appears almost as often as the noun does, and reading {fora} as {ser} changes what the sentence says happened.',
      ),
    },
    {
      label: T('{ser} in the past with a numeral'),
      text: T(
        'In Old Portuguese, {ser} in the past before a numeral gives the sum: {fora cinquenta}, "fifty". That is why Latin {fuit} shows up in the Psalms before any noun at all. The numeral comes before what it names, and the verb form is what reveals it.',
      ),
    },
  ],
  examples: [
    {
      text: 'No princípio era o Verbo.',
      gloss: T('{era}: {ser} in the imperfect, third person singular.'),
    },
    {
      text: 'O Verbo estava com Deus.',
      gloss: T('{estava}: {estar} in the imperfect, third person singular.'),
    },
    { text: 'Eu fui ao templo.', gloss: T('{fui} of {ir}: the place answers {where to?}.') },
    { text: 'Eu fui fiel.', gloss: T('{fui} of {ser}: what is asserted is a quality.') },
    {
      text: 'Eu estive com eles.',
      gloss: T('{estive} is of {estar}, and the place is the same as {fui}.'),
    },
    { text: 'Vai e diz a eles.', gloss: T('Two {tu} imperatives without the {s}, as in Almeida.') },
    { text: 'vou partir', gloss: T('{ir} plus an infinitive: future value.') },
    { text: 'Haja luz.', gloss: T('{haja} is the subjunctive of {haver}, Gen 1:3.') },
    {
      text: 'Não tenho mais nada.',
      gloss: T('{tenho} in the present; in the preterite it would be {não tive}.'),
    },
  ],
  tables: [
    {
      caption: T('The irregulars of the present, person by person'),
      head: [T('Verbo'), T('1.ª sing.'), T('3.ª sing.'), T('1.ª pl.'), T('3.ª pl.')],
      rows: [
        [T('{ser}'), T('{sou}'), T('{é}'), T('{somos}'), T('{são}')],
        [T('{estar}'), T('{estou}'), T('{está}'), T('{estamos}'), T('{estão}')],
        [T('{ter}'), T('{tenho}'), T('{tem}'), T('{temos}'), T('{têm}')],
        [T('{ir}'), T('{vou}'), T('{vai}'), T('{vamos}'), T('{vão}')],
        [T('{vir}'), T('{venho}'), T('{vem}'), T('{viemos}'), T('{vêm}')],
        [T('{fazer}'), T('{faço}'), T('{faz}'), T('{fazemos}'), T('{fazem}')],
        [T('{dizer}'), T('{digo}'), T('{diz}'), T('{dizemos}'), T('{dizem}')],
        [T('{ver}'), T('{vejo}'), T('{vê}'), T('{vemos}'), T('{veem}')],
      ],
    },
    {
      caption: T('The preterite of the same ones'),
      head: [T('Verbo'), T('1.ª sing.'), T('3.ª sing.'), T('1.ª pl.'), T('3.ª pl.')],
      rows: [
        [T('{ser}'), T('{fui}'), T('{foi}'), T('{fomos}'), T('{foram}')],
        [T('{ir}'), T('{fui}'), T('{foi}'), T('{fomos}'), T('{foram}')],
        [T('{estar}'), T('{estive}'), T('{esteve}'), T('{estivemos}'), T('{estiveram}')],
        [T('{ter}'), T('{tive}'), T('{teve}'), T('{tivemos}'), T('{tiveram}')],
        [T('{fazer}'), T('{fiz}'), T('{fez}'), T('{fizemos}'), T('{fizeram}')],
        [T('{dizer}'), T('{disse}'), T('{disse}'), T('{dissemos}'), T('{disseram}')],
      ],
    },
    {
      caption: T('The {tu} imperative: where the {s} disappears'),
      head: [T('Verbo'), T('Almeida'), T('Português europeu'), T('Erro comum no Brasil')],
      rows: [
        [T('{ir}'), T('{vai}'), T('{vais}'), T('Com {s}')],
        [T('{ver}'), T('{vê}'), T('{ves}'), T('Com {s}')],
        [T('{dizer}'), T('{diz}'), T('{dizes}'), T('Com {s}')],
        [T('{fazer}'), T('{faz}'), T('{fazes}'), T('Com {s}')],
        [T('{comer}'), T('{come}'), T('{comes}'), T('Com {s}')],
        [T('{dar}'), T('{dá}'), T('{dás}'), T('Com {s}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Eu fui ao templo}, the verb {fui} is:'),
    options: [
      T('{ir}, because there is a place of destination'),
      T('{ser}, because it is a preterite'),
      T('{ir} and {ser} at once, with no way to decide'),
      T('{ficar}, because of {templo}'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('The preterite of {estar} in the first person singular is ______.'),
      answer: 'estive',
      hint: T('It is not {fui}: {fui} is of {ser} and of {ir}.'),
    },
    {
      kind: 'match',
      prompt: T('Match the form to the irregular verb behind it.'),
      pairs: [
        { a: T('{viemos}'), b: T('{vir}') },
        { a: T('{fiz}'), b: T('{fazer}') },
        { a: T('{disse}'), b: T('{dizer}') },
        { a: T('{estivemos}'), b: T('{estar}') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'choose',
      prompt: T('What is the {tu} imperative of {ir} in Almeida?'),
      options: [T('{vais}'), T('{vai}'), T('{vá}'), T('{vou}')],
      answer: 1,
      hint: T('Three verbs drop the final {s}, and {ir} is one of them.'),
    },
  ],
};
