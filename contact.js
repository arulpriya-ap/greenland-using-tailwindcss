var menuicon1 = document.getElementById("menuicon1")
var menuicon2 = document.getElementById("menuicon2")
var sidenav = document.getElementById("sidenav")
var closeicon = document.getElementById("closeicon")   

menuicon1.addEventListener("click", function(){
    sidenav.style.right = "0"
})
closeicon.addEventListener("click", function(){
    sidenav.style.right ="-50%"
} )

menuicon2.addEventListener("click", function(){
    sidenav.style.right = "0"
})
closeicon.addEventListener("click", function(){
    sidenav.style.right ="-50%"
} )