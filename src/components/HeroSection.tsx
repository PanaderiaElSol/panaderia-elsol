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
        <div className="mx-auto w-28 h-28 md:w-36 md:h-36 rounded-full bg-card/95 backdrop-blur-sm p-3 shadow-xl mb-6">
          <img src={logoElSol} alt="Logo Panadería El Sol" className="w-full h-full object-contain" width={512} height={512} />
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
          className="inline-block bg-primary text-primary-foreground font-body font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse-warm"
        >
          🎂 Cotizar Torta Personalizada
        </a>

        {/* Badge */}
        <div className="mt-8 animate-float">
          <span className="inline-block bg-accent text-accent-foreground font-body font-semibold text-sm md:text-base px-5 py-2.5 rounded-full shadow-md">
            🔥 ¡Pancito y empanadas calientes hasta las 23:00 hrs!
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
