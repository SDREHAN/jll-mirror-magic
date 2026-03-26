import { useState } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const mainNav = [
  { label: "Properties", href: "#" },
  { label: "Services", href: "#services" },
  { label: "People", href: "#" },
  { label: "Insights", href: "#insights" },
  { label: "Industries", href: "#" },
];

const secondaryNav = [
  { label: "About Us", href: "#" },
  { label: "Client Stories", href: "#" },
  { label: "Careers", href: "#" },
  { label: "News", href: "#news" },
  { label: "Investor Relations", href: "#" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Top bar */}
      <div className="container flex items-center justify-between h-[var(--nav-height)]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-corporate-red flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <span className="text-foreground font-bold text-xl tracking-widest uppercase">
              Pinnacle
            </span>
          </div>
          <span className="hidden sm:inline text-muted-foreground text-xs tracking-[0.25em] uppercase ml-2">
            See a brighter way
          </span>
        </a>

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
            🇮🇳 India <ChevronDown className="w-3 h-3" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="sm">Contact us</Button>
        </div>

        {/* Mobile menu toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Navigation row */}
      <div className="hidden lg:block border-t border-border">
        <div className="container flex items-center justify-between h-12">
          <nav className="flex items-center gap-6">
            {mainNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <nav className="flex items-center gap-6">
            {secondaryNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-3">
            {[...mainNav, ...secondaryNav].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm text-foreground hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="outline" size="sm" className="w-full mt-2">Contact us</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
