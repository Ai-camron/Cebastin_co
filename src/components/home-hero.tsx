import { cn } from "@/lib/utils";

export function HomeHero() {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-card p-10",
        "shadow-sm",
      )}
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Cebastian Co
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Streetwear that honors your edge and your calm.
        </h1>
        <p className="text-base text-muted-foreground md:text-lg">
          Designed for the many who want to be fully themselves. Drop-ready
          fits, intentional textures, and bold silhouettes for every day.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Shop the drop
          </button>
          <button className="inline-flex items-center justify-center rounded-md border border-input px-6 py-3 text-sm font-medium transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Learn the story
          </button>
        </div>
      </div>
    </section>
  );
}
