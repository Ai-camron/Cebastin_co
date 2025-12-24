"use client";

import React from "react";

type Collection = {
  title: string;
  subtitle: string;
  href: string;
  image: string;
};

type Product = {
  name: string;
  price: string;
  href: string;
  image: string;
  tag: string;
};

type JournalItem = {
  title: string;
  meta: string;
  href: string;
};

const collections: Collection[] = [
  {
    title: "Core Capsule",
    subtitle: "Essentials, refined",
    href: "/collections/core-capsule",
    image: "/images/collections/core.jpg",
  },
  {
    title: "Void Satin",
    subtitle: "Elevated sheen",
    href: "/collections/void-satin",
    image: "/images/collections/void-satin.jpg",
  },
  {
    title: "Syntax Black",
    subtitle: "Monochrome utility",
    href: "/collections/syntax-black",
    image: "/images/collections/syntax-black.jpg",
  },
];

const products: Product[] = [
  {
    name: "Core Hoodie",
    price: "$99",
    href: "/product/core-hoodie",
    image: "/images/products/core-hoodie.jpg",
    tag: "Restocked",
  },
  {
    name: "Transit Jacket",
    price: "$189",
    href: "/product/transit-jacket",
    image: "/images/products/transit-jacket.jpg",
    tag: "New",
  },
  {
    name: "Utility Tee",
    price: "$45",
    href: "/product/utility-tee",
    image: "/images/products/utility-tee.jpg",
    tag: "Core",
  },
  {
    name: "Field Cargo",
    price: "$98",
    href: "/product/field-cargo",
    image: "/images/products/field-cargo.jpg",
    tag: "Limited",
  },
];

const journal: JournalItem[] = [
  {
    title: "Drop cadence: how we build capsules",
    meta: "Journal",
    href: "/support/faq",
  },
  {
    title: "Fit notes: relaxed vs standard",
    meta: "Journal",
    href: "/support/faq",
  },
  {
    title: "Care: keep black looking black",
    meta: "Journal",
    href: "/support/faq",
  },
];

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function AppLink(
  props: React.PropsWithChildren<
    React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
  >,
) {
  const { href, children, ...rest } = props;
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}

type ImgProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

function Img({ src, alt, className, priority }: ImgProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={(e) => {
        const el = e.currentTarget;
        if (el.dataset.fallback === "1") return;
        el.dataset.fallback = "1";
        el.src =
          "data:image/svg+xml;charset=utf-8," +
          encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='900'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop stop-color='#111' offset='0'/><stop stop-color='#2b2b2b' offset='1'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)'/><g fill='none' stroke='rgba(255,255,255,0.12)'><path d='M-50 700 C 250 520, 520 980, 1250 260' stroke-width='2'/><path d='M-60 500 C 380 280, 620 760, 1280 160' stroke-width='1.5'/></g><text x='48' y='96' fill='rgba(255,255,255,0.55)' font-family='ui-sans-serif,system-ui' font-size='22'>Cebastian Co</text></svg>`,
          );
      }}
    />
  );
}

