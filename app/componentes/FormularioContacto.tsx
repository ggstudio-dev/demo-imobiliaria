"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const campo =
  "mt-1.5 w-full border-2 border-tejo/20 bg-white px-3.5 py-3 text-base text-tejo focus:border-cobalto focus:outline-none";

export function FormularioContacto() {
  const [tipologia, setTipologia] = useState("");
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const ouvir = (e: Event) => setTipologia((e as CustomEvent<string>).detail);
    window.addEventListener("escolher-tipologia", ouvir);
    return () => window.removeEventListener("escolher-tipologia", ouvir);
  }, []);

  if (enviado) {
    return (
      <div role="status" className="border-2 border-cobalto bg-white p-8">
        <p className="font-titulo text-3xl">Pedido enviado</p>
        <p className="mt-3 max-w-prose leading-relaxed">
          Obrigado. A equipa comercial responde por email no prazo de um dia útil, com a planta e a tabela de
          preços{tipologia ? ` do ${tipologia}` : ""}.
        </p>
        <p className="mt-4 text-sm text-calcada">
          Isto é uma demonstração: nenhum dado foi enviado nem guardado.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setEnviado(true);
      }}
      className="grid gap-5 sm:grid-cols-2"
    >
      <label className="block">
        <span className="font-medium">Nome</span>
        <input required name="nome" autoComplete="name" className={campo} />
      </label>
      <label className="block">
        <span className="font-medium">Email</span>
        <input required type="email" name="email" autoComplete="email" className={campo} />
      </label>
      <label className="block">
        <span className="font-medium">
          Telemóvel <span className="font-normal text-calcada">(opcional)</span>
        </span>
        <input type="tel" name="telemovel" autoComplete="tel" className={campo} />
      </label>
      <label className="block">
        <span className="font-medium">Tipologia</span>
        <select
          name="tipologia"
          value={tipologia}
          onChange={(e) => setTipologia(e.target.value)}
          className={campo}
        >
          <option value="">Ainda não sei</option>
          <option value="T1">T1</option>
          <option value="T2">T2</option>
          <option value="T3">T3</option>
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className="font-medium">
          Mensagem <span className="font-normal text-calcada">(opcional)</span>
        </span>
        <textarea name="mensagem" rows={4} className={campo} placeholder="Por exemplo: prefiro visitar ao sábado de manhã." />
      </label>
      <label className="flex items-start gap-3 sm:col-span-2">
        <input required type="checkbox" name="consentimento" className="mt-1 size-5 shrink-0 accent-cobalto" />
        <span className="text-sm leading-relaxed">
          Aceito que a Lioz Promoção Imobiliária use estes dados só para responder a este pedido, como descrito na{" "}
          <Link href="/privacidade" className="text-cobalto underline underline-offset-2">
            política de privacidade
          </Link>
          .
        </span>
      </label>
      <div className="sm:col-span-2">
        <button type="submit" className="bg-cobalto px-7 py-3.5 font-medium text-white hover:bg-cobalto-escuro">
          Enviar pedido
        </button>
      </div>
    </form>
  );
}
