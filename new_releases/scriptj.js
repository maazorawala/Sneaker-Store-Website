/**opening and closing sidenav */
let openNav = function () {
    document.getElementById("sideNav").style.width = "700px";
    document.getElementById("main").style.marginLeft = "700px";
    document.body.classList.add('background-new');
}
let closeNav = function() {
    document.getElementById("sideNav").style.width = "0";
    document.querySelector('.open-sidenav').onclick = function(){
        document.getElementById("sideNav").style.width = "100%";
    }
    document.getElementById("main").style.marginLeft = "0";
    document.body.classList.remove("background-new");
}
/**opening and closing sidenav *//**Close sidenav with escape key function */
document.addEventListener('keydown' , function(e){
    if(e.key === 'Escape'){
        closeNav()
    }
})
/**Close sidenav with escape key function */
/**Loader function */
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
/**Loader function */