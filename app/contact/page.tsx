"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container px-4 py-12 space-y-8">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-display">Contact Us</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Have a question? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {submitted ? (
          <div className="border rounded-lg p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto">
              <div className="w-8 h-8 rounded-full bg-teal-500" />
            </div>
            <h2 className="text-2xl font-semibold">Thank you for reaching out!</h2>
            <p className="text-muted-foreground">
              We'll get back to you within 24-48 hours.
            </p>
            <Button onClick={() => setSubmitted(false)} variant="outline">
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input
                  type="text"
                  required
                  className="w-full h-10 px-3 rounded-md border bg-background focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  required
                  className="w-full h-10 px-3 rounded-md border bg-background focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full h-10 px-3 rounded-md border bg-background focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                required
                className="w-full h-10 px-3 rounded-md border bg-background focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                required
                rows={6}
                className="w-full px-3 py-2 rounded-md border bg-background focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
