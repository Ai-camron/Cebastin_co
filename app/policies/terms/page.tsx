export default function TermsPage() {
  return (
    <div className="container px-4 py-12 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">Terms of Service</h1>
      
      <div className="prose prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="text-muted-foreground">
            Permission is granted to temporarily download one copy of the materials on Cebastian Co's website for personal, 
            non-commercial transitory viewing only.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p className="text-muted-foreground">
            The materials on Cebastian Co's website are provided on an 'as is' basis. Cebastian Co makes no warranties, 
            expressed or implied, and hereby disclaims and negates all other warranties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
          <p className="text-muted-foreground">
            In no event shall Cebastian Co or its suppliers be liable for any damages arising out of the use or inability 
            to use the materials on Cebastian Co's website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Revisions</h2>
          <p className="text-muted-foreground">
            Cebastian Co may revise these terms of service at any time without notice. By using this website you are agreeing 
            to be bound by the then current version of these terms of service.
          </p>
        </section>
      </div>
    </div>
  );
}
