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

//slider
var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)






