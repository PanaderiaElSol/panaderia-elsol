import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FadeIn } from "@/components/FadeIn";

const WHATSAPP_URL = "https://wa.me/56988640289?text=Hola!%20Quiero%20cotizar%20una%20torta%20personalizada";

const tortasReales = [
  { nombre: "Payaso Plim Plim", img: "/images/tortas/personalizada_001.jpg" },
  { nombre: "Barbie", img: "/images/tortas/personalizada_002.jpg" },
  { nombre: "Peppa Pig", img: "/images/tortas/personalizada_003.jpg" },
  { nombre: "Pokémon", img: "/images/tortas/personalizada_004.jpg" },
  { nombre: "Gatos", img: "/images/tortas/personalizada_005.jpg" },
  { nombre: "El Maravilloso Mundo de Gumball", img: "/images/tortas/personalizada_006.jpg" },
  { nombre: "Guerreras K-Pop", img: "/images/tortas/personalizada_007.jpg" },
  { nombre: "Spider-Man Miles Morales", img: "/images/tortas/personalizada_008.jpg" },
  { nombre: "Spider-Man", img: "/images/tortas/personalizada_009.jpg" },
  { nombre: "Kuromi Hello Kitty", img: "/images/tortas/personalizada_010.jpg" },
  { nombre: "Rosita Fresita", img: "/images/tortas/personalizada_011.jpg" },
];

const TortasSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50" id="tortas">
      <div className="container px-4 mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-3">
          Hacemos realidad tu <span className="text-primary">torta soñada</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-lg mx-auto">
          Tú lo imaginas, nosotros lo horneamos. Diseños únicos para que tus celebraciones sean inolvidables.
        </p>

        <div className="max-w-6xl mx-auto px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {tortasReales.map((torta, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <FadeIn delay={index * 45}>
                    <div className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-square">
                      <img
                        src={torta.img}
                        alt={torta.nombre}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="absolute bottom-4 left-4 right-4 font-heading font-medium text-white text-lg drop-shadow-md">
                        {torta.nombre}
                      </span>
                    </div>
                  </FadeIn>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12 bg-background/80 hover:bg-background border-none shadow-md" />
            <CarouselNext className="hidden sm:flex -right-12 bg-background/80 hover:bg-background border-none shadow-md" />
          </Carousel>
        </div>

        <div className="text-center mt-14">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground font-body font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            💬 Enviar mi idea por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default TortasSection;
