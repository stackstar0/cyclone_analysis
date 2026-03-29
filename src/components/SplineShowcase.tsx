import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const SplineShowcase = () => {
  return (
    <section id="satellite-data" className="py-16">
      <div className="container mx-auto px-6">
        <Card className="w-full min-h-[450px] bg-card border-border overflow-hidden relative">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="hsl(var(--primary))"
          />

          <div className="flex flex-col md:flex-row h-full min-h-[450px]">
            {/* Left content */}
            <div className="flex-1 p-6 md:p-10 relative z-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <div className="status-dot" />
                <span className="panel-label text-primary">3D VISUALIZATION</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Interactive 3D
                <br />
                <span className="text-gradient-primary">Cyclone Model</span>
              </h2>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-sm mb-6">
                Explore Bay of Bengal cyclone formations through immersive 3D visualization powered by satellite telemetry data.
              </p>

              <div className="flex gap-2">
                <a
                  href="#cyclone-tracker"
                  className="flex items-center gap-2 rounded bg-primary px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-glow"
                >
                  View Data
                </a>
                <a
                  href="#capabilities"
                  className="flex items-center gap-2 rounded border border-border bg-card px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary/40"
                >
                  Explore
                </a>
              </div>
            </div>

            {/* Right content - 3D Scene */}
            <div className="flex-1 relative min-h-[250px] md:min-h-[450px]">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SplineShowcase;
