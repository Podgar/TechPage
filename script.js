const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const body = document.getElementById("body");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchContainer = document.getElementById("searchContainer");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".progress-circle");

let currentActive = 1;

const panels = document.querySelectorAll(".panel");

openBtn.addEventListener("click", function(){
	body.classList.add("show-nav");
	searchContainer.classList.remove("active");
});

closeBtn.addEventListener("click", function(){
	body.classList.remove("show-nav");
});

searchBtn.addEventListener("click", function(){
	searchInput.focus();
	searchContainer.classList.toggle("active");
});

nextBtn.addEventListener("click", function(){
	currentActive++;
	if(currentActive > circles.length) currentActive = circles.length;
	update();
});

prevBtn.addEventListener("click", function(){
	currentActive--;
	if(currentActive < 1) currentActive = 1;
	update();
});

function update() {
	circles.forEach(function(el, i) {
		if(i < currentActive) {
			el.classList.add("active");
		} else {
			el.classList.remove("active");
		}
	})

	const actives = document.querySelectorAll(".progress-circle.active");
	progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";

	if(currentActive <= 1) {
		prevBtn.disabled = true;
	} else if (currentActive >= circles.length) {
		nextBtn.disabled = true;
	} else {
		prevBtn.disabled = false;
		nextBtn.disabled = false;
	}

	panels.forEach(function(el) {
		el.classList.remove("active");
	})

	panels[currentActive - 1].classList.add("active");
}