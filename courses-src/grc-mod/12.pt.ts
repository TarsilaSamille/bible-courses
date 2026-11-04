import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Voz passiva'),
  subtitle: T('αγαπιέμαι — sou amado'),
  section: T('O verbo'),
  body: C(`## Como se forma

A passiva moderna acrescenta um sufixo que lembra o presente: αγαπώ dá αγαπιέμαι (1ª), αγαπιόμαστε (2ª), αγαπιέστε (3ª) e αγαπιούνται (3ª plural). Repare que o acento se desloca — αγαπώ, αγαπιέμαι — e é esse deslocamento que indica a passiva.

Quando o assunto é alguém, o verbo é εἰμί: εἶμαι «estoy», εἶσαι, εἶναι. Εἶμαι «estoy (+ adjetivo)» é o verdadeiro "ser" do grego moderno, e εἶναι funciona como copula.

## O agente com από

A passiva grega esconde o agente. Quando ele precisa aparecer, entra com από: αγαπιέμαι από τη μητέρα μου — «sou amado pela minha mãe». Note a preposição no caso genitivo: από τη μητέρα, e μου no lugar do substantivo. A mesma coisa com εν: γράφεται από τον Μαρκο, γράφεται στα ελληνικά.

## O aoristo passivo

O aoristo passivo quase sempre termina em -θηκα: αγαπήθηκα «fui amado», διαβάστηκα «fui lido», μπήκα «entrei». Alguns verbos usam -φηκα: δέχθηκα «recibí». Guarde esses dois finais: elas são a forma mais comum de passar para a passiva numa frase curta.

## O que não é passivo

Έρχομαι «vengo» termina igual a um aoristo passivo, pero no es pasivo — es un verbo de movimiento, y su aoristo significa «vine», no «fui venido». Μπαίνω «entro» y μπήκα confirm: el mismo participio -ηκα, la misma apariencia, función distinta.

## Critério de lectura

Veja a preposição, não o terminador. Com από há agente explícito; sem ele, a ação fica no ar — que em grego é a norma.`),
  vocab: [
    V('αγαπιέμαι', 'αγαπώ', 'sou amado'),
    V('αγαπιόμαστε', 'αγαπώ', 'nos amamos'),
    V('γράφομαι', 'γράφω', 'sou escrito'),
    V('βαπτίζομαι', 'βαπτίζω', 'sou batizado'),
    V('αγαπήθηκα', 'αγαπώ', 'fui amado'),
    V('διαβάστηκα', 'διαβάζω', 'fui lido'),
    V('δέχθηκα', 'δέχομαι', 'recebi'),
    V('από', 'από', 'de; por'),
    V('αγαπώ', 'αγαπώ', 'amo'),
    V('αγαπιούνται', 'αγαπώ', 'se amam'),
    V('αγαπιέστε', 'αγαπώ', 'amaos (2º pl.)'),
    V('μητέρα', 'μητέρα', 'mãe'),
    V('Θεός', 'Θεός', 'Deus'),
    V('γράφω', 'γράφω', 'escrevo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como forma «sou amado»?'),
    options: [T('αγαπιέμαι'), T('αγαπώ'), T('αγαπήθηκα'), T('αγαπήσω')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('έγραψα το βιβλίο · το βιβλίο ___'),
      answer: 'γράφτηκε',
      hint: T('Aoristo pasivo de γράφω'),
    },
    {
      kind: 'choose',
      prompt: T('«Recebi uma carta»'),
      options: [T('δέχθηκα'), T('δείχθηκα'), T('δείχτηκα'), T('δέχομαι')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Associar aspecto'),
      pairs: [
        { a: 'αγαπιέμαι', b: T('presente') },
        { a: 'αγαπήθηκα', b: T('aoristo') },
        { a: 'αγαπιόμαστε', b: T('plural') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('Não toda forma em -μαι é passiva; classifique pelo significado.') }],
  notes: [
    {
      label: T('Koiné'),
      text: T(
        'A passiva medievala está presente en el Nuevo Testamento, pero la flexión moderna es nueva.',
      ),
    },
  ],
  examples: [{ text: 'αγαπιέμαι από τον Θεό', gloss: T('sou amado por Deus') }],
  tables: [
    {
      caption: T('Passiva'),
      head: ['Número', 'Forma'],
      rows: [
        ['singular', 'αγαπιέμαι'],
        ['plural', 'αγαπιόμαστε'],
      ],
    },
  ],
};
