export default function ShippingPolicyPage() {
  return (
    <div className="container px-4 py-12 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">Shipping Policy</h1>
      
      <div className="prose prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Shipping Methods</h2>
          <p className="text-muted-foreground">
            We offer standard shipping (5-7 business days) and express shipping (2-3 business days) for domestic orders. 
            International shipping is available and typically takes 10-15 business days.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Shipping Costs</h2>
          <p className="text-muted-foreground">
            Standard shipping is free on orders over $100. For orders under $100, standard shipping is $9.99. 
            Express shipping costs $19.99. International shipping rates vary by location.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Processing Time</h2>
          <p className="text-muted-foreground">
            Orders are typically processed within 1-2 business days. You will receive a confirmation email with tracking 
            information once your order ships.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Order Tracking</h2>
          <p className="text-muted-foreground">
            Once your order ships, you'll receive a tracking number via email. You can also track your order by logging 
            into your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Delivery Issues</h2>
          <p className="text-muted-foreground">
            If you experience any issues with your delivery, please contact our support team within 7 days of the expected 
            delivery date. We'll work with you to resolve the issue.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. International Orders</h2>
          <p className="text-muted-foreground">
            International customers are responsible for any customs fees or import duties. These fees are not included in 
            our shipping costs and vary by country.
          </p>
        </section>
      </div>
    </div>
  );
}
