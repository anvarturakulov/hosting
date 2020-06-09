
$(function(){
    // $('.btn').on('click',function(){
    //     document.getElementById('input_login').value = "";
    // });
    
    // $('.menu__btn').on('click',function(){
    //   $('.header__menu').slideToggle();
    // });

    $(".testimonials__inner").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows:false,
        // responsive: [
        //   {
        //     breakpoint: 920,
        //     settings: {
        //       arrows:false
        //     }
        //   }
        // ]
      });

      
    var output1 = $('.customer'),
    timer1 = null,
    start1 = 0,
    end1 = 20;
  
    timer1 = setInterval(function(){
        output1.text(++start1 + '');
        if(start1 >= end1){
            clearInterval(timer1);
        }
    },1000);
      
    
    var output2 = $('.registred'),
    timer2 = null,
    start2 = 0,
    end2 = 75;
  
    timer2 = setInterval(function(){
        output2.text(++start2 + '');
        if(start2 >= end2){
            clearInterval(timer2);
        }
    },900);

    var output3 = $('.center'),
    timer3 = null,
    start3 = 0,
    end3 = 10;
  
    timer3 = setInterval(function(){
        output3.text(++start3 + '');
        if(start3 >= end3){
            clearInterval(timer3);
        }
    },1100);

    var output4 = $('.staff'),
    timer4 = null,
    start4 = 0,
    end4 = 521;
  
    timer4 = setInterval(function(){
        output4.text(++start4 + '');
        if(start4 >= end4){
            clearInterval(timer4);
        }
    },700);

    var output5 = $('.available'),
    timer5 = null,
    start5 = 0,
    end5 = 60;
  
    timer5 = setInterval(function(){
        output5.text(++start5 + '');
        if(start5 >= end5){
            clearInterval(timer5);
        }
    },800);

    
    var output6 = $('.support'),
    timer6 = null,
    start6 = 0,
    end6 = 24;
  
    timer6 = setInterval(function(){
        output6.text(++start6 + '');
        if(start6 >= end6){
            clearInterval(timer6);
        }
    },1200);
    
    
});
