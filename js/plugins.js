// function my() {

//     //    var country = "idleb";
//     country = "idleb";
// }
// my();
// console.log(country)



// shufel from me

// $(function () {
//     $(".buttons ul li").click(function () {

//         $(this).addClass("active");
//         $(this).siblings().removeClass("active")
//         let val = $(this).data("value");
//         $(".portfolio .row > div").addClass("hide")
//         $("." + val).removeClass("hide");


//     })
// })



// shufel from plugin called mixitUP

$(document).ready(function () {

    // venobox

    $('.venobox').venobox();

    // turn mixitup
    var mixer = mixitup('.median');

    // smooth scroll

    $('.navbar-nav li a').on('click', function () {

        //  one way
        // $(this).addClass('active').parent().siblings().find('a').removeClass('active')

        // second way

        $('.navbar-nav li a').removeClass('active');
        $(this).addClass('active');
        console.log($(this).data('scroll'))

        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 71
        })
    })

    $(window).scroll(function () {


        if ($(this).scrollTop() >= 100) {
            $('.btn-up').fadeIn();
        } else {
            $('.btn-up').fadeOut();
        }

    })

    $('.btn-up').click(function () {
        $('html,body').animate({
            scrollTop: 0
        })
    });


});