$(document).ready(function() {
    $('.slide__parent').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        waitForAnimate: false,
        slidesToScroll: 1, 
      });

           // Кнопка наверх:
    $(window).scroll(function() {
      if($(this).scrollTop() != 0)
          $("#toTop").fadeIn();
      else
          $("#toTop").fadeOut();
  });
  
      $("#toTop").click(function() {
          $('body, html').animate({
              scrollTop:0
          }, 700);
      });
    });


  // Burger menu:

  let burgerMenu = document.querySelector('.burger__menu');
  let leftMenu = document.querySelector('.menu__left');
  let closeMenu = document.querySelector('.close__menu__btn');

  burgerMenu.onclick = function() {
    leftMenu.classList.add('open__menu');
    leftMenu.classList.remove('close__menu');
    burgerMenu.style.visibility = 'hidden';
  }

  closeMenu.onclick = function() {
    leftMenu.classList.add('close__menu');
    leftMenu.classList.remove('open__menu');
    burgerMenu.style.visibility = 'visible';
  }
