//active class

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("nav");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

// navbar epek
var lastScrollTop = 0;
var navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px"; 
    } else {
        navbar.style.top = "0"; 
    }

    lastScrollTop = scrollTop;
});


// end navbar epek



// container

  document.addEventListener("DOMContentLoaded", function () {
    var containerPanel = document.querySelector(".container-panel");

    window.addEventListener("scroll", function () {
      if (isScrolledIntoView(containerPanel)) {
        containerPanel.classList.add("visible");
      }
    });

    function isScrolledIntoView(element) {
      var rect = element.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom;

      // Only completely visible elements return true
      var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
      return isVisible;
    }
  });

//  end container


// slide show
var slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slide");
        if (n > slides.length)
        {
          slideIndex = 1;
        }
        if (n < 1)
        {
          slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++)
        {
          slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
      };
    //   end slideshow
