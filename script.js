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
    document.querySelector(".card-container").style.opacity = 0 ;
    
}
else {
    document.querySelector(".card-container").style.opacity = 1;
    document.querySelector(".card-container").style.transition = "0.5s";
}
    document.querySelector(".card-container").style.opacity = opacity;
});
