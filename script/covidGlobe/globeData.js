const results = [];
const names = [];
const active_cases = [];
const dateList = [];

const forEachCountry = async function(array, index = 0){
	if(array.length <= index){
		return;
	}
	await getCountryData(array[index].code);
	await forEachCountry(array, ++index);
}

const main = async function(){
	await forEachCountry(countryCodes);
}

const fillDataArrays = function(){
	let i;
	for(i = 0; i < results.length; i++){
		names[i] = results[i].countrydata[0].info.title;
		active_cases[i] = results[i].countrydata[0].total_active_cases;
	}
}

const getCountryData = async function (code){
	const url = `https://thevirustracker.com/free-api?countryTotal=${code}`;
	try{
		const response = await fetch (url);

		const data = await response.json();
		results.push(data);
		parseData(data);
	}
	catch(e){
		console.log('Error: ',code);
	}
}

const parseData = function(data){
	let today = new Date().toDateString();
	names.push(data.countrydata[0].info.title);
	active_cases.push(data.countrydata[0].total_active_cases);
	localStorage.setItem(today, JSON.stringify({'names' : names, 'active_cases': active_cases}));
}