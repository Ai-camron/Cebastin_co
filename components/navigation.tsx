"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "./cart-context";
import { useState } from "react";

export function Navigation() {
  const { openCart, items } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-2xl font-bold font-display">
            CEBASTIAN <span className="text-teal-500">CO</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="/shop" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Shop
            </Link>
            <Link href="/collections/streetwear" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Collections
            </Link>
            <Link href="/support" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Support
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search (Cmd+K)</span>
          </Button>

          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>

          <Button variant="ghost" size="icon" onClick={openCart} className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-teal-500 text-xs flex items-center justify-center text-black font-bold">
                {cartCount}
              </span>
            )}
            <span className="sr-only">Cart</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 px-4 space-y-3">
            <Link href="/shop" className="block py-2 text-sm font-medium hover:text-teal-500" onClick={() => setMobileMenuOpen(false)}>
              Shop
            </Link>
            <Link href="/collections/streetwear" className="block py-2 text-sm font-medium hover:text-teal-500" onClick={() => setMobileMenuOpen(false)}>
              Collections
            </Link>
            <Link href="/support" className="block py-2 text-sm font-medium hover:text-teal-500" onClick={() => setMobileMenuOpen(false)}>
              Support
            </Link>
            <Link href="/faq" className="block py-2 text-sm font-medium hover:text-teal-500" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
            <Link href="/contact" className="block py-2 text-sm font-medium hover:text-teal-500" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
