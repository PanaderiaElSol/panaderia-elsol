import { FadeIn } from "@/components/FadeIn";

const panes = [
  { img: "/images/panes/panes_001.jpg", frase: <><strong className="font-black text-xl md:text-2xl uppercase tracking-wide">Chaparritas</strong><br/>de masa de hoja a solo 1800 c/u.</> },
  { img: "/images/panes/panes_002.jpg", frase: <>Deliciosas <strong className="font-black text-xl md:text-2xl uppercase tracking-wide">Dobladitas</strong><br/>recién horneadas</> },
  { img: "/images/panes/panes_003.jpg", frase: <>Delicioso <strong className="font-black text-xl md:text-2xl uppercase tracking-wide">Pan Hallula</strong><br/>recién horneado</> },
  { img: "/images/panes/panes_004.jpg", frase: <>Tradicional <strong className="font-black text-xl md:text-2xl uppercase tracking-wide">Pan Amasado</strong><br/>recién horneado</> }
];

const PanaderiaSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card" id="panaderia">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Panadería y <span className="text-primary">Tradición</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
            Elaboramos pan con altos estándares de calidad. Te esperamos todos los días con el pan calientito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {panes.map((pan, index) => (
            <FadeIn key={index} delay={index * 75}>
              <div
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 aspect-[4/3] bg-muted"
              >
                <img
                  src={pan.img}
                  alt={`Especialidad panadería ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:-translate-y-1 transition-transform duration-500">
                  <p className="font-body text-white text-lg md:text-xl font-medium drop-shadow-md border-l-4 border-primary pl-4 leading-relaxed">
                    {pan.frase}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PanaderiaSection;
