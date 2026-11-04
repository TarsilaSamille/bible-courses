import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('Os pronomes indefinidos'),
  subtitle: T('alguien, algo, todo — alguém chama!'),
  section: T('Os pronomes'),
  body: C(`## Os quatro com {n-}

O espanhol tem uma série systematicamente negativa:

{alguien} «alguém» × {nadie} «ninguém»
{algo} «algo» × {nada} «nada»
{alguno} «algum» × {ninguno} «nenhum»
{cualquiera} «qualquer» × {nadie} — com valor de «nenhum»

Nas frases negativas, a **dupla negação é obrigatória**: {No vi a nadie} «não vi ninguém» (nunca «*No vi alguien»). Em perguntas, o duplo {no} é opcional: {¿No viste a alguien?} «viste alguém?».

Bíblico: {No hay quien...} «não há quem...» (Ec 3:15) · {Nada hay nuevo} «não há nada novo» (Ec 1:9).

## {todo}

{todo} concorda normalmente: {todo hombre} «todo homem» · {toda la ley} «toda a lei» · {Todos los que oyen} «todos os que ouvem».

Mas como **advérbio** é invariável e significa «inteiramente»: {todo está destroyed} «está tudo destruído» · {todo está bien} «está tudo bem».

## Apócopes

Vários indefinidos perdem a o final diante de substantivo masculino singular:

{alguno} → {algún} {algún día} «algum dia»
{ninguno} → {ningún} {ningún hombre} «nenhum homem»
{cualquiera} → {cualquier} {cualquier día} «qualquer dia»

## Quantificadores invariáveis

{cada} «cada» · {todo} (advérbio) · {mucho/poco} · {bastante} · {demasiado} · {varios} «alguns» · {ciertos} «certes» — todos invariáveis: {varios libros} «vários livros».

## Negativos absolutos

{nadie} e {nada} exigem {no} no verbo e rejeitam os demais pronomes: {Nadie dijo nada} «ninguém disse nada».

Ex.: {He aquí, yo estoy a la puerta; si alguien oye mi voz y abre la puerta, entraré} «Eis que estou à porta; se alguém ouvir a minha voz e abrir a porta, entrarei» (Ap 3:20).`),
  vocab: [
    V('alguien', 'alguien', 'alguém'),
    V('nadie', 'nadie', 'ninguém'),
    V('nada', 'nada', 'nada'),
    V('todo', 'todo', 'todo'),
    V('algún día', 'alguno', 'algum dia (apócope!)'),
    V('cada uno', 'uno', 'cada um'),
    V('el mismo', 'mismo', 'o mesmo'),
    V('nadie', 'nadie', 'ninguém (negativo absoluto!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Por que "no vi A nadie" tem dois "nãos"?'),
    options: [
      T('Erro'),
      T('Dupla negação OBRIGATÓRIA com indefinido negativo!'),
      T('Ênfase opcional'),
      T('Plural'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete com apócope: "___ día" (qualquer dia)'),
      answer: 'cualquier',
      hint: T('Regra §3: cualquiera perde o final antes do masc. sg.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está CORRETA (negação)?'),
      options: [T('No dijo nada'), T('No dijo algo'), T('Dijo nada'), T('Nada no dijo')],
      answer: 0,
      hint: T('Regra §1: negativo + «no» no verbo.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o indefinido ao seu par negativo'),
      pairs: [
        { a: T('{alguien}'), b: T('{nadie}') },
        { a: T('{algo}'), b: T('{nada}') },
        { a: T('{alguno}'), b: T('{ninguno}') },
        { a: T('{todo}'), b: T('{nadie} (nada = zero!)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('Negação exige «no» + indefinido negativo: no vi a nadie, no dijo nada.') },
    {
      n: '2',
      text: T(
        'Todo concorda com o substantivo (todo hombre), mas como advérbio é invariável (todo está bien).',
      ),
    },
    { n: '3', text: T('Apócope antes de masculino singular: algún, ningún, cualquier.') },
    { n: '4', text: T('Cada, mucho, poco, bastante, demasiado y varios são invariáveis.') },
  ],
  notes: [
    {
      label: T('{todo} muda de valor'),
      text: T(
        'Numa oração, {todo} é pronombre e concorda: {todo hombre}, {toda la ley}. Fora dela, é advérbio e é invariável: {todo lo hizo}. O contexto decide a flexão.',
      ),
    },
  ],
  examples: [
    { text: '{Alguien llama a la puerta}', gloss: T('Alguém bate à porta (Ap 3:20).') },
    { text: '{no vi a nadie}', gloss: T('Não vi ninguém (dupla negação!).') },
    { text: '{nada hay nuevo bajo el sol}', gloss: T('Não há nada novo sob o sol (Ec 1:9).') },
    { text: '{todo está bien}', gloss: T('Está tudo bem ({todo} advérbio, invariável).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Indefinidos e seus negativos'),
      head: [T('Positivo'), T('Negativo'), T('Exemplo positivo'), T('Exemplo negativo')],
      rows: [
        ['{alguien}', '{nadie}', '{Alguien llama}', '{Nadie llama}'],
        ['{algo}', '{nada}', '{Quiero algo}', '{No quiero nada}'],
        ['{alguno}', '{ninguno}', '{Algún día}', '{Ningún hombre}'],
        ['{alguien}', '{nadie}', '{Vi a alguien}', '{No vi a nadie}'],
        ['{cualquiera}', '{nadie}', '{Cualquier día}', '{No va nadie}'],
      ],
    },
    {
      caption: T('Tabela 2 — Apócopes dos indefinidos'),
      head: [T('Forma plena'), T('Apócope'), T('Uso')],
      rows: [
        ['{alguno}', '{algún}', '{algún día}'],
        ['{ninguno}', '{ningún}', '{ningún hombre}'],
        ['{cualquiera}', '{cualquier}', '{cualquier día}'],
        ['{bueno}', '{buen}', '{buen hombre}'],
      ],
    },
  ],
};
