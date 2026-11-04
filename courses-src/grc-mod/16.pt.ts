import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  section: T('O nome'),
  title: T('Singular, plural e os restos do dual'),
  subtitle: T('οι άνθρωποι — δυο άνθρωποι — ανθρώπων'),
  body: C(`## O plural regular são três finais

O grego faz o plural por terminação, e há três finais para três gêneros. O masculino acrescenta {-οι} ou {-ους}: {ο άνθρωπος} dá {οι άνθρωποι}, {ο λέων} dá {οι λέοντες}. O feminino acrescenta {-ες}: {η γυναίκα} dá {οι γυναίκες}. O neutro acrescenta {-ια}: {το παιδί} dá {τα παιδιά}. Três finais, três gêneros, e a concordância do artigo segue junto: {οι}, {οι}, {τα}.

O neutro não acrescenta nada: substitui o final inteiro. {το παιδί} não fica {το παιδί-ο}, vira {τα παιδιά}. E o verbo tem de mudar de pessoa junto, porque o número mudou: «a criança dorme» é {το παιδί κοιμάται}, «as crianças dormem» é {τα παιδιά κοιμούνται}. O mesmo vale para o adjetivo, que no neutro plural perde o gênero: {τα παιδιά καλά}, e não «{καλές}».

## O genitivo do plural é um fossil

**Todo genitivo plural grego termina em {-ων}**, sem exceção: {ανθρώπων}, {γυναικών}, {παιδιών}, {φίλων}. É o único resto vivo da {-ων} que o grego antigo tinha em todas as declinações, e sobreviveu porque é a forma que o grego usa para contar, como se vê na lição sobre o numeral.

O mesmo {-ων} aparece em {δύο ανθρώπων}, e é por isso que se diz «de duas pessoas» e não «duas pessoas». O genitivo faz as duas coisas: indica número e indica parte de um todo.

## O dual ainda tem lugar

O grego antigo tinha três números. O português guardou dois. O grego moderno perdeu o dual como categoria morfológica, mas o guarda como vaga no sistema de contagem: {δυο άνθρωποι} conta exatamente duas pessoas, e é diferente de {πολλοί άνθρωποι}, que conta muitas.

Quando o dual reaparece em formas fixas, aparece como {-ες} no vocativo, não no plural: {πατέρες}, {υἱές μου}. É a forma de se dirigir a um grupo de pais ou de filhos, e é a que a Bíblia usa quando se fala a um povo. O vocativo neutro é o único que não mudou: {παιδί}, {φίλε}.

## O que a Bíblia mostra

> Κύριε, σῶσον τὸν λαόν σου καὶ εὐλόγησον τὴν κληρονομίαν σου, καὶ ἐλέησον αὐτοὺς καθὼς ἤλαφθεν ἐν τοῖς θρόνοις σου.

As formas de vocativo de {πατέρες} reaparecem em {εὐλόγησον} e {ἐλέησον}: são imperativos de segunda pessoa do singular, com o mesmo final do vocativo. Quem sabe o vocativo reconhece o imperativo no texto bíblico, e quem só sabe o indicativo lê essas duas palavras como uma coisa só.`),
  vocab: [
    V('ο άνθρωπος', 'ο άνθρωπος', 'o homem, a pessoa'),
    V('οι άνθρωποι', 'ο άνθρωπος', 'as pessoas'),
    V('η γυναίκα', 'η γυναίκα', 'a mulher'),
    V('οι γυναίκες', 'η γυναίκα', 'as mulheres'),
    V('το παιδί', 'το παιδί', 'a criança'),
    V('τα παιδιά', 'το παιδί', 'as crianças'),
    V('ο λέων', 'ο λέων', 'o leão'),
    V('οι λέοντες', 'ο λέων', 'os leões'),
    V('το σπίτι', 'το σπίτι', 'a casa'),
    V('το βιβλίο', 'το βιβλίο', 'o livro'),
    V('τα βιβλία', 'το βιβλίο', 'os livros'),
    V('ανθρώπων', 'άνθρωπος', 'de pessoas (genitivo)'),
    V('γυναικών', 'γυναίκα', 'de mulheres (genitivo)'),
    V('παιδιών', 'παιδί', 'de crianças (genitivo)'),
    V('φίλων', 'φίλος', 'de amigos (genitivo)'),
    V('πατέρες', 'πατέρας', 'pais (vocativo)'),
    V('δύο ανθρώπων', 'δύο', 'de duas pessoas'),
  ],
  rules: [
    {
      n: '§1',
      text: T('O plural regular é -οι/-ους no masculino, -ες no feminino e -ια no neutro.'),
    },
    { n: '§2', text: T('O genitivo do plural é sempre -ων: ανθρώπων, γυναικών, παιδιών.') },
    { n: '§3', text: T('O neutro plural troca o artigo por τα e o verbo pelo plural.') },
    {
      n: '§4',
      text: T('O dual sobrevive como vaga de contagem: δυο άνθρωποι são exatamente dois.'),
    },
    { n: '§5', text: T('O vocativo em -ες endereça-se a um grupo, não um objeto: πατέρες.') },
  ],
  notes: [
    {
      label: T('Herança'),
      text: T(
        'παιδιών e ανθρώπων têm o mesmo final por herança do genitivo plural antigo. Um substantivo que perdeu a declinação mantém esse único final porque ele ainda é útil: é a forma que o grego usa para contar.',
      ),
    },
    {
      label: T('Registro'),
      text: T(
        'δυο άνθρωποι soa formal e literário na fala de hoje. Fala-se πολλοί άνθρωποι ou δύο άνθρωποι com o numeral; a categoria dual continua na gramática da escola, não na boca.',
      ),
    },
  ],
  examples: [
    { text: 'οι άνθρωποι δουλεύουν', gloss: T('as pessoas trabalham') },
    { text: 'οι γυναίκες μιλούν', gloss: T('as mulheres falam') },
    { text: 'τα παιδιά τρέχουν', gloss: T('as crianças correm') },
    { text: 'οι λέοντες τρώγουν', gloss: T('os leões comem') },
    { text: 'τα βιβλία είναι εδώ', gloss: T('os livros estão aqui') },
    { text: 'δύο άνθρωποι ήρθαν', gloss: T('vieram duas pessoas') },
    { text: 'πολλοί άνθρωποι ήρθαν', gloss: T('vieram muitas pessoas') },
    { text: 'ανθρώπων πολλών', gloss: T('de muitas pessoas') },
  ],
  tables: [
    {
      caption: T('Três números, três artigos'),
      head: ['Αριθμός', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['ένα', 'ο άνθρωπος', 'η γυναίκα', 'το παιδί'],
        ['δυο', 'δύο άνθρωποι', 'δύο γυναίκες', 'δύο παιδιά'],
        ['πολλοί', 'οι άνθρωποι', 'οι γυναίκες', 'τα παιδιά'],
      ],
    },
    {
      caption: T('Genitivo do plural'),
      head: ['Κλίση', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['γενική', 'ανθρώπων', 'γυναικών', 'παιδιών'],
        ['κλητική', 'άνθρωπε', 'γυναίκα', 'παιδί'],
      ],
    },
    {
      caption: T('Plurais irregulares'),
      head: ['Singular', 'Plural'],
      rows: [
        ['ο άνθρωπος', 'οι άνθρωποι'],
        ['η φύση', 'οι φύσεις'],
        ['το δέντρο', 'τα δέντρα'],
        ['το νερό', 'τα νερά'],
        ['ο κανείς', 'οι κανείς'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o plural de «το παιδί»?'),
    options: [T('τα παιδιά'), T('οι παιδιά'), T('τα παίδια'), T('το παιδί')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ παιδιά τρέχουν (artigo neutro plural)'),
      answer: 'τα',
      hint: T('O artigo do neutro no plural'),
    },
    {
      kind: 'choose',
      prompt: T('Como se diz «de duas pessoas»?'),
      options: [T('δύο άνθρωποι'), T('δύο ανθρώπων'), T('δυο ανθρώπων'), T('δύο του ανθρώπου')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Número de cada forma'),
      pairs: [
        { a: 'δυο άνθρωποι', b: T('duplo') },
        { a: 'πολλοί άνθρωποι', b: T('plural') },
        { a: 'ο άνθρωπος', b: T('singular') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('___ λέοντες τρώγουν'),
      answer: 'οι',
      hint: T('Artigo masculino plural'),
    },
  ],
};
