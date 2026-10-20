import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Apartamentos } from "./componentes/Apartamentos";
import { FaixaAzulejo } from "./componentes/Azulejo";
import { BotaoWhatsApp } from "./componentes/BotaoWhatsApp";
import { Fachada } from "./componentes/Fachada";
import { FormularioContacto } from "./componentes/FormularioContacto";
import telhados from "@/public/fotos/telhados-tejo.jpg";
import varandas from "@/public/fotos/varandas-alecrim.jpg";
import azulejos from "@/public/fotos/azulejos-alfama.jpg";
import ponte from "@/public/fotos/ponte-maat.jpg";
import senhoraDoMonte from "@/public/fotos/senhora-do-monte.jpg";

const FACTOS = [
  ["Entrega prevista", "Verão de 2028"],
  ["Certificado energético", "Classe A+"],
  ["Garagem", "Lugar e arrecadação"],
  ["Rio Tejo", "400 m a pé"],
];

const BAIRRO = [
  ["Comboio em Marvila", "6 min a pé"],
  ["Parque Ribeirinho Oriente", "8 min a pé"],
  ["Escola básica e jardim de infância", "5 min a pé"],
  ["Baixa de Lisboa", "15 min de carro"],
  ["Aeroporto Humberto Delgado", "12 min de carro"],
];

const PERGUNTAS = [
  [
    "Quando posso visitar?",
    "O apartamento-modelo, no showroom da obra, abre de terça a sábado, das 10h às 19h, com marcação. Peça a visita pelo formulário e indique o dia que prefere.",
  ],
  [
    "Como funciona o pagamento?",
    "10% no contrato-promessa, 10% a meio da obra e o restante na escritura. Pode financiar a parte final com crédito à habitação; ajudamos a pedir propostas a vários bancos.",
  ],
  [
    "Posso escolher os acabamentos?",
    "Sim, até ao fim da estrutura do seu piso. Há três gamas de pavimento, bancada e louças sem custo extra, e alterações de layout analisadas caso a caso.",
  ],
  [
    "Vivo fora de Portugal. Posso comprar?",
    "Pode. Precisa de um NIF português e de uma conta bancária em Portugal; indicamos parceiros que tratam de ambos à distância, e o processo pode ser feito por procuração.",
  ],
  [
    "O preço inclui garagem?",
    "Sim. Todas as frações têm um lugar de estacionamento e uma arrecadação na cave, incluídos no preço.",
  ],
];

const CREDITO = "Dale Cruse, CC BY 4.0, via Wikimedia Commons";
const TITULO = "Catorze casas em Marvila, a cinco minutos do Tejo";

