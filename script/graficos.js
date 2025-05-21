// Gráfico de Barras
const ctxBar = document.getElementById('graficoBarras').getContext('2d');
new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    datasets: [{
      data: [18, 12, 11, 20, 9, 10, 8],
      backgroundColor: ['#ff5733', '#ffe066', '#ffeb66', '#7CFC00', '#66ffcc', '#66d9ff', '#66a3ff']
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 21
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

// Gráfico de Pizza
const ctxPie = document.getElementById('graficoPizza').getContext('2d');
new Chart(ctxPie, {
  type: 'pie',
  data: {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [{
      data: [40, 30, 10, 7, 13],
      backgroundColor: ['#00bcd4', '#2196f3', '#ff9800', '#8bc34a', '#607d8b']
    }]
  },
  options: {
    plugins: {
      legend: {
        position: 'right'
      }
    }
  }
});
