d3.json("samples.json").then((importedData) => {
  // console.log(importedData)
  var data = importedData;

  // Sort the data array using the greekSearchResults value
  data.sort(function(a, b) {
    return parseFloat(b.greekSearchResults) - parseFloat(a.greekSearchResults);
  });

  // Slice the first 10 objects for plotting
  data = data.slice(0, 10);

  // Reverse the array due to Plotly's defaults
  data = data.reverse();

  // Trace1 for the Greek Data
  var trace1 = {
    x: data.map(row => row.greekSearchResults),
    y: data.map(row => row.greekName),
    text: data.map(row => row.greekName),
    name: "Greek",
    type: "bar",
    orientation: "h"
  };

  // data
  var chartData = [trace1];

  // Apply the group bar mode to the layout
  var layout = {
    title: "Greek gods search results",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };

  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", chartData, layout);
});

// ///////////////////////////////////////////////////////////

/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
// function unpack(rows, index) {
//   return rows.map(function(row) {
//     return row[index];
//   });
// }

// function buildPlot() {
//   d3.json(url).then(function(data) {

//     // Grab values from the data json object to build the plots
//     var name = data.dataset.name;
//     var stock = data.dataset.dataset_code;
//     var startDate = data.dataset.start_date;
//     var endDate = data.dataset.end_date;
//     var dates = unpack(data.dataset.data, 0);
//     var closingPrices = unpack(data.dataset.data, 4);

//     var trace1 = {
//       type: "scatter",
//       mode: "lines",
//       name: name,
//       x: dates,
//       y: closingPrices,
//       line: {
//         color: "#17BECF"
//       }
//     };

//     var data = [trace1];

//     var layout = {
//       title: `${stock} closing prices`,
//       xaxis: {
//         range: [startDate, endDate],
//         type: "date"
//       },
//       yaxis: {
//         autorange: true,
//         type: "linear"
//       }
//     };

//     Plotly.newPlot("plot", data, layout);

//   });
// }

// buildPlot();
