jQuery(document).ready(function($){
    if(jQuery().jcarousel) {
        // Featured Carousel - Horizontal 
        $(window).bind('load resize', function(){
            
            $('.fcarousel-6').deCarousel();
            $('.fcarousel-5').deCarousel();
        });
        // games carousel
        $('.jcarousel').jcarousel({
            wrap: 'circular'
        });
        $('.jcarousel').jcarouselAutoscroll({
        target: '+=3',
        interval: 4000,
        autostart: true
        });
            
        // Featured Carousel - Vertical 
        $('.carousel-clip').jcarousel({
            vertical: true,
            wrap: 'circular'
        });
        $('.carousel-prev').jcarouselControl({target: '-=4'});
        $('.carousel-next').jcarouselControl({target: '+=4'});
    }
    });
    