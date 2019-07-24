// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.navbar').hasClass('open-nav')) {
        $('.navbar').removeClass('open-nav');
    } else {
        $('.navbar').addClass('open-nav');
    }
});

$(".mobile-toggle").click(function () {
$(this).toggleClass("active");
});

$('.navbar li a').click(function() {
    if ($('.navbar').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.navbar').removeClass('open-nav');
    }
});

$("iframe").on("load", function(){
    try {
        $(this).height(0);
        $(this).height(this.contentWindow.document.documentElement.scrollHeight);
    } catch (e) {
    }
});
$("iframe").trigger("load");