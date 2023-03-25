const ctx = document.getElementById('doughnut').getContext('2d');

const doughnut = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Acceptable', 'Marginal', 'Unacceptable'],
        datasets: [{
            label: 'Inspections',
            data: [98, 18, 7],
            backgroundColor:[
                'rgba(65,241,182)',
                'rgba(255,187,85)',
                'rgba(255,119,130)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});