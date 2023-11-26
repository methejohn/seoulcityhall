$('#langBtn').click(function(){
  url=$('#langList').val();
  window.open(url);
})


const mainSlide1 = new Swiper(".news-slide", {
  loop: true,
  speed: 700,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });


const mainSlide2 = new Swiper(".citizen-slide", {
    loop: true,
    speed: 700,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
      },
  
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });


const bannerSlide = new Swiper(".banner-slide", {
  spaceBetween: 43,
  slidesPerView: 3,
  loop: true,
  speed: 700,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });



  $('.sc-visual .group-tab button').click(function(){
    tabClass=$(this).data('tab')


    $(this).addClass('on').siblings().removeClass('on');
    $('.sc-visual .swiper').removeClass('on');
    $(tabClass).addClass('on');


    if (tabClass === '.news-slide') {
      if ($(tabClass).find('.btn-autoplay').hasClass('on')) {
        mainSlide1.autoplay.stop();
      } else{
        mainSlide1.autoplay.start();
      }
      
    } else {
      if ($(tabClass).find('.btn-autoplay').hasClass('on')) {
        mainSlide2.autoplay.stop();
      } else{
        mainSlide2.autoplay.start();
      }
    }


  })

  slideArr = [mainSlide1,mainSlide2,bannerSlide]

  $('.swiper .btn-autoplay').click(function(){
    idx = $(this).data('slide');

    if ($(this).hasClass('on')) {
      slideArr[idx].autoplay.start();

    } else {
      slideArr[idx].autoplay.stop();
    }

    $(this).toggleClass('on');
  })


  $('.sc-gov .btn-gov').click(function(){

    // $(this).toggleClass('on').find('.direct-wrap').slideToggle();

    if ($(this).hasClass('on')) {

      slideClose();
    } else {
      slideClose();
      $(this).addClass('on').siblings('.direct-wrap').slideDown();
    }
    
  }) //하단 토글 슬라이드 메뉴

$('.sc-gov .direct-item:first-child').keydown(function(e){
  key = e.key;
  if (key === 'Tab' && e.shiftKey) {
    slideClose();
  }


})
$('.sc-gov .direct-item:last-child').keydown(function(e){
  key = e.key;
  if (key === 'Tab' && !e.shiftKey) {
    slideClose();
}
})


function slideClose(){
  $('.sc-gov .btn-gov').removeClass('on').siblings('.direct-wrap').slideUp();
}

$(document).click(function(e){
  console.log($('.sc-gov').has(e.target).length);
  if(!$('.sc-gov').has(e.target).length){
    slideClose();
  }

})

$(window).scroll(function(){
  curr = $(this).scrollTop();
  if (curr>=20) {
    $('.btn-top').addClass('show');
  } else{
    $('.btn-top').removeClass('show');
  }
})
$('.btn-top').click(function(){
  window.scrollTo({top:0,behavior:"smooth"});
})






