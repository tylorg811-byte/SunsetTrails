<meta name='viewport' content='width=device-width, initial-scale=1'/><script>// CURSOR
const cursor=document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});

// PAGE LOAD
window.addEventListener("load",()=>{
document.querySelector(".page").classList.add("active");
});

// PAGE TRANSITIONS
document.querySelectorAll("a").forEach(link=>{
link.addEventListener("click",e=>{
const href=link.getAttribute("href");
if(href && href.includes(".html")){
e.preventDefault();
document.querySelector(".page").classList.remove("active");
setTimeout(()=>{window.location=href},500);
}
});
});

// MAGNETIC BUTTON
document.querySelectorAll(".btn").forEach(btn=>{
btn.addEventListener("mousemove",e=>{
const rect=btn.getBoundingClientRect();
const x=e.clientX-rect.left-rect.width/2;
const y=e.clientY-rect.top-rect.height/2;
btn.style.transform=`translate(${x*0.2}px,${y*0.2}px)`;
});
btn.addEventListener("mouseleave",()=>{
btn.style.transform="translate(0,0)";
});
});</script>