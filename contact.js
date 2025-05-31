//side navbar
var sidenavmenu=document.getElementById("side-navbar-active")
var sidenavbar = document.querySelector(".side-navbar")
sidenavmenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})
// var sidenavbar = document.querySelector(".side-navbar")
var sidenavbarclose = document.getElementById("side-navbar-close")
sidenavbarclose.addEventListener("click",function(){
sidenavbar.style.marginLeft = "-60%"
})


