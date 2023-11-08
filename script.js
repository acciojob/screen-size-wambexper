//your JS code here. If required.
//your JS code here. If required.
let a = document.getElementById("sizeInfo");
function showhw() {
	let x = window.innerWidth;
	let y = window.innerHeight;
	a.innerHTML = "Width: " + x + " and Height: " + y;
}
showhw();
window.addEventListener('resize', showhw);