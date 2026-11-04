import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('O substantivo: gênero e número'),
  subtitle: T('il libro, la casa; -o, -a, -e'),
  section: T('A sintaxe e o substantivo'),
  body: C(`## O gênero não se deduz: decora-se o par

O italiano não tem regra para o gênero. Não é a terminação, não é o som, não é o sentido: {la mano} e {il libro} têm a mesma estrutura e gêneros opostos. O que se faz é decorar o substantivo **sempre colado ao artigo**, porque é o par que aparece no texto e o artigo é a única pista que o italiano oferece.

Há um teste parcial para os substantivos em {-e}: troque por {il} e por {la} e veja qual dos dois soa. {Il nome} é masculino e {la nome} não existe. {La mente} é feminino, e {il mente} é o participio de {mentire}, uma palavra outra. {Il sale} é o sal; {la sale} é a conta que chegou.

## O plural: {-o} e {-a} viram, {-e} não diz nada

A grade é curta. Masculino em **-o** vira **-i**: {libro} → {libri}. Feminino em **-a** vira {-e}: {casa} → {case}. E tudo o que termina em {-e} vira {-i}, sem distinção de gênero: {il re} → {i re}, {la mano} → {le mani}, {il paese} → {i paesi}.

O detalhe que trava é o seguinte: **o plural italiano não revela o gênero**. A forma {i} é a mesma nos dois sexos, e quem precisa saber de qual é lê o artigo ou o adjetivo que acompanha: {gli studenti} alti, {le studenti} alte. Por isso o adjetivo continua flexionando no plural mesmo quando o substantivo já não flexiona.

## Na Bíblia

Gên 1:1 é uma aula de artigo em duas linhas: {In principio Dio creò il cielo e la terra}. Repare no par {il cielo} / {la terra}, um masculino e um feminino, dois artigos, duas terminações. Some-se {Dio}, que é masculino mesmo sendo aquilo que fez tudo o que é.

Gên 1:27 acrescenta o que a gramática italiana faz melhor: {Dio creò l’uomo a sua immagine, a immagine di Dio lo creò: maschio e femmina li creò}. {Maschio} e {femmina} são dois substantivos de gênero oposto no singular, dois artigos opostos, e {li} fecha a frase: é o pronome indireto {loro} sem o {loro}. Uma tradução que escreve {l’uomo e la donna} não está errada de memória; está modernizando.

## O que ler

Ao ver um substantivo italiano, faça duas perguntas antes de traduzir: que artigo o acompanha e que terminação ele tem no plural. Se o plural termina em {-e}, o gênero só sai do artigo do plural ou do adjetivo que vem junto.`),
  vocab: [
    V('libro', 'libro', 'livro'),
    V('casa', 'casa', 'casa'),
    V('mano', 'mano', 'mão'),
    V('nome', 'nome', 'nome'),
    V('mente', 'mente', 'mente'),
    V('sale', 'sale', 'sal / conta'),
    V('re', 're', 'rei'),
    V('paese', 'paese', 'país, povoado'),
    V('parte', 'parte', 'parte'),
    V('cielo', 'cielo', 'céu'),
    V('terra', 'terra', 'terra'),
    V('Dio', 'Dio', 'Deus'),
    V('uomo', 'uomo', 'homem'),
    V('maschio', 'maschio', 'masculino'),
    V('femmina', 'femmina', 'feminino'),
    V('libri', 'libro', 'livros'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o plural de il paese?'),
    options: [T('i paes'), T('i paesi'), T('i paese'), T('le paesi')],
    answer: 1,
    hint: T('Substantivo masculino em -e: o plural vai a -i.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o par: la casa → ___ case'),
      answer: 'le',
      hint: T('Feminino em -a vira -e.'),
    },
    {
      kind: 'choose',
      prompt: T('Como é o plural de la mano?'),
      options: [T('i mani'), T('le mani'), T('le mane'), T('gli mani')],
      answer: 1,
      hint: T('Termina em -a e é feminino.'),
    },
    {
      kind: 'fill',
      prompt: T('Qual é o artigo que revela o gênero de {nome}? ___ nome'),
      answer: 'il',
      hint: T('Teste: il ou la?'),
    },
  ],
  rules: [
    { n: '1', text: T('O gênero do substantivo italiano é arbitrário: só o artigo o revela.') },
    {
      n: '2',
      text: T('Masculino -o vira -i; feminino -a vira -e; -e vira -i sem indicar gênero.'),
    },
    { n: '3', text: T('No plural a terminação não diz o sexo: o artigo e o adjetivo o carregam.') },
    {
      n: '4',
      text: T('Diante de s + consoante, z, gn ou ps o masculino usa lo; diante de vogal, l’.'),
    },
    {
      n: '5',
      text: T('Substantivos em -e podem ser de qualquer gênero: il nome, la parte, il re.'),
    },
  ],
  notes: [
    {
      label: T('O teste do il/la'),
      text: T(
        '{il nome} é masculino e {la nome} não existe; {la mente} é feminino e {il mente} é outra palavra, o participio de {mentire}. Se o substantivo aceita os dois artigos, você não achou um gênero difícil: achou um par de homônimos.',
      ),
    },
    {
      label: T('Por que o artigo importa na leitura'),
      text: T(
        'Num texto bíblico o artigo não é enfeite: é ele que diz se {il Figlio} nomeia alguém ou uma coisa. Onde a tradução italiana escreve {la sapienza}, o tradutor não escolheu por som, escolheu por teologia.',
      ),
    },
  ],
  examples: [
    { text: 'Il libro è la parola di Dio.', gloss: T('O livro é a Palavra de Deus.') },
    { text: 'I libri sono qui, le case no.', gloss: T('Os livros estão aqui, as casas não.') },
    { text: 'Gli studenti sono alti.', gloss: T('Os estudantes são altos (masculino).') },
    { text: 'Le studenti sono alte.', gloss: T('As estudantes são altas (feminino).') },
    { text: 'Dio creò l’uomo a sua immagine.', gloss: T('Deus criou o homem à sua imagem.') },
    { text: 'Maschio e femmina li creò.', gloss: T('Maschio e fêmea os criou.') },
    { text: 'I re e le regine.', gloss: T('Os reis e as rainhas.') },
    { text: 'Le mani di Maria.', gloss: T('As mãos de Maria.') },
    { text: 'Il sale è sulla tavola.', gloss: T('O sal está sobre a mesa.') },
  ],
  tables: [
    {
      caption: T('Terminação e plural'),
      head: ['Singolare', 'Plurale', 'Genere'],
      rows: [
        ['il libro', 'i libri', 'masculino'],
        ['la casa', 'le case', 'femminile'],
        ['il re', 'i re', 'masculino'],
        ['la mano', 'le mani', 'femminile'],
        ['il paese', 'i paesi', 'masculino'],
        ['la parte', 'le parti', 'femminile'],
        ['il nome', 'i nomi', 'masculino'],
        ['la mente', 'le menti', 'femminile'],
      ],
    },
    {
      caption: T('O artigo como pista'),
      head: ['Articolo', 'Singolare', 'Plurale'],
      rows: [
        ['il', 'il libro', 'i libri'],
        ['lo', 'lo studente', 'gli studenti'],
        ['la', 'la casa', 'le case'],
        ['l’', 'l’albero', 'gli alberi'],
      ],
    },
  ],
};
