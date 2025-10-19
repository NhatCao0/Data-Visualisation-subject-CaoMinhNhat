//Step 1: Add a new js file for your D3 code
<script src="https://d3js.org/d3.v7.min.js"></script>

//Step 2: Apply style to html element using D3
d3.select("h1")
  .style("color", "green");

//Step 3: Append an element using D3
d3.select("div")
  .append("p")
    .text("Purchasing a low energy consumption TV will help with your energy bills!");

//Step 4: Append a svg using D3
d3.select("svg")
  .append("rect");

//Add some attributes so the rectangle will be visible. 
d3.select("svg")
  .append("rect")
   .attr("x", 50)
   .attr("y", 50)
   .attr("width", 100)
   .attr("height", 30)
   .style("fill", "green");

//Create svg object within the new div 
const svg = d3.select(".responsive-svg-container")
    .append("svg")
      .attr("viewBox", "0 0 1200 1600")
      .style("border", "1px solid black");

//Add a test svg rectangle
svg
  .append("rect")
    .attr("x", 10)
    .attr("y", 10)
    .attr("width", 414)
    .attr("height", 16)
    .attr("fill", "blue");