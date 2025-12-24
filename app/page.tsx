import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="container px-4 py-12 space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-12">
        <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight">
          BE <span className="text-teal-500">INSANELY</span> YOU
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Original designed streetwear where the many can be them and only be them with styles that reflect the insane but sane.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/shop">
            <Button size="lg" className="text-lg">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/collections/streetwear">
            <Button size="lg" variant="outline" className="text-lg">
              View Collections
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Streetwear", slug: "streetwear", description: "Urban edge meets luxury" },
            { name: "Tech Collection", slug: "tech", description: "Future-forward designs" },
            { name: "Limited Edition", slug: "limited", description: "Exclusive pieces" },
          ].map((collection) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group relative overflow-hidden rounded-lg border bg-card hover:border-teal-500 transition-all"
            >
              <div className="aspect-square bg-gradient-to-br from-teal-950 to-background" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-500 transition-colors">
                  {collection.name}
                </h3>
                <p className="text-muted-foreground text-sm">{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center">
          Why Cebastian Co?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Original Designs",
              description: "Each piece is uniquely crafted to express individuality",
            },
            {
              title: "Premium Quality",
              description: "Luxury materials and construction for lasting wear",
            },
            {
              title: "Limited Drops",
              description: "Exclusive releases ensure your style stays unique",
            },
          ].map((feature, i) => (
            <div key={i} className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto">
                <div className="w-8 h-8 rounded-full bg-teal-500" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
