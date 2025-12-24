"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-context";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { use } from "react";

const products: Record<string, any> = {
  "tech-hoodie": {
    id: "1",
    name: "Tech Hoodie",
    price: 89.99,
    description: "Premium tech fabric hoodie with moisture-wicking properties and urban style.",
    features: ["Technical fabric", "Moisture-wicking", "Hidden pockets", "Limited edition"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  "street-jacket": {
    id: "2",
    name: "Street Jacket",
    price: 149.99,
    description: "Urban bomber jacket with premium construction and distinctive design.",
    features: ["Water-resistant", "Premium lining", "Multiple pockets", "Signature style"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
};

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { addItem } = useCart();
  const product = products[slug] || products["tech-hoodie"];

  return (
    <div className="container px-4 py-12">
      <Link href="/shop" className="inline-flex items-center text-muted-foreground hover:text-teal-500 mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square bg-gradient-to-br from-teal-950 to-background rounded-lg" />

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              {product.name}
            </h1>
            <p className="text-3xl font-bold text-teal-500">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <p className="text-lg text-muted-foreground">{product.description}</p>

          <div>
            <h3 className="font-semibold mb-3">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-center text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size: string) => (
                <Button key={size} variant="outline" className="w-16">
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <Button
            size="lg"
            className="w-full"
            onClick={() =>
              addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                image: "",
              })
            }
          >
            Add to Cart - ${product.price.toFixed(2)}
          </Button>
        </div>
      </div>
    </div>
  );
}
