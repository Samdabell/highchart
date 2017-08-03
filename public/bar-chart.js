var BarChart = function(){
    var container = document.getElementById('bar-chart');
    var chart = new Highcharts.Chart({
        chart: {
            type: 'column',
            renderTo: container
        },
        title: {
            text: 'Favourite programming languages'
        },
        series: [
            {
                colors: ['red', 'green', 'blue', 'yellow'],
                name: 'Programming languages',
                data: [2, 7, 6, 1]
            }
        ],
        xAxis: {
            categories: ['Ruby', 'Java', 'Javascript', 'ADA95']
        },
        yAxis: {
            title: {
                text: 'Number of students'
            }
        }
    });
}

window.addEventListener('load', function(){
    new BarChart();
});