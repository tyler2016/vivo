$(function() {
    function t(t) {
        this.option = $.extend({
            items: null,
            thumbs: null,
            interval: 3
        }, t), t.items && t.items.length > 1 && (this.size = t.items.length, this.init())
    }
    $.extend(t.prototype, {
        init: function() {
            this.createThumbs(), this.handleEvents(), this.option.thumbs.eq(0).trigger("mouseenter", !0)
        },
        createThumbs: function() {
            for (var t = 0; t < this.size; t++) $("#j_bannerIndicator").append("<span/>");
            this.option.thumbs = $("#j_bannerIndicator span")
        },
        handleEvents: function() {
            var t = !1,
                i = this;
            this.option.thumbs && this.option.thumbs.hover(function(n, e) {
                var s = this;
                return t = !0, clearTimeout(i.autoTimeOut), $(this).hasClass("on") ? !1 : ($(s).siblings(".on").removeClass("on"), $(s).addClass("on"), void i.switchTo($(s).index(), e))
            }, function() {
                i.autoTimeOut = setTimeout(function() {
                    i.next()
                }, 1e3 * i.option.interval)
            }), this.option.items.hover(function() {
                clearTimeout(i.autoTimeOut)
            }, function() {
                i.autoTimeOut = setTimeout(function() {
                    i.next()
                }, 1e3 * i.option.interval)
            })
        },
        switchTo: function(t, i) {
            var n = this;
            this.option.items.stop(!0, !0).css({
                zIndex: 1
            }).eq(t).css({
                zIndex: 9,
                opacity: 0,
                display: "block"
            }).animate({
                opacity: 1
            }, 500, function() {
                $(this).addClass("instage").siblings().hide().removeClass("instage")
            }), this.index = t, i && (this.autoTimeOut = setTimeout(function() {
                n.next()
            }, 1e3 * n.option.interval))
        },
        next: function() {
            this.option.thumbs.eq((this.index + 1) % this.size).trigger("mouseenter", !0)
        }
    }), new t({
        items: $("#j_HomeBanner .banner-item"),
        interval: 10
    })
});