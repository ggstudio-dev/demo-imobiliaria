"use client";

import { useState } from "react";
import { FRACOES, NOME_ESTADO, euros, nomeFracao, type Estado, type Fracao } from "../dados/fracoes";
import { areaUtil } from "./Plantas";

const X0 = 40;
const LARGURA = 480;
const ALTURA_PISO = 72;
const TOPO = 70;

const COR: Record<Estado, { fill: string; opacidade: number }> = {
  disponivel: { fill: "#1d3fa0", opacidade: 0.1 },
  reservado: { fill: "#f2c230", opacidade: 0.45 },
  vendido: { fill: "#5f6566", opacidade: 0.35 },
};

export function avisar(nome: "escolher-tipologia" | "escolher-fracao", detalhe: string) {
  window.dispatchEvent(new CustomEvent(nome, { detail: detalhe }));
}

function geometria(f: Fracao) {
  const doPiso = FRACOES.filter((x) => x.piso === f.piso);
  const i = doPiso.indexOf(f);
  const w = LARGURA / doPiso.length;
  return { x: X0 + i * w, y: TOPO + (5 - f.piso) * ALTURA_PISO, w, h: ALTURA_PISO };
}

export function Fachada() {
  const [escolhida, setEscolhida] = useState<Fracao>(FRACOES[13]);

  function escolher(f: Fracao) {
    setEscolhida(f);
    avisar("escolher-tipologia", f.tipologia);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[3fr_2fr] lg:items-center">
      <svg viewBox="0 0 560 540" className="h-auto w-full" role="group" aria-label="Fachada do edifício: escolha uma fração">
        <defs>
          <pattern id="azulejo-fachada" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="#f7f8f7" />
            <path d="M10 3 L17 10 L10 17 L3 10 Z" fill="none" stroke="#1d3fa0" strokeWidth="1.2" />
            <circle cx="10" cy="10" r="2" fill="#1d3fa0" />
          </pattern>
        </defs>

        {/* Céu, passeio e corpo do edifício */}
        <rect x="0" y="510" width="560" height="30" fill="#dfe4e2" />
        <rect x={X0} y={TOPO} width={LARGURA} height={440} fill="#f7f8f7" stroke="#10313f" strokeWidth="3" />
        <rect x={X0 - 10} y={TOPO - 26} width={LARGURA + 20} height={26} fill="#10313f" />
        <rect x={X0} y={430} width={LARGURA} height={80} fill="url(#azulejo-fachada)" stroke="#10313f" strokeWidth="3" />
        <rect x={262} y={448} width={36} height={62} fill="#10313f" />
        <text x={280} y={442} textAnchor="middle" fontSize="11" fill="#10313f" fontFamily="var(--font-instrument-sans)">
          Entrada
        </text>

        {FRACOES.map((f) => {
          const g = geometria(f);
          const ativa = f === escolhida;
          const janelas = f.tipologia === "T1" ? 2 : 3;
          const passo = g.w / (janelas + 1);
          return (
            <g
              key={nomeFracao(f)}
              role="button"
              tabIndex={0}
              aria-pressed={ativa}
              aria-label={`${nomeFracao(f)}, ${f.tipologia}, ${NOME_ESTADO[f.estado]}, ${euros(f.preco)}`}
              onClick={() => escolher(f)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  escolher(f);
                }
              }}
              className="fracao cursor-pointer outline-none"
            >
              <rect
                x={g.x + 3}
                y={g.y + 3}
                width={g.w - 6}
                height={g.h - 6}
                fill={COR[f.estado].fill}
                fillOpacity={ativa ? COR[f.estado].opacidade + 0.25 : COR[f.estado].opacidade}
                stroke={ativa ? "#1d3fa0" : "transparent"}
                strokeWidth={4}
                className="transition-[fill-opacity] duration-200"
              />
              {Array.from({ length: janelas }, (_, k) => (
                <rect
                  key={k}
                  x={g.x + passo * (k + 1) - 11}
                  y={g.y + 12}
                  width={22}
                  height={40}
                  fill="#10313f"
                  fillOpacity={f.estado === "vendido" ? 0.55 : 0.85}
                />
              ))}
              <line x1={g.x + 10} x2={g.x + g.w - 10} y1={g.y + 56} y2={g.y + 56} stroke="#10313f" strokeWidth="2" />
              <text x={g.x + 8} y={g.y + g.h - 8} fontSize="10" fill="#10313f" fontFamily="var(--font-instrument-sans)">
                {nomeFracao(f)}
              </text>
            </g>
          );
        })}
      </svg>

      <div aria-live="polite">
        <p className="text-calcada">Fração {nomeFracao(escolhida)}</p>
        <p className="mt-1 font-titulo text-4xl">
          {escolhida.tipologia} no {escolhida.piso}.º piso
        </p>
        <dl className="mt-6 divide-y divide-tejo/15 border-y border-tejo/15">
          {[
            ["Estado", NOME_ESTADO[escolhida.estado]],
            ["Preço", escolhida.estado === "vendido" ? "Vendido" : euros(escolhida.preco)],
            ["Área útil", `${areaUtil(escolhida.tipologia).toLocaleString("pt-PT")} m²`],
            ["Orientação", escolhida.orientacao],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 py-3">
              <dt className="text-calcada">{k}</dt>
              <dd className="text-right font-medium">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#plantas" className="border-2 border-cobalto px-5 py-3 font-medium text-cobalto hover:bg-cobalto hover:text-white">
            Ver planta do {escolhida.tipologia}
          </a>
          {escolhida.estado !== "vendido" && (
            <a
              href="#contacto"
              onClick={() => avisar("escolher-fracao", nomeFracao(escolhida))}
              className="bg-cobalto px-5 py-3 font-medium text-white hover:bg-cobalto-escuro"
            >
              Pedir informação
            </a>
          )}
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-calcada" aria-label="Legenda">
          {(Object.keys(COR) as Estado[]).map((e) => (
            <li key={e} className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-block size-4 border border-tejo/30"
                style={{ background: COR[e].fill, opacity: COR[e].opacidade + 0.3 }}
              />
              {NOME_ESTADO[e]} ({FRACOES.filter((f) => f.estado === e).length})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
