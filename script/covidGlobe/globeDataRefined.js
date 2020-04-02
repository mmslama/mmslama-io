const names = [];
const active_cases = [];
let dateList = [];

const fillDataArrays = function(data){
	let i;
	let c = 0;
	for(i = 1; i <= 182; i++){
		names[c] = data.countryitems[0][i].title;
		active_cases[c] = data.countryitems[0][i].total_active_cases;
		c++;
	}
	parseData();
}

const getCountryData = async function (){
	const url = `https://api.thevirustracker.com/free-api?countryTotals=ALL`;
	try{
		const response = await fetch (url);
		const data = await response.json();
		fillDataArrays(data);
	}
	catch(e){
		console.log('Error: Failed to Load Country Data');
	}
}

const parseData = function(){
	let today = new Date().toDateString();
	localStorage.setItem(today, JSON.stringify({'names' : names, 'active_cases': active_cases}));
}