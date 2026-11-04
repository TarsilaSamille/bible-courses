import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('Capstone: Marcos 4,35-41'),
  subtitle: T('Taci, calmati!'),
  section: T('Leitura e sintaxe'),
  body: C(`## O texto

«La sera di quel giorno, quando si faceva buio, Gesù disse ai discepoli: "{Passiamo} all’altra parte del mare". E salì sulla barca con loro. E cominciò a salire la tempesta. Il vento soffiava violentemente e le onde battevano contro la barca. Ma Gesù dormiva sul cuscino a poppa. E si svegliò e disse a Pietro: "{Pietro}, che cos’è con te?". E Pietro gli rispose: "{Signore}, non ti curi che periamo?". E disse: "{Perché} avete paura?". E si alzò, e sgridò il vento e disse al mare: "{Taci}, {calmati}!". E il vento tacque e vi fu grande calma. E disse loro: "{Perché} non avevate fiducia?"»

As edições italianas divergem em duas palavras: onde a CEI diz {non ti preoccupi}, a NUFI diz {non ti curi}; e em algumas o verbo do sono é {destò} em vez de {si svegliò}. A cena é a mesma em todas.

## Artigos, elisões e fusões

Conte os artigos do primeiro período: {la sera}, {il giorno}, {il mare}. Na fala de Jesus, {all’altra} é a fusão de {a} + {l’altra}, do mesmo modo que {dal} e {nel}; e é por isso que a preposição articulada reaparece justamente na frase mais importante do texto. {L’altra} por si só é {l’} mais {altra}, a elisão diante de vogal.

Dois substantivos aparecem sem artigo, e nenhum dos dois é erro. Em {a poppa}, {poppa} é termo técnico de navegação e o artículo não é omitido por engano: em italiano técnico os termos de bordo costumam entrar crus. Em {vi fu grande calma}, o que dispensa o artigo é {grande}, que é indefinido: a frase não aponta para uma calma específica, e não poderia.

## Verbo, sujeito omitido e subordinadas

Os verbos alternam de propósito: {salì}, {si svegliò}, {tacque}, {vi fu} são perfeito, um evento; {soffiava}, {battevano}, {dormiva}, {si faceva buio} são imperfeito, a duração. E a alternância é o argumento: o narrador conta o que passou em ordem.

O sujeito some duas vezes. Em «{Passiamo} all’altra parte», {Passiamo} é primeira plural e o sujeito — Jesus e os discípulos — está na frase anterior. Em «{Perché} avete paura?», o sujeito de {avete} são os discípulos, e o italiano deixa isso implícito porque a situação inteira é deles.

As subordinadas são quatro, e cada uma faz um trabalho: **{quando si faceva buio}** é temporal, diz quando Jesus falou; **«che cos’è con te?»** é interrogativa, e o {che} é o pronome da pergunta, não uma conjunção; **«che periamo?»** traz {che} de volta, mas aqui como conjunção que introduz a recebedora de {curare}; **{perché avete paura}** e **{perché non avevate fiducia}** são perguntas diretas, e o {perché} é o mesmo.

## Onde está o gerúndio

Em nenhum lugar. Onde o português diria «estava dormindo» e o leitor espera um gerúndio, o italiano escreveu {dormiva}: o narrador escolheu o imperfeito porque queria dizer que Jesus dormia, ponto. Procurar gerúndio por hábito faz ver um que não está no texto.

O que existe são as perifrases: {cominciò a} {salire} é o equivalente de «começou a subir», {sgridò} o vento e {disse} ao mar são dois verbos coordenados, e a coordenada de {disse al mare} com {sgridò il vento} deixa a frase mais rápida do que uma subordinada faria.

## O que ler

Identifique sempre as quatro camadas: onde está o artigo, qual verbo está no perfeito e qual no imperfeito, que sujeito foi omitido, e que palavra introduz a subordinada. Depois leia de novo sem traduzir nada, e ouça se a frase ainda faz sentido. Uma leitura que ainda faz sentido depois dessa passada já é uma leitura.`),
  vocab: [
    V('sera', 'sera', 'tarde'),
    V('buio', 'buio', 'escuro'),
    V('discepolo', 'discepolo', 'discípulo'),
    V('barca', 'barca', 'barco'),
    V('tempesta', 'tempesta', 'tempestade'),
    V('vento', 'vento', 'vento'),
    V('onda', 'onda', 'onda'),
    V('cuscino', 'cuscino', 'travesseiro'),
    V('poppa', 'poppa', 'popa'),
    V('Pietro', 'Pietro', 'Pedro'),
    V('paura', 'paura', 'medo'),
    V('sgridare', 'sgridare', 'gritar'),
    V('Taci', 'tacere', 'cala-te'),
    V('calmati', 'calmarsi', 'acaima-te'),
    V('fiducia', 'fiducia', 'confiança'),
    V('mare', 'mare', 'mar'),
    V('perire', 'perire', 'morrer'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em «Passiamo all’altra parte del mare», quem fala?'),
    options: [
      T('Um sujeito novo, que aparece só aqui'),
      T('Jesus, com os discípulos, já nomeados'),
      T('Pedro, que fala no versículo seguinte'),
      T('O narrador, em terceira pessoa'),
    ],
    answer: 1,
    hint: T('O verbo é de primeira plural e o sujeito vem da frase anterior.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual verbo está no imperfeito na primeira metade do texto?'),
      options: [T('salì'), T('dormiva'), T('tacque'), T('si svegliò')],
      answer: 1,
      hint: T('O imperfeito marca o que durava.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete a fusão: a + l’altra → ___'),
      answer: 'all’altra',
      hint: T('A preposição se junta ao artigo elidido.'),
    },
    {
      kind: 'choose',
      prompt: T('Em «che cos’è con te?», o que é che?'),
      options: [
        T('Uma conjunção que introduz a pergunta'),
        T('O pronome interrogativo, o que se pergunta'),
        T('Um relativo que se refere a Gesù'),
        T('Um numeral'),
      ],
      answer: 1,
      hint: T('Não há verbo antes dele que peça uma oração.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O sujeito pode ser omitido quando a frase anterior o nomeou: Gesù disse... Passiamo all’altra parte.',
      ),
    },
    {
      n: '2',
      text: T('A preposição articulada aparece na fala de Jesus: all’altra = a + l’altra.'),
    },
    {
      n: '3',
      text: T(
        'Em «che cos’è con te?» o che é pronome interrogativo; em «che periamo?» é conjunção.',
      ),
    },
    {
      n: '4',
      text: T(
        'O verbo indica o que aponta para algo definido e dispensa o artigo: vi fu grande calma.',
      ),
    },
    { n: '5', text: T('O perfeito marca o evento, o imperfeito a duração: salì, mas dormiva.') },
  ],
  notes: [
    {
      label: T('Onze versículos, quatro subordinadas'),
      text: T(
        'A contagem importa porque é o que separa este texto de um trecho qualquer. Marcos 4,35-41 tem duas perguntas diretas, uma temporal e uma indireta, e nenhuma delas está marcada por uma conjunção que o português usa. O {che} italiano faz as duas vezes o trabalho de {que} e {como}.',
      ),
    },
    {
      label: T('O que muda entre edições'),
      text: T(
        '{non ti curi} e {non ti preoccupi} dizem a mesma coisa, e a escolha é de registro, não de sentido. O mesmo vale para {destò} e {si svegliò}. Se a sua tradução diverge da lição num desses dois pontos, ela está tão certa quanto a NUFI.',
      ),
    },
  ],
  examples: [
    { text: 'Gesù disse ai discepoli.', gloss: T('Jesus disse aos discípulos.') },
    { text: 'Passiamo all’altra parte del mare.', gloss: T('Vamos para o outro lado do mar.') },
    { text: 'Salì sulla barca con loro.', gloss: T('Subiu no barco com eles.') },
    { text: 'Il vento soffiava violentemente.', gloss: T('O vento soprava violentamente.') },
    {
      text: 'Ma Gesù dormiva sul cuscino a poppa.',
      gloss: T('Mas Jesus dormia no travesseiro à popa.'),
    },
    { text: 'Che cos’è con te?', gloss: T('O que é contigo?') },
    { text: 'Non ti curi che periamo?', gloss: T('Não te importas que pereçamos?') },
    { text: 'Perché avete paura?', gloss: T('Por que têm medo?') },
    { text: 'Taci, calmati!', gloss: T('Cala-te, acalma-te!') },
    {
      text: 'E il vento tacque e vi fu grande calma.',
      gloss: T('E o vento calou-se e houve grande calma.'),
    },
  ],
  tables: [
    {
      caption: T('Identificação no texto'),
      head: ['Parola', 'Che cos’è'],
      rows: [
        ['{la sera}', 'articolo + sostantivo femminile'],
        ['{all’altra}', 'fusione di a + l’altra'],
        ['{il vento}', 'articolo + sostantivo maschile'],
        ['{Passiamo}', 'verbo con soggetto omesso'],
        ['{quando si faceva buio}', 'subordinata temporale'],
        ['{che cos’è con te}', 'subordinata interrogativa'],
        ['{gli}', 'pronome indiretto (a Pietro)'],
        ['{non ti curi}', 'verbo con clitico e negazione'],
      ],
    },
    {
      caption: T('Perfeito e imperfeito'),
      head: ['Imperfetto (durava)', 'Perfetto (accadde)'],
      rows: [
        ['{si faceva buio}', '{disse}'],
        ['{salì}', '{cominciò a salire}'],
        ['{soffiava}', '{si svegliò}'],
        ['{battevano}', '{tacque}'],
        ['{dormiva}', '{vi fu grande calma}'],
      ],
    },
    {
      caption: T('Imperativos de Jesus'),
      head: ['Forma', 'Glossa', 'Persona'],
      rows: [
        ['{Passiamo}', 'vamos nosotros', '1ª plural, soggetto omesso'],
        ['{Taci}', 'cállate', '2ª singular'],
        ['{calmati}', 'calmaos', '2ª singular'],
      ],
    },
  ],
};
