document.addEventListener("DOMContentLoaded", () => {
	const drawer = document.querySelector(".drawer");
	const openButton = document.querySelector(".open-drawer");
	const closeButton = document.querySelector(".close-drawer");

	openButton.addEventListener("click", () => {
		drawer.style.left = "0";
	});

	closeButton.addEventListener("click", () => {
		drawer.style.left = "-250px";
	});
});