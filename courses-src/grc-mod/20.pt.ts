import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('Pronome'),
  title: T('Pronomes: pessoa, posse, apontar, perguntar'),
  subtitle: T('ο διδάσκαλός μου — αυτός — εκείνος — ποιος'),
  body: C(`## O possessivo vem depois

**{μου}, {σου}, {μας}, {σας} não são palavras autônomas**: grudam na palavra anterior e mudam de acento conforme o que encontra. Duas construções, mesmo sentido: {ο διδάσκαλός μου} e {μου διδάσκαλός}. A segunda é rara e enfática; a primeira é a normal.

O possuidor de um substantivo é o único possessivo que flexiona em gênero. {του}, {της}, {του} vêm da fusão de {τού} com o artigo, e é por isso que {του} faz duas coisas: «o meu» e «de». Um pronome e uma preposição na mesma forma.

## αυτός é forte, εκείνος é fraco

O sistema demonstrativo tem duas séries. A forte é {αυτός}, {αυτή}, {αυτό}, mais {τούτος} e {αυτούτος}, com {τ-} à frente. A fraca é {εκείνος}, {εκείνη}, {εκείνο}, com {κ-}. A forte aponta para o que está perto ou para o que se acabou de dizer; a fraca aponta para o que está longe ou para o que se sabe de outra fonte.

No uso restrito de hoje, só o par {αυτός} e {εκείνος} sobrevive, e a distinção é de contexto e não de distância: {αυτός} introduz quem entra em cena, {εκείνος} introduz quem já estava em cena. {Αυτός είναι ο φίλος μου}, «este aqui é o meu amigo». Trocar um pelo outro muda a história, não só o tom.

## Perguntar pessoa, perguntar coisa, e depois

O grego separa duas perguntas que o português junta em uma só. {ποιος} é masculino e pergunta por uma pessoa: {ποιος είναι αυτός;}, «quem é ele?». {τι} é neutro e pergunta por uma coisa: {τι είναι αυτό;}, «o que é isto?». Nenhum dos dois flexiona.

A distinção é produtiva. {Ποιος έφαγε το φαγητό;} pergunta quem foi o agente. {Τι έφαγε ο Γιώργος;} pergunta o que foi a comida. Com o mesmo verbo e a mesma estrutura sintática, o grego muda a resposta só por causa da palavra.

E há um segundo par, que é de tipo e não de identidade: {ποιο είδους} não existe no grego moderno, e no lugar dele se usa {τι είδους}. Quem traduz do latim procura {ποιο} para dizer «de que tipo» e encontra {τι είδους}, que é a fórmula.
{που} é o relativo do grego moderno, e não flexiona: {ο φίλος που έρχεται}, «o amigo que vem». Ele vale para pessoa e para coisa, e é por isso que o grego não distingue «cujo» de «que» como o português distingue.

O que não se pode é tratar {ότι} como {που}. {Πιστεύω ότι έρχεται} é uma oração declarativa inteira: o verbo {έρχεται} está fora do relativo. {Πιστεύω που έρχεται} não significa nada, porque o {που} exige um substantivo antes. A diferença é gramatical, não de estilo.

## Onde os pronomes aparecem na Bíblia

> Ἐγώ εἰμι τὸ φῶς τοῦ κόσμου· ὁ ἀκολουθῶν ἐμοὶ οὐ μὴ περιπατήσῃ ἐν τῇ σκοτίᾳ, ἀλλ᾽ ἕξει τὸ φῶς τῆς ζωῆς.

{Ἐγώ} aparece sozinho, sem verbo conjugado à vista, e isso é permitido: o verbo {ἐστί} foi absorvido por {εἰμί}, que é mais forte que qualquer forma verbal. O {μοι} enclítico vem depois de {ἀκολουθῶν} e pertence a {ἐμοί}: a pessoa que segue o verbo, não a que está em pé na frase. É o possessivo na sua forma mais pura: colado ao verbo que vem logo antes. `),
  vocab: [
    V('ο διδάσκαλός μου', 'ο διδάσκαλός μου', 'o meu professor'),
    V('μου', 'μου', 'meu, de mim'),
    V('σου', 'σου', 'teu, de ti'),
    V('μας', 'μας', 'nosso'),
    V('σας', 'σας', 'vosso'),
    V('αυτός', 'αυτός', 'este, este mesmo'),
    V('εκείνος', 'εκείνος', 'aquele'),
    V('τούτος', 'τούτος', 'este (literário)'),
    V('ποιος', 'ποιος', 'quem; qual'),
    V('τι', 'τι', 'o quê; que'),
    V('που', 'που', 'que (relativo)'),
    V('ότι', 'ότι', 'que (oração)'),
    V('ο φίλος', 'φίλος', 'o amigo'),
    V('το φαγητό', 'το φαγητό', 'a comida'),
    V('πιστεύω', 'πιστεύω', 'creio'),
    V('ο Γιώργος', 'ο Γιώργος', 'o Jorge'),
  ],
  rules: [
    { n: '§1', text: T('O possessivo μου/σου/μας/σας vem depois da palavra que ele modifica.') },
    {
      n: '§2',
      text: T('αυτός é a série forte e εκείνος a fraca: a primeira introduz, a segunda remete.'),
    },
    {
      n: '§3',
      text: T('ποιος pergunta por uma pessoa, τι por uma coisa, e nenhum dos dois flexiona.'),
    },
    {
      n: '§4',
      text: T('που é relativo e ότι é complemento de verbo: as duas frases são diferentes.'),
    },
  ],
  notes: [
    {
      label: T('Dativo'),
      text: T(
        'μου, σου, μας e σας são as quatro palavras que sobraram do dativo grego. Continuam clíticas, perdem o acento e mudam de forma conforme a palavra seguinte.',
      ),
    },
    {
      label: T('Koiné'),
      text: T(
        'ἐμοί e σοί na Bíblia são formas do grego antigo, com acento próprio e flexão completa. O grego moderno reduziu tudo a μου e σου, que são enclíticos e não se movem.',
      ),
    },
  ],
  examples: [
    { text: 'ο διδάσκαλός μου έρχεται', gloss: T('o meu professor vem') },
    { text: 'οι γονείς σου έχουν έρθει', gloss: T('os teus pais vieram') },
    { text: 'αυτός είναι ο φίλος μου', gloss: T('este aqui é o meu amigo') },
    { text: 'εκείνος έφυγε χθες', gloss: T('aquele saiu ontem') },
    { text: 'ποιος είναι αυτός;', gloss: T('quem é ele?') },
    { text: 'τι είναι αυτό;', gloss: T('o que é isto?') },
    { text: 'ο φίλος που έρχεται', gloss: T('o amigo que vem') },
    { text: 'πιστεύω ότι έρχεται', gloss: T('creio que ele vem') },
  ],
  tables: [
    {
      caption: T('Pessoais e posses correspondentes'),
      head: ['Πρόσωπο', 'Ονομαστική', 'Κλητική', 'Αιτιατική'],
      rows: [
        ['πρώτο', 'εγώ', 'εμένα', 'εγώ'],
        ['δεύτερο', 'εσύ', 'εσένα', 'εσύ'],
        ['τρίτο', 'αυτός', 'αυτόν', 'αυτός'],
      ],
    },
    {
      caption: T('Determinantes interrogativos'),
      head: ['Λέξη', 'Λειτουργία'],
      rows: [
        ['ποιος', 'άνθρωπος'],
        ['τι', 'πράγμα'],
        ['πού', 'τόπος'],
        ['πότε', 'χρόνος'],
        ['πόσο', 'ποσότης'],
        ['πώς', 'τρόπος'],
      ],
    },
    {
      caption: T('As duas séries demonstrativas'),
      head: ['Σειρά', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['ισχυρή', 'αυτός', 'αυτή', 'αυτό'],
        ['ασθενής', 'εκείνος', 'εκείνη', 'εκείνο'],
        ['λόγιο', 'τούτος', 'αύτη', 'τούτο'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual palavra pergunta por uma pessoa?'),
    options: [T('τι'), T('ποιος'), T('που'), T('ότι')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('ο διδάσκαλός ___ έρχεται (possessivo)'),
      answer: 'μου',
      hint: T('Clítico de primeira pessoa'),
    },
    {
      kind: 'choose',
      prompt: T('Qual pronome introduz quem remete a algo já conhecido?'),
      options: [T('αυτός'), T('εκείνος'), T('τούτος'), T('ποιος')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Pergunta correspondente'),
      pairs: [
        { a: 'ποιος', b: T('quem') },
        { a: 'τι', b: T('o quê') },
        { a: 'πώς', b: T('como') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('___ είναι αυτό; (indique a palavra grega que pergunta por pessoa)'),
      answer: 'Ποιος',
      hint: T('Primeira letra maiúscula'),
    },
  ],
};
