// Read json file data
d3.json("samples.json").then(function(data) {
  // console.log(data.samples.filter(d => d.id === "940"));
  console.log(data);

  // Dropdown menu
  var dropDown = d3.select("#selDataset");
  data.names.forEach(function(id) {
    dropDown.append("option")
      .attr("value", id)
      .text(id);
  });

  // Dropdown and Form event
  var dropdown = d3.select("#selDataset");
  var form = d3.select("#form");
  dropdown.on("change", bellyChart);
  form.on("submit", bellyChart);

  //Function to get selected id
  function bellyChart() {
    d3.event.preventDefault();
    var currentId = d3.select("#selDataset").node().value;
    console.log(currentId);
  

  // Horizontal Bar Chart
    
  // Array for selected id
  var selectId = [];
  var currentSam = data.samples.filter(l => l.id === currentId)[0];
  console.log(currentSam);

  // Loop samples data to create array
  for (var i = 0; i < currentSam.otu_ids.length; i++) {
    var otu = {};
    otu.otuID = currentSam.otu_ids[i];
    otu.otuLabel = currentSam.otu_labels[i];
    otu.sampleValue = currentSam.sample_values[i];
    selectId.push(otu);
  }
  console.log(selectId);

  // Sort and split samples data to get top 10 otu
  var topOtu = selectId.sort(function topFunction(one, two) {
    return two.sampleValue - one.sampleValue;
  });

  topOtu = topOtu.slice(0,10);
  console.log(topOtu);
  console.log(topOtu[0].otuID);

  var horBar = {
    x: topOtu.map(otu => otu.sampleValue),
    y: topOtu.map(otu => `OTU ${otu.otuID}`),
    type: "bar",
    orientation: "h",
    text: topOtu.map(otu => otu.otuLabel)
  };

  var horData = [horBar];
  
  var horLayout = {
    title: "Top 10 Bacteria Cultures Found",
    yaxis: {autorange: "reversed"}
  };

  Plotly.newPlot("bar", horData, horLayout);

  
  // Bubble Chart

  var bubSize = 13;
  
  var traceBub = {
    x : selectId.map(otu => otu.otuID),
    y : selectId.map(otu => otu.sampleValue),
    mode: "markers",
    text: selectId.map(otu => otu.otuLabel),
    marker: {
      size: selectId.map(otu => otu.sampleValue),
      color: selectId.map(otu => otu.otuID),
      sizeref: 2.0 * Math.max(...selectId.map(otu => otu.sampleValue)) / (bubSize**2),
    }
  };
  
  var bubLayout = {
    title: `Bacteria Cultures Per Sample for ID ${currentId}`,
    xaxis: {title: "OTU ID"}
  };

  var bubData = [traceBub];

  // Create bubble chart
  Plotly.newPlot("bubble", bubData, bubLayout);

}
});
