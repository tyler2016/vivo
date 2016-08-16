var fetchRemarkHtml;
$(function() {
    function t(t, e) {
        return $.get(webCtx + "/product/getInstallmentDataDetail", {
            spuId: t,
            money: e
        }, function(t) {
            if (200 == t.retCode) {
                var e = t.installmentInfoData;
                a(e)
            }
        }), null
    }

    function a(t) {
        $("#min-perpay").empty().html("<dfn>&yen;</dfn>" + t.minPerPayInfo + "期");
        var a = $("#installment-tbd");
        a.empty();
        var e = t.perInstallmentInfoList;
        $.each(e, function(t, e) {
            var n = $('<tr><td class="red"><dfn>&yen;</dfn>' + e.perPay + "</td> <td>" + e.num + "期</td> <td>共计约<dfn>&yen;</dfn>" + e.totalPay + " 含" + 100 * e.userRate + "%手续费</td></tr>");
            a.append(n)
        })
    }

    function e() {
        if (null != f && f.length > 0) {
            var a = $("#add-num").val(),
                e = parseFloat($("#salePrice").val()) * a;
            $(".service-tags>li.on").each(function() {
                var t = parseFloat($(this).attr("svc-price")) * a;
                e += t
            }), t(v, parseFloat(e)), $("#installment_dt,#j_installment").show()
        }
    }

    function n() {
        var t = !0;
        return $.ajax({
            async: !1,
            type: "GET",
            url: webCtx + "/product/isAllowedSell",
            data: $.param({
                skuId: $("li.sub-sku.on").attr("sku-id"),
                num: $("#add-num").val()
            }, !0),
            success: function(a) {
                200 != a.retCode ? (m.show().find("span").html(a.retMsg), t = !1) : m.hide()
            },
            error: function() {
                m.show().find("span").html("系统繁忙，请稍后重试。"), t = !1
            }
        }), t
    }
    var s = $(".prod-container"),
        i = (s.find("#j_SpecImgs ul li"), s.find("#j_SpecItems ul li"), $(".prod-main-info")),
        o = i.find(".prod-tab-box ul li"),
        r = i.find(".prod-main-box"),
        l = 0,
        c = i.offset().top,
        d = i.find(".prod-main-tab"),
        u = d.find(".thumb-goods"),
        p = d.find("button"),
        m = ($("#j_PackageContainer"), $("#j_PkgBox"), $("#error-msg")),
        f = [],
        v = $("#spuId").val();
    ! function() {
        $(".color-box>li.on").size() < 1 && $(".color-box>li:first").addClass("on"), $.get(webCtx + "/product/loadCommodityInstallmentInfo", {
            spuId: v
        }, function(t) {
            200 == t.retCode && (f = t.installmentInfos, e())
        }), $.get(webCtx + "/product/getCommodityEvaluation", {
            spuId: v,
            preview: $("#preview").val()
        }, function(t) {
            if (200 == t.retCode) {
                var a = t.commodityEvaluation;
                1 == a.display && a.pcEval.length > 0 && ($(".tab-evaluation").show(), $(".prod-main-evaluation>div.section").html(a.pcEval))
            }
        }), $.ajax({
            type: "GET",
            dataType: "json",
            url: webCtx + "/favorite/count",
            data: {
                spuId: $("#spuId").val(),
                goodsType: 0
            },
            success: function(t) {
                200 == t.retCode && $("#favCount").text(t.retMsg)
            }
        }), $.ajax({
            type: "POST",
            dataType: "json",
            url: webCtx + "/product/countRemark",
            data: {
                spuId: $("#spuId").val()
            },
            success: function(t) {
                $("#remarkCountSpan").text(" ( " + t.remarkCount + " ) ")
            }
        });
        var t = $("#j_CollectTrigger").parent();
        $.ajax({
            type: "GET",
            dataType: "json",
            url: webCtx + "/favorite/isMemberFavorite",
            data: {
                goodsId: $(".color-box>li.on:first").attr("sku-id"),
                goodsType: 0
            },
            success: function(a) {
                200 == a.retCode ? t.hasClass("collect") && t.removeClass("collect").addClass("collected") : t.hasClass("collected") && t.removeClass("collected").addClass("collect")
            },
            error: function() {
                t.hasClass("collected") && t.removeClass("collected").addClass("collect")
            }
        }), $("#j_CollectTrigger").parent().on("click", function() {
            if (!LoginConfirm.isLogin()) return void LoginConfirm.redirect();
            var t = $(this);
            return t.hasClass("collected") ? ($.ajax({
                data: {
                    goodsId: $(".color-box>li.on:first").attr("sku-id"),
                    goodsType: 0
                },
                type: "POST",
                dataType: "json",
                url: webCtx + "/my/favorite/remove",
                success: function(a) {
                    200 == a.retCode ? ($("#favCount").text(parseInt($("#favCount").text()) - 1), t.addClass("collect").removeClass("collected")) : 500 == a.retCode && g("失败", "您已经取消收藏过此商品，请刷新重试！", "warning")
                }
            }), !1) : void $.ajax({
                data: {
                    goodsId: $(".color-box>li.on:first").attr("sku-id"),
                    goodsType: 0
                },
                type: "POST",
                dataType: "json",
                url: webCtx + "/my/favorite/add",
                success: function(a) {
                    200 == a.retCode ? (t.removeClass("collect").addClass("collected"), $("#favCount").text(parseInt($("#favCount").text()) + 1)) : g("失败", "您已经收藏过此商品，请刷新重试！", "warning")
                },
                error: function() {
                    LoginConfirm.redirect()
                }
            })
        })
    }(),
    function() {
        function t() {
            $("#j_SpecItems").on("mouseenter", "li", function() {
                return $(this).hasClass("current") ? !1 : ($(this).addClass("current").siblings().removeClass("current"), $("#j_smallPic").length && ($("#j_smallPic")[0].src = $(this).children("a").children("img")[0].src), $("#j_SpecImgs li").eq($(this).index()).css({
                    display: "block",
                    opacity: 0,
                    zIndex: 9
                }).stop().animate({
                    opacity: 1
                }, 800).siblings().css({
                    zIndex: 1
                }).stop().animate({
                    opacity: 0
                }, 500, function() {
                    $(this).css({
                        display: "none"
                    })
                }), !1)
            }), $("#j_SpecItems li").first().trigger("mouseenter")
        }
        t(), $("li.sub-sku").on("click", function() {
            var a = $(this).attr("sku-id"),
                e = $("#bigImgUl"),
                n = $("#smallImgUl");
            e.empty(), n.empty(), m.find("span").empty(), $.each(skuImageJson, function(t, s) {
                if (a == s.skuId) {
                    var i = $('<li><img src="' + imgHost + s.bigPic + '" alt="商品图片" /></li>');
                    e.append(i);
                    var o = $('<li><a href="#" ><img src="' + imgHost + s.smallPic + '" /></a></li>');
                    n.append(o)
                }
            }), t();
            var s = $(this).attr("sku-store"),
                i = $("#j_colors").attr("marketable"),
                o = $(this).attr("sku-fullpay"),
                r = $(this).parent().attr("spuInstallment"),
                l = "btn-confirm add-cart",
                c = "加入购物车";
            "0" == i ? (l = "btn-disabled", c = "商品已下架") : 0 == parseInt(s) ? (l = "btn-disabled", c = "商品暂时缺货") : "1" == o ? (l = "btn-appointment payall-order", c = "全款预定") : "1" == r && (l = "btn-confirm now-buy", c = "立即购买"), $(".btn-next").removeClass().addClass("btn-next " + l).attr("title", c).text(c);
            var d = $("#j_CollectTrigger").parent();
            $.ajax({
                type: "GET",
                dataType: "json",
                url: webCtx + "/favorite/isMemberFavorite",
                data: {
                    goodsId: a,
                    goodsType: 0
                },
                success: function(t) {
                    200 == t.retCode ? d.hasClass("collect") && d.removeClass("collect").addClass("collected") : d.hasClass("collected") && d.removeClass("collected").addClass("collect")
                },
                error: function() {
                    d.hasClass("collected") && d.removeClass("collected").addClass("collect")
                }
            })
        })
    }(), $("#J_Share").hover(function() {
        $(this).find(".share-box").fadeIn()
    }, function() {
        $(this).find(".share-box").fadeOut()
    }), o.on({
        click: function() {
            return $(this).hasClass("current") ? !1 : ($(this).addClass("current").siblings().removeClass("current"), l >= c && $("body,html").animate({
                scrollTop: i.offset().top
            }, 1), r.find(".prod-main-" + $(this).attr("v")).css({
                display: "block"
            }).siblings().css({
                display: "none"
            }), !1)
        }
    }).first().click(), $(window).on({
        scroll: function() {
            l = $(this).scrollTop(), l >= c ? (i.css({
                paddingTop: 51
            }), d.addClass("fixed"), u.show(), p.show()) : (i.css({
                paddingTop: 0
            }), d.removeClass("fixed"), p.hide(), u.hide())
        }
    }).scroll(), p.click(function() {
        return $(this).hasClass("btn-disabled") ? !1 : ($("body,html").stop().animate({
            scrollTop: s.offset().top
        }, 500), $(".add-cart").trigger("click"), $(".payall-order").trigger("click"), $(".now-buy").trigger("click"), !1)
    }), $(".nettype-tags > li,.storage-tags > li,.color-box > li").on("click", function() {
        $(this).addClass("on").siblings().removeClass("on")
    }), $(".service-tags > li[name=broken-svc]").on("click", function() {
        var t = $(this).attr("class");
        $(".service-tags > li[name=broken-svc]").removeClass("on"), $(this).attr("class", t), $(this).toggleClass("on"), e()
    }), $(".service-tags > li[name=delay-svc]").on("click", function() {
        var t = $(this).attr("class");
        $(".service-tags > li[name=delay-svc]").removeClass("on"), $(this).attr("class", t), $(this).toggleClass("on"), e()
    }), fetchRemarkHtml = function(t, a) {
        var e = $("#remarkHandler").attr("prodId"),
            n = $("#onlyPicChecked").size() > 0 ? $("#onlyPicChecked").hasClass("current") : !1,
            s = $(".prod-main-evaluate").empty();
        window.scrollTo(0, $(".prod-main-info:first").position().top), $.get(webCtx + "/product/remark", {
            prodId: e,
            onlyHasPicture: n,
            pageNum: t,
            pageSize: a
        }, function(t) {
            s.empty(), s.append(t), C()
        })
    }, $("#remarkHandler").click(function() {
        fetchRemarkHtml()
    });
    var g = function(t, a, e, n, s) {
        new Dialog({
            title: t,
            content: a,
            icon: e,
            confirmBtn: !0,
            cancelBtn: n,
            confirmCallback: s
        })
    };
    $("body").on("click", ".btn-evaluator", function() {
        !LoginConfirm.isLogin() && LoginConfirm.redirect();
        var t = $("#spuId").val();
        $.ajax({
            type: "POST",
            dataType: "json",
            url: webCtx + "/my/remark/addRemarkVerify",
            data: {
                prodId: t
            },
            success: function(t) {
                200 == t.retCode ? window.location.href = webCtx + "/my/remark/unRemark-prod" : 700 == t.retCode ? g("失败", t.retMsg, "warning") : 710 == t.retCode ? g("失败", t.retMsg, "warning") : 600 == t.retCode ? LoginConfirm.redirect() : g("失败", "系统错误！", "warning")
            }
        })
    }), $("body").on("click", ".evaluate-toolbar a", function() {
        $(this).hasClass("current") || ($(this).addClass("current").parent().siblings().find("a").removeClass("current"), fetchRemarkHtml())
    });
    var C = function() {
        var t = $(".prod-main-info"),
            a = (t.find(".prod-main-box"), 400);
        $(".evaluate-pic a").unbind().removeClass("current"), $(".evaluate-pic dd").unbind().css({
            display: "none",
            width: 0,
            height: 0
        }), $(".evaluate-pic").each(function(t, e) {
            var n = $(e).find("dt a"),
                s = $(e).find("dd");
            n.on("click", function() {
                var t = $(this);
                if ($(this).hasClass("current")) return s.stop().animate({
                    width: 0,
                    height: 0
                }, 300, function() {
                    $(this).css({
                        display: "none"
                    })
                }), $(this).removeClass("current"), !1;
                $(this).addClass("current").siblings().removeClass("current");
                var e = new Image,
                    n = w = h = 0;
                $(e).load(function() {
                    s.find("img").size() <= 0 && s.html("<img>"), e.width && (e.width > e.height ? (w = e.width > a ? a : e.width, h = w * e.height / e.width) : (h = e.height > a ? a : e.height, w = h * e.width / e.height), s.css({
                        display: "block"
                    }).stop().animate({
                        width: w,
                        height: h
                    }, 300).children("img").attr({
                        src: t.attr("data-img")
                    }).animate({
                        width: w - 2,
                        height: h - 2
                    }, 300))
                }).error(function() {
                    n++, $(e).load(), n > 3
                }), e.src = t.attr("data-img");
                var i = setInterval(function() {
                    e.width ? clearInterval(i) : $(e).load()
                }, 1);
                return !1
            }), s.click(function() {
                return $(this).stop().animate({
                    width: 0,
                    height: 0
                }, 300, function() {
                    $(this).css({
                        display: "none"
                    })
                }), n.removeClass("current"), !1
            })
        })
    }, b = function() {
            return !0
        };
    $("body").on("click", ".payall-order", function() {
        if (n()) {
            var t = $("li.sub-sku.on").attr("sku-id"),
                a = $("#add-num").val(),
                e = [];
            $(".service-tags>li.on").each(function() {
                e.push(parseInt($(this).attr("sku-id")))
            }), window.location = webCtx + "/order/quick/confirm?skuId=" + t + "&num=" + a + "&sSkuIds=" + e
        }
    }), $("body").on("click", ".add-cart", function() {
        if ($(this).hasClass("btn-disabled")) return !1;
        if (b()) {
            var t = [];
            $(".service-tags>li.on").each(function() {
                t.push(parseInt($(this).attr("sku-id")))
            });
            var a = $("#add-num").val();
            isNaN(a) && (a = 1), a = a > 3 ? 3 : a, a = 1 > a ? 1 : a, $.ajax({
                type: "POST",
                url: webCtx + "/shoppingcart/skuAdd",
                data: $.param({
                    skuId: $("li.sub-sku.on").attr("sku-id"),
                    num: a,
                    sSkuIds: t
                }, !0),
                success: function(t) {
                    200 != t.retCode ? m.show().find("span").html(t.retMsg) : (m.hide(), window.location = webCtx + "/shoppingcart/")
                },
                error: function() {
                    m.show().find("span").html("网络异常，请刷新页面后重试")
                }
            })
        }
    }), $("body").on("click", ".now-buy", function() {
        if (n()) {
            var t = $("li.sub-sku.on").attr("sku-id"),
                a = $("#add-num").val(),
                e = [];
            $(".service-tags>li.on").each(function() {
                e.push(parseInt($(this).attr("sku-id")))
            }), window.location = webCtx + "/order/quick/confirm?skuId=" + t + "&num=" + a + "&sSkuIds=" + e
        }
    }), $("li[name=netTypeLi]").unbind().bind("click", function() {
        var t = $(this),
            a = $("#netType").val(),
            e = ($("#storage").val(), t.attr("netType"));
        a != e && ($("#netType").val(e), $("#queryFlag").val(1), $("#prod-detail-form").attr("action", webCtx + "/product/querySpuIdByParams"), $("#prod-detail-form").submit())
    }), $("li[name=storageLi]").unbind().bind("click", function() {
        var t = $(this),
            a = ($("#netType").val(), $("#storage").val()),
            e = t.attr("storage");
        a != e && ($("#storage").val(e), $("#queryFlag").val(2), $("#prod-detail-form").attr("action", webCtx + "/product/querySpuIdByParams"), $("#prod-detail-form").submit())
    }), $("#inc").click(function() {
        var t = $("#add-num").val();
        return 3 == t ? void y.flash() : ($("#add-num").val(parseInt(t) + 1), void e())
    }), $("#dec").click(function() {
        var t = $("#add-num").val();
        1 != t && ($("#add-num").val(parseInt(t) - 1), e())
    }), $("#add-num").on({
        click: function() {
            this.select()
        },
        blur: function() {
            var t = $(this).val();
            isNaN(parseInt(t)) || parseInt(t) > 3 || parseInt(t) < 1 ? ($(this).val("1"), isNaN(parseInt(t) && parseInt(t) > 3) || y.flash()) : $(this).val(parseInt(t))
        },
        keyup: function(t) {
            var a = t.keyCode ? t.keyCode : t.which;
            if (13 == a) {
                var e = $(this).val();
                parseInt(e) > 0 ? $(".add-cart").trigger("click") : $(this).val("1")
            }
        }
    });
    var y = {
        flash: function() {
            var t = 0,
                a = setInterval(function() {
                    return 5 == t ? (clearInterval(a), void($("#order-num-msg").hasClass("red") && $("#order-num-msg").toggleClass("red"))) : ($("#order-num-msg").toggleClass("red"), void t++)
                }, 300)
        }
    };
    $("#J_Share a").each(function() {
        var t = $(this).attr("href");
        $(this).attr("href", encodeURI(t))
    }), $("#j_installment .btn-show-more").on("mouseenter", function() {
        $("#j_installment").find(".installment-popup").fadeIn()
    }), $("#j_installment .installment-popup").on("mouseleave", function() {
        $("#j_installment").find(".installment-popup").hide()
    }), $("#j_installment .installment-popup .icon-close").on("click", function() {
        $(this).parent().fadeOut()
    }), $("body").on("click", ".pagination .j_go_ajax", function() {
        var t = ($(this).attr("data-url"), $(this).attr("data-total")),
            a = $(this).attr("pageSize"),
            e = $(this).parent().find("input").val();
        e && /^\d+$/.test(e) && parseInt(e) <= t && fetchRemarkHtml(e, a)
    })
});