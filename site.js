window.addEventListener('scroll', function() {
	if (window.pageYOffset>3) {
		document.getElementById('header').classList.add("backColor");
	}if(window.pageYOffset<=3){
		document.getElementById('header').classList.remove("backColor");
	}
	
});





// window.onscroll = function() {
//   let scroll = window.pageYOffset || document.documentElement.scrollTop;
//   document.getElementById('showScroll').innerHTML = scroll + 'px';
// }

var a = document.getElementById('modalWin');

function modalWin(){
	a.style.display = "block";

		// alert("hi")
	
}

var modalLearnMore = document.getElementById("modalLearnMore");
var btnLearnMore = document.getElementById("learnMore");
var span = document.getElementsByClassName("closeLearnMore")[0];

btnLearnMore.onclick = function(){
	modalLearnMore.style.display = "block";
}

span.onclick = function(){
	modalLearnMore.style.display = "none";
}
// window.addEventListener('click'){}




var modalOne = document.getElementById("modalOne");
var btnOne = document.getElementById("modalbtnOne");
var span = document.getElementsByClassName("closeOne")[0];

btnOne.onclick = function(){
	modalOne.style.display = "block";
}

span.onclick = function(){
	modalOne.style.display = "none";
}

var modalTwo = document.getElementById("modalTwo");
var btnTwo = document.getElementById("modalbtnTwo");
var span = document.getElementsByClassName("closeTwo")[0];

btnTwo.onclick = function(){
	modalTwo.style.display = "block";
}

span.onclick = function(){
	modalTwo.style.display = "none";
}

var modalThree = document.getElementById("modalThree");
var btnThree = document.getElementById("modalbtnThree");
var span = document.getElementsByClassName("closeThree")[0];

btnThree.onclick = function(){
	modalThree.style.display = "block";
}

span.onclick = function(){
	modalThree.style.display = "none";
}