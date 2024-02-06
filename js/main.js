document.querySelector(".fade-layer").addEventListener("click",showmenu)

document.querySelector(".menu-button").addEventListener("click",showmenu)


function showmenu(){
  let menu = document.querySelector("div.menu");
  menu.classList.toggle("show");

  let layer = document.querySelector(".fade-layer");
  layer.classList.toggle("visible");
}  
