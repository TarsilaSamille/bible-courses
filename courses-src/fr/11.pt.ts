import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Os advérbios de tempo e de frequência'),
  subtitle: T("{aujourd'hui}, {demain}, {déjà}, {jamais} e a construção com {depuis}"),
  section: T('Os adjetivos e os adverbios'),
  body: C(`## Três palavras e meia resolvem quase tudo

O tempo tem os seus advérbios mais simples da língua: {aujourd'hui} «hoje», {hier} «ontem», {demain} «amanhã». Só {demain} tem uma palavra para «o dia seguinte», que é {le lendemain} — distinção que o português também faz e o espanhol não precisa.

Esses três se combinam com substantivos de momento e formam expressões fixas: {hier soir} «ontem à noite», {demain matin} «amanhã de manhã», {après-midi} «tarde», {avant-midi} «manhã», {ce soir} «esta noite», {l'an prochain} «o ano que vem». Repare em {après-midi} e {avant-midi}: são hifenizados porque um termo de outro idioma já vem colado.

E {aujourd'hui} tem um segundo sentido, mais metafórico: {le monde d'aujourd'hui} «o mundo atual», {les hommes d'aujourd'hui} «os homens de hoje».

## O momento que se segue e o que já passou

{Maintenant} é «agora», o advérbio mais neutro. {Bientôt} é «em breve», { déjà} é «já», {tout à l'heure} é «daqui a pouco» (literalmente «toda a hora»).

Dentro de uma sequência: {d'abord} «primeiro», {ensuite} «depois», {puis} «em seguida», {enfin} «por fim», {alors} «então», {Enfin} também pode significar «ao menos»: {C'est déjà quelque chose} «já é alguma coisa».

Para a **duração**, o verbo faz o trabalho, não o advérbio. {Je travaille depuis deux heures} «estou trabalhando há duas horas» — o presente é obrigatório depois de {depuis}, porque a ação começou no passado e continua. {Je travaille pendant deux heures} é diferente: «trabalho durante duas horas» (ação delimitada). Confundir {depuis} com {pendant} é o erro mais comum de quem começa o francês.

## Frequência: a escada inteira

A escala completa cabe em seis palavras:

| Advérbio | Significado | Exemplo |
|---|---|---|
| {toujours} | sempre | {Je prie toujours} |
| {souvent} | frequentemente | {Je prie souvent} |
| {de temps en temps} | de vez em quando | {Je prie de temps en temps} |
| {parfois} | às vezes | {Je prie parfois} |
| {rarement} | raramente | {Je prie rarement} |
| {jamais} | nunca | {Je ne prie jamais} |

Duas regras de primeira importância. Primeira: com {jamais}, {toujours}, {souvent}, {parfois} e {rarement}, a frase fica **negativa ou restritiva**, e a negação vem uma vez só: {Je ne prie jamais}, {Je ne prie pas toujours}, {Je ne prie pas souvent}, {Je ne prie pas parfois}, {Je ne prie pas rarement}. {Je ne prie pas jamais} é redundante e soa errado.

Segunda: {jamais} já é negativo por si só, e por isso {ne … pas … jamais} é redundante e errado. O mesmo vale para {toujours}, {souvent}, {parfois} e {rarement}, que pedem {pas} porque são positivos. A negação é uma só, nunca duas.

## {déjà} e {encore}

Os doisaspectos do mesmo par:

- {déjà} — já, ação concluída: {J'ai déjà mangé}
- {encore} — ainda, ação em curso: {Je suis encore là}
- {ne … pas encore} — ainda não: {Je ne suis pas encore arrivé}
- {ne … plus} — já não: {Je ne suis plus là}
- {ne … jamais} — nunca: {Je ne suis jamais allé en Italie}
- {ne … que} — nada mais que: {Je n'ai que le temps de prier}

Note a simetria: {pas encore} «ainda não» opõe-se a {déjà} «já» no mesmo eixo. E {ne … plus} é sempre negativo — {plus jamais} é o único ambiente positivo possível, e mesmo assim é raro.

Com o futuro, {jamais} dispensa o {pas} e abre uma armadilha sintática: {Je n'ai jamais vu} é negativo presente, {Je n'ai pas encore vu} é «ainda não vi». {Je ne verrai jamais} é futuro negativo e já significa «não vou ver nunca» — não precisa de {pas}.

## Leitura — Louis Segond

{Hier, c'est-à-dire le jour d'avant celui où nous sommes tous témoins} usa {hier} como advérbio com aposição explicativa. {Demain, si nous ne nous repentons pas} (Lc 13:3) põe o advérbio na posição inicial da frase, algo raro e enfático. {Je ne suis pas encore monté} (Lc 4:31) traz a construção {pas encore} com presente — prova de que {encore} fala de processo, não de tempo. {Reste donc ce qui est bon} (Lc 3:14) leva {donc} entre verbo e objeto, o advérbio curto em seu lugar fixo. E {Vous avez besoin d'un seul bon grain} (Mt 13:21) usa {seul} como adjetivo, não advérbio — a lição anterior.

## O essencial

Tempo e frequência em francês são palavras curtas e quase sempre pospostas ao verbo. {depuis} + presente mede duração até hoje; {pendant} + presente ou passado mede duração delimitada. E a escala de frequência tem seis degraus, dos quais só {jamais} força a negação.`),
  vocab: [
    V("aujourd'hui", "aujourd'hui", 'hoje; também «de agora em diante»'),
    V('hier', 'hier', 'ontem; {hier soir} = ontem à noite'),
    V('demain', 'demain', 'amanhã; ≠ {le lendemain}'),
    V('le lendemain', 'lendemain', 'o dia seguinte'),
    V('après-midi', 'après-midi', 'tarde; com {de} no plural'),
    V('maintenant', 'maintenant', 'agora; advérbio mais neutro'),
    V('bientôt', 'bientôt', 'em breve, daqui a pouco'),
    V('déjà', 'déjà', 'já; ação concluída'),
    V('encore', 'encore', 'ainda; ação em curso'),
    V('toujours', 'toujours', 'sempre; com negação: nem sempre'),
    V('souvent', 'souvent', 'frequentemente; com negação: raramente'),
    V('parfois', 'parfois', 'às vezes; com negação: quase nunca'),
    V('rarement', 'rarement', 'raramente; com negação: não raro'),
    V('jamais', 'jamais', 'nunca; já traz a negação'),
    V('depuis', 'depuis', 'há (duração); + presente'),
    V('pendant', 'pendant', 'durante; duração delimitada'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se diz «estou trabalhando há duas horas»?'),
    options: [
      T('{Je travaille depuis deux heures}'),
      T('{Je travaille pendant deux heures}'),
      T('{Je travaille pour deux heures}'),
      T('{Je travaille déjà deux heures}'),
    ],
    answer: 0,
    hint: T('Ação que começou e continua pede {depuis} + presente; {pendant} delimita.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Ainda não cheguei: {Je ne suis pas ___ arrivé}'),
      answer: 'encore',
      hint: T('O par é {déjà} «já» contra {pas encore} «ainda não».'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta na escala de frequência?'),
      options: [
        T('{Je ne prie pas jamais}'),
        T('{Je ne prie jamais}'),
        T('{Je ne prie pas toujours}'),
        T('{Je prie jamais}'),
      ],
      answer: 1,
      hint: T('{jamais} já é negativo por si mesmo; {toujours} precisa de {pas}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o advérbio ao seu valor'),
      pairs: [
        { a: T('hier'), b: T('ontem') },
        { a: T('demain'), b: T('amanhã (não o dia seguinte)') },
        { a: T('rarement'), b: T('raramente') },
        { a: T('depuis'), b: T('há, com presente') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em «{Je travaille depuis deux heures}», o que o presente indica?'),
      options: [
        T('Que a ação termina agora'),
        T('Que a ação começou no passado e continua'),
        T('Que a ação é um hábito'),
        T('Que a ação já terminou ontem'),
      ],
      answer: 1,
      hint: T('É o sentido de {depuis}: uma janela aberta que começou antes e ainda está aberta.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        "O tempo tem advérbios próprios e poucos: {aujourd'hui} «hoje», {hier} «ontem», {demain} «amanhã», {maintenant} «agora». {demain} não é {le lendemain} «o dia seguinte»: são coisas diferentes.",
      ),
    },
    {
      n: '2',
      text: T(
        "Esses advérbios combinam-se com substantivos de momento: {hier soir}, {demain matin}, {ce soir}, {après-midi}, {avant-midi}, {l'an prochain}. As expressões assim formadas são fixas e admitem artigo e plural: {les après-midis}.",
      ),
    },
    {
      n: '3',
      text: T(
        "{depuis} mede duração em curso e exige presente: {je travaille depuis deux heures} «há duas horas». {pendant} mede um trecho fechado e pode ir com qualquer tempo: {pendant deux heures}, {pendant qu'il a parlé}.",
      ),
    },
    {
      n: '4',
      text: T(
        'A negação faz-se uma vez só com {toujours}, {souvent}, {parfois} e {rarement}: {je ne prie pas toujours}. Com {jamais} não há {pas}: {je ne prie jamais}. {Je ne prie pas jamais} duplica a negação e é errado.',
      ),
    },
    {
      n: '5',
      text: T(
        "{déjà} marca ação concluída ({j'ai déjà mangé}) e {encore} ação em curso ({je suis encore là}); juntos formam a opposition {déjà} / {pas encore}. {ne … plus} é sempre negativo e {ne … que} significa «nada mais que».",
      ),
    },
  ],
  notes: [
    {
      label: T('A escala de frequência muda de sentido ao ser negada'),
      text: T(
        'É o fenómeno mais bonito da língua: os mesmos advérbios dizem o oposto quando recebem {pas}. {Je prie toujours} = sempre; {Je ne prie pas toujours} = nem sempre. {Je prie souvent} = frequentemente; {Je ne prie pas souvent} = raramente. {Je prie parfois} = às vezes; {Je ne prie pas parfois} = quase nunca. {Je prie rarement} = raramente; {Je ne prie pas rarement} = não é raro. Assim, uma frase negativa French pode ser literalmente o contrário de uma positiva.',
      ),
    },
    {
      label: T('Cuidado com {demain} e {le lendemain}'),
      text: T(
        '{Demain} é o dia que vem. {Le lendemain} é o dia depois desse: {Je suis arrivé lundi; le lendemain, je suis parti} «Cheguei segunda; no dia seguinte, parti». O mesmo vale para {avant-hier} «anteontem», que nenhuma outra língua precisa de forma tão precisa.',
      ),
    },
  ],
  examples: [
    { text: "aujourd'hui", gloss: T('hoje — o advérbio mais curto do capítulo') },
    { text: 'hier soir', gloss: T('ontem à noite — advérbio + substantivo') },
    { text: 'le lendemain', gloss: T('o dia seguinte — ≠ {demain}') },
    { text: 'je travaille depuis deux heures', gloss: T('há duas horas — {depuis} + presente') },
    { text: 'je ne prie jamais', gloss: T('nunca — {jamais} já traz a negação') },
    { text: 'je ne prie pas toujours', gloss: T('nem sempre — {toujours} negado') },
    { text: 'je ne prie pas souvent', gloss: T('raramente — {souvent} negado') },
    { text: "j'ai déjà mangé", gloss: T('já comi — ação concluída') },
    { text: 'je suis encore là', gloss: T('ainda estou aqui — ação em curso') },
    { text: 'je ne suis pas encore arrivé', gloss: T('ainda não cheguei — {pas encore}') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Advérbios de momento'),
      head: [T('Palavra'), T('Glosa'), T('Com substantivo'), T('Exemplo')],
      rows: [
        ["{aujourd'hui}", 'hoje / de agora em diante', '{—}', "{le monde d'aujourd'hui}"],
        ['{hier}', 'ontem', '{hier soir, hier matin}', '{hier soir} = ontem à noite'],
        ['{demain}', 'amanhã', '{demain soir}', '{le lendemain} = o dia seguinte'],
        ['{maintenant}', 'agora', '{—}', '{maintenant, je parle}'],
        ['{bientôt}', 'em breve', '{—}', '{à bientôt} = até logo'],
        ['{déjà}', 'já', '{—}', "{j'ai déjà mangé}"],
        ['{encore}', 'ainda', '{—}', '{je suis encore là}'],
      ],
    },
    {
      caption: T('Tabela 2 — Frequência e negação'),
      head: [T('Forma positiva'), T('Glosa'), T('Forma negativa'), T('Glosa')],
      rows: [
        ['{toujours}', 'sempre', '{ne … pas toujours}', 'nem sempre'],
        ['{souvent}', 'frequentemente', '{ne … pas souvent}', 'raramente'],
        ['{parfois}', 'às vezes', '{ne … pas parfois}', 'quase nunca'],
        ['{rarement}', 'raramente', '{ne … pas rarement}', 'não é raro'],
        ['{jamais}', '— (já é negativo)', '{ne … jamais}', 'nunca'],
        ['{toujours} + {ne … pas}', '—', '{ne … jamais}', 'nunca (sem {pas})'],
      ],
    },
  ],
};
