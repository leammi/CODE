$(document).ready(function(){
    $('.pres-eqp').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1677,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint:900,
        settings:{
          slidesToShow: 1
        }
      }
    ]
    });
  });