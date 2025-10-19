// === Load CSV data ===
d3.csv("Ex6_TVdata.csv", d => ({
  brand: d.brand,
  model: d.model,
  screenSize: +d.screenSize,
  screenTech: d.screenTech,
  energyConsumption: +d.energyConsumption,
  star: +d.star
})).then(data => {
  console.log("Loaded data:", data);

  // Histogram
  drawHistogram(data);
  populateFilters(data);

  // Scatterplot
  drawScatterplot(data);

  // Tooltip
  createTooltip();
});
