var box1 = document.querySelector(".box-1")
var box2 = document.querySelector(".box-2")
var box3 = document.querySelector(".box-3")
var box1p = document.querySelector(".box-1 p")
var box2p = document.querySelector(".box-2 p")
var box3p = document.querySelector(".box-3 p")
var box1b = document.querySelector(".box-1 button")
var box2b = document.querySelector(".box-2 button")
var box3b = document.querySelector(".box-3 button")


box1.addEventListener("mouseenter", () => {
    box1.style.width = "100%";
    box1p.style.display = "block";
    box1b.style.display = "block";
})
box1.addEventListener("mouseleave", () => {
    box1.style.width = "33.33%";
    box1p.style.display = "none";
    box1b.style.display = "none";
})


box2.addEventListener("mouseenter", () => {
    box2.style.width = "100%";
    box2p.style.display = "block";
    box2b.style.display = "block";
})
box2.addEventListener("mouseleave", () => {
    box2.style.width = "33.33%";
    box2p.style.display = "none";
    box2b.style.display = "none";
})


box3.addEventListener("mouseenter", () => {
    box3.style.width = "100%";
    box3p.style.display = "block";
    box3b.style.display = "block";
})
box3.addEventListener("mouseleave", () => {
    box3.style.width = "33.33%";
    box3p.style.display = "none";
    box3b.style.display = "none";
})
