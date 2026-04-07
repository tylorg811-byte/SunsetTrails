// CURSOR (safe)
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});

// PAGE LOAD (safe)
window.addEventListener("load", () => {
const page = document.querySelector(".page");
if(page){
page.classList.add("active");
}
});

// PAGE TRANSITIONS (safe)
document.querySelectorAll("a").forEach(link=>{
link.addEventListener("click", e=>{
const href = link.getAttribute("href");

if(href && href.includes(".html")){
const page = document.querySelector(".page");

if(page){
e.preventDefault();
page.classList.remove("active");

setTimeout(()=>{
window.location = href;
}, 400);
}
}
});
});
