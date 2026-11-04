import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('O imperativo'),
  subtitle: T('habla, hable, hablad — dímelo!'),
  section: T('Os verbos'),
  body: C(`## O afirmativo com {tú} é o presente

O imperativo afirmativo para {tú} tem exatamente a forma da 3ª pessoa do presente: {habla} «fala!» · {come} «come!» · {vive} «vive!» · {escribe} «escreve!». Não há nenhuma marca que diferencie as duas — o contexto decide.

## O formal (usted) é o subjuntivo

Para {usted} e para {ustedes} o imperativo afirmativo usa o **subjuntivo presente**: {hable} «fale!» · {coma} · {viva} · {dígame} «diga-me!».

## O plural

{hablad} «falai!» · {comed} · {vivid} · {amad los unos a los otros} «amai-vos uns aos outros» (Jo 13:34). Em América, sem {vosotros}, o plural é quase sempre {ustedes} e o imperativo plural soa como {hablen}.

## O negativo é sempre subjuntivo

{no hables} «não fales!» · {no comas} · {no seáis} — para **todas** as pessoas, inclusive {tú}.

## Os pronomes se colam

No afirmativo, os pronomes **se grudam** no verbo: {dime} «diz-me!» · {dímelo} «diz-mol-o» · {perdónanos} «perdoa-nos».

No negativo, ficam **antes** do verbo: {no me digas} «não me digas!» · {no me lo digas} «não mo digas!».

## Os oito curtos

Há oito imperativos irregulares que não seguem a regra: {di} «diz!» (de {decir}), {haz} «faz!» (de {hacer}), {ve} «vai!» (de {ir}), {pon} «põe!» (de {poner}), {sal} «sai!» (de {salir}), {ten} «toma!» (de {tener}), {ven} «vem!» (de {venir}), {sé} «sê!» (de {ser}). O {sé} ainda recebe acento diacrítico para não se confundir com {se}.

Ex.: {Ven y sígueme} «vem e segue-me» (Mt 19:21) · {Sea la luz} «haja luz» (Gn 1:3 — 3ª pessoa do subjuntivo com valor de optativo).`),
  vocab: [
    V('habla', 'hablar', 'fala! (imp.)'),
    V('hablad', 'hablar', 'falai! (imp. pl.)'),
    V('hable', 'hablar', 'fale! (subj. de usted)'),
    V('amad', 'amar', 'amai!'),
    V('dime', 'decir', 'diz-me!'),
    V('dímelo', 'decir', 'diz-mol-o!'),
    V('ven', 'venir', 'vem!'),
    V('no hables', 'hablar', 'não fales!'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Onde vai o pronome no imperativo AFIRMATIVO?'),
    options: [
      T('Grudado atrás: "dímelo"'),
      T('Antes: "me di"'),
      T('No fim da frase'),
      T('Não se usa'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Imperativo de "decir" para você (forma curta): "¡___!" (diz!)'),
      answer: 'di',
      hint: T('Regra §5: um dos oito curtos.'),
    },
    {
      kind: 'choose',
      prompt: T('Como se diz «não me digas isso»?'),
      options: [
        T('{No me lo digas}'),
        T('{No dimelo}'),
        T('{No lo me digas}'),
        T('{No digo me eso}'),
      ],
      answer: 0,
      hint: T('Regra §4: no negativo, pronome ANTES do verbo.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a pessoa ao imperativo correto'),
      pairs: [
        { a: T('tú (afirmativo)'), b: T('{habla}') },
        { a: T('usted (afirmativo)'), b: T('{hable}') },
        { a: T('tú (negativo)'), b: T('{no hables}') },
        { a: T('vosotros (afirmativo)'), b: T('{hablad}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('Imperativo afirmativo de tú = 3ª pessoa do presente: habla, come, vive.') },
    {
      n: '2',
      text: T('Para usted e ustedes o afirmativo é o subjuntivo presente: hable, hablen.'),
    },
    {
      n: '3',
      text: T('O negativo é subjuntivo para todas as pessoas: no hables, no hable, no habléis.'),
    },
    {
      n: '4',
      text: T('Pronomes GRUDAM no afirmativo (dímelo) e vão ANTES do negativo (no me digas).'),
    },
    { n: '5', text: T('Os 8 curtos: di, haz, ve, pon, sal, ten, ven, sé.') },
  ],
  notes: [
    {
      label: T('O tú de cortesia'),
      text: T(
        'Depois de um substantivo, {tú} deixa de soar direto e vira tratamento: {Jesús te ama}, dirigido a Deus na oração do Pai-Nosso Prayer. O imperativo com você é sempre de {tú}.',
      ),
    },
  ],
  examples: [
    { text: '{amad los unos a los otros}', gloss: T('Amai-vos uns aos outros (Jo 13:34).') },
    { text: '{Ven y sígueme}', gloss: T('Vem e segue-me (Mt 19:21).') },
    { text: '{no me lo digas}', gloss: T('Não me digas isso (negativo + pronome antes!).') },
    { text: '{Sea la luz}', gloss: T('Haja luz (Gn 1:3 — optativo de 3ª pessoa).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Imperativo'),
      head: [T('Pessoa'), T('Afirmativo'), T('Negativo (sempre subj.!)')],
      rows: [
        ['tú', '{habla}', '{no hables}'],
        ['usted', '{hable}', '{no hable}'],
        ['vosotros', '{hablad}', '{no habléis}'],
        ['ustedes', '{hablen}', '{no hablen}'],
      ],
    },
    {
      caption: T('Tabela 2 — Os oito imperativos curtos'),
      head: [T('Infinitivo'), T('Regular (3ª pes.)'), T('Imperativo curto')],
      rows: [
        ['{decir}', '{dice}', '{di}'],
        ['{hacer}', '{hace}', '{haz}'],
        ['{ir}', '{va}', '{ve}'],
        ['{poner}', '{pone}', '{pon}'],
        ['{salir}', '{sale}', '{sal}'],
        ['{tener}', '{tiene}', '{ten}'],
        ['{venir}', '{viene}', '{ven}'],
        ['{ser}', '{es}', '{sé}'],
      ],
    },
  ],
};
