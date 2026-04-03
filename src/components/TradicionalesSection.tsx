import React from "react";

const tradicionalesImages = Array.from({ length: 14 }).map(
  (_, i) => `/images/tradicionales/tradicional_${String(i + 1).padStart(3, "0")}.jpg`
);

// We duplicate the array to create the infinite scrolling effect
const carouselImages = [...tradicionalesImages, ...tradicionalesImages];

const TradicionalesSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background overflow-hidden relative">
      <div className="container px-4 mx-auto mb-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Nuestros <span className="text-primary">Tradicionales</span>
        </h2>
        <p className="text-center text-muted-foreground font-body max-w-2xl mx-auto text-lg">
          Disfruta de nuestra exquisita selección de dulces y pasteles tradicionales, preparados con recetas de siempre.
        </p>
      </div>

      <div className="w-full relative overflow-x-hidden pt-4 pb-8">
        {/* Gradient overlays to smooth edge transitions */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

        {/* Marquee Track */}
        <div className="flex animate-marquee w-[max-content]">
          {carouselImages.map((imgSrc, index) => (
            <div
              key={index}
              className="w-48 h-48 md:w-64 md:h-64 mx-3 rounded-2xl overflow-hidden shadow-sm flex-shrink-0 relative group"
            >
              <img
                src={imgSrc}
                alt={`Dulce tradicional ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradicionalesSection;
