const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const aside = document.querySelector(".Wrapper-aside");
const categoryButtonss = document.querySelectorAll(".button-category"); 
const backButton = document.querySelector(".button-back");
const cartButton = document.querySelector(".button-cart");

openMenu.addEventListener("click", ()=>
{
    aside.classList.add("isVisible");
});

closeMenu.addEventListener("click",()=>
{
    aside.classList.remove("isVisible");
});

categoryButtonss.forEach(button => button.addEventListener("click", ()=>
{
    aside.classList.remove("isVisible");
}));


