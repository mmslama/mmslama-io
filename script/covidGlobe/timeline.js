const showOptions = function(dateArray){
	let timeline = document.getElementById('timeline');
	for(let i = 0; i < dateArray.length; i++){
		let option = document.createElement('option');
		option.text = dateArray[i];
		timeline.appendChild(option);
	}
}

const changeDate = function(){
	let date = document.getElementById('timeline');
	date.addEventListener("change", () => drawGlobe(getDay(date)));
}

const getDay = function(timeline){
	const selected = [...timeline.selectedOptions][0];
	return selected.innerText;
}
changeDate();