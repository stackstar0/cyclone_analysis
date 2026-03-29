import { motion } from "framer-motion";
import cycloneMap from "@/assets/cyclone-map.jpg";

const cyclones = [
  { name: "Cyclone Remal", year: 2024, category: "SCS", maxWind: "130 km/h", pressure: "972 hPa", color: "bg-cyclone-cat1", active: true },
  { name: "Cyclone Michaung", year: 2023, category: "SCS", maxWind: "110 km/h", pressure: "988 hPa", color: "bg-cyclone-cat1", active: true },
  { name: "Cyclone Hamoon", year: 2023, category: "VSCS", maxWind: "150 km/h", pressure: "968 hPa", color: "bg-cyclone-cat3", active: true },
  { name: "Cyclone Mocha", year: 2023, category: "ESCS", maxWind: "215 km/h", pressure: "938 hPa", color: "bg-cyclone-cat4", active: true },
  { name: "Cyclone Amphan", year: 2020, category: "SuCS", maxWind: "260 km/h", pressure: "920 hPa", color: "bg-cyclone-cat5", active: true },
];

const CycloneTracker = () => {
  return (
    <section className="py-16 relative gis-grid">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="status-dot" />
            <span className="panel-label text-primary">CYCLONE DATABASE</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Historical Cyclone Tracks</h2>
          <div className="glow-line max-w-[200px]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4">
          {/* Map panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded border border-border bg-card overflow-hidden shadow-card"
          >
            <div className="panel-header">
              <span className="panel-label">MAP VIEW</span>
              <span className="panel-label">BAY OF BENGAL · 5°N–25°N</span>
            </div>
            <div className="relative">
              <img
                src={cycloneMap}
                alt="Bay of Bengal cyclone tracking map"
                className="w-full object-cover h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

              {/* Radar overlay */}
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full border border-primary/20 overflow-hidden">
                <div className="radar-sweep w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-1 w-1 rounded-full bg-primary" />
                </div>
              </div>

              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center gap-2 flex-wrap bg-card/80 backdrop-blur-sm rounded p-2 border border-border/50">
                  <span className="text-[9px] font-mono text-muted-foreground">INTENSITY:</span>
                  {[
                    { label: "CS", cls: "bg-cyclone-cat1" },
                    { label: "SCS", cls: "bg-cyclone-cat2" },
                    { label: "VSCS", cls: "bg-cyclone-cat3" },
                    { label: "ESCS", cls: "bg-cyclone-cat4" },
                    { label: "SuCS", cls: "bg-cyclone-cat5" },
                  ].map(({ label, cls }) => (
                    <div key={label} className="flex items-center gap-1">
                      <span className={`h-2 w-2 rounded-full ${cls}`} />
                      <span className="text-[9px] font-mono text-muted-foreground">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Database panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded border border-border bg-card overflow-hidden shadow-card"
          >
            <div className="panel-header">
              <span className="panel-label">STORM RECORDS</span>
              <span className="panel-label">2020–2024 · 5 ENTRIES</span>
            </div>

            {/* Column headers */}
            <div className="grid grid-cols-[auto_1fr_auto_auto] gap-3 px-4 py-2 border-b border-border text-[9px] font-mono text-muted-foreground uppercase tracking-wider">
              <span>INT</span>
              <span>STORM NAME</span>
              <span className="text-right">WIND</span>
              <span className="text-right">PRES</span>
            </div>

            <div className="divide-y divide-border/50">
              {cyclones.map((c) => (
                <div
                  key={c.name}
                  className={`grid grid-cols-[auto_1fr_auto_auto] gap-3 items-center px-4 py-3 transition-colors hover:bg-primary/5 ${
                    c.active ? "bg-primary/5 border-l-2 border-l-primary" : ""
                  }`}
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${c.color} shrink-0`} />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-foreground truncate flex items-center gap-2">
                      {c.name}
                      {c.active && (
                        <span className="text-[8px] font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded uppercase">
                          Focus
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] font-mono text-muted-foreground">
                      {c.year} · {c.category}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-mono font-semibold text-foreground">{c.maxWind}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono text-muted-foreground">{c.pressure}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="panel-header border-t">
              <span className="text-[9px] font-mono text-muted-foreground">
                Source: IMD Best Track Archive
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CycloneTracker;
