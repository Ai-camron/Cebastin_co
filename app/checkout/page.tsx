"use client";

import { useCart } from "@/components/cart-context";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function CheckoutPage() {
  const { items } = useCart();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="container px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Checkout Form */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="h-10 px-3 rounded-md border bg-background focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="h-10 px-3 rounded-md border bg-background focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full h-10 px-3 rounded-md border bg-background focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full h-10 px-3 rounded-md border bg-background focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="h-10 px-3 rounded-md border bg-background focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
                <input
                  type="text"
                  placeholder="ZIP code"
                  className="h-10 px-3 rounded-md border bg-background focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Card number"
                className="w-full h-10 px-3 rounded-md border bg-background focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="h-10 px-3 rounded-md border bg-background focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="h-10 px-3 rounded-md border bg-background focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="border rounded-lg p-6 space-y-4 sticky top-20">
            <h2 className="text-2xl font-semibold">Order Summary</h2>
            <Separator />
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <Separator />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span className="text-teal-500">${total.toFixed(2)}</span>
            </div>
            <Button className="w-full" size="lg">
              Place Order
            </Button>
            <Link href="/shop" className="block text-center text-sm text-muted-foreground hover:text-teal-500">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
