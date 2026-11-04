import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('O verbo'),
  title: T('Os verbos essenciais'),
  subtitle: T('{go}, {come}, {be}, {have}, {do}, {say} e os catorze que resolvem quase tudo'),
  body: C(`## Vinte verbos, três colunas cada

Um verbo regular tem uma regra só: no passado recebe {-ed}, e é isso. {work}, {worked}, {worked}; {love}, {loved}, {loved}; {open}, {opened}, {opened}. O irregular quebra a regra nas duas colunas ao mesmo tempo, e é por isso que {eat}, {ate}, {eaten} não se deduz de nada.

O número é pequeno e o peso é grande. {be}, {have}, {do}, {go}, {come}, {say}, {get}, {make}, {know}, {think}, {take}, {see}, {give}, {find}, {tell}, {become}, {leave}, {feel}, {put} e {bring} cobrem mais da metade dos verbos que aparecem num capítulo de Evangelho em inglês. Quem conhece os vinte reconhece o resto por contexto, mesmo sem saber a forma.

O que muda de uma língua para outra é o que se guarda. O português guarda o infinitivo, o pretérito e o particípio, e quase todos os irregulares fazem os três com a mesma raiz: {falei}, {falado}, {parti}, {partido}, {vi}, {visto}. O inglês guarda o presente, o passado e o particípio, e nos irregulares o passado e o particípio costumam ser **duas palavras diferentes**: {go}, {went}, {gone}; {eat}, {ate}, {eaten}; {see}, {saw}, {seen}.

## {Be}: o verbo que não tem forma fixa

{Be} é o único verbo do inglês que muda de forma no presente conforme a pessoa: {I am}, {you are}, {he is}, {we are}, {they are}. O português resolve a mesma coisa com {sou}, {és}, {é}, {somos}, {são}, e o grego com {εἰμί}, que é uma forma só para todas as pessoas. São três soluções para o mesmo problema, e o inglês é o único que repete a palavra.

No passado são duas: {I was}, {he was}, {they were}. No particípio, uma: {been}, mais o gerúndio {being}. São cinco formas para um verbo, e nenhuma delas se parece com a do presente: {am}, {is}, {are}, {was}, {were}, {been}, {being}.

O erro que o texto bíblico provoca está em {be} contra {become}. João 1:14 diz {the Word became flesh}, e o grego é {ὁ λόγος σὰρξ ἐγένετο}, *aoristo* de {γίνομαι}, que é {become}. Traduzir por {was} conserva a forma simples e apaga o verbo que diz que algo passou a existir. {Was} e {became} não são sinônimos em inglês, ainda que a regra do português faça parecer que são.

## Duas colunas, e não uma

O passado e o particípio dos irregulares são **duas colunas separadas**, e nem sempre coincidem. Quando coincidem, a mesma palavra serve nos dois tempos: {come}, {came}, {come}; {do}, {did}, {done}; {say}, {said}, {said}. Quando não coincidem, são duas palavras: {write}, {wrote}, {written}; {break}, {broke}, {broken}; {choose}, {chose}, {chosen}; {sing}, {sang}, {sung}.

É a coluna do particípio que o leitor quase nunca tem à mão. Em {has eaten}, {gone}, {written}, {seen} e {taken}, o passado {ate}, {went}, {wrote}, {saw} e {took} são mais conhecidos, e quem troca uma pela outra escreve {has ate}, {has went}, {has saw}. O participio governa os tempos compostos e é o que mais aparece no texto.

## {Say}, {tell}, {speak}, {talk}: quatro verbos que o português junta em dois

{say} é o que se diz com palavras, {tell} é o que se diz a alguém: {he said} e {he told Mary}. {speak} é o ato de falar, e {talk} é a conversa, que pode ser entre duas pessoas ou com a própria língua: {he spoke to the crowd}, {he talked with her}.

{say} e {tell} formam o mesmo par que {falar} e {dizer} forma em português, mas invertido: em português {dizer} serve para os dois ({disse} e {contou}), e em inglês são dois verbos. No texto bíblico isso aparece em Marcos 1:30, onde {told} e {said} traduzem o mesmo verbo grego, {ἀπήγγειλαν}, e a tradução brasileira precisa escolher.

## Na Bíblia

KJV é a tradução que mais sofre com essa escolha, porque usa uma palavra inglesa para cada verbo grego. Marcos 4:39 traz {Peace, be still}, e o grego é {Σιωπήσον καὶ γαλάσσου}; em João 1:1, {In the beginning was the Word} traz {was} por {ἦν}; em João 1:14, {the Word became flesh} traz {became} por {ἐγένετο}. Três verbos gregos diferentes, três palavras inglesas diferentes, e é essa correspondência que o leitor precisa enxergar.`),
  vocab: [
    V('be', 'be', 'ser / estar'),
    V('am', 'be', 'eu sou'),
    V('is', 'be', 'ele é'),
    V('were', 'be', 'nós éramos'),
    V('been', 'be', 'sido'),
    V('being', 'be', 'estando'),
    V('go', 'go', 'ir'),
    V('went', 'go', 'foi'),
    V('gone', 'go', 'ido'),
    V('come', 'come', 'vir'),
    V('came', 'come', 'veio'),
    V('have', 'have', 'ter'),
    V('has', 'have', 'ele tem'),
    V('had', 'have', 'ele tinha'),
    V('do', 'do', 'fazer'),
    V('did', 'do', 'fez'),
    V('done', 'do', 'feito'),
    V('say', 'say', 'dizer'),
    V('eat', 'eat', 'comer'),
    V('ate', 'eat', 'comeu'),
    V('eaten', 'eat', 'comido'),
    V('was', 'be', 'ele era'),
    V('became', 'become', 'tornou-se'),
    V('tell', 'tell', 'contar a alguém'),
    V('told', 'tell', 'contou'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Nos irregulares o passado e o particípio são duas colunas e nem sempre a mesma palavra: {go}, {went}, {gone}; {eat}, {ate}, {eaten}; {write}, {wrote}, {written}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{be} tem sete formas: {am}, {is}, {are}, {was}, {were}, {been}, {being}. Nenhum outro verbo do inglês muda de forma no presente conforme a pessoa.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Depois de {does} e {did} volta o verbo na forma base: {he does go}, nunca {he does goes}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Depois de um modal o verbo não flexiona: {can go}, {must go}, {will go}, {should go}. {goes} é impossível aí.',
      ),
    },
    {
      n: '§5',
      text: T(
        'João 1:1 tem {was} por {ἦν} e João 1:14 tem {became} por {ἐγένετο}. São verbos gregos diferentes e palavras inglesas diferentes; {was} e {became} não são sinônimos.',
      ),
    },
  ],
  notes: [
    {
      label: T('O particípio que quase ninguém tem à mão'),
      text: T(
        'O passado irregular {ate}, {went}, {wrote}, {saw} e {took} é o mais conhecido, e o particípio {eaten}, {gone}, {written}, {seen} e {taken} é o que aparece nos tempos compostos. Trocá-los produz {has ate} e {has went}, que o leitor reconhece como errado mesmo sem saber a regra.',
      ),
    },
    {
      label: T('O que a KJV perde'),
      text: T(
        'Marcos 4:39 traz {Peace, be still}, e o grego é {Σιωπήσον καὶ γαλάσσου}, com {σιωπήσον} no imperativo aoristo. A KJV perdeu o aoristo e o português antigo também; quem lê o grego sabe que o verbo pede obediência imediata e não uma atmosfera de calma.',
      ),
    },
  ],
  examples: [
    {
      text: 'In the beginning was the Word.',
      gloss: T('{was}: {be} no passado, traduzindo {ἦν} do grego.'),
    },
    {
      text: 'And the Word became flesh.',
      gloss: T('{became}: {become}, traduzindo {ἐγένετο}, que é outro verbo grego.'),
    },
    {
      text: 'He has eaten the bread.',
      gloss: T('{has eaten}: presente composto com {has} e o particípio.'),
    },
    {
      text: 'They have gone to the mountain.',
      gloss: T('{gone} é o particípio; o passado correspondente seria {went}.'),
    },
    { text: 'Peace, be still!', gloss: T('Imperativo de {be}, Mc 4:39.') },
    { text: 'He told Mary everything.', gloss: T('{told} de {tell}: o que se diz a alguém.') },
    { text: 'He said nothing.', gloss: T('{said} de {say}: o que se diz com palavras.') },
    {
      text: 'She does not go there.',
      gloss: T('Depois de {does}, o verbo volta à forma base {go}.'),
    },
    {
      text: 'They must go.',
      gloss: T('Depois de um modal o verbo não flexiona: {go}, nunca {goes}.'),
    },
    {
      text: 'I have written the letter.',
      gloss: T('{written}: o particípio de {write}, e não {wrote}.'),
    },
  ],
  tables: [
    {
      caption: T('Os verbos essenciais em três colunas'),
      head: [T('Base'), T('Passado'), T('Particípio'), T('Português')],
      rows: [
        [T('{be}'), T('{was}'), T('{been}'), T('{ser / estar}')],
        [T('{go}'), T('{went}'), T('{gone}'), T('{ir}')],
        [T('{come}'), T('{came}'), T('{come}'), T('{vir}')],
        [T('{have}'), T('{had}'), T('{had}'), T('{ter}')],
        [T('{do}'), T('{did}'), T('{done}'), T('{fazer}')],
        [T('{say}'), T('{said}'), T('{said}'), T('{dizer}')],
        [T('{see}'), T('{saw}'), T('{seen}'), T('{ver}')],
        [T('{take}'), T('{took}'), T('{taken}'), T('{tomar}')],
        [T('{give}'), T('{gave}'), T('{given}'), T('{dar}')],
        [T('{eat}'), T('{ate}'), T('{eaten}'), T('{comer}')],
        [T('{write}'), T('{wrote}'), T('{written}'), T('{escrever}')],
        [T('{break}'), T('{broke}'), T('{broken}'), T('{quebrar}')],
      ],
    },
    {
      caption: T('{Be} em todas as suas formas'),
      head: [T('Tempo'), T('Forma'), T('Pessoa'), T('Exemplo')],
      rows: [
        [T('presente'), T('{am}'), T('{I}'), T('{I am}')],
        [T('presente'), T('{are}'), T('{you / we / they}'), T('{they are}')],
        [T('presente'), T('{is}'), T('{he / she}'), T('{he is}')],
        [T('passado'), T('{was}'), T('{I / he / she / it}'), T('{he was}')],
        [T('passado'), T('{were}'), T('{you / we / they}'), T('{they were}')],
        [T('particípio'), T('{been}'), T('—'), T('{has been}')],
        [T('gerúndio'), T('{being}'), T('—'), T('{is being made}')],
      ],
    },
    {
      caption: T('Quatro verbos que o português junta em dois'),
      head: [T('Verbo'), T('O que significa'), T('Frase'), T('Português')],
      rows: [
        [T('{say}'), T('dizer com palavras'), T('{he said}'), T('{disse}')],
        [T('{tell}'), T('contar a alguém'), T('{he told her}'), T('{contou a ela}')],
        [T('{speak}'), T('falar, com tom oficial'), T('{he spoke}'), T('{falou}')],
        [T('{talk}'), T('conversar'), T('{he talked}'), T('{conversou}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em "they have __ the bread", qual forma de {eat}?'),
    options: [T('eat'), T('ate'), T('eaten'), T('eats')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('O particípio de {write} é ______, e o passado é {wrote}.'),
      answer: 'written',
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo à sua forma na terceira coluna.'),
      pairs: [
        { a: T('{see}'), b: T('{seen}') },
        { a: T('{take}'), b: T('{taken}') },
        { a: T('{go}'), b: T('{gone}') },
        { a: T('{give}'), b: T('{given}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em "he ___ go every day", qual verbo completa corretamente?'),
      options: [T('do'), T('does'), T('did'), T('doing')],
      answer: 1,
    },
  ],
};
