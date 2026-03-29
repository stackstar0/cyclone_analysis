import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, TrendingDown, Thermometer, MapPin } from "lucide-react";

const observations = [
  {
    icon: TrendingUp,
    num: "01",
    title: "Rapid Intensification",
    text: "Wind speeds surged from 65 km/h to 260 km/h within 36 hours (May 17–18), driven by warm SST (>31°C) in the central Bay of Bengal.",
    severity: "critical",
  },
  {
    icon: TrendingDown,
    num: "02",
    title: "Inverse Pressure-Wind Relationship",
    text: "Strong inverse correlation — when pressure decreases, wind speed increases.",
    severity: "high",
  },
  {
    icon: AlertTriangle,
    num: "03",
    title: "Coastal Vulnerability",
    text: "Buffer analysis: areas within 100 km of path — Sundarbans, Kolkata, coastal Bangladesh — experienced >150 km/h winds and extreme storm surge.",
    severity: "critical",
  },
  {
    icon: Thermometer,
    num: "04",
    title: "SST Influence on Intensification",
    text: "Warm sea temperature (>31°C) increased cyclone strength. Warm ocean layer extended to 50m depth in the central basin.",
    severity: "high",
  },
  {
    icon: MapPin,
    num: "05",
    title: "Weakening Before Landfall",
    text: "Wind decreased from 260 km/h (SuCS) to 155 km/h at landfall near Sundarbans on May 20, 2020 due to wind shear and cooler coastal SST.",
    severity: "medium",
  },
];

const severityStyle = {
  critical: "border-l-cyclone-cat5",
  high: "border-l-accent",
  medium: "border-l-primary",
};

const ObservationsSection = () => {
  return (
    <section id="observations" className="py-16 gis-grid">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="status-dot-warning" />
            <span className="panel-label text-accent">KEY FINDINGS</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Observations & Results</h2>
          <div className="glow-line max-w-[200px]" />
        </motion.div>

        <div className="space-y-3">
          {observations.map(({ icon: Icon, num, title, text, severity }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`flex gap-4 rounded border border-border bg-card p-4 hover:bg-primary/5 transition-colors shadow-card border-l-2 ${
                severityStyle[severity as keyof typeof severityStyle]
              }`}
            >
              <div className="flex flex-col items-center gap-2 shrink-0">
                <span className="text-[10px] font-mono text-muted-foreground">{num}</span>
                <div className="flex h-8 w-8 items-center justify-center rounded bg-muted border border-border">
                  <Icon className="h-3.5 w-3.5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded border border-border bg-card/50"
          >
            <h3 className="text-xs font-bold text-foreground mb-3 uppercase tracking-widest border-b border-border pb-2">Conclusion</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This study shows how GIS can be used to analyze cyclone movement and identify high-risk areas.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded border border-border bg-card/50"
          >
            <h3 className="text-xs font-bold text-foreground mb-3 uppercase tracking-widest border-b border-border pb-2">Limitations</h3>
            <ul className="text-sm text-muted-foreground leading-relaxed list-disc list-inside space-y-1.5">
              <li>Limited data resolution (6-hour intervals)</li>
              <li>Interpolation may introduce minor inaccuracies</li>
              <li>No real-time data integration</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ObservationsSection;
