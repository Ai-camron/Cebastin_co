import Link from "next/link";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-background mt-auto">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 font-display">
              CEBASTIAN <span className="text-teal-500">CO</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Original designed streetwear where the many can be them and only be them.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/shop" className="hover:text-teal-500 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/collections/streetwear" className="hover:text-teal-500 transition-colors">
                  Streetwear
                </Link>
              </li>
              <li>
                <Link href="/collections/tech" className="hover:text-teal-500 transition-colors">
                  Tech Collection
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/support" className="hover:text-teal-500 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-teal-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/policies/privacy" className="hover:text-teal-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/terms" className="hover:text-teal-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/policies/shipping" className="hover:text-teal-500 transition-colors">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cebastian Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
