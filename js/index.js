$(document).ready(function () {
    //CARRUSELL
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        items: 2,
        autoplay: false,
        autoplayTimeout: 2500,
        smartSpeed: 800,
        dots: false,
        responsive: {
            0: { items: 2 },
            576: { items: 3 },
            768: { items: 5 },
            992: { items: 6 },
            1200: { items: 7 }
        }
    });
    //CLICK ITEM DEL CARRUSEL
    $(document).on('click', '.owl-item', function() {
        owlIndex = $(this).index();
        count = document.querySelectorAll(".owl-item.active").length;
        $('.owl-stage-outer').trigger('to.owl.carousel', owlIndex - count );
      });

      $("nav .nav-link").on("click", function(){
        $("nav").find(".active").removeClass("active");
        $(this).addClass("active");
      });


    /** BOTON DARKMODE*/
    document.getElementById("darkToggle").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

   

});