import tortaInfantil from "@/assets/torta-infantil.jpg";
import tortaDeportes from "@/assets/torta-deportes.jpg";
import tortaHumor from "@/assets/torta-humor.jpg";
import tortaClasica from "@/assets/torta-clasica.jpg";

const WHATSAPP_URL = "https://wa.me/56912345678?text=Hola!%20Quiero%20cotizar%20una%20torta%20personalizada";

const categorias = [
  { nombre: "Infantiles", img: tortaInfantil },
  { nombre: "Deportes y Fútbol", img: tortaDeportes },
  { nombre: "Humor y Memes", img: tortaHumor },
  { nombre: "Clásicas", img: tortaClasica },
];

const TortasSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50" id="tortas">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-3">
          Hacemos realidad tu torta soñada
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-lg mx-auto">
          Desde cumpleaños infantiles hasta diseños especiales. Tú lo imaginas, nosotros lo horneamos.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {categorias.map((cat) => (
            <div
              key={cat.nombre}
              className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square"
            >
              <img
                src={cat.img}
                alt={`Torta ${cat.nombre}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 font-heading font-bold text-card text-sm md:text-base">
                {cat.nombre}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground font-body font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            💬 Enviar mi idea por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default TortasSection;
