window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function topFunction() {
	window.scrollTo({top: 0, behavior: 'smooth'});
}

let newY = 0
document.getElementById("btnTop").style.visibility = 'hidden';
window.addEventListener('scroll', (e) => {
	newY = window.pageYOffset;
	if (500 < newY) {
		document.getElementById("btnTop").style.visibility = 'visible';
	} else {
		document.getElementById("btnTop").style.visibility = 'hidden';
	}
});
