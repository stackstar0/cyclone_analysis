import { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2, X, Compass } from "lucide-react";
import amphanPathMap from "@/assets/WhatsApp Image 2026-03-26 at 7.18.55 PM.jpeg";
import remalPathMap from "@/assets/WhatsApp Image 2026-03-26 at 7.09.58 PM.jpeg";
import hamoonPathMap from "@/assets/hamoon.png";
import minchangPathMap from "@/assets/minchang.png";
import mountaPathMap from "@/assets/mounta.png";

const maps = [
  {
    src: amphanPathMap,
    title: "Cyclone Amphan (2020) Path",
    desc: "Path analysis of Cyclone Amphan showing landfall in West Bengal.",
    technique: "Spatial Analysis",
    coords: "Study Area: Bay of Bengal",
    projection: "Projection: EPSG:4326 (WGS 84)",
    legend: [
      { color: "#ef4444", label: "Most Affected" },
      { color: "#fef08a", label: "Less Affected" }
    ]
  },
  {
    src: mountaPathMap,
    title: "Cyclone Mocha / Mounta (2023) Path",
    desc: "Trajectory of Cyclone Mocha (Mounta) moving across the Bay of Bengal.",
    technique: "Spatial Analysis",
    coords: "Study Area: Bay of Bengal",
    projection: "Projection: EPSG:4326 (WGS 84)",
    legend: [
      { color: "#ef4444", label: "Most Affected" },
      { color: "#fef08a", label: "Less Affected" }
    ]
  },
  {
    src: hamoonPathMap,
    title: "Cyclone Hamoon (2023) Path",
    desc: "Trajectory of Cyclone Hamoon impacting the eastern coast and Bangladesh.",
    technique: "Spatial Analysis",
    coords: "Study Area: Bay of Bengal",
    projection: "Projection: EPSG:4326 (WGS 84)",
    legend: [
      { color: "#ef4444", label: "Most Affected" },
      { color: "#fef08a", label: "Less Affected" }
    ]
  },
  {
    src: minchangPathMap,
    title: "Cyclone Michaung / Minchang (2023) Path",
    desc: "Cyclone Michaung path affecting Andhra Pradesh and Tamil Nadu.",
    technique: "Spatial Analysis",
    coords: "Study Area: Bay of Bengal",
    projection: "Projection: EPSG:4326 (WGS 84)",
    legend: [
      { color: "#ef4444", label: "Most Affected" },
      { color: "#fef08a", label: "Less Affected" }
    ]
  },
  {
    src: remalPathMap,
    title: "Cyclone Remal (2024) Path",
    desc: "Cyclone Remal trajectory with landfall impact mapping.",
    technique: "Spatial Analysis",
    coords: "Study Area: Bay of Bengal",
    projection: "Projection: EPSG:4326 (WGS 84)",
    legend: [
      { color: "#ef4444", label: "Most Affected" },
      { color: "#fef08a", label: "Less Affected" }
    ]
  }
];

const MapOverlays = ({ legend }: { legend: { color: string, label: string }[] }) => (
  <div className="absolute inset-0 pointer-events-none p-2 flex flex-col justify-between">
    {/* Top section: Legend */}
    <div className="flex justify-end">
      <div className="bg-background/90 backdrop-blur px-2 py-1.5 rounded-sm border border-border flex flex-col gap-1">
        <span className="text-[8px] font-bold uppercase border-b border-border/50 pb-0.5 mb-0.5 text-foreground">Legend</span>
        {legend.map((item, idx) => (
          <span key={idx} className="text-[8px] font-mono text-muted-foreground flex items-center gap-1.5">
            <span style={{ color: item.color }} className="text-[10px] leading-none mb-0.5">■</span>
            {item.label}
          </span>
        ))}
      </div>
    </div>
    
    {/* Bottom section: Scale & North Arrow */}
    <div className="flex justify-between items-end">
      {/* Scale Bar */}
      <div className="bg-background/90 backdrop-blur px-1.5 py-0.5 rounded-sm border border-border flex flex-col items-center">
        <div className="border-b border-x border-foreground h-1 w-10 mb-0.5"></div>
        <span className="text-[6px] font-mono font-bold text-foreground">100 km</span>
      </div>
      
      {/* North Arrow */}
      <div className="bg-background/90 backdrop-blur rounded-sm border border-border w-5 h-6 flex flex-col items-center justify-center">
        <span className="text-[7px] font-black text-foreground leading-none mb-0.5">N</span>
        <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[4px] border-b-foreground"></div>
      </div>
    </div>
  </div>
);

const GISMapsGallery = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="gis-maps" className="py-16 bg-muted/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">GIS Output Maps</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Spatial Analysis Results</h2>
          <div className="h-0.5 w-16 bg-primary" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {maps.map(({ src, title, desc, technique, coords, projection, legend }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded border border-border bg-card overflow-hidden shadow-sm group hover:border-primary/30 transition-colors"
            >
              <div className="border-b border-border p-2 bg-muted/30 flex justify-between items-center">
                <span className="text-[9px] font-bold text-muted-foreground uppercase">{technique}</span>
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Maximize2 className="h-3 w-3" />
                </button>
              </div>
              <div className="relative cursor-pointer bg-black/5" onClick={() => setExpanded(i)}>
                <img
                  src={src}
                  alt={title}
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                />
                <MapOverlays legend={legend} />
                <div className="absolute inset-0 hover:bg-black/5 transition-colors" />
              </div>
              <div className="p-3">
                <h3 className="text-xs font-bold text-foreground mb-1 leading-tight">{title}</h3>
                <p className="text-[10px] text-muted-foreground leading-relaxed mb-2 line-clamp-2">{desc}</p>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-mono text-muted-foreground">{coords}</span>
                  <span className="text-[9px] font-mono text-muted-foreground">{projection}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {expanded !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setExpanded(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setExpanded(null)}
              className="absolute -top-10 right-0 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="rounded border border-border overflow-hidden bg-card shadow-lg">
              <div className="border-b border-border p-3 flex gap-3 text-xs bg-muted/30">
                <span className="font-bold text-muted-foreground uppercase">{maps[expanded].technique}</span>
                <span className="font-medium">{maps[expanded].title}</span>
              </div>
              <div className="relative bg-black/5">
                <img
                  src={maps[expanded].src}
                  alt={maps[expanded].title}
                  className="w-full object-contain max-h-[70vh]"
                />
                <MapOverlays legend={maps[expanded].legend} />
              </div>
              <div className="p-4 border-t border-border bg-card">
                <p className="text-sm font-medium text-foreground mb-1">{maps[expanded].desc}</p>
                <p className="text-xs text-muted-foreground font-mono">{maps[expanded].coords} | {maps[expanded].projection}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GISMapsGallery;
