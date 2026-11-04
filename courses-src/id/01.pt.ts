import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('Pronúncia e pronomes'),
  subtitle: T('saya/aku, kamu/Anda, dia'),
  section: T('Fonologia e pronomes'),
  body: C(`O indonésio (bahasa Indonesia) não flexiona verbos por pessoa nem número, não distingue gênero gramatical e normalmente dispensa artigo. A forma do verbo permanece igual: {saya percaya}, {kamu percaya}, {mereka percaya} significam, respectivamente, «eu creio», «tu credes» e «eles creem». Tempo, aspecto e negação são marcados por palavras independentes.

PRONÚNCIA
• {c} representa /tʃ/, como em {cinta} «amor».
• {j} representa /dʒ/, como em {jalan} «caminho».
• {y} representa /j/, como em {yakin} «firme».
• {ng} representa /ŋ/, como em {nyanyi} «cantar».
• {kh} representa /x/, como em {khotbah} «sermão»; {g} ante {e/i} é /ɡ/, mas ante {a/u} é /ɣ/, como em {gembira} «alegre».
• As vogais finais em {sebut}, {saya} e {buku} se reduzem muito na fala cotidiana; a forma escrita preserva a vogal final.

O acento escrito {–} raramente aparece: o acento antepenúltimo é omitido na escrita, como em {membaca} [memˈbatʃa] y {bermuka} [bərˈmuka].`),
  vocab: [
    V('saya', 'saya', 'eu (formal ou neutro)'),
    V('aku', 'aku', 'eu (íntimo)'),
    V('kamu', 'kamu', 'você informal'),
    V('Anda', 'Anda', 'você formal'),
    V('dia', 'dia', 'ele, ela, aquilo'),
    V('kami', 'kami', 'nós (sem o ouvinte)'),
    V('kita', 'kita', 'nós (com o ouvinte)'),
    V('mereka', 'mereka', 'eles, elas'),
    V('ini', 'ini', 'este, isto'),
    V('itu', 'itu', 'esse, aquilo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual pronome significa «nós», incluindo o ouvinte?'),
    options: [T('kami'), T('kita'), T('mereka'), T('dia')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: «___ percaya» = «eu creio» (formal).'),
      answer: 'saya',
      hint: T('Pronome formal da primeira pessoa.'),
    },
    {
      kind: 'choose',
      prompt: T('Como se pronuncia aproximadamente {cinta}?'),
      options: [T('chinta'), T('jinta'), T('sinta'), T('tsinta')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O verbo não muda com a pessoa nem com o número: {dia membaca} = «ele lê»; {mereka membaca} = «eles lêem».',
      ),
    },
    {
      n: '2',
      text: T(
        '{kami} exclui a pessoa a quem se fala; {kita} a inclui. A escolha não depende de haver duas pessoas presentes.',
      ),
    },
    { n: '3', text: T('{dia} também pode significar «aquilo»; o contexto resolve a referência.') },
  ],
  notes: [
    {
      label: T('Cuidado'),
      text: T('{dan} é minúsculo e significa «e»; o nome do país é {Indonesia}.'),
    },
  ],
  examples: [
    { text: 'Saya percaya kepada Yesus.', gloss: T('Eu creio em Jesus.') },
    { text: 'Kamu dan aku membaca Firman.', gloss: T('Tu e eu lemos a Palavra.') },
    { text: 'Kita adalah saudara.', gloss: T('Somos irmãos (incluindo quem ouve).') },
  ],
  tables: [
    {
      caption: T('Pronomes pessoais'),
      head: ['Função', 'PT', 'ES'],
      rows: [
        ['1ª pessoa', T('saya / aku'), T('eu formal / íntimo')],
        ['2ª pessoa', T('kamu / Anda'), T('informal / formal')],
        ['3ª pessoa', T('dia / mereka'), T('ele ou ela / eles')],
        ['Nós', T('kami / kita'), T('exclusivo / inclusivo')],
      ],
    },
  ],
};
