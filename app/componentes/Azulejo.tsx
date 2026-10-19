// Padrão de azulejo de padrão (inspirado nos azulejos lisboetas do séc. XIX), desenhado à mão em SVG.
// Um único módulo de 80×80 repetido; as quartas de círculo nos cantos fecham-se entre azulejos vizinhos.
export function FaixaAzulejo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" width="100%" height="100%">
      <defs>
        <pattern id="azulejo" width="80" height="80" patternUnits="userSpaceOnUse">
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
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#azulejo)" />
    </svg>
  );
}
