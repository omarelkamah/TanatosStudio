$(document).ready(function () {

    // height for the header
    $("header").height($(window).height());

    $("header .info").css("paddingTop", ($(window).height() - $("header .info").height()) / 2);

    $(window).on("resize", function () {
        $("header").height($(window).height());
        $("header .info").css("paddingTop", ($(window).height() - $("header .info").height()) / 2);
    });

    function goTo(selector, selectorWhoGoto, speed) {
        selector.on("click", function () {
            $("html, body").animate({
                scrollTop : selectorWhoGoto.offset().top + 1
            }, speed);
        });
    }
    goTo($("header .chevron span"), $(".servises"), 1000); // on click chevrom button in header go to the servises
    goTo($("header button.button-our-work"), $(".our-works"), 1000); // on click in the our work button
    goTo($("header button.hire-us"), $(".contact"), 2000); // on click the hire us button in the header


    // on hover the img in the protofolio
    $(".our-works .item").hover(function () {
        $(this).find(".over").fadeIn(400);
    }, function () {
        $(this).find(".over").fadeOut(400);
    });

    // show more photos whin click in the button "show more"
    $(".our-works .button-show button").on("click", function (event) {
        event.preventDefault();
        $(".our-works .hidden").fadeToggle(1000);
    });


    // create slider in the testimonials
    var rightChevron = $(".testimonials .fa-chevron-right"),
        leftChevron = $(".testimonials .fa-chevron-left");

    function check() {
        var activeClass = $(".testimonials .active");

        if (activeClass.is(":first-of-type")) {
            leftChevron.fadeOut(100);
        } else {
            leftChevron.fadeIn();
        }

        if (activeClass.is(":last-of-type")) {
            rightChevron.fadeOut(100);
        } else {
            rightChevron.fadeIn()
        }
    }
    check();

    rightChevron.on("click", function () {
        $(".testimonials .active").fadeOut(1000, function () {
            $(this).removeClass("active").next().addClass("active").fadeIn(1000);
            check();
        });
    });

    leftChevron.on("click", function () {
        $(".testimonials .active").fadeOut(1000, function () {
            $(this).removeClass("active").prev().addClass("active").fadeIn(1000);
            check();
        });
    });


    // triggre nicescroll
    $("html").niceScroll({
        cursorborder: 0,
        cursorcolor: "#f7600e",
        cursorwidth: "10px"
    })
});