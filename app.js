// d3.json("samples.json").then((importedData) => {
//   // console.log(importedData)
//   var data = importedData;

function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

function buildPlot() {
  d3.json("samples.json").then(function(data) {

    // Grab values from the data json object to build the plots
    var values = samples.samples.sample_values;
    var labels = samples.samples.otu_ids;
    var hoverText = samples.samples.otu_labels;
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
      }

  Plotly.newPlot("bar", data, layout);

});

buildPlot();