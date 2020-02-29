let circle = document.querySelector('#craft');
let moveBy = 10;

let imgArray = new Array();

imgArray[0] = 'images/sky1.jpg';

imgArray[1] = 'images/sky2.jpg';

imgArray[2] = 'images/sky3.jpg';

var i = 0;


document.querySelector('#mode').addEventListener('click', () =>{
	i = i < imgArray.length -1 ? ++i : 0;
	document.querySelector('#aboutSection').style.backgroundImage = "url('" + imgArray[i] + "')";
})



window.addEventListener('load', () =>{
	circle.style.position = 'relative';
	circle.style.left = 0;
	circle.style.top = 0;
})

window.addEventListener('keydown', (e) =>{
	switch(e.key){
		case 'a' :
			circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
			break;
		
		case 'd' :
			circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
			break;
		
		case 'w' :
			circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
			break;
		
		case 's' :
			circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
			break;
	}
})