function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16.5 16.5 21 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconUser() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M20 21a8 8 0 1 0-16 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCart() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 6h14l-1.5 8.5H8L6.5 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 6 6 3H3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-[#F5F1EA] text-[#111]">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F5F1EA]/85 backdrop-blur supports-[backdrop-filter]:bg-[#F5F1EA]/70">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
          <AppLink href="/" className="flex items-baseline gap-2">
            <span className="text-lg tracking-[0.24em]">CEBASTIAN</span>
            <span className="text-lg tracking-[0.24em] text-[#0B8C82]">CO</span>
          </AppLink>

          <nav className="hidden items-center gap-7 text-sm md:flex">
            <AppLink href="/shop" className="hover:text-black/70">
              Shop
            </AppLink>
            <AppLink href="/collections/core-capsule" className="hover:text-black/70">
              Collections
            </AppLink>
            <AppLink href="/support" className="hover:text-black/70">
              Support
            </AppLink>
          </nav>

          <div className="flex items-center gap-3">
            <AppLink
              href="/search"
              aria-label="Search"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 hover:bg-white"
            >
              <IconSearch />
            </AppLink>
            <AppLink
              href="/account"
              aria-label="Account"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 hover:bg-white"
            >
              <IconUser />
            </AppLink>
            <AppLink
              href="/cart"
              aria-label="Cart"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 hover:bg-white"
            >
              <IconCart />
            </AppLink>
          </div>
        </div>
      </header>

      <main id="content" className="mx-auto w-full max-w-6xl px-4">
        <section className="relative py-10 md:py-14">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -left-24 -top-28 h-80 w-80 rounded-full bg-[#0B8C82]/12 blur-2xl" />
            <div className="absolute -right-28 -bottom-24 h-80 w-80 rounded-full bg-black/10 blur-2xl" />
            <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_-10%,rgba(0,0,0,0.05),transparent_60%)]" />
          </div>

          <div className="grid gap-6 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm">
                <div className="relative aspect-[16/10] md:aspect-[16/8]">
                  <Img
                    src="/images/hero/hero.jpg"
                    alt="Cebastian Co hero"
                    priority
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_80%_0%,rgba(11,140,130,0.22),transparent_60%)]" />
                  <div
                    aria-hidden="true"
                    className="absolute -left-24 top-10 h-48 w-[36rem] rotate-[-8deg] rounded-[3rem] border border-white/15 bg-white/10 backdrop-blur"
                  />
                </div>

                <div className="absolute inset-0 flex items-end p-6 md:p-8">
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/85">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0B8C82]" />
                      Limited drops · Capsule-first
                    </div>
                    <h1 className="mt-5 text-[clamp(2.6rem,5.5vw,4.2rem)] leading-[0.95] tracking-tight text-white">
                      Luxury streetwear
                      <span className="block text-white/90">that stays quiet.</span>
                    </h1>
                    <p className="mt-4 max-w-prose text-sm leading-relaxed text-white/75">
                      Clean silhouettes, heavier feel, and controlled detailing—built around capsule releases.
                    </p>
                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <AppLink
                        href="/shop"
                        className="inline-flex h-11 items-center justify-center rounded-md bg-white/90 px-6 text-sm font-medium text-black hover:bg-white"
                      >
                        Shop the drop
                      </AppLink>
                      <AppLink
                        href="/collections/core-capsule"
                        className="inline-flex h-11 items-center justify-center rounded-md border border-white/20 bg-white/10 px-6 text-sm font-medium text-white hover:bg-white/15"
                      >
                        View capsules
                      </AppLink>
                      <AppLink
                        href="/support/shipping"
                        className="inline-flex h-11 items-center justify-center px-2 text-sm text-white/80 hover:text-white"
                      >
                        Shipping & returns
                      </AppLink>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-12 gap-3">
                <div className="col-span-12 rounded-3xl border border-black/10 bg-white/70 p-4 sm:col-span-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-black/50">Drops</div>
                  <div className="mt-2 text-sm text-black/80">Limited runs</div>
                </div>
                <div className="col-span-12 rounded-3xl border border-black/10 bg-white/70 p-4 sm:col-span-4 sm:translate-y-2">
                  <div className="text-xs uppercase tracking-[0.22em] text-black/50">Fit</div>
                  <div className="mt-2 text-sm text-black/80">Standard + relaxed</div>
                </div>
                <div className="col-span-12 rounded-3xl border border-black/10 bg-white/70 p-4 sm:col-span-4 sm:-translate-y-2">
                  <div className="text-xs uppercase tracking-[0.22em] text-black/50">Build</div>
                  <div className="mt-2 text-sm text-black/80">Heavyweight feel</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="grid gap-4">
                <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.22em] text-black/50">Featured</div>
                      <div className="mt-2 text-2xl tracking-tight">Core Hoodie</div>
                      <div className="mt-1 text-sm text-black/70">$99 · Restocked</div>
                    </div>
                    <div className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/60">
                      In stock
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-5 gap-2">
                    {["XS", "S", "M", "L", "XL"].map((s) => (
                      <span
                        key={s}
                        className={cx(
                          "inline-flex h-10 items-center justify-center rounded-md border border-black/10 bg-[#F5F1EA] text-sm",
                          s === "M" && "border-black/25 bg-white",
                        )}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 grid grid-cols-4 gap-2">
                    {[
                      { name: "Black", swatch: "bg-[#111]" },
                      { name: "Stone", swatch: "bg-[#CFC6B8]" },
                      { name: "Heather", swatch: "bg-[#A8A8A8]" },
                      { name: "Ivory", swatch: "bg-[#F1EEE8] border border-black/10" },
                    ].map((c) => (
                      <span key={c.name} className={cx("h-10 rounded-md", c.swatch)}>
                        <span className="sr-only">{c.name}</span>
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <AppLink
                      href="/product/core-hoodie"
                      className="inline-flex h-11 flex-1 items-center justify-center rounded-md bg-[#0B8C82] px-5 text-sm font-medium text-white shadow-sm hover:bg-[#0A7E76]"
                    >
                      Add to bag
                    </AppLink>
                    <AppLink
                      href="/product/core-hoodie"
                      className="inline-flex h-11 items-center justify-center rounded-md border border-black/15 bg-white/70 px-4 text-sm font-medium hover:bg-white"
                    >
                      View
                    </AppLink>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-black/50">Shipping</div>
                      <div className="mt-1 text-xs text-black/70">Tracked</div>
                    </div>
                    <div className="translate-y-1 rounded-2xl border border-black/10 bg-white/70 p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-black/50">Returns</div>
                      <div className="mt-1 text-xs text-black/70">Clear</div>
                    </div>
                    <div className="-translate-y-1 rounded-2xl border border-black/10 bg-white/70 p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-black/50">Secure</div>
                      <div className="mt-1 text-xs text-black/70">Encrypted</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-black/10 bg-[#111] p-6 text-[#F5F1EA]">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/60">Command</div>
                  <div className="mt-2 text-sm text-white/80">Search products + collections.</div>
                  <div className="mt-5 flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
                    <span className="text-xs text-white/70">Open search</span>
                    <span className="text-xs text-white/70">⌘ K</span>
                  </div>
                  <AppLink href="/search" className="mt-4 inline-flex text-sm text-white/80 hover:text-white">
                    Go to search →
                  </AppLink>
                </div>

                <div className="rounded-[2rem] border border-black/10 bg-white/70 p-6">
                  <div className="text-xs uppercase tracking-[0.22em] text-black/50">Drop cadence</div>
                  <div className="mt-2 text-sm text-black/70">Join the list for capsule alerts.</div>
                  <AppLink
                    href="#newsletter"
                    className="mt-4 inline-flex text-sm text-black/70 hover:text-black"
                  >
                    Get alerts →
                  </AppLink>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-black/10 bg-white/60">
            <div className="flex items-center gap-4 overflow-x-auto px-4 py-3 text-xs">
              {[
                "New capsule live",
                "Restocks weekly",
                "Ships fast",
                "Easy returns",
                "Secure checkout",
              ].map((t, i) => (
                <span
                  key={t}
                  className={cx(
                    "shrink-0 rounded-full border border-black/10 bg-white/70 px-3 py-1",
                    i % 2 === 1 && "translate-y-0.5",
                  )}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-14">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.22em] text-black/50">Capsules</p>
              <h2 className="mt-2 text-2xl tracking-tight">Find your lane</h2>
              <p className="mt-3 text-sm leading-relaxed text-black/70">
                A clustered layout instead of a straight grid.
              </p>
              <AppLink
                href="/collections/core-capsule"
                className="mt-6 inline-flex text-sm text-black/70 hover:text-black"
              >
                Browse all →
              </AppLink>
            </div>

            <div className="md:col-span-8">
              <div className="relative min-h-[360px] rounded-[2rem] border border-black/10 bg-white/70 p-4 md:min-h-[420px] md:p-6">
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(900px_520px_at_25%_0%,rgba(11,140,130,0.12),transparent_60%)]" />

                <div className="relative h-full">
                  <AppLink
                    href={collections[0].href}
                    className="group absolute left-2 top-2 w-[66%] overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm md:left-6 md:top-6 md:w-[58%]"
                  >
                    <div className="relative aspect-[16/10]">
                      <Img
                        src={collections[0].image}
                        alt={collections[0].title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/75">
                        {collections[0].subtitle}
                      </div>
                      <div className="mt-1 text-lg font-medium text-white">
                        {collections[0].title}
                      </div>
                    </div>
                  </AppLink>

                  <AppLink
                    href={collections[1].href}
                    className="group absolute right-2 top-[34%] w-[58%] overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm md:right-6 md:top-[34%] md:w-[48%]"
                  >
                    <div className="relative aspect-[4/5]">
                      <Img
                        src={collections[1].image}
                        alt={collections[1].title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/75">
                        {collections[1].subtitle}
                      </div>
                      <div className="mt-1 text-lg font-medium text-white">
                        {collections[1].title}
                      </div>
                    </div>
                  </AppLink>

                  <AppLink
                    href={collections[2].href}
                    className="group absolute bottom-4 left-6 w-[72%] overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm md:bottom-6 md:w-[70%]"
                  >
                    <div className="relative aspect-[16/7]">
                      <Img
                        src={collections[2].image}
                        alt={collections[2].title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <div className="absolute inset-0 bg-[radial-gradient(700px_320px_at_70%_0%,rgba(11,140,130,0.18),transparent_60%)]" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/75">
                        {collections[2].subtitle}
                      </div>
                      <div className="mt-1 text-lg font-medium text-white">
                        {collections[2].title}
                      </div>
                    </div>
                  </AppLink>

                  <div className="absolute left-4 top-[60%] hidden w-44 rounded-3xl border border-black/10 bg-white/85 p-4 text-xs text-black/70 md:block">
                    Tap a capsule to explore.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-14">
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.22em] text-black/50">Shop</p>
              <h2 className="mt-2 text-2xl tracking-tight">A split gallery</h2>
              <p className="mt-3 text-sm leading-relaxed text-black/70">
                A left rail + right mosaic instead of a uniform grid.
              </p>
              <div className="mt-6 grid gap-3">
                <AppLink
                  href="/shop"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-[#111] px-6 text-sm font-medium text-[#F5F1EA] hover:bg-black"
                >
                  Shop all
                </AppLink>
                <AppLink
                  href="/search"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-black/15 bg-white/60 px-6 text-sm font-medium hover:bg-white"
                >
                  Search
                </AppLink>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 rounded-[2rem] border border-black/10 bg-white/70 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.22em] text-black/50">Quick filters</div>
                      <div className="mt-1 text-sm text-black/70">Core · New · Limited</div>
                    </div>
                    <AppLink href="/shop" className="text-sm text-black/70 hover:text-black">
                      Open shop →
                    </AppLink>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    {[
                      "Hoodies",
                      "Outerwear",
                      "Tees",
                      "Bottoms",
                      "Accessories",
                    ].map((t, i) => (
                      <span
                        key={t}
                        className={cx(
                          "rounded-full border border-black/10 bg-white/70 px-3 py-1",
                          i === 1 && "translate-y-0.5",
                          i === 3 && "-translate-y-0.5",
                        )}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="col-span-12 grid grid-cols-12 gap-4">
                  {products.map((p, idx) => {
                    const span =
                      idx === 0
                        ? "col-span-12 sm:col-span-7"
                        : idx === 1
                          ? "col-span-12 sm:col-span-5 sm:translate-y-6"
                          : idx === 2
                            ? "col-span-12 sm:col-span-5 sm:-translate-y-2"
                            : "col-span-12 sm:col-span-7";
                    const ratio =
                      idx === 0
                        ? "aspect-[4/3]"
                        : idx === 1
                          ? "aspect-[3/4]"
                          : idx === 2
                            ? "aspect-[1/1]"
                            : "aspect-[16/7]";
                    return (
                      <AppLink
                        key={p.name}
                        href={p.href}
                        className={cx(
                          "group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm",
                          span,
                        )}
                      >
                        <div className={cx("relative", ratio)}>
                          <Img
                            src={p.image}
                            alt={p.name}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                          <div className="absolute inset-0 bg-[radial-gradient(700px_360px_at_80%_0%,rgba(11,140,130,0.18),transparent_60%)]" />
                        </div>

                        <div className="absolute left-5 top-5 rounded-full border border-black/10 bg-white/85 px-3 py-1 text-xs">
                          {p.tag}
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-6">
                          <div className="flex items-end justify-between gap-4">
                            <div>
                              <div className="text-base font-medium text-white">{p.name}</div>
                              <div className="mt-1 text-sm text-white/75">{p.price}</div>
                            </div>
                            <span className="inline-flex h-11 items-center justify-center rounded-md bg-white/90 px-5 text-sm font-medium text-black hover:bg-white">
                              View
                            </span>
                          </div>
                        </div>
                      </AppLink>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-14">
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.22em] text-black/50">Lookbook</p>
              <h2 className="mt-2 text-2xl tracking-tight">Filmstrip</h2>
              <p className="mt-3 text-sm leading-relaxed text-black/70">
                A continuous strip with mixed aspect ratios.
              </p>
              <AppLink
                href="/collections/core-capsule"
                className="mt-6 inline-flex text-sm text-black/70 hover:text-black"
              >
                Open lookbook →
              </AppLink>
            </div>

            <div className="md:col-span-8">
              <div className="-mx-4 overflow-x-auto px-4">
                <div className="flex snap-x snap-mandatory gap-4 pb-2">
                  {[
                    { src: "/images/lookbook/look-1.jpg", a: "aspect-[3/4]", w: "w-[62%] sm:w-[38%]" },
                    {
                      src: "/images/lookbook/look-2.jpg",
                      a: "aspect-[16/10]",
                      w: "w-[88%] sm:w-[52%]",
                    },
                    { src: "/images/lookbook/look-3.jpg", a: "aspect-[1/1]", w: "w-[58%] sm:w-[34%]" },
                    { src: "/images/hero/hero.jpg", a: "aspect-[16/7]", w: "w-[96%]" },
                  ].map((x, i) => (
                    <div
                      key={x.src}
                      className={cx(
                        "relative shrink-0 snap-start overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm",
                        x.w,
                        i === 1 && "sm:translate-y-6",
                        i === 2 && "sm:-translate-y-3",
                      )}
                    >
                      <div className={cx("relative", x.a)}>
                        <Img
                          src={x.src}
                          alt={`Lookbook ${i + 1}`}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(700px_320px_at_70%_0%,rgba(11,140,130,0.18),transparent_60%)]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-14">
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.22em] text-black/50">Journal</p>
              <h2 className="mt-2 text-2xl tracking-tight">Short notes</h2>
              <p className="mt-3 text-sm leading-relaxed text-black/70">
                Three tiles with uneven offsets.
              </p>
            </div>

            <div className="md:col-span-7">
              <div className="grid grid-cols-12 gap-4">
                {journal.map((j, idx) => (
                  <AppLink
                    key={j.title}
                    href={j.href}
                    className={cx(
                      "group col-span-12 rounded-[2rem] border border-black/10 bg-white/70 px-6 py-6 hover:bg-white",
                      idx === 0 && "md:col-span-7 md:-translate-y-2",
                      idx === 1 && "md:col-span-5 md:translate-y-4",
                      idx === 2 && "md:col-span-12",
                    )}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="text-xs uppercase tracking-[0.22em] text-black/50">{j.meta}</div>
                        <div className="mt-2 text-sm font-medium leading-snug">{j.title}</div>
                      </div>
                      <span className="mt-1 text-black/40 transition-transform duration-300 group-hover:translate-x-0.5">
                        →
                      </span>
                    </div>
                  </AppLink>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="newsletter" className="py-14">
          <div className="grid gap-6 md:grid-cols-12 md:items-stretch">
            <div className="md:col-span-7">
              <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white">
                <div className="relative aspect-[16/8]">
                  <Img
                    src="/images/lookbook/look-2.jpg"
                    alt="Newsletter"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_70%_0%,rgba(11,140,130,0.20),transparent_60%)]" />
                </div>
                <div className="absolute inset-0 p-6 md:p-8">
                  <div className="max-w-md">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/70">Newsletter</p>
                    <h2 className="mt-2 text-2xl tracking-tight text-white">Drop alerts only</h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/75">
                      One email when a capsule goes live.
                    </p>
                    <form action="/" className="mt-6 grid grid-cols-12 gap-3">
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        className="col-span-12 h-11 rounded-md border border-white/15 bg-white/10 px-4 text-sm text-white placeholder:text-white/60 outline-none ring-offset-2 focus:ring-2 focus:ring-[#0B8C82] sm:col-span-7"
                        autoComplete="email"
                      />
                      <button
                        type="submit"
                        className="col-span-12 h-11 rounded-md bg-white/90 px-6 text-sm font-medium text-black hover:bg-white sm:col-span-5"
                      >
                        Subscribe
                      </button>
                    </form>
                    <p className="mt-3 text-xs text-white/60">
                      By subscribing, you agree to our privacy policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="grid gap-4">
                <div className="rounded-[2rem] border border-black/10 bg-white/70 p-6">
                  <div className="text-xs uppercase tracking-[0.22em] text-black/50">Support</div>
                  <div className="mt-4 grid gap-2 text-sm">
                    <AppLink href="/support" className="text-black/70 hover:text-black">
                      Help center
                    </AppLink>
                    <AppLink href="/support/contact" className="text-black/70 hover:text-black">
                      Contact
                    </AppLink>
                    <AppLink href="/support/faq" className="text-black/70 hover:text-black">
                      FAQ
                    </AppLink>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-black/10 bg-[#111] p-6 text-[#F5F1EA]">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/60">Policies</div>
                  <div className="mt-4 grid gap-2 text-sm">
                    <AppLink href="/policies/shipping" className="text-white/80 hover:text-white">
                      Shipping
                    </AppLink>
                    <AppLink href="/policies/returns" className="text-white/80 hover:text-white">
                      Returns
                    </AppLink>
                    <AppLink href="/policies/privacy" className="text-white/80 hover:text-white">
                      Privacy
                    </AppLink>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-black/10 bg-[#F5F1EA] p-6">
                  <div className="text-xs uppercase tracking-[0.22em] text-black/50">Cart</div>
                  <div className="mt-2 text-sm text-black/70">Free-shipping progress shows there.</div>
                  <AppLink href="/cart" className="mt-4 inline-flex text-sm text-black/70 hover:text-black">
                    Open cart →
                  </AppLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-[#F5F1EA]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-baseline gap-2">
              <span className="text-sm tracking-[0.24em]">CEBASTIAN</span>
              <span className="text-sm tracking-[0.24em] text-[#0B8C82]">CO</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-black/70">
              Luxury streetwear built around capsule drops. Clean cuts, heavyweight comfort.
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-black/50">Shop</div>
                <div className="mt-3 grid gap-2 text-sm">
                  <AppLink className="text-black/70 hover:text-black" href="/shop">
                    All products
                  </AppLink>
                  <AppLink className="text-black/70 hover:text-black" href="/collections/core-capsule">
                    Capsules
                  </AppLink>
                  <AppLink className="text-black/70 hover:text-black" href="/search">
                    Search
                  </AppLink>
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-black/50">Support</div>
                <div className="mt-3 grid gap-2 text-sm">
                  <AppLink className="text-black/70 hover:text-black" href="/support">
                    Help center
                  </AppLink>
                  <AppLink className="text-black/70 hover:text-black" href="/support/contact">
                    Contact
                  </AppLink>
                  <AppLink className="text-black/70 hover:text-black" href="/support/faq">
                    FAQ
                  </AppLink>
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-black/50">Policies</div>
                <div className="mt-3 grid gap-2 text-sm">
                  <AppLink className="text-black/70 hover:text-black" href="/policies/shipping">
                    Shipping
                  </AppLink>
                  <AppLink className="text-black/70 hover:text-black" href="/policies/returns">
                    Returns
                  </AppLink>
                  <AppLink className="text-black/70 hover:text-black" href="/policies/privacy">
                    Privacy
                  </AppLink>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-12">
            <div className="flex flex-col gap-3 border-t border-black/10 pt-6 text-xs text-black/50 md:flex-row md:items-center md:justify-between">
              <span>© {new Date().getFullYear()} Cebastian Co</span>
              <span>Designed for fast, accessible shopping.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function _assert(condition: unknown, message: string) {
  if (!condition) throw new Error(message);
}

if (typeof process !== "undefined" && process?.env?.NODE_ENV === "test") {
  _assert(cx("a", false, "b") === "a b", "cx should join truthy classes");
  _assert(cx(null, undefined, "x") === "x", "cx should ignore null/undefined");
}
