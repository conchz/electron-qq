!function (e) {
  function o(n) {
    if (t[n])return t[n].exports;
    var r = t[n] = {exports: {}, id: n, loaded: !1};
    return e[n].call(r.exports, r, r.exports, o), r.loaded = !0, r.exports
  }

  var t = {};
  return o.m = e, o.c = t, o.p = "", o(0)
}([function (e, o) {
  "use strict";
  function t() {
    n || s++ > 10 || chrome.devtools.inspectedWindow.eval("!!(window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue)", function (e) {
      e && !n && (clearInterval(r), n = !0, chrome.devtools.panels.create("Vue Devtools", "icons/128.png", "devtools.html", function (e) {
      }))
    })
  }

  var n = !1, r = void 0, s = 0;
  chrome.devtools.network.onNavigated.addListener(t), r = setInterval(t, 1e3), t()
}]);
