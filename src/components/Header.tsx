import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SW</span>
            </div>
            <div>
              <h1 className="text-base font-semibold text-foreground">SecureWipe Pro</h1>
              <p className="text-xs text-muted-foreground">Secure Data Wiping · Compliance Certificates</p>
            </div>
          </div>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden lg:flex items-center gap-6">
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#features");
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-accent hover:after:w-full after:transition-all"
            >
              Features
            </a>
            <a
              href="#verify"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#verify");
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-accent hover:after:w-full after:transition-all"
            >
              Verify
            </a>
            <Button size="sm" className="rounded-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Get Started
            </Button>
          </nav>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 flex flex-col gap-4 border-t border-border">
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#features");
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#verify"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#verify");
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Verify
            </a>
            <Button size="sm" className="rounded-full bg-gradient-to-r from-primary to-primary-glow">
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
