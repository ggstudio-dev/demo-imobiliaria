"use client";

// Faixa de azulejos de padrão (inspirados nos azulejos lisboetas do séc. XIX), desenhados à mão em SVG.
// Cada azulejo é uma peça própria que "vira" quando a faixa entra no ecrã, da esquerda para a direita.
import { useEffect, useRef, useState } from "react";

function Peca() {
  return (
    <svg viewBox="0 0 80 80" className="block size-full" aria-hidden="true">
      <rect width="80" height="80" fill="#f7f8f7" />
      <g fill="none" stroke="#1d3fa0" strokeWidth="2.2">
        <circle cx="0" cy="0" r="18" />
        <circle cx="80" cy="0" r="18" />
        <circle cx="0" cy="80" r="18" />
        <circle cx="80" cy="80" r="18" />
        <path d="M40 14 L66 40 L40 66 L14 40 Z" />
      </g>
      <g fill="#1d3fa0">
        <path d="M40 24 C46 32 46 48 40 56 C34 48 34 32 40 24 Z" />
        <path d="M24 40 C32 34 48 34 56 40 C48 46 32 46 24 40 Z" />
        <circle cx="0" cy="0" r="8" />
        <circle cx="80" cy="0" r="8" />
        <circle cx="0" cy="80" r="8" />
        <circle cx="80" cy="80" r="8" />
      </g>
      <circle cx="40" cy="40" r="4.5" fill="#f2c230" />
      <rect width="80" height="80" fill="none" stroke="#dfe4e2" strokeWidth="1" />
    </svg>
  );
}

export function FaixaAzulejo({ tamanho = 96 }: { tamanho?: number }) {
  const faixa = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = faixa.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisivel(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={faixa}
      aria-hidden="true"
      className={`faixa-azulejo flex overflow-hidden ${visivel ? "visivel" : ""}`}
      style={{ height: tamanho }}
    >
      {Array.from({ length: 32 }, (_, i) => (
        <div key={i} className="peca shrink-0" style={{ width: tamanho, height: tamanho, transitionDelay: `${i * 45}ms` }}>
          <Peca />
        </div>
      ))}
    </div>
  );
}
