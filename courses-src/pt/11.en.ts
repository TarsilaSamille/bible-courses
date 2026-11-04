import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Passive voice'),
  subtitle: T('was written, is loved, houses are sold'),
  section: T('Syntax'),
  body: C(`## The passive that shows the result

The analytic passive uses ser or estar plus a participle: {foi escrito}, {é amado}, {será salvo}. The participle **agrees with the subject**: {a palavra foi escrita}, {os livros foram escritos}, {as casas foram vendidas}. And the agent, when it appears, comes with **por**: {foi criado por Deus}, {foi buscado por Maria}.

Here is the point almost everyone misses: ser and estar are not synonyms here. ser plus participle marks an accomplished fact and the result — {foi criado por Deus}, {a lei foi dada} — and it is the form of biblical narrative. estar plus participle marks a state in the present or an action in progress: {está escrito}, {está ferido}, {estava sentado}. Rendering "was written" as "is written" swaps a fact for a state, and that is a difference, not a synonym.

The passive of ser also has tenses the one of estar does not: the past ({foi, foram}) and the future ({será, serão}). That is why {será salvo} is a common biblical phrase while {está salvo} only describes a moment.

## vendem-se casas: the se that is a particle

The pronominal construction with se can be passive: {vendam-se casas}, {aluga-se o quarto}. Note that the verb agrees with the subject ({casas}, plural), which proves there is no object "se": if there were an object, the singular would be {vende-se uma casa}.

Not every {se} is passive. {arrependeu-se} is **reflexive**, because the subject performs and suffers the action at once: he repents, and the repentance is his. The test is simple — ask who performs the action. If it is the subject itself, {se} is reflexive; if it is someone else, {se} is a particle.

And there is a middle case, the third person pronominal se: {lavou-se} can be "he washed himself" (reflexive) or "he was washed" (passive). What settles it comes from outside the sentence, from the narrator.

## Choosing ser or estar depends on the focus

What decides is focus, result and state, not automatic translation. Biblical narrative favours ser ({foram enviados}, {foi aberto}), describing a scene favours estar ({estava sentado}, {estava escrito na parede}). The choice changes which verbal tenses are available, which is why the translator has to decide before choosing the word.

## Reading criterion

In any sentence with {ser} or {estar}, ask: is it a fact (ser) or a state (estar)? Is {por} present? And is the {se} reflexive or a particle? With those three answers the Portuguese passive fits on one line — and turning {foram enviados} into {se enviaram} stops happening.`),
  vocab: [
    V('escrito', 'escrever', 'written'),
    V('salvo', 'salvar', 'saved'),
    V('crucificado', 'crucificar', 'crucified'),
    V('consumado', 'consumar', 'finished'),
    V('vendem-se', 'vender', 'are sold'),
    V('diz-se', 'dizer', 'it is said'),
    V('arrependeu-se', 'arrepender-se', 'he repented'),
    V('por Deus', 'por', 'by God'),
    V('foi morto', 'matar', 'was killed'),
    V('ser', 'ser', 'to be (auxiliary)'),
    V('estar', 'estar', 'to be (auxiliary)'),
    V('se', 'se', 'se (pronominal particle)'),
    V('por', 'por', 'by (passive agent)'),
    V('casas', 'casa', 'houses'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In “houses are sold”, the verb agrees with:'),
    options: [T('houses'), T('the pronoun se'), T('sale'), T('nothing')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “the law was written ___ God”.'),
      answer: 'por',
      hint: T('Introduces the agent of the passive.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is reflexive?'),
      options: [
        T('The law was written.'),
        T('He repented.'),
        T('The houses are sold.'),
        T('The city was founded.'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Match construction and meaning.'),
      pairs: [
        { a: T('was written'), b: T('passive') },
        { a: T('is sold'), b: T('passive se') },
        { a: T('repented'), b: T('reflexive se') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{a palavra foi escrita} and {os livros foram escritos} show that the participle agrees with the subject: {escrita} with {palavra} and {escritos} with {livros}. That is what separates {foi escrito} from {foram escritos}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{ser} plus participle marks a completed fact and has the tenses {foi} and {será}: {foi criado por Deus}, {será salvo}. {estar} plus participle marks a state and stays in present and past: {está escrito}, {estava sentado}. {Está salvo} describes a state; {foi salvo} narrates an event.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The agent of the {ser} passive comes in with {por}: {foi criado por Deus}, {foi buscado por Maria}. The {estar} one has no agent: nobody says {está escrito por Deus}, because {estar} does not narrate.',
      ),
    },
    {
      n: '§4',
      text: T(
        'In {vendem-se casas} the verb agrees with the subject ({casas}, plural). With an object the agreement would be {vende-se uma casa}, and that difference is what proves the {se} is a passive particle and not an object pronoun.',
      ),
    },
    {
      n: '§5',
      text: T(
        'The test for {se} is the question of who acts: in {arrependeu-se} it is the subject itself, so the {se} is reflexive; in {lavou-se} it can be reflexive or particle, and whoever tells the story decides, not the sentence.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical'),
      text: T(
        '{Está consumado} (John 19:30) highlights the state; {foi crucificado} highlights the process and admits an agent with {por}. The choice changes which tenses are available, which is why you decide before you pick the word.',
      ),
    },
    {
      label: T('Greek decides the tense'),
      text: T(
        'Greek moves from aorist to perfect ({ἐγένετο}, {γέγονεν}) in the same passage of John 19:30, and Portuguese has to choose between {foi} and {está}. The choice of {ser} or {estar} follows what Greek is doing, not the translator’s preference.',
      ),
    },
  ],
  examples: [
    {
      text: 'A palavra foi escrita por Deus.',
      gloss: T('{ser} passive: an event, agent by {por}.'),
    },
    { text: 'Os livros foram escritos.', gloss: T('{escritos} agrees with {livros}.') },
    { text: 'A lei está escrita na pedra.', gloss: T('{estar} plus participle: state.') },
    { text: 'Ele está ferido.', gloss: T('State, not process.') },
    { text: 'Estava sentado à direita.', gloss: T('{estar} in the past: scene.') },
    { text: 'Ele se arrependeu.', gloss: T('Reflexive {se}: the subject itself acts.') },
    { text: 'Vendem-se casas.', gloss: T('Particle {se}: the verb agrees with {casas}.') },
    { text: 'Aluga-se o quarto.', gloss: T('With an object, {se} would be a pronoun.') },
    { text: 'Serão salvos.', gloss: T('A future only the {ser} passive has.') },
  ],
  tables: [
    {
      caption: T('The two passives'),
      head: ['Estrutura', 'Marca', 'Exemplo'],
      rows: [
        ['ser + particípio', 'fato consumado', 'foi escrito'],
        ['estar + particípio', 'estado', 'está escrito'],
        ['ser + particípio + por', 'fato com agente', 'foi criado por Deus'],
      ],
    },
    {
      caption: T('The tenses each one has'),
      head: ['Auxiliar', 'Passado', 'Futuro'],
      rows: [
        ['ser', 'foi, foram', 'será, serão'],
        ['estar', 'estava, estavam', '—'],
      ],
    },
    {
      caption: T('The {se} that confuses'),
      head: ['Frase', 'Tipo de {se}', 'Teste'],
      rows: [
        ['arrependeu-se', 'reflexivo', 'o sujeito pratica'],
        ['lavou-se', 'ambíguo', 'quem conta decide'],
        ['vendem-se casas', 'partícula', 'o verbo concorda'],
      ],
    },
  ],
};
