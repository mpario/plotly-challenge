var option = "";
var dataBelly;

function disp() {
  d3.json("samples.json").then(function(data)) {
    dataBelly = data;
    console.log(dataBelly);
    displayMetaData(940,dataBelly);
    displayBubbleChart(940,dataBelly);
    displayHBarChart(940,dataBelly);


  }
}






// d3.json("samples.json").then((importedData) => {
//   // console.log(importedData)
//   var data = importedData;

function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

// Grab values from the data json object to build the plots
function buildPlot() {
  d3.json("samples.json").then(function(data) {
    // console.log(data.samples.filter(s => s.id === "940"));
    console.log(data);

  // Add ids to dropdown menu
  var dropDown = d3.select("#selDataset");
  data.names.forEach(function(id) {
    dropDown.append("option")
      .attr("value", id)
      .text(id);
  });

    // Grab values from the data json object to build the plots
    // var patientId = '940';
    // var sample = data.samples.filter(s => patientId == s.id).slice(data.samples.otu_ids(0,9)); 
    

    // .sample_values;
    /*var labels = dataSet.samples.otu_ids;
    var hoverText = dataSet.samples.otu_labels;
    // var endDate = data.dataset.end_date;
    // var dates = unpack(data.dataset.data, 0);
    // var closingPrices = unpack(data.dataset.data, 4);

    var trace1 = {
      type: "bar",
      x: labels,
      y: values,
      orientation: 'h',
    };

    var data = [trace1];

    var layout = {
      title: "Top 10 OTUs Found",
      xaxis: labels,
      yaxis: values
      };
*/
  // console.log(sample);

  // Plotly.newPlot("bar", data, layout);
 });
}
console.log("one world");

buildPlot();