let circle = document.querySelector('#craft');
let moveBy = 1;

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

const wasd = new Set();

window.addEventListener('keyup', e => wasd.delete(e.key))
window.addEventListener('keydown', e => wasd.add(e.key))

const move = function(){
		if(wasd.has('a'))
			circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
		
		if(wasd.has('d'))
			circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
		
		if(wasd.has('w'))
			circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
		
		if(wasd.has('s'))
			circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
}

window.setInterval(move, 1);

