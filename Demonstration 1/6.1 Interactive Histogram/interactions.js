function populateFilters(data) {
  const filterDiv = d3.select("#filters");
  filterDiv
    .selectAll("button")
    .data(filters_screen)
    .join("button")
    .attr("id", d => d.id)
    .attr("class", d => (d.isActive ? "active" : ""))
    .text(d => d.label)
    .on("click", (event, d) => {
      filters_screen.forEach(f => (f.isActive = f.id === d.id));
      d3.selectAll("button").classed("active", b => b.id === d.id);
      updateHistogram(data, d.id);
    });
}

// === Tooltip ===
let tooltipS;

function createTooltip() {
  tooltipS = innerChartS
    .append("g")
    .attr("id", "tooltipS")
    .style("opacity", 0);

  tooltipS
    .append("rect")
    .attr("width", tooltipWidth)
    .attr("height", tooltipHeight)
    .attr("rx", 8)
    .attr("ry", 8)
    .attr("fill", "#64b5f6")
    .attr("opacity", 0.8);

  tooltipS
    .append("text")
    .attr("x", tooltipWidth / 2)
    .attr("y", tooltipHeight / 2 + 5)
    .attr("text-anchor", "middle")
    .style("fill", "white")
    .style("font-size", "12px");
}

// === Handle mouse events ===
function handleMouseEvents(e, d) {
  const circle = e.currentTarget;
  const type = e.type;

  if (type === "mouseenter") {
    const x = +circle.getAttribute("cx");
    const y = +circle.getAttribute("cy");

    tooltipS.select("text").text(`${d.screenSize}"`);

    tooltipS
      .transition()
      .duration(150)
      .style("opacity", 1)
      .attr("transform", `translate(${x + 10},${y - 30})`);
  }

  if (type === "mouseleave") {
    tooltipS
      .transition()
      .duration(200)
      .style("opacity", 0)
      .attr("transform", `translate(-999,-999)`);
  }
}
