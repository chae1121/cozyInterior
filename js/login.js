$(function(){

    //새로고침시 스크롤 맨위로
    $('html,body').animate({scrollTop:0},500);

    // 모달 페이지 숨김
	$('.modal').hide();

    // 모달 메뉴버튼 클릭시 모달창 보이기
    $('.nav_modal_btn').click(function(){
        $('.modal').show();
    });
    
    //모달 메뉴 닫기버튼 클릭시 모달창 닫기
    $('.modal_closebtn').click(function(){
        $('.modal').hide();
    });

    //모달 메뉴 클릭시 하단 서브메뉴 펼쳐지는 효과
    $('.modal_main_menu_btn').click(function(){
        $('.hide').slideUp('fast');
        $(this).next().slideDown('fast');
        $('.modal_main_menu_btn').removeClass('on');
        $(this).addClass('on');
    });

    //navbar에서 서브메뉴 드롭다운
    $('.sub_menu').hide();
    $('.top_menu').hover(function(){
        $(this).find('.sub_menu').stop(true,true).slideDown(200);
    },function(){
        $(this).find('.sub_menu').stop(true,true).slideUp(200);
    });

    // top버튼 클릭시 맨위로 이동
    $('.top').on('click',function(){
        $('html,body').stop().animate({scrollTop:0},1000);
    });
  
});