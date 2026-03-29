import { motion } from "framer-motion";
import { Database, Map, BarChart3, Layers, Search, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Database,
    num: "01",
    title: "Data Collection",
    desc: "Best-track data for recent major cyclones (Amphan, Mocha, Hamoon, Michaung, Remal) from IMD and JTWC. Wind speed, pressure, and humidity records.",
    tags: ["IMD", "JTWC", "ERA5"],
  },
  {
    icon: Layers,
    num: "02",
    title: "Data Processing",
    desc: "Standardized to WGS 84 (EPSG:4326). Converted tabular data into point shapefiles. Applied temporal interpolation for 3-hourly resolution.",
    tags: ["WGS84", "Shapefile", "CSV"],
  },
  {
    icon: Map,
    num: "03",
    title: "Spatial Analysis",
    desc: "IDW Interpolation for continuous wind/pressure surfaces. Generated 50/100/200 km buffer zones. Performed temporal and thematic mapping.",
    tags: ["IDW", "Buffer", "Kriging"],
  },
  {
    icon: BarChart3,
    num: "04",
    title: "Visualization",
    desc: "Cyclone path maps, wind speed heatmaps (IDW), pressure thematic maps, and time-series charts for wind, pressure, and humidity.",
    tags: ["Charts", "Maps", "Dashboard"],
  },
];

const techniques = [
  { name: "Spatial Analysis", detail: "Track mapping & trajectory generation", status: "active" },
  { name: "IDW Interpolation", detail: "Continuous surface from discrete points", status: "active" },
  { name: "Buffer Analysis", detail: "Impact corridor 50/100/200 km", status: "active" },
  { name: "Temporal Analysis", detail: "Time-series parameter variation", status: "active" },
  { name: "Thematic Mapping", detail: "Classified pressure/wind maps", status: "active" },
  { name: "Kriging", detail: "Geostatistical validation method", status: "active" },
];

const MethodologySection = () => {
  return (
    <section id="methodology" className="py-16 gis-grid">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="status-dot" />
            <span className="panel-label text-primary">RESEARCH METHODOLOGY</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Analysis Workflow</h2>
          <div className="glow-line max-w-[200px]" />
        </motion.div>

        {/* Steps as connected flow */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {steps.map(({ icon: Icon, num, title, desc, tags }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded border border-border bg-card overflow-hidden shadow-card group hover:border-primary/30 transition-colors"
            >
              <div className="panel-header">
                <div className="flex items-center gap-2">
                  <Icon className="h-3 w-3 text-primary" />
                  <span className="panel-label text-primary">STEP {num}</span>
                </div>
                {i < 3 && (
                  <ArrowRight className="h-3 w-3 text-muted-foreground hidden lg:block" />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-foreground mb-2">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{desc}</p>
                <div className="flex flex-wrap gap-1">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-muted border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GIS Techniques grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded border border-border bg-card overflow-hidden shadow-card"
        >
          <div className="panel-header">
            <div className="flex items-center gap-2">
              <Search className="h-3 w-3 text-primary" />
              <span className="panel-label">GIS TECHNIQUES APPLIED</span>
            </div>
            <span className="panel-label">{techniques.length} METHODS</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {techniques.map((t, i) => (
              <div
                key={t.name}
                className={`p-3 hover:bg-primary/5 transition-colors flex items-start gap-3 ${
                  i < techniques.length - (techniques.length % 3 || 3)
                    ? "border-b border-border/50"
                    : ""
                } ${i % 3 !== 2 ? "lg:border-r lg:border-border/50" : ""}`}
              >
                <div className="status-dot mt-1.5 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-foreground">{t.name}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologySection;
