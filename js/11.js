$(function() {
    var t = {
        init: function() {
            var t = this;
            t.initEvent()
        },
        initEvent: function() {
            var t = this;
            $(".j_selectOrder").off("click").on("click", function() {
                var n = $("#j_sortOrder").val(),
                    i = $(this).attr("data-sortBy");
                "" != i ? $("#j_sortBy").val() == i ? $("#j_sortOrder").val("asc" == n ? "desc" : "asc") : $("#j_sortBy").val(i) : ($("#j_sortOrder").val("asc"), $("#j_sortBy").val(i)), t.refresh()
            }), $(".j_selectClassify").off("click").on("click", function() {
                $("#j_classify").val($(this).attr("data-classify")), t.refresh()
            }), $("#j_vcoinEnough").off("click").on("click", function() {
                var n = $(this).find(".j_vcoinEnoughCheckBox").hasClass("checked");
                $("#j_needCheckVcoin").val(n ? !1 : !0), t.refresh()
            })
        },
        refresh: function() {
            var t = this;
            window.location.href = webCtx + "/vcoins?" + t.getParams()
        },
        getParams: function() {
            var t = [];
            return $("#content").find("input[type=hidden].j_queryParam").each(function() {
                var n = this.name,
                    i = $(this).val();
                i && t.push(n + "=" + encodeURI(i))
            }), t.join("&")
        }
    };
    t.init()
});