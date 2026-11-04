import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  section: T('Sintaxe'),
  title: T('Conectivos: as palavras que costuram as frases e revelam a mentalidade do texto'),
  subtitle: T(
    'No coreano o conectivo vem depois do verbo, no fim da oração, e essa posição diz mais sobre o texto do que a própria palavra',
  ),
  body: C(`## O conectivo não entra onde você espera

Em português você escreve "eu vou e como": o "e" fica no meio, entre as duas orações, e é ele que costura uma à outra. O coreano faz o contrário. Os conectivos que **somam** — {geureo} ("e, e então"), {hago} ("e, e também") e {hyeonchan} ("também, ademais") — entram **depois do verbo**, no fim da oração que governam. *Neoneun bap-eul meok-go hak-gyo-e ga-neun-da* quer dizer "eu como e vou para a escola": o {go} grudado em {meokgo} é o verbo "comer", e o {go} da segunda oração é o mesmo som do {hago}, agora com a função de conectivo.

Por isso o tradutor precisa montar a frase na ordem coreana e não na ordem portuguesa. Em português o conectivo vem entre as orações; em coreano ele **fecha** a primeira delas. "Eu vou comer e" já é uma frase coreana completa e bem formada, e a oração que vem depois dela é a segunda metade da ideia. O conectivo amarra as orações ficando no meio da frase, nunca entre elas.

E o mesmo som {go} aparece duas vezes com dois papéis, e só a posição diz qual é qual: grudado a um substantivo ele é verbo, grudado a uma oração já fechada ele é conectivo. Quem aprende só pelo ouvido erra; quem aprende pela posição acerta.

## Contraste: um "mas" e os seus graus

{jiman} é o "mas" de corte: ele chega no fim da primeira oração e desmente o que ela acabava de dizer. {geureodo} faz o mesmo trabalho com menos peso, é o "mas, ainda assim", o contraste que não interrompe e apenas desvia o rumo. {geureona} é a forma mais escrita e mais antiga do mesmo {geureodo}, e {imyeon} é o "ao passo que", o contraste entre duas coisas que seguiam em paralelo sem nunca se encontrarem.

Os quatro vêm no fim da oração, e essa é a parte que surpreende. Em português o "mas" é uma ponte: você a atravessa ao chegar na segunda oração. Em coreano o contraste é um fecho; ele só chega depois que a segunda oração já começou, já disse o seu sujeito e já fez o seu verbo, e aí se vira para trás e corrige. O ouvinte de coreano não espera o contraste na entrada da oração, e por isso um texto traduzido com {jiman} no lugar errado soa errado antes de qualquer palavra ser notada.

## Causa, consequência e o par fixo

{ttaeumane} é "porque", {georeumeuro} é "portanto" e {deuraseo} é o "por isso" do uso corrente. {eoseo} é o mais elementar de todos: é o "porque é que" que vem grudado no fim do verbo, e *bi-ga o-seo* quer dizer "porque chove", sem nenhuma palavra a mais. Repare que os quatro fecham a oração anterior em vez de abrir a seguinte: a causa é dita depois do efeito, e o efeito é dito depois da causa.

O par {ttaeumane} ... {georeumeuro} é fixo, tão automático quanto "porque... portanto" em português, e o par {ttaeumane} ... {deuraseo} é o mesmo par na fala corrente. {georeumeuro} é o membro escrito, {deuraseo} é o popular, e nenhum dos dois precisa do outro para funcionar.

A comparação com as outras duas línguas do projeto mostra a mesma coisa. Em mandarim, *yīnwèi* ("porque") e *suǒyǐ* ("portanto") abrem a oração: vêm **antes** do sujeito. No japonês, *kara* e *node* também fecham a oração. No coreano, {ttaeumane} e {georeumeuro} fecham. São duas posições para a mesma ideia, e é a posição, não o vocabulário, que separa as línguas.

## Condição, concessão e o que a posição revela

{myeon} é o "se": *bi-ga o-myeon an ga-yo*, "se chover, eu não vou". {neunimyeon} é o "se fosse", o modo hipotético, mais cuidadoso. {geureodo} volta aqui com outro sentido: como concessão, "ainda que". {daui} é o "apenas, só", e corta o resto da frase. A exceção é {ttak}: {ttak} vai no **início** da oração e é raro, e o leitor que encontra um {ttak} num texto sabe que encontrou algo fora do padrão.

E a conclusão não é análise literária: é ordem de fala. Conectivo no fim da oração significa que o falante **organiza o discurso pelo verbo**. Ele primeiro diz o que aconteceu e só depois comenta o que aquilo significa. Conectivo no início, que é o caso do mandarim, significa que o falante **organiza pelo contexto**: ele primeiro anuncia a intenção, a causa ou o contraste, e só depois diz o que aconteceu. As duas línguas dizem a mesma coisa sobre o mundo; muda por onde o falante começa, e isso é automatismo, não estilo.

O gancho bíblico fecha a lição. A tradução coreana de 1917 foi literal e reflete o grego, que também fecha a oração com o conectivo, como todas as línguas indo-europeias, e por isso o coreano antigo acumula "então... e... e" em quase toda linha. A tradução de 1961 modernizou a sintaxe e enxugou esses conectivos, e é por isso que ela soa diferente das outras. E o exemplo mais conhecido mostra a regra funcionando: em João 3:16, "porque Deus amou o mundo", o "porque" do português abre o versículo, mas o {ttaeumane} coreano fecha a oração anterior, exatamente como fez em grego. Em 1 Coríntios 13:4 a 13:8 o contraste é o tecido da passagem inteira, e a lista de *sarang-eun ora-e cho-go*, "o amor é paciente", é cortada pela metade no versículo seguinte, com o {jiman} chegando só no fim da oração.
`),
  vocab: [
    V('geureo', '그리고', 'e, e então: conectivo de soma no fim da oração'),
    V('hago', '하고', 'e, e também: mesma função, forma mais curta'),
    V('hyeonchan', '또한', 'também, ademais: adição mais formal'),
    V('jiman', '지만', 'mas: contraste forte, no fim da oração'),
    V('geureodo', '그래도', 'mas, ainda assim: contraste suave e concessão'),
    V('geureona', '그러나', 'porém: forma escrita de geureodo'),
    V('imyeon', '이면', 'ao passo que, enquanto: contraste em paralelo'),
    V('myeon', '면', 'se, caso de: condicional no fim da oração'),
    V('neunimyeon', '느니면', 'se, se fosse: condicional hipotético'),
    V('daui', '다만', 'apenas, só: corta o resto da frase'),
    V('ttak', '딱', 'ainda, exatamente: vai no início e é raro'),
    V('ttaeumane', '때문에', 'porque, por causa de: causa no fim da oração'),
    V('eoseo', '어서', 'porque é que: causa colada no fim do verbo'),
    V('deuraseo', '그래서', 'por isso: consequência do uso corrente'),
    V('georeumeuro', '그러므로', 'portanto: membro escrito do par fixo'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Conectivos de soma ({geureo}, {hago}, {hyeonchan}) e de contraste ({jiman}, {geureodo}, {geureona}, {imyeon}) entram depois do verbo, no fim da oração que governam.',
      ),
    },
    {
      n: '2',
      text: T(
        '{jiman} é o corte forte; {geureodo} é o desvio suave e dobra como concessão. Os dois chegam depois que a segunda oração já disse o seu verbo.',
      ),
    },
    {
      n: '3',
      text: T(
        '{ttaeumane} e {georeumeuro} formam um par fixo; {deuraseo} e {eoseo} são as formas correntes da causa e da consequência, todas no fim da oração.',
      ),
    },
    {
      n: '4',
      text: T(
        'Condição e concessão: {myeon}, {neunimyeon} e {geureodo}, no fim. A exceção é {ttak}, que vai no início e é raro.',
      ),
    },
    {
      n: '5',
      text: T(
        'No coreano o conectivo fecha a oração; no mandarim ele a abre. Os dois caminhos são automáticas, e é essa ordem que o falante interiorizou.',
      ),
    },
  ],
  notes: [
    {
      label: T('O mesmo som com dois papéis'),
      text: T(
        'O som {go} aparece dentro de {meokgo}, que é o verbo "comer", e dentro de {hago}, que é o conectivo "e". Nada na palavra distingue os dois: é a posição que diz qual é qual, e por isso a posição é o primeiro que se ensina.',
      ),
    },
    {
      label: T('O grego também fecha a oração'),
      text: T(
        'A tradução coreana de 1917 foi literal e reflete o grego, em que os conectivos vêm no fim da oração como em todas as línguas indo-europeias. Daí o coreano antigo acumular "então... e... e". A tradução de 1961 enxugou esses conectivos, e é por isso que ela soa diferente.',
      ),
    },
  ],
  examples: [
    {
      text: '밥을 먹고 학교에 가요',
      gloss: T('ba-beul meok-go hak-gyo-e ga-yo — eu como e vou para a escola'),
    },
    {
      text: '비가 오지만 우산은 안 가져왔어요',
      gloss: T(
        'bi-ga o-ji-man u-san-eun an ga-jeo-wa-sseo-yo — chove, mas eu não levei guarda-chuva',
      ),
    },
    {
      text: '배가 아파서 병원에 갔어요',
      gloss: T(
        'bae-ga a-pa-seo byeong-won-e ga-sseo-yo — estava com dor de barriga, então fui ao hospital',
      ),
    },
    { text: '비가 오면 안 가요', gloss: T('bi-ga o-myeon an ga-yo — se chover, eu não vou') },
    { text: '사랑은 오래 참고', gloss: T('sa-rang-eun o-ra-e cho-go — o amor é paciente') },
  ],
  tables: [
    {
      caption: T('Os conectivos de contraste e o grau do corte'),
      head: [T('Conectivo'), T('Glosa'), T('Posição'), T('Tom')],
      rows: [
        [T('{jiman}'), T('mas'), T('fim da 1ª oração'), T('corte forte')],
        [
          T('{geureodo}'),
          T('mas, ainda assim'),
          T('fim da 1ª oração'),
          T('desvio suave; também é concessão'),
        ],
        [T('{geureona}'), T('porém'), T('fim da 1ª oração'), T('registro escrito')],
        [T('{imyeon}'), T('ao passo que'), T('fim da 1ª oração'), T('contraste em paralelo')],
      ],
    },
    {
      caption: T('Onde o conectivo entra em cada uma das três línguas'),
      head: [T('Função'), T('Mandarim'), T('Japonês'), T('Coreano')],
      rows: [
        [T('e'), T('*ér*, no início da 2ª oração'), T('*to*, no fim'), T('{geureo}, no fim')],
        [T('mas'), T('*dànshì*, no início'), T('*ga*, no início'), T('{jiman}, no fim')],
        [T('porque'), T('*yīnwèi*, no início'), T('*kara*, no fim'), T('{ttaeumane}, no fim')],
        [T('portanto'), T('*suǒyǐ*, no início'), T('*node*, no fim'), T('{georeumeuro}, no fim')],
      ],
    },
    {
      caption: T('Condição, concessão e a exceção que quebra o padrão'),
      head: [T('Conectivo'), T('Glosa'), T('Posição'), T('Observação')],
      rows: [
        [T('{myeon}'), T('se, caso de'), T('fim da 1ª oração'), T('o condicional comum')],
        [
          T('{neunimyeon}'),
          T('se, se fosse'),
          T('fim da 1ª oração'),
          T('hipotético, mais cuidadoso'),
        ],
        [
          T('{geureodo}'),
          T('ainda que'),
          T('fim da 1ª oração'),
          T('o mesmo {geureodo}, em concessão'),
        ],
        [T('{daui}'), T('apenas, só'), T('fim da 1ª oração'), T('corta o resto da frase')],
        [T('{ttak}'), T('ainda, exatamente'), T('início da oração'), T('raro; foge do padrão')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em coreano, onde entra o conectivo {geureo}, o "e" que soma duas orações?'),
    options: [
      T('depois do verbo, no fim da oração'),
      T('antes do sujeito, no início da oração'),
      T('entre as duas orações'),
      T('na posição que o falante escolher'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o "mas" de contraste, no fim da oração: 비가 오____ 우산이 없다'),
      answer: '지만',
    },
    {
      kind: 'match',
      prompt: T('Ligue o conectivo à função'),
      pairs: [
        { a: T('{geureo}'), b: T('e, e então (fim da oração)') },
        { a: T('{hago}'), b: T('e, e também (fim da oração)') },
        { a: T('{jiman}'), b: T('mas, corte forte') },
        { a: T('{ttaeumane}'), b: T('porque, causa') },
        { a: T('{myeon}'), b: T('se, condição') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Qual destas afirmações sobre o conectivo coreano é verdadeira?'),
      options: [
        T('os conectivos de soma e de contraste vêm depois do verbo'),
        T('os conectivos vêm antes do sujeito, como no mandarim'),
        T('{ttak} é o conectivo mais comum do coreano'),
        T('o coreano não tem conectivos de causa'),
      ],
      answer: 0,
    },
  ],
};
