import { motion } from "framer-motion";

const trackData = [
  { time: "May 16 06Z", lat: 12.0, lon: 87.0, wind: 45, pressure: 1000, humidity: 78, phase: "Genesis" },
  { time: "May 16 18Z", lat: 13.0, lon: 86.0, wind: 65, pressure: 994, humidity: 82, phase: "Intensification" },
  { time: "May 17 06Z", lat: 13.5, lon: 85.5, wind: 110, pressure: 976, humidity: 86, phase: "Rapid Int." },
  { time: "May 17 18Z", lat: 14.2, lon: 85.6, wind: 175, pressure: 948, humidity: 89, phase: "Rapid Int." },
  { time: "May 18 06Z", lat: 15.0, lon: 86.0, wind: 240, pressure: 925, humidity: 91, phase: "Peak" },
  { time: "May 18 12Z", lat: 15.5, lon: 86.2, wind: 260, pressure: 920, humidity: 92, phase: "Peak" },
  { time: "May 19 06Z", lat: 17.0, lon: 87.0, wind: 210, pressure: 938, humidity: 88, phase: "Weakening" },
  { time: "May 20 00Z", lat: 18.5, lon: 87.8, wind: 170, pressure: 955, humidity: 82, phase: "Approach" },
  { time: "May 20 14Z", lat: 20.8, lon: 88.5, wind: 155, pressure: 962, humidity: 76, phase: "Landfall" },
  { time: "May 21 06Z", lat: 23.0, lon: 89.2, wind: 55, pressure: 990, humidity: 66, phase: "Dissipation" },
];

const phaseColor = (phase: string) => {
  if (phase === "Peak") return "bg-cyclone-cat5 text-cyclone-cat5";
  if (phase.includes("Rapid")) return "bg-cyclone-cat4 text-cyclone-cat4";
  if (phase === "Landfall") return "bg-accent text-accent";
  return "bg-primary text-primary";
};

const DataTableSection = () => {
  return (
    <section id="data-table" className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="status-dot" />
            <span className="panel-label text-primary">TRACK DATA</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Cyclone Database Export</h2>
          <div className="glow-line max-w-[200px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded border border-border bg-card overflow-hidden shadow-card"
        >
          <div className="panel-header">
            <span className="panel-label">IMD/JTWC DATASET</span>
            <span className="panel-label">{trackData.length} RECORDS</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  {["DATETIME", "LAT (°N)", "LON (°E)", "WIND (km/h)", "PRESSURE (hPa)", "HUMIDITY (%)", "PHASE"].map(h => (
                    <th key={h} className={`px-3 py-2.5 font-mono font-semibold text-muted-foreground uppercase tracking-wider text-[9px] ${
                      h.includes("LAT") || h.includes("LON") || h.includes("WIND") || h.includes("PRES") || h.includes("HUM") ? "text-right" : "text-left"
                    }`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {trackData.map((row) => {
                  const colors = phaseColor(row.phase);
                  const dotColor = colors.split(" ")[0];
                  const textColor = colors.split(" ")[1];
                  return (
                    <tr key={row.time} className="hover:bg-primary/5 transition-colors">
                      <td className="px-3 py-2 font-mono text-foreground">{row.time}</td>
                      <td className="px-3 py-2 text-right font-mono text-muted-foreground">{row.lat.toFixed(1)}</td>
                      <td className="px-3 py-2 text-right font-mono text-muted-foreground">{row.lon.toFixed(1)}</td>
                      <td className="px-3 py-2 text-right font-mono font-semibold text-foreground">{row.wind}</td>
                      <td className="px-3 py-2 text-right font-mono font-semibold text-foreground">{row.pressure}</td>
                      <td className="px-3 py-2 text-right font-mono text-muted-foreground">{row.humidity}</td>
                      <td className="px-3 py-2">
                        <span className={`inline-flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider ${textColor}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />
                          {row.phase}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="panel-header border-t">
            <span className="text-[9px] font-mono text-muted-foreground">
              Source: IMD Best Track Data · JTWC Warning Archive · ERA5 Reanalysis (ECMWF)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataTableSection;
