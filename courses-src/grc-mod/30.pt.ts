import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  section: T('Preposições'),
  title: T('Preposições: a palavra que governa o caso'),
  subtitle: T('στο σπίτι — από — για — προς — με'),
  body: C(`## A preposição manda no caso

Em português, «em» vale para lugar e para tempo, e o contexto é que diz qual. **Em grego não há essa ambiguidade: cada preposição pede um caso**., e o caso aparece na palavra que vem depois.

{Στο σπίτι} é lugar, e {στις πέντε} é hora. Nas duas a preposição é a mesma, {σε},  Quem aprende a preposição sem o caso aprende metade, e quem aprende o caso sem a preposição não sabe para onde vai a frase.

O caso de uma preposição não muda o sentido da preposição; muda o da palavra. O par {τον φίλο} e {του φίλου} mostra o que a preposição faz: a mesma raiz, dois casos, e a preposição é que escolhe.

## As formas de σε, e o que a preposição faz com o caso

{σε} é a preposição de lugar e de direção, e ela manda no acusativo: {πηγαίνω στο σπίτι}. As formas são fusões: {στο} é {σε} mais {το}, {στην} é {σε} mais {την}, {στους} é {σε} mais {τους}, {στα} é {σε} mais {τα}, {στις} é {σε} mais {τις}.

É a fusão que faz parecer diferente. Os dois componentes estão sempre lá, e é por isso que a preposição vai para o lugar do artigo: {στο σπίτι} não é {σε το σπίτι} por acaso, é porque o grego funde as duas coisas.

O mesmo vale para {στον} mais tempo: {στον τρίτο χρόνο}, «no terceiro ano». E vale para {στο νερό}, que é o que faz o grego dizer «na água» com o neutro.


{για} é «para», e no grego moderno cobre três sentidos que em português são palavras diferentes. Finalidade: {για την υγεία}, «pela saúde», {για χάρη}, «por amor de». Destino: {ταξίδι για την Αθήνα}, «viagem para Atenas». E destino de alguém: {για εσένα}.

É a preposição que mais aparece em frase de lugar — e menos se entende na primeira vez, porque o português traduz por três palavras e o grego usa uma. {Για την υγεία} não é «para a saúde» nem «à saúde»: é «por causa da saúde», e a leitura de causa é a que o texto bíblico usa o tempo todo.

## As outras cinco, e o caso de cada uma

{Από} é origem e agente: {από της Αθήνας}, «de Atenas», {αγαπιέμαι από τον Θεό}, «sou amado por Deus». {Προς} é direção, e é mais formal que {για}: {προς τον Θεό}, «a Deus». {Με} é companhia e instrumento: {μιλάω με τον φίλο}, {κόβω με το μαχαίρι}. {Σαν} é comparação: {σαν τον ήλιο}, «como o sol».

{H μακριά από} é distância, {κοντά σε} é proximidade. E {γιατί} com genitivo é causa: {γιατί άρρωστου}, que é a mesma palavra {γιατί} com caso diferente.


Quando {το} some e sobra só {σπίτι}, é porque a preposição já carrega o artigo. Quando o substantivo está sozinho e o verbo está em segunda pessoa, é o caso que diz a função: {γράφω το βιβλίο} e {γράφω του βιβλίου} têm o mesmo substantivo e verbos diferentes.

Na Escritura isso é ainda mais verdade, porque o texto antigo não repete nada. Quem lê grego antigo identifica o caso pela terminação e constrói a frase sem entender a palavra. É a técnica do curso irmão, e ela funciona porque o grego antigo marquava caso em quase tudo.

## Onde as preposições estão na Escritura

> Καὶ λέγει αὐτῷ ὁ Ἰησοῦς· Τί σὲ λέγεις ἀσθενεῖν; ἀνάστηθι, ἆρον τὸν κράβαττόν σου καὶ περιπάτει.

{ἆρον τὸν κράβαττόν σου} tem duas preposições: uma para a ação e outra para a posse: {τὸν κράβαττόν} é acusativo direto do imperativo, e {σου} é genitivo enclítico que se gruda no substantivo anterior. Sem a segunda, a frase ainda funciona; sem a primeira, não.

{Eἰς} e {ἐν} são as preposições da Escritura, e as duas pedem caso diferente: {ἐν} pede genitivo em quase todo uso, {εἰς} pede acusativo. {Εἰς τὸν παράδεισον}, «para o paraíso». São as duas palavras que o grego moderno fundiu em {σε}. `),
  vocab: [
    V('σε', 'σε', 'em, para'),
    V('στο σπίτι', 'στο σπίτι', 'em casa'),
    V('σε το σπίτι', 'σε το σπίτι', 'a casa'),
    V('για', 'για', 'para; por causa de'),
    V('για την υγεία', 'για την υγεία', 'pela saúde'),
    V('από', 'από', 'de; por'),
    V('από τον Θεό', 'από τον Θεό', 'de Deus'),
    V('προς', 'προς', 'em direção a'),
    V('με', 'με', 'com'),
    V('σαν', 'σαν', 'como'),
    V('εἰς', 'εἰς', 'para (grego antigo)'),
    V('ἐν', 'ἐν', 'em (grego antigo)'),
    V('στον τρίτο χρόνο', 'στον τρίτο χρόνο', 'no terceiro ano'),
    V('το νερό', 'το νερό', 'a água'),
    V('ο ήλιος', 'ο ήλιος', 'o sol'),
  ],
  rules: [
    {
      n: '§1',
      text: T('Cada preposição governa um caso: σε manda no acusativo, από e του no genitivo.'),
    },
    { n: '§2', text: T('στο, στην, στους, στα e στις são fusões de σε com o artigo.') },
    { n: '§3', text: T('για cobre finalidade, destino e «por causa de»: για την υγεία.') },
    {
      n: '§4',
      text: T(
        'Εἰς e ἐν são as preposições do grego antigo; εἰς pede acusativo e ἐν pede genitivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Herança'),
      text: T(
        'εἰς + genitivo era a preposição de direção no grego antigo, e dela vem o του grego moderno. É a única palavra grega que virou preposição e artigo ao mesmo tempo.',
      ),
    },
    {
      label: T('Cuidado'),
      text: T(
        'μου, σου, μας, σας e του parecem preposições e não são: são clíticos que indicam posse. Escrever «com Deus» em vez de «de Deus» é o erro mais comum de quem traduz a Escritura.',
      ),
    },
  ],
  examples: [
    { text: 'πηγαίνω στο σπίτι', gloss: T('vou para casa') },
    { text: 'στον τρίτο χρόνο', gloss: T('no terceiro ano') },
    { text: 'μένω για την υγεία', gloss: T('fico pela saúde') },
    { text: 'έρχεται από την Αθήνα', gloss: T('vem de Atenas') },
    { text: 'αγαπιέμαι από τον Θεό', gloss: T('sou amado por Deus') },
    { text: 'μιλάω με τον φίλο', gloss: T('falo com o amigo') },
    { text: 'προς τον Θεό', gloss: T('a Deus') },
    { text: 'σαν τον ήλιο', gloss: T('como o sol') },
  ],
  tables: [
    {
      caption: T('Preposição e caso'),
      head: ['Πρόθεση', 'Κλίση', 'Παράδειγμα'],
      rows: [
        ['σε', 'αἰτιατική', 'στο σπίτι'],
        ['από', 'γενική', 'από της Αθήνας'],
        ['για', 'αἰτιατική', 'για την υγεία'],
        ['με', 'αἰτιατική', 'με τον φίλο'],
        ['σαν', 'αἰτιατική', 'σαν τον ήλιο'],
      ],
    },
    {
      caption: T('As fusões de σε'),
      head: ['Μορφή', 'Σύνθεση', 'Παράδειγμα'],
      rows: [
        ['στο', 'σε + το', 'στο σπίτι'],
        ['στην', 'σε + την', 'στην Αθήνα'],
        ['στους', 'σε + τους', 'στους φίλους'],
        ['στις', 'σε + τις', 'στις πέντε'],
      ],
    },
    {
      caption: T('As preposições da Escritura'),
      head: ['Πρόθεση', 'Κλίση', 'Παράδειγμα'],
      rows: [
        ['ἐν', 'γενική', 'ἐν τῇ οἰκίᾳ'],
        ['ἐπί', 'γενική', 'ἐπὶ τῆς νηός'],
        ['εἰς', 'αἰτιατική', 'εἰς τὸν παράδεισον'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual preposição manda no genitivo?'),
    options: [T('σε'), T('από'), T('για'), T('με')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ σπίτι (fusão de σε com το)'),
      answer: 'Στο',
      hint: T('Primeira letra maiúscula'),
    },
    {
      kind: 'choose',
      prompt: T('Em grego antigo, qual preposição pede acusativo?'),
      options: [T('ἐν'), T('ἐπί'), T('εἰς'), T('παρά')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Preposição e sentido'),
      pairs: [
        { a: 'από', b: T('origem') },
        { a: 'για', b: T('finalidade') },
        { a: 'με', b: T('companhia') },
        { a: 'σαν', b: T('comparação') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('μένω ___ την υγεία (preposição de finalidade)'),
      answer: 'για',
      hint: T('Três letras'),
    },
  ],
};
