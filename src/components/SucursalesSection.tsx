import { MapPin, Clock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";

const sucursales = [
  {
    nombre: "Gabriela Mistral",
    direccion: "Gabriela Mistral 571",
    horario: "Lunes a Domingo: 7:00 AM a 23:00 hrs",
    detalle: "",
    img: "/images/locales/gabriela_mistral.jpg",
  },
  {
    nombre: "Río Calle Calle",
    direccion: "Río Calle Calle 4045",
    horario: "Lunes a Domingo: 8:00 AM a 22:00 hrs",
    detalle: "",
    img: "/images/locales/rio_calle_calle.jpg",
  },
  {
    nombre: "Los Laureles",
    direccion: "Los laureles 410 isla teja",
    horario: "Lunes a Sábado: 7:00 AM a 23:00 hrs",
    detalle: "Domingo: 8:00 AM a 22:00 hrs",
    img: "/images/locales/los_laureles.jpg",
  },
  {
    nombre: "René Schneider",
    direccion: "San Pedro Pasaje 4 707 , frente al colegio angachilla",
    horario: "Lunes a Domingo: 7:00 AM a 23:00 hrs",
    detalle: "",
    img: "/images/locales/rene_schneider.jpg",
  },
];

const SucursalesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden" id="sucursales">
      <div className="container px-4 mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-3">
          Nuestras <span className="text-primary">Sucursales</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-10 md:mb-14 max-w-md mx-auto">
          Locales para que siempre tengas tu pan cerca
        </p>
        <div className="max-w-6xl mx-auto px-10">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6 py-4">
              {sucursales.map((s) => (
                <CarouselItem
                  key={s.nombre}
                  className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 flex"
                >
                  <div
                    className="w-full bg-card rounded-2xl border border-border shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                  >
                    {/* Información de la sucursal (Arriba) */}
                    <div className="p-6 md:p-8 flex flex-col gap-6 flex-grow">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading text-xl font-bold mb-1">{s.nombre}</h3>
                          <p className="text-sm text-muted-foreground font-body">{s.direccion}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-body font-semibold text-sm mb-0.5">{s.horario}</p>
                          <p className="text-sm text-muted-foreground font-body">{s.detalle}</p>
                        </div>
                      </div>
                    </div>

                    {/* Imagen de la sucursal (Abajo) */}
                    <div className="h-56 sm:h-64 relative w-full overflow-hidden shrink-0 mt-auto bg-secondary/10 flex items-center justify-center">
                      <img
                        src={s.img}
                        alt={`Sucursal ${s.nombre}`}
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-in-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-card to-transparent pointer-events-none" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-background/80 hover:bg-background border-none shadow-md" />
            <CarouselNext className="hidden md:flex -right-12 bg-background/80 hover:bg-background border-none shadow-md" />
            <CarouselDots className="mt-8" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SucursalesSection;
