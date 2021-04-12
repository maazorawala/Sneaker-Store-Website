openNav = () =>{
    document.getElementById("sideNav").style.width = "500px";
    document.getElementById("main").style.marginLeft = "500px";
}
closeNav = () =>{
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
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