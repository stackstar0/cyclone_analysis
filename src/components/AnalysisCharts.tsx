import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  ReferenceLine,
} from "recharts";

const amphanData = [
  { time: "16/06Z", wind: 45, pressure: 1000, humidity: 78 },
  { time: "16/12Z", wind: 55, pressure: 998, humidity: 80 },
  { time: "16/18Z", wind: 65, pressure: 994, humidity: 82 },
  { time: "17/00Z", wind: 85, pressure: 988, humidity: 84 },
  { time: "17/06Z", wind: 110, pressure: 976, humidity: 86 },
  { time: "17/12Z", wind: 140, pressure: 962, humidity: 88 },
  { time: "17/18Z", wind: 175, pressure: 948, humidity: 89 },
  { time: "18/00Z", wind: 215, pressure: 935, humidity: 90 },
  { time: "18/06Z", wind: 240, pressure: 925, humidity: 91 },
  { time: "18/12Z", wind: 260, pressure: 920, humidity: 92 },
  { time: "18/18Z", wind: 250, pressure: 922, humidity: 91 },
  { time: "19/00Z", wind: 230, pressure: 930, humidity: 90 },
  { time: "19/06Z", wind: 210, pressure: 938, humidity: 88 },
  { time: "19/12Z", wind: 195, pressure: 945, humidity: 86 },
  { time: "19/18Z", wind: 180, pressure: 950, humidity: 84 },
  { time: "20/00Z", wind: 170, pressure: 955, humidity: 82 },
  { time: "20/06Z", wind: 165, pressure: 958, humidity: 80 },
  { time: "20/12Z", wind: 160, pressure: 960, humidity: 78 },
  { time: "20/14Z", wind: 155, pressure: 962, humidity: 76 },
  { time: "20/18Z", wind: 120, pressure: 972, humidity: 74 },
  { time: "21/00Z", wind: 85, pressure: 982, humidity: 70 },
  { time: "21/06Z", wind: 55, pressure: 990, humidity: 66 },
  { time: "21/12Z", wind: 35, pressure: 996, humidity: 62 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: { dataKey: string; color: string; name: string; value: number }[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded border border-border bg-card p-2.5 text-[10px] font-mono shadow-intense">
      <p className="font-bold text-foreground mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.dataKey} style={{ color: p.color }} className="flex justify-between gap-4">
          <span className="text-muted-foreground">{p.name}</span>
          <span className="font-semibold">
            {p.value} {p.dataKey === "wind" ? "km/h" : p.dataKey === "pressure" ? "hPa" : "%"}
          </span>
        </p>
      ))}
    </div>
  );
};

