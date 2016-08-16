! function() {
    var t, n = !1,
        i = function(t, n) {
            this.target = t, n && (this.activityId = n), this.init()
        };
    $.extend(i.prototype, {
        init: function() {
            this._render()
        },
        _render: function() {
            var t = webCtx + "/popup.tpl",
                i = this;
            n ? i._handleEvent(!0) : (n = !0, $.get(t, null, function(t) {
                $(document.body).append(t), i._handleEvent(!1)
            }))
        },
        _handleEvent: function(n) {
            var i = this;
            if ($(i.target).on("click", function() {
                $("#appointmentMobile").val(""), t = i.activityId, $("#j_appointStep1").fadeIn().css("margin-top", -$("#j_appointStep1").height() / 2), VIVO_UI.mask()
            }), !n) {
                $("#j_appointStep1 .icon-close").on("click", function() {
                    $("#j_appointStep1").fadeOut(), VIVO_UI.unmask()
                }), jQuery.validator.addMethod("isMobile", function(t, n) {
                    var i = t.length,
                        e = /^(1[34578][0-9]{9})$/;
                    return this.optional(n) || 11 == i && e.test(t)
                }, "请正确填写手机号码！");
                var e = $(".dialog-form").validate({
                    debug: !0,
                    errorElement: "span",
                    errorClass: "error",
                    focusInvalid: !1,
                    rules: {
                        appointmentMobile: {
                            required: !0,
                            isMobile: !0
                        }
                    },
                    messages: {
                        appointmentMobile: {
                            required: "请输入手机号码！",
                            isMobile: "请正确填写手机号码！"
                        }
                    }
                });
                $("#commit-btn").on("click", function() {
                    if (!e.form()) return void e.focusInvalid();
                    $("#j_appointStep1").fadeOut(), VIVO_UI.unmask();
                    var n = {};
                    n.appointmentMobile = $("input[name='appointmentMobile']").val(), n.activityId = t, $.ajax({
                        url: webCtx + "/activity/zeroYuanAppointment_save",
                        data: n,
                        type: "POST",
                        success: function(t) {
                            new Dialog(200 == t.retCode ? {
                                title: t.retMsg,
                                icon: "success",
                                confirmBtn: !0,
                                confirmCallback: function() {
                                    $("input[name='appointmentMobile']").val("")
                                }
                            } : {
                                title: "预约失败",
                                content: "失败原因：" + t.retMsg,
                                icon: "warning",
                                confirmBtn: !0,
                                confirmCallback: function() {
                                    $("input[name='appointmentMobile']").val("")
                                }
                            })
                        },
                        error: function() {
                            new Dialog({
                                title: "预约失败",
                                content: "请点击重试",
                                icon: "warning",
                                confirmBtn: !0,
                                confirmText: "重新预约",
                                cancelBtn: !1,
                                confirmCallback: null
                            })
                        }
                    })
                })
            }
        }
    }), $.fn.appointment = function(t) {
        $(this).each(function(n, e) {
            var o = t || $(e).attr("activity-id");
            o && new i($(e), o)
        })
    }, $(function() {
        $("[activity-id]").length && $("[activity-id]").appointment()
    })
}();