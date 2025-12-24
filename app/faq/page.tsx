"use client";

import { useState } from "react";

const faqs = [
  {
    category: "Orders & Shipping",
    questions: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days.",
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, we ship to most countries worldwide. International shipping takes 10-15 business days.",
      },
      {
        q: "Can I track my order?",
        a: "Yes, you'll receive a tracking number via email once your order ships.",
      },
    ],
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        q: "What is your return policy?",
        a: "We accept returns within 30 days of purchase for unworn items with tags attached.",
      },
      {
        q: "How do I start a return?",
        a: "Log into your account and select the order you'd like to return. Follow the return instructions.",
      },
    ],
  },
  {
    category: "Products",
    questions: [
      {
        q: "How do I know what size to order?",
        a: "Check our size guide on each product page. If you're between sizes, we recommend sizing up.",
      },
      {
        q: "Are your products limited edition?",
        a: "Many of our pieces are released in limited quantities to maintain exclusivity.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <div className="container px-4 py-12 space-y-8">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-display">
          Frequently Asked Questions
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Find answers to common questions about our products and services
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {faqs.map((category, catIndex) => (
          <div key={catIndex} className="space-y-4">
            <h2 className="text-2xl font-semibold">{category.category}</h2>
            <div className="space-y-3">
              {category.questions.map((faq, qIndex) => {
                const key = `${catIndex}-${qIndex}`;
                const isOpen = openIndex === key;
                return (
                  <div key={key} className="border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : key)}
                      className="w-full p-4 text-left hover:bg-accent transition-colors flex justify-between items-center"
                    >
                      <span className="font-medium">{faq.q}</span>
                      <span className="text-teal-500 text-xl">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 text-muted-foreground border-t">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
