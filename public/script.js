window._wpemojiSettings = {
  baseUrl: "https://s.w.org/images/core/emoji/14.0.0/72x72/",
  ext: ".png",
  svgUrl: "https://s.w.org/images/core/emoji/14.0.0/svg/",
  svgExt: ".svg",
  source: {
    concatemoji:
      "https://klbtheme.com/harrier/wp-includes/js/wp-emoji-release.min.js?ver=6.1.7",
  },
};
/*! This file is auto-generated */
!(function (e, a, t) {
  var n,
    r,
    o,
    i = a.createElement("canvas"),
    p = i.getContext && i.getContext("2d");
  function s(e, t) {
    var a = String.fromCharCode,
      e =
        (p.clearRect(0, 0, i.width, i.height),
        p.fillText(a.apply(this, e), 0, 0),
        i.toDataURL());
    return (
      p.clearRect(0, 0, i.width, i.height),
      p.fillText(a.apply(this, t), 0, 0),
      e === i.toDataURL()
    );
  }
  function c(e) {
    var t = a.createElement("script");
    (t.src = e),
      (t.defer = t.type = "text/javascript"),
      a.getElementsByTagName("head")[0].appendChild(t);
  }
  for (
    o = Array("flag", "emoji"),
      t.supports = {
        everything: !0,
        everythingExceptFlag: !0,
      },
      r = 0;
    r < o.length;
    r++
  )
    (t.supports[o[r]] = (function (e) {
      if (p && p.fillText)
        switch (((p.textBaseline = "top"), (p.font = "600 32px Arial"), e)) {
          case "flag":
            return s(
              [127987, 65039, 8205, 9895, 65039],
              [127987, 65039, 8203, 9895, 65039]
            )
              ? !1
              : !s(
                  [55356, 56826, 55356, 56819],
                  [55356, 56826, 8203, 55356, 56819]
                ) &&
                  !s(
                    [
                      55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421,
                      56128, 56430, 56128, 56423, 56128, 56447,
                    ],
                    [
                      55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418,
                      8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128,
                      56423, 8203, 56128, 56447,
                    ]
                  );
          case "emoji":
            return !s(
              [129777, 127995, 8205, 129778, 127999],
              [129777, 127995, 8203, 129778, 127999]
            );
        }
      return !1;
    })(o[r])),
      (t.supports.everything = t.supports.everything && t.supports[o[r]]),
      "flag" !== o[r] &&
        (t.supports.everythingExceptFlag =
          t.supports.everythingExceptFlag && t.supports[o[r]]);
  (t.supports.everythingExceptFlag =
    t.supports.everythingExceptFlag && !t.supports.flag),
    (t.DOMReady = !1),
    (t.readyCallback = function () {
      t.DOMReady = !0;
    }),
    t.supports.everything ||
      ((n = function () {
        t.readyCallback();
      }),
      a.addEventListener
        ? (a.addEventListener("DOMContentLoaded", n, !1),
          e.addEventListener("load", n, !1))
        : (e.attachEvent("onload", n),
          a.attachEvent("onreadystatechange", function () {
            "complete" === a.readyState && t.readyCallback();
          })),
      (e = t.source || {}).concatemoji
        ? c(e.concatemoji)
        : e.wpemoji && e.twemoji && (c(e.twemoji), c(e.wpemoji)));
})(window, document, window._wpemojiSettings);
/* <![CDATA[ */
var wc_add_to_cart_params = {
  ajax_url: "/harrier/wp-admin/admin-ajax.php",
  wc_ajax_url: "/harrier/?wc-ajax=%%endpoint%%",
  i18n_view_cart: "View cart",
  cart_url: "https://klbtheme.com/harrier/cart/",
  is_cart: "",
  cart_redirect_after_add: "no",
};
/* ]]> */

function setREVStartSize(e) {
  //window.requestAnimationFrame(function() {
  window.RSIW = window.RSIW === undefined ? window.innerWidth : window.RSIW;
  window.RSIH = window.RSIH === undefined ? window.innerHeight : window.RSIH;
  try {
    var pw = document.getElementById(e.c).parentNode.offsetWidth,
      newh;
    pw =
      pw === 0 || isNaN(pw) || e.l == "fullwidth" || e.layout == "fullwidth"
        ? window.RSIW
        : pw;
    e.tabw = e.tabw === undefined ? 0 : parseInt(e.tabw);
    e.thumbw = e.thumbw === undefined ? 0 : parseInt(e.thumbw);
    e.tabh = e.tabh === undefined ? 0 : parseInt(e.tabh);
    e.thumbh = e.thumbh === undefined ? 0 : parseInt(e.thumbh);
    e.tabhide = e.tabhide === undefined ? 0 : parseInt(e.tabhide);
    e.thumbhide = e.thumbhide === undefined ? 0 : parseInt(e.thumbhide);
    e.mh =
      e.mh === undefined || e.mh == "" || e.mh === "auto"
        ? 0
        : parseInt(e.mh, 0);
    if (e.layout === "fullscreen" || e.l === "fullscreen")
      newh = Math.max(e.mh, window.RSIH);
    else {
      e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
      for (var i in e.rl)
        if (e.gw[i] === undefined || e.gw[i] === 0) e.gw[i] = e.gw[i - 1];
      e.gh =
        e.el === undefined ||
        e.el === "" ||
        (Array.isArray(e.el) && e.el.length == 0)
          ? e.gh
          : e.el;
      e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
      for (var i in e.rl)
        if (e.gh[i] === undefined || e.gh[i] === 0) e.gh[i] = e.gh[i - 1];

      var nl = new Array(e.rl.length),
        ix = 0,
        sl;
      e.tabw = e.tabhide >= pw ? 0 : e.tabw;
      e.thumbw = e.thumbhide >= pw ? 0 : e.thumbw;
      e.tabh = e.tabhide >= pw ? 0 : e.tabh;
      e.thumbh = e.thumbhide >= pw ? 0 : e.thumbh;
      for (var i in e.rl) nl[i] = e.rl[i] < window.RSIW ? 0 : e.rl[i];
      sl = nl[0];
      for (var i in nl)
        if (sl > nl[i] && nl[i] > 0) {
          sl = nl[i];
          ix = i;
        }
      var m =
        pw > e.gw[ix] + e.tabw + e.thumbw
          ? 1
          : (pw - (e.tabw + e.thumbw)) / e.gw[ix];
      newh = e.gh[ix] * m + (e.tabh + e.thumbh);
    }
    var el = document.getElementById(e.c);
    if (el !== null && el) el.style.height = newh + "px";
    el = document.getElementById(e.c + "_wrapper");
    if (el !== null && el) {
      el.style.height = newh + "px";
      el.style.display = "block";
    }
  } catch (e) {
    console.log("Failure at Presize of Slider:" + e);
  }
}
//});
