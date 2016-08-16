var VIVO_UI = {};
window.jQuery && ! function(n) {
    VIVO_UI.mask = function() {
        n("body > .mask").length || n("body").append("<div class='mask'></div>"), n("body > .mask").show()
    }, VIVO_UI.unmask = function() {
        n("body > .mask").hide()
    }, VIVO_UI.middle = function(n) {
        n && n.length && n.css({
            top: "50%",
            "margin-top": -(n.outerHeight() / 2)
        })
    }, VIVO_UI.HighLightNav = function(t) {
        n("#navigator > ul li").removeClass("current").eq(t).addClass("current")
    }, VIVO_UI.HighLightMyCenterNav = function(t) {
        n(".menu-bar .menu-item a").each(function(i, o) {
            return n.trim(n(o).text()) === t ? (n(this).parent().addClass("on"), !1) : void 0
        })
    }
}(window.jQuery), $(function() {
    ! function() {
        var n = $("#header"),
            t = n.find(".head-search"),
            i = t.find("input"),
            o = $("#j_SearchTrigger"),
            a = t.find("a.close"),
            e = !0;
        o.on("click", function() {
            return e ? (t.slideDown(300), i.focus().val(""), e = !1) : t.stop().slideUp(300, function() {
                $(this).css({
                    display: "none"
                }), e = !0
            }), !1
        }), a.on("click", function() {
            return o.click(), !1
        }), $("#j_UserMenuTrigger").hover(function() {
            $(this).find(".user-menu").show()
        }, function() {
            $(this).find(".user-menu").hide()
        })
    }(),
    function() {
        var n = $("#header .wrapper").width();
        $("#airbox").css({
            marginLeft: n / 2 + 20 + "px"
        }), $(window).on("scroll", function() {
            var n = $(window).scrollTop();
            n > 500 ? $("#j_GoTop").is(":hidden") && $("#j_GoTop").fadeIn("fast") : $("#j_GoTop").fadeOut("fast")
        }), $("#j_GoTop").on("click", function() {
            $(document.body).animate({
                scrollTop: 0
            }, 500), $(document.documentElement).animate({
                scrollTop: 0
            }, 500)
        })
    }(),
    function() {
        $(".pagination .j_go").length && $(".pagination .j_go").on("click", function() {
            var n = $(this).attr("data-url"),
                t = $(this).attr("data-total"),
                i = $(this).parent().find("input").val();
            i && /^\d+$/.test(i) && parseInt(i) <= t && (location.href = n.replace("PAGENUM", i))
        })
    }(), $("img[data-src]").length && $.fn.lazyload && $("img[data-src]").lazyload({
        data_attribute: "src"
    })
});