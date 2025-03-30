"use client";

import { useState } from "react";
import Link from "next/link";
import { Apple, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80">
      <div className="max-w-xl mx-auto py-8">
        <nav className="max-w-5xl mx-auto flex items-center justify-between rounded-full border border-black-200 bg-white px-5 py-2 ">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-1">
              <span className="text-2xl font-bold text-[#184c5a]">
                drop letters
              </span>
            </Link>
          </div>

          {/* Desktop Navigation
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-500 hover:text-gray-900"
              >
                {link.name}
              </Link>
            ))}
          </div> */}

          <div className="hidden md:block">
            <Button variant="outline" className="rounded-full gap-1">
              <Image src="/apple-logo.svg" alt="apple" width={15} height={15} />
              Download
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 pt-10">
                {/* {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg text-gray-700 hover:text-gray-900"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))} */}
                <Button className="mt-4 rounded-full">
                  <Apple className="mr-2 h-5 w-5" />
                  Download
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </div>
  );
}
