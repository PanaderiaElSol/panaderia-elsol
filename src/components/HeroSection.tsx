import logoElSol from "@/assets/logo-elsol.png";
import heroBread from "@/assets/hero-bread.jpg";

const WHATSAPP_URL = "https://wa.me/56912345678?text=Hola!%20Quiero%20cotizar%20una%20torta%20personalizada";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBread}
          alt="Interior de Panadería El Sol"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mx-auto w-36 h-36 md:w-48 md:h-48 rounded-2xl bg-card/95 backdrop-blur-sm p-2 shadow-xl mb-6 overflow-hidden">
          <img src={logoElSol} alt="Logo Panadería El Sol" className="w-full h-full object-cover rounded-xl" width={512} height={512} />
        </div>

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-4 leading-tight">
          Panadería y Pastelería{" "}
          <span className="text-gradient-warm">El Sol</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-card/90 mb-8 max-w-lg mx-auto">
          Fusión chilena-haitiana. Tradición, calidad y el mejor pan de Valdivia.
        </p>

        {/* CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-body font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Cotizar Torta Personalizada
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
