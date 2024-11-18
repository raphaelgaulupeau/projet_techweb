const educationData = {
    france: {
        2010: [15, 35, 32, 18],
        2015: [12, 33, 34, 21],
        2020: [9, 31, 36, 24]
    },
    allemagne: {
        2010: [14, 37, 30, 19],
        2015: [11, 35, 32, 22],
        2020: [8, 33, 34, 25]
    },
    italie: {
        2010: [19, 39, 28, 14],
        2015: [16, 37, 31, 16],
        2020: [13, 35, 33, 19]
    }
};

let chart;

function majGraph() {
    const country = document.getElementById('countrySelect').value;
    const year = document.getElementById('yearSelect').value;
    const data = educationData[country][year];

    const ctx = document.getElementById('educationChart').getContext('2d');

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Pas d\'études', 'Moins de 2 ans', 'De 2 à 5 ans', 'Plus de 5 ans'],
            datasets: [{
                data: data,
                backgroundColor: ['red', 'blue', 'yellow', 'green']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: `Niveaux d'éducation en ${country} (${year})`
                }
            }
        }
    });
}

document.getElementById('countrySelect').addEventListener('change', majGraph);
document.getElementById('yearSelect').addEventListener('change', majGraph);

majGraph();
