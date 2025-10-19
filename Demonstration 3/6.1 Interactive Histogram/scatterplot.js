function drawScatterplot(data) {
  // Clear previous chart if any
  d3.select("#scatterplot").selectAll("*").remove();

  const svg = d3
    .select("#scatterplot")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

  innerChartS = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // === Scales ===
  xScaleS = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.star) + 0.5])
    .range([0, width]);

  yScaleS = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.energyConsumption)])
    .range([height, 0]);

  // === Circles ===
  innerChartS
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", d => xScaleS(d.star))
    .attr("cy", d => yScaleS(d.energyConsumption))
    .attr("r", 4)
    .attr("fill", d => color(d.screenTech))
    .attr("opacity", 0.6)
    .on("mouseenter", handleMouseEvents)
    .on("mouseleave", handleMouseEvents);

  // === Axes ===
  innerChartS
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xScaleS));

  innerChartS.append("g").call(d3.axisLeft(yScaleS));

  // === Labels ===
  innerChartS
    .append("text")
    .attr("x", width / 2)
    .attr("y", height + 35)
    .attr("text-anchor", "middle")
    .text("Star Rating");

  innerChartS
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -40)
    .attr("text-anchor", "middle")
    .text("Energy Consumption (kWh/year)");

  // === Legend ===
  const legend = innerChartS
    .selectAll(".legend")
    .data(color.domain())
    .enter()
    .append("g")
    .attr("transform", (d, i) => `translate(0,${i * 20})`);

  legend
    .append("rect")
    .attr("x", width - 15)
    .attr("width", 12)
    .attr("height", 12)
    .attr("fill", color);

  legend
    .append("text")
    .attr("x", width - 20)
    .attr("y", 10)
    .attr("text-anchor", "end")
    .style("font-size", "12px")
    .text(d => d);
}
