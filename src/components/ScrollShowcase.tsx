import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import cycloneMap from "@/assets/cyclone-map.jpg";

const ScrollShowcase = () => {
  return (
    <section className="relative overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="status-dot" />
              <span className="panel-label text-primary">SATELLITE INTELLIGENCE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3 text-center">
              Real-Time Cyclone{" "}
              <span className="text-gradient-primary">Path Monitoring</span>
            </h2>
            <p className="text-xs text-muted-foreground max-w-md text-center">
              Advanced geospatial tracking powered by multi-spectral satellite imagery from INSAT-3D and Oceansat
            </p>
          </div>
        }
      >
        <img
          src={cycloneMap}
          alt="Bay of Bengal cyclone satellite tracking interface"
          className="h-full w-full object-cover rounded"
        />
      </ContainerScroll>
    </section>
  );
};

export default ScrollShowcase;