const ChartPanel = ({
  title,
  subtitle,
  label,
  children,
}: {
  title: string;
  subtitle: string;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="rounded border border-border bg-card overflow-hidden shadow-card">
    <div className="panel-header">
      <div className="flex items-center gap-2">
        <div className="status-dot" />
        <span className="panel-label text-primary">{label}</span>
      </div>
      <span className="panel-label animate-data-pulse">LIVE DATA</span>
    </div>
    <div className="p-4">
      <h3 className="text-xs font-bold text-foreground mb-0.5">{title}</h3>
      <p className="text-[10px] text-muted-foreground mb-4">{subtitle}</p>
      <div className="h-[240px]">{children}</div>
    </div>
  </div>
);

const AnalysisCharts = () => {
  return (
    <section id="analysis" className="py-16 gis-grid">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="status-dot" />
            <span className="panel-label text-primary">TEMPORAL ANALYSIS</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Parameter Variation</h2>
          <p className="text-xs text-muted-foreground max-w-lg">
            Time-series analysis of Cyclone Amphan from genesis (May 16) through peak to dissipation (May 21, 2020).
          </p>
          <div className="glow-line max-w-[200px] mt-3" />
        </motion.div>

        <div className="grid gap-4">
          {/* Wind speed — full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ChartPanel
              title="Wind Speed vs Time"
              subtitle="Maximum sustained wind — rapid intensification May 17–18"
              label="WIND SPEED"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={amphanData}>
                  <defs>
                    <linearGradient id="windGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--cyclone-cat5))" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="hsl(var(--cyclone-cat5))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="time"
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 9, fontFamily: "JetBrains Mono" }}
                    axisLine={{ stroke: "hsl(var(--border))" }}
                    tickLine={false}
                    label={{ value: "Time", position: "insideBottom", offset: -5, fill: "hsl(var(--muted-foreground))", fontSize: 9 }}
                  />
                  <YAxis
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 9, fontFamily: "JetBrains Mono" }}
                    axisLine={{ stroke: "hsl(var(--border))" }}
                    tickLine={false}
                    label={{ value: "Wind (km/h)", angle: -90, position: "insideLeft", fill: "hsl(var(--muted-foreground))", fontSize: 9 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <ReferenceLine y={260} stroke="hsl(var(--cyclone-cat5))" strokeDasharray="3 3" strokeOpacity={0.5} />
                  <Area
                    type="monotone"
                    dataKey="wind"
                    name="Wind Speed"
                    stroke="hsl(var(--cyclone-cat5))"
                    fill="url(#windGrad)"
                    strokeWidth={2}
                    dot={{ r: 1.5, fill: "hsl(var(--cyclone-cat5))" }}
                    activeDot={{ r: 4, stroke: "hsl(var(--cyclone-cat5))", strokeWidth: 2, fill: "hsl(var(--card))" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartPanel>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Pressure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ChartPanel
                title="Pressure vs Time"
                subtitle="Central pressure — minimum 920 hPa at peak"
                label="PRESSURE"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={amphanData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis
                      dataKey="time"
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 9, fontFamily: "JetBrains Mono" }}
                      axisLine={{ stroke: "hsl(var(--border))" }}
                      tickLine={false}
                      interval={3}
                      label={{ value: "Time", position: "insideBottom", offset: -5, fill: "hsl(var(--muted-foreground))", fontSize: 9 }}
                    />
                    <YAxis
                      domain={[910, 1010]}
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 9, fontFamily: "JetBrains Mono" }}
                      axisLine={{ stroke: "hsl(var(--border))" }}
                      tickLine={false}
                      label={{ value: "Pressure (hPa)", angle: -90, position: "insideLeft", fill: "hsl(var(--muted-foreground))", fontSize: 9 }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <ReferenceLine y={920} stroke="hsl(var(--primary))" strokeDasharray="3 3" strokeOpacity={0.5} />
                    <Line
                      type="monotone"
                      dataKey="pressure"
                      name="Pressure"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      dot={{ r: 1.5, fill: "hsl(var(--primary))" }}
                      activeDot={{ r: 4, stroke: "hsl(var(--primary))", strokeWidth: 2, fill: "hsl(var(--card))" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartPanel>
            </motion.div>

            {/* Humidity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ChartPanel
                title="Humidity vs Time"
                subtitle="Relative humidity — peaks during intensification"
                label="HUMIDITY"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={amphanData}>
                    <defs>
                      <linearGradient id="humGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis
                      dataKey="time"
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 9, fontFamily: "JetBrains Mono" }}
                      axisLine={{ stroke: "hsl(var(--border))" }}
                      tickLine={false}
                      interval={3}
                      label={{ value: "Time", position: "insideBottom", offset: -5, fill: "hsl(var(--muted-foreground))", fontSize: 9 }}
                    />
                    <YAxis
                      domain={[55, 100]}
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 9, fontFamily: "JetBrains Mono" }}
                      axisLine={{ stroke: "hsl(var(--border))" }}
                      tickLine={false}
                      label={{ value: "Humidity (%)", angle: -90, position: "insideLeft", fill: "hsl(var(--muted-foreground))", fontSize: 9 }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="humidity"
                      name="Humidity"
                      stroke="hsl(var(--accent))"
                      fill="url(#humGrad)"
                      strokeWidth={2}
                      dot={{ r: 1.5, fill: "hsl(var(--accent))" }}
                      activeDot={{ r: 4, stroke: "hsl(var(--accent))", strokeWidth: 2, fill: "hsl(var(--card))" }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartPanel>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisCharts;
