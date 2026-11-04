import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  section: T('O verbo'),
  title: T('Os modos: o que o grego ainda escolhe'),
  subtitle: T('θέλω να — να μην — είθε'),
  body: C(`## Quatro modos, dois vivos

O grego moderno conserva quatro modos: indicativo, subjuntivo, imperativo e um resto do optativo. O indicativo é o modo da coisa afirmada, e é o padrão. O imperativo é o modo da ordem. O subjuntivo é o modo do que não é fato.

O optativo não tem forma própria. O que sobrou dele são três expressões fixas, e é o único modo que o aprendiz pode ignorar: {είθε}, «é costume», {χρειάζεται}, «é preciso», {ἔδει}, «era preciso». As três vêm do grego antigo e soam arcaico.

## Os modos vivos e o modo morto

O indicativo não tem partícula. É o que aparece quando o verbo está falando de um fato: {Γράφω}, {Έγραψα}, {Έρχεται}. Quando o grego coloca uma partícula, {να} ou {θα}, está deixando o indicativo de fora.

Isso significa que a presença de {να} é o sinal, e a ausência é o padrão. Um texto grego é uma sequência de indicativos com {να} espalhado no meio, e é por isso que o modo se reconhece pela marca e não pela terminação.

## να é a única coisa que o aprendiz precisa

{να} introduz a oração que não é fato: {θέλω να μιλήσω}, «quero falar», {πρέπει να φύγω», «tenho de sair». O verbo que segue é o subjuntivo, e a forma é a mesma do futuro sem {θα}: {μιλήσω}, {φύγω}.

Duas regras resolvem quase tudo — e a segunda resolve mais que a primeira. A primeira: {να} aparece depois de verbo de vontade, de necessidade e de possibilidade, e a lista é curta. A segunda: o verbo depois de {να} é o aoristo, mesmo quando o verbo principal está no passado, {θέλω να έρθει}, «quero que venha».

A combinação {να} mais {θα} não existe. {Θα να έρθει} é errado, e {να έρθει} é certo. São dois marcadores para a mesma ideia, e o grego escolhe um.

## να μην é a negação do subjuntivo

**A negação de {να} é {να μην}, e a ordem é fixa**: {να} primeiro, {μην} depois. {Δεν θέλω να μην έρθει}, «não quero que venha». A chave é ver que {μην} aqui não é a proibitiva: é a negação do próprio {να}, e por isso ela aparece depois de {να} e não antes do verbo.

É a construção mais confundida por quem está aprendendo. O grego tem duas negativas com nomes parecidos: a do indicativo, que é {δεν} e vem antes do verbo, e a do subjuntivo, que é {μην} e vem depois de {να}. Quem escreve {δεν θέλω μην να έρθει} juntou as duas e produziu uma frase que ninguém diz.

Depois de {όταν}, {αν}, {πριν}, {αφού} e {ενώ}, o verbo grego vai no que o leitor reconhece como futuro, mas que é o aoristo: {Όταν έρθει}, «quando vier», {Πριν φύγει}, «antes que vá». O grego antigo tinha futuro subjuntivo e o moderno perdeu a diferença: os dois viraram {μιλήσω}.
O resultado é que {να} e {όταν} produzem a mesma forma verbal, e quem não está prestando atenção não sabe se lê uma oração de vontade ou de tempo. A palavra que vem antes é a que diz.


> Ἄν τις θέλει πρὸς ἐμὲν ἐλθεῖν, ἀπαρνήσαται ἑαυτόν καὶ ἄραται τὸν σταυρόν αὐτοῦ καὶ ἀκολουθεῖ μοι.

{ἐλθεῖν} é aoristo infinitivo, e {ἄν} na frente é a partícula do subjuntivo. Não há {να}, porque o grego da Escritura tem a particula {ἄν} em vez dela. A oração inteira é um condicional, e o verbo que está no subjuntivo é justamente o que depende da condição.

Quem traduz traduz a forma ({θέλει}, {ἄν}) e perde o modo. O que está em jogo é o valor: em grego a frase diz «se alguém quer vir a mim, precisa deixar alguma coisa para trás». O subjuntivo é o que transforma um desejo em condição. `),
  vocab: [
    V('θέλω να', 'θέλω', 'quero que'),
    V('να', 'να', 'que (subjuntivo)'),
    V('να μην', 'να μην', 'que não'),
    V('δεν', 'δεν', 'não'),
    V('μιλήσω', 'μιλάω', 'falar'),
    V('φύγω', 'φεύγω', 'ir embora'),
    V('πρέπει να', 'πρέπει', 'é preciso que'),
    V('έρθει', 'έρχομαι', 'venha (subjuntivo)'),
    V('όταν', 'όταν', 'quando'),
    V('πριν', 'πριν', 'antes que'),
    V('αφού', 'αφού', 'depois que'),
    V('είθε', 'είθε', 'é costume'),
    V('χρειάζεται', 'χρειάζεται', 'é preciso'),
    V('γράφω', 'γράφω', 'escrevo'),
  ],
  rules: [
    { n: '§1', text: T('O indicativo é o modo sem marca; να é a marca do subjuntivo.') },
    { n: '§2', text: T('Depois de να o verbo vai no aoristo, mesmo com o principal no passado.') },
    { n: '§3', text: T('να e θα não se combinam: θα να έρθει é errado.') },
    { n: '§4', text: T('A negação do subjuntivo é να μην, nessa ordem, e μην vem depois de να.') },
    { n: '§5', text: T('O optativo só sobrevive em είθε, χρειάζεται e έδει.') },
  ],
  notes: [
    {
      label: T('Koiné'),
      text: T(
        'Na Escritura a partícula do subjuntivo é ἄν, e não να. A construção é a mesma; o que muda é a marca. Por isso o texto bíblico tem subjuntivos que não trazem nenhuma palavra grega moderna visível.',
      ),
    },
    {
      label: T('Calque'),
      text: T(
        'O grego antigo usava o particípio futuro como verbo principal depois de ότι, e o português herdou isso como «ouvi dizer que». Em grego moderno a locução sumiu e o grego diz ακούω ότι.',
      ),
    },
  ],
  examples: [
    { text: 'θέλω να φύγω', gloss: T('quero sair') },
    { text: 'πρέπει να φύγεις', gloss: T('tens de sair') },
    { text: 'δεν θέλω να έρθει', gloss: T('não quero que venha') },
    { text: 'δεν θέλω να μην έρθει', gloss: T('não quero que não venha') },
    { text: 'θα φύγει', gloss: T('vai sair') },
    { text: 'θα να φύγει', gloss: T('forma incorreta') },
    { text: 'όταν έρθει', gloss: T('quando vier') },
    { text: 'πριν φύγει', gloss: T('antes que vá') },
  ],
  tables: [
    {
      caption: T('Os modos do grego moderno'),
      head: ['Τρόπος', 'Σήμα', 'Παράδειγμα'],
      rows: [
        ['οριστική', '—', 'γράφω'],
        ['υποτακτική', 'να', 'θέλω να γράψω'],
        ['προστακτική', '—', 'γράψε'],
        ['ευκτική', 'έδει, είθε', 'έδει να φύγει'],
      ],
    },
    {
      caption: T('As duas negativas'),
      head: ['Άρνηση', 'Πού', 'Παράδειγμα'],
      rows: [
        ['δεν', 'πριν το ρήμα', 'δεν θέλω να έρθει'],
        ['μην', 'μετά το να', 'να μην έρθει'],
      ],
    },
    {
      caption: T('Depois de να ou όταν'),
      head: ['Εισαγωγή', 'Ρήμα', 'Ανάγνωση'],
      rows: [
        ['να', 'έρθει', 'που έρχεται'],
        ['όταν', 'έρθει', 'όταν έρθει'],
        ['πριν', 'φύγει', 'πριν φύγει'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a forma correta?'),
    options: [T('θα να έρθει'), T('να έρθει'), T('να θα έρθει'), T('όταν να έρθει')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('θέλω ___ φύγει (partícula do subjuntivo)'),
      answer: 'να',
      hint: T('Duas letras'),
    },
    {
      kind: 'choose',
      prompt: T('Como se diz «não quero que venha»?'),
      options: [
        T('δεν θέλω να έρθει'),
        T('δεν θέλω να μην έρθει'),
        T('μην θέλω να έρθει'),
        T('θέλω να μην δεν'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Palavra e função'),
      pairs: [
        { a: 'να', b: T('subjuntivo') },
        { a: 'μην', b: T('negação do subjuntivo') },
        { a: 'θα', b: T('futuro') },
        { a: 'όταν', b: T('quando') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('πρέπει ___ φύγεις (partícula do subjuntivo)'),
      answer: 'να',
      hint: T('A mesma partícula'),
    },
  ],
};
