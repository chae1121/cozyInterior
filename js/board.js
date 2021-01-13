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
  

     //at1 게시판 - 만들어놓은 json 데이터 가져오기
     $.ajax({
         url:'data/BOARD_DATA.json',
         dataType:'json',
         success: function(data){
             var noticeB=$('<table></table>');
             for(var i in data){
                 var number=data[i].number;
                 var title=data[i].title;
                 var writer=data[i].writer;
                 var date=data[i].date;

                 var row=$('<tr />').append(
                    $('<td />').html(number),
                    $('<td />').html(title),
                    $('<td />').html(writer),
                    $('<td />').html(date)
                );
                noticeB.append(row);
             }
         $('#at1>.board_table').append(noticeB);
        }
     });

     //at2 FAQ 질문 클릭시 답변이 아래로 slidedown
     $('.qna_btn').click(function(){
         if($(this).next().css('display')=='none'){
            $('.hidean').slideUp(500);
         }
            $(this).next().slideDown(500);
         $('.at2_slideq').removeClass('on');
         $(this).addClass('on');
     });

     //탭메뉴 클릭
     $('#contact_list>ul>li').on('click',function(){
         //탭클릭시 배경색 적용
        $('#contact_list>ul>li').css({'background':'none','color':'#000'});
        $(this).css({'background':'#212121','color':'#fff'});
        //탭클릭시 해당 아티클 보여주기
        no=$(this).index()+1;
         $('.at_box').css('display','none');
         $('#at'+no).css('display','block');
     });

     // 페이지오픈시 at1을 강제로 실행
     $(document).ready(function(){
         $('#tab_menu1').trigger('click');
     });
});