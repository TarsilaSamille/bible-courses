import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('{tu} e {vous}'),
  subtitle: T('registro, número e o tratamento entre pessoas'),
  section: T('Os pronomes'),
  body: C(`## Duas palavras, três funções

{tu} é singular e familiar. {vous} é plural, ou singular e formal. O francês não tem pronome neutro para «você»: a oposição se resolve pela relação, não pelo número.

A escolha nunca é literal. Não se traduz {you} por {tu} só porque a pessoa é única. Depende de quatro coisas: **a idade**, o **cargo**, o **grau de intimidade** e o **gênero do interlocutor** — porque um mesmo {vous} atende a um homem e a uma mulher, coisa que {tu} não faz.

- {Tu es mon ami.} «Você é meu amigo.» — dois iguais, mesma idade, porta aberta.
- {Vous êtes mon professeur.} «O senhor é meu professor.» — um aluno para o professor, qualquer um para o desconhecido.

## O verbo denuncia a forma

Quando {vous} é plural, o verbo é de 3.ª pessoa do plural: {vous priez} «vocês oram», {vous êtes} «vocês estão», {ils prient} «eles oram». Repare que {vous priez} e {vous prie} são frases diferentes — a primeira é a 2.ª pessoa de cortesia, a segunda é a 3.ª pessoa do singular.

O imperativo de {vous} termina em *-ez*: {parlez} «falem», {écrivez} «escrevam», {priez} «orem». O mesmo vale para o condicional: {vous parleriez} «falariam».

## A troca de registro

O francês tem fórmulas prontas para mudar de tratamento:

- {On se tutoie ?} «Podemos nos tratar por tu?» — a pergunta na mesa, de resposta coletiva.
- {Je peux vous tutoyer ?} «Posso falar com o senhor por tu?» — a mais natural das duas.
- {Pouvez-vous me tutoyer ?} «O senhor pode me tratar por tu?» — exige resposta explícita.

E o vocabulário: **{tutoiement}** é o tratamento por {tu}, **{vouvoiement}** é o tratamento por {vous}. O primeiro é o padrão na rua, em casa, entre amigos; o segundo, no trabalho, no banco, no consultório, no tribunal.

## Leitura — Louis Segond

A oração francesa não usa {vous} com Deus. O Padre nosso abre com **{Notre Père, qui es aux cieux}** «Pai nosso, que estás nos céus» — {tu} e o presente {es}. **{Que ton nom soit sanctifié}** «Santificado seja o teu nome» mantém {ton}, de {ta}, {tes}, todos na 2.ª pessoa do singular.

Isso não é arbitrário. O texto bíblico traduz o hebraico do tratamento dirigido a Deus, que é categórico: a posição de tratamento é sempre de 2.ª pessoa. Um **{vous}** em oração soaria estranho, e por isso o leitor francês não o faz.

O interessante acontece nos textos de **narração**, em 3.ª pessoa: **{il leur a parlé}** «ele lhes falou», **{il les a vus}** «ele os viu**. Ali {les} e {leur} são objeto direto e indireto, e confundi-los com {leurs}, o possessivo, é o erro mais comum de quem aprende.

## O essencial

{tu} é sempre singular e sempre familiar. {vous} é sempre formal ou plural, e o verbo denuncia qual dos dois é: {vous êtes} é ambíguo, {vous priez} é plural, {vous prie} é cortesia. Errar o registro não impede a compreensão — só faz você soar distante, grosseiro, ou estranho.`),
  vocab: [
    V('tu', 'tu', 'você (singular, familiar)'),
    V('vous', 'vous', 'você/vocês: formal singular ou plural'),
    V('tu es', 'être', 'você é (familiar)'),
    V('vous êtes', 'être', 'você é / vocês são (ambíguo)'),
    V('vous priez', 'prier', 'vocês oram / ore (plural e cortesia)'),
    V('parlez', 'parler', 'falem! (imperativo de {vous})'),
    V('tutoiement', 'tutoiement', 'tratamento por {tu}'),
    V('vouvoiement', 'vouvoiement', 'tratamento por {vous}'),
    V('se tutoyer', 'tutoyer', 'tratar-se por {tu}'),
    V('on se tutoie ?', 'tutoyer', 'podemos nos tratar por {tu}?'),
    V('votre professeur', 'professeur', 'o seu professor'),
    V('mon ami', 'ami', 'meu amigo (masculino)'),
    V('Notre Père', 'Père', 'Pai nosso (oração)'),
    V('qui es aux cieux', 'ciel', 'que estás nos céus ({tu})'),
    V('ton nom', 'nom', 'o teu nome ({ton})'),
    V('il leur a parlé', 'parler', 'ele lhes falou ({leur} = objeto indireto)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'Num banco, um desconhecido diz «Bonjour, ___ avez le reçu du mois?». Qual preenchimento está correto?',
    ),
    options: [
      T('{vous} — o desconhecido e o atendente não se conhecem'),
      T('{tu} — o caixa é amigo íntimo do atendente'),
      T('{vous as} — forma inexistente em francês'),
      T('{vous} — mas o verbo deveria ser {as}'),
    ],
    answer: 0,
    hint: T(
      'Instituição mais desconhecido pede {vous} formal singular, e o verbo também assume a forma de {vous}.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Imperativo de {parler} na 2.ª pessoa do plural, sem *-s*: vous ___ parler.'),
      answer: 'parlez',
      hint: T('No grupo 1, a forma de {vous} troca o *-r* final por *-z*.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase só pode ser {vous} por cortesia, e nunca plural?'),
      options: [
        T('{Vous êtes mon professeur.} — o substantivo está no singular'),
        T('{Vous êtes mes professeurs.} — {mes} já marca o plural'),
        T('{Vous êtes ready.} — o adjetivo inglês denuncia o plural'),
        T('{Vous suis.} — forma inexistente que prova a ambiguidade'),
      ],
      answer: 0,
      hint: T('Procure um substantivo no singular com {votre} e um verbo em *-ez*.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a situação ao tratamento correto'),
      pairs: [
        { a: T('um colega de trabalho da mesma idade'), b: T('{tu} — igualdade e confiança') },
        { a: T('o tabelião num ato oficial'), b: T('{vous} — instituição e distância') },
        { a: T('a avó, em casa'), b: T('{vous} — cuidado, não intimidade') },
        { a: T('Deus, na oração'), b: T('{tu} — o tratamento bíblico é de 2.ª pessoa') },
        { a: T('um grupo de dez amigos'), b: T('{vous} — plural, com tom de grupo') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{tu} nunca é plural nem formal. Havendo duas ou mais pessoas, é {vous}, mesmo que todas tenham dez anos.',
      ),
    },
    {
      n: '2',
      text: T(
        '{vous} é ambíguo em número; o verbo desambigua: {vous êtes} pode ser uma ou duas pessoas, {vous priez} só pode ser duas ou uma por cortesia.',
      ),
    },
    {
      n: '3',
      text: T(
        'O imperativo de {vous} sai sempre em *-ez* ({parlez}, {finissez}) ou em *-s* ({sois}, {prends}): é o único ponto em que a forma de {vous} se parece com a de {il/elle}.',
      ),
    },
    {
      n: '4',
      text: T(
        'A oração e o texto bíblico usam {tu} com Deus, porque o tratamento é sempre de 2.ª pessoa. Fora da oração o tratamento é livre, e hoje {vous} é cada vez mais comum nos cultos.',
      ),
    },
    {
      n: '5',
      text: T(
        'Em 3.ª pessoa, {les} é objeto direto, {leur} é objeto indireto e o possessivo é {leurs}, com *-s*. Confundir os três é o erro mais comum do capítulo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Um pronome sem gênero'),
      text: T(
        '{vous} não flexiona. O mesmo pronome cobre um homem e uma mulher, e o gênero volta no substantivo, que precisa concordar: {vous êtes un professeur} ou {vous êtes une professeure}. O verbo French também traz a marca: {vous êtes fatigué} «o senhor está cansado» e {vous êtes fatiguée} «a senhora está cansada» — o único sinal é o final do participio. Compare com o português, em que o gênero do interlocutor também desaparece.',
      ),
    },
    {
      label: T('Quando o {vous} é regional'),
      text: T(
        "No Québec, na Bélgica e na parte francófona da Suíça, {vous} é plural mesmo entre amigos e familiares: **{on s'est tutoyés dès l'enfance}** «a gente se tratou por tu desde a infância». Em Marselha, o mesmo episódio já seria {tu}. O francês não é o mesmo em toda a Europa: quem decide é o dialeto, e por isso o mesmo formulário pode exigir {vous} em Zurique e {tu} em Lyon.",
      ),
    },
  ],
  examples: [
    { text: 'Tu es mon ami.', gloss: T('você é meu amigo (igual, informal)') },
    { text: 'Vous êtes mon professeur.', gloss: T('o senhor é meu professor (formal)') },
    { text: 'Vous êtes à l’heure.', gloss: T('estão na hora (uma ou várias pessoas)') },
    { text: 'Vous priez pour lui.', gloss: T('vocês oram por ele / ore por ele (cortesia)') },
    {
      text: 'Parlez plus lentement, s’il vous plaît.',
      gloss: T('falem mais devagar, por favor (imperativo)'),
    },
    { text: 'Pouvez-vous me tutoyer ?', gloss: T('o senhor pode me tratar por tu?') },
    { text: 'On se tutoie, entre nous.', gloss: T('a gente se trata por tu, entre nós') },
    {
      text: 'Notre Père, qui es aux cieux',
      gloss: T('Pai nosso, que estás nos céus ({tu} na oração)'),
    },
    { text: 'Que ton nom soit sanctifié', gloss: T('Santificado seja o teu nome ({ton})') },
    { text: 'il leur a parlé', gloss: T('ele lhes falou ({leur} = objeto indireto)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — {tu} e {vous} no presente'),
      head: [T('Pessoa'), T('Singular familiar'), T('Formal ou plural')],
      rows: [
        ['1.ª', T('{je suis}'), T('{vous êtes} — formal')],
        ['2.ª', T('{tu es} — tu'), T('{vous êtes} — ambíguo')],
        ['3.ª', T('{il est}'), T('{vous êtes} — plural')],
        ['Imperativo', T('{sois} ({sois sage})'), T('{soyez} ({soyez sages})')],
      ],
    },
    {
      caption: T('Tabela 2 — {être} e {avoir} com {tu} e {vous}'),
      head: [T('Verbo'), T('{tu}'), T('{vous}')],
      rows: [
        ['{être}', T('{es}'), T('{êtes} — formal ou plural')],
        ['{avoir}', T('{as}'), T('{avez} — formal ou plural')],
        ['{pouvoir}', T('{peux}'), T('{pouvez}')],
        ['{devoir}', T('{dois}'), T('{devez}')],
      ],
    },
  ],
};
