//menu-
$(function () {
    $(".gnb").on('mouseover', function () {
        $(this).siblings(".gnb-2depth").slideDown('500');
        $('.matt-01').css("display", "block");
        $(this).find("a").addClass("on");
    });
    $(".gnb-2depth").on('mouseleave', function () {
        $(this).slideToggle('500');
        $(this).find("a").removeClass("on");
    });
});
//menu-gnb-3depth
$(function () {
    $('.matt').on('mouseover', function () {
        $('.matt-01').css("display", "block").show();
         $(this).find("a").addClass("on");
    });
    $('.matt').on('mouseleave ', function () {
        $('.matt-01').css("display", "none");
    });
    $('.frame').on('mouseover', function () {
        $('.frame-01').css("display", "block");
    });
    $('.frame').on('mouseleave', function () {
        $('.frame-01').css("display", "none");
    });
     $('.pillow').on('mouseover', function () {
        $('.pillow-01').css("display", "block");
    });
    $('.pillow').on('mouseleave', function () {
        $('.pillow-01').css("display", "none");
    });
});




//맨위로 가기 
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 600) {
            $('.topup-btn').fadeIn();
        } else {
            $('.topup-btn').fadeOut();
        }
    });
    $('.topup-btn').click(function () {
        $('html, body').animate({
            scrollTop: '0'
        }, 800);
    });

    //로그인 팝업창 
    $("#login").click(function (event) { //팝업 Open 버튼 클릭 시 

        $(".member-login").css({
            "top": (($(window).height() - $(".member-login").outerHeight()) / 2 + $(window).scrollTop()) + "px",
            "left": (($(window).width() - $(".member-login").outerWidth()) / 2 + $(window).scrollLeft()) + "px"
            //팝업창을 가운데로 띄우기 위해 현재 화면의 가운데 값과 스크롤 값을 계산하여 팝업창 CSS 설정

        });

        $(".popup-mask").css("display", "block"); //팝업 뒷배경 display block
        $(".member-login").css("display", "block"); //팝업창 display block

        $("body").css("overflow", "hidden"); //body 스크롤바 없애기
    });

    $("#close").click(function (event) {
        $(".popup-mask").css("display", "none"); //팝업창 뒷배경 display none
        $(".member-login").css("display", "none"); //팝업창 display none
        $("body").css("overflow", "auto"); //body 스크롤바 생성
    });


});
