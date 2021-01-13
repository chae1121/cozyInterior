//비주얼영역 이미지 슬라이드
var slideIndex = 0;

 $(function(){
    //비주얼영역 이미지 슬라이드 호출
    autoSlides();
     
    //새로고침시 스크롤 맨위로
    $('html,body').animate({scrollTop:0},500);

    // 초기화면 - 모달 페이지 숨김
	$('.modal').hide();

    // 모달 메뉴버튼 클릭시 모달창 보이기
    $('.nav_modal_btn').click(function(){
        $('.modal').show();
    });
    
    //모달 메뉴 닫기버튼 클릭시 모달창 닫기
    $('.modal_closebtn').click(function(){
        $('.modal').hide();
    });
	//모달 메뉴창의 메인메뉴 버튼 클릭시 서브메뉴 보이기
 	$('.modal_main_menu_btn').click(function(){
 		$('.hide').slideUp('fast');
 		$(this).next().slideDown('fast');
 		$('.modal_main_menu_btn').removeClass('on');
 		$(this).addClass('on');
 	});

 	//헤더영역
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
	 
	 // 페이지상세보기 클릭시 전체 모달창 보이기
	$('.homeimg, .commerimg').on('click',function(){
		$(this).next('.modal_con').show();
	});

	//닫기
	$('.modal_detail_close').click(function(){
		$('.modal_con').css('display','none');
	});
 });


// 비주얼 영역 이미지 슬라이드 함수
function autoSlides(){
	var i;
	var slides=document.getElementsByClassName("image_slide");
	var dots=document.getElementsByClassName("dot");

	for(i=0; i<slides.length; i++){
		slides[i].style.display="none";
	}
	for(i=0; i<dots.length; i++){
		dots[i].className=dots[i].className.replace(" active","");
	}
	slideIndex++;
	if(slideIndex>slides.length){
		slideIndex=1;
	}

	slides[slideIndex-1].style.display="block";
	dots[slideIndex-1].className+=" active";
	setTimeout(autoSlides,3000);
}



