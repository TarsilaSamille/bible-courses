import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('Escrita'),
  title: T('Pinyin: ler sem saber falar'),
  subtitle: T('A romanização que torna o charset procurável no teclado'),
  body: C(`## Para que serve o pinyin

O pinyin é a romanização oficial do chinês, aprovada em 1958. Ele não é uma língua: é o mapa entre a letra que se digita e o caractere que se vê. Quem está no teclado do celular precisa dele; quem lê caracteres não precisa.

São duas propriedades que o tornam útil a quem está a aprender. A primeira: **é fonético e regular**, cada letra corresponde sempre ao mesmo som, e as iniciais e as finais têm uma lista fechada. Com uma ressalva que os cursos de chinês omitem: cada letra tem um som, mas o mesmo som pode ter duas letras. O {sh} e o {x} soam quase iguais, o {n} e o {l} também, e só o contexto os distingue. A regra corre num sentido só. A segunda: **o mesmo caractere pode ter várias leituras**, mas quase sempre uma só. {行} é {xíng}, "andar", ou {háng}, "fileira", e decide o contexto.

## As iniciais e as finais

As iniciais, o som que vem antes, são vinte e uma: {b p m f d t n l g k h j q x zh ch sh r z c s}. Quatro delas se escrevem com duas letras, {zh}, {ch}, {sh} e {r}, e é por isso que a conta confunde: vinte e um sons, mas dezessete símbolos se cada par contar como um. O {r} não é o "r" de outras línguas; é retroflexo, falado com a ponta da língua curvada, e é o motivo de {zh ch sh r} existirem como grupo. As finais, o som que vem depois, são mais numerosas, e é aí que o Mandarin obriga a pensar: {i}, {u} e {ü} aparecem escritos assim depois de {j q x y}, e {yu} ocupa o lugar de {ü}.

O {ü} é o som de "você" em Mandarin. Depois de {j q x y} escreve-se {u}: {jū} vale {jü}, {yuè} vale {yüe}. Fora desse grupo, o Mandarin não tem esse som.

## O que o pinyin resolve na leitura da Bíblia

O pinyin torna os textos chineses procuráveis por som: quem ouviu {Yēsū} numa pregação pode escrever {耶稣} no teclado. Também permite verificar a pronúncia de um nome próprio isolado, coisa que o contexto nem sempre revela.`),
  vocab: [
    V('xíng', '行', 'andar (xíng); fileira (háng)'),
    V('和合', '和合', 'união; conjunto (héhé)'),
    V('字', '字', 'caractere (zì)'),
    V('拼音', '拼音', 'romanização (pīnyīn)'),
    V('声母', '声母', 'som inicial (shēngmǔ)'),
    V('韵母', '韵母', 'som final (yùnmǔ)'),
    V('耶稣', '耶稣', 'Jesus (Yēsū)'),
    V('北', '北', 'norte (běi)'),
    V('白', '白', 'branco; dizer (bái)'),
  ],
  rules: [
    { n: '1', text: T('Pinyin é fonético: cada letra tem sempre o mesmo som.') },
    { n: '2', text: T('As iniciais são dezessete; {zh}, {ch} {sh} e {r} são casos especiais.') },
    { n: '3', text: T('Depois de {j q x y}, o {ü} escreve-se {u}: {jū} = {jü}, {yuè} = {yüe}.') },
    { n: '4', text: T('Um mesmo caractere pode ter mais de uma leitura; o contexto decide.') },
  ],
  notes: [
    {
      label: T('Pinyin não é pronúncia de diccionario'),
      text: T(
        'O pinyin escreve o som, mas não marca o tom. Por isso {ma} pode ser {mā} (mãe), {má} (cavalo) ou {mǎ} (peça de xadrez) — a lição 3 trata disso.',
      ),
    },
  ],
  examples: [
    { text: '北', gloss: T('běi — norte') },
    { text: '白', gloss: T('bái — branco') },
    { text: '行', gloss: T('xíng — andar; háng — fileira') },
  ],
  tables: [
    {
      caption: T('Iniciais do pinyin'),
      head: [T('Grupo'), T('Letras'), T('Som')],
      rows: [
        [T('Bilabial'), T('{b} {p} {m}'), T('lábios')],
        [T('Dental'), T('{d} {t} {n} {l}'), T('língua nos dentes')],
        [T('Velar'), T('{g} {k} {h}'), T('fundo da boca')],
        [T('Palatal'), T('{j} {q} {x}'), T('palato')],
        [T('Retroflexo'), T('{zh} {ch} {sh} {r}'), T('líquia dobrada')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Depois de {j}, o {ü} escreve-se como?'),
    options: [T('{v}'), T('{u}'), T('{ü}'), T('{yu}')],
    answer: 1,
    hint: T('Vale para {j q x y}. Depois de outras, mantém-se o {ü}.'),
  },
  exercises: [
    { kind: 'fill', prompt: T('Escreva o caractere do norte, lido {běi}: ____'), answer: '北' },
    {
      kind: 'match',
      prompt: T('Ligue a inicial ao grupo'),
      pairs: [
        { a: T('{b} {p} {m}'), b: T('bilabial (lábios)') },
        { a: T('{g} {k} {h}'), b: T('velar (fundo da boca)') },
        { a: T('{zh} {ch} {sh}'), b: T('retroflexo') },
        { a: T('{j} {q} {x}'), b: T('palatal (palato)') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};
