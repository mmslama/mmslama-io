const showOptions = function(dateArray){
	let dateList = document.getElementById('timeline');
	let option = document.createElement('option');
	for(let i = 0; i < dateArray.length; i++){
		option.text = dateArray[i];
		dateList.appendChild(option);
	}
}
const changeDate = function(){
	let date = document.getElementById('timeline');
	date.addEventListener("change", () => console.log("changed"));
	//drawGlobe(date.selected);
}
changeDate();