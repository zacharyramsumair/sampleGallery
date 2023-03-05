const vanGogh = document.getElementsByClassName("desktopData")[9];

vanGogh.classList.add("vanGoghPosition");

let startButton = document.querySelector(".start");

startButton.addEventListener("click", goToSlides);

function goToSlides() {
	window.location.href = "/slideshow";
}
