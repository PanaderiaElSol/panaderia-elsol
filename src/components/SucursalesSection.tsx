import { MapPin, Clock } from "lucide-react";

const sucursales = [
  {
    nombre: "Gabriela Mistral",
    direccion: "Gabriela Mistral 571",
    horario: "Lunes a Domingo: 7:00 AM a 23:00 hrs",
    detalle: "Horario continuado",
  },
  {
    nombre: "Río Calle Calle",
    direccion: "Río Calle Calle 4045",
    horario: "Lunes a Domingo: 8:00 AM a 22:00 hrs",
    detalle: "Horario continuado",
  },
  {
    nombre: "René Schneider",
    direccion: "René Schneider (Frente Colegio Angachilla)",
    horario: "Lun-Sáb: 7:00 AM a 23:00 hrs",
    detalle: "Dom: 8:00 AM a 22:00 hrs",
  },
];

const SucursalesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="sucursales">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-3">
          Nuestras Sucursales
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-md mx-auto">
          3 locales en Valdivia para que siempre tengas tu pan cerca
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {sucursales.map((s) => (
            <div
              key={s.nombre}
              className="bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold">{s.nombre}</h3>
                  <p className="text-sm text-muted-foreground font-body">{s.direccion}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-body font-semibold text-sm">{s.horario}</p>
                  <p className="text-sm text-muted-foreground font-body">{s.detalle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SucursalesSection;
