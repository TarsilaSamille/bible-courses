import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('Word inflection and agreement'),
  title: T('Verbal inflection'),
  subtitle: T('Tenses, moods, voices and conjugation'),
  body: C(`**Overview.** The verb inflects in person, number, tense and mood: in {Deus amou}, the form {amou} is third person singular of the preterite.

**Rule 1.** The {indicative} presents certainty, the {subjunctive} presents doubt or purpose, and the {imperative} issues a command: in {Sei que ele sabe} against {Sei que ele saiba}.

**Rule 2.** The {active voice} presents the agent and the {passive} presents the patient: in {Deus criou} the agent is {Deus}; in {o mundo foi criado} the patient is {o mundo}.

**Rule 3.** {Compound tenses} are formed with auxiliary plus participle: in {havia criado}, {havia} is the auxiliary and {criado} the participle, not another verb.

**Rule 4.** The {infinitive} and the {gerund} inflect neither person nor number: in {Para que me amar} the first is {amar} and the second {amando}, identical in both.

**Application.** In {The Word became flesh}, the verb {se fez} is **passive** ({ser} + {feito}), and the patient is {o Verbo}. The original Greek (ἐγένετο σάρξ) uses the **aorist** and the **middle voice**, in which the verb is active in form and passive in sense: something **did** something, but what suffers is the Word. Rendering it as {o Verbo foi feito carne} is correct in Portuguese, and it hides that Greek had no passive here.

**Check.** To classify a verb, ask: **which tense** ({falou}, {falava}, {falarei})? **Which mood** ({fala}, {fale}, {fala!})? **Which voice** ({Deus criou}, {o mundo foi criado}, {ele se matou})? And is the **auxiliary** {ter} or {ser}? With those four, verbal inflection is fully described. And the participle is what gives the passive away: a participle without an auxiliary is not passive, it is an adjective.`),
  vocab: [
    V('tempo verbal', 'tempo verbal', 'moment of the action'),
    V('modo verbal', 'modo verbal', 'attitude of the speaker'),
    V('voz verbal', 'voz verbal', 'relation between subject and action'),
    V('indicativo', 'indicativo', 'mood of certainty'),
    V('subjuntivo', 'subjuntivo', 'mood of doubt and purpose'),
    V('imperativo', 'imperativo', 'mood of command'),
    V('infinitivo', 'infinitivo', 'form that does not inflect'),
    V('particípio', 'particípio', 'form that builds the passive'),
    V('se fez', 'se fez', 'irregular participle of {fazer}'),
    V('ἐγένετο σάρξ', 'ἐγένετο σάρξ', 'aorist and middle voice in Greek'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The verb inflects in person, number, tense and mood: in {Deus amou}, the form {amou} is third person singular of the preterite.',
      ),
    },
    {
      n: '§2',
      text: T(
        'The {indicative} presents certainty, the {subjunctive} presents doubt or purpose, and the {imperative} issues a command: in {Sei que ele sabe} against {Sei que ele saiba}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The {active voice} presents the agent and the {passive} presents the patient: in {Deus criou} the agent is {Deus}; in {o mundo foi criado} the patient is {o mundo}.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{Compound tenses} are formed with auxiliary plus participle: in {havia criado}, {havia} is the auxiliary and {criado} the participle, not another verb.',
      ),
    },
    {
      n: '§5',
      text: T(
        'The {infinitive} and the {gerund} inflect neither person nor number: in {Para que me amar} the first is {amar} and the second {amando}, identical in both.',
      ),
    },
  ],
  notes: [
    {
      label: T('The Greek middle voice Portuguese does not have'),
      text: T(
        'Ancient Greek has three voices and Portuguese has two. The Greek {middle voice} appears in verbs like {λύω}, where the subject is at once the doer and the sufferer; in {ἐγένετο} the verb is in the middle aorist, and the subject {Verbo} does something that suffers. Rendering it as the Portuguese passive inverts the position of the subject and makes the reader think {o Verbo} is the passive patient, when in Greek it is the agent who suffers.',
      ),
    },
    {
      label: T('The subjunctive Greek used more'),
      text: T(
        'Ancient Greek used the subjunctive where modern Portuguese uses the indicative or the future: the uncertainty of {ἴδω} appears where Portuguese says {sei}. Every rendering of these cases is a decision: keeping the Greek subjunctive sounds archaic in Portuguese, and replacing it with {se} plus indicative hides the logical force of the original.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus amou o mundo.',
      gloss: T('{amou} is preterite perfect, third person singular, active voice.'),
    },
    {
      text: 'O mundo foi criado.',
      gloss: T('Analytic passive voice: {foi} is auxiliary and {criado} the participle.'),
    },
    {
      text: 'O Verbo se fez carne.',
      gloss: T(
        '{se fez} is a passive periphrasis with {ser} and the irregular participle {feito}.',
      ),
    },
    {
      text: 'Sei que ele sabe.',
      gloss: T(
        'Verb of judgement {sei}: what follows is indicative, because the fact is asserted.',
      ),
    },
    {
      text: 'Sei que ele saiba.',
      gloss: T(
        'With {é necessário} the same {que} takes the subjunctive, because the fact is not asserted.',
      ),
    },
    {
      text: 'Vinde e segui-me.',
      gloss: T('{Vinde} and {segui} are imperatives: the order comes without a subject.'),
    },
    {
      text: 'havia criado',
      gloss: T('Pluperfect compound: {havia} is auxiliary and {criado} the participle.'),
    },
    {
      text: 'Amar é obedecer.',
      gloss: T('Two infinitives as parallel subjects, without person or number.'),
    },
    {
      text: 'para que me amares',
      gloss: T('{amar} in the subjunctive is required by {para que}: purpose is not fact.'),
    },
  ],
  tables: [
    {
      caption: T('Tenses of the indicative'),
      head: [T('Tempo'), T('Singular'), T('Plural'), T('Uso típico')],
      rows: [
        [T('presente'), T('{ama}'), T('{amam}'), T('fato atual')],
        [T('pretérito perfeito'), T('{amou}'), T('{amaram}'), T('fato concluído')],
        [T('pretérito imperfeito'), T('{amava}'), T('{amavam}'), T('estado em curso')],
        [T('futuro'), T('{amará}'), T('{amarão}'), T('projeção')],
        [T('mais-que-perfeito'), T('{amara}'), T('{amaram}'), T('anterior a outro passado')],
      ],
    },
    {
      caption: T('Moods and what each one says'),
      head: [T('Modo'), T('O que exprime'), T('Exemplo'), T('Sinal típico')],
      rows: [
        [T('{indicativo}'), T('certeza, fato'), T('{Ele sabe}'), T('{que} + indicativo')],
        [
          T('{subjuntivo}'),
          T('dúvida, finalidade, desejo'),
          T('{Ele saia}'),
          T('{para que} + subjuntivo'),
        ],
        [T('{imperativo}'), T('comando, pedido'), T('{Sai}'), T('forma sem {-r}')],
        [T('{infinitivo}'), T('ação sem sujeito'), T('{amar}'), T('{-r}')],
        [T('{gerúndio}'), T('ação em curso'), T('{amando}'), T('{-ndo}')],
      ],
    },
    {
      caption: T('Voices: active, passive and the Greek middle'),
      head: [T('Voz'), T('Quem aparece'), T('Como se marca'), T('Frase')],
      rows: [
        [T('{ativa}'), T('o agente'), T('verbo sem auxiliar'), T('{Deus criou}')],
        [
          T('{passiva analítica}'),
          T('o paciente'),
          T('{ser} ou {ter} + particípio'),
          T('{o mundo foi criado}'),
        ],
        [T('{passiva sintética}'), T('o paciente'), T('{se} + verbo'), T('{se fez carne}')],
        [T('{reflexiva}'), T('o mesmo agente'), T('{se} + verbo transitivo'), T('{ele se matou}')],
        [
          T('{média grega}'),
          T('agente que sofre'),
          T('não existe em português'),
          T('{ἐγένετο σάρξ}'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {O mundo foi criado}, what is {criado}?'),
    options: [
      T('a participle, which with {foi} forms the passive'),
      T('a verb in the preterite, with meaning of its own'),
      T('an adjective characterizing {o mundo}'),
      T('an adverb of manner applied to the noun'),
    ],
    answer: 0,
    hint: T('Without the {foi}, {criado} would only be an adjective.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {para que me amares}, the verb is in the subjunctive because:'),
      options: [
        T('{para que} expresses purpose, and purpose is not a fact'),
        T('{me} is an indirect pronoun and requires the subjunctive'),
        T('the subject {tu} is second person'),
        T('{amar} is an infinitive and every infinitive takes the subjunctive'),
      ],
      answer: 0,
      hint: T('The indicative asserts; the subjunctive expects.'),
    },
    {
      kind: 'match',
      prompt: T('Match each verb form to what it is.'),
      pairs: [
        { a: T('{amou}'), b: T('indicative preterite') },
        { a: T('{amava}'), b: T('imperfect preterite') },
        { a: T('{amará}'), b: T('indicative future') },
        { a: T('{amando}'), b: T('gerund') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('undefined'),
      answer: 'infinitivo',
      hint: T('In {amar é obedecer}, both are infinitives.'),
    },
  ],
};
