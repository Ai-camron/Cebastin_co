export default function PrivacyPolicyPage() {
  return (
    <div className="container px-4 py-12 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">Privacy Policy</h1>
      
      <div className="prose prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground">
            We collect information you provide directly to us when you create an account, place an order, 
            or communicate with us. This may include your name, email address, shipping address, and payment information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground">
            We use the information we collect to process your orders, communicate with you about your purchases, 
            and improve our services. We may also use your information to send you marketing communications if you've opted in.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
          <p className="text-muted-foreground">
            We do not sell or share your personal information with third parties except as necessary to process your orders 
            or as required by law. We work with trusted service providers who help us operate our business.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="text-muted-foreground">
            We implement appropriate security measures to protect your personal information. However, no method of transmission 
            over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p className="text-muted-foreground">
            You have the right to access, correct, or delete your personal information. You can also opt out of marketing 
            communications at any time. Contact us to exercise these rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us through our contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
