const list = document.querySelector(".navlist");
const humaburger = document.querySelector(".fa-bars");

humaburger.addEventListener("click", ()=>{
   list.classList.toggle("navlist-active");
})   