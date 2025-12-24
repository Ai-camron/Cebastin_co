"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-context";

const products = [
  { id: "1", name: "Tech Hoodie", price: 89.99, image: "/product1.jpg", category: "Hoodies" },
  { id: "2", name: "Street Jacket", price: 149.99, image: "/product2.jpg", category: "Jackets" },
  { id: "3", name: "Urban Tee", price: 39.99, image: "/product3.jpg", category: "T-Shirts" },
  { id: "4", name: "Cargo Pants", price: 79.99, image: "/product4.jpg", category: "Bottoms" },
  { id: "5", name: "Tech Joggers", price: 69.99, image: "/product5.jpg", category: "Bottoms" },
  { id: "6", name: "Limited Edition Cap", price: 49.99, image: "/product6.jpg", category: "Accessories" },
];

export default function ShopPage() {
  const { addItem } = useCart();

  return (
    <div className="container px-4 py-12 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-display">Shop All</h1>
        <p className="text-muted-foreground text-lg">
          Discover our complete collection of original streetwear
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group border rounded-lg overflow-hidden hover:border-teal-500 transition-all"
          >
            <div className="aspect-square bg-gradient-to-br from-teal-950 to-background" />
            <div className="p-4 space-y-3">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  {product.category}
                </p>
                <h3 className="text-lg font-semibold">{product.name}</h3>
              </div>
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
