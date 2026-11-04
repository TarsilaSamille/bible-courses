import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Imperativo'),
  subtitle: T('parla, parli, non parlare'),
  section: T('O tempo do verbo'),
  body: C(`## O imperativo existe em três registros

O italiano tem três imperativos, e a escolha não é de estilo: **é de registro social**. Com {tu}, o imperativo coincide com o presente em quase todos os verbos: {parla}, {leggi}, {finisci}. Com {lei} (você), usa-se o congiuntivo: {parli}, {legga}, {finisca}. E o plural usa quase sempre a forma de {voi}: {parlate}, {leggete}, {finite}.

Repare no que isso faz com o português: nós usamos «você» e o italiano usa {lei}; nós usamos «vocês» e o italiano usa {voi}. A tradução que pega {parla} por «você fala» está errada, porque {parla} é {tu}.

## A negação também muda de forma

Com {tu}, **a negação é** {non} mais o infinitivo: {non parlare}, «não fale». Com {lei}, é {non} mais o congiuntivo: {non parli}. As duas significam o mesmo, e a segunda soa mais polida. Como em português, o pronome pode ser omitido: {Parla!}, {Non parlare!}, porque o {tu} e o {lei} já estão na forma do verbo.

A diferença que mais chama atenção para quem estuda grego: o grego tem uma negação só (μη) e o italiano tem duas, porque tem duas formas de tratamento. É a mesma razão pela qual o italiano tem o congiuntivo: é uma língua que se preocupa com o nível do interlocutor.

## No afirmativo o pronome se gruda

No imperativo afirmativo **os pronomes vêm colados**: {parlati}, {perdonali}, {dammi}, {sedetevi}. No negativo, eles se soltam: {non mi parlate}, {non li perdonare}, {non mi siedete}. A regra é mecânica e não tem exceção: a negação {non} interrompe a fusão.

## O que ler

Se ver um imperativo terminado em {-a}, {-i} ou {-e} sem {-ate}, é {tu}. Se terminar em {-i} ou {-a} e for forma de {lei} ({parli}), é «você». E na dúvida, procure a negação: {non} mais infinitivo é {tu}, {non} mais congiuntivo é {lei}. Em ambos os casos o pronome elide.`),
  vocab: [
    V('parla', 'parlare', 'fala!'),
    V('parli', 'parlare', 'fale!'),
    V('parlate', 'parlare', 'falai!'),
    V('parlati', 'parlare', 'fala (tu)'),
    V('legge', 'leggere', 'lê!'),
    V('legga', 'leggere', 'leia!'),
    V('finite', 'finire', 'terminem!'),
    V('dammi', 'dare', 'dá-me!'),
    V('perdonali', 'perdonare', 'perdoa-lhes!'),
    V('non parlare', 'parlare', 'não fales!'),
    V('non parli', 'parlare', 'não fale!'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se nega «fala!» para um amigo?'),
    options: [T('non parla'), T('non parlare'), T('non parli'), T('non parlato')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual é o imperativo formal de leggere?'),
      options: [T('leggi'), T('legga'), T('legge'), T('leggete')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: Padre, perdona___ (li)'),
      answer: 'li',
      hint: T('Pronome objeto de terceiro plural.'),
    },
    {
      kind: 'fill',
      prompt: T('Forme o imperativo de tu: dire → dimmi'),
      answer: 'dimmi',
      hint: T('O verbo perde o r final e dobra o m.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Com {tu} o imperativo coincide com o presente: {parla}, {leggi}, {finisci}.'),
    },
    {
      n: '2',
      text: T(
        'Com {lei} usa-se o congiuntivo: {parli}, {legga}, {finisca}, e com {voi} a forma de plural, {parlate}, {leggete}.',
      ),
    },
    {
      n: '3',
      text: T(
        'A negação de {tu} é {non} mais o infinitivo, {non parlare}; a de {lei} é {non} mais o congiuntivo, {non parli}.',
      ),
    },
    {
      n: '4',
      text: T('No afirmativo os pronomes se grudam: {parlati}, {perdonali}, {dammi}, {sedetevi}.'),
    },
    {
      n: '5',
      text: T(
        'No negativo os pronomes se soltam: {non mi parlate}, {non li perdonare}. A negação {non} interrompe a fusão.',
      ),
    },
  ],
  notes: [
    {
      label: T('{Tu} e {Lei}'),
      text: T(
        'O imperativo distingue a formalidade pela forma: {parla} com quem se conhece, {parli} com quem não se conhece, {parlate} com um grupo. E o pronome {mi} pode vir depois do verbo, como em {mi dica}, o que muda o tom outra vez.',
      ),
    },
    {
      label: T('Uma negação ou duas'),
      text: T(
        'O grego tem uma só negação (μη) e o italiano tem duas, porque tem duas formas de tratamento. Quem traduz do grego para o italiano precisa escolher entre {non parlare} e {non parli}, e a escolha não é de sentido: é de relação com quem ouve.',
      ),
    },
  ],
  examples: [
    { text: 'Parla!', gloss: T('Fala!') },
    { text: 'Non parlare!', gloss: T('Não fales!') },
    { text: 'Legga il Vangelo.', gloss: T('Leia o Evangelho.') },
    { text: 'Amatevi gli uni gli altri.', gloss: T('Amai-vos uns aos outros.') },
    { text: 'Padre, perdonali.', gloss: T('Pai, perdoa-lhes.') },
    { text: 'Perdonate i nostri debiti.', gloss: T('Perdoai as nossas dívidas.') },
    { text: 'Non ci abbandonare.', gloss: T('Não nos deixes.') },
    { text: 'Andiamo!', gloss: T('Vamos!') },
  ],
  tables: [
    {
      caption: T('Imperativo por persona'),
      head: ['Persona', 'Imperativo', 'Negazione'],
      rows: [
        ['tu', 'parla', 'non parlare'],
        ['lei', 'parli', 'non parli'],
        ['noi', 'parliamo', 'non parliamo'],
        ['voi', 'parlate', 'non parlate'],
      ],
    },
    {
      caption: T('Imperativo irregular'),
      head: ['Infinitivo', 'tu', 'lei'],
      rows: [
        ['dire', 'dì', 'dica'],
        ['fare', 'fa', 'faccia'],
        ['leggere', 'leggi', 'legga'],
        ['sapere', 'sai', 'sappia'],
        ['potere', 'puoi', 'possa'],
        ['venire', 'vieni', 'venga'],
      ],
    },
  ],
};
