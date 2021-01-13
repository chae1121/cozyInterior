// 인테리어 상담신청버튼 유효성 검사
window.onload=function(){
	var signUp = document.querySelector('.submit_btn');

	signUp.addEventListener('click',function(){
		var userCheckN=document.querySelector('#username');
		var userCheckP=document.querySelector('#userphone');
		var userCheckM=document.querySelector('#usermassage');

		// 필수항목 미입력시 안내문구 삽입
		if(userCheckN.value == "" || userCheckP.value == "" || userCheckM.value == ""){
			document.querySelector("#alertmassge").innerHTML = "* 필수항목을 모두 입력해주세요.";
		}else{
			document.querySelector("#alertmassge").innerHTML = "";
		}
	});
}



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
	 
	 // 아티클 - 탭메뉴 클릭
	 $('#contents_menu>ul>li').on('click',function(){
		 $('#contents_menu>ul>li').css({'background':'none','color':'#000'});
		 $(this).css({'background':'#212121','color':'#fff'});
		no=$(this).index()+1;
		$('.at_box').css({'display':'none'});
		$('#at'+no).css({'display':'block'});
	 });

	 $(document).ready(function(){
		$('#menu1').trigger('click');
	 });
	 


 });

 

 