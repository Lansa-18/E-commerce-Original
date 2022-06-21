//responsive menu 
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.float-div');

menu.onclick = function myfunction(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

//search bar
// let searchForm = document.querySelector("#search-form");

// document.querySelector("#searchicon").onclick = ()=> {
//  searchForm.classList.toggle("active");
// }
// document.querySelector("#close").onclick = () => {
//   searchForm.classList.remove("active");
//  }

//  let special = document.getElementById("special");
//  special.onclick=()=>{
//   special.style.fontSize = "50px";
   
//  }




      //swiper script for the review slider

      var refffffr = new Swiper(".review-slider", {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
       
        loop:true,
      
      breakpoints:{
        0:{
          slidesPerView:1,
        },
        640:{
          slidesPerView:2,
        },
        768:{
          slidesPerView:2,
        },
        1024:{
          slidesPerView:3,
        },
      },
      });



      const swiper = new Swiper(".home-silder", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
    });
