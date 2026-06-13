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


//Product Page Search Funtionality
var searchbtn = document.getElementById("searchbtn")
var searchBox = document.getElementById("searchBox")
var productContainer = document.getElementById("productContainer")
var productContainerList = productContainer.querySelectorAll("div")
var notfound = document.getElementById("notfound")
var found   = false;
searchBox.addEventListener("keyup", function()
{
    var enteredValue = event.target.value.toUpperCase()
    for(count=0;count<productContainerList.length; count=count+1)
    {
        productname = productContainerList[count].querySelector("h3").textContent
    if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
        productContainerList[count].style.display="none"

    }
    else
    {
        productContainerList[count].style.display="block"
        found= true
    }
    if(found==true){

notfound.style.display="none"
    }
    else{
        notfound.style.display="block"
    }
    }


}
)