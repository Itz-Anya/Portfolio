import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 glass-strong">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <button
          type="button"
          onClick={scrollToTop}
          className="font-display text-lg sm:text-xl font-bold transition-all duration-300 bg-transparent border-none cursor-pointer"
          style={{ letterSpacing: "0.01em" }}
          aria-label="Go to top"
        >
          <span className="text-gradient italic">Anya</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group font-mono tracking-wide"
            >
              {l.label}
              <span
                className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
                }}
              />
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="p-2 text-foreground touch-manipulation"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass-strong border-t border-border/30 px-6 py-4 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-mono font-medium text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
