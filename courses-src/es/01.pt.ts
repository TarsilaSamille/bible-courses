import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('O alfabeto e a pronúncia'),
  subtitle: T('ñ, ll, rr, j — como soa'),
  section: T('O espanhol'),
  body: C(`## O alfabeto

O espanhol usa o alfabeto latino com 27 letras próprias. As cinco vogais são {a, e, i, o, u} e {i} forma hiato depois de outra vogal ({país}, {día}) mas ditongo com consoantes ({bien}). As consoantes que mais confundem quem fala português:

{ñ} — «nh» brasileiro, jota graveyard: {niño} «menino», {mañana} «amanhã», {año} «ano».
{ll} — jota na Espanha, «y» na América: {llamar} «chamar» (ES) / {llamar} «discar» (MX), {caballo} «cavalo» (ES) / {caballo} «cavalo» (MX).
{rr} — vibrante forte no início e depois de {n, l, s}: {perro} «cachorro», {Israel}, {honra}.
{j} — jota sempre: {Jesús}, {Juan}, {julio}, {joven}.

## Regras de leitura

{c} = {k} antes de {a, o, u} ({casa}); = {s} na América / {θ} (como «think») na Espanha antes de {e, i} ({cielo}, {cerveza}). A RAE considera o {z} também {θ} na Espanha: {cruz}, {luz}.
{g} = jota antes de {a, o, u} ({gato}) ou {j} suave antes de {e, i} ({gente}); para manter o som duro escreve {gue} ou {guí}: {guía}, {güero}. 
{h} é sempre muda: {hombre} lê-se «ombre», {hoy} «hoje».
{v} soa como {b}: {vida}, {vino} «vinho».
{y} = {i} entre vogais: {hoy} «hoje», {ley} «lei»; = {ʝ} (jota) inicial ou após consoante: {yo}, {muy}.

## Europeu × americano

Quatro pares resumem quase toda a diferença de pronúncia: {z} = θ/ s; {c} + e/i = θ/ s; {ll} = /ʝ/ na Espanha («ley» = «leia») mas /ʝ/ ou /j/ na América («ley» = «leí»); {ll} + i = /ʝ/ (lojeria) só na Espanha. O texto bíblico castelhano (Reina-Valera 1960) segue o padrão peninsular, mas o texto usado na América segue o padrão americano.

Ex.: {Dios} «Deus» · {luz} «luz» · {niño} «menino» — leia em voz alta desde já!`),
  vocab: [
    V('niño', 'niño', 'menino (ñ!)'),
    V('perro', 'perro', 'cachorro (rr!)'),
    V('pero', 'pero', 'mas (r simples!)'),
    V('cielo', 'cielo', 'céu'),
    V('hombre', 'hombre', 'homem (h mudo!)'),
    V('luz', 'luz', 'luz'),
    V('vino', 'vino', 'vinho (v = b!)'),
    V('hoy', 'hoy', 'hoje (y = i!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Diferença "perro" × "pero"?'),
    options: [
      T('Só ortografia'),
      T('rr vibrante (cachorro) × r simples (mas)!'),
      T('Plural × singular'),
      T('Iguais'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em "hombre", a letra h…'),
      options: [
        T('Soa como /x/'),
        T('É muda (lê-se «ombre»)'),
        T('Soa como /h/ German'),
        T('Só no plural'),
      ],
      answer: 1,
      hint: T('Regra §3.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete com a letra que falta: me__ino (menino)'),
      answer: 'ñ',
      hint: T('Soa como «nh» em português.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a letra ao som'),
      pairs: [
        { a: T('j'), b: T('jota, sempre') },
        { a: T('v'), b: T('soa como b') },
        { a: T('c + e/i'), b: T('s na América, th na Espanha') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Ñ, ll e rr são letras próprias: niño (menino), calle (rua), perro (cachorro) × pero (mas).',
      ),
    },
    {
      n: '2',
      text: T(
        'C e G mudam antes de e/i: cielo (céu), gente (gente). J é sempre jota: Jesús, Juan.',
      ),
    },
    { n: '3', text: T('H é mudo (hombre lê-se «ombre») e V soa como B (vida).') },
    { n: '4', text: T('Y é vogal antes de outra vogal (hoy) e consoante (muy).') },
  ],
  notes: [
    {
      label: T('Escute antes de ler'),
      text: T(
        'O {ñ} é o único som que não existe em português; o {j} spanish soa como o {ʒ} do francês, e o {h} é sempre mudo. O {ll} hoje soa como {y}, exceto em muitas regiões da América, onde se conserva o som de palatal.',
      ),
    },
  ],
  examples: [
    { text: '{Dios}', gloss: T('Deus.') },
    { text: '{luz}', gloss: T('Luz.') },
    { text: '{niño}', gloss: T('Menino (ñ!).') },
    { text: '{hombre}', gloss: T('Homem (h mudo!).') },
    { text: '{mañana}', gloss: T('Amanhã (ñ!).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Letras problemáticas'),
      head: [T('Letra'), T('Valor'), T('Exemplo')],
      rows: [
        [T('ñ'), T('«nh» (Brasil); jota grave'), T('{niño}')],
        [T('ll'), T('jota (Espanha) / i (América)'), T('{caballo}')],
        [T('rr'), T('vibrante forte'), T('{perro}')],
        [T('h'), T('muda'), T('{hombre}')],
        [T('z'), T('s (América) / th (Espanha)'), T('{luz}')],
      ],
    },
    {
      caption: T('Tabela 2 — Peninsular × americano'),
      head: [T('Palavra'), T('Espanha'), T('América')],
      rows: [
        ['{cerveza}', T('«zerbesa»'), T('«sabesa»')],
        ['{ley}', T('«lei» (ler)'), T('«lei» (leu, doeu)')],
        ['{vaca}', T('«baca»'), T('«baca» (uai!)')],
      ],
    },
  ],
};
