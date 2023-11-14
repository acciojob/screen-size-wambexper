const calc = () => {
	document.querySelector("h1")
   .textContent = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
}

window.addEventListener("resize", calc);
calc()