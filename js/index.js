$(document).ready(function () {
    $('.btn_menu').click(function () {
        $('#myDropdown').fadeToggle()
    })

    $(window).scroll(function () {
        console.log($(window).scrollTop())

        if ($(window).scrollTop() >= 200) {
            $('.gotop').fadeIn(200)
        } else {
            $('.gotop').fadeOut(200)
        }
        if ($(window).scrollTop() >= 1300) {
            $('#mainHeader').addClass('down')
        } else {
            $('#mainHeader').removeClass('down')
        }
    })
    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html,body').stop().animate({
            scrollTop: 0
        }, 500)
    })


    $('.quick_menu_nav li').click(function (e) {
        e.preventDefault(); // 링크 이동 방지

        // 모든 탭 비활성화
        $('.quick_menu_nav li').removeClass('active');

        // 클릭한 탭 활성화
        $(this).addClass('active');

        // z-index 조정 (활성화 탭이 가장 앞으로 오도록)
        $('.quick_menu_nav li').not(this).css('z-index', '1');
        $(this).css('z-index', '2');
    });
});

// 모바일

$('.mb_quick_menu_nav li').click(function (e) {
    e.preventDefault(); // 링크 이동 방지

    // 모든 탭 비활성화
    $('.mb_quick_menu_nav li').removeClass('active');

    // 클릭한 탭 활성화
    $(this).addClass('active');

    // z-index 조정 (활성화 탭이 가장 앞으로 오도록)
    $('.mb_quick_menu_nav li').not(this).css('z-index', '1');
    $(this).css('z-index', '2');
});

document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.mb_quick_menu_nav li');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // 모든 메뉴 항목 비활성화
            menuItems.forEach(i => {
                i.classList.remove('active');
                i.style.backgroundColor = 'rgba(0, 0, 0, .4)';
                i.querySelector('a').style.color = 'white';
                i.querySelector('a').style.fontWeight = '400';
            });

            // 클릭한 항목 활성화
            this.classList.add('active');
            this.style.backgroundColor = 'white';
            this.querySelector('a').style.color = '#313F4F';
            this.querySelector('a').style.fontWeight = '800';

            // 모든 탭 내용 숨기기
            document.querySelectorAll('.mb_tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // 해당 탭 내용 보이기
            const tabIndex = Array.from(menuItems).indexOf(this) + 1;
            document.getElementById(`mb_content${tabIndex}`).classList.add('active');
        });
    });
});

//데탑


document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.quick_menu_nav li');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // 모든 메뉴 항목 비활성화
            menuItems.forEach(i => {
                i.classList.remove('active');
                i.style.backgroundColor = 'rgba(0, 0, 0, .4)';
                i.querySelector('a').style.color = 'white';
                i.querySelector('a').style.fontWeight = '400';
            });

            // 클릭한 항목 활성화
            this.classList.add('active');
            this.style.backgroundColor = 'white';
            this.querySelector('a').style.color = '#313F4F';
            this.querySelector('a').style.fontWeight = '800';

            // 모든 탭 내용 숨기기
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // 해당 탭 내용 보이기
            const tabIndex = Array.from(menuItems).indexOf(this) + 1;
            document.getElementById(`content${tabIndex}`).classList.add('active');
        });
    });
});

$(document).ready(function () {
    // 햄버거 메뉴 클릭
    $('.hamburger').click(function () {
        $(this).toggleClass('active');
        $('.mobile-menu').slideToggle(300);
    });

    // 모바일 메뉴 아이템 클릭
    $('.mobile-nav-item > a').click(function (e) {
        if ($(window).width()) {
            e.preventDefault();
            $(this).siblings('.mobile-dropdown-menu').slideToggle(300);
            $(this).parent().siblings().find('.mobile-dropdown-menu').slideUp(300);
        }
    });
});