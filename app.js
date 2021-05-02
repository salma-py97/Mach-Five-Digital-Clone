const navbar = document.getElementById("navbar");

document.addEventListener("scroll", function () {
	if (window.scrollY > 100) {
		navbar.style.backgroundColor = "#010101";
	} else {
		navbar.style.backgroundColor = "transparent";
	}
});
