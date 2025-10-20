function drawHistogram(data) {
  d3.select("#chart").selectAll("*").remove(); // clear old chart

  const svg = d3
    .select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Create bins
  const bins = binGenerator(data);

  const x = d3
    .scaleLinear()
    .domain([0, d3.max(bins, d => d.x1)])
    .range([0, width]);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(bins, d => d.length)])
    .range([height, 0]);

  // Draw bars
  g.selectAll("rect")
    .data(bins)
    .join("rect")
    .attr("x", d => x(d.x0))
    .attr("y", d => y(d.length))
    .attr("width", d => x(d.x1) - x(d.x0) - 1)
    .attr("height", d => height - y(d.length))
    .attr("fill", "#64b5f6");

  // Add axes
  g.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

  g.append("g").call(d3.axisLeft(y));

  // Add labels
  g.append("text")
    .attr("x", width / 2)
    .attr("y", height + 35)
    .attr("text-anchor", "middle")
    .text("Energy Consumption (kWh)");

  g.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -40)
    .attr("text-anchor", "middle")
    .text("Frequency");
}

// === updateHistogram ===
function updateHistogram(data, selectedFilter) {
  console.log("Updating histogram with filter:", selectedFilter);

  let filteredData = data;

  if (selectedFilter !== "all") {
    filteredData = data.filter(
      d => d.screenTech.toLowerCase() === selectedFilter.toLowerCase()
    );
  }

  console.log("Filtered data length:", filteredData.length);

  drawHistogram(filteredData);
}


window.updateHistogram = updateHistogram;
