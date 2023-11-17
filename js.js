const hamb = document.querySelector('.hamb');
const nav = document.querySelector('.nav');
hamb.addEventListener('click',()=>{
    console.log("ADD EVENT ")
    nav.classList.toggle('off');
})