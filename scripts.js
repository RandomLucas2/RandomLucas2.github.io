// scripts.js
const ctx = document.getElementById('myChart').getContext('2d');
const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Bar height = books read, X-axis = months, Y-axis = books per month. ',
            data: [11.5, 16, 6.5, 10, 7],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
    ],
};
const config = {
    type: 'bar',
    data: data,
};

const myChart = new Chart(ctx, config);

