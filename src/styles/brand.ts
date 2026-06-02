/** Tokens e classes utilitárias da marca CCOM — fonte única de estilo */

export const siteConfig = {
  name: "CCOM Locações",
  legalName: "CCOM Locações",
  tagline: "Bomba de concreto e estacas escavadas",
  city: "Brasília",
  state: "DF",
  region: "Distrito Federal e entorno",
  phoneDisplay: "(61) 99377-0763",
  phoneE164: "+5561993770763",
  whatsappUrl:
    "https://wa.me/5561993770763?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20locação%20em%20Brasília.",
  telUrl: "tel:+5561993770763",
  siteUrl: "https://ccomlocacoes.com.br",
  mapsUrl: "https://maps.app.goo.gl/dN8AgRYMr5DGwSbx9",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=-15.8018036,-47.9674859&hl=pt-BR&z=16&output=embed",
  locationName: "CCOM Locações",
  locationAddress: "Brasília — DF",
} as const;

export const brandClasses = {
  section:
    "scroll-mt-[6rem] py-20 sm:scroll-mt-[7.75rem] sm:py-24 md:py-28 lg:py-32",
  container: "mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10",
  sectionHeader: "mb-12 md:mb-16 lg:mb-20",
  sectionIntro:
    "mt-5 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg md:mt-6",
  sectionIntroDark:
    "mt-5 max-w-2xl text-base leading-relaxed text-stone-400 sm:text-lg md:mt-6",
  stack: "flex flex-col gap-8 md:gap-10",
  gridCards: "grid gap-8 md:gap-10 md:grid-cols-2",
  gridGallery: "grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3",
  frotaGrid:
    "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4",
  frotaTileOuter:
    "group overflow-hidden rounded-xl ring-1 ring-stone-200/70 shadow-sm transition hover:ring-brand-yellow/50 hover:shadow-md",
  frotaTileInner:
    "relative aspect-[4/3] w-full min-h-[8rem] overflow-hidden bg-stone-200 sm:min-h-[9rem]",
  frotaTileImage:
    "object-cover transition duration-500 group-hover:scale-[1.03]",
  frotaTileOverlay:
    "absolute inset-x-0 bottom-0 z-[1] bg-gradient-to-t from-brand-charcoal/85 to-transparent px-3 pb-2 pt-8",
  frotaTileTag:
    "text-[0.6875rem] font-bold uppercase tracking-wider text-brand-yellow sm:text-xs",
  h1: "font-display text-3xl font-bold uppercase leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]",
  h2: "font-display text-2xl font-bold uppercase leading-tight tracking-tight sm:text-3xl lg:text-4xl",
  h3: "font-display text-lg font-semibold uppercase tracking-wide sm:text-xl",
  lead: "text-base leading-relaxed text-stone-300 sm:text-lg md:text-xl md:leading-relaxed",
  btnPrimary:
    "inline-flex min-h-[48px] items-center justify-center gap-2.5 whitespace-nowrap rounded-lg bg-brand-yellow px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-charcoal shadow-md transition hover:bg-brand-yellow-dark hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 focus:ring-offset-brand-charcoal",
  btnOutline:
    "inline-flex min-h-[48px] items-center justify-center gap-2.5 whitespace-nowrap rounded-lg border-2 border-white/90 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-white",
  heroContent:
    "relative max-w-3xl space-y-5 rounded-2xl bg-brand-charcoal/65 px-5 py-6 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:space-y-6 sm:px-8 sm:py-8 md:px-10",
  heroH1: "text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]",
  heroH1Accent: "text-brand-yellow drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]",
  heroLead:
    "max-w-2xl text-balance text-stone-100 drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]",
  heroCtaGroup:
    "flex w-full flex-col gap-4 pt-2 sm:flex-row sm:items-stretch sm:gap-5 sm:pt-4 md:max-w-2xl",
  heroBtnPrimary:
    "flex w-full min-h-[3.25rem] flex-row flex-nowrap items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-brand-yellow px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-charcoal shadow-lg transition hover:bg-brand-yellow-dark sm:min-h-[3.5rem] sm:flex-1 sm:px-8",
  heroBtnOutline:
    "flex w-full min-h-[3.25rem] flex-row flex-nowrap items-center justify-center gap-3 whitespace-nowrap rounded-lg border-2 border-white bg-white/10 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white hover:text-brand-charcoal sm:min-h-[3.5rem] sm:flex-1 sm:px-8",
  heroBtnInner:
    "flex flex-row flex-nowrap items-center justify-center gap-3 leading-none",
  card:
    "rounded-xl border border-stone-700/80 bg-brand-charcoal-soft/90 p-8 shadow-lg backdrop-blur-sm md:p-10",
  badge:
    "inline-block rounded-md bg-brand-yellow px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-charcoal",
  divider: "h-1 w-16 rounded-full bg-brand-yellow sm:w-20",
  sectionBreak:
    "bg-stone-100 px-5 pb-12 pt-4 sm:px-8 md:pb-16 lg:px-10",
  sectionBreakLine: "mx-auto h-1 max-w-6xl rounded-full bg-brand-yellow/70",
  estacasSplit:
    "grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16",
  estacasText: "flex flex-col gap-5 md:gap-6",
  estacasFigure:
    "relative m-0 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-yellow/30 shadow-2xl lg:aspect-[5/4]",
  diffGrid: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6",
  diffCard:
    "flex gap-4 rounded-xl border border-stone-200 bg-white p-6 shadow-sm md:p-7",
  diffCardTitle:
    "font-display text-base font-semibold uppercase text-brand-charcoal",
  diffCardText: "mt-2 text-sm leading-relaxed text-stone-600",
  header:
    "fixed left-0 right-0 top-0 z-50 w-full border-b border-stone-200 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]",
  headerInner:
    "mx-auto flex h-[5.75rem] w-full max-w-7xl items-center gap-3 px-5 sm:h-[7.25rem] sm:gap-4 sm:px-8 lg:h-[7.5rem] lg:gap-5 lg:px-10",
  headerNavLink:
    "inline-flex whitespace-nowrap rounded-md px-3 py-2 font-display text-[0.9375rem] font-semibold uppercase tracking-normal text-stone-700 underline-offset-4 transition hover:bg-stone-100 hover:text-brand-charcoal hover:underline xl:px-3.5 xl:text-base",
  headerNavLinkMobile:
    "block rounded-lg px-4 py-3.5 font-display text-base font-semibold uppercase tracking-normal text-stone-800 transition hover:bg-brand-yellow/10 hover:text-brand-charcoal",
  headerPhone:
    "hidden h-11 shrink-0 flex-row flex-nowrap items-center gap-2 whitespace-nowrap rounded-lg border border-stone-200 bg-stone-50 px-3.5 py-2.5 text-sm font-semibold text-stone-800 transition hover:border-brand-yellow/60 hover:bg-white md:flex lg:px-4",
  headerCta:
    "flex h-11 min-w-fit shrink-0 flex-row flex-nowrap items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-brand-yellow px-3.5 text-xs font-bold uppercase leading-none tracking-wide text-brand-charcoal shadow-sm transition hover:bg-brand-yellow-dark sm:h-12 sm:gap-2.5 sm:px-5 sm:text-sm",
  headerCtaInner:
    "flex flex-row flex-nowrap items-center justify-center gap-2 leading-none",
  headerMenuBtn:
    "flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-stone-200 text-stone-700 transition hover:border-stone-300 hover:bg-stone-50 xl:hidden",
  footerGrid:
    "grid gap-10 text-center md:gap-12 md:text-left lg:grid-cols-3 lg:items-start",
  footerBrand: "flex flex-col items-center md:items-start",
  footerLogoWrap:
    "relative mx-auto h-20 w-56 sm:h-24 sm:w-64 md:mx-0 md:h-28 md:w-72 lg:h-32 lg:w-80",
  footerTagline:
    "mt-5 max-w-sm font-display text-base font-bold uppercase leading-snug tracking-wide text-white sm:text-lg",
  footerRegion:
    "mt-3 flex flex-col items-center gap-2 text-sm leading-relaxed text-stone-400 sm:flex-row sm:items-center md:items-start",
  footerRegionLine: "hidden h-1 w-10 shrink-0 rounded-full bg-brand-yellow sm:block",
  footerMap:
    "mt-4 aspect-[4/3] w-full overflow-hidden rounded-xl border border-stone-700/80 sm:aspect-video",
} as const;
