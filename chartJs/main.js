//! Le contexte graphique.
const ctx = document.getElementById('myChart').getContext('2d');
//! ---------------------------------

//!les labels.
const myLabels = [];
//! ---------------------------------

//! Les datas.
const myData = [
  {
    x: 10,
    y: 10,
  },
  {
    x: 12,
    y: 20,
  },
  {
    x: 14,
    y: 25,
  },
  {
    x: 16,
    y: 15,
  },
  {
    x: 18,
    y: 35,
  },
];
//! ---------------------------------

//! Les datas.
const data = {
  labels: myLabels,
  datasets: [
    {
      label: 'Mon graph test',
      data: myData,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      lineTension: 0.2,
      pointRadius: 2,
      xAxisID: 'xAxis1',
    },
  ],
};
//! ---------------------------------

//! Les options.
const options = {
  // animation: {
  //     duration: 0, // general animation time
  // },
  scales: {
    x: {
      display: false,

      id: 'xAxis1',
      type: 'category',

      ticks: {
        callback: function (label) {},
      },
    },
    y: {},
  },
};
//! ---------------------------------

//! La configuration du graphique.
const config = {
  type: 'line',
  data,
  options,
};
//! ---------------------------------

//!L'instanciation de graphique.
const myChart = new Chart(ctx, config);
//! ---------------------------------
