jQuery(document).ready(function() {

    var interval = setInterval(getData, 500);

    function getData() {

        if (window.data != undefined && window.labels != undefined) {

            var data = [{
                values: window.data,
                labels: window.labels,
                type: 'pie'
            }];

            var layout = {
                height: 400,
                width: 500
            };

            Plotly.newPlot('pieChart', data, layout);
            clearInterval(interval);
        }


    }
});