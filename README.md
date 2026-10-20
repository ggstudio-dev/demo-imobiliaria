# Residências Lioz — landing page imobiliária (demo)

Landing page de lançamento de um empreendimento residencial **fictício** em Lisboa, criada pela **GG Studio** como projeto de portfólio.

**Ver ao vivo:** https://demo-imobiliaria-eight.vercel.app

<p>
  <img src="docs/captura-computador.png" alt="Página no computador" width="68%">
  <img src="docs/captura-telemovel.png" alt="Página no telemóvel" width="25%">
</p>

## O que tem

- Abertura animada: a fotografia aproxima-se, o título entra palavra a palavra e a imagem tem paralaxe no scroll
- **Fachada interativa**: as 14 frações do prédio desenhadas em SVG, com estado (disponível, reservado, vendido), preço e orientação ao tocar; liga-se às plantas e ao formulário
- **Plantas vivas** T1, T2 e T3: as paredes desenham-se ao trocar de tipologia e cada divisão acende e mostra a área ao tocar
- Padrão de **azulejo** desenhado em SVG como identidade visual, com azulejos que viram quando aparecem no ecrã
- O bairro: distâncias, galeria e créditos das fotografias
- Mapa (OpenStreetMap, sem cookies de rastreio)
- Perguntas frequentes (incluindo compradores estrangeiros)
- Formulário de pedido de planta com **consentimento RGPD** e política de privacidade
- Botão de WhatsApp (na demo explica o que faria, sem número real)
- Mobile-first, acessível por teclado, respeita "reduzir movimento"; animações em CSS, sem bibliotecas pesadas

## Tecnologias

Next.js (App Router) · TypeScript · Tailwind CSS · Vercel

## Créditos

Fotografias de Lisboa: Dale Cruse, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), via Wikimedia Commons. Empreendimento, empresa, preços, morada e contactos são fictícios.
