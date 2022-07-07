window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
function topFunction() {
	window.scrollTo({top: 0, behavior: 'smooth'});
}

let newY = 0
window.addEventListener('scroll', (e) => {
	newY = window.pageYOffset;
	if (vh/5 <= newY) {
		document.getElementById("btnTop").style.visibility = 'visible';
	} else {
		document.getElementById("btnTop").style.visibility = 'visible';
	}
});
