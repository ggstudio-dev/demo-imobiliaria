// As 14 frações do edifício (fictícias). Fonte única para a fachada e para os separadores das tipologias.
import type { Tipologia } from "../componentes/Plantas";

export type Estado = "disponivel" | "reservado" | "vendido";

export type Fracao = {
  piso: number;
  letra: string;
  tipologia: Tipologia;
  preco: number;
  orientacao: string;
  estado: Estado;
};

export const FRACOES: Fracao[] = [
  { piso: 1, letra: "A", tipologia: "T1", preco: 385000, orientacao: "Nascente", estado: "vendido" },
  { piso: 1, letra: "B", tipologia: "T1", preco: 389000, orientacao: "Nascente", estado: "disponivel" },
  { piso: 1, letra: "C", tipologia: "T2", preco: 520000, orientacao: "Sul", estado: "disponivel" },
  { piso: 2, letra: "A", tipologia: "T1", preco: 395000, orientacao: "Nascente", estado: "reservado" },
  { piso: 2, letra: "B", tipologia: "T2", preco: 529000, orientacao: "Sul", estado: "vendido" },
  { piso: 2, letra: "C", tipologia: "T2", preco: 534000, orientacao: "Sul e poente", estado: "disponivel" },
  { piso: 3, letra: "A", tipologia: "T1", preco: 405000, orientacao: "Nascente", estado: "disponivel" },
  { piso: 3, letra: "B", tipologia: "T1", preco: 409000, orientacao: "Nascente", estado: "disponivel" },
  { piso: 3, letra: "C", tipologia: "T2", preco: 545000, orientacao: "Sul e poente", estado: "vendido" },
  { piso: 4, letra: "A", tipologia: "T2", preco: 565000, orientacao: "Sul, vista de rio", estado: "disponivel" },
  { piso: 4, letra: "B", tipologia: "T3", preco: 690000, orientacao: "Sul e nascente, vista de rio", estado: "reservado" },
  { piso: 5, letra: "A", tipologia: "T2", preco: 589000, orientacao: "Sul, vista de rio", estado: "disponivel" },
  { piso: 5, letra: "B", tipologia: "T3", preco: 720000, orientacao: "Sul e nascente, vista de rio", estado: "vendido" },
  { piso: 5, letra: "C", tipologia: "T3", preco: 735000, orientacao: "Sul e poente, vista de rio", estado: "disponivel" },
];

export const NOME_ESTADO: Record<Estado, string> = {
  disponivel: "Disponível",
  reservado: "Reservado",
  vendido: "Vendido",
};

export const euros = (v: number) =>
  v.toLocaleString("pt-PT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

export const nomeFracao = (f: Fracao) => `${f.piso}.º ${f.letra}`;

export function resumoTipologia(t: Tipologia) {
  const todas = FRACOES.filter((f) => f.tipologia === t);
  return {
    desde: Math.min(...todas.map((f) => f.preco)),
    disponiveis: todas.filter((f) => f.estado === "disponivel").length,
    total: todas.length,
  };
}
