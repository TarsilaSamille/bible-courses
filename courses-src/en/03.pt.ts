import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Presente simples'),
  subtitle: T('he speaks — presente regular e negativo'),
  section: T('O verbo'),
  body: C(`## A forma de presente

O presente simples usa uma forma verbal no singular fora de {I/you/we/they}. As formas regulares acrescentam {-s}; diante de {-o, -ch, -sh, -ss, -x} e alguns sibilantes finais, usam {-es}. {know}, {go} e {do} têm formas especiais: {knows}, {goes}, {does}.

{BE} é irregular: {I am}, {he is}, {they are}. No presente, {have} torna-se {has}. A terceira pessoa funciona como teste rápido de concordância.

## O auxiliar {do}

Em perguntas e negações, o -{s} da terceira pessoa passa para {do/does}: {She sings} → {Does she sing?} → {She does not sing}. O verbo principal fica na forma base. Depois de {do not} negado e adelantado, porém, o verbo principal conserva a forma normal: {I do believe}.

## Quatro valores

O mesmo tempo expressa hábito, verdade, estado e referência futura. Compare {God is love} (verdade), {the church prays} (hábito), {she knows} (estado) e {the train leaves tomorrow} (agenda). O inglês bíblico pode soar arcaico, mas a regra básica permanece.`),
  vocab: [
    V('speak', 'speak', 'falar'),
    V('reads', 'read', 'lê'),
    V('has', 'have', 'tem'),
    V('is', 'be', 'é/está'),
    V('prays', 'pray', 'ora'),
    V('knows', 'know', 'sabe'),
    V('does', 'do', 'faz; auxiliar'),
    V('comes', 'come', 'vem'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: “The disciple ___ (pray) every day.”'),
    answer: 'prays',
    hint: T('Terceira pessoa do singular.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual forma é correta?'),
      options: [
        T('She does not pray'),
        T('She do not pray'),
        T('She does not prays'),
        T("She don't pray"),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relacione forma e valor temporal.'),
      pairs: [
        { a: '{usually prays}', b: T('hábito') },
        { a: '{is with God}', b: T('estado/verdade') },
        { a: '{leaves tomorrow}', b: T('agenda') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'fill',
      prompt: T('Numa pergunta: “___ he speak?”'),
      answer: 'Does',
      hint: T('O auxiliar assume a -s da terceira pessoa.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O -s de 3ª pessoa pertence ao verbo, não ao sujeito em todos os casos: she read → she reads; they read → they read.',
      ),
    },
    {
      n: '2',
      text: T(
        "Com do/does, o verbo principal fica no infinitivo sem to: Does he read?; He doesn't read.",
      ),
    },
    {
      n: '3',
      text: T(
        'I believe significa credo; I believe in significa creo en. O contexto escolhe a preposição.',
      ),
    },
  ],
  notes: [
    {
      label: T('Registro:'),
      text: T(
        'KJV pode escrever heareth ou heareth?; essas formas arcaicas pertencem ao estilo da versão, não ao presente contemporâneo padrão.',
      ),
    },
  ],
  examples: [
    { text: '{God is love}', gloss: T('Deus é amor — verdade') },
    { text: '{The church prays}', gloss: T('A igreja ora — hábito') },
    { text: '{Does he pray?}', gloss: T('Ele ora? — auxiliar do') },
  ],
  tables: [
    {
      caption: T('Presente simples'),
      head: [T('Pessoa'), T('Verbo regular'), T('Exemplo')],
      rows: [
        ['I/you/we/they', '{speak}', '{I speak}'],
        ['he/she/it', '{speaks}', '{God speaks}'],
        ['negativo', '{do/does not + base}', '{He does not speak}'],
        ['interrogativo', '{Do/Does + subject + base?}', '{Does he speak?}'],
      ],
    },
  ],
};
