import { motion } from "framer-motion";
import { Activity, Cloud, Navigation, Database, Globe, Radar } from "lucide-react";

const stats = [
  { icon: Activity, value: "186+", label: "Cyclones Tracked", sub: "Since 1965" },
  { icon: Cloud, value: "34", label: "Severe Cyclones", sub: "Last decade" },
  { icon: Navigation, value: "4,500+", label: "Track Points", sub: "High-res data" },
  { icon: Database, value: "18 TB", label: "Satellite Data", sub: "Multi-sensor" },
];

const features = [
  { icon: Globe, title: "Satellite Remote Sensing", desc: "Multi-spectral imagery from INSAT-3D, Oceansat, and international sensors for Bay of Bengal monitoring." },
  { icon: Radar, title: "Doppler Radar Integration", desc: "Real-time wind field analysis using coastal Doppler weather radar network across the basin." },
  { icon: Activity, title: "Predictive Analytics", desc: "ML models trained on historical data to forecast cyclone intensity and path with 72-hour lead time." },
  { icon: Database, title: "Geospatial Data Portal", desc: "Access processed satellite products, best track data, and derived parameters through the open data API." },
];

const StatsSection = () => {
  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
          {stats.map(({ icon: Icon, value, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded border border-border bg-card p-5 text-center shadow-card hover:border-primary/30 transition-colors"
            >
              <Icon className="h-4 w-4 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground font-mono mb-0.5">{value}</div>
              <div className="text-xs text-foreground font-medium">{label}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5 font-mono">{sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="status-dot" />
            <span className="panel-label text-primary">CAPABILITIES</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Data & Technology</h2>
          <div className="glow-line max-w-[200px]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-3">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-glow"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
