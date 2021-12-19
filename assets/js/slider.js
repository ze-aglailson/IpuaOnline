/* Arquivo de configuração dos sliders */
$(document).ready(function(){
    
    $("#slider-principal").owlCarousel({
        items:1,
        loop:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:4500,
        margin:1
    });

    $("#slider-eventos").owlCarousel({
        items:2,
        loop:true,
        dots:false,
        margin:5
    });

})