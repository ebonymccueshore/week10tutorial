const datavisEl = document.getElementById("datavis");

Plotly.d3.csv("fruit_dataset.csv",myCoolFunction);

function myCoolFunction(csvData) {
    const data = [
        {
            x: csvData.map((row) => row.fruit),
            y: csvData.map((row) => +row.percent),
            type: 'bar'
        }
    ];

    Plotly.newPlot(datavisEl, data);
}