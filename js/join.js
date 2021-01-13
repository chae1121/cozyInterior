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

//회원가입 유효성 검사 함수
function checkForm(){
    // 유효성 정규화 공식
    var idJ = /^[a-z0-9]{4,12}$/;//id
    var pwJ = /^[A-Za-z0-9]{4,12}$/; //pw
    var phoneJ = /^01([0|1|6|7|8|9]?)?([0-9]{3,4})?([0-9]{4})$/; //휴대폰

    //아이디 공백 확인 
    if($("#id").val() == ""){ 
        alert("아이디를 입력하세요");
        $("#id").focus(); 
        return false; 
    }
    //아이디 유효성검사 
    else if(!idJ.test($("#id").val())){
        alert("아이디를 형식에 맞게 입력해주세요.");
        $("#id").val(""); 
        $("#id").focus();
        return false; 
    } 
    //비밀번호 공백 확인 
    else if($("#paspw1sword").val() == ""){ 
        alert("패스워드를 입력하세요");
        $("#pw1").focus(); 
        return false; 
    } 
    //아이디 비밀번호 같음 확인 
    else if($("#id").val() == $("#pw1").val()){ 
        alert("아이디와 패스워드가 같습니다.");
        $("#pw1").val(""); 
        $("#pw1").focus(); 
        return false; 
    } 
    //비밀번호 유효성검사 
    else if(!pwJ.test($("#pw1").val())){ 
        alert("패스워드를 형식에 맞게 입력하세요");
        $("#pw1").val(""); 
        $("#pw1").focus(); 
        return false; 
    } 
    //비밀번호 확인란 공백 확인 
    else if($("#pw2").val() == ""){ 
        alert("패스워드를 확인해주세요.");
        $("#pw2").focus(); 
        return false; 
    } 
    //비밀번호 서로확인 
    else if($("#pw1").val() != $("#pw2").val()){ 
        alert("패스워드가 상이합니다.");
        $("#pw1").val(""); 
        $("#pw2").val(""); 
        $("#pw2").focus(); 
        return false; 
    }
    //휴대폰 입력확인 
    else if($("#userPhone").val() == ""){ 
        alert("휴대폰번호를 입력하세요."); 
        $("#userPhone").focus(); 
        return false; 
    }
    //휴대폰번호 유효성검사
    else if(!phoneJ.test($('#userPhone').val())){
        alert("휴대폰번호가 유효하지 않습니다.");
        $("#userPhone").val("");
        $("#userPhone").focus(); 
        return false; 
    }
    else{
        alert("회원가입이 완료되었습니다.");
        history.back;
        return true;
    }
}