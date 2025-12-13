import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo-petroamerica.png";

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
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container section-padding">
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
            <h3 className="font-semibold text-lg mb-6">Enlaces Rápidos</h3>
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
            <h3 className="font-semibold text-lg mb-6">Legal</h3>
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
            <h3 className="font-semibold text-lg mb-6">Contacto</h3>
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
