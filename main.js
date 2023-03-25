const chart = document.querySelector("#chart").getContext('2d');

new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Acceptable',
                data: [29374, 33537, 49631, 59374, 43537, 79631, 69374, 83537, 99631, 63537, 39631],
                borderColor: '#41f1b6',
                borderWidth: 2
            },
            {
                label: 'Unacceptable',
                data: [24374, 36537, 45631, 28374, 67537, 45631, 81374, 52537, 73631, 78537, 89631],
                borderColor: '#ff7782',
                borderWidth: 2
            }
            // {
            //     label: 'Marginal',
            //     data: [54374, 46537, 25631, 78374, 47537, 65631, 31374, 52537, 13631, 58537, 99631],
            //     borderColor: '#ffbb55',
            //     borderWidth: 2
            // }
        ]
    },
    options: {
        responsive: true
    }
})