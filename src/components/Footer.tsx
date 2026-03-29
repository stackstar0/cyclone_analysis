import { Radar, Github } from "lucide-react";

const Footer = () => (
  <footer id="footer" className="border-t border-border py-8">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-primary/10 border border-primary/20">
            <Radar className="h-3.5 w-3.5 text-primary" />
          </div>
          <div>
            <span className="text-xs font-bold text-foreground tracking-tight">CYCLONEWATCH</span>
            <span className="text-[9px] font-mono text-muted-foreground ml-2">v3.0</span>
          </div>
        </div>
        <div className="flex gap-6 text-[10px] font-mono text-muted-foreground">
          <span>IMD · JTWC · NASA · ECMWF</span>
          <span className="hidden md:inline">·</span>
          <span>INSAT-3D · Oceansat · ERA5</span>
        </div>
        <p className="text-[10px] font-mono text-muted-foreground">
          © 2026 Bay of Bengal GIS Research Portal
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
