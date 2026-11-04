import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  section: T('A flexão da palavra e a concordância'),
  title: T('Fonologia e acentuação'),
  subtitle: T('Fonemas, sílabas e tonicidade'),
  body: C(`**Visão geral.** A {vogal} é o núcleo da sílaba: em {Deus}, o som {e} sozinho forma núcleo; em {Deus}, a sílaba {Deus} tem núcleo em {eu}.

**Regra 1.** A sílaba tônica pode ser a última, a penúltima ou a antepenúltima: {casa} é oxítona, {casa} paroxítona e {casa} proparoxítona.

**Regra 2.** O acento é obrigatório em oxítona terminada em {a}, {e}, {o} followed by {s}, or {n}: em {pão}, {café}, {sofás}, {padrões}.

**Regra 3.** O acento {diferencial} marca a diferença entre palavras iguais: em {tem} e {têm}, o acento diz {ele tem} de {eles têm}.

**Regra 4.** O grego antigo marca o acento pela posição, e não pelo som: {λόγος} é oxítono, {λόγου} paroxítono, e o mesmo acento vira acento português ou não.

**Aplicação.** Em {Ele tem razão}, o acento é **diferencial** e está no verbo {tem}, não em substantivo: a mesma forma {tem} escreve-se {têm} quando o sujeito é plural. Em {A versão 2.0 de Israel}, o {2.0} é um numeral com acento temporal, e não um nome de pessoa. O grego antigo **não tinha acento gráfico** como o português: a acentuação grega é aditiva e marca o acento por aguda ou grave conforme a sílaba.

**Verificação.** Faça três perguntas: quantas sílabas tem a palavra? A tônica é a última, a penúltima ou a antepenúltima? A palavra termina em vogal, {n} ou {s}? Com as três, o acento obrigatório sai. E desconfie de palavra que parece sem acento: se é oxítona terminada em vogal, {n} ou {s}, o acento é obrigatório e está lá.`),
  vocab: [
    V('fonema', 'fonema', 'menor som distintivo'),
    V('vogal', 'vogal', 'som que forma o núcleo da sílaba'),
    V('consoante', 'consoante', 'som que não forma núcleo sozinho'),
    V('sílaba', 'sílaba', 'grupo com uma vogal como núcleo'),
    V('tônica', 'tônica', 'sílaba de maior intensidade'),
    V('oxítona', 'oxítona', 'tônica na última sílaba'),
    V('paroxítona', 'paroxítona', 'tônica na penúltima sílaba'),
    V('entonação', 'entonação', 'curva da voz na fala'),
    V('tem', 'tem', '3.ª do singular, sem acento diferencial'),
    V('têm', 'têm', '3.ª do plural, com acento diferencial'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'A {vogal} é o núcleo da sílaba: em {Deus}, o som {e} sozinho forma núcleo; em {Deus}, a sílaba {Deus} tem núcleo em {eu}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'A sílaba tônica pode ser a última, a penúltima ou a antepenúltima: {casa} é oxítona, {casa} paroxítona e {casa} proparoxítona.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O acento é obrigatório em oxítona terminada em {a}, {e}, {o} followed by {s}, or {n}: em {pão}, {café}, {sofás}, {padrões}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O acento {diferencial} marca a diferença entre palavras iguais: em {tem} e {têm}, o acento diz {ele tem} de {eles têm}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O grego antigo marca o acento pela posição, e não pelo som: {λόγος} é oxítono, {λόγου} paroxítono, e o mesmo acento vira acento português ou não.',
      ),
    },
  ],
  notes: [
    {
      label: T('O acento grego que marca posição, não som'),
      text: T(
        'O grego antigo era adiativo: escrevia-se {λόγος} e {λόγου} com o mesmo acento porque o tom grego é recuado e a sílaba final não leva acento. Quem traduz precisa decidir se leva a tonicidade do grego para o português, e quase nunca leva: {logos} em português vira {logotipo} ou {Logos}, com o acento no começo. A tonicidade grega é informação, e perde-se na transcrição.',
      ),
    },
    {
      label: T('O acento diferencial e o que ele salva'),
      text: T(
        'Em {Ele tem razão} e {Eles têm razão}, só o acento distingue uma frase da outra, e o que ele salva é a informação de número do sujeito. É o único acento do português que não marca tonicidade: marca contraste entre duas palavras escritas igual. Todo o resto da acentuação grega é sobre onde a voz bate; este é sobre quem faz a ação.',
      ),
    },
  ],
  examples: [
    { text: 'casa', gloss: T('Paroxítona: a tônica é a penúltima sílaba, {ca}.') },
    { text: 'cántaro', gloss: T('Proparoxítona: a tônica é a antepenúltima sílaba, {cán}.') },
    { text: 'sofá', gloss: T('Oxítona terminada em {a}: o acento é obrigatório.') },
    { text: 'sofás', gloss: T('Oxítona terminada em {s}: o acento continua obrigatório.') },
    { text: 'pão', gloss: T('Oxítona terminada em {ão}: o acento fica no {ã} e não no {o}.') },
    {
      text: 'parcial',
      gloss: T('Paroxítona terminada em {l}: o acento é facultativo e normalmente não se escreve.'),
    },
    {
      text: 'Ele tem razão.',
      gloss: T('Acento diferencial ausente: o sujeito é {ele}, e a frase é afirmativa.'),
    },
    {
      text: 'Eles têm razão.',
      gloss: T('Acento diferencial presente: o sujeito é {eles}, e o acento diz isso.'),
    },
    {
      text: 'A versão 2.0 de Israel',
      gloss: T('{2.0} é numeral com acento temporal, e não nome de pessoa.'),
    },
  ],
  tables: [
    {
      caption: T('Tonicidade e acento'),
      head: [T('Tipo'), T('Onde fica a tônica'), T('Acento'), T('Exemplo')],
      rows: [
        [T('{oxítona}'), T('última sílaba'), T('nem sempre'), T('{sofá}')],
        [T('{paroxítona}'), T('penúltima sílaba'), T('às vezes'), T('{parcial}')],
        [T('{proparoxítona}'), T('antepenúltima sílaba'), T('nunca'), T('{cântaro}')],
        [T('{heptassílaba}'), T('sétima sílaba'), T('nunca'), T('{{exceção}}')],
      ],
    },
    {
      caption: T('Acento obrigatório, por terminação'),
      head: [T('Termina em'), T('Tipo'), T('Acento'), T('Exemplo')],
      rows: [
        [T('{a}, {e}, {o}'), T('oxítona'), T('obrigatório'), T('{sofá}, {café}')],
        [T('{n}, {s}'), T('oxítona'), T('obrigatório'), T('{padrões}, {sofás}')],
        [T('{ão}'), T('oxítona'), T('obrigatório'), T('{pão}')],
        [T('{i}, {u} sem {s}'), T('oxítona'), T('obrigatório'), T('{saí}, {argúi}')],
        [T('consoante'), T('oxítona'), T('nunca'), T('{fúlgido}')],
        [T('{l}'), T('paroxítona'), T('facultativo'), T('{parcial}')],
        [T('{n}'), T('paroxítona'), T('facultativo'), T('{imenso}')],
      ],
    },
    {
      caption: T('Acento diferencial entre palavras iguais'),
      head: [T('Sem acento'), T('Com acento'), T('Diferença'), T('Frase')],
      rows: [
        [T('{tem}'), T('{têm}'), T('singular e plural'), T('{ele tem}, {eles têm}')],
        [T('{sou}'), T('{só}'), T('verbo e advérbio'), T('{sou fiel}, {só ele vem}')],
        [T('{tu}'), T('{tú}'), T('pronome e advérbio'), T('{tu vens}, {aqui só tu}')],
        [T('{ele}'), T('{éle}'), T('pronome e advérbio antigo'), T('{ele vai}, {éle próprio}')],
        [T('{por}'), T('{pôr}'), T('preposição e verbo'), T('{por amor}, {vou pôr o sol}')],
        [
          T('{quase}'),
          T('{quase}'),
          T('advérbios em orações distintas'),
          T('{quase três}, {quase não}'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {sofás}, o acento é:'),
    options: [
      T('obrigatório, porque é oxítona terminada em {s}'),
      T('facultativo, como em toda paroxítona'),
      T('diferencial, porque distingue de {sofa}'),
      T('inexistente, porque a palavra já tem {s}'),
    ],
    answer: 0,
    hint: T('Oxítona terminada em {s} leva acento sempre.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('A diferença entre {tem} e {têm} é marcada por:'),
      options: [
        T('um acento diferencial, que diz o número do sujeito'),
        T('uma vogal diferente no meio da palavra'),
        T('a terminação {m} contra {n}'),
        T('a entonação da frase'),
      ],
      answer: 0,
      hint: T('As duas palavras são iguais por escrito fora do acento.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a palavra ao tipo de tonicidade que ela tem.'),
      pairs: [
        { a: T('{café}'), b: T('{oxítona}') },
        { a: T('{parcial}'), b: T('{paroxítona}') },
        { a: T('{cântaro}'), b: T('{proparoxítona}') },
        { a: T('{imenso}'), b: T('paroxítona com acento facultativo') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T(
        'A sílaba que leva o acento é a sílaba ______. The syllable that carries the accent is the ______ syllable.',
      ),
      answer: 'tônica',
      hint: T('Em {café}, a tônica é {fé}.'),
    },
  ],
};
