$ (function(){
   //버튼메뉴 클릭시
    $('.btnMenu').on('click', function(){
        $(this).fadeOut();
        $('nav').addClass('on');
        $('section').addClass('on');
    });
    
    //nav 영역 구성요소 인터렉션
    $('.gnb li').on('click', function(){
       $('.btnMenu').fadeIn();
        $('nav').removeClass('on');
        $('section').removeClass('on');
        
        var i = $(this).index();
        //alert(i);
        $('section > div').removeClass('on');
        $('section > div').eq(i).addClass('on');
    });
});