$(function() {
    $(this).ready(function() {
        var spuId = parseInt($("#spuId").val()),
            hist = "shop_view_history";
        void 0 == $.cookie(hist) && $.cookie(hist, "", {
            domain: document.domain,
            expires: 3650,
            path: "/"
        });
        var spuIdArray = eval("[" + $.cookie(hist).replace(/-/g, ",") + "]"); - 1 == $.inArray(spuId, spuIdArray) ? spuIdArray.length < 4 ? spuIdArray.push(spuId) : 4 == spuIdArray.length && (spuIdArray.shift(), spuIdArray.push(spuId)) : (spuIdArray.splice($.inArray(spuId, spuIdArray), 1), spuIdArray.push(spuId));
        var spuIdString = spuIdArray.join("-");
        $.cookie(hist, spuIdString, {
            domain: document.domain,
            expires: 3650,
            path: "/"
        })
    })
});