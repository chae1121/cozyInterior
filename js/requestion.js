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

//견적신청버튼 클릭시 유효성 검사
function checkAll(){
    var userName=document.getElementById('username');
    var userMail=document.getElementById('useremail');
    var userPhone=document.getElementsByClassName('phone_text');
    var userAddress=document.getElementById('cenaddress');
    var userDate=document.getElementById('userdate');

    if(userName.value == ''){
        alert('이름을 입력해주세요');
        return false;
    }else if(userMail.value == ''){
        alert('이메일을 입력해주세요');
        return false;
    }else if(userPhone.value == ''){
        alert('휴대폰번호를 입력해주세요');
        return false;
    }else if(userAddress.value == ''){
        alert('공사현장 주소를 입력해주세요');
        return false;
    }else if(userDate.value == ''){
        alert('공사예정일을 입력해주세요');
        return false;
    }else{
        alert('견적신청이 완료되었습니다. 확인후 연락드리겠습니다');
        history.back();
    }
}



