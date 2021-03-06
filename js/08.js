! function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(t) : e.simpleStorage = t()
}(this, function() {
    "use strict";

    function e() {
        window.localStorage.setItem("__simpleStorageInitTest", "tmpval"), window.localStorage.removeItem("__simpleStorageInitTest"), a(), n(), t(), "addEventListener" in window && window.addEventListener("pageshow", function(e) {
            e.persisted && r()
        }, !1), T = !0
    }

    function t() {
        "addEventListener" in window ? window.addEventListener("storage", r, !1) : document.attachEvent("onstorage", r)
    }

    function r() {
        try {
            a()
        } catch (e) {
            return void(T = !1)
        }
        n()
    }

    function a() {
        var e = localStorage.getItem("simpleStorage");
        try {
            l = JSON.parse(e) || {}
        } catch (t) {
            l = {}
        }
        p = _()
    }

    function i() {
        try {
            localStorage.setItem("simpleStorage", JSON.stringify(l)), p = _()
        } catch (e) {
            return e
        }
        return !0
    }

    function _() {
        var e = localStorage.getItem("simpleStorage");
        return e ? String(e).length : 0
    }

    function n() {
        var e, t, r, a, _, o = 1 / 0,
            s = 0;
        if (clearTimeout(g), l && l.__simpleStorage_meta && l.__simpleStorage_meta.TTL) {
            for (e = +new Date, _ = l.__simpleStorage_meta.TTL.keys || [], a = l.__simpleStorage_meta.TTL.expire || {}, t = 0, r = _.length; r > t; t++) {
                if (!(a[_[t]] <= e)) {
                    a[_[t]] < o && (o = a[_[t]]);
                    break
                }
                s++, delete l[_[t]], delete a[_[t]]
            }
            1 / 0 != o && (g = setTimeout(n, Math.min(o - e, 2147483647))), s && (_.splice(0, s), m(), i())
        }
    }

    function o(e, t) {
        var r, a, i = +new Date,
            _ = !1;
        if (t = Number(t) || 0, 0 !== t) {
            if (!l.hasOwnProperty(e)) return !1;
            if (l.__simpleStorage_meta || (l.__simpleStorage_meta = {}), l.__simpleStorage_meta.TTL || (l.__simpleStorage_meta.TTL = {
                expire: {},
                keys: []
            }), l.__simpleStorage_meta.TTL.expire[e] = i + t, l.__simpleStorage_meta.TTL.expire.hasOwnProperty(e))
                for (r = 0, a = l.__simpleStorage_meta.TTL.keys.length; a > r; r++) l.__simpleStorage_meta.TTL.keys[r] == e && l.__simpleStorage_meta.TTL.keys.splice(r);
            for (r = 0, a = l.__simpleStorage_meta.TTL.keys.length; a > r; r++)
                if (l.__simpleStorage_meta.TTL.expire[l.__simpleStorage_meta.TTL.keys[r]] > i + t) {
                    l.__simpleStorage_meta.TTL.keys.splice(r, 0, e), _ = !0;
                    break
                }
            _ || l.__simpleStorage_meta.TTL.keys.push(e)
        } else if (l && l.__simpleStorage_meta && l.__simpleStorage_meta.TTL) {
            if (l.__simpleStorage_meta.TTL.expire.hasOwnProperty(e))
                for (delete l.__simpleStorage_meta.TTL.expire[e], r = 0, a = l.__simpleStorage_meta.TTL.keys.length; a > r; r++)
                    if (l.__simpleStorage_meta.TTL.keys[r] == e) {
                        l.__simpleStorage_meta.TTL.keys.splice(r, 1);
                        break
                    }
            m()
        }
        return clearTimeout(g), l && l.__simpleStorage_meta && l.__simpleStorage_meta.TTL && l.__simpleStorage_meta.TTL.keys.length && (g = setTimeout(n, Math.min(Math.max(l.__simpleStorage_meta.TTL.expire[l.__simpleStorage_meta.TTL.keys[0]] - i, 0), 2147483647))), !0
    }

    function m() {
        var e, t = !1,
            r = !1;
        if (!l || !l.__simpleStorage_meta) return t;
        l.__simpleStorage_meta.TTL && !l.__simpleStorage_meta.TTL.keys.length && (delete l.__simpleStorage_meta.TTL, t = !0);
        for (e in l.__simpleStorage_meta)
            if (l.__simpleStorage_meta.hasOwnProperty(e)) {
                r = !0;
                break
            }
        return r || (delete l.__simpleStorage_meta, t = !0), t
    }
    var s = "0.1.3",
        l = !1,
        p = 0,
        T = !1,
        g = null;
    try {
        e()
    } catch (S) {}
    return {
        version: s,
        canUse: function() {
            return !!T
        },
        set: function(e, t, r) {
            if ("__simpleStorage_meta" == e) return !1;
            if (!l) return !1;
            if ("undefined" == typeof t) return this.deleteKey(e);
            r = r || {};
            try {
                t = JSON.parse(JSON.stringify(t))
            } catch (a) {
                return a
            }
            return l[e] = t, o(e, r.TTL || 0), i()
        },
        get: function(e) {
            return l ? l.hasOwnProperty(e) && "__simpleStorage_meta" != e && this.getTTL(e) ? l[e] : void 0 : !1
        },
        deleteKey: function(e) {
            return l && e in l ? (delete l[e], o(e, 0), i()) : !1
        },
        setTTL: function(e, t) {
            return l ? (o(e, t), i()) : !1
        },
        getTTL: function(e) {
            var t;
            return l && l.hasOwnProperty(e) ? l.__simpleStorage_meta && l.__simpleStorage_meta.TTL && l.__simpleStorage_meta.TTL.expire && l.__simpleStorage_meta.TTL.expire.hasOwnProperty(e) ? (t = Math.max(l.__simpleStorage_meta.TTL.expire[e] - +new Date || 0, 0), t || !1) : 1 / 0 : !1
        },
        flush: function() {
            if (!l) return !1;
            l = {};
            try {
                return localStorage.removeItem("simpleStorage"), !0
            } catch (e) {
                return e
            }
        },
        index: function() {
            if (!l) return !1;
            var e, t = [];
            for (e in l) l.hasOwnProperty(e) && "__simpleStorage_meta" != e && t.push(e);
            return t
        },
        storageSize: function() {
            return p
        }
    }
});