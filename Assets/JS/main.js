//Header scroll//
let nav = document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop > 100){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled"); 
    }
}

// nav hide

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
      navCollapse.classList.remove("show");
    })
})








//Top Destination place owl carousel

$(document).ready(function() {
    $('#destination_slider').owlCarousel({
      loop: true,
      nav: false,
      autoplay: true,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          margin: 0
        },
        768: {
          items: 3,
          margin: 30
        },
        991: {
          items: 3,
          margin: 30
        },
        992: {
          items: 4,
          margin: 30
        }
      }
    })
  })
  

  //Popular Tour Packages owl carousel

$(document).ready(function() {
    $('#tourpackages_slider').owlCarousel({
      loop: true,
      nav: false,
      autoplay: true,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          margin: 0
        },
        768: {
          items: 3,
          margin: 30
        },
        991: {
          items: 3,
          margin: 30
        },
        992: {
          items: 4,
          margin: 30
        }
      }
    })
  })

  //ourservice slider

  $(document).ready(function() {
    $('#ourservices_slider').owlCarousel({
      loop: true,
      nav: false,
      autoplay: true,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          margin: 0
        },
        768: {
          items: 2,
          margin: 30
        },
        991: {
          items: 3,
          margin: 30
        },
        992: {
          items: 3,
          margin: 30
        }
      }
    })
  })
  //ourservice slider
  
  $(document).ready(function() {
    $('#testimonial_slider').owlCarousel({
      center: true,
      loop: true,
      nav: false,
      autoplay: true,
      dots: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          margin: 0
        },
        768: {
          items: 2,
          margin: 30
        },
        991: {
          items: 3,
          margin: 30
        },
        992: {
          items: 3,
          margin: 30
        }
      }
    })
  })


//Gallery Filter 

  document.querySelectorAll('.filter-button').forEach(button => { //filter-button is the class name of the buttons, and we are selecting all of them. 
    button.addEventListener('click', () => {//adding an event listener to each button. 
        const filter = button.dataset.filter; //filter is the name of the variable that we are using to represent the data-filter attribute of each button. dataset is the data attribute of the button, and filter is the name of the data attribute.

        // Remove 'active' class from all buttons
        document.querySelectorAll('.filter-button').forEach(btn => {
            btn.classList.remove('active');
        });

        // Add 'active' class to the clicked button. 
        button.classList.add('active');

        document.querySelectorAll('.gallery-item').forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block'; //block is the display property of the item.
            } else {
                item.style.display = 'none'; //none is the display property of the item. 
            }
        });
    });
});
  

//
var btn = $('#topbtn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});




//Thanks modal

let popup =document.getElementById(".popup");

function openpopup(){
  popup.classList.add("openpopup");
}
function closepopup(){
  popup.classList.remove("closepopup");
}
