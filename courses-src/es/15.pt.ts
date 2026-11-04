import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('Os verbos irregulares'),
  subtitle: T('tener, decir, ir — os gigantes'),
  section: T('Os verbos'),
  body: C(`## Radicais totalmente novos

A primeira pessoa do singular de certos verbos troca o final por {-go}: {tengo} «tenho» · {digo} «digo» · {vengo} «venho» · {salgo} «saio» · {pongo} «ponho» · {hago} «faço» · {oigo} «ouço» · {pido} «peço».

## Mudanças de vogal (presente)

**-e → -ie** (verbo com radical acentuado, só no singular e na 3ª pessoa): {pensar} → {pienso} · {querer} → {quiero} · {venir} → {viene} · {mentir} → {miento}. Mas **nós e vós mantêm**: {pensamos}, {queremos} — é essa irregularidade que os delata.

**-o → -ue**: {poder} → {puedo} · {dormir} → {duermo} · {volver} → {vuelvo} · {morir} → {muero} · {recordar} → {recuerdo}.

**-e → -i** (só nos verbos em {-ir}): {pedir} → {pido} · {servir} → {sirvo} · {seguir} → {sigo} · Atenção: {dormir} faz {o → ue} ({duermo}), não {e → i}.

## Os três gigantes

• {ser}: {soy}, {eres}, {es}, {somos}, {sois}, {son}
• {ir}: {voy}, {vas}, {va}, {vamos}, {vais}, {van} — {vamos} é idêntico ao de {ser}!
• {haber} (auxiliar): {he}, {has}, {ha}, {hemos}, {habéis}, {han} — {he orado} «tenho orado» (perfeito composto, cap. 15).

## Verbos vitais para o Novo Testamento

{tener} → {tengo} · {hacer} → {hago} · {decir} → {digo} · {poder} → {puedo} · {saber} → {se} · {querer} → {quiero} · {dar} → {doy} · {ver} → {veo} · {venir} → {vengo}.

Ex.: {Todo lo puedo en Cristo} «tudo posso em Cristo» (Fp 4:13).`),
  vocab: [
    V('tengo', 'tener', 'tenho (-go!)'),
    V('digo', 'decir', 'digo (-go!)'),
    V('quiero', 'querer', 'quero (e→ie!)'),
    V('puedo', 'poder', 'posso (o→ue!)'),
    V('pido', 'pedir', 'peço (e→i!)'),
    V('voy', 'ir', 'vou'),
    V('he orado', 'orar', 'tenho orado'),
    V('hago', 'hacer', 'faço (-go!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Por que "pensamos" NÃO vira "piensamos"?'),
    options: [
      T('Erro'),
      T('Nós/vós MANTÊM a vogal (só singular + eles mudam!)'),
      T('É regular'),
      T('Futuro'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: "yo ___ (decir)" «digo»'),
      answer: 'digo',
      hint: T('Regra §1: primeira pessoa troca por -go.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual verbo faz o→ue no presente?'),
      options: [
        T('{pedir} → {pido}'),
        T('{dormir} → {duermo}'),
        T('{seguir} → {sigo}'),
        T('{tener} → {tengo}'),
      ],
      answer: 1,
      hint: T('Regra §2: -o do radical vira -ue.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao irregular do presente'),
      pairs: [
        { a: T('{ir}'), b: T('{voy}') },
        { a: T('{haber}'), b: T('{he}') },
        { a: T('{querer}'), b: T('{quiero}') },
        { a: T('{venir}'), b: T('{vengo}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('Primeira pessoa com -go: tengo, digo, vengo, salgo, pongo, hago, oigo.') },
    {
      n: '2',
      text: T('As mudanças e→ie e o→ue só ocorrem no singular e na 3ª pessoa: hablamos, no hablo.'),
    },
    { n: '3', text: T('O e→i só existe nos verbos em -ir: pido, sirvo, sigo.') },
  ],
  notes: [
    {
      label: T('I é o único lugar'),
      text: T(
        'Os verbos irregelares mudam só no radical, nunca nas terminações: {tuve} + {tuviste}, {tuviste} + {tuve}. Não é preciso decorar o verbo todo, só o radical e o presente irregular.',
      ),
    },
  ],
  examples: [
    { text: '{tengo}', gloss: T('Tenho (radical novo: -go).') },
    { text: '{puedo}', gloss: T('Posso (o→ue).') },
    { text: '{pido}', gloss: T('Peço (e→i).') },
    { text: '{he orado}', gloss: T('Tenho orado (auxiliar {haber}).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — As três mudanças'),
      head: [T('Mudança'), T('Exemplos'), T('Exceção')],
      rows: [
        ['-e → -ie', '{pienso}, {quiero}, {viene}', '{pensamos}, {queremos}'],
        ['-o → -ue', '{puedo}, {duermo}, {vuelvo}', '{podemos}, {dormimos}'],
        ['-e → -i', '{pido}, {sirvo}, {sigo}', T('só em -ir')],
        ['-ir → -go', '{tengo}, {digo}, {vengo}', T('só o yo')],
      ],
    },
    {
      caption: T('Tabela 2 — Os gigantes irregulares'),
      head: [T('Verbo'), T('Presente'), T('Nota')],
      rows: [
        ['{ser}', '{soy}, {eres}, {es}, {somos}, {sois}, {son}', T('o ser')],
        ['{ir}', '{voy}, {vas}, {va}, {vamos}, {vais}, {van}', T('{vamos} = {somos}!')],
        ['{haber}', '{he}, {has}, {ha}, {hemos}, {habéis}, {han}', T('auxiliar e «tener»')],
        ['{estar}', '{estoy}, {estás}, {está}, {estamos}, {estáis}, {están}', T('verbo de estado')],
      ],
    },
  ],
};
