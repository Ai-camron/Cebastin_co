import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="container px-4 py-12 space-y-8">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-display">Support Center</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We're here to help you with any questions or concerns
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="border rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold">Order Support</h3>
          <p className="text-muted-foreground">
            Track your order, request returns, or report issues with your purchase.
          </p>
          <Link href="/account">
            <Button variant="outline">View Orders</Button>
          </Link>
        </div>

        <div className="border rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
          <p className="text-muted-foreground">
            Find quick answers to common questions about products, shipping, and more.
          </p>
          <Link href="/faq">
            <Button variant="outline">View FAQ</Button>
          </Link>
        </div>

        <div className="border rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="text-muted-foreground">
            Need personalized help? Reach out to our support team.
          </p>
          <Link href="/contact">
            <Button variant="outline">Contact Support</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
