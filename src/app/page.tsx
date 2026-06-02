import Image from "next/image";
import Link from "next/link";
import { brandClasses, siteConfig } from "@/styles/brand";

/* ─── Ícones inline (sem dependência extra) ─── */

function IconPhone({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01l-2.2 2.22z" />
    </svg>
  );
}

function IconWhatsApp({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconCheck({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconMenu({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function IconConcrete({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16h16M6 16V8l4-3 4 3v8M14 16V9l4-2v9" />
      <path strokeLinecap="round" d="M8 20h8" />
    </svg>
  );
}

function IconDrill({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4M10 7h4M11 11h2v10M9 21h6" />
      <path strokeLinecap="round" d="M8 11c0-2.2 1.8-4 4-4s4 1.8 4 4" />
    </svg>
  );
}

function IconArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/* ─── Dados de conteúdo (SEO + copy de obra) ─── */

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#frota", label: "Frota" },
  { href: "#estacas", label: "Estacas" },
  { href: "#area", label: "Área" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
] as const;

const galleryImages = [
  {
    src: "/images/frota-08.jpeg",
    alt: "Bomba de concreto CCOM em operação em obra no Distrito Federal",
    tag: "Bomba de concreto",
  },
  {
    src: "/images/perfuratriz-obra.png",
    alt: "Perfuratriz CCOM Locações em operação de estacas escavadas",
    tag: "Perfuratriz",
  },
  {
    src: "/images/obra-canteiro.png",
    alt: "Locação de bomba de concreto e perfuratriz CCOM em canteiro — Brasília DF",
    tag: "Canteiro",
  },
  {
    src: "/images/frota-01.jpeg",
    alt: "Equipamento CCOM Locações mobilizado em obra de construção civil",
    tag: "Frota CCOM",
  },
  {
    src: "/images/frota-02.jpeg",
    alt: "Locação de máquinas para fundação e concreto em Brasília",
    tag: "Obra ativa",
  },
  {
    src: "/images/frota-03.jpeg",
    alt: "Perfuratriz e bomba de concreto CCOM no Distrito Federal",
    tag: "Fundações",
  },
  {
    src: "/images/frota-05.jpeg",
    alt: "Máquinas CCOM Locações em canteiro de obras no DF",
    tag: "Equipamentos",
  },
  {
    src: "/images/frota-07.jpeg",
    alt: "Operação de locação CCOM — bomba e perfuratriz em Brasília",
    tag: "Em campo",
  },
] as const;

const services = [
  {
    id: "bomba",
    tag: "Bombeamento",
    title: "Bomba de concreto",
    subtitle: "Locação com operação em obra",
    description:
      "Bombeamento para lajes, vigas, pilares e infraestrutura. Equipamento mobilizado no canteiro com foco em segurança, ritmo e produtividade.",
    image: "/images/obra-canteiro.png",
    imageAlt: "Bomba de concreto CCOM em operação em obra em Brasília",
    points: [
      "Alcance em lajes, vigas e pilares",
      "Agilidade no vazamento do concreto",
      "Menos mão de obra manual no canteiro",
      "Atendimento em todo o DF e entorno",
    ],
    whatsappText:
      "Olá! Gostaria de orçamento para locação de bomba de concreto em Brasília.",
  },
  {
    id: "perfuratriz",
    tag: "Fundações",
    title: "Perfuratriz",
    subtitle: "Estacas escavadas mecanizadas",
    description:
      "Perfuração para estacas escavadas com controle de diâmetro e profundidade. Solução para fundações profundas em terrenos do Distrito Federal.",
    image: "/images/frota-04.jpeg",
    imageAlt: "Perfuratriz CCOM executando estacas escavadas no DF",
    points: [
      "Estacas escavadas para edificações",
      "Fundações e muros de arrimo",
      "Equipamento rastreado ou sobre caminhão",
      "Equipe com experiência em canteiro",
    ],
    whatsappText:
      "Olá! Gostaria de orçamento para locação de perfuratriz / estacas escavadas em Brasília.",
  },
] as const;

const differentials = [
  {
    title: "Equipamentos próprios",
    text: "Frota com identidade CCOM em canteiro — operação profissional e reconhecível na obra.",
  },
  {
    title: "Atendimento direto",
    text: "Orçamento rápido pelo WhatsApp ou telefone, sem formulário e sem intermediários.",
  },
  {
    title: "Brasília e entorno",
    text: "Atuação no DF, cidades satélites e Entorno — deslocamento alinhado à sua região.",
  },
  {
    title: "Bomba + perfuratriz",
    text: "Experiência nos dois serviços — ideal para obras que exigem bombeamento e fundação.",
  },
  {
    title: "Prazo e segurança",
    text: "Compromisso com mobilização no canteiro e operação segura do equipamento.",
  },
] as const;

const steps = [
  { n: "01", text: "Ligue ou chame no WhatsApp informando local da obra e serviço." },
  { n: "02", text: "Alinhamos prazo, tipo de fundação ou bombeamento e disponibilidade." },
  { n: "03", text: "Mobilizamos a máquina no canteiro e acompanhamos a operação." },
] as const;

const cities = [
  "Plano Piloto",
  "Águas Claras",
  "Taguatinga",
  "Ceilândia",
  "Samambaia",
  "Gama",
  "Sobradinho",
  "Lago Sul e Lago Norte",
  "Vicente Pires",
  "Entorno (Luziânia, Águas Lindas, Valparaíso)",
] as const;

const faqItems = [
  {
    q: "A CCOM faz locação de bomba de concreto em Brasília?",
    a: "Sim. A CCOM Locações atua com locação de bomba de concreto para obras no Distrito Federal e entorno, com atendimento via WhatsApp e telefone para orçamento rápido.",
  },
  {
    q: "O que são estacas escavadas e quando usar?",
    a: "Estacas escavadas são fundações profundas executadas com perfuratriz, removendo o solo e depois concretando o furo. São indicadas quando o terreno é fraco ou a carga da estrutura exige apoio mais profundo — comum em Brasília e região.",
  },
  {
    q: "Vocês locam perfuratriz só para estacas escavadas?",
    a: "Nosso foco em perfuratriz é a locação para serviços de estacas escavadas em obras de construção civil, com equipamento preparado para operação em canteiro.",
  },
  {
    q: "Como solicito orçamento?",
    a: `Entre em contato pelo WhatsApp ${siteConfig.phoneDisplay} ou ligue para o mesmo número. Informe endereço da obra, tipo de serviço e prazo desejado.`,
  },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

/* ─── Componentes de seção (mesmo arquivo) ─── */

function WhatsAppButton({
  className,
  children,
  "aria-label": ariaLabel,
  message,
}: {
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
  message?: string;
}) {
  const href = message
    ? `https://wa.me/5561993770763?text=${encodeURIComponent(message)}`
    : siteConfig.whatsappUrl;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

function PhoneLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={siteConfig.telUrl} className={className}>
      {children}
    </a>
  );
}

type ServiceItem = (typeof services)[number];

function ServiceCard({ service }: { service: ServiceItem }) {
  const ServiceIcon = service.id === "bomba" ? IconConcrete : IconDrill;

  return (
    <article
      id={`servico-${service.id}`}
      className="group flex h-full scroll-mt-[6rem] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-stone-200/90 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] sm:scroll-mt-[7.75rem]"
    >
      <div className="relative aspect-[5/3] overflow-hidden bg-stone-200">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/25 to-transparent" />
        <span className="absolute left-5 top-5 rounded-md bg-brand-yellow px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wide text-brand-charcoal">
          {service.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col border-t-4 border-brand-yellow p-7 sm:p-8 lg:p-9">
        <div className="flex items-start gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-charcoal text-brand-yellow"
            aria-hidden
          >
            <ServiceIcon className="h-6 w-6" />
          </div>
          <div>
            <h3 className={`${brandClasses.h3} text-brand-charcoal`}>{service.title}</h3>
            <p className="mt-1 text-sm font-medium uppercase tracking-wide text-stone-500">
              {service.subtitle}
            </p>
          </div>
        </div>

        <p className="mt-6 flex-1 text-base leading-relaxed text-stone-600">
          {service.description}
        </p>

        <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
          {service.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2.5 rounded-lg bg-stone-50 px-3.5 py-3 text-sm leading-snug text-stone-700"
            >
              <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
              {point}
            </li>
          ))}
        </ul>

        <WhatsAppButton
          message={service.whatsappText}
          className={`${brandClasses.btnPrimary} mt-8 !flex w-full sm:!inline-flex sm:w-auto`}
        >
          <span className={`${brandClasses.heroBtnInner} w-full sm:w-auto`}>
            <IconWhatsApp className="block h-5 w-5 shrink-0" />
            <span className="whitespace-nowrap">Solicitar orçamento</span>
            <IconArrowRight className="ml-auto block h-4 w-4 shrink-0 opacity-80 sm:ml-0" />
          </span>
        </WhatsAppButton>
      </div>
    </article>
  );
}

function SiteHeader() {
  return (
    <header className={brandClasses.header}>
      <div className={brandClasses.headerInner}>
        <Link
          href="/"
          className="relative block h-16 w-[14.5rem] shrink-0 sm:h-[4.5rem] sm:w-[17rem] md:h-20 md:w-[19rem] lg:h-[5.25rem] lg:w-[20.5rem]"
          aria-label="CCOM Locações — início"
        >
          <Image
            src="/images/logo.png"
            alt="CCOM Locações"
            fill
            className="object-contain object-left"
            priority
            sizes="(max-width: 640px) 232px, 328px"
          />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 xl:block xl:px-4 2xl:px-6"
          aria-label="Menu principal"
        >
          <ul className="flex items-center justify-center gap-0.5 xl:gap-1.5 2xl:gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={brandClasses.headerNavLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 flex-row flex-nowrap items-center gap-2 sm:gap-3 xl:pl-2">
          <PhoneLink className={brandClasses.headerPhone}>
            <IconPhone className="h-4 w-4 shrink-0 text-brand-yellow" />
            <span className="hidden whitespace-nowrap xl:inline">{siteConfig.phoneDisplay}</span>
            <span className="whitespace-nowrap xl:hidden">Ligar</span>
          </PhoneLink>

          <WhatsAppButton className={brandClasses.headerCta}>
            <span className={brandClasses.headerCtaInner}>
              <IconWhatsApp className="block h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
              <span className="whitespace-nowrap">Orçamento</span>
            </span>
          </WhatsAppButton>

          <details className="group relative xl:hidden">
            <summary
              className={`${brandClasses.headerMenuBtn} cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden`}
              aria-label="Abrir menu de navegação"
            >
              <IconMenu />
            </summary>
            <div
              className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-[min(calc(100vw-2rem),16rem)] overflow-hidden rounded-xl border border-stone-200 bg-white py-2 shadow-xl"
              role="dialog"
              aria-label="Menu de navegação"
            >
              <nav aria-label="Menu mobile">
                <ul>
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className={brandClasses.headerNavLinkMobile}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-1 border-t border-stone-100 px-4 py-3">
                <PhoneLink className="flex items-center gap-2 text-sm font-semibold text-stone-700">
                  <IconPhone className="h-4 w-4 text-brand-yellow" />
                  {siteConfig.phoneDisplay}
                </PhoneLink>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function SectionHeader({
  id,
  title,
  description,
  dark = false,
}: {
  id: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <header className={brandClasses.sectionHeader}>
      <div className={brandClasses.divider} aria-hidden />
      <h2
        id={id}
        className={`${brandClasses.h2} mt-8 ${dark ? "text-white" : "text-brand-charcoal"}`}
      >
        {title}
      </h2>
      <p className={dark ? brandClasses.sectionIntroDark : brandClasses.sectionIntro}>
        {description}
      </p>
    </header>
  );
}

/* ─── Página principal ─── */

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <SiteHeader />

      <main>
        {/* Hero */}
        <section
          className="relative flex min-h-[min(72vh,580px)] items-end overflow-hidden bg-brand-charcoal sm:min-h-[min(68vh,620px)]"
          aria-labelledby="hero-heading"
        >
          <Image
            src="/images/frota-08.jpeg"
            alt="Obra em Brasília com bomba de concreto CCOM e perfuratriz em operação"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-charcoal/40" aria-hidden />
          <div
            className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/95 via-50% to-transparent"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/75 to-transparent"
            aria-hidden
          />
          <div
            className={`${brandClasses.container} relative z-10 pb-14 pt-28 sm:pb-16 sm:pt-32 md:pb-20 md:pt-36`}
          >
            <div className={brandClasses.heroContent}>
              <span className={brandClasses.badge}>Brasília — DF e entorno</span>
              <h1 id="hero-heading" className={`${brandClasses.h1} ${brandClasses.heroH1}`}>
                Locação de bomba de concreto e perfuratriz para{" "}
                <span className={brandClasses.heroH1Accent}>estacas escavadas</span>
              </h1>
              <p className={`${brandClasses.lead} ${brandClasses.heroLead}`}>
                CCOM Locações — equipamento em canteiro, atendimento de obra e orçamento
                rápido. Bombas de concreto e perfuratrizes para fundações no Distrito Federal.
              </p>
              <div className={brandClasses.heroCtaGroup}>
                <WhatsAppButton className={brandClasses.heroBtnPrimary}>
                  <span className={brandClasses.heroBtnInner}>
                    <IconWhatsApp className="block h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
                    <span className="whitespace-nowrap">Chamar no WhatsApp</span>
                  </span>
                </WhatsAppButton>
                <PhoneLink className={brandClasses.heroBtnOutline}>
                  <span className={brandClasses.heroBtnInner}>
                    <IconPhone className="block h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
                    <span className="whitespace-nowrap">{siteConfig.phoneDisplay}</span>
                  </span>
                </PhoneLink>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-10 h-2 bg-brand-yellow" aria-hidden />
        </section>

        {/* Serviços */}
        <section
          id="servicos"
          className={`${brandClasses.section} bg-stone-100 !pb-12 sm:!pb-14 md:!pb-16`}
          aria-labelledby="servicos-heading"
        >
          <div className={brandClasses.container}>
            <header className={`${brandClasses.sectionHeader} !mb-0`}>
              <div className={brandClasses.divider} aria-hidden />
              <h2
                id="servicos-heading"
                className={`${brandClasses.h2} mt-8 text-brand-charcoal`}
              >
                O que locamos para sua obra
              </h2>
              <p className={brandClasses.sectionIntro}>
                A CCOM atua com dois equipamentos principais em Brasília e entorno. Cada card
                abaixo detalha o serviço — clique em solicitar orçamento para falar direto com a
                equipe.
              </p>
              <nav
                className="mt-8 flex flex-wrap gap-3 pb-2 mb-12 md:mb-16 lg:mb-20"
                aria-label="Tipos de locação disponíveis"
              >
                <a
                  href="#servico-bomba"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm transition hover:border-brand-yellow hover:text-brand-charcoal"
                >
                  <IconConcrete className="h-4 w-4 text-brand-yellow" />
                  Bomba de concreto
                </a>
                <a
                  href="#servico-perfuratriz"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm transition hover:border-brand-yellow hover:text-brand-charcoal"
                >
                  <IconDrill className="h-4 w-4 text-brand-yellow" />
                  Perfuratriz · Estacas escavadas
                </a>
              </nav>
            </header>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              {services.map((svc) => (
                <ServiceCard key={svc.id} service={svc} />
              ))}
            </div>
          </div>
        </section>

        <div className={brandClasses.sectionBreak} aria-hidden>
          <div className={brandClasses.sectionBreakLine} />
        </div>

        {/* Estacas escavadas — bloco SEO */}
        <section
          id="estacas"
          className={`${brandClasses.section} overflow-hidden bg-brand-charcoal text-white !pt-14 sm:!pt-16 md:!pt-20`}
          aria-labelledby="estacas-heading"
        >
          <div className={brandClasses.container}>
            <div className={brandClasses.estacasSplit}>
              <div className={brandClasses.estacasText}>
              <div className={brandClasses.divider} aria-hidden />
              <h2 id="estacas-heading" className={`${brandClasses.h2} text-white`}>
                Estacas escavadas com perfuratriz
              </h2>
              <p className="text-base leading-relaxed text-stone-300 md:text-lg">
                As <strong className="text-brand-yellow">estacas escavadas</strong> são
                uma das soluções mais usadas em fundações no Distrito Federal. A perfuratriz
                abre o furo no solo, permite instalação de armadura e concretagem — garantindo
                capacidade de carga para edifícios, galpões e muros de arrimo.
              </p>
              <p className="text-base leading-relaxed text-stone-300 md:text-lg">
                A CCOM Locações oferece <strong>locação de perfuratriz</strong> para sua obra
                em Brasília, com equipamento identificado e operação em condições reais de
                canteiro — terra, prazo e produtividade.
              </p>
              <WhatsAppButton className={`${brandClasses.btnPrimary} w-fit`}>
                <span className={brandClasses.heroBtnInner}>
                  <IconWhatsApp className="block h-5 w-5 shrink-0" />
                  <span>Orçar estacas escavadas</span>
                </span>
              </WhatsAppButton>
            </div>
              <figure className={brandClasses.estacasFigure}>
                <Image
                  src="/images/perfuratriz-obra.png"
                  alt="Perfuratriz CCOM Locações executando estacas escavadas em obra no DF"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <figcaption className="sr-only">
                  Perfuratriz CCOM em operação de estacas escavadas
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Frota */}
        <section
          id="frota"
          className={`${brandClasses.section} bg-stone-50`}
          aria-labelledby="frota-heading"
        >
          <div className={brandClasses.container}>
            <SectionHeader
              id="frota-heading"
              title="Frota em operação"
              description="Equipamentos próprios em obras reais do DF — bomba de concreto, perfuratriz e estacas escavadas no canteiro."
            />
            <p className="-mt-6 mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-wide text-stone-500 md:-mt-8 md:mb-10">
              <span className="rounded-full bg-brand-yellow/15 px-3 py-1 text-brand-charcoal">
                Frota própria
              </span>
              <span className="hidden text-stone-300 sm:inline" aria-hidden>
                ·
              </span>
              <span>Brasília e entorno</span>
            </p>
            <div className={brandClasses.frotaGrid}>
              {galleryImages.map((img) => (
                <div
                  key={img.src}
                  className="group overflow-hidden rounded-xl ring-1 ring-stone-200/70 shadow-sm transition hover:ring-brand-yellow/50 hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] bg-gradient-to-t from-brand-charcoal/85 to-transparent px-3 pb-2 pt-8"
                      aria-hidden
                    >
                      <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-brand-yellow sm:text-xs">
                        {img.tag}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section
          className={`${brandClasses.section} bg-white`}
          aria-labelledby="diferenciais-heading"
        >
          <div className={brandClasses.container}>
            <SectionHeader
              id="diferenciais-heading"
              title="Por que escolher a CCOM Locações"
              description="Atendimento direto, máquinas em canteiro e foco em Brasília e entorno — do orçamento à mobilização na sua obra."
            />
            <ul className={brandClasses.diffGrid}>
              {differentials.map((item) => (
                <li key={item.title} className={brandClasses.diffCard}>
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" aria-hidden />
                  <div>
                    <h3 className={brandClasses.diffCardTitle}>{item.title}</h3>
                    <p className={brandClasses.diffCardText}>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Como funciona */}
        <section
          className={`${brandClasses.section} bg-brand-charcoal-soft text-white`}
          aria-labelledby="como-heading"
        >
          <div className={brandClasses.container}>
            <SectionHeader
              id="como-heading"
              title="Como funciona a locação"
              description="Três passos simples — sem formulário. Fale com a equipe e alinhamos equipamento e prazo para sua obra."
              dark
            />
            <ol className="grid gap-8 md:grid-cols-3 md:gap-10">
              {steps.map((step) => (
                <li key={step.n} className={brandClasses.card}>
                  <span className="font-display text-5xl font-bold text-brand-yellow">
                    {step.n}
                  </span>
                  <p className="mt-6 text-base leading-relaxed text-stone-300 md:text-lg">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Área */}
        <section
          id="area"
          className={`${brandClasses.section} bg-white`}
          aria-labelledby="area-heading"
        >
          <div className={brandClasses.container}>
            <SectionHeader
              id="area-heading"
              title="Área de atuação — Brasília e entorno"
              description="Atendemos o Plano Piloto, cidades satélites e Entorno do DF. Confirme disponibilidade e prazo de deslocamento para sua região administrativa."
            />
            <ul className="flex flex-wrap gap-3 md:gap-4">
              {cities.map((city) => (
                <li
                  key={city}
                  className="rounded-full border border-stone-200 bg-stone-50 px-5 py-2.5 text-sm font-medium text-stone-700 md:text-base"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className={`${brandClasses.section} bg-stone-50`}
          aria-labelledby="faq-heading"
        >
          <div className={brandClasses.container}>
            <SectionHeader
              id="faq-heading"
              title="Perguntas frequentes"
              description="Dúvidas sobre locação de bomba de concreto, perfuratriz e estacas escavadas em Brasília."
            />
            <div className="space-y-5 md:space-y-6">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-stone-200 bg-white p-7 open:border-brand-yellow/60 open:shadow-sm md:p-8"
                >
                  <summary className="cursor-pointer list-none pr-4 font-display text-base font-semibold uppercase leading-snug text-brand-charcoal marker:content-none sm:text-lg [&::-webkit-details-marker]:hidden">
                    {item.q}
                  </summary>
                  <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section
          id="contato"
          className={`${brandClasses.section} bg-brand-charcoal text-white`}
          aria-labelledby="contato-heading"
        >
          <div className={`${brandClasses.container} text-center`}>
            <div className={`${brandClasses.divider} mx-auto`} aria-hidden />
            <h2 id="contato-heading" className={`${brandClasses.h2} mt-8 text-white`}>
              Solicite orçamento agora
            </h2>
            <p className={`${brandClasses.lead} mx-auto mt-8 max-w-xl`}>
              Sem formulário — fale direto com a equipe pelo WhatsApp ou telefone.
              Resposta ágil para sua obra em Brasília.
            </p>
            <p className="mt-12 font-display text-3xl font-bold tracking-tight text-brand-yellow sm:text-4xl md:text-5xl">
              {siteConfig.phoneDisplay}
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
              <WhatsAppButton className={brandClasses.btnPrimary}>
                <IconWhatsApp className="h-6 w-6 shrink-0" />
                Chamar no WhatsApp
              </WhatsAppButton>
              <PhoneLink className={brandClasses.btnOutline}>
                <IconPhone className="shrink-0" />
                Ligar {siteConfig.phoneDisplay}
              </PhoneLink>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800 bg-brand-charcoal py-14 text-stone-400 md:py-16">
        <div className={`${brandClasses.container} ${brandClasses.footerGrid}`}>
          <div className={brandClasses.footerBrand}>
            <div className={brandClasses.footerLogoWrap}>
              <Image
                src="/images/logo.png"
                alt="CCOM Locações"
                fill
                className="object-contain object-center md:object-left"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
            <p className={brandClasses.footerTagline}>{siteConfig.tagline}</p>
            <p className={brandClasses.footerRegion}>
              <span className={brandClasses.footerRegionLine} aria-hidden />
              <span>
                {siteConfig.city} — {siteConfig.state} · {siteConfig.region}
              </span>
            </p>
          </div>

          <div className="text-sm">
            <p className="font-semibold text-white">Contato</p>
            <PhoneLink className="mt-2 block text-brand-yellow hover:underline">
              {siteConfig.phoneDisplay}
            </PhoneLink>
          </div>

          <div className="text-sm">
            <p className="font-semibold text-white">Localização</p>
            <p className="mt-2 text-stone-400">{siteConfig.locationName}</p>
            <p className="mt-1">{siteConfig.locationAddress}</p>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-semibold text-brand-yellow transition hover:underline"
            >
              Abrir no Google Maps
            </a>
            <div className={brandClasses.footerMap}>
              <iframe
                src={siteConfig.mapsEmbedUrl}
                title={`Mapa — ${siteConfig.locationName}`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-stone-500 md:mt-14">
          © {new Date().getFullYear()} CCOM Locações. Todos os direitos reservados.
        </p>
      </footer>

      {/* WhatsApp flutuante */}
      <WhatsAppButton
        className="fixed bottom-8 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:right-8"
        aria-label="Abrir WhatsApp CCOM Locações"
      >
        <IconWhatsApp className="h-8 w-8" />
      </WhatsAppButton>
    </>
  );
}
