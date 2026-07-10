import { Link } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--brand)]" />
          <span className="font-mono-tech text-xs uppercase tracking-[0.18em] text-foreground">
            DBCD
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <Link to="/" hash="work" className="hover:text-foreground transition">Work</Link>
          <Link to="/" hash="publications" className="hover:text-foreground transition">Publications</Link>
          <Link to="/" hash="experience" className="hover:text-foreground transition">Experience</Link>
          <Link to="/" hash="skills" className="hover:text-foreground transition">Skills</Link>
          <Link to="/" hash="contact" className="hover:text-foreground transition">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/"
            hash="contact"
            className="hidden md:inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground/80 transition hover:bg-surface hover:text-foreground"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 font-mono-tech text-xs text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} Dharani Barathi C D.</span>
        <span className="uppercase tracking-[0.18em]">Chennai · India — designed & built by DBCD</span>
      </div>
    </footer>
  );
}
