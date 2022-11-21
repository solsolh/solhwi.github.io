   /*mainVisual swiper*/
   $(function () {
       var swiper = new Swiper(".mainSlide", {
           speed: 1000,
           spaceBetween: 0,
           centeredSlides: true,
           loop: true,
           loopFillGroupWithBlank: true,
           autoplay: {
               delay: 5000,
               disableOnInteraction: false,
           },
           pagination: {
               el: ".swiper-pagination",
               clickable: true,
           },
           navigation: {
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev",
           },
       });
   });

   /*news swiper web*/
   $(function () {
       if (matchMedia("screen and (min-width: 1024px)").matches) {
           var swiper = new Swiper(".newsBox", {
               slidesPerView: 4,
               spaceBetween: 0,
               slidesPerGroup: 1,
               loop: true,
               loopFillGroupWithBlank: true,
               /* pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },*/
               navigation: {
                   nextEl: ".NextNews-btn",
                   prevEl: ".PrevNews-btn",
               },
           });
       };
   });
/*news swiper mobile*/
$(function () {
       if (matchMedia("screen and (max-width: 700px)").matches) {
           var swiper = new Swiper(".newsBox", {
               slidesPerView: 1,
               spaceBetween: 0,
               slidesPerGroup: 1,
               loop: true,
               loopFillGroupWithBlank: true,
               /* pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },*/
               navigation: {
                   nextEl: ".NextNews-btn",
                   prevEl: ".PrevNews-btn",
               },
           });
       };
   });
   /*products swiper web*/
   $(function () {
       if (matchMedia("screen and (min-width: 1024px)").matches) {
       var swiper = new Swiper(".productBox", {
           slidesPerView: 3,
           spaceBetween: 0,
           slidesPerGroup: 1,
           loop: true,
           loopFillGroupWithBlank: true,
           navigation: {
               nextEl: ".NextPro-btn",
               prevEl: ".prevPro-btn",
           },
       });
       };
   });
/*products swiper mobile*/
$(function () {
       if (matchMedia("screen and (max-width: 700px)").matches) {
       var swiper = new Swiper(".productBox", {
           slidesPerView: 1,
           spaceBetween: 0,
           slidesPerGroup: 1,
           loop: true,
           loopFillGroupWithBlank: true,
           navigation: {
               nextEl: ".NextPro-btn",
               prevEl: ".prevPro-btn",
           },
       });
       };
   });


   //sub-menu 
   $(function () {
       $("#gnb").on('mouseover', function () {
           $(this).siblings(".sub-menu").show();
           $(this).find("a").addClass("on");
       });
       $(".sub-menu").on('mouseleave', function () {
           $(this).hide();
           $(this).find("a").removeClass("on");
       });
   });



   //헤더 스크롤시 배경 변화
   $(function () {
       $(window).on('scroll', function () {
           if ($(window).scrollTop() > 50) {
               $('#main-header').addClass('active');
           } else {
               $('#main-header').removeClass('active');
           }
       })

   });

   //스크롤시 나타나는 버튼 + 맨 위로 올라가는 버튼
   $(function () {
       $(window).scroll(function () {
           if ($(window).scrollTop() > 600) {
               $('.scroll-btn').fadeIn();
           } else {
               $('.scroll-btn').fadeOut();
           }
       });

       $('.scroll-btn').click(function () { //위로가기 버튼을 클릭했을때
           $('html, body').animate({
               scrollTop: '0'
           }, 800);
       });
   });
