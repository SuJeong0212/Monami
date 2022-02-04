$(document).ready(function () {

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
            animate: 700,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    $('.stat li').hover(function () {
        $('.stat li').find('.s_txt').removeClass('stat_on');
        $(this).find('.s_txt').addClass('stat_on');
        $(this).find('p').eq(0).hide();

    }, function () {
        $('.stat li').find('.s_txt').removeClass('stat_on');
        $(this).find('p').fadeIn();
    });

    $('.ptxt_sub a').click(function () {
        //         e.preventDefault();


        $('.ptxt_sub a').removeClass('pick_on');
        $(this).addClass('pick_on');

        var href = $(this).attr('href');

        $('.pick_wrap img').attr('src', href).animate({
            'left': '700px',
            opacity: '0.5'
        }, 300).animate({
            'left': '0px',
            opacity: '1'
        }, 300);

        $('.ptxt_box').hide();


        $(this).parent().next().fadeIn();


        return false;
    });



    $('footer a').hide();

    //내비게이션 메뉴 클릭시 해당하는 컨텐츠 상단 top:58px 위치에 올라오게 하기
    $('.gnb > li').on({
        'click focus': function () {
            var num = $(this).index();
            console.log(num);

            var con = $('section #cont').eq(num).offset().top; //각 콘텐츠에 top위치값을 변수에 저장

            $('html,body').animate({
                scrollTop: con - 58
            }, 500); //각 콘텐츠 스크롤높이 58px까지 상단으로 애니메이션되면서 올라감
        }

    });

    $(window).scroll(function () {
        var sPos = $(window).scrollTop();
                //    console.log(sPos);

        if (sPos >= 700) {
            $('footer a').fadeIn();
        } else {
            $('footer a').fadeOut();
        }

        if (sPos >= 400 && sPos < 900) {
            $('.gnb-list').removeClass('on');
            $('.gnb-list').eq(0).addClass('on');
        } else if (sPos >= 901 && sPos < 1800) {
            $('.gnb-list').removeClass('on');
            $('.gnb-list').eq(1).addClass('on');
        } else if (sPos >= 1801 && sPos < 2800) {
            $('.gnb-list').removeClass('on');
            $('.gnb-list').eq(2).addClass('on');
        }else {
            $('.gnb a').removeClass('on');
        }


    });

    $('footer a').click(function () {
        $('body,html').animate({
            scrollTop: '0px'
        }, 300);
        return false;
    });




    //콘트롤 버튼에 active서식이 적용되면 글자가 나타난다.
    if ($('.swiper-slide').hasClass('swiper-slide-prev') == true) {

        var num = $(this).index();
        console.log(num);

        //숨겨졌다가 자연스럽게 나오게 한다.
        $('.m_txt').animate({
            left: '330px',
            opacity: '1'
        }, 1000);
    } else {
        $('.m_txt').hide;
    }
});