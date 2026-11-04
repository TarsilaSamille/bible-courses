import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  section: T('Meaning and subordination'),
  title: T('Linguistic variation'),
  subtitle: T('Regional, social, historical and diastratic variation'),
  body: C(`**Overview.** {Diatopic} variation is geographical: in Portugal, {autocarro} where Brazil says {ônibus}, and neither form is wrong.

**Rule 1.** {Diastratic} variation is social, and what changes is the {register}: in {Vinde} from a king and {vem} from a friend, the form is the same and the tone changes.

**Rule 2.** {Diaphasic} variation belongs to the speaker in a situation: in {Está bom} for the doctor and in {Como vai?} for a friend, the same sense takes different forms.

**Rule 3.** An {archaic} form is not a mistake: in {Ele vos falando, assim}, the {falando} is a {gerund} and not a {participle}, and the form is that of old Portuguese.

**Rule 4.** The test for telling {archaism} from {error} is usage: if the form appears in three old translations and in no contemporary text, it is an {archaism}.

**Application.** In {Se tu fores perfeito, ninguém te condenaria}, the {fores} is a form that sixteenth century Portuguese used as a {subjunctive}, and that is why John 3:21 appears as {se, depois que, fordes}. The biblical text preserves a verbal tense that current Portuguese does not have, and the old translation preserves it without noticing.

**Check.** For an old text, ask: is the form that looks strange an {archaism} or an {error}? Is the word {regional} or {obsolete}? And is my aim to {translate the form} or {translate the sense}? Three questions, and the decision stops being arbitrary: in biblical text the usual aim is to translate the sense and keep the mark of the old form only when it carries emphasis.`),
  vocab: [
    V('diatópica', 'diatópica', 'geographical variation'),
    V('diastrática', 'diastrática', 'social variation'),
    V('diafásica', 'diafásica', 'variation by situation'),
    V('estilística', 'estilística', 'variation by style'),
    V('registro', 'registro', 'level of formality'),
    V('coloquial', 'coloquial', 'register of conversation'),
    V('formal', 'formal', 'written and solemn register'),
    V('arcaísmo', 'arcaísmo', 'form of an earlier time'),
    V('fores', 'fores', 'archaic conditional of John 3:21'),
    V('autocarro', 'autocarro', 'Portuguese form of {ônibus}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{Diatopic} variation is geographical: in Portugal, {autocarro} where Brazil says {ônibus}, and neither form is wrong.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{Diastratic} variation is social, and what changes is the {register}: in {Vinde} from a king and {vem} from a friend, the form is the same and the tone changes.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{Diaphasic} variation belongs to the speaker in a situation: in {Está bom} for the doctor and in {Como vai?} for a friend, the same sense takes different forms.',
      ),
    },
    {
      n: '§4',
      text: T(
        'An {archaic} form is not a mistake: in {Ele vos falando, assim}, the {falando} is a {gerund} and not a {participle}, and the form is that of old Portuguese.',
      ),
    },
    {
      n: '§5',
      text: T(
        'The test for telling {archaism} from {error} is usage: if the form appears in three old translations and in no contemporary text, it is an {archaism}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The old form that carries emphasis'),
      text: T(
        'The {fores} of John 3:21 is not a form Portuguese stopped using by oversight: it marks the tense of the main verb in an old reading, and Greek {ἐάν τις ἰδίῳ αὐτοῦ τηρῇ} uses the {ἐάν}, which is conditional. Where the old translation writes {fores}, it is marking something the {se} of current Portuguese does not mark, and that is why the old form is not simply superfluous.',
      ),
    },
    {
      label: T('What is not variation but error'),
      text: T(
        'Not every different form is variation: if a modern text uses {vós} in a context where the norm of the century did not, that is a publishing {error}, not {diatopy}. The criterion is the documented usage of the period, and that is why reading an old text requires knowing which century it was written in.',
      ),
    },
  ],
  examples: [
    {
      text: 'Se tu fores perfeito',
      gloss: T('{fores} is the archaic conditional of John 3:21, and not a common form.'),
    },
    {
      text: 'Vinde e segui-me',
      gloss: T(
        '{Vinde} is the imperative of {vir}, and also the old form of address current Portuguese has lost.',
      ),
    },
    {
      text: 'o pão da vida',
      gloss: T(
        '{Pão} comes from Latin {panis}, and the plural {pães} is an archaism of number, not an error.',
      ),
    },
    {
      text: 'o Filho do Homem',
      gloss: T(
        'The {o} before {Filho} is the form of Greek {τοῦ υἱοῦ}, which old Portuguese rendered literally.',
      ),
    },
    {
      text: '{autocarro}, {ônibus}',
      gloss: T(
        '{Diatopic} form: {autocarro} in Portugal and {ônibus} in Brazil, with neither wrong.',
      ),
    },
    {
      text: 'Oxalá',
      gloss: T(
        '{Archaic} form still alive in speech: it means {oxalá que}, and current use is rarer.',
      ),
    },
    {
      text: 'Está bom, disse o médico',
      gloss: T(
        '{Formal} register with the doctor and {colloquial} register with a friend, on the same day.',
      ),
    },
    {
      text: 'Vós estais salvos',
      gloss: T('Biblical form of address, which the current norm only uses in Southern Europe.'),
    },
    {
      text: 'Κύριε, σῶσον',
      gloss: T(
        'The Greek form {κύριε} is vocative, and old Portuguese wrote {Senhor} with a capital.',
      ),
    },
  ],
  tables: [
    {
      caption: T('The four kinds of variation'),
      head: [T('Tipo'), T('O que varia'), T('Exemplo'), T('Onde se nota')],
      rows: [
        [T('{diatópica}'), T('o lugar'), T('{autocarro}, {ônibus}'), T('Portugal contra o Brasil')],
        [T('{diastrática}'), T('o grupo social'), T('{tu}, {vós}'), T('família contra escola')],
        [T('{diafásica}'), T('a situação'), T('{Está bem}, {E aí}'), T('médico contra amigo')],
        [T('{estilística}'), T('o estilo'), T('{em uso}'), T('literário contra técnico')],
      ],
    },
    {
      caption: T('Archaicism and error: what separates them'),
      head: [T('Caso'), T('O que é'), T('Exemplo'), T('Veredito')],
      rows: [
        [T('{forma antiga viva}'), T('arcaísmo'), T('{vós}, {fores}'), T('não corrigir')],
        [
          T('{forma de outro dialeto}'),
          T('diatopia'),
          T('{ônibus} em Portugal'),
          T('não corrigir'),
        ],
        [
          T('{forma de nenhum período}'),
          T('erro de publicação'),
          T('{nós} no texto grego'),
          T('corrigir'),
        ],
        [
          T('{forma do tradutor}'),
          T('opção de tradução'),
          T('{carne} por {corpo}'),
          T('decidir pela força'),
        ],
        [
          T('{desvio de sentido}'),
          T('erro de tradução'),
          T('{verbo} trocado por {substantivo}'),
          T('corrigir'),
        ],
      ],
    },
    {
      caption: T('Registers and what each one expects'),
      head: [T('Registro'), T('Pessoa'), T('Tratamento'), T('Exemplo')],
      rows: [
        [T('{coloquial}'), T('intima'), T('{tu}'), T('Ei, vem cá}')],
        [T('{familiar}'), T('família'), T('{você}'), T('Vemhere,}')],
        [T('{formal}'), T('instituição'), T('{você}'), T('Solicito a presença')],
        [T('{literário}'), T('texto antigo'), T('{tu} ou {vós}'), T('Amigo, chamado Senhor')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Se tu fores perfeito}, the form {fores} is:'),
    options: [
      T('an archaism, not an error: it is the conditional of old Portuguese'),
      T('a typing error, because {fores} does not exist'),
      T('a dialect still spoken in the North'),
      T('a government error, because the verb {ser} was swapped'),
    ],
    answer: 0,
    hint: T('The form appears in old translations and in none contemporary: it is an archaism.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('The variation between {autocarro} and {ônibus} is:'),
      options: [
        T('diatopic, because it changes with the place'),
        T('diastratic, because it changes with the social class'),
        T('diaphasic, because it changes with the situation'),
        T('stylistic, because it changes with the style'),
      ],
      answer: 0,
      hint: T('What changes here is the country of the speaker.'),
    },
    {
      kind: 'match',
      prompt: T('Match each case to the right verdict.'),
      pairs: [
        { a: T('{vós} in an old translation'), b: T('archaism, do not correct') },
        { a: T('{fores} in John 3:21'), b: T('archaism that carries emphasis') },
        { a: T('{ônibus} in Portugal'), b: T('diatopy, do not correct') },
        { a: T('a form belonging to no period'), b: T('publishing error') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('The variation that changes with the {place} of the speaker is ______.'),
      answer: 'diatópica',
      hint: T('{autocarro} against {ônibus}.'),
    },
  ],
};
