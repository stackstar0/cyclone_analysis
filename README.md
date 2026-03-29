# 🌀 GIS-Based Cyclone Path Analysis — Bay of Bengal

> **GIS-based cyclone path analysis using wind, pressure, and humidity data in the Bay of Bengal region, with a focus on Cyclone Amphan (2020).**

🔗 **Live Demo**: [https://arabian-cyclone-watch.lovable.app](https://arabian-cyclone-watch.lovable.app)

---

## 📌 Objective

To analyze the path and intensity variations of tropical cyclones in the Bay of Bengal using Geographic Information System (GIS) techniques. This project focuses on **Cyclone Amphan (2020)** — the costliest cyclone ever recorded in the North Indian Ocean — and examines how meteorological parameters (wind speed, atmospheric pressure, and humidity) vary along the cyclone track from genesis to landfall.

---

## 🌍 Study Area

- **Region**: Bay of Bengal, North Indian Ocean
- **Bounding Coordinates**: 5°N – 25°N Latitude, 78°E – 98°E Longitude
- **Key Coastal Areas**: West Bengal (India), Odisha (India), Andhra Pradesh (India), Bangladesh
- **Basin Classification**: North Indian Ocean Cyclone Basin (NIO)

The Bay of Bengal is one of the most cyclone-prone basins in the world, producing approximately **5–6 tropical cyclones annually**, with peak activity during the pre-monsoon (April–May) and post-monsoon (October–November) seasons.

---

## 📊 Data Sources

| Data Type | Source | Format |
|-----------|--------|--------|
| Cyclone best-track data | India Meteorological Department (IMD) | CSV / Shapefile |
| Wind speed & pressure | Joint Typhoon Warning Center (JTWC) | Tabular |
| Satellite imagery | INSAT-3D, INSAT-3DR (ISRO) | GeoTIFF / NetCDF |
| Sea surface temperature | NOAA OISST / Oceansat-2 | NetCDF |
| Humidity data | ERA5 Reanalysis (ECMWF) | NetCDF / CSV |
| Coastline & admin boundaries | Natural Earth / Survey of India | Shapefile |
| Elevation / DEM | SRTM 30m (USGS) | GeoTIFF |

---

## 🔬 Methodology

### 1. Data Collection
- Acquired 6-hourly best-track data for Cyclone Amphan (May 16–21, 2020) from IMD and JTWC archives.
- Retrieved meteorological parameters: wind speed (km/h), central pressure (hPa), and relative humidity (%) at each track point.

### 2. Data Processing
- Cleaned and standardized coordinate data (WGS 84 / EPSG:4326).
- Converted tabular data into point shapefiles using latitude/longitude fields.
- Temporal interpolation applied for 3-hourly resolution where available.

### 3. Spatial Analysis (GIS Techniques)
- **Cyclone Path Mapping**: Connected sequential track points to generate the cyclone trajectory line over the Bay of Bengal.
- **Interpolation (IDW)**: Applied Inverse Distance Weighting to create continuous wind speed and pressure surfaces from discrete observation points.
- **Buffer Analysis**: Generated 50 km, 100 km, and 200 km buffer zones around the cyclone path to identify impact corridors.
- **Temporal Analysis**: Mapped parameter changes (wind speed, pressure) along the cyclone timeline to identify intensification and weakening phases.
- **Thematic Mapping**: Created classified/graduated symbol maps for pressure distribution.

### 4. Visualization
- Produced cyclone path maps, wind speed heatmaps, pressure thematic maps, and time-series graphs.
- Developed an interactive web dashboard using React + Tailwind CSS + Recharts for dynamic data exploration.

---

## 📈 Results & Observations

### Key Findings

1. **Rapid Intensification**: Cyclone Amphan underwent rapid intensification between May 17–18, 2020, with wind speeds increasing from 65 km/h to 260 km/h within 36 hours — a hallmark of warm-core cyclone dynamics over the Bay of Bengal.

2. **Inverse Pressure-Wind Relationship**: A strong inverse correlation was observed between central pressure and maximum sustained wind speed. As pressure dropped from 1000 hPa to 920 hPa, wind speed increased proportionally, consistent with the Dvorak technique estimates.

3. **Coastal Vulnerability**: Buffer analysis reveals that areas within 100 km of the cyclone path — including Sundarbans, Kolkata, and coastal Bangladesh — experienced the highest wind speeds (>150 km/h) and storm surge risk.

4. **Sea Surface Temperature (SST) Influence**: SST values exceeding 31°C in the central Bay of Bengal provided the thermodynamic energy necessary for Amphan's rapid intensification. The warm ocean layer extended to 50m depth.

5. **Weakening Before Landfall**: Wind speed decreased from 260 km/h (Super Cyclonic Storm) to 155 km/h at landfall near Sundarbans on May 20, 2020, due to increasing wind shear and cooler SST near the coast.

---

## 🧰 GIS Techniques Used

| Technique | Application |
|-----------|-------------|
| **Spatial Analysis** | Track point mapping and trajectory generation |
| **IDW Interpolation** | Continuous wind speed and pressure surface creation |
| **Kriging** | Alternative geostatistical interpolation for validation |
| **Buffer Analysis** | Impact corridor delineation (50/100/200 km zones) |
| **Temporal Analysis** | Time-series parameter variation along cyclone path |
| **Thematic Mapping** | Classified/graduated maps for pressure and wind |
| **Coordinate System** | WGS 84 (EPSG:4326) for all spatial data |

---

## 💻 Web Interface

The project includes an interactive web-based dashboard that visualizes:

- **Cyclone path** with intensity-coded markers
- **Wind speed vs. time** line chart showing intensification phases
- **Pressure vs. time** chart highlighting rapid deepening
- **Humidity vs. time** chart showing moisture availability
- **Historical cyclone database** for Bay of Bengal (2013–2021)
- **3D interactive visualization** of cyclone structure

### Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Recharts | Data visualization (charts) |
| Framer Motion | Animations |
| Vite | Build tool |

---

## 📂 Project Structure

```
├── data/
│   └── cyclone_amphan.csv        # Track data with meteorological parameters
├── maps/
│   ├── cyclone_path.png          # Cyclone trajectory map
│   ├── wind_map.png              # Wind speed interpolation (IDW)
│   └── pressure_map.png          # Pressure thematic map
├── src/
│   ├── components/               # React UI components
│   ├── pages/                    # Page components
│   └── assets/                   # Images and assets
├── public/                       # Static files
└── README.md                     # This file
```

---

## 📝 Conclusion

This project demonstrates the effective application of GIS techniques — including spatial analysis, IDW interpolation, buffer analysis, and temporal analysis — in studying tropical cyclone behavior over the Bay of Bengal. The analysis of Cyclone Amphan reveals critical patterns in cyclone intensification, the inverse relationship between pressure and wind speed, and the vulnerability of coastal regions within the cyclone's impact corridor.

The integration of geospatial analysis with an interactive web dashboard provides an accessible platform for visualizing and understanding cyclone dynamics, supporting disaster preparedness and risk assessment in one of the world's most cyclone-prone regions.

---

## 📚 References

1. India Meteorological Department (IMD) — Best Track Data Archive
2. Joint Typhoon Warning Center (JTWC) — TC Warning Archive
3. ECMWF ERA5 Reanalysis — Copernicus Climate Data Store
4. ISRO MOSDAC — INSAT-3D/3DR Satellite Products
5. NOAA OISST — Optimum Interpolation Sea Surface Temperature

---

## 🚀 Deployment

This project is deployed on **Vercel** via Lovable.

```sh
# Local development
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev
```

---

**Topics**: `gis` `cyclone-analysis` `qgis` `spatial-analysis` `meteorology` `bay-of-bengal` `remote-sensing` `disaster-management`
