"use client";

import { useRef, useState } from "react";
import { Planta, areaUtil, type Tipologia } from "./Plantas";

const DADOS: Record<Tipologia, { desde: string; quartos: string; pisos: string; disponiveis: number; nota: string }> = {
  T1: {
    desde: "385 000 €",
    quartos: "1 quarto",
    pisos: "1.º ao 3.º piso",
    disponiveis: 5,
    nota: "Sala e cozinha em open space, com a varanda a toda a largura da fachada.",
  },
  T2: {
    desde: "520 000 €",
    quartos: "2 quartos, 1 em suite",
    pisos: "1.º ao 5.º piso",
    disponiveis: 6,
    nota: "Cozinha fechada e suite virada a sul. Os do 5.º piso têm vista de rio.",
  },
  T3: {
    desde: "690 000 €",
    quartos: "3 quartos, 1 em suite com closet",
    pisos: "4.º e 5.º piso",
    disponiveis: 3,
    nota: "Os maiores do edifício, com duas frentes e vista sobre o Tejo.",
  },
};

const TIPOLOGIAS = Object.keys(DADOS) as Tipologia[];

export function escolherTipologia(t: Tipologia) {
  window.dispatchEvent(new CustomEvent("escolher-tipologia", { detail: t }));
}

export function Apartamentos() {
  const [ativa, setAtiva] = useState<Tipologia>("T2");
  const botoes = useRef<Record<string, HTMLButtonElement | null>>({});
  const d = DADOS[ativa];

  function teclado(e: React.KeyboardEvent, i: number) {
    const passo = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!passo) return;
    const prox = TIPOLOGIAS[(i + passo + TIPOLOGIAS.length) % TIPOLOGIAS.length];
    setAtiva(prox);
    botoes.current[prox]?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label="Tipologias" className="flex gap-2">
        {TIPOLOGIAS.map((t, i) => (
          <button
            key={t}
            ref={(el) => {
              botoes.current[t] = el;
            }}
            role="tab"
            id={`tab-${t}`}
            aria-selected={ativa === t}
            aria-controls={`painel-${t}`}
            tabIndex={ativa === t ? 0 : -1}
            onClick={() => setAtiva(t)}
            onKeyDown={(e) => teclado(e, i)}
            className={`min-w-20 border-2 px-5 py-2.5 font-titulo text-xl transition-colors ${
              ativa === t
                ? "border-cobalto bg-cobalto text-white"
                : "border-cobalto/30 text-cobalto hover:border-cobalto"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`painel-${ativa}`}
        aria-labelledby={`tab-${ativa}`}
        className="mt-8 grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start"
      >
        <figure className="border-2 border-cobalto bg-[#f7f8f7] p-3 sm:p-5">
          <Planta tipologia={ativa} />
          <figcaption className="mt-3 text-sm text-calcada">
            Planta esquemática, não à escala. Áreas úteis aproximadas.
          </figcaption>
        </figure>

        <div>
          <p className="text-calcada">Desde</p>
          <p className="font-titulo text-5xl text-tejo">{d.desde}</p>
          <dl className="mt-8 divide-y divide-tejo/15 border-y border-tejo/15">
            {[
              ["Área útil", `${areaUtil(ativa).toLocaleString("pt-PT")} m²`],
              ["Quartos", d.quartos],
              ["Pisos", d.pisos],
              ["Disponíveis", `${d.disponiveis} de 14`],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-3">
                <dt className="text-calcada">{k}</dt>
                <dd className="text-right font-medium">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-prose leading-relaxed">{d.nota}</p>
          <a
            href="#contacto"
            onClick={() => escolherTipologia(ativa)}
            className="mt-8 inline-block bg-cobalto px-6 py-3.5 font-medium text-white hover:bg-cobalto-escuro"
          >
            Pedir planta e preços do {ativa}
          </a>
        </div>
      </div>
    </div>
  );
}
