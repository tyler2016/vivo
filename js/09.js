$(function() {
    $(".prod-list .prod-item img").css("position", "relative"), $(".prod-list .prod-item").hover(function() {
        $(this).find("img:eq(0)").stop(!0, !0).animate({
            top: -15
        }, 500)
    }, function() {
        $(this).find("img:eq(0)").stop(!0, !0).animate({
            top: 0
        }, 300)
    })
});