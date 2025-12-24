"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  return (
    <div className="container px-4 py-12 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-display">Search</h1>
        <p className="text-muted-foreground text-lg">
          Find your perfect piece
        </p>
      </div>

      <div className="max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-12 pl-11 pr-4 rounded-lg border bg-background focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>
      </div>

      <div className="text-center text-muted-foreground py-12">
        {query ? `Searching for "${query}"...` : "Enter a search term to begin"}
      </div>
    </div>
  );
}
