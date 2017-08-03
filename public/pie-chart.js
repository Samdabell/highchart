var PieChart = function(){
    var container = document.getElementById('pie-chart');
    var chart = new Highcharts.Chart({
        chart: {
            type: 'pie',
            renderTo: container
        },
        title: {
            text: 'G2 favourite cakes/biscuits'
        },
        series: [
            {
                name: 'Cakes',
                data: [
                    {
                        name: 'Jaffa cakes',
                        y: 7,
                        color: 'chocolate'
                    },
                    {
                        name: 'Brownies',
                        y: 8,
                        color: 'saddlebrown',
                        sliced: true
                    },
                    {
                        name: 'Banana bread',
                        y: 2,
                        color: 'gold'
                    }
                ]
            }
        ]
    });
};

window.addEventListener('load', function(){
    new PieChart();
});