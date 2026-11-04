import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Pronomes e possessivos'),
  subtitle: T('εγώ — μου, σου, του'),
  section: T('O nome'),
  body: C(`## O verbo já diz quem é

Em grego, o pronome sujeito é quase sempre omitido, porque a forma verbal já carrega a pessoa: λέω «eu digo», λέεις «tu dizes», λέει «ele diz». O grego só mostra o pronome quando a pessoa precisa ser destacada: **έγώ** πολύ ἀγαπῶ «eu amo muito», em contraste com alguém que não ama.

Os pronomes pessoal são: ἐγώ, σύ, αὐτός/αὐτή/αὐτό, ἡμεῖς, ὑμεῖς, αὐτοί/αὐτές/αὐτά. Em grego moderno, σύ e αὐτός são raros na fala; o dialeto popular usa ένας/μία (uma pessoa) ou o verbo mesmo. Mas na escrita e na Bíblica, todos aparecem.

## Os possessivos são clíticos, não independentes

μου, σου, του, μας, σας, τους não são palavras: grudam no fim da palavra anterior. **το παιδί μου** «o meu filho» — μου vem colado ao substantivo. **δώσε μου** «dá-me» — colado ao verbo. Se a palavra seguinte começar por vogal, o acento muda: μου τοῦ παιδίο.

O grego antigo é diferente: ἡμῶν, σοῦ, αὐτοῦ, ἡμῶν, ὑμῶν, αὐτῶν são palavras cheias, e por isso podem vir antes do nome — Πάτερ ἡμῶν «Pai nosso». No grego moderno essa construção soa bíblica ou litúrgica, e é por isso que aparece em oração, não em conversa.

## Objeto indireto e direto

O objeto indireto usa με, σε, μας, σας: Μου λες την αλήθεια «Dizes-me a verdade». O objeto direto usa τον, την, το, τους, τις, τα: Βλέπω τον φίλο «Vejo o meu amigo». Os dois juntos: **μου** το δίνεις «dás-mo» — o indireto (μου) vem antes do direto (το), porque o indireto é clítico e vai para a primeira posição disponível.

## O que ler

Se uma frase grega tem pronome sujeito explícito, ou a pessoa está em contraste, ou a forma verbal não deixa dúvida. Se tem pronome possessivo no fim, ele pertence à palavra anterior. E se duas traduções colocam o pronome em posições diferentes, é por causa dessa ordem clítica, não por erro.`),
  vocab: [
    V('εγώ', 'εγώ', 'eu'),
    V('εσύ', 'εσύ', 'tu'),
    V('μου', 'εγώ', 'meu; a mim'),
    V('σου', 'εσύ', 'teu; a ti'),
    V('μας', 'εμείς', 'nosso; a nós'),
    V('του', 'αυτός', 'dele; a ele'),
    V('τη', 'αυτός', 'a; a ela'),
    V('με', 'εγώ', 'me; a mim'),
    V('εμείς', 'εμείς', 'nós'),
    V('εσείς', 'εσείς', 'vós'),
    V('σας', 'εσείς', 'seu; a vocês'),
    V('τους', 'αυτός', 'deles; os (artigo masc. pl.)'),
    V('αλήθεια', 'αλήθεια', 'verdade'),
    V('φίλος', 'φίλος', 'amigo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Onde vai μου?'),
    options: [T('antes do nome'), T('depois do nome'), T('antes do verbo'), T('so no fim')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ γυναίκα (minha mulher)'),
      answer: 'μου',
      hint: T(' possessivo de εγώ'),
    },
    {
      kind: 'choose',
      prompt: T('Completa: ___ λέει την αλήθεια.'),
      options: [T('μου'), T('σε'), T('τον'), T('τη')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Associar pronome e pessoa'),
      pairs: [
        { a: 'εγώ', b: '1ª sg.' },
        { a: 'εσείς', b: '2ª pl.' },
        { a: 'αυτός', b: '3ª sg.' },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('O possessivo vem depois do substantivo no uso moderno corriente.') }],
  notes: [
    {
      label: T('Registro'),
      text: T(
        'Πάτερ ημών pertenece al registro eleva lo oracional; no es la forma de todos los días.',
      ),
    },
  ],
  examples: [
    { text: 'ο πατέρας μου', gloss: T('meu pai') },
    { text: 'σε αγαπώ', gloss: T('amo-te') },
  ],
  tables: [
    {
      caption: T('Pronomes'),
      head: ['Singular', 'Plural'],
      rows: [
        ['αυτός/αυτή/αυτό', 'αυτοί/αυτές/αυτά'],
        ['του/της/τους', 'τους/των/τους'],
      ],
    },
  ],
};
