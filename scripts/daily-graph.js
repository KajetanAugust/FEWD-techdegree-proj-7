new Chartist.Bar('.bar-graph-container', {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    series: [50, 75, 150, 100, 200, 175, 75]
}, {
    
    width: 500,
    height: 240,

    distributeSeries: true
});