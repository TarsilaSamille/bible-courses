// shared.mts — as três peças que toda aula de curso usa.
//
// Uma lição é escrita três vezes, em três arquivos: `01.pt.ts`, `01.en.ts`,
// `01.es.ts`. Não é escolha estética. O fonte anterior era um `build-zh.mts` de
// 1168 linhas com os três idiomas em template literals adjacentes, e o corpo
// saiu em português três vezes — sempre porque o `t(…, …, …)` de três
// argumentos deixa a linha do meio passar despercebida numa chamada de muitas
// linhas. A adjacency resolvia o sintoma na leitura e cobrava o preço em
// contexto: para escrever a lição 24 era preciso reler as 23 anteriores.
//
// Separado por idioma, o preço some e o sintoma também: um arquivo por idioma
// tem uma cabeça só, não três. E o que pega a falha agora é o validador — este
// arquivo e o merger do build-course, que cobrem o que a leitura cobria.
//
// Um arquivo por idioma também é o que torna a tradução uma passada separada,
// e não um custo de cada lição: quem escreve `pt` não precisa saber inglês.

/** Marca um texto no arquivo de um idioma. O merger junta pt+en+es. */
export type Marked = { readonly __lang: 'pt' | 'en' | 'es'; readonly text: string };

/** Texto traduzido (title, subtitle, section, prompt, gloss, caption, label). */
export const T = (text: string): Marked => ({ __lang: CURRENT, text });

/**
 * Corpo da lição. Função separada de T só por causa do `##` e do `**`: é o
 * único campo que carrega Markdown de bloco, e o nome different é o aviso de
 * que ali dentro há estrutura, não frase.
 */
export const C = (text: string): Marked => ({ __lang: CURRENT, text });

/**
 * Entrada de vocabulário clicável. `form` e `lemma` não são traduzidos — são o
 * que aparece no texto e o que se busca no dicionário — então ficam antes do
 * texto, e o merger exige que os três idiomas concordem sobre eles.
 */
export type VocabEntry = {
  readonly form: string;
  readonly lemma: string;
  readonly gloss: Marked;
};
export const V = (form: string, lemma: string, text: string): VocabEntry => ({
  form,
  lemma,
  gloss: { __lang: CURRENT, text },
});

// O idioma do arquivo é resolvido no load, não escrito à mão em cada T().
// `declarar` troca o valor de CURRENT; é o que o build-course chama por
// arquivo antes de importar a lição.
let CURRENT: 'pt' | 'en' | 'es' = 'pt';
export const declarar = (lang: 'pt' | 'en' | 'es') => {
  CURRENT = lang;
};

export const ehMarcado = (v: unknown): v is Marked =>
  typeof v === 'object' && v !== null && '__lang' in v && 'text' in (v as object);

/**
 * `form` e `lemma` são obrigatórios aqui, e não só `gloss`: um exemplo tem
 * `gloss` marcado e não é entrada de vocabulário. Sem os três, o merger trata
 * `{ text: '我不吃', gloss: T(...) }` como se fosse um VocabEntry e joga o
 * `text` fora.
 */
export const ehVocab = (v: unknown): v is VocabEntry =>
  typeof v === 'object' &&
  v !== null &&
  'form' in (v as object) &&
  'lemma' in (v as object) &&
  'gloss' in (v as object) &&
  ehMarcado((v as VocabEntry).gloss);