export default function Pagina() {
  return (
    <>
      <p className="bg-tejo px-4 py-2 text-center text-sm text-white/85">
        Projeto de demonstração criado pela GG Studio. O empreendimento, os preços e os contactos são fictícios.
      </p>

      <header className="sticky top-0 z-30 border-b border-tejo/10 bg-lioz/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#inicio" className="font-titulo text-2xl text-cobalto">
            Lioz
          </a>
          <ul className="hidden gap-7 sm:flex">
            <li><a href="#apartamentos" className="hover:text-cobalto">Apartamentos</a></li>
            <li><a href="#bairro" className="hover:text-cobalto">O bairro</a></li>
            <li><a href="#perguntas" className="hover:text-cobalto">Perguntas</a></li>
          </ul>
          <a href="#contacto" className="bg-cobalto px-4 py-2 text-sm font-medium text-white hover:bg-cobalto-escuro">
            Marcar visita
          </a>
        </nav>
      </header>

      <main id="inicio">
        {/* Abertura: os telhados de Lisboa a descer até ao Tejo */}
        <section className="relative isolate flex min-h-[86svh] items-end overflow-hidden">
          <div className="paralaxe absolute inset-x-0 -top-[10%] -bottom-[10%] -z-10">
            <Image
              src={telhados}
              alt="Telhados de Lisboa a descer até ao rio Tejo, num dia de céu limpo"
              fill
              priority
              placeholder="blur"
              sizes="100vw"
              className="abertura-foto object-cover object-[60%_70%]"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-tejo via-tejo/45 to-transparent" />
          <div className="mx-auto w-full max-w-6xl px-4 pt-40 pb-14 sm:px-6 sm:pb-20">
            <h1 className="max-w-3xl font-titulo text-5xl leading-[1.05] text-white sm:text-7xl">
              {TITULO.split(" ").map((palavra, i) => (
                <Fragment key={i}>
                  <span className="abertura-palavra" style={{ animationDelay: `${0.25 + i * 0.07}s` }}>
                    {palavra}
                  </span>{" "}
                </Fragment>
              ))}
            </h1>
            <div className="abertura-resto">
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
                Apartamentos T1 a T3 com varanda, num edifício de seis pisos revestido a azulejo e pedra lioz.
                Vendas abertas na planta.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#apartamentos" className="bg-white px-6 py-3.5 font-medium text-tejo hover:bg-lioz">
                  Escolher apartamento
                </a>
                <a href="#contacto" className="border-2 border-white px-6 py-3 font-medium text-white hover:bg-white/10">
                  Marcar visita ao modelo
                </a>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Dados do empreendimento" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {FACTOS.map(([k, v]) => (
              <div key={k} className="border-l-4 border-cobalto pl-4">
                <dt className="text-calcada">{k}</dt>
                <dd className="mt-1 font-titulo text-2xl">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <FaixaAzulejo tamanho={96} />

        <section id="apartamentos" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-titulo text-4xl sm:text-5xl">Escolha a sua casa</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-calcada">
            Toque numa fração da fachada para ver o estado, o preço e a orientação. Todas têm varanda, cozinha
            equipada, ar condicionado e painéis solares para a água quente.
          </p>
          <div className="mt-10">
            <Fachada />
          </div>
        </section>

        <section id="plantas" className="scroll-mt-20 mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <h2 className="font-titulo text-3xl sm:text-4xl">As plantas</h2>
          <div className="mt-8">
            <Apartamentos />
          </div>
        </section>

        <section id="bairro" className="scroll-mt-20 bg-tejo py-20 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-titulo text-4xl sm:text-5xl">Lisboa ribeirinha, sem o trânsito do centro</h2>
            <div className="mt-12 grid gap-12 lg:grid-cols-[2fr_3fr]">
              <div>
                <p className="max-w-prose text-lg leading-relaxed text-white/85">
                  Marvila trocou os armazéns por ateliers, cervejeiras e jardins junto ao rio. Continua a ser um
                  bairro de vizinhos, com comboio à porta e a Baixa a um quarto de hora.
                </p>
                <dl className="mt-8 divide-y divide-white/15 border-y border-white/15">
                  {BAIRRO.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 py-3">
                      <dt>{k}</dt>
                      <dd className="shrink-0 text-white/70">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <figure className="row-span-2">
                  <Image
                    src={varandas}
                    alt="Fachada de azulejo amarelo e verde com varandas de ferro, em Lisboa"
                    placeholder="blur"
                    sizes="(min-width: 1024px) 30vw, 50vw"
                    className="h-full w-full object-cover"
                  />
                </figure>
                <figure>
                  <Image
                    src={azulejos}
                    alt="Fachadas revestidas a azulejo em Alfama"
                    placeholder="blur"
                    sizes="(min-width: 1024px) 30vw, 50vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </figure>
                <figure>
                  <Image
                    src={ponte}
                    alt="Passeio ribeirinho junto ao Tejo, com a Ponte 25 de Abril ao fundo"
                    placeholder="blur"
                    sizes="(min-width: 1024px) 30vw, 50vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </figure>
              </div>
            </div>

            <figure className="mt-3">
              <Image
                src={senhoraDoMonte}
                alt="Panorâmica de Lisboa ao entardecer, vista do Miradouro da Senhora do Monte"
                placeholder="blur"
                sizes="(min-width: 1152px) 1152px, 100vw"
                className="aspect-[3/1] w-full object-cover"
              />
              <figcaption className="mt-3 text-sm text-white/60">
                Fotografias de Lisboa: {CREDITO}. Imagens ilustrativas da cidade, não do empreendimento.
              </figcaption>
            </figure>
          </div>
        </section>

        <section aria-labelledby="titulo-mapa" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 id="titulo-mapa" className="font-titulo text-4xl">Onde fica</h2>
          <p className="mt-3 text-calcada">Rua do Exemplo, 14, 1950-000 Lisboa (morada fictícia).</p>
          <div className="mt-8 aspect-[16/10] border-2 border-tejo sm:aspect-[16/7]">
            <iframe
              title="Mapa de Marvila, Lisboa"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-9.1180%2C38.7330%2C-9.0960%2C38.7480&layer=mapnik&marker=38.7398%2C-9.1068"
              loading="lazy"
              className="h-full w-full"
            />
          </div>
        </section>

        <FaixaAzulejo tamanho={64} />

        <section id="perguntas" className="scroll-mt-20 mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <h2 className="font-titulo text-4xl sm:text-5xl">Perguntas frequentes</h2>
          <div className="mt-10 divide-y divide-tejo/15 border-y border-tejo/15">
            {PERGUNTAS.map(([p, r]) => (
              <details key={p} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">
                  {p}
                  <span aria-hidden="true" className="text-2xl text-cobalto transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-prose leading-relaxed text-calcada">{r}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contacto" className="scroll-mt-20 border-t-4 border-cobalto bg-lioz-escuro py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[2fr_3fr]">
            <div>
              <h2 className="font-titulo text-4xl sm:text-5xl">Peça a planta e os preços</h2>
              <p className="mt-4 max-w-prose text-lg leading-relaxed text-calcada">
                Enviamos por email a planta detalhada, a tabela de preços e as frações disponíveis. Se quiser,
                marcamos também uma visita ao apartamento-modelo.
              </p>
            </div>
            <FormularioContacto />
          </div>
        </section>
      </main>

      <footer className="bg-tejo px-4 pt-12 pb-28 text-sm text-white/70 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:justify-between">
          <div>
            <p className="font-titulo text-2xl text-white">Lioz</p>
            <p className="mt-2">Lioz Promoção Imobiliária, Lda. (empresa fictícia)</p>
            <p>Alvará de construção n.º 000/0000 (exemplo)</p>
          </div>
          <div className="sm:text-right">
            <p>
              <Link href="/privacidade" className="underline underline-offset-2 hover:text-white">
                Política de privacidade
              </Link>
            </p>
            <p className="mt-2">Fotografias: {CREDITO}</p>
            <p className="mt-2">Site de demonstração desenhado e desenvolvido pela GG Studio.</p>
          </div>
        </div>
      </footer>

      <BotaoWhatsApp />
    </>
  );
}
