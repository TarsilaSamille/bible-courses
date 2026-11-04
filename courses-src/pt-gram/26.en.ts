import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  section: T('The clause and its terms'),
  title: T('Analyzing subject and predicate'),
  subtitle: T('Procedure and complex cases'),
  body: C(`**Overview.** Locate the verb first and ask **who** acts or **what** is spoken of: in {E disse Jesus}, the verb {disse} points to the subject {Jesus}.

**Rule 1.** The subject can come before or after, and position does not define the function: in {E, logo, disse o SENHOR a Moisés}, {o SENHOR} is the subject even though it is postposed.

**Rule 2.** With a copula, the predicative assigns a quality to the subject: in {Deus é bom}, {bom} is the predicative and {é} the copula.

**Rule 3.** A {clausal subject} is a whole clause: in {É necessário que venhas}, the subordinate {que venhas} fills the subject place and the verb stays third person singular.

**Rule 4.** The {indeterminate subject} shows up as the absence of a noun the verb accepts: in {Choveu}, there is no who, and the verb stays third person singular.

**Application.** In {E, logo, disse o SENHOR a Moisés}, the subject is {o SENHOR}, postposed, and the verb {disse} is third person singular. {a Moisés} is the indirect object, and {E} links the two clauses of the period. Note that the subject comes **after** the verb: that is the Greek order, and anyone analysing with Portuguese grammar marks {o SENHOR} wrong for being out of place, when the Greek position is the regular one.

**Check.** Four questions, always in this order: what is the **verb** and what person and number does it require? Which is the first noun that **accepts** that verb, not the first that appears? What is left after the subject and the verb is the **predicate**? And is the subject simple, compound, indeterminate, hidden or non existent? Four questions, and the nucleus is guaranteed.`),
  vocab: [
    V('localização do verbo', 'localização do verbo', 'first step of the analysis'),
    V('sujeito', 'sujeito', 'term answering who'),
    V('sujeito deslocado', 'sujeito deslocado', 'subject that came after the verb'),
    V('sujeito indeterminado', 'sujeito indeterminado', 'present but unidentified'),
    V('predicado', 'predicado', 'what is declared of the subject'),
    V('verbo de ligação', 'verbo de ligação', 'links subject and predicative'),
    V('predicativo', 'predicativo', 'attribute of the subject through the copula'),
    V('ordem inversa', 'ordem inversa', 'subject after the verb'),
    V('o SENHOR', 'o SENHOR', 'postposed subject in {disse o SENHOR}'),
    V('É necessário', 'É necessário', 'verb with a clausal subject'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Locate the verb first and ask **who** acts or **what** is spoken of: in {E disse Jesus}, the verb {disse} points to the subject {Jesus}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'The subject can come before or after, and position does not define the function: in {E, logo, disse o SENHOR a Moisés}, {o SENHOR} is the subject even though it is postposed.',
      ),
    },
    {
      n: '§3',
      text: T(
        'With a copula, the predicative assigns a quality to the subject: in {Deus é bom}, {bom} is the predicative and {é} the copula.',
      ),
    },
    {
      n: '§4',
      text: T(
        'A {clausal subject} is a whole clause: in {É necessário que venhas}, the subordinate {que venhas} fills the subject place and the verb stays third person singular.',
      ),
    },
    {
      n: '§5',
      text: T(
        'The {indeterminate subject} shows up as the absence of a noun the verb accepts: in {Choveu}, there is no who, and the verb stays third person singular.',
      ),
    },
  ],
  notes: [
    {
      label: T('The Greek position of the subject'),
      text: T(
        'In {εἶπεν ὁ κύριος}, the subject {ὁ κύριος} comes after the verb {εἶπεν}, and that is the commonest order in ancient Greek. Old Portuguese did the same, and modern Portuguese frontposes the subject out of reading habit. The analysis does not change: what changes is the reader expectation, and that is what produces the reading error.',
      ),
    },
    {
      label: T('The subject that is a clause'),
      text: T(
        'In {É necessário que venhas}, the subject is {que venhas}, and the verb {é} stays third person singular even with two clauses present. That happens because the subject is a single unit. The same holds for {É tempo de partir}, where the clause follows {tempo}: the function is the same, and only the form changed.',
      ),
    },
  ],
  examples: [
    {
      text: 'E, logo, disse o SENHOR a Moisés.',
      gloss: T(
        'Subject {o SENHOR} postposed; {a Moisés} is the indirect object; {logo} is an adverbial adjunct.',
      ),
    },
    {
      text: 'Disse o SENHOR a Moisés.',
      gloss: T('The same sentence without {E} and without {logo}: only the essence of the clause.'),
    },
    {
      text: 'Deus criou os céus e a terra.',
      gloss: T('Simple subject {Deus}; verbal predicate {criou os céus e a terra}.'),
    },
    {
      text: 'Deus e a sua palavra recrearam o mundo.',
      gloss: T('Compound subject and plural verb: the two nuclei count.'),
    },
    {
      text: 'Deus é bom.',
      gloss: T('Copula {é} and predicative {bom}: the predicate is nominal.'),
    },
    {
      text: 'Alegrarei-te com alegria.',
      gloss: T(
        'Verb {alegrarei} in the future, with {te} as indirect object and {com alegria} as direct object.',
      ),
    },
    {
      text: 'É necessário que venhas.',
      gloss: T('Clausal subject {que venhas}; the verb {é} stays third person singular.'),
    },
    {
      text: 'Choveu durante a noite.',
      gloss: T('Subject {Choveu} non existent: the verb {choveu} is impersonal and has no who.'),
    },
    {
      text: 'Falar é Deus obedecer.',
      gloss: T('Two infinitives as a compound subject: {falar} and {obedecer}.'),
    },
  ],
  tables: [
    {
      caption: T('The four steps of the core analysis'),
      head: [T('Passo'), T('Pergunta'), T('O que se procura'), T('Exemplo')],
      rows: [
        [T('1'), T('qual é o verbo?'), T('a forma verbal e sua pessoa'), T('{disse}')],
        [T('2'), T('quem faz ou o que é?'), T('o substantivo que o verbo aceita'), T('{o SENHOR}')],
        [T('3'), T('o que sobra?'), T('o predicado'), T('{a Moisés} e {logo}')],
        [
          T('4'),
          T('que espécie de sujeito?'),
          T('simples, composto, oculto ou indeterminado'),
          T('{simples}'),
        ],
      ],
    },
    {
      caption: T('The subject and its position'),
      head: [T('Posição'), T('Exemplo'), T('Efeito na análise'), T('Chamada')],
      rows: [
        [T('antes do verbo'), T('{Deus criou}'), T('nenhuma'), T('sujeito antecipado')],
        [T('depois do verbo'), T('{criou Deus}'), T('nenhuma'), T('sujeito posposto')],
        [
          T('entre o verbo e o objeto'),
          T('{Deu o mundo a seu Filho}'),
          T('nenhuma'),
          T('sujeito intercalado'),
        ],
        [
          T('dentro do período'),
          T('{Jesus, que criou, ama}'),
          T('a oração é adjetiva'),
          T('sujeito posposto e relativo'),
        ],
        [T('após o verbo de ligação'), T('{é bom Deus}'), T('nenhuma'), T('sujeito posposto')],
        [
          T('como oração inteira'),
          T('{É necessário vir}'),
          T('o verbo não pluraliza'),
          T('sujeito oracional'),
        ],
      ],
    },
    {
      caption: T('Copulas and what they carry'),
      head: [T('Verbo'), T('Valor que acrescenta'), T('Frase'), T('Predicativo')],
      rows: [
        [T('{ser}'), T('identidade ou qualidade permanente'), T('{Deus é amor}'), T('{amor}')],
        [T('{estar}'), T('estado passageiro'), T('{Deus está aqui}'), T('{aqui}')],
        [T('{ficar}'), T('resultado atingido'), T('{ficou sozinho}'), T('{sozinho}')],
        [T('{permanecer}'), T('estado que dura'), T('{permaneceu fiel}'), T('{fiel}')],
        [T('{parecer}'), T('aparência, não certeza'), T('{parece bom}'), T('{bom}')],
        [T('{tornar-se}'), T('mudança de estado'), T('{tornou-se claro}'), T('{claro}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {É necessário que venhas}, the subject is:'),
    options: [
      T('the subordinate {que venhas}, which fills the subject place'),
      T('{necessário}, which is an adjective'),
      T('{venhas}, the verb of the subordinate clause'),
      T('none, because {é} is impersonal'),
    ],
    answer: 0,
    hint: T('Replace with {isso}: {É necessário isso} is still correct.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {E, logo, disse o SENHOR a Moisés}, {a Moisés} is:'),
      options: [
        T('an indirect object, introduced by the preposition {a}'),
        T('the subject, because it comes after the verb'),
        T('an adverbial adjunct of place'),
        T('a noun complement of {SENHOR}'),
      ],
      answer: 0,
      hint: T('The verb {disse} requires the preposition {a} for the indirect object.'),
    },
    {
      kind: 'match',
      prompt: T('Match each sentence to the kind of subject it has.'),
      pairs: [
        { a: T('{criou Deus}'), b: T('postposed subject, but simple') },
        { a: T('{Deus e a sua palavra amaram}'), b: T('compound subject') },
        { a: T('{Choveu}'), b: T('non existent subject') },
        { a: T('{É necessário vir}'), b: T('clausal subject') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('undefined'),
      answer: 'função',
      hint: T('In {disse o SENHOR}, the subject comes after and stays a subject.'),
    },
  ],
};
