function showNav(){
    var ham= document.querySelector(".ham");
    var navEle=document.querySelector(".navelement");
    ham.addEventListener("click",function(){
        navEle.classList.toggle("navelement-active");
    });
    console.log(ham);
    console.log(navEle);
}
showNav();
