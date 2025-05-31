// offerbar
var offer=document.querySelector(".offer")
var offerclose = document.getElementById("offer-close")

offerclose.addEventListener("click",function(){
    offer.style.display = "none"
})

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



