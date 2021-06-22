var svg = d3.select("#side");


d3.csv("https://gist.githubusercontent.com/kael558/7d2cb5258921119df5884cc90902e84d/raw/cca654ad27fdfe6501a5815ba05ffcaf7968af24/temp.csv", function(data) {
	for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
})
