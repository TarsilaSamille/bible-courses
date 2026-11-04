import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Voz pasiva'),
  subtitle: T('αγαπιέμαι — soy amado'),
  section: T('El verbo'),
  body: C(`## Cómo se forma

La pasiva moderna añade un sufijo que recuerda el presente: αγαπώ da αγαπιέμαι (1.ª), αγαπιόμαστε (2.ª), αγαπιέστε (3.ª) y αγαπιούνται (3.ª plural). Fíjate en que el acento se desplaza — αγαπώ, αγαπιέμαι — y ese desplazamiento es lo que marca la pasiva.

Cuando el sujeto es una persona, el verbo es εἰμί: εἶμαι «estoy», εἶσαι, εἶναι. «Εἶμαι + adjetivo» es el verdadero «ser» del griego moderno, y εἶναι funciona como cópula.

## El agente con από

La pasiva griega esconde al agente. Cuando tiene que aparecer, entra con από: αγαπιέμαι από τη μητέρα μου — «soy amado por mi madre». Ojo con la preposición en genitivo: από τη μητέρα, y μου en lugar del sustantivo. Lo mismo con εν: γράφεται από τον Μαρκο, γράφεται στα ελληνικά.

## El aoristo pasivo

El aoristo pasivo termina casi siempre en -θηκα: αγαπήθηκα «fui amado», διαβάστηκα «fue leído», μπήκα «entré». Algunos verbos usan -φηκα: δέχθηκα «recibí». Aprende esas dos terminaciones: son la vía más común de llegar a la pasiva en una frase corta.

## Lo que no es pasivo

Έρχομαι «vengo» termina como un aoristo pasivo, pero no es pasiva — es un verbo de movimiento, y su aoristo significa «vine», no «fui venido». Μπαίνω «entro» y μπήκα lo confirman: el mismo participio -ηκα, la misma apariencia, función distinta.

## Criterio de lectura

Mira la preposición, no la terminación. Con από hay agente explícito; sin ella la acción queda en el aire — que en griego es lo normal.`),
  vocab: [
    V('αγαπιέμαι', 'αγαπώ', 'soy amado'),
    V('αγαπιόμαστε', 'αγαπώ', 'nos amamos'),
    V('γράφομαι', 'γράφω', 'estoy escrito'),
    V('βαπτίζομαι', 'βαπτίζω', 'soy bautizado'),
    V('αγαπήθηκα', 'αγαπώ', 'fui amado'),
    V('διαβάστηκα', 'διαβάζω', 'fui leído'),
    V('δέχθηκα', 'δέχομαι', 'recibí'),
    V('από', 'από', 'de; por'),
    V('αγαπώ', 'αγαπώ', 'amo'),
    V('αγαπιούνται', 'αγαπώ', 'se aman'),
    V('αγαπιέστε', 'αγαπώ', 'amaos (2.ª pl.)'),
    V('μητέρα', 'μητέρα', 'madre'),
    V('Θεός', 'Θεός', 'Dios'),
    V('γράφω', 'γράφω', 'escribo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se forma «soy amado»?'),
    options: [T('αγαπιέμαι'), T('αγαπώ'), T('αγαπήθηκα'), T('αγαπήσω')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('El libro fue escrito'),
      answer: 'γράφτηκε',
      hint: T('Aoristo pasivo de γράφω'),
    },
    {
      kind: 'choose',
      prompt: T('«Recibí una carta»'),
      options: [T('δέχθηκα'), T('δείχθηκα'), T('δείχτηκα'), T('δέχομαι')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relacionar aspecto'),
      pairs: [
        { a: 'αγαπιέμαι', b: T('presente') },
        { a: 'αγαπήθηκα', b: T('aoristo') },
        { a: 'αγαπιόμαστε', b: T('plural') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('No toda forma en -μαι es pasiva; clasifica por el significado.') }],
  notes: [
    {
      label: T('Koiné'),
      text: T(
        'La pasiva medieval está presente en el Nuevo Testamento, pero la flexión moderna es nueva.',
      ),
    },
  ],
  examples: [{ text: 'αγαπιέμαι από τον Θεό', gloss: T('soy amado por Dios') }],
  tables: [
    {
      caption: T('Pasiva'),
      head: ['Número', 'Forma'],
      rows: [
        ['singular', 'αγαπιέμαι'],
        ['plural', 'αγαπιόμαστε'],
      ],
    },
  ],
};
