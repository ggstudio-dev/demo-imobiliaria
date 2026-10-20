"use client";

// Plantas esquemáticas em SVG, no traço cobalto do azulejo. Unidades: 1 m = 20 px.
// As paredes desenham-se ao trocar de tipologia (classe .traco) e cada divisão acende ao tocar.
import { useState } from "react";

type Divisao = { x: number; y: number; w: number; h: number; nome: string; area: number; exterior?: boolean };
type Porta = { x: number; y: number; r: number; rot: number };

export type Tipologia = "T1" | "T2" | "T3";

const PLANTAS: Record<Tipologia, { largura: number; altura: number; divisoes: Divisao[]; portas: Porta[] }> = {
  T1: {
    largura: 360,
    altura: 300,
    divisoes: [
      { x: 0, y: 0, w: 210, h: 180, nome: "Sala e cozinha", area: 26.5 },
      { x: 210, y: 0, w: 150, h: 180, nome: "Quarto", area: 13.5 },
      { x: 0, y: 180, w: 110, h: 80, nome: "Entrada", area: 6.0 },
      { x: 110, y: 180, w: 100, h: 80, nome: "Casa de banho", area: 5.0 },
      { x: 210, y: 180, w: 150, h: 80, nome: "Arrumos", area: 4.5 },
      { x: 0, y: 260, w: 360, h: 40, nome: "Varanda", area: 9.0, exterior: true },
    ],
    portas: [
      { x: 210, y: 150, r: 26, rot: 180 },
      { x: 150, y: 180, r: 22, rot: 270 },
      { x: 250, y: 180, r: 22, rot: 270 },
    ],
  },
  T2: {
    largura: 440,
    altura: 320,
    divisoes: [
      { x: 0, y: 0, w: 240, h: 170, nome: "Sala", area: 30.5 },
      { x: 240, y: 0, w: 200, h: 120, nome: "Suite", area: 15.0 },
      { x: 240, y: 120, w: 110, h: 70, nome: "Casa de banho", area: 4.5 },
      { x: 0, y: 170, w: 130, h: 110, nome: "Cozinha", area: 11.5 },
      { x: 130, y: 170, w: 110, h: 110, nome: "Entrada", area: 7.0 },
      { x: 240, y: 190, w: 200, h: 90, nome: "Quarto", area: 12.5 },
      { x: 350, y: 120, w: 90, h: 70, nome: "Casa de banho", area: 3.5 },
      { x: 0, y: 280, w: 440, h: 40, nome: "Varanda", area: 11.0, exterior: true },
    ],
    portas: [
      { x: 240, y: 90, r: 26, rot: 180 },
      { x: 130, y: 200, r: 24, rot: 180 },
      { x: 270, y: 190, r: 22, rot: 270 },
      { x: 270, y: 120, r: 20, rot: 270 },
    ],
  },
  T3: {
    largura: 500,
    altura: 340,
    divisoes: [
      { x: 0, y: 0, w: 260, h: 180, nome: "Sala", area: 34.0 },
      { x: 260, y: 0, w: 240, h: 130, nome: "Suite", area: 17.5 },
      { x: 260, y: 130, w: 120, h: 70, nome: "Casa de banho", area: 5.0 },
      { x: 380, y: 130, w: 120, h: 70, nome: "Closet", area: 4.5 },
      { x: 0, y: 180, w: 140, h: 120, nome: "Cozinha", area: 14.0 },
      { x: 140, y: 180, w: 120, h: 120, nome: "Entrada", area: 8.0 },
      { x: 260, y: 200, w: 120, h: 100, nome: "Quarto", area: 12.0 },
      { x: 380, y: 200, w: 120, h: 100, nome: "Quarto", area: 12.0 },
      { x: 0, y: 300, w: 500, h: 40, nome: "Varanda", area: 12.5, exterior: true },
    ],
    portas: [
      { x: 260, y: 100, r: 26, rot: 180 },
      { x: 140, y: 210, r: 24, rot: 180 },
      { x: 290, y: 200, r: 22, rot: 270 },
      { x: 410, y: 200, r: 22, rot: 270 },
      { x: 290, y: 130, r: 20, rot: 270 },
    ],
  },
};

