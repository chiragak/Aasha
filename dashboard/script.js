
var ctx = document.getElementById('barChart').getContext('2d');
var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Treatment A', 'Treatment B', 'Treatment C', 'Treatment D'],
    datasets: [
      {
        label: 'Success Rate',
        data: [80, 75, 90, 85], // Sample data representing success rates in percentage
        backgroundColor: 'rgba(54, 162, 235, 0.5)', // Customize the bar color
        borderColor: 'rgba(54, 162, 235, 1)', // Customize the bar border color
        borderWidth: 1 // Customize the bar border width
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100 // Customize the maximum value of the y-axis
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Treatment Success Rates',
        font: {
          size: 18
        }
      }
    }
  }
});

// Chart data
var chartData = {
labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
datasets: [
{
label: '2023',
data: [100, 200, 300, 400, 500, 400, 300, 200, 100, 0, 100, 0],
backgroundColor: 'rgba(255, 99, 132, 0.5)',
borderColor: 'rgba(255, 99, 132, 1)',
borderWidth: 1
},
{
label: '2022',
data: [0, 100, 0, 100, 200, 300, 400, 500, 400, 300, 200, 100],
backgroundColor: 'rgba(54, 162, 235, 0.5)',
borderColor: 'rgba(54, 162, 235, 1)',
borderWidth: 1
}
]
};

// Chart options
var chartOptions = {
responsive: true,
scales: {
x: {
display: true,
title: {
display: true,
text: 'Months'
}
},
y: {
display: true,
title: {
display: true,
text: 'Values'
},
min: 0,
max: 500
}
}
};

// Create the chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
type: 'line',
data: chartData,
options: chartOptions
});


function deletePatient(id) {
    // Handle the delete action here
    console.log('Deleting patient with ID:', id);
  }