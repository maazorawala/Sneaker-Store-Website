openNav = () =>{
    document.getElementById("sideNav").style.width = "500px";
    document.getElementById("main").style.marginLeft = "500px";
    document.body.style.background = "rgba(0,0,0,0.5)";
}
closeNav = () =>{
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.background = "white";
}
