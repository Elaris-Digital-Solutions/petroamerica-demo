import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo-petroamerica.png";

// Custom TikTok Icon since it's not in lucide-react
const TiktokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const quickLinks = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Líneas de Negocio", href: "/lineas-de-negocio" },
  { label: "Estaciones de Servicio", href: "/estaciones" },
  { label: "Promociones", href: "/promociones" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

const legalLinks = [
  { label: "Política de Privacidad", href: "/privacidad" },
  { label: "Términos y Condiciones", href: "/terminos" },
  { label: "Libro de Reclamaciones", href: "/reclamos" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/petroamericaperu/?locale=es_LA", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/petroamericaperu/?hl=es", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/petro-america/?originalSubdomain=pe", label: "LinkedIn" },
  { icon: TiktokIcon, href: "https://www.tiktok.com/@petroamericaperu", label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Petroamérica"
              className="h-10 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Somos una empresa líder en el sector de hidrocarburos, comprometidos con la calidad,
              seguridad y el desarrollo sostenible de la región.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Navegación</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Información Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Av. Javier Prado Este 4600, La Molina, Lima, Perú
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <a
                  href="tel:+5116170000"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 text-sm"
                >
                  (01) 617-0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <a
                  href="mailto:contacto@petroamerica.com"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 text-sm"
                >
                  contacto@petroamerica.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Petroamérica. Todos los derechos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Una empresa comprometida con el desarrollo del Perú
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
