var LoginConfirm = {
    isLogin: function() {
        var o = !1;
        return $.ajax({
            async: !1,
            url: webCtx + "/member/islogin",
            data: {},
            type: "POST",
            success: function(n) {
                1 == n.logined && (o = !0)
            }
        }), o
    },
    redirect: function(o) {
        (void 0 == o || "" == o || null == o) && (o = window.location.href), window.location.href = passportLoginUrlPrefix + encodeURIComponent(window.location.protocol + "//" + window.location.host + webCtx + "/passport/callback?uri=" + encodeURIComponent(o))
    }
};