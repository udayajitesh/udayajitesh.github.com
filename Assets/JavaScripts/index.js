const slider = document.querySelector(".items");
		const slides = document.querySelectorAll(".item");
		const button = document.querySelectorAll(".button");

		let current = 0;
		let prev = 4;
		let next = 1;

		for (let i = 0; i < button.length; i++) {
			button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
		}

		const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

		const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

		const gotoNum = number => {
			current = number;
			prev = current - 1;
			next = current + 1;

			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
				slides[i].classList.remove("prev");
				slides[i].classList.remove("next");
			}

			if (next == 5) {
				next = 0;
			}

			if (prev == -1) {
				prev = 4;
			}

			slides[current].classList.add("active");
			slides[prev].classList.add("prev");
			slides[next].classList.add("next");
		}




// Enable hidden nav bar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
	  document.getElementById("nav").style.top = "0%";
	} else {
	  document.getElementById("nav").style.top = "-30%";
	}
}

//  Shows Apps Menu

{
	let apps = document.getElementById("apps");
	let oA = document.getElementById("oA");
	let cA = document.getElementById("cA");
function appMenu(){
	apps.style.height = "auto";
	cA.style.display = "block";
	oA.style.display = "none";
}

function appMenuC(){
	apps.style.height = "0";
	cA.style.display = "none";
	oA.style.display = "block";
}
}

  