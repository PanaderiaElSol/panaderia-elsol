import panBanner from "@/assets/pan-banner.jpg";

const PanaderiaSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={panBanner}
          alt="Pan recién horneado"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-foreground/65" />
      </div>
      <div className="relative z-10 container text-center max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-card mb-6">
          Panadería y Tradición
        </h2>
        <p className="font-body text-lg md:text-xl text-card/90 leading-relaxed">
          Elaboramos pan y pastelería con altos estándares de calidad. Te esperamos todos los días con el pan calientito.
        </p>
      </div>
    </section>
  );
};

export default PanaderiaSection;
