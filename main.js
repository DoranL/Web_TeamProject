let mainText = document.querySelector("h1");

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    

    if(value>300){
        mainText.style.animation = "slideOut 2s ease-out forwards";

    }

    else{
        mainText.style.animation="slideIn 2s ease-out";
    }
});