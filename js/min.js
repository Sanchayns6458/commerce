$('.owl-slider').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true,
            loop:true
        },
        600:{
            items:3,
            nav:true,
            loop:true
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    }
})
$('.feedback-slider').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:3,
        }
    }
})
  jQuery(document).ready(function($) {
    $('#counter').counterUp({
        delay: 1000,
        time: 1000
    });
});

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
        // $('.galarry .bottons button').removeClass('actives')
        // $(this).closest('button').addClass('actives')
    });
});
// var grid=$('.grid').isotope({
//     itemSelector: '.grid-item',
//     layoutMode: 'fitRows'
//   });
//   $('.filter button').on("click",function(){
//       var value=$(this).attr('data-name');
//       //console.log(value)
//      grid.isotope({ filter: value });
//      $('button').removeClass('actives')
//      $(this).closest('button').addClass('actives')
//   })
AOS.init();
setTimeout(loads,'6000')
function loads(){
document.querySelector('.loader').style.display='none'
document.querySelector('.body').style.display='block'
}