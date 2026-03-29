import { motion } from "framer-motion";
import { ArrowRight, Wind, Gauge, Droplets, MapPin, Calendar } from "lucide-react";
import heroImage from "@/assets/cyclone-hero.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cyclone satellite view over Bay of Bengal"
          className="h-full w-full object-cover opacity-20 grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left: main content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-5 inline-flex items-center gap-2"
            >
              <span className="panel-label px-2 py-1 rounded border border-border bg-card">
                GIS Research Project
              </span>
              <span className="panel-label px-2 py-1 rounded bg-muted border border-border">
                Bay of Bengal Basin
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-4"
            >
              <span className="text-foreground">GIS-based Analysis of</span>
              <br />
              <span className="text-primary">Bay of Bengal Cyclones</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-base font-medium text-foreground/80 mb-6 max-w-2xl"
            >
              GIS-based analysis of recent major cyclones (Amphan, Mocha, Hamoon, Michaung, Remal) using satellite imagery, wind, and pressure mapping.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card/90 border border-border p-5 rounded-md max-w-2xl mb-8 shadow-sm"
            >
              <h2 className="text-xs font-bold text-primary mb-2 tracking-widest uppercase">Objective</h2>
              <p className="text-sm text-foreground leading-relaxed">
                To analyze the spatial trajectory and impact areas of recent Bay of Bengal cyclones (2020-2024) using historical datasets and GIS mapping techniques.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo("#cyclone-tracker")}
                className="flex items-center gap-2 rounded bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Dashboard
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => scrollTo("#gis-maps")}
                className="flex items-center gap-2 rounded border border-border bg-card px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-muted/50 transition-colors"
              >
                Output Maps
              </button>
            </motion.div>
          </div>

          {/* Right: data panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="rounded border border-border bg-card shadow-sm">
              <div className="panel-header border-b border-border p-3 flex justify-between items-center bg-muted/30">
                <span className="text-xs font-bold text-foreground">RECENT CYCLONES (2020-2024)</span>
                <span className="text-[10px] font-mono text-muted-foreground uppercase">GIS Statistics</span>
              </div>

              <div className="p-4 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Wind, label: "CYCLONES TRACKED", value: "5", unit: "Events" },
                    { icon: Gauge, label: "MIN PRESSURE", value: "920", unit: "hPa (Amphan)" },
                    { icon: Droplets, label: "MAX WIND", value: "260", unit: "km/h" },
                    { icon: MapPin, label: "STUDY AREA", value: "Bay of Bengal", unit: "" },
                  ].map(({ icon: Icon, label, value, unit }) => (
                    <div
                      key={label}
                      className="rounded bg-muted/20 border border-border/50 p-3"
                    >
                      <div className="flex items-center gap-1.5 mb-2">
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-[10px] font-bold text-muted-foreground tracking-wider uppercase">{label}</span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-foreground">
                          {value}
                        </span>
                        {unit && (
                          <span className="text-xs text-muted-foreground">
                            {unit}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-border/50">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">Data Sources: IMD, JTWC, ERA5</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
