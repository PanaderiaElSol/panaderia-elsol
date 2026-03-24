import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coffee text-card/80 py-10">
      <div className="container text-center">
        <p className="font-heading text-xl font-bold text-card mb-4">
          Panadería y Pastelería El Sol
        </p>
        <p className="font-body text-sm mb-6">
          Fusión chilena-haitiana · Valdivia, Chile
        </p>
        <a
          href="https://www.instagram.com/panaderia_elsol_valdivia/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-card/90 hover:text-primary transition-colors font-body text-sm"
        >
          <Instagram className="w-5 h-5" />
          @panaderia_elsol_valdivia
        </a>
        <p className="mt-6 text-xs text-card/50 font-body">
          © {new Date().getFullYear()} Panadería El Sol. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
