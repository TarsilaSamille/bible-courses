import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Os verbos: presente'),
  subtitle: T('-ar, -er, -ir — três conjugações'),
  section: T('Os verbos'),
  body: C(`## Três conjugações

O infinitivo espanhol termina em {-ar}, {-er} ou {-ir}, e o resto da conjugação sai daí (Hill):

{-AR}: {hablar} «falar» — {hablo}, {hablas}, {habla}, {hablamos}, {habláis}, {hablan}.
{-ER}: {comer} «comer» — {como}, {comes}, {come}, {comemos}, {coméis}, {comen}.
{-IR}: {vivir} «viver» — {vivo}, {vives}, {vive}, {vivimos}, {vivís}, {viven}.

Só o presente e o subjuntivo (e o gerúndio) mudam a vogal temática; o resto dos tempos usa o infinitivo como base.

## O verbo {ser} no presente

{ser} é irregular: {soy}, {eres}, {es}, {somos}, {seáis}, {son}. O {soy} é uma forma própria, sem nada regular nela.

## Verbo por pessoa

Como o verbo já carrega a pessoa, o pronome sujeito é **omitido**: {Hablo} «(eu) falo» · {Habla Dios} «Deus fala» · {Hablan los discípulos} «os discípulos falam».

## Voseo (só no Rioplatense)

Na Argentina e no Uruguai o {tú} vira {vos}, com o verbo na 2ª pessoa do plural: {vos hablás}, {vos tenés}, {vos podés}. O acento final é a marca escrita.

## Europeu × americano

Nas Américas quase ninguém usa {vosotros}: o plural vira {ustedes}: {Ustedes hablan} «vocês falam» (a forma {vosotros habláis} continua existindo, mas só na Espanha).`),
  vocab: [
    V('hablo', 'hablar', 'falo'),
    V('hablamos', 'hablar', 'falamos (vogal -á-!)'),
    V('como', 'comer', 'como'),
    V('vivo', 'vivir', 'vivo'),
    V('habláis', 'hablar', 'falais (só na Espanha!)'),
    V('soy', 'ser', 'sou (irregular!)'),
    V('aman', 'amar', 'amam (Mc 12:30)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: "yo ___ (hablar)" (eu falo)'),
    answer: 'hablo',
    hint: T('Primeira pessoa -ar.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o presente: "nosotros ___ (vivir)"'),
      answer: 'vivimos',
      hint: T('1ª pessoa do plural de -ir troca a vogal para -i-.'),
    },
    {
      kind: 'choose',
      prompt: T('Em América, o plural de "vós" é quase sempre…'),
      options: [T('{vosotros}'), T('{ustedes}'), T('{vos}'), T('{ellos}')],
      answer: 1,
      hint: T('Regla §5: sección europeo × americano.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a pessoa ao verbo'),
      pairs: [
        { a: T('yo'), b: T('{comen}') },
        { a: T('tú'), b: T('{comes}') },
        { a: T('nosotros'), b: T('{comemos}') },
        { a: T('ellos'), b: T('{hablan}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Três conjugações: -ar, -er, -ir; o presente sai do infinitivo trocando a vogal final.',
      ),
    },
    { n: '2', text: T('O pronome sujeito se omite porque o verbo já indica a pessoa.') },
    { n: '3', text: T('O presente admite também sentido habitual e ação contínua.') },
    { n: '4', text: T('Voseo (Argentina/Uruguai): tú hablas → vos hablás, com acento no fim.') },
    { n: '5', text: T('Fora da Espanha, o plural de «vós» é quase sempre ustedes.') },
  ],
  notes: [
    {
      label: T('A forma {soy} vale para tudo'),
      text: T(
        'No presente há apenas três terminações: {-o}, {-as}, {-a}. Por isso {hablo} e {habla} diferem só pela pessoa — o sujeito é que faz o resto.',
      ),
    },
  ],
  examples: [
    { text: '{Creo en Dios}', gloss: T('Creio em Deus.') },
    { text: '{Oramos juntos}', gloss: T('Oramos juntos.') },
    { text: '{Viven en paz}', gloss: T('Vivem em paz.') },
    { text: '{Ama a su prójimo}', gloss: T('Ama o seu próximo (Mc 12:30 — presente habitual).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Presente do indicativo'),
      head: [T('Pessoa'), T('hablar (-ar)'), T('comer (-er)'), T('vivir (-ir)')],
      rows: [
        ['yo', '{hablo}', '{como}', '{vivo}'],
        ['tú', '{hablas}', '{comes}', '{vives}'],
        ['él/ella/usted', '{habla}', '{come}', '{vive}'],
        ['nosotros', '{hablamos}', '{comemos}', '{vivimos}'],
        ['vosotros', '{habláis}', '{coméis}', '{vivís}'],
        ['ellos/ustedes', '{hablan}', '{comen}', '{viven}'],
      ],
    },
    {
      caption: T('Tabela 2 — Voseo rioplatense × tuteo'),
      head: [T('Infinitivo'), T('tú (España/América s. l.)'), T('vos (Argentina/Uruguai)')],
      rows: [
        ['{hablar}', '{hablas}', '{hablás}'],
        ['{tener}', '{tienes}', '{tenés}'],
        ['{poder}', '{puedes}', '{podés}'],
        ['{querer}', '{quieres}', '{querés}'],
        ['{ir}', '{vas}', '{vas}'],
      ],
    },
  ],
};
