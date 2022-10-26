$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        animateOut: 'fade',
        center: true,
        items: 2,
        loop: true,
        margin: 5,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $(document).on('click', '.owl-item', function() {
        owlIndex = $(this).index();
        count = document.querySelectorAll(".owl-item.active").length;
        $('.owl-stage-outer').trigger('to.owl.carousel', owlIndex - count );
      });

      $("nav .nav-link").on("click", function(){
        $("nav").find(".active").removeClass("active");
        $(this).addClass("active");
     });

   

});