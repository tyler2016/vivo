$(function() {
    var o = $("#pageNavMappingIndex").val();
    void 0 != o && "" != o && VIVO_UI.HighLightNav(parseInt(o));
    var e = "shop_outer_refer";
    void 0 == $.cookie(e) && $.cookie(e, encodeURI(document.referrer || window.location.href).substr(0, 255), {
        domain: document.domain,
        path: "/"
    }), $("body").bind("cartProductNumChangeEvent", function() {
        var o = "shop_cnum";
        $(".shopcart-num").text(void 0 != $.cookie(o) && "null" != $.cookie(o) && parseInt($.cookie(o)) > 0 && $(".shopcart-num").size() > 0 ? $.cookie(o) : "0")
    }).trigger("cartProductNumChangeEvent")
});