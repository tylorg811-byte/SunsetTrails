// SAFE SCRIPT (no breaking)

// Cursor (won’t break anything if it fails)
try {
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
} catch(e) {}

// Smooth scroll (safe enhancement only)
document.querySelectorAll("a").forEach(link=>{
  link.addEventListener("click", e=>{
    const href = link.getAttribute("href");
    if(href && href.startsWith("#")){
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({behavior:"smooth"});
    }
  });
});
