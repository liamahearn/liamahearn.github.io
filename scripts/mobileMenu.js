function mobileButtonClick() {

    console.log("Mobile Button Clicked")

    var x = document.querySelector(".mobile-menu-options");
    
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }

}

addEventListener("resize", (event) => {

    if(window.innerWidth > 886){

        var y = document.querySelector(".mobile-menu-options"); 
        y.style.display = "none";

    }

});
