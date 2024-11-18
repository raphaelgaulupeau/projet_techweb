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
    },
    espagne: {
        2010: [20, 30, 25, 25],
        2015: [18, 32, 27, 23],
        2020: [15, 28, 30, 27]
    },
    pays_bas: {
        2010: [12, 38, 29, 21],
        2015: [10, 36, 31, 23],
        2020: [7, 34, 35, 24]
    },
    suede: {
        2010: [17, 33, 30, 20],
        2015: [15, 31, 32, 22],
        2020: [12, 29, 34, 25]
    }
};

const incomeData = {
    france: {
        2010: [25000, 30000, 35000, 40000],
        2015: [26000, 31000, 36000, 41000],
        2020: [27000,32000 ,37000 ,42000]
    },
    allemagne: {
        2010: [24000 ,29000 ,34000 ,39000],
        2015: [25000 ,30000 ,35000 ,40000],
        2020: [26000 ,31000 ,36000 ,41000]
    },
    italie: {
        2010: [23000 ,28000 ,33000 ,38000],
        2015: [24000 ,29000 ,34000 ,39000],
        2020: [25000 ,30000 ,35000 ,40000]
    },
    espagne: {
        2010: [22000 ,27000 ,32000 ,37000],
        2015: [23000 ,28000 ,33000 ,38000],
        2020: [24000 ,29000 ,34000 ,39000]
    },
    pays_bas: {
        2010: [26000 ,31000 ,36000 ,41000],
        2015: [27000 ,32000 ,37000 ,42000],
        2020: [28000 ,33000 ,38000 ,43000]
    }
};


let educationChart;
let incomeChart;

function majGraphEducation() {
    const country = document.getElementById('countrySelect').value;
    const year = document.getElementById('yearSelect').value;
    const data = educationData[country][year];

    const ctx = document.getElementById('educationChart').getContext('2d');

    if (educationChart) {
        educationChart.destroy();
    }

    educationChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Pas d études', 'Moins de 2 ans', 'De 2 à 5 ans', 'Plus de 5 ans'],
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

function majGraphIncome() {
    const country = document.getElementById('countrySelect').value;
    const year = document.getElementById('yearSelect').value;
    const data = incomeData[country][year];

    const ctx = document.getElementById('incomeChart').getContext('2d');

    if (incomeChart) {
        incomeChart.destroy();
    }

    incomeChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Pas d\'études', 'Moins de 2 ans', 'De 2 à 5 ans', 'Plus de 5 ans'],
            datasets: [{
                label: null,
                data: data,
                backgroundColor: ['red', 'blue', 'yellow', 'green']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: `Revenus moyens en ${country} (${year}) selon le niveau d'études`,
                    padding: {
      
                        bottom: 20 
                    }
                },
                legend: {
                    display: false
                }
            }
        }
    });
}



function majGraph() {
    majGraphEducation();
    majGraphIncome();
}

document.getElementById('countrySelect').addEventListener('change', majGraph);
document.getElementById('yearSelect').addEventListener('change', majGraph);

majGraph();
