const drawGlobe = function(date) {
	const {names, active_cases} = JSON.parse(localStorage.getItem(date));
	const data = [{
		type: 'choropleth',
		locationmode: 'country names',
		locations: names,
		z: active_cases,
		text: names,
		zmin: 0,
		zmax: 30000,
		colorscale:[
				[0, 'rgb(207, 245, 252)'],
				[0.1, 'rgb(255, 225, 0)'], [0.5, 'rgb(255, 157, 0)'],
				[0.7, 'rgb(255, 98, 0)'], [1, 'rgb(201, 0, 0)']
			]
	}];

	const layout = {
		height: window.innerHeight*0.9,
		width: window.innerWidth,
		geo: {
			projection: {
				type: 'orthographic',
				rotation: {
					lon: -100,
					lat: 40
				},
			},
			showocean: true,
			oceancolor: 'rgb(0, 0, 0)',
			showland: true,
			landcolor: 'rgb(255, 255, 255)',
			showlakes: true,
			lakecolor: 'rgb(0, 255, 255)',
			showcountries: true,
			lonaxis: {
				showgrid: true,
				gridcolor: 'rgb(102, 102, 102)'
			},
			lataxis: {
				showgrid: true,
				gridcolor: 'rgb(102, 102, 102)'
			}
		}
	};
Plotly.newPlot("myDiv", data, layout, {showLink: false});
}

const initCurrentData = async function(){
	const currentDate = (new Date()).toDateString();
	if( !!!localStorage.getItem(currentDate)){
		dateList.push(currentDate);
		localStorage.setItem('dateList', JSON.stringify(dateList));
		console.log("entered local storage");
		await main();
	}
	showOptions(JSON.parse(localStorage.getItem('dateList')));
	drawGlobe(currentDate);
}
initCurrentData();