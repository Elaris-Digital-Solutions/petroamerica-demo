import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-petroamerica.png";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Líneas de Negocio", href: "/lineas-de-negocio" },
  { label: "Estaciones", href: "/estaciones" },
  { label: "Promociones", href: "/promociones" },
  { label: "Blog", href: "/blog" },
];

interface HeaderProps {
  variant?: "solid" | "transparent";
}

export function Header({ variant = "solid" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = variant === "transparent" && !scrolled && !mobileMenuOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isTransparent ? "bg-transparent py-4" : "bg-white/95 backdrop-blur-md shadow-sm py-2"
      )}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Petroamérica"
              className={cn(
                "w-auto object-contain transition-all duration-300",
                isTransparent ? "h-12 md:h-14 brightness-0 invert" : "h-10 md:h-12"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200",
                    isTransparent
                      ? "text-white hover:bg-white/10"
                      : isActive
                        ? "text-secondary font-bold bg-secondary/5"
                        : "text-corporate-navy hover:text-secondary hover:bg-muted"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link to="/contacto" className="ml-2">
              <Button
                variant={isTransparent ? "outline" : "default"}
                className={cn(
                  "font-bold rounded-full transition-all",
                  isTransparent
                    ? "border-white text-white hover:bg-white hover:text-corporate-navy"
                    : "bg-corporate-navy hover:bg-corporate-dark text-white"
                )}
              >
                <Phone className="w-4 h-4 mr-2" />
                Contacto
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn("lg:hidden", isTransparent ? "text-white hover:bg-white/10" : "text-corporate-navy")}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl animate-fade-in px-4 py-6 z-50">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200",
                    location.pathname === item.href
                      ? "bg-secondary/10 text-secondary"
                      : "text-corporate-navy hover:bg-muted"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contacto" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-4 bg-corporate-navy text-white hover:bg-corporate-dark">
                  Contáctanos
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
