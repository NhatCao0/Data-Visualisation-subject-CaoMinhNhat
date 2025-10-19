// === Shared constants ===
const margin = { top: 20, right: 30, bottom: 40, left: 50 };
const width = 800 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// Histogram bins
const binGenerator = d3
  .bin()
  .domain([0, 600])
  .thresholds(20)
  .value(d => d.energyConsumption);

// Color scheme (for both charts)
const color = d3.scaleOrdinal()
  .domain(["LCD", "LED", "OLED"])
  .range(["#90caf9", "#81c784", "#ffb74d"]);

// === Scatterplot-specific constants ===
let innerChartS; // for scatterplot chart group
let xScaleS;
let yScaleS;

// Tooltip constants
const tooltipWidth = 80;
const tooltipHeight = 40;

// 🟢 Filters for screen technology (used in interactions.js)
const filters_screen = [
  { id: "all", label: "All", isActive: true },
  { id: "LED", label: "LED", isActive: false },
  { id: "LCD", label: "LCD", isActive: false },
  { id: "OLED", label: "OLED", isActive: false },
];
