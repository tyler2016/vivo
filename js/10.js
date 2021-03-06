! function() {
    function n(n) {
        n && $.extend(this, {
            title: "提示信息",
            content: "",
            icon: "",
            isMask: !0,
            confirmBtn: !1,
            cancelBtn: !1,
            confirmText: "确定",
            cancelText: "取消",
            confirmCallback: null,
            cancelCallback: null
        }, n), this.init()
    }
    $.extend(n.prototype, {
        init: function() {
            this.createDialog(), this.show()
        },
        createDialog: function() {
            var n, i = [];
            i.push('<div class="dialog-container"><i class="icon icon-close"></i>'), i.push('<div class="dialog-title">'), this.icon && i.push('<i class="icon icon-' + this.icon + '"></i>'), i.push(this.title + "</div>"), i.push('<div class="dialog-content">'), i.push("<p>" + this.content + "</p>"), this.confirmBtn && i.push('<button class="btn btn-blue">' + this.confirmText + "</button>"), this.cancelBtn && i.push('<button class="btn btn-cancel">' + this.cancelText + "</button>"), i.push("</div></div>"), n = $(i.join("")), $("body").append(n), n.css("margin-top", -n.height() / 2 + "px"), this.$El = n, this.handleEvent()
        },
        handleEvent: function() {
            var n = this;
            n.$El && (n.$El.on("click", ".icon-close", function() {
                n.hide()
            }), n.confirmBtn && n.$El.on("click", ".btn-blue", function() {
                "function" == typeof n.confirmCallback && n.confirmCallback(), n.hide()
            }), n.cancelBtn && n.$El.on("click", ".btn-cancel", function() {
                "function" == typeof n.cancelCallback && n.cancelCallback(), n.hide()
            }))
        },
        show: function() {
            return this.$El && (this.$El.fadeIn(), this.isMask && VIVO_UI.mask()), this
        },
        hide: function() {
            return this.$El && (this.$El.fadeOut(), this.isMask && VIVO_UI.unmask()), this
        }
    }), window.Dialog = n
}();