"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-context";
import { use } from "react";

const collections = {
  streetwear: {
    name: "Streetwear Collection",
    description: "Urban edge meets luxury in our signature streetwear line",
    products: [
      { id: "sw1", name: "Street Hoodie", price: 89.99, image: "/sw1.jpg" },
      { id: "sw2", name: "Urban Bomber", price: 159.99, image: "/sw2.jpg" },
      { id: "sw3", name: "Street Tee", price: 39.99, image: "/sw3.jpg" },
    ],
  },
  tech: {
    name: "Tech Collection",
    description: "Future-forward designs with technical fabrics",
    products: [
      { id: "tech1", name: "Tech Jacket", price: 199.99, image: "/tech1.jpg" },
      { id: "tech2", name: "Smart Hoodie", price: 119.99, image: "/tech2.jpg" },
      { id: "tech3", name: "Tech Pants", price: 99.99, image: "/tech3.jpg" },
    ],
  },
  limited: {
    name: "Limited Edition",
    description: "Exclusive pieces available in limited quantities",
    products: [
      { id: "ltd1", name: "Limited Jacket", price: 299.99, image: "/ltd1.jpg" },
      { id: "ltd2", name: "Exclusive Set", price: 249.99, image: "/ltd2.jpg" },
    ],
  },
};

export default function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { addItem } = useCart();
  const collection = collections[slug as keyof typeof collections] || collections.streetwear;

  return (
    <div className="container px-4 py-12 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-display">
          {collection.name}
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          {collection.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collection.products.map((product) => (
          <div
            key={product.id}
            className="group border rounded-lg overflow-hidden hover:border-teal-500 transition-all"
          >
            <div className="aspect-square bg-gradient-to-br from-teal-950 to-background" />
            <div className="p-4 space-y-3">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-teal-500">
                  ${product.price.toFixed(2)}
                </p>
                <Button
                  onClick={() => addItem(product)}
                  size="sm"
                  className="group-hover:bg-teal-600 transition-colors"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
