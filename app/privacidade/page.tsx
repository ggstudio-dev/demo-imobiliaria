import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Política de privacidade — Residências Lioz" };

export default function Privacidade() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 leading-relaxed sm:px-6">
      <Link href="/" className="text-cobalto underline underline-offset-2">
        Voltar ao início
      </Link>
      <h1 className="mt-8 font-titulo text-4xl">Política de privacidade</h1>
      <p className="mt-4 text-calcada">
        Texto de exemplo para um site de demonstração. Num projeto real, é revisto com o cliente e adaptado ao seu
        tratamento de dados.
      </p>

      <h2 className="mt-10 font-titulo text-2xl">Quem trata os seus dados</h2>
      <p className="mt-3">
        Lioz Promoção Imobiliária, Lda. (empresa fictícia), responsável pelo tratamento dos dados enviados pelo
        formulário deste site.
      </p>

      <h2 className="mt-10 font-titulo text-2xl">Que dados e para quê</h2>
      <p className="mt-3">
        Nome, email, telemóvel (se o indicar), tipologia de interesse e mensagem. Usamo-los apenas para responder ao
        seu pedido de informação ou de visita. A base legal é o seu consentimento, que pode retirar a qualquer
        momento.
      </p>

      <h2 className="mt-10 font-titulo text-2xl">Durante quanto tempo</h2>
      <p className="mt-3">
        Até 12 meses após o último contacto, ou até pedir que os apaguemos.
      </p>

      <h2 className="mt-10 font-titulo text-2xl">Os seus direitos</h2>
      <p className="mt-3">
        Pode pedir acesso, correção ou eliminação dos seus dados, e apresentar reclamação à Comissão Nacional de
        Proteção de Dados (CNPD).
      </p>

      <h2 className="mt-10 font-titulo text-2xl">Cookies</h2>
      <p className="mt-3">
        Este site não usa cookies de análise nem de publicidade. O mapa é fornecido pelo OpenStreetMap.
      </p>
    </main>
  );
}
