"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Search, ShoppingBag, User, HelpCircle, FileText } from "lucide-react";

export function CommandSearch() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const navigate = (path: string) => {
    setOpen(false);
    router.push(path);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search products, pages..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Shop">
          <CommandItem onSelect={() => navigate("/shop")}>
            <ShoppingBag className="mr-2 h-4 w-4" />
            <span>All Products</span>
          </CommandItem>
          <CommandItem onSelect={() => navigate("/collections/streetwear")}>
            <ShoppingBag className="mr-2 h-4 w-4" />
            <span>Streetwear Collection</span>
          </CommandItem>
          <CommandItem onSelect={() => navigate("/collections/tech")}>
            <ShoppingBag className="mr-2 h-4 w-4" />
            <span>Tech Collection</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Pages">
          <CommandItem onSelect={() => navigate("/account")}>
            <User className="mr-2 h-4 w-4" />
            <span>My Account</span>
          </CommandItem>
          <CommandItem onSelect={() => navigate("/faq")}>
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>FAQ</span>
          </CommandItem>
          <CommandItem onSelect={() => navigate("/support")}>
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Support</span>
          </CommandItem>
          <CommandItem onSelect={() => navigate("/contact")}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Contact</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
