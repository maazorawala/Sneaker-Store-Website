'use strict'

document.addEventListener('keypress', function(a){
    if(a.key === 'ArrowRight'){
        document.querySelector(".card-container").scrollTo({ left: 900, behavior: "smooth" });
    }
}  )
document.addEventListener('keypress' , function(b){
    if(b.key === 'ArrowLeft'){
        document.querySelector(".card-container").scrollTo({left:-900, behavior: "smooth"});
    }
})

document.onreadystatechange = () =>{
    if(document.readyState != "complete"){
        document.querySelector("#load").style.visibility="visible";
        document.body.style.visibility="hidden";
    }
    else{
        document.querySelector("#load").style.visibility="hidden"
        document.body.style.visibility="visible";
    }
}
document.addEventListener('keydown' , function(e){
    if(e.key === 'Escape'){
        closeNav()
    }
})
const openNav = function () {
    document.getElementById("sideNav").style.width = "500px";
    document.getElementById("main").style.marginLeft = "500px";
    document.body.classList.add('background-new');
}
const closeNav = function() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.classList.remove("background-new");
}
const checkpoint = 450;

window.addEventListener("scroll", function()  {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
    document.querySelector(".card-container").classList.add("opacity") ;
    
}
else {
    document.querySelector(".card-container").classList.remove("opacity");
    document.querySelector(".card-container").style.transition = "0.5s";
}
});
const checkpoint_2 = 850;

window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint_2) {
    document.querySelector(".large-cards").classList.add("opacity");
} else {
    document.querySelector(".large-cards").classList.remove("opacity");
    document.querySelector(".large-cards").style.transition = "0.5s";
}
    
});

const checkpoint_3 = 1800;

window.addEventListener("scroll" , function(){
    const currentScroll = window.pageYOffset;
    if(currentScroll <= checkpoint_3){
        document.querySelector(".dior").classList.add("opacity");
    }
    else{
        document.querySelector(".dior").classList.remove("opacity");
        document.querySelector(".dior").style.transition = "0.5s";
        document.querySelector(".dior").style.delay = "0.5s";
    }
})
const checkpoint_4 = 2400;

window.addEventListener("scroll" , function(){
    const currentScroll = window.pageYOffset;
    if(currentScroll <= checkpoint_4){
        document.querySelector(".dior-content").classList.add("opacity");
    }
    else{
        document.querySelector(".dior-content").classList.remove("opacity");
        document.querySelector(".dior-content").style.transition = "0.5s";
        document.querySelector(".dior-content").style.delay = "0.5s";
    }
})
const checkpoint_5 = 3000;

window.addEventListener("scroll" , function(){
    const currentScroll = window.pageYOffset;
    if(currentScroll <= checkpoint_5){
        document.querySelector(".cactus-jack").classList.add("opacity");
    }
    else{
        document.querySelector(".cactus-jack").classList.remove("opacity");
        document.querySelector(".cactus-jack").style.transition = "0.5s";
        document.querySelector(".cactus-jack").style.delay = "0.5s";
    }
})

const modal = document.querySelector('.modal');
const modal2 = document.querySelector(".modal-2");
const overlay = document.querySelector('.overlay');
const overlay2 = document.querySelector(".overlay-2");
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal2 = document.querySelector(".close-modal-2");
const btnOpenModal2 = document.querySelectorAll(".show-modal-2");

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
for(let i = 0; i<btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener('click', openModal)
}
btnCloseModal.addEventListener('click' , closeModal);
overlay.addEventListener('click' , closeModal);
document.addEventListener("keydown", function (v) {
  if (v.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});


const openModal2 = function () {
    modal2.classList.remove("hidden");
    overlay2.classList.remove("hidden");
};
const closeModal2 = function () {
  modal2.classList.add("hidden");
  overlay2.classList.add("hidden");
};
for (let r = 0; r < btnOpenModal2.length; r++) {
  btnOpenModal2[r].addEventListener("click", openModal2);
}
btnCloseModal2.addEventListener("click", closeModal2);
overlay2.addEventListener("click", closeModal2);
document.addEventListener("keydown", function (w) {
  if (w.key === "Escape" && !modal2.classList.contains("hidden")) {
    closeModal2();
  }
});

const password = document.getElementById('password1');
const password_confirm = document.getElementById('password2');

function validatePassword(){
    if (password.value != password_confirm.value){
        password_confirm.setCustomValidity("Passwords dont match");
    }
    else{
        password_confirm.setCustomValidity('');
    }
}
password.onchange = validatePassword;
password_confirm.onkeyup = validatePassword;

function lenghtPassword(){if(password.value.length <= 8){
    password_confirm.setCustomValidity("Password length must be greater than 8")
    password.setCustomValidity("Password length must be greater than 8");
}
else{
    password_confirm.setCustomValidity("")
    password.setCustomValidity("");
}
}
password.onchange = lenghtPassword;
password_confirm.onchange = lenghtPassword;