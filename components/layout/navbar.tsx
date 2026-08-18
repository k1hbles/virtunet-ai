"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, routes } from "@/lib/content";
import { PillButton } from "@/components/ui/pill-button";
import { Logo } from "@/components/ui/logo";
import { SmartLink } from "@/components/ui/smart-link";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-line/30 bg-canvas/55 backdrop-blur-xl">
      <div className="wrap-wide flex h-20 max-w-[1440px] items-center justify-between">
        {/* the link already carries the accessible name, so the image is
            decorative here and must not announce "Virtu" a second time */}
        <SmartLink href={routes.home} className="inline-flex items-center" aria-label="Virtu home">
          <Logo height={26} tone="white" alt="" priority />
        </SmartLink>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <SmartLink
              key={l.label}
              href={l.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {l.label}
            </SmartLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PillButton href={routes.contact} size="sm" icon="up-right" tone="platinum">
            Speak to our specialists
          </PillButton>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex size-11 items-center justify-center rounded-full border border-line text-ink lg:hidden"
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-line bg-canvas px-5 pb-8 pt-4 lg:hidden"
      >
        <div className="flex flex-col">
          {navLinks.map((l) => (
            <SmartLink
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 text-lg text-ink"
            >
              {l.label}
            </SmartLink>
          ))}
        </div>
        <div className="mt-7">
          <PillButton href={routes.contact} icon="up-right" tone="platinum">
            Speak to our specialists
          </PillButton>
        </div>
      </nav>
    </header>
  );
}
