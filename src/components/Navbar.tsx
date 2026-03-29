import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radar, Menu, X, MapPin, Activity } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "#hero" },
  { label: "Tracker", href: "#cyclone-tracker" },
  { label: "Methodology", href: "#methodology" },
  { label: "GIS Maps", href: "#gis-maps" },
  { label: "Analysis", href: "#analysis" },
  { label: "Findings", href: "#observations" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-intense"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNav("#hero")}
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-md bg-card border border-border group-hover:border-primary/40 transition-colors">
            <Radar className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-foreground leading-none">
              AMPHAN GIS
            </h1>
            <p className="text-[10px] text-muted-foreground font-mono tracking-wider mt-0.5">
              SPATIAL ANALYSIS
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors rounded hover:bg-primary/5 font-mono uppercase tracking-wider"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right side status */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-4 text-[10px] font-mono text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" />
              <span>Projection: WGS 84</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 border border-border rounded bg-muted/30">
              <span className="text-muted-foreground font-bold">STATIC DATA</span>
            </div>
          </div>

          <button
            className="lg:hidden text-foreground p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background/98 backdrop-blur-xl overflow-hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="block w-full px-6 py-3 text-left text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
