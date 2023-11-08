   //your JS code here. If required.
let heading = document.querySelector("h1");
function onResize(){
    let width = window.innerWidth;
let height = window.innerHeight;
heading.innerText = `Width: ${width} and Height: ${height}`;
}
onResize();

window.addEventListener("resize", onResize);