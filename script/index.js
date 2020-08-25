let circle = document.querySelector('#craft');
let moveBy = 1;

let imgArray = new Array();

imgArray[0] = 'images/index/sky1.jpg';

imgArray[1] = 'images/index/sky2.jpg';

imgArray[2] = 'images/index/sky3.jpg';

var i = 0;


document.querySelector('#mode').addEventListener('click', () =>{
	i = i < imgArray.length -1 ? ++i : 0;
	document.querySelector('#aboutSection').style.backgroundImage = "url('" + imgArray[i] + "')";
})

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  setTimeout(() => { popup.classList.toggle("hide"); }, 1000);
}


