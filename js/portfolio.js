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

	 // contents 스크롤시 다음 앨리먼트가 아래에서 펼쳐지는 효과
	 $(window).scroll( function(){
        $('.fadeInButtom').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			var winW = $(window).width();

			if(winW>=863 && bottom_of_window > bottom_of_element){
				$(this).animate({'opacity':'1','margin-bottom':'0px'},1000);
			} else if(winW<=863 && bottom_of_window < bottom_of_element){
				$(this).animate({'opacity':'1','margin-bottom':'0px'},1000);
			}
            
        }); 
    });
	
	// 탭메뉴 클릭  이벤트
	$('#content_first>ul>li').click(function(){
		// 클릭된 탭의 배경색 적용하기
		$('#content_first>ul>li').css({'background':'none','color':'#000'});
		$(this).css({'background':'#212121','color':'#fff'});
		// 탭 클릭시 해당 아티클 페이지 보이기
		no=$(this).index()+1;
		$('.at_box').css({'display':'none'});
		$('#at'+no).css({'display':'block'});
	});

	// 페이지 오픈되자마자 아티클1 보이기
	$(document).ready(function(){
		$('#tab_menu1').trigger('click');
	 });

	// 포트폴리오 이미지를 클릭하면 모달창으로 상세내용 보이기
    $('.fadeInButtom>li').click(function(){
		$(this).next('.modal_con').show();
	 });
	// 포트폴리오 모달 x버튼 눌러서 창닫기
	$('.modal_detail_close').click(function(){
		$('.modal_con').css('display','none');
	});


 });





