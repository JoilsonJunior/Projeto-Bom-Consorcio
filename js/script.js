var ctx = document.getElementsByClassName("line-chart");

// type, Data e options

var chartGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul", "Ago","Set","Out", "Nov","Dez"],
        datasets:[{
            label: "Resultado",
            data: [5,10,5,14,20,15,6,14,8,12,15,5,10],
            borderWidth: 6,
            borderColor: '#93a7cc',
            backgroundColor:'transparent'
        },
        {
            label: "Média",
            data: [1,10,7,14,20,15,6,7,8,10,10,15,11],
            borderWidth: 6,
            borderColor: '#7fc1bd',
            backgroundColor:'transparent'
        },
        {
            label: "Projetado",
            data: [0,3,6,9,12,15,18,21,24,27,30,33,36],
            borderWidth: 6,
            borderColor: '#c8c0e9',
            backgroundColor:'transparent'
        },
    ]
    }

});