export function areaUtil(t: Tipologia): number {
  return PLANTAS[t].divisoes.filter((d) => !d.exterior).reduce((s, d) => s + d.area, 0);
}

const m2 = (v: number) => `${v.toLocaleString("pt-PT")} m²`;

export function Planta({ tipologia }: { tipologia: Tipologia }) {
  const p = PLANTAS[tipologia];
  const [acesa, setAcesa] = useState<number | null>(null);
  const margem = 12;
  const divisao = acesa === null ? null : p.divisoes[acesa];

  return (
    <figure className="border-2 border-cobalto bg-[#f7f8f7] p-3 sm:p-5">
      <svg
        key={tipologia}
        viewBox={`${-margem} ${-margem} ${p.largura + 2 * margem} ${p.altura + 2 * margem}`}
        className="planta h-auto w-full"
        role="group"
        aria-label={`Planta do ${tipologia}. Toque numa divisão para ver a área.`}
        onMouseLeave={() => setAcesa(null)}
      >
        {p.divisoes.map((d, i) => (
          <g
            key={i}
            role="button"
            tabIndex={0}
            aria-label={`${d.nome}, ${m2(d.area)}`}
            onMouseEnter={() => setAcesa(i)}
            onFocus={() => setAcesa(i)}
            onClick={() => setAcesa(i)}
            className="cursor-pointer outline-none"
          >
            <rect x={d.x} y={d.y} width={d.w} height={d.h} fill={d.exterior ? "#e8eef8" : "#f7f8f7"} />
            <rect
              x={d.x}
              y={d.y}
              width={d.w}
              height={d.h}
              fill="#1d3fa0"
              fillOpacity={acesa === i ? 0.16 : 0}
              className="transition-[fill-opacity] duration-200"
            />
            <path
              d={`M${d.x} ${d.y} h${d.w} v${d.h} h${-d.w} Z`}
              pathLength={1}
              fill="none"
              stroke="#1d3fa0"
              strokeWidth={d.exterior ? 1.5 : acesa === i ? 6 : 4}
              strokeDasharray={d.exterior ? "0.012 0.01" : undefined}
              className={d.exterior ? "rotulo" : "traco"}
              style={{ animationDelay: `${i * 90}ms` }}
            />
            <text
              x={d.x + d.w / 2}
              y={d.y + d.h / 2 - (d.h > 50 ? 4 : -4)}
              textAnchor="middle"
              fontSize={d.w < 100 ? 10 : 13}
              fill="#10313f"
              fontFamily="var(--font-instrument-sans), sans-serif"
              fontWeight={600}
              className="rotulo pointer-events-none"
            >
              {d.nome}
            </text>
            {d.h > 50 && (
              <text
                x={d.x + d.w / 2}
                y={d.y + d.h / 2 + 13}
                textAnchor="middle"
                fontSize={11}
                fill="#5f6566"
                fontFamily="var(--font-instrument-sans), sans-serif"
                className="rotulo pointer-events-none"
              >
                {m2(d.area)}
              </text>
            )}
          </g>
        ))}
        {p.portas.map((po, i) => (
          <path
            key={i}
            transform={`translate(${po.x} ${po.y}) rotate(${po.rot})`}
            d={`M0 0 L${po.r} 0 A${po.r} ${po.r} 0 0 1 0 ${po.r}`}
            fill="none"
            stroke="#1d3fa0"
            strokeWidth={1.2}
            className="rotulo pointer-events-none"
          />
        ))}
      </svg>
      <figcaption className="mt-3 min-h-12 text-sm text-calcada" aria-live="polite">
        {divisao ? (
          <span className="text-base text-tejo">
            <strong className="font-semibold">{divisao.nome}</strong>: {m2(divisao.area)}
          </span>
        ) : (
          "Toque numa divisão para ver a área. Planta esquemática, não à escala."
        )}
      </figcaption>
    </figure>
  );
}
